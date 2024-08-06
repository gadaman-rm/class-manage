import * as fs from "fs";
import { AppConfig } from "./interfaces";

export class ConfigManage {
  constructor() {}
  readConfig(): AppConfig | null {
    try {
      const configPath = "./class-manage-config.json";
      const configFile = fs.readFileSync(configPath, "utf-8");
      return JSON.parse(configFile) as AppConfig;
    } catch (error: any) {
      console.error(`Error reading config file: ${error.message}`);
      return null;
    }
  }
}
