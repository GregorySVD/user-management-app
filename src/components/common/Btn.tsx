import { MouseEventHandler } from 'react';

interface Props {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Btn = (props: Props) => {
  return (
    <button
      type="button"
      className="btn bg-primary-100 border-primary-200
       text-text-100 dark:text-text-dark-100
        hover:bg-primary-300 hover:border-primary-300 dark:hover:bg-primary-dark-300 dark:bg-accent-dark-100 dark:border-primary-dark-100"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};
