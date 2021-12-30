const operators = require('../utilites/operators');

/**  Test add function**/
test('adds 1 + 2 = 3', () => {
    expect(operators.add(1,2)).toBe(3);
} );

test('negative number addition', () => {
    expect(operators.add(1,-2)).toBe(-1);
} );

test('Decimal addition', () => {
    expect(operators.add(1.2,3.8)).toBe(5);
})

/**  Test subtract function**/
test('subtracts 3 - 1 = 2', () => {
    expect(operators.subtract(3,1)).toBe(2);
} );

test('Test negative result subtraction', () => {
    expect(operators.subtract(1,3)).toBe(-2);
} );

test('Test negative parameter subtraction', () => {
    expect(operators.subtract(-1,-3)).toBe(2);
} );

/**  Test multiply function**/
test('multiplies 1 * 2 = 2', () => {
    expect(operators.multiply(1,2)).toBe(2);
} );

test('muliplication by 0', () => {
    expect(operators.multiply(100,0)).toBe(0);
} );

/**  Test divide function**/
test('divides 4/2 = 2', () => {
    expect(operators.divide(4,2)).toBe(2);
} );

test('Division by 0', () => {
    expect(operators.divide(4,0)).toBe(Infinity);
} );

test('Handling real number divisions', () => {
    expect(operators.divide(1,2)).toBe(0.5);
})

test('Handling rounding result', () => {
    expect(operators.divide(1,6)).toBe(0.17);
})

/** Test for operator **/

test('calls addition perfectly', () => {
    expect(operators.operate('add', 1, 2)).toBe(3);
});

test('calls subtraction perfectly', () => {
    expect(operators.operate('subtract', 1, 2)).toBe(-1);
});

test('calls multiply perfectly', () => {
    expect(operators.operate('multiply', 1, 2)).toBe(2);
});

test('calls division perfectly', () => {
    expect(operators.operate('divide', 2,1)).toBe(2);
});

test('Handling undefined operators', () => {
    expect(operators.operate('hello', 2,1)).toBe(null);
});