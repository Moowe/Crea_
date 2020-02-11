 
(function(){

    // rotate service arrow on click

    let img = document.querySelectorAll(".static > img");
    let artHide = document.querySelectorAll(".artCont");
    //let artHide = document.querySelectorAll(".artCont > p");

    document.querySelectorAll(".move").forEach((element, index) => {
        element.addEventListener("click", function(){
            if(element.classList.contains("rotate")){
                element.classList.remove("rotate");
                artHide[index].classList.add("artHide");
                artHide[index].classList.remove("artShow");
                
            } else {
                element.classList.add("rotate");
                artHide[index].classList.remove("artHide");
                artHide[index].classList.add("artShow");
            }
        });
    });


        // window.addEventListener('scroll', function(){
        //     let x = element.getBoundingClientRect().bottom;
        //     img.forEach((element, index) => {
        //         element.style.top = (20+x - 200) + "px";
        //     });
        // });


    



    // real

    // document.querySelectorAll(".move").forEach((element, index) => {
    //     article[index].style.height = "100%";
    //     element.addEventListener("click", function(){
    //         if(article[index].style.height != "100%"){
    //             article[index].style.height = "100%";
    //             picContainer[index].classList.remove("expand");
    //             element.classList.remove("rotate");
    //         } else {
    //             article[index].style.height = "400px";
    //             picContainer[index].classList.add("expand");
    //             element.classList.add("rotate");
    //         }
    //     });
    // });


    /*!
 * Check if an element is out of the viewport
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}  elem The element to check
 * @return {Object}     A set of booleans for each side of the element
 */
        
    // var isOutOfViewport = function (elem) {

    //     // Get element's bounding
    //     var bounding = elem.getBoundingClientRect();

    //     // Check if it's out of the viewport on each side
    //     var out = {};
    //     out.top = bounding.top < 0;
    //     out.left = bounding.left < 0;
    //     out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
    //     out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
    //     out.any = out.top || out.left || out.bottom || out.right;
    //     out.all = out.top && out.left && out.bottom && out.right;

    //     return out;
    // };

    // let elem = document.querySelector('.static');
    // let img = document.querySelector('.static > img');

    // isOutOfViewport(elem);

    // isOutOfViewport(elem);
    // var curstate = false;
    // var logViewport = function () {
    //     let changed = false;
    //     var isOut = isOutOfViewport(elem);
    //     let newstate = isOut.any;   
        
    //     if(curstate != newstate){
    //            changed = true;
    //            curstate = isOut.any;
    //     }else{
    //        changed = false;
    //     }


    //     if(changed && curstate) {
    //         img.style.position = "fixed";
    //         img.style.right = "15px";
    //         img.style.top = "85px";
    //         img.style.padding = "20px";
    //         console.log('Not in the viewport!');
    //     } else {
    //         console.log('In the viewport!');
    //         //img.style.position = "absolute";
    //     }
    // };
    
    // logViewport();
    // window.addEventListener('scroll', logViewport, false);
}());
    