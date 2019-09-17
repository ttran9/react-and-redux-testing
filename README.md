- Purpose:

  - Shortly after going through a React and Redux assignment for a technical interview which I couldn't complete I stumbled across this video after looking for an introduction on testing using React and Redux. I am making this repository to have a reference. I will be creating branches for each individual video. My initial upload will have changes up to the end of video 1.
  - A link to the playlist is [here](https://www.youtube.com/playlist?list=PL-Db3tEF6pB8Am-IhCRgyGSxTalkDpUV_)

- Video 1:

  - There was an error I encountered relating to using Jest as a dev dependency so I have removed this from the package.json file.

- Video 2:

  - We can use data-test to prevent a developer from going in and changing the class of a tag and potentially breaking a test.
    - This is a way to let someone know to not change this value because it may potentially break a test.
  - Functional Component vs Class Based Component
    - A difference is that in the class based components is that we can use lifecycle methods such as "componentDidMount() or classWillReceiveProps()."
  - Connected Components
    - Components that are connected to the Redux Store.

- Video 3:

  - I had an issue with not being able to find a module so I referred to this [thread](https://github.com/facebook/create-react-app/issues/7183) for a solution.
    - I simply ran "npm add @babel/runtime" to resolve this issue and restarted the application.
  - https://github.com/facebook/prop-types
  - https://github.com/ratehub/check-prop-types

- Video 4:

  - installing dependencies for this video was done using the command below.
    - npm i redux react-redux redux-thunk

- Video 5:

  - Pure function (reducers) vs Impure function
    - Pure function returns a new piece of state.
      - The pure function doesn't mutate or make any changes to anything outside the scope of that function.
  - When working with reducers there shouldn't be any complex logic so all you want to do is return a new piece of state so you just take the payload and just return it.

- Video 6:

  - npm i axios
  - In terms of the "\_integrationTests" directory we do this because since we are not testing a specific functionality to a component, reducer, actionCreator, etc we will just make a directory with an index.js file and then put our tests into there.
  - yarn add -D moxios
  - Starting at about 49m25s there is a discussion about moxios.install()

- Video 7:
  - React-redux version 6 forced developers to no longer be able to pass the store in as a prop.
    - https://github.com/reduxjs/react-redux/issues/1161
    - The solution/workaround discussed in the video was written by "hjhimanshu01" (can search for this user name) and was written on March 18th, 2019.
    - npm view react-redux versions
      - the above allows us to view the react-redux versions.
    - npm view react versions
      - allows us to view react versions.
  - Enzyme gives us the "dive()" method which allows us to gain access to the component of interest.

    - The "childAt(0)" method call only gives us the declaration of the component but we have no access to contents inside of the component.

* Other Build Note(s):
  - This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
