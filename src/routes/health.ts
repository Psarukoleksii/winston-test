import {Router, Request, Response} from 'express';
import logger from '../shared/logger';

const router = Router();

router.get('/get', (req: Request, res: Response) => {
    logger.info('Get all health records')
    res.send('Health records were gotten');
});
router.post('/create', (req: Request, res: Response) => {
    logger.info('New health record was created')
    res.send('Health records were gotten');
});

router.put('/update', (req: Request, res: Response) => {
    logger.info('New health record was updated')
    res.send('Health record was updated');
});

router.delete('/delete', (req: Request, res: Response) => {
    logger.info('New health record was deleted')
    res.send('Health record was deleted');
})

module.exports = router;
