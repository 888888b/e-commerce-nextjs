export async function createAccessToken( refreshToken: string ) {
    const url = "https://api.mercadolibre.com/oauth/token";

    const params = new URLSearchParams({
        grant_type: "refresh_token",
        client_id: process.env.APP_ID || "",
        client_secret: process.env.SECRET_KEY || "",
        refresh_token: refreshToken
    });

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: params.toString()
        });

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        return data;

    } catch ( error ) {
        throw error;
    };
};