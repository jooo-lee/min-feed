import { Router } from 'express';

import * as indexController from '../controllers/indexController.js';

const router = Router();

router.get('/', indexController.getFeed);
router.get('/:id', indexController.getPost);

export { router as indexRouter };
