export const TOKEN_SECRET = "elPapu"
const jwt = require("jsonwebtoken");

export function verifyToken(_req: any, _res: any, next: any) {
    const token = _req.headers.authorization;
    console.log(token);
    if (!token) {
        return _res
            .status(401)
            .send({ message: "Unauthorized: No token provided." });
    }

    try {
        const decoded = jwt.verify(token, TOKEN_SECRET);
        _req.usuario = decoded;
        console.log("verificación exitosa :D");
        next();
    } catch (err) {
        return _res.status(401).send({ message: "Unauthorized: Invalid token." });
    }
}