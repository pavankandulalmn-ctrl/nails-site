import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const data = await req.formData();

    const getStr = (key: string): string => {
      const value = data.get(key);
      return typeof value === "string" ? value.trim() : "";
    };

    const name = getStr("name");
    const email = getStr("email");
    const phone = getStr("phone");
    const service = getStr("service");
    const date = getStr("date");
    const time = getStr("time");
    const message = getStr("message");

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
      to: process.env.MAIL_TO, // ✅ No email in code
      subject: "New Nail Booking Request",
      html,
      ...(email ? { replyTo: email } : {}),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error sending mail:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
