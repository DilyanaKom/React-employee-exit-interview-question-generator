import { describe, expect, it} from 'vitest';
import { getRandomQuestions } from '../utils/randomQuestionGenerator';

describe('getRandomQuestions', () => {
    const sampleQuestions = [
      { id: 1, text: 'Q1' },
      { id: 2, text: 'Q2' },
      { id: 3, text: 'Q3' },
      { id: 4, text: 'Q4' },
      { id: 5, text: 'Q5' },
      { id: 6, text: 'Q6' }
    ];
  
    it('returns exactly 4 questions', () => {
      const result = getRandomQuestions(sampleQuestions);
      expect(result).toHaveLength(4);
    });
  
    it('returns different sets on multiple calls', () => {
      const result1 = getRandomQuestions(sampleQuestions);
      const result2 = getRandomQuestions(sampleQuestions);
  
      const areSame = result1.every((q, i) => result2[i]?.id === q.id);
      expect(areSame).toBe(false);
    });
  
    it('does not mutate the original array', () => {
      const originalCopy = [...sampleQuestions];
      getRandomQuestions(sampleQuestions);
      expect(sampleQuestions).toEqual(originalCopy);
    });
  
    it('returns all available questions if less than 4', () => {
      const shortList = [
        { id: 1 },
        { id: 2 },
        { id: 3 }
      ];
      const result = getRandomQuestions(shortList);
      expect(result).toHaveLength(3);
      expect(result).toEqual(expect.arrayContaining(shortList));
    });
  
    it('returns an empty array if input is empty', () => {
      const result = getRandomQuestions([]);
      expect(result).toEqual([]);
    });
  });