import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import Home from './components/Home';

describe('<Home />', () => {
    it ('renders a static text', () => {
        const wrapper = shallow(
            <MemoryRouter initialEntries={['/']} initialIndex={0}>
                <Route path='/' render={() =>< Home/>} />
            </MemoryRouter>
        )
    })
})