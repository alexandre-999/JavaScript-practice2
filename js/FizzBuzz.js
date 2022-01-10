'user strict';
const output = document.getElementById('output');

const fizzbuzzResult = document.getElementById('fizzbuzz-result');
const createLi = (val) =>{
  const li = document.createElement('li');
  fizzbuzzResult.appendChild(li);
  li.innerHTML = val;
};

output.addEventListener('click', () => {
  const fizznum = Number(document.getElementById('id_FizzNum').value);
  const buzznum = Number(document.getElementById('id_BuzzNum').value);
  fizzbuzzResult.innerHTML = '';

  if(
    Number.isInteger(fizznum) &&
    Number.isInteger(buzznum) &&
    fizznum > 0 &&
    buzznum > 0
    ) {
      for(i = 1; i < 100; i++) {
        if(i % fizznum === 0 && i % buzznum === 0) {
          createLi(`FizzBuzz ${i}`);
        } else if(i % fizznum === 0) {
          createLi(`Fizz ${i}`);
        } else if(i % buzznum === 0) {
          createLi(`Buzz ${i}`);
        }}} else {
        fizzbuzzResult.innerHTML = '';
        fizzbuzzResult.innerHTML = '<p>整数値を入力してください<p>'
}});
