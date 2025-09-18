import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      discordId?: string
      username?: string
      discriminator?: string
    }
    accessToken?: string
  }

  interface JWT {
    discordId?: string
    username?: string
    discriminator?: string
    accessToken?: string
  }
}