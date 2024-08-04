import * as fs from "fs";
import { AppConfig } from "./interfaces";

export class ConfigManage {
  constructor() {}
  readConfig(): AppConfig | null {
    try {
      const configPath = "./config.json"; // Adjust the path as per your project structure
      const configFile = fs.readFileSync(configPath, "utf-8");
      return JSON.parse(configFile) as AppConfig;
    } catch (error: any) {
      console.error(`Error reading config file: ${error.message}`);
      return null;
    }
  }
}