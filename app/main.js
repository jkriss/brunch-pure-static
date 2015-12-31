var Footer = require('./footer');
var Main = require('./react-main');

module.exports = function() {
  var time = new Date();
  console.log(`Hi there! It's ${time}`)
  // this one is rendered serverside, this is hooking up the live version
  ReactDOM.render(<Main/>, document.getElementById('content'));

  // this one is being rendered for the first time
  ReactDOM.render(<Footer/>, document.getElementById('footer'));
}
