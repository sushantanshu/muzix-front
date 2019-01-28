const express = require('express');
const app = express();
const trackRoutes = express.Router();

// Require Business model in our routes module
let Track = require('/home/user/Documents/Javascript/muzix-app/src/app/Track.js');

// Defined store route
trackRoutes.route('/saveTrack').post(function (req, res) {
  let track = new Track(req.body);
  track.save()
    .then(track => {
      res.status(200).json({'track': 'Track in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
trackRoutes.route('/').get(function (req, res) {
    Track.find(function (err, tracks){
    if(err){
      console.log(err);
    }
    else {
      res.json(tracks);
    }
  });
});

// Defined delete | remove | destroy route
trackRoutes.route('/deleteTrack/:id').get(function (req, res) {
    Track.findByIdAndRemove({_id: req.params.id}, function(err, track){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = trackRoutes;