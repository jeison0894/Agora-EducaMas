import React from 'react';
import axios from 'axios';

export default class BadgeList extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/api/badge`)
      .then(res => {

        const data = res.data;
        console.log(data);
        this.setState({ data });
      })
  }

  render() {
    return (
      <div className="container">

        <table class="table">
          <thead>
            <tr>
              <th scope="col">Foto</th>
              <th scope="col">Nombre Alumno</th>
              <th scope="col">Insignia</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.data.map(e => (
                <tr>

                  <th scope="row"></th>
                  <td>{e.name} {e.lastName}</td>
                  <td>{e.badges}</td>

                </tr>

              ))

            }
          </tbody>
        </table>
      </div>
    )
  }
}