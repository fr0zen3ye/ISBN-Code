const {checkISBN} = require('./isbn');
console.log(checkISBN);
describe('checkISBN', () => {
    it('should return 3 for 123', () => {
        expect(checkISBN("1-2-3")).toBe("3");
    })

    it('should return 3 for 1---2----3', () => {
        expect(checkISBN("1---2--3")).toBe("3");
    })
    
    it('should return X for 3-499-13599', () => {
        expect(checkISBN("3-499-13599")).toBe("X");
    })
    it('should return X for 3-499-13599', () => {
        expect(checkISBN("3--49-9----13599")).toBe("X");
    })

    it('should return X for 3-7910-2163', () => {
        expect(checkISBN("3-7910-2163")).toBe("X");
    })
   

    it('should return "" for 3-928475-32', () => {
        expect(checkISBN("3-928475-32")).toBe("");
    })
})
const {isISBNcorrect} = require('./isbn');
describe('isISBNcorrect', () => {
    it('should return false for 0', () => {
        expect(isISBNcorrect("0")).toBe(false);
    })

    it ('should return true for 3-7910-2163-X', () => {
        expect(isISBNcorrect("3-7910-2163-X")).toBe(true);
    })

})