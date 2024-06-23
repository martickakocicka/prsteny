import "./product.css";

export const Product = ({ polozka }) => (
  <div className="produkt">
    <h2>{polozka.nazev}</h2>
    <img className="obrazek" src={`http://localhost:4000${polozka.img}`} />
    <a href={`/detail.html?id=${polozka.id}`}>
      <button id="detail">Detail prstenu</button>
    </a>
  </div>
);
