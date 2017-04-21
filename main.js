// ==UserScript==
// @name         Class 83188
// @namespace    Sungjkim
// @version      0.1
// @description  macro to get the class you need
// @author       Sungjae Kim
// @match        https://www.gosolar.gsu.edu/bprod/bwckcoms.P_Regs
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    //'use strict';

    window.setTimeout(function(){
        $('#crn_id1').val(83188);
        $("input[value = 'Submit Changes']").click();
    }, 1 * 60 * 1000);

})();
