import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).send({ error: "No token provided" });

  const parts = authHeader.split(" ");

  if (parts.length < 2) return res.status(401).send({ error: "Token error" });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ error: "Malformatted token!" });

  jwt.verify(token, "secret", (error, decoded) => {
    if (error) return res.status(401).send({ error: "Invalid token!" });
    req.userId = decoded?.id;
    return next();
  });
};

export default authMiddleware;
