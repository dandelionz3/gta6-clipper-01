# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/dandelionz3/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/dandelionz3/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 38-second vertical GTA 6 clip (a YouTube Short) cut from a fan-made Vice City cinematic: the neon skyline, Lucia walking out of prison, Jason, and the "one last job" bank walk hook the viewer, then the clip turns to make.fun — big on-screen text says you can make clips like this with AI and earn money on make.fun. The video itself is the entry; places go by its YouTube views, the most first, and the top 20 share $500.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from this repository to the output directory, where the house reads the video's YouTube address and then reads its views through the YouTube Data API.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wzx9n98z&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
