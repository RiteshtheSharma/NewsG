# NewsG 🗞

News App is a simple news app 🗞️ which uses [NewsAPI](https://newsapi.org/) to fetch top news headlines from the API. The main aim of this app is to be a leading example of how to build Modern React applications using Material UI

The idea is to keep the app super simple while demonstrating new libraries and tools which makes it easier to build high quality React applications.

# Video demo 
- Please click the image to see the project demo video , this video will redirect you to project video
[![IMAGE ALT TEXT HERE](https://raw.githubusercontent.com/RiteshtheSharma/NewsG/master/Screenshot%20from%202024-03-12%2014-18-22.png)](https://media.githubusercontent.com/media/RiteshtheSharma/NewsG/master/recording-2024-03-07-22-16-09.webm)

# Development Setup 🖥

## Prerequisites 
- Node.js and npm
- Code Editor: VsCode, Sublime Text or Atom
## development environment customization 
### tools and extensions 
- Prettier
- ESLint
- Javascript (ES6) code snippet
- ES7+ React/Redux/React-Native snippets
- React Developer Tools
- eslint


## API key 🔑
You'll need to provide API key to fetch the news from the News Service (API). Currently the news is fetched from [NewsAPI](https://newsapi.org/)

- Generate an API key (It's only 2 steps!) from [NewsAPI](https://newsapi.org/)
- Create new file named -> `.env` in our project root folder
- Add the API key as shown below [Make sure to keep the double quotes]:
```
    REACT_APP_NEWS_API=<INSERT_YOUR_API_KEY>
```
- npm run start ( To run app locally )



## Libraries and tools 🛠

NewsG uses libraries and tools used to build Modern React application

- [React](https://react.dev/) Javascript library to create Single page application with components
- [React Router](https://reactrouter.com/en/main) Client side routing
- [MUI](https://mui.com/) Provide components for creating UI


## Architecture


### URL 
This app has many web pages which are ofcourse render as a single page app must. Following briefly describes the relative urls for each web page 
```
  - /                    : General headlines of newsapi (Home) 
  - /about               : About the app
  - /business            : Business headlines of newsapi 
  - /general             : same as / 
  - /sports              : Sports headlines of newsapi 
  - /technology          : Technology headlines of newsapi 
  - /health              : health headlines of newsapi 
  - /entertainment       : entertainment related headlines of newsapi 
  - /science             : science related headlines of newsapi 
  - /site_git_repo_link  : Redirect to my github repository for this project   
  ```

### Components  
Below is tree structure representation of how the components compose the complete Single page app 
- Main Components (Components of App.jsx )
   - Navbar 
   - News, About, RedirectPage, RoutingError  

- NavBar :  
  components
  - DRawer :
       It it is only used for mobile resolution to ensure that web app is adaptable for each type of device 
        Props
           - pages : array of strings for navigation item names 
           - handleDrawerToggle : function to toggle Navigation Drawer for each click on hamburger icon
           
- News : 
  This component is used to display the headlines with link about different newses according to different categories which can be picked up using the navbar items. It uses infinite scroll to load more news headlines. 
  Props : 
    - pageSize    : No of headlines to be fetched by newsapi at each vertical scroll 
    - category    : category of headlines 
    - country     : country code whose news user in which the site is running 
    - apiKey      : your newsapi key 
    - setProgress : tells how much the content is loaded [0-100]  
  Components : 
     - NewsItems : headline in form of Card component   

- About : 
   This component briefly tells about the app, its creator and how to contribute in this app. 

- RedirectPage : Component which informs user about website 's redirection to different website and simultaneously redirects to different page  

- RoutingError : If user tries to acess any other page other than available pages in this website then this component will appear to inform user about absence of that url 