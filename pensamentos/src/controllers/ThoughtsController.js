// importando o model thought
const Thought = require("../model/Thought");

module.exports = {
    // funçao responsavel por renderizar a pagina de dashboard
    async dashboard(request, response) {
        const thoughts = await Thought.findAll({ raw: true });
        return response.render("thoughts/dashboard", { thoughts });
    },

    async registerThought(request, response){
        return response.render("thoughts/register")
    },

    async createThought(request, response) {
        const { title, description } = request.body

        const thought = await Thought.create({ title, description});

        try{
            if(thought) {
                return response.redirect("/thoughts/dashboard");
            }
        }catch(error) {
            console.error(error);
        }

    },
}