const{ Router } = require('express');
const router = Router();
const { quotes, Quote } = require('./db');


router.get('/', function(req,res) {
  res.render('quote');
})

router.get('/quote', function(req, res){
  res.render('show');
})

router.post('/', function(req, res){
  req.session.name = req.body.name;
  console.log(req.session.name);
  res.render('quote', {quote: req.body});
});

router.post('/quote', router, function(req, res){
  quotes.push(req.body.name)
  quotes.push(req.body.comment)
  res.render('quote', {quotes: quotes});
});



  module.exports = router;

