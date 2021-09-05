import React, { useState } from "react";

import "./FinanceItemBox.css";

import FinanceItemList from "./FinanceItemList";
import Card from "../General UI/Card";
import FinanceFilter from "./FinanceFilter";
import FinanceChart from "./FinanceChart";

const FinanceItemBox = (props) => {
  const [filteredYear, setYear] = useState("2021");

  const filterChangedHandler = (enteredFilter) => {
    setYear(enteredFilter);
  };

  const filteredFinance = props.financeItems.filter(
    (fi) => fi.date.getFullYear() + "" === filteredYear
  );

  const deleteItemHandler = (id) => {
    props.onDelete3(id);
  };

  return (
    <Card className="finance_box">
      <div>
        <FinanceFilter
          selected={filteredYear}
          onFilterChange={filterChangedHandler}
        />
      </div>
      <FinanceChart filteredFinance={filteredFinance} />
      <FinanceItemList
        filteredFinance={filteredFinance}
        onDelete2={deleteItemHandler}
      />
    </Card>
  );
};

export default FinanceItemBox;
