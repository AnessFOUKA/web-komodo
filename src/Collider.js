export function detectInbound(x1, y1, width1, heigth1, x2, y2, width2, heigth2){
    return !(
        x1+width1<x2 ||
        x1>x2+width2 ||
        y1+heigth1<y2 ||
        y1>y2+heigth2 
    );
}

export class Collider{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
    }

    checkCollision(collider){
        const sides={};
        for(let side of ["up","down","left","right","collideTrue"]){
            sides[side]=false;
        }
        if(detectInbound(this.x,this.y,this.width,this.height,collider.x,collider.y,collider.width,collider.height)){
            let xCollisionZoneLength=Math.min(this.x+this.width,collider.x+collider.width)-Math.max(this.x,collider.x);
            let yCollisionZoneLength=Math.min(this.y+this.height,collider.y+collider.height)-Math.max(this.y,collider.y);
            if(yCollisionZoneLength>xCollisionZoneLength){
                const xDistance=(this.x+(this.width/2))-(collider.x+(collider.width/2));
                if(xDistance<0){
                    sides.left=true;
                    console.log("gauche");
                }else{
                    sides.right=true;
                    console.log("droite");
                }
            }else{
                const yDistance=(this.y+(this.height/2))-(collider.y+(collider.height/2));
                if(yDistance<0){
                    sides.up=true;
                    console.log("up");
                }else{
                    sides.down=true;
                    console.log("down");
                }
            }
            sides.collideTrue=(sides.up||sides.down||sides.left||sides.right);
        }
        return sides;
    }
}