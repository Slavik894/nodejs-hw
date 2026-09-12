import {Router} from 'express';
import { createNote, deleteNote, getNotes, getnotesById } from '../constrollers/notesController';

const router = Router();

router.get('/notes', getNotes);

router.get('/notes/:noteId', getnotesById);
router.post('/notes', createNote);
router.delete('/notes/:notesId', deleteNote);





export default router;