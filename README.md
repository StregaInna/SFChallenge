# S.F. Challenge
This is a solution I wrote for a coding challenge, updated to incorporate the feedback I was given.
The Coding challenge was to right a function that compares the coding and communication scores from coders who share a job title and work at "similar companies," and a React App that runs that function and displays the results.
The seed data was supplied in .csv files, and in this updated version that data is loading using jquery.

## TL;DR
If you want to jump straight into the solution for the precentile algo, look at app/calculators

## introduction:
I chose to build this out as a webapp with a full backend, rather than simple using "create React app".
I did this because I imagine a theoretical client wanting this to be something that could be scaled up from this simple MVP.

For example, we might some day want to be able to add new coders to the data set. 
We might want to be able to reassign a coder from one company to another.
We might also want to some day add more information about the companies, which would allow for more sophisticated comparisons.

Throughout the code you will find occasional comments on where we might plug in what is needed for adding some of these features. 

## how I would walk through the code
If I were walking you through this code in person (or over zoom) I'd start with the inputForm component,
follow the reqquest from componentDidMount back through the thunks to the api routes and data models,
then back forward to where the data is set in state.
Next I would look at the onSubmit function in the same inputForm component and follow it's submission through the field validators,
into the thunk that calls the percentile calculator, through that calculator, back to the redux file that loads the outcome into state, 
and then into the StatsDisplay component. 
You will find coments along the way.
