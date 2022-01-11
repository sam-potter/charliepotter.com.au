import 'tailwindcss/tailwind.css';

import clsx from 'clsx';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Container: React.FC = props => (
  <div className="px-8 mx-auto md:px-0 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl">
    {props.children}
  </div>
);

const NavLink: React.FC<{ href: string }> = props => {
  const router = useRouter();

  const isActive = props.href === router.pathname;

  return (
    <Link href={props.href}>
      <a
        className={clsx(
          isActive
            ? 'underline underline-offset-[7px] decoration-blue-500 decoration-2 text-gray-900'
            : 'text-gray-700',
        )}
      >
        {props.children}
      </a>
    </Link>
  );
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Head>
        <title>Charlie Potter Portfolio | Actor, Director</title>
      </Head>

      <div className="bg-white">
        <Container>
          <nav className="flex justify-end py-16">
            <div className="flex space-x-6 md:space-x-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/actor">Actor</NavLink>
              <NavLink href="/director">Director</NavLink>
            </div>
          </nav>
          <Component {...pageProps} />
        </Container>
      </div>

      <Container>
        <div className="py-12 md:py-24">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex flex-col space-y-4 text-gray-600 md:block md:space-x-4">
              <a
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-gray-600 hover:text-gray-900 underline-offset-[7px] decoration-2"
                href="http://linkedin.com/in/charlie-potter-135705163"
              >
                LinkedIn
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-gray-600 hover:text-gray-900 underline-offset-[7px] decoration-2"
                href="https://www.youtube.com/channel/UCIgxUp5h-AtEB9MqeOq2avg"
              >
                YouTube
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://vimeo.com/charliepotter"
                className="hover:underline text-gray-600 hover:text-gray-900 underline-offset-[7px] decoration-2"
              >
                Vimeo
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://app.showcast.com.au/profile/charliepotter"
                className="hover:underline text-gray-600 hover:text-gray-900 underline-offset-[7px] decoration-2"
              >
                Showcast
              </a>
            </div>

            <div className="pt-12 text-right md:pt-0">
              <p className="pb-1 text-gray-900">Sydney, Australia</p>

              <a
                href="mailto:charlie@charliepotter.com.au"
                className="hover:underline text-gray-600 hover:text-gray-900 underline-offset-[7px] decoration-2"
              >
                charlie@charliepotter.com.au
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default App;
