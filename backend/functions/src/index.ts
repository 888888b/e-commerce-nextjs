import * as CloudFunctions from "firebase-functions";
import * as Adm from "firebase-admin";
import bcrypt from "bcrypt";

Adm.initializeApp({
  credential: Adm.credential.applicationDefault(),
  databaseURL: "https://zillus-shop-default-rtdb.firebaseio.com/",
});

const cors = [
  "https://e-commerce-nextjs-ashy.vercel.app/",
  "http://localhost",
];

export const getAdmTokens = CloudFunctions.https.onRequest(
  {cors},
  async (req, res) => {
    if (req.method !== "POST") {
      res.status(405).json({error: "Method not allowed"});
    }
    try {
      const authorization = req.headers.authorization?.split("Bearer ")[1];
      const dataSnapshot = await Adm.database().ref("/users/adm").get();
      const admData = await dataSnapshot.val();
      const isKeyValid = await bcrypt.compare(
        authorization ?? "", admData.secretKey
      );
      if (!authorization || !isKeyValid) {
        res.status(401).json({error: "Unauthorized operation"});
      }
      res.status(200).json({
        refreshToken: admData.refreshToken ?? null,
        accessToken: admData.accessToken ?? null,
      });
    } catch (error) {
      res.status(500).json({error});
    }
  }
);

export const updateAdmTokens = CloudFunctions.https.onRequest(
  {cors},
  async (req, res) => {
    if (req.method !== "POST") {
      res.status(405).json({error: "Method not allowed"});
    }
    try {
      const authorization = req.headers.authorization?.split("Bearer ")[1];
      const dataSnapshot = await Adm.database().ref("/users/adm").get();
      const admData = dataSnapshot.val();
      const isKeyValid = await bcrypt.compare(
        authorization ?? "", admData.secretKey
      );
      if (!authorization || !isKeyValid) {
        res.status(401).json({error: "Unauthorized operation"});
      }
      const {accessToken} = req.body;
      await Adm.database().ref("/users/adm").update({accessToken});
      res.status(200).json({success: "Tokens were updated"});
    } catch (error) {
      res.status(500).json({error});
    }
  }
);
