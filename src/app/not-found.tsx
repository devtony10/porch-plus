import { Metadata } from 'next';
import * as React from 'react';
import { RiAlarmWarningFill, RiArrowRightLine } from 'react-icons/ri';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-[calc(100vh-64px)]">
      <h1 className="text-2xl-semi text-ui-fg-base">Page not found</h1>
      <p className="text-small-regular text-ui-fg-base">
        The page you tried to access does not exist.
      </p>
      <Link
        className="flex gap-x-1 items-center group"
        href="/"
      >
        <p
        // todo: adapt medusajs text component
        // className="text-ui-fg-interactive"
        >Go to frontpage</p>
        <RiArrowRightLine
          className="group-hover:rotate-45 ease-in-out duration-150"
        // color="var(--fg-interactive)"
        />
      </Link>
    </div>
  );
}
