import pool from '../config/db.js';

// Get all books only
export const getBooks = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM tblbook');
    return rows;
  } catch (e) {
    console.error(e);
    throw e;
  }
};



