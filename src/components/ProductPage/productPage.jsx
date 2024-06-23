export const ProductPage = ({ product }) => (
  <>
    <h1>detail prstenu </h1>
    <h2>{product.nazev}</h2>
    <img className="obrazek" src={`http://localhost:4000${product.img}`} />
    <p>poslední známý nositel: {product.nositel}</p>
    <p>barva: {product.barva}</p>
    <p>vlastnost: {product.vlastnost}</p>
  </>
);
