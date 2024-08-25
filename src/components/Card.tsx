import { ReactNode } from 'react';

export default function Card({
  children,
  classname,
}: {
  children: ReactNode;
  classname?: string;
}) {
  return (
    <div
      className={`rounded-sm min-h-[350px] border border-stroke py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark ${classname} ${
        !classname && 'bg-white'
      }`}
    >
      {children}
    </div>
  );
}
