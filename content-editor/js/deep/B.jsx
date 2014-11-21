var CHILD = React.createClass({
  publishChange : function(e) {
    var pub = new CustomEvent("child-change-text", { // notice '-' format
      bubbles:true,
      detail : e.target.value
    })
    this.refs.dynamic.getDOMNode().dispatchEvent(pub); // to sub
  },
  render : function() {
    return (<div>
        <p>Child {this.props.txt}</p>
        <input ref="dynamic" defaultValue={this.props.txt} onChange={this.publishChange} />
      </div>)
  }
})

module.exports = CHILD;
