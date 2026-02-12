import * as Engine  from "./src/Engine"
const g1=new Engine.Game(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"],960,544,"pixelated");
g1.storeIn("div");
g1.mainMemoryManager.addImg("./javascript.svg")
g1.cameras=[new Engine.Camera([[0,0,500,544]],0,0)]
g1.addItem(new Engine.AnimatedImage("./javascript.svg",0,0,[{x:0,y:0,width:30,height:30,frameTimeIndex:0,frameTimeMax:1}],0,0,2,2,[],[]),g1);
g1.gameLoop();