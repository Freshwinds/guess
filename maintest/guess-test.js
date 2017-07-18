/**
 * Created by freshwinds on 17-7-18.
 */
describe('guess_re',()=> {
    let riddle = "1234";
    it("four number are in wrong loction,print 0A4B", () => {
        let user_guess = "4321";
        let actual_result = "0A4B";
        expect(guess_re(riddle, user_guess)).toEqual(actual_result);
    });
    it("there number are in wrong loction and a wrong number,print 0A3B", () => {
        let user_guess = "4325";
        let actual_result = "0A3B";
        expect(guess_re(riddle, user_guess)).toEqual(actual_result);
    });
    it("two number are in wrong loction and two wrong number,print 0A2B", () => {
        let user_guess = "4356";
        let actual_result = "0A2B";
        expect(guess_re(riddle, user_guess)).toEqual(actual_result);
    });
    it("one number are in wrong loction and there wrong number,print 0A1B", () => {
        let user_guess = "4567";
        let actual_result = "0A1B";
        expect(guess_re(riddle, user_guess)).toEqual(actual_result);
    });
    it("four number are wrong number,print 0A0B", () => {
        let user_guess = "5678";
        let actual_result = "0A0B";
        expect(guess_re(riddle, user_guess)).toEqual(actual_result);
    });
    it("there number are in wrong loction and one number is in rigtht loction,print 1A3B", () => {
        let user_guess = "1423";
        let actual_result = "1A3B";
        expect(guess_re(riddle, user_guess)).toEqual(actual_result);
    });
    it("two number are in wrong loction and one number is in rigtht loction,print 1A2B", () => {
        let user_guess = "1523";
        let actual_result = "1A2B";
        expect(guess_re(riddle, user_guess)).toEqual(actual_result);
    });
    it("one number is in wrong loction and one number is in rigtht loction,print 1A1B", () => {
        let user_guess = "1673";
        let actual_result = "1A1B";
        expect(guess_re(riddle, user_guess)).toEqual(actual_result);
    });
    it("only one number is in rigtht loction,print 1A0B", () => {
        let user_guess = "1678";
        let actual_result = "1A0B";
        expect(guess_re(riddle, user_guess)).toEqual(actual_result);
    });
    it("two number are in wrong loction and two number are in rigtht loction,print 2A2B", () => {
        let user_guess = "1324";
        let actual_result = "2A2B";
        expect(guess_re(riddle, user_guess)).toEqual(actual_result);
    });
    it("one number is in wrong loction and two number is in rigtht loction,print 2A1B", () => {
        let user_guess = "1624";
        let actual_result = "2A1B";
        expect(guess_re(riddle, user_guess)).toEqual(actual_result);
    });
    it("only two number are in rigtht loction,print 2A0B", () => {
        let user_guess = "1276";
        let actual_result = "2A0B";
        expect(guess_re(riddle, user_guess)).toEqual(actual_result);
    });
    it("only there number is in rigtht loction,print 3A0B", () => {
        let user_guess = "1237";
        let actual_result = "3A0B";
        expect(guess_re(riddle, user_guess)).toEqual(actual_result);
    });
    it("all is right,print 4A0B", () => {
        let user_guess = "1234";
        let actual_result = "4A0B";
        expect(guess_re(riddle, user_guess)).toEqual(actual_result);
    });


});