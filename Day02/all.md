🚀 Day 2 — 10 Intermediate JavaScript Problems
1. Find Second Largest Number
Question: Array mein second largest number find karo.
function secondLargest(arr) {
  let largest = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = largest;
      largest = arr[i];
    } else if (arr[i] > second && arr[i] !== largest) {
      second = arr[i];
    }
  }

  return second;
}

console.log(secondLargest([10, 5, 20, 8, 15]));
// 15
Simple English:
We maintain two variables: largest and second. When we find a new largest number, the old largest becomes second largest.
Roman Urdu:
Hum do variables rakhte hain: largest aur second. Jab humein naya largest number milta hai, purana largest second ban jata hai.
Time: O(n)
Space: O(1)
2. Remove Duplicates from Array
Question: Duplicate values remove karo without Set.
function removeDuplicates(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let found = false;

    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        found = true;
        break;
      }
    }

    if (!found) {
      result[result.length] = arr[i];
    }
  }

  return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// [1, 2, 3, 4, 5]
Simple English:
For each element, we check whether it already exists in the result array. If it does not exist, we add it.
Roman Urdu:
Har element ko result array ke elements ke saath compare karte hain. Agar pehle se exist nahi karta to usko result mein add kar dete hain.
Time: O(n²)
Space: O(n)
3. Find Missing Number
Question: Array mein 1 se n tak numbers hain, lekin ek number missing hai.
function findMissing(arr, n) {
  let expectedSum = 0;
  let actualSum = 0;

  for (let i = 1; i <= n; i++) {
    expectedSum = expectedSum + i;
  }

  for (let i = 0; i < arr.length; i++) {
    actualSum = actualSum + arr[i];
  }

  return expectedSum - actualSum;
}

console.log(findMissing([1, 2, 3, 5], 5));
// 4
Simple English:
First, we calculate the expected sum from 1 to n. Then we calculate the actual array sum. The difference is the missing number.
Roman Urdu:
Pehle 1 se n tak tamam numbers ka expected sum nikalte hain. Phir array ka actual sum nikalte hain. Dono ka difference missing number hota hai.
Time: O(n)
Space: O(1)
4. Find Duplicate Number
Question: Array mein duplicate number find karo.
function findDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }

  return null;
}

console.log(findDuplicate([1, 3, 4, 2, 3]));
// 3
Simple English:
We compare every element with the elements after it. If two values are equal, we found a duplicate.
Roman Urdu:
Har element ko uske baad wale elements ke saath compare karte hain. Agar dono same hon to duplicate mil gaya.
Time: O(n²)
Space: O(1)
5. Count Frequency of Elements
Question: Har number kitni baar appear hua hai?
function countFrequency(arr) {
  let frequency = {};

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (frequency[value] === undefined) {
      frequency[value] = 1;
    } else {
      frequency[value] = frequency[value] + 1;
    }
  }

  return frequency;
}

console.log(countFrequency([1, 2, 2, 3, 3, 3]));
// { 1: 1, 2: 2, 3: 3 }
Simple English:
We use an object to store each value and its count.
Roman Urdu:
Hum object use karte hain. Object mein number ko key aur uski frequency ko value ke taur par store karte hain.
Time: O(n)
Space: O(n)
⭐ Interview mein bohat important concept: Frequency Counter.

6. Find Common Elements
Question: Do arrays ke common elements find karo.
function findCommon(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        let alreadyAdded = false;

        for (let k = 0; k < result.length; k++) {
          if (result[k] === arr1[i]) {
            alreadyAdded = true;
            break;
          }
        }

        if (!alreadyAdded) {
          result[result.length] = arr1[i];
        }
      }
    }
  }

  return result;
}

console.log(findCommon([1, 2, 3, 4], [3, 4, 5, 6]));
// [3, 4]
Simple English:
We compare every element of the first array with every element of the second array.
Roman Urdu:
Pehle array ke har element ko second array ke har element ke saath compare karte hain. Jo same ho usko result mein add karte hain.
Time: O(n × m)
Space: O(n)
7. Move Zeros to End
Question: Array ke zeros ko end par move karo.
Input:
[0, 1, 0, 3, 12]
Output:
[1, 3, 12, 0, 0]
Solution:
function moveZeros(arr) {
  let position = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[position] = arr[i];
      position++;
    }
  }

  while (position < arr.length) {
    arr[position] = 0;
    position++;
  }

  return arr;
}

console.log(moveZeros([0, 1, 0, 3, 12]));
// [1, 3, 12, 0, 0]
Simple English:
First, we move all non-zero values to the beginning. Then we fill the remaining positions with zeros.
Roman Urdu:
Pehle tamam non-zero values ko starting mein place karte hain. Phir jo positions bachti hain un mein zeros add kar dete hain.
Time: O(n)
Space: O(1)
⭐ Interview Tip: Ye approach array ko in-place modify karti hai.
8. Check Anagram
Question: Check karo "listen" aur "silent" anagrams hain ya nahi.
Anagram mein dono strings ke characters same hote hain, bas order different ho sakta hai.
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let count = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];

    if (count[char] === undefined) {
      count[char] = 1;
    } else {
      count[char]++;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];

    if (count[char] === undefined) {
      return false;
    }

    count[char]--;

    if (count[char] < 0) {
      return false;
    }
  }

  return true;
}

console.log(areAnagrams("listen", "silent"));
// true
Simple English:
We count every character in the first string. Then we reduce the count for every character in the second string. If all counts match, they are anagrams.
Roman Urdu:
Pehle first string ke har character ki frequency count karte hain. Phir second string ke characters ki frequency minus karte hain. Agar sab match ho jayein to anagram hai.
Time: O(n)
Space: O(n)
⭐ Very Important Interview Problem
9. Two Sum
Question: Array mein do numbers find karo jinka sum target ke equal ho.
Input:
[2, 7, 11, 15]
Target:
9
Output:
[2, 7]
Solution:
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
// [2, 7]
Simple English:
We select one number and compare it with every number after it. If their sum equals the target, we return them.
Roman Urdu:
Pehle ek number select karte hain aur usko baqi numbers ke saath add karke check karte hain. Agar sum target ke equal ho to dono numbers return kar dete hain.
Time: O(n²)
Space: O(1)
⭐ Optimized Interview Solution
function twoSum(arr, target) {
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    let needed = target - arr[i];

    if (seen[needed] !== undefined) {
      return [needed, arr[i]];
    }

    seen[arr[i]] = i;
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
// [2, 7]
Time: O(n)
Space: O(n)
Roman Urdu:
Optimized solution mein hum har number ka required partner calculate karte hain. Example target = 9 aur current number 2 hai, to humein 7 chahiye. Agar 7 pehle se object mein hai to answer mil gaya.
10. Find First Non-Repeating Character
Question: String ka pehla character find karo jo sirf ek baar appear hota hai.
Input:
"swiss"
Output:
"w"
Solution:
function firstNonRepeating(str) {
  let frequency = {};

  // Step 1: Count characters
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (frequency[char] === undefined) {
      frequency[char] = 1;
    } else {
      frequency[char]++;
    }
  }

  // Step 2: Find first character with count 1
  for (let i = 0; i < str.length; i++) {
    if (frequency[str[i]] === 1) {
      return str[i];
    }
  }

  return null;
}

console.log(firstNonRepeating("swiss"));
// w
Simple English:
First, we count the frequency of every character. Then we go through the string again and return the first character whose frequency is 1.
Roman Urdu:
Pehle har character ki frequency count karte hain. Phir string ko dobara check karte hain aur jo pehla character sirf ek baar aya ho usko return kar dete hain.
Time: O(n)
Space: O(n)
🧠 Day 2 Quick Revision
#
Problem
Important Concept
1
Second Largest
Multiple Variables
2
Remove Duplicates
Nested Loop
3
Missing Number
Sum Logic
4
Duplicate Number
Nested Loop
5
Frequency Counter
Object
6
Common Elements
Array Comparison
7
Move Zeros
Two Pointer Concept
8
Anagram
Frequency Counter
9
Two Sum
Hash Map/Object
10
First Non-Repeating
Frequency Counter
🎯 Day 2 ke Sabse Important Interview Questions
Aap in 5 questions ko zaroor practice karo:
Second Largest Number
Remove Duplicates
Anagram
Two Sum
First Non-Repeating Character
Ye questions aapki logic building ke saath-saath hash map/object, nested loops, frequency counter aur optimization samajhne mein help karenge.
💡 Interview Strategy
Agar interviewer kahe "Solve this problem", to direct code na likho. Pehle bolo:
"First, I will understand the problem and clarify the input and expected output. Then I will explain my approach, write the solution, test it with an example, and finally discuss time and space complexity."
Roman Urdu:
"Sab se pehle main problem ko samjhunga aur input/output clear karunga. Phir apna approach explain karunga, solution likhunga, example se test karunga aur end mein time aur space complexity bataunga."