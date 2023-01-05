import { Player } from "./classes"

describe('test for class', () => {
  let newPlayer: Player;

  beforeEach(() => {
    newPlayer = new Player();
  })
  // BeforeAll: Antes de todas las pruebas
  // Before each: Antes de cada una de las pruebas
  // After all: Despues de todas las pruebas
  // After each: Despues de cada una de las pruebas
  it('should be truthy', () => {
    expect(newPlayer).toBeTruthy();
  });
  it('should have 100hp after creation', () => {
    expect(newPlayer.hp).toBe(100);
  });
  it('should have 80hp if takes 20damage', () => {
    newPlayer.makeDamage(20)
    expect(newPlayer.hp).toBe(80);
  });
  it('should have 0hp if takes more than 100 damage', () => {
    newPlayer.makeDamage(200)
    expect(newPlayer.hp).toBe(0);
  });
})