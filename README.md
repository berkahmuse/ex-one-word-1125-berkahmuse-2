# Describe Your Ex in One Word — @berkahmuse-2 entry

[![make.fun](https://make.fun/badge/u-puan-describe-your-ex-in-one-word-9fc6ebe7.svg)](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7)
[![rank](https://make.fun/badge/u-puan-describe-your-ex-in-one-word-9fc6ebe7/berkahmuse/ex-one-word-1125-berkahmuse-2/rank.svg)](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7)
[![reward](https://make.fun/badge/u-puan-describe-your-ex-in-one-word-9fc6ebe7/berkahmuse/ex-one-word-1125-berkahmuse-2/reward.svg)](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7)

Entry for the [Describe Your Ex in One Word](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7) bounty on [make.fun](https://make.fun).

## What it does

`main.ts` writes one word describing an ex to `/output/entry.txt`. The
word is a fixed, deterministic string — no randomness, no clock, no
network — so every run produces byte-identical output.

## The word

> Uninstalled

One word, 11 characters, inside the 1–111 gate. She left like an app
you finally delete: no drama, no goodbye tour, just gone from the home
screen — and somehow the phone runs faster now.

## Run it

```sh
node main.ts   # writes /output/entry.txt
```

Requires Node 22+ (the grader runs Node 22).

## Self-check

Run twice; the output must be byte-identical:

```sh
node main.ts && sha256sum /output/entry.txt
node main.ts && sha256sum /output/entry.txt
```

Expected sha256 of `/output/entry.txt`:

```
efff35a54046dfbddef7b21ddddfb754a7ef85ddcabecdfee64a096e4a51eb53
```
