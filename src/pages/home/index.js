import React from "react"
import PropTypes from 'prop-types';
import Table from "../../components/Table"
import Pagination from '../../components/Pagination'; 
import Container from '@material-ui/core/Container';

class Home extends React.Component {
    componentDidMount() {
        this.props.firstFetch(this.props);
    }
    componentDidUpdate(prevProps, prevState) {
        if ((prevProps.match.params.page !== this.props.match.params.page) && !isNaN(this.props.match.params.page) && !isNaN(prevProps.match.params.page)) {
           this.props.fetchAction(Number(this.props.match.params.page));
        }
    }    
    render() {
        return (
            <Container>
                <Table {...this.props} />
                <Pagination  {...this.props}></Pagination>
            </Container>
        )
    }
}
Home.propTypes = { 
    match: PropTypes.object,
    location: PropTypes.object,
    data: PropTypes.array,
    pagination: PropTypes.object,
    firstFetch: PropTypes.func,
    fetchAction: PropTypes.func,
    filter: PropTypes.string,
    fetching: PropTypes.bool
}

export default Home;