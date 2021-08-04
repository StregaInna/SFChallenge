# simpleFractalChallenge
## introduction (on scalability):
I chose to build this out as a webapp with a full backend, even though it is technically beyond the scope of the assignment.
I did this because when I imagine a theoretical client wanting this to be something that could be scaled up from the simple MVP.

For example, we might someday want to be able to add new coders to the data set. 
We might want to be able to reassign a coder from one company to another.
We might also want to some day add more information about the companies, which would allow for more sophisticated comparisons.

Throughout the code you will find occasional comments on where we might plug in the components neede for adding some of these features. 

## setup
To start with you will need to make the database(s).
use the following commands:

createDB simple-fractal-challenge 
createDB simple-fractal-challenge-test

You will also need to install all of the node dependencies.
From inside this directory:

npm install

You will also need to seed your database by running the seed file:

npm run seed
 

