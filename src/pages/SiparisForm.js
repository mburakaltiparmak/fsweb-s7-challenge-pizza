import React, { useEffect, useState } from "react";
import "../styles/SiparisForm.css";
import BoyutVeHamur from "../components/BoyutVeHamur";
import Icerikler from "../components/Icerikler";
import Submit from "../components/Submit";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

/////Stylingler
const SiparisContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 40px auto;
  height: 100vw;
`;

const PizzaForm = styled.div`
  font-family: "Barlow", sans-serif;
  width: 80vh;

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
const RadioContainer = styled.div`
  margin-bottom: 40px;
`;
const Isim = styled.div`
  margin-bottom: 40px;
`;
const Not = styled.div`
  margin-bottom: 40px;
  width: 100%;
`;
const IcindekilerContainer = styled.div`
  margin-bottom: 50px;
  font-size: 15px;
`;

const IsimInput = styled.input`
  width: 72.5vh;
  padding: 8px;
  margin-top: 8px;
  border: 1px solid;
  border-radius: 3px;
`;

const NotInput = styled.input`
  width: 72.5vh;
  height: 50px;
  padding: 8px;
  margin: 8px 0 10px 0;
  border: 1px solid;
  border-radius: 3px;
`;

function SiparisForm() {
  const malzemeData = [""];
  const [malzeme, setMalzeme] = useState(malzemeData);
  const [hamur, setHamur] = useState("");
  const [boyut, setBoyut] = useState("");
  const [pizza, setPizza] = useState(1);

  const [isValid, setIsValid] = useState(false);
  //
  const artirici = () => {
    setPizza(pizza + 1);
  };
  const azaltici = () => {
    if (pizza > 1) {
      setPizza(pizza - 1);
    }
  };
  const toplam = () => {
    if (malzeme.length - 1 < 6) {
      return urunFiyati * pizza;
    } else {
      return urunFiyati * pizza + (malzeme.length - 6) * icerikFiyati;
    }
  };
  //
  function handleMalzemeChange(event) {
    const secilenMalzeme = event.target.value;
    setMalzeme((kopyaMalzeme) => {
      if (kopyaMalzeme.includes(secilenMalzeme)) {
        return kopyaMalzeme.filter((item) => item !== secilenMalzeme);
      } else {
        return [...kopyaMalzeme, secilenMalzeme];
      }
    });
  }
  //
  const History = useHistory();
  const siparisForm = {
    name: "",
    note: "",
  };
  const errorMessages = {
    name: "Adınız en az 2 karakter olmalı.",
  };
  const [form, setForm] = useState(siparisForm);
  const [errors, setErrors] = useState(errorMessages);

  useEffect(() => {
    if (form.name.replaceAll(" ", "").length > 2) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [form]);

  const handleChange = (event) => {
    event.preventDefault();
    let { note, name, value } = event.target;
    setForm({ ...form, [name]: value, [note]: note });
    if (name === "name") {
      if (value.replaceAll(" ", "").length > 2) {
        setErrors({ ...errors, [name]: false });
        setIsValid(true);
      } else {
        setErrors({ ...errors, [name]: true });
        setIsValid(false);
      }
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (isValid) {
      const newFormData = {
        ...form,
        hamur: hamur,
        malzeme: malzeme.toString(),
        boyut: boyut,
        toplam: toplam(pizza),
        pizza: pizza,
      };
      axios
        .post("https://reqres.in/api/orders", newFormData)
        .then((res) => {
          setForm(siparisForm);
          console.log("Sipariş:", newFormData);
          History.push("/Success");
        })
        .catch((error) => {
          console.log("Form post edilemedi", error);
        });
      // Formu submit et
    } else {
      console.log("Form submit edilemedi");
    }
  };

  //
  function handleHamur(event) {
    setHamur(event.target.value);
  }
  //
  function handleBoyut(event) {
    setBoyut(event.target.value);
  }

  const urunAdi = "Position Absolute Acılı Pizza";
  const urunFiyati = 85.5;
  const urunAciklamasi =
    "Ürün AçıklamasıÜrün AçıklamasıÜrün AçıklamasıÜrün AçıklamasıÜrün AçıklamasıÜrün AçıklamasıÜrün AçıklamasıÜrün AçıklamasıÜrün AçıklamasıÜrün AçıklamasıÜrün AçıklamasıÜrün AçıklamasıÜrün Açıklaması";
  const urunIcerikleri = [
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
  const icerikFiyati = 5;

  ///

  return (
    <SiparisContainer>
      <PizzaForm id="pizza-form">
        <p className="urunAdi">{urunAdi}</p>
        <h3>{urunFiyati} ₺</h3>
        <p className="urunAciklama">{urunAciklamasi}</p>
        <RadioContainer>
          <BoyutVeHamur
            hamur={hamur}
            handleHamur={handleHamur}
            boyut={boyut}
            handleBoyut={handleBoyut}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </RadioContainer>

        <IcindekilerContainer>
          <Icerikler
            icerikFiyati={icerikFiyati}
            urunIcerikleri={urunIcerikleri}
            handleChange={handleMalzemeChange}
            malzeme={malzeme}
            handleSubmit={handleSubmit}
          />
        </IcindekilerContainer>
        <Isim onSubmit={handleSubmit}>
          İsim:
          <br />
          <IsimInput
            type="text"
            id="name-input"
            name="name"
            placeholder="Lütfen isminizi girin."
            value={form.name}
            onChange={handleChange}
          />
          <p>{errors.name && errorMessages.name}</p>
        </Isim>
        <Not onSubmit={handleSubmit}>
          Sipariş Notu:
          <br />
          <NotInput
            type="text"
            id="special-text"
            name="note"
            value={form.note}
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            onChange={handleChange}
          />
          <hr />
        </Not>

        <Submit
          malzeme={malzeme}
          isValid={isValid}
          handleSubmit={handleSubmit}
          pizza={pizza}
          artirici={artirici}
          azaltici={azaltici}
          toplam={toplam(pizza)}
          icerikFiyati={icerikFiyati}
        />
      </PizzaForm>
    </SiparisContainer>
  );
}

export default SiparisForm;
