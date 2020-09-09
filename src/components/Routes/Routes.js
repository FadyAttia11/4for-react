import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import About from '../About/About'
import Hero from '../Hero/Hero'
import Hire from '../Hire/Hire'
import Plans from '../Plans/Plans'
import Services from '../Services/Services'

const Routes = () => {

    return (
        <Switch>
            <Route exact path="4for-react/" component={Hero} />
            <Route path="4for-react/services" component={Services} />
            <Route path="4for-react/hire" component={Hire} />
            <Route path="4for-react/plans" component={Plans} />
            <Route path="4for-react/about" component={About} />
        </Switch>
    )
}

export default Routes