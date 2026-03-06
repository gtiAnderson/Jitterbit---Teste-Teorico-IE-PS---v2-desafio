const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'Acesso negado. Nenhum token fornecido.' });
    }

    try {
        const actualToken = token.split(' ')[1] || token;
        const decoded = jwt.verify(actualToken, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ error: 'Token inválido.' });
    }
};

module.exports = authMiddleware;