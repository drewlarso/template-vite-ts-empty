import { Scene } from 'phaser';

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
        this.add.rectangle(400, 300, 300, 32)
            .setStrokeStyle(1, 0xffffff)
            .setOrigin(0.5, 0.5)
        const bar = this.add.rectangle(400-148, 300, 4, 32, 0xffffff)
        this.load.on('progress', (progress: number) => {
            bar.width = 300.0 * progress
        })
    }

    preload ()
    {
        this.load.setPath('assets');
        this.load.image('logo', 'logo.png');
    }

    create ()
    {
        this.scene.start('Game');
    }
}
