import IconsSVG from './icons.svg';

export default function Icons({ id, className }) {
  return (
    <svg className={`${className}`}>
      <use xlinkHref={`${IconsSVG}#${id}`} />
    </svg>
  );
}
