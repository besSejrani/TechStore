declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    MONGO_ATLAS: string;

    JWT_SECRET: string;
    JWT_EXPIRES_IN: string;

    SENDGRID_API: string;

    REDIS_HOST: string;
    REDIS_PORT: string;
    REDIS_PASSWORD: string;
    REDIS_URL: string;

    GITHUB_CLIENT_ID: string;
    GITHUB_CLIENT_SECRET: string;

    GOOGLE_ID: string;
    GOOGLE_SECRET: string;

    TWITTER_API_KEY: string;
    TWITTER_API_SECRET_KEY: string;
    TWITTER_BEARER_TOKEN: string;

    AMAZON_S3_BUCKET: string;
    AMAZON_KEY_ID: string;
    AMAZON_SECRET_ACCESS_KEY: string;
  }
}
