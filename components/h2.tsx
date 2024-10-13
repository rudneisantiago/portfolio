import { HTMLAttributes } from "react";

function H2(props: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={`py-10 text-3xl font-semibold text-dark-blue-900 ${props.className}`}
    >
      {props.children}
    </h2>
  );
}

export { H2 };
