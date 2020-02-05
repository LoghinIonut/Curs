class Snowflake extends Spritesnow {  
    constructor(options){
        super(options);
        this.dx = Math.random();
        this.initx = this._x;
        this.vx = Math.random() / 20 + 0.02;
        
        
        
        }

        animate() {
            this.y = this.y + this._width;
            this.x = this.initx + Math.sin(this.dx) * this._width * 10 ;
            this.dx += this.vx;
            if (this.y > window.innerHeight) {
                this.y = 0;
                this.x = Math.random() *window.innerWidth;
                this.initx = this._x;

            }
        }


    }
      
    

    