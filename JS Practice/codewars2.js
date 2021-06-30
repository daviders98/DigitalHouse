/*
Calculate area of given triangle. Create a function t_area that will take a string which will represent triangle, find area of the triangle, one space will be equal to one length unit. The smallest triangle will have one length unit.

Hints

Ignore dots.

Example:

.
.      .  
.      .       .      ---> should return 2.0

.
.      .  
.      .       .     
.      .       .      .      ---> should return 4.5
*/
function tArea(tStr) {
    let area = .5;
    let floors = (tStr.split("\n").filter((el)=>{
        return el!=""
    }).length)
    for (let index = 1; index < floors-1; index++) {
        area+=index+.5;
    }
    return area;
  }

console.log(tArea('\n.\n. .'))

/*
Write a function p that output
0\n010\n01210\n0123210\n012343210\n01234543210\n0123456543210\n012345676543210\n01234567876543210\n0123456789876543210\n01234567876543210\n012345676543210\n0123456543210\n01234543210\n012343210\n0123210\n01210\n010\n0
Code must be less than or equal to 100 characters.
Code can't contain any other numeric character except 1 and 0. That is characters 2 - 9 not allowed!
That's all :)
*/
//let i=0,a=b=c="",r=(s)=>{return s?r(s.substr(1))+s[0]:s},p=()=>{while(i<10){a+=i;c+=a+b+"\n";b=r(a);i++}return c+r(c).substr(21)}

/*The aim of the kata is to decompose n! (factorial n) into its prime factors.

Examples:
n = 12; decomp(12) -> "2^10 * 3^5 * 5^2 * 7 * 11"
since 12! is divisible by 2 ten times, by 3 five times, by 5 two times and by 7 and 11 only once.

n = 22; decomp(22) -> "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19"

n = 25; decomp(25) -> 2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23
Prime numbers should be in increasing order. When the exponent of a prime is 1 don't put the exponent.

Notes

the function is decomp(n) and should return the decomposition of n! into its prime factors in increasing order of the primes, as a string.
factorial can be a very big number (4000! has 12674 digits, n can go from 300 to 4000).

*/
function decomp(n) {
    let primes = [...Array(n+1).keys()].splice(1),obj = {},i=a=0,output="";
    for (const key of primes) {
        obj[key]=0;
    }
    while(a<n-1){
        i=0;
        a=0;
        while(i<n){
            for (let j = 0; j <= primes.length; j++) {
                if(primes[i]%j==0 && j!=1){
                    obj[j]+=1;
                    primes[i]=primes[i]/j
                    j--
                }
                }
                i++;
            }
        for (let k = 0; k < primes.length-1; k++) {
            if(primes[k]==1){
                a++;
            }
        }
    }
    for (const key in obj) {
        switch(obj[key]){
            case 0:
                break;
            case 1:
                output+=key;
                break;
            default:
                output+=key+"^"+obj[key]
                break;
        }
        if(obj[key]!=0){
            output+=" * "
        }
    }
    return output.slice(0,-3);
}
console.log(decomp(17))