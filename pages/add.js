import { useState } from "react";
import { addItem } from "../services/api";
import { useRouter } from "next/router";

export default function AddItem() {
  const [form, setForm] = useState({
    sku: "",
    name: "",
    quantity: "",
    threshold: "",
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addItem({
      ...form,
      quantity: Number(form.quantity),
      threshold: Number(form.threshold),
    });
    router.push("/");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded mt-10">
      <h1 className="text-xl font-bold mb-4">Add Inventory Item</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          placeholder="SKU"
          className="w-full border px-3 py-2 rounded"
          onChange={(e) => setForm({ ...form, sku: e.target.value })}
        />
        <input
          placeholder="Name"
          className="w-full border px-3 py-2 rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantity"
          className="w-full border px-3 py-2 rounded"
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
        />
        <input
          type="number"
          placeholder="Low Stock Threshold"
          className="w-full border px-3 py-2 rounded"
          onChange={(e) => setForm({ ...form, threshold: e.target.value })}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}
