import { decryptToken } from "../../../utils/decrypt";

type TokenProps = {
    refreshToken: string | null;
    accessToken: string | null;
};

export async function getAdmTokens(): Promise<TokenProps> {
    const encryption_key = process.env.ENCRYPTION_KEY as string;

    const response = await fetch(
        'https://us-central1-zillus-shop.cloudfunctions.net/getAdmTokens',{
        method: 'POST',
        headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.ADM_SECRET_KEY}`
        },
    });

    if (!response.ok) {
        throw new Error(`${response.statusText} (${response.status})`);
    };

    const tokens: TokenProps = await response.json();
    let refreshToken = null;
    let accessToken = null;

    if ( tokens.refreshToken ) {
        refreshToken = decryptToken(tokens.refreshToken, encryption_key);
    };

    if ( tokens.accessToken ) {
        accessToken = decryptToken(tokens.accessToken, encryption_key);
    };

    const decryptedTokens: TokenProps = {
        refreshToken,
        accessToken
    };

    return decryptedTokens;
};