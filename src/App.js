import React, { useState } from "react";

import FinanceItemList from "./components/Finance/FinanceItemList";
import NewFinance from "./components/NewFinance/NewFinance";

const INITIAL_FINANCE = [
  {
    id: "900",
    title: "Book",
    date: new Date(2021, 2, 8),
    price: 250,
    currency: "CZK",
  },
  {
    id: "112",
    title: "Drink",
    date: new Date(2021, 4, 8),
    price: 120,
    currency: "CZK",
  },
  {
    id: "113",
    title: "Mobile",
    date: new Date(2021, 10, 7),
    price: 19999,
    currency: "CZK",
  },
];

const App = () => {
  const [financeItemsAll, setFinanceItems] = useState(INITIAL_FINANCE);

  const addFinanceDataHandler = (enteredFinanceData) => {
    setFinanceItems((prevFinance) => {
      return [enteredFinanceData, ...prevFinance];
    });
  };

  return (
    <div>
      <NewFinance onAddFinanceData={addFinanceDataHandler} />
      <FinanceItemList financeItems={financeItemsAll}></FinanceItemList>
    </div>
  );
};

export default App;
