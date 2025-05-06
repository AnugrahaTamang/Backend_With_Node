# Session

- Temporary information saver in server.

# usecase of session

- User authentication
- Shopping cart
- flash messages
- multi-step form
- User preferences
- form Data preservation
- CAPTCHA Verification

# Installation of session

1. npm install express session
2. const session = require("express-session")
3. app.use(session({
   secret: "mysecretkey",
   resave: false,
   saveUninitialized: false,
   cookie: {maxAge: 86400000} //Note: This mean 24 hour after 24 hour it deleted. (1000 _ 60s _ 60 \*24)
   }))

# Session

0. npm i connect-mongo
1. store session: req.session.key = 'value';
2. Read session : req.send(req.session.key)
3. Delete session : req.session.destroy()
