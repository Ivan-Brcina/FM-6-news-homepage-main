const burgers = document.getElementsByClassName("burger");
const navigation = document.querySelector(".main-navigation");

console.log(burgers);
console.log(navigation);

for (let i = 0; i < burgers.length; i++) {
    burgers[i].addEventListener("click", (e) => {
        e.preventDefault();
        navigation.classList.toggle("active");
        console.log("clicked")
    })
}
console.log("it's working")
