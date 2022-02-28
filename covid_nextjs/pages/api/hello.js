import axios from "axios";

export default (req, res) => {
  res.status(200).json({ name: "hi" });
};
