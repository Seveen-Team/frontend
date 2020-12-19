import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chart from '../../components/Chart';
import { getChar } from '../../actions/chartsAction';
import DashboardCard from '../../components/DashboardCard';
import { Content } from './styles';

const Dashboard = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.chartReducer);

  useEffect(() => {
    dispatch(getChar());
  }, [])

  return (
    <Content>

      <DashboardCard />
      {
        data &&
        data.data && 
        data.data.charts &&
        data.data.charts.chart1 && 
        (
          <>
            <Chart info={data.data.charts.chart1} />
          </>
        )
      }

    </Content>
  );
};

export default Dashboard;