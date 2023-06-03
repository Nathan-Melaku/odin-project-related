import { add, subtract, multiply, divide, percent, operate } from '../utilites/operators';


/**  Test add function**/
test('adds 1 + 2 = 3', () => {
    expect(add(1,2)).toBe(3);
} );

test('negative number addition', () => {
    expect(add(1,-2)).toBe(-1);
} );

test('Decimal addition', () => {
    expect(add(1.2,3.8)).toBe(5);
})

/**  Test subtract function**/
test('subtracts 3 - 1 = 2', () => {
    expect(subtract(3,1)).toBe(2);
} );

test('Test negative result subtraction', () => {
    expect(subtract(1,3)).toBe(-2);
} );

test('Test negative parameter subtraction', () => {
    expect(subtract(-1,-3)).toBe(2);
} );

/**  Test multiply function**/
test('multiplies 1 * 2 = 2', () => {
    expect(multiply(1,2)).toBe(2);
} );

test('muliplication by 0', () => {
    expect(multiply(100,0)).toBe(0);
} );

/**  Test divide function**/
test('divides 4/2 = 2', () => {
    expect(divide(4,2)).toBe(2);
} );

test('Division by 0', () => {
    expect(divide(4,0)).toBe(Infinity);
} );

test('Handling real number divisions', () => {
    expect(divide(1,2)).toBe(0.5);
})

test('Handling rounding result', () => {
    expect(divide(1,6)).toBe(0.17);
})

/** Test for Percent**/
test('Handling percent operator', () => {
    expect(percent(4,52.2)).toBe(2.09);
});
/** Test for operator **/

test('calls addition perfectly', () => {
    expect(operate('add', 1, 2)).toBe(3);
});

test('calls subtraction perfectly', () => {
    expect(operate('subtract', 1, 2)).toBe(-1);
});

test('calls multiply perfectly', () => {
    expect(operate('multiply', 1, 2)).toBe(2);
});

test('calls division perfectly', () => {
    expect(operate('divide', 2,1)).toBe(2);
});

test('calls percent perfectly', () => {
    expect(operate('percent', 4,100)).toBe(4);
});

test('Handling undefined operators', () => {
    expect(operate('hello', 2,1)).toBe(null);
});