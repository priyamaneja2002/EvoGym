import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types'
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    setSelectedPage : (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1080px)");

  return (
    <section
      id="home"
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      {/* {Image and Main Header} */}
      <div className="">
        {/* {Main Header} */}
        <div className="">
          {/* {Headings} */}
          <div className="">
            <div className="">
              <div className="">
                <img src={HomePageText} alt="Home-Page-Text" />
              </div>
            </div>
            <p>
              Unrivaled Gym. Unparalled Training Fitness Classes. 
              World Class Studios to get the Body Shapes that you Dream of.. 
              Get Your Dream Body Now!
            </p>
          </div>
          {/* {Actions} */}
          <div className="">
            <ActionButton
              setSelectedPage={setSelectedPage}
            >
              Join Now
            </ActionButton>
            <AnchorLink
              className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
              onClick={() => {setSelectedPage(SelectedPage.ContactUs)}}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>

        {/* {Image} */}
        <div className="">

        </div>
      </div>
    </section>
  )
}

export default Home