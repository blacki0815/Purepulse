/* ============================================================
   PUREPULSE NATUR PUR – JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- NAV SCROLL ----------
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // ---------- MOBILE MENU ----------
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      // Animate burger spans
      const spans = burger.querySelectorAll('span');
      const isOpen = mobileMenu.classList.contains('open');
      if (isOpen) {
        spans[0].style.transform = 'translateY(7px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        const spans = burger.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      });
    });
  }

  // ---------- REVEAL ON SCROLL ----------
  const reveals = document.querySelectorAll('.reveal');

  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reveals.forEach(el => observer.observe(el));

  // ---------- DISTRIBUTION BAR ANIMATION ----------
  const distBar = document.querySelector('.dist-bar');
  if (distBar) {
    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Bars already have width set via HTML, CSS transition handles animation
          const fills = distBar.querySelectorAll('.dist-bar__fill');
          fills.forEach(fill => {
            fill.style.opacity = '0';
            setTimeout(() => {
              fill.style.transition = 'opacity 0.5s ease, width 1.2s ease';
              fill.style.opacity = '1';
            }, 100);
          });
          barObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    barObserver.observe(distBar);
  }

  // ---------- COUNTER ANIMATION ----------
  function animateCounter(el, target, duration = 1800) {
    const isFloat = target % 1 !== 0;
    const start = performance.now();
    const step = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = eased * target;
      el.textContent = isFloat 
        ? current.toFixed(1) 
        : Math.floor(current).toLocaleString('de-DE');
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  // Observe stat numbers
  const statNumbers = document.querySelectorAll('.big-stat strong, .lohas-stat strong');
  statNumbers.forEach(el => {
    const text = el.textContent.trim();
    const match = text.match(/[\d,.]+/);
    if (!match) return;
    const rawNum = parseFloat(match[0].replace('.', '').replace(',', '.'));
    if (isNaN(rawNum)) return;

    const numObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(el, rawNum);
          numObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    numObserver.observe(el);
  });

  // ---------- SMOOTH LEAF PARALLAX (Hero) ----------
  const heroLeaves = document.querySelectorAll('.hero .leaf');
  if (heroLeaves.length > 0) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      heroLeaves.forEach((leaf, i) => {
        const speed = 0.03 + (i * 0.01);
        leaf.style.transform = `translateY(${scrollY * speed}px)`;
      });
    }, { passive: true });
  }

  // ---------- HOVER TILT ON CARDS ----------
  const tiltCards = document.querySelectorAll('.usp-card, .smart-card, .packaging-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `translateY(-6px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // ---------- ACTIVE PAGE HIGHLIGHT ----------
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  // ---------- CURSOR LEAF TRAIL (desktop) ----------
  if (window.matchMedia('(hover: hover)').matches) {
    const trail = [];
    const TRAIL_EMOJIS = ['🌿', '🍃', '🌿'];
    
    document.addEventListener('mousemove', (e) => {
      if (Math.random() > 0.97) {
        const leaf = document.createElement('div');
        leaf.className = 'cursor-leaf';
        leaf.textContent = TRAIL_EMOJIS[Math.floor(Math.random() * TRAIL_EMOJIS.length)];
        leaf.style.cssText = `
          position: fixed;
          left: ${e.clientX}px;
          top: ${e.clientY}px;
          font-size: ${12 + Math.random() * 10}px;
          pointer-events: none;
          z-index: 9999;
          opacity: 0.6;
          transform: translate(-50%, -50%) rotate(${Math.random() * 60 - 30}deg);
          transition: all 1.2s ease;
          user-select: none;
        `;
        document.body.appendChild(leaf);
        trail.push(leaf);
        
        requestAnimationFrame(() => {
          leaf.style.opacity = '0';
          leaf.style.transform = `translate(-50%, -100px) rotate(${Math.random() * 60 - 30}deg) scale(0.5)`;
        });
        
        setTimeout(() => {
          leaf.remove();
          trail.shift();
        }, 1200);
      }
    });
  }

});
