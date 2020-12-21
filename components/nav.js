import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import en from '../locales/en';
import fr from '../locales/fr';

export default function Nav() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : fr;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <nav>
      <div className="flex items-center justify-between bg-gray-800 text-white px-8 md:px-16 py-2">
        <Link href="/">
          <a>
            <span className="font-bold">CERN</span>
            <span className="ml-2 text-gray-400 font-semibold hidden sm:inline-block">
              {t.subtitle}
            </span>
          </a>
        </Link>
        <ul className="flex items-center justify-between space-x-4 text-gray-400">
          <li>
            <a href="https://home.cern/user/login" className="text-sm">
              {t.signin}
            </a>
          </li>
          <li>
            <a href="https://cern.ch/directory" className="text-sm">
              {t.directory}
            </a>
          </li>
        </ul>
      </div>
      <ul className="flex items-center justify-between pt-8 px-8 md:px-16">
        <li>
          <Link href="/">
            <a>
              <Image src="/logo.png" height={60} width={60} />
            </a>
          </Link>
        </li>
        <ul className="flex items-center justify-between space-x-8">
          <li>
            <a
              href="https://home.cern/about"
              className="text-white text-lg text-shadow-sm uppercase hidden md:block tracking-wide"
            >
              {t.about}
            </a>
          </li>
          <li>
            <a
              href="https://home.cern/news"
              className="text-white text-lg text-shadow-sm uppercase hidden md:block tracking-wide"
            >
              {t.news}
            </a>
          </li>
          <li>
            <a
              href="https://home.cern/science"
              className="text-white text-lg text-shadow-sm uppercase hidden md:block tracking-wide"
            >
              {t.science}
            </a>
          </li>
          <li>
            <a
              href="https://home.cern/research"
              className="text-white text-lg text-shadow-sm uppercase hidden md:block tracking-wide"
            >
              {t.research}
            </a>
          </li>
          <li>
            <a
              href="https://home.cern/search/node"
              className="text-white text-lg text-shadow-sm uppercase hidden md:block tracking-wide"
            >
              {t.search}
            </a>
          </li>
          <select
            onChange={changeLanguage}
            defaultValue={locale}
            className="text-white text-shadow-sm text-lg bg-transparent tracking-wide"
          >
            <option className="text-black" value="en">EN</option>
            <option className="text-black" value="fr">FR</option>
          </select>
        </ul>
      </ul>
    </nav>
  );
}
