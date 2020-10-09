const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  try {
    const token = req.header('x-auth-token');

    if (!token) return res.status(401).json({ message: 'Token mavjud emas' });

    const verifed = jwt.verify(token, process.env.JWT_SECRET);
    if (!verifed)
      return res.status(401).json({
        message: 'Sizning tokeningiz Server tokeni bilan mos kelmadi',
      });

    req.user = verifed.id;
    next();
  } catch (e) {
    console.log(e);
  }
};
module.exports = auth;
