var MINE = require('./A.jsx')

var Editor = React.createClass({
  getInitialState: function() {
    return { medium: {} };
  },
  getPropTypes : function() {

  },
  handleChildChangeText : function(e) { // the sub of 'child-change-text'
    this.setState({theText: e.detail})
  },
  componentWillMount: function() {
    window.addEventListener("child-change-text", this.handleChildChangeText, false);
  },
  componentDidMount : function() {
  	this.setState({medium:new Medium({element:this.refs.content.getDOMNode()})})
  },
  componentWillUnmount: function() { 
    window.removeEventListener("child-change-text", this.handleChildChangeText, false);
  },
  render : function() {
    return ( 
      <div>
        <Toolbar ref='toolbar' items={['format','style','links']} />
        <Content ref='content' />
      </div>
    )
  }
});

var EditButton = React.createClass({
  getInitialState : function() {return{editmode:false}},

  save: function() {
  	var event = new CustomEvent('content-save')
  	document.body.dispatchEvent(event);
  	this.setState({editmode:false});
  },
  edit: function() {
  	this.setState({editmode:true});
  },
  cancel: function() {

  },

  render: function() {
  	if (this.state.editmode) {
		return <div class="site toolbar">
  			<button onClick={this.save} class="save button">Save</button>
  			<button onClick={this.cancel} class="cancel button">Cancel</button>
		</div>
  	} else {
		return <div class="site toolbar">
  			<button onClick={this.edit} class="edit button">Edit</button>
		</div>
	}
  }
})


React.render(<EditButton />, document.getElementById("content"))
