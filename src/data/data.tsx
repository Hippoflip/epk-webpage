import {
  CalendarIcon,
  DownloadIcon,
  MapIcon,
  MusicNoteIcon,
  OfficeBuildingIcon,
} from '@heroicons/react/outline';

import heroImage from '../images/vinyls.webp'; //TODO: credit @minkmingle on Unsplash
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import profilepic from '../images/hippoflip.jpg';
import testimonialImage from '../images/crowd.webp'; //TODO: credit @tijsvl on Unsplash
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';
import AppleMusicIcon from '../components/Icon/AppleMusicIcon';
import BeatportIcon from '../components/Icon/BeatportIcon';
import BandCampIcon from '../components/Icon/BandCampIcon';
import SoundCloudIcon from '../components/Icon/SoundCloudIcon';
import SpotifyIcon from '../components/Icon/SpotifyIcon';
import FacebookIcon from '../components/Icon/FacebookIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Hippoflip Artist Site',
  description: "Portfolio website of dubstep producer Hippoflip, built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'releases',
  Resume: 'music',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;
/**
 * TODO list : 
 *  - Press Kit ?
 *  - artist bio : make shorter ?
 *  - promotional photos
 *  - Video section ?
 *  - contact details : finish form (use https://sendgrid.com/pricing/)
 *  - host on GitHub ?
 */

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hippoflip`,
  description: (
    <>
    <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I'm a French <strong className="text-stone-100">electronic music producer</strong> and DJ, 
      focusing on <strong className="text-stone-100">Deep Dubstep/Dub</strong> music, mostly at 140bpm.
    </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        So far I've released music on <a href="https://noizionrecordz.bandcamp.com/">Noizion Recordz</a> (FR) 
        and <a href="https://fatkidonfire.com/label/">FatKidOnFire</a> (NL/UK).
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/presskit.pdf',//TODO
      text: 'Press kit',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Musician since childhood, Hippoflip used to play the saxophone in several marching and 
  jazz bands. Over the years, he trained in electronic music production by experimenting and learning from 
  educational content producers such as Mr. Bill or Tom Cosm. Now, he produces a blend of dub/dubstep influenced 
  by Jazz, Hip-hop and Drum'n Bass. Passionate about soundsystem culture, he draws inspiration from the 
  contemporary Deep Dubstep scene (Kaiju, DE-TÜ, Ternion Sound, Egoless, Quasar, Kercha, ...). In early 2022 
  he signs his debut EP entitled “Monsters” on Noizion Recordz, following with a four track release on 
  FatKidOnFire (FKOFd058).`,
  aboutItems: [
    {label: 'Location', text: 'Paris, FR', Icon: MapIcon},
    {label: 'Age', text: '30', Icon: CalendarIcon},
    {label: 'Genres', text: 'Deep Dubstep, Deep Dub, Psy Dub', Icon: MusicNoteIcon},
    {label: 'Labels', text: 'Noizion Recordz, FatKidOnFire', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = []; //TODO: music
export const experience: TimelineItem[] = []; //TODO: photos

/**
 * Skills section
 */
export const skills: SkillGroup[] = []; //TODO: videos

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Monsters EP (NZN028)',
    description: 'April 1st 2022 on Noizion Recordz',
    url: 'https://hippoflip.bandcamp.com/album/monsters-ep',
    image: porfolioImage1,
  },
  {
    title: 'FKOFd058',
    description: 'October 7th 2022 on FatKidOnFire',
    url: 'https://fkofd.bandcamp.com/album/fkofd058',
    image: porfolioImage2,
  },
  {
    title: 'Guest mix @ Le Tonnerre',
    description: 'October 20th 2022',
    url: 'https://soundcloud.com/zoneestradio/le-1',
    image: porfolioImage3,
  },
  {
    title: 'Guest mix @ Subtle Radio',
    description: 'TBA',
    url: 'https://soundcloud.com/',
    image: porfolioImage4,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Hubwar (head of Noizion Recordz)', //TODO: translate and add photo
      text: 'L\'originalité des compositions, sa précision dans le sound-design et ses clins d\'oeil à la culture « sound-system » m\'ont convaincu de signer Hippoflip dès la première écoute.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Laurent Garnier', //TODO: translate and add photo
      text: 'TODO: get one from FKOF maybe ?',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'TODO: maybe even Andrew ? idk, could work',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to contact me on any platform, although I would be more reactive to SoundCloud or Instagram messages.',
  items: [
    // {
    //   type: ContactType.Email,
    //   text: 'hippod.music@gmail.com',
    //   href: 'mailto:hippod.music@gmail.com',
    // },
    {
      type: ContactType.Location,
      text: 'Paris, France',
      href: 'https://www.google.com/maps/place/Paris/@48.8820187,-5.0724719,5.3z',
    },
    {
      type: ContactType.Instagram,
      text: '@hippoflip_dub',
      href: 'https://www.instagram.com/hippoflip_dub/',
    },
    {
      type: ContactType.SoundCloud,
      text: 'Hippoflip',
      href: 'https://www.soundcloud.com/hippoflip/',
    },
    {
      type: ContactType.Facebook,
      text: 'Hippoflip',
      href: 'https://www.facebook.com/hippoflip/',
    },
    // {
    //   type: ContactType.Github,
    //   text: 'hippoflip',
    //   href: 'https://github.com/hippoflip',
    // },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/hippoflip_dub/'},
  {label: 'SoundCloud', Icon: SoundCloudIcon, href: 'https://www.soundcloud.com/hippoflip/'},
  {label: 'Bandcamp', Icon: BandCampIcon, href: 'https://hippoflip.bandcamp.com/'},
  {label: 'Beatport', Icon: BeatportIcon, href: 'https://www.beatport.com/artist/hippoflip/1043273'},
  {label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/hippoflip/'},
  {label: 'Apple Music', Icon: AppleMusicIcon, href: 'https://music.apple.com/fr/artist/hippoflip/1517369878'},
  {label: 'Spotify', Icon: SpotifyIcon, href: 'https://open.spotify.com/artist/5zrgKTyQwPeier8VxB6DAR'},
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/hippoflip'},
];
