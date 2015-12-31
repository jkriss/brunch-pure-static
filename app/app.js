var Main = require('./react-main');
var Footer = require('./footer');

module.exports = React.createClass({
  render : function() {
    return (
      <div>
        <Main/>
        <div id="footer"><Footer/></div>
      </div>
    )
  }
})
