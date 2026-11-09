// ==UserScript==
// @name         Rainbow
// @namespace    https://github.com/smkapilgupta/siteBlocker2
// @version      1.1.54
// @description  Script to block any site with nsfw regular expression. Redirects to a different website instead.
// @author       Kapil Gupta <smkapilgupta@gmail.com>
// @match        *://*/*
// @run-at       document-start
// @grant        window.onurlchange
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @updateURL    https://raw.githubusercontent.com/smkapilgupta/siteBlocker2/main/nsfwBlocker.user.js?v=1
// @downloadURL  https://raw.githubusercontent.com/smkapilgupta/siteBlocker2/main/nsfwBlocker.user.js?v=1
// @icon         data:image/png;base64,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
// ==/UserScript==

'use strict';
const blockedWebsitesRegex="cherrygif|hardgif|redgif|santabanta|xgroovy|desi00|fullxcinema|grown-ups\.net|itch\.io|letagparfait|trahkino|actionviewphotography|phverified|zeenite|forced\.love|epicgfs|imlive|vixen|playboy|cyberdrop|palimas|(po)vr|vr(smash|phub|sumo)|lovetorrent|rarbg|biguz|coub|(arousal|pinkfine|blasphemous|met).?art|embedy|jpegworld|(rekt|noodle)mag|dubnitskiy|hellokisses|vitacouture|editorialsfashion|borisovdmitry|wallhere|500px|stunn(eroftheday|ingphotos)|my.crazy.monkey|alrincon|anon-v|hanime|unblock|(h|deviant|brutal|sin)clip|clip.?(trend|hunter|4sale)|ukdevilz|influencersgonewild|cfake|yande.re|tumblrgallery|pholder|42?0?chan|scrolller|findhername|(online|russian)star|misspremium|only.?fan|(game.?of|4k|digital|eternal)desire|foxhq|(top|tez).?model[sz]|chaturbate|chatzoudis|(strap|les)lezz?|sfmcompile|bluedolz|wet(mummy|sin)|shooshtime|zz.?(cartoon|ier|ers|ia)|vimeo|hlebo|er+o(-torrent|game|real|ero|fus|cu|gen|pic|ti[ckq]|wall|profile|me|sberry|xia|oups|-cos)|liebelib|hot.?(cartoon|ocean|mom|india|scope|mov[is]|xv|[^/=?]*pic)|holedk|vid(mo|eosection|zx)|(free|desi|lez|nu|many|cam|peek|play|czech|nitro)vid|(im|hd)zog|they.?are.?huge|(modelsfree|myfree|bondage|filter|slapper|pirate)cam|cam(soda|4|ster|bro|great|beaut|hub|.?finder)|x.?(hand|movi|forum|anim|nimo|hamster|art|clip|cafe|tape|ozilla|vi?d|o\.me|freehd|ecce|max|sharings)|watch.?my|miceay|(wet|juicy|nws).?gif|gifsauce|auntmia|lamalinks|red.?pic|pic(sx|splease|[^/=?]*hot|uki|click|toa|hunter)|h[dq]hole|shameless|motherless|coedcherry|(mag|oh)free|free(one|1s)|tumbex|tiava|(model|fake|laid|premium).?hub|biqle|anybunny|damplip|thumbzilla|planet.?suzy|ancensored|reactor|stasyq|vivthomas|vk|(3.?|keez|dans|panda|tasty)mov|ozeex|darknun"
const blockedTermsRegex="soska|soski|popki|wang|nipslip|(hidemy|keek)ass|ass(too|4all|4u|hole|photo|tr|factory|-time)|seduc(tion|tive|e|ing)|handjob|bondage|(hard|gam|por)core(?![a-zA-Z])|bbw|vagina|pimp(?!le)|squirt|(?<!con|re)futa|trann[iy]|shemale|nymph|flooz|horny|bosom|exotic|naughty|hustler|creampie|skeet|blop|dyke|strip.?teas|booty|cunt|sankaku|jav(?!elin|a)|kink|cosplay|swinger|nsfw|tush|bdsm|incest|(?<!net)flix(?!flare)|luxure|lecher|mii|boner|lingerie|(?<!le|fun)gals|hott[yi]|bang(?!alore|kok|le)|slut|spic[ey](?!trio)|luscious|atheis|lewd|(?<!si)teen|kompoz|fetish|femdom|beeg|(?<!la)belle|wank|masterb|jerk|kitty|whore|fanta.[iy]|voyeur|tit[st]|kaam[au]|nubile|busty|anal(din|dyke)|penis|dick|puss|scandal|celeb|booru|perv|(?<!you)tube|comi[xc]|milf|mature|boob|(?<![0-9]|news|www|cnbctv)(18|69|34)[^0-9]|orgy|[pq]o?r[nzm]|adult|babe|sex|hentai|x.?x.?x|(?<!il)lust(?!rat)|nud[eo]|naked|gay|le[sz]b[eio]|fuc?[kqx]|wap|faa?p|j[io]zz|dirt|(?<!cir|do|ac|suc)cum(?!ulat|ber)|smut|thot|pleasure|spank|g[iy]?rl|(?<!mu)mms|upskirt|yiff|kemono|chicks|bonk|badoink|leak|rap(?=e|ing)|cock|ecchi|orgasm|fux"
const blockRegex="://[^/=?]*("+blockedWebsitesRegex+"|"+blockedTermsRegex+")"
const redirectTo=["https://www.howtogeek.com", "https://techcrunch.com/","https://www.makeuseof.com","https://gameranx.com","https://swarajyamag.com/", "https://store.steampowered.com", "https://venturebeat.com", "https://www.firstpost.com","https://www.engadget.com"]

function obliterateNode(node){
  if(!node)
    return
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
  node.remove();
}

function udpateRecords(records){
  records.forEach(record => {
    record.addedNodes.forEach(node => {
      obliterateNode(document.body)
      obliterateNode(document.head)
      if (node.nodeType === Node.ELEMENT_NODE) {
        obliterateNode(node.parent?node.parent:node)
        if(node.tagName === 'SCRIPT')
          node.type = 'javascript/blocked'
      }
    });
  });
}

const mutationObserver=new MutationObserver(udpateRecords)

function generateRandomNumber(rangeStart, rangeEnd){
    let lastRN=GM_getValue("lastRN")
    lastRN=lastRN?lastRN:0
    let uuid=String(crypto.randomUUID())
    var sumOfChars=0;
    for(let i=0;i<uuid.length;i++){
        sumOfChars+=Number(uuid.charCodeAt(i))
    }
    let newRN= rangeStart+(lastRN+sumOfChars)%(rangeEnd-rangeStart+1)
    if(newRN === lastRN)
        newRN=rangeStart+(lastRN+sumOfChars+1)%(rangeEnd-rangeStart+1)
    GM_setValue("lastRN",newRN)
    return newRN
}

function checkNBlock() {
    'use strict';

    const url=window.location.href

    if(url.match(new RegExp(blockRegex))){
        console.log("URL matched with block regex")
        mutationObserver.observe(document, {childList: true, subtree: true});
        window.location.replace(redirectTo[generateRandomNumber(0,redirectTo.length-1)])

    }
    else{
    }
};

checkNBlock()
