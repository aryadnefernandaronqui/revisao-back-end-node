import { NextFunction, Request, Response } from 'express';
import { MissingParamError } from '../../../shared/helpers/errors';
import { HttpResponse } from '../../../shared/helpers/httpResponse';
export function VerifyBodyCreateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { name, age } = req.body;

  if (!name) {
    const { body, statusCode } = HttpResponse.badRequest(
      new MissingParamError('name')
    );
    return res.status(statusCode).json(body);
  }

  if (!age) {
    const { body, statusCode } = HttpResponse.badRequest(
      new MissingParamError('age')
    );
    return res.status(statusCode).json(body);
  }

  next();
}
