import React from "react";

const Cart = (props) => {
  const { favoriteAuthors } = props;
  //   console.log(favoriteAuthors);
  let total = 0;
  for (const i of favoriteAuthors) {
    console.log(i.author.salary);
    total = total + i.author.salary;
  }
  console.log(props.favoriteAuthors);
  return (
    <div>
      <h5>Total Cost: ${total}</h5>
    </div>
  );
};

export default Cart;
