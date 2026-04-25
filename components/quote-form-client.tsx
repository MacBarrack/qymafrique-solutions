"use client"

import { useState } from "react"
import { Send, MessageCircle, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

type Status = "idle" | "success" | "error"

const inputCls = "h-10 text-sm rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 transition-colors"
const labelCls = "text-xs font-semibold text-gray-600"

export function QuoteFormClient() {
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus]         = useState<Status>("idle")
  const [form, setForm] = useState({
    firstName: "", email: "", phone: "", company: "",
    projectType: "", budget: "", timeline: "", description: "", references: "",
  })

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.id]: e.target.value }))

  const setSel = (field: string, val: string) =>
    setForm(f => ({ ...f, [field]: val }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch("/api/submit-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.firstName, email: form.email, phone: form.phone,
          company: form.company, projectType: form.projectType,
          description: form.description, budget: form.budget,
          timeline: form.timeline, references: form.references,
        }),
      })
      setStatus(res.ok ? "success" : "error")
      if (res.ok) setForm({ firstName: "", email: "", phone: "", company: "", projectType: "", budget: "", timeline: "", description: "", references: "" })
    } catch {
      setStatus("error")
    } finally {
      setSubmitting(false)
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white border border-gray-200 rounded-3xl p-10 text-center shadow-sm">
        <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-7 h-7 text-emerald-600" />
        </div>
        <h2 className="text-2xl font-black text-black mb-2">Quote Request Sent!</h2>
        <p className="text-sm text-gray-500 mb-7 leading-relaxed">
          We've received your details. Our team will review and send a quote within 24 hours.
        </p>
        <div className="flex flex-col gap-2 max-w-xs mx-auto">
          <a
            href="https://wa.me/254717687202?text=Hi%20Qymafrique%20Solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold rounded-2xl transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
          <Link href="/" className="flex items-center justify-center py-3 bg-gray-100 hover:bg-gray-200 text-black text-sm font-bold rounded-2xl transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-sm">
      {status === "error" && (
        <div className="mb-5 flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-2xl">
          <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-bold text-red-700">Something went wrong</p>
            <p className="text-xs text-red-600 mt-0.5">Please try again or contact us directly.</p>
          </div>
        </div>
      )}

      <form onSubmit={submit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="firstName" className={labelCls}>Name *</Label>
            <Input id="firstName" placeholder="Your name" value={form.firstName} onChange={set} className={inputCls} required />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email" className={labelCls}>Email *</Label>
            <Input id="email" type="email" placeholder="your@email.com" value={form.email} onChange={set} className={inputCls} required />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="phone" className={labelCls}>Phone *</Label>
            <Input id="phone" type="tel" placeholder="+254 712 345 678" value={form.phone} onChange={set} className={inputCls} required />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="company" className={labelCls}>Company</Label>
            <Input id="company" placeholder="Optional" value={form.company} onChange={set} className={inputCls} />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label className={labelCls}>Service Type *</Label>
            <Select value={form.projectType} onValueChange={v => setSel("projectType", v)}>
              <SelectTrigger className={inputCls}><SelectValue placeholder="Select service" /></SelectTrigger>
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
            <Label className={labelCls}>Budget *</Label>
            <Select value={form.budget} onValueChange={v => setSel("budget", v)}>
              <SelectTrigger className={inputCls}><SelectValue placeholder="Budget range" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="25k-50k">KES 25K – 50K</SelectItem>
                <SelectItem value="50k-100k">KES 50K – 100K</SelectItem>
                <SelectItem value="100k-200k">KES 100K – 200K</SelectItem>
                <SelectItem value="200k-500k">KES 200K – 500K</SelectItem>
                <SelectItem value="500k+">KES 500K+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-1.5">
          <Label className={labelCls}>Timeline</Label>
          <Select value={form.timeline} onValueChange={v => setSel("timeline", v)}>
            <SelectTrigger className={inputCls}><SelectValue placeholder="When do you need it?" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="urgent">ASAP (1–2 weeks)</SelectItem>
              <SelectItem value="normal">3–4 weeks</SelectItem>
              <SelectItem value="flexible">1–2 months</SelectItem>
              <SelectItem value="planning">Planning stage</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="description" className={labelCls}>Project Details *</Label>
          <Textarea
            id="description"
            placeholder="What's your project about? Goals? Features needed?"
            className="min-h-[100px] text-sm rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 transition-colors resize-none"
            value={form.description}
            onChange={set}
            required
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="references" className={labelCls}>Reference Links</Label>
          <Textarea
            id="references"
            placeholder="Links to sites you like or that inspire your project (optional)"
            className="min-h-[64px] text-sm rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 transition-colors resize-none"
            value={form.references}
            onChange={set}
          />
        </div>

        <div className="pt-2 space-y-2">
          <button
            type="submit"
            disabled={submitting}
            className="w-full flex items-center justify-center gap-2 py-3 bg-black hover:bg-gray-900 disabled:opacity-50 text-white text-sm font-bold rounded-2xl transition-colors"
          >
            <Send className="w-4 h-4" />
            {submitting ? "Sending…" : "Get Quote"}
          </button>
          <a
            href="https://wa.me/254717687202?text=I%20want%20to%20request%20a%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold rounded-2xl transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Instead
          </a>
        </div>

        <p className="text-[11px] text-gray-400 text-center">* Required fields. We respond within 24 hours.</p>
      </form>
    </div>
  )
}