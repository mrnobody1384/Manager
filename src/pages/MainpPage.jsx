import AddButton from "../components/AddButton/AddButton";
import Items from "../components/Items/Items";
import Search from "../components/Search/Search";
import { useState, useEffect } from "react";
import "./MainPage.css";
function MainPage() {
  const [data, setData] = useState([]);
  const [load, setload] = useState(false);
  useEffect(() => {
    const localData = localStorage.getItem("data");
    console.log(localData);
    if (localData) {
      setData(JSON.parse(localData));
    }
  }, [load]);

  function reload() {
    setload(!load);
  }
  return (
    <div>
      <Search reload={reload}></Search>
      <div className="all-data">
        <AddButton reload={reload}></AddButton>
        <Items data={data} reload={reload}></Items>
      </div>
    </div>
  );
}

export default MainPage;
