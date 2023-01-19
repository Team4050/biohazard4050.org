import React from "react";

interface Props {
  calendars: Calendar[];
  bgColor?: CalColor;
  noTitle?: boolean;
  noNav?: boolean;
  noDate?: boolean;
  noPrint?: boolean;
  noTabs?: boolean;
  noCalList?: boolean;
  noTimeZone?: boolean;
}

interface Calendar {
  src: string;
  color?: CalColor;
}

export enum CalColor {
  Black = "%23333333",
  NiceBrown = "%236B3304",
  Pink = "%23B1365F",
  Fuchsia = "%235C1158",
  Red = "%23711616",
  Crimson = "%23691426",
  Orange = "%23BE6D00",
  OrangeRed = "%23B1440E",
  RedOrange = "%23853104",
  BurntOrange = "%238C500B",
  BrownOrange = "%23754916",
  Gold = "%2388880E",
  Goldenrod = "%23AB8B00",
  DarkerGoldenrod = "%23856508",
  PaleGreen = "%2328754E",
  LighterGreen = "%231B887A",
  Green = "%2328754E",
  ForestGreen = " %230D7813",
  OliveGreen = "%23528800",
  JungleGreen = "%23125A12",
  AnotherOlive = "%232F6309",
  AnotherGreen = "%232F6213",
  SeaGreen = "%230F4B38",
  GoldenOlive = "%235F6B02",
  GreenGray = "%234A716C",
  OliveGray = "%236E6E41",
  DullNavy = "%2329527A",
  StandardBlue = "%232952A3",
  BlueGray = "%234E5D6C",
  BlueSteel = "%235A6986",
  DarkBlue = "%23060D5E",
  SeaBlue = "%23113F47",
  Violet = "%237A367A",
  Purple = "%235229A3",
  PurpleGray = "%23865A5A",
  PurpleBrown = "%23705770",
  DeepPurple = "%2323164E",
  Magenta = "%235B123B",
  YellowBrown = "%23875509",
  Brown = "%238D6F47",
  White = "%23ffffff",
  Graphite = "%23616161",
}

export default function CalendarFrame({
  calendars,
  bgColor,
  noTitle,
  noNav,
  noDate,
  noPrint,
  noTabs,
  noCalList,
  noTimeZone,
}: Props): JSX.Element {
  // TODO See below const { colorMode } = useColorMode();

  let src = "";
  calendars.forEach((calendar) => {
    let color = CalColor.Black;
    if (calendar.color) color = calendar.color;
    src += `&src=${calendar.src}&color=${color}`;
  });

  // TODO: Fix useColorMode let bg = colorMode === "dark" ? CalColor.Graphite : CalColor.White;
  let bg = CalColor.Graphite;
  if (bgColor) bg = bgColor;

  return (
    <iframe
      className="h-[800px] w-full border-none md:h-[900px]"
      src={`https://calendar.google.com/calendar/embed?${src}&bgcolor=${bg}&ctz=America%2FNew_York${
        noTitle ? "&showTitle=0" : ""
      }${noNav ? "&showNav=0" : ""}${noDate ? "&showDate=0" : ""}${
        noPrint ? "&showPrint=0" : ""
      }${noTabs ? "&showTabs=0" : ""}${noCalList ? "&calList=0" : ""}${
        noTimeZone ? "&showTz=0" : ""
      }`}
      scrolling="no"
    >
      Loading...
    </iframe>
  );
}
