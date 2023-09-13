console.log('veikia')

// FIZZ BUZZ
// 1. Skaičius nuo 1 iki 100.
// 2. Skaičiai, kurie dalinasi iš 3 turi būti pakeisti į žodį „Fizz";
// 3. Skaičiai, kurie dalinasi iš 5 turi būti pakeisti į žodį „Buzz";
// 4. Skaičiai, kurie dalinasi iš 3 ir 5 turi būti pakeisti į žodį „FizzBuzz";
 
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz

// 5. Skaičiai, kurie dalinasi iš 7, turi būti pakeisti į žodį „Biff".
// 5.1. Skaičiai, kurie dalinasi iš 7 ir 3 turi būti pakeisti į žodį „FizzBiff";
// 5.2. Skaičiai, kurie dalinasi iš 7 ir 5 turi būti pakeisti į žodį „BuzzBiff";
// 5.3. Skaičiai, kurie dalinasi iš 7, iš 5 ir iš 3 turi būti pakeisti į žodį „FizzBuzzBiff";

// 1-5 tasks

function fizzbuzz(){

    for (let i = 1; i <= 1000; i++) {
        
        if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
            console.log('FizzBuzzBiff')
        
        } else if (i % 5 === 0 && i % 3 === 0) {
            console.log('FizzBuzz')
    
        } else if (i % 7 === 0 && i % 3 === 0) {
            console.log('FizzBiff')
        
        } else if (i % 7 === 0 && i % 5 === 0) {
            console.log('BuzzBiff')

        } else if (i % 3 === 0) {
            console.log('Fizz')

        } else if (i % 5 === 0) {
            console.log('Buzz')
        
        } else if (i % 7 === 0) {
            console.log('Biff')
        
        } else {
            console.log(i)
        } 
    }  
}

fizzbuzz()

// 6. Skaičiai, kurie dalinasi iš 9, turi būti pakeisti į žodį „Fuzz".

function fizzbuzz(){

    for (let i = 1; i <= 1000; i++) {
        
        if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0 && 9 === 0) {
            console.log('FizzBuzzBiffFuzz')
        
        } else if (i % 5 === 0 && i % 3 === 0 && 9 === 0) {
            console.log('FizzBuzzFuzz')
    
        } else if (i % 7 === 0 && i % 3 === 0 && 9 === 0) {
            console.log('FizzBiffFuzz')
        
        } else if (i % 7 === 0 && i % 5 === 0 && 9 === 0) {
            console.log('BuzzBiffFuzz')

        } else if (i % 7 === 0 && i % 9 === 0) {
            console.log('BiffFuzz')

        } else if (i % 5 === 0 && i % 9 === 0) {
            console.log('BuzzFuzz')

        } else if (i % 5 === 0 && i % 7 === 0) {
            console.log('BuzzBiff')
            
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')

        } else if (i % 3 === 0 && i % 9 === 0) {
            console.log('FizzFuzz')

        } else if (i % 3 === 0 && i % 7 === 0) {
            console.log('FizzBiff')

        } else if (i % 3 === 0) {
            console.log('Fizz')

        } else if (i % 5 === 0) {
            console.log('Buzz')

        } else if (i % 7 === 0) {
            console.log('Biff')

        } else if (i % 9 === 0) {
            console.log('Fuzz')

        } else {
            console.log(i)
        }      
    }  
}

fizzbuzz()