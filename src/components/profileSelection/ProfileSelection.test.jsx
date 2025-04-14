import { MemoryRouter } from 'react-router';
import { render, screen, fireEvent } from '@testing-library/react'
import ProfileSelection from './ProfileSelection';

vi.mock('react-router', async () => {
    const actual = await vi.importActual('react-router');
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    }
});

const mockNavigate = vi.fn();

beforeEach(() => {
    mockNavigate.mockClear();
});

it('Renders all fields and buttons', () => {
    render(<ProfileSelection/>, {wrapper: MemoryRouter});

    expect(screen.getByLabelText(/Your Position/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Department/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Tenure at Company/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Primary Reason for Leaving/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Continue/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Back/i })).toBeInTheDocument();
});

it('Updates selection state correctly', () => {
    render(<ProfileSelection/>, {wrapper: MemoryRouter});

    fireEvent.change(screen.getByLabelText(/Your Position/i), {
        target: { value: 'manager' },
      });
  
      fireEvent.change(screen.getByLabelText(/Department/i), {
        target: { value: 'engineering' },
      });
  
      fireEvent.change(screen.getByLabelText(/Tenure at Company/i), {
        target: { value: '1-3 years' },
      });
  
      fireEvent.change(screen.getByLabelText(/Primary Reason for Leaving/i), {
        target: { value: 'worklife' },
      });

      expect(screen.getByLabelText(/Your Position/i).value).toBe('manager');
      expect(screen.getByLabelText(/Department/i).value).toBe('engineering');
      expect(screen.getByLabelText(/Tenure at Company/i).value).toBe('1-3 years');
      expect(screen.getByLabelText(/Primary Reason for Leaving/i).value).toBe('worklife');
});

it("Navigates to /questions with state on continue", () => {
    render(<ProfileSelection/>, {wrapper: MemoryRouter});

    fireEvent.change(screen.getByLabelText(/Your Position/i), {
        target: { value: 'manager' },
      });
  
      fireEvent.change(screen.getByLabelText(/Department/i), {
        target: { value: 'engineering' },
      });
  
      fireEvent.change(screen.getByLabelText(/Tenure at Company/i), {
        target: { value: '1-3 years' },
      });
  
      fireEvent.change(screen.getByLabelText(/Primary Reason for Leaving/i), {
        target: { value: 'worklife' },
      });

    fireEvent.click(screen.getByRole('button', {name: /Continue/i}));

    expect(mockNavigate).toHaveBeenCalledWith('/questions', {
        state: expect.objectContaining({
            position: 'manager',
            department: 'engineering',
            tenure: '1-3 years',
            reason: 'worklife',
        })
    })
})

it('Navigates back to welcome screen when Back button is clicked', () => {
    render(<ProfileSelection/>, {wrapper: MemoryRouter});

    fireEvent.click(screen.getByRole('button', {name: /Back/i}));
    expect(mockNavigate).toHaveBeenCalledWith('/')
})