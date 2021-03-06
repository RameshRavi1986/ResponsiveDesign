
// IE8 compat mode aka Fake IE7
// by Erich Ocean

// In this case, IE8 will be acting as IE7. You may choose to remove features in this case.

// related:
// james.padolsey.com/javascript/detect-ie-in-js-using-conditional-comments/

Modernizr.addTest('ie8compat',function(){
    return (!window.addEventListener && document.documentMode && document.documentMode === 7);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2Rlcm5penIvZmVhdHVyZS1kZXRlY3RzL2llOGNvbXBhdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIElFOCBjb21wYXQgbW9kZSBha2EgRmFrZSBJRTdcbi8vIGJ5IEVyaWNoIE9jZWFuXG5cbi8vIEluIHRoaXMgY2FzZSwgSUU4IHdpbGwgYmUgYWN0aW5nIGFzIElFNy4gWW91IG1heSBjaG9vc2UgdG8gcmVtb3ZlIGZlYXR1cmVzIGluIHRoaXMgY2FzZS5cblxuLy8gcmVsYXRlZDpcbi8vIGphbWVzLnBhZG9sc2V5LmNvbS9qYXZhc2NyaXB0L2RldGVjdC1pZS1pbi1qcy11c2luZy1jb25kaXRpb25hbC1jb21tZW50cy9cblxuTW9kZXJuaXpyLmFkZFRlc3QoJ2llOGNvbXBhdCcsZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gKCF3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAmJiBkb2N1bWVudC5kb2N1bWVudE1vZGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRNb2RlID09PSA3KTtcbn0pO1xuIl0sImZpbGUiOiJtb2Rlcm5penIvZmVhdHVyZS1kZXRlY3RzL2llOGNvbXBhdC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9