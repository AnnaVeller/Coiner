
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
		this.physics.add.overlap(this.fPlayer, this.fCoin, this.hit, null, this)
	}

	update() {
	}


	hit(){
		this.fCoin.x = Phaser.Math.Between(10, 750);
		this.fCoin.y = Phaser.Math.Between(10, 400);
	}

	update() {
		if (this.cursors.down.isDown) {this.fPlayer.y += 10;}
		if (this.cursors.up.isDown) {this.fPlayer.y -= 10;}
		if (this.cursors.right.isDown) {this.fPlayer.x += 10;}
		if (this.cursors.left.isDown) {this.fPlayer.x -= 10;}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
