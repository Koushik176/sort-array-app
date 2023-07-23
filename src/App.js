//import logo from './logo.svg';
import React, { useState, useCallback, useMemo } from "react";

import "./App.css";
import DemoList from "./Components/Demo/DemoList";
import Button from "./Components/UI/Button/Button";

function App() {
  const [listTitle, setListTitle] = useState("My List");
  const [listOrder, setListOrder] = useState("ascending");
  const [buttonText, setButtonText] = useState("change to descending order");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const changeOrderHandler = useCallback(() => {
    setButtonText((prevText) => {
      if(prevText === "change to descending order") {
        return "change to ascending order";
      }else {
        return "change to descending order";
      }
    })
    setListOrder((prevOrder) => {
      if(prevOrder === "ascending") {
        return "descending";
      }
      else{
        return "ascending";
      }
    });
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);
  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} order={listOrder} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeOrderHandler}>{buttonText}</Button>
    </div>
  );
}

export default App;
