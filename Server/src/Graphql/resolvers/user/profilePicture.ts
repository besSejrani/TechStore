// GraphQL
import { Resolver, Mutation, Arg } from "type-graphql";

// Upload
import { GraphQLUpload } from "graphql-upload";
import { Upload } from "../../types/Upload";
// import { S3 } from "../../../Class/Aws/S3";

// ========================================================================================================

@Resolver()
export class ProfilePictureResolver {
  @Mutation(() => Boolean)
  async addProfilePicture(
    @Arg("picture", () => GraphQLUpload) { createReadStream, filename }: Upload
  ): Promise<boolean> {
    // await S3.uploadFile(createReadStream, filename);

    // const { url } = await s3.singleFileUploadResolver({ file: File });

    console.log(createReadStream, filename);

    return true;
  }
}
