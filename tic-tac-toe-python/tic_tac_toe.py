class TicTacToe:

    def __init__(self):
        self.game_board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']]

    def is_game_board_full(self) -> bool:
        for row in self.game_board:
            for cell in row:
                if cell == ' ':
                    return False
        return True

    @staticmethod
    def print_separation_line() -> None:
        print('  ___   ___   ___ ')

    @staticmethod
    def print_row(row) -> None:
        print('\n╎', end="  ")
        for cell in row:
            print(cell, end="  ")
            print('╎', end="  ")
        print('\n')

    def print_game_board(self) -> None:
        for row in self.game_board:
            self.print_separation_line()
            self.print_row(row)
        self.print_separation_line()

    def change_cell(self, x: int, y: int, symbol: str):
        if self.game_board[x - 1][y - 1] != ' ':
            return 'This is already occupied, Choose another cell!', 1

        else:
            self.game_board[x - 1][y - 1] = symbol
            return '̉Your Piece has been placed', 2

    def column_victory(self, symbol: str, column_id: int) -> bool:
        for row_id in range(3):
            if self.game_board[row_id][column_id] != symbol:
                return False

        return True

    def row_victory(self, symbol: str, row_id: int) -> bool:
        for column_id in range(3):
            if self.game_board[row_id][column_id] != symbol:
                return False

        return True

    def diagonal_victory(self, symbol: str, diagonal_id: int) -> bool:
        if diagonal_id == 0:
            for row_id in range(3):
                if self.game_board[row_id][row_id] != symbol:
                    return False
            return True
        else:
            for row_id in range(3):
                if self.game_board[row_id][2 - row_id] != symbol:
                    return False
            return True

    def check_victory(self):
        for symbol in ['O', 'X']:
            for row_id in range(3):
                if self.row_victory(symbol, row_id):
                    return '{} Won'.format(symbol), 1

            for column_id in range(3):
                if self.column_victory(symbol, column_id):
                    return '{} Won'.format(symbol), 1

            for diagonal_id in range(2):
                if self.diagonal_victory(symbol, diagonal_id):
                    return '{} Won'.format(symbol), 1

        if self.is_game_board_full():
            return 'Game Drawn', 2

        return 'Continue', 3
