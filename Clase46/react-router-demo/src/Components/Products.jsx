import {Link } from "react-router-dom";
const productsList = [
  {
    id: 1,
    name: "Televisor",
    price: 123,
    description:
      "Televisor - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni similique magnam iusto fugit culpa libero, deserunt quae reiciendis nihil sequi dolore distinctio ad qui non ullam possimus fugiat? Accusamus, eum.",
  },{
      id:2,
      name: "Computadora",
      price:456,
      description: "Computadora - amet consectetur adipisicing elit. Magni similique magnam iusto fugit culpa libero, desrunt quae reiciendis nihil sequi dolore distinctio ad qui non ullam possimus fugiat? Accusamus, eum. "
  },{
      id:3,
      mame:"Celular",
      price:789,
      description:"Celular - amet consectetur adipisicing elit. Magni similique magnam iusto fugit culpa libero, deserunt quae reiciendis nihil sequi dolore distinctio ad qui non ullam possimus fugiat? Accusamus, eum. "
  }
];

function Products(props){
    let id = Number(props.match.params.id);
    let product = productsList.find((product)=>product.id === id);
    return(
        <div>
            <h2>Soy el componente PRODUCTS</h2>

            <Link to="/products/1">Product 1</Link>
            <Link to="/products/2">Product 2</Link>
            <Link to="/products/3">Product 3</Link>
            {
                product &&
                <>
                <p><b>ID: </b>{product.id}</p>
                <p><b>NOMBRE: </b>{product.price}</p>
                <p><b>PRECIO: </b>{product.description}</p>
                </>
            }
            {
                !product && 
                <p>NO HAY PRODUCTS CON ESTE ID</p>
            }
            
        </div>
    );
}

export default Products;