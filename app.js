const counts = document.querySelectorAll(".count");

counts.forEach((count) => {
    count.innerText = "0";

    const updateCounter = () => {
        let countTarget = +count.getAttribute("data-count");
        let num = +count.innerText;

        const increment = countTarget / 200;

        if (num < countTarget) {
            count.innerText = `${Math.ceil(num + increment)}`;
            setTimeout(updateCounter, 1);
        }else{
            count.innerText = countTarget;
        }
    };
    updateCounter();
});
