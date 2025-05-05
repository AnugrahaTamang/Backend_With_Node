# form validation in node and ExpressJS

# ExpressJS: Implement form validation

1. npm install express-validator
2. const {body, validationResult} = require("express-validator");
3. var validationRegistration = [
   body('username').notEmpty.withMessage("usernaem is required"),
   body('password').isLength({min:5, max:10}).withMessage('password must be between 5 and 10 character long')
   ]
4. app.post('/saveform', validationRegistration, (req,res) => {
   const result = validationResult(req);
   res.send(result);
   })

# ExpressJS: form validation Methods

- notEmpty()
- isEmail()
- isLength(options)
- isNumeric()
- isAlpha()
- isAlphanumeric()
- isURL()
- isDate()
- isIn()
- isStrongPassword()
- isUpperCase()
- isLowerCase()
- matches(pattern)
- more....

# ExpressJS Sanitization methods

- trim()
- ltrim()
- rtrim()
- escape()
- unescape()
- normalizeEmail()
- toInt()
- toFloat()
- toBoolean()

# ExpressJS custom validation

- custom(validator)
- customSanitizer(sanitizer)
