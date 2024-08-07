import { ConfigManage } from "./ConfigManage";
import { CodeBuilder } from "./CodeBuilder";
import { CodeWriter } from "./CodeWriter";
import { CodeReader } from "./CodeReader";
import { Util } from "./Util";
import { addClassDefine } from "./interfaces";
import { CodeFormatter } from "./CodeFormatter";

const configManage = new ConfigManage();
const codeBuilder = new CodeBuilder();
const codeWrite = new CodeWriter();
const codeReader = new CodeReader();
const codeFormatter = new CodeFormatter();

async function makeClassManage() {
  const config = configManage.readConfig();
  if (config) {
    config.class.managers.forEach(async (manager) => {
      let classFilesLocaList = await codeReader.listClassInDir(manager.loc);
      let classFilesLocalObjArr: addClassDefine[] = classFilesLocaList.map((localClass) => {
        return {
          loc: "./",
          name: Util.getFileNameAndExtension(localClass).name,
        };
      });
      let removeClassNameArr: string[] = [
        Util.getFileNameAndExtension(manager.main).name,
        "ClassManage",
        ...manager.exclude_classes,
      ];
      let allClassList = [...classFilesLocalObjArr, ...manager.add_classes];
      for (let classElementIndex = allClassList.length - 1; classElementIndex >= 0; classElementIndex--) {
        const classElement = allClassList[classElementIndex];
        if (removeClassNameArr.indexOf(classElement.name) != -1) {
          allClassList = Util.removeELementFromArray<addClassDefine>(allClassList, classElementIndex);
        }
      }
      codeWrite.injectCode(
        `${manager.loc}/${manager.main}`,
        codeBuilder.makeInjectedDefieClass(allClassList),
        "//$START_CLASS_DEFINE",
        "//$END_CLASS_DEFINE",
      );

      codeWrite.injectCode(
        `${manager.loc}/${manager.main}`,
        codeBuilder.makeInjectedSetClass(allClassList),
        "//$START_CLASS_SET",
        "//$END_CLASS_SET",
      );
      codeWrite.writeCode(`${manager.loc}/ClassManage.ts`, codeBuilder.makeClassManageCode(allClassList));

      codeFormatter.readFileAndFormatMain(`${manager.loc}/${manager.main}`);
      codeFormatter.readFileAndFormatMain(`${manager.loc}/ClassManage.ts`);
    });
  } else {
    console.error("Failed to load configuration.");
  }
}

makeClassManage();
