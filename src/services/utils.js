const crypto = window.crypto || window.msCrypto;
const alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const radix = alphabet.length;
const array = new Uint32Array(20);

export default {
  uid() {
    crypto.getRandomValues(array);
    return array.cl_map(value => alphabet[value % radix]).join('');
  },
  setInterval(func, interval) {
    const randomizedInterval = Math.floor((1 + ((Math.random() - 0.5) * 0.1)) * interval);
    setInterval(() => func(), randomizedInterval);
  },
};