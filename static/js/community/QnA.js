// 글쓰기 눌렀을 때 툴팁
const writeButton = document.querySelector(
    ".select-tooltip.btn-question.qnaSpB",
);
const tooltipOpenDiv = document.querySelector(".navi-top-area.has-tooltip");

writeButton.addEventListener("click", (e) => {
    tooltipOpenDiv.classList.toggle("tooltip-open");
});

// 자동완성 기능
const inputFocus = document.querySelector(".jkSchInput.keywordSearch.devFocus");
const inputSearch = document.getElementById("AJAX_TS_Search");
const autocomplete = document.querySelector(
    ".keyword-search-area.autocomplete",
);

// input focus 시 부모에 'focus' 클래스 추가
inputSearch.addEventListener("focusin", () => {
    inputFocus.classList.add("focus");
});

// input blur 시 'focus' 클래스 제거
inputSearch.addEventListener("focusout", () => {
    inputFocus.classList.remove("focus");
});

// 입력값에 따라 autocomplete 표시/숨김
inputSearch.addEventListener("input", () => {
    if (inputSearch.value.trim() !== "") {
        autocomplete.style.display = "block";
    } else {
        autocomplete.style.display = "none";
    }
});

// 슬라이드 hover 효과
const slides = document.querySelectorAll(".recommendSwiper .swiper-slide");

slides.forEach((slide) => {
    slide.addEventListener("mouseenter", () => {
        slide.classList.add("hover");
    });

    slide.addEventListener("mouseleave", () => {
        slide.classList.remove("hover");
    });
});

// Swiper 슬라이더 초기화
const recommendSwiper = new Swiper(".recommendSwiper .swiper-container", {
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    speed: 1200,
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// 정렬 버튼 클릭 이벤트 (최신순, 인기순, 좋아요, 댓글순)
const sortButtons = document.querySelectorAll(".sort-list-btn.devBtnOrderType");

sortButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // 모든 버튼에서 on 클래스 제거
        sortButtons.forEach((b) => b.classList.remove("on"));
        // 클릭한 버튼에 on 클래스 추가
        btn.classList.add("on");
    });
});

// 북마크 등록(로그인)
const buttonBookMark = document.querySelector(
    ".devQnaDetailBookmark.btnBookmark.qnaSpB",
);

const bookMarkLayer = document.querySelector(
    ".book-mark-layer.tooltip-layer.qnaSpA",
);

buttonBookMark.addEventListener("click", (e) => {
    if (!buttonBookMark.classList.contains("on")) {
        bookMarkLayer.style.display = "block"; // 먼저 보이게
        bookMarkLayer.style.opacity = "1";
        setTimeout(() => {
            bookMarkLayer.style.opacity = "0";
            setTimeout(() => {
                bookMarkLayer.style.display = "none"; // 사라진 후 숨김
            }, 300); // transition 시간만큼 대기
        }, 975);
    }
    buttonBookMark.classList.toggle("on");
});
// 신고 열리는 버튼
const reportActiveButton = document.querySelector(
    ".icon-more-button.qnaSpB.devQnaListPopupMenuButton",
);
// 신고창 뜨는 신고버튼
const reportButton = document.querySelector(
    ".view-more-layer.devQnaListPopupMenu",
);

// 신고창
const pressReportButton = document.querySelector(".mtuLyWrap.lyQnaReport");
// 신고창 x버튼
const pressReportButtonClose = document.querySelector(
    ".butClose.mtuSpImg.devLyBtnClose",
);

// 신고창 text-area 문구
const reportFormBox = document.querySelector(
    ".qnaFormBx.qnaTxaBx.devTplSchPh span",
);
// 신고창 text-area
const reportTextArea = document.getElementById("lb_reason_8");
// 신고창 신고하기 버튼
const reportSubmitButton = document.querySelector(".btnReport.devBtnReportIns");
// 신고창 첫번째 이유(input radio)
const reportFirstReasonRadio = document.querySelectorAll(
    ".reportBx.radioCommWrap li input",
);

// 신고하기 눌렀을 때 알림띄우기(confirm 사용 시 확인,취소 뜸)
reportSubmitButton.addEventListener("click", (e) => {
    const reportSubmitMessage = confirm(
        "신고된 글은 운영자에게 전달됩니다. 신고하시겠습니까?",
    );
    if (reportSubmitMessage) {
        alert("신고 처리 완료되었습니다.");
        location.href = "../community/QnA.html";
    }
});
// 신고창 text-area 누를 시 문구 삭제
reportTextArea.addEventListener("click", (e) => {
    reportFormBox.style.display = "none";
    input.focus();
});

// 신고창 text-area 바깥 누를시 다시 문구 띄우기
reportTextArea.addEventListener("blur", (e) => {
    reportFormBox.style.display = "block";
});

// 신고 버튼 활성화 및 눌렀을 시 신고창 띄우기
reportActiveButton.addEventListener("click", (e) => {
    reportButton.classList.toggle("active");
    reportButton.addEventListener("click", (e) => {
        pressReportButton.style.display = "block";
    });
    reportFirstReasonRadio.forEach((reportFirstReasonRadio) => {
        if (reportFirstReasonRadio.value === "1") {
            reportFirstReasonRadio.checked = true;
        }
    });
});

// 신고창 닫기
pressReportButtonClose.addEventListener("click", (e) => {
    pressReportButton.style.display = "none";
});

const pressReportCancelButton = document.querySelector(
    ".btnCancel.bg_white.devLyBtnClose",
);
pressReportCancelButton.addEventListener("click", (e) => {
    pressReportButton.style.display = "none";
});
