import { ReminderService } from "../services/remindersService.js";

export const ReminderController = {
  async getAllReminders(req, res) {
    try {
      const reminders = ReminderService.getAllReminders();
      res.status(200).json(reminders);
    } catch (error) {
      res.status(500).send({ message: 'Internal Server Error' });
    }
  },

  async getReminderById(req, res) {
    try {
     const reminderId = parseInt(req.params.id);
     
     const reminder = ReminderService.getReminderById(reminderId);
     res.status(200).json(reminder);

    } catch (error) {
      res.status(500).send({ message: 'Internal Server Error' });
    }
    const reminderId = parseInt(req.params.id);
    res.send(`Get reminder by ID: ${reminderId}`);
  },

  async createReminder(req, res) {
    try {
      const reminder = ReminderService.createReminder(req.body);
      res.status(200).json(reminder);
    } catch (error) {
            res.status(500).send({ message: 'Internal Server Error' });
    }
  },

  async updateReminder(req, res) {
    try {
      const reminderId = parseInt(req.params.id);

      const updatedReminder = ReminderService.updateReminder(reminderId, req.body);
    } catch (error) {
      res.status(500).send({ message: 'Internal Server Error' });
    }
  },

  async deleteReminder(req, res) {
    try {
      const reminderId = parseInt(req.params.id);

      const deletedReminder = ReminderService.deleteReminder(reminderId);
      res.status(200).json(deletedReminder);
    } catch (error) {
      res.status(500).send({ message: 'Internal Server Error' });
    }
  },

}
