import { ProjectLogo } from "@/components/atoms/projectLogo";
import { HTMLAttributes } from "react";
import Image from "next/image";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import boleto_icon from '#/public/boleto.png';
import pix_icon from '#/public/pix.png';
import visa_icon from '#/public/visa.png';
import mercadopago_icon from '#/public/mercado_pago.png';
import mastercard_icon from '#/public/master_card.png';

type Props = HTMLAttributes<HTMLElement>;

export default function Footer( props: Props ) {
    const { className, ...rest } = props;

    return (
        <section {...rest} className={`px-4 py-10 bg-secondary flex flex-col gap-y-10 text-base text-primary/70 ${className}`}>
            {/* Coluna 1 */}
            <div>
                <ProjectLogo/>
                <div className="mt-7 flex flex-col gap-y-3">
                    <p>
                        Avenida Brasil, 456, Sala 201, Jardin Paulista, São Paulo, SP, CEP 014115-001
                    </p>
                    <p className="font-medium text-primary">zillusshop@gmail.com</p>
                    <p className="font-medium text-primary">+5562998648742</p>
                    <div className="flex items-center gap-x-3 text-xl">
                        <FaFacebookF/>
                        <FaXTwitter/>
                        <FaInstagram/>
                        <FaYoutube className="text-[25px]"/>
                    </div>
                </div>
            </div>

            {/* Coluna 2 */}
            <div>
                <h3 className="text-2xl font-medium text-primary">Empresa</h3>
                <div className="mt-5 flex flex-col gap-y-3">
                    <p>Sobre nós</p>
                    <p>Carreiras</p>
                    <p>Afiliados</p>
                    <p>Contato</p>
                    <p>Blog</p>
                </div>
            </div>

            {/* Coluna 3 */}
            <div>
                <h3 className="text-2xl font-medium text-primary">Loja</h3>
                <div className="mt-5 flex flex-col gap-y-3">
                    <p>Destaques</p>
                    <p>Acessórios</p>
                    <p>Homens</p>
                    <p>Mulheres</p>
                    <p>Todos os produtos</p>
                </div>
            </div>

            {/* Coluna 4 */}
            <div>
                <h3 className="text-2xl font-medium text-primary">Ajuda</h3>
                <div className="mt-5 flex flex-col gap-y-3">
                    <p>Serviço ao cliente</p>
                    <p>Minha conta</p>
                    <p>Premios</p>
                    <p>Encontre uma loja</p>
                    <p>Termos e privacidade</p>
                </div>
            </div>

            {/* Coluna 5 */}
            <div>
                <h3 className="text-2xl font-medium text-primary">Inscrição</h3>
                <div className="mt-5 flex flex-col gap-y-3">
                    <p>
                        Seja o primeiro a receber nossas promoções, ofertas e muito mais
                    </p>
                    <form className="flex items-center rounded-sm overflow-hidden">
                        <input 
                            type="text" 
                            required 
                            placeholder="Informe um e-mail"
                            className="h-12  px-4 placeholder:text-secondary/60 text-secondary border-none outline-none w-8/12"
                        />
                        <button 
                            type="submit" 
                            className="h-12 bg-accent text-primary font-medium px-3 rounded-tr-sm rounded-br-sm">
                            Enviar
                        </button>
                    </form>
                    <p className="font-medium text-primary">Formas de pagamento</p>
                    <div className="flex items-center gap-x-3">
                        <Image
                            src={pix_icon}
                            alt="Icone de pix"
                            className="w-fit h-9"
                        />
                        <Image
                            src={boleto_icon}
                            alt="Icone de boleto"
                            className="w-fit h-10"
                        />
                        <Image
                            src={visa_icon}
                            alt="Icone de cartão visa"
                            className="w-fit h-12"
                        />
                        <Image
                            src={mercadopago_icon}
                            alt="Icone do mercado pago"
                            className="w-fit h-12"
                        />
                        <Image
                            src={mastercard_icon}
                            alt="Icone da bandeira mastercard"
                            className="w-fit h-12"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};