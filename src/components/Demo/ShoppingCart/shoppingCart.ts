import { reactive } from "vue";
interface Goods {
    price: number;
    name: string;
    id: number;
    num: number;
}

interface Cart {
    list: Goods[];
    totolPrice: number;
}

const ShoppingCart = {
  name: "Shopping Cart",
  setup() {
    const cartState: Cart[] = reactive([]);
    const goodsList: Goods[] = reactive([]);
    return [cartState, goodsList];
  },
};

export default ShoppingCart;
