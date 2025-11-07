"use client";

import React, { useRef, useState } from "react";
import { Calendar, Phone, Instagram, MapPin, Clock, Sparkles, CheckCircle2, ChevronDown, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// Accent font just for the “by Nita” text
import { Dancing_Script } from "next/font/google";
const accent = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

// Update these to match your brand
const BRAND = {
  name: "Nailz doneby Nita",
  handle: "donebynitaa",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM,
  //phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY,
  //phoneLink: process.env.NEXT_PUBLIC_PHONE_LINK,
  email: process.env.NEXT_PUBLIC_EMAIL,
  address: "Alvarado, TX",
  bgFrom: "#fbe8ef", // soft pink gradient top
  bgTo: "#fdeff4",   // softer pink bottom
  panel: "#fff7fa",  // cards
  border: "rgba(233, 152, 170, 0.45)",
  ink: "#1f1f1f",    // text/buttons
  accent: "#ff5c8a", // tiny accents
  blue: "f46b45"
};

const HOURS = [
  { d: "Monday – Friday", h: "4:30 PM – 7:00 PM" },
  { d: "Saturday", h: "9:00 AM - 3:00 PM" },
  { d: "Sunday", h: "Closed" },
];

// If you use Calendly, put your link. Otherwise, leave empty to show the email form.
const CALENDLY_URL = ""; // e.g., "https://calendly.com/yourname/nails"
// If you use Formspree, paste your endpoint below to receive emails.
// const FORMSPREE_ACTION = ""; // e.g., "https://formspree.io/f/abcdxyz"
const FORMSPREE_ACTION = "/api/booking";

// Local gallery images (put these files in /public)
const GALLERY = ["/nails1.jpg", "/nails2.jpg", "/nails3.jpg"];

// Services
const SERVICES = [
  {
    name: "Acrylic Nail Set",
    desc: "",
    price: "$40.00",
    duration: "2 hours 10 minutes",
    img: "/services1.jpg",
  },
  {
    name: "Acrylic Toes",
    desc: "Only toe work. No pedicure. Just application of acrylics on natural toe nails.",
    price: "$75.00",
    duration: "2 hours",
    img: "/services2.jpg",
  },
  {
    name: "Overlay Nail Set",
    desc: "Starting price $60",
    price: "$60.00",
    duration: "1 hour 30 minutes",
    img: "/service3.jpg",
  },
  {
    name: "Overlay Toes",
    desc: "Starting price $60",
    price: "$60.00",
    duration: "1 hour 30 minutes",
    img: "/service3.jpg",
  },
  {
    name: "Man Manicure",
    desc: "Starting price $60",
    price: "$60.00",
    duration: "1 hour",
    img: "/services4.jpg",
  },
  {
    name: "Nail & Toes",
    desc: "Starting price $60",
    price: "$60.00",
    duration: "3 hour 30 minutes",
    img: "/services6.jpg",
  },
];

// ==================== PAGE ====================
export default function NailSalonSite() {
  const bookingRef = useRef<HTMLDivElement | null>(null);
  const [sent, setSent] = useState(false);

  const scrollToBooking = () => bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="min-h-screen" style={{ backgroundImage: `linear-gradient(180deg, ${BRAND.bgFrom}, ${BRAND.bgTo})` }}>
      {/* floating subtle hearts */}
      <div className="pointer-events-none fixed inset-0 -z-10 select-none opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]">
        <div className="absolute left-10 top-24 rotate-12"><Heart /></div>
        <div className="absolute right-16 top-40 -rotate-6"><Heart /></div>
        <div className="absolute left-1/3 bottom-24 rotate-3"><Heart /></div>
      </div>

      {/* NAV */}
      <nav className="sticky top-0 z-40 border-b/50 backdrop-blur-md" style={{ borderColor: BRAND.border, background: "rgba(255,255,255,0.35)" }}>
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2" style={{ color: BRAND.ink }}>
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold tracking-wide">{BRAND.handle}</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm" style={{ color: BRAND.ink }}>
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#tips" className="hover:opacity-80">Before Appt</a>
            <a href="#work" className="hover:opacity-80">My Work</a>
            <a href="#services" className="hover:opacity-80">Services</a>
            <Button onClick={scrollToBooking} className="rounded-2xl border" style={{ backgroundColor: BRAND.ink, color: "#fff", borderColor: BRAND.ink }}>
              Book
            </Button>
          </div>
          <div className="md:hidden">
            
          </div>
        </div>
      </nav>

      {/* HERO + INTRO */}
      <header className="mx-auto max-w-6xl px-4 pt-10 pb-6">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold" style={{ color: BRAND.ink, letterSpacing: "0.02em" }}>
            Done{" "}
            <span className={`${accent.className} inline-block align-top text-2xl ml-2 italic`}>
              by Nita 
            </span>
          </h1>
          <p className="mt-2 text-sm" style={{ color: BRAND.ink }}>@{BRAND.handle}</p>
        </div>
      </header>

      {/* ABOUT / HOURS / CONTACT PANEL */}
      <section id="about" className="mx-auto max-w-6xl px-4 pb-10">
        <Card className="rounded-3xl overflow-hidden border" style={{ backgroundColor: BRAND.panel, borderColor: BRAND.border }}>
          <CardContent className="p-0">
            <div className="grid md:grid-cols-3">
              {/* Meet your artist */}
              <div className="p-8 border-b md:border-b-0 md:border-r" style={{ borderColor: BRAND.border }}>
                <h3 className="text-xl tracking-[0.12em]" style={{ color: BRAND.ink }}>meet your</h3>
                <div className="text-2xl font-semibold" style={{ color: BRAND.ink }}>NAIL ARTIST 💖</div>
                <p className="mt-4 text-sm leading-6" style={{ color: BRAND.ink }}>
                  Hey besties! I'm Nita. Ever since I started doing nails, it’s been my favorite way to spread a little sparkle.
                  Every set is made with love, detail, and a touch of magic. Can’t wait for you to sit in my chair and feel just as pretty as your nails!
                </p>
              </div>
              {/* Hours */}
              <div className="p-8 border-b md:border-b-0 md:border-r" style={{ borderColor: BRAND.border }}>
                <h3 className="text-xl tracking-[0.12em]" style={{ color: BRAND.ink }}>business</h3>
                <div className="text-2xl font-semibold" style={{ color: BRAND.ink }}>HOURS </div>
                <ul className="mt-4 space-y-2 text-sm" style={{ color: BRAND.ink }}>
                  {HOURS.map((h) => (
                    <li key={h.d} className="flex items-center justify-between border-b py-2 last:border-b-0" style={{ borderColor: BRAND.border }}>
                      <span>{h.d}</span>
                      <span>{h.h}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm italic text-center" style={{ color: BRAND.blue }}>
                  Available after hours by appointment
                </p>

              </div>
              {/* Contact */}
              <div className="p-8">
                <h3 className="text-xl tracking-[0.12em]" style={{ color: BRAND.ink }}>contact</h3>
                <div className="text-2xl font-semibold" style={{ color: BRAND.ink }}>DETAILS </div>
                <div className="mt-4 space-y-3 text-sm" style={{ color: BRAND.ink }}>
                  <p className="flex items-center gap-2">
  ✉️              <a className="underline" href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
                  </p>
                  <p className="flex items-center gap-2"><Instagram className="h-4 w-4" /> <a className="underline" href={BRAND.instagram} target="_blank" rel="noreferrer">@{BRAND.handle}</a></p>
                  <p className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-1" /> {BRAND.address}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* BEFORE YOUR APPOINTMENT TIPS */}
      <section id="tips" className="mx-auto max-w-6xl px-4 pb-8">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-semibold" style={{ color: BRAND.ink }}>
            before your <span className="font-light">APPOINTMENT</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Arrive with clean nails. Avoid lotion, oil, or heavy creams before your appointment.",
            "Please text me once you’re on your way and when you arrive.",
            "24-hour notice required for cancellations/rescheduling. Late changes may incur a fee.",
            "Bring inspiration photos if you have a specific design in mind.",
            "10-minute grace period for late arrivals.",
            "Repairs within 3 days are complimentary for gel & acrylic sets.",
          ].map((tip, i) => (
            <div key={i} className="rounded-2xl border p-4 text-sm bg-white" style={{ color: BRAND.ink, borderColor: BRAND.border }}>
              {tip}
            </div>
          ))}
        </div>
      </section>

      {/* MY WORK (circle images) */}
      <section id="work" className="mx-auto max-w-6xl px-4 py-10">
        <h3 className="text-2xl font-medium mb-6" style={{ color: BRAND.ink }}>My work </h3>
        <div className="flex flex-wrap gap-6">
          {GALLERY.map((src, i) => (
            <div key={i} className="h-36 w-36 rounded-full overflow-hidden border shadow-sm bg-white" style={{ borderColor: BRAND.border }}>
              <img src={src} alt={`Design ${i + 1}`} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* THANK YOU + CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-6 text-center">
        <div className="mt-4">
          {CALENDLY_URL ? (
            <a href={CALENDLY_URL} target="_blank" rel="noreferrer">
              <Button className="rounded-2xl px-6 py-5 text-base border" style={{ backgroundColor: BRAND.ink, color: "#fff", borderColor: BRAND.ink }}>
                CHOOSE A SERVICE BELOW
              </Button>
            </a>
          ) : (
            <Button onClick={scrollToBooking} className="rounded-2xl px-6 py-5 text-base border" style={{ backgroundColor: BRAND.ink, color: "#fff", borderColor: BRAND.ink }}>
              CHOOSE A SERVICE BELOW
            </Button>
            
          )}
        </div>
        <ChevronDown className="mx-auto mt-4 h-6 w-6" style={{ color: BRAND.ink }} />
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="space-y-8">
          {SERVICES.map((s) => (
            <div key={s.name} className="rounded-3xl overflow-hidden border bg-white flex flex-col items-center text-center shadow-sm" style={{ borderColor: BRAND.border }}>
              {s.img && (
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full max-h-[500px] object-contain bg-white rounded-t-3xl"
                />
              )}
              <div className="p-6 flex flex-col items-center justify-center">
                <h4 className="text-xl font-semibold mb-1" style={{ color: BRAND.ink }}>{s.name} </h4>
                <p className="text-sm" style={{ color: BRAND.ink }}>
                  {s.duration}{s.price ? ` @ ${s.price}` : ""}
                </p>
                {s.desc && <p className="text-sm mt-2" style={{ color: BRAND.ink }}>{s.desc}</p>}

                {/* Button with working action */}
                {CALENDLY_URL ? (
                  <a href={CALENDLY_URL} target="_blank" rel="noreferrer">
                    <Button type="button" className="mt-4 rounded-2xl border px-6 py-2"
                      style={{ backgroundColor: BRAND.ink, color: "#fff", borderColor: BRAND.ink }}>
                      BOOK
                    </Button>
                  </a>
                ) : (
                  <Button type="button" onClick={scrollToBooking} className="mt-4 rounded-2xl border px-6 py-2"
                    style={{ backgroundColor: BRAND.ink, color: "#fff", borderColor: BRAND.ink }}>
                    BOOK 
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING FORM */}
      <section ref={bookingRef} className="mx-auto max-w-6xl px-4 pb-24">
        <Card className="rounded-3xl" style={{ backgroundColor: BRAND.panel, borderColor: BRAND.border }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2" style={{ color: BRAND.ink }}>
              <Calendar className="h-5 w-5" /> Request an appointment 
            </CardTitle>
          </CardHeader>
          <CardContent>
            {CALENDLY_URL ? (
              <div className="text-sm" style={{ color: BRAND.ink }}>
                Booking is handled via Calendly. Use any BOOK button above to reserve your time.
              </div>
            ) : sent ? (
              <div className="p-6 text-center" style={{ color: BRAND.ink }}>
                <CheckCircle2 className="h-10 w-10 mx-auto" />
                <p className="mt-3 font-medium">Thanks! Your request has been sent </p>
                <p>We’ll text or email to confirm your appointment.</p>
              </div>
            ) : (
              <form
            onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;

            const res = await fetch("/api/booking", {
            method: "POST",
            body: new FormData(form),
            });

          if (res.ok) {
          setSent(true); // show "Thanks!" message
          form.reset(); // clear the form
         bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
         } else {
        alert("Something went wrong. Please try again.");
        }
        }}
        className="grid grid-cols-1 gap-4"
          >
  {/* your input fields stay the same below */}

                <div className="grid md:grid-cols-2 gap-4">
                  <label className="grid gap-1">
                    <span className="text-sm" style={{ color: BRAND.ink }}>Full Name</span>
                    <input name="name" required className="border rounded-2xl px-3 py-2 bg-white" placeholder="Your name" />
                  </label>
                  <label className="grid gap-1">
                    <span className="text-sm" style={{ color: BRAND.ink }}>Email</span>
                    <input type="email" name="email" required className="border rounded-2xl px-3 py-2 bg-white" placeholder="you@email.com" />
                  </label>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="grid gap-1">
                    <span className="text-sm" style={{ color: BRAND.ink }}>Phone</span>
                    <input name="phone" required className="border rounded-2xl px-3 py-2 bg-white" placeholder="" />
                  </label>
                  <label className="grid gap-1">
                    <span className="text-sm" style={{ color: BRAND.ink }}>Service</span>
                    <select name="service" required className="border rounded-2xl px-3 py-2 bg-white">
                      <option value="">Select a service…</option>
                      {SERVICES.map((s) => (
                        <option key={s.name} value={s.name}>{s.name}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="grid gap-1">
                    <span className="text-sm" style={{ color: BRAND.ink }}>Preferred Date</span>
                    <input type="date" name="date" className="border rounded-2xl px-3 py-2 bg-white" />
                  </label>
                  <label className="grid gap-1">
                    <span className="text-sm" style={{ color: BRAND.ink }}>Preferred Time</span>
                    <input type="time" name="time" className="border rounded-2xl px-3 py-2 bg-white" />
                  </label>
                </div>
                <label className="grid gap-1">
                  <span className="text-sm" style={{ color: BRAND.ink }}>Notes (designs, colors, inspo)</span>
                  <textarea name="message" rows={4} className="border rounded-2xl px-3 py-2 bg-white" placeholder="Tell me what you’re thinking… ✨" />
                </label>
                <div className="flex flex-wrap gap-3 items-center">
                  <Button type="submit" className="rounded-2xl border" style={{ backgroundColor: BRAND.ink, color: "#fff", borderColor: BRAND.ink }}>
                    Request Appointment 💌
                  </Button>
                  <a href={`tel:${BRAND.phoneLink}`} className="inline-flex">
                    <Button variant="outline" className="rounded-2xl border" style={{ borderColor: BRAND.ink, color: BRAND.ink }}>
                      Call 📞
                    </Button>
                  </a>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </section>

      {/* FOOTER */}
      <footer className="border-t/50" style={{ borderColor: BRAND.border }}>
        <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2 font-semibold" style={{ color: BRAND.ink }}>
              <Sparkles className="h-5 w-5" /> {BRAND.name}
            </div>
            <p className="mt-2 text-sm" style={{ color: BRAND.ink }}>
              Pretty nails, cozy vibes, gentle care 💕
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2" style={{ color: BRAND.ink }}>Visit</h4>
            <p className="text-sm flex items-start gap-2" style={{ color: BRAND.ink }}>
              <MapPin className="h-4 w-4 mt-0.5" /> {BRAND.address}
            </p>
            <p className="text-sm flex items-start gap-2 mt-2" style={{ color: BRAND.ink }}>
              <Clock className="h-4 w-4 mt-0.5" /> Mon–Sat, see hours
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2" style={{ color: BRAND.ink }}>Contact</h4>
            <p className="text-sm flex items-center gap-2 mt-2" style={{ color: BRAND.ink }}>
  ✉️         <a className="underline" href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
              </p>

            <p className="text-sm flex items-center gap-2 mt-2" style={{ color: BRAND.ink }}>
              <Instagram className="h-4 w-4" /> <a className="underline" href={BRAND.instagram} target="_blank" rel="noreferrer">@{BRAND.handle}</a>
            </p>
          </div>
        </div>
        <div className="text-center text-xs pb-8" style={{ color: BRAND.ink }}>
          © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
