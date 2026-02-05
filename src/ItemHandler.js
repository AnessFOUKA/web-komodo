import GameObject from "./GameObject";
class ItemHandler extends GameObject {
    constructor(x, y, idsList, scriptsIds){
        super(idsList,scriptsIds);
        this.x=x;
        this.y=y;
        this.elements=[];
        this.addPipeline=[];
        this.remPipeline=[];
    }
    readPipelines(){
        while(this.addPipeline.length>0){
            this.elements.push(this.addPipeline[0]);
            this.addPipeline.splice(0,1);
        }
        this.remPipeline.sort((a,b)=>a-b);
        while(this.remPipeline.length>0){
            this.elements.splice(this.remPipeline[0],1);
            this.remPipeline.splice(0,1);
        }
    }
    step(){
        if(this.mother){
            this.x+=this.mother.x;
            this.y+=this.mother.y;
        }
        this.readPipelines();
        super.step();
        for(let i=0;i<this.elements.length;i++){
            let element=this.elements[i];
            element.arrayId=i;
            if(element.isJustCreated){
                element.create();
                element.isJustCreated=false;
            }
            element.step();
        }
        if(this.mother){
            this.x-=this.mother.x;
            this.y-=this.mother.y;
        }
    }
    getElementById(id){
        const gameObjectsList=[];
        for(let i=0;i<elements.length;i++){
            const list=this.elements[i].idsList;
            if(list.includes(id)){
                gameObjectsList.push(this.elements[i]);
            }
        }
        return gameObjectsList;
    }

    getWidth(){
        let width=0;
        for(let item of elements){
            if(item instanceof ItemHandler){
                width=item.getWidth();
            }else if(item instanceof AnimatedImage){
                const potentialGreaterCoordinate=item.x+item.width;
                if(potentialGreaterCoordinate>width){
                    width=potentialGreaterCoordinate;
                }
            }
        }
        return width;
    }

    getHeight(){
        let height=0;
        for(let item of elements){
            if(item instanceof ItemHandler){
                height=item.getHeight();
            }else if(item instanceof AnimatedImage){
                const potentialGreaterCoordinate=item.y+item.height;
                if(potentialGreaterCoordinate>height){
                    height=potentialGreaterCoordinate;
                }
            }
        }
        return height;
    }
}

export default ItemHandler;