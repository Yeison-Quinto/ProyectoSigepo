const express= require('express');
const router = express.Router();

const proyectoC = require('../control/proyecto.control');


//tener datos del proyecto || dato de 1 proyecto
router.get('/', proyectoC.getProyectos);
router.get('/:id' , proyectoC.getProyecto);
// guardar datos al proyecto
router.post('/', proyectoC.crearProyecto);
// editar datos proyectos
router.put('/:id', proyectoC.editarProyecto);
//eliminar
router.delete('/:id', proyectoC.eliminarProyecto);

module.exports = router;
