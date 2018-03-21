const GIPHY_LOADING_URL = 'https://media.giphy.com/media/cZDRRGVuNMLOo/giphy.gif';

Gif = React.createClass({
  getUrl: function() {
    return this.props.sourceUrl || GIPHY_LOADING_URL;
  },

  render: function() {
    const url = this.props.loading ? GIPHY_LOADING_URL : this.props.url;
    const styles={margin: '0 auto', maxWidth: '600px'};
    const styles1={width: '100%'}
    const styles2 = {margin: '20px auto', width: '100%', };
    return (
      <div style={styles}>
        <a style={styles1} href={this.getUrl()} title='view this on giphy' target='new'>
          <img id='gif' src={url} style={styles2} />
        </a>
      </div>
    );
  }
});
