import type {Metadata} from 'next';import localFont from 'next/font/local';import './globals.css';
const font=localFont({src:[{path:'../../fonts/regular.ttf',weight:'400'},{path:'../../fonts/semibold.ttf',weight:'600'}],variable:'--font-sans',display:'swap'});
const title='Sucatas Valinhos Ambiental | Coleta e Reciclagem em Valinhos';const description='Conheça a Sucatas Valinhos Ambiental. Soluções em coleta de recicláveis, comércio de sucatas, plásticos e gerenciamento de resíduos em Valinhos e região.';
const url=process.env.NEXT_PUBLIC_SITE_URL;
export const metadata:Metadata={title,description,openGraph:{title,description,locale:'pt_BR',type:'website'},...(url?{metadataBase:new URL(url),alternates:{canonical:'/'}}:{})};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="pt-BR" className={font.variable}><body>{children}</body></html>}