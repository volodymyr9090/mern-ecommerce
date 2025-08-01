import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  //Set JWT as an HTTP-Only cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    // maxAge: 60 * 60 * 1000, // 1 hour in milliseconds
    maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
  });
};

export default generateToken;
