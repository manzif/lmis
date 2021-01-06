import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminLayout from '../layouts/Admin';
import { AboutLmis } from '../pages/about-lmis/AboutLmis';
import { ForgotPassword } from '../pages/forgot-password/ForgotPassword';
import Home from '../pages/home/Home';
import { LabourMarketIndicators } from '../pages/labour-market-indicators/LabourMarketIndicators';
import { ResetPassword } from '../pages/reset-password/ResetPassword';
import ResourceDetails from '../pages/resources/ResourceDetails';
import Resources from '../pages/resources/Resources';

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/labour-market-indicators" component={LabourMarketIndicators} />
                    <Route exact path="/resources" component={Resources} />
                    <Route exact path="/about-lmis" component={AboutLmis} />
                    <Route exact path="/auth/forgot-password" component={ForgotPassword} />
                    <Route exact path="/auth/reset-password" component={ResetPassword} />
                    <Route path="/admin" render={(props) => <AdminLayout />} />
                    <Route path="/resource/:isbn13" component={ResourceDetails} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default AppRouter;