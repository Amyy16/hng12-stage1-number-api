const express = require("express");
const cors = require("cors")
const { is_perfect, is_prime, getProperties, digit_sum, getFunfact} = require("./helpers")
require("dotenv").config();


const app = express();
app.use(express.json());
app.use(cors())
const port = process.env.PORT || 3000;



app.get("/api/classify-number", async (req, res) => {
    const num = req.query.number
    const number = parseInt(num);
    if (isNaN(number) || number.toString() !== num) {
        return res.status(400).json({ number:"alphabet",error: true})
    }
    // if (!Number.isInteger(num)) {
    //     return res.status(400).json({ number: "alphabet", error: true });
    // }
    try {
        const funFact = await getFunfact(number);
        const response = {
            number: number,
            is_prime: is_prime(number),
            is_perfect: is_perfect(number),
            properties: getProperties(number),
            digit_sum: digit_sum(number),
            fun_fact: funFact,
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching fun fact' });
    }
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
