
let elInputUsername = document.querySelector('#username');

let elFailureMessage = document.querySelector('.failure-message');

let elSuccessMessage = document.querySelector('.success-message');
let elMissMatchMessage = document.querySelector('.mismatch-message');

let password1 = document.querySelector('#password')
let password2 = document.querySelector('#password-retype')

elInputUsername.onkeyup = function () {
  if(isMoreThan4Length(elInputUsername.value)) {
    elSuccessMessage.classList.remove('hide');
    elFailureMessage.classList.add('hide');
  } else {
    elSuccessMessage.classList.add('hide');
    elFailureMessage.classList.remove('hide');
  }
}

function isMoreThan4Length(value) {
  return value.length >= 4
}

password2.onkeyup = function () {
  if(isMatch(password1.value, password2.value)) {
    elMissMatchMessage.classList.add('hide');
  } else {
    elMissMatchMessage.classList.remove('hide');
  }
}

function isMatch(password1, password2) {
  return password1 === password2;
}




  // v 아이디 입력창에 글자를 키보드로 입력할 때
  // 글자 수가 4개 이상이면
  // '사용할 수 있는 아이디입니다'