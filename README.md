## Folder structure
Project structure should look like below after checkout:
```
react-basic/
  README.md
  package.json
  package-lock.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    index.js
    RoutingContainer.js
    good-reads/
      Components/
        Table/
          Table.css
          Table.js
          TableRow.js
          TableHeader.js
        Pagination/
          Pagination.css
          Pagination.js
        Elements/
          Select.js
          Select.css
          Button.js
          Button.css
        Loader/
          Loader.js
          Loader.css
      config.js
      constants.js
      GoodRead.css
      GoodRead.js
        index.js
    home/
      Home.js
      index.js
    list/
       index.js
       List.css
       List.js
    Components/
       ListItem.js
```

## Steps to run project

1. git clone GIT_URL
2. In the project directory, you need to run:
   1. npm install
   2. npm run start

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## list
'/list' route contains the page with basic to-do app having todo and completed item list.

## good-reads
'/good-reads' route contains a page with table that show list of books fetched from [https://www.goodreads.com/api] with pagination.
