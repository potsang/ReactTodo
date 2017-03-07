const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const configureStore = require('configureStore');
const TodoApp = require('TodoApp');
import TodoList from 'TodoList';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render TodoList', () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );

    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });
});
