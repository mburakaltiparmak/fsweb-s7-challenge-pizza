import React from "react";
import styled from "styled-components";
export default function Submit(props) {
  const {
    icerikFiyati,
    malzeme,
    isValid,
    handleSubmit,
    pizza,
    artirici,
    azaltici,
    toplam,
  } = props;

  const malzemeSiniriAsildi =
    malzeme.length >= 10
      ? "En fazla 10 malzeme seçebilirsiniz!"
      : malzeme.length < 4
      ? "En az 4 malzeme seçmelisiniz!"
      : "";
  function secimlerFiyat() {
    if (malzeme.length > 5) {
      const ekFiyat = icerikFiyati * (malzeme.length - 5);
      return ekFiyat;
    } else {
      return 0;
    }
  }
  ///Stylingler

  const SubmitStyling = styled.div`
    display: flex;
    width: 75vh;
    form {
      width: 75vh;
      display: flex;
      justify-content: space-between;
    }
  `;

  const PlusMinusButton = styled.div`
    padding: 5px 5px;
    width: 100px;
    height: 40px;
    border: 0.1px solid;
    border-radius: 10px;
    margin-right: 150px;
    .artir {
      border: 0.1px solid;
      border-radius: 10px;
      background-color: #fdc913;
    }
    .azalt {
      border: 0.1px solid;
      border-radius: 10px;
      background-color: #fdc913;
    }
    p {
      font-size: 15px;
      font-weight: bold;
    }
  `;

  const SiparisToplami = styled.div`
    padding: 1px;
    margin: auto;
    border: 0.1px solid;
    border-radius: 10px;
    width: 50vh;
    max-height: 60vh;
    display: flex;
    flex-direction: column;
    text-align: left;
    h2 {
      display: flex;
      justify-content: space-between;
      margin-left: 25px;
    }
    p {
      padding: 1px 25px;
      display: flex;
      justify-content: space-around;
    }

    span {
      display: inline-block;
      width: 100%;
      text-align: right;
    }
  `;
  const SubmitButton = styled.button`
    padding: 15px;
    border: 0.1px solid;
    border-radius: 10px;
    background-color: ${(props) => (props.disabled ? "#ff0000" : "#fdc913")};
    color: ${(props) => (props.disabled ? "white" : "black")};
    font-family: "Barlow", sans-serif;
    font-weight: bold;
    font-size: 15px;
    width: 100%;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  `;

  return (
    <SubmitStyling id="submit-styling">
      <form onSubmit={handleSubmit} id="order-form">
        <PlusMinusButton>
          <label className="count-label">
            <button className="azalt" value="-" onClick={azaltici}>
              -
            </button>
            <p>{pizza}</p>
            <button className="artir" value="+" onClick={artirici}>
              +
            </button>
          </label>
        </PlusMinusButton>

        <SiparisToplami>
          <h2>Sipariş Toplamı</h2>
          <p>{malzemeSiniriAsildi}</p>
          <p>
            Seçimler: <span> {secimlerFiyat(malzeme)} ₺</span>
          </p>
          <p>
            Toplam: <span>{toplam} ₺ </span>
          </p>
          <label name="submit">
            <SubmitButton
              id="order-button"
              type="submit"
              disabled={malzeme.length <= 4 || !isValid}
            >
              SİPARİŞ VER
            </SubmitButton>
          </label>
        </SiparisToplami>
      </form>
    </SubmitStyling>
  );
}
