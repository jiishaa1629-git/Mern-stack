// IMPORTING IMAGES FROM assets/images

import casualTshirt from "../assets/images/cascualTshirt.jpeg";
import croptop from "../assets/images/croptop.jpeg";
import formalshirt from "../assets/images/formalshirt.jpeg";
import hoodie from "../assets/images/hoodie.jpeg";
import kurtieset from "../assets/images/kurtieset.jpeg";
import partywear from "../assets/images/partywear.jpeg";
import slimfitjean from "../assets/images/slimfitjean.jpeg";
import summerdress from "../assets/images/summerdress.jpeg";
import trackpant from "../assets/images/trackpant.jpeg";
import womenjean from "../assets/images/womenjean.jpeg";

const products = [
  {
    id: 1,
    name: "Casual T-Shirt",
    category: "Men",
    price: 799,
    image: casualTshirt,
  },
  {
    id: 2,
    name: "Stylish Crop Top",
    category: "Women",
    price: 999,
    image: croptop,
  },
  {
    id: 3,
    name: "Formal Shirt",
    category: "Men",
    price: 1499,
    image: formalshirt,
  },
  {
    id: 4,
    name: "Comfort Hoodie",
    category: "Unisex",
    price: 1799,
    image: hoodie,
  },
  {
    id: 5,
    name: "Kurti Set",
    category: "Women",
    price: 1999,
    image: kurtieset,
  },
  {
    id: 6,
    name: "Party Wear Dress",
    category: "Women",
    price: 2999,
    image: partywear,
  },
  {
    id: 7,
    name: "Slim Fit Jeans",
    category: "Men",
    price: 1899,
    image: slimfitjean,
  },
  {
    id: 8,
    name: "Summer Dress",
    category: "Women",
    price: 1599,
    image: summerdress,
  },
  {
    id: 9,
    name: "Track Pant",
    category: "Men",
    price: 1299,
    image: trackpant,
  },
  {
    id: 10,
    name: "Women Jean",
    category: "Women",
    price: 1699,
    image: womenjean,
  }
];

export default products;