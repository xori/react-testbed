var CHILD = require('./deep/B.jsx')

var MINE = React.createClass({
  getInitialState: function() {
    return {theText: 'Hello!'};
  },
  handleChildChangeText : function(e) { // the sub of 'child-change-text'
    this.setState({theText: e.detail})
  },
  componentWillMount: function() {
    window.addEventListener("child-change-text", this.handleChildChangeText, false);
  },
  componentWillUnmount: function() {
    window.removeEventListener("child-change-text", this.handleChildChangeText, false);
  },
  render : function() {
    return (
      <div>
        <p>{this.state.theText}</p>
        <CHILD txt={this.state.theText} />
      </div>
    )
  }
});

module.exports = MINE
