(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Generates all possible combinations by choosing a value from each option
     * @param inputParamsValues : The object containing possible attributes and their values
     */
    function permute(inputParamsValues, paramCombinationNames, paramsCombinations, permuted) {
        if (inputParamsValues === void 0) { inputParamsValues = {}; }
        // Store the original list of parameter names to permute
        if (!paramCombinationNames) {
            paramCombinationNames = Object.keys(inputParamsValues);
        }
        if (!paramsCombinations) {
            paramsCombinations = {};
        }
        // Initialize an empty set of permutations
        if (!permuted) {
            // console.log(' + Permuting params values from input params values: ', inputParamsValues);
            permuted = [];
        }
        var inputParamNames = Object.keys(inputParamsValues);
        var i, i2, valuesToConsider, combinationMade, newParamsCombinations, newInputParamsValues;
        var _loop_1 = function () {
            if (paramsCombinations[inputParamNames[i]] == null) {
                var inputParamValues_1 = inputParamsValues[inputParamNames[i]];
                for (i2 = 0; i2 < inputParamValues_1.length; i2++) {
                    (function (inputParamsValues, paramCombinationNames, paramsCombinations, permuted, valuesToConsider) {
                        combinationMade = false;
                        // Only store a permutation when we are considering values for all inputs
                        valuesToConsider = inputParamsValues[inputParamNames[i]].slice(i2 + 1, inputParamsValues[inputParamNames[i]].length);
                        inputParamsValues[inputParamNames[i]] = valuesToConsider;
                        // Prepare a new set of parameter combinations
                        newParamsCombinations = Object.assign({}, paramsCombinations);
                        newParamsCombinations[inputParamNames[i]] = inputParamValues_1[i2];
                        // Is the parameter combinations complete? Then push it to the permuted list
                        if (Object.keys(newParamsCombinations).length == paramCombinationNames.length) {
                            combinationMade = true;
                        }
                        if (combinationMade) {
                            permuted.push(newParamsCombinations);
                            newParamsCombinations = {};
                        }
                        newInputParamsValues = Object.assign({}, inputParamsValues);
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
        };
        for (i = 0; i < inputParamNames.length; i++) {
            _loop_1();
        }
        return permuted;
    }
    exports.permute = permute;
});
//# sourceMappingURL=index.js.map