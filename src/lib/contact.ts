const number=(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER||'').replace(/[^0-9]/g,'');
export const hasWhatsApp=/^55[1-9][0-9]{9,10}$/.test(number);
export const contactHref=hasWhatsApp?'https://wa.me/'+number+'?text='+encodeURIComponent('Olá! Vim pelo site da Sucatas Valinhos Ambiental e gostaria de solicitar um orçamento.'):'#contato';