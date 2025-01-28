const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/registration', async (req, res) => {
    try {
      const { username, email, password, city } = req.body;
      console.log(req.body);
  
      const userCheck = await User.findOne({ where: { email } });
      if (userCheck) {
        return res.status(409).json({ message : 'Пользователь с таким email уже существует' });
      }
  
      const hashPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ username: username, email, password: hashPassword, city:city });
  
      if (user) {
        const selectionUser = await User.findOne({ where: { email } });
        if (selectionUser) {
          const isPasswordValid = await bcrypt.compare(password, selectionUser.password);
          if (isPasswordValid) {
            req.session.loginedUser = {
              id: selectionUser.id,
              email: selectionUser.email,
              username: selectionUser.username,
              city: selectionUser.city,
            };
            req.session.save();
            res.status(201).json({ text: 'OK', data: req.session.loginedUser });
          } else {
            res.status(400).json({ text: 'Неверный пароль' });
          }
        }
      }
    } catch (error) {
      console.error('Ошибка регистрации:', error);
      res.status(500).json({ error: 'Ошибка регистрации', message: error.message });
    }
  });



module.exports = router;