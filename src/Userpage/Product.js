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

  const products = data.filter((product) => product.id === Number(id));

  return (
    <div>
      <h1
        className="pageTitle"
        style={{
          textAlign: "center",
          marginTop: "20px",
          color: "black",
        }}
      >
       ALL PRODUCTS
      </h1>
      <div
        className="productCont"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {data.map((product) => (
          <div
            className="productDiv"
            key={product.id}
            style={{
              width: "200px",
              margin: "50px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: "#f5f5f5",
            }}
          >
            <Link
              to={`/products/${product.id}`}
              className="productLink"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <div
                className="imageContainer"
                style={{
                  height: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <img
                  className="prodImage"
                  src={product?.image}
                  alt="photo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                className="productName"
                style={{
                  marginTop: "10px",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "29px",
                }}
              >
                {product.name}
              </div>
              <br />
              <h3
                className="productPrice"
                style={{
                  marginBottom: "0",
                  color: "#ff9900",
                  textAlign: "center",
                  fontSize: "23px",
                }}
              >
                {product.price} ֏
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;













// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { fetchProducts, getAllProducts } from "../feauters/productSlice";
// import { Link } from "react-router-dom";

// const Product = () => {
//   const data = useSelector(getAllProducts);
//   const dispatch = useDispatch();
//   const { id } = useParams();

 
//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, []);

//   console.log(data , "Find DATTTTTTTTTTTTTTTTA" )

 
//   const products = data.filter((product) => product.id === Number(id));
// console.log("productssssssssssssssssssss",products);
 
//   return (
//     <div>
//       <h1 className="pageTitle">Все продукты</h1>
//       <div className="productCont">
//         {data.map((product) => (
//           <div className="productDiv" key={product.id}>
//             <Link to={`/products/${product.id}`} className="productLink">
//               <img
//                 className="prodImage"
//                 src={product?.image}
//                 alt="photo"
//               />
//               <div className="productName">{product.name}</div>
//               <br />
//               <h3 className="productPrice">{product.price} RUB</h3>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Product