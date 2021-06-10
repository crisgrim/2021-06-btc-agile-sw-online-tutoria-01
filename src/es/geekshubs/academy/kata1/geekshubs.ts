const FIZZ = "Fizz";
const BUZZ = "Buzz";
const FIZZBUZZ = FIZZ + BUZZ;
const LR = "\n";

/**
 * Function module of operator
 * @param input 
 * @param operator 
 * @returns Boolean
 */
function mod(input: number, operator: number): boolean {
    return input % operator == 0;
}

/**
 * Funtion of module of 3 and 5
 * @param input 
 * @returns Boolean
 */
function mod_3_5(input: number): boolean {
    return mod(input, 3) && mod(input, 5);
}

/**
 * Function fizzbuzz
 * @param input 
 * @returns string
 */
export function fizzBuzz(input : number) : String {
    let result = '';

    for (var i = 1; i <= input; i++) {
        if (mod_3_5(i)) {
            result += FIZZBUZZ + LR;
        } else if (mod(i, 3)) {
            result += FIZZ + LR;
        } else if (mod(i, 5)) {
            result += BUZZ + LR;
        } else {
            result += i + LR;
        }
    }

    return result;
};
