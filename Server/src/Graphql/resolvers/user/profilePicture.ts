// GraphQL
import { Resolver, Mutation, Arg } from "type-graphql";

// Upload
import { GraphQLUpload } from "graphql-upload";
import { Upload } from "../../types/Upload";
import { UploadFile } from "../../../Aws/uploadFile";

// ========================================================================================================

@Resolver()
export class ProfilePictureResolver {
  @Mutation(() => Boolean)
  async addProfilePicture(
    @Arg("picture", () => GraphQLUpload) { createReadStream, filename }: Upload
  ): Promise<boolean> {
    await UploadFile(createReadStream, filename);

    return true;
  }
}
