import { Router } from 'express';

import * as indexController from '../controllers/indexController.js';

const router = Router();

router.get('/', indexController.getFeed);

export { router as indexRouter };
