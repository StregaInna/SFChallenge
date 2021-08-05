// I have to be honest and admit that writing automated tests was not covered in my coding bootcamp
// I tried here to write some by reverse engineering ones I've seen elsewhere
// That being said, I appreciate well written tests as a guideline when coding, 
//   and aspire to learn to the skill of writing them.
// My current workflow involves testing my backend with Postman and Postico.
// Dataflow to the front end was checked by building a superfluous component (see components/DisplayData.js)
// Debugging was largely done through chrome debugger, redux logger, and (when all else failed) console.log 


/* eslint-disable no-unused-expressions */
import { expect } from "chai";
import { mount } from "enzyme";
import sinon from "sinon";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";
import waitForExpect from "wait-for-expect";
import { Provider } from "react-redux";


const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);
const initialState = {
  students: []
};

import mockAxios from "../mock-axios";
import { setCoders, fetchCoders } from "../../app/redux/coders";

import store from "../../app/store";

import rootReducer from "../../app/redux";
import { createStore } from "redux";

const { db, Coder } = require("../../server/db");

const seed = require("../../seed");
const coders = [
  {
      candidate_id:889,	
      communication_score:114028,	
      coding_score:180944,	
      title:'Engineer',	
      company_id:2,
  },
  {
      candidate_id:890,	
      communication_score:62734,	
      coding_score:64000,	
      title:'Engineer',	
      company_id:2,
  },
  {
      candidate_id:891,	
      communication_score:167656,	
      coding_score:231216,	
      title:'Engineer',	
      company_id:2,
  }
]

  describe("Redux", () => {
    let fakeStore;
    beforeEach(() => {
      fakeStore = mockStore(initialState);
    });

    describe("set/fetch coders", () => {
      xit("setCoders action creator returns a valid action", () => {
        expect(setCoders(coders)).to.deep.equal({
          type: "SET_CODERS",
          coders
        });
      });

      xit("fetchCoders thunk creator returns a thunk that GETs /api/coders", async () => {
        await fakeStore.dispatch(fetchCoders());
        const [getRequest] = mockAxios.history.get;
        expect(getRequest).to.not.equal(undefined);
        expect(getRequest.url).to.equal("/api/coders");
        const actions = fakeStore.getActions();
        expect(actions[0].type).to.equal("SET_CODERS");
        expect(actions[0].coders).to.deep.equal(coders);
      });
    });

    describe("reducer", () => {
      let testStore;
      beforeEach(() => {
        testStore = createStore(rootReducer);
      });

      xit("*** returns the initial state by default", () => {
        throw new Error("replace this error with your own test");
      });

      xit("reduces on SET_CODERS action", () => {
        const action = {
          type: "SET_CODERS",
          coders
        };

        const prevState = testStore.getState();
        testStore.dispatch(action);
        const newState = testStore.getState();

        expect(newState.coders).to.be.deep.equal(coders);
        expect(newState.coders).to.not.be.equal(prevState.coders);
      });
    });
  });

  describe("Express API", () => {
    const { findAll: coderFindAll } = Coder;
    beforeEach(() => {
      Coder.findAll = sinon.spy(() => coders);
    });
    afterEach(() => {
      Coder.findAll = coderFindAll;
    });
  });
