export const bigintToExponential = (num: bigint) => {
  const bigIntStr = num.toString();
  const length = bigIntStr.length;
  if (length <= 1) {
    return bigIntStr;
  }
  const exponent = bigIntStr.length - 1;
  return `10^${exponent}`;
};
