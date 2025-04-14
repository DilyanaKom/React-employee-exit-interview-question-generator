import { filterQuestions } from '../utils/questionFilter';

it('True test', () => {
    expect(true).toBe(true)
});

describe('filterQuestions', () => {
    const mockQuestions = [
      {
        id: 1,
        roles: ['manager'],
        departments: ['engineering'],
        tenure: ['1-3 years'],
        reasons: ['career growth']
      },
      {
        id: 2,
        roles: ['individual contributor'],
        departments: ['marketing'],
        tenure: ['less than 1 year'],
        reasons: ['compensation']
      },
      {
        id: 3,
        roles: ['manager'],
        departments: ['engineering'],
        tenure: ['1-3 years'],
        reasons: ['compensation']
      }
    ];
  
    it('returns questions that match all criteria', () => {
      const selections = {
        position: 'manager',
        department: 'engineering',
        tenure: '1-3 years',
        reason: 'career growth'
      };
  
      const result = filterQuestions(selections, mockQuestions);
      expect(result).toEqual([mockQuestions[0]]);
    });
  
    it('returns an empty array when no question matches', () => {
      const selections = {
        position: 'intern',
        department: 'design',
        tenure: '5-10 years',
        reason: 'relocation'
      };
  
      const result = filterQuestions(selections, mockQuestions);
      expect(result).toEqual([]);
    });
  
    it('requires all criteria to match', () => {
      const selections = {
        position: 'manager',
        department: 'engineering',
        tenure: '1-3 years',
        reason: 'not-a-match' // mismatch here
      };
  
      const result = filterQuestions(selections, mockQuestions);
      expect(result).toEqual([]);
    });
  
    it('returns multiple matches if available', () => {
      const selections = {
        position: 'manager',
        department: 'engineering',
        tenure: '1-3 years',
        reason: 'compensation'
      };
  
      const result = filterQuestions(selections, mockQuestions);
      expect(result).toEqual([mockQuestions[2]]);
    });
  });