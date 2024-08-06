import { addClassDefine } from "./interfaces";

export class CodeBuilder {
  private processTemplate(template: string, list: addClassDefine[], seperator: string): string {
    return list
      .map((ele) => {
        const upperName = ele.name.charAt(0).toUpperCase() + ele.name.slice(1);
        const lowerName = ele.name.charAt(0).toLowerCase() + ele.name.slice(1);

        return template
          .replace(/{\^instead}/g, upperName)
          .replace(/{instead}/g, lowerName)
          .replace(/{<}/g, ele.loc);
      })
      .join(seperator);
  }
  makeClassManageCode(classlist: addClassDefine[]) {
    let codeArr: string[] = [];
    codeArr.push(`import { EventCallback, EventEmitter } from "../EventEmitter";`);
    //Import Templates
    const importTempelate = `import { {^instead} } from "{<}{^instead}";`;
    const importModules = this.processTemplate(importTempelate, classlist, "\n");
    codeArr.push(importModules);
    codeArr.push("type ClassManageEvents =");
    const eventDefineTempelate = `| "{instead}Changed"`;
    const eventDefines = this.processTemplate(eventDefineTempelate, classlist, "\n");
    codeArr.push(eventDefines + ";");
    codeArr.push("export class ClassManage {");
    codeArr.push("private eventEmitter: EventEmitter<ClassManageEvents>;");
    const privateaddClassDefineTempelate = "private {instead}: {^instead} | undefined;";
    const privateaddClassDefines = this.processTemplate(privateaddClassDefineTempelate, classlist, "\n");
    codeArr.push(privateaddClassDefines + ";");
    codeArr.push(`  constructor() {
          this.eventEmitter = new EventEmitter<ClassManageEvents>();
        }
      
        on(event: ClassManageEvents, callback: EventCallback) {
          this.eventEmitter.on(event, callback);
        }
      `);
    const setGetClasseFunctionTempelate = `  
      set{^instead}({instead}: {^instead}) {
          this.{instead} = {instead};
          this.eventEmitter.emit("{instead}Changed");
        }
      
        get{^instead}(): {^instead} | undefined {
          return this.{instead};
        }`;

    const setGetClasseFunctions = this.processTemplate(setGetClasseFunctionTempelate, classlist, "\n");
    codeArr.push(setGetClasseFunctions);
    codeArr.push("}"); //class end

    return codeArr.join("\n");
  }
  makeInjectedDefieClass(classlist: addClassDefine[]) {
    let codeArr: string[] = [];
    codeArr.push("let classManage= new ClassManage();");
    const defineTempelate = `let {instead}: {^instead};`;
    const defineModules = this.processTemplate(defineTempelate, classlist, "\n");
    codeArr.push(defineModules);
    return codeArr.join("\n");
  }

  makeInjectedSetClass(classlist: addClassDefine[]) {
    let codeArr: string[] = [];
    const defineTempelate = `classManage.set{^instead}({instead});`;
    const defineModules = this.processTemplate(defineTempelate, classlist, "\n");
    codeArr.push(defineModules);
    return codeArr.join("\n");
  }
}
