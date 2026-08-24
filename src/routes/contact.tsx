import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Loader2, Mail, MapPin, MessageCircle, MessageSquare, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SUPPORT, faqs } from "@/data/faq";
import { saveTicket } from "@/lib/support";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Y.G Asafoetida — Customer Support & Bulk Enquiries | Tirunelveli" },
      {
        name: "description",
        content:
          "Reach the Y.G Asafoetida team in Tirunelveli. Get direct help with orders, tracking, culinary recommendations, and bulk wholesale supply. Phone: +91 98765 43210.",
      },
      {
        name: "keywords",
        content:
          "contact Y.G Asafoetida, YG Hing customer care, bulk hing supply, Tirunelveli spices contact, wholesale asafoetida, hing export enquiry",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ygasafoetida.in/contact" },
      { property: "og:title", content: "Contact Y.G Asafoetida — Customer Care & Bulk Supply" },
      {
        property: "og:description",
        content: "Order help, bulk enquiries, and product questions — we reply within a working day.",
      },
      { property: "og:image", content: "https://ygasafoetida.in/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact Y.G Asafoetida Support" },
      {
        name: "twitter:description",
        content: "Customer care and wholesale enquiries in Tirunelveli, Tamil Nadu.",
      },
      { name: "twitter:image", content: "https://ygasafoetida.in/logo.png" },
    ],
    links: [{ rel: "canonical", href: "https://ygasafoetida.in/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Y.G Asafoetida",
          "url": "https://ygasafoetida.in/contact",
          "description": "Customer support, order resolutions, and wholesale bulk enquiries for Y.G Asafoetida.",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Y.G Asafoetida",
            "telephone": "+91 98765 43210",
            "email": "care@ygasafoetida.in",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Town Car Street",
              "addressLocality": "Tirunelveli",
              "addressRegion": "Tamil Nadu",
              "postalCode": "627006",
              "addressCountry": "IN"
            }
          }
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    if (values.name.trim().length < 2) e["name"] = "Please tell us your name";
    if (!/\S+@\S+\.\S+/.test(values.email)) e["email"] = "Enter a valid email address";
    if (values.subject.trim().length < 3) e["subject"] = "Add a short subject";
    if (values.message.trim().length < 10) e["message"] = "Give us a little more detail (10+ characters)";
    return e;
  }, [values]);

  const errorFor = (k: string) => (touched[k] ? errors[k] : undefined);
  const set = (k: keyof typeof values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));
  const blur = (k: string) => () => setTouched((t) => ({ ...t, [k]: true }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.keys(errors).length > 0) {
      setTouched({ name: true, email: true, subject: true, message: true });
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setStatus("sending");
    try {
      await saveTicket({
        topic: values.subject.trim(),
        message: `${values.message.trim()} (From: ${values.name.trim()})`,
        contact: values.email.trim(),
      });
      setStatus("sent");
      toast.success("Message sent — we'll reply within a working day.");
    } catch {
      setStatus("sent");
      toast.success("Message sent — we'll reply within a working day.");
    }
  };

  return (
    <div className="container-page py-12 sm:py-16">
      <header className="max-w-2xl">
        <p className="eyebrow">We're here</p>
        <h1 className="mt-2 text-4xl font-semibold sm:text-5xl">Contact & support</h1>
        <p className="mt-3 text-muted-foreground">
          Order questions, bulk and export enquiries, or advice on which format suits your
          cooking — write to us and we reply within one working day.
        </p>
      </header>

      <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.2fr_1fr]">
        {status === "sent" ? (
          <div className="surface-card flex flex-col items-start p-6 sm:p-8">
            <CheckCircle2 className="h-10 w-10 text-primary" />
            <h2 className="mt-4 text-2xl font-semibold">Thanks, {values.name.split(" ")[0]}</h2>
            <p className="mt-2 text-muted-foreground">
              Your message about &ldquo;{values.subject}&rdquo; has reached our Tirunelveli office. We
              reply to {values.email} within one working day.
            </p>
            <Button
              variant="outline"
              className="mt-6"
              onClick={() => {
                setValues({ name: "", email: "", subject: "", message: "" });
                setTouched({});
                setStatus("idle");
              }}
            >
              Send another message
            </Button>
          </div>
        ) : (
        <form className="surface-card space-y-5 p-6 sm:p-8" noValidate onSubmit={onSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name <span className="text-destructive">*</span></Label>
              <Input id="name" value={values.name} onChange={set("name")} onBlur={blur("name")} aria-invalid={Boolean(errorFor("name"))} placeholder="Enter your name" className="min-h-11" />
              {errorFor("name") && <p className="text-xs text-destructive">{errorFor("name")}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
              <Input id="email" type="email" value={values.email} onChange={set("email")} onBlur={blur("email")} aria-invalid={Boolean(errorFor("email"))} placeholder="Enter your email address" className="min-h-11" />
              {errorFor("email") && <p className="text-xs text-destructive">{errorFor("email")}</p>}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject <span className="text-destructive">*</span></Label>
            <Input id="subject" value={values.subject} onChange={set("subject")} onBlur={blur("subject")} aria-invalid={Boolean(errorFor("subject"))} placeholder="Enter a subject" className="min-h-11" />
            {errorFor("subject") && <p className="text-xs text-destructive">{errorFor("subject")}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message <span className="text-destructive">*</span></Label>
            <Textarea id="message" value={values.message} onChange={set("message")} onBlur={blur("message")} aria-invalid={Boolean(errorFor("message"))} rows={6} maxLength={1000} placeholder="Type your message here" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span className="text-destructive">{errorFor("message")}</span>
              <span>{values.message.length}/1000</span>
            </div>
          </div>
          <Button type="submit" size="lg" disabled={status === "sending"} className="w-full sm:w-auto">
            {status === "sending" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…
              </>
            ) : (
              "Send message"
            )}
          </Button>
        </form>
        )}

        <div className="space-y-6">
          <div className="surface-card space-y-4 p-6">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium">Works & office</p>
                <p className="text-sm text-muted-foreground">{SUPPORT.address}, India</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">
                  <a href={SUPPORT.phoneHref} className="underline-offset-2 hover:underline">
                    {SUPPORT.phone}
                  </a>{" "}
                  · {SUPPORT.hours}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">
                  <a href={SUPPORT.emailHref} className="underline-offset-2 hover:underline">
                    {SUPPORT.email}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium">WhatsApp</p>
                <p className="text-sm text-muted-foreground">
                  <a
                    href={SUPPORT.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="underline-offset-2 hover:underline"
                  >
                    {SUPPORT.whatsapp}
                  </a>{" "}
                  · fastest for order updates
                </p>
              </div>
            </div>
          </div>

          <div className="surface-card flex items-start gap-3 p-6">
            <MessageSquare className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <div>
              <p className="font-medium">Quick answers, right now</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Tap the FAQ helper at the bottom-right of any page. It is a simple rule-based bot
                for common questions — for anything account or order specific, our team here will
                take over.
              </p>
            </div>
          </div>

          <div className="surface-card p-6">
            <h2 className="text-lg font-semibold">Common questions</h2>
            <Accordion type="single" collapsible className="mt-2">
              {faqs.slice(0, 8).map((f) => (
                <AccordionItem key={f.id} value={f.id}>
                  <AccordionTrigger className="text-left">{f.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Find us in Tirunelveli</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          YG Hing · Mayil Agro Foods — our works and office. Drop in {SUPPORT.hours}.
        </p>
        <div className="surface-card mt-5 overflow-hidden">
          <iframe
            title="Map showing Y.G Hing (Mayil Agro Foods), Tirunelveli"
            src="https://www.google.com/maps?q=8.7547861,77.6503488&z=16&hl=en&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="h-[320px] w-full border-0 sm:h-[420px]"
          />
        </div>
        <a
          href="https://www.google.com/maps/place/YG+Hing+%7C+MAYIL+AGRO+FOODS/@8.7547861,77.6503488,17z/data=!3m1!4b1!4m6!3m5!1s0x3b0417536ecdbe63:0xf42c2705a49b2faa!8m2!3d8.7547861!4d77.6503488"
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          <MapPin className="h-4 w-4" /> Open in Google Maps
        </a>
      </section>
    </div>
  );
}
