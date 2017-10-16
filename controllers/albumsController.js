var db = require('../models')
// GET /api/albums
function index(req, res) {
  db.Album.find({}, function(err, allAlbums){
    res.json(allAlbums)
  })

  // res.json(albums)
}

// POST /api/albums
function create(req, res) {
  //we will write a route to create a new database item for a new album
  console.log('in the album create function')
  console.log(req.body)
  var genres = req.body.genres.split(', ');
  req.body.genres = genres;
  console.log(genres)
  db.Album.create(req.body, function(err, album){
    if (err) { console.log('error', err); }
    res.json(album);
  })
}

// GET /api/albums/:albumId
function show(req, res) {
  // find one album by id and send it back as JSON
}

// DELETE /api/albums/:albumId
function destroy(req, res) {
  // find one album by id, delete it, and send it back as JSON
}

// PUT or PATCH /api/albums/:albumId
function update(req, res) {
  // find one album by id, update it based on request body,
  // and send it back as JSON
}

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};