describe('sum', () => {
  it('should return the sum of two numbers', () => {

    function sum(a,b ) {
      return a+b;
    }

    expect(sum(1, 2)).toBe(3);
  })
})