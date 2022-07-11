import re
from TicTacToe import TicTacToe
from Player import Player

class GameEngine:
    def __init__(self):
        self.game=TicTacToe()
        self.turn=0
        self.symbol=['X','O']
        self.player_x=Player('X')
        self.player_o=Player('O')
    
    def input_validator(self,input_string):
        input_regex = re.compile(r'^\d,\d$')
        matched_input=input_regex.search(input_string)
        
        if matched_input==None:
            return False
        return True
    
    def input_coordinates(self):
        print("{}'s Turn. Please enter the coordinates where you want to place your symbol.".format(self.symbol[self.turn]) )
        input_string=str(input())
        while self.input_validator(input_string)==False:
            print('Incorrect Coordinates Format!. Please make sure you follow {x,y} format')
            input_string=str(input())
        
        [x,y]=input_string.split(',')
        [x,y]=[int(x),int(y)]

        return [x,y]

    def switch_turn(self):
        self.turn=(self.turn+1)%2

    def play(self):
        print('Lets Begin The Game!')
        self.game.print_game_board()

        while(self.game.check_victory()[1]==3):
            [x,y]=self.input_coordinates()
            
            if self.turn==0:
                move_result=self.player_x.move(self.game,x,y)
            else:
                move_result=self.player_o.move(self.game,x,y)

            if move_result[1]<=1:
                print(move_result[0])
                continue
            else:
                self.game.print_game_board()
                self.switch_turn()
        
        game_result=self.game.check_victory()

        print(game_result[0])