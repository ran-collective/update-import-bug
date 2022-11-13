import { functionA } from "@src/modules/integrationA/serviceA";
import { functionB } from "../modules/integrationB/serviceB";

function controllerA() {
  functionA();
  functionB();
}
