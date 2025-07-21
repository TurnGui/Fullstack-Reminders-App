import { Router } from 'express'
import { ReminderController } from "../controllers/reminderController.js";

const router = Router();

router.get('/', ReminderController.getAllReminders);


router.get('/:id', ReminderController.getReminderByID);

router.post('/', ReminderController.createReminder);

router.patch('/:id', ReminderController.updateReminder);

router.delete('/:id', ReminderController.deleteReminder);

export default router; // Exports the router instance for use in other parts of the applications