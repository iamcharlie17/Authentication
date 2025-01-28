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
        // Check if the user already exists
        let user = await User.findOne({ $or: [{ googleId: id }, { email }] });

        if (!user) {
          // Create a new user if they don't exist
          user = new User({
            fullName: displayName,
            email,
            googleId: id,
            avatar,
            isGoogleUser: true,
          });
          await user.save();
        }

        // Pass the user object to the next middleware
        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);