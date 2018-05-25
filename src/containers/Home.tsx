/**
 * Created by YOU on 2018/4/28.
 */
import * as React from 'react'
import Header from '../components/Header'
import {
    Route
} from 'react-router-dom'
import Article from './Article'
// import propTypes = require('prop-types')
// import classNames = require('classnames')
// import {omit} from 'lodash'

class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    public render() {
        return (
            <div id="app">
                <Header/>
                <section style={{height: 1000}}>
                    <Route path="article/:id" component={Article}/>
                </section>
                <footer>
                    this is footer
                </footer>
            </div>
        )
    }
}

export default Home