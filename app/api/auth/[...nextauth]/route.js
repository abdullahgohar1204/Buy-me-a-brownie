import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import User from "@/models/user";
import PaymentSchema from "@/models/payment"
import connectDB from "@/lib/db";

export const authoptions = NextAuth({
    providers: [

        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            await connectDB();
            const currentuser = await User.findOne({ email: user.email })

            if (!currentuser) {
                const newUser = new User({ email: user.email, username: user.email.split("@")[0] }
                )
                await newUser.save()
                user.name = newUser.username
            } else {
                user.name = currentuser.username
            }
            return true;
        }
    }
})

export { authoptions as GET, authoptions as POST }