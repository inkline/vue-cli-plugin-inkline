export interface PluginApi {
    entryFile: string;
    resolve: (entry: string) => string;
    extendPackage: (options: any) => void;
    injectImports: (entry: string, content: string) => void;
    onCreateComplete: (callback: () => void) => void;
}

export interface PluginOptions {
    vue2?: boolean;
    customizable?: boolean;
}
