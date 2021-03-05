// GraphQL
import { Resolver, Mutation, Arg } from "type-graphql";
import { CreateProductInput } from "./types/createProductInput";

// Database
import { Product, ProductModel } from "../../../Model/Product";

// ========================================================================================================

@Resolver()
export class CreateProductResolver {
  @Mutation(() => Product)
  async createProduct(@Arg("input") { name, price, description, stock, promotion, status }: CreateProductInput): Promise<Product | null> {
    const product = await ProductModel.findOne({ name });

    if (product) {
      return null;
    }

    const newProduct = await new ProductModel({ name, price, description, stock, promotion, status });
    await newProduct.save();
    return newProduct;
  }
}

// ========================================================================================================

// // Upload
// import { GraphQLUpload } from "graphql-upload";
// import { createWriteStream } from "fs";
// import { Upload } from "../../types/Upload";

// @Arg("picture", () => GraphQLUpload)

// { createReadStream, filename }: Upload

// return new Promise(async (resolve, reject) =>
//   createReadStream()
//     .pipe(createWriteStream(__dirname + `./images/${filename}`))
//     .on("finish", () => resolve(true))
//     .on("error", () => reject(false))
// );
