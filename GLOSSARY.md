# Super Maps Pointer

A geography game: a country name is shown and the player finds it on a world map, level after level, under a capped number of tries.

## Play

**Run**:
One session from the introduction screen to the end screen, made of Level runs played in Level order.
_Avoid_: Game, session

**Level**:
One of Easy, Normal, Hard or Extreme, played in that order.
_Avoid_: Stage, step, difficulty

**Level rules**:
Everything that defines a Level: its goal, its tries, its sample size and its position in the Level order.
_Avoid_: Config, settings

**Level run**:
One attempt at a Level, with its own sample of countries; a retry starts a new Level run on the same Level.
_Avoid_: Round, game

**Goal**:
The number of countries to find to win a Level run.
_Avoid_: Win condition, target

**Try**:
One click on the map, right or wrong; running out of tries loses the Level run.
_Avoid_: Attempt, guess, loss condition

**Skip**:
Moving to the next Target country without spending a Try.
_Avoid_: Pass

**Target country**:
The country the player must currently find.
_Avoid_: Country to guess, current country

## Map

**Projection**:
The map projection shown during a Level run; Easy is always Mercator, and from Normal on each Level draws a different one at random.
_Avoid_: Map type, geo projection

**Micro-country**:
A country too small to tap with a finger, drawn with a circle on top of its shape.
_Avoid_: Small country, tiny country
