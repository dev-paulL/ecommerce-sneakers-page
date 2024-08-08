export const getPriceAfterDiscount = (item) => {
  return ((item.price * item.discount) / 100).toFixed(2);
};
