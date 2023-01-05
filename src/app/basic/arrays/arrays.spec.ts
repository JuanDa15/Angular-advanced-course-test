import { getRobots } from "./arrays"

describe('test for arrays', () => {
  it('should return an array of 3', () => {
    const answer = getRobots();

    expect(answer.length).toBeGreaterThanOrEqual(3);
  })

  it('should return an array of 3', () => {
    const answer = getRobots();
    expect(answer).toContain('Robot 1');
    expect(answer).toContain('Robot 2');
  });
})