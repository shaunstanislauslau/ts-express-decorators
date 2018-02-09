import {JsonProperty} from "../../../../src";
import {Required} from "../../../../src/common/mvc/decorators";
import {Description} from "../../../../src/swagger/decorators/description";
import {Example} from "../../../../src/swagger/decorators/example";
import {Title} from "../../../../src/swagger/decorators/title";

export class Task {
    @JsonProperty()
    public name: string = "";

    @JsonProperty()
    public percent: number;
}

@Title("EventModel Title")
export class EventModel {

    @Title("iD")
    @Description("Description of event model id")
    @Example("1FDCHZKH")
    @JsonProperty()
    public id: string;

    @JsonProperty()
    @Required()
    @Example("example1", "2017-10-15T17:05:58.106Z")
    public startDate: Date;

    @JsonProperty()
    @Required()
    // @Format("date")
    public endDate: Date;

    @JsonProperty("Name")
    @Required()
    public name: string;

    @JsonProperty({use: Task})
    public tasks: Task[];

}

