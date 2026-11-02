import { site } from '../data/site';

// Entradas em cascata (uma vez por elemento)
const els = document.querySelectorAll<HTMLElement>('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  );
  els.forEach((el) => io.observe(el));
} else {
  els.forEach((el) => el.classList.add('in'));
}

// Status "aberto agora" no fuso de São Paulo
const h = site.hours;
const parts = new Intl.DateTimeFormat('en-US', {
  timeZone: h.timeZone, weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23',
}).formatToParts(new Date());
const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
const dayIdx = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
const hour = Number(get('hour')) + Number(get('minute')) / 60;
const names = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
const openDays: readonly number[] = h.openDays;
const open = openDays.includes(dayIdx) && hour >= h.open && hour < h.close;
let msg: string;
if (open) {
  msg = `Aberto agora · atendimento até às ${h.close}h`;
} else {
  let d = dayIdx, add = 0;
  if (!(openDays.includes(d) && hour < h.open)) {
    do { d = (d + 1) % 7; add++; } while (!openDays.includes(d));
  }
  msg = add === 0 ? `Fechado agora · abre hoje às ${h.open}h` : `Fechado agora · abre ${names[d]} às ${h.open}h`;
}
document.querySelectorAll<HTMLElement>('[data-status]').forEach((el) => {
  el.textContent = msg;
  el.dataset.open = String(open);
});

// Mapa só sob clique (sem terceiros no carregamento)
document.querySelectorAll<HTMLButtonElement>('[data-map]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const box = btn.closest<HTMLElement>('.mapbox');
    if (!box) return;
    const f = document.createElement('iframe');
    f.src = btn.dataset.map!;
    f.title = 'Mapa: localização do escritório da Rip Curl Brasil';
    f.loading = 'lazy';
    f.referrerPolicy = 'no-referrer';
    box.replaceChildren(f);
    box.classList.add('mapbox--live');
  });
});
