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
    
    def inputValidator(inputString):
        inputRegex = re.compile(r'^\d,\d$')
        matchedInput=inputRegex.search(inputString)
        
        if matchedInput==None:
            return False
        return True
    
    def inputCoordinates(self):
        print("{}'s Turn. Please enter the coordinates where you want to place your symbol.".format(self.symbol[self.turn]) )
        inputString=str(input())
        while self.inputValidator(inputString)==False:
            print('Incorrect Coordinates Format!. Please make sure you follow {x,y} format')
            inputString=str(input())
        
        [x,y]=inputString.split(',')
        [x,y]=[int(x),int(y)]

        return [x,y]

    def switchTurn(self):
        self.turn=(self.turn+1)%2

    def play(self):
        print('Lets Begin The Game!')
        self.game.printGameBoard()

        while(self.game.checkVictory()[1]==3):
            [x,y]=self.inputCoordinates()
            
            if self.turn==0:
                moveResult=self.player_x.move(self.game,x,y)
            else:
                moveResult=self.player_o.move(self.game,x,y)

            if moveResult[1]<=1:
                print(moveResult[0])
                continue
            else:
                self.game.printGameBoard()
                self.switchTurn()
        
        gameResult=self.game.checkVictory()

        print(gameResult[0])