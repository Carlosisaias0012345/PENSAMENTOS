const express = require("express");
const { createBrotliCompress } = require("zlib");
const ThoughtsController = require("./controllers/ThoughtsController");

const UsersController = require("./controllers/UsersController");
const Thought = require("./model/Thought");
const User = require("./model/User");

const router = express.Router();

// Rotas para cadastrar os usuarios
router.post("/users", UsersController.createUser);

// rotas para encontrar todos os registros do usuarios na aplicaçao
router.get("/users", UsersController.findAllUsers);

// rota responsavel por buscar por um pensamento especifico cadastrado na aplicaçao
router.get("/users/:id", UsersController.findUser);

// rotas para atualizar um registro
router.put("/users/:id", UsersController.uptadeUser);

// rota para deletar um registro
router.delete("/users/:id", UsersController.deleteUser);

// rotas pensamentos
router.post("/thoughts", ThoughtsController.createThought);

// 
router.post("/thoughts/:id", ThoughtsController.findThought);

module.exports = router;        