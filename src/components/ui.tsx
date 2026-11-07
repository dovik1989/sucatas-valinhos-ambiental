import Image from 'next/image';
import {ArrowRight} from 'lucide-react';
import {contactHref} from '@/lib/contact';
export function Button({children,href=contactHref,secondary=false}:{children:React.ReactNode,href?:string,secondary?:boolean}){return <a className={'button '+(secondary?'secondary':'primary')} href={href}>{children}<ArrowRight size={17}/></a>}
export function Photo({name,label,priority=false}:{name:string,label:string,priority?:boolean}){const panoramic=name==='hero-sucatas-valinhos.webp'||name==='cta-sucatas-valinhos.webp';const mobile=panoramic?name.replace('.webp','-mobile.webp'):null;return <div className="photo"><picture>{mobile&&<source media={name==='hero-sucatas-valinhos.webp'?'(max-width: 900px)':'(max-width: 760px)'} srcSet={'/images/'+mobile}/>}<Image src={'/images/'+name} alt={label+' — imagem ilustrativa gerada por IA; não é um registro da empresa'} fill sizes={panoramic?'100vw':'(max-width: 760px) 100vw, (max-width: 1150px) 50vw, 40vw'} priority={priority}/></picture><span>Imagem ilustrativa · IA</span></div>}
export function Brand(){return <span className="brand">SUCATAS<br/>VALINHOS<br/><span>AMBIENTAL</span></span>}
