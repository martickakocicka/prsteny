import "./homepage.css";
import { Product } from "../Product/product";

const zobrazSeznam = async () => {
  const response = await fetch("http://localhost:4000/api/prsteny");
  const json = await response.json();
  return json.data;
};

const prsteny = await zobrazSeznam();

export const HomePage = (props) => (
  <>
    <h1>{props.nazev}</h1>
    <ul>
      {prsteny.map((polozka) => (
                <Product key={polozka.id} polozka={polozka}  />
                     ))}
    </ul>
  </>
);
