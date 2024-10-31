import { Router } from "express";
import UsersRepository from "../molsdes/users/UsersRepository.js";

const usuariosRoutes = Router();
const userList = new UsersRepository();

usuariosRoutes.get("/", (req, res) => {
    const usuarios = userList.getAllusers();

    return res.status(200).json({
        message:
            usuarios.length == 0
                ? "Não há usuários cadastrados"
                : `Total de usuários: ${usuarios.length}`,
        usuarios,
    });
});
usuariosRoutes.post("/", (req, res) => {
    const { name, email, password } = req.body;

    const usuario = userList.addUser(name, email, password);

    return res.status(201).json({
        message: "Usuário cadastrado com sucesso!",
        usuario,     
    });
});

export default usuariosRoutes;