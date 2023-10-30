const ThoughtsController = require("../controllers/ThoughtsController")

const router = express.Router()

// rota responsavel por redirecionar para pagina de dashboard
router.get("/thoughts/dashboard", ThoughtsController.dashboard);

// rota responsavel por redirecionar para pagina de cadastrar o pensamento
router.get("/thoughts-create", ThoughtsController.registerThought);
// rota responsavel por cadastrar o pensamento na aplicaçao
router.post("/thoughts-create", ThoughtsController.createThought);

router.get("/thoughts/edit/:id", ThoughtsController.showPageEditThought);
router.post("/thoughts/update/:id", ThoughtsController.updateThought);

// rota responsavel por deletar um pensamento na aplicaçao
router.delete("/thoughts/:id", ThoughtsController.updateThought);

module.exports = router;