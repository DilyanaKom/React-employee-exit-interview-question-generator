import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Questions from './Questions';

// Mocks
vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useLocation: () => ({
      state: {
        position: 'Manager',
        department: 'HR',
        tenure: '3-5 years',
        reason: 'worklife'
      }
    })
  };
});

vi.mock('react-to-pdf', () => ({
  usePDF: () => ({
    toPDF: mockToPDF,
    targetRef: { current: null }
  })
}));

vi.mock('../../hooks/useGenerateQuestions', () => ({
  useGenerateQuestions: () => ({
    questions: [
      { id: 'q1', question: 'Why are you leaving?' },
      { id: 'q2', question: 'What did you enjoy the most?' }
    ],
    regenerate: mockRegenerate
  })
}));

const mockNavigate = vi.fn();
const mockToPDF = vi.fn();
const mockRegenerate = vi.fn();

describe('Questions Component', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
    mockToPDF.mockClear();
    mockRegenerate.mockClear();
    vi.clearAllMocks();
  });

  it('renders position, department, and tenure', () => {
    render(<Questions />, { wrapper: MemoryRouter });
    expect(screen.getByText(/Position:/i)).toBeInTheDocument();
    expect(screen.getByText(/Manager/i)).toBeInTheDocument();
    expect(screen.getByText(/Department:/i)).toBeInTheDocument();
    expect(screen.getByText(/HR/i)).toBeInTheDocument();
    expect(screen.getByText(/Tenure:/i)).toBeInTheDocument();
    expect(screen.getByText(/3-5 years/i)).toBeInTheDocument();
  });

  it('renders all questions', () => {
    render(<Questions />, { wrapper: MemoryRouter });
    expect(screen.getByText('Why are you leaving?')).toBeInTheDocument();
    expect(screen.getByText('What did you enjoy the most?')).toBeInTheDocument();
  });

  it('calls regenerate on "Regenerate" button click', () => {
    render(<Questions />, { wrapper: MemoryRouter });
    const regenerateBtn = screen.getByRole('button', { name: /Regenerate/i });
    fireEvent.click(regenerateBtn);
    expect(mockRegenerate).toHaveBeenCalled();
  });

  it('calls toPDF on "Export PDF" button click', () => {
    render(<Questions />, { wrapper: MemoryRouter });
    const exportBtn = screen.getByRole('button', { name: /Export PDF/i });
    fireEvent.click(exportBtn);
    expect(mockToPDF).toHaveBeenCalled();
  });

  it('navigates to /profile on "Back" button click', () => {
    render(<Questions />, { wrapper: MemoryRouter });
    const backBtn = screen.getByRole('button', { name: /Back/i });
    fireEvent.click(backBtn);
    expect(mockNavigate).toHaveBeenCalledWith('/profile');
  });

  it('copies questions to clipboard and shows toast', async () => {
    const mockClipboard = {
      writeText: vi.fn().mockResolvedValue()
    };
    global.navigator.clipboard = mockClipboard;

    render(<Questions />, { wrapper: MemoryRouter });
    const copyBtn = screen.getByRole('button', { name: /Copy All/i });
    fireEvent.click(copyBtn);

    await waitFor(() =>
      expect(screen.getByText(/Content copied to clipboard/i)).toBeInTheDocument()
    );
    expect(mockClipboard.writeText).toHaveBeenCalledWith(
      'Why are you leaving?\nWhat did you enjoy the most?'
    );
  });

  it('copies questions to clipboard and shows toast', async () => {
    const mockWriteText = vi.fn().mockResolvedValue();
    navigator.clipboard = { writeText: mockWriteText };

    render(<Questions />, { wrapper: MemoryRouter });

    const copyButton = screen.getByRole('button', { name: /Copy All/i });
    fireEvent.click(copyButton);

    expect(mockWriteText).toHaveBeenCalledWith(
      'Why are you leaving?\nWhat did you enjoy the most?'
    );

    await waitFor(() => {
      expect(screen.getByText(/Content copied to clipboard!/i)).toBeInTheDocument();
    });
  });
});
