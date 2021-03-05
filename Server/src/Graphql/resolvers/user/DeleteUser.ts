// GraphQL
import { Resolver, Mutation, Arg } from "type-graphql";

// Database
import { UserModel } from "../../../Model/User";

// ========================================================================================================

@Resolver()
export class DeleteUsertResolver {
  @Mutation(() => Boolean)
  async deleteUser(@Arg("userId") userId: string): Promise<boolean> {
    await UserModel.findOneAndRemove({ _id: userId });

    return true;
  }
}
