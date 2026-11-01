1. Reverse a String
Question: "Pakistan" ko reverse karo.
function reverseString(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }

  return result;
}

console.log(reverseString("Pakistan"));
// natikaP
Simple English:
We start from the last character and move toward the first character. We add every character to a new string.
Roman Urdu:
Hum string ke last character se start karte hain aur backward move karte hain. Har character ko new string mein add kar dete hain.
Time: O(n)
Space: O(n)
2. Check Palindrome
Question: Check karo "madam" palindrome hai ya nahi.
Palindrome ka matlab: Forward aur backward same ho.
function isPalindrome(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }

  if (str === reversed) {
    return true;
  }

  return false;
}

console.log(isPalindrome("madam"));
// true

console.log(isPalindrome("hello"));
// false
Simple English:
First, we reverse the string. Then we compare the original string with the reversed string.
Roman Urdu:
Pehle string ko reverse karte hain. Phir original aur reversed string ko compare karte hain. Agar dono same hon to palindrome hai.
Time: O(n)
Space: O(n)
3. Count Vowels
Question: String mein vowels count karo.
function countVowels(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("javascript"));
// 3
Simple English:
We check every character. If the character is a, e, i, o, u, we increase the count.
Roman Urdu:
Hum har character ko check karte hain. Agar character vowel ho to count ko 1 se increase kar dete hain.
Time: O(n)
Space: O(1)
4. Find Largest Number
Question: Array mein largest number find karo.
function findLargest(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

console.log(findLargest([10, 5, 25, 8, 15]));
// 25
Simple English:
We assume the first element is the largest. Then we compare every number with it. If we find a bigger number, we update largest.
Roman Urdu:
Pehle hum first element ko largest maan lete hain. Phir har number ko compare karte hain. Agar koi number bara milta hai to largest update kar dete hain.
Time: O(n)
Space: O(1)
5. Find Smallest Number
function findSmallest(arr) {
  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}

console.log(findSmallest([10, 5, 25, 8, 15]));
// 5
Simple English:
We assume the first number is the smallest. Then we compare all other numbers.
Roman Urdu:
Pehle first number ko smallest maan lete hain. Phir baqi numbers ke saath compare karte hain. Jo chota number mile usko smallest bana dete hain.
Time: O(n)
Space: O(1)
6. Sum of Array
Question: Array ke tamam numbers ka sum find karo.
function arraySum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

console.log(arraySum([10, 20, 30, 40]));
// 100
Simple English:
We start sum from zero and add every array element to it.
Roman Urdu:
Hum sum = 0 se start karte hain aur loop ke through har element ko sum mein add karte hain.
Time: O(n)
Space: O(1)
7. Count Even and Odd Numbers
Question: Array mein kitne even aur odd numbers hain?
function countEvenOdd(arr) {
  let even = 0;
  let odd = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  return {
    even: even,
    odd: odd
  };
}

console.log(countEvenOdd([1, 2, 3, 4, 5, 6]));
// { even: 3, odd: 3 }
Simple English:
If a number divided by 2 has remainder zero, it is even. Otherwise, it is odd.
Roman Urdu:
Agar number ko 2 se divide karne par remainder 0 aaye to number even hai. Warna odd hai.
Time: O(n)
Space: O(1)
8. Factorial
Question: 5 ka factorial find karo.
5! = 5 × 4 × 3 × 2 × 1 = 120
function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
}

console.log(factorial(5));
// 120
Simple English:
We multiply every number from 1 to n.
Roman Urdu:
Hum 1 se n tak har number ko multiply karte hain.
Time: O(n)
Space: O(1)
9. Fibonacci Series
Question: First 10 Fibonacci numbers print karo.
Fibonacci ==> Fib-uh-Nah-chee
0, 1, 1, 2, 3, 5, 8, 13...
// Fibonacci ka matlb ha ====> Har next number, pichaly do number ko add karky banta ha 
function fibonacci(n) {
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    console.log(a);

    let next = a + b;
    a = b;
    b = next;
  }
}

fibonacci(10);
Output:
0
1
1
2
3
5
8
13
21
34
Simple English:
Every next number is the sum of the previous two numbers.
Roman Urdu:
Har next number previous do numbers ka sum hota hai. Hum a aur b variables mein previous two numbers store karte hain.
Time: O(n)
Space: O(1)
10. Check Prime Number
Question: Check karo number prime hai ya nahi.
Prime number woh hota hai jo sirf 1 aur khud se divide hota hai.
function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7));
// true

console.log(isPrime(10));
// false
Simple English:
We check whether the number is divisible by any number between 2 and n - 1. If it is divisible, it is not prime.
Roman Urdu:
Hum check karte hain ke number 2 se n-1 ke darmiyan kisi number se completely divide hota hai ya nahi. Agar divide ho jaye to prime nahi hai.
Time: O(n)
Space: O(1)
⭐ Interview Optimization
Aap interviewer ko impress karne ke liye n tak loop chalane ke bajaye sqrt(n) tak check kar sakte ho:
function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
Iski Time Complexity O(√n) hai.
Roman Urdu:
Ye optimized approach zyada efficient hai kyun ke humein har number ko check karne ki zaroorat nahi hoti. Sirf square root tak check karna enough hota hai.
🧠 Aaj Ka Interview Revision
#
Problem
Main Concept
1
Reverse String
Loop
2
Palindrome
String Comparison
3
Count Vowels
Conditions
4
Largest Number
Comparison
5
Smallest Number
Comparison
6
Array Sum
Accumulator
7
Even/Odd
Modulus %
8
Factorial
Multiplication Loop
9
Fibonacci
Variables + Loop
10
Prime Number
Divisibility
🎯 Pakistan Tech Interview ke liye Important
Aap in 10 questions ko sirf ratta na lagao. Har question ke liye ye 4 cheezen explain karna seekho:
Problem kya hai?
Approach kya hai?
Code kaise work kar raha hai?
Time & Space Complexity kya hai?