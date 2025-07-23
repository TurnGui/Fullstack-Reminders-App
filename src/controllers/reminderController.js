import { ReminderService } from "../services/remindersService.js";

export const ReminderController = {
  async getAllReminders(req, res) {
    try {
      const reminders = ReminderService.getAllReminders();
      res.status(200).json(reminders);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch reminders' });
    }
  },

  async getReminderByID(req, res) {
    const reminderId = parseInt(req.params.id)
    res.send(`Get reminder by ID: ${reminderId}`);
  },

  async createReminder(req, res) {
    const reminder = req.body.reminder;
    console.log(req.body)
    res.send(reminder)
  },

  async updateReminder(req, res) {
    const reminderId = parseInt(req.params.id)
    res.send('Update old reminder')
  },

  async deleteReminder(req, res) {
    const reminderId = parseInt(req.params.id)
    res.send('Delete old reminder')
  },

}
