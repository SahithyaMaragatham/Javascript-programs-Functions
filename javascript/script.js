// program 1
// for(let num=1;num<=100;num++){
//     if(num%3==0 && num%5==0){
//         console.log("FizzBuzz");
//     }
//     else if(num%3==0){
//         console.log("Fizz");
//     }
//     else if(num%5==0){
//         console.log("Buzz");
//     }
// }
//program 2
// function isPalindrome(s){
//     let j=s.length-1
//     for(let i=0;i<s.length/2;i++){
//         if(s[i]!=s[j]){
//             return false;
//         }
//         j--;
//     }
//     return true;
// }
// let s1="HEllo world";
// let s2="mam";
// console.log(isPalindrome(s1));
// console.log(isPalindrome(s2));

//program 3
// let arr=[10,20,30,40,50];
// function largest(arr){
//     let l1=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>l1){
//             l1=arr[i];
//         }
//     }
//     return l1;
// }
// console.log(largest(arr));

//program 4
// function charFreq(str){
//     let freq={};
//     for(let i=0;i<str.length;i++){
//         let char=str[i];
//         if(freq[char]){
//             freq[char]++;
//         }
//         else{
//             freq[char]=1;
//         }
//     }
//     return freq;
// }
// let string="Hello world";
// console.log(charFreq(string));

//program 5
// function longestWord(str){
//     const words=str.split(' ');
//     let longest='';
//     for(let i=0;i<words.length;i++){
//         if(words[i].length>longest.length){
//             longest=words[i];
//         }
//     }
//     return longest;
// }
// let string="introduction to JavaScript";
// console.log(longestWord(string));

//program 6
// function factorial(num){
//     if(num==0)
//         return 1;
//     let res=1;
//     for(let i=1;i<=num;i++)
//         res*=i;
//     return res;
// }
// let n=5;
// console.log(factorial(n));

//program 7
// function celciusToFahren(c){
//     let f=(c*9/5)+32;
//     return f;
// }
// let c=30;
// console.log(celciusToFahren(c));

//program 8
let arr=[1,2,4,5,6];
function missingNum(arr){
    let n=arr.length+1;
    let ExpectedSum=(n*(n+1))/2;
    let sumArr=0;
    for(let i=0;i<n-1;i++){
        sumArr+=arr[i];
    }
    let mnum=ExpectedSum-sumArr;
    return mnum;
}
console.log(missingNum(arr));