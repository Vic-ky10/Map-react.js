

function Product(){
    const products =[
        { id: 1, name: "phone" , price: "$566"},
         { id: 1, name: "Laptop" , price: "$1200"},
          { id: 1, name: "HeadPhones" , price: "$199"},
    ]

    return (
     <div>
           {products.map(({id, name,price})=>(

            <ul key={id}>
               
                   <h1>{name}</h1>
                      <h1>{price}</h1>
            </ul>
        ))}
     </div>
    )
}
export default Product