import { useState } from 'react'

import './App.css'

function App() {

  const [formData, setFormData] = useState({
    date: "",
    trade_code: "",
    high: "",
    low: "",
    open: "",
    close: "",
    volume: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const data = { ...formData, volume: parseInt(formData.volume.replace(/,/g, ""), 10) };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/stocktrades/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Stock trade added successfully!");
        setFormData({
          date: "",
          trade_code: "",
          high: "",
          low: "",
          open: "",
          close: "",
          volume: "",
        });
      } else {
        alert("Failed to add stock trade");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <input type="date" name="date" value={formData.date} onChange={handleChange} placeholder="Date" />
      <input type="text" name="trade_code" value={formData.trade_code} onChange={handleChange} placeholder="Trade Code" />
      <input type="number" name="high" value={formData.high} onChange={handleChange} placeholder="High" />
      <input type="number" name="low" value={formData.low} onChange={handleChange} placeholder="Low" />
      <input type="number" name="open" value={formData.open} onChange={handleChange} placeholder="Open" />
      <input type="number" name="close" value={formData.close} onChange={handleChange} placeholder="Close" />
      <input type="text" name="volume" value={formData.volume} onChange={handleChange} placeholder="Volume" />
      <button onClick={handleSubmit}>Add Stock Trade</button>
    </div>
  );
}


export default App


