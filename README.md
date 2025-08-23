# Pokemon mahjong

## Motivation
There was pokemon mahjong game my close person loved to play. When tried to find any ways to play that game now, there was only this clone written on Adobe Flash platform. So i took it and adjusted so this game at least could be played outside of some strangely looking flash game website


## How to change
I used jpexs-decompiler to adjust some of game behaviour:

- more help and change amount
- almost infinity time


## Anchors
Anchors for searching certain places across the decompiled code

### help and change grid amount

#### grid change
- xpcon = 999


#### help hint
- tscon = 999


### time ticking
- _root.sj3.onEnterFrame = function() 
- this._y += 0.001;


### action function
- function gd(...)


## TODO:

- [x] add github pages
- [x] make help button only make a hint
- [ ] add game restart button
- [ ] remove style button
- [ ] remove stage button