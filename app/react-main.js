module.exports = React.createClass({
  handleClick: function() {
    alert("This is live!!")
  },
  render : function() {
    return <div>
      <p>I'm the main content</p>
      <button onClick={this.handleClick}>Click me, I'm awesome</button>
    </div>
  }
})
