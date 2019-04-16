chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        if(request.message === "clicked_browser_action"){
           // var firstLink = document.getElementsByTagName('a')[0].href;
            //console.log(firstLink);
            const re = new RegExp('Game of Thrones')
            
            var divs = document.getElementsByTagName("div");
            for(var i = 0; i < divs.length; i++){
                if(divs[i].innerHTML.match(re)){
                    console.log(divs[i]);
                }
            }

            

            //chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstLink});
        }
    }
);