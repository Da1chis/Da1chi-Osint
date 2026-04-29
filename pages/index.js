import { useState, useMemo } from 'react';
import Head from 'next/head';
import { categories, stats } from '../data/tools';

export default function Home() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // grid | list

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return categories
      .filter(cat => activeCategory === 'all' || cat.id === activeCategory)
      .map(cat => ({
        ...cat,
        tools: cat.tools.filter(t =>
          !q || t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q) || cat.label.toLowerCase().includes(q)
        )
      }))
      .filter(cat => cat.tools.length > 0);
  }, [search, activeCategory]);

  const totalVisible = filtered.reduce((s, c) => s + c.tools.length, 0);

  return (
    <>
      <Head>
        <title>OSINT Portal — Intelligence Tools Directory</title>
        <meta name="description" content="Curated directory of 120+ OSINT tools for researchers, investigators and security professionals." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🛰</text></svg>" />
      </Head>

      <div style={S.page}>
        {/* ─── HEADER ─── */}
        <header style={S.header}>
          <div style={S.headerInner}>
            <div style={S.logo}>
              <div style={S.logoMark}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                  <path d="M11 8v6M8 11h6"/>
                </svg>
              </div>
              <span style={S.logoText}>OSINT<span style={S.logoAccent}>PORTAL</span></span>
            </div>
            <div style={S.headerRight}>
              <a href="https://github.com/jivoi/awesome-osint" target="_blank" rel="noopener noreferrer" style={S.ghLink}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                awesome-osint
              </a>
              <span style={S.liveBadge}><span style={S.liveDot}></span>LIVE</span>
            </div>
          </div>
        </header>

        <main style={S.main}>
          {/* ─── HERO ─── */}
          <section style={S.hero}>
            <div style={S.heroEyebrow}>
              <span style={S.eyebrowLine}></span>
              OPEN SOURCE INTELLIGENCE
              <span style={S.eyebrowLine}></span>
            </div>
            <h1 style={S.heroTitle}>
              The Complete
              <br />
              <span style={S.heroGrad}>OSINT Toolkit</span>
            </h1>
            <p style={S.heroDesc}>
              {stats.tools}+ curated tools for researchers, investigators and security professionals. From phone lookup to satellite imagery — everything in one place.
            </p>

            {/* Stats bar */}
            <div style={S.statsBar}>
              {[
                { n: `${stats.tools}+`, l: 'Tools' },
                { n: `${categories.length}`, l: 'Categories' },
                { n: 'Free', l: 'Open Access' },
                { n: '2025', l: 'Updated' },
              ].map((s, i) => (
                <div key={i} style={S.statItem}>
                  <div style={S.statNum}>{s.n}</div>
                  <div style={S.statLabel}>{s.l}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ─── SEARCH + FILTERS ─── */}
          <div style={S.controlsBar}>
            <div style={S.searchWrap}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={S.searchIcon}>
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search tools, categories..."
                style={S.searchInput}
              />
              {search && (
                <button onClick={() => setSearch('')} style={S.searchClear}>✕</button>
              )}
            </div>
            <div style={S.viewToggle}>
              {['grid', 'list'].map(m => (
                <button key={m} onClick={() => setViewMode(m)} style={{...S.viewBtn, ...(viewMode === m ? S.viewBtnActive : {})}}>
                  {m === 'grid' ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ─── CATEGORY CHIPS ─── */}
          <div style={S.chips}>
            <button
              onClick={() => setActiveCategory('all')}
              style={{...S.chip, ...(activeCategory === 'all' ? S.chipActive : {})}}
            >
              ALL
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(activeCategory === cat.id ? 'all' : cat.id)}
                style={{
                  ...S.chip,
                  ...(activeCategory === cat.id ? { ...S.chipActive, borderColor: cat.color, color: cat.color, background: `${cat.color}15` } : {})
                }}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>

          {/* results count */}
          {search && (
            <div style={S.resultCount}>
              Found <span style={{ color: 'var(--accent)' }}>{totalVisible}</span> tools for "{search}"
            </div>
          )}

          {/* ─── CATEGORIES + TOOLS ─── */}
          <div style={S.content}>
            {filtered.length === 0 ? (
              <div style={S.empty}>
                <div style={S.emptyIcon}>🔭</div>
                <div style={S.emptyText}>No tools found for "{search}"</div>
                <button onClick={() => setSearch('')} style={S.emptyBtn}>Clear search</button>
              </div>
            ) : (
              filtered.map((cat, ci) => (
                <section key={cat.id} style={{ ...S.catSection, animationDelay: `${ci * 0.05}s` }}>
                  {/* Category header */}
                  <div style={S.catHeader}>
                    <div style={{ ...S.catDot, background: cat.color, boxShadow: `0 0 12px ${cat.color}60` }}></div>
                    <span style={{ ...S.catIcon }}>{cat.icon}</span>
                    <div>
                      <div style={S.catTitle}>{cat.label}</div>
                      <div style={S.catDesc}>{cat.desc}</div>
                    </div>
                    <div style={S.catCount}>{cat.tools.length}</div>
                  </div>

                  {/* Tools grid or list */}
                  <div style={viewMode === 'grid' ? S.toolsGrid : S.toolsList}>
                    {cat.tools.map((tool, ti) => (
                      <a
                        key={ti}
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ ...S.toolCard, ...(viewMode === 'list' ? S.toolCardList : {}), animationDelay: `${ti * 0.03}s` }}
                        onMouseEnter={e => {
                          e.currentTarget.style.borderColor = cat.color;
                          e.currentTarget.style.background = `${cat.color}08`;
                          e.currentTarget.style.transform = viewMode === 'grid' ? 'translateY(-2px)' : 'translateX(3px)';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.borderColor = 'var(--border)';
                          e.currentTarget.style.background = 'var(--panel)';
                          e.currentTarget.style.transform = 'none';
                        }}
                      >
                        <div style={S.toolTop}>
                          <div style={{ ...S.toolDot, background: cat.color }}></div>
                          <span style={S.toolName}>{tool.name}</span>
                          <svg style={S.toolArrow} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 17L17 7M17 7H7M17 7v10"/>
                          </svg>
                        </div>
                        <div style={S.toolDesc}>{tool.desc}</div>
                        <div style={S.toolUrl}>{tool.url.replace(/^https?:\/\//, '').split('/')[0]}</div>
                      </a>
                    ))}
                  </div>
                </section>
              ))
            )}
          </div>
        </main>

        {/* ─── FOOTER ─── */}
        <footer style={S.footer}>
          <div style={S.footerInner}>
            <div style={S.footerLogo}>OSINT<span style={{ color: 'var(--accent)' }}>PORTAL</span></div>
            <div style={S.footerText}>
              Curated from <a href="https://github.com/jivoi/awesome-osint" target="_blank" rel="noopener noreferrer" style={S.footerLink}>jivoi/awesome-osint</a> · For educational and research use only
            </div>
            <div style={S.footerWarn}>⚠ Always respect applicable laws and privacy rights when conducting OSINT research.</div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        a { text-decoration: none; }
        input:focus { outline: none; border-color: var(--accent) !important; box-shadow: 0 0 0 2px rgba(0,212,255,0.15) !important; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}

const S = {
  page: { minHeight: '100vh', display: 'flex', flexDirection: 'column' },

  /* Header */
  header: {
    borderBottom: '1px solid var(--border)',
    background: 'rgba(4,4,7,0.92)',
    backdropFilter: 'blur(20px)',
    position: 'sticky', top: 0, zIndex: 100,
  },
  headerInner: {
    maxWidth: '1200px', margin: '0 auto', padding: '14px 24px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  logo: { display: 'flex', alignItems: 'center', gap: '10px' },
  logoMark: {
    width: '34px', height: '34px', borderRadius: '8px',
    background: 'linear-gradient(135deg, rgba(0,212,255,0.25), rgba(123,47,255,0.25))',
    border: '1px solid rgba(0,212,255,0.3)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: 'var(--accent)',
  },
  logoText: {
    fontFamily: "'Syne', sans-serif", fontWeight: '900', fontSize: '16px',
    letterSpacing: '3px', color: 'var(--text)',
  },
  logoAccent: { color: 'var(--accent)' },
  headerRight: { display: 'flex', alignItems: 'center', gap: '12px' },
  ghLink: {
    display: 'flex', alignItems: 'center', gap: '6px',
    fontFamily: "'Space Mono', monospace", fontSize: '11px',
    color: 'var(--text2)', padding: '6px 12px',
    border: '1px solid var(--border)', borderRadius: '8px',
    background: 'var(--panel)', transition: 'color 0.2s, border-color 0.2s',
  },
  liveBadge: {
    display: 'flex', alignItems: 'center', gap: '5px',
    fontFamily: "'Space Mono', monospace", fontSize: '10px',
    color: 'var(--success)', padding: '5px 10px',
    border: '1px solid rgba(0,255,157,0.3)', borderRadius: '20px',
    background: 'rgba(0,255,157,0.06)',
  },
  liveDot: {
    display: 'inline-block', width: '6px', height: '6px',
    borderRadius: '50%', background: 'var(--success)',
    animation: 'pulse 1.5s ease-in-out infinite',
  },

  /* Hero */
  main: { flex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 24px 60px', width: '100%' },
  hero: {
    textAlign: 'center', padding: '70px 0 48px',
    animation: 'fadeUp 0.6s ease-out both',
  },
  heroEyebrow: {
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px',
    fontFamily: "'Space Mono', monospace", fontSize: '11px', letterSpacing: '4px',
    color: 'var(--text3)', marginBottom: '20px',
  },
  eyebrowLine: {
    display: 'block', width: '40px', height: '1px', background: 'var(--border2)',
  },
  heroTitle: {
    fontFamily: "'Syne', sans-serif", fontWeight: '900',
    fontSize: 'clamp(38px, 6vw, 72px)', lineHeight: '1.08',
    letterSpacing: '-2px', color: 'var(--text)', marginBottom: '20px',
  },
  heroGrad: {
    background: 'linear-gradient(90deg, var(--accent) 0%, var(--accent2) 50%, var(--accent3) 100%)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
  },
  heroDesc: {
    color: 'var(--text2)', fontSize: '16px', lineHeight: '1.7',
    maxWidth: '520px', margin: '0 auto 36px',
  },

  /* Stats */
  statsBar: {
    display: 'inline-flex', gap: '2px',
    background: 'var(--panel)', border: '1px solid var(--border)',
    borderRadius: '14px', overflow: 'hidden',
  },
  statItem: {
    padding: '14px 28px', textAlign: 'center',
    borderRight: '1px solid var(--border)',
  },
  statNum: {
    fontFamily: "'Syne', sans-serif", fontWeight: '800',
    fontSize: '20px', color: 'var(--accent)', marginBottom: '2px',
  },
  statLabel: {
    fontFamily: "'Space Mono', monospace", fontSize: '10px',
    color: 'var(--text3)', letterSpacing: '1px', textTransform: 'uppercase',
  },

  /* Controls */
  controlsBar: {
    display: 'flex', gap: '12px', alignItems: 'center',
    marginBottom: '16px',
    animation: 'fadeUp 0.6s ease-out 0.1s both',
  },
  searchWrap: {
    flex: 1, position: 'relative', display: 'flex', alignItems: 'center',
  },
  searchIcon: {
    position: 'absolute', left: '14px', color: 'var(--text3)', pointerEvents: 'none',
  },
  searchInput: {
    width: '100%',
    background: 'var(--panel)', border: '1px solid var(--border)',
    borderRadius: '10px', padding: '12px 40px 12px 42px',
    color: 'var(--text)', fontFamily: "'Space Mono', monospace",
    fontSize: '13px', transition: 'border-color 0.2s, box-shadow 0.2s',
  },
  searchClear: {
    position: 'absolute', right: '12px',
    background: 'none', border: 'none', color: 'var(--text3)',
    cursor: 'pointer', fontSize: '12px', padding: '4px',
  },
  viewToggle: { display: 'flex', gap: '4px' },
  viewBtn: {
    width: '36px', height: '36px', borderRadius: '8px',
    background: 'var(--panel)', border: '1px solid var(--border)',
    color: 'var(--text3)', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'background 0.2s, color 0.2s, border-color 0.2s',
  },
  viewBtnActive: {
    background: 'rgba(0,212,255,0.12)', borderColor: 'rgba(0,212,255,0.4)', color: 'var(--accent)',
  },

  /* Category chips */
  chips: {
    display: 'flex', flexWrap: 'wrap', gap: '6px',
    marginBottom: '32px',
    animation: 'fadeUp 0.6s ease-out 0.15s both',
  },
  chip: {
    fontFamily: "'Space Mono', monospace", fontSize: '11px',
    padding: '6px 14px', borderRadius: '20px',
    background: 'var(--panel)', border: '1px solid var(--border)',
    color: 'var(--text2)', cursor: 'pointer',
    transition: 'all 0.18s', whiteSpace: 'nowrap',
  },
  chipActive: {
    borderColor: 'var(--accent)', color: 'var(--accent)',
    background: 'rgba(0,212,255,0.1)',
  },

  resultCount: {
    fontFamily: "'Space Mono', monospace", fontSize: '12px',
    color: 'var(--text3)', marginBottom: '20px',
  },

  /* Content */
  content: { display: 'flex', flexDirection: 'column', gap: '40px' },

  /* Category section */
  catSection: {
    animation: 'fadeUp 0.5s ease-out both',
  },
  catHeader: {
    display: 'flex', alignItems: 'center', gap: '12px',
    marginBottom: '16px', padding: '0 0 12px',
    borderBottom: '1px solid var(--border)',
  },
  catDot: {
    width: '8px', height: '8px', borderRadius: '50%', flexShrink: 0,
  },
  catIcon: { fontSize: '18px' },
  catTitle: {
    fontFamily: "'Syne', sans-serif", fontWeight: '700',
    fontSize: '15px', color: 'var(--text)',
  },
  catDesc: {
    fontFamily: "'Space Mono', monospace", fontSize: '10px',
    color: 'var(--text3)', marginTop: '2px',
  },
  catCount: {
    marginLeft: 'auto', fontFamily: "'Space Mono', monospace",
    fontSize: '11px', color: 'var(--text3)',
    background: 'var(--panel)', border: '1px solid var(--border)',
    borderRadius: '20px', padding: '3px 10px',
  },

  /* Tools grid */
  toolsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '10px',
  },
  toolsList: {
    display: 'flex', flexDirection: 'column', gap: '6px',
  },

  /* Tool card */
  toolCard: {
    display: 'block',
    background: 'var(--panel)', border: '1px solid var(--border)',
    borderRadius: '10px', padding: '14px 16px',
    cursor: 'pointer',
    transition: 'all 0.18s',
    animation: 'fadeUp 0.4s ease-out both',
  },
  toolCardList: {
    display: 'flex', alignItems: 'center', gap: '12px',
    padding: '10px 16px',
  },
  toolTop: {
    display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '7px',
  },
  toolDot: { width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0 },
  toolName: {
    fontFamily: "'Syne', sans-serif", fontWeight: '700',
    fontSize: '13px', color: 'var(--text)', flex: 1,
  },
  toolArrow: { color: 'var(--text3)', flexShrink: 0 },
  toolDesc: {
    fontFamily: "'Space Mono', monospace", fontSize: '11px',
    color: 'var(--text2)', lineHeight: '1.5', marginBottom: '8px',
  },
  toolUrl: {
    fontFamily: "'Space Mono', monospace", fontSize: '10px',
    color: 'var(--text3)',
  },

  /* Empty state */
  empty: {
    textAlign: 'center', padding: '80px 24px',
  },
  emptyIcon: { fontSize: '48px', marginBottom: '16px' },
  emptyText: { color: 'var(--text2)', marginBottom: '20px', fontSize: '15px' },
  emptyBtn: {
    fontFamily: "'Space Mono', monospace", fontSize: '12px',
    padding: '10px 24px', borderRadius: '8px',
    background: 'var(--panel)', border: '1px solid var(--border2)',
    color: 'var(--accent)', cursor: 'pointer',
  },

  /* Footer */
  footer: { borderTop: '1px solid var(--border)', padding: '28px 24px' },
  footerInner: {
    maxWidth: '1200px', margin: '0 auto', textAlign: 'center',
  },
  footerLogo: {
    fontFamily: "'Syne', sans-serif", fontWeight: '900',
    fontSize: '14px', letterSpacing: '3px',
    color: 'var(--text3)', marginBottom: '8px',
  },
  footerText: {
    fontFamily: "'Space Mono', monospace", fontSize: '11px',
    color: 'var(--text3)', marginBottom: '6px',
  },
  footerLink: { color: 'var(--accent)' },
  footerWarn: {
    fontFamily: "'Space Mono', monospace", fontSize: '10px',
    color: 'rgba(255,184,0,0.5)',
  },
};
