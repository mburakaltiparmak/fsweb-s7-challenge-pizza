import React from "react";
import "./styles/Icerikler.css";
export default function Icerikler(props) {
  const { urunIcerikleri, handleChange, malzeme } = props;

  const icerikCheckbox = urunIcerikleri.map((item, index) => (
    <label key={index} id="malzemeler-checkbox" className="malzemeler-checkbox">
      <input
        type="checkbox"
        name="icerikler"
        value={item}
        checked={malzeme.includes(item)}
        onChange={handleChange} // helper func yazılacak.
      />
      {item}
    </label>
  ));
  return (
    <div id="" className="icerik-container">
      <p className="EkMalzemeler">Ek Malzemeler</p>
      <p>En Az 4 Ve En Fazla 10 Malzeme Seçmelisiniz. Malzeme Fiyatı : 5₺</p>
      <div className="icerik-checkbox">{icerikCheckbox}</div>
    </div>
  );
}
