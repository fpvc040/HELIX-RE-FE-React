import React from 'react';
import { shallow } from 'enzyme';

import TestComponent from '..';

jest.mock('../../../common/Link', () => function Link() { return null; });

let props;
beforeEach(() => {
  props = {};
});

describe('button', () => {
  it('renders base component', () => {
    const wrapper = shallow(<TestComponent {...props} />);

    expect(wrapper.name()).toBe('Button');
    expect(wrapper.prop('type')).toBe('button');
    expect(wrapper.find('.default')).toHaveLength(1);
  });

  it('renders icon button', () => {
    props.icon = true;
    const wrapper = shallow(<TestComponent {...props} />);

    expect(wrapper.find('.icon')).toHaveLength(1);
  });
});

describe('input', () => {
  it('renders form submit button', () => {
    props.type = 'submit';
    const wrapper = shallow(<TestComponent {...props} />);

    expect(wrapper.name()).toBe('Button');
    expect(wrapper.prop('htmlType')).toBe('submit');
  });
});

describe('link', () => {
  it('renders base component', () => {
    props.to = 'foo';
    const wrapper = shallow(<TestComponent {...props} />);

    expect(wrapper.name()).toBe('Link');
    expect(wrapper.prop('to')).toBe('foo');
  });

  it('renders disabled button if disabled', () => {
    props.disabled = true;
    props.to = 'foo';
    const wrapper = shallow(<TestComponent {...props} />);

    expect(wrapper.name()).toBe('Button');
    expect(wrapper.prop('disabled')).toBeTruthy();
  });
});
