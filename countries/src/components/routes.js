import React from 'react';

export const Routes = () => {
    return (
        <Router >
            <Route exact path='/' render={props => <App {...props} />} />
            <Route path='/details' render={props => 
            <Zoomed
            {...props} />} />
        </Router>
    )
}