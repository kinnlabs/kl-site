const express = require("express");
const app = express();

function redirect(req, res, next) {
  if (req.hostname !== "kinn.cz") {
    return res.redirect(`https://kinn.cz${req.originalUrl}`);
  }
  return next();
}

app.use(redirect);

app.use(express.static("public"));

app.listen(process.env.PORT || 8000, () => {
  console.log("listening...");
});
