import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import InstagramProvider from "next-auth/providers/instagram";
export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    InstagramProvider({
      clientId: process.env.INSTA_ID?? "",
      clientSecret: process.env.INSTA_SECRET ?? ""
    })
  
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
