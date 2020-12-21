import Nav from '../components/nav';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

import en from '../locales/en';
import fr from '../locales/fr';
import ViewSource from '../components/github';

export default function IndexPage() {
  const [showBanner, setBanner] = useState(true);
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : fr;

  return (
    <main>
      <ViewSource />
      <div className="hero">
        <div className="bg-image">
          <span className="bg-black opacity-40 absolute w-full h-full z-10" />
          <Image
            alt="Hero"
            src="/hero.jpg"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <Nav />
        <section className="pt-8 pb-20 flex flex-col items-center">
          <nav aria-label="breadcrumb">
            <ol className="flex space-x-2 text-white text-sm mb-8 text-shadow">
              <li>
                <a href="#">{'Science >'}</a>
              </li>
              <li>
                <a href="#">{'Computing >'}</a>
              </li>
              <li>Birth web</li>
            </ol>
          </nav>
          <h1 className="text-5xl text-white text-shadow font-bold px-8 text-center">
            {t.hero}
          </h1>
          <hr className="mt-16 mb-8 w-32 border-t-2 border-white" />
          <p className="text-white text-shadow px-8">{t.description}</p>
        </section>
      </div>
      <article className="mt-16 px-8 max-w-4xl m-auto">
        <p className="mb-8">{t.p1}</p>
        <Image
          alt="Screenshot"
          src="/screenshot.png"
          width={1440}
          height={870}
        />
        <p className="my-8">{t.p2}</p>
        <p className="mb-16">{t.p3}</p>
      </article>
      {showBanner && (
        <div className="flex flex-col items-center pt-4 bg-gray-800 text-white fixed bottom-0 w-full bg-opacity-80 p-4 text-center">
          <p>{t.cookies}</p>
          <button
            onClick={() => setBanner(false)}
            className="px-4 py-2 w-40 border-2 border-white bg-gray-600 hover:bg-gray-800 transition rounded mt-4"
          >
            {t.button}
          </button>
        </div>
      )}
    </main>
  );
}
