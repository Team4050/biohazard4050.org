import Link from "@docusaurus/Link";
import React from "react";
import { Button as MButton, ButtonProps } from "@mantine/core";

interface Props extends ButtonProps {
  children: React.ReactNode;
  to: string;
  className?: string;
}

export default function Button(props: Props): JSX.Element {
  return (
    <Link to={props.to} className={props.className}>
      <MButton radius="lg" {...props}>
        {props.children}
      </MButton>
    </Link>
  );
}
