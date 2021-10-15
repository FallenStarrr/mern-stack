import {Switch, Route, Redirect} from 'react-router-dom'
import { LinksPage } from './LinksPage'
import { AuthPage }  from './AuthPage'
import { CreatePage} from './CreatePage'
import { DetailPage} from './DetailPage'

export const useRouts = isAuthenticated => {
    if (isAuthenticated) {
        return (
        <Switch>
            <Route path="/links" exact>
                <LinksPage></LinksPage>
            </Route>
            <Route path="/create" exact>
                <CreatePage/>
            </Route>
            <Route path="/detail/:id">
                <DetailPage/>
            </Route>
            <Redirect to="/create"/>
        </Switch>
        )
}
        return (
            <Switch>
                <Route path="/" exact>
                    <AuthPage></AuthPage>
                </Route>
                <Redirect to="/"></Redirect>
            </Switch>
        )
    
}
