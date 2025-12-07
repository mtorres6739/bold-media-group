import { NextRequest, NextResponse } from 'next/server';

const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    const toEmail = process.env.EMAIL || 'mattorres@boldmedia.cc';

    if (!apiKey) {
      console.error('BREVO_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Send notification email to you with extended timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    const response = await fetch(BREVO_API_URL, {
      signal: controller.signal,
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        sender: {
          name: 'Bold Media Group Website',
          email: toEmail,
        },
        to: [
          {
            email: toEmail,
            name: 'Matt Torres',
          },
        ],
        subject: 'New Consultation Request - Bold Media Group',
        htmlContent: `
          <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2 style="color: #d4af37; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">
                  New Consultation Request
                </h2>
                <p>You have received a new consultation request from the Bold Media Group website.</p>
                <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Source:</strong> Homepage Get Started Form</p>
                  <p><strong>Date:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'America/Phoenix' })} MST</p>
                </div>
                <p>Please follow up with this lead within 24 hours.</p>
                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
                <p style="color: #888; font-size: 12px;">
                  This email was sent automatically from boldmedia.cc
                </p>
              </div>
            </body>
          </html>
        `,
      }),
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Brevo API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
