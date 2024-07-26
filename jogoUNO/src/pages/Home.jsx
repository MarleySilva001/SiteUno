import React from "react";
import Container from "../components/layout/Container";
import Banner from "/BannerUno.jpg";
import Baralho from "/BaralhoUno.png";
import BuyBox from "../components/layout/BuyBox";

export default function Home() {
    return (
        <>
        <Container >
            <article>
                <section>
                    <h1>UNO: O jogo da galera!</h1>
                    <img src={Banner} alt="BannerUno" />
                    <p>
                        Procurando uma maneira emocionante de reunir amigos e familiares?
                        Conheça UNO, o jogo de cartas que garante horas de diversão e risadas!
                        nele é possivel jogar com até 10 pessoas alem de ser um jogo para
                        pessoas de qualquer idade.
                    </p>
                    <p>
                        Nesse site é possivel compra o jogo, mas além disso o usuario pode
                        aprender a origem e evolução do baralho ao longo do tempo, as regras do jogo como também as cartas disponiveis e algumas 
                        dicas para iniciantes 
                    </p>
                </section>
                <section>
                    <h1>Adquira o seu já!</h1> 
                      <BuyBox img={Baralho} nome={'baralho Uno'} preco={'29,99'} descricao={'Jogo de cartas Uno padrão, contém 112 cartas'} />
                </section>
            </article>
        </Container>
    </>
    )
}

