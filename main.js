// Initialize Phaser, and creates a 400x490px game
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game_div');

// Creates a new 'main' state that wil contain the game
var main_state = {

    preload: function() { 
		// Function called first to load all the assets
          this.game.stage.backgroundColor = "#71c5cf";
          this.game.load.image('bird', 'assets/bird.png');
    },

    create: function() { 
    	// Fuction called after 'preload' to setup the game  

     //display the bird on screen  
     this.bird = this.game.add.sprite(100, 245, 'bird');

     //add gravity to the bird to make the bird fall
     this.bird.body.gravity.y = 400;

     // Call the 'jump' function when the spacekey is hit
    var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    space_key.onDown.add(this.jump, this);
    },
    
    update: function() {
		// Function called 60 times per second

     // If the bird is out of the world (too high or too low), call the 'restart_game' function
    if (this.bird.inWorld == false)
        this.restart_game();

    },

    jump: function() {
     //add a vertical velocity to the bird
     this.bird.body.velocity.y = -350;
    },

    restart_game: function() {
     //start the 'main' state, which restarts the game
     this.game.state.start('main');
    }
};

// Add and start the 'main' state to start the game
game.state.add('main', main_state);  
game.state.start('main'); 