import * as fs from "fs";
import * as prettier from "prettier";
import * as path from "path";

export class CodeFormatter {
  constructor() {}

  // Function to find and load Prettier configuration file
  private loadPrettierConfig() {
    const configFiles = [".prettierrc", ".prettierrc.json", ".prettierrc.yaml", "prettier.config.js"];

    for (const configFile of configFiles) {
      const configPath = path.resolve("./", configFile);
      if (fs.existsSync(configPath)) {
        console.log("I found the configs");
        return prettier.resolveConfig(configPath);
      }
    }

    return undefined;
  }

  async readFileAndFormatMain(filePath: string) {
    fs.readFile(filePath, "utf8", async (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      const prettierConfig = this.loadPrettierConfig();

      const formattedCode = await prettier.format(data, {
        parser: "typescript",
        ...(prettierConfig || {}),
      });

      fs.writeFile(filePath, formattedCode, "utf8", (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`File ${filePath} updated with formatted code.`);
      });
    });
  }
}
