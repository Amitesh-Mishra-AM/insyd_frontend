import { useEffect, useState } from "react";
import { getItems } from "../services/api";
import InventoryTable from "../components/InventoryTable";
import Link from "next/link";

export default function Home() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await getItems();
    setItems(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-8 py-10">
      <header className="flex justify-between items-center mb-8">
        <h1>Inventory Control</h1>
        <Link
          href="/add"
          className="border border-[var(--foreground)] px-4 py-2 rounded hover:bg-[var(--foreground)] hover:text-white transition"
        >
          Add Item
        </Link>
      </header>

      <InventoryTable items={items} refresh={fetchItems} />
    </main>
  );
}
