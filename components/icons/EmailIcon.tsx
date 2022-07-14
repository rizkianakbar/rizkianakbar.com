import clsx from 'clsx';

interface IProps {
  className?: string;
}
const EmailIcon = ({ className }: IProps) => (
  <svg
    stroke='currentColor'
    fill='none'
    strokeWidth='2'
    viewBox='0 0 24 24'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={clsx(className, 'h-6 w-6')}
    height='1em'
    width='1em'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
    <polyline points='22,6 12,13 2,6'></polyline>
  </svg>
);

export default EmailIcon;
