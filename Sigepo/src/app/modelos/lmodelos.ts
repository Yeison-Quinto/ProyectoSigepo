export class Lmodelos {
  constructor(_id = '', usuario = '', contrase = '') {
    this._id = _id;
    this.usuario = usuario;
    this.contrase = contrase;
  }
  _id: String;
  usuario: String;
  contrase: String;
}
