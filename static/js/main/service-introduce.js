// 자세히 알고싶어요 화살표
const listShow = document.querySelectorAll(".list_show");
const readmeOpen = document.querySelectorAll(".readme_open");
const contentsBox = document.querySelectorAll(".contents_box");

listShow.forEach((show, idx) => {
    show.addEventListener("click", (e) => {});
    readmeOpen[idx].dataset.status =
        readmeOpen[idx].dataset.status === "close" ? "open" : "close";
    contentsBox[idx].classList.toggle("active");
});

// 원픽공고 스크랩
const scrabStars = document.querySelectorAll(".rIcon.devAddScrap.devRecommend");

scrabStars.forEach((scrabStar) => {
    scrabStar.addEventListener("click", (e) => {
        scrabStar.classList.toggle("str_off");
        scrabStar.classList.toggle("str_on");
    });
});
