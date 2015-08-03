﻿$(document).ready(function () {
    $("a").click(function (event) {
        alert("tag: " + (event.target.tagName).toLowerCase());
        alert("X coordinates: " + event.pageX + "\n" + "Y coordinates: " + event.pageY);
    });
});

(function ($) {
    $.fn.logPlugin = function () {
        //inisialize logArray if not inisialized before
        if(localStorage.getItem("logArr") === null){
           var logArray = {
                urlStorage: "",
                date: "",
                tag: "",
                xCor: "",
                yCor: ""
            }
        };
        //onClickHref function that gets information about link clicked on
        (function onClickHref() {
            $("a").click(function (event) {
                return logArray = {
                    urlStorage : location.href,
                    date : Date(),
                    tag : event.target.tagName,
                    xCor : event.pageX,
                    yCor : event.pageY
                }
                console.log(logArray);
            }())
        })()
        //todo:
        //setItem into localStorage
        //function for button, input including keydown
    
    };
}(jQuery));

$("*").logPlugin();