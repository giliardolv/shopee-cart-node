function addItem(userCart, item) {
  const index = userCart.findIndex((p) => p.name === item.name);
  if (index === -1) {
    userCart.push({ ...item });
    return;
  } else {
    userCart[index].quantity += 1;
  }
}

async function calculateTotal(userCart) {
  console.log("\nShopee cart total is:");
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`Total: ${result.toFixed(2)}`);
}

async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

async function displayCart(userCart) {
  console.log("\nShopee cart list:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity} | Subtotal: ${item.subtotal()}`,
    );
  });
}

async function removeItem(userCart, item) {
  const indexfound = userCart.findIndex((p) => p.name === item.name);

  if (indexfound === -1) {
    console.log("Item not found");
    return;
  }

  if (userCart[indexfound].quantity > 1) {
    userCart[indexfound].quantity -= 1;
    return;
  }

  if (userCart[indexfound].quantity === 1) {
    userCart.splice(indexfound, 1);
    return;
  }
}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
