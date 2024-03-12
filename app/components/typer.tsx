"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Typer({}) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm a CyberSecurity Student",
      "Amateur Software Developer",
      "Backend Developer",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    // <div>
    <>
      <span>{text}</span>
      <Cursor cursorColor="#F7AB0A"/>
    </>
    // </div>
  );
}
