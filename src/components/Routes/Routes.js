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
            <Route exact path="/" component={Hero} />
            <Route path="/services" component={Services} />
            <Route path="/hire" component={Hire} />
            <Route path="/plans" component={Plans} />
            <Route path="/about" component={About} />
        </Switch>
    )
}

export default Routes