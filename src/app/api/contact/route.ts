import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,   
        pass: process.env.GMAIL_PASS, 
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 12px;">
          <h2 style="margin: 0 0 16px; color: #111;">New message from your portfolio</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #555; font-size: 14px; width: 80px; vertical-align: top;"><strong>Name</strong></td>
              <td style="padding: 8px 0; font-size: 14px; color: #111;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #555; font-size: 14px; vertical-align: top;"><strong>Email</strong></td>
              <td style="padding: 8px 0; font-size: 14px; color: #111;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #555; font-size: 14px; vertical-align: top;"><strong>Subject</strong></td>
              <td style="padding: 8px 0; font-size: 14px; color: #111;">${subject}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 16px 0;" />
          <p style="margin: 0; font-size: 14px; color: #555; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Contact API Error]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
