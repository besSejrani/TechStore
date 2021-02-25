// GraphQL
import { Resolver, Mutation, Arg } from "type-graphql";
import { SignupInput } from "./types/SignupInput";

// Database
import { UserModel } from "../../../Model/User";

// Authentication & Authorization
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Response
import { UserResponse } from "../user/types/UserResponse";

// ========================================================================================================

@Resolver()
export class SignupResolver {
  @Mutation(() => UserResponse)
  async signup(@Arg("input") { username, email, password }: SignupInput): Promise<UserResponse> {
    const user = await UserModel.findOne({ email });

    if (user) {
      throw new Error("Invalid credentials");
    }

    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);

    const newUser = await new UserModel({ username, email, password: hash });
    await newUser.save();

    const payload = {
      id: newUser.id,
      role: newUser.role,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET as string);

    return { user: newUser, token };
  }
}
