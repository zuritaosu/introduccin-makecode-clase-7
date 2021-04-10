// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000102010c0707010101010b07070801010101010c0707010101010303070801010102020c070702020202030c07070d0d0102020c07070d0d0d0d0d07070909090d0d0d070707070707070707080303010707070707070707070707090a03020209090909090909070707080101030402030403030301010c0707080101030202030303040202010c0707070e01030303020202020202010c07090708010101010d0d0d0d0d0d0d0708010c070d0d0d0d09090707070707070a010c0707070a0506060c070909090a03010c070708050506060c080303030303030b090708050506060c0804030403030101010c08050506060b0a03030303030301010c080505`, img`
. . 2 . . . 2 . . 2 . . . . 2 . 
. . 2 . . . 2 . . 2 2 2 . . 2 2 
. . 2 . . . 2 2 2 2 2 . . . . . 
2 2 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 2 2 
. . . . . . . . . . . . . 2 . . 
. . . . . . . . . . . 2 2 2 . . 
2 2 2 2 2 2 2 . . . . 2 2 . . . 
. . . . . . 2 . . . . . 2 . . . 
2 2 2 2 2 2 2 . . . . . 2 2 2 2 
. . . . . . . . . 2 . . . . . . 
. . . . . . . . . 2 . . . . . 2 
2 2 . . . . . . 2 2 . . . . 2 . 
. 2 . . 2 2 2 2 2 2 . . . . 2 . 
. 2 . . 2 . . . . 2 2 2 . . 2 . 
. 2 . . 2 . . . . . . 2 . . 2 . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass2,sprites.castle.tilePath5,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath2,sprites.castle.tilePath3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
