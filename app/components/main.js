"use strict";

import React from 'React';

class Main extends React.Component {
  render(){
    return (
      <div>
        <h1>Hello world!</h1>
      </div>
    );
  }
}

//export default Main;

React.render(<Main />, document.getElementById('app'));
