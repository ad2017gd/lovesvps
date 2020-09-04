const app  = require("express")()
const path = require("path")
require('./js/routes')(app)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
/*
require("greenlock-express")
    .init({
        packageRoot: __dirname,
        configDir: "./greenlock.d",
        maintainerEmail: "lovescock@cock.email",
        cluster: false
    })
    .serve(app);
*/

app.listen(5000)
