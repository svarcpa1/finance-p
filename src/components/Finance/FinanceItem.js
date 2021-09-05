import React from "react";

import "./FinanceItem.css";
import DateItem from "./DateItem";
import Card from "../General UI/Card";

const FinanceItem = (props) => {
  const removeFinanceHandler = () => {
    props.onDelete(props.id);
  };

  return (
    //Custom components cannot be used as wrapper by default
    //Props.children has to be used on wrapper
    <li>
      <Card className="finance-item">
        <DateItem date={props.date}></DateItem>
        <div className="finance-item__description">
          <h2>{props.title}</h2>
          <div className="finance-item__price">
            {props.price + " " + props.currency}
          </div>
          <div
            className="close"
            onClick={() => {
              if (window.confirm("Are you sure you wish to delete this item?"))
                removeFinanceHandler();
            }}
          />
        </div>
      </Card>
    </li>
  );
};

export default FinanceItem;
