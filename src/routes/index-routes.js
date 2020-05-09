const express = require('express');
const router = express.Router();
/*
router.get('/', (req, res, next) => {
  res.status(200).send({
    title: 'MentionsAPI',
    version: '1.0.0'
  });
});
*/

router.get('/', function(req, res, next) {
  res.render('index', {
      title: "Minha Primeira Aplicação Web",
      version: "0.0.0"
  });
});

router.get('/teste',(req, res, next) => {
  res.render('teste');
});

module.exports = router;