import { Scene } from 'phaser'

export class Game extends Scene {
    constructor() {
        super('Game')
    }

    create() {
        const graphics = this.add.graphics()
        graphics.fillGradientStyle(0xccffb8, 0xccffb8, 0x1d7c61, 0x1d7c61)
        graphics.fillRect(0, 0, 800, 600)

        this.add.image(400, 300, 'logo')
    }
}
