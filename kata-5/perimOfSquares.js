// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner.

function perimeter(n) {
  var fibArr = []
  for(var i = 0; i <= n; i ++){
    fibArr.push((fibArr[i-1] || 1) + (fibArr[i-2] || 0))
  }
  return fibArr.reduce((acc, curr) => acc + curr) * 4;
}