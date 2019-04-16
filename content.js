chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        if(request.message === "clicked_browser_action"){
            var firstLink = document.getElementsByTagName('a')[0].href;
            console.log(firstLink);

            chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstLink});
        }
    }
);