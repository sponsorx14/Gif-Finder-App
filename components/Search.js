Search = React.createClass({
  getInitialState: function(){
    return {
      searchingText: ''
    }
  },
  handleChange: function(event) {
    let searchingText = event.target.value;
    this.setState({searchingText: searchingText});

    if (searchingText.length > 2) {
      this.props.onSearch(searchingText);
    }
  },
  handleClick: function(){
    this.props.onSearch(this.state.searchingText);
  },
  handleKeyUp: function(event) {
    if (event.keyCode === 13) {
      this.props.onSearch(this.state.searchingText);
    }
  },

  render: function() {
    const InputStyles = {fontSize: '1.5em', width: '90%', maxWidth: '350px', padding: '10px 5px', outline: 'none'};
    const buttonStyle = {marginTop: '10px', border: 'none', borderRadius: '10px', padding: '10px 15px', outline: 'none', cursor:'pointer'}

    return (
    <div>
      <input
         type="text"
         onChange={this.handleChange}
         onKeyUp={this.handleKeyUp}
         placeholder="Tutaj wpisz wyszukiwaną frazę"
         style={InputStyles}
         value={this.state.searchTerm}
        />
        <br />
        <button style={buttonStyle} onClick={this.handleClick}>Random gif</button>
    </div>
  );
  }
});
