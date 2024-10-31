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

usuariosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;

    const user = userList.getUserById(id);

    if (!user) {
        return res.status(404).json({
            message: `Usuário com o id ${id} não encontrado!`,
        });
    }   
        return res.status(200).json({
            message: `Usuário com o id ${id} encontrado!`,
            user,
        });
    
});

usuariosRoutes.put("/:id", (req, res) => {

});

usuariosRoutes.delete("/:id", (req, res) => {

});
export default usuariosRoutes;