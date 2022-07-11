class Player:

    def __init__(self,player_symbol):
        self.symbol=player_symbol

    def validate_coordinates(self,x,y):
        if x<=0 or y<=0 or x>3 or y>3:
            return False
        return True

    def move(self,game,x,y):
        if self.validate_coordinates(x,y)==False:
            return ('Invalid Coordinate! Choose a coordinate between [1,1] and [3,3]',0)
        else:
            return game.change_cell(x,y,self.symbol)