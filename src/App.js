import { useEffect, useState } from "react";
import "./App.css"; // Adapte se necessário para estilos adicionais
import CoralineImg from './images/CORALINE.png';
import WybornImg from './images/WYBORN.jpg';
import GatoPretoImg from './images/GATOPRETO.jpg';
import CharlieImg from './images/CHARLIEJONES.jpg';
import MelImg from './images/MELJONES.jpg';
import backgroundImage from "./images/backgroundcolor.png";
import BotaoBrancoImg from './images/botaobranco.png';
import Cursor from './images/TRIANGULOCURSOR.png';
import GIFBELDAM from './images/gifBELDAM.gif';
import GIFCHARLIEJONES from './images/gifCHARLIEJONES.gif';
import GIFCORALINE from './images/gifCORALINE.gif';
import GIFGATOPRETO from './images/gifGATOPRETO.gif';
import GIFMELJONES from './images/gifMELJONES.gif';
import GIFWYBORN from './images/gifWYBORN.gif';
import Henry from './images/HenrySelick.png';
import STOPMOTION from './images/STOPMOTION.gif';
import Makingof from './images/Makingof.png';
import Frases from './images/FRASES.jpg'
import AZUL from './images/AZULGRADIENTE.jpg'


function PersonagemItem({ char }) {
  const [showGif, setShowGif] = useState (false);

  const handleMouseEnter = () => {
    setShowGif(true);
    setTimeout(() => setShowGif(false), 6000);
  };

  return (
    <div className="carousel-item" onMouseEnter={handleMouseEnter}>
      <img src={showGif ? char.gif : char.src} alt={char.alt} />
      {!showGif && (
        <div className="overlay">
          <h2>{char.name}</h2>
          <p>{char.desc}</p>
        </div>
      )}
    </div>
  );
}

export default function Coraline() {
  useEffect(() => {
    // Scroll suave
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Efeito parallax
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const background = document.querySelector('.background-image');
      if (background) {
        background.style.backgroundPosition = "center " + (scrollPosition * 0.5) + "px";
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      anchors.forEach(anchor => anchor.removeEventListener('click', () => {}));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
  className="text-white flex flex-col"
  style={{
  cursor: `url(${Cursor}) 16 16, auto`
}}
>

      <section
  className="relative w-full min-h-screen overflow-hidden">
  {/* VÍDEO DE FUNDO */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/INTRO.mp4" type="video/mp4" />
  </video>

  {/* OVERLAY ESCURO (opcional) */}
  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10" />

  {/* CONTEÚDO (fica sobre o vídeo) */}
  <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-white px-4">
    {/* NAVEGAÇÃO */}
    <nav className="w-full py-6 px-4 md:px-8 lg:px-12 flex justify-center items-center fixed top-0 bg-black bg-opacity-50 backdrop-blur-sm z-30">
      <div className="flex space-x-6 md:space-x-12">
        <a href="#historia" className="nav-link body-font text-lg md:text-xl font-medium hover:text-gray-300 transition-colors duration-300">História do Filme</a>
        <a href="#personagens" className="nav-link body-font text-lg md:text-xl font-medium hover:text-gray-300 transition-colors duration-300">Personagens</a>
        <a href="#curiosidades" className="nav-link body-font text-lg md:text-xl font-medium hover:text-gray-300 transition-colors duration-300">Curiosidades</a>
        <a href="#frases" className="nav-link body-font text-lg md:text-xl font-medium hover:text-gray-300 transition-colors duration-300">Frases Memoráveis</a>
      </div>
    </nav>

    {/* TÍTULO */}
    <main className="w-full flex flex-col items-center justify-center mt-32 px-4">
      <div className="text-center mb-16"></div>
      <h1 className="title-font text-6xl md:text-8xl flex items-center justify-center gap-4">
        <span>C</span>
        <span className="w-[60px] h-[60px] animate-pulse scale-animation">
          <img src={BotaoBrancoImg} alt="Botão O" className="w-full h-full object-contain" />
        </span>
        <span>RALINE</span>
      </h1>
      <p className="body-font text-xl md:text-2xl mt-6 max-w-2xl text-center">
        Welcome home! It's been a while...
      </p>
    </main>

    {/* ÍCONE DE SCROLL */}
    <div className="absolute bottom-10 animate-bounce">
         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
         
      </svg>
    </div>
  </div>
</section>

<div className="w-full flex-grow">

        <section
  id="historia"
  className="min-h-screen pt-32 px-4 bg-cover bg-center bg-no-repeat"
  style={{ backgroundColor: '#070012' }}
>

          <div className="section-content">
            <h2 className="title-font text-4xl mb-8 text-center">História do Filme</h2>
            <div className="body-font text-lg md:text-xl space-y-6 font-times">
  <p>
    <em>Coraline</em> (2009) é um filme de animação em stop-motion lançado em 2009, baseado no livro de Neil Gaiman. A história gira em torno de Coraline Jones, uma menina de 11 anos que se muda com seus pais para uma antiga casa dividida em apartamentos. Solitária e entediada, Coraline acaba descobrindo uma porta secreta que a leva para um "Outro Mundo", aparentemente do jeito que sonhava.
  </p>

  <p>
    Neste "Outro Mundo", tudo parece perfeito: seus pais são atenciosos, a comida é deliciosa e todos a tratam como uma princesa. Porém, essa realidade alternativa guarda segredos obscuros. Os moradores têm botões no lugar dos olhos, e a "Outra Mãe", apesar de inicialmente carinhosa, revela sua verdadeira natureza controladora e assustadora.
  </p>

  <p>
    O filme é uma mistura de fantasia, suspense e terror psicológico, e se destaca por sua estética sombria e utilizando animação artesanal. É uma história que encanta e assusta ao mesmo tempo, conquistando públicos de todas as idades.
  </p>
            </div>
          </div>
        </section>

        <section
  id="personagens"
  className="min-h-screen pt-32 px-4"
  style={{ backgroundColor: '#11002C' }}
>
  <div className="section-content">
    <h2 className="title-font text-4xl mb-8 text-center">Personagens Principais</h2>
    <div className="carousel-container">
      {[
        { src: CoralineImg, gif: GIFCORALINE, alt: "Coraline", name: "Coraline", desc: "Uma menina de 11 anos que é filha única, entediada de ter se mudado para o Palácio-Cor-De-Rosa e deixado seus melhores amigos para trás, adora jardinagem e é extremamente curiosa." },  
        { src: WybornImg, gif: GIFWYBORN, alt: "Wyborn", name: "Wyborn Lovat", desc: "Um menino tímido e sem jeito, gosta de caçar lesmas e é amigo do Gato Preto" },
        { src: GatoPretoImg, gif: GIFGATOPRETO, alt: "Gato Preto", name: "Gato Preto", desc: "Parece ser um gato qualquer, porém é extremamente observador e rápido, consegue falar no Outro Mundo, além de conseguir ajudar Coraline em sua jornada" },
        { src: CharlieImg, gif: GIFCHARLIEJONES, alt: "Charlie Jones", name: "Charlie Jones", desc: "Pai de Coraline, um homem que fala menos, vive focado em seu trabalho no computador, faz a comida (que Coraline odeia)" },
        { src: MelImg, gif: GIFMELJONES, alt: "Mel Jones", name: "Mel Jones", desc: "Mãe de Coraline, não tem tempo para cozinhar pois vive trabalhando em seu catálogo de jardinagem, mas ironicamente odeia jardinagem e pode parecer um pouco desatenta" }
      ].map((char, i) => (
        <PersonagemItem key={i} char={char} />
      ))}
    </div>
  </div>
</section>


      <section
  id="curiosidades"
  className="w-full flex-grow bg-cover bg-fixed bg-center bg-no-repeat"
  style={{ backgroundColor: '#070012' }}
>
  <div className="section-content">
    <h2 className="title-font text-4xl mb-8 text-center">Curiosidades</h2>

    <div className="body-font text-lg md:text-xl space-y-6">
  {[
    { text: "A animação levou cerca de quatro anos para ficar pronta. Só o trabalho de fotografia levou 18 meses!" },
    { text: "A obra é considerada a primeira animação em stop-motion para o formato 3D. Inclusive, até hoje, foi o desenho mais longo já produzido utilizando essa técnica!" },
    { text: "No filme, Coraline faz amizade com o neto do da dona da mansão, Wyborn, mas esse personagem não existe no livro - sendo exclusividade do filme." },
    { text: "O filme teve uma indicação para melhor animação no Oscar de 2010." }
  ].map((item, i) => (
    <div className="flex items-start" key={i}>
      <span className="text-2xl mr-4">{item.emoji}</span>
      <p>{item.text}</p>
    </div>
  ))}
</div>

    <div className="relative flex justify-center items-center mt-16 mb-20 z-10">
  <img
    src={Henry}
    alt="Imagem 1"
    className="w-1/4 max-w-xs rounded-xl shadow-lg mx-4"
  />

  <img
    src={STOPMOTION}
    alt="GIF Coraline"
    className="w-1/4 max-w-xs rounded-xl shadow-lg mx-4"
  />

  <img
    src={Makingof}
    alt="Imagem 2"
    className="w-1/4 max-w-xs rounded-xl shadow-lg mx-4"
  />
</div>
  </div>
</section>

        <section
  id="frases"
  className="min-h-screen pt-32 px-4 bg-cover bg-center bg-no-repeat"
  style={{ backgroundColor: '#483D8B' }}
>

          <div className="section-content">
            <h2 className="title-font text-4xl mb-8 text-center">Frases Memoráveis</h2>
            <div className="space-y-8">
              {[
                { quote: "Porque coragem é quando você sente mede de fazer algo, mas faz mesmo assim, é quando você enfrenta o medo.", author: "Coraline Jones" },
                { quote: "Gatos não tem nomes. Vocês, pessoas, tem nomes. É porque vocês não sabem quem são. Nós, gatos, sabemos quem somos, então não precisamos de nomes.", author: "Gato Preto" },
                { quote: "Ela vai roubar sua vida e tudo de que é feita. Vai roubar tudo que é importante para você, para que só reste névoa e vapor.", author: "Crianças perdidas" }
              ].map((frase, i) => (
                <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg" key={i}>
                  <p className="body-font italic text-xl">"{frase.quote}"</p>
                  <p className="mt-4 body-font font-semibold">— {frase.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <footer className="w-full py-4 bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="text-center body-font">
          <p>© 2025 Coraline e o Mundo Secreto. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}


