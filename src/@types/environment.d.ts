declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      NODE_ENV: "development" | "production" | "test";
      [key: string]: string | undefined;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
