declare global {
 interface BigInt {
  toJSON(): string;
 }
}

/* eslint-disable func-names,space-before-function-paren */
export default BigInt.prototype.toJSON = function () {
 return this.toString();
};
