// // Configuration
// import "dotenv/config";

// // Database
// import { UserModel } from "../Model/User";

// // OAuth2
// import passport from "passport";
// import { Strategy } from "passport-google-oauth20";

// // ========================================================================================================

// const google0Auth = () => {
//   passport.serializeUser((user, done) => {
//     done(null, user.id);
//   });

//   passport.deserializeUser(async (id, done) => {
//     try {
//       const user = await UserModel.findById(id);
//       done(null, user);
//     } catch (error) {
//       console.log(error.message);
//     }
//   });

//   passport.use(
//     new Strategy(
//       {
//         clientID: `${process.env.GOOGLE_ID}`,
//         clientSecret: `${process.env.GOOGLE_SECRET}`,
//         callbackURL: "/auth/google/callback",
//         proxy: true,
//       },
//       async (accessToken, refreshToken, profile, done) => {
//         const { id } = profile;
//         try {
//           const user = await UserModel.findOne({
//             googleId: id,
//           });

//           if (!user) {
//             const user = await new UserModel({
//               googleId: id,
//             });
//             await user.save();
//             done(null, user);
//           }

//           done(null, user);
//         } catch (error) {
//           console.log(error.message);
//         }
//       }
//     )
//   );
// };

// export default google0Auth;
