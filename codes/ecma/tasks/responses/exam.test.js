const exam = require('./exam')

test('calculating grade by weighted average', () => {
  studend1 = {q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b'}
  studend2 = {q1: 'c', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}
  weight =   {q1:  2 , q2:  2 , q3:  2 , q4:  2 , q5:  2 }
  answer =   {q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}

  expect(exam.grade(studend1, weight, answer)).toBe(4)
  expect(exam.grade(studend2, weight, answer)).toBe(8)
})

test('calculating exam values', () => {
  students = [
    {"student": "Fulano", "grade": 10},
    {"student": "Sicrano", "grade": 5},
    {"student": "Beltrano", "grade": 7},
  ]

  expect(exam.avg(students)).toBe(7.333333333333333)
  expect(exam.min(students)).toBe(5)
  expect(exam.min(students, 2)).toEqual([5, 7])
  expect(exam.max(students)).toBe(10)
  expect(exam.lt(students, 6)).toBe([5])
  expect(exam.gt(students, 6)).toBe([7, 10])
})
