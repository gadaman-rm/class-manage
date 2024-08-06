export class Util {
  public static isFirstLetterUpperCase(str: string): boolean {
    return /^[A-Z]/.test(str);
  }
  public static hasExtension(fileName: string): boolean {
    return fileName.indexOf(".") !== -1 && fileName.lastIndexOf(".") > fileName.lastIndexOf("/");
  }
  public static getFileNameAndExtension(fileName: string): { name: string; extension: string | null } {
    const lastDotIndex = fileName.lastIndexOf(".");
    if (lastDotIndex === -1 || lastDotIndex === 0 || lastDotIndex === fileName.length - 1) {
      return { name: fileName, extension: null };
    } else {
      const name = fileName.substring(0, lastDotIndex);
      const extension = fileName.substring(lastDotIndex + 1);
      return { name, extension };
    }
  }

  public static removeELementFromArray<tempelate>(inArr: tempelate[], removeIndex: number) {
    return [...inArr.slice(0, removeIndex), ...inArr.slice(removeIndex + 1)];
  }

  public static createRegex(startClassImport: string, endClassImport: string): RegExp {
    const escapedStart = startClassImport.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // Escape special characters
    const escapedEnd = endClassImport.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // Escape special characters
    return new RegExp(`(${escapedStart})([\\s\\S]*?)(${escapedEnd})`);
  }
}
