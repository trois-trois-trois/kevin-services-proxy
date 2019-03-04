/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class Teamleaders extends Component {
  constructor(props) {
    super(props);
  }


  component() {
    const {
      sample, changeSide, side,
    } = this.props;
    const getRandomInt = num => Math.floor(Math.random() * Math.floor(num));
    const Player = sample.map(elem => elem.player);
    const getRandomPlayer = () => {
      return  `${Player[getRandomInt(Player.length)]}`;
    }
    const Passing = sample.map(elem => elem.passing);
    const passingYards = Math.max(...Passing);
    const Rushing = sample.map(elem => elem.rushing);
    const rushingYards = Math.max(...Rushing);
    const Receiving = sample.map(elem => elem.receiving);
    const receivingYards = Math.max(...Receiving);
    const Tackles = sample.map(elem => elem.tackles);
    const totalTackles = Math.max(...Tackles);
    const Sacks = sample.map(elem => elem.sacks);
    const totalSacks = Math.max(...Sacks);
    const Interceptions = sample.map(elem => elem.interceptions);
    const totalInterceptions = Math.max(...Interceptions);
    const Photos = sample.map(elem => [elem.image]);
    const getRandomPhoto = () => {
      return  `${Photos[getRandomInt(Photos.length)]}`;
    }

    if (side === 'Offense') {
      return (
        <div id="container" className="col-lg-3 container alert alert-light">
          <p className="text-dark font-weight-bold ">2019 Team Leaders:</p>
          <div className="row">
            <div className="col-sm-6 text-center">
              <input id="btn" type="button" value="Offense" onClick={() => changeSide('Offense')} />
            </div>
            <div className="col-sm-6 text-center">
              <input id="btn" type="button" value="Defense" onClick={() => changeSide('Defense')} />
            </div>
          </div>
          <br />
          <div className="justify-content-center col">
            <p className="text-dark font-weight-bold">Passing Yards</p>
            <div className="border-bottom border-secondary">
              <div className="text-left">
                <a href="http://www.espn.com/nfl/player/_/id/3046779" target="_blank">
                  <img className="rounded-circle float-left" src={getRandomPhoto()} alt="player" />
                </a>

              </div>
              <a href="http://www.espn.com/nfl/player/_/id/3046779" target="_blank">
                <p id="playerName" className="text-secondary">{getRandomPlayer()}</p>
              </a>
              <p id="playerStats" className="h2 font-weight-bold text-dark">{passingYards}</p>
              <br />
            </div>
          </div>
          <br />
          <div className="justify-content-center col">
            <p className="text-dark font-weight-bold">Rushing Yards</p>
            <div className="border-bottom border-secondary">
              <div className="text-left">
                <a href="http://www.espn.com/nfl/player/_/id/2977644" target="_blank">
                  <img className="rounded-circle float-left" src={getRandomPhoto()} alt="player" />
                </a>
              </div>
              <a href="http://www.espn.com/nfl/player/_/id/2977644" target="_blank">
                <p id="playerName" className="text-secondary">{getRandomPlayer()}</p>
              </a>
              <p id="playerStats" className="h2 font-weight-bold text-dark">{rushingYards}</p>
              <br />
            </div>
          </div>
          <br />
          <div className="justify-content-center col">
            <p className="text-dark font-weight-bold">Receiving Yards</p>
            <div className="border-bottom border-secondary">
              <div className="text-left">
                <a href="http://www.espn.com/nfl/player/_/id/15880" target="_blank">
                  <img className="rounded-circle float-left" src={getRandomPhoto()} alt="player" />
                </a>
              </div>
              <a href="http://www.espn.com/nfl/player/_/id/15880" target="_blank">
                <p id="playerName" className="text-secondary">{getRandomPlayer()}</p>
              </a>
              <p id="playerStats" className="h2 font-weight-bold text-dark">{receivingYards}</p>
              <br />
            </div>
          </div>
          <br />
          <a href="http://www.espn.com/nfl/team/stats/_/name/lar" target="_blank">
            <p className="text-center">Full Team Statistics</p>
          </a>
        </div>
      );
    } if (side === 'Defense') {
      return (
        <div id="container" className="col-md-3 container alert alert-light ">
          <p className="text-dark font-weight-bold ">2019 Team Leaders:</p>
          <div className="row">
            <div className="col-sm-6 text-center">
              <input id="btn" type="button" value="Offense" onClick={() => changeSide('Offense')} />
            </div>
            <div className="col-sm-6 text-center">
              <input id="btn" type="button" value="Defense" onClick={() => changeSide('Defense')} />
            </div>
          </div>
          <br />
          <div id="dataContainer" className="justify-content-center">
            <p className="text-dark font-weight-bold">Tackles</p>
            <div className="border-bottom border-secondary">
              <div className="text-left">
                <a href="http://www.espn.com/nfl/player/_/id/2978304" target="_blank">
                  <img className="rounded-circle float-left" src={getRandomPhoto()} alt="player" />
                </a>
              </div>
              <a href="http://www.espn.com/nfl/player/_/id/2978304" target="_blank">
                <p id="playerName" className="text-secondary">{getRandomPlayer()}</p>
              </a>
              <p id="playerStats" className="h2 font-weight-bold text-dark">{totalTackles}</p>
              <br />
            </div>
          </div>
          <br />
          <div id="dataContainer" className="justify-content-center">
            <p className="text-dark font-weight-bold">Sacks</p>
            <div className="border-bottom border-secondary">
              <div className="text-left">
                <a href="http://www.espn.com/nfl/player/_/id/16716" target="_blank">
                  <img className="rounded-circle float-left" src={getRandomPhoto()} alt="player" />
                </a>
              </div>
              <a href="http://www.espn.com/nfl/player/_/id/16716" target="_blank">
                <p id="playerName" className="text-secondary">{getRandomPlayer()}</p>
              </a>
              <p id="playerStats" className="h2 font-weight-bold text-dark">{totalSacks}</p>
              <br />
            </div>
          </div>
          <br />
          <div id="dataContainer" className="justify-content-center">
            <p className="text-dark font-weight-bold">Interceptions</p>
            <div className="border-bottom border-secondary">
              <div className="text-left">
                <a href="http://www.espn.com/nfl/player/_/id/2578378" target="_blank">
                  <img className="rounded-circle float-left" src={getRandomPhoto()} alt="player" />
                </a>
              </div>
              <a href="http://www.espn.com/nfl/player/_/id/2578378" target="_blank">
                <p id="playerName" className="text-secondary">{getRandomPlayer()}</p>
              </a>
              <p id="playerStats" className="h2 font-weight-bold text-dark">{totalInterceptions}</p>
              <br />
            </div>
          </div>
          <br />
          <a href="http://www.espn.com/nfl/team/stats/_/name/lar" target="_blank">
            <p className="text-center">Full Team Statistics</p>
          </a>
        </div>
      );
    }
    console.log('oops');
    return null;
  }

  render() {
    return (
      this.component()
    );
  }
}

export default Teamleaders;
