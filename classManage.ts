import { EventCallback, EventEmitter } from "../EventEmitter";
import { DeviceDialogManage } from "./DeviceDialogManage";
import { DeviceParamElement } from "./DeviceParamElement";
import { DeviceTabManage } from "./DeviceTabManage";
import { DeviceParamRequest } from "./DeviceParamRequest";
import { DeviceMenuManage } from "./DeviceMenuManage";
import { DeviceBackUp } from "./DeviceBackUp";
import { DeviceSettingDialog } from "./DeviceSettingDialog";
import { DeviceFileManager } from "./DeviceFileManager";
import { DeviceMessageProcess } from "./DeviceMessageProcess";
import { DeviceJsonManage } from "../DeviceJsonManage";
import { DeviceInputProcessManage } from "../DeviceInputProcessManage";
import { FileManager } from "../FileManager";
import { WebSocketClient } from "../WebSocketClient";
type ClassManageEvents =
| "deviceDialogManageChanged"
| "deviceParamElementChanged"
| "deviceTabManageChanged"
| "deviceParamRequestChanged"
| "deviceMenuManageChanged"
| "deviceBackUpChanged"
| "deviceSettingDialogChanged"
| "deviceFileManagerChanged"
| "deviceMessageProcessChanged"
| "deviceJsonManageChanged"
| "deviceInputProcessManageChanged"
| "fileManagerChanged"
| "webSocketClientChanged";
export class DeviceClassManage {
private eventEmitter: EventEmitter<ClassManageEvents>;
private deviceDialogManage: DeviceDialogManage | undefined;
private deviceParamElement: DeviceParamElement | undefined;
private deviceTabManage: DeviceTabManage | undefined;
private deviceParamRequest: DeviceParamRequest | undefined;
private deviceMenuManage: DeviceMenuManage | undefined;
private deviceBackUp: DeviceBackUp | undefined;
private deviceSettingDialog: DeviceSettingDialog | undefined;
private deviceFileManager: DeviceFileManager | undefined;
private deviceMessageProcess: DeviceMessageProcess | undefined;
private deviceJsonManage: DeviceJsonManage | undefined;
private deviceInputProcessManage: DeviceInputProcessManage | undefined;
private fileManager: FileManager | undefined;
private webSocketClient: WebSocketClient | undefined;;
  constructor() {
          this.eventEmitter = new EventEmitter<ClassManageEvents>();
        }
      
        on(event: ClassManageEvents, callback: EventCallback) {
          this.eventEmitter.on(event, callback);
        }
      
  
      setDeviceDialogManage(deviceDialogManage: DeviceDialogManage) {
          this.deviceDialogManage = deviceDialogManage;
          this.eventEmitter.emit("deviceDialogManageChanged");
        }
      
        getDeviceDialogManage(): DeviceDialogManage | undefined {
          return this.deviceDialogManage;
        }
  
      setDeviceParamElement(deviceParamElement: DeviceParamElement) {
          this.deviceParamElement = deviceParamElement;
          this.eventEmitter.emit("deviceParamElementChanged");
        }
      
        getDeviceParamElement(): DeviceParamElement | undefined {
          return this.deviceParamElement;
        }
  
      setDeviceTabManage(deviceTabManage: DeviceTabManage) {
          this.deviceTabManage = deviceTabManage;
          this.eventEmitter.emit("deviceTabManageChanged");
        }
      
        getDeviceTabManage(): DeviceTabManage | undefined {
          return this.deviceTabManage;
        }
  
      setDeviceParamRequest(deviceParamRequest: DeviceParamRequest) {
          this.deviceParamRequest = deviceParamRequest;
          this.eventEmitter.emit("deviceParamRequestChanged");
        }
      
        getDeviceParamRequest(): DeviceParamRequest | undefined {
          return this.deviceParamRequest;
        }
  
      setDeviceMenuManage(deviceMenuManage: DeviceMenuManage) {
          this.deviceMenuManage = deviceMenuManage;
          this.eventEmitter.emit("deviceMenuManageChanged");
        }
      
        getDeviceMenuManage(): DeviceMenuManage | undefined {
          return this.deviceMenuManage;
        }
  
      setDeviceBackUp(deviceBackUp: DeviceBackUp) {
          this.deviceBackUp = deviceBackUp;
          this.eventEmitter.emit("deviceBackUpChanged");
        }
      
        getDeviceBackUp(): DeviceBackUp | undefined {
          return this.deviceBackUp;
        }
  
      setDeviceSettingDialog(deviceSettingDialog: DeviceSettingDialog) {
          this.deviceSettingDialog = deviceSettingDialog;
          this.eventEmitter.emit("deviceSettingDialogChanged");
        }
      
        getDeviceSettingDialog(): DeviceSettingDialog | undefined {
          return this.deviceSettingDialog;
        }
  
      setDeviceFileManager(deviceFileManager: DeviceFileManager) {
          this.deviceFileManager = deviceFileManager;
          this.eventEmitter.emit("deviceFileManagerChanged");
        }
      
        getDeviceFileManager(): DeviceFileManager | undefined {
          return this.deviceFileManager;
        }
  
      setDeviceMessageProcess(deviceMessageProcess: DeviceMessageProcess) {
          this.deviceMessageProcess = deviceMessageProcess;
          this.eventEmitter.emit("deviceMessageProcessChanged");
        }
      
        getDeviceMessageProcess(): DeviceMessageProcess | undefined {
          return this.deviceMessageProcess;
        }
  
      setDeviceJsonManage(deviceJsonManage: DeviceJsonManage) {
          this.deviceJsonManage = deviceJsonManage;
          this.eventEmitter.emit("deviceJsonManageChanged");
        }
      
        getDeviceJsonManage(): DeviceJsonManage | undefined {
          return this.deviceJsonManage;
        }
  
      setDeviceInputProcessManage(deviceInputProcessManage: DeviceInputProcessManage) {
          this.deviceInputProcessManage = deviceInputProcessManage;
          this.eventEmitter.emit("deviceInputProcessManageChanged");
        }
      
        getDeviceInputProcessManage(): DeviceInputProcessManage | undefined {
          return this.deviceInputProcessManage;
        }
  
      setFileManager(fileManager: FileManager) {
          this.fileManager = fileManager;
          this.eventEmitter.emit("fileManagerChanged");
        }
      
        getFileManager(): FileManager | undefined {
          return this.fileManager;
        }
  
      setWebSocketClient(webSocketClient: WebSocketClient) {
          this.webSocketClient = webSocketClient;
          this.eventEmitter.emit("webSocketClientChanged");
        }
      
        getWebSocketClient(): WebSocketClient | undefined {
          return this.webSocketClient;
        }
}