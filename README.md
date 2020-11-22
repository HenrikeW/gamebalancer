# Game Balancer - for fair board game play

You're two who love to play baord games but only one of you is a big thinker, taking hours for each turn? This is your tool to keep your games balanced!

## What it does

The Game Balancer counts the time each player takes for his/her turn. The app is set up for two players with one time counter each. It might remind you of a chess clock but in fact it rather works like a seesaw. The goal is not to keep the total playing time short (cause board games are fun!) but to keep the two players' turn time balanced. 

As soon as the first player starts his/her first turn, his/her time counter will start to rise. As soon as he/she stops and the second player starts his/her turn, the first player's time counter will count down to zero before the second player's time counter starts rising. To keep the play balanced both player time counters should be close to zero after every other turn.

## Tech used

The app is built in Vanilla JS, using CSS3, HTML5 and JavaScript ES6.

## The limitations

This is the very first, very basic version of the app. The time counter counts seconds but they are not displayed in a common time format. The layout is kept very simple and the players are called "Player One" and "Player Two".
I'm planning to implement a more readable time format with seconds, minutes and hours as well as the option to include customized player names and a nicer design. 

## View it live

You can see the site and use it here: https://game-balancer.netlify.app/