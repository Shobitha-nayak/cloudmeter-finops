import NextAuth from "next-auth";
import AzureADProvider from "next-auth/providers/azure-ad";

export default NextAuth({
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
      tenantId: process.env.AZURE_AD_TENANT_ID,
      authorization: {
        params: {
          scope: "openid email profile",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session({ session, token, user }) {
      session.user.roles = token.roles || [];
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (account?.idToken) {
        const idToken = account.idToken;
        const decodedToken = JSON.parse(Buffer.from(idToken.split('.')[1], 'base64').toString());
        token.roles = decodedToken.roles || [];
      }
      return token;
    },
  },
});
