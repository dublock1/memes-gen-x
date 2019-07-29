
const express = require('express')


const memeApi = require('../models/meme.js')


const memeRouter = express.Router()


memeRouter.get('/', (req, res) => {
    memeApi.getAllMemes()
    .then((memes) => {
        res.json(memes)
    })
})

memeRouter.get('/:memeId', (req, res) => {
    memeApi.getMeme(req.params.memeId)
    .then((meme) => {
        res.json(meme)
    })
    .catch((err) => {
        console.log(err)
    })
})

memeRouter.post('/', (req, res) => {
    memeApi.addNewMeme(req.body)
    .then((meme) => {
        res.json(meme)
    })
})

memeRouter.put('/:memeId', (req, res) => {
    memeApi.updateMeme(req.params.memeId, req.body)
    .then((updateMeme) => {
        res.json(updateMeme)
    })
})

memeRouter.delete('/:memeId', (req, res) => {
    memeApi.deleteMeme(req.params.memeId)
    .then((deleteMeme) => {
        res.json(deleteMeme)
    })
})


module.exports = {
  memeRouter
}
