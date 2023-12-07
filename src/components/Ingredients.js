import React from "react";
import styled from "styled-components";

const IngredientLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

function Ingredients(props) {
  const pizzaIngredients = props.pizzaIngredients;
  const onInputChange = props.onInputChange;
  const pizza = props.pizza;

  const ingredientList = pizzaIngredients.map((ing) => {
    return (
      <IngredientLabel key={ing}>
        <input
          type="checkbox"
          onChange={onInputChange}
          value={pizzaIngredients.indexOf(ing)}
          id={ing}
          name="ingredients"
          checked={pizza.ingredients[pizzaIngredients.indexOf(ing)]}
        />
        {ing}
      </IngredientLabel>
    );
  });

  return (
    <div className="ek-malzemeler">
      <b>Ek Malzemeler</b>
      <br />
      <p>Min : 4, Max :10 malzeme seçebilirsiniz. 5₺</p>

      <div className="ingredient-select">{ingredientList}</div>
    </div>
  );
}

export default Ingredients;
