const proyectoM = require('../modelos/proyecto');

const proyectoControl = {};
// obtener todos
proyectoControl.getProyectos = async (req, res) => {
   const proyects = await proyectoM.find();
   res.json(proyects);
}
//obtener 1
proyectoControl.getProyecto= async (req, res) => {
    const proyects = await proyectoM.findById(req.params.id);
    res.json(proyects);
}
// crear proyecto
proyectoControl.crearProyecto = async (req, res) => {
    const proyects = new proyectoM(req.body);
    await proyects.save();
    res.json({
        'Estado': 'Proyecto guardado' 
    });
}
//Editar
proyectoControl.editarProyecto=  async (req, res) => {
    const { id } = req.params;
    const proyects = {
        //proyecto
        nomProyecto: req.body.nomProyecto,
        tipoProyecto: req.body.tipoProyecto,
        modalidad: req.body.modalidad,
        fCreacion: req.body.fCreacion,
        fInicial: req.body.fInicial,
        fFInal: req.body.fFInal,
        estado: req.body.estado,
        objGeneral: req.body.objGeneral,
        objEspecifico: req.body.objEspecifico,
        //roles
        nomAsesor: req.body.nomAsesor,
        nomResponsable: req.body.nomResponsable,
        nomParticipante: req.body.nomParticipante,
        Rol: req.body.Rol,
        dependencia: req.body.dependencia,
   };
    await proyectoM.findByIdAndUpdate(id, {$set: proyects}, {new: true} );
    res.json({
        'Estado': 'proyecto actualizado Actualizado' 
  });
}
//eliminar
proyectoControl.eliminarProyecto= async (req, res) => {
    await proyectoM.findByIdAndRemove(req.params.id);
    res.json({
        status : 'proyecto eliminado' 
    });
}


module.exports = proyectoControl;