//숫자형
let num = 10;
console.log("변수 num의 typeof : "+typeof num);
//alert("변수 num = "+num+"입니다.");

let dan = 3;
let gugu = 8;
let output = `${dan} 곱하기 ${gugu}는 ${dan * gugu}입니다.`;
console.log(output);

let score = [70, 60, 80, 90];
// alert(score+"의 type은"+typeof score);

let studentScore = {
    'korean' : 90,
    'english' : 100,
    'math' : 90
};

console.log(studentScore.english);
console.log(studentScore['english']);