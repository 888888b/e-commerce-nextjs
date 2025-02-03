import TokenServices from "../../services/tokenService";
import { Response, Request } from "express";

export const TokenController = {
    // Função para criar access_token
    async createToken( req: Request, res: Response ) {
        try {
            // Buscar o refresh_token para então criar o access
            const tokens = await TokenServices.getAdmTokens();
            
            if ( tokens.refreshToken ) {
                // Criando token de acesso
                const response = await TokenServices.createAccessToken( tokens.refreshToken );
                
                // Verificar possivel erro
                if ( !response.access_token ) {
                    return res.status( 500 ).json({ error: 'Internal server error' });
                };

                // Encriptografar token e atualizar banco de dados
                await TokenServices.updateAdmtokens( response.access_token );
                // Retornar token descriptografado ao cliente
                return res.status( 200 ).json({ 
                    access_token: response.access_token ?? null 
                });
            };

            // Retornar sem resposta caso o refresh token não exista no banco de dados
            res.status( 500 ).json({ error: 'Internal server error' });
        } catch ( error ) {
            console.log(error);
            res.status( 500 ).json({ error: 'Internal server error' });
        };
    },
};