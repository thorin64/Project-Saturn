import "../css/index.css";
export default function Welcome() {
  return (
    <>
      <h1>
        Welcome to Project <span id="project-saturn">S</span>aturn, the first of
        many projects from my portfolio!
      </h1>
      <div className="sgSaturn-resume">
        <img
          className="sgSaturn-image1"
          src="/img/with games.jpg"
          alt="Sega Saturn MK2 JP with its games"
        />

        <img
          className="sgSaturn-image2"
          src="/img/Sega-Saturn-JP-Mk2-Console-Set.webp"
          alt="Sega Saturn MK2 JP"
        />
        <img
          className="sgSaturn-image3"
          src="/img/with box.jpg"
          alt="Sega Saturn MK2 JP with its box"
        />
      </div>
      <div className="sgSaturn-txt-wrapper">
        <div className="sgSaturn-txt">
          &emsp;&ensp;The Sega Saturn is a home video game console developed by
          Sega and released on November 22, 1994, in Japan, May 11, 1995, in
          North America, and July 8, 1995, in Europe. Part of the fifth
          generation of video game consoles, it is the successor to the
          successful Genesis. The Saturn has a dual-CPU architecture and eight
          processors. Its games are in CD-ROM format, including several ports of
          arcade games and original games.
          <div>
            Source:
            <a href="https://en.wikipedia.org/wiki/Sega_Saturn">Wikipedia!</a>
          </div>
          &emsp;&ensp;This (in my words) amazing project allow you to manage
          <span id="color-a"> your</span>: <span id="color-b">playtime</span>,
          <span id="color-c"> collection</span> and
          <span id="color-main"> love</span> for the
          <span id="color-c"> Saturn library!</span>
        </div>
      </div>
    </>
  );
}
