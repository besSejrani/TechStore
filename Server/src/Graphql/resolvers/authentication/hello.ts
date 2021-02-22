import { Resolver, Query } from "type-graphql";

@Resolver()
export class hello {
  @Query(() => String)
  async hello(): Promise<string> {
    return "hello world";
  }
}
