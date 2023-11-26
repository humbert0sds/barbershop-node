import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('home')
})
router.get('/cortes-curtos', (req, res) => {
    res.send('LISTA DE CORTES CURTOS')
})
router.get('/cortes-medios', (req, res) => {
    res.send('LISTA DE CORTES MEDIOS')
})
router.get('/cortes-longos', (req, res) => {
    res.send('LISTA DE CORTES LONGOS')
})
router.get('/search', (req, res) => {
    res.send('PESQUISA')
})



export default router;