document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-31007ea0d3bd9f80540adfbc55afc7bd.css">')
document.write('<div id=\"gist96375453\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-create_database-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-python \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\" data-paste-markdown-skip>\n      <tr>\n        <td id=\"file-create_database-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-create_database-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>import<\/span> <span class=pl-s1>sqlite3<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-create_database-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-create_database-py-LC2\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-create_database-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-create_database-py-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>conn<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>sqlite3<\/span>.<span class=pl-en>connect<\/span>(<span class=pl-s>&#39;entries.db&#39;<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-create_database-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-create_database-py-LC4\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>cursor<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>conn<\/span>.<span class=pl-en>cursor<\/span>()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-create_database-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-create_database-py-LC5\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>cursor<\/span>.<span class=pl-en>execute<\/span>(<span class=pl-s>&quot;&quot;&quot;CREATE TABLE entries (date text, entry text)&quot;&quot;&quot;<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-create_database-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-create_database-py-LC6\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-create_database-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-create_database-py-LC7\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>conn<\/span>.<span class=pl-en>commit<\/span>()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-create_database-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-create_database-py-LC8\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>conn<\/span>.<span class=pl-en>close<\/span>()<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/nt92/e3f48d3532ee9c1496a65e66e44dd1dd/raw/97b8d47726cbe485dd2f6704e6489fc7f55b1388/create_database.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/nt92/e3f48d3532ee9c1496a65e66e44dd1dd#file-create_database-py\">create_database.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')