export type Product = {
  id:number
  name:string
  description: string
  type:string
  capacity:number
  price:number
  img:string
}

const productsArray:Product[] = [
  {
    id: 1,
    name: "iPone X",
    description: "This is iPone X",
    type: "phone",
    capacity: 64,
    price: 1000,
    img: "/img/black_phone.jpg"
  },
  {
    id: 2,
    name: "iPone XS",
    description: "This is iPone X",
    type: "phone",
    capacity: 128,
    price: 700,
    img: "/img/blue_phone.jpg"
  },
  {
    id: 3,
    name: "iPone 13 Pro",
    description: "This is iPone X",
    type: "phone",
    capacity: 64,
    price: 1500,
    img: "/img/gold_phone.jpg"
  },
  {
    id: 4,
    name: "iPone 8 plus",
    description: "This is iPone X",
    type: "phone",
    capacity: 32,
    price: 750,
    img: "/img/gray_phone.jpg"
  },
  {
    id: 5,
    name: "iPone 13",
    description: "This is iPone X",
    type: "phone",
    capacity: 32,
    price: 1200,
    img: "/img/pink_phone.jpg"
  },
  {
    id: 6,
    name: "iPone 11Pro Max",
    description: "This is iPone X",
    type: "phone",
    capacity: 128,
    price: 1400,
    img: "/img/red_phone.jpg"
  }
]


export default productsArray

export const getProductsObject=(array:Product[]) => {
  return array.reduce((object, product)=> ({
    ...object,
    [product.id]:product
  }),{})
}
