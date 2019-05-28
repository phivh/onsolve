import React, {Component} from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {lighten} from "@material-ui/core/styles/colorManipulator";
import CircularProgress from '@material-ui/core/CircularProgress';
import {Link} from 'react-router-dom';


function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) 
            return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
    return order === "desc"
        ? (a, b) => desc(a, b, orderBy)
        : (a, b) => -desc(a, b, orderBy);
}

function sliceDesc(string) {
    return string && string.length > 100
        ? string.substring(0, 100) + '...'
        : string;
}

const headRows = [
    {
        id: "name",
        numeric: false,
        disablePadding: false,
        label: "Name"
    }, {
        id: "description",
        numeric: false,
        disablePadding: false,
        label: "Description"
    }, {
        id: "thumbnail",
        numeric: true,
        disablePadding: false,
        label: ""
    }
];

function EnhancedTableHead(props) {
    const {order, orderBy, onRequestSort} = props;
    const createSortHandler = property => event => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headRows.map(row => (
                    <TableCell
                        key={row.id}
                        align={row.numeric
                        ? "right"
                        : "left"}
                        padding={row.disablePadding
                        ? "none"
                        : "default"}
                        sortDirection={orderBy === row.id
                        ? order
                        : false}>
                        <TableSortLabel
                            active={orderBy === row.id}
                            direction={order}
                            onClick={createSortHandler(row.id)}>
                            {row.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired
};

const useToolbarStyles = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1)
    },
    highlight: theme.palette.type === "light"
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark
        },
    spacer: {
        flex: "1 1 100%"
    },
    actions: {
        color: theme.palette.text.secondary
    },
    title: {
        flex: "0 0 auto"
    }
}));

const EnhancedTableToolbar = props => {
    const classes = useToolbarStyles();

    return (
        <Toolbar>
            <div className={classes.title}>
                <Typography variant="h6" id="tableTitle">
                    All Comics Mavel
                </Typography>
            </div>
            <div className={classes.spacer}/>
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired
};

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(10)
    },
    paper: {
        width: "100%",
        marginBottom: theme.spacing(2)
    },
    table: {
        minWidth: 500,
        '& tr': {
            '& td': {
                width: "33%"
            }
        }
    },
    tableWrapper: {
        overflowX: "auto"
    },
    thumbnail: {
        display: "inline-block",
        maxWidth: "150px",
        height: "150px",
        overflow: "hidden",
        position: "relative",
        '& img': {
            maxWidth: "100%",
            transition: "all .3s ease-in-out"
        },
        '&:hover': {
            '& img': {
                transform: "scale(1.1)"
            }
        },
        '& span': {
            opacity: "0",
            transition: "all .3s easin-in-out",
            position: "absolute",
            left: "0",
            top: "0",
            width: "100%",
            height: "100%",
            zIndex: "10",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: "bold",
            background: "#00000042",
            '&:hover': {
                opacity: "1"
            }

        }
    }
}));

function EnhancedTable(props) {
    const classes = useStyles();
    const [order,
        setOrder] = React.useState("asc");
    const [orderBy,
        setOrderBy] = React.useState("description");
    const [selected] = React.useState([]);
    const [page] = React.useState(0);
    const [rowsPerPage] = React.useState(5);
    const rows = props.rows.data.length > 0
        ? props.rows.data
        : [];
    function handleRequestSort(event, property) {
        const isDesc = orderBy === property && order === "desc";
        setOrder(isDesc
            ? "asc"
            : "desc");
        setOrderBy(property);
    }

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <div className={classes.tableWrapper}>
                    <Table className={classes.table} aria-labelledby="tableTitle">
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}/>
                        <TableBody>
                            {stableSort(rows, getSorting(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map(row => {
                                    const sDescription = sliceDesc(row.description);
                                    return (
                                        <TableRow
                                            hover
                                            tabIndex={-1}
                                            key={row.title}>
                                            <TableCell component="th" scope="row">
                                                <b>{row.title}</b>
                                            </TableCell>
                                            <TableCell align="left">{sDescription}</TableCell>
                                            <TableCell align="right">
                                                <Link
                                                    to={{
                                                    pathname: `/detail/${row.id}`
                                                    }}
                                                    className={classes.thumbnail}>
                                                    <img src={row.thumb} alt={row.title}/>
                                                    <span>View Detail</span>
                                                </Link>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                    height: 49 * emptyRows
                                }}>
                                    <TableCell colSpan={3} align="center">
                                        <CircularProgress color="secondary"/>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </Paper>
        </div>
    );
}
class TableComponent extends Component {
    render() {
        return (<EnhancedTable rows={this.props}/>)
    }
}

TableComponent.propTypes = {
    pagination: PropTypes.object
}

export default TableComponent;
