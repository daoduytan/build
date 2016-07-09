var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [
	{"id": 1, "text" : "tan"},
	{"id": 2, "text" : "than"},
	{"id": 3, "text" : "hong"},
	{"id": 4, "text" : "phuong"},
]

var List = React.createClass({
	render: function() {
		var listItems =  ingredients.map(function(item) {
			return <ListItem key={item.id} ingredient={item.text} />
		});

		return (
			<ul>{listItems}</ul>
		)
	}
})

module.exports = List;