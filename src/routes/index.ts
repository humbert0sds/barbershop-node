import { Router } from 'express';
import * as pageController from '../controllers/pageController'
import * as searchController from '../controllers/searchController'

const router = Router();

router.get('/', pageController.home)
router.get('/cortes-curtos', pageController.cortesCurtos)
router.get('/cortes-medios', pageController.cortesMedios)
router.get('/search', searchController.search)

export default router;