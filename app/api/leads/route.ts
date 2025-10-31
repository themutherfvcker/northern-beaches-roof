import { NextResponse } from 'next/server'
import { submitLead } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Basic validation
    if (!body.name || !body.phone || !body.suburb) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const lead = await submitLead({
      name: body.name,
      email: body.email,
      phone: body.phone,
      suburb: body.suburb,
      service: body.service,
      message: body.message,
      source_page: body.source_page || '/'
    })

    // TODO: Add email notification here (SendGrid, Resend, etc.)
    
    return NextResponse.json({ success: true, data: lead })
  } catch (error) {
    console.error('Error submitting lead:', error)
    return NextResponse.json(
      { error: 'Failed to submit lead' },
      { status: 500 }
    )
  }
}
