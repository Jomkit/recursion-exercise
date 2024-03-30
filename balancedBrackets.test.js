const {balanceBrackets} = require('./balancedBrackets');

describe("balancedBrackets function", () => {
    test("returns true when brackets are balanced", () => {
        test = balanceBrackets('({hello})[]');
        expect(test).toBe(true);
    })

    test("returns false when there's an extra closed bracket", () =>{
        test = balanceBrackets('({hello})[]]');
        expect(test).toBe(false);
    })

    test("returns false when there's an extra open bracket", () =>{
        test = balanceBrackets('(({hello})[]');
        expect(test).toBe(false);
    })

    test("returns false when first bracket is closed", () =>{
        test = balanceBrackets('}(({hello})[]');
        expect(test).toBe(false);
    })

    test("returns false when open and closed brackets are mismatched", () =>{
        test = balanceBrackets('([hello)]');
        expect(test).toBe(false);
    })
})