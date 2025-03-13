import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <>
      {/* Menu de Navegação */}
      <main className="flex flex-col gap-8 mt-20 pt-20 items-center">
        {/* Primeiro Carrossel */}
        <div className="flex items-center self-center flex-col">
          <div className="relative w-full max-w-4xl mx-auto">
            <Carousel>
              <CarouselContent className="flex items-center">
                <CarouselItem>
                  <Image
                    className="w-full h-auto rounded-md"
                    src="/dress2.jpg"
                    alt="Dress 2"
                    layout="responsive"
                    width={1280}
                    height={720}
                    priority
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    className="w-full h-auto rounded-md"
                    src="/dress1.jpg"
                    alt="Dress 1"
                    layout="responsive"
                    width={1280}
                    height={720}
                    priority
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    className="w-full h-auto rounded-md"
                    src="/faixada.jpeg"
                    alt="Faixada"
                    layout="responsive"
                    width={1280}
                    height={720}
                    priority
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 z-10" />
              <CarouselNext className="absolute right-0 z-10" />
            </Carousel>
          </div>

          <h1 className="text-orange-800 text-3xl mt-5">Raysla Faishon</h1>
          <p className="max-w-screen-md text-center text-gray-700 text-lg">
            A Raysla Fashion, é a mais nova loja com uma moda super elegante,
            onde você pode sair montada desde looks a acessórios, bolsas e
            sapatos maravilhosos. Se você está em busca de um estilo elegante,
            modesto e arrasador, Raysla Fashion é pra você. Nossa empresa se
            destaca por seu compromisso com a preservação ambiental e
            responsabilidade social. Nossa eficiente gestão de reciclagem e
            reutilização de materiais reduzem nosso impacto ambiental e
            contribuem para a geração de novos empregos.
          </p>
        </div>

        {/* Segundo Carrossel */}
        <div className="flex justify-center self-center w-full max-w-8xl">
          <Carousel className="w-full">
            <CarouselContent className="flex justify-center">
              <CarouselItem className="relative basis-1/3">
                <Image
                  src="/dress3.jpg"
                  alt="Dress 3"
                  layout="responsive"
                  width={600}
                  height={400}
                  priority
                />
                <button className="absolute top-4 left-4 bg-orange-800 text-white px-4 py-2">
                  Disponível
                </button>
              </CarouselItem>
              <CarouselItem className="relative basis-1/3">
                <Image
                  src="/dress5.jpg"
                  alt="Dress 5"
                  layout="responsive"
                  width={600}
                  height={400}
                  priority
                />
                <button className="absolute top-4 left-4 bg-orange-800 text-white px-4 py-2">
                  Disponível
                </button>
              </CarouselItem>
              <CarouselItem className="relative basis-1/3">
                <Image
                  src="/img.jpg"
                  alt="Next.js logo"
                  layout="responsive"
                  width={600}
                  height={400}
                  priority
                />
                <button className="absolute top-4 left-4 bg-orange-800 text-white px-4 py-2">
                  Disponível
                </button>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>

        {/* Mapa */}
        <iframe
          className="flex justify-center self-center w-full h-[30rem] shadow-md rounded"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.5569389738343!2d-46.343634224577755!3d-23.404240378908085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce87921916d1d5%3A0x193c09a28818f4c5!2sRaysla%20Fashion!5e0!3m2!1spt-BR!2sbr!4v1730998283529!5m2!1spt-BR!2sbr"
          loading="lazy"
        ></iframe>
      </main>
    </>
  );
}
