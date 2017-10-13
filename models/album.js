var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Album = mongoose.model('Album', AlbumSchema);
module.exports = Album;