import { Metadata } from "next"

import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      {props.children}
    </>
  )
}