const emailRegex =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const amountRegex = /\B(?=(\d{3})+(?!\d))/g;

export { emailRegex, amountRegex };
