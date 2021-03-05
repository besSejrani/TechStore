// GraphQL
import { Resolver, Mutation, Arg } from "type-graphql";

// Database
import { ProductModel } from "../../../Model/Product";

// ========================================================================================================

@Resolver()
export class DeleteProductResolver {
  @Mutation(() => Boolean)
  async deleteProduct(@Arg("productId") productId: string): Promise<boolean> {
    await ProductModel.findOneAndRemove({ _id: productId });

    return true;
  }
}
