//GraphQL
import { InputType, Field } from "type-graphql";
import {Status} from "./statusEnum"

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

  @Field()
  promotion: boolean;

  @Field(()=> Status)
  status: Status
}
