var myTimer;

$(document).ready
(
    function()
    {
        initialize();

        $(".menuhead").hover
        (
            function()
            {
                $(this).children().slideDown("fast");
            },
            function()
            {
                $(this).children().slideUp("fast");
            }
        );
    }
);

function autoSetPageSize()
{
    var intWidth = 0, intHeight = 0;

    if (window.innerWidth != null)
    {
        intWidth = window.innerWidth;
        intHeight = window.innerHeight;
    }
    else if (document.body.clientWidth != null)
    {
        intWidth = document.body.clientWidth;
        intHeight = document.body.clientHeight;
    }
    else
    {
        intWidth = 800;
        intWidth = 600;
    }

    $("body").width((intWidth - 30) + "px");
    $("body").height((intHeight - 50) + "px");
}

function breakFrames()
{
    if (self.parent.frames.length != 0)
    {
        self.parent.location = document.location;
    }
}

function displaySubPage(strPageName)
{
    $(".page_content").load(strPageName);
}

function displayFooter()
{
    var footers = $(".page_footer");
    var clockHTML = "<h1>" + showDateTime() + "</h1>";
    var emailLinkHTML = "<a href=\"mailto:mboyette@mythicdigitalizations.com\" rel=\"external\">Matthew Boyette</a>";
    var licenseLinkHTML = "<a href=\"./LICENSE.md\" rel=\"external\">MIT License</a>";
    var companyLinkHTML = "<a href=\"https://www.mythicdigitalizations.com\" rel=\"external\">Mythic Digitalizations</a>.";
    var copyrightHTML = "<h1>Copyright&copy; 2014 " + emailLinkHTML + ". The source code for this site is released under the " + licenseLinkHTML + ". Hosted by " + companyLinkHTML + "</h1>";
    var xhtmlHTML = "<a href=\"https://validator.w3.org/check?uri=referer\" rel=\"external\"><img src=\"https://www.w3.org/Icons/valid-xhtml11.png\" alt=\"Valid XHTML 1.1!\" /></a>";
    var cssHTML = "<a href=\"https://jigsaw.w3.org/css-validator/check?uri=referer\" rel=\"external\"><img src=\"https://www.w3.org/Icons/valid-css.png\" alt=\"Valid CSS 3!\" /></a>";
    var validatorHTML = "<p class=\"centered\">" + xhtmlHTML + cssHTML + "</p>";

    for (var i = 0; i < footers.length; i++)
    {
        footers[i].innerHTML = copyrightHTML + clockHTML + validatorHTML;
    }
}

function displayHeader()
{
    var headers = $(".page_header");
    var logoHTML = "<img class=\"logo\" src=\"./img/logo.png\" alt=\"Website Logo Banner\" />";

    for (var i = 0; i < headers.length; i++)
    {
        headers[i].innerHTML = logoHTML;
    }
}

function externalizeLinks()
{
    var links = $("a");

    for (var i = 0; i < links.length; i++)
    {
        if (links[i].getAttribute("href") && (links[i].getAttribute("rel") == "external"))
        {
            links[i].target = "_blank";
        }
    }
}

function initialize()
{
    breakFrames();
    displayHeader();
    myTimer = setInterval("timerThread()", 333);
}

function showDateTime()
{
    var DateObj = new Date();
    var thisDay = DateObj.getDay();
    var thisDate = DateObj.getDate();
    var thisMonth = DateObj.getMonth();
    var thisYear = DateObj.getFullYear();
    var mName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November", "December");
    var dName = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var hours = DateObj.getHours();
    var minutes = DateObj.getMinutes();
    var seconds = DateObj.getSeconds();

    ampm = hours >=12 ? "PM" : "AM";
    hours = hours > 12 ? hours-12 : hours;
    minutes = minutes < 10 ? "0"+minutes : minutes;
    seconds = seconds < 10 ? "0"+seconds : seconds;

    return (dName[thisDay] + ", " + mName[thisMonth] + " " + thisDate + ", " + thisYear + ", " + hours + ":" + minutes + ":" + seconds + " " + ampm);
}

function timerThread()
{
    autoSetPageSize();
    displayFooter();
    externalizeLinks();
}
