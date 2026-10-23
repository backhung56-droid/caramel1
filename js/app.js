(() => {
  const toast = document.getElementById('toast');
  let toastTimer;
  function showToast(message) {
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.hidden = true; }, 2800);
  }
  // Only one case remains open to keep the mobile card compact.
  const entries = Array.from(document.querySelectorAll('.case-card'));
  entries.forEach(entry => entry.addEventListener('toggle', () => {
    if (entry.open) entries.forEach(other => { if (other !== entry) other.open = false; });
  }));

  // The bottom contact bar appears only after the hero has scrolled away.
  const stickyBar = document.getElementById('mobile-sticky');
  const hero = document.querySelector('.hero');
  function updateSticky() {
    const trigger = hero.offsetTop + hero.offsetHeight - 135;
    const active = window.innerWidth <= 700 && window.scrollY > trigger;
    stickyBar.classList.toggle('is-active', active);
    stickyBar.inert = !active;
  }
  window.addEventListener('scroll', updateSticky, { passive: true });
  window.addEventListener('resize', updateSticky);
  updateSticky();

  const shareButton = document.getElementById('share-card');
  shareButton.addEventListener('click', async () => {
    const content = {
      title: '신소연 FC | 카라멜에셋',
      text: '카라멜에셋 신소연 FC\n보험·재무 상담\n휴대전화 010-4006-4221\n사무실 070-4439-2400'
    };
    // Do not share a local file:// URL: it will not work for the receiver.
    if (location.protocol === 'https:' || location.protocol === 'http:') content.url = location.href;
    if (navigator.share) {
      try { await navigator.share(content); return; }
      catch (err) { if (err && err.name === 'AbortError') return; }
    }
    const copyValue = content.text + (content.url ? '\n' + content.url : '');
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(copyValue);
      else {
        const input = document.createElement('textarea');
        input.value = copyValue;
        input.style.position = 'fixed'; input.style.opacity = '0';
        document.body.appendChild(input);
        input.focus(); input.select();
        if (!document.execCommand('copy')) throw new Error('copy failed');
        input.remove();
      }
      showToast('명함 연락처가 복사되었습니다.');
    } catch (_err) {
      showToast('전화번호 010-4006-4221');
    }
  });
})();
