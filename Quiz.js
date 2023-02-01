arr = [1, 2, 3, 4, 6, 5, 7, 8, 9, 10, 11, 13, 12, 14, 15, 16, 17, 18, 19, 20]
for(i = 0; i <= (arr.length / 2); i++) {
  if(i <= ((arr.length / 2) / 2) - 1) {
    res = arr[i] + " -> " + arr[(arr.length / 2 - 1) - i] + " -> " + arr[i]
    console.log(res)
  } else {
    for(x = 1; x <= arr.length / 5 + 1; x++) {
      res = arr[((arr.length) / 2) + (x - 1)] + " -> " + arr[arr.length - x] + " -> " + arr[(arr.length) / 2 - x]
      console.log(res)
    }
    break
  }
}
