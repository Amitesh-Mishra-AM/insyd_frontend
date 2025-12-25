import { useState } from "react";
import { updateThreshold } from "../services/api";

export default function ThresholdControl({ id, currentThreshold, refresh }) {
  const [value, setValue] = useState(currentThreshold);

  const handleUpdate = async () => {
    if (value === "" || value < 0) return;
    await updateThreshold(id, Number(value));
    refresh();
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="number"
        value={value}
        onChange={(e) =>
          setValue(e.target.value === "" ? "" : Number(e.target.value))
        }
        className="w-20"
      />
      <button
        onClick={handleUpdate}
        className="bg-[#e9c46a] hover:opacity-90"
      >
        Set
      </button>
    </div>
  );
}
