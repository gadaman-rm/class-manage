import { promises as fs } from 'fs';
import { Util } from './Util'; // assuming Util is in a separate file named Util.ts

export class CodeReader {
  constructor() {}

  async listClassInDir(classDir: string): Promise<string[]> {
    let classList: string[] = [];
    try {
      const files = await fs.readdir(classDir);
      files.forEach((file) => {
        let check = true;
        let fileDetail = Util.getFileNameAndExtension(file);
        console.log(fileDetail);
        if (!Util.isFirstLetterUpperCase(fileDetail.name)) check = false;
        if (fileDetail.extension !== "ts") check = false;
        if (check) classList.push(file);
      });
    } catch (err) {
      console.error("Error reading directory:", err);
    }
    console.log("Finish");
    return classList;
  }
}
