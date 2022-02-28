import axios from "axios";

const Test = () => {
  useEffect(() => {
    axios
      .get(
        "http://apis.data.go.kr/B551182/pubReliefHospService/getpubReliefHospList?ServiceKey=juQIiU25rvu6W21we37f1D%2F2rdtOmzd8YI9tb06qPgf7cb1r%2BD2OlnqZmAyycI0%2BFrtnCuE5DtQpr3ZxTm%2FvlA%3D%3D&numOfRows=10&spclAdmTyCd=A0"
      )
      .then((res) => console.log(res));
    // .catch((err) => alert(err));
  });
  return <div>test!!</div>;
};

export default Test;
