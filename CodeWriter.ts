import * as fs from "fs";

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
}
