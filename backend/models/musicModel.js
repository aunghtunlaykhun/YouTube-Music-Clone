const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const musicModel = new Schema({
    audio : {
        type:String,
        required:[true,'audio url is required Field'],
    },
    songName : {
        type:String,
        required:[true,'Song Name is required Field'],
        trim:true
    },
    type : {
        type:String,
        required:[true, 'Music type is required Field'],
    },
    artist : {
        type:String,
        required:[true,'Artist is required Field'],
        trim:true
    },
    album : {
        type:String,
        trim:true
    },
    section : {
        type:String,
        required:[true,'Section Field is Required'],
        trim:true
    },
    image : {
        type:String,
        required:[true,'Image is required Field']
    }
})

module.exports = mongoose.model('Music',musicModel);