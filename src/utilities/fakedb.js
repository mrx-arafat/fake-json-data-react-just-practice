//using local storage as DB

const addToFakeDb = (id) => {
  const exist = localStorage.getItem("shopping_cart");

  // here at first I used const : be alart
  let shopping_cart = {};

  if (!exist) {
    shopping_cart[id] = 1;
  } else {
    shopping_cart = JSON.parse(exist);

    //check if id available in shopping cart
    if (shopping_cart[id]) {
      const newCount = shopping_cart[id] + 1;
      shopping_cart[id] = newCount;
    } else {
      shopping_cart[id] = 1;
    }
  }
};

export { addToFakeDb };
