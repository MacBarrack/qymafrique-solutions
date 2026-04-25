"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, MessageCircle, CheckCircle, AlertCircle } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function QuoteFormClient() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    references: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          projectType: formData.projectType,
          description: formData.description,
          budget: formData.budget,
          timeline: formData.timeline,
          references: formData.references
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', projectType: '', budget: '', timeline: '', description: '', references: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <Card className="border-border/50 border-green-500/30 bg-green-500/5 shadow-lg">
        <CardContent className="p-8 sm:p-10 text-center">
          <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-2">Quote Request Sent!</h2>
          <p className="text-muted-foreground mb-6 text-sm">
            We&apos;ve received your details. Our team will review and send a quote within 24 hours.
          </p>
          <div className="space-y-3">
            <a href="https://wa.me/254717687202?text=Hi%20Qymafrique%20Solutions" target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-sm" size="sm">
                <MessageCircle className="mr-2 h-3.5 w-3.5" />
                Chat on WhatsApp
              </Button>
            </a>
            <Button variant="outline" asChild size="sm" className="w-full text-sm">
              <Link href="/">Back Home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-border/50 shadow-lg">
      <CardContent className="p-6 sm:p-8">
        {submitStatus === 'error' && (
          <div className="mb-5 p-3 bg-red-500/10 border border-red-500/30 rounded-lg flex gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-red-700">Error</p>
              <p className="text-xs text-red-600 mt-0.5">Try again or contact us directly.</p>
            </div>
          </div>
        )}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="firstName" className="text-xs">Name *</Label>
              <Input 
                id="firstName" 
                placeholder="Your name" 
                value={formData.firstName}
                onChange={handleChange}
                className="h-9 text-sm"
                required 
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs">Email *</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                className="h-9 text-sm"
                required 
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="phone" className="text-xs">Phone *</Label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="+254 712 345 678"
                value={formData.phone}
                onChange={handleChange}
                className="h-9 text-sm"
                required 
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="company" className="text-xs">Company</Label>
              <Input 
                id="company" 
                placeholder="Company name (optional)"
                value={formData.company}
                onChange={handleChange}
                className="h-9 text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label className="text-xs">Service Type *</Label>
              <Select value={formData.projectType} onValueChange={(value) => handleSelectChange('projectType', value)}>
                <SelectTrigger className="h-9 text-sm">
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="static">Website</SelectItem>
                  <SelectItem value="webapp">Web App</SelectItem>
                  <SelectItem value="ecommerce">E-Commerce</SelectItem>
                  <SelectItem value="branding">Branding</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs">Budget *</Label>
              <Select value={formData.budget} onValueChange={(value) => handleSelectChange('budget', value)}>
                <SelectTrigger className="h-9 text-sm">
                  <SelectValue placeholder="Budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="25k-50k">KES 25K - 50K</SelectItem>
                  <SelectItem value="50k-100k">KES 50K - 100K</SelectItem>
                  <SelectItem value="100k-200k">KES 100K - 200K</SelectItem>
                  <SelectItem value="200k-500k">KES 200K - 500K</SelectItem>
                  <SelectItem value="500k+">KES 500K+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-1.5">
            <Label className="text-xs">Timeline</Label>
            <Select value={formData.timeline} onValueChange={(value) => handleSelectChange('timeline', value)}>
              <SelectTrigger className="h-9 text-sm">
                <SelectValue placeholder="When needed?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="urgent">ASAP (1-2 weeks)</SelectItem>
                <SelectItem value="normal">3-4 weeks</SelectItem>
                <SelectItem value="flexible">1-2 months</SelectItem>
                <SelectItem value="planning">Planning stage</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="description" className="text-xs">Project Details *</Label>
            <Textarea
              id="description"
              placeholder="What's your project about? Goals? Features needed?"
              className="min-h-[100px] text-sm resize-none"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="references" className="text-xs">Reference Links (Optional)</Label>
            <Textarea
              id="references"
              placeholder="Links to sites you like or inspire your project"
              className="min-h-[60px] text-sm resize-none"
              value={formData.references}
              onChange={handleChange}
            />
          </div>

          <div className="pt-2 space-y-2.5">
            <Button 
              type="submit" 
              className="w-full bg-blue-900 hover:bg-blue-950 text-sm h-9"
              disabled={isSubmitting}
            >
              <Send className="mr-2 h-3.5 w-3.5" />
              {isSubmitting ? 'Sending...' : 'Get Quote'}
            </Button>
            <a href="https://wa.me/254717687202?text=I%20want%20to%20request%20a%20quote" target="_blank" rel="noopener noreferrer" className="block">
              <Button 
                type="button"
                className="w-full bg-green-600 hover:bg-green-700 text-sm h-9"
              >
                <MessageCircle className="mr-2 h-3.5 w-3.5" />
                WhatsApp
              </Button>
            </a>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            * Required. We respond within 24 hours.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
