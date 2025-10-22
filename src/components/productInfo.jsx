function Product (){

    const products = {
        name : "laptop",
        price : 1200,
        availabilty : "In stock"
    }
    return(
   <div>
       <h1>Name : {products.name}</h1>
       <h1>Price : {products.price}</h1>
       <h1>Availabilty : { products.availabilty}</h1>
   </div>

    )
}
export default Product;