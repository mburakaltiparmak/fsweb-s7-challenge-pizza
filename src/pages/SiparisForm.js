import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import * as Yup from "yup";
import "../styles/SiparisForm.css";
import SizeAndDough from "../components/SizeAndDough";
import Ingredients from "../components/Ingredients";
import Submit from "../components/Submit";
import styled from "styled-components";

function SiparisForm(props) {
  const pizzaName = "Position Absolute Acılı Pizza";
  const pizzaPrice = 85.5;
  const pizzaDescription =
    "Ürün AçıklamasıÜrün AçıklamasıÜrün AçıklamasıÜrün AçıklamasıÜrün AçıklamasıÜrün AçıklamasıÜrün AçıklamasıÜrün AçıklamasıÜrün AçıklamasıÜrün AçıklamasıÜrün AçıklamasıÜrün AçıklamasıÜrün Açıklaması";
  const pizzaIngredients = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Mısır",
    "Sucuk",
    "Jalepeno",
    "Sarımsak",
    "Biber",
    "Salam",
    "Ananas",
    "Kabak",
  ];
  const ingredientCost = 5;

  let initArr = [];

  pizzaIngredients.forEach((element) => {
    initArr.push(false);
  });

  const initPizza = {
    pizzaName: pizzaName,
    price: pizzaPrice,
    description: pizzaDescription,
    ingredients: [...initArr],
    ingredientCount: 0,

    size: "",
    dough: "",
    name: "",
    note: "",
  };

  const [isValid, setIsValid] = useState(false);
  const [pizza, setPizza] = useState(initPizza);
  const [errState, setErrState] = useState({
    size: "",
    dough: "",
    ingredients: "",
    name: "",
    note: "",
  });

  //Handler Functions
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (isValid) {
      axios
        .post("https://reqres.in/api/orders", pizza)
        .then((r) => {
          console.log(r.data);
          setPizza(initPizza);
        })
        .catch((e) => {
          console.log(e);
          alert(e);
        });
    }
  };

  const onInputChange = (e) => {
    let key = e.target.name;

    if (key !== "ingredients") {
      const value = e.target.value;

      yupReach(key, value);

      setPizza({ ...pizza, [key]: value });
    } else {
      key = "ingredientCount";
      let index = pizzaIngredients.indexOf(e.target.id);
      let tmpArr = [...pizza.ingredients];
      tmpArr[index] = !tmpArr[index];

      let ingC = tmpArr.reduce(
        (acc, element) => (element === true ? acc + 1 : acc + 0),
        0
      );

      yupReach(key, ingC);

      setPizza({ ...pizza, ingredients: tmpArr, ingredientCount: ingC });
    }
  };

  //Yup
  const formSchema = Yup.object().shape({
    size: Yup.string()
      .required("Büyüklük Seç")
      .oneOf(["Küçük", "Orta", "Büyük"]),
    dough: Yup.string()
      .required("Hamur Tipi Seç")
      .oneOf(["İnce", "Orta", "Kalın"]),
    ingredientCount: Yup.number()
      .min(4, "En az 4 malzeme seç")
      .max(10, "En fazla 10 malzeme seçebilirsin"),
    name: Yup.string().required("İsim gir").min(2, "En az 2 karakter"),
    note: Yup.string(),
  });

  function yupReach(key, value) {
    Yup.reach(formSchema, key)
      .validate(value)
      .then((r) => {
        setErrState({ ...errState, [key]: "" });
      })
      .catch((e) => {
        setErrState({ ...errState, [key]: e.message });
      });
  }

  useEffect(() => {
    formSchema.isValid(pizza).then((r) => {
      setIsValid(r);
    });
  }, [pizza]);

  const SiparisContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    height: 85vw;
  `;

  const PizzaForm = styled.div`
    font-family: "Barlow", sans-serif;
    width: 100%;
    max-width: 600px;
    padding: 20px;
    box-sizing: border-box;
    text-align: left;

    .urunAdi {
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 30px;
    }
    .urunAciklama {
      font-size: 17px;
      font-weight: light;
      margin-bottom: 50px;
    }

    h3 {
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 30px;
    }
  `;
  const HamurVeBoyut = styled.div`
    margin-bottom: 40px;
  `;
  const Isim = styled.div`
    margin-bottom: 40px;
  `;
  const Not = styled.div`
    margin-bottom: 40px;
    width: 100%;
  `;
  const Icindekiler = styled.div`
    margin-bottom: 50px;
    font-size: 15px;
  `;
  const SiparisButonu = styled.div`
    margin-bottom: 50px;
  `;
  const IsimInput = styled.input`
    width: 500px;
    padding: 8px;
    margin-top: 8px;
    border: 1px solid;
    border-radius: 3px;
  `;

  const NotInput = styled.input`
    width: 500px;
    height: 50px;
    padding: 8px;
    margin: 8px 0 10px 0;
    border: 1px solid;
    border-radius: 3px;
  `;

  return (
    <SiparisContainer>
      <PizzaForm>
        <p className="urunAdi">{pizza.pizzaName}</p>
        <h3>{pizza.price} ₺</h3>
        <p className="urunAciklama">{pizza.description}</p>
        <HamurVeBoyut>
          <SizeAndDough onInputChange={onInputChange} pizza={pizza} />
        </HamurVeBoyut>

        <Icindekiler>
          <Ingredients
            onInputChange={onInputChange}
            pizzaIngredients={pizzaIngredients}
            pizza={pizza}
            ingredientCost={ingredientCost}
          />
        </Icindekiler>
        <Isim>
          İsim:
          <br />
          <IsimInput
            type="text"
            id="name-input"
            onChange={onInputChange}
            name="name"
            placeholder="Lütfen isminizi girin."
          />
        </Isim>
        <Not>
          Sipariş Notu:
          <br />
          <NotInput
            type="text"
            id="special-text"
            name="note"
            onChange={onInputChange}
            placeholder="Siparişine eklemek istediğin bir not var mı?"
          />
          <hr />
        </Not>
        <SiparisButonu>
          <Submit
            onSubmitHandler={onSubmitHandler}
            isValid={isValid}
            pizza={pizza}
            pizzaPrice={pizzaPrice}
          />
        </SiparisButonu>
      </PizzaForm>
    </SiparisContainer>
  );
}

export default SiparisForm;
