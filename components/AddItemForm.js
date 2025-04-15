import { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";

export default function AddItemForm() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        category: "",
        quantity: 1,
        price: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        let parsedValue = value;
        if (name == "quantity") {
            parsedValue = parseInt(value);
        }
        if (name == "price") {
            parsedValue = parseInt(value);
        }

        setFormData({ ...formData, [name]: value });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form data
        if (!formData.name || !formData.category){
            alert("Name and Catgory fields are required!");
            return;
        }
        if (formData.quantity <= 0) {
            alert("Quantity must be at least 1!");
            return;
        }
        if (formData.price < 0) {
            alert("Price cannot be negative!");
            return;
        }

        const response = await fetch("/api/addItem", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Item added successfully!");
            router.push("/");
        }
        else {
            alert('Error adding item!');
            console.error("Error adding item:", response.statusText);
        }
    };


  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2 className={styles.formTitle}>Add New Item</h2>

      <input
        type="text"
        name="name"
        placeholder="Item Name"
        value={formData.name}
        onChange={handleChange}
        required
        className={styles.inputField}
      />

      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
        className={styles.inputField}
      />

      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleChange}
        required
        min={1}
        className={styles.inputField}
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
        min="0"
        step="0.01"
        className={styles.inputField}
      />

      <button type="submit" className={styles.submitButton}>
        Add New Item
      </button>
    </form>
  );
}