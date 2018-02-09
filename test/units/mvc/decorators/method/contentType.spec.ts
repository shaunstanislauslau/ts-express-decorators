import {assert, expect} from "chai";
import * as Sinon from "sinon";
import * as Proxyquire from "proxyquire";
import {FakeResponse} from "../../../../helper/FakeResponse";

const middleware: any = Sinon.stub();
const UseAfter: any = Sinon.stub().returns(middleware);

const {ContentType} = Proxyquire.load("../../../../../src/common/mvc/decorators/method/contentType", {
    "./useAfter": {UseAfter}
});

class Test {

}

describe("ContentType", () => {

    before(() => {
        this.descriptor = {};
        this.options = "application/json";
        ContentType(this.options)(Test, "test", this.descriptor);
        this.middleware = UseAfter.args[0][0];
    });

    after(() => {
        delete this.descriptor;
        delete this.options;
        delete this.middleware;
    });

    it("should create middleware", () => {
        expect(this.middleware).to.be.a("function");
        assert(middleware.calledWith(Test, "test", this.descriptor));
    });

    describe("when middleware is executed", () => {

        before(() => {
            this.nextSpy = Sinon.stub();
            this.response = new FakeResponse();
            Sinon.stub(this.response, "type");

            this.middleware({}, this.response, this.nextSpy);
        });

        after(() => {
            delete this.response;
            delete this.nextSpy;
        });

        it("should call response method", () => {
            assert(this.response.type.calledWith(this.options), "method not called");
        });

        it("should call next function", () => {
            assert(this.nextSpy.called, "function not called");
        });

    });
});