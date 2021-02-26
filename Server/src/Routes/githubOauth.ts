// Express
import express from "express";
const router = express.Router();

// Oauth
import passport from "passport";

// ========================================================================================================

router.get("/auth/github", passport.authenticate("github", { scope: ["profile", "email"] }));

router.get("/auth/github/callback", passport.authenticate("github", { scope: ["profile", "email"] }), (_, res) => {
  res.redirect("http://localhost:3000");
});

router.get("/api/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/api/current_user", (req, res) => {
  console.log(req.user);
  res.send(req.user);
});

export default router;
