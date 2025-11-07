import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.formData();
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const service = data.get("service");
    const date = data.get("date");
    const time = data.get("time");
    const message = data.get("message");

    // transporter: how we send the email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const html = `
      <h2>New Booking Request — donebynita</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Service:</b> ${service}</p>
      <p><b>Date:</b> ${date}</p>
      <p><b>Time:</b> ${time}</p>
      <p><b>Message:</b> ${message}</p>
    `;

    await transporter.sendMail({
      from: `"donebynita bookings" <${process.env.MAIL_USER}>`,
      to: "donebynitaa@gmail.com, pavankandula.0@gmail.com",
      subject: "New Nail Booking Request",
      html,
      replyTo: email || undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error sending mail:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
