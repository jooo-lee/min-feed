import { Router } from 'express';

import * as indexController from '../controllers/indexController.js';

const router = Router();

router.get('/', indexController.getFeeds);
router.get('/feed/:feedId', indexController.getFeed);

export { router as indexRouter };
