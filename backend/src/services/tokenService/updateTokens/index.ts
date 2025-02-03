import { encryptToken } from "../../../utils/encrypt";

export async function updateAdmtokens( access_token: string ) {
    try {
        const encryption_key = process.env.ENCRYPTION_KEY as string;
        const encryptedToken = encryptToken(access_token, encryption_key);
        const response = await fetch(
            'https://us-central1-zillus-shop.cloudfunctions.net/updateAdmTokens',{
            method: 'POST',
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${process.env.ADM_SECRET_KEY}`
            },
            body: JSON.stringify({ 
                accessToken: encryptedToken
            })
        });

        if ( !response.ok ) {
            throw new Error(`${response.status}: ${response.statusText}`);
        };
        
    } catch ( error ) {
        throw error;  
    };
};