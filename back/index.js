import express from "express"
import cors from "cors"
import  QRCode  from "qrcode"

const app = express()
app.use(express.json())

const corsOption = {
    origin:"http://localhost:5173"
}
app.use(cors(corsOption))

app.get("/qr", (req, res) => {
    const { input } = req.query;
    QRCode.toDataURL(input, function (err, qrCode) {
      console.log(qrCode);
      res.send(qrCode);
    });
  });

app.listen(3000,() => {
    console.log("server started on port 3000")
})

