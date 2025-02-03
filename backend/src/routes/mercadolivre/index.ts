import express from 'express';
import 'dotenv/config';
// import bcrypt from 'bcrypt';
// import crypto from 'crypto';

const router = express.Router();

router.post('/callback', async (req, res) => {
    const queryParams = req.query;
    // console.log(crypto.randomBytes(32).toString('hex'));
    // console.log(await bcrypt.hash('819bcc76d8d7257d6b3e0d2e06e133cc469b57670604cef5907db4094caaffc7', 10))
    res.status(200).json(queryParams);
});

export default router;