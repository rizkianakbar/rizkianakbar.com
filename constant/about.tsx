import { BsGithub, BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { HiNewspaper } from 'react-icons/hi';
import { MdOutlineEmail } from 'react-icons/md';

export const aboutData = [
  {
    title: 'Work Experience',
    data: [
      {
        image:
          'https://res.cloudinary.com/rizkianakbar/image/upload/v1658501509/BOUNTIE_HUNTER_hsfbej.svg',
        company: 'Bountie',
        position: 'Frontend Engineer',
        date: 'Nov 2021 - Present',
        description: (
          <>
            <li>
              Create new features and maintain the current flow of a frontend
              site to be accessible and a great experience
            </li>
            <li>Refactoring codes and improvement</li>
          </>
        ),
        location: 'Singapore, Singapore',
        url: 'https://www.linkedin.com/company/bountiegaming/',
      },
      {
        image:
          'https://res.cloudinary.com/rizkianakbar/image/upload/v1658501603/f44b0cd6-e57d-44df-99ac-e2419ce90eed-1563254776865_1_wdw52f.png',
        company: 'HappyFresh',
        position: 'Test Automation Engineer',
        date: 'Nov 2021 - Present',
        description: (
          <>
            <li>Automate new feature on android/IOS</li>
            <li>
              Increase reliability and stability smoke test for automation test
            </li>
          </>
        ),
        location: 'Jakarta, Indonesia',
        url: 'https://www.linkedin.com/company/happyfresh/',
      },
      {
        image:
          'https://res.cloudinary.com/rizkianakbar/image/upload/v1658496672/Next-TI-Logo-3_ua3yy5.png',
        company: 'NEXT TI',
        position: 'Frontend Engineer',
        date: 'Jan 2020 - Nov 2021',
        description: (
          <>
            <li>
              Maintenance and developed the collection system of KEB Hana bank
              Indonesia
            </li>
            <li>
              Create a hybrid application for field agents from KEB Hana Bank
              Indonesia
            </li>
          </>
        ),
        location: 'Jakarta, Indonesia',
        url: 'https://www.linkedin.com/company/next-ins/',
      },
    ],
  },
  {
    title: 'Education',
    data: [
      {
        image:
          'https://res.cloudinary.com/rizkianakbar/image/upload/v1658496673/Logo-SoCS-Black-Blue_g5ks9j.png',
        company: 'Binus University',
        position: 'Computer Science',
        date: 'Aug 2021 - Present',
        description: (
          <>
            <li>Enrolled from Sept. 2021 to present</li>
            <li>
              Take online classes or non-regular classes in the field of
              computer science
            </li>
          </>
        ),
        location: 'Jakarta, Indonesia',
        url: 'https://binus.ac.id/',
      },
      {
        image:
          'https://res.cloudinary.com/rizkianakbar/image/upload/v1658496673/ImpactByteHorizontal_i4elt7.png',
        company: 'Impact Byte',
        position: 'Coding Bootcamp',
        date: 'Sep 2019 - Des 2019',
        description: (
          <>
            <li>Attended from Sept. 2019 to Jan 2020</li>
            <li>
              Scholarship awardee for Full Stack Web Development Program from
              KEB Hana Bank
            </li>
          </>
        ),
        location: 'Jakarta, Indonesia',
        url: 'https://impactbyte.com/id/home',
      },
    ],
  },
];

export const AboutBio =
  'A Frontend Engineer who started from reading an old book entitled "HTML & CSS BELAJAR DARI KASUS" at 15 years old to someone who is an expert in frontend development';

export const AboutSocial = [
  {
    name: 'Resume',
    url: 'https://drive.google.com/file/d/1uSwU6N37NHpoCkDg_v2U5_GHUlFb5GSf/view?usp=sharing',
    icon: (
      <HiNewspaper className='inline mb-1 group-hover:text-black dark:group-hover:text-white w-5 h-5' />
    ),
  },
  {
    name: 'Email',
    url: 'mailto:rizkianakbar4@gmail.com',
    icon: (
      <MdOutlineEmail className='inline mb-1 group-hover:text-black dark:group-hover:text-white w-5 h-5' />
    ),
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/rizkianakbar/',
    icon: (
      <BsLinkedin className='inline mb-1 group-hover:text-black dark:group-hover:text-white w-5 h-5' />
    ),
  },
  {
    name: 'Github',
    url: 'https://github.com/rizkianakbar',
    icon: (
      <BsGithub className='inline mb-1 group-hover:text-black dark:group-hover:text-white w-5 h-5' />
    ),
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/rizkianakbr',
    icon: (
      <BsTwitter className='inline mb-1 group-hover:text-black dark:group-hover:text-white w-5 h-5' />
    ),
  },
  {
    name: 'Whatsapp',
    url: 'https://wa.me/62895610381334',
    icon: (
      <BsWhatsapp className='inline mb-1 group-hover:text-black dark:group-hover:text-white w-5 h-5' />
    ),
  },
];
