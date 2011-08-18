
$(document).ready(function() {
    var download_url, download_text;
    var base = 'http://bitbucket.org/pypy/pypy/downloads/';
    if (navigator.platform.indexOf('Linux') != -1) {
        if (navigator.platform.indexOf('64') != -1) {
            download_url = base + 'pypy-1.6-linux64.tar.bz2';
            download_text = 'Download linux x86-64 bin';
        } else {
            download_url = base + 'pypy-1.6-linux.tar.bz2';
            download_text = 'Download linux x86 bin (32 bit)';
        }
    } else if (navigator.platform.indexOf('Win') != -1) {
        download_url = base + 'pypy-1.6-win32.zip';
        download_text = 'Download Windows x86 bin';
    } else if (navigator.platform.indexOf('Mac') != 1) {
        download_url = base + 'pypy-1.6-osx64.tar.bz2';
        download_text = 'Download Mac OS X 10.6 bin (64 bit)';
    } else {
        download_url = "download.html";
        download_text = "Download page";
    }
    $("#main_download").attr('href', download_url);
    $("#main_download").text(download_text);
});
