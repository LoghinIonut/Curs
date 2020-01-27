class ClickableSprite extends Sprite {
    constructor(options) {
        super(options);
        this._clickCallback = options.clickCallback;
        this.init();
    }
    init() {
         this._element.addEventListener("click", this.click.bind(this))
    }

    click(e) {
        this._clickCallback(e);
    }
}