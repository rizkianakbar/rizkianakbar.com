import EmailIcon from '@/components/icons/EmailIcon';
import GithubIcon from '@/components/icons/GithubIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';
import ResumeIcon from '@/components/icons/ResumeIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';
import WhatsappIcon from '@/components/icons/WhatsappIcon';

export const aboutWorkExperience = [
  {
    company: 'Bountie',
    position: 'Frontend Engineer',
    date: 'Nov 2021 - Present',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptate autem officia voluptas possimus! Alias debitis saepe consequuntur sequi corporis dolores possimus corrupti, blanditiis nihil temporibus doloribus ab ipsum dicta?',
    location: 'Singapore, Singapore',
    url: 'https://www.linkedin.com/company/bountiegaming/',
  },
  {
    company: 'HappyFresh',
    position: 'Test Automation Engineer',
    date: 'Nov 2021 - Present',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptate autem officia voluptas possimus! Alias debitis saepe consequuntur sequi corporis dolores possimus corrupti, blanditiis nihil temporibus doloribus ab ipsum dicta?',
    location: 'Jakarta, Indonesia',
    url: 'https://www.linkedin.com/company/happyfresh/',
  },
  {
    company: 'NEXT TI',
    position: 'Frontend Engineer',
    date: 'Jan 2020 - Nov 2021',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptate autem officia voluptas possimus! Alias debitis saepe consequuntur sequi corporis dolores possimus corrupti, blanditiis nihil temporibus doloribus ab ipsum dicta?',
    location: 'Jakarta, Indonesia',
    url: 'https://www.linkedin.com/company/next-ins/',
  },
];

export const AboutBio =
  'I work in React ecosystem especially with Next.js, Tailwind, Typescript. I also work in Automation Testing ecosystem with Appium, Ruby, Cucumber, Gherkins. ✌🏻🔥';

export const AboutSocial = [
  {
    name: 'Resume',
    url: 'https://drive.google.com/file/d/1U8bbHb1dnxaaHbS9_j8W4bsLH2lTAQoX/view?usp=sharing',
    icon: (
      <ResumeIcon className='inline mr-2 ml-1 mb-1 group-hover:text-black dark:group-hover:text-white' />
    ),
  },
  {
    name: 'Email',
    url: 'mailto:rizkianakbar4@gmail.com',
    icon: (
      <EmailIcon className='inline mt-[-5px] group-hover:text-black dark:group-hover:text-white' />
    ),
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/rizkianakbar/',
    icon: (
      <LinkedinIcon className='inline mr-[2px] group-hover:text-blue-400' />
    ),
  },
  {
    name: 'Github',
    url: 'https://github.com/rizkianakbar',
    icon: (
      <GithubIcon className='inline mr-[2px] group-hover:text-black dark:group-hover:text-white' />
    ),
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/rizkianakbr',
    icon: <TwitterIcon className='inline mr-[2px] group-hover:text-blue-400' />,
  },
  {
    name: 'Whatsapp',
    url: 'https://wa.me/62895610381334',
    icon: (
      <WhatsappIcon className='inline mt-[-5px] group-hover:text-green-300 dark:group-hover:text-green-300' />
    ),
  },
];
