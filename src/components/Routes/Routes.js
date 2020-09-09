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
            <Route exact path="/https://fadyattia11.github.io/4for-react/" component={Hero} />
            <Route path="/https://fadyattia11.github.io/4for-react/services" component={Services} />
            <Route path="/https://fadyattia11.github.io/4for-react/hire" component={Hire} />
            <Route path="/https://fadyattia11.github.io/4for-react/plans" component={Plans} />
            <Route path="/https://fadyattia11.github.io/4for-react/about" component={About} />
        </Switch>
    )
}

export default Routes