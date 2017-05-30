import { Calculator } from '../src/calculator';

describe("Calculator", function() {

    var calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe("Addition", () => {

        it("should returns positive result with addition of 5 and 5", () => {
            expect(calculator.add(5, 5)).to.equal(10);
        });

        it("should returns negative result with addition of -5 and 2", () => {
            expect(calculator.add(-5, 3)).to.equal(-2);
        });
    });

    describe("Subtraction", () => {

        it("should returns subtraction of two number", () => {
            expect(calculator.sub(5, 4)).to.equal(1);
        });
    });

    describe("Multiplication", () => {

        it("should returns multiplication of two number", () => {
            expect(calculator.mul(5, 5)).to.equal(25);
        });
    });

    describe("Division", () => {

        it("should returns division of two number", () => {
            expect(calculator.div(8, 4)).to.equal(2);
        });

        it("should throw error. denominator can't be 0", () => {
            try {
                calculator.div(8, 0);
            } catch (error) {
                expect(error).to.equal("denominator can't be 0");
            }
        });
    });

});