const router = require('express').Router();
const User = require('../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { json } = require('body-parser');
const auth = require('../middleware/auth');

router.post('/register', async (req, res) => {
  let { email, name, password } = req.body;

  try {
    if (!email || !name || !password)
      return res
        .status(400)
        .json({ message: "Iltimos har bir qatorni to'ldiring" });

    if (password.length < 5)
      return res
        .status(400)
        .json({ message: "Passwordingiz kamida 5tadan ko'p bo'lishi kerak" });
    const existsUser = await User.findOne({ email: email });
    if (existsUser)
      return res.status(500).json({
        message: "Bu turdagi foydalunvchi bizni saytdan ro'yxatdan o'tgan ",
      });

    const salt = await bcrypt.genSalt();
    const passwordHashed = await bcrypt.hash(password, salt);

    const user = new User({
      email,
      password: passwordHashed,
      name,
    });

    const saveuser = await user.save();
    res.status(201).json({ mesage: 'Tabriklaymiz!👍😁👏' });
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});

router.post('/login', async (req, res) => {
  let { email, password } = req.body;
  try {
    if (!email || !password)
      return res
        .status(400)
        .json({ message: "Iltimos bosh joylarni to'ldiring" });

    const user = await User.findOne({ email: email });
    if (!user)
      return res.status(400).json({ message: "Bu email royxtdan o'tmagan" });

    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched)
      return res.status(400).json({
        message: "Kiritilgan parol noto'gri! Qaytadan urinib ko'ring",
      });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
      },
    });
  } catch (error) {
    console.log(error);
  }
});

router.post('/tokenIsValid', async (req, res) => {
  try {
    const token = req.header('x-auth-token');
    if (!token) return res.json(false);

    const verifed = jwt.verify(token, process.env.JWT_SECRET);
    if (!verifed) return res.json(false);

    const user = await User.findById(verifed.id);
    if (!user) return res.json(false);
    return res.json(true);
  } catch (error) {
    console.log(error);
  }
});
router.get('/data', auth, async (req, res) => {
  const name = await User.findById(req.user);
  res.json(name);
});
module.exports = router;
