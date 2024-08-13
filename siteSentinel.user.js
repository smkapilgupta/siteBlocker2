// ==UserScript==
// @name         siteSentinel
// @namespace    https://github.com/smkapilgupta
// @version      1.0.0
// @description  Script to monitor a wesite
// @author       https://github.com/smkapilgupta
// @match        *://*/*
// @grant        window.onurlchange
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at       document-idle
// @require      http://code.jquery.com/jquery-2.2.4.js
// @updateURL    https://github.com/smkapilgupta/siteBlocker2/raw/main/siteSentinel.user.js?v=1
// @downloadURL  https://github.com/smkapilgupta/siteBlocker2/raw/main/siteSentinel.user.js?v=1
// ==/UserScript==

const stocksSite="https://www.marketwatch.com/investing/stock/amzn"
const priceRegex="(?<=Amazon\.com Inc[^0-9]*U\.S\.: Nasdaq[^0-9]*price[^0-9]*)[0-9]+(\.[0-9]*)?"
const amazonStockPriceVar="AMZN_STOCK_PRICE"
const stockPriceThreshold=175

function notify(message, type){
  let newDiv=document.createElement("div")
  newDiv.id="notificaiton"
  const onClose=()=>{console.log("got here")}
  newDiv.innerHTML=`
    ${message}
    <button onclick=${onClose}>Close</button>
  `
  document.body.appendChild(newDiv)
}

function getFirstElementWithText(elementString, text){
  let result=undefined
  document.querySelectorAll(elementString).forEach(element=>{
    if(!result&& element.innerText===text)result=element
  })
  return result
}

function monitorSite(url,regex){
  GM_xmlhttpRequest({
  url: url,
  method: "GET",
  headers:{
    "Access-Control-Allow-Origin": "*",
  },
  responseType: "text/html",
  onload:(response)=>{
    console.log(GM_getValue(amazonStockPriceVar))
    const currentStockPrice=Number(JSON.stringify(response).match(new RegExp(regex))[0])
    GM_setValue(amazonStockPriceVar,JSON.stringify(response).match(new RegExp(regex))[0]+" USD")
    if(currentStockPrice<stockPriceThreshold)
      console.log("Price dropped below threshold")
},
})
}

// notify("hello world","error")
monitorSite(stocksSite,priceRegex)
setInterval(()=>monitorSite(stocksSite,priceRegex),900000)
