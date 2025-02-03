import express from 'express';
import { TokenController } from '../../controllers/tokenController';

const router = express.Router();

router.post('/createAccessToken', TokenController.createToken);

export default router;