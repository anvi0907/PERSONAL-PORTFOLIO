/* ============================
   MAIN.JS — All JS & jQuery Features
   Name: Anvi
   ============================ */

$(document).ready(function () {

  /* ============================
     1. PRELOADER
  ============================ */
  setTimeout(function () {
    $('#preloader').addClass('hidden');
    $('body').css('overflow', '');
  }, 2000);
  $('body').css('overflow', 'hidden');

  /* ============================
     2. AOS INIT
  ============================ */
  AOS.init({ duration: 800, once: true, offset: 60 });

  /* ============================
     3. DIGITAL CLOCK (JS)
  ============================ */
  function updateClock() {
    const now = new Date();
    let h = now.getHours().toString().padStart(2, '0');
    let m = now.getMinutes().toString().padStart(2, '0');
    let s = now.getSeconds().toString().padStart(2, '0');
    $('#clockWidget').text(h + ':' + m + ':' + s);
  }
  updateClock();
  setInterval(updateClock, 1000);

  /* ============================
     4. DYNAMIC GREETING MESSAGE (JS)
  ============================ */
  function setGreeting() {
    const hour = new Date().getHours();
    let msg = '';
    if (hour >= 5 && hour < 12)       msg = '☀️ Good Morning!';
    else if (hour >= 12 && hour < 17) msg = '🌤️ Good Afternoon!';
    else if (hour >= 17 && hour < 21) msg = '🌇 Good Evening!';
    else                               msg = '🌙 Good Night!';
    $('#greetingMsg').text(msg);
  }
  setGreeting();

  /* ============================
     5. TYPING TEXT ANIMATION (JS + Bonus)
  ============================ */
  const words = ['Anvi', 'a Developer', 'a Designer', 'a Creator'];
  let wordIndex = 0, charIndex = 0, isDeleting = false;

  function type() {
    const current = words[wordIndex];
    if (!isDeleting) {
      charIndex++;
      $('#typedText').text(current.substring(0, charIndex));
      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(type, 1400);
        return;
      }
    } else {
      charIndex--;
      $('#typedText').text(current.substring(0, charIndex));
      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }
    setTimeout(type, isDeleting ? 60 : 100);
  }
  setTimeout(type, 2200);

  /* ============================
     6. DARK / LIGHT MODE TOGGLE (JS)
  ============================ */
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    $('body').addClass('dark-mode').removeClass('light-mode');
    $('#themeToggle').text('☀️');
  }

  $('#themeToggle').on('click', function () {
    if ($('body').hasClass('dark-mode')) {
      $('body').removeClass('dark-mode').addClass('light-mode');
      $(this).text('🌙');
      localStorage.setItem('theme', 'light');
    } else {
      $('body').removeClass('light-mode').addClass('dark-mode');
      $(this).text('☀️');
      localStorage.setItem('theme', 'dark');
    }
  });

  /* ============================
     7. NAVBAR SCROLL EFFECTS (JS)
  ============================ */
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
      $('#navbar').addClass('scrolled');
    } else {
      $('#navbar').removeClass('scrolled');
    }

    // Scroll to top button
    if ($(this).scrollTop() > 400) {
      $('#scrollTop').css('display', 'flex');
    } else {
      $('#scrollTop').hide();
    }
  });

  /* ============================
     8. SCROLL TO TOP BUTTON (JS)
  ============================ */
  $('#scrollTop').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 600, 'swing');
  });

  /* ============================
     9. SMOOTH SCROLLING NAVIGATION (jQuery)
  ============================ */
  $(document).on('click', '.smooth-scroll, .nav-link', function (e) {
    const href = $(this).attr('href') || $(this).data('target');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = $(href);
      if (target.length) {
        const offset = target.offset().top - 70;
        $('html, body').animate({ scrollTop: offset }, 700, 'swing');
        // Close mobile nav if open
        $('#navLinks').removeClass('open');
      }
    }
  });

  // Scroll indicator click
  $('.scroll-indicator').on('click', function () {
    const t = $(this).data('target') || '#about';
    const offset = $(t).offset().top - 70;
    $('html, body').animate({ scrollTop: offset }, 700);
  });

  /* ============================
     10. HAMBURGER MENU (jQuery)
  ============================ */
  $('#hamburger').on('click', function () {
    $('#navLinks').toggleClass('open');
    const bars = $(this).find('span');
    if ($('#navLinks').hasClass('open')) {
      bars.eq(0).css('transform', 'rotate(45deg) translate(5px, 5px)');
      bars.eq(1).css('opacity', '0');
      bars.eq(2).css('transform', 'rotate(-45deg) translate(5px, -5px)');
    } else {
      bars.css({ 'transform': '', 'opacity': '' });
    }
  });

  /* ============================
     11. IMAGE SLIDER (JS)
  ============================ */
  const slides = $('.slide');
  let currentSlide = 0;

  // Build dots
  slides.each(function (i) {
    $('#sliderDots').append('<button class="dot-btn' + (i === 0 ? ' active' : '') + '" data-index="' + i + '"></button>');
  });

  function showSlide(index) {
    slides.removeClass('active');
    $('.dot-btn').removeClass('active');
    slides.eq(index).addClass('active');
    $('.dot-btn').eq(index).addClass('active');
    currentSlide = index;
  }

  $('#nextBtn').on('click', function () {
    showSlide((currentSlide + 1) % slides.length);
  });

  $('#prevBtn').on('click', function () {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
  });

  $(document).on('click', '.dot-btn', function () {
    showSlide(parseInt($(this).data('index')));
  });

  // Auto-advance
  setInterval(function () {
    showSlide((currentSlide + 1) % slides.length);
  }, 4000);

  /* ============================
     12. ACCORDION MENU (jQuery)
  ============================ */
  $(document).on('click', '.accordion-header', function () {
    const item = $(this).parent();
    const body = item.find('.accordion-body');
    const isOpen = item.hasClass('open');

    // Close all
    $('.accordion-item').removeClass('open').find('.accordion-body').slideUp(300);

    if (!isOpen) {
      item.addClass('open');
      body.slideDown(300);  // jQuery Slide Down Effect
    }
  });

  /* ============================
     13. ANIMATED COUNTERS (jQuery)
  ============================ */
  function animateCounters() {
    $('.counter').each(function () {
      const $this = $(this);
      const target = parseInt($this.data('target'));
      $({ count: 0 }).animate({ count: target }, {
        duration: 1500,
        easing: 'swing',
        step: function () {
          $this.text(Math.floor(this.count));
        },
        complete: function () {
          $this.text(target);
        }
      });
    });
  }

  // Trigger counters when about section is visible
  let countersTriggered = false;
  $(window).on('scroll', function () {
    if (!countersTriggered) {
      const aboutTop = $('#about').offset().top;
      if ($(this).scrollTop() + $(window).height() > aboutTop + 200) {
        countersTriggered = true;
        animateCounters();
      }
    }
  });

  /* ============================
     14. READ MORE (Hide/Show — jQuery)
  ============================ */
  $('#readMoreBtn').on('click', function () {
    const $extra = $('#extraAbout');
    if ($extra.is(':visible')) {
      $extra.slideUp(300);  // jQuery Slide Up
      $(this).text('Read More');
    } else {
      $extra.slideDown(300); // jQuery Slide Down
      $(this).text('Read Less');
    }
  });

  /* ============================
     15. CHARACTER COUNTER (JS)
  ============================ */
  $('#message').on('input', function () {
    const len = $(this).val().length;
    const max = 300;
    $('#charCount').text(len + ' / ' + max);
    if (len > max * 0.85) {
      $('#charCount').css('color', '#ef4444');
    } else {
      $('#charCount').css('color', '');
    }
  });

  /* ============================
     16. FORM VALIDATION (JS)
  ============================ */
  function validateField(id, errorId, rule, msg) {
    const val = $('#' + id).val().trim();
    if (!rule(val)) {
      $('#' + errorId).text(msg);
      $('#' + id).addClass('invalid');
      return false;
    } else {
      $('#' + errorId).text('');
      $('#' + id).removeClass('invalid');
      return true;
    }
  }

  $('#contactForm').on('submit', function (e) {
    e.preventDefault();
    let valid = true;

    valid &= validateField('name', 'nameError',
      v => v.length >= 2, 'Name must be at least 2 characters.');

    valid &= validateField('email', 'emailError',
      v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), 'Please enter a valid email address.');

    valid &= validateField('subject', 'subjectError',
      v => v.length >= 3, 'Subject must be at least 3 characters.');

    valid &= validateField('message', 'messageError',
      v => v.length >= 10, 'Message must be at least 10 characters.');

    if (valid) {
      // Show popup (jQuery Fade In)
      $('#popupTitle').text('Message Sent! 🎉');
      $('#popupMsg').text("Thanks for reaching out, I'll get back to you shortly.");
      $('#popup').fadeIn(400);
      this.reset();
      $('#charCount').text('0 / 300');
    }
  });

  // Live validation
  $('#name, #email, #subject').on('blur', function () {
    const id = $(this).attr('id');
    const errorId = id + 'Error';
    const val = $(this).val().trim();
    if (!val) {
      $('#' + errorId).text('This field is required.');
      $(this).addClass('invalid');
    } else {
      $('#' + errorId).text('');
      $(this).removeClass('invalid');
    }
  });

  /* ============================
     17. POPUP (jQuery Fade Out)
  ============================ */
  $('#popupClose, #popupOk').on('click', function () {
    $('#popup').fadeOut(300);
  });
  $('#popup').on('click', function (e) {
    if ($(e.target).is('#popup')) {
      $(this).fadeOut(300);
    }
  });

  /* ============================
     18. PROJECT CARD POPUP (jQuery Fade)
  ============================ */
  $('.project-card').on('click', function () {
    const title = $(this).find('h3').text();
    const desc = $(this).find('p').text();
    $('#popupTitle').text(title);
    $('#popupMsg').text(desc);
    $('#popup').fadeIn(400);
  });

  /* ============================
     19. FADE IN SECTIONS ON SCROLL (jQuery)
  ============================ */
  $('.project-card, .stat-item').css({ opacity: 0, transform: 'translateY(20px)' });
  $(window).on('scroll.fade', function () {
    $('.project-card, .stat-item').each(function () {
      const top = $(this).offset().top;
      const windowBottom = $(window).scrollTop() + $(window).height();
      if (windowBottom > top + 40) {
        $(this).animate({ opacity: 1 }, 500);
        $(this).css('transform', 'translateY(0)');
      }
    });
  });

});
