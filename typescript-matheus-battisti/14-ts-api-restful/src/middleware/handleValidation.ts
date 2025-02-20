import { Request, Response, NextFunction } from 'express'
import { FieldValidationError, validationResult } from 'express-validator'

export function validate(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);

  if (errors.isEmpty()) return next();

  const extractedErrors: object[] = []
  
  errors.array().map((err) => extractedErrors.push( { [(err as FieldValidationError).path]: err.msg }));

  res.status(422).json({
    errors: extractedErrors,
  });
} 