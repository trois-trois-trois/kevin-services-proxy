import React from 'react';

const style = {
  image: {
    border: '1px solid #ccc',
    background: '#fefefe',
  },
};


const SidebarSchedule = ({ ramsSchedule }) => (
  <div className="container-fluid">
    <div className="row justify-content-start">
      <div className="col-4">
        <h4>Regular Season</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" />
              <th scope="col" />
              <th scope="col" />
              <th scope="col" />
            </tr>
          </thead>

          <tbody>


            {ramsSchedule.map(schedule => (

              <tr key={schedule.id}>
                <td>
                  <img src={`${schedule.opponentlogo}`} className="rounded-circle" width={20} height={20} style={style.image} />
                  {schedule.vs}
                </td>
                <td>{schedule.opponent}</td>
                <td>{schedule.wl}</td>
                <td><p>{schedule.result}</p></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  </div>
);

export default SidebarSchedule;
