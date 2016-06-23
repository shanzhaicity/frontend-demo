/*
 *
 * Prediction
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectPrediction from './selectors';
import styles from './styles.css';
import ContainerDimensions from 'react-container-dimensions';
import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  Tooltip,
} from 'recharts';

export class Prediction extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const data = [
      { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
      { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
      { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
      { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
      { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
      { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
      { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    ];
    return (
      <div className={styles.prediction}>
        <ContainerDimensions>
          {
            ({width, height}) =>
              <LineChart
                width={width}
                height={500}
                data={data}
              >
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                />
                <XAxis />
                <YAxis />
                <Tooltip />
              </LineChart>
          }
        </ContainerDimensions>
      </div>
    );
  }
}

const mapStateToProps = selectPrediction();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Prediction);
