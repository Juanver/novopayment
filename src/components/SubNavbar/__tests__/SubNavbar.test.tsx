import React from 'react'
import { render } from '@testing-library/react';
import { SubNavbar } from '../SubNavbar';

describe('SubNavbar component', () => {
    it('Should render', () => {
        const { container } = render(<SubNavbar />);
        expect(container).toMatchSnapshot();
    })
})