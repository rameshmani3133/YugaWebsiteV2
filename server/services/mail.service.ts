import nodemailer from "nodemailer";

import { env } from "../config/env.js";

const transporter = nodemailer.createTransport({

  host: env.SMTP_HOST,

  port: env.SMTP_PORT,

  secure: false,

  auth: {

    user: env.SMTP_USER,

    pass: env.SMTP_PASS,

  },

});

interface ContactMail {

  name: string;

  mobile: string;

  email: string;

  service: string;

  message: string;

}

export async function sendContactMail(data: ContactMail) {

  const html = `
  <!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
</head>

<body
  style="
    margin:0;
    padding:30px;
    background:#f4f7fb;
    font-family:Arial,Helvetica,sans-serif;
  "
>

<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
>

<tr>

<td align="center">

<table
  width="650"
  cellpadding="0"
  cellspacing="0"
  style="
    background:#ffffff;
    border-radius:12px;
    overflow:hidden;
    box-shadow:0 10px 30px rgba(0,0,0,.08);
  "
>

<tr>

<td
  style="
    background:#0A2E63;
    color:#ffffff;
    padding:24px;
    text-align:center;
  "
>

<h1
  style="
    margin:0;
    font-size:28px;
  "
>

YUGA DOCUMENT CONSULTANCY CENTRE

</h1>

<p
  style="
    margin-top:8px;
    color:#dbeafe;
  "
>

New Website Enquiry

</p>

</td>

</tr>

<tr>

<td
  style="
    padding:30px;
  "
>

<table
  width="100%"
  cellpadding="8"
>

<tr>

<td><strong>Name</strong></td>

<td>${data.name}</td>

</tr>

<tr>

<td><strong>Mobile</strong></td>

<td>${data.mobile}</td>

</tr>

<tr>

<td><strong>Email</strong></td>

<td>${data.email || "-"}</td>

</tr>

<tr>

<td><strong>Service</strong></td>

<td>${data.service}</td>

</tr>

<tr>

<td
  valign="top"
>

<strong>Message</strong>

</td>

<td>

${data.message}

</td>

</tr>

<tr>

<td>

<strong>Submitted</strong>

</td>

<td>

${new Date().toLocaleString("en-IN")}

</td>

</tr>

</table>

</td>

</tr>

<tr>

<td
  style="
    background:#f8fafc;
    padding:18px;
    text-align:center;
    color:#64748b;
    font-size:13px;
  "
>

This enquiry was submitted through

<strong>

${env.CONTACT_EMAIL}

</strong>

website.

</td>

</tr>

</table>

</td>

</tr>

</table>

</body>

</html>
`;

  await transporter.sendMail({

    from: `"YUGA Website" <${env.SMTP_USER}>`,

    to: env.CONTACT_EMAIL,

    replyTo: data.email || env.SMTP_USER,

    subject: `New Website Enquiry - ${data.service}`,

    html,

  });

}