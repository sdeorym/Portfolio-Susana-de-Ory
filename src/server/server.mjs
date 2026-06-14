import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { fileURLToPath } from "url";
import path from "path";
import fs from 'fs';
import { Resend } from 'resend';

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

var access = fs.createWriteStream('./node.access.log', { flags: 'a' });
//var error = fs.createWriteStream('./node.error.log', { flags: 'a' });

process.stdout.write = process.stderr.write = access.write.bind(access);


//process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE

app.get("/", async (req, res) => {

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  res.sendFile(path.join(__dirname, '/index.html'));
});

app.post("/contact", async (req, res) => {
  const url="https://api.resend.com/emails";
  const API_key ="";
  const basicAuth = btoa(pw);

  const { username, email, message } = req.body;
  console.log(req.body);
  console.log("Name: ", username, " Email: ", email, " Message: ", message );

  const resend = new Resend(API_key);

  const { data, error } = await resend.emails.send({
    from: email,
    to: ['sdeorym@gmail.com'],
    subject: '[Webpage contact]',
    text: 'From: ' + username + ' Message: ' + message
    });
});
  

app.listen(process.env.PORT || 3000, "0.0.0.0")