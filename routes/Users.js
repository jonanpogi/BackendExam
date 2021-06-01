const express = require("express");
const Joi = require("joi");
const { getUsers, addUser, updateUser, deleteUser } = require("../controller/User");

const userValidation = (req, res, next) => {
    const userSchema = {
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        address: Joi.string().required(),
        postcode: Joi.string().required(),
        contactNo: Joi.string().required(),
        email: Joi.string().required().email(),
        username: Joi.string().required(),
        password: Joi.string().min(8).required(),
    };
    const validate = Joi.object(userSchema);
    const result = validate.validate(req.body);
    if (result.error) res.status(400).send(result.error.details[0].message);
    else next();
};

const userIdsValidation = (req, res, next) => {
    const validate = Joi.object({
        ids: Joi.array().min(1).required(),
    });
    const result = validate.validate(req.body);
    if (result.error) res.status(400).send(result.error.details[0].message);
    else next();
};

const router = express.Router();
//routes
router.get("/users", getUsers);
router.post("/users", userValidation, addUser);
router.put("/users/:id", userValidation, updateUser);
router.delete("/users", userIdsValidation, deleteUser);

module.exports = router;
