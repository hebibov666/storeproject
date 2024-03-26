import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: {
          label: "username",
          placeholder: "Enter username",
          type: "text",
        },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const response = await axios.post(
          "http://localhost:3000/api/userSignIn",
          credentials
        );
        const user = await response.data.data;
        if (user) {
          return {
            name: user.username,
            email: user.email,
            image: user.image,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/userlogin/signin",
  },
});

