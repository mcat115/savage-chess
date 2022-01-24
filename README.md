# README

[![Codeship Status for mcat115/savage-chess](https://app.codeship.com/projects/90a3633b-a191-4e64-93eb-73f322f676bd/status?branch=main)](https://app.codeship.com/projects/443350)

Welcome to Savage Chess!

Try it out! (http://savage-chess.herokuapp.com/)
Note: Free servers on heroku are very slow, so the end-of-game animations often lag beyond viewabilility. If you want to check them out but heroku is lagging, here is a video of them all: https://www.youtube.com/watch?v=UwIcMCsCZqg

The classic game, but with a simple twist! Inspired by the art and game elements of the hit viral game Among Us.

A casual version of chess you can play with friends while having a few laughs, regardless of chess experience. No checks, no mate to win. You play the extra move to kill the king! This is no longer a gentlemen’s game, this is war!

And like real warefare, there's nobody checking that both sides follow the rules! It's up to you to notice if your opponent does anything sneaky, like trying to move a piece in a way they aren't supposed to... pause the game and call them out if you are suspicious! If you can confidently prove they cheated, they automatically lose! If you fail to, they get away with it and the game continues! If you are singed in, save the state of the board whenever you want to gather evidence. Or maybe you'll want to sneak in a slightly illegal move yourself when your opponent isn't looking... social deduction mixed with raw strategy!

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

Then in two seperate terminal windows both open to the project, run `bundle exec rails s` in one, and `yarn run start` in the other if it's a Mac, or `ruby ./bin/webpack-dev-server` in the other if it's Windows.

If you are using Windows, add these lines in the database.yml file under both the development and test code blocks

```
username: postgres
password: <your database password here>
host: localhost

```

NOTES:

- Rails uses strong naming conventions which automatically recognizes the addition or removal of plurality from certain file names. There is an error in the way rails does this, which lead to, in some cases, a model being named "board_safe" as the singular of "board_saves." If you spot this, it is due to the inaccuracy in the framework, not spelling a error.
- The listed animation components do not have keys intentionally. This is because when I added keys it messed with the frame rendering. The warning it gives in the console about the lack of key inclusions has no effect on the app.
