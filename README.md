# README

Welcome to Savage Chess!

The classic game, but with a simple twist! Inspired by the art and game elements of the hit viral game Among Us. https://www.youtube.com/watch?v=UwIcMCsCZqg

A casual version of chess you can play with friends regardless of chess experience. No checks, no mate to win. You play the extra move to kill the king! This is no longer a gentlemen’s game, this is war!

And like real warefare, there's nobody checking that both sides follow the rules! It's up to you to notice if your opponent does anything sneaky, like trying to move a piece in a way they aren't supposed to... pause the game and call them out if you are suspicious! I made this app to have a digitial chess experiece akin to having a real board in front of you. Almost all online chess apps have code inhibiting how you can move pieces, which can be frustuing and inhibiting at times. Make up your own rules if you want!

Naturally, it also serves as a fully functional board and pieces virtual toy! Make custom positions and save positions to try out different paths. Much like the freedom a real chess board gives, but with the ability to easily keep positions and use of unlimited pieces!

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

Then in two seperate terminal windows both open to the project, run `bundle exec rails s` in one, and `yarn run start` in the other if it's a Mac/Linux, or `ruby ./bin/webpack-dev-server` in the other if it's Windows. The app should then be running on `http://localhost:3000/`

If you are using Windows or Linux, add these lines in the database.yml file under both the development and test code blocks

```
username: postgres
password: <your database password here>
host: localhost

```

NOTES:

- Rails uses strong naming conventions which automatically recognizes the addition or removal of plurality from certain file names. There is an error in the way rails does this, which lead to, in some cases, a model being named "board_safe" as the singular of "board_saves." If you spot this, it is due to the inaccuracy in the framework, not spelling a error.
- The listed animation components do not have keys intentionally. This is because when I added keys it messed with the frame rendering. The warning it gives in the console about the lack of key inclusions has no effect on the app.
- Heroku removed free databases, so my heroku production app no longer works. I have not deleted the pipeline in case I ever decide to pay the fees to host this app on their servers later on. I have left it idle, with the app and CI failing because it needs a database I have not initialized. Here is the markdown code to add the CI status to the README if I decide to pay the new fees to host my app again. `[![Codeship Status for mcat115/savage-chess](https://app.codeship.com/projects/90a3633b-a191-4e64-93eb-73f322f676bd/status?branch=main)](https://app.codeship.com/projects/443350)`
