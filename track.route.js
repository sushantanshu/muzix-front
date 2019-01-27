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

// Defined edit route
trackRoutes.route('/editTrack/:id').get(function (req, res) {
  let id = req.params.id;
  Track.findById(id, function (err, track){
      res.json(track);
  });
});

//  Defined update route
trackRoutes.route('/updateTrack/:id').post(function (req, res) {
    Track.findById(req.params.id, function(err, track) {
      if (err) return next(err);
    if (!track){
      err = new Error("Track not found");
      err.status = 404;
      return next(err);
    }
    else {
        track.track_id = req.body.track_id;
        track.track_name = req.body.track_name;
        track.track_comment = req.body.track_comment;

        track.save().then(track => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
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