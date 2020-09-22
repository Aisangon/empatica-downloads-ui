import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function SimpleTable(props) {
    const classes = useStyles();

    function createData(country = "", time = "", age = "", income = "") {
        return { country, time, age, income };
    }

    console.log(props.stats)
    
    const rows = [
        createData(
            `${Object.keys(props.stats.by_countries)[0]} - ${Object.values(props.stats.by_countries)[0]}`, 
            `${Object.keys(props.stats.by_time)[0]} - ${Object.values(props.stats.by_time)[0]}`,
            `${Object.keys(props.stats.by_age)[0]} - ${Object.values(props.stats.by_age)[0]}`, 
            `${Object.keys(props.stats.by_income)[0]} - ${Object.values(props.stats.by_income)[0]}`),
        createData(
            `${Object.keys(props.stats.by_countries)[1]} - ${Object.values(props.stats.by_countries)[1]}`, 
            `${Object.keys(props.stats.by_time)[1]} - ${Object.values(props.stats.by_time)[1]}`,
            `${Object.keys(props.stats.by_age)[1]} - ${Object.values(props.stats.by_age)[1]}`, 
            `${Object.keys(props.stats.by_income)[1]} - ${Object.values(props.stats.by_income)[1]}`),
        createData(
            `${Object.keys(props.stats.by_countries)[2]} - ${Object.values(props.stats.by_countries)[2]}`, 
            `${Object.keys(props.stats.by_time)[2]} - ${Object.values(props.stats.by_time)[2]}`,
            `${Object.keys(props.stats.by_age)[2]} - ${Object.values(props.stats.by_age)[2]}`, 
            `${Object.keys(props.stats.by_income)[2]} - ${Object.values(props.stats.by_income)[2]}`),
        createData(
            `${Object.keys(props.stats.by_countries)[3]} - ${Object.values(props.stats.by_countries)[3]}`, 
            `${Object.keys(props.stats.by_time)[3]} - ${Object.values(props.stats.by_time)[3]}`,
            `${Object.keys(props.stats.by_age)[3]} - ${Object.values(props.stats.by_age)[3]}`, 
            `${Object.keys(props.stats.by_income)[3]} - ${Object.values(props.stats.by_income)[3]}`),
        createData(
            `${Object.keys(props.stats.by_countries)[4]} - ${Object.values(props.stats.by_countries)[4]}`, 
            `${Object.keys(props.stats.by_time)[4]} - ${Object.values(props.stats.by_time)[4]}`),
        createData(`${Object.keys(props.stats.by_countries)[5]} - ${Object.values(props.stats.by_countries)[5]}`),
        createData(`${Object.keys(props.stats.by_countries)[6]} - ${Object.values(props.stats.by_countries)[6]}`),
        createData(`${Object.keys(props.stats.by_countries)[7]} - ${Object.values(props.stats.by_countries)[7]}`),
        createData(`${Object.keys(props.stats.by_countries)[8]} - ${Object.values(props.stats.by_countries)[8]}`),
        createData(`${Object.keys(props.stats.by_countries)[9]} - ${Object.values(props.stats.by_countries)[9]}`)

    ];

    return (
        props.stats ?
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Country</TableCell>
                            <TableCell align="center">Time of Day</TableCell>
                            <TableCell align="center">Age</TableCell>
                            <TableCell align="center">Median Income</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow>
                                <TableCell align="center">{row.country}</TableCell>
                                <TableCell align="center">{row.time}</TableCell>
                                <TableCell align="center">{row.age}</TableCell>
                                <TableCell align="center">{row.income}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        :
        'No data found.'
    );
}
