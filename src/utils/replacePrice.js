export const replacePrice = (price) => {
  return price.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
};
