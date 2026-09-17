'use client';
import JSXStyle from 'styled-jsx/style';
import Link from 'next/link';
import * as Icons from '../components/ui/Icons';

/* /switch-your-thinking/ — the Switch Your Thinking partner page, carried over
   from the Magento site (products/lighting-perth/switch-your-thinking-wa.html)
   and rebuilt in the current design. The wording, the discount rates, the four
   steps and the list of councils are all as they read on the old page. */

const H = 'jsx-syt7c1d40b2';

const DISCOUNTS = [
  {
    rate: '5%',
    title: 'DC ceiling fans',
    body: 'Direct-current ceiling fans — a fraction of the running cost of an AC motor, and quiet with it.',
    href: '/air-flow/',
    cta: 'Browse ceiling fans',
    Icon: Icons.IconSun,
  },
  {
    rate: '10%',
    title: 'LED lighting',
    body: 'The full Greenhse lighting range: downlights, battens, ceiling lights, strip, outdoor and commercial.',
    href: '/led-downlights-perth/',
    cta: 'Browse LED lighting',
    Icon: Icons.IconBolt,
  },
  {
    rate: '10%',
    title: 'Smart solutions',
    body: 'Smart plugs, sockets and switches — control and schedule what you already have from your phone.',
    href: '/smart-lights-perth/',
    cta: 'Browse Smart Life',
    Icon: Icons.IconWifi,
  },
];

const STEPS = [
  {
    n: '01',
    title: 'Pick your products',
    body: 'Browse the range and add what you need to your cart. Prefer to talk it through? Call us on (08) 9297 2969 and we will take the order directly.',
  },
  {
    n: '02',
    title: 'Apply your discount code',
    body: 'On the cart summary, enter the Switch Your Thinking discount code. Your council or the Switch Your Thinking website will have given it to you.',
  },
  {
    n: '03',
    title: 'Click for a quote',
    body: 'That sends a quote request to us. Fill in your contact details and the delivery address so we know where it is going.',
  },
  {
    n: '04',
    title: 'We send the quote back',
    body: 'You get a quote with the discount applied. If it needs delivering, freight charges may apply.',
  },
];

const COUNCILS = [
  'Armadale',
  'Bassendean',
  'Belmont',
  'Cambridge',
  'Canning',
  'Gosnells',
  'Kalamunda',
  'Melville',
  'Mundaring',
  'Perth',
  'Serpentine Jarrahdale',
  'South Perth',
  'Stirling',
  'Swan',
  'Victoria Park',
  'Vincent',
];

export default function Default() {
  return (
    <main className={`${H} home syt`}>
      {/* ---- hero ---- */}
      <section className={`${H} syt-hero`}>
        <div className={`${H} container syt-hero__inner`}>
          <div className={`${H} syt-hero__copy`}>
            <span className={`${H} eyebrow`}>Partner program</span>
            <h1 className={`${H} syt-hero__title`}>Switch Your Thinking</h1>
            <p className={`${H} syt-hero__lead`}>
              Greenhse has partnered with Switch Your Thinking to give residents, council staff and businesses inside
              participating council boundaries a discount on our household and commercial LED lighting, DC fans and
              smart plugs and switches — so you can cut your energy use and your running costs at the same time.
            </p>
            <div className={`${H} syt-hero__actions`}>
              <a className="btn btn-dark" href="#how">
                {'How to get your discount '}
                <span aria-hidden="true" className={H}>
                  →
                </span>
              </a>
              <a
                className="btn btn-ghost"
                href="https://www.switchyourthinking.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Switch Your Thinking site
              </a>
            </div>
          </div>
          <div className={`${H} syt-hero__art`}>
            <img
              src="/images/syt/affiliate-banner.webp"
              alt="Switch Your Thinking 2025/2026 Affiliate Business"
              width="1321"
              height="488"
              className={H}
            />
          </div>
        </div>
      </section>

      {/* ---- the three discounts ---- */}
      <section className={`${H} syt-rates`}>
        <div className={`${H} container`}>
          <span className={`${H} eyebrow`}>What you save</span>
          <h2 className={`${H} syt-h2`}>Your Switch Your Thinking discount</h2>
          <div className={`${H} syt-rates__grid`}>
            {DISCOUNTS.map((d) => (
              <article key={d.title} className={`${H} syt-card`}>
                <span className={`${H} syt-card__icon`} aria-hidden="true">
                  <d.Icon />
                </span>
                <span className={`${H} syt-card__rate`}>{d.rate}</span>
                <h3 className={`${H} syt-card__title`}>{d.title}</h3>
                <p className={`${H} syt-card__body`}>{d.body}</p>
                <Link href={d.href} className={`${H} syt-card__link`}>
                  {d.cta}
                  <span aria-hidden="true" className={H}>
                    {' →'}
                  </span>
                </Link>
              </article>
            ))}
          </div>
          <p className={`${H} syt-fine`}>
            Discounts apply to Greenhse&rsquo;s own products only (Brilliant ceiling fans excepted), on full priced
            products, and no further discounts apply. Accessories are not included.
          </p>
        </div>
      </section>

      {/* ---- how to claim ---- */}
      <section id="how" className={`${H} syt-how`}>
        <div className={`${H} container`}>
          <span className={`${H} eyebrow`}>Four steps</span>
          <h2 className={`${H} syt-h2`}>How do I get my discount?</h2>
          <ol className={`${H} syt-steps`}>
            {STEPS.map((s) => (
              <li key={s.n} className={`${H} syt-step`}>
                <span className={`${H} syt-step__n`}>{s.n}</span>
                <h3 className={`${H} syt-step__title`}>{s.title}</h3>
                <p className={`${H} syt-step__body`}>{s.body}</p>
              </li>
            ))}
          </ol>
          <div className={`${H} syt-note`}>
            <Icons.IconPin aria-hidden="true" />
            <p className={H}>
              Some delivery constraints apply, and a few products can only be collected from our Ellenbrook warehouse at
              5/1 Locke Lane. We will tell you which on your quote.
            </p>
          </div>
        </div>
      </section>

      {/* ---- who is eligible ---- */}
      <section className={`${H} syt-who`}>
        <div className={`${H} container syt-who__inner`}>
          <div className={`${H} syt-who__copy`}>
            <span className={`${H} eyebrow`}>Who can use it</span>
            <h2 className={`${H} syt-h2`}>Sixteen councils across Perth</h2>
            <p className={`${H} syt-who__body`}>
              Switch Your Thinking is an initiative of the City of Armadale, the City of Gosnells and the Shire of
              Serpentine Jarrahdale, who have worked together as the South East Regional Energy Group since 2002. Its
              Rewards for Residents and Rewards for Business programs give residents and businesses inside member
              councils discounts on a wide range of sustainable goods and services.
            </p>
            <p className={`${H} syt-who__body`}>
              If your home or business sits inside one of these local government areas, the Greenhse discount is yours
              to use.
            </p>
          </div>
          <ul className={`${H} syt-chips`}>
            {COUNCILS.map((c) => (
              <li key={c} className={`${H} syt-chip`}>
                <Icons.IconCheck aria-hidden="true" />
                <span className={H}>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- next steps ---- */}
      <section className={`${H} syt-next`}>
        <div className={`${H} container syt-next__inner`}>
          <div className={H}>
            <h2 className={`${H} syt-next__title`}>Not sure what you need?</h2>
            <p className={`${H} syt-next__body`}>
              Send us your floor plan and we will lay the lighting out for you, or read up first — the blog covers
              everything from low glare downlights to strip lighting.
            </p>
          </div>
          <div className={`${H} syt-next__actions`}>
            <Link className="btn btn-dark" href="/layout-app/">
              Plan your lighting
            </Link>
            <Link className="btn btn-ghost" href="/blog/">
              Read the blog
            </Link>
            <Link className="btn btn-ghost" href="/contact/">
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      <JSXStyle id="syt7c1d40b2">
        {`
.syt.${H} { padding-bottom: 0 }

.syt-hero.${H} { background: var(--bg-raised); border-bottom: 1px solid var(--line); padding: 44px 0 52px }
.syt-hero__inner.${H} { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,0.92fr); align-items: center; gap: 48px }
.syt-hero__title.${H} { letter-spacing: -.03em; margin: 6px 0 18px; font-size: max(32px, min(4vw, 50px)); font-weight: 600; line-height: 1.08 }
.syt-hero__lead.${H} { color: var(--ink-soft); max-width: 56ch; margin: 0 0 26px; font-size: 16px; line-height: 1.7 }
.syt-hero__actions.${H} { display: flex; flex-wrap: wrap; gap: 12px }
.syt-hero__art.${H} { border: 1px solid var(--line); border-radius: var(--radius-lg); background: #fff; overflow: hidden }
.syt-hero__art.${H} img { width: 100%; height: auto; display: block }

.syt-h2.${H} { letter-spacing: -.02em; margin: 6px 0 28px; font-size: max(24px, min(2.6vw, 32px)); font-weight: 600; line-height: 1.15 }

.syt-rates.${H} { padding: 66px 0 }
.syt-rates__grid.${H} { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 18px }
.syt-card.${H} { border: 1px solid var(--line); border-radius: var(--radius-lg); background: var(--bg-plate); padding: 26px 26px 24px; display: flex; flex-direction: column }
.syt-card__icon.${H} { color: var(--green-bright); display: grid; place-items: center; width: 40px; height: 40px; border: 1px solid var(--line); border-radius: var(--radius-sm); margin-bottom: 18px }
.syt-card__rate.${H} { font-family: var(--font-display); letter-spacing: -.03em; color: var(--green); font-size: 44px; font-weight: 600; line-height: 1 }
.syt-card__title.${H} { letter-spacing: -.01em; margin: 10px 0 8px; font-size: 18px; font-weight: 600 }
.syt-card__body.${H} { color: var(--ink-soft); margin: 0 0 20px; font-size: 14px; line-height: 1.65; flex: 1 }
.syt-card__link.${H} { color: var(--ink); text-underline-offset: 2px; align-items: center; gap: 6px; font-size: 13.5px; font-weight: 600; text-decoration: underline; transition: gap .16s, color .16s; display: inline-flex }
.syt-card__link.${H}:hover { color: var(--green-hover); gap: 11px }
.syt-fine.${H} { color: var(--ink-muted); border-top: 1px solid var(--line); max-width: 92ch; margin: 28px 0 0; padding-top: 18px; font-size: 13px; line-height: 1.65 }

.syt-how.${H} { background: var(--bg-card); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); padding: 66px 0 }
.syt-steps.${H} { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 18px; margin: 0; padding: 0; list-style: none; counter-reset: none }
.syt-step.${H} { border-top: 2px solid var(--ink); padding-top: 16px }
.syt-step__n.${H} { font-family: var(--font-mono); letter-spacing: .12em; color: var(--green); font-size: 12px; font-weight: 500 }
.syt-step__title.${H} { letter-spacing: -.01em; margin: 8px 0 8px; font-size: 16px; font-weight: 600 }
.syt-step__body.${H} { color: var(--ink-soft); margin: 0; font-size: 14px; line-height: 1.65 }
.syt-note.${H} { border: 1px solid var(--line-strong); border-radius: var(--radius-md); background: var(--bg-plate); align-items: flex-start; gap: 12px; margin-top: 30px; padding: 16px 18px; display: flex }
.syt-note.${H} svg { color: var(--green); flex: none; margin-top: 2px }
.syt-note.${H} p { color: var(--ink-soft); margin: 0; font-size: 14px; line-height: 1.6 }

.syt-who.${H} { padding: 66px 0 }
.syt-who__inner.${H} { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,0.9fr); align-items: start; gap: 48px }
.syt-who__body.${H} { color: var(--ink-soft); margin: 0 0 16px; font-size: 15px; line-height: 1.7 }
.syt-who__body.${H}:last-child { margin-bottom: 0 }
.syt-chips.${H} { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 10px 18px; margin: 0; padding: 0; list-style: none }
.syt-chip.${H} { color: var(--ink-soft); border-bottom: 1px solid var(--line); align-items: center; gap: 10px; padding-bottom: 9px; font-size: 14px; display: flex }
.syt-chip.${H} svg { color: var(--green-bright); flex: none }

.syt-next.${H} { background: var(--bg-tile); color: #fff; padding: 56px 0 }
.syt-next__inner.${H} { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 28px }
.syt-next__title.${H} { letter-spacing: -.02em; margin: 0 0 10px; font-size: 26px; font-weight: 600 }
.syt-next__body.${H} { color: #ffffff9e; max-width: 54ch; margin: 0; font-size: 14.5px; line-height: 1.7 }
.syt-next__actions.${H} { display: flex; flex-wrap: wrap; gap: 12px }
.syt-next.${H} .btn-dark { background: var(--green); color: #04120b }
.syt-next.${H} .btn-dark:hover { background: var(--green-hover) }
.syt-next.${H} .btn-ghost { border-color: #ffffff3d; color: #fff }
.syt-next.${H} .btn-ghost:hover { border-color: #fff }

@media (max-width: 1000px) {
  .syt-hero__inner.${H}, .syt-who__inner.${H} { grid-template-columns: 1fr; gap: 32px }
  .syt-rates__grid.${H} { grid-template-columns: repeat(2, minmax(0,1fr)) }
  .syt-steps.${H} { grid-template-columns: repeat(2, minmax(0,1fr)); gap: 24px 18px }
}
@media (max-width: 640px) {
  .syt-rates__grid.${H}, .syt-steps.${H}, .syt-chips.${H} { grid-template-columns: 1fr }
  .syt-rates.${H}, .syt-how.${H}, .syt-who.${H} { padding: 46px 0 }
  .syt-next__inner.${H} { flex-direction: column; align-items: flex-start }
}
        `}
      </JSXStyle>
    </main>
  );
}
