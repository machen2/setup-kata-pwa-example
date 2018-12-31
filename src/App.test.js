import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should use Enzyme', () => {
  const wrapper = mount(<App/>);
  expect(wrapper).toBeTruthy();
});

describe('FizzBuzz', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App/>);
  });

  // Given a user is on the Fizzbuzz form
  // When she enters any number into an input box
  // AND clicks the submit button
  // Then the number is displayed
  it('has an input field', () => {
    expect(wrapper.find('input').length).toEqual(1);
  });

  it('should only display the text entered in the input when button is pressed', () => {
      wrapper.find('input').simulate('change', { target: { value: 13 }});
      expect(wrapper.find('p').length).toEqual(0);

      wrapper.find('button').simulate('click');
      expect(wrapper.find('p').text()).toEqual('13');
  });

  it('should not display the text when user starts to enter a second input', () => {
      wrapper.find('input').simulate('change', { target: { value: 13 }});
      wrapper.find('button').simulate('click');
      expect(wrapper.find('p').text()).toEqual('13');

      wrapper.find('input').simulate('change', { target: { value: 70 }});
      expect(wrapper.find('p').length).toEqual(0);
  });

  // Given a user is on the Fizzbuzz form
  // When she enters 3 into an input box
  // AND clicks the submit button
  // Then the word Fizz is displayed
  it('should display Fizz when user enters 3 in input and submits', () => {
      const wrapper = mount(<App/>);
      wrapper.find('input').simulate('change', { target: { value: 3 }});
      wrapper.find('button').simulate('click');
      expect(wrapper.find('p').text()).toEqual('Fizz');
  });

  // Given a user is on the Fizzbuzz form
  // When she enters 5 into an input box
  // AND clicks the submit button
  // The word Buzz is displayed
  it('should display Buzz when user enters 5 in input and submits', () => {
      const wrapper = mount(<App/>);
      wrapper.find('input').simulate('change', { target: { value: 5 }});
      wrapper.find('button').simulate('click');
      expect(wrapper.find('p').text()).toEqual('Buzz');
  });

  // Given a user is on the Fizzbuzz form
  // When she enters the number that is a multiple of 3 into an input box
  // AND clicks the submit button
  // The word Fizz is displayed
  it('should display Fizz when user enters multiple of 3 in input and submits', () => {
      const wrapper = mount(<App/>);
      wrapper.find('input').simulate('change', { target: { value: 9 }});
      wrapper.find('button').simulate('click');
      expect(wrapper.find('p').text()).toEqual('Fizz');
  });

  // Given a user is on the Fizzbuzz form
  // When she enters the number that is a multiple of 5 into an input box
  // AND clicks the submit button
  // The word Buzz is displayed
  it('should display Buzz when user enters multiple of 5 in input and submits', () => {
      const wrapper = mount(<App/>);
      wrapper.find('input').simulate('change', { target: { value: 10 }});
      wrapper.find('button').simulate('click');
      expect(wrapper.find('p').text()).toEqual('Buzz');
  });

  // Given a user is on the Fizzbuzz form
  // When she enters the number 15 into an input box
  // AND clicks the submit button
  // The word Fizzbuzz is displayed
  it('should display FizzBuzz when user enters 15 in input and submits', () => {
      const wrapper = mount(<App/>);
      wrapper.find('input').simulate('change', { target: { value: '15' }});
      wrapper.find('button').simulate('click');
      expect(wrapper.find('p').text()).toEqual('FizzBuzz');
  });
});