(function(){

    /*polyfil ms-products */
    if(isMs()){

        let placeholderPolyfill =  function (el) {
        if(el.value) {
            el.parentElement.querySelector("span").classList.add('edge_polyfill');
            } else {
                el.parentElement.querySelector("span").classList.remove('edge_polyfill');
            }
        }

        document.querySelectorAll('.inp > input').forEach(el => {
            el.addEventListener('change', (ev) => placeholderPolyfill(ev.target));
        });

        document.getElementById("inp5").addEventListener('change', (ev) => placeholderPolyfill(ev.target));

        setTimeout(function(){
            document.querySelectorAll('.inp > input').forEach(el => {
            if(el.value){
                placeholderPolyfill(el);
            }
            placeholderPolyfill(document.getElementById("inp5"));
        });
        }, 100);
    }
    
    
    function isMs(){
        return (document.documentMode || /Edge/.test(navigator.userAgent));
    }

    /*check for mobile device*/
    
    function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    };

    let slide = document.getElementById("move");

    if(!isMobileDevice()) {
        slide.addEventListener("mousemove", function(event){     
            let x = slide.scrollWidth - slide.clientWidth;
            let k = x/slide.clientWidth;
            let y = (event.clientX*k) - slide.offsetLeft;
            
            slide.scrollLeft = y;
        });
    };

    /*portfolio images*/

    document.querySelectorAll(".pfsi-js").forEach(function (el, index){
        el.addEventListener("click", function(){
            document.querySelectorAll('.portfolio_big_image').forEach(((el) => el.classList.add('hide')));

            document.querySelectorAll('.portfolio_big_image')[index]
            .classList.remove("hide");
        });
    });


    /* up down services arrow */

    let cenaDrop = document.querySelectorAll(".cena_drop");
    let plan = document.querySelectorAll(".plan");
    let bor = document.querySelectorAll(".bor");

    cenaDrop.forEach(function(el, index){ 
        el.addEventListener("click", function(){
            let toHide = el.parentElement.parentElement.querySelectorAll(".list_show li");
            if(plan[index].style.height != "185px") {
                plan[index].style.height = "185px";
                toHide.forEach(function(li){
                    li.classList.remove("li_show");
                    li.classList.add("li_hide");
                    bor[index].style.backgroundColor = "rgba(0, 0, 0, 0)";
                });
                el.style.transform="rotate(540deg)";
            } else {
                plan[index].style.height = "500px";
                toHide.forEach(function(li){
                    li.classList.remove("li_hide");
                    li.classList.add("li_show");
                    bor[index].style.backgroundColor = "rgba(0, 0, 0, 0.212)";
                });
                el.style.transform="rotate(0deg)";
            }
        })
    });

    
    if(isMobileDevice()) {
        let toHide = document.querySelectorAll(".list_show li");
        console.log(bor);
        plan.forEach(function(mob, index){
            mob.style.height = "185px";
            bor[index].style.backgroundColor = "rgba(0, 0, 0, 0)";
        });
        toHide.forEach(function(li){            
            li.classList.remove("li_show");
            li.classList.add("li_hide");
        });

        cenaDrop.forEach(function(arrowDownMobile){
            arrowDownMobile.style.transform="rotate(180deg)";
        });
    };


}());
