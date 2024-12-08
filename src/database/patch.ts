declare global {
 interface BigInt {
  toJSON(): string;
 }
}

/* eslint-disable func-names */
export default BigInt.prototype.toJSON = function () {
 return this.toString();
};
