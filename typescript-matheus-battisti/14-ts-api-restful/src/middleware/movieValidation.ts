import { body } from 'express-validator'

export function movieCreateValidation() {
  return [
    body('title')
      .isString()
      .withMessage('O título é obrigatório')
      .isLength({ min: 5 })
      .withMessage('O título precisa ter no mínimo 5 caracteres'),
    body('rating')
      .isNumeric()
      .withMessage('A nota precisa ser um número')
      .custom((value: number) => {
        if (value < 0 || value > 10) {
          throw new Error('A nota precisa estar entre 0 e 10');
        }
        return true;
      }),
    body('description')
      .isString()
      .withMessage('A descrição é obrigatória'),
    body('director')
      .isString()
      .withMessage('O nome do diretor é obrigatório'),
    body('poster')
      .isURL()
      .withMessage('A imagem deve ser uma URL')
  ];
}