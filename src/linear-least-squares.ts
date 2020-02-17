class LinearLeastSquares {
    _points: Array<[number, number]>;
    _size: number;

    _sum:  [number, number];
    _sum_of_squares: [number, number];
    _mean: [number, number];

    _total_sum_of_squares: number;
    _sum_of_squares_of_residuals: number;
    _root_mean_squares_error: number;
    _r_squared: number;

    constructor(points: Array<[number, number]>) {
        this._points         = points;
        this._size           = this._points.length;
        this._sum            = [0, 0];
        this._sum_of_squares = [0, 0];
        this._mean           = [0, 0];
    }

    process_points(): void {
      this._sum               = [0, 0];
      this._sum_of_squares    = [0, 0];
      this._mean              = [0, 0];

      for (let point of this._points) {
        this._sum[0] = this._sum[0] + point[0];
        this._sum[1] = this._sum[1] + point[1];

        this._sum_of_squares[0] = this._sum_of_squares[0] + Math.pow(point[0], 2);
        this._sum_of_squares[1] = this._sum_of_squares[1] + (point[0] * point[1]);
      }

      this._mean[0] = this._sum[0] / this._size;
      this._mean[1] = this._sum[1] / this._size;
    }

    slope(): number {
      let rise: number = (this._size * this._sum_of_squares[1]) - (this._sum[0] * this._sum[1]);
      let run: number  = (this._size * this._sum_of_squares[0]) - Math.pow(this._sum[0], 2);

      return rise / run;
    }

    y_intercept(): number {
      return (this._mean[1]) - (this.slope() * this._mean[0]);
    }

    predicted_point(m: number, x: number, b: number): [number, number] {
      return [x, (x * m) + b];
    }

    evaluate_fit(m: number, b: number): void {
      this._total_sum_of_squares        = 0;
      this._sum_of_squares_of_residuals = 0;
      this._root_mean_squares_error     = 0;

      for (let point of this._points) {
        let predicted_y:  number    = this.predicted_point(m, point[0], b)[1];
        let y_offset:     number    = point[1] - this._mean[1];
        let residual:     number    = point[1] - predicted_y;

        this._sum_of_squares_of_residuals = this._sum_of_squares_of_residuals + Math.pow(residual, 2);

        this._total_sum_of_squares        = this._total_sum_of_squares + Math.pow(y_offset, 2);
      }

      this._root_mean_squares_error       = Math.sqrt(this._sum_of_squares_of_residuals / this._size);

      this._r_squared = 1 - (this._sum_of_squares_of_residuals / this._total_sum_of_squares);
    }

    compute_fit(): object {

      this.process_points();

      let m: number   = this.slope();
      let b: number   = this.y_intercept();

      this.evaluate_fit(m, b);

      let fit: object = { "m": m, "b": b, "rmse": this._root_mean_squares_error, "r_squared": this._r_squared };

      return fit;
    }

    predicted_points(m: number, b: number): Array<[number, number]> {
      let points: Array<[number, number]> = [];

      let max: number = Math.max(...this._points.map(point => point[0]));

      // for (let x of x_values.filter(
      //   (val, i, arr) => arr.findIndex(x => x === val) === i
      // )) {
      //   points.push([ x, (x * m) + b]);
      // }

      for (let x of Array.from(Array(max).keys())) {
        points.push([ x, (x * m) + b]);
      }

      return points;
    }
}

module.exports = LinearLeastSquares;
