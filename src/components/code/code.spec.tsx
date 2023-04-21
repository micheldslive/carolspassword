import { Code } from './code'
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

const props = {
  count: 0,
  setCount: () => 0,
}

describe('<Code />', () => {
  test('should by render a Code', () => {
    render(<Code {...props} />)
    const closeCode = screen.getByLabelText(/code/i)
    expect(closeCode).toBeInTheDocument()
  })
})
