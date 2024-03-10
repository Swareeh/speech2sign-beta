const mic_btn = document.getElementById('pulse')
const pulse_spans = document.querySelectorAll('.pulse_span')

mic_btn.addEventListener('click', function () {
    pulse_spans.forEach((span, index) => {
        span.style.setProperty('--i', index);
        span.classList.toggle('listening');
    });
})