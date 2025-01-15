/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  var $window = $(window),
    $body = $("body"),
    $header = $("#header"),
    $footer = $("#footer"),
    $main = $("#main"),
    settings = {
      // Parallax background effect?
      parallax: true,

      // Parallax factor (lower = more intense, higher = less intense).
      parallaxFactor: 20,
    };

  // Scrolly.
  // $("#main, .scrolly").scrolly({
  //   speed: 1000,
  //   offset: function () {
  //     return $main.height();
  //   },
  // });

  // Breakpoints.
  breakpoints({
    xlarge: ["1281px", "1800px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: ["481px", "736px"],
    xsmall: [null, "480px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Touch?
  if (browser.mobile) {
    // Turn on touch mode.
    $body.addClass("is-touch");

    // Height fix (mostly for iOS).
    window.setTimeout(function () {
      $window.scrollTop($window.scrollTop() + 1);
    }, 0);
  }

  // Footer.
  breakpoints.on("<=medium", function () {
    $footer.insertAfter($main);
  });

  breakpoints.on(">medium", function () {
    $footer.appendTo($header);
  });

  // Header.

  // Parallax background.

  // Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
  if (browser.name == "ie" || browser.mobile) settings.parallax = false;

  if (settings.parallax) {
    breakpoints.on("<=medium", function () {
      $window.off("scroll.strata_parallax");
      $header.css("background-position", "");
    });

    breakpoints.on(">medium", function () {
      $header.css("background-position", "left 0px");

      $window.on("scroll.strata_parallax", function () {
        $header.css(
          "background-position",
          "left " +
            -1 * (parseInt($window.scrollTop()) / settings.parallaxFactor) +
            "px"
        );
      });
    });

    $window.on("load", function () {
      $window.triggerHandler("scroll");
    });
  }

  //   Scroll
  $(document).ready(function () {
    $(".work").click(function () {
      var scrollDiv = document.getElementById("work").offsetTop;
      window.scrollTo({ top: scrollDiv, behavior: "smooth" });
    });

    $(".contact").click(function () {
      var scrollDiv = document.getElementById("three").offsetTop;
      window.scrollTo({ top: scrollDiv, behavior: "smooth" });
    });

    $(".top").click(function () {
      var scrollDiv = document.getElementById("header").offsetTop;
      window.scrollTo({ top: scrollDiv, behavior: "smooth" });
    });

    $(".about").click(function () {
      var scrollDiv = document.getElementById("about").offsetTop;
      window.scrollTo({ top: scrollDiv, behavior: "smooth" });
    });
  });

  // Main Sections: Two.

  // Lightbox gallery.
  $window.on("load", function () {
    $("#two").poptrox({
      caption: function ($a) {
        return $a.next("h3").text();
      },
      overlayColor: "#2c2c2c",
      overlayOpacity: 0.85,
      popupCloserText: "",
      popupLoaderText: "",
      selector: ".work-item a.image",
      usePopupCaption: true,
      usePopupDefaultStyling: false,
      usePopupEasyClose: false,
      usePopupNav: true,
      windowMargin: breakpoints.active("<=small") ? 0 : 50,
    });
  });
})(jQuery);

// Translations
const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About me",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "header.greeting": "Hello! I'm Sylvio,",
    "header.title": "A Full-Stack<br />Web Developer",
    "main.intro": "I'm <span id=\"color-effect\">a Full-Stack Web Dev</span>",
    "main.cta.projects": "Check out my recent projects",
    "main.cta.contact": "Contact me",
    "about.title": "About me",
    "about.p1": "Web Developer with a background in economics and education, I have been working in Japan for 4+ years.",
    "about.p2": "I have experience with multiple technology stacks including <b>React.js, Node.js, and Typescript.</b> I drive digital transformation as evidenced by:",
    "about.p3": "✅ Developed and deployed Shiru Guestbook, a full-stack web application using Next.js, tRPC, and OpenAI API for automatic Japanese translations.",
    "about.p4": "✅ Open source contributions to Together, improving Discord event integrations for a community of 40,000+ people.",
    "about.p5": "I'm excited to explore challenges in fast-paced environments, leveraging my trilingual communication skills and adaptability from living in multiple countries.",
    "contact.title": "Get In Touch",
    "contact.subtitle": "Have any questions, comments or concerns? Reach out to me to discuss how we can work together!",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message"
  },
  ja: {
    "nav.home": "ホーム",
    "nav.about": "自己紹介",
    "nav.projects": "プロジェクト",
    "nav.contact": "お問い合わせ",
    "header.greeting": "シルビオです。",
    "header.title": "フルスタック<br />ウェブ開発者",
    "main.intro": "<span id=\"color-effect\">フルスタックウェブ開発者</span>です",
    "main.cta.projects": "最近のプロジェクトを見る",
    "main.cta.contact": "お問い合わせ",
    "about.title": "自己紹介",
    "about.p1": "経済学と教育のバックグラウンドを持つウェブ開発者として、日本で4年以上働いています。",
    "about.p2": "<b>React.js、Node.js、Typescript</b>など、複数の技術スタックの経験があります。以下のような実績で、デジタルトランスフォーメーションを推進しています：",
    "about.p3": "✅ Next.js、tRPC、OpenAI APIを使用した自動日本語翻訳機能付きフルスタックウェブアプリケーション「Shiru Guestbook」を開発・デプロイ。",
    "about.p4": "✅ 40,000人以上のコミュニティのDiscordイベント統合を改善するオープンソースプロジェクト「Together」に貢献。",
    "about.p5": "複数の国での生活経験を活かした適応力と3カ国語でのコミュニケーション能力を活かし、スピード感のある環境での課題に取り組むことに意欲的です。",
    "contact.title": "お問い合わせ",
    "contact.subtitle": "ご質問、ご意見、ご相談がございましたら、お気軽にお問い合わせください。",
    "contact.form.name": "お名前",
    "contact.form.email": "メールアドレス",
    "contact.form.message": "メッセージ",
    "contact.form.send": "送信"
  }
};

// Language switching functionality
$(document).ready(function() {
  let currentLang = 'en';
  const $langToggle = $('#langToggle');

  function updateContent(lang) {
    $('[data-i18n]').each(function() {
      const $element = $(this);
      const key = $element.data('i18n');
      const translation = translations[lang][key];
      
      if ($element.is('input, textarea')) {
        $element.attr('placeholder', translation);
      } else {
        $element.html(translation);
      }
    });

    // Update button text
    $langToggle.text(lang === 'en' ? '🌐 日本語' : '🌐 English');
  }

  $langToggle.on('click', function() {
    currentLang = currentLang === 'en' ? 'ja' : 'en';
    updateContent(currentLang);
  });
});
