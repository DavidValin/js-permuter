/**
 * Generates all possible combinations by choosing a value from each option
 * @param inputParamsValues : The object containing possible attributes and their values
 */
export function permute(inputParamsValues:{ [index: string]: any } = {}, paramCombinationNames?:Array<any>, paramsCombinations?:{ [index: string]: string }, permuted?:Array<any>) {
  // Store the original list of parameter names to permute
  if (!paramCombinationNames) { paramCombinationNames = Object.keys(inputParamsValues); }
  if (!paramsCombinations) { paramsCombinations = {}; }

  // Initialize an empty set of permutations
  if (!permuted) {
    // console.log(' + Permuting params values from input params values: ', inputParamsValues);
    permuted = [];
  }
  const inputParamNames:Array<any> = Object.keys(inputParamsValues);

  let i, i2, valuesToConsider:any, combinationMade:boolean, newParamsCombinations:{ [index: string]: string }, newInputParamsValues:{ [index: string]: string };
  for (i = 0; i < inputParamNames.length; i++) {
    if (paramsCombinations[inputParamNames[i]] == null) {
      const inputParamValues = inputParamsValues[inputParamNames[i]];
      for (i2 = 0; i2 < inputParamValues.length; i2++) {
        ((inputParamsValues, paramCombinationNames, paramsCombinations, permuted, valuesToConsider) => {
          combinationMade = false;
          // Only store a permutation when we are considering values for all inputs
          valuesToConsider = inputParamsValues[inputParamNames[i]].slice(i2+1, inputParamsValues[inputParamNames[i]].length);
          inputParamsValues[inputParamNames[i]] = valuesToConsider;
          // Prepare a new set of parameter combinations
          newParamsCombinations = (<any>Object).assign({}, paramsCombinations);
          newParamsCombinations[inputParamNames[i]] = inputParamValues[i2];
          // Is the parameter combinations complete? Then push it to the permuted list
          if (Object.keys(newParamsCombinations).length == paramCombinationNames.length) {
            combinationMade = true;
          }
          if (combinationMade) {
            permuted.push(newParamsCombinations);
            newParamsCombinations = {};
          }
          newInputParamsValues = (<any>Object).assign({}, inputParamsValues);
          // Did we finish all possible values for a parameter?
          if (newInputParamsValues[inputParamNames[i]].length == 0) {
            // Now we remove the parameter considered from the recursive combinations
            delete newInputParamsValues[inputParamNames[i]];
          }
         // Do we have any param value to consider in this iteration?
         if (!combinationMade && Object.keys(newInputParamsValues).length > 0) {
           permute(newInputParamsValues, paramCombinationNames, newParamsCombinations, permuted);
         }
       })(inputParamsValues, paramCombinationNames, paramsCombinations, permuted, valuesToConsider);
      }
    }
  }
  return permuted;
}
