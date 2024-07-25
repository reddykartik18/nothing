'use server'

import { Resend } from 'resend'
import { Schema, SchemaType } from '@/schema'
import Email from '@/email'
const resend = new Resend(process.env.RESEND_API_KEY)

export async function send(data: SchemaType) {
  const result = Schema.safeParse(data)
  if (result.success) {
    const { firstName, lastName, email, message } = result.data
    try {
      const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: [email],
        subject: "Welcome to Nothing! 👋- We're Excited to Bring your Vision to Life!",
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}\n`,
        react: Email({ firstName }),
      })
      return { sucess: true, data }
    } catch (error) {
      return { success: false, error }
    }
  }
  return { success: false, error: result.error?.format() }
}
