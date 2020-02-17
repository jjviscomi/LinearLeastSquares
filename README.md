# LinearLeastSquares
Finds the best curve to fit a set of points through minimizing the sum of the
squares of the offset of each point from the curve.

The constructor takes an Array<[number, number]>, which is an Array of tuples.
Each tuple is a point represented by [x, y].

```javascript
const LinearLeastSquares = require('linear-least-squares');

let points = [
  [2, 4],
  [3, 5],
  [5, 7],
  [7, 10],
  [9, 15]
];

let fit = new LinearLeastSquares(points);
```

After you have initialized an instance of `LinearLeastSquares` with the points
it should analyze, you just need to have it `compute_fit()`.

```javascript
result = fit.compute_fit();
```

The result object contains 4 keys:

```javascript
{
  m: 1.5182926829268293,
  b: 0.30487804878048674,
  rmse: 0.7986268703523449,
  r_squared: 0.9595301473319301
}
```

`m`: is the slope of the fit line.

`b`: is the y-intercept of the slop line.

`rmse`: is the root mean square error, it tells you how concentrated the data
is around the line of best fit.

`r_squared`: is the R-squared statistical measure, evaluates the scatter of the
data points around the fitted regression line.

If you want to generate a set of points with the specified `result` object, you
can do the following:

```javascript
predicted_points = fit.predicted_points(result.m, result.b);

[
  [ 0, 0.30487804878048674 ],
  [ 1, 1.823170731707316 ],
  [ 2, 3.3414634146341453 ],
  [ 3, 4.859756097560974 ],
  [ 4, 6.378048780487804 ],
  [ 5, 7.896341463414633 ],
  [ 6, 9.414634146341463 ],
  [ 7, 10.932926829268293 ],
  [ 8, 12.45121951219512 ]
]
```

If you would like to generate any point on the specified `result` object, you
can do the following:

```javascript
predicted_point = fit.predicted_point(result.m, 12, result.b);

[ 12, 18.524390243902438 ]
```

Source docs are available at https://github.com/jjviscomi/LinearLeastSquares/blob/master/docs/classes/_linear_least_squares_.linearleastsquares.md
