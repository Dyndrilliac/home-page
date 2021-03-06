<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
    <meta http-equiv="Content-type" content="text/html;charset=UTF-8" />
    <title>Matthew Boyette's Home Page</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
    <script type="text/javascript" src="./functions.js"></script>
</head>
<body onload="displaySubPage('main.php')">
    <?php
        $hostname = gethostbyaddr($_SERVER['REMOTE_ADDR']);
        $isW3Validator = preg_match('/^(\S*\.)(w3\.org)$/m', $hostname);
        $linkInternalText = '';
        $linkExternalText = '';

        if ($isW3Validator != 1)
        {
            $linkInternalText = 'Internal Links';
            $linkExternalText = 'External Links';
        }
    ?>
    <div class="page_header"></div>
    <div class="page_menu">
        <ul class="menuhead"><?php echo($linkInternalText); ?>
            <li class="menuitem"><a href="#" onclick="displaySubPage('main.html')">Main</a></li>
        </ul>
        <ul class="menuhead"><?php echo($linkExternalText); ?>
            <li class="menuitem"><a href="https://www.facebook.com/dyndrilliac" rel="external">Facebook</a></li>
            <li class="menuitem"><a href="https://github.com/Dyndrilliac" rel="external">GitHub</a></li>
            <li class="menuitem"><a href="https://db.tt/0y1jFChK" rel="external">Resume</a></li>
            <li class="menuitem"><a href="https://twitter.com/Dyndrilliac" rel="external">Twitter</a></li>
        </ul>
    </div>
    <div class="page_content"></div>
    <div class="page_footer"></div>
</body>
</html>
