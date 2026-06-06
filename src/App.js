import React, { useEffect, useRef, useState } from "react";
import "./App.css";

// ── Floating Hearts Background ──────────────────────────────────────────────
function FloatingHearts() {
  const hearts = ["💖", "💗", "💝", "💞", "🌸", "✨", "🌺", "💫", "🦋", "🌷"];
  return (
    <div className="floating-hearts" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${6 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 8}s`,
            fontSize: `${14 + Math.random() * 22}px`,
            opacity: 0.6 + Math.random() * 0.4,
          }}
        >
          {hearts[i % hearts.length]}
        </span>
      ))}
    </div>
  );
}

// ── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Story", "Gallery", "Book", "Memories", "Letters", "Us"];

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__logo">💕 Our World</div>
      <button className="nav__burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        {menuOpen ? "✕" : "☰"}
      </button>
      <ul className={`nav__links ${menuOpen ? "nav__links--open" : ""}`}>
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {l}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero" id="hero">
      <FloatingHearts />
      <div className="hero__content">
        <p className="hero__eyebrow">✨ A dedication with all my heart ✨</p>
        <h1 className="hero__title">
          For <span className="hero__name">[Her Name]</span>
        </h1>
        <p className="hero__subtitle">
          From <em>[Your Name]</em> — with every beat, every breath, every word.
        </p>
        <p className="hero__desc">
          You wrote a book for me. So I built an entire world for you. <br />
          This space is yours — every pixel, every memory, every smile.
        </p>
        <div className="hero__cta">
          <a href="#story" className="btn btn--primary">Our Story 💖</a>
          <a href="#book" className="btn btn--ghost">Her Book 📖</a>
        </div>
        <div className="hero__hearts-row">💖 💗 💝 💞 💖 💗 💝 💞 💖</div>
      </div>
      <div className="hero__photo-frame">
        <div className="photo-placeholder hero__photo">
          <span>📸</span>
          <p>Your Photo Here</p>
        </div>
        <div className="hero__sticker hero__sticker--1">💌</div>
        <div className="hero__sticker hero__sticker--2">🌸</div>
        <div className="hero__sticker hero__sticker--3">✨</div>
      </div>
    </section>
  );
}

// ── Our Story ─────────────────────────────────────────────────────────────────
function Story() {
  const milestones = [
    { icon: "🌟", date: "The First Day", text: "The day the universe decided we should meet. I'll never forget the way you smiled." },
    { icon: "💬", date: "First Conversation", text: "We talked for hours and hours. Time disappeared. You made me feel understood." },
    { icon: "🌹", date: "First Date", text: "Nervous butterflies, warm laughter, and a feeling I never wanted to end." },
    { icon: "💍", date: "The Promise", text: "When I knew — without any doubt — that you are my forever person." },
    { icon: "📖", date: "She Wrote a Book", text: "You poured your heart into pages just for me. I will treasure it until my last breath." },
    { icon: "🌈", date: "Every Day Since", text: "You make ordinary days feel like magic. Thank you for choosing me." },
  ];

  return (
    <section className="story section" id="story">
      <div className="section__header">
        <p className="section__tag">Chapter One</p>
        <h2 className="section__title">Our Story 💕</h2>
        <p className="section__sub">Every love story is beautiful, but ours is my favourite.</p>
      </div>
      <div className="timeline">
        {milestones.map((m, i) => (
          <div className={`timeline__item ${i % 2 === 0 ? "left" : "right"}`} key={i}>
            <div className="timeline__dot">{m.icon}</div>
            <div className="timeline__card">
              <p className="timeline__date">{m.date}</p>
              <p className="timeline__text">{m.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Gallery ───────────────────────────────────────────────────────────────────
function Gallery() {
  const slots = [
    { label: "Our First Photo Together", emoji: "🌅" },
    { label: "That Rainy Day", emoji: "🌧️" },
    { label: "Your Beautiful Smile", emoji: "😊" },
    { label: "Adventure Together", emoji: "🏔️" },
    { label: "Cozy Evenings", emoji: "🕯️" },
    { label: "Dancing in the Kitchen", emoji: "💃" },
    { label: "Sunset Walks", emoji: "🌇" },
    { label: "Your Favourite Café", emoji: "☕" },
    { label: "Us, Always", emoji: "💑" },
  ];

  return (
    <section className="gallery section" id="gallery">
      <div className="section__header">
        <p className="section__tag">Our Album</p>
        <h2 className="section__title">Memory Gallery 📸</h2>
        <p className="section__sub">Replace the placeholders below with your real photos!</p>
      </div>
      <div className="gallery__grid">
        {slots.map((s, i) => (
          <div className={`gallery__item gallery__item--${i + 1}`} key={i}>
            <div className="photo-placeholder">
              <span>{s.emoji}</span>
              <p>{s.label}</p>
            </div>
            <div className="gallery__caption">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Book Dedication ───────────────────────────────────────────────────────────
function Book() {
  return (
    <section className="book section" id="book">
      <div className="section__header">
        <p className="section__tag">The Greatest Gift</p>
        <h2 className="section__title">She Wrote a Book 📖</h2>
      </div>
      <div className="book__layout">
        <div className="book__cover">
          <div className="book__cover-inner">
            <div className="book__spine"></div>
            <div className="book__face">
              <p className="book__cover-tag">✨ Written with Love ✨</p>
              <h3 className="book__cover-title">[Book Title]</h3>
              <p className="book__cover-author">by [Her Name]</p>
              <div className="book__cover-deco">💕</div>
            </div>
          </div>
        </div>
        <div className="book__details">
          <blockquote className="book__quote">
            "Every word she wrote was a piece of her soul, handed to me with open hands and an open heart. I will never be the same."
            <cite>— [Your Name]</cite>
          </blockquote>
          <p className="book__desc">
            She didn't just write a book — she created a universe of love, wrapped in pages, sealed with her heart. This website exists because of that book. Because she showed me that love is worth celebrating, documenting, and dedicating your entire self to.
          </p>
          <div className="book__stats">
            <div className="book__stat">
              <span className="book__stat-num">∞</span>
              <span className="book__stat-label">Words of Love</span>
            </div>
            <div className="book__stat">
              <span className="book__stat-num">1</span>
              <span className="book__stat-label">Person Who Inspired Her</span>
            </div>
            <div className="book__stat">
              <span className="book__stat-num">💖</span>
              <span className="book__stat-label">Pure Heart</span>
            </div>
          </div>
          <a href="#" className="btn btn--primary">Read More 📖</a>
        </div>
      </div>
    </section>
  );
}

// ── Memories / Reasons ────────────────────────────────────────────────────────
function Memories() {
  const reasons = [
    { icon: "🌸", title: "Your Laugh", desc: "The way you laugh — full and bright and completely contagious — is my favourite sound in the world." },
    { icon: "🧠", title: "Your Mind", desc: "You think beautifully. Your ideas, your wisdom, your creativity — I could listen to you forever." },
    { icon: "💪", title: "Your Strength", desc: "You face hard things with such grace. You inspire me every single day without even trying." },
    { icon: "🌙", title: "Your Kindness", desc: "The way you treat people — with softness and warmth — makes the world genuinely better." },
    { icon: "📝", title: "Your Words", desc: "You wrote a whole book. For me. I don't deserve you, and yet here you are." },
    { icon: "✨", title: "Your Presence", desc: "Every room you walk into becomes a better place. You are sunshine in human form." },
  ];

  return (
    <section className="memories section" id="memories">
      <div className="section__header">
        <p className="section__tag">Why I Love You</p>
        <h2 className="section__title">A Million Reasons 💝</h2>
        <p className="section__sub">Starting with just a few — I'd need a book for all of them.</p>
      </div>
      <div className="reasons__grid">
        {reasons.map((r, i) => (
          <div className="reason__card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="reason__icon">{r.icon}</div>
            <h3 className="reason__title">{r.title}</h3>
            <p className="reason__desc">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Love Letter ───────────────────────────────────────────────────────────────
function Letters() {
  return (
    <section className="letters section" id="letters">
      <div className="section__header">
        <p className="section__tag">From My Heart</p>
        <h2 className="section__title">A Letter to You 💌</h2>
      </div>
      <div className="letter__wrapper">
        <div className="letter__paper">
          <div className="letter__seal">💌</div>
          <p className="letter__date">Written with love, always</p>
          <p className="letter__salutation">My dearest [Her Name],</p>
          <p className="letter__body">
            You wrote a book for me — pages full of your heart, your thoughts, your love. I've read every word a hundred times, and every time it feels like the first. You have a gift for making things feel beautiful and permanent and real.
          </p>
          <p className="letter__body">
            So I made this for you. It isn't a book — I'm not as talented as you — but it's a place where our memories live. A place that says, without any doubt: <em>you are loved. You are seen. You are my person.</em>
          </p>
          <p className="letter__body">
            Thank you for choosing me. Thank you for writing me into your story. I promise to spend every day being worthy of the love you give so freely.
          </p>
          <p className="letter__body">
            This website, like my heart, is yours. Forever.
          </p>
          <p className="letter__sign">With everything I have,</p>
          <p className="letter__name">[Your Name] 💖</p>
          <div className="letter__deco">🌸 ✨ 💕 ✨ 🌸</div>
        </div>
      </div>
    </section>
  );
}

// ── About Us ──────────────────────────────────────────────────────────────────
function Us() {
  const facts = [
    { q: "Together Since", a: "[Your Date] 🗓️" },
    { q: "Her Superpower", a: "Writing hearts onto pages 📝" },
    { q: "His Superpower", a: "Loving her unconditionally 💖" },
    { q: "Favourite Thing", a: "Being together, anywhere 🌍" },
    { q: "Our Song", a: "[Your Song] 🎵" },
    { q: "Our Place", a: "[Your Special Place] 🌺" },
  ];

  return (
    <section className="us section" id="us">
      <div className="section__header">
        <p className="section__tag">Two Hearts, One Story</p>
        <h2 className="section__title">About Us 💑</h2>
      </div>
      <div className="us__layout">
        <div className="us__photos">
          <div className="photo-placeholder us__photo us__photo--1">
            <span>📸</span>
            <p>Photo of [Her Name]</p>
          </div>
          <div className="photo-placeholder us__photo us__photo--2">
            <span>📸</span>
            <p>Photo of [Your Name]</p>
          </div>
          <div className="us__heart-center">💖</div>
        </div>
        <div className="us__facts">
          {facts.map((f, i) => (
            <div className="us__fact" key={i}>
              <span className="us__fact-q">{f.q}</span>
              <span className="us__fact-a">{f.a}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__hearts">💖 💗 💝 💞 💖 💗 💝 💞 💖</div>
      <p className="footer__tagline">Made with love, for love, because of love.</p>
      <p className="footer__credit">
        Built by <strong>[Your Name]</strong> for <strong>[Her Name]</strong> — because she deserves the world 🌍
      </p>
      <p className="footer__copy">∞ Always & Forever ∞</p>
    </footer>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Story />
      <Gallery />
      <Book />
      <Memories />
      <Letters />
      <Us />
      <Footer />
    </div>
  );
}
