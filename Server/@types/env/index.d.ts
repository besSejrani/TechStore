declare namespace NodeJS {
  export interface ProcessEnv {
    MONGO_ATLAS: string;
    PORT: string;

    JWT_SECRET: string;
    JWT_EXPIRES_IN: string;

    SENDGRID_API: string;
  }
}
