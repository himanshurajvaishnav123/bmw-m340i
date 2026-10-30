const products = [
  { id: 1, name: "Laptop", price: 55000, quantity: 1 },
  { id: 2, name: "Mouse", price: 799, quantity: 2 },
  { id: 3, name: "Keyboard", price: 1499, quantity: 1 },
  { id: 4, name: "Monitor", price: 12000, quantity: 2 },
];
function calculateTotal(items, discount) {
  let total = 0;
  items.forEach((item) => {
    total += item.price * item.quantity;
  });
  let discountAmount = (total * discount) / 100;
  let finalAmount = total - discountAmount;
  return {
    total: total,
    discount: discountAmount,
    finalAmount: finalAmount,
    items: items.length,
  };
}
const cart = calculateTotal(products, 10);
console.log("Shopping Cart:", cart);
if (cart.finalAmount > 50000) {
  console.log("Congratulations! You qualify for a special offer.");
} else {
  console.log("Add more products to unlock the special offer.");
}
