// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

// The provided number may not be a prime.


// function sumPrimes(num) {
//   return num;
// }
// sumPrimes(10);
// sumPrimes(10) should return a number.
// sumPrimes(10) should return 17.
// sumPrimes(977) should return 73156.

    
  




function sumPrimes(num) {

let sum =0 ;
 for (let i = 1; i < num; i++) {
    let x=Math.floor(Math.sqrt(i));
    console.log("root==>"+i+"= "+x);
    // document.write("root of num "+ " <h6  >" +x+"<h6/>" )
  if(i%i==0 && i%x!=0 && i%2!=0 && i%3!=0 && i%5!=0 && i%7!=0 && i%11!=0){
  console.log(i);
  document.write("all prime i "+ " <h2>" +i+"<h2/>" )
    sum+=i; 

   

    
 }
 if(i==1 || i==2 || i==3 || i==5 || i==7 || i==11){
    console.log(i);
    document.write("all prime i "+ " <h2>" +i+"<h2/>" )
      sum+=i; 
 }




 }



 console.log("sum of all primes "+sum);
 document.write("sum of all primes "+sum);
  return num;

}
sumPrimes(20);


