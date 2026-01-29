// 즉시지원 + 버튼
const plusButton = document.querySelectorAll(
    ".TooltipBox_tooltipBoxTrigger__117pni2",
);

plusButton.forEach((plusButton) => {
    plusButton.addEventListener("click", (e) => {
        const isExpanded = plusButton.getAttribute("aria-expanded") === "true";

        plusButton.setAttribute("aria-expanded", !isExpanded);
        plusButton.setAttribute("data-state", isExpanded ? "closed" : "open");

        // 항상 먼저 기존 chatBox 제거
        const lastChild = document.body.lastElementChild;
        if (lastChild && lastChild.tagName === "DIV") {
            lastChild.remove();
        }

        // 닫기면 여기서 종료
        if (isExpanded) return;

        // 열기
        const chatBox = document.createElement("div");
        chatBox.style = "position: fixed; ...";
        chatBox.innerHTML = `...`;
        document.body.appendChild(chatBox);
        // 이부분 서버에서 받아와서 동적으로 추가. 스타일 innerHTML둘다
        // 직무쪽 스타일
        chatBox.style =
            "position: fixed; left: 0px; top: 0px; transform: translate(1355px, 185px); min-width: max-content; --popper-transform-origin: 50% 0px; z-index: 10; --popper-available-width: 1845px; --popper-available-height: 696px; --popper-anchor-width: 16px; --popper-anchor-height: 22px;";
        // 근무지역쪽 스타일
        // chatBox.style =
        //     "position: fixed; left: 0px; top: 0px; transform: translate(1377px, 335px); min-width: max-content; --popper-transform-origin: 50% 0px; z-index: 10; --popper-available-width: 1845px; --popper-available-height: 546px; --popper-anchor-width: 16px; --popper-anchor-height: 22px;";
        // AD쪽 스타일
        // chatBox.style =
        //     "position: fixed; left: 0px; top: 0px; transform: translate(1008px, 486px); min-width: max-content; --popper-transform-origin: 100% 52px; z-index: 10; --popper-available-width: 1845px; --popper-available-height: 508px; --popper-anchor-width: 32.671875px; --popper-anchor-height: 18px;";

        chatBox.innerHTML =
            // 직무쪽 스타일
            `
            <div
                data-align="center"
                data-side="bottom"
                data-state="open"
                id="jk-_r_0_"
                role="dialog"
                tabindex="-1"
                style="
                    z-index: 10;
                    width: 240px;
                    --popover-content-transform-origin: var(--popper-transform-origin);
                    --popover-content-available-width: var(--popper-available-width);
                    --popover-content-available-height: var(--popper-available-height);
                    --popover-trigger-width: var(--popper-anchor-width);
                    --popover-trigger-height: var(--popper-anchor-height);
                "
            >
                <div
                    class="Flex_display_flex__i0l0hl2 TooltipBox_tooltipBoxContentContainer__117pni0"
                >
                    <button type="button">
                        <div
                            class="Flex_display_flex__i0l0hl2 TooltipBox_tooltipBoxContentCloseIcon__117pni6"
                        >
                            <i
                                class="jds-icon jds-icon--system_close Icon_root__1516qwb0 Icon_color_gray500__1516qwb6 Icon_size_14__1516qwbj"
                            ></i>
                        </div>
                    </button>
                    <div
                        class="Flex_display_flex__i0l0hl2 TooltipBox_tooltipBoxNoTitleContent__117pni4 TooltipBox_tooltipBoxContent__117pni3"
                    >
                        요리사, 조리사, 셰프·주방장, 주방보조, 매장관리자,
                        운영보조·매니저
                    </div>
                </div>
            </div>
        `;
        // 근무지역쪽 html
        // `
        //     <div
        //     data-align="center"
        //     data-side="bottom"
        //     data-state="open"
        //     id="jk-_r_1_"
        //     role="dialog"
        //     tabindex="-1"
        //     style="
        //         z-index: 10;
        //         width: 240px;
        //         --popover-content-transform-origin: var(--popper-transform-origin);
        //         --popover-content-available-width: var(--popper-available-width);
        //         --popover-content-available-height: var(--popper-available-height);
        //         --popover-trigger-width: var(--popper-anchor-width);
        //         --popover-trigger-height: var(--popper-anchor-height);
        //     "
        //     >
        //         <div
        //             class="Flex_display_flex__i0l0hl2 TooltipBox_tooltipBoxContentContainer__117pni0"
        //         >
        //             <button type="button">
        //                 <div
        //                     class="Flex_display_flex__i0l0hl2 TooltipBox_tooltipBoxContentCloseIcon__117pni6"
        //                 >
        //                     <i
        //                         class="jds-icon jds-icon--system_close Icon_root__1516qwb0 Icon_color_gray500__1516qwb6 Icon_size_14__1516qwbj"
        //                     ></i>
        //                 </div>
        //             </button>
        //             <div
        //                 class="Flex_display_flex__i0l0hl2 TooltipBox_tooltipBoxNoTitleContent__117pni4 TooltipBox_tooltipBoxContent__117pni3"
        //             >
        //                 부산 중구, 부산 전지역, 강서구, 남구, 동구, 동래구, 부산진구,
        //                 북구, 사상구, 사하구, 서구, 수영구, 연제구, 영도구, 해운대구
        //             </div>
        //         </div>
        //     </div>
        // `
        // AD쪽 HTML
        // `
        // <div
        // data-align="end"
        // data-side="top"
        // data-state="open"
        // id="jk-_R_iojkltiv5ubr9db_"
        // role="dialog"
        // data-sentry-element="TooltipBox"
        // data-sentry-source-file="index.tsx"
        // tabindex="-1"
        // style="
        //     z-index: 10;
        //     --popover-content-transform-origin: var(--popper-transform-origin);
        //     --popover-content-available-width: var(--popper-available-width);
        //     --popover-content-available-height: var(--popper-available-height);
        //     --popover-trigger-width: var(--popper-anchor-width);
        //     --popover-trigger-height: var(--popper-anchor-height);
        // "
        // >
        //     <div
        //         class="Flex_display_flex__i0l0hl2 TooltipBox_tooltipBoxContentContainer__117pni0"
        //     >
        //         <button type="button">
        //             <div
        //                 class="Flex_display_flex__i0l0hl2 TooltipBox_tooltipBoxContentCloseIcon__117pni6"
        //             >
        //                 <i
        //                     class="jds-icon jds-icon--system_close Icon_root__1516qwb0 Icon_color_gray500__1516qwb6 Icon_size_14__1516qwbj"
        //                 ></i>
        //             </div>
        //         </button>
        //         <div
        //             class="Flex_display_flex__i0l0hl2 TooltipBox_tooltipBoxNoTitleContent__117pni4 TooltipBox_tooltipBoxContent__117pni3"
        //         >
        //             성과형 상품을 구매한 공고로 우선 노출됩니다.
        //         </div>
        //     </div>
        // </div>
        // `

        document.body.appendChild(chatBox);
        const chatDeleteButton = document.querySelector(
            ".Flex_display_flex__i0l0hl2.TooltipBox_tooltipBoxContentCloseIcon__117pni6",
        );

        chatDeleteButton.addEventListener("click", (e) => {
            chatBox.remove();

            plusButton.setAttribute("aria-expanded", "false");
            plusButton.setAttribute("data-state", "closed");
        });
    });
});

// 태크 버튼
const arrowButton = document.querySelector(".sfb4yq3");

arrowButton.addEventListener("click", () => {
    const icon = arrowButton.querySelector("i");
    const tagContainer = arrowButton
        .closest(".sfb4yq0")
        .querySelector(".sfb4yq1");
    const isExpanded = icon.classList.contains("jds-icon--system_arrow_up");

    // 아이콘 토글
    icon.classList.toggle("jds-icon--system_arrow_up");
    icon.classList.toggle("jds-icon--system_arrow_down");

    // 그라데이션 div 찾기/생성/제거
    let gradientDiv = arrowButton.closest(".sfb4yq0").querySelector(".sfb4yq2");

    if (isExpanded) {
        // 접기
        tagContainer.style =
            "max-height: 42px; flex-wrap: nowrap; padding-right: 42px;";

        // gradientDiv가 없으면 생성
        if (!gradientDiv) {
            gradientDiv = document.createElement("div");
            gradientDiv.className = "sfb4yq2";
            tagContainer.after(gradientDiv);
        }
    } else {
        // 펼치기
        tagContainer.style =
            "max-height: 100vh; flex-wrap: wrap; padding-right: 42px;";

        // gradientDiv 제거
        if (gradientDiv) {
            gradientDiv.remove();
        }
    }
});

// 채험정보 화살표
const experienceInfo = document.querySelector(".Icon_size_14__1516qwbj");
const experienceInfoPlus = document.querySelector(
    ".styles_overflow_hidden__dk46ts9s.styles_mt_space8__dk46ts1n",
);
const grayBox = document.querySelector(
    ".Box_bgColor_white__1wwr54u0.Box_borderColor_gray100__1wwr54ua.Box_borderSize_1__1wwr54ud.styles_py_space16__dk46ts9.styles_px_space20__dk46ts2k.styles_radius_radius8__dk46ts9g",
);

experienceInfo.addEventListener("click", (e) => {
    experienceInfo.classList.toggle("jds-icon--system_arrow_down");
    experienceInfo.classList.toggle("jds-icon--system_arrow_up");
    if (experienceInfo.classList.contains("jds-icon--system_arrow_up")) {
        experienceInfoPlus.style =
            "opacity: 1; visibility: visible; flex-wrap: wrap;";
        grayBox.style =
            "height: auto; width: 100%; background-color: var(--jds-color-bluegray-bluegray100);";
    } else {
        experienceInfoPlus.style =
            "opacity: 0; visibility: hidden; flex-wrap: nowrap;";
        grayBox.style =
            "height: 60px; width: 100%; background-color: var(--jds-color-bluegray-bluegray100);";
    }
});

// 공유하기
const share = document.querySelector(
    "div.Flex_display_flex__i0l0hl2 div div div button",
);
const div = document.createElement("div");
div.style =
    "position: fixed; left: 0px; top: 0px; transform: translate(1524px, 78px); min-width: max-content; --popper-transform-origin: 44.5px -8px; z-index: 10; --popper-available-width: 1905px; --popper-available-height: 833px; --popper-anchor-width: 48px; --popper-anchor-height: 48px;";

share.addEventListener("mouseenter", (e) => {
    share.dataset.state = "delayed-open";

    div.className = "share-tooltip";

    div.innerHTML = `
        <div data-popper-content-wrapper="" style="position: fixed; left: 0px; top: 0px; transform: translate(1524px, 78px); min-width: max-content; --popper-transform-origin: 44.5px -8px; z-index: 10; --popper-available-width: 1905px; --popper-available-height: 833px; --popper-anchor-width: 48px; --popper-anchor-height: 48px;">
            <div
                data-align="center"
                data-side="bottom"
                data-state="delayed-open"
                data-sentry-element="TooltipJds.Content"
                data-sentry-source-file="index.tsx"
                style="
                    z-index: 10;
                    --tooltip-content-transform-origin: var(
                        --popper-transform-origin
                    );
                    --tooltip-content-available-width: var(
                        --popper-available-width
                    );
                    --tooltip-content-available-height: var(
                        --popper-available-height
                    );
                    --tooltip-trigger-width: var(--popper-anchor-width);
                    --tooltip-trigger-height: var(--popper-anchor-height);
                "
            >
                <div
                    class="Box_bgColor_white__1wwr54u0 Box_borderColor_default__1wwr54u5 Box_borderSize_1__1wwr54ud styles_m_space0__dk46ts5u styles_pl_space16__dk46tsd styles_pb_space8__dk46ts1w styles_pr_space16__dk46tsb styles_pt_space8__dk46ts1u styles_radius_radius4__dk46ts9h g1vplf0"
                    data-sentry-element="Box"
                    data-sentry-source-file="index.tsx"
                >
                    <span
                        data-accent-color="white"
                        class="Typography_variant_size16__344nw26 Typography_weight_regular__344nw2e Typography_color_white__344nw2q"
                        >공유하기</span
                    >
                </div>
                <span
                    style="
                        position: fixed;
                        transform: rotate(180deg);
                        left: 38.5px;
                        top: 1px;
                        transform-origin: center 0px;
                    "
                    ><svg
                        data-sentry-element="TooltipJds.Arrow"
                        data-sentry-source-file="index.tsx"
                        height="8"
                        preserveAspectRatio="none"
                        viewBox="0 0 30 10"
                        width="12"
                        style="display: block"
                    >
                        <polygon points="0,0 30,0 15,10"></polygon></svg></span
                ><span
                    id="jk-_R_2sbkltiv5ubr9db_"
                    role="tooltip"
                    style="
                        position: absolute;
                        border: 0px;
                        width: 1px;
                        height: 1px;
                        padding: 0px;
                        margin: -1px;
                        overflow: hidden;
                        clip: rect(0px, 0px, 0px, 0px);
                        white-space: nowrap;
                        overflow-wrap: normal;
                    "
                    ><div
                        class="Box_bgColor_white__1wwr54u0 Box_borderColor_default__1wwr54u5 Box_borderSize_1__1wwr54ud styles_m_space0__dk46ts5u styles_pl_space16__dk46tsd styles_pb_space8__dk46ts1w styles_pr_space16__dk46tsb styles_pt_space8__dk46ts1u styles_radius_radius4__dk46ts9h g1vplf0"
                        data-sentry-element="Box"
                        data-sentry-source-file="index.tsx"
                    >
                        <span
                            data-accent-color="white"
                            class="Typography_variant_size16__344nw26 Typography_weight_regular__344nw2e Typography_color_white__344nw2q"
                            >공유하기</span
                        >
                    </div></span
                >
            </div>
        </div>
    `;

    document.body.appendChild(div);
});

share.addEventListener("mouseleave", (e) => {
    share.dataset.state = "closed";
    const tooltip = document.querySelector(".share-tooltip");
    if (tooltip) {
        tooltip.remove();
    }
});

const sharePopup = document.querySelector(".sharePopup");
share.addEventListener("click", (e) => {
    sharePopup.style.display =
        sharePopup.style.display === "none" ? "block" : "none";
});

// 스크롤 탑
const guideLineButton = document.getElementById(
    "jk-_R_4jkltiv5ubr9db_-trigger-details",
);
const applyQualificationButton = document.getElementById(
    "jk-_R_4jkltiv5ubr9db_-trigger-application",
);
const welfareButton = document.getElementById(
    "jk-_R_4jkltiv5ubr9db_-trigger-company",
);
const recommendedButton = document.getElementById(
    "jk-_R_4jkltiv5ubr9db_-trigger-recommended",
);

const guideLine = document.getElementById("parent-frame");
const applyQualification = document.querySelector(".applyQualification");
const welfare = document.querySelector(".welfare");
const recommended = document.querySelector(".recommended");

const buttons = [
    guideLineButton,
    applyQualificationButton,
    welfareButton,
    recommendedButton,
];

const spans = document.querySelectorAll(
    ".Tabs_triggerBase__1cw1bss7.Tabs_trigger_PCtab__1cw1bssd span",
);

// 버튼 클릭 이벤트
buttons.forEach((button, idx) => {
    button.addEventListener("click", (e) => {
        buttons.forEach((btn) => {
            btn.dataset.state = "inactive";
        });
        button.dataset.state = "active";

        updateActiveSpan(idx);

        // 클릭할 때마다 새로 계산!
        const tops = [
            guideLine.offsetTop,
            applyQualification.offsetTop,
            welfare.offsetTop,
            recommended.offsetTop,
        ];
        window.scrollTo({
            top: tops[idx] - 120,
            behavior: "smooth",
        });
    });
});
// span 활성화 함수
function updateActiveSpan(idx) {
    spans.forEach((span) => {
        span.classList.remove(
            "Typography_weight_medium__344nw2d",
            "Typography_color_gray900__344nw2l",
        );
        span.classList.add(
            "Typography_weight_regular__344nw2e",
            "Typography_color_gray500__344nw2o",
        );
    });

    spans[idx].classList.remove(
        "Typography_weight_regular__344nw2e",
        "Typography_color_gray500__344nw2o",
    );
    spans[idx].classList.add(
        "Typography_weight_medium__344nw2d",
        "Typography_color_gray900__344nw2l",
    );

    // 버튼 상태도 같이 변경
    buttons.forEach((btn) => (btn.dataset.state = "inactive"));
    buttons[idx].dataset.state = "active";
}

// 스크롤 이벤트
window.addEventListener("scroll", (e) => {
    const scrollY = window.scrollY;

    // 매번 새로 계산!
    const guideLinePos = guideLine.offsetTop;
    const applyQualificationPos = applyQualification.offsetTop;
    const welfarePos = welfare.offsetTop;
    const recommendedPos = recommended.offsetTop;

    if (scrollY >= recommendedPos - 120) {
        updateActiveSpan(3);
    } else if (scrollY >= welfarePos - 120) {
        updateActiveSpan(2);
    } else if (scrollY >= applyQualificationPos - 120) {
        updateActiveSpan(1);
    } else {
        updateActiveSpan(0);
    }
});
// 스크롤버튼
window.addEventListener("scroll", (e) => {
    const header = document.querySelector(
        ".styles_position_sticky__dk46tsa8.styles_mb_space20__dk46ts2h.styles_mt_space48__dk46ts3z._1ycqh5m0 div",
    );
    const companyNameSmall = document.querySelector(
        "div[data-sentry-component='TitleContent'] h1",
    );

    if (window.scrollY > 100) {
        // 스크롤 후 - 간소화된 헤더
        header.classList.remove("Flex_align_flex-start__i0l0hl7");
        header.classList.add("Flex_align_center__i0l0hl8", "_1ycqh5m4");
        companyNameSmall.classList.remove(
            "Typography_variant_size28__344nw20",
            "_1ycqh5m7",
        );
        companyNameSmall.classList.add(
            "Typography_variant_size24__344nw23",
            "_1ycqh5m6",
        );

        // 회사명 숨기기
        const companyName = header.querySelector(".styles_mb_space8__dk46ts1p");
        if (companyName) companyName.style.display = "none";
    } else {
        // 스크롤 전 - 원래 헤더
        header.classList.add("Flex_align_flex-start__i0l0hl7");
        header.classList.remove("Flex_align_center__i0l0hl8", "_1ycqh5m4");
        companyNameSmall.classList.add(
            "Typography_variant_size28__344nw20",
            "_1ycqh5m7",
        );
        companyNameSmall.classList.remove(
            "Typography_variant_size24__344nw23",
            "_1ycqh5m6",
        );

        // 회사명 보이기
        const companyName = header.querySelector(
            '[data-sentry-component="CompanyName"]',
        );
        if (companyName) companyName.style.display = "block";
    }
});

const supportButton = document.querySelector(
    ".Button_root__1c0cohd0.Button_variantColor_contained-primary__1c0cohd8.Button_size_52__1c0cohd5._7dgcmg2",
);

supportButton.addEventListener("click", (e) => {
    const form = document.createElement("form");
    form.id = "devForm";
    form.setAttribute("method", "post");
    // 서버 위치 적어야함.
    form.setAttribute("action", "");
    form.setAttribute("name", "devForm");

    form.innerHTML = `
        <input type="hidden" name="Oem_No" id="Oem_No" value="">
    <input type="hidden" name="Gno" id="Gno" value="">
    <input type="hidden" name="GI_No" value="">
    <input type="hidden" name="M_ID" id="M_ID" value="">
    <input type="hidden" name="Pass_Match" value="">
    <input type="hidden" name="sc" id="sc">
    <input type="hidden" name="sn" id="sn" value="">
    <input type="hidden" name="segmentType" id="segmentType" value="">
    <input type="hidden" name="Pass_Gubun" id="Pass_Gubun" value="">
    <input type="hidden" name="passType" id="passType" value="">
    <input type="hidden" name="Portfolio_idx" id="Portfolio_idx">
    <input type="hidden" name="File_idx" id="File_idx">
    <input type="hidden" name="FileEng_idx" id="FileEng_idx">
    <input type="hidden" name="api_no" id="api_no">

    <input type="hidden" name="GG_Apt_Stat" id="GG_Apt_Stat">
    <input type="hidden" name="Jat_Rsno" id="Jat_Rsno" value="0">

    <input type="hidden" name="PartText" id="PartText">
    <input type="hidden" name="Answer_Text" id="Answer_Text">
    <input type="hidden" name="R_No" id="R_No" value="">
    <input type="hidden" name="Job_Field_Reg_Stat" id="Job_Field_Reg_Stat" value="">
    <!--첨부파일 정보//-->
    <input type="hidden" name="Add_File" id="Add_File">

    <input type="hidden" name="IsLimitCompany" id="IsLimitCompany" value="0">
    <input type="hidden" name="TalenPoolAutoRegStat" value="0">
    <input type="hidden" name="M_Email" id="M_Email" value="">
    <input type="hidden" name="M_Hand_Phone" id="M_Hand_Phone" value="">
    <input type="hidden" name="CoApp_R_Lngg_Code" id="CoApp_R_Lngg_Code" value="0">
    <input type="hidden" name="isForeign" id="isForeign" value="0">
    <input type="hidden" name="PreFileIdx" id="PreFileIdx">
    <input type="hidden" name="LogPath" id="LogPath" value="">
    <input type="hidden" name="PFL_STAT" id="PFL_STAT" value="">
    <input type="hidden" name="isProfileOnpass" id="isProfileOnpass" value="0">
    
    <input type="hidden" id="Prtfl_Attach_Wish_Stat" value="0">
    <input type="hidden" id="Itv_Cntnt_Stat" value="0">
    <input type="hidden" id="GI_Type_Code">


    <div class="apply-page">
        <div class="page-content">
            <div class="apply-job-info">
                <h2 class="job-title">
                    [부산 중구] 조리사(셰프) 정규직/파트타이머 채용
                </h2>
                            <div class="job-meta">
                                <span class="job-badge">지원분야</span>
                                <p class="job-description">
                                    조리사
                                </p>
                                <input name="PartIDX" type="hidden" value="39481696">
                            </div>
            </div>
            <div class="apply-form">
                
                    
                                <div class="form-section form-section--attachment dev-attachment-section" style="display: block;">
                    <div class="section-header">
                        <p class="section-title">첨부파일</p>
                        <button type="button" class="btn-change dev-btn-change" style="display: inline-flex;">
                            변경 <span class="badge-count">3</span>
                        </button>
                    </div>



                

                    <div class="selected-option-list dev-selected-option-list" style="display:none;"></div>

                    <div class="attachment-list option-list dev-attachment-list" style="display:none;"><input type="checkbox" id="File_idx0" name="chk_File" value="12500227" class="option-input option-checkbox"><label for="File_idx0" class="option-label"><div class="option-body"><p class="option-title">loading_green.gif</p><p class="option-meta"><span>추천서</span><span>2026.01.29</span></p></div></label><input type="checkbox" id="File_idx1" name="chk_File" value="12500226" class="option-input option-checkbox"><label for="File_idx1" class="option-label"><div class="option-body"><p class="option-title">loading_green.gif</p><p class="option-meta"><span>기타</span><span>2026.01.29</span></p></div></label><input type="checkbox" id="File_idx2" name="chk_File" value="12500224" class="option-input option-checkbox"><label for="File_idx2" class="option-label"><div class="option-body"><p class="option-title">loading_green.gif</p><p class="option-meta"><span>기타</span><span>2026.01.29</span></p></div></label></div>

                    <button type="button" class="btn-submit-change dev-btn-submit-change" style="display:none;">
                        변경하기
                    </button>

                    <div class="button-grid">
                        <button type="button" class="button-item dev-btn-file-attach">
                            파일첨부
                        </button>
                                                                    </div>
                    <div id="hidButtons" style="display:none"></div>
                </div>


                
                <div class="form-section form-section--contact dev-contact-info-view" style="">
                    <div class="section-header">
                        <p class="section-title">연락처</p>
                        <button type="button" class="btn-text">
                            수정
                        </button>
                    </div>
                    <div class="contact-info">
                        <ul class="contact-list">
                            <li class="contact-item">
                                <span class="contact-label">휴대폰</span>
                                <p class="contact-value">010-9397-3256</p>
                            </li>
                            <li class="contact-item">
                                <span class="contact-label">이메일</span>
                                <p class="contact-value">dlwnstn0315@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="form-section form-section--contact dev-contact-info-edit" style="display: none;">
                    <div class="section-header">
                        <p class="section-title">연락처</p>
                        <button type="button" class="btn-text done">
                            완료
                        </button>
                    </div>
                    <div class="contact-input-list">
                        <div class="input-field">
                            <div class="input-wrapper">
                                <input type="tel" id="phone" class="jkPhoneInp filled" placeholder="" value="010-9397-3256">
                                <label for="phone" class="input-label" style="display: none;">휴대폰</label>
                                <button type="button" class="input-clear"></button>
                            </div>
                            <div class="field-helper">
                                <div class="error-message" style="display:none;">
                                    휴대폰 번호를 다시 확인해 주세요.
                                </div>
                                <div class="checkbox-field">
                                    <input type="checkbox" id="chkForeign" name="chkForeign">
                                    <label for="chkForeign">해외거주</label>
                                </div>
                            </div>
                        </div>
                        <div class="input-field">
                            <div class="input-wrapper">
                                <input type="email" id="email" class="jkAppEmail filled" placeholder="" value="dlwnstn0315@gmail.com">
                                <label for="email" class="input-label" style="display: none;">이메일</label>
                                <button type="button" class="input-clear"></button>
                            </div>
                            <div class="field-helper">
                                <div class="error-message" style="display:none;">
                                    이메일 정보가 정확하지 않습니다.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div class="form-section form-section--notice">
                    <div class="notice-box">
                        <ul class="notice-list">
                            <li class="notice-item">
                                개인정보 파일은 사전동의 없이 삭제될 수 있습니다.
                            </li>
                            <li class="notice-item">
                                제출서류는 채용 마감 후 90일까지 지원기업에게 제공됩니다.
                            </li>
                            <li class="notice-item">
                                제출에 동의할 경우에만 [지원하기] 버튼을 클릭해 주세요.
                            </li>
                            <li class="notice-item">
                                동의하지 않을 경우 입사지원이 불가능합니다.
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        <div class="page-footer">
            <button type="button" class="footer-btn dev-btn-apply">
                지원하기
            </button>
        </div>

        <!-- 양식 다운로드 layer popup -->
        <div class="layer-popup form-download-popup dev-form-download-popup">
            <div class="layer-popup-dim"></div>
            <div class="layer-popup-container">
                <div class="header">
                    <h2 class="title">양식 다운로드</h2>
                    <button type="button" class="close-btn" aria-label="닫기">×</button>
                </div>
                <div class="content" id="lyResumeFormDown">

                <ul class="download-list">
                    </ul>
                </div>
                <div class="layer-popup-footer">
                    <div class="buttons-wrapper">
                        <button type="button" class="sheet-btn gray btn-cancel">취소</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 파일첨부 layer popup -->
        <div class="layer-popup file-attach-sheet dev-file-attach-popup">
            <div class="layer-popup-dim"></div>
            <div class="layer-popup-container">
                <div class="header">
                    <h2 class="title">파일첨부</h2>
                    <button type="button" class="close-btn" aria-label="닫기">×</button>
                </div>
                <div class="content">
                    <div class="attach-type-toggle">
                        <button type="button" class="toggle-btn toggle-btn--file dev-toggle-btn-file active" data-type="file">
                            <span class="toggle-text">파일추가</span>
                        </button>
                        <button type="button" class="toggle-btn toggle-btn--url dev-toggle-btn-url" data-type="url">
                            <span class="toggle-text">URL</span>
                        </button>
                    </div>
                    <div class="attach-input-wrapper">
                        <div class="attach-input-file dev-input-file-wrapper" id="input-file-wrapper" style="display: block;">
                            <input type="file" id="file-input" class="file-input dev-file-input" style="display: none;">
                            <button type="button" class="file-select-btn dev-file-select-btn" id="file-select-btn">파일을 선택해 주세요.</button>
                        </div>
                        <div class="input-field dev-input-url-wrapper" id="input-url-wrapper" style="display: none;">
                            <div class="input-wrapper">
                                <input type="text" id="url-input" class="dev-url-input filled" placeholder="" value="https://">
                                <label for="url-input" class="input-label" style="display: none;">URL</label>
                                <button type="button" class="input-clear"></button>
                            </div>
                        </div>
                    </div>
                    <div class="attach-category">
                        <div class="category-column">
                            <label class="category-option">
                                <input type="radio" name="attach-category" value="portfolio" class="category-radio">
                                <span class="category-label">포트폴리오</span>
                            </label>
                            <label class="category-option">
                                <input type="radio" name="attach-category" value="resume" class="category-radio">
                                <span class="category-label">이력서</span>
                            </label>
                            <label class="category-option">
                                <input type="radio" name="attach-category" value="proposal" class="category-radio">
                                <span class="category-label">기획안</span>
                            </label>
                            <label class="category-option">
                                <input type="radio" name="attach-category" value="certificate" class="category-radio">
                                <span class="category-label">자격증</span>
                            </label>
                        </div>
                        <div class="category-column">
                            <label class="category-option">
                                <input type="radio" name="attach-category" value="proof" class="category-radio">
                                <span class="category-label">증명서</span>
                            </label>
                            <label class="category-option">
                                <input type="radio" name="attach-category" value="recommendation" class="category-radio">
                                <span class="category-label">추천서</span>
                            </label>
                            <label class="category-option">
                                <input type="radio" name="attach-category" value="other" class="category-radio">
                                <span class="category-label">기타</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="layer-popup-footer">
                    <div class="buttons-wrapper">
                        <button type="button" class="sheet-btn gray btn-cancel">취소</button>
                        <button type="button" class="sheet-btn blue btn-confirm" data-custom-handler="true">확인</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="lyOnPassWrap" id="lyJat" style="display: none;"></div>
        <div class="lyOnPassWrap" id="lyMyFile" style="display: none;"></div>
        <div class="lyOnPassWrap" id="lyFileSel" style="display: none;"></div>
        <div class="lyOnPassWrap" id="lyEditInfo" style="display: none;"></div>
    </div>
    `;
    document.appendChild(form);
});
