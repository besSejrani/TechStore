import { v4 as uuid } from "uuid";
import { redis } from "../Redis/index";
import { confirmUserPrefix } from "../Redis/redisPrefixe";

export const createConfirmationUrl = async (userId: number) => {
  const token = uuid();
  redis.set(confirmUserPrefix + token, userId, "ex", 60 * 60 * 24);

  return `http://localhost:3000/user/confirm/${token}`;
};
