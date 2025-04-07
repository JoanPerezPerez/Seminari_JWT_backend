import pkg from "jsonwebtoken";
const { sign, verify } = pkg;   
const REFRESH_JWT_SECRET = process.env.REFRESH_JWT_SECRET || "token.010101010101";
const AUTH_JWT_SECRET = process.env.AUTH_JWT_SECRET || "token.010101010101";


const generateRefreshToken = (id:string) => {
    const jwt = sign({id}, REFRESH_JWT_SECRET, {expiresIn: '7d'});
    return jwt;
};

const generateAuthToken = (id:string) => {
    const jwt = sign({id}, AUTH_JWT_SECRET, {expiresIn: '15m'});
    return jwt;
}

const verifyAuthToken = (jwt: string) => {
    const isOk = verify(jwt, AUTH_JWT_SECRET);
    return isOk;

};

const verifyRefreshToken = (jwt: string) => {
    const isOk = verify(jwt, REFRESH_JWT_SECRET);
    return isOk;

};

export { generateAuthToken, generateRefreshToken, verifyAuthToken, verifyRefreshToken };