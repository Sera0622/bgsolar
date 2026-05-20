import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name      = formData.get("name")       as string;
    const email     = formData.get("email")      as string;
    const message   = formData.get("message")    as string;
    const schedule  = formData.get("schedule")   as string;
    const inspection = formData.get("inspection") as string;
    const image     = formData.get("image")      as File | null;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const attachments: nodemailer.SendMailOptions["attachments"] = [];
    if (image && image.size > 0) {
      const buffer = Buffer.from(await image.arrayBuffer());
      attachments.push({
        filename: image.name,
        content: buffer,
        contentType: image.type,
      });
    }

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #1A1917; color: #F7F4F0; padding: 32px; border-radius: 8px;">
        <div style="border-bottom: 3px solid #E8541A; padding-bottom: 20px; margin-bottom: 28px;">
          <h1 style="color: #E8541A; font-size: 24px; margin: 0; letter-spacing: 4px; text-transform: uppercase;">BETELGEUSE SOLAR</h1>
          <p style="color: #7A7572; font-size: 12px; margin: 4px 0 0; letter-spacing: 2px; text-transform: uppercase;">New Inquiry Received</p>
        </div>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #3D3B38; color: #7A7572; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 140px;">Full Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #3D3B38; color: #F7F4F0; font-weight: bold;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #3D3B38; color: #7A7572; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #3D3B38; color: #F7F4F0;"><a href="mailto:${email}" style="color: #E8541A;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #3D3B38; color: #7A7572; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Schedule</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #3D3B38; color: #F7F4F0;">${schedule || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #3D3B38; color: #7A7572; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Site Visit</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #3D3B38; color: ${inspection === "true" ? "#E8541A" : "#7A7572"}; font-weight: bold;">${inspection === "true" ? "✅ Requested" : "Not requested"}</td>
          </tr>
        </table>

        <div style="margin-top: 24px;">
          <p style="color: #7A7572; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Message</p>
          <div style="background: #3D3B38; padding: 16px; border-radius: 4px; color: #F7F4F0; line-height: 1.7; font-size: 14px;">${message.replace(/\n/g, "<br>")}</div>
        </div>

        ${image && image.size > 0 ? `<div style="margin-top: 20px; padding: 12px 16px; background: rgba(232,84,26,0.1); border: 1px solid rgba(232,84,26,0.3); border-radius: 4px; color: #E8541A; font-size: 13px;">📎 Image attached: ${image.name}</div>` : ""}

        <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #3D3B38; color: #7A7572; font-size: 11px; text-align: center;">
          BETELGEUSE Solar · lsscorporation@betelgeusesolar.com · +63 969 604 8041<br>
          GCash: <strong style="color: #E8541A;">0969 604 8041</strong>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Betelgeuse Solar Website" <${process.env.GMAIL_USER}>`,
      to: "mikel.sanjuan31@gmail.com, lsscorporation@betelgeusesolar.com",
      replyTo: email,
      subject: `New Inquiry from ${name} — Betelgeuse Solar`,
      html: htmlBody,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ success: false, error: "Failed to send message." }, { status: 500 });
  }
}
