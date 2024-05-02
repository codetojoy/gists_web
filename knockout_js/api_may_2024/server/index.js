const express = require("express")
const path = require('path')
const cors = require('cors')
const app = express()

app.use(cors());

var PORT = process.env.port || 3000

// View Engine Setup 
app.set("views", path.join(__dirname))
app.set("view engine", "ejs")

app.get("/check-account-number", function (req, res) {
	const accountNumber = req.query.accountNumber

    const ok = accountNumber && accountNumber.length > 4 && (accountNumber % 2 == 0)
	console.log(`TRACER accountNumber: ${accountNumber} ok: ${ok}`);

    setTimeout(function() {
          res.json({"data":ok});
    },1500);
})

app.listen(PORT, function (error) {
	if (error) throw error
	console.log("Server created Successfully on PORT", PORT)
})

