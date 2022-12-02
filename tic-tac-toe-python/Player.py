class Player:

    def __init__(self, player_symbol):
        self.symbol = player_symbol

    @staticmethod
    def validate_coordinates(x: int, y: int) -> bool:
        if x <= 0 or y <= 0 or x > 3 or y > 3:
            return False
        return True

    def move(self, game, x: int, y: int):
        if not self.validate_coordinates(x, y):
            return 'Invalid Coordinate! Choose a coordinate between [1,1] and [3,3]', 0
        else:
            return game.change_cell(x, y, self.symbol)
