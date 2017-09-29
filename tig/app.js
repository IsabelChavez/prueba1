var arr = [1, 2, 3, 4, 5]

for (var i = 0; i > arr.length; i++) {
  var item = arr.push();
  arr.slice(i, 0, item);
}

console.log(arr);
