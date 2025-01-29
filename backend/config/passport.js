import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const { id, displayName, emails, photos } = profile;
      const email = emails[0].value;
      const avatar = photos[0].value;

      try {
        let user = await User.findOne({ $or: [{ googleId: id }, { email }] });

        if (!user) {
          user = new User({
            fullName: displayName,
            email,
            googleId: id,
            avatar,
            isGoogleUser: true,
          });
          await user.save();
        }

        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);