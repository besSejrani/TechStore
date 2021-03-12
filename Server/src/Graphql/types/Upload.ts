import { Stream } from "stream";

export interface Upload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => Stream;
}

export interface UploadedFileResponse {
  filename: string;
  mimetype: string;
  encoding: string;
  url: string;
}

export interface IUploader {
  singleFileUploadResolver: ({ file }: { file: File }) => Promise<UploadedFileResponse>;
  multipleUploadsResolver: ({ files }: { files: File[] }) => Promise<UploadedFileResponse[]>;
}
