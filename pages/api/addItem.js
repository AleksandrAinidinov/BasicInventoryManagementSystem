import pool from '../../utils/db.js';

export default async function handler(req, res) {
    if (req.method == 'POST'){
        const { name, category, quantity, price } = req.body;

        try {
            const result = await pool.query(
                'INSERT INTO inventory (name, category, quantity, price) VALUES ($1, $2, $3, $4) RETURNING *',
                [name, category, quantity, price]
            );
            res.status(200).json({message: "Item added successfully!", item: result.rows[0]});
        }
        catch (error) {
            res.status(500).json({ error: "Failed to add item" });
        }
    }

}