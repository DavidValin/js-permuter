import { permute } from "../src/index";

describe("permuteParams", () => {
  let inputParamsValues;
  beforeEach(() => {
    // This represents all possible values for each attribute
    inputParamsValues = {
      optionA: ['A-value-1', 'A-value-2'],
      optionB: ['B-value-1', 'B-value-2', 'B-value-3'],
      optionC: ['C-value-1']
    }
  });

  test("it takes one value from each option and generates all combinations", () => {
    expect(permute(inputParamsValues)).toEqual([
       {
          "optionA": "A-value-1",
          "optionB": "B-value-1",
          "optionC": "C-value-1"
       },
       {
          "optionA": "A-value-1",
          "optionB": "B-value-2",
          "optionC": "C-value-1"
       },
       {
          "optionA": "A-value-1",
          "optionB": "B-value-3",
          "optionC": "C-value-1"
       },
       {
          "optionA": "A-value-2",
          "optionB": "B-value-1",
          "optionC": "C-value-1"
       },
       {
          "optionA": "A-value-2",
          "optionB": "B-value-2",
          "optionC": "C-value-1"
       },
       {
          "optionA": "A-value-2",
          "optionB": "B-value-3",
          "optionC": "C-value-1"
       }
    ]);
  });
});
