// Configuration
import "dotenv/config";

// AWS
import AWS from "aws-sdk";

// GraphQL
import { Resolver, Mutation, Arg } from "type-graphql";
import { Stream } from "stream";

// Upload
import { GraphQLUpload } from "graphql-upload";
import { Upload } from "../../types/Upload";

// ========================================================================================================

@Resolver()
export class ProfilePictureResolver {
  @Mutation(() => Boolean)
  async addProfilePicture(
    @Arg("picture", () => GraphQLUpload)
    { createReadStream, filename }: Upload
  ): Promise<boolean> {
    // Configuration S3
    const s3 = new AWS.S3({
      accessKeyId: process.env.AMAZON_KEY_ID,
      secretAccessKey: process.env.AMAZON_SECRET_ACCESS_KEY,
      signatureVersion: "v4",
      region: "eu-west-3",
    });

    const uploadFromStream = (s3: any, filename: any) => {
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

      return pass;
    };

    createReadStream().pipe(uploadFromStream(s3, filename));

    return true;
  }
}

// ========================================================================================================
