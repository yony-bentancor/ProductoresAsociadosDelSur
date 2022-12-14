const express = require("express");
const nunjucks = require("nunjucks");
const app = express();

const path = require("path");
const routes = require("./src/routes/index.routes");
const PORT = process.env.PORT || 8080;

nunjucks.configure("./src/views", {
  autoescape: true,
  express: app,
});

//settings-----
app.set("PORT", 8080);
app.set("view engine", "njk");

//middelwares----
app.use(routes); //app.use('/static' express.static(path.join(__dirname 'public')))
//D:\node\cv-yonybentancor\node_modules\serve-static\public

app.listen(app.get("PORT"), () => {
  console.log(`hola yony estas conectado al puerto ${app.get("PORT")}`);
});
