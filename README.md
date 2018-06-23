## Permuter

It generates all possible combinations receiving a set of possible attributes and values choosing one value per attribute at the time.

#### Example input:

```javascript
  const options = {
    optionA: ['A-value-1', 'A-value-2'],
    optionB: ['B-value-1', 'B-value-2', 'B-value-3'],
    optionC: ['C-value-1']
  }
```

#### Example output (all possible combinations):

```javascript
  [
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
  ]
```

##### Install

* (yarn) `yarn install js-permuter`
* (npm) `npm install js-permuter`

##### Use

```javascript
  import { permute } from "js-permuter";
  const options = {
    optionA: ['A-value-1', 'A-value-2'],
    optionB: ['B-value-1', 'B-value-2', 'B-value-3'],
    optionC: ['C-value-1']
  }
  const allCombinations = permute(options);
```
