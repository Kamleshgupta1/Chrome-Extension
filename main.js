 let btn = document.getElementById("getTimezone");
 
 
 if(btn !== null){
 btn.addEventListener("click",Timezone);
 }
 
 function Timezone(){
   let time = document.getElementById("showTimezone");
   time.innerHTML = Date();
 }

function getCurrentTabUrl(callback) {  
  var queryInfo = {
    active: true, 
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0]; 
    var url = tab.url;
    callback(url);
  });
}

function renderURL(statusText) {
  document.getElementById('demo').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    renderURL(url); 
  });
});
