
const mongoose = require('./connection.js')


const MemeSchema = new mongoose.Schema({
 image: String,
 topText: String,
 bottomText: String
})


const MemeCollection = mongoose.model('Meme', MemeSchema)


function getAllMemes() {
  return MemeCollection.find()
}

function getMeme(memeId) {
    return MemeCollection.findById(memeId)
}

function addNewMeme(memeObject) {
    return MemeCollection.create(memeObject)
}

function updateMeme(memeId, updateMeme) {
    return MemeCollection.findByIdAndUpdate(memeId, updateMeme)
}

function deleteMeme(memeId) {
    return MemeCollection.findByIdAndDelete(memeId)
}



module.exports = {
  getAllMemes,
  getMeme,
  addNewMeme,
  updateMeme,
  deleteMeme
}
