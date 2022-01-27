import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {LinksPage, CreatePage, DetailPage, LoginPage, RegisterPage, SuccessPage, PolicyPage, TermsPage} from './pages';

export const useRoutes = (isAuth) => {
    if (isAuth) {
        return (
            <Switch>
                <Route path="/links" exact>
                    <LinksPage />
                </Route>
                <Route path="/create" exact>
                    <CreatePage />
                </Route>
                <Route path="/detail/:id">
                    <DetailPage />
                </Route>
                <Redirect to="/create" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/login" exact>
                <LoginPage />
            </Route>
            <Route path="/register" exact>
                <RegisterPage />
            </Route>
            <Route path="/policy" exact>
                <PolicyPage />
            </Route>
            <Route path="/terms" exact>
                <TermsPage />
            </Route>
            <Route path="/success" exact>
                <SuccessPage />
            </Route>
            <Redirect to="/login" />
        </Switch>
    )
}