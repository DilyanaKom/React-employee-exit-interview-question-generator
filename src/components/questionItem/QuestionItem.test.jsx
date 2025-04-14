import { render, screen, cleanup} from '@testing-library/react';
import QuestionItem from './QuestionItem';
import { afterEach } from 'vitest';

afterEach(()=> cleanup());

it('Renders the question number correctly', () => {
    render(<QuestionItem content="Test" questionNumber={1}/>)

    screen.debug();
    expect(screen.getByText('Question 1')).toBeInTheDocument();
    expect(screen.queryByText('Question 3')).not.toBeInTheDocument();

});

it('Renders the question content correctly', () => {
    const content = "This is test content"
    render(<QuestionItem content={content} questionNumber={1}/>);
    expect(screen.getByText(content)).toBeInTheDocument();
})