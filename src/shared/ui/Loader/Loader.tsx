import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.module.scss'

interface IPageLoaderProps {
  className?: string;
}

export const Loader = ({ className }: IPageLoaderProps) => {
  return (
    <div className={ classNames('lds-roller', {}, [ className ])}>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
  );
};
