// ==UserScript==
// @name         nsfwBlocker
// @namespace    https://github.com/smkapilgupta/siteBlocker2
// @version      1.1.0
// @description  Script to block any site with nsfw regular expression. Redirects to a different website instead.
// @author       Kapil Gupta <smkapilgupta@gmail.com>
// @match        *://*/*
// @run-at       document-start
// @grant        window.onurlchange
// @grant        GM_addStyle
// @require      http://code.jquery.com/jquery-2.2.4.js
// @updateURL    https://raw.githubusercontent.com/smkapilgupta/siteBlocker2/main/nsfwBlocker.user.js?v=1
// @downloadURL  https://raw.githubusercontent.com/smkapilgupta/siteBlocker2/main/nsfwBlocker.user.js?v=1
// ==/UserScript==

'use strict';
const blockedWebsitesRegex="letagparfait|trahkino|actionviewphotography|phverified|zeenite|forced\.love|epicgfs|imlive|vixen|playboy|cyberdrop|palimas|(po)vr|vr(smash|phub|sumo)|lovetorrent|rarbg|biguz|coub|(arousal|pinkfine|blasphemous|met).?art|embedy|jpegworld|(rekt|noodle)mag|dubnitskiy|hellokisses|vitacouture|editorialsfashion|borisovdmitry|wallhere|500px|stunn(eroftheday|ingphotos)|my.crazy.monkey|alrincon|anon-v|hanime|unblock|proxy|(h|deviant|brutal|sin)clip|clip.?(trend|hunter|4sale)|ukdevilz|influencersgonewild|cfake|yande.re|tumblrgallery|pholder|42?0?chan|scrolller|findhername|(online|russian)star|misspremium|only.?fan|(game.?of|4k|digital|eternal)desire|foxhq|(top|tez).?model[sz]|chaturbate|chatzoudis|(strap|les)lezz?|sfmcompile|bluedolz|wet(mummy|sin)|shooshtime|zz.?(cartoon|ier|ers|ia)|vimeo|hlebo|er+o(-torrent|game|real|ero|fus|cu|gen|pic|ti[ckq]|wall|profile|me|sberry|xia|oups|-cos)|liebelib|hot.?(cartoon|ocean|mom|india|scope|mov[is]|xv|[^/=?]*pic)|holedk|vid(mo|eosection|zx)|(free|desi|lez|nu|many|cam|peek|play|czech|nitro)vid|(im|hd)zog|they.?are.?huge|(modelsfree|myfree|bondage|filter|slapper|pirate)cam|cam(soda|4|ster|bro|great|beaut|hub|.?finder)|x.?(hand|movi|forum|anim|nimo|hamster|art|clip|cafe|tape|ozilla|vi?d|o\.me|freehd|ecce|max|sharings)|watch.?my|miceay|(wet|juicy|nws).?gif|gifsauce|auntmia|lamalinks|red.?pic|pic(sx|splease|[^/=?]*hot|uki|click|toa|hunter)|h[dq]hole|shameless|motherless|coedcherry|(mag|oh)free|free(one|1s)|tumbex|tiava|(model|fake|laid|premium).?hub|biqle|anybunny|damplip|thumbzilla|planet.?suzy|ancensored|reactor|stasyq|vivthomas|vk|(3.?|keez|dans|panda|tasty)mov|ozeex|darknun"
const blockedTermsRegex="soska|soski|popki|wang|nipslip|(hidemy|keek)ass|ass(too|4all|4u|hole|photo|tr|factory|-time)|seduc(tion|tive|e|ing)|handjob|bondage|(hard|gam|por)core(?![a-zA-Z])|bbw|vagina|pimp(?!le)|squirt|(?<!con|re)futa|trann[iy]|shemale|nymph|flooz|horny|bosom|exotic|naughty|hustler|creampie|skeet|blop|dyke|strip.?teas|booty|cunt|sankaku|jav(?!elin|a)|kink|cosplay|swinger|nsfw|tush|bdsm|incest|(?<!net)flix(?!flare)|luxure|lecher|mii|boner|lingerie|(?<!le|fun)gals|hott[yi]|bang(?!alore|kok|le)|slut|spic[ey]|luscious|atheis|lewd|(?<!si)teen|kompoz|fetish|femdom|beeg|(?<!la)belle|wank|masterb|jerk|kitty|whore|fanta.[iy]|voyeur|tit[st]|kaam[au]|nubile|busty|anal[^yo]|penis|dick|puss|scandal|celeb|booru|perv|(?<!you)tube|comi[xc]|milf|mature|boob|(?<![0-9]|news|www)(18|69|34)[^0-9]|orgy|[pq]o?r[nzm]|adult|babe|sex|hentai|x.?x.?x|(?<!il)lust(?!rat)|nud[eo]|naked|gay|le[sz]b[eio]|fuc?[kqx]|wap|faa?p|j[io]zz|dirt|(?<!cir|do|ac|suc)cum(?!ulat|ber)|smut|thot|pleasure|spank|g[iy]?rl|(?<!mu)mms|upskirt|yiff|kemono|chicks|bonk|badoink|leak|rap(?=e|ing)|cock|ecchi|orgasm|fux"
const blockRegex="://[^/=?]*("+blockedWebsitesRegex+"|"+blockedTermsRegex+")"
const redirectTo=["https://fmovies.com","https://google.com","https://youtube.com","https://facebook.com", "https://instagram.com", "https://flixflare.to/home"]


function rerender(){
    $("body").css("visibility","hidden");

    $(document).ready(function() {
        var oldBody = $('body').html();
        $('body').html('<div id="NewContent">Content Blocked.</div>');
        $("body").css("visibility","visible");

        GM_addStyle(`#NewContent {
height: 300px;
margin: 50px;
padding: 50px;
font-size:20pt;
text-align:center;
}`);


        $("body a").click(function() {
        $('body').html(oldBody);
    });

});
}

function obliterateNode(node){
  node.innerHTML=""
  node.innerText=""
  Object.keys(node).forEach(key=>{
      node[key] = undefined;
  })
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

function generateRandomNumber(){
    let uuid=String(crypto.randomUUID())
    var sumOfChars=0;
    for(let i=0;i<uuid.length;i++){
        sumOfChars+=Number(uuid.charCodeAt(i))
    }
    return sumOfChars
}

function checkNBlock() {
    'use strict';

    const url=window.location.href

    if(url.match(new RegExp(blockRegex))){
        console.log("URL matched with block regex")
        mutationObserver.observe(document, {childList: true, subtree: true});
        rerender()
        window.location.replace(redirectTo[generateRandomNumber()%redirectTo.length])

    }
    else{
    }
};

checkNBlock()
