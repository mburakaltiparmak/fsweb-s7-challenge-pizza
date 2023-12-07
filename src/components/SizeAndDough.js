import React from "react";
import Select from "react-select";
import styled from "styled-components";

function SizeAndDough(props) {
  let boyutText = "Boyut Seç";
  let hamurText = "Hamur Seç";
  const options = [
    { target: { value: "İnce", name: "dough" }, label: "İnce" },
    { target: { value: "Orta", name: "dough" }, label: "Orta" },
    { target: { value: "Kalın", name: "dough" }, label: "Kalın" },
  ];
  const pizza = props.pizza;
  const onInputChange = props.onInputChange;
  const BoyutContainer = styled.div`
    p {
      margin-bottom: 10px;
      font-weight: bold;
    }
    input {
      margin-bottom: 20px;
    }
    .flex-container {
      display: flex;
      gap: 20px;
    }
    .label {
      flex: 1;
    }
    .HamurYazi {
      margin-bottom: 20px;
    }
    .selectButton {
      width: 60%;
      height: 50%;
    }
    .boyutYazisi {
      margin-bottom: 30px;
    }
  `;
  const customStyles = {
    control: (provided) => ({
      ...provided,
      fontSize: "15px",
      maxHeight: "15px",
    }),
  };
  return (
    <BoyutContainer>
      <div className="flex-container">
        <label id="size-radio" className="label">
          <p className="boyutYazisi">{boyutText}</p>
          <input
            type="radio"
            value="Küçük"
            onChange={onInputChange}
            checked={pizza.size === "Küçük"}
            id="küçük-boyut"
            name="size"
          />
          Küçük
          <input
            type="radio"
            value="Orta"
            onChange={onInputChange}
            checked={pizza.size === "Orta"}
            id="orta-boyut"
            name="size"
          />
          Orta
          <input
            type="radio"
            value="Büyük"
            onChange={onInputChange}
            checked={pizza.size === "Büyük"}
            id="büyük-boyut"
            name="size"
          />
          Büyük
        </label>

        <label id="dough-select" className="label">
          <p className="HamurYazi">{hamurText}</p>
          <div className="selectButton">
            <Select
              options={options}
              onChange={onInputChange}
              isSearchable={false}
              styles={customStyles}
              placeholder="Hamur Kalınlığı"
            />
          </div>
        </label>
      </div>
    </BoyutContainer>
  );
}

export default SizeAndDough;
