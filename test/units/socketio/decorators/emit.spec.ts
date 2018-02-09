import {Store} from "../../../../src/common/core/class/Store";
import {Emit} from "../../../../src/socketio";
import {expect} from "../../../tools";


describe("Emit", () => {

    class Test {
    }

    before(() => {
        Emit("eventName")(Test, "test", {} as any);
        this.store = Store.from(Test);
    });

    it("should set metadata", () => {
        expect(this.store.get("socketIO")).to.deep.eq({
            "handlers": {
                "test": {
                    returns: {
                        eventName: "eventName",
                        type: "emit"
                    }
                }
            }
        });
    });
});