import React, { Component } from 'react'

export default class RedirectPage extends Component {
   constructor(props) {
        super(props);
        // console.log('redirecting')
        window.open(this.props.site_github_repo_link);
    }
    componentDidMount(){
        window.location.replace(this.props.site_github_repo_link);
        // console.log(' redirecting')
    }
  render() {
    return (
        <div >
        <h3>Redirecting...</h3>
      </div>
    )
  }
}
