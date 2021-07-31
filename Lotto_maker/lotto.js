function lottoN() {
    let numbers = [];

    for (let i = 0; i < 6; i++) {
      numbers[i] = Math.floor(Math.random() * 45) + 1;
      for (let j = 0; j < i; j++) {
        if (numbers[i] === numbers[j]) {
          i--;
          break;
        }  
      }
    }
    let result = "";
    for(k = 0; k < 6; k ++){
      if(k > 0){
      result += ", ";
      }
      result += numbers[k];
    }
    lotto.result.value = result;
}






  // let start = (Math.floor(Math.random() * 45) + 1;
  // result[0]이 result[1] ~ result[6]과 달라야함.
  // 2중 for문을 가면?
  // 첫번째 반복문은 result의 0부터 5까지 훑게 만듦. i; i<=5; i++
  // 첫번째 반복문에서 result[0]을 일단 킵.
  // 두번째 반복문은 j+1; j<=4; j++ 
  // 두번째 반복문에서 첫번째 반복문의 result[0]과 result[1] ~ result[6]을 비교
  // 만약 result[i] !== result[j+1] 이면
  