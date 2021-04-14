import express from 'express';
import NgramController from '../controllers/ngramController';

const router = express.Router();

/* GET home page. */
router.get('/', NgramController.index);

router.get('/ngram/:id', NgramController.show);

router.post('/ngram', NgramController.save);

export default router;
