console.log("Hi, Welcome to Javascript Assignment");
console.log("-----------------*-----------*-------------*---------------");


// Declare a variable named challenge and assign it to an initial value 'Javascript with Bharath'.
let challenge = "Javascript with Bharath";


// Print the string on the browser console using console.log()
console.log(challenge);


// Print the length of the string on the browser console using console.log()
console.log("length of the string in '"+challenge+"' is: ",challenge.length);


// •	Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());


// •	Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());


// •	Cut (slice) out the first word of the string using substr() or substring() method
console.log("SubString of String is: " +challenge.substr(0,10));    
										 

// •	Slice out the phrase "JavaScript With" from Javascript with Bharath.
console.log("SubString of String is: " + challenge.substring(0,15));
										 

// •	Check if the string contains a word Script using includes() method
console.log(challenge.includes("Java"));


// •	Split the string into an array using split() method
console.log(challenge.split(""));


// •	Split the string "Javascript with Bharath" at the space using split() method
console.log(challenge.split(" "));


// •	'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let str = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(str);
console.log(str.split(","));


// •	Change Javascript with Bharath to Mastering Python with Bharath using replace() method.
console.log(challenge.replace("Javascript","Mastering Python"));


// •	What is character at index 15 in 'Javascript with Bharath' string? Use charAt() method.
console.log("character at index 15 :" +challenge.charAt(15));   /*space  "with_Bhar"
																			  15	*/
												  
// •	What is the character code of J in 'Javascript with Bharath' string using charCodeAt()
console.log("character code of J in('Javascript with Bharath') :"+challenge.charCodeAt("Javascript"));   //74


// •	What is the character code of "a" in 'Javascript with Bharath' string using charCodeAt()
console.log("character code of a in ('Javascript with Bharath') is :" +challenge.indexOf("a"));   /* j a v a  =>1
																									 0 1 2 3   */


// •	Use lastIndexOf to determine the position of the last occurrence of "a "in Javascript with Bharath.
 console.log("the position of the last occurrence of 'a' is :" +challenge.lastIndexOf("a"));     /*1516171819 20 2122				   
																							        _ B h a r  a t h    a=20  */

																
/*•	Use indexOf to find the position of the first occurrence of the word because in the following sentence:
'You cannot end a sentence with because because because is a conjunction'*/
let str1="You cannot end a sentence with because because because is a conjunction";
console.log("the position of the first occurrence of the word 'because' is :" +str1.indexOf("b"));     	 //31


// •	Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log("the position of the last occurrence of the word 'because' is :" +str1.lastIndexOf("because"));			//47



// •	Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log("the position of the first occurrence of the word 'because' is :" +str1.search("because"));				//31


// •	Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' Javascript with Bharath '.
let str2=" Javascript with Bharath ";
console.log(str2.length)		//25
s = str2.trim();
console.log(s);
console.log(s.length);			//23


// •	Use startsWith() method with the string Javascript with Bharath and make the result true
console.log(challenge.startsWith("J"));    //True


// Use endsWith() method with the string Javascript with Bharath and make the result true
console.log(challenge.endsWith("th"));   //True



// •	Use match() method to find all the a’s in Javascript with Bharath
// let txt="Javascript with Bharath";
	// txt= txt.match();	//4
// console.log(txt.length);


// •	Use concat() and merge 'JavaScript' and 'with Bharath' to a single string, 'Javascript with Bharath'
 let str4="JavaScript";
 let str5=" with Bharath";
 let text = str4.concat(str5);
 console.log(text);
 
 
 
 // •	Use repeat() method to print Javascript with Bharath 2 times
 console.log(challenge.repeat(2));
 
 
// Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

console.log("'There is no exercise better for the heart than reaching down and lifting people up.'\n \t \t -by John Holmes teaches us to help one another.");


// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.






// •	Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let phrase="You cannot end a sentence with because because because is a conjunction"
console.log(phrase.length);
console.log(phrase.substr(31,23));
