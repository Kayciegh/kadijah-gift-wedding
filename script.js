/* =======================================================
   GIFT & KADIJAH
   LUXURY INVITATION
======================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const cover = document.getElementById("cover");
    const seal = document.getElementById("seal");

    const invitation = document.getElementById("invitation");

    const pages = document.querySelectorAll(".invite-page");

    const nextBtn = document.getElementById("nextBtn");

    const prevBtn = document.getElementById("prevBtn");

    const indicator = document.getElementById("pageIndicator");

    const navigation = document.getElementById("pageNav");

    let currentPage = 0;

    // ===========================================
    // INITIAL STATE
    // ===========================================

    pages.forEach((page,index)=>{

        page.classList.remove("active");

        if(index===0){

            page.classList.add("active");

        }

    });

    updateNavigation();

    // ===========================================
    // WAX SEAL PULSE
    // ===========================================

    gsap.to(seal,{

        scale:1.05,

        duration:1.4,

        repeat:-1,

        yoyo:true,

        ease:"sine.inOut"

    });

    // ===========================================
    // OPEN INVITATION
    // ===========================================

    seal.addEventListener("click",()=>{

        gsap.killTweensOf(seal);

        gsap.to(cover,{

            opacity:0,

            duration:.8,

            onComplete:()=>{

                cover.style.display="none";

                invitation.style.visibility="visible";

                invitation.style.opacity="1";

                navigation.style.display="flex";

            }

        });

    });

    // ===========================================
    // NEXT PAGE
    // ===========================================

    nextBtn.addEventListener("click",()=>{

        if(currentPage>=pages.length-1) return;

        pages[currentPage].classList.remove("active");

        currentPage++;

        pages[currentPage].classList.add("active");

        updateNavigation();

    });

    // ===========================================
    // PREVIOUS PAGE
    // ===========================================

    prevBtn.addEventListener("click",()=>{

        if(currentPage<=0) return;

        pages[currentPage].classList.remove("active");

        currentPage--;

        pages[currentPage].classList.add("active");

        updateNavigation();

    });

    // ===========================================
    // UPDATE BUTTONS
    // ===========================================

    function updateNavigation(){

        indicator.textContent=`${currentPage+1} / ${pages.length}`;

        prevBtn.disabled=currentPage===0;

        nextBtn.disabled=currentPage===pages.length-1;

    }

});