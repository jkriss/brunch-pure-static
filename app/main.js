var Footer = require('./footer');

module.exports = function() {
  var time = new Date();
  console.log(`Hi there! It's ${time}`)
  ReactDOM.render(<Footer/>, document.getElementById('footer'));
}
