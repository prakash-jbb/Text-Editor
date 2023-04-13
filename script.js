const fileName = document.querySelector(".fileName"),
fileExe = document.querySelector("select"),
textArea = document.querySelector("textarea");
saveBtn = document.querySelector("button");

// Change save as btn text
fileExe.addEventListener("change",()=>{
    var fileExe2 = fileExe.options[fileExe.selectedIndex].text;
    fileExe2 = fileExe2.split(" ")[0];
    document.querySelector("button").innerText= "Save As " + fileExe2 + " File";
})

saveBtn.addEventListener("click",()=>{
    const blob = new Blob([textArea.value],{type: fileExe.value});

    // Create url
    const fileUrl = URL.createObjectURL(blob);
    //Create anchor tag
    const link = document.createElement("a");
    //Dawnload File Name
    link.download = fileName.value; 
    //Set href in <a> tag eg <a download href="fileUrl"></a>
    link.href = fileUrl; 
    //Click to link for download
    link.click();
})





// Notes

// Website Mdn(web API)
// common MIME SVGUnitTypes(File Extention For dawnload)
// Blob