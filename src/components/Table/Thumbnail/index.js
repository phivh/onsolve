import React, {Component} from "react"
import { Link } from 'react-router-dom'

class Thumbnail extends Component {
    render() {
        return (
            <Link className="" to={{ pathname: `/detail/${this.props.id}` }}>

            </Link>
        )
    }
}

export default Thumbnail;
