# simpleFractalChallenge
## TL;DR
If you want to jump straight into the solution for the precentile algos, look at app/precentile-calculators

## introduction (on scalability):
I chose to build this out as a webapp with a full backend, even though it is technically beyond the scope of the assignment.
I did this because I imagine a theoretical client wanting this to be something that could be scaled up from this simple MVP.

For example, we might some day want to be able to add new coders to the data set. 
We might want to be able to reassign a coder from one company to another.
We might also want to some day add more information about the companies, which would allow for more sophisticated comparisons.

Throughout the code you will find occasional comments on where we might plug in the components needed for adding some of these features. 

## setup and run
To start with you will need to make the database(s).
use the following commands:

createDB simple-fractal-challenge 
createDB simple-fractal-challenge-test

You will also need to install all of the node dependencies:

npm install

You will also need to seed your database by running the seed file:

npm run seed

Finally, you can use this command to run the app on localhost:1337

npm run start-dev
 

