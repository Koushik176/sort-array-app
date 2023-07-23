import React, { useMemo } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  const { items } = props;
  const order = props.order;

  const descendingSortedList = useMemo(() => {
    if(order === "descending"){
      console.log("descending");
      return items.sort((a, b) => b - a);
    }
  }, [order, items]);
  
  const ascendingSortedList = useMemo(() => {
    if(order === "ascending") {
      console.log("ascending");
      return items.sort((a, b) => a - b);
    }
  }, [order,items]);

  //console.log('DemoList RUNNING');


  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {order === "ascending" && ascendingSortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
        {order === "descending" && descendingSortedList.map((item) => (
            <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);