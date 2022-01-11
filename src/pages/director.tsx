const Film: React.FC<{ title: string; date: string; info: string; url: string }> = props => {
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div>
        <h4 className="text-2xl font-semibold text-gray-900 md:text-3xl">{props.title}</h4>
        <p className="pt-1 font-medium text-blue-500">{props.date}</p>
        <p className="pt-4 text-gray-900 max-w-prose">{props.info}</p>
      </div>

      <div className="pt-8 md:pt-0">
        <iframe
          frameBorder="0"
          src={props.url}
          allowFullScreen
          className="w-full md:w-[560px] md:h-[315px]"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  );
};

const Director = () => {
  return (
    <div className="pt-12 pb-32">
      <Film
        date="Dec, 2019"
        title="Best of 2019: Year in Review"
        url="https://www.youtube.com/embed/0OS98IkidyE"
        info="After visiting some of the world’s most unique and beautiful cities, watch Charlie’s best moments of 2019 and
          the road trip of a lifetime. A montage of cities and experiences."
      />

      <div className="my-12 border-b" />

      <Film
        date="Sep, 2017"
        title="Murndal: A Family Tree"
        url="https://www.youtube.com/embed/8j0Q9akk1zo"
        info="On one of Western Victoria’s most historic properties, father and daughter, Marcus and Alice, exchange memories and 
          experiences they’ve shared together on the farm and explore what the future might have in store for them."
      />

      <div className="my-12 border-b" />

      <Film
        date="July, 2017"
        title="Scotch College: Cordner Eggleston Cup"
        url="https://www.youtube.com/embed/DGQt6CedXeM"
        info="AFL's first ever match was played between Scotch College and Melbourne Grammar in 1858 with the
          final score a draw. Every year since, both schools honour this historic game in the hope of taking home the Cordner-Eggleston Cup."
      />
    </div>
  );
};

export default Director;
