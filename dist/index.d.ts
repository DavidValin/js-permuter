/**
 * Generates all possible combinations by choosing a value from each option
 * @param inputParamsValues : The object containing possible attributes and their values
 */
export declare function permute(inputParamsValues?: {
    [index: string]: any;
}, paramCombinationNames?: Array<any>, paramsCombinations?: {
    [index: string]: string;
}, permuted?: Array<any>): any[];
