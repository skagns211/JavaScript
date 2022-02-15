const { Users } = require("../../models");

export default async function (req, res) {
  console.log(Users);
  res.send({ a: `${Users}` });
}

// module.exports = {
//   get: async (req, res) => {
//     try {
//       return res.send({ a: "hi" });
//     } catch (err) {
//       console.error(err);
//     }
//   },
// };
