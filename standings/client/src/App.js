/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import axios from 'axios';

import Standings from './components/Standings';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
    };
  }

  componentDidMount() {
    axios.get('/espn/teamstandings', {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        const data = res.data;
        this.setState({
          teams: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // eslint-disable-next-line consistent-return
  render() {
    const { teams } = this.state;
    return (
      <div>
        <Standings teams={teams} />
      </div>
    );
  }
}
