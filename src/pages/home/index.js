import React from "react"
import PropTypes from 'prop-types';
import Table from "../../components/Table"
import Container from '@material-ui/core/Container';

class Home extends React.Component {
    componentDidMount() {
        this.props.firstFetch(this.props);
    }
    render() {
        return <Container><Table {...this.props} /></Container>
    }
}
Home.propTypes = { 
    data: PropTypes.array,
    firstFetch: PropTypes.func,
    fetching: PropTypes.bool
}

export default Home;