const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/api/covid",
        destination: `http://apis.data.go.kr/B551182/pubReliefHospService/getpubReliefHospList?ServiceKey=juQIiU25rvu6W21we37f1D%252F2rdtOmzd8YI9tb06qPgf7cb1r%252BD2OlnqZmAyycI0%252BFrtnCuE5DtQpr3ZxTm%252FvlA%253D%253D&numOfRows=1000&spclAdmTyCd=A0`,
      },
    ];
  },
};
