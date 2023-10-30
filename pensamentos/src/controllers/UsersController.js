const { response } = require("express");
const Thought = require("../model/Thought");
const User = require("../model/User");

module.exports = {
    async createUser(request, response) {
        const { name, email, password, confirm_password} = request.body

        const user = await User.create({
            name, 
            email,
            password, 
            confirm_password
        });

        console.log(user);

        return response.json(user);
    },

    async findAllUsers(request, responde) {
        const users = await User.findAll({ raw: true });

        return response.json(users);
    },


    async showPageEditThought(request, response) {
        const { id } = request.params

        const thought = await Thought.findOne({ where: { id: id }, raw: true});

        return response.render("thoughts/edit", { thought });
    },

    async deleteUser(request, reponse) {
        const { id } = request.params

        const user = await User.destroy({ where: { id: id } });

        return response.json({ message: "Usuário deletado com sucesso"});
    }
}