
// developer.mozilla.org/en/CSS/background-size

Modernizr.testStyles( '#modernizr{background-size:cover}', function( elem ) {
	var style = window.getComputedStyle ?
		window.getComputedStyle( elem, null )
		: elem.currentStyle;
		
	Modernizr.addTest( 'bgsizecover', style.backgroundSize == 'cover' );
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2Rlcm5penIvZmVhdHVyZS1kZXRlY3RzL2Nzcy1iYWNrZ3JvdW5kc2l6ZWNvdmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0NTUy9iYWNrZ3JvdW5kLXNpemVcblxuTW9kZXJuaXpyLnRlc3RTdHlsZXMoICcjbW9kZXJuaXpye2JhY2tncm91bmQtc2l6ZTpjb3Zlcn0nLCBmdW5jdGlvbiggZWxlbSApIHtcblx0dmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUgP1xuXHRcdHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCBlbGVtLCBudWxsIClcblx0XHQ6IGVsZW0uY3VycmVudFN0eWxlO1xuXHRcdFxuXHRNb2Rlcm5penIuYWRkVGVzdCggJ2Jnc2l6ZWNvdmVyJywgc3R5bGUuYmFja2dyb3VuZFNpemUgPT0gJ2NvdmVyJyApO1xufSk7Il0sImZpbGUiOiJtb2Rlcm5penIvZmVhdHVyZS1kZXRlY3RzL2Nzcy1iYWNrZ3JvdW5kc2l6ZWNvdmVyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=