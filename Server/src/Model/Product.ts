// Database
import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";

// GraphQL
import { Field, ObjectType } from "type-graphql";

// ========================================================================================================

@ObjectType()
export class Product {
  @Field()
  readonly _id: ObjectId;

  @Field()
  @Property({
    required: [true, "Please provide a product name"],
    unique: true,
    trim: true,
    minlength: 2,
    maxlength: 20,
  })
  name: string;

  @Field()
  @Property({ required: [true, "Please provide a product price"] })
  price: number;

  @Field()
  @Property({ required: [true, "Please provide a product description"], trim: true, minlength: 20, maxlength: 250 })
  description: string;

  @Field()
  @Property({ required: [true, "Please provide a product stock"] })
  stock: number;

  @Field()
  @Property({ default: false })
  promotion?: boolean;

  // @Field()
  @Property()
  productImageUrl?: string;

  // @Field(() => [String])
  @Property()
  productImages?: String[];

  // @Field(() => [String])
  @Property()
  options?: String[];

  @Property({ default: Date.now() })
  createdAt?: Date;
}

// ========================================================================================================

export const ProductModel = getModelForClass(Product);
