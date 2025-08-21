function showTab(tabName) {
    var tabs = document.querySelectorAll('.tab-content');
    var buttons = document.querySelectorAll('.tab-button');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(button => button.classList.remove('active'));
    
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}


document.addEventListener('DOMContentLoaded', function() {
    
    const showcaseItems = document.querySelectorAll('.showcase-item');
    const globalPopup = document.getElementById('global-video-popup');
    const globalVideo = globalPopup.querySelector('video');
    const videoSource = document.getElementById('video-source');
    
    let animationId = null;
    
    function updatePopupPosition(e) {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
        
        animationId = requestAnimationFrame(() => {
            const popupWidth = 640;
            const popupHeight = 360;
            const offset = 30; // Distance from cursor
            
            let left = e.clientX + offset;
            let top = e.clientY - popupHeight - offset;
            
            // Keep popup within viewport bounds
            if (left + popupWidth > window.innerWidth - 10) {
                left = e.clientX - popupWidth - offset; // Show to the left
            }
            if (left < 10) left = 10;
            
            if (top < 10) {
                top = e.clientY + offset; // Show below cursor
            }
            if (top + popupHeight > window.innerHeight - 10) {
                top = window.innerHeight - popupHeight - 10;
            }
            
            globalPopup.style.left = left + 'px';
            globalPopup.style.top = top + 'px';
        });
    }
    
    showcaseItems.forEach(item => {
        const videoSrc = item.getAttribute('data-video');
        
        item.addEventListener('mouseenter', function(e) {
            videoSource.src = videoSrc;
            globalVideo.load();
            globalPopup.style.display = 'block';
            globalVideo.play();
            updatePopupPosition(e);
        });
        
        item.addEventListener('mousemove', function(e) {
            updatePopupPosition(e);
        });
        
        item.addEventListener('mouseleave', function() {
            globalPopup.style.display = 'none';
            globalVideo.pause();
            globalVideo.currentTime = 0;
            if (animationId) {
                cancelAnimationFrame(animationId);
                animationId = null;
            }
        });
    });
});