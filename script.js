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

function copyToClipboard(username) {
    const button = event.target;
    
    // Simple fallback that always works
    const textArea = document.createElement('textarea');
    textArea.value = username;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    textArea.style.top = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopyPopup(button);
        }
    } catch (err) {
        // Silently fail
    }
    
    document.body.removeChild(textArea);
}

function showCopyPopup(button) {
    // Remove any existing popup
    const existingPopup = button.querySelector('.copy-popup');
    if (existingPopup) {
        button.removeChild(existingPopup);
    }
    
    // Create popup element
    const popup = document.createElement('div');
    popup.className = 'copy-popup';
    popup.textContent = 'Username copied!';
    popup.style.cssText = `
        position: absolute;
        background: rgba(46, 204, 113, 0.9);
        color: white;
        padding: 6px 10px;
        border-radius: 6px;
        font-size: 0.75rem;
        font-weight: 500;
        pointer-events: none;
        z-index: 1001;
        opacity: 0;
        transition: opacity 0.3s ease;
        white-space: nowrap;
        top: 40px;
        left: 50%;
        transform: translateX(-50%);
    `;
    
    // Position popup above button
    button.style.position = 'relative';
    button.appendChild(popup);
    
    // Animate in
    setTimeout(() => {
        popup.style.opacity = '1';
    }, 10);
    
    // Add mouse leave listener to button
    const handleMouseLeave = () => {
        if (button.contains(popup)) {
            popup.style.opacity = '0';
            setTimeout(() => {
                if (button.contains(popup)) {
                    button.removeChild(popup);
                }
            }, 300);
        }
        button.removeEventListener('mouseleave', handleMouseLeave);
    };
    
    button.addEventListener('mouseleave', handleMouseLeave);
}