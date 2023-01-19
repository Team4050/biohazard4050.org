import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import React, { useRef } from "react";
import { createStyles, Image } from "@mantine/core";

interface Props {
  className?: string;
  images: string[];
  delay?: number;
  minHeight?: number;
}

const useStyles = createStyles((_theme, _params, getRef) => ({
  controls: {
    ref: getRef("controls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  root: {
    "&:hover": {
      [`& .${getRef("controls")}`]: {
        opacity: 1,
      },
    },
  },
}));

export default function Scroller({
  className,
  images,
  delay,
  minHeight,
}: Props) {
  const autoplay = useRef(Autoplay({ delay: delay ?? 4000 }));
  const { classes } = useStyles();

  return (
    <Carousel
      loop
      draggable={false}
      plugins={[autoplay.current]}
      classNames={classes}
      mx="auto"
      className={className}
    >
      {images.map((image) => (
        <Carousel.Slide key={image}>
          <Image src={image} radius="lg" height={minHeight} withPlaceholder />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
