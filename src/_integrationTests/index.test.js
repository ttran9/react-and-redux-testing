import moxios from "moxios";
import { testStore } from "../../Utils";
import { fetchPosts } from "../actions";

describe("fetchPosts action", () => {
  beforeEach(() => {
    /*
     * Whenver we hit axios, the library is updated so we don't make an actual request through the internet but instead we just replace the request with moxios.
     * with an API instance we would just pass that below, but in this app we just pass moxios.
     */
    moxios.install();
  });

  afterEach(() => {
    // restore the axios library to its former erstate.
    moxios.uninstall();
  });

  test("Store is updated correctly", () => {
    const expectedState = [
      {
        title: "Example title 1",
        body: "Some text"
      },
      {
        title: "Example title 2",
        body: "Some text"
      },
      {
        title: "Example title 3",
        body: "Some text"
      }
    ];

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: [expectedState]
      });
    });

    return store
      .dispatch(fetchPosts())
      .then(() => {
        const newState = store.getState();
        expect(newState.posts).toBe(expectedState);
      })
      .catch(err => {
        console.log(err);
      });
  });
});
