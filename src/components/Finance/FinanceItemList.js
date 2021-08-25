import React, { useState } from "react";

import "./FinanceItemList.css";
import FinanceItem from "./FinanceItem";
import Card from "../General UI/Card";
import FinanceFilter from "./FinanceFilter";

const FinanceItemList = (props) => {
  const [filteredYear, setYear] = useState("2021");

  const filterChangedHandler = (enteredFilter) => {
    setYear(enteredFilter);
  };

  const filteredFinance = props.financeItems.filter(
    (fi) => fi.date.getFullYear() + "" === filteredYear
  );

  // in react we can add JSX into variables
  let financeContent = <p>Please add something!!!</p>;
  if (filteredFinance.length > 0) {
    financeContent = filteredFinance.map((fi) => (
      <FinanceItem
        key={fi.id}
        title={fi.title}
        date={fi.date}
        price={fi.price}
        currency={fi.currency}
      ></FinanceItem>
    ));
  }

  return (
    <Card className="finance_list">
      <div>
        <FinanceFilter
          selected={filteredYear}
          onFilterChange={filterChangedHandler}
        />
      </div>
      {financeContent}
    </Card>
  );
};

export default FinanceItemList;
