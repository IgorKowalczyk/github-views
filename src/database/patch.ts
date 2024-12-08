declare global {
 interface BigInt {
  toJSON(): string;
 }
}

/* eslint-disable */
export default BigInt.prototype.toJSON = function () {
 return this.toString();
};
/* eslint-enable */
