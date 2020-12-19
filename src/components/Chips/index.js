import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '10px',
    flexWrap: 'wrap',
    listStyle: 'none',
    width: '100%',
    boxShadow: 'none'
  },
  chip: {
    margin: theme.spacing(0.5),
    height: '16px',
    width: '100%',
    fontSize: '10px',
    border: "1px solid #182c3f",
    backgroundColor: 'white'
  },
}));

export default function ChipsArray() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Platzi' },
    { key: 1, label: 'Frontend' },
    { key: 2, label: 'English' },
    { key: 3, label: 'Colombia' },
    { key: 4, label: 'Remoto' },
  ]);

  return (
    <Paper component="ul" className={classes.root}>
      {chipData.map((data) => {

        return (
          <li
            key={data.key}
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '85px',
            }}
          >
            <Chip
              label={data.label}
              className={classes.chip}
              color={data.primary}
            />
          </li>
        );
      })}
    </Paper>
  );
}
