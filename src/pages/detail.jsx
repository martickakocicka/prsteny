import { render } from "@czechitas/render";
import { HomePage } from "../components/HomePage/homepage";
import { Product } from "../components/Product/product";
import { ProductPage } from "../components/ProductPage/productPage";
import "../global.css";
import "./index.css";

const params = new URLSearchParams(window.location.search);
const userId = params.get("id");

const fetchPrsten = async (id) => {
  const response = await fetch(`http://localhost:4000/api/prsteny/${id}`);
  const json = await response.json();
  return json.data;
};

const product = await fetchPrsten(userId);

document.querySelector("#root").innerHTML = render(
  <>
    
    <ProductPage key={product.id} product={product}
      
    />
  </>
);
