import {BuildingOfficeIcon, CalendarIcon, MapIcon, MusicalNoteIcon} from '@heroicons/react/24/outline';

import AppleMusicIcon from '../components/Icon/AppleMusicIcon';
import BandCampIcon from '../components/Icon/BandCampIcon';
import BeatportIcon from '../components/Icon/BeatportIcon';
import FacebookIcon from '../components/Icon/FacebookIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import SoundCloudIcon from '../components/Icon/SoundCloudIcon';
import SpotifyIcon from '../components/Icon/SpotifyIcon';
import testimonialImage from '../images/crowd.webp'; //TODO: credit @tijsvl on Unsplash
import profilepic from '../images/hippoflip.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import hubwarImage from '../images/testimonials/hubwar.jpg';
import korruptImage from '../images/testimonials/korrupt.jpg';
import heroImage from '../images/vinyls.webp'; //TODO: credit @minkmingle on Unsplash
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

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Hippoflip Artist Site',
  description: "Portfolio website of dubstep producer Hippoflip, built with Tim Baker's ReactJS resume template",
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
 *  - Press Kit !
 *  - Promotional photos ?
 *  - Video section ?
 *  - contact details : finish form (use https://sendgrid.com/pricing/)
 */

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hippoflip`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        French <strong className="text-stone-100">electronic music producer</strong> and DJ, focusing on{' '}
        <strong className="text-stone-100">Deep Dubstep/Dub</strong> music, mostly at 140bpm.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Music released on </strong>
        Noizion Recordz (FR), FatKidOnFire (NL/UK), Locus Sound (UK), Cimmerian Records (US), Dubstep France (FR).
      </p>
    </>
  ),
  actions: [
    // {
    //   href: '/assets/presskit.pdf',//TODO
    //   text: 'Press kit',
    //   primary: true,
    //   Icon: DownloadIcon,
    // },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

const now: Date = new Date();
const currentYear: number = now.getFullYear();
const offset: number = now.getMonth() > 8 ? 0 : -1;
const age: number = currentYear - 1992 + offset;

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Musician since childhood, Hippoflip used to play the saxophone in several marching and jazz bands. 
  Over the years, he trained in electronic music production by experimenting and learning from educational content 
  producers such as Mr. Bill or Tom Cosm. Now, he produces a blend of dub/dubstep influenced by Jazz, Hip-hop, 
  Drum'n Bass and Psychedelic bass music. Passionate about soundsystem culture, he draws inspiration from the 
  contemporary Deep Dubstep scene : Ternion Sound, Egoless, Quasar, Kercha, FLO, ...`,
  aboutItems: [
    {label: 'Location', text: 'Paris, FR', Icon: MapIcon},
    {label: 'Age', text: String(age), Icon: CalendarIcon},
    {label: 'Genres', text: 'Deep Dubstep, Deep Dub, Bass Music', Icon: MusicalNoteIcon},
    {
      label: 'Labels',
      text: 'Noizion Recordz, FatKidOnFire, Locus Sound, Cimmerian Records, Dubstep France',
      Icon: BuildingOfficeIcon,
    },
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
    description: 'November 13th 2022',
    url: 'https://soundcloud.com/subtleradio/fkof-sessions-w-hippoflip-subtle-radio-13112022',
    image: porfolioImage4,
  },
  {
    title: 'Featured on LOCUSLP005',
    description: 'December 15th 2023 on Locus Sound',
    url: 'https://locussounduk.bandcamp.com/album/compilation-vol-5-locuslp005',
    image: porfolioImage5,
  },
  {
    title: 'Trade Route EP',
    description: 'October 7th 2022 on Cimmerian Records',
    url: 'https://cimmerianrecords.bandcamp.com/album/trade-route-ep',
    image: porfolioImage6,
  },
  {
    title: 'Featured on French Ruff',
    description: 'December 12th 2025 on Noizion Records',
    url: 'https://noizionrecordz.bandcamp.com/album/french-ruff-various-artists',
    image: porfolioImage7,
  },
  {
    title: 'Expropriate // Appropriate',
    description: 'January 15th 2026 - Self release',
    url: 'https://hippoflip.bandcamp.com/album/expropriate-appropriate',
    image: porfolioImage8,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Hubwar (head of Noizion Recordz)',
      text: 'Hippoflip produces novel compositions and precise sound-designs, while staying true to « sound-system culture ». This convinced me to sign his EP as soon as I heard it.',
      image: hubwarImage,
    },
    {
      name: 'Laurent Garnier (about Monsters EP)',
      text: "That's a really cool EP I love it, thanks for sharing !",
    },
    {
      name: 'Korrupt (A&R Manager of FatKidOnFire)',
      text: "Parisian Hippoflip pushes the limits of soundsystem music. He transformed four 'work in progress' cuts into stellar journeys through rhythm and bassweight. He's a critical part of our extended release catalogue over at FatKidOnFire.",
      image: korruptImage,
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    'Feel free to contact me on any platform, although I would be more reactive to SoundCloud or Instagram messages.',
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
