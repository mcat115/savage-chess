# README

[![Codeship Status for mcat115/savage-chess](https://app.codeship.com/projects/90a3633b-a191-4e64-93eb-73f322f676bd/status?branch=main)](https://app.codeship.com/projects/443350)

Welcome to Savage Chess!

The classic game, but with a simple twist! Inspired by the art and game elements of the hit viral game Among Us.

A casual version of chess you can play with friends while having a few laughs and a few drinks, regardless of chess experience. No checks, no mate to win. You play the extra move to kill the king! This is no longer a gentlemen’s game, this is war!

And like real warefare, there's nobody checking that both sides follow the rules! It's up to you to notice if your opponent does anything sneaky, like trying to move a piece in a way they aren't supposed to... call a war crime trial if you are suspicious! If you can confidently prove they cheated, they automatically lose! If you fail to, they get away with it and the game continues! If you are singed in, save the state of the board whenever you want to gather evidence. Or maybe you'll want to sneak in a slightly illegal move yourself when your opponent isn't looking... social deduction mixed with raw strategy!

It also serves as a fully functional board and pieces virtual toy! Make custom positions and save positions to try out different paths. Much like the freedom a real chess board gives, but with the ability to easily keep positions and use of unlimited pieces!

Dependencies:
Made with Ruby version 2.7.3, 
Rails version 5.2.5, 
PostgreSQL version 13.2

To create locally:
```
git clone https://github.com/mcat115/savage-chess.git
yarn install
bundle install
bundle exec rake db:create
bundle exec rake db:migrate
```
Then in two seperate terminal windows, run `bundle exec rails s` in one and `yarn run start` in another

NOTES:
- Rails uses strong naming conventions which automatically recognizes the addition or removal of plurality from certain file names. There is an error in the way rails does this, which lead to, in some cases, a model being named "board_safe" as the singular of "board_saves." I changed some lines of code to account for this inaccuracy in the framework, they are not spelling errors.
- The listed animation components do not have keyes intentionally. This is because when I added keys it messed with the frame rendering. The warning it gives in the console about the lack of key inclusions has no effect on the app.

Future plans for app:

- Optimize better, had to remove piece moving sound effects as it slowed it down too much with the already demanding animations
- Create more in depth system to save and organize positions
- Add move validation logic for each piece to still allow you to cheat, but to create parameters in which ways you can cheat while still following some basic piece restrictions (ie rook and bishop can jump, pawn can both move and attack forward and diagonally, etc)
