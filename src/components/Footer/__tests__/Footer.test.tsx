import { Footer } from "../Footer";
import { render, screen } from "@testing-library/react"

describe('Footer component', () => {
    it('Should render', async () => {
        const { container } = render(<Footer />);
        expect(container).toMatchSnapshot();
    });

    it('Should show the current year', async () => {
        render(<Footer />);
        const text = screen.queryByText(/2023/)
        expect(text).toBeInTheDocument();
    });

    it('Should show the company name', async () => {
        render(<Footer />);
        const text = screen.queryByText(/Novopayment/)
        expect(text).toBeInTheDocument();
    })
})