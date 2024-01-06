const { dbusername, password } = process.env;
// console.log("username: ", username, "password: ", password);
export const DBUrl = `mongodb+srv://${dbusername}:${password}@classifed.79dwrwy.mongodb.net/shopdb?retryWrites=true&w=majority`;
// export const DBUrl = `mongodb+srv://${username}:${password}@classifed.79dwrwy.mongodb.net/shopdb?retryWrites=true&w=majority`;
