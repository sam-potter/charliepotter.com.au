import Image from 'next/image';

import ImageEleven from '@/../public/images/2021_DSSP_139.jpg';
import ImageTwelve from '@/../public/images/2021_DSSP_Showcase_141.jpg';
import ImageThirteen from '@/../public/images/2021_DSSP_Showcase_142.jpg';
import ImageFourteen from '@/../public/images/2021_DSSP_Showcase_145.jpg';
import ImageFifteen from '@/../public/images/2021_DSSP_Showcase_190.jpg';
import ImageSixteen from '@/../public/images/2021_DSSP_Showcase_208.jpg';
import ImageSeventeen from '@/../public/images/2021_DSSP_Showcase_209.jpg';
import ImageEighteen from '@/../public/images/2021_DSSP_Showcase_271.jpg';
import ImageEight from '@/../public/images/eight.png';
import ImageFive from '@/../public/images/five.png';
import ImageFour from '@/../public/images/four.jpg';
import ImageTwenty from '@/../public/images/IMG_0341.jpg';
import ImageTwentyOne from '@/../public/images/IMG_5232.jpg';
import ImageTwentyTwo from '@/../public/images/IMG_5233.jpg';
import ImageNine from '@/../public/images/nine.png';
import ImageOne from '@/../public/images/oneFull.jpg';
import ImageNineteen from '@/../public/images/Paper.Notebook.15.jpg';
import ImageSeven from '@/../public/images/seven.png';
import ImageSix from '@/../public/images/six.png';
import ImageTen from '@/../public/images/ten.png';
import ImageThree from '@/../public/images/threeFull.jpg';
import ImageTwo from '@/../public/images/twoFull.jpg';

const ImageWrapper: React.FC<{ src: StaticImageData; priority?: boolean }> = props => {
  return (
    <div>
      <Image
        quality="100"
        src={props.src}
        placeholder="blur"
        layout="responsive"
        priority={props.priority}
        alt="Photo of Charlie Potter"
      />
    </div>
  );
};

const Images = () => {
  return (
    <div className="grid grid-cols-1 py-24 space-y-4 lg:space-y-0 lg:py-48 lg:grid-cols-3 lg:gap-4 xl:gap-8">
      <div className="space-y-4 xl:space-y-8">
        <ImageWrapper src={ImageOne} priority />
        <ImageWrapper src={ImageSix} />
        <ImageWrapper src={ImageTwo} />
        <ImageWrapper src={ImageTwentyOne} />
        <ImageWrapper src={ImageTwentyTwo} />
        <ImageWrapper src={ImageFifteen} />
        <ImageWrapper src={ImageThirteen} />
      </div>

      <div className="space-y-4 lg:col-span-2 xl:space-y-8">
        <ImageWrapper src={ImageFourteen} priority />

        <div className="grid grid-cols-1 space-y-4 lg:space-y-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
          <div className="space-y-4 lg:space-y-[25px] xl:space-y-[34px] 2xl:space-y-[42px]">
            <ImageWrapper src={ImageFive} />
            <ImageWrapper src={ImageSeven} />
            <ImageWrapper src={ImageEight} />
            <ImageWrapper src={ImageNine} />
            <ImageWrapper src={ImageTen} />
            <ImageWrapper src={ImageTwenty} />
            <ImageWrapper src={ImageSeventeen} />
            <ImageWrapper src={ImageNineteen} />
          </div>

          <div className="space-y-4 xl:space-y-8">
            <ImageWrapper src={ImageThree} />
            <ImageWrapper src={ImageEleven} />
            <ImageWrapper src={ImageFour} />
            <ImageWrapper src={ImageTwelve} />
            <ImageWrapper src={ImageSixteen} />
            <ImageWrapper src={ImageEighteen} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div>
      <p className="pt-12 text-lg font-semibold text-gray-900 lg:pt-24 xl:pt-32 lg:text-2xl xl:text-3xl">
        <span className="text-blue-500">Charlie Potter</span> in a nutshell (
        <span className="italic">semi allergic to nuts</span>):
      </p>

      <div className="pt-4 pl-8 space-y-4 text-gray-700 lg:pt-8 xl:pt-12 lg:space-y-6 xl:space-y-8 lg:pl-16 xl:pl-32 lg:text-xl xl:text-2xl max-w-prose">
        <p>
          Drinks amaretto sours. Has zero clue what ATAR was acquired. Will repeatedly say schoolies was the best week
          to date.
        </p>

        <p>Special skill: Aus Open ball boy. Will learn your on-court habits.</p>

        <p>Is someone who says “I listen to all music”,</p>

        <p>
          Energy is sporadic, Egyptian blue the colour of choice and Red by John Logan is arguably the best play ever
          written.
        </p>

        <p>
          NIDA graduate, <span className="italic">who just wants to shake it up a little</span>.
        </p>
      </div>

      <Images />
    </div>
  );
};

export default Index;
