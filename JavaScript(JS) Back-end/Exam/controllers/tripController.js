const router = require("express").Router();
const { isUser } = require('../middlewares/guards');
const { parseError } = require('../util/parsers');

router.get("/create", isUser(), (req, res) => {
  res.render("trip/create");
});

router.post("/create", isUser(), async (req, res) => {
  try {
    const tripData = {
        startPoint: req.body.startPoint, 
        endPoint: req.body.endPoint,
        date: req.body.date,
        time: req.body.time,
        carImage: req.body.carImage,
        carBrand: req.body.carBrand,
        seats: req.body.seats,
        price: req.body.price,
        description: req.body.description,
        creator: req.body._id,
        buddies: req.body.buddies, //check later
    
    };

    await req.storage.createTrip(tripData);

    res.redirect("/");
  } catch (err) {
    console.log("/");
    const ctx = {
      errors: parseError(err),
      tripData: {
        startPoint: req.body.startPoint, 
        endPoint: req.body.endPoint,
        date: req.body.date,
        time: req.body.time,
        carImage: req.body.carImage,
        carBrand: req.body.carBrand,
        seats: req.body.seats,
        price: req.body.price,
        description: req.body.description,
        creator: req.body._id,
        buddies: req.body.buddies, //check later
      }
    };
    res.render("trip/create", ctx);
  }
});

router.get('/shared', async (req, res) => {
  
    const trips = await req.storage.getAllTrips();
    res.render('trip/shared', { trips })


});

router.get('/details/:id', async (req, res) => {
  try{
    const trip = await req.storage.getTripById(req.params.id);
    trip.isCreator = req.user && req.user._id == trip.creator;
    //trip.joined = req.user && trip.usersJoined.includes(req.user._id);
    res.render('trip/details', { trip });
  }catch(err){
    console.log(err.message);
    res.redirect('/404');
  }
});

router.get('/edit/:id', isUser(), async (req, res) => {
  try {
    const trip = await req.storage.getTripById(req.params.id);

    // if(trip.creator._id != req.user._id){
    //   throw new Error('Cannot edit trip you haven\`t created!')
    // }
    console.log(trip.creator);

    res.render('trip/edit', { trip });
  }catch(err){
    console.log(err.message);
    res.redirect('/trip/details/' + req.params.id);
  }
});

router.post('/edit/:id', isUser(), async (req, res) => {
  try {
    const trip = await req.storage.getTripById(req.params.id);
    
    // if(trip.creator != req.user._id){
    //   throw new Error('Cannot edit trip you haven\`t created!')
    // }
    console.log('Trip', trip);
    console.log(req.params.id)
    await req.storage.editTrip(req.params.id, req.body);

    res.redirect('/');
    
  }catch(err){
    const ctx = {
      errors: parseError(err),
      trip: {
        _id: req.params.id,
        startPoint: req.body.startPoint, 
        endPoint: req.body.endPoint,
        date: req.body.date,
        time: req.body.time,
        carImage: req.body.carImage,
        carBrand: req.body.carBrand,
        seats: req.body.seats,
        price: req.body.price,
        description: req.body.description,
      }
    };
    res.render('trip/edit', ctx);
  }
  
})


router.get('/delete/:id', isUser(), async (req, res) => {
    try{
      const trip = await req.storage.getTripById(req.params.id);

      if(trip.creator != req.user._id){
        throw new Error('Cannot delete trip you haven\`t created!')
      }
      await req.storage.deleteTrip(req.params.id);
      res.redirect('/');
    }catch(err){
      console.log(err.message);
      res.redirect('/trip/details' + req.params.id);
    }
});

router.get('/join/:id', isUser(), async (req, res) => {
  try {
    const trip = await req.storage.getTripById(req.params.id);

    if(trip.creator == req.user._id){
      throw new Error('Cannot join your own trip!')
    }

    await req.storage.joinTrip(req.params.id, req.user._id);
    res.redirect('/trip/details/' + req.params.id);

  }catch(err){
    console.log(err.message);
    res.redirect('/trip/details/' + req.params.id);
  }

});

module.exports = router;
