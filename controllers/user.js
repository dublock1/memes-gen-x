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
const userApi = require('../models/user.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const userRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 

userRouter.get('/', (req, res) => {
    userApi.getAllUsers()
    .then((users) => {
        res.json(users)
    })
})

userRouter.get('/:userId', (req, res) => {
    userApi.getUser(req.params.userId)
    .then((user) => {
        res.json(user)
    })
    .catch((err) => {
        console.log(err)
    })
})

userRouter.post('/', (req, res) => {
    userApi.addNewUser(req.body)
    .then((user) => {
        res.json(user)
    })
})

userRouter.put('/:userId', (req, res) => {
    userApi.updateUser(req.params.userId, req.body)
    .then((updateUser) => {
        res.json(updateUser)
    })
})

userRouter.delete('/:userId', (req, res) => {
    userApi.deleteUser(req.params.userId)
    .then((deleteUser) => {
        res.json(deleteUser)
    })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  userRouter
}
