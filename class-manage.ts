import { ConfigManage } from "./ConfigManage";
import { CodeBuilder } from "./CodeBuilder";
import { CodeWriter } from "./CodeWriter";
import { CodeReader } from "./CodeReader";

const configManage = new ConfigManage();
const codeBuilder = new CodeBuilder();
const codeWrite = new CodeWriter();
const codeReader = new CodeReader();

const config = configManage.readConfig();
// if (config) {
//   config.class.managers.forEach((manager) => {
//     console.log(manager);
//     codeWrite.writeCode("./classManage.ts", codeBuilder.makeCode(manager.add_classes));
//   });
// } else {
//   console.error("Failed to load configuration.");
// }

codeReader.listClassInDir("./").then((classList) => {
  console.log(classList);
});
