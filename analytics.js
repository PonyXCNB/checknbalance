/* Check n Balance — pageview counting, off until configured.
   Nothing is sent while PLAUSIBLE_DOMAIN is empty. No cookies, no ID invented here.
   To turn it on, paste the domain you added in Plausible between the quotes,
   for example: var PLAUSIBLE_DOMAIN = "checknbalance.org";
   Full steps: docs/analytics-and-utm.md
   Leave this empty if you use Netlify Web Analytics instead (no script needed). */
(function () {
  var PLAUSIBLE_DOMAIN = "";
  var PLAUSIBLE_SRC = "https://plausible.io/js/script.js";
  if (!PLAUSIBLE_DOMAIN) return;
  var s = document.createElement("script");
  s.defer = true;
  s.setAttribute("data-domain", PLAUSIBLE_DOMAIN);
  s.src = PLAUSIBLE_SRC;
  document.head.appendChild(s);
})();
