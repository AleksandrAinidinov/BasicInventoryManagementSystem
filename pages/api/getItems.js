import pool from '../../utils/db.js';

export default async function handler(req, res) {
    if (req.method == 'GET'){
        try {
            const result = await pool.query('SELECT * FROM inventory ORDER BY id ASC');
            res.status(200).json(result.rows);
        }
        catch (error) {
            console.error("Error fetching items:", error);
            res.status(500).json({ error: "Failed to fetch items" });
        }
    }

}