var listOpen = false
var subscriptionsListOpen = false
var sidebarOpen = true

renderVideosList()

function renderVideosList() {
    const videosListElement = $("#videos-list-container")
    videosListElement.empty()
    videos.forEach((item, index) => {
        videosListElement.append(`<div class="col video-container">
                        <div class="video-image-container">
                            <img src="${item.videoImage}"
                                alt="video">
                            <div class="timer-container">
                                <span>${item.duration}</span>
                            </div>
                            <div class="invisble-options-container up-invisible">
                                <div class="image-options-container">
                                    <img src="assets/watch-later-icon.svg">
                                </div>
                                <div class="image-options-container">
                                    <img src="assets/add-to-playlist-icon.svg">
                                </div>
                            </div>
                        </div>
                        <div class="video-data-container">
                            <div class="video-data-header-container">
                                <div class="video-owner-image-container">
                                    <img src="${item.authorImage}"
                                        alt="owner">
                                </div>
                                <div class="video-title-container">
                                    <span>${item.title}</span>
                                </div>
                                <div class="invisble-options-container bottom-invisible">
                                    <div class="data-options-container">
                                        <img src="assets/more-options-icon.svg">
                                    </div>
                                </div>
                            </div>
                            <div class="video-data-secondary-container">
                                <div class="channel-name">
                                    ${item.author}
                                </div>
                                <div class="channel-metadata">
                                    ${item.views} &#x2022 ${item.time}
                                </div>
                            </div>
                        </div>
                    </div>`);
    })
}

function openCloseVideosList() {
    if (listOpen) {
        $("#more-item > img").css("transform", "rotate(180deg)")
        $("#more-item > span").html("Mostrar más")
        $("#collapsable-container").animate({ height: "225px" }, 500); //Height of each list item is 45px
    } else {
        $("#more-item > img").css("transform", "rotate(0deg)")
        $("#more-item > span").html("Mostrar menos")
        const containerHeight = $("#collapsable-container").children().length * 45;
        $("#collapsable-container").animate({ height: containerHeight }, 500);
    }
    listOpen = !listOpen
}

function openCloseSubscriptionsList() {
    if (subscriptionsListOpen) {
        $("#more-item-subscriptions > img").css("transform", "rotate(180deg)")
        const childrenLength = $("#collapsable-container-subscriptions").children().length
        $("#more-item-subscriptions > span").html("Mostrar " + (childrenLength - 7) + " más")
        $("#collapsable-container-subscriptions").animate({ height: "315px" }, 500); //Height of each list item is 45px
    } else {
        $("#more-item-subscriptions > img").css("transform", "rotate(0deg)")
        const childrenLength = $("#collapsable-container-subscriptions").children().length
        const containerHeight = childrenLength * 45;
        $("#more-item-subscriptions > span").html("Mostrar menos")
        $("#collapsable-container-subscriptions").animate({ height: containerHeight }, 500);
    }
    subscriptionsListOpen = !subscriptionsListOpen
}


const childrenLength = $("#collapsable-container-subscriptions").children().length
$("#more-item-subscriptions > span").html("Mostrar " + (childrenLength - 7) + " más")

$("#topics-container").scroll(function () {
    const scrollValue = $("#topics-container").scrollLeft()
    const widthValue = document.getElementById("topics-container").scrollWidth - document.getElementById("topics-container").offsetWidth
    if (scrollValue === 0) {
        $(".wrapper-left").css("display", "none")
        $(".wrapper-right").css("display", "flex")
    } else if (scrollValue === widthValue) {
        $(".wrapper-right").css("display", "none")
        $(".wrapper-left").css("display", "flex")
    } else {
        $(".wrapper-right").css("display", "flex")
        $(".wrapper-left").css("display", "flex")
    }
});


$("#sidebar-button").click(function () {
    if (sidebarOpen) {
        sidebarOpen = false
        $("#sidebar").css("width", "72px")
        $("#sidebar").css("height", "100%")
        $("#content").css("width", "calc(100% - 72px)")
        $("#full-sidebar-content").hide()
    } else {
        sidebarOpen = true
        $("#sidebar").css("width", "225px")
        $("#content").css("width", "calc(100% - 225px)")
        $("#full-sidebar-content").show()
    }
})