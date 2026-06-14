import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { fileURLToPath } from "url";
import path from "path";
import fs from 'fs';
import { Resend } from 'resend';

dotenv.config()

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/assets', express.static(path.join(__dirname, 'dist/assets'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    } else if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

var access = fs.createWriteStream('./node.access.log', { flags: 'a' });
//var error = fs.createWriteStream('./node.error.log', { flags: 'a' });

process.stdout.write = process.stderr.write = access.write.bind(access);


//process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', '/index.html'));
});

app.post("/contact", async (req, res) => {
  const url="https://api.resend.com/emails";
  const API_key ="re_UTWB5E3C_A6yRkNKgpu6MKdGSKKxW3pEq";
  // const basicAuth = btoa(pw);

  const { username, email, message } = req.body;
  console.log(req.body);
  console.log("Name: ", username, " Email: ", email, " Message: ", message );

  const resend = new Resend(API_key);

  const { data, error } = await resend.emails.send({
    from: 'info@lpgconsulting.fr',
    to: ['sdeorym@gmail.com'],
    subject: '[Webpage contact]',
    text: 'From: ' + username + ' Enail: ' + email + ' Message: ' + message
    });
  console.log(data, "Error: ", error)
});
  

app.listen(process.env.PORT || 3000, "0.0.0.0")