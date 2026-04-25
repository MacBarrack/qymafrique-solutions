"use client"

import { useState } from "react"
import { Send, MessageCircle, CheckCircle, AlertCircle, ChevronDown } from "lucide-react"
import Link from "next/link"

type Status = "idle" | "success" | "error"

const PROJECT_TYPES = [
  { value: "static",    label: "Website" },
  { value: "webapp",    label: "Web Application" },
  { value: "ecommerce", label: "E-Commerce Store" },
  { value: "branding",  label: "Branding & Identity" },
  { value: "mobile",    label: "Mobile App" },
  { value: "other",     label: "Something Else" },
]

const BUDGETS = [
  { value: "25k-50k",   label: "KES 25K – 50K" },
  { value: "50k-100k",  label: "KES 50K – 100K" },
  { value: "100k-200k", label: "KES 100K – 200K" },
  { value: "200k-500k", label: "KES 200K – 500K" },
  { value: "500k+",     label: "KES 500K+" },
]

const TIMELINES = [
  { value: "urgent",   label: "ASAP (1–2 weeks)" },
  { value: "normal",   label: "3–4 weeks" },
  { value: "flexible", label: "1–2 months" },
  { value: "planning", label: "Still planning" },
]

const inputCls =
  "w-full h-11 px-4 text-sm text-gray-900 bg-gray-50 border border-gray-200 rounded-xl outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"

const textareaCls =
  "w-full px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-gray-200 rounded-xl outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 resize-none"

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-gray-700">
        {label}
        {required && <span className="text-blue-600 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}

function NativeSelect({
  value,
  onChange,
  options,
  placeholder,
  required,
}: {
  value: string
  onChange: (v: string) => void
  options: { value: string; label: string }[]
  placeholder: string
  required?: boolean
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        className={`${inputCls} appearance-none pr-10 cursor-pointer ${
          !value ? "text-gray-400" : "text-gray-900"
        }`}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map(o => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
    </div>
  )
}

export function QuoteFormClient() {
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<Status>("idle")
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    references: "",
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
          name: form.firstName,
          email: form.email,
          phone: form.phone,
          company: form.company,
          projectType: form.projectType,
          description: form.description,
          budget: form.budget,
          timeline: form.timeline,
          references: form.references,
        }),
      })
      setStatus(res.ok ? "success" : "error")
      if (res.ok)
        setForm({
          firstName: "", email: "", phone: "", company: "",
          projectType: "", budget: "", timeline: "",
          description: "", references: "",
        })
    } catch {
      setStatus("error")
    } finally {
      setSubmitting(false)
    }
  }

  /* ── Success ── */
  if (status === "success") {
    return (
      <div className="bg-white border border-gray-200 rounded-3xl p-10 text-center shadow-sm">
        <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-emerald-500" />
        </div>
        <h2 className="text-2xl font-black text-black mb-2">All set!</h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-xs mx-auto">
          Your quote request is in. We'll review your details and get back to you shortly.
        </p>
        <div className="flex flex-col gap-3 max-w-xs mx-auto">
          <a
            href="https://wa.me/254717687202?text=Hi%20Qymafrique%20Solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 h-12 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold rounded-2xl transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Follow up on WhatsApp
          </a>
          <Link
            href="/"
            className="flex items-center justify-center h-12 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold rounded-2xl transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  /* ── Form ── */
  return (
    <div className="bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden">

      {/* Header strip */}
      <div className="bg-gray-950 px-6 sm:px-8 py-5">
        <h2 className="text-base font-black text-white">Tell us about your project</h2>
        <p className="text-xs text-gray-400 mt-1">
          Fill in the details and we'll put together a tailored quote for you.
        </p>
      </div>

      <div className="p-6 sm:p-8">

        {/* Error */}
        {status === "error" && (
          <div className="mb-6 flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-2xl">
            <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-red-700">Something went wrong</p>
              <p className="text-xs text-red-600 mt-0.5">
                Please try again or reach us on WhatsApp.
              </p>
            </div>
          </div>
        )}

        <form onSubmit={submit} className="space-y-5">

          {/* Name + Email */}
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Your Name" required>
              <input
                id="firstName"
                type="text"
                placeholder="Jane Doe"
                value={form.firstName}
                onChange={set}
                className={inputCls}
                required
              />
            </Field>
            <Field label="Email Address" required>
              <input
                id="email"
                type="email"
                placeholder="jane@company.com"
                value={form.email}
                onChange={set}
                className={inputCls}
                required
              />
            </Field>
          </div>

          {/* Phone + Company */}
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Phone Number" required>
              <input
                id="phone"
                type="tel"
                placeholder="+254 712 345 678"
                value={form.phone}
                onChange={set}
                className={inputCls}
                required
              />
            </Field>
            <Field label="Company / Organisation">
              <input
                id="company"
                type="text"
                placeholder="Optional"
                value={form.company}
                onChange={set}
                className={inputCls}
              />
            </Field>
          </div>

          {/* Service + Budget */}
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Service Needed" required>
              <NativeSelect
                value={form.projectType}
                onChange={v => setSel("projectType", v)}
                options={PROJECT_TYPES}
                placeholder="Select a service"
                required
              />
            </Field>
            <Field label="Budget Range" required>
              <NativeSelect
                value={form.budget}
                onChange={v => setSel("budget", v)}
                options={BUDGETS}
                placeholder="Approximate budget"
                required
              />
            </Field>
          </div>

          {/* Timeline */}
          <Field label="Timeline">
            <NativeSelect
              value={form.timeline}
              onChange={v => setSel("timeline", v)}
              options={TIMELINES}
              placeholder="When do you need it?"
            />
          </Field>

          <div className="border-t border-gray-100" />

          {/* Project details */}
          <Field label="Project Details" required>
            <textarea
              id="description"
              rows={4}
              placeholder="Describe your project — what are you building, who is it for, what features do you need?"
              value={form.description}
              onChange={set}
              className={textareaCls}
              required
            />
          </Field>

          {/* References */}
          <Field label="Reference Links">
            <textarea
              id="references"
              rows={2}
              placeholder="Links to websites or apps that inspire your vision (optional)"
              value={form.references}
              onChange={set}
              className={textareaCls}
            />
          </Field>

          {/* Actions */}
          <div className="pt-1 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 flex items-center justify-center gap-2 h-12 bg-black hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-bold rounded-2xl transition-colors"
            >
              <Send className="w-4 h-4" />
              {submitting ? "Sending…" : "Send Quote Request"}
            </button>
            <a
              href="https://wa.me/254717687202?text=I%20want%20to%20request%20a%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 h-12 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold rounded-2xl transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Instead
            </a>
          </div>

          <p className="text-xs text-gray-400 text-center pt-1">
            <span className="text-blue-600">*</span> Required fields. We respond promptly.
          </p>

        </form>
      </div>
    </div>
  )
}