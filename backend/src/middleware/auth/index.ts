import { Request, Response, NextFunction } from "express";

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const FAKE_TOKEN = process.env.FAKE_TOKEN as string;

  if (authHeader && authHeader === `Bearer ${FAKE_TOKEN}`) {
    try {
      next();
    } catch (error) {
      return res.status(401).json({ message: "Invalid token" });
    }
  } else {
    return res.status(401).json({
      message: "Token required",
    });
  }
};

export default authenticate;
