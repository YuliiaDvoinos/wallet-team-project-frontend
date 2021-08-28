import IconsSVG from './sprite.svg';

export default function Icons({ id, className }) {
  const classNames = className ? className: id;
  return (
    <svg className= {`${classNames} icons`}>
      <use xlinkHref={`${IconsSVG}#${id}`} />
    </svg>
  );
}
