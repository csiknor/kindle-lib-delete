kindle-lib-delete
=================

This bookmarklet deletes selected entries in your Kindle Library.

Based on the <a href="http://pepa.info/check-and-delete/">Check and Delete</a> bookmarklet, but it has an
added functionality of selecting and deselecting all of the checkboxes.

Basic usage
-----------

Drag the bookmarklet to your bookmarks bar. Then go to your Kindle Library and press the
bookmarklet. After selecting the necessary items using the checkboxes press Bulk Delete under
the table to delete them.

<a href="javascript:(function(){var%20isBulkDeleteLoaded%20=%20false;%20if%20(!isBulkDeleteLoaded)%20{%20js%20=%20document.createElement('SCRIPT');%20js.type%20=%20'text/javascript';%20js.src%20=%20'//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js';%20document.getElementsByTagName('head')[0].appendChild(js);%20js%20=%20document.createElement('SCRIPT');%20js.type%20=%20'text/javascript';%20js.src%20=%20'//raw.github.com/csiknor/kindle-lib-delete/master/check-delete.js';%20document.getElementsByTagName('head')[0].appendChild(js);%20isBulkDeleteLoaded%20=%20true;%20}})();" id="bookmarklet">Kindle Lib Delete</a>
