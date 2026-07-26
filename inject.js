window.addEventListener(
"message",
(event)=>{


    if(event.data.type !== "GRAYWORLD")
        return;


    const s = event.data.settings;


    document
    .querySelectorAll("canvas")
    .forEach(canvas=>{


        if(!s.enabled)
        {
            canvas.style.filter="";
            return;
        }


        canvas.style.filter =
        `
        grayscale(${s.grayscale}%)
        contrast(${s.contrast}%)
        brightness(${s.brightness}%)
        `;

    });

});