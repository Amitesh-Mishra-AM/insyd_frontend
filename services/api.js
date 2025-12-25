const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getItems = async () => {
  const res = await fetch(`${API_URL}/items`);
  return res.json();
};

export const addItem = async (data) => {
  const res = await fetch(`${API_URL}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const stockIn = async (id, amount) => {
  const res = await fetch(`${API_URL}/items/${id}/stock-in`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount }),
  });
  return res.json();
};

export const stockOut = async (id, amount) => {
  const res = await fetch(`${API_URL}/items/${id}/stock-out`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount }),
  });
  return res.json();
};


export const deleteItem=async(id)=>{
    const res= await fetch(`${API_URL}/items/${id}`, {
        method: "DELETE"
    });
    return res.json();
};

export const updateThreshold=async(id,threshold)=>{
    const res= await fetch(`${API_URL}/items/${id}/threshold`,{
        method: "PUT",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({threshold})
    });
    return res.json();
}