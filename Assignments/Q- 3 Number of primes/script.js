// Given a number n find the number of prime numbers less than equal to that number.
// Input
// There is only one integer containing value of n.

// Constraints:-
// 1 <= n <= 10000000
// Output
// Return number of primes less than or equal to n
// Example
// Sample Input
// 5

// Sample Output
// 3

// Explanation:-
// 2 3 and 5 are the required primes.

// Sample Input
// 5000

// Sample Output
// 669

// You need to return the count of Primes less than equal to N
// N: input number
function numberOfPrimes(N) {
    if (N < 2) return 0;
    let sieve = new Array(N + 1).fill(true);
    sieve[0] = sieve[1] = false;
    for (let p = 2; p * p <= N; p++) {
        if (sieve[p]) {
            for (let i = p * p; i <= N; i += p) {
                sieve[i] = false;
            }
        }
    }
    return sieve.filter(Boolean).length;
}





    

