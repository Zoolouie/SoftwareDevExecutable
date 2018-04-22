const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  //pages:
	  //login:
		.get('/', (req, res) => res.render('pages/main'))
	  //signup:
		.get('/signup', (req, res) => res.render('pages/signup'))

		.get('/login', (req, res) => res.render('pages/login'))

		.get('/about', (req, res) => res.render('pages/about'))

		.get('/contact', (req, res) => res.render('pages/contact'))
	
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
