const loginM = require('../modelos/login');

const loginControl ={};
// obtener todos
loginControl.getLogins = async (req, res) => {
    const logins = await loginM.find();
    res.json(logins);
}
// obtener 1
loginControl.getLogin = async (req, res) => {
    const logins = await loginM.findById(req.params.id);
    res.json(logins);
}
// crear usuario
loginControl.crearLogin = async (req, res) => {
    const logins = new loginM(req.body);
    await logins.save();
    res.json({
        'Estado': 'Usuario Guardado' 
    });
    
}
// Editar
loginControl.editarLogin = async (req, res) => {
    const { id } = req.params;
    const logins = {
        usuario: req.body.usuario,
        contraseña: req.body.contraseña
    };
    await loginM.findByIdAndUpdate(id, {$set: logins}, {new: true} );
    res.json({
        status : 'Usuario Actualizado' 
    });
    
}
//eliminar
loginControl.eliminarLogin =  async (req, res) => {
  await loginM.findByIdAndRemove(req.params.id);
    res.json({
        status : 'usuario eliminado' 
    });
}

module.exports = loginControl;