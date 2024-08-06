import * as fs from "fs";
import { Util } from "./Util";

export class CodeWriter {
  constructor() {}
  writeCode(codePath: string, code: string) {
    fs.writeFile(codePath, code, (err) => {
      if (err) {
        console.error("Error writing to code:", err);
      } else {
        console.log(`Successfully wrote code to ${codePath}`);
      }
    });
  }

  injectCode(codePath: string, injectedCode: string, startClassImportSign: string, endClassImportSign: string) {
    try {
      const fileContent = fs.readFileSync(codePath, "utf8");
      const regex = Util.createRegex(startClassImportSign, endClassImportSign);
      const updatedContent = fileContent.replace(regex, `$1\n${injectedCode}\n$3`);
      fs.writeFileSync(codePath, updatedContent, "utf8");
      console.log("File content updated successfully!");
    } catch (error) {
      console.error("Error reading or writing the file:", error);
    }
  }
}
