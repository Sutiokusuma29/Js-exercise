function quantityDiscount(quantity, price) {
  let discount = 0;

  const subtotal = quantity * price;

  if(quantity >= 10){
    discount = subtotal * 0.2;
  }else if(quantity >= 5){
    discount = subtotal * 0.15;
  }
  const subtotalDiscount = subtotal - discount;
  const tax = subtotalDiscount * 0.11;

  return subtotalDiscount + tax;
}

console.log(quantityDiscount(8, 50));
console.log(quantityDiscount(3, 100));
console.log(quantityDiscount(5, 100));
console.log(quantityDiscount(10, 100));
console.log(quantityDiscount(15, 3));
console.log(quantityDiscount(3, 10000));
console.log(quantityDiscount(12, 10000));

module.exports = quantityDiscount;
