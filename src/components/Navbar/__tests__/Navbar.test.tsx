import { Navbar } from "../Navbar";
import { render, screen } from "@testing-library/react"

describe('Navbar component', () => {
    it('Should render', async () => {
        const { container } = render(<Navbar />);
        expect(container).toMatchSnapshot();
    });

    it('Should show the user name text', async () => {
        render(<Navbar />);
        const text = screen.queryByText(/USER NAME/)
        expect(text).toBeInTheDocument();
    });
})