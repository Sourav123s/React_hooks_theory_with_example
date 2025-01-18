import { useCallback, useState } from "react"
import "../App.css";
import UseCallBackChild from "./useCallBackChild";

const UseCallBackParent = () => {
  const initialItems = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grapes",
    "Honeydew",
  ];

  const [items, setItems] = useState(initialItems);
  // const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = useCallback((text) => {
    console.log(items[0])
    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(text.toLowerCase())
    );
    setItems(filteredItems);
  },[items]) 

  const handleShuffle = () => {
    const shuffledItems = [...items].sort(() => Math.random() - 0.5);
    setItems(shuffledItems);
  };


  return (
    <div className="app">
    <div className="header">
      <h1>Item Listing</h1>
      <div className="controls">
        {/* <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        /> */}
        <UseCallBackChild  onChange={handleSearch}/>
        <button onClick={handleShuffle} className="shuffle-button">
          Shuffle
        </button>
      </div>
    </div>
    <ul className="item-list">
      {items.length > 0 ? (
        items.map((item, index) => (
          <li key={index} className="item">
            {item}
          </li>
        ))
      ) : (
        <li className="no-results">No items found</li>
      )}
    </ul>
  </div>
  )
}

export default  UseCallBackParent