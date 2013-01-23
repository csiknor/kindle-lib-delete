kindle-lib-delete
=================

This bookmarklet deletes selected entries in your Kindle Library.

Based on the <a href="http://pepa.info/check-and-delete/">Check and Delete</a> bookmarklet, but it has an
added functionality of selecting and deselecting all of the checkboxes.

Basic usage
-----------

Create a new bookmark and paste the code below. Then go to your Kindle Library and press the
bookmarklet. After selecting the necessary items using the checkboxes press Bulk Delete under
the table to delete them.

<code>
javascript:(function(){var isBulkDeleteLoaded = false; if (!isBulkDeleteLoaded) { js = document.createElement('SCRIPT'); js.type = 'text/javascript'; js.src = '//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js'; document.getElementsByTagName('head')[0].appendChild(js); js = document.createElement('SCRIPT'); js.type = 'text/javascript'; js.src = '///raw.github.com/csiknor/kindle-lib-delete/master/check-delete.js'; document.getElementsByTagName('head')[0].appendChild(js); isBulkDeleteLoaded = true; }})();
</code>
