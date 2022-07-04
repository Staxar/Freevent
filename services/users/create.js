import dbConnect from "../../util/mongodb";

const create = async (payload) => {
  dbConnect();

  const { login, name, age } = await schema.validateAsync(payload);
  await checkUserExist(login);
  const passwordSalt = crypto.randomBytes(16).toString("hex");
  const passwordHash = crypto
    .pbkdf2Sync(password, passwordSalt, 1000, 64, "sha512")
    .toString("hex");

  const user = await dbConnect
    .collection("users")
    .insetOne((login, name, age, passwordSalt, passwordHash));
  return user;
};
export default create;
