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
    @Arg("picture", () => GraphQLUpload) File: Upload,
    @Arg("input")
    { name, price, description, stock, promotion, status }: CreateProductInput
  ): Promise<Product | null> {
    const product = await ProductModel.findOne({ name });

    if (product) {
      return null;
    }

    const s3 = await new S3({
      accessKeyId: process.env.AMAZON_KEY_ID,
      secretAccessKey: process.env.AMAZON_SECRET_ACCESS_KEY,
      bucket: process.env.AMAZON_S3_BUCKET,
      signatureVersion: "v4",
      region: "eu-west-3",
    });

    const { url } = await s3.singleFileUploadResolver({ file: File });

    const newProduct = await new ProductModel({
      name,
      price,
      description,
      stock,
      promotion,
      status,
      productImages: url,
    });
    await newProduct.save();
    return newProduct;
  }
}
