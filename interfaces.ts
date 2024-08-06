export interface addClassDefine {
  loc: string;
  name: string;
}

export interface Manager {
  loc: string;
  main: string;
  add_classes: addClassDefine[];
  exclude_classes: string[];
}

export interface ClassConfig {
  managers: Manager[];
}

export interface GeneralConfig {
  debug: boolean;
  writeLocally: boolean;
  readLocally: boolean;
}

export interface AppConfig {
  general: GeneralConfig;
  class: ClassConfig;
}
