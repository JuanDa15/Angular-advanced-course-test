import { Player2 } from "./player2"

describe('Test for event emitter', () => {
  let player: Player2;

  beforeEach(() => {
    player = new Player2();
  })

  afterEach(() => {
    // emitterSubscription.unsubscribe();
  })

  it('should create', () => {
    expect(player).toBeDefined();
  })

  it('should emit the new hp value after receiving damage', () => {
    // Arrange
    let damage = 60;
  
    player.hpChange.subscribe({
      next: (hp: number) => {
        // Assert
        expect(player.hp).toEqual(hp);
      }
    })
    // Act
    player.makeDamage(damage);
  });

})