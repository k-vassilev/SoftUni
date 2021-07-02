const Trip = require('../models/Trip');

async function getAllTrips(){
    return Trip.find({}).lean();
}

async function getTripById(id){
    return Trip.findById(id).populate('usersJoined').lean();
}

async function createTrip(tripData){
    const trip = new Trip(tripData);

    await trip.save();

    return trip;
}

async function editTrip(id, tripData){
    const trip = await Trip.findById(id);

    trip.startPoint = tripData.startPoint;
    trip.endPoint = tripData.endPoint;
    trip.date = tripData.date;
    trip.time = tripData.time;
    trip.carImage = tripData.carImage;
    trip.carBrand = tripData.carBrand;
    trip.seats = tripData.seats;
    trip.price = tripData.price;
    trip.description = tripData.description;
    trip.creator = tripData.creator;
}

async function deleteTrip(id){
    return Trip.findByIdAndDelete(id);
}

async function joinTrip(tripId, userId){
    const trip = await Trip.findById(tripId);

    trip.usersJoined.push(userId);

    return trip.save();
}

module.exports = {
    getAllTrips,
    getTripById,
    createTrip,
    editTrip,
    deleteTrip
}
