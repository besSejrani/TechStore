// GraphQL
import { Resolver, Mutation, Arg } from "type-graphql";
// import { CreateProductInput } from "./types/createProductInput";

// Upload
import { GraphQLUpload } from "graphql-upload";
import { createWriteStream } from "fs";
import { Upload } from "../../types/Upload";

// Database
// import { Product, ProductModel } from "../../../Model/Product";

// ========================================================================================================

@Resolver()
export class CreateProductResolver {
  @Mutation(() => Boolean)
  async createProduct(
    @Arg("picture", () => GraphQLUpload)
    { createReadStream, filename }: Upload
  ): Promise<boolean> {
    // @Arg("input") { name, price, description, stock }: CreateProductInput
    // const product = await ProductModel.findOne({ name });

    // if (product) {
    //   return null;
    // }

    return new Promise(async (resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(__dirname + `./images/${filename}`))
        .on("finish", () => resolve(true))
        .on("error", () => reject(false))
    );

    // const newProduct = await new ProductModel({ name, price, description, stock });
    // await newProduct.save();
    // return newProduct;
  }
}
