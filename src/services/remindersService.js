import { ReminderModel } from "../models/reminderModel.js";

export const ReminderService = {
  async getAllReminders() {
	  return ReminderModel.getAll();
  },

  async getReminderById(reminderId) {
	  // Fetch Reminder By Id
    const reminder = await ReminderModel.findbyId(reminderId);
    if (!reminder) {
      throw new Error('Reminder not found');
    }
    return reminder;
  },

  async createReminder(newReminder) {
	  const { reminder, notes, user_id } = newReminder;
    
    const sanatizedReminder ={ 
      reminder: reminder?.trim(),
      notes: notes?.trim(),
      user_Id
    };  
    
    const createdReminder = ReminderModel.create(sanatizedReminder);
    return createReminder;
  },

  async updateReminder(reminderId, newValues) {
	  // Update Reminder
    return {};
  },

  async deleteReminder(reminderId) {
	  // Delete Reminder
    return { message: 'Reminder deleted successfully' };
  }
};