/* eslint-disable consistent-return */
import React, { Component } from 'react';
import axios from 'axios';

import SidebarSchedule from './components/SidebarSchedule';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: [],
    };
  }

  componentDidMount() {
    // fetch schedule data
    axios.get('espn/schedules', {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        // eslint-disable-next-line prefer-destructuring
        const data = res.data;
        this.setState({
          schedule: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { schedule } = this.state;
    return (
      <div id="SidebarSchedule">
        <SidebarSchedule ramsSchedule={schedule} />
      </div>
    );
  }
}

export default App;
