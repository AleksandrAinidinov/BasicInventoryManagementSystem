import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

export default function AllItems() {
    const [items, setItems] = useState([]);

    useEffect(() => {
    const fetchItems = async () => {
        try {
            const result = await fetch("/api/getItems");
            if (!result.ok) {
                throw new Error("Failed to fetch inventory");
            }

            const data = await result.json();
            
            if (Array.isArray(data)) {
                setItems(data);
            }
            else {
                console.error("Unexpected data format:", data);
            }
        }
        catch (error) {
            console.error("Error fetching inventory:", error);
        }
    };

    fetchItems()}, []);

    return (
        <div className={styles.allItemsContainer}>
        <h2 className={styles.AllItemsTitle}>All Items</h2>
        <table className={styles.allItemsTable}>
            <thead>
            <tr>
                <th>Item ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Date Added</th>
                {/* <th>Actions</th> */}
            </tr>
            </thead>
            <tbody>
            {items.length > 0 ? (
                items.map((item) => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price}</td>
                    <td>{new Date(item.date_added).toLocaleString()}</td>
                </tr>
                ))
            ) 
            : 
            (
                <tr>
                <td>No Items in the Inventory</td>
                </tr>
            )}
            </tbody>
        </table>
        </div>
    );
}