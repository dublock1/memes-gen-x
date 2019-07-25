/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const memeApi = require('../models/meme.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const memeRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
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

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  memeRouter
}
