import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Ensure this runs on Node (not Edge) on Vercel
export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const data = await req.formData();

    // Coerce all fields to string to satisfy TS
    const name    = data.get("name")?.toString() ?? "";
    const email   = data.get("email")?.toString() ?? "";
    const phone   = data.get("phone")?.toString() ?? "";
    const service = data.get("service")?.toString() ?? "";
    const date    = data.get("date")?.toString() ?? "";
    const time    = data.get("time")?.toString() ?? "";
    const message = data.get("message")?.toString() ?? "";

    // Basic required validation (adjust as you like)
    if (!name || !email || !phone || !service) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    // Require env vars
    const user = process.env.MAIL_USER;
    const pass = process.env.MAIL_PASS;
    const to   = process.env.NOTIFY_TO || "donebynitaa@gmail.com,pavankandula.0@gmail.com";
    if (!user || !pass) {
      return NextResponse.json({ ok: false, error: "Mail env not set" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
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
      from: `"donebynita bookings" <${user}>`,
      to,                   // comma-separated list supported
      subject: "New Nail Booking Request",
      html,
      replyTo: email || undefined, // email is a string now
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error sending mail:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
