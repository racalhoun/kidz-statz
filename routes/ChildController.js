const express = require('express')
const router = express.Router()
const { Children } = require('../db/schema')

router.get('/', async (req, res)=>{
    try{
        const children = await Children.find({})
        res.json(children)
    } catch (err) {
        res.send(err)
    }
})
router.get('/:id', async (req, res)=>{
    try{
        const child = await Children.findById(req.params.id)
        res.json(child)
    } catch(err){
        res.send(err)
    }
})
router.post('/', async (req, res)=>{
    try{
        const newChild = new Children(req.body.child)
        const saved = await newChild.save()
        res.json(saved)
    } catch (err) {
        res.send(err)
    }
})







module.exports = router