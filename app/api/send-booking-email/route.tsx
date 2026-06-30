import { Resend } from "resend"

type BookingEmailPayload = {
  name?: string
  email?: string
  phone?: string
  checkIn?: string
  checkOut?: string
  guests?: string | number
  message?: string
  website?: string
}

function getRequiredEnv(name: string): string {
  const value = process.env[name]

  if (!value) {
    throw new Error(`${name} environment variable is not set`)
  }

  return value
}

const resendApiKey = getRequiredEnv("RESEND_API_KEY")
const bookingRecipientEmail = getRequiredEnv("BOOKING_RECIPIENT_EMAIL")

const resend = new Resend(resendApiKey)

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function normalizeString(value: unknown): string {
  return String(value ?? "").trim()
}

export async function POST(request: Request) {
  try {
    const {
      name,
      email,
      phone,
      checkIn,
      checkOut,
      guests,
      message,
      website,
    } = (await request.json()) as BookingEmailPayload

    // Honeypot защита против прости ботове
    if (website) {
      return Response.json({ success: true }, { status: 200 })
    }

    const normalizedName = normalizeString(name)
    const normalizedEmail = normalizeString(email)
    const normalizedPhone = normalizeString(phone)
    const normalizedCheckIn = normalizeString(checkIn)
    const normalizedCheckOut = normalizeString(checkOut)
    const normalizedGuests = normalizeString(guests)
    const normalizedMessage = normalizeString(message)

    if (
      !normalizedName ||
      !normalizedEmail ||
      !normalizedPhone ||
      !normalizedCheckIn ||
      !normalizedCheckOut ||
      !normalizedGuests
    ) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 },
      )
    }

    if (!isValidEmail(normalizedEmail)) {
      return Response.json(
        { error: "Invalid email address" },
        { status: 400 },
      )
    }

    const safeName = escapeHtml(normalizedName)
    const safeEmail = escapeHtml(normalizedEmail)
    const safePhone = escapeHtml(normalizedPhone)
    const safeCheckIn = escapeHtml(normalizedCheckIn)
    const safeCheckOut = escapeHtml(normalizedCheckOut)
    const safeGuests = escapeHtml(normalizedGuests)
    const safeMessage = escapeHtml(normalizedMessage)

    const result = await resend.emails.send({
      from: "Au Nature Website <noreply@aunaturetroyanhotel.com>",
      to: bookingRecipientEmail,
      replyTo: normalizedEmail,
      subject: `Ново запитване за резервация от ${normalizedName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #222;">
          <h2 style="color: #8A3E36;">Ново запитване за резервация</h2>

          <h3 style="color: #8A3E36; margin-top: 20px;">Данни на госта</h3>
          <p><strong>Име:</strong> ${safeName}</p>
          <p><strong>Имейл:</strong> ${safeEmail}</p>
          <p><strong>Телефон:</strong> ${safePhone}</p>

          <h3 style="color: #8A3E36; margin-top: 20px;">Детайли за резервацията</h3>
          <p><strong>Дата на настаняване:</strong> ${safeCheckIn}</p>
          <p><strong>Дата на освобождаване:</strong> ${safeCheckOut}</p>
          <p><strong>Брой гости:</strong> ${safeGuests}</p>

          ${
            normalizedMessage
              ? `<h3 style="color: #8A3E36; margin-top: 20px;">Допълнителна информация</h3>
                 <p style="white-space: pre-wrap; line-height: 1.6;">${safeMessage}</p>`
              : ""
          }

          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />

          <p style="color: #666; font-size: 12px;">
            Това запитване е изпратено през сайта на Au Nature Guest House.
          </p>
        </div>
      `,
    })

    if (result.error) {
      console.error("Resend error:", result.error)

      return Response.json(
        { error: "Failed to send email" },
        { status: 500 },
      )
    }

    return Response.json(
      { success: true, id: result.data?.id },
      { status: 200 },
    )
  } catch (error) {
    console.error("Booking email API error:", error)

    return Response.json(
      { error: "Internal server error" },
      { status: 500 },
    )
  }
}