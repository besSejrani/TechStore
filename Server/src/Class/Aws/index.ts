import { Stream } from "stream";

export namespace ApolloServerFileUploads {
  export type File = {
    filename: string;
    mimetype: string;
    encoding: string;
    createReadStream: () => Stream;
  };

  export type UploadedFileResponse = {
    filename: string;
    mimetype: string;
    encoding: string;
    url: string;
  };

  export interface IUploader {
    singleFileUploadResolver: ({ file }: { file: File }) => Promise<UploadedFileResponse>;
    multipleUploadsResolver: ({ files }: { files: File[] }) => Promise<UploadedFileResponse[]>;
  }
}
