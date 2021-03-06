// this tests passes for webkit's proprietary `-webkit-mask` feature
//   www.webkit.org/blog/181/css-masks/
//   developer.apple.com/library/safari/#documentation/InternetWeb/Conceptual/SafariVisualEffectsProgGuide/Masks/Masks.html

// it does not pass mozilla's implementation of `mask` for SVG

//   developer.mozilla.org/en/CSS/mask
//   developer.mozilla.org/En/Applying_SVG_effects_to_HTML_content

// Can combine with clippaths for awesomeness: http://generic.cx/for/webkit/test.html

Modernizr.addTest('cssmask', Modernizr.testAllProps('maskRepeat'));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2Rlcm5penIvZmVhdHVyZS1kZXRlY3RzL2Nzcy1tYXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHRoaXMgdGVzdHMgcGFzc2VzIGZvciB3ZWJraXQncyBwcm9wcmlldGFyeSBgLXdlYmtpdC1tYXNrYCBmZWF0dXJlXG4vLyAgIHd3dy53ZWJraXQub3JnL2Jsb2cvMTgxL2Nzcy1tYXNrcy9cbi8vICAgZGV2ZWxvcGVyLmFwcGxlLmNvbS9saWJyYXJ5L3NhZmFyaS8jZG9jdW1lbnRhdGlvbi9JbnRlcm5ldFdlYi9Db25jZXB0dWFsL1NhZmFyaVZpc3VhbEVmZmVjdHNQcm9nR3VpZGUvTWFza3MvTWFza3MuaHRtbFxuXG4vLyBpdCBkb2VzIG5vdCBwYXNzIG1vemlsbGEncyBpbXBsZW1lbnRhdGlvbiBvZiBgbWFza2AgZm9yIFNWR1xuXG4vLyAgIGRldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9DU1MvbWFza1xuLy8gICBkZXZlbG9wZXIubW96aWxsYS5vcmcvRW4vQXBwbHlpbmdfU1ZHX2VmZmVjdHNfdG9fSFRNTF9jb250ZW50XG5cbi8vIENhbiBjb21iaW5lIHdpdGggY2xpcHBhdGhzIGZvciBhd2Vzb21lbmVzczogaHR0cDovL2dlbmVyaWMuY3gvZm9yL3dlYmtpdC90ZXN0Lmh0bWxcblxuTW9kZXJuaXpyLmFkZFRlc3QoJ2Nzc21hc2snLCBNb2Rlcm5penIudGVzdEFsbFByb3BzKCdtYXNrUmVwZWF0JykpO1xuIl0sImZpbGUiOiJtb2Rlcm5penIvZmVhdHVyZS1kZXRlY3RzL2Nzcy1tYXNrLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=