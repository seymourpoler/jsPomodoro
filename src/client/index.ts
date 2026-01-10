import {Service} from "./service";
import {View} from "./view";
import {Presenter} from "./presenter";

const service = new Service();
const view = new View();
new Presenter(view, service);