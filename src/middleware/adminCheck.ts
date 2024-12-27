import { Request, Response, NextFunction } from 'express';

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const isAdminHeader = req.headers['x-admin'];

  // Check if the `x-admin` header is present and equals "true"
  if (isAdminHeader === 'true') {
    next(); // User is admin, proceed to the next middleware/controller
  } else {
    res.status(403).json({ message: 'Access denied. Admins only.' });
  }
};
