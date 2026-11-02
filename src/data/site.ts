// Fonte única dos dados do negócio. Origem: ficha pública do Google Maps (print de 02/11/2026).
// Itens [CONFIRMAR] estão listados em docs/spec/rip-curl-brasil.md §3.
export const site = {
  name: 'Rip Curl Brasil',
  legalNote: 'Rip Curl é marca registrada de seus titulares.',
  phoneDisplay: '(11) 97591-8915',
  phoneE164: '+5511975918915',
  whatsappNumber: '5511975918915',
  whatsappMessage:
    'Olá! Vim pelo site da Rip Curl Brasil e gostaria de falar com o escritório.',
  address: {
    street: 'Av. Humberto de Alencar Castelo Branco, 1260',
    district: 'Independência',
    city: 'São Bernardo do Campo',
    region: 'SP',
    postalCode: '09850-300',
  },
  instagram: 'https://www.instagram.com/ripcurl_brasil',
  instagramHandle: '@ripcurl_brasil',
  // Dias 0=domingo … 6=sábado. Abertos: segunda a quinta, 08:00–17:00.
  hours: { openDays: [1, 2, 3, 4], open: 8, close: 17, timeZone: 'America/Sao_Paulo' },
  hoursRows: [
    { day: 'Segunda a quinta', value: '08:00–17:00' },
    { day: 'Sexta', value: 'Fechado' },
    { day: 'Sábado', value: 'Fechado' },
    { day: 'Domingo', value: 'Fechado' },
  ],
  holidayNote: 'Em feriados o horário pode mudar.',
} as const;

const a = site.address;
export const addressLine = `${a.street} — ${a.district}, ${a.city} — ${a.region}, ${a.postalCode}`;
export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;
export const telUrl = `tel:${site.phoneE164}`;
export const mapsQuery = encodeURIComponent(`Rip Curl Brasil, ${addressLine}`);
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
export const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

export const faq = [
  {
    q: 'O endereço de São Bernardo do Campo é uma loja?',
    a: 'Na ficha pública do Google, este endereço está cadastrado como escritório da empresa. Antes de ir até lá, fale com a gente pelo WhatsApp.',
  },
  {
    q: 'Qual é o horário de atendimento?',
    a: 'De segunda a quinta, das 8h às 17h. De sexta a domingo o escritório está fechado. Em feriados o horário pode mudar.',
  },
  {
    q: 'Como falo com o escritório?',
    a: `Pelo WhatsApp ou por ligação, no número ${site.phoneDisplay}.`,
  },
  {
    q: 'Quero comprar produtos Rip Curl. O que faço?',
    a: 'Envie sua dúvida pelo WhatsApp em horário de atendimento.',
  },
  {
    q: 'Tenho uma loja e quero falar sobre parceria.',
    a: 'Chame pelo WhatsApp e conte um pouco sobre o seu negócio.',
  },
  {
    q: 'A Rip Curl é uma marca brasileira?',
    a: 'Não. A Rip Curl nasceu em 1969 em Torquay, na Austrália, fundada pelos amigos surfistas Doug Warbrick e Brian Singer.',
  },
] as const;
