// use page title to establish project title & owner
var cpt = (document.title).replace(/^\w+\//,'');
var cpo = (document.title).replace(/\/\w+/,'');

// create list element & link.
////// need more logic to determine where we link user to (scrape page URL from CP or setup a route (search for username + repo name from import process))

var pagehead = document.getElementsByClassName('pagehead-actions')[0];
var cpb = document.createElement('li');
var cpl = document.createElement('a');

// check if a user is logged in & check against project title
if (document.querySelectorAll('a.name')[0].href && (document.querySelectorAll('a.name')[0].href).replace (/https:\/\/github\.com\//,'') == cpo){

  cpl.href="http://challengepost.com";
  cpl.target="_blank";
  cpl.className = "minibutton primary tooltipped-n";
  cpl.title="Import "+cpt+"to your ChallengePost Portfolio";
  cpl.setAttribute('aria-label', "Import "+cpt+"to your ChallengePost Portfolio");
  cpl.rel="facebox nofollow";
  cpl.innerHTML="<!--<img src = 'http://gam.s3.amazonaws.com/cdn/cp.svg' height='32'><span class='cplogo'>~</span>--><span class='octicon octicon-rocket'></span> Add to ChallengePost";
} else {
    // if logged in user doesen't match project owner
    cpl.href="http://challengepost.com"; // link to CP page.
    cpl.target="_blank";
    cpl.className = "minibutton tooltipped-n";
    cpl.title="View "+cpt+" on ChallengePost";
    cpl.setAttribute('aria-label', "View "+cpt+" on ChallengePost");
    cpl.rel="facebox nofollow";
    cpl.innerHTML="<!--<img src = 'http://gam.s3.amazonaws.com/cdn/cp.svg' height='32'><span class='cplogo'>~</span>--><span class='octicon octicon-heart'></span> Like on ChallengePost";
  }

// append elements to DOM
cpb.appendChild(cpl);
pagehead.appendChild(cpb);
