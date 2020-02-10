class BallAnimation {
    constructor(options) {  /* <-- se apeleaza cu "new object" */
        this.startX = options.startX;
        this.startY = options.startY;
        this.endX = options.endX;
        this.endY = options.endY;
        this.size = options.size;
        this.step = options.step;
        this.element = null;
        this.anim = null;
        this.currentX = this.startX;
        this.currentY = this.startY;

        this.createElement();

    }
    createElement() {
        this.element = document.createElement("div"); //<--- CREAZA DIVU !!!
        this.element.style.width = `${this.size}px`;
        this.element.style.height = `${this.size}px`;
        this.element.style.position = "absolute";
        this.element.style.backgroundColor = "green";
        this.element.style.borderRadius = "50%";
        this.element.style.left = `${this.startX}px`;
        this.element.style.top = `${this.startY}px`;
        this.element.style.display = "inline-block";
        this.canAnimate = false;

        if (this.startX < this.endX) {
            this.directionX = 1;
        } else {
            this.directionX = -1;
        }
        if (this.startY < this.endY) {
            this.directionY = 1;
        } else {
            this.directionY = -1;
        }

        document.body.appendChild(this.element);

    };

    startAnimation() {
        if (this.canAnimate == false) {
            this.element.style.background = "red";
            this.canAnimate = true;
            this.anim = requestAnimationFrame(this.animate.bind(this));
        }
    };
    stopAnimation() {
        this.canAnimate = false;
        cancelAnimationFrame(this.anim);

    }

    reset() {
        this.element.style.background = "green";
        this.currentX = this.startX;
        this.currentY = this.startY;
        this.element.style.left = `${this.currentX}px`;
        this.element.style.top = `${this.currentY}px`;
        this.stopAnimation();

    }

    animate() {
        console.log(this);
        this.currentX += this.step * this.directionX;
        this.currentY += this.step * this.directionY;

        if (this.directionX == 1) {
            if (this.currentX > this.endX) {
                this.currentX = this.endX;
            } else {
                if (this.currentX < this.endX) {
                    this.currentX = this.endX;
                }
            }
        }

        if (this.directionY == 1) {
            if (this.currentY > this.endY) {
                this.currentY = this.endY;
            } else {
                if (this.currentY < this.endY) {
                    this.currentY = this.endY;
                }
            }
        }

        this.element.style.left = `${this.currentX}px`;
        this.element.style.top = `${this.currentY}px`;

        if (this.currentX == this.endX && this.currentY == this.endY) {
            this.stopAnimation();
        } else {
            this.anim = requestAnimationFrame(this.animate.bind(this));
        }


    };

}