import { loggedUser } from "./booleans"

describe('test for booleans', () => {
  it ('should return true if the user is logged', () => {
    const answer = loggedUser();
    expect(answer).toBeTrue();
  })
})