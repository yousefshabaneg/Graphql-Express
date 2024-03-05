import passport from "passport";
import User from "../models/User";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import config from "../config";
import AppError from "../helpers/AppError";

passport.use(
  new GoogleStrategy(
    {
      clientID: config.googleClientId,
      clientSecret: config.googleClientSecret,
      callbackURL: config.googleCallbackUrl,
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      console.log(`Login With Google ! profile: ${profile}`);

      const defaultUser = {
        fullName: profile.displayName,
        email: profile.emails![0].value,
        googleId: profile.id,
        picture: profile.photos![0].value,
      };

      try {
        const user = await User.findOrCreate({
          where: { googleId: defaultUser.googleId },
          defaults: defaultUser,
        });

        if (!user) {
          return done(new AppError("Something went wrong", 400), undefined);
        }

        console.log(`🚀GOOGLE-SUCCESS🚀: `, user[0]);

        return done(null, user[0]);
      } catch (err: any) {
        console.log(`🚀GOOGLE-ERROR🚀: `, err);
        return done(err, undefined);
      }
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: any, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
