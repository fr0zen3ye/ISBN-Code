const {checkISBN} = require('./isbn');
console.log(checkISBN);
describe('checkISBN', () => {
    it('should return X for 123456789', () => {
        expect(checkISBN("123456789")).toBe("X");
    })

    it('should return 3 for 123', () => {
        expect(checkISBN("1-2-3")).toBe(3);
    })

    it('should return 3 for 1---2----3', () => {
        expect(checkISBN("1---2--3")).toBe(3);
    })

})