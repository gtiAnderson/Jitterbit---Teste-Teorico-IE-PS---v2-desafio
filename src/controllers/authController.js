const jwt = require('jsonwebtoken');

const login = (req, res) => {
    const { user, password } = req.body;
    if (password === 'admin123') {
        const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.json({ token });
    }
    res.status(401).json({ error: 'Credenciais inválidas' });
};

module.exports = { login };