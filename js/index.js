var stripe = document.getElementById("stripe");
var marg = 0;

function goRight() {
    marg = marg - 25;
    if (marg >= -75) {
        stripe.style.transform = `translateX( ${marg}% )`;
    }
}

function goLeft() {
    marg = marg + 25;
    if (marg <= 0) {
        stripe.style.transform = `translateX( ${marg}% )`;
    } else {}
}