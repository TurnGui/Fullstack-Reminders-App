export const ReminderController = {
  async getAllReminders(req, res) {
    res.send('Get all reminders');
  },

  async getReminderByID(req, res) {
    res.send('Get reminder by ID');
  },

  async createReminder(req, res) {
  res.send('Create a new reminder')
  },

  async updateReminder(req, res) {
  res.send('Update old reminder')
  },

  async deleteReminder(req, res) {
  res.send('Delete old reminder')
  },

}
