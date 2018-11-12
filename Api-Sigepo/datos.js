const mongoose= require('mongoose');

const URI = 'mongodb://localhost/sigepo';


mongoose.connect(URI)
    .then(db => console.log('DB esta conectada'))
    .catch(err => console.log(err));

module.exports = mongoose;

