# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Geography enthusiasts who want a real challenge and come back to play often. They already know the map reasonably well and play to test and sharpen that knowledge, mostly on a phone.

## Product Purpose

Super Maps Pointer is a geography game: a country name is shown and the player finds it and clicks it on a world map. Each level sets a goal (countries to find) and a limited number of tries; reaching the goal unlocks the next level, running out of tries ends the run. Success is a player who finishes the hardest level and wants to play again.

## Positioning

Two mechanics set it apart, and the user has said the positioning is not fully settled yet:

- The map changes projection as levels progress (from level 2), so players must know a country's shape and relative position, not its spot on one familiar map.
- Difficulty climbs through levels with a goal and a capped number of tries, rather than an open-ended quiz.

## Operating Context

- Played in short, repeated sessions, primarily on mobile with touch input.
- A run goes: introduction screen, then levels Easy, Normal, Hard, Extreme, with a win screen between levels, a retry screen on failure and an end screen after the last level.
- In game: target country, tries counter, progress gauge, timer, skip button, zoomable map, sound toggle, light/dark toggle.

## Capabilities and Constraints

- Levels and rules live in `utils/rules.ts`: Easy 5 of 20 countries in 20 tries, Normal 10/30 in 25, Hard 15/40 in 30, Extreme 20/50 in 40. Normal introduces a new projection.
- Map data is Natural Earth 1:50m (`public/ne_50m_countries.json`, `public/ne_50m_ocean.json`), rendered with react-simple-maps.
- Touch-first: every interaction must work well with a finger on a phone, including selecting small countries.
- Bilingual English and French. All copy goes through i18n (`i18n/locales/*.json`); more locales may be added, so layouts must tolerate longer strings.
- Light and dark modes, both first-class.
- No accounts, persistence or leaderboard exist today.
- Open decision: the full positioning against other geography quizzes.

## Brand Commitments

- Name: Super Maps Pointer. Logo at `public/images/logo.png`.
- Playful voice to keep: short exclamatory copy, level emojis (🏴‍☠️ 🤯 🫡), confetti on success, sound effects for start, good and wrong answers.

## Evidence on Hand

- Logo, favicons and web manifest in `public/`.
- Sounds in `public/sounds/` (`start.mp3`, `good.wav`, `bad.mp3`).
- No player numbers, testimonials, press or reviews exist; do not invent any.

## Product Principles

1. Challenge over hand-holding: difficulty comes from real geographic knowledge, and the projection change is the signature twist.
2. Every tap is fair: a miss must come from the player's knowledge, never from a hard-to-hit target or an unclear map.
3. Get back into a run fast: the introduction, retry and next-level screens never stand between the player and the map longer than needed.
4. Playful, not childish: celebration and humor suit enthusiasts who take the challenge seriously.
