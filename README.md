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

* Other Build Note(s):
  - This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
