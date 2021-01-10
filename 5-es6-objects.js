//Object property shorthand

const name = 'Isaddora'
const userAge = 19

const user = {
    name,
    age: userAge,
    location: 'Brasil'
}

console.log(user)

//Object destructuring

const product = {
    label: 'red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel, stock, rating)

const transation = (type, { label, stock = 0} = {}) => {
    console.log(type, label, stock)
}

transation('order', product)