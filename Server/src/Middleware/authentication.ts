import "dotenv/config";
import jwt from "jsonwebtoken";
import { UserModel as User } from "../Model/User";

import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../Graphql/types/MyContext";

export const authentication: MiddlewareFn<MyContext> = async ({ context }, next) => {
  try {
    const authorization = context.req.headers["authorization"];
    const token = authorization?.replace("Bearer ", "")!;

    const decoded: any = await jwt.verify(token, process.env.JWT_SECRET as string);
    const user = await User.findById(decoded._id);

    if (!user) {
      context.res.status(400).json({ message: "You must be loged in" });
    }

    context.req.userId = user?.id;

    return next();
  } catch (error) {
    console.log("error:", error.message);
    // context.res.status(500).json({ message: "Server error" });
  }
};
