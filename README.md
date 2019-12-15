# Supero Challenge

## Setup

Once you've installed `node`, `docker` and a package manager like `yarn` the following steps will allow you to run the project

To install the dependencies run

```
yarn or npm install
```

If backend isn't already up and running please follow the instructions and then run

```
yarn start
```

## Features

- Search books by title ISBN or author
- List books
- Show the number of found entries considering filtering options
- Show all the register in a paginated fashion
- Filter books by a range of years
- See book details

## Room for improvement

The first version of the project was made using Material UI and Styled components - allowing to create a theme and access theme props inside styling files, however the pagination style would be a little different then what was proposed on original wireframe.
Since there's no layout for mobile devices responsiveness isn't well explored.
Other features could be explored, like adding loaders to the process of fetching books, adding images to book details and a few extra animations in order to make it more pleasant to use.
Home could be better organized by dividing in some extra components (one for each of the following items: header, date search, table, modal, pagination)
