import crypto from 'crypto';

export function decryptToken(encryptedToken: string, key: string): string {
    const [ivHex, authTagHex, encryptedData] = encryptedToken.split(":");

    const iv = Buffer.from(ivHex, "hex");
    const authTag = Buffer.from(authTagHex, "hex");

    const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv);
    decipher.setAuthTag(authTag);

    let decrypted = decipher.update(encryptedData, "hex", "utf-8");
    decrypted += decipher.final("utf-8");

    return decrypted;
}