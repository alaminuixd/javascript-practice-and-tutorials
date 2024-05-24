const array = [
  { id: 3, name: "Alice" },
  { id: 1, name: "Bob" },
  { id: 2, name: "John" },
];
array.sort((a, b) => a.id - b.id);
/* 
code in "short(...)" will loop in every pair of the numbers. No pair no loop.
(ies: 3, 1, 2) typically makes 2 pairs ( pair-1: [3, 1]) & (pair-2: [1, 2])
But the number position will shift as we loop through and apply algorithms.
loop 1:
    sequence: ids: 3, 1, 2
    first pair: (a/3, b/1) SO, 3 - 1 = 2
    result (2) is positive so "b/1" will come before "a/3":
    sequence: 1, 3, 2
loop 2:
    sequence: ids: 1, 3, 2
    second pair: (a/3, b/2) SO, 3 - 2 = 1
    result (1) is positive so "b/2" will come first:
    sequence: 1, 2, 3
As there are no more pairs, the result will be: 1, 2, 3
*/
