import Link from "@docusaurus/Link";
import { Carousel } from "@mantine/carousel";
import { Text, ActionIcon, useMantineColorScheme } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandFacebook,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import Autoplay from "embla-carousel-autoplay";
import React, { useRef } from "react";

import { SponsorLevel } from "@site/data";
import { Sponsors } from "@site/data.ts";
import Image from "@site/src/components/Image";

function Sponsor({ sponsor }) {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Link to={sponsor.url} className="hover:no-underline">
      <div className="flex flex-col items-center justify-center space-y-1 h-full">
        {sponsor.logo ? (
          <img
            src={
              sponsor.darkLogo && colorScheme === "dark"
                ? sponsor.darkLogo
                : sponsor.logo
            }
            alt={sponsor.name + " logo"}
            className="w-52 my-auto object-contain"
          />
        ) : (
          <span className="text-4xl font-semibold my-auto text-gray">
            {sponsor.name}
          </span>
        )}

        {sponsor.sub ? (
          <Text size="sm" className="text-gray dark:text-white">
            {sponsor.sub}
          </Text>
        ) : null}
      </div>
    </Link>
  );
}

// TODO: Allow footer to support customization through docusaurus.config.js
export default function FooterLayout({ copyright }) {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  const sponsors = Sponsors.filter(
    (sponsor) =>
      sponsor.level === SponsorLevel.Ultimate ||
      sponsor.level === SponsorLevel.Platinum
  );

  return (
    <footer className="border-slate-400 bg-zinc-200 py-12 shadow-inner dark:border-zinc-700 dark:bg-zinc-900">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Sponsors */}
        <div>
          <Text
            size="lg"
            weight={700}
            className="mx-auto mb-4 w-5/6 text-center dark:text-zinc-400 md:w-full"
          >
            Special thanks to our Ultimate and Platinum sponsors for powering
            our mission
          </Text>

          <Carousel
            plugins={sponsors.length > 1 ? [autoplay.current] : []}
            loop
            draggable={false}
            withControls={sponsors.length > 1}
            slideSize="33.333333%"
            breakpoints={[
              { maxWidth: "md", slideSize: "50%" },
              { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
            ]}
          >
            {sponsors.map((sponsor) => (
              <Carousel.Slide key={sponsor.name}>
                <Sponsor sponsor={sponsor} />
              </Carousel.Slide>
            ))}
          </Carousel>
          <div className="flex w-full flex-col items-center justify-evenly space-y-8 space-x-6 py-2 align-middle md:flex-row md:space-y-0"></div>
        </div>

        {/* Main Footer */}
        <div className="flex md:flex-row flex-col min-h-[160px] justify-between border-0 border-y border-solid border-slate-400 py-6 leading-9">
          <div className="mx-auto w-72 items-center leading-3 md:ml-0 md:max-w-[240px] md:items-start mb-8 md:mb-0">
            <Image
              src="/img/svg/logo-color-full.svg"
              alt="South Central STEM Collective logo"
            />
            <Text color="dimmed" size="sm">
              SC2 is 501(c)(3) non-profit focused on providing STEM
              opportunities for students in Franklin County PA.
            </Text>
          </div>

          {/* Links */}
          <div className="justify-between md:flex grid grid-cols-2 gap-6 mx-auto md:mx-0">
            <div className="flex md:w-40 flex-col items-center md:items-start">
              <Text size="lg" weight={700} className="dark:text-zinc-400">
                Support us
              </Text>
              <Link to="/wiki/donations" className="text-gray">
                Donate
              </Link>
              <Link to="/sponsors" className="text-gray">
                Sponsors
              </Link>
            </div>
            <div className="flex md:w-40 flex-col items-center md:items-start">
              <Text size="lg" weight={700} className="dark:text-zinc-400">
                Find us online
              </Text>
              <Link to="https://go.scstem.tech/facebook" className="text-gray">
                Facebook
              </Link>
              <Link to="https://go.scstem.tech/linkedin" className="text-gray">
                LinkedIn
              </Link>
              <Link to="https://go.scstem.tech/github" className="text-gray">
                GitHub
              </Link>
            </div>
            <div className="flex md:w-40 flex-col col-span-2 mx-auto items-center md:items-start">
              <Text size="lg" weight={700} className="dark:text-zinc-400">
                Member area
              </Text>
              <a className="text-gray" href="/team">
                Team Login
              </a>
              <Link to="https://go.scstem.tech/slack" className="text-gray">
                Slack
              </Link>
              <Link to="http://mail.scstem.org" className="text-gray">
                Gmail
              </Link>
              <Link to="http://drive.scstem.org" className="text-gray">
                Google Drive
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mx-auto flex w-80 flex-col items-center justify-between md:w-full md:flex-row">
          <Text color="dimmed" size="sm" className="text-center md:text-left">
            {copyright}
          </Text>
          <div className="flex justify-end">
            <ActionIcon
              component="a"
              href="mailto:info@scstem.org"
              size="lg"
              opacity={50}
              target="_blank"
            >
              <IconMail size={20} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="https://go.scstem.tech/facebook"
              size="lg"
              opacity={50}
              target="_blank"
            >
              <IconBrandFacebook size={20} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="https://go.scstem.tech/linkedin"
              size="lg"
              opacity={50}
              target="_blank"
            >
              <IconBrandLinkedin size={20} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="https://go.scstem.tech/github"
              size="lg"
              opacity={50}
              target="_blank"
            >
              <IconBrandGithub size={20} stroke={1.5} />
            </ActionIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}
