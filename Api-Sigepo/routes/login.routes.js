const express= require('express');
const router = express.Router();

const loginC = require('../control/login.control');

//tener datos del proyecto
router.get('/', loginC.getLogins);
router.get('/:id', loginC.getLogin);
// guardar datos al proyecto
router.post('/' , loginC.crearLogin);
// editar datos proyectos
router.put('/:id', loginC.editarLogin);
// eliminar usuario
router.delete('/:id', loginC.eliminarLogin);

module.exports = router;
