import { emailTemplates, QuoteRequest } from '@/lib/email-templates'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as QuoteRequest

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.projectType || !body.description || !body.budget) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Generate email templates
    const clientEmail = emailTemplates.clientConfirmation(body)
    const teamEmail = emailTemplates.teamNotification(body)

    // Send emails using Resend or your email service
    // For now, we'll log them and return success
    // In production, you'd integrate with Resend, SendGrid, AWS SES, etc.
    
    console.log('[Quote Submission]', {
      client: body.email,
      name: body.name,
      projectType: body.projectType,
      timestamp: new Date().toISOString()
    })

    // Log client email
    console.log('[Client Email Sent]', {
      to: body.email,
      subject: clientEmail.subject,
      timestamp: new Date().toISOString()
    })

    // Log team email
    console.log('[Team Notification Email Sent]', {
      to: 'info@qymafrique.co.ke',
      subject: teamEmail.subject,
      timestamp: new Date().toISOString()
    })

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Quote request submitted successfully',
        reference: `QR-${Date.now()}`
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[Quote Submission Error]', error)
    
    return NextResponse.json(
      { error: 'Failed to process quote request' },
      { status: 500 }
    )
  }
}
