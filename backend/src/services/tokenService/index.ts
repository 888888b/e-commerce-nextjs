import { createAccessToken } from './createToken';
import { getAdmTokens } from './getToken';
import { updateAdmtokens } from './updateTokens';

import 'dotenv/config';

const TokenServices = {
    createAccessToken,
    getAdmTokens,
    updateAdmtokens
};

export default TokenServices;