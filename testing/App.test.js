import { shallow } from 'enzyme';
import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../client/src/components/App';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
// import ReactAddons from 'react/addons';
// var { createRenderer } = React.addons.TestUtils;

describe('App', () => {
  // beforeEach(function() {
  //   let {TestUtils} = React.addons;

  //   this.component = TestUtils.renderIntoDocument(<App state=`${{
  //     entries: [],
  //     username: '',
  //     name: '',
  //     mindInput1: '',
  //     mindInput2: '',
  //     mindInput3: '',
  //     bodyInput1: '',
  //     bodyInput2: '',
  //     bodyInput3: '',
  //     soulInput1: '',
  //     soulInput2: '',
  //     soulInput3: ''
  //   }}` />);
  //   this.renderedDOM = () => React.findDOMNode(this.component);
  // });
  var app;

  it('should test that the test suite is working', function () {
    var test = true;
    expect(test).to.equal(true);
  })

  it('is a stateful class component', () => {
    expect(React.Component.isPrototypeOf(App)).to.equal(true);
  });

  it('should render one <App /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Dashboard)).to.equal(true);
  });

  it('should render an `.container-fluid`', () => {
    const wrapper = shallow(<App />);
    // expect(wrapper.find('.container-fluid')).toBe(true);
    expect(wrapper.find('.container-fluid')).to.have.length(1);
  });

// For all children
  // it('should render children when passed in', () => {
  //   const wrapper = shallow(<App />);
  //   expect(JSON.stringify(wrapper.instance().props)).to.equal('{add:this.add.bind(this), get: this.get.bind(this), handleChangeName: this.handleChangeName.bind(this), handleChangeMind: this.handleChangeMind.bind(this), handleChangeBody: this.handleChangeBody.bind(this), handleChangeSoul: this.handleChangeSoul.bind(this), handleClick: this.handleClick.bind(this), handleChangeUsername: this.handleChangeUsername.bind(this), getInfoClick: this.getInfoClick.bind(this), state: this.state}');
  // });

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
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').length).to.equal(1);
  })

  it('should render an h1 element', function () {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h4').at(0).text()).to.equal('Valence.');
  })

  it('should ...', function () {
    var example = true;
    expect(example).to.equal(example);
  })
});


// import React from 'react/addons';
// import { InvitedPerson, InvitationList } from 'components/InvitationList';

// describe("Invitation List - testing with test utilities", () => {
//   beforeEach(function() {
//     this.examplePeople = [
//       { id: 1, name: "Waldo" },
//       { id: 2, name: "Hercules" }
//     ];

//     let { TestUtils } = React.addons;

//     this.TestUtils = TestUtils;
//     this.component = TestUtils.renderIntoDocument(<InvitationList initiallyInvited={this.examplePeople} />);
//   });

//   it("renders a list in a box with proper CSS classes", function() {
//     let box = this.TestUtils.findRenderedDOMComponentWithTag(this.component, "div");
//     expect(box.props.className).toEqual("invitation-list-container");

//     let list = this.TestUtils.findRenderedDOMComponentWithTag(box, "ul");
//     expect(list.props.className).toEqual("invitation-list");
//   });

//   it("shows a list of people who are invited to an event", function() {
//     let list = this.TestUtils.findRenderedDOMComponentWithTag(this.component, "ul");

//     expect(list.props.children.length).toEqual(2);

//     list.props.children.forEach((invitedPerson, index) => {
//       expect(invitedPerson.type).toEqual(InvitedPerson);
//       expect(invitedPerson.key).toEqual(`person_${this.examplePeople[index].id}`);
//       expect(invitedPerson.ref).toEqual(`person_${this.examplePeople[index].id}`);
//       expect(invitedPerson.props.person).toEqual(this.examplePeople[index])
//     });
//   });
// });


//   it("renders a paragraph which greets someone", function() {
//     let renderedParagraphs = this.renderedDOM().querySelectorAll("p");

//     expect(this.renderedDOM().children.length).toEqual(1);
//     expect(renderedParagraphs.length).toEqual(1);
//     expect(renderedParagraphs[0].textContent).toEqual("Hello, my first test!");
//   });

//   it("wraps a paragraph with a <div> with a proper class name", function() {
//     let rootElement = this.renderedDOM();

//     expect(rootElement.tagName).toEqual("DIV");
//     expect(rootElement.classList.length).toEqual(1);
//     expect(rootElement.classList[0]).toEqual("greeter");
//   });
// });