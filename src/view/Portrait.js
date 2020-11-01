import React, { Component } from 'react';

class Portrait extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          image: 'Image 1',
          date: '2020-02-20'
        },
        {
          image: '',
          date: '2020-02-20'
        },
        {
          image: '',
          date: '2020-02-22'
        }
      ]
    };
  }
  render() {
    return (<div className="content toolbarSpace">
      {this.state.items.map(item => {
        return (
          <div>{item.image}</div>
        );
      })}
    </div>);
  }
}

export default Portrait;
