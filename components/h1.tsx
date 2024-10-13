import { HTMLAttributes } from "react";

function H1(props: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className="text-4xl font-bold my-8 text-dark-blue-950">
      {props.children}
    </h1>
  );
}

export { H1 };
