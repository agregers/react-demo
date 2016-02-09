'use strict';

//load React libraries
var React = require('react');
var ReactDOM = require('react-dom');

//message to show
// var message = React.createElement(
//     'h1',                  //html tag
//     {attribute : 'value'}, //object of attributes
//     'Hello World!!'         //content
// ); 

//message to show using JSX (embedded html)
var message = <h1 id="title">Hello World!</h1>

var imgUrl = 'https://campuswellbeing.files.wordpress.com/2011/10/cute-puppies-with-worms.jpg';
var pic = <img src = {imgUrl} />

//show the content in the web page (inside the tag with id="content")
//ReactDOM.render(message, document.getElementById('content'));
ReactDOM.render(pic, document.getElementById('content'));

console.log('pic rendered!');
