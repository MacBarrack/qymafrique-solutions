export interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  description: string;
  budget: string;
  timeline: string;
}

export const emailTemplates = {
  // Auto-reply to client
  clientConfirmation: (data: QuoteRequest) => ({
    subject: "We Received Your Request - Qymafrique Solutions",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
            .header h1 { margin: 0; font-size: 28px; }
            .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px; }
            .detail { margin: 15px 0; padding: 10px; background: white; border-left: 4px solid #f97316; padding-left: 15px; }
            .detail-label { font-weight: 600; color: #374151; font-size: 12px; text-transform: uppercase; }
            .detail-value { color: #111827; margin-top: 5px; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px; }
            .cta-button { display: inline-block; background: #f97316; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; font-weight: 600; }
            .success-badge { display: inline-block; background: #10b981; color: white; padding: 8px 16px; border-radius: 20px; font-size: 12px; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✓ Request Received</h1>
              <p style="margin: 10px 0 0 0; font-size: 16px;">Thank you for choosing Qymafrique Solutions</p>
            </div>
            <div class="content">
              <p>Hi <strong>${data.name}</strong>,</p>
              <p>We've received your project inquiry and we're excited to learn more about your vision. Our team is reviewing your details and we'll be in touch within 24 hours.</p>
              
              <h3 style="color: #f97316; margin-top: 30px;">Your Request Summary</h3>
              
              <div class="detail">
                <div class="detail-label">Project Type</div>
                <div class="detail-value">${data.projectType}</div>
              </div>
              
              <div class="detail">
                <div class="detail-label">Budget Range</div>
                <div class="detail-value">${data.budget}</div>
              </div>
              
              <div class="detail">
                <div class="detail-label">Timeline</div>
                <div class="detail-value">${data.timeline}</div>
              </div>
              
              <div class="detail">
                <div class="detail-label">Your Message</div>
                <div class="detail-value">${data.description}</div>
              </div>

              <p style="margin-top: 30px; color: #6b7280;">In the meantime, you can also reach us on WhatsApp for urgent matters:</p>
              <a href="https://wa.me/254717687202?text=Hi%20Qymafrique%20Solutions" class="cta-button">Chat on WhatsApp</a>

              <div class="footer">
                <p><strong>Qymafrique Solutions</strong></p>
                <p>📧 info@qymafrique.co.ke | 📱 +254 717 687202 | 🌍 Nairobi, Kenya</p>
                <p>© 2026 Qymafrique Solutions. All rights reserved.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `
  }),

  // Internal team notification
  teamNotification: (data: QuoteRequest) => ({
    subject: `🚀 New Project Inquiry from ${data.name}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto; line-height: 1.6; color: #333; }
            .container { max-width: 700px; margin: 0 auto; padding: 20px; }
            .header { background: #1f2937; color: white; padding: 20px; border-radius: 6px; }
            .content { background: #f3f4f6; padding: 20px; border-radius: 6px; margin-top: 15px; }
            table { width: 100%; border-collapse: collapse; }
            th { background: #374151; color: white; padding: 12px; text-align: left; font-weight: 600; }
            td { padding: 12px; border-bottom: 1px solid #d1d5db; }
            tr:nth-child(even) { background: white; }
            .label { font-weight: 600; color: #374151; width: 150px; }
            .important { background: #fef3c7; border-left: 4px solid #f97316; padding: 15px; margin: 15px 0; }
            .action-button { display: inline-block; background: #f97316; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">🎯 New Project Inquiry</h2>
              <p style="margin: 5px 0 0 0; font-size: 14px;">Received at ${new Date().toLocaleString()}</p>
            </div>
            
            <div class="content">
              <table>
                <tr>
                  <td class="label">Client Name:</td>
                  <td><strong>${data.name}</strong></td>
                </tr>
                <tr>
                  <td class="label">Email:</td>
                  <td><a href="mailto:${data.email}">${data.email}</a></td>
                </tr>
                <tr>
                  <td class="label">Phone:</td>
                  <td><a href="tel:${data.phone}">${data.phone}</a></td>
                </tr>
                <tr>
                  <td class="label">Company:</td>
                  <td>${data.company}</td>
                </tr>
                <tr>
                  <td class="label">Project Type:</td>
                  <td><strong>${data.projectType}</strong></td>
                </tr>
                <tr>
                  <td class="label">Budget:</td>
                  <td><strong>${data.budget}</strong></td>
                </tr>
                <tr>
                  <td class="label">Timeline:</td>
                  <td><strong>${data.timeline}</strong></td>
                </tr>
                <tr>
                  <td class="label">Description:</td>
                  <td>${data.description.replace(/\n/g, '<br>')}</td>
                </tr>
              </table>
            </div>

            <div class="important">
              <strong>⚡ Action Required:</strong><br>
              Reply to this inquiry within 24 hours. First response wins!
              <a href="mailto:${data.email}" class="action-button">Reply to Client</a>
            </div>
          </div>
        </body>
      </html>
    `
  }),

  // Follow-up email after no response
  followUp: (data: QuoteRequest) => ({
    subject: "Quick Follow-up: Your Project Request - Qymafrique Solutions",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
            .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px; }
            .cta { background: white; border: 2px solid #f97316; padding: 20px; border-radius: 6px; text-align: center; margin: 20px 0; }
            .cta-button { display: inline-block; background: #f97316; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">Ready to Get Started?</h1>
            </div>
            <div class="content">
              <p>Hi ${data.name},</p>
              <p>We wanted to check in on your <strong>${data.projectType}</strong> project inquiry. We're still very interested in working with you and bringing your vision to life.</p>
              
              <div class="cta">
                <p style="margin-top: 0; color: #6b7280;">Have questions? Get in touch directly:</p>
                <a href="https://wa.me/254717687202?text=Hi%20Qymafrique!%20I%20have%20a%20question%20about%20my%20project" class="cta-button">Chat on WhatsApp</a>
                <p style="margin: 15px 0; color: #6b7280;">or</p>
                <a href="mailto:sales@qymafrique.co.ke" class="cta-button" style="background: white; color: #f97316; border: 2px solid #f97316;">Email Our Team</a>
              </div>

              <p style="color: #6b7280;">We're available Mon-Fri, 9AM-6PM EAT. Looking forward to hearing from you!</p>

              <div class="footer">
                <p><strong>Qymafrique Solutions</strong></p>
                <p>📧 sales@qymafrique.co.ke | 📱 +254 717 687202</p>
                <p>© 2026 Qymafrique Solutions</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `
  }),

  // Project started confirmation
  projectStarted: (clientName: string) => ({
    subject: "Your Project Journey Begins! 🚀 - Qymafrique Solutions",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
            .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px; }
            .milestone { background: white; border-left: 4px solid #10b981; padding: 15px; margin: 15px 0; }
            .milestone-title { font-weight: 600; color: #10b981; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🎉 Let's Build Something Amazing!</h1>
            </div>
            <div class="content">
              <p>Hi ${clientName},</p>
              <p>Great news! Your project has officially started. Our team is excited to bring your vision to life.</p>

              <h3 style="color: #10b981;">What Happens Next:</h3>

              <div class="milestone">
                <div class="milestone-title">✓ Discovery & Planning</div>
                <p style="margin: 8px 0 0 0; font-size: 14px;">We'll align on requirements and create a detailed roadmap.</p>
              </div>

              <div class="milestone">
                <div class="milestone-title">✓ Development</div>
                <p style="margin: 8px 0 0 0; font-size: 14px;">Our team builds with excellence and keeps you updated weekly.</p>
              </div>

              <div class="milestone">
                <div class="milestone-title">✓ Testing & Refinement</div>
                <p style="margin: 8px 0 0 0; font-size: 14px;">Rigorous QA and your feedback shape the final product.</p>
              </div>

              <div class="milestone">
                <div class="milestone-title">✓ Launch & Support</div>
                <p style="margin: 8px 0 0 0; font-size: 14px;">We deploy with confidence and provide ongoing support.</p>
              </div>

              <p style="margin-top: 30px; background: #f0fdf4; padding: 15px; border-radius: 6px; color: #166534;">
                <strong>Your dedicated contact:</strong> We'll introduce your project lead via email shortly. They'll be your single point of contact throughout the journey.
              </p>

              <div class="footer">
                <p><strong>Qymafrique Solutions</strong></p>
                <p>📧 info@qymafrique.co.ke | 📱 +254 717 687202</p>
                <p>© 2026 Qymafrique Solutions</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `
  })
};
