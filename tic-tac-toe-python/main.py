from GameEngine import GameEngine

def main():
    user_key='c'
    while(user_key!='q' and user_key!='Q'):
        game=GameEngine()
        game.play()
        
        print('To quit the game press Q or press any other key to continue to the next round.')
        user_key=str(input())
    
    print('The Game Loop Ended!')    
    
    
main()