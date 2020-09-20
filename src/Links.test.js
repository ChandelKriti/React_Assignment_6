import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { shallow } from 'enzyme';
import Home from './components/Home';
import Projects from './components/Projects';
import Services from './components/Services';

describe('<Home />', () => {
    it ('renders a static text', () => {
        const wrapper = shallow(
            <MemoryRouter initialEntries={['/']} initialIndex={0}>
                <Route path='/' render={() =>< Home/>} />
            </MemoryRouter>
        )
    })
})

describe('<Projects />', () => {
    it ('renders a static text', () => {
        const wrapper = shallow(
            <MemoryRouter initialEntries={['/projects/']} initialIndex={0}>
                <Route path='/projects/' render={() =>< Projects/>} />
            </MemoryRouter>
        )
    })
})

describe('<Services />', () => {
    it ('renders a static text', () => {
        const wrapper = shallow(
            <MemoryRouter initialEntries={['/services/']} initialIndex={0}>
                <Route path='/services/' render={() =>< Services/>} />
            </MemoryRouter>
        )
    })
})

describe('<Contact />', () => {
    it ('renders a static text', () => {
        const wrapper = shallow(
            <MemoryRouter initialEntries={['/contact/']} initialIndex={0}>
                <Route path='/contact/' render={() =>< Contact/>} />
            </MemoryRouter>
        )
    })
})