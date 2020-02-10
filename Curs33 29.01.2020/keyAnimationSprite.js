class KeyAnimationSprite extends Sprite {
    constructor(options) {
        options.class = options.classes[0];
        super(options);
        this._classes = options.classes;
        this._index = 0;
        this._clickCallback = options.clickCallback;
        this.initi();

    }

    initi() {
        document.body.addEventListener("keydown", this.KeyDown.bind(this))
    }

    KeyDown(e) {
        var arrow = e.code;
        switch (arrow) {
            case "ArrowDown":
                this.nextFrame();
                break;
        }
        
    }



    nextFrame() {
        this._index++;
        if (this._index >= this._classes.length) {
            this._index = 0;
        }
        this.class = this._classes[this._index];
    }
}