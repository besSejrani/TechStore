// GraphQL
import { Resolver, Mutation, Arg } from "type-graphql";
import { CreateProductInput } from "./types/createProductInput";

// Database
import { Product, ProductModel } from "../../../Model/Product";

// Upload
import { GraphQLUpload } from "graphql-upload";
import { Upload } from "../../types/Upload";
import { S3 } from "../../../Class/Aws/S3";

// ========================================================================================================

@Resolver()
export class CreateProductResolver {
  @Mutation(() => Product)
  async createProduct(
    @Arg("picture", () => GraphQLUpload) { createReadStream, filename }: Upload,
    @Arg("input")
    { name, price, description, stock, promotion, status }: CreateProductInput
  ): Promise<Product | null> {
    const product = await ProductModel.findOne({ name });

    if (product) {
      return null;
    }

    const bla = await S3.uploadFile(createReadStream, filename);

    console.log("fhwfoiwehfuewuhfwwehi",bla)

    const newProduct = await new ProductModel({
      name,
      price,
      description,
      stock,
      promotion,
      status,
    });
    await newProduct.save();
    return newProduct;
  }
}
