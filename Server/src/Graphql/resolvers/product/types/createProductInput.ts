//GraphQL
import { InputType, Field } from "type-graphql";

// ========================================================================================================

@InputType()
export class CreateProductInput {
  @Field()
  name: string;

  @Field()
  price: number;

  @Field()
  description: string;

  @Field()
  stock: number;
}
