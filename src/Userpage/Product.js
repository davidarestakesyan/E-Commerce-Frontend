import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts, getAllProducts } from "../feauters/productSlice";
import { Link } from "react-router-dom";

const Product = () => {
  const data = useSelector(getAllProducts);
  const dispatch = useDispatch();
  const { id } = useParams();

 
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log(data , "Find DATTTTTTTTTTTTTTTTA" )

 
  const products = data.filter((product) => product.id === Number(id));
console.log("productssssssssssssssssssss",products);
 
  return (
    <div>
      <h1 className="pageTitle">Все продукты</h1>
      <div className="productCont">
        {data.map((product) => (
          <div className="productDiv" key={product.id}>
            <Link to={`/products/${product.id}`} className="productLink">
              <img
                className="prodImage"
                src={product?.image}
                alt="photo"
              />
              <div className="productName">{product.name}</div>
              <br />
              <h3 className="productPrice">{product.price} RUB</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product