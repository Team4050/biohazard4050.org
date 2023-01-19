import React from "react";
import Layout from "@theme/Layout";

interface Props {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  noFooter?: boolean;
}

export default function DefaultLayout({
  children,
  title,
  description,
  noFooter,
}: Props): JSX.Element {
  return (
    <Layout title={title} description={description} noFooter={noFooter}>
      {children}
    </Layout>
  );
}
