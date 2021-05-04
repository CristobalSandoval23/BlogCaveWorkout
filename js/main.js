((d)=>{
    var $openIcon = d.querySelector('.openIcon'),
        $closeIcon = d.querySelector('.closeIcon'),
        $menu = d.querySelector(".menu"),
        $main = d.querySelector(".main"),
        $footer = d.querySelector(".footer"),
        $close = true;
        $openIcon.addEventListener('click', openMenu);
    
    function openMenu() {
        if ($close) {
            $menu.style.left = '0%';
            $menu.style.transition = '0.5s';
            $closeIcon.style.transition = '0.5s';
            $openIcon.style.opacity = '0';
            $main.style.opacity = '0.5';
            $footer.style.opacity = '0.5';
            $close = false;
        }else{
            $menu.style.left = '-100%';
            $openIcon.style.opacity = '1';
            $main.style.opacity = '1';
            $footer.style.opacity = '1';
            $openIcon.style.transition = '0.5s';
            $close = true;
        }
    }
    
    window.addEventListener("resize", (e)=>{
        if(window.innerWidth > 700){
            $menu.style.removeProperty('transition');
            $menu.style.removeProperty('left');
        }
    });

    var $search = d.querySelector(".search");

    $search.addEventListener('click', () =>{
        alert("Sentadilla")
    })
    
})(document);