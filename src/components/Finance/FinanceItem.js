import React from "react";

import "./FinanceItem.css";
import DateItem from "./DateItem";
import Card from "../General UI/Card";

const FinanceItem = (props) => {
  return (
    //Custom components cannot be used as wrapper by default
    //Props.children has to be used on wrapper
    <Card className="finance-item">
      <DateItem date={props.date}></DateItem>
      <div className="finance-item__description">
        <h2>{props.title}</h2>
        <div className="finance-item__price">
          {props.price + " " + props.currency}
        </div>
      </div>
    </Card>
  );
};

export default FinanceItem;
