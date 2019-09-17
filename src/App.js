import React, { Component } from "react";
import Header from "./components/header";
import "./app.scss";
import Headline from "./components/headline";
import SharedButton from "./components/button";
import ListItem from "./components/listItem";
import { connect } from "react-redux";
import { fetchPosts } from "./actions/index";
import "./app.scss";

/*
 This below const is not used within our app. It is only used to demonstrate the testing of PropTypes.
*/
const tempArr = [
  {
    fName: "Joe",
    lName: "Bloggs",
    email: "joebloggs@gmail.com",
    age: 24,
    onlineStatus: true
  }
];

class App extends Component {
  constructor(props) {
    super(props);
  }

  fetch = () => {
    this.props.fetchPosts();
  };

  render() {
    const { posts } = this.props;
    const configButton = {
      buttonText: "Get posts",
      emitEvent: this.fetch
    };

    return (
      <div className="App">
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            desc="Click the button to render posts"
            tempArr={tempArr}
          />
          <SharedButton {...configButton} />
          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body
                };
                return <ListItem key={index} {...configListItem} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     posts: state.posts
//   };
// };

export const mapStateToProps = state => ({
  posts: state.posts
});

export const mapDispatchToProps = dispatch => ({
  // addTodoItem: newItem => dispatch(addTodoItem(newItem)),
  // returnItems: () => dispatch(returnItems())
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(App);
