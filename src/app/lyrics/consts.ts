interface Song {
  title: string;
  lyrics: string;
}

import { SweetButPsycho, SaveYourTears, Symphony, DanceMonkey } from "./lyrics";

export const songList: Song[] = [
  {
    title: "Sweet but Psycho",
    lyrics: SweetButPsycho,
  },
  {
    title: "Save Your Tears",
    lyrics: SaveYourTears,
  },
  {
    title: "Symphony",
    lyrics: Symphony,
  },
  {
    title: "DanceMonkey",
    lyrics: DanceMonkey,
  },
];
