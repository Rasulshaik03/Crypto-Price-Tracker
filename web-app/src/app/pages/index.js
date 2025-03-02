import { useState } from "react";
import { useCryptoPrices } from "../hooks/useCryptoPrices";

export default function Home() {
  const { data, error, isLoading, refetch } = useCryptoPrices();
  const [search, setSearch] = useState("");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  const cryptoList = Object.entries(data).filter(([key]) =>
    key.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Crypto Price Tracker</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px", marginBottom: "10px" }}
      />
      <button onClick={refetch} style={{ marginLeft: "10px" }}>
        Refresh
      </button>
      <ul>
        {cryptoList.map(([key, value]) => (
          <li key={key}>
            {key.toUpperCase()}: ${value.usd}
          </li>
        ))}
      </ul>
    </div>
  );
}
