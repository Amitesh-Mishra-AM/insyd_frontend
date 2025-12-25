import { stockIn, stockOut } from "../services/api";
import { useState } from "react";

export default function StockControls({ id, refresh }) {
  const [amount, setAmount] = useState("");

  const handleIn = async () => {
    if (!amount || amount <= 0) return;
    await stockIn(id, Number(amount));
    setAmount("");
    refresh();
  };

  const handleOut = async () => {
    if (!amount || amount <= 0) return;
    await stockOut(id, Number(amount));
    setAmount("");
    refresh();
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="number"
        value={amount}
        onChange={(e) =>
          setAmount(e.target.value === "" ? "" : Number(e.target.value))
        }
        className="w-16"
        placeholder="Qty"
      />
      <button
        onClick={handleIn}
        className="bg-[var(--olive)] text-white hover:cursor-pointer hover:bg-green-800"
      >
        +
      </button>
      <button
        onClick={handleOut}
        className="bg-[var(--danger)] text-white hover:cursor-pointer hover:bg-red-800"
      >
        -
      </button>
    </div>
  );
}
