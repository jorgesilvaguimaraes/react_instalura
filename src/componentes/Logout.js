import React, {Component} from 'react';



export default class Logout extends Component {

    constructor(props)
    {
        super(props);
        this.state = {}
    }

    componentWillMount()
    {
        localStorage.removeItem('auth-token');
        this.props.history.push('/');
    }

    render()
    {
        return null;
    }

}