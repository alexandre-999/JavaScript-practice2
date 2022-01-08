'user strict';


const output = document.getElementById('output');

output.addEventListener('click', () => {
  const fizznum = Number(document.getElementById('id_FizzNum').value);
  const buzznum = Number(document.getElementById('id_BuzzNum').value);
  const fizzbuzzResult = document.getElementById('fizzbuzz-result');
  fizzbuzzResult.innerHTML = '';

  if(
    Number.isInteger(fizznum) &&
    Number.isInteger(buzznum) &&
    fizznum > 0 &&
    buzznum > 0
    ) {
      for(i = 1; i < 100; i++) {
        if(i % fizznum === 0 && i % buzznum === 0) {
          val = `FizzBuzz ${i}`;
        } else if(i % fizznum === 0) {
          val = `Fizz ${i}`;
        } else if(i % buzznum === 0) {
          val = `Buzz ${i}`;
        } else {
          val = '';
        }
        const li = document.createElement('li');
        fizzbuzzResult.appendChild(li);
        li.innerHTML = val;
      }} else {
        fizzbuzzResult.innerHTML = '';
        fizzbuzzResult.innerHTML = '<p>整数値を入力してください<p>'
}});
