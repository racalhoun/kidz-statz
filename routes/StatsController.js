const express = require('express')
const router = express.Router({mergeParams: true})
const {Stat, Children} = require('../db/schema')

router.get('/', async (req, res)=>{
    try{
        const child = await Children.findById(req.params.childId)
        res.json(child.stats)
    } catch (err) {
        res.send(err)
    }
})
router.get('/:id', async (req, res)=>{
    try{
    const stat = await Stat.findById(req.params.id)
    res.json(stat)
    } catch (err) {
        res.send(err)
    }    
})
router.post('/', async (req, res)=>{
    try{
        const newStat = new Stat(req.body.stats)
        const child = await Children.findById(req.params.childId)
       child.stats.push(newStat)
       const saved = await child.save()
        res.json(saved)
    } catch (err){
        res.send(err)
    }
})
  

module.exports = router









module.exports = router