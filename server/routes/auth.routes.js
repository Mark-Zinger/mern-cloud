const { Router } = require("express");
const config = require("config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const authMiddleware = require("../middleware/auth.middleware");

const fileService = require('../services/file.service');
const File = require('../models/File');


const router = new Router();

router.post('/registration',
    [
        check('email', "Uncorrect email").isEmail(),
        check('password', "Password must be longer than 3 and shorter than 12").isLength({min:3, max:12})
    ],
    async (req,res) => {
        try {

            const validateErrors = validationResult(req);
            if(!validateErrors.isEmpty()) return res.status(400).json({ message: "Uncorrect request", errors: validateErrors });
            
            const { email, password } = req.body;
            const candidate = await User.findOne({email});

            if(candidate) return res.status(400).json({message: `User with email ${email} already exist`});

            const hashPassword = await bcrypt.hash(password, 8); 
            const user = new User({ email, password: hashPassword });
            await user.save();

            await fileService.createDir(new File({user: user._id, name: ''}))
            
            return res.json({message: 'User was created'})

        } catch (e) {
            console.log(e);
            res.send({message: "Server Error"})
        }
    }
);

router.post('/login',
    async (req,res) => {
        try {

            const { email, password } = req.body;

            let user = await User.findOne({email});
            if(!user) return res.status(404).json({message: "User not found"});
            user = user.toObject();

            const isPassValid = bcrypt.compareSync(password, user.password);
            if(!isPassValid) return res.status(400).json({message: "Invalid password"});

            const token = jwt.sign({ id: user._id }, config.get("secretKey"), { expiresIn: "1h"});

            delete user.password;

            return res.json({ token, user });

        } catch (e) {
            console.log(e);
            res.send({message: "Server Error"})
        }
    }
);


router.get('/', authMiddleware,
    async (req, res) => {
        try {

            let user =  await User.findOne({ _id: req.user.id });
            if(!user) return res.status(404).json({message: "User not found"});
            user = user.toObject();

            const token = jwt.sign({id: user._id}, config.get("secretKey"), {expiresIn: "1h"})

            delete user.password;

            return res.json({ token, user })
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    }
);

module.exports = router;
