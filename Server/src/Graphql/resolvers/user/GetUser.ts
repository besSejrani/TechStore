// import { Resolver, Query, Arg } from "type-graphql";
// import { User, UserModel } from "../../../Model/User";

// @Resolver()
// export class UserResolver {
//   @Query(() => User, { nullable: true })
//   async getUser(@Arg("userId", () => String) userId: string): Promise<string> {
//     const user = await UserModel.findById(userId);

//     return user;
//   }
// }
