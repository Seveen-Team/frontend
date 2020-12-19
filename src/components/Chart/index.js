import React from 'react';
import Plot from 'react-plotly.js';
import { Content } from './styles';

const Chart = ({ info }) => {
  return (
    <Content>
      <Plot
        data={[
          ...info,
          {type: `${info.type}`, x: `${info.x}`, y: `${info.y}`},
        ]}
        layout={{width: 400, height: 300, title: 'Seguimiento de postulaciones'}}
      />
    </Content>
  );
}

export default Chart;