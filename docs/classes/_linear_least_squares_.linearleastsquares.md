[linear-least-squares](../README.md) › [Globals](../globals.md) › ["linear-least-squares"](../modules/_linear_least_squares_.md) › [LinearLeastSquares](_linear_least_squares_.linearleastsquares.md)

# Class: LinearLeastSquares

## Hierarchy

* **LinearLeastSquares**

## Index

### Constructors

* [constructor](_linear_least_squares_.linearleastsquares.md#constructor)

### Properties

* [_mean](_linear_least_squares_.linearleastsquares.md#_mean)
* [_points](_linear_least_squares_.linearleastsquares.md#_points)
* [_r_squared](_linear_least_squares_.linearleastsquares.md#_r_squared)
* [_root_mean_squares_error](_linear_least_squares_.linearleastsquares.md#_root_mean_squares_error)
* [_size](_linear_least_squares_.linearleastsquares.md#_size)
* [_sum](_linear_least_squares_.linearleastsquares.md#_sum)
* [_sum_of_squares](_linear_least_squares_.linearleastsquares.md#_sum_of_squares)
* [_sum_of_squares_of_residuals](_linear_least_squares_.linearleastsquares.md#_sum_of_squares_of_residuals)
* [_total_sum_of_squares](_linear_least_squares_.linearleastsquares.md#_total_sum_of_squares)

### Methods

* [compute_fit](_linear_least_squares_.linearleastsquares.md#compute_fit)
* [evaluate_fit](_linear_least_squares_.linearleastsquares.md#evaluate_fit)
* [predicted_point](_linear_least_squares_.linearleastsquares.md#predicted_point)
* [predicted_points](_linear_least_squares_.linearleastsquares.md#predicted_points)
* [process_points](_linear_least_squares_.linearleastsquares.md#process_points)
* [slope](_linear_least_squares_.linearleastsquares.md#slope)
* [y_intercept](_linear_least_squares_.linearleastsquares.md#y_intercept)

## Constructors

###  constructor

\+ **new LinearLeastSquares**(`points`: Array‹[number, number]›): *[LinearLeastSquares](_linear_least_squares_.linearleastsquares.md)*

*Defined in [linear-least-squares.ts:13](https://github.com/jjviscomi/LinearLeastSquares/blob/55c12b4/src/linear-least-squares.ts#L13)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`points` | Array‹[number, number]› | Array<[number, number]>.  |

**Returns:** *[LinearLeastSquares](_linear_least_squares_.linearleastsquares.md)*

## Properties

###  _mean

• **_mean**: *[number, number]*

*Defined in [linear-least-squares.ts:8](https://github.com/jjviscomi/LinearLeastSquares/blob/55c12b4/src/linear-least-squares.ts#L8)*

___

###  _points

• **_points**: *Array‹[number, number]›*

*Defined in [linear-least-squares.ts:3](https://github.com/jjviscomi/LinearLeastSquares/blob/55c12b4/src/linear-least-squares.ts#L3)*

___

###  _r_squared

• **_r_squared**: *number*

*Defined in [linear-least-squares.ts:13](https://github.com/jjviscomi/LinearLeastSquares/blob/55c12b4/src/linear-least-squares.ts#L13)*

___

###  _root_mean_squares_error

• **_root_mean_squares_error**: *number*

*Defined in [linear-least-squares.ts:12](https://github.com/jjviscomi/LinearLeastSquares/blob/55c12b4/src/linear-least-squares.ts#L12)*

___

###  _size

• **_size**: *number*

*Defined in [linear-least-squares.ts:4](https://github.com/jjviscomi/LinearLeastSquares/blob/55c12b4/src/linear-least-squares.ts#L4)*

___

###  _sum

• **_sum**: *[number, number]*

*Defined in [linear-least-squares.ts:6](https://github.com/jjviscomi/LinearLeastSquares/blob/55c12b4/src/linear-least-squares.ts#L6)*

___

###  _sum_of_squares

• **_sum_of_squares**: *[number, number]*

*Defined in [linear-least-squares.ts:7](https://github.com/jjviscomi/LinearLeastSquares/blob/55c12b4/src/linear-least-squares.ts#L7)*

___

###  _sum_of_squares_of_residuals

• **_sum_of_squares_of_residuals**: *number*

*Defined in [linear-least-squares.ts:11](https://github.com/jjviscomi/LinearLeastSquares/blob/55c12b4/src/linear-least-squares.ts#L11)*

___

###  _total_sum_of_squares

• **_total_sum_of_squares**: *number*

*Defined in [linear-least-squares.ts:10](https://github.com/jjviscomi/LinearLeastSquares/blob/55c12b4/src/linear-least-squares.ts#L10)*

## Methods

###  compute_fit

▸ **compute_fit**(): *object*

*Defined in [linear-least-squares.ts:87](https://github.com/jjviscomi/LinearLeastSquares/blob/55c12b4/src/linear-least-squares.ts#L87)*

**Returns:** *object*

___

###  evaluate_fit

▸ **evaluate_fit**(`m`: number, `b`: number): *void*

*Defined in [linear-least-squares.ts:67](https://github.com/jjviscomi/LinearLeastSquares/blob/55c12b4/src/linear-least-squares.ts#L67)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`m` | number | number that represents the slop. |
`b` | number | number that represnets the y-intercept.  |

**Returns:** *void*

___

###  predicted_point

▸ **predicted_point**(`m`: number, `x`: number, `b`: number): *[number, number]*

*Defined in [linear-least-squares.ts:59](https://github.com/jjviscomi/LinearLeastSquares/blob/55c12b4/src/linear-least-squares.ts#L59)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`m` | number | number that represents the slop. |
`x` | number | the x-value you want to predict the y-value for. |
`b` | number | number that represnets the y-intercept.  |

**Returns:** *[number, number]*

___

###  predicted_points

▸ **predicted_points**(`m`: number, `b`: number): *Array‹[number, number]›*

*Defined in [linear-least-squares.ts:105](https://github.com/jjviscomi/LinearLeastSquares/blob/55c12b4/src/linear-least-squares.ts#L105)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`m` | number | number that represents the slop. |
`b` | number | number that represnets the y-intercept.  |

**Returns:** *Array‹[number, number]›*

___

###  process_points

▸ **process_points**(): *void*

*Defined in [linear-least-squares.ts:26](https://github.com/jjviscomi/LinearLeastSquares/blob/55c12b4/src/linear-least-squares.ts#L26)*

**Returns:** *void*

___

###  slope

▸ **slope**(): *number*

*Defined in [linear-least-squares.ts:43](https://github.com/jjviscomi/LinearLeastSquares/blob/55c12b4/src/linear-least-squares.ts#L43)*

**Returns:** *number*

___

###  y_intercept

▸ **y_intercept**(): *number*

*Defined in [linear-least-squares.ts:50](https://github.com/jjviscomi/LinearLeastSquares/blob/55c12b4/src/linear-least-squares.ts#L50)*

**Returns:** *number*
