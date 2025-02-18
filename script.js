const acHs = document.querySelectorAll(".accordion-header");
const acCs = document.querySelectorAll(".accordion-content");


acHs.forEach((header) => {
    header.addEventListener("click" , () =>{
        const aI = header.parentElement;
        
        const aC = aI.querySelector(".accordion-content");
        
        acCs.forEach((content) => {
            if(content !== aC){
                content.classList.remove("active");
                content.style.maxHeight = 0;
            }
        })

        aC.classList.toggle("active");

        if(aC.classList.contains("active")){
            aC.style.maxHeight = aC.scrollHeight + "px";
        }else{
            aC.style.maxHeight = 0;
        }  
    });

    

})