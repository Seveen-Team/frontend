import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" component="h2">
          Empresas
        </Typography>
        <Typography variant="body2" component="p">
          Mono es una startup colombiana. Estamos creando una banca digital para
          empresas en Colombia, somos un equipo con gran experiencia en fintech.
        </Typography>
        <Typography variant="h6" component="h2">
          Dirección Web
        </Typography>
        <Typography variant="body2" component="p">
          Mono es una startup colombiana. Estamos creando una banca digital para
          empresas en Colombia, somos un equipo con gran experiencia en fintech.
        </Typography>
        <Typography variant="h6" component="h2">
          Responsabilidades
        </Typography>
        <Typography variant="body2" component="p">
          Mono es una startup colombiana. Estamos creando una banca digital para
          empresas en Colombia, somos un equipo con gran experiencia en fintech.
        </Typography>
      </CardContent>
    </Card>
  );
}
