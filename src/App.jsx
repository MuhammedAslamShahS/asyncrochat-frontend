import { useEffect } from "react";

function App() {
  useEffect(() => {
    const API = import.meta.env.VITE_API_URL;

    fetch(`${API}/api/auth/login`)
      .then(res => res.text())
      .then(data => {
        console.log("Backend says:", data);
      })
      .catch(err => {
        console.error("API error:", err);
      });
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>AsyncroChat Frontend</h1>
      <p>Check console for backend response</p>
    </div>
  );
}

export default App;
