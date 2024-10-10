import { check, validationResult } from 'express-validator';

const validateUpdatePost = [
  check('title').optional().isString().withMessage('Title must be a string'),
  check('image').optional().isURL().withMessage('Image must be a valid URL'),
  check('likes').optional().isInt({ min: 0 }).withMessage('Likes must be a non-negative integer'),
  check('comments').optional().isArray().withMessage('Comments must be an array'),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

export default validateUpdatePost;