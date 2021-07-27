
// You can write more code here

/* START OF COMPILED CODE */

class Scene1 extends Phaser.Scene {
	
	constructor() {
	
		super("Scene1");
		
	}
	
	_create() {
	
		var player = this.add.image(62.083584, 60.687862, "textures", "player");
		player.setScale(0.1235375, 0.11345033);
		
		var coin = this.add.image(429.33917, 106.4009, "textures", "coin");
		coin.setScale(0.06253305, 0.05725174);
		
		this.fPlayer = player;
		this.fCoin = coin;
		
	}
	
	
	
	/* START-USER-CODE */

	create() {
		this._create();
		this.cursors = this.input.keyboard.createCursorKeys();
		this.physics.add.existing(this.fPlayer);
		this.physics.add.existing(this.fCoin);
		this.physics.add.overlap(this.fPlayer, this.fCoin, this.hit, null, this);
		
		this.createScore();
	
	}
	
	createScore(){
		this.score = 0;
		
		var style = { font: '20px Arial', fill: '#fff' };
		
		this.scoreText = this.add.text(20, 20, 'Счёт: ' + this.score, style);
		
	}

	update() {
		
	}


	hit(){
		this.fCoin.x = Phaser.Math.Between(10, 750);
		this.fCoin.y = Phaser.Math.Between(10, 400);
		this.score += 1; 
		this.scoreText.setText('Счёт: ' + this.score);
		
		/*this.tweens.add({  // анимация
			targets: this.fPlayer,
			duration: 200, 
			scaleX: 1.2, 
			scaleY: 1.2,   // шкала по y увеличивается до 1.2
			//yoyo: true   // возврат размера к 1, 1
		});*/
	}

	update() {
		if (this.cursors.down.isDown && this.fPlayer.y <= 395) {this.fPlayer.y += 10;}
		if (this.cursors.up.isDown && this.fPlayer.y >= 55) {this.fPlayer.y -= 10;}
		if (this.cursors.right.isDown && this.fPlayer.x <= 755) {this.fPlayer.x += 10;}
		if (this.cursors.left.isDown && this.fPlayer.x >= 40) {this.fPlayer.x -= 10;}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
