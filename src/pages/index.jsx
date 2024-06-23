import { render } from "@czechitas/render";
import { HomePage } from "../components/HomePage/homepage";
import { Product } from "../components/Product/product";
import "../global.css";
import "./index.css";

document.querySelector("#root").innerHTML = render(
  <>
    <HomePage nazev="Pán prstenů - výprodej prstenů" />
  </>
);
