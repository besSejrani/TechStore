// GraphQL
import { Resolver, Query } from "type-graphql";

// Database
import { Product, ProductModel } from "../../../Model/Product";

// ========================================================================================================

@Resolver()
export class GetProductsResolver {
  @Query(() => [Product], { nullable: true })
  async getProducts(): Promise<Product[] | null> {
    return await ProductModel.find({});
  }
}
