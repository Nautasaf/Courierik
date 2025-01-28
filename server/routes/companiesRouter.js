const express = require('express');
const router = express.Router();
const db = require('../db/models/index');

// Маршрут для получения списка компаний
router.get('/companies', async (req, res) => {
  try {
    const companies = await db.Company.findAll(); // Убедитесь, что модель Company существует
    res.json(companies);
  } catch (error) {
    console.error('Ошибка при загрузке компаний:', error);
    res.status(500).json({ error: 'Ошибка при загрузке компаний' });
  }
});

module.exports = router;