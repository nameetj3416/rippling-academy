class Player:

    def __init__(self,playerSymbol):
        self.symbol=playerSymbol

    def validateCoordinates(self,x,y):
        if x<=0 or y<=0 or x>3 or y>3:
            return False
        return True

    def move(self,game,x,y):
        if self.validateCoordinates(x,y)==False:
            return ('Invalid Coordinate! Choose a coordinate between [1,1] and [3,3]',0)
        else:
            return game.changeCell(x,y,self.symbol)