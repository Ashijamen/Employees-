import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Button, Grid, Paper } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  tableContainer: {
    width: '50%',
    float: 'left',
  },
  button: {
    float: 'left',
  },
  employeeContainer: {
    width: '50%',
    float: 'right',
    padding: theme.spacing(2),
  },
}));

export default function Employees() {
  const classes = useStyles();
  const [imie, setImie] = useState('');
  const [dzial, setDzial] = useState('');
  const [nazwa_dzial, setNazwaDzialu] = useState('');
  const [zarobki, setZarobki] = useState('');
  const [data_urodzenia, setDataUrodzenia] = useState('');
  const [employees, setEmployees] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const employee = { imie, dzial, nazwa_dzial, zarobki, data_urodzenia };
    console.log(employee);
    fetch("http://localhost:8080/pracownicy/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employee)

    }).then(() => {
      console.log("Dodano nowego Pracownika");
    });
  };
  const handleDelete = (id_pracownika) => {
    fetch(`http://localhost:8080/pracownicy/delete/${id_pracownika}`, {
      method: "DELETE",
    }).then(() => {
      console.log(`Usunięto pracownika o identyfikatorze ${id_pracownika}`);
      fetchEmployees();
    }).catch(error => {
      console.error(`Wystąpił błąd podczas usuwania pracownika: ${error.message}`);
    });
  };
  

  const fetchEmployees = () => {
    fetch("http://localhost:8080/pracownicy/getAll")
      .then(res => res.json())
      .then((result) => {
        setEmployees(result);
      }).catch(error => {
        console.error(`Wystąpił błąd podczas pobierania listy pracowników: ${error.message}`);
      });
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleDateChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <Container>
      <h1>Dodaj nowego pracownika</h1>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <form className={classes.root} noValidate autoComplete="off">
            <div className={classes.tableContainer}>
              <TextField
                id="outlined-basic-name"
                label="Imie"
                variant="outlined"
                fullWidth
                value={imie}
                onChange={(e) => setImie(e.target.value)}
              />
              <TextField
                id="outlined-basic-department"
                label="Dział"
                variant="outlined"
                fullWidth
                value={dzial}
                onChange={(e) => setDzial(e.target.value)}
              />
              <TextField
                id="outlined-basic-department-name"
                label="Nazwa działu"
                variant="outlined"
                fullWidth
                value={nazwa_dzial}
                onChange={(e) => setNazwaDzialu(e.target.value)}
              />
              <TextField
                id="outlined-basic-salary"
                label="Zarobki"
                variant="outlined"
                fullWidth
                value={zarobki}
                onChange={(e) => setZarobki(e.target.value)}
              />
              <TextField
                id="outlined-basic-birth-date"
                label="Data urodzenia(RRRR-MM-DD)"
                variant="outlined"
                fullWidth
                onBlur={handleDateChange}
                inputProps={{
                  pattern: '[0-9]{4}-[0-9]{2}-[0-9]{2}',
                  title: 'Format daty: RRRR-MM-DD',
                }}
                value={data_urodzenia}
                onChange={(e) => setDataUrodzenia(e.target.value)}
              />
              <Button variant="contained" color="secondary" className={classes.button} onClick={handleClick}>
                Dodaj
              </Button>
            </div>
          </form>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.employeeContainer}>
            <h1>Pracownicy</h1>

            <Paper elevation={3}>
            {employees.map(employee => (
                <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={employee.id}>
                Id_pracownika: {employee.id_pracownika}<br></br>
                imie: {employee.imie}<br></br>
                dzial: {employee.dzial}<br></br>
                nazwa_dzial: {employee.nazwa_dzial}<br></br>
                zarobki: {employee.zarobki}<br></br>
                data_urodzenia: {employee.data_urodzenia}<br></br>
                <Button variant="contained" color="secondary" onClick={() => handleDelete(employee.id_pracownika)}>
                    Usuń
                  </Button>

                  
                </Paper>
            ))}
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
