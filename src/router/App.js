import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../header/Header'
import Index from '../Index/Index'
import Footer from '../footer/Footer'
import Login from '../login/Login'
import Reservation from '../Reservation/Reservation'
import TransactionSuccess from '../TransactionSuccess/TransactionSuccess'
import ErrorPage from '../Error/ErrorPage'

export const AppContext = React.createContext({
    movie: {},
    setMovie: () => { }
});

export const UserContext = React.createContext({
    user: {},
    setUser: () => { }
})

const App = () => {

    const [movie, setMovie] = useState({})
    const movieInfo = { movie, setMovie }

    const [user, setUser] = useState({})
    const userInfo = { user, setUser }

    return (
        <Router>
            <UserContext.Provider value={userInfo}>
                <AppContext.Provider value={movieInfo}>
                    <Switch>
                        <Route exact path='/'>
                            <Header />
                                <Index />
                            <Footer />
                        </Route>
                        <Route exact path='/login'>
                            <Header />
                                <Login />
                            <Footer />
                        </Route>
                        <Route exact path='/reservations'>
                            <Reservation />
                        </Route>
                        <Route exact path='/successful-purchase'>
                            <Header />
                                <TransactionSuccess />
                            <Footer />
                        </Route>
                        <Route exact path='*'>
                            <Header />
                                <ErrorPage />
                            <Footer />
                        </Route>
                    </Switch>
                </AppContext.Provider>
            </UserContext.Provider>
        </Router>
    )
}

export default App
