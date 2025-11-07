import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Ensure Node runtime on Vercel (not Edge)
export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const data = await req.formData();

    // Helper to safely extract strings from FormData
    const s = (key: string) => {
      const v = data.get(key);
      return typeof v === "string" ? v.trim() : ""; // ignore File/null
    };

    const name = s("name");
    const email = s("email");
    const phone = s("phone");
    const service = s("service");
    const date = s("date");
    const time = s("time");
    const message = s("message");

    if (!name || !email || !phone || !service) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const user = process.env.MAIL_USER;
    const pass = process.env.MAIL_PASS;
    if (!user || !pass) {
      return NextResponse.json({ ok: false, error: "MAIL_USER/MAIL_PASS not set" }, { status: 500 });
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
      <p><b>Date:</b> ${date || "—"}</p>
      <p><b>Time:</b> ${time || "—"}</p>
      <p><b>Message:</b> ${message || "—"}</p>
    `;

    await transporter.sendMail({
      from: `"donebynita bookings" <${user}>`,
      to: "donebynitaa@gmail.com, pavankandula.0@gmail.com",
      subject: "New Nail Booking Request",
      html,
      // email is guaranteed string now
      replyTo: email || undefined,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error sending mail:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
