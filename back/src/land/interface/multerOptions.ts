export interface MulterOptions {
  dest?: string;
  storage?: any;
  limits?: any;
  preservePath?: boolean;
  fileFilter?(
    req: any,
    file: any,
    callback: (error: Error | null, acceptFile: boolean) => void,
  ): void;
}
