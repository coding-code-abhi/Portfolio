let boxs = document.querySelectorAll('.imgs1');
let ps = document.querySelectorAll('.p1');

boxs.forEach((box, index) => {
    box.addEventListener("mousemove", function() {
        ps[index].style.marginTop = "30px";
    });

    box.addEventListener("mouseleave", function() {
        ps[index].style.marginTop = "40px";
    });
});
