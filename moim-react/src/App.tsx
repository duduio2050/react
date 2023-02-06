import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';


class App extends Component {
    constructor(props: any) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/home' element={<Home />} />
                </Routes>
            </BrowserRouter>
        );
    }

}

export default App;
