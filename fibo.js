function doFibo(n) {
  arr = [];

  switch (n) {
    case 1:
      arr.push(0);
      return 0;
    case 2:
      arr.push(1);
      return 1;
    default:
      //   arr.push(n - 1 + doFibo(n - 2));
      return doFibo(n - 1) + doFibo(n - 2);
  }
}

console.log(`fibonacci di 8 = ${doFibo(8)}`);
