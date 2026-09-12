import {Router} from 'express';
import { createNote, deleteNote, getNotes, getnotesById } from '../controllers/notesController.js';

const router = Router();

router.get('/notes', getNotes);

router.get('/notes/:noteId', getnotesById);
router.post('/notes', createNote);
router.delete('/notes/:noteId', deleteNote);





export default router;