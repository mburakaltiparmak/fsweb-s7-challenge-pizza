import React from "react";
import styled from "styled-components";
import "./styles/BoyutVeHamur.css";

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 5px 0 5px 0;
  align-items: center;
`;
const BoyutSec = styled.div`
  padding: 5px 0 5px 0;
  margin: auto 0;
`;
const HamurSec = styled.div`
  padding: 5px 0 5px 0;
  margin: 0 auto;
`;
export default function BoyutVeHamur(props) {
  const { boyut, hamur, handleHamur, handleBoyut, handleSubmit } = props;

  return (
    <div>
      <MainContainer>
        <BoyutSec onSubmit={handleSubmit}>
          <form id="size-radio">
            <p className="boyut">Boyut seç</p>
            <label>
              <input
                type="radio"
                name="boyut"
                value="Küçük"
                checked={boyut === "Küçük"}
                onChange={handleBoyut}
              />
              Küçük
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="boyut"
                value="Orta"
                checked={boyut === "Orta"}
                onChange={handleBoyut}
              />
              Orta
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="boyut"
                value="Büyük"
                checked={boyut === "Büyük"}
                onChange={handleBoyut}
              />
              Büyük
            </label>
            <br />
          </form>
        </BoyutSec>

        <HamurSec onSubmit={handleSubmit}>
          <label className="hamur">Hamur Seç</label>
          <br />
          <br />
          <select name="hamur" value={hamur} onChange={handleHamur}>
            <option disabled value="">
              Hamur Kalınlığı
            </option>
            <option value="İnce">İnce</option>
            <option value="Orta">Orta</option>
            <option value="Kalın">Kalın</option>
          </select>
          <br />
          <br />
        </HamurSec>
      </MainContainer>
    </div>
  );
}
