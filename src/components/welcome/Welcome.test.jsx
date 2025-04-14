import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import Welcome from './Welcome'

describe('Welcome', () => {
    it('renders the heading and description', () => {
      render(<Welcome />, { wrapper: MemoryRouter })
  
      expect(screen.getByRole('heading', { name: /exit interview/i })).toBeInTheDocument()
      expect(screen.getByText(/your feedback helps us improve/i)).toBeInTheDocument()
    })
  
    it('displays time requirement', () => {
      render(<Welcome />, { wrapper: MemoryRouter } )
  
      expect(screen.getByText(/time required: ~5 minutes/i)).toBeInTheDocument()
    })
  
    it('displays all benefit points', () => {
      render(<Welcome />,{ wrapper: MemoryRouter } )
  
      expect(screen.getByText(/confidential/i)).toBeInTheDocument()
      expect(screen.getByText(/anonymous in reports/i)).toBeInTheDocument()
      expect(screen.getByText(/used to improve workplace/i)).toBeInTheDocument()
    })
  
    it('renders the Get Started link with correct route', () => {
      render(<Welcome />, { wrapper: MemoryRouter })
  
      const link = screen.getByRole('link', { name: /get started/i })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '/profile')
    })
  })