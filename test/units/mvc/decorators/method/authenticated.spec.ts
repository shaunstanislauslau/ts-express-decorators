import * as Proxyquire from "proxyquire";
import {Store} from "../../../../../src/common/core/class/Store";
import {descriptorOf} from "../../../../../src/common/core/utils";
import {AuthenticatedMiddleware} from "../../../../../src/common/mvc/components/AuthenticatedMiddleware";
import {expect, Sinon} from "../../../../tools";

const middleware: any = Sinon.stub();
const UseBefore: any = Sinon.stub().returns(middleware);

const {Authenticated} = Proxyquire.load("../../../../../src/common/mvc/decorators/method/authenticated", {
    "./useBefore": {UseBefore}
});

class Test {
    test() {

    }
}

describe("Authenticated", () => {

    before(() => {
        this.descriptor = {};
        this.options = {options: "options"};

        Authenticated(this.options)(Test, "test", descriptorOf(Test, "test"));
        this.store = Store.fromMethod(Test, "test");
    });

    after(() => {
        this.store.clear();
    });

    it("should set metadata", () => {
        expect(this.store.get(AuthenticatedMiddleware)).to.deep.eq(this.options);
    });

    it("should set responses metadata", () => {
        expect(this.store.get("responses")).to.deep.eq({"403": {description: "Forbidden"}});
    });

    it("should create middleware", () => {
        UseBefore.should.be.calledWithExactly(AuthenticatedMiddleware);
        middleware.should.be.calledWithExactly(Test, "test", descriptorOf(Test, "test"));
    });

});