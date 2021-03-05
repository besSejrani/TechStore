// GraphQL
import { Resolver, Query } from "type-graphql";

// Database
import { User, UserModel } from "../../../Model/User";

//=======================================================================

@Resolver()
export class UsersResolver {
  @Query(() => [User], { nullable: true })
  async getUsers(): Promise<User[] | null> {
    return await UserModel.find({});
  }
}
