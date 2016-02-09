'use strict';

//load React libraries
var React = require('react');
var ReactDOM = require('react-dom');

var MessageItem = React.createClass({
    
  handleClick: function(){
      console.log("You clicked me!");
  }
    
  render: function() {
    return <li onClick={handleClick}>{this.props.message}</li>
  }
});

var MessageList = React.createClass({
  render: function() {
    var msgItems = this.props.messages.map{function(value, index) {
        return <MessageItem message = {index + " " + value} />
    }
    return (

    );
  }
});

var messages = [
    "Hello World", "Goodbye Ya'll", "Is it dinner yet?"
];

//render all
ReactDOM.render(<MessageList />,
                document.getElementById('content'));

// //define a new component
// var HelloMessage = React.createClass({
   
//    //how should the component be displayed?
//    render: function(){
//        if(Math.random() < 0.5){                       
//             //return the HTML to show
//             return <h1>Hello World</h1>;
           
//        } else {
//            return <h1>Goodbye!</h1>;
//        }

//    }
// });

// ReactDOM.render(<HelloMessage />, 
//                 document.getElementById('content'));

//message to show
// var message = React.createElement(
//     'h1',                  //html tag
//     {attribute : 'value'}, //object of attributes
//     'Hello World!!'         //content
// ); 

//message to show using JSX (embedded html)
// var message = <h1 id="title">Hello World!</h1>

// var imgUrl = 'https://campuswellbeing.files.wordpress.com/2011/10/cute-puppies-with-worms.jpg';
// var pic = <img src= {imgUrl}/>

// //show the content in the web page (inside the tag with id="content")
// //ReactDOM.render(message, document.getElementById('content'));
// ReactDOM.render(pic, document.getElementById('content'));

// console.log('pic rendered!');
