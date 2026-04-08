import { useState, useEffect, useRef, useMemo } from "react";
import kickIcon from "./assets/kick.png";
import mainLogo from "./assets/logo.png";
import { Typewriter } from "./components/ui/typewriter";
const HS17 = { 5: { 2: 'H', 3: 'H', 4: 'H', 5: 'H', 6: 'H', 7: 'H', 8: 'H', 9: 'H', 10: 'H', 11: 'H' }, 6: { 2: 'H', 3: 'H', 4: 'H', 5: 'H', 6: 'H', 7: 'H', 8: 'H', 9: 'H', 10: 'H', 11: 'H' }, 7: { 2: 'H', 3: 'H', 4: 'H', 5: 'H', 6: 'H', 7: 'H', 8: 'H', 9: 'H', 10: 'H', 11: 'H' }, 8: { 2: 'H', 3: 'H', 4: 'H', 5: 'H', 6: 'H', 7: 'H', 8: 'H', 9: 'H', 10: 'H', 11: 'H' }, 9: { 2: 'H', 3: 'D', 4: 'D', 5: 'D', 6: 'D', 7: 'H', 8: 'H', 9: 'H', 10: 'H', 11: 'H' }, 10: { 2: 'D', 3: 'D', 4: 'D', 5: 'D', 6: 'D', 7: 'D', 8: 'D', 9: 'D', 10: 'H', 11: 'H' }, 11: { 2: 'D', 3: 'D', 4: 'D', 5: 'D', 6: 'D', 7: 'D', 8: 'D', 9: 'D', 10: 'D', 11: 'H' }, 12: { 2: 'H', 3: 'H', 4: 'S', 5: 'S', 6: 'S', 7: 'H', 8: 'H', 9: 'H', 10: 'H', 11: 'H' }, 13: { 2: 'S', 3: 'S', 4: 'S', 5: 'S', 6: 'S', 7: 'H', 8: 'H', 9: 'H', 10: 'H', 11: 'H' }, 14: { 2: 'S', 3: 'S', 4: 'S', 5: 'S', 6: 'S', 7: 'H', 8: 'H', 9: 'H', 10: 'H', 11: 'H' }, 15: { 2: 'S', 3: 'S', 4: 'S', 5: 'S', 6: 'S', 7: 'H', 8: 'H', 9: 'H', 10: 'Rh', 11: 'H' }, 16: { 2: 'S', 3: 'S', 4: 'S', 5: 'S', 6: 'S', 7: 'H', 8: 'H', 9: 'Rh', 10: 'Rh', 11: 'Rh' }, 17: { 2: 'S', 3: 'S', 4: 'S', 5: 'S', 6: 'S', 7: 'S', 8: 'S', 9: 'S', 10: 'S', 11: 'S' }, 18: { 2: 'S', 3: 'S', 4: 'S', 5: 'S', 6: 'S', 7: 'S', 8: 'S', 9: 'S', 10: 'S', 11: 'S' }, 19: { 2: 'S', 3: 'S', 4: 'S', 5: 'S', 6: 'S', 7: 'S', 8: 'S', 9: 'S', 10: 'S', 11: 'S' }, 20: { 2: 'S', 3: 'S', 4: 'S', 5: 'S', 6: 'S', 7: 'S', 8: 'S', 9: 'S', 10: 'S', 11: 'S' }, 21: { 2: 'S', 3: 'S', 4: 'S', 5: 'S', 6: 'S', 7: 'S', 8: 'S', 9: 'S', 10: 'S', 11: 'S' } };
const HH17 = { ...HS17, 11: { 2: 'D', 3: 'D', 4: 'D', 5: 'D', 6: 'D', 7: 'D', 8: 'D', 9: 'D', 10: 'D', 11: 'D' }, 15: { 2: 'S', 3: 'S', 4: 'S', 5: 'S', 6: 'S', 7: 'H', 8: 'H', 9: 'H', 10: 'Rh', 11: 'Rh' }, 16: { 2: 'S', 3: 'S', 4: 'S', 5: 'S', 6: 'S', 7: 'H', 8: 'H', 9: 'Rh', 10: 'Rh', 11: 'Rh' }, 17: { 2: 'S', 3: 'S', 4: 'S', 5: 'S', 6: 'S', 7: 'S', 8: 'S', 9: 'S', 10: 'S', 11: 'Rs' } };
const SS17 = { 13: { 2: 'H', 3: 'H', 4: 'H', 5: 'D', 6: 'D', 7: 'H', 8: 'H', 9: 'H', 10: 'H', 11: 'H' }, 14: { 2: 'H', 3: 'H', 4: 'H', 5: 'D', 6: 'D', 7: 'H', 8: 'H', 9: 'H', 10: 'H', 11: 'H' }, 15: { 2: 'H', 3: 'H', 4: 'D', 5: 'D', 6: 'D', 7: 'H', 8: 'H', 9: 'H', 10: 'H', 11: 'H' }, 16: { 2: 'H', 3: 'H', 4: 'D', 5: 'D', 6: 'D', 7: 'H', 8: 'H', 9: 'H', 10: 'H', 11: 'H' }, 17: { 2: 'H', 3: 'D', 4: 'D', 5: 'D', 6: 'D', 7: 'H', 8: 'H', 9: 'H', 10: 'H', 11: 'H' }, 18: { 2: 'S', 3: 'Ds', 4: 'Ds', 5: 'Ds', 6: 'Ds', 7: 'S', 8: 'S', 9: 'H', 10: 'H', 11: 'H' }, 19: { 2: 'S', 3: 'S', 4: 'S', 5: 'S', 6: 'S', 7: 'S', 8: 'S', 9: 'S', 10: 'S', 11: 'S' }, 20: { 2: 'S', 3: 'S', 4: 'S', 5: 'S', 6: 'S', 7: 'S', 8: 'S', 9: 'S', 10: 'S', 11: 'S' }, 21: { 2: 'S', 3: 'S', 4: 'S', 5: 'S', 6: 'S', 7: 'S', 8: 'S', 9: 'S', 10: 'S', 11: 'S' } };
const SH17 = { ...SS17, 17: { 2: 'H', 3: 'D', 4: 'D', 5: 'D', 6: 'D', 7: 'H', 8: 'H', 9: 'H', 10: 'H', 11: 'H' }, 18: { 2: 'Ds', 3: 'Ds', 4: 'Ds', 5: 'Ds', 6: 'Ds', 7: 'S', 8: 'S', 9: 'H', 10: 'H', 11: 'H' }, 19: { 2: 'S', 3: 'S', 4: 'S', 5: 'S', 6: 'Ds', 7: 'S', 8: 'S', 9: 'S', 10: 'S', 11: 'S' } };
const PSD = { 2: { 2: 'Ph', 3: 'Ph', 4: 'P', 5: 'P', 6: 'P', 7: 'P', 8: 'H', 9: 'H', 10: 'H', 11: 'H' }, 3: { 2: 'Ph', 3: 'Ph', 4: 'P', 5: 'P', 6: 'P', 7: 'P', 8: 'H', 9: 'H', 10: 'H', 11: 'H' }, 4: { 2: 'H', 3: 'H', 4: 'H', 5: 'Ph', 6: 'Ph', 7: 'H', 8: 'H', 9: 'H', 10: 'H', 11: 'H' }, 5: { 2: 'D', 3: 'D', 4: 'D', 5: 'D', 6: 'D', 7: 'D', 8: 'D', 9: 'D', 10: 'H', 11: 'H' }, 6: { 2: 'Ph', 3: 'P', 4: 'P', 5: 'P', 6: 'P', 7: 'H', 8: 'H', 9: 'H', 10: 'H', 11: 'H' }, 7: { 2: 'P', 3: 'P', 4: 'P', 5: 'P', 6: 'P', 7: 'P', 8: 'H', 9: 'H', 10: 'H', 11: 'H' }, 8: { 2: 'P', 3: 'P', 4: 'P', 5: 'P', 6: 'P', 7: 'P', 8: 'P', 9: 'P', 10: 'P', 11: 'P' }, 9: { 2: 'P', 3: 'P', 4: 'P', 5: 'P', 6: 'P', 7: 'S', 8: 'P', 9: 'P', 10: 'S', 11: 'S' }, 10: { 2: 'S', 3: 'S', 4: 'S', 5: 'S', 6: 'S', 7: 'S', 8: 'S', 9: 'S', 10: 'S', 11: 'S' }, 11: { 2: 'P', 3: 'P', 4: 'P', 5: 'P', 6: 'P', 7: 'P', 8: 'P', 9: 'P', 10: 'P', 11: 'P' } };
const PSN = { ...PSD, 2: { 2: 'H', 3: 'H', 4: 'P', 5: 'P', 6: 'P', 7: 'P', 8: 'H', 9: 'H', 10: 'H', 11: 'H' }, 3: { 2: 'H', 3: 'H', 4: 'P', 5: 'P', 6: 'P', 7: 'P', 8: 'H', 9: 'H', 10: 'H', 11: 'H' }, 4: { 2: 'H', 3: 'H', 4: 'H', 5: 'H', 6: 'H', 7: 'H', 8: 'H', 9: 'H', 10: 'H', 11: 'H' }, 6: { 2: 'H', 3: 'P', 4: 'P', 5: 'P', 6: 'P', 7: 'H', 8: 'H', 9: 'H', 10: 'H', 11: 'H' } };
const PHD = { ...PSD, 8: { 2: 'P', 3: 'P', 4: 'P', 5: 'P', 6: 'P', 7: 'P', 8: 'P', 9: 'P', 10: 'P', 11: 'Rp' } };
const PHN = { ...PSN, 8: { 2: 'P', 3: 'P', 4: 'P', 5: 'P', 6: 'P', 7: 'P', 8: 'P', 9: 'P', 10: 'P', 11: 'Rp' } };
const PRESETS = { normal: { name: "Normal", desc: "Standard 8-deck", s17: true, surr: true, das: true }, pragmatic: { name: "Pragmatic Play", desc: "Pragmatic Play Live", s17: true, surr: false, das: true }, evolution: { name: "Evolution", desc: "Evolution Live", s17: true, surr: false, das: true } };
const CARDS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const CV = { A: 11, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, J: 10, Q: 10, K: 10 };
const hv = c => { let t = 0, a = 0; for (const x of c) { t += CV[x]; if (x === 'A') a++; } while (t > 21 && a > 0) { t -= 10; a--; } return t; };
const isSoft = c => { let t = 0, a = 0; for (const x of c) { t += CV[x]; if (x === 'A') a++; } while (t > 21 && a > 0) { t -= 10; a--; } return a > 0 && t <= 21; };
const isPair = c => c.length === 2 && CV[c[0]] === CV[c[1]];

// Win probability estimation (simplified)
function getWinProb(playerTotal, dealerCard, soft) {
  const d = CV[dealerCard];
  if (playerTotal > 21) return 0;
  if (playerTotal === 21) return 92;
  // Dealer bust probabilities by upcard (approximate for 8-deck)
  const bustProb = { 2: 35.3, 3: 37.6, 4: 40.3, 5: 42.9, 6: 42.1, 7: 26.2, 8: 24.4, 9: 23.3, 10: 23.4, 11: 17.0 };
  const db = bustProb[d] || 25;
  // Player standing win probability estimate
  let winIfStand = 0;
  if (playerTotal >= 17) {
    winIfStand = db + (100 - db) * Math.max(0, (playerTotal - 17) / 4) * 0.45;
  } else {
    winIfStand = db * 0.7;
  }
  // Adjust for soft hands (slightly better flexibility)
  if (soft && playerTotal < 17) winIfStand += 3;
  return Math.min(95, Math.max(5, Math.round(winIfStand)));
}

function getRaw(pc, dc, r) { const t = hv(pc), d = CV[dc]; if (t > 21) return 'BUST'; if (t === 21 && pc.length === 2 && pc.includes('A') && CV[pc.find(x => x !== 'A')] === 10) return 'BJ'; if (t === 21) return 'S'; if (isPair(pc)) { const pv = CV[pc[0]] === 11 ? 11 : CV[pc[0]]; const pt = r.s17 ? (r.das ? PSD : PSN) : (r.das ? PHD : PHN); if (pt[pv]?.[d]) return pt[pv][d]; } if (isSoft(pc)) { const st = r.s17 ? SS17 : SH17; const ct = Math.max(13, Math.min(21, t)); if (st[ct]?.[d]) return st[ct][d]; } const ht = r.s17 ? HS17 : HH17; const ct = Math.max(5, Math.min(21, t)); if (ht[ct]?.[d]) return ht[ct][d]; return 'H'; }
function getResult(pc, dc, r) { const raw = getRaw(pc, dc, r); const cd = pc.length === 2; const ht = isPair(pc) ? 'PAIR' : isSoft(pc) ? 'SOFT' : 'HARD'; const map = { BUST: { m: [], l: 'BUST', c: '#dc2626' }, BJ: { m: [], l: 'BLACKJACK!', c: '#22c55e' }, H: { m: ['HIT'], l: 'HIT', c: '#154c9e' }, S: { m: ['STAND'], l: 'STAND', c: '#22c55e' }, D: cd ? { m: ['DOUBLE', 'HIT'], l: 'DOUBLE if allowed or HIT', c: '#8b5cf6' } : { m: ['HIT'], l: 'HIT', c: '#154c9e' }, Ds: cd ? { m: ['DOUBLE', 'STAND'], l: 'DOUBLE if allowed or STAND', c: '#8b5cf6' } : { m: ['STAND'], l: 'STAND', c: '#22c55e' }, P: { m: ['SPLIT', 'HIT'], l: 'SPLIT if allowed or HIT', c: '#8b5cf6' }, Ph: { m: ['SPLIT', 'HIT'], l: 'SPLIT if allowed or HIT', c: '#8b5cf6' }, Rh: r.surr ? { m: ['SURRENDER', 'HIT'], l: 'SURRENDER if allowed or HIT', c: '#6b7280' } : { m: ['HIT'], l: 'HIT', c: '#154c9e' }, Rs: r.surr ? { m: ['SURRENDER', 'STAND'], l: 'SURRENDER if allowed or STAND', c: '#6b7280' } : { m: ['STAND'], l: 'STAND', c: '#22c55e' }, Rp: r.surr ? { m: ['SURRENDER', 'SPLIT'], l: 'SURRENDER if allowed or SPLIT', c: '#6b7280' } : { m: ['SPLIT', 'HIT'], l: 'SPLIT', c: '#8b5cf6' } }; const res = map[raw] || map.H; return { ...res, ht, total: hv(pc) }; }

// Shimmer text component (MysticBert style)
function ShimmerText({ children, color = '#f87171', style = {} }) {
  return (
    <span className="shimmer-text" style={{
      ...style,
      color: color,
      fontWeight: 600,
      letterSpacing: 1.2,
      textTransform: 'uppercase',
      fontSize: 11,
      position: 'relative',
      display: 'inline-block',
      backgroundImage: `linear-gradient(90deg, ${color} 0%, ${color} 35%, rgba(255,255,255,0.9) 50%, ${color} 65%, ${color} 100%)`,
      backgroundSize: '200% 100%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      animation: 'textShimmer 3s ease-in-out infinite',
    }}>{children}</span>
  );
}

// Win probability display with animation
function WinProb({ prob, visible, isBlackjack }) {
  const [display, setDisplay] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (visible && (prob > 0 || isBlackjack)) {
      setShow(true);
      if (isBlackjack) return;
      let start = 0;
      const target = prob;
      const duration = 800;
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(start + (target - start) * eased));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    } else {
      setShow(false);
      setDisplay(0);
    }
  }, [prob, visible]);

  if (!show) return null;

  const probColor = isBlackjack ? '#fbbf24' : (prob >= 50 ? '#22c55e' : prob >= 35 ? '#f59e0b' : '#ef4444');

  return (
    <div style={{ animation: 'slideIn 0.5s ease', textAlign: 'center', marginBottom: 12 }}>
      <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>{isBlackjack ? "Winner Winner" : "Estimated Win Probability"}</div>
      <div className="shimmer-text" style={{
        fontSize: isBlackjack ? 36 : 32, fontWeight: 900, fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
        backgroundImage: `linear-gradient(90deg, ${probColor} 0%, ${probColor} 35%, rgba(255,255,255,0.95) 50%, ${probColor} 65%, ${probColor} 100%)`,
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        animation: 'textShimmer 3s ease-in-out infinite',
        textShadow: 'none',
      }}>{isBlackjack ? "BLACKJACK" : `${display}%`}</div>
    </div>
  );
}

function Stars() { const ref = useRef(null); useEffect(() => { const c = ref.current; if (!c) return; const ctx = c.getContext('2d'); let w = c.width = window.innerWidth, h = c.height = window.innerHeight; const s = Array.from({ length: 90 }, () => ({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.4 + 0.4, sp: Math.random() * 0.015 + 0.004, o: Math.random(), d: Math.random() > 0.5 ? 1 : -1 })); let raf; const draw = () => { ctx.clearRect(0, 0, w, h); for (const p of s) { p.o += p.sp * p.d; if (p.o >= 1 || p.o <= 0.05) p.d *= -1; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(255,255,255,${p.o})`; ctx.fill(); } raf = requestAnimationFrame(draw); }; draw(); const rs = () => { w = c.width = window.innerWidth; h = c.height = window.innerHeight; }; window.addEventListener('resize', rs); return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', rs); }; }, []); return <canvas ref={ref} style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }} />; }

function SBtn({ href, children }) { return <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 38, height: 38, borderRadius: 10, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', textDecoration: 'none', transition: 'all 0.25s', flexShrink: 0 }} onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.16)'; e.currentTarget.style.transform = 'scale(1.1)'; }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'scale(1)'; }}>{children}</a>; }

// Fixed icons - proper Kick and TikTok SVGs, all white
const IgI = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const KiI = () => <img src={kickIcon} alt="Kick" style={{ width: 38, height: 38, objectFit: 'contain', transform: 'scale(1.8)' }} />;
const YtI = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M21.582 6.186c-.23-.86-.908-1.538-1.768-1.768C18.254 4 12 4 12 4s-6.254 0-7.814.418c-.86.23-1.538.908-1.768 1.768C2 7.746 2 12 2 12s0 4.254.418 5.814c.23.86.908 1.538 1.768 1.768C5.746 20 12 20 12 20s6.254 0 7.814-.418c.86-.23 1.538-.908 1.768-1.768C22 16.254 22 12 22 12s0-4.254-.418-5.814zM9.996 15.51v-7.02l6.508 3.51-6.508 3.51z"/></svg>;
const XI = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;

function Sel({ onSelect, onClose, title }) { return (<div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, backdropFilter: 'blur(6px)', animation: 'fi .2s ease' }} onClick={onClose}><div style={{ background: 'linear-gradient(150deg, #0a1832 0%, #154c9e 100%)', borderRadius: 16, padding: '22px 18px', maxWidth: 340, width: '90%', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 24px 64px rgba(0,0,0,0.5)', animation: 'si .2s ease' }} onClick={e => e.stopPropagation()}><h3 style={{ margin: '0 0 14px', textAlign: 'center', color: '#fff', fontSize: 15, fontWeight: 700, letterSpacing: 1 }}>{title}</h3><div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 7 }}>{CARDS.map(l => (<button key={l} onClick={() => onSelect(l)} style={{ padding: '12px 0', borderRadius: 8, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.06)', color: l === 'A' ? '#fbbf24' : '#fff', fontSize: 16, fontWeight: 700, fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif", cursor: 'pointer', transition: 'all 0.15s' }} onMouseEnter={e => { e.target.style.background = 'rgba(255,255,255,0.15)'; e.target.style.transform = 'scale(1.05)'; }} onMouseLeave={e => { e.target.style.background = 'rgba(255,255,255,0.06)'; e.target.style.transform = 'scale(1)'; }}>{l}</button>))}</div><button onClick={onClose} style={{ marginTop: 12, width: '100%', padding: '9px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', color: 'rgba(255,255,255,0.4)', fontSize: 13, cursor: 'pointer' }}>Cancel</button></div></div>); }

function CC({ label, onClick, placeholder }) {
  if (placeholder) return (
    <button onClick={onClick} className="add-card-btn" style={{ width: 54, height: 76, borderRadius: 8, border: '2px dashed rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 20, color: 'rgba(255,255,255,0.4)', flexShrink: 0, transition: 'all 0.25s ease' }}>+</button>
  );
  return (<div onClick={onClick} style={{ width: 54, height: 76, borderRadius: 8, border: '2px solid rgba(255,255,255,0.2)', background: 'linear-gradient(150deg, #1a3a6e 0%, #0d2550 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 18, fontWeight: 800, color: label === 'A' ? '#fbbf24' : '#fff', fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif", boxShadow: '0 3px 12px rgba(0,0,0,0.3)', flexShrink: 0 }}>{label}</div>);
}

const MC = { HIT: '#154c9e', STAND: '#22c55e', DOUBLE: '#8b5cf6', SPLIT: '#8b5cf6', SURRENDER: '#6b7280' };

export default function App() {
  const [preset, setPreset] = useState('normal');
  const [rules, setRules] = useState(PRESETS.normal);
  const [dc, setDc] = useState(null);
  const [pc, setPc] = useState([]);
  const [sel, setSel] = useState(null);
  const [showR, setShowR] = useState(false);
  const [split, setSplit] = useState(null);
  const [done, setDone] = useState(false);
  const [ta, setTa] = useState(false);
  const chP = k => { setPreset(k); setRules(PRESETS[k]); setDc(null); setPc([]); setSplit(null); setDone(false); setTa(true); setTimeout(() => setTa(false), 350); };
  const reset = () => { setDc(null); setPc([]); setSplit(null); setDone(false); };
  const selCard = card => { if (sel === 'dealer') setDc(card); else if (sel === 'split') { setSplit(p => { const n = { ...p }; n[`h${p.a + 1}`] = [...n[`h${p.a + 1}`], card]; return n; }); } else setPc(p => [...p, card]); setSel(null); };
  const rmC = i => setPc(p => p.filter((_, x) => x !== i));
  const handleMove = move => { if (move === 'HIT') setSel('player'); else if (move === 'DOUBLE') { setSel('player'); setDone(true); } else if (move === 'STAND' || move === 'SURRENDER') setDone(true); else if (move === 'SPLIT') { setSplit({ h1: [pc[0]], h2: [pc[1]], a: 0, d1: false, d2: false }); setPc([]); } };
  const handleSM = move => { if (move === 'HIT') setSel('split'); else if (move === 'STAND') { setSplit(p => { const n = { ...p }; n[`d${p.a + 1}`] = true; if (p.a === 0 && !p.d2) n.a = 1; return n; }); } else if (move === 'DOUBLE') { setSel('split'); setSplit(p => { const n = { ...p }; n[`d${p.a + 1}`] = true; if (p.a === 0 && !p.d2) n.a = 1; return n; }); } };
  const hasRes = dc && pc.length >= 2 && !split;
  const result = hasRes ? getResult(pc, dc, rules) : null;
  const total = pc.length > 0 ? hv(pc) : 0;
  const sft = pc.length > 0 && isSoft(pc);
  const winProb = hasRes && dc ? getWinProb(total, dc, sft) : 0;

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(170deg, #040c1e 0%, #0a1d42 35%, #154c9e 100%)', fontFamily: "'Segoe UI',system-ui,sans-serif", color: '#fff', position: 'relative' }}>
      <Stars />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 520, margin: '0 auto', padding: '20px 14px 44px' }}>
        {/* HEADER */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, marginTop: 10 }}>
          <a href="https://doug.gg" target="_blank" rel="noopener noreferrer" style={{ position: 'relative', display: 'flex', justifyContent: 'center', flex: '0 1 auto', textDecoration: 'none' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 320, height: 140, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(255,255,255,0.05) 0%, rgba(21,76,158,0.3) 40%, transparent 70%)', filter: 'blur(20px)', animation: 'auraFloat 4s ease-in-out infinite', pointerEvents: 'none' }} />
            <img src={mainLogo} alt="Blackjack Calculator" style={{ height: 120, position: 'relative', zIndex: 1, animation: 'logoFloat 4s ease-in-out infinite' }} />
          </a>
        </div>

        {/* TABS */}
        <div style={{ position: 'relative', display: 'flex', marginBottom: 18, background: 'rgba(255,255,255,0.05)', borderRadius: 10, padding: 3, border: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ position: 'absolute', top: 3, bottom: 3, width: `calc(${100 / 3}% - 2px)`, left: `calc(${Object.keys(PRESETS).indexOf(preset) * (100 / 3)}% + 1px)`, background: 'rgba(255,255,255,0.12)', borderRadius: 7, transition: 'left 0.3s cubic-bezier(0.4,0,0.2,1)', zIndex: 0 }} />
          {Object.entries(PRESETS).map(([k, v]) => (<button key={k} onClick={() => chP(k)} style={{ flex: 1, padding: '10px 6px', borderRadius: 7, border: 'none', background: 'transparent', color: preset === k ? '#fff' : 'rgba(255,255,255,0.4)', fontSize: 12, fontWeight: preset === k ? 700 : 500, cursor: 'pointer', transition: 'color 0.3s', position: 'relative', zIndex: 1 }}>{v.name}</button>))}
        </div>

        <div style={{ animation: ta ? 'cf .35s ease' : 'none' }}>
          {/* Rules */}
          <button onClick={() => setShowR(!showR)} style={{ width: '100%', padding: '9px 12px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)', color: 'rgba(255,255,255,0.5)', fontSize: 11, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: showR ? 0 : 16 }}><span>{rules.desc}</span><span style={{ fontSize: 9 }}>{showR ? '\u25B2' : '\u25BC'}</span></button>
          {showR && (<div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderTop: 'none', borderRadius: '0 0 8px 8px', padding: '10px 12px', marginBottom: 16, fontSize: 11, color: 'rgba(255,255,255,0.5)', display: 'flex', gap: 12, flexWrap: 'wrap' }}>{[['Dealer Stands S17', 's17'], ['Surrender', 'surr'], ['Double After Split', 'das']].map(([lb, k]) => (<label key={k} style={{ display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer' }}><input type="checkbox" checked={rules[k]} onChange={e => setRules(r => ({ ...r, [k]: e.target.checked }))} style={{ accentColor: '#154c9e' }} /><span>{lb}</span></label>))}</div>)}

          {/* DEALER */}
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 12, marginBottom: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <ShimmerText color="#f87171">Dealer</ShimmerText>
              {dc && <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>Showing: {dc}</span>}
            </div>
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>{dc ? (<div style={{ position: 'relative' }}><CC label={dc} /><button onClick={() => setDc(null)} style={{ position: 'absolute', top: -5, right: -5, width: 16, height: 16, borderRadius: '50%', background: '#ef4444', border: 'none', color: '#fff', fontSize: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&times;</button></div>) : (<CC placeholder onClick={() => setSel('dealer')} />)}<div style={{ width: 54, height: 76, borderRadius: 8, background: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.03), rgba(255,255,255,0.03) 4px, rgba(255,255,255,0.06) 4px, rgba(255,255,255,0.06) 8px)', border: '2px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: 'rgba(255,255,255,0.1)', flexShrink: 0 }}>?</div></div>
          </div>

          {/* PLAYER */}
          {!split && (<div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 12, marginBottom: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <ShimmerText color="#60a5fa">Your Hand</ShimmerText>
              {pc.length > 0 && <span style={{ fontSize: 13, color: '#fff', fontWeight: 700 }}>{total} ({sft ? 'SOFT' : 'HARD'})</span>}
            </div>
            <div style={{ display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>{pc.map((c, i) => (<div key={i} style={{ position: 'relative' }}><CC label={c} /><button onClick={() => rmC(i)} style={{ position: 'absolute', top: -5, right: -5, width: 16, height: 16, borderRadius: '50%', background: '#ef4444', border: 'none', color: '#fff', fontSize: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&times;</button></div>))}{total <= 21 && !done && <CC placeholder onClick={() => setSel('player')} />}</div>
          </div>)}

          {/* WIN PROBABILITY */}
          <WinProb prob={winProb} visible={hasRes && !done && total <= 21} isBlackjack={!split && pc.length === 2 && total === 21} />

          {/* SPLIT */}
          {split && dc && [0, 1].map(idx => {
            const hand = split[`h${idx + 1}`]; const dn = split[`d${idx + 1}`]; const act = split.a === idx && !dn; const t = hand.length > 0 ? hv(hand) : 0; const sf2 = hand.length > 0 && isSoft(hand); const res = hand.length >= 2 ? getResult(hand, dc, rules) : null; return (
              <div key={idx} style={{ background: act ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)', border: `1px solid ${act ? 'rgba(96,165,250,0.3)' : 'rgba(255,255,255,0.08)'}`, borderRadius: 12, padding: 12, marginBottom: 8, transition: 'all .25s' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                  <ShimmerText color={act ? '#60a5fa' : 'rgba(255,255,255,0.4)'}>Hand {idx + 1}{dn ? ' \u2713' : act ? ' (active)' : ''}</ShimmerText>
                  {hand.length > 0 && <span style={{ fontSize: 13, color: '#fff', fontWeight: 700 }}>{t} ({sf2 ? 'SOFT' : 'HARD'})</span>}
                </div>
                <div style={{ display: 'flex', gap: 6, alignItems: 'center', flexWrap: 'wrap' }}>{hand.map((c, i) => <CC key={i} label={c} />)}{act && t <= 21 && hand.length < 2 && <CC placeholder onClick={() => setSel('split')} />}</div>
                {res && act && !dn && t <= 21 && (<div style={{ marginTop: 10, padding: '10px 12px', borderRadius: 8, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', animation: 'fi .2s ease' }}>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 2 }}>Hand: <strong style={{ color: '#fff' }}>{t} ({res.ht})</strong></div>
                  <div style={{ fontSize: 13, marginBottom: 8 }}>Move: {res.m.map((m, i) => <span key={m}>{i > 0 && <span style={{ color: 'rgba(255,255,255,0.4)' }}> if allowed or </span>}<strong style={{ color: MC[m] }}>{m}</strong></span>)}</div>
                  <div style={{ display: 'flex', gap: 6 }}>{res.m.map(m => (<button key={m} onClick={() => handleSM(m)} style={{ padding: '7px 18px', borderRadius: 6, border: '1px solid rgba(255,255,255,0.15)', background: MC[m], color: '#fff', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>{m}</button>))}</div>
                </div>)}
              </div>);
          })}

          {/* RESULT */}
          {hasRes && result && !done ? (
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 16, marginBottom: 12, animation: 'fi .25s ease' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: 12 }}>
                <div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 3 }}>Hand: <strong style={{ color: '#fff' }}>{total} ({result.ht})</strong></div>
                  <div style={{ fontSize: 14 }}>Move: {result.m.map((m, i) => <span key={m}>{i > 0 && <span style={{ color: 'rgba(255,255,255,0.4)' }}> if allowed or </span>}<strong style={{ color: MC[m] }}>{m}</strong></span>)}</div>
                </div>
                {result.m.length > 0 && (<div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', marginBottom: 5 }}>Choose Next Move:</div>
                  <div style={{ display: 'flex', gap: 6 }}>{result.m.map(m => (<button key={m} onClick={() => handleMove(m)} style={{ padding: '8px 20px', borderRadius: 6, border: '1px solid rgba(255,255,255,0.15)', background: MC[m], color: '#fff', fontSize: 12, fontWeight: 600, cursor: 'pointer' }}>{m}</button>))}</div>
                </div>)}
              </div>
            </div>
          ) : hasRes && result && done ? (<div style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 12, padding: '14px 16px', textAlign: 'center', marginBottom: 12, animation: 'fi .25s ease' }}><div style={{ fontSize: 13, color: '#22c55e', fontWeight: 600 }}>Hand complete</div></div>
          ) : (!split && (<div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '22px 16px', textAlign: 'center', marginBottom: 12 }}><div style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>{!dc ? "Select the dealer's face-up card" : pc.length < 2 ? `Select your ${pc.length === 0 ? 'first' : 'second'} card` : ""}</div></div>))}

          {dc === 'A' && pc.length >= 2 && (<div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: 8, padding: '8px 12px', marginBottom: 12, fontSize: 11, color: '#f87171', textAlign: 'center', fontWeight: 500 }}>Always decline insurance</div>)}

          <button onClick={reset} style={{ width: '100%', padding: '12px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.06)', color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s', marginBottom: 20 }} onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,0.12)'} onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.06)'}>Deal Again</button>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: '10px 12px' }}>
            <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', letterSpacing: 1.2, marginBottom: 7, textTransform: 'uppercase', fontWeight: 600 }}>Actions</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 12px', fontSize: 11 }}>
              {[{ c: '#154c9e', l: 'Hit', d: 'Take a card' }, { c: '#22c55e', l: 'Stand', d: 'Keep hand' }, { c: '#8b5cf6', l: 'Double', d: '2x bet + 1 card' }, { c: '#8b5cf6', l: 'Split', d: 'Split pairs' }, { c: '#6b7280', l: 'Surrender', d: 'Forfeit half' }, { c: '#fbbf24', l: 'Blackjack', d: 'Natural 21' }].map(i => (<div key={i.l} style={{ display: 'flex', alignItems: 'center', gap: 6 }}><div style={{ width: 6, height: 6, borderRadius: '50%', background: i.c, flexShrink: 0 }} /><span style={{ color: 'rgba(255,255,255,0.5)' }}><strong style={{ color: i.c }}>{i.l}</strong> {i.d}</span></div>))}
            </div>
          </div>
          <div style={{ textAlign: 'center', fontSize: 9, color: 'rgba(255,255,255,0.15)', lineHeight: 1.5, marginTop: 16 }}>Based on mathematically optimal basic strategy</div>
        </div>
      </div>
      {sel && <Sel title={sel === 'dealer' ? "Dealer's Card" : sel === 'split' ? "Card for Hand " + (split?.a + 1) : "Your Card"} onSelect={selCard} onClose={() => setSel(null)} />}
      
      {/* Added Feature Section */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px', marginTop: '48px', marginBottom: '48px', background: 'transparent' }}>
        <div style={{ fontSize: '1.75rem', fontWeight: 800, fontFamily: "'SK Modernist', 'Inter', 'Segoe UI', system-ui, sans-serif", textAlign: 'center', height: '64px', width: '100%', maxWidth: '600px' }}>
          <Typewriter
            text={["want to play blackjack?", "Click the button below ⬇️"]}
            speed={60}
            initialDelay={500}
            className="text-blue-100"
            waitTime={1500}
            deleteSpeed={75}
            cursorChar={"|"}
            cursorClassName="ml-1 text-blue-400 font-bold"
            loop={true}
          />
        </div>
      </div>

      {/* Disclaimer */}
      <footer style={{
        textAlign: 'center',
        padding: '40px 20px',
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: '13px',
        lineHeight: '1.6',
        marginTop: '40px',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '36px',
          height: '36px',
          border: '1.5px solid #ef4444',
          borderRadius: '50%',
          color: '#ef4444',
          fontWeight: '600',
          fontSize: '14px',
          marginBottom: '16px'
        }}>
          18+
        </div>
        <p style={{ maxWidth: '800px', margin: '0 auto 12px' }}>
          DougGambles is a free rewards platform. We cannot take responsibility for losses or issues related to third-party gaming sites. Please gamble responsibly. If you feel you have a gambling problem, visit <a href="https://www.begambleaware.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#fbbf24', textDecoration: 'underline' }}>GambleAware.org</a>.
        </p>
        <p style={{ opacity: 0.8 }}>
          &copy; 2026 DougGambles. All Rights Reserved.
        </p>
      </footer>

      <style>{`
        @keyframes textShimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
        @keyframes logoFloat{0%,100%{transform:translateY(0);filter:drop-shadow(0 0 15px rgba(255,255,255,0.1)) drop-shadow(0 10px 20px rgba(21,76,158,0.3))}50%{transform:translateY(-8px);filter:drop-shadow(0 0 25px rgba(255,255,255,0.25)) drop-shadow(0 14px 30px rgba(21,76,158,0.5))}}
        @keyframes auraFloat{0%,100%{transform:translate(-50%,-50%);opacity:0.8}50%{transform:translate(-50%, calc(-50% - 8px)) scale(1.05);opacity:1}}
        @keyframes slideIn{from{opacity:0;transform:translateY(15px) scale(0.95)}to{opacity:1;transform:translateY(0) scale(1)}}
        @keyframes fi{from{opacity:0}to{opacity:1}}
        @keyframes si{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
        @keyframes cf{0%{opacity:0;transform:translateY(6px)}100%{opacity:1;transform:translateY(0)}}
        *{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
        button:active{transform:scale(0.97)!important}
        .add-card-btn:hover{border-color:rgba(255,255,255,0.5)!important;background:rgba(255,255,255,0.1)!important;transform:scale(1.08);box-shadow:0 0 15px rgba(96,165,250,0.2)}
      `}</style>
    </div>
  );
}