// var : 잘 쓰이지 않음, 의도치 않은 덮어쓰기 가능성 높음
var greeting = 'hello';
console.log(greeting)

var greeting = 'hi';
console.log(greeting);

greeting = 'how are you';
console.log(greeting);

// let : 중복 선언 불가, 재할당 가능
let greeting = "hello";
console.log(greeting);

let greeting = "hi";
console.log(greeting); // ❌ SyntaxError: Identifier 'greeting' has already been declared

greeting = 'hi'
console.log(greeting); // 가능 (재할당)

// const : 중복 선언 불가, 재할당 불가
const greeting = 'hello';
console.log(greeting);

greeting = 'hi'; // ❌ TypeError: Assignment to constant variable
console.log(greeting);