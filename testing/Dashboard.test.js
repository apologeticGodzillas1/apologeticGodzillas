import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '../client/src/components/Dashboard';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
// var { createRenderer } = React.addons.TestUtils;

describe('App', () => {
  var app;

  it('should test that the test suite is working', function () {
    var test = true;
    expect(test).to.equal(true);
  })

  it('is a stateful class component', () => {
    expect(React.Component.isPrototypeOf(Dashboard)).to.equal(true);
  });

  it('should render two components', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find(<CategoryList />)).to.equal(true);
    expect(wrapper.find(<Graph />)).to.equal(true);
  });

  it('should render an `.container-fluid`', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find('.row')).to.have.length(1);
  });

// For all children
  it('should render children when passed in', () => {
    const wrapper = shallow(<Dashboard />);
    expect(JSON.stringify(wrapper.props)).to.equal('{add:this.add.bind(this), get: this.get.bind(this), handleChangeName: this.handleChangeName.bind(this), handleChangeMind: this.handleChangeMind.bind(this), handleChangeBody: this.handleChangeBody.bind(this), handleChangeSoul: this.handleChangeSoul.bind(this), handleClick: this.handleClick.bind(this), handleChangeUsername: this.handleChangeUsername.bind(this), getInfoClick: this.getInfoClick.bind(this), state: this.state}');
  });

// good for categoryList
//   it('simulates click events', () => {
//     const onButtonClick = sinon.spy();
//     const wrapper = shallow(
//       <App onButtonClick={onButtonClick} />
//     );
//     wrapper.find('button').simulate('click');
//     expect(onButtonClick.calledOnce).to.equal(true);
//   });
  it('should render an h1 element', function () {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find('h1').length).to.equal(1);
  })

  it('should render an h1 element', function () {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find('h4').at(0).text()).to.equal('Valence.');
  })

  it('should ...', function () {
    var example = true;
    expect(example).to.equal(example);
  })
});


