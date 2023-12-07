import React, { useEffect, useState } from "react";
import styled from "styled-components";
const SubmitStyling = styled.div`
  display: flex;
  flex-direction: flex-end;
  justify-content: space-between;
`;

const PlusMinusButton = styled.div`
  display: flex;
  border: 0.5px solid;
  border-radius: 10px;
  box-sizing: border-box;
  width: 105px;
  height: 40px;
  flex-direction: center;
  justify-content: center;
  margin-right: 10px;
  .count-label {
    display: flex;
    align-items: center;
    justify-content: space-around;

    button {
      border: 0.5px solid;
      border-radius: 10px;
      background-color: #fdc913;
    }
    p {
      font-size: 20px;
    }
  }
`;

const SiparisToplami = styled.div`
  border: 0.1px solid;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;
  width: 50%;
`;

const SubmitButton = styled.button`
  width: 100%;
  border: 0.1px solid;
  border-radius: 10px;
  box-sizing: border-box;
  height: 40px;
  background-color: #fdc913;
  color: black;
  font-family: "Barlow", sans-serif;
  font-weight: bold;
  font-size: 15px;
`;
function Submit(props) {
  const minOrderAmount = 1;
  const onSubmitHandler = props.onSubmitHandler;
  const isValid = props.isValid;
  const pizza = props.pizza;
  const pizzaPrice = props.pizzaPrice;
  const ingredientCost = props.ingredientCost;

  const [orderAmount, setOrderAmount] = useState(minOrderAmount);
  const [price, setPrice] = useState(pizzaPrice);
  const [ingPrice, setIngPrice] = useState(0);
  console.log(price);
  console.log(ingPrice);

  useEffect(() => {
    setIngPrice(pizza.ingredientCount * ingredientCost);
    console.log(ingPrice);
  }, [pizza]);

  const onOrderAmountClick = (e) => {
    setOrderAmount(
      e.target.value === "+"
        ? orderAmount + 1
        : orderAmount - 1 >= minOrderAmount
        ? orderAmount - 1
        : minOrderAmount
    );
  };

  return (
    <SubmitStyling>
      <PlusMinusButton>
        <label className="count-label">
          <button className="azalt" value="-" onClick={onOrderAmountClick}>
            -
          </button>
          <p>{orderAmount}</p>
          <button className="artir" value="+" onClick={onOrderAmountClick}>
            +
          </button>
        </label>
      </PlusMinusButton>

      <SiparisToplami>
        <h2>Sipariş Toplamı</h2>
        <p>Seçimler {pizza.ingredientCount}</p>
        <p>Toplam {price}</p>
        <label name="submit" onSubmit={onSubmitHandler}></label>
        <SubmitButton disabled={!isValid}>SİPARİŞ VER</SubmitButton>
      </SiparisToplami>
    </SubmitStyling>
  );
}

export default Submit;
