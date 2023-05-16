const User = require("../models/User");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
var opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SecretOrKey,
};
passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findOne({ _id: jwt_payload._id })
        .select("-password")
        .populate("rendezvous")
        .populate("dossier");
      user ? done(null, user) : done(null, false);
    } catch (error) {
      console.log(error);
    }
  })
);
module.exports = isAuth = () =>
  passport.authenticate("jwt", { session: false });
