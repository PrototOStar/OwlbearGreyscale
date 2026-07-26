import OBR from "https://esm.sh/@owlbear-rodeo/sdk";

OBR.onReady(async () => {

    console.log("OBR keys:", Object.keys(OBR));

    console.log("Scene keys:", Object.keys(OBR.scene));

    console.log("Viewport keys:", Object.keys(OBR.viewport));

    console.log("Items keys:", Object.keys(OBR.scene.items));

    console.log("Local keys:", Object.keys(OBR.scene.local));

});