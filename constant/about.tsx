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
    description: (
      <>
        <p className='text-gray-600 dark:text-gray-400'>
          • Create new features and maintain the current flow of a frontend site
          to be accessible and a great experience
        </p>
        <p className='text-gray-600 dark:text-gray-400'>
          • Refactoring codes and improvement
        </p>
      </>
    ),
    location: 'Singapore, Singapore',
    url: 'https://www.linkedin.com/company/bountiegaming/',
  },
  {
    company: 'HappyFresh',
    position: 'Test Automation Engineer',
    date: 'Nov 2021 - Present',
    description: (
      <>
        <p className='text-gray-600 dark:text-gray-400'>
          • Automate new feature on android/IOS
        </p>
        <p className='text-gray-600 dark:text-gray-400'>
          • Increase reliability and stability smoke test for automation test
        </p>
      </>
    ),
    location: 'Jakarta, Indonesia',
    url: 'https://www.linkedin.com/company/happyfresh/',
  },
  {
    company: 'NEXT TI',
    position: 'Frontend Engineer',
    date: 'Jan 2020 - Nov 2021',
    description: (
      <>
        <p className='text-gray-600 dark:text-gray-400'>
          • Maintenance and developed the collection system of KEB Hana bank
          Indonesia
        </p>
        <p className='text-gray-600 dark:text-gray-400'>
          • Create a hybrid application for field agents from KEB Hana Bank
          Indonesia
        </p>
      </>
    ),
    location: 'Jakarta, Indonesia',
    url: 'https://www.linkedin.com/company/next-ins/',
  },
];

export const AboutBio =
  'I work in React ecosystem especially with Next.js, Tailwind, Typescript. I also work in Automation Testing ecosystem with Appium, Ruby, Cucumber, Gherkins. ✌🏻🔥';

export const AboutSocial = [
  {
    name: 'Resume',
    url: 'https://drive.google.com/file/d/1uSwU6N37NHpoCkDg_v2U5_GHUlFb5GSf/view?usp=sharing',
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
