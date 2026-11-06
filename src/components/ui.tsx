import Image from 'next/image';
import {ArrowRight} from 'lucide-react';
import {contactHref} from '@/lib/contact';
export function Button({children,href=contactHref,secondary=false}:{children:React.ReactNode,href?:string,secondary?:boolean}){return <a className={'button '+(secondary?'secondary':'primary')} href={href}>{children}<ArrowRight size={17}/></a>}
export function Photo({name,label,priority=false}:{name:string,label:string,priority?:boolean}){return <div className="photo"><Image src={'/images/'+name} alt={label+' — espaço reservado para fotografia real da empresa'} fill sizes="(max-width: 700px) 100vw, 50vw" priority={priority}/><span>Fotografia da empresa · a inserir</span></div>}
export function Brand(){return <span className="brand">SUCATAS<br/>VALINHOS<br/><span>AMBIENTAL</span></span>}