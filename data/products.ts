export interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  oldPrice?: string;
  badge: "Sale" | "New";
}

export const products: Product[] = [
  {
    id: 1,
    name: "Allright",
    image: "allright.png",
    price: "₹35.00",
    badge: "Sale",
  },
  {
    id: 2,
    name: "Lion",
    image: "lion.png",
    price: "₹45.00",
    oldPrice: "₹60.00",
    badge: "Sale",
  },
  {
    id: 3,
    name: "Polis",
    image: "polis.png",
    price: "₹20.00",
    badge: "New",
  },
  {
    id: 4,
    name: "Power Star",
    image: "power.png",
    price: "₹40.00",
    badge: "Sale",
  },
  {
    id: 5,
    name: "S-cart",
    image: "scart.png",
    price: "₹25.00",
    badge: "New",
  },
  {
    id: 6,
    name: "Magic",
    image: "magic.jpg",
    price: "₹30.00",
    badge: "Sale",
  },
  {
    id: 7,
    name: "Power",
    image: "power.png",
    price: "₹55.00",
    badge: "New",
  },
  {
    id: 8,
    name: "Sun Top",
    image: "suntop.png",
    price: "₹28.00",
    badge: "Sale",
  },
];

