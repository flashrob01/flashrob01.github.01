'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Dudu ren is the man.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Click me if you want'
    );
  }
}

  
    
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);