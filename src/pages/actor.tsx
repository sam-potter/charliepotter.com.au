const Actor = () => {
  return (
    <div className="pt-24 pb-48">
      <p className="text-lg lg:text-2xl pb-6 text-gray-900">
        Find me on{' '}
        <a
          target="_blank"
          rel="noreferrer"
          className="link underline text-blue-500"
          href="https://app.showcast.com.au/profile/charliepotter"
        >
          Showcast
        </a>
      </p>

      <iframe
        allowFullScreen
        frameBorder="0"
        allow="fullscreen"
        src="https://player.vimeo.com/video/659202082?autoplay=1"
        className="w-full h-[240px] sm:h-[380px] md:h-[360px] lg:h-[440px] xl:h-[580px] 2xl:h-[720px]"
      />
    </div>
  );
};

export default Actor;
