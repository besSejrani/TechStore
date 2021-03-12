// Configuration
import "dotenv/config";

// Data
import { Stream } from "stream";

// AWS
import AWS from "aws-sdk";

// ========================================================================================================

export class S3 {
  static uploadFile = (createReadStream: any, filename: any) => {
    // Configuration S3
    const s3: any = new AWS.S3({
      accessKeyId: process.env.AMAZON_KEY_ID,
      secretAccessKey: process.env.AMAZON_SECRET_ACCESS_KEY,
      signatureVersion: "v4",
      region: "eu-west-3",
    });

    const pass = new Stream.PassThrough(s3);

    // Setting up S3 upload parameters
    const params = {
      Bucket: process.env.AMAZON_S3_BUCKET,
      Key: `${filename}`,
      Body: pass,
    };

    
    // Uploading files to the bucket
    s3.upload(params, function (err: any, data: any) {
      if (err) {
        throw err;
      }

      console.log(`File uploaded successfully. ${data.Location}`);
     
    });

    createReadStream().pipe(pass);

  };
}






// const uploadFromStream = (s3: any, filename: any) => {
//   const pass = new Stream.PassThrough(s3);

//   // Setting up S3 upload parameters
//   const params = {
//     Bucket: process.env.AMAZON_S3_BUCKET,
//     Key: `${filename}`,
//     Body: pass,
//   };

//   // Uploading files to the bucket
//   s3.upload(params, function (err: any, data: any) {
//     if (err) {
//       throw err;
//     }

//     console.log(`File uploaded successfully. ${data.Location}`);
//   });

//   return pass;
// };
