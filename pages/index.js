import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import AllItems from "../components/AllItems";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inventory Management System</title>
      </Head>

      <div className="container">
        <div className="buttons">
          <Link href="/add" className="button primary" legacyBehavior>
            <a className={`${styles.button} ${styles.add}`}>Add Item</a>
          </Link>
        </div>

        <h1>Inventory List</h1>
        <AllItems />
      </div>
    </>
  );
}