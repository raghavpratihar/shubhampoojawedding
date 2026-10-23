import React from "react";
import { Navigation, Phone } from "lucide-react";
import { Petals } from "./components/Petals";
import { Butterfly } from "./components/Butterfly";
import { MusicPlayer } from "./components/MusicPlayer";
import { ScratchCard } from "./components/ScratchCard";
import {
  couple,
  hosts,
  shlokas,
  weddingDate,
  locations,
  eventDays,
  rsvp,
  compliments,
  awaitingEyes,
} from "./data/wedding";

const mapEmbedUrl = (place) => `https://www.google.com/maps?q=${encodeURIComponent(place.mapQuery)}&output=embed`;
const directionsUrl = (place) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(place.mapQuery)}&travelmode=driving`;

const Divider = ({ width = "w-16" }) => (
  <div className="my-6 flex items-center justify-center gap-3">
    <span className={`h-px ${width} bg-gold-soft`}></span>
    <span className="text-gold text-lg">❀</span>
    <span className={`h-px ${width} bg-gold-soft`}></span>
  </div>
);

export default function App() {
  return (
    <div className="relative">
      <Petals />
      <Butterfly />
      <MusicPlayer />

      <main className="relative">
        {/* Main Banner */}
        <section className="relative min-h-screen w-full overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}images/mainbg.jpg`}
            alt={`${couple.groom} and ${couple.bride} wedding illustration`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-white"></div>
          <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">
            <div className="text-rose-deep">
              <p className="font-yatra text-sm sm:text-base">॥ श्री गणेशाय नमः ॥</p>
              <p className="font-yatra text-xs sm:text-sm mt-2 leading-relaxed">
                {shlokas[0][0]}
                <br />
                {shlokas[0][1]}
              </p>
            </div>
            <p className="mt-8 font-serif-display text-lg sm:text-xl font-semibold text-foreground">
              {hosts.names}
            </p>
            <p className="max-w-md font-serif-display text-base sm:text-lg text-rose-deep">
              solicit your gracious presence &amp; blessings at the
            </p>
            <p className="mt-2 font-cinzel text-lg sm:text-2xl tracking-widest text-rose-deep">WEDDING CEREMONY</p>
            <p className="font-serif-display italic text-base sm:text-lg text-rose-deep">of their beloved son</p>
            <h1 className="mt-6">
              <span className="block font-script text-6xl sm:text-8xl md:text-9xl text-rose leading-none">{couple.groom}</span>
            </h1>
            <p className="mt-3 font-serif-display text-sm sm:text-lg text-foreground/80">({couple.groomLineage})</p>
            <p className="mt-5 font-script text-3xl sm:text-4xl text-rose-deep italic">with</p>
            <h1 className="mt-3">
              <span className="block font-script text-6xl sm:text-8xl md:text-9xl text-rose leading-none">{couple.bride}</span>
            </h1>
            <p className="mt-3 font-serif-display text-sm sm:text-lg text-foreground/80">({couple.brideLineage})</p>
            <p className="mt-8 font-serif-display text-lg sm:text-2xl font-semibold text-rose-deep">on {weddingDate.label}</p>
            <p className="mt-1 font-serif-display italic text-base text-foreground/80 pb-12">as per programme</p>
          </div>
        </section>

        {/* Save The Date */}
        <section className="relative py-20 px-6 bg-cream">
          <div className="relative max-w-3xl mx-auto text-center">
            <Divider />
            <div className="mb-10">
              <ScratchCard revealText={weddingDate.scratchReveal} targetDate={weddingDate.countdownTarget} />
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="relative py-20 px-6 bg-sage-soft">
          <div className="relative max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-yatra text-sm text-rose-deep leading-relaxed">
                {shlokas[1][0]}
                <br />
                {shlokas[1][1]}
              </p>
              <h2 className="mt-4 font-script text-5xl sm:text-6xl text-rose-deep">Golden Moments</h2>
              <Divider />
            </div>
            {eventDays.map((day) => (
              <div key={day.day} className="mb-14 last:mb-0">
                <h3 className="text-center font-serif-display text-2xl sm:text-3xl font-semibold text-sage-deep mb-8">{day.day}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {day.events.map((event) => (
                    <article key={event.title} className="relative rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 border border-gold-soft min-h-[380px] flex">
                      <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/45"></div>
                      <div className="relative w-full p-6 sm:p-8 text-center text-slate-50 flex flex-col justify-center">
                        <h4 className="font-script text-4xl sm:text-5xl text-cream">{event.title}</h4>
                        <p className="mt-2 italic text-base text-cream/80">{event.desc}</p>
                        <div className="my-5 flex items-center gap-3 justify-center">
                          <span className="h-px w-10 bg-gold-soft/60"></span>
                          <span className="text-gold">❀</span>
                          <span className="h-px w-10 bg-gold-soft/60"></span>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <div className="font-cinzel text-sm text-gold-soft">Time</div>
                            <div className="font-serif-display text-xl mt-1 text-cream">{event.time}</div>
                          </div>
                          <div>
                            <div className="font-cinzel text-sm text-gold-soft">Venue</div>
                            <div className="font-serif-display text-lg mt-1 text-cream">{event.venue}</div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hosts */}
        <section className="relative py-20 px-6 bg-sage-soft">
          <div className="relative max-w-5xl mx-auto text-center">
            <p className="font-cinzel text-xs text-sage-deep tracking-widest">WITH LOVE</p>
            <h2 className="font-script text-4xl sm:text-5xl text-rose-deep mt-2">The Bhatnagar Family</h2>
            <Divider />
            <p className="font-serif-display italic text-lg text-foreground/80 max-w-2xl mx-auto">Eagerly waiting for your presence,</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-cream/80 backdrop-blur-sm border border-gold-soft rounded-2xl p-8 shadow-soft">
                <p className="font-cinzel text-xl text-sage-deep tracking-widest">R.S.V.P.</p>
                <Divider width="w-8" />
                {rsvp.map((name) => (
                  <p key={name} className="font-serif-display text-xl text-foreground my-1">{name}</p>
                ))}
              </div>
              <div className="bg-cream/80 backdrop-blur-sm border border-gold-soft rounded-2xl p-8 shadow-soft">
                <p className="font-cinzel text-xl text-sage-deep tracking-widest">With Best Compliments From</p>
                <Divider width="w-8" />
                {compliments.map((line) => (
                  <p key={line} className="font-serif-display text-xl text-foreground my-1">{line}</p>
                ))}
              </div>
            </div>
            <div className="mt-6 bg-cream/80 backdrop-blur-sm border border-gold-soft rounded-2xl p-8 shadow-soft">
              <p className="font-cinzel text-xl text-sage-deep tracking-widest">Awaiting Eyes</p>
              <p className="mt-3 font-script text-3xl sm:text-4xl text-rose-deep">{awaitingEyes}</p>
            </div>
            <div className="mt-6 bg-cream/80 backdrop-blur-sm border border-gold-soft rounded-2xl p-8 shadow-soft">
              <p className="font-cinzel text-xl text-sage-deep tracking-widest">A Cordial Invitation From</p>
              <p className="mt-3 font-serif-display text-2xl font-semibold text-foreground">{hosts.names}</p>
              {hosts.address.map((line) => (
                <p key={line} className="font-serif-display text-lg text-foreground/80">{line}</p>
              ))}
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {hosts.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:+91${phone}`}
                    className="inline-flex items-center gap-2 rounded-full border border-gold-soft px-4 py-2 font-serif-display text-lg text-rose-deep hover:bg-sage-soft transition"
                  >
                    <Phone className="h-4 w-4" />
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Map Location */}
        <section className="relative py-20 px-6 bg-cream">
          <div className="relative max-w-6xl mx-auto text-center">
            <p className="font-cinzel text-xs text-sage-deep tracking-widest">VENUE</p>
            <h2 className="font-script text-4xl sm:text-5xl text-rose-deep mt-2">Where We Celebrate</h2>
            <Divider />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
              {locations.map((place) => (
                <article key={place.name}>
                  <p className="font-cinzel text-xs text-sage-deep tracking-widest uppercase">{place.label}</p>
                  <h3 className="mt-2 font-script text-4xl text-rose-deep">{place.name}</h3>
                  <p className="mt-2 font-serif-display text-lg text-foreground/80">{place.address}</p>
                  <div className="mt-4 overflow-hidden rounded-2xl border border-gold-soft shadow-elegant">
                    <iframe
                      src={mapEmbedUrl(place)}
                      width="100%"
                      height="320"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      title={`${place.name} Location`}
                    />
                  </div>
                  <a
                    href={directionsUrl(place)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 mt-5 text-sm font-medium gradient-gold text-white rounded-full px-8 py-3 shadow-gold hover:opacity-90"
                  >
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-foreground text-cream py-16 px-6 text-center">
          <p className="font-cinzel text-xs tracking-[0.4em] text-gold-soft">WITH LOVE</p>
          <h3 className="font-script text-5xl sm:text-6xl text-cream mt-3">
            {couple.groom} weds {couple.bride}
          </h3>
          <div className="my-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gold-soft/40"></span>
            <span className="text-2xl">💐</span>
            <span className="h-px w-12 bg-gold-soft/40"></span>
          </div>
          <p className="font-serif-display text-lg italic">{weddingDate.short}</p>
          <p className="mt-3 font-cinzel text-xs tracking-widest text-cream/70">{couple.hashtag}</p>
        </footer>
      </main>
    </div>
  );
}
