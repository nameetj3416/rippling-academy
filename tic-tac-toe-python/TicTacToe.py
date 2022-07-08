class TicTacToe:

    def __init__(self):
        self.gameBoard=[[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]
        self.gameInProgress=True

    def isGameBoardFull(self):
        for row in self.gameBoard:
            for cell in row:
                if cell==' ':
                    return False
        return True
    
    def printSeparationLine(self):
        print('  ___   ___   ___ ')

    def printGameBoard(self):
        for row in self.gameBoard:
            self.printSeparationLine()
            print('\n╎',end="  " )
            for cell in row:
                print(cell,end="  ")
                print('╎',end="  ")
            print('\n')
        self.printSeparationLine()    
    
    def changeCell(self,x,y,symbol):
        if(self.gameBoard[x-1][y-1]!=' '):
            return ('This is already occupied, Choose another cell!',1)
        
        else:
            self.gameBoard[x-1][y-1]=symbol
            return ('̉Your Piece has been placed',2)

    def columnVictory(self,symbol,columnId):
        for rowId in range (3):
            if self.gameBoard[rowId][columnId]!=symbol:
                return False
        
        return True

    def rowVictory(self,symbol,rowId):
        for columnId in range (3):
            if self.gameBoard[rowId][columnId]!=symbol:
                return False
        
        return True

    def diagonalVictory(self,symbol,diagonalId):
        if diagonalId==0:
            for rowId in range (3):
                if self.gameBoard[rowId][rowId]!=symbol:
                    return False
            return True
        else:
            for rowId in range (3):
                if self.gameBoard[rowId][2-rowId]!=symbol:
                    return False
            return True


    def checkVictory(self):
        for symbol in ['0','X']:
            for rowId in range (3):
                if self.rowVictory(symbol,rowId):
                    return ('{} Won'.format(symbol),1)
            
            for columnId in range (3):
                if self.columnVictory(symbol,columnId):
                    return ('{} Won'.format(symbol),1)
            
            for diagonalId in range (3):
                if self.diagonalVictory(symbol,diagonalId):
                    return ('{} Won'.format(symbol),1)
        
        if self.isGameBoardFull():
            return ('Game Drawn',2)
        
        return ('Continue',3)
    

   