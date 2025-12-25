import StockControls from "./StockControls";
import ThresholdControl from "./ThresholdControl";
import { deleteItem } from "../services/api";

export default function InventoryTable({ items, refresh }) {
  return (
    <div className="bg-[var(--table-bg)] border border-[var(--border)] rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[var(--header-bg)]">
            <th className="px-4 py-3 text-left">SKU</th>
            <th className="px-4 py-3 text-left">Product</th>
            <th className="px-4 py-3 text-right">Qty</th>
            <th className="px-4 py-3 text-left">Threshold</th>
            <th className="px-4 py-3 text-left">Status</th>
            <th className="px-4 py-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr
              key={item._id}
              className="border-t border-[var(--border)] hover:bg-[#faf9f6]"
            >
              <td className="px-4 py-3">{item.sku}</td>
              <td className="px-4 py-3">{item.name}</td>
              <td className="px-4 py-3 text-right font-medium">
                {item.quantity}
              </td>

              <td className="px-4 py-3">
                <ThresholdControl
                  id={item._id}
                  currentThreshold={item.threshold}
                  refresh={refresh}
                />
              </td>

              <td
                className={`px-4 py-3 font-medium ${
                  item.isLowStock
                    ? "text-[var(--danger)]"
                    : "text-[var(--olive)]"
                }`}
              >
                {item.isLowStock ? "Low Stock" : "Healthy"}
              </td>

              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <StockControls id={item._id} refresh={refresh} />
                  <button
                    onClick={async () => {
                      if (!confirm("Delete this item?")) return;
                      await deleteItem(item._id);
                      refresh();
                    }}
                    className="border border-[var(--danger)] text-[var(--danger)] hover:bg-[var(--danger)] hover:text-white hover:cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
