// console.log()은 콘솔에 값을 출력할 때 사용
console.log('안녕하세요!'); // 문자열 출력
console.log(123); // 숫자 출력
console.log(true); // boolean 출력

// 변수를 선언하고 출력할 수도 있음
var greeting = '안녕하세요.'
console.log(greeting); // 변수 값 출력

// 객체를 출력할 때는 log()와 table()의 차이를 확인할 수 있음
console.log({a: "a", b: "b"}) // 일반 객체 출력
console.table({a: "a", b: "b"}) // 표 형태로 출력

// 에러 및 경고 메시지 출력 가능
console.error('Error!'); // 에러 메시지 (빨간색)
console.warn('Warning'); // 결고 메시지 (노란색)

// 실행 시간 측정: time()과 timeEnd() 사이의 코드를 얼마나 걸리는지 측정
console.time('Hello'); // 'Hello'라는 타이머 시작
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.timeEnd('Hello'); //'Hello'라는 타이머 종료 및 걸린 시간 출력

// 콘솔 초기화
console.clear();