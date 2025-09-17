import db from '../config/db.js';

export const ReminderModel = {
    async getAll() {
        const result = await db.query ('SELECT * FROM reminders ORDER BY created_at DESC');
        return result.rows;
    },

    async findById(id) {
        const result = await db.query('SELECT * FROM reminders WHERE id = $1', [id]);
        return result.rows[0];
    },
    
    async create({reminder, notes, user_id}) {
        const result =  await db.query(`
            INSERT INTO reminders ( reminder, notes, user_id)
            VALUES ($1, $2, $3) 
            RETURNING *`,
             [reminder, notes, user_Id]
        )
        return result.rows[0];
    },

    async update(){
        //implement later
    },
    
    async delete(reminderId) {
        const result = await db.query('DELETE FROM reminders WHERE id = $1', [reminderId])
        return result.rowCount;
    }
};