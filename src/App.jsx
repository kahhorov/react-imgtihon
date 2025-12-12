import { useContext, useEffect, useState } from "react";
import useAxios from "./hooks/useAxios";
import Main from "./components/Grid";
import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = useState(null);
  const [theme, setTheme] = useState("light");
  const { get, loading } = useAxios();

  useEffect(() => {
    get().then((res) => setData(res.data));
  }, []);
  if (loading) {
    return (
      <div className="w-full h-screen items-center justify-center">
        Yuklanmoqda...
      </div>
    );
  }

  return (
    <div
      className={` ${
        theme === "light" ? "bg-white text-black" : "bg-transparent"
      }`}
    >
      <Navbar theme={theme} setTheme={setTheme} />
      <Main data={data} theme={theme} setTheme={setTheme} />
    </div>
  );
}
export default App;
