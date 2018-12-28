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
    // Given a user is on the Fizzbuzz form
    // When she enters any number into an input box
    // AND clicks the submit button
    // Then the number is displayed
    it('has an input field', () => {
      const wrapper = mount(<App/>);
      expect(wrapper.find('input').length).toEqual(1);
    });

    it('should only display the text entered in the input when button is pressed', () => {
        const wrapper = mount(<App/>);
        wrapper.find('input').simulate('change', { target: { value: 18 }});
        expect(wrapper.find('p').length).toEqual(0);

        wrapper.find('button').simulate('click');
        expect(wrapper.find('p').text()).toEqual('18');
    });

    it('should not display the text when user starts to enter a second input', () => {
        const wrapper = mount(<App/>);
        wrapper.find('input').simulate('change', { target: { value: 18 }});
        wrapper.find('button').simulate('click');
        expect(wrapper.find('p').text()).toEqual('18');

        wrapper.find('input').simulate('change', { target: { value: 70 }});
        expect(wrapper.find('p').length).toEqual(0);
    });
});