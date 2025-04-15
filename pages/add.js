import AddItemForm from "../components/AddItemForm";
import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function AddItemPage() {
    return (
        <>
            <Head>
                <title>Add New Item</title>
            </Head>
            <div className={styles.container}>
                <AddItemForm />
            </div>
        </>
    );
}