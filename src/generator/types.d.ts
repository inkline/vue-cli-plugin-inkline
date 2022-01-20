export interface PluginAPI {
    entryFile: string;
    extendPackage(config: any): void;
    injectImports(file: string, config: any): void;
    resolve(file: string): string;
    onCreateComplete(callback: () => void): void;
}
