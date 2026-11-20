// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the video itself: a vertical GTA 6 clip pitching make.fun, published
// public on YouTube. This program does exactly one job — it hands the video's address
// to the gate by copying VIDEO.json from the repository root into the output
// directory, where the house reads it and then reads the video's views through the
// YouTube Data API. Nothing this program writes is scored.
//
// Local run (from this repository root):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// Inside the grader the same two variables stand in for /bot and /output.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const videoPath = join(BOT_DIR, 'VIDEO.json');

// Read VIDEO.json first so a broken file fails loudly instead of silently
// copying a placeholder the gate would refuse.
const video = JSON.parse(readFileSync(videoPath, 'utf8')) as { url?: unknown };
if (typeof video.url !== 'string' || !video.url.startsWith('https://')) {
  console.error(`VIDEO.json at ${videoPath} holds no https url: ${JSON.stringify(video)}`);
  process.exit(1);
}

// The gate only takes a YouTube video address (Share button shape) with an
// exactly 11-character id: youtube.com/shorts/<id>, youtube.com/watch?v=<id> or
// youtu.be/<id>, optionally followed by a query or fragment. A placeholder or any
// other address fails the entry, so refuse it here. The id must end after 11
// characters (or at ?/#) so a long placeholder word cannot slip through.
const YOUTUBE_URL = /^https:\/\/(www\.|m\.)?(youtube\.com\/(shorts\/|watch\?v=)|youtu\.be\/)([A-Za-z0-9_-]{11})([?#].*)?$/;
if (!YOUTUBE_URL.test(video.url)) {
  console.error(`VIDEO.json url is not a YouTube video address: ${video.url}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(videoPath, join(OUTPUT_DIR, 'VIDEO.json'));
console.log(`VIDEO.json copied to ${OUTPUT_DIR} (url: ${video.url})`);
