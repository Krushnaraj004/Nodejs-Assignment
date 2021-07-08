const express = require('express')
const bodyParser = require('body-parser')
const { validate, ValidationError, Joi } = require('express-validation')
const app = express();

const loginValidation = {
    body: Joi.object({
        email: Joi.string()
            .email()
            .required(),
        password: Joi.string()
            .regex(/[a-zA-Z0-9]{3,30}/)
            .required(),
    }),
}


app.use(bodyParser.json());

app.post('/login', validate(loginValidation, {}, {}), (req, res) => {
    res.json(200)
})

app.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err)
    }

    return res.status(500).json(err)
})

app.listen(8080);

//middleware validation
// const express = require('express');
// const bodyParser = require('body-parser');
// const { check, validationResult } = require('express-validator');
// const app = express();

// app.use(bodyParser.json());

// app.post('/add/user', [
//   check('username').isEmail(),
//   check('password').isLength({ min: 5 })
// ], (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(422).json({ errors: errors.array() });
//   }
//   res.send('user saved');
// });

// app.listen(3000, () => console.log('server started'));