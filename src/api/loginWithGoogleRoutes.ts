import express from "express";
import passport from "passport";
import config from "../config";
const router = express.Router();

router.get(
  "/login/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/auth/google/redirect",
  passport.authenticate("google", {
    failureMessage: "Failed to login with google",
    failureRedirect: config.errorLoginUrl,
    successRedirect: config.successLoginUrl,
  }),
  (req, res) => {
    console.log(`/auth/google/callback api`);
    res.redirect(config.successLoginUrl);
  }
);

export default router;
