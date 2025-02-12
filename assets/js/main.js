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
  // $(document).ready(function () {
  //   event.preventDefault();
  //   const stickyHeaderHeight = 114;
  
  //   $(".work").click(function () {
  //     var scrollDiv = document.getElementById("work").offsetTop;
  //     window.scrollTo({ top: scrollDiv, behavior: "smooth" });
  //   });

  //   $(".contact").click(function () {
  //     var scrollDiv = document.getElementById("three").offsetTop;
  //     window.scrollTo({ top: scrollDiv - 114, behavior: "smooth" });
  //   });

  //   $(".top").click(function () {
  //     var scrollDiv = document.getElementById("header").offsetTop;
  //     window.scrollTo({ top: scrollDiv, behavior: "smooth" });
  //   });

  //   $(".about").click(function () {
  //     var scrollDiv = document.getElementById("about").offsetTop;
  //     window.scrollTo({ top: scrollDiv - 114, behavior: "smooth" });
  //   });
  // });

  $(document).ready(function() {
    const stickyHeaderHeight = $("#nav").outerHeight(); // Get header height dynamically

    function smoothScrollTo(targetId, event) {
        event.preventDefault(); // *Prevent the default link behavior*

        const targetElement = document.getElementById(targetId);

        if (!targetElement) {
            console.warn(`Target element with ID "${targetId}" not found.`);
            return;
        }

        const targetOffset = targetElement.offsetTop - stickyHeaderHeight;

        window.scrollTo({
            top: targetOffset,
            behavior: "smooth"
        });
    }


    $("#nav a").click(function(event) {  // Attach to all links *inside* the nav
        const targetId = $(this).attr("href").substring(1); // Get ID from href (remove #)
        smoothScrollTo(targetId, event);
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
    "header.title": "A Full-Stack",
    "header.title2": "Web Developer",
    "main.intro": "I'm <span id=\"color-effect\">a Full-Stack Web Dev</span>",
    "main.cta.projects": "Check out my recent projects",
    "main.cta.contact": "Contact me",
    "about.title": "About me",
    "about.p1": "Web Developer with a background in economics and education, I have been working in Japan for 4+ years.",
    "about.p2": "I have experience with multiple technology stacks including <b>React.js, Node.js, and Typescript.</b> I drive digital transformation as evidenced by:",
    "about.p3": "✅ Developed and deployed Shiru Guestbook, a full-stack web application using Next.js, tRPC, and OpenAI API for automatic Japanese translations.",
    "about.p4": "✅ Open source contributions to Together, improving Discord event integrations for a community of 40,000+ people.",
    "about.p5": "I'm excited to explore challenges in fast-paced environments, leveraging my trilingual <img src=\"images/brazil_flag.png\" alt=\"Brazil Flag\" class=\"flag-icon\"><img src=\"images/usa_flag.png\" alt=\"USA Flag\" class=\"flag-icon\"><img src=\"images/japan_flag.png\" alt=\"Japan Flag\" class=\"flag-icon\"></img> communication skills and adaptability from living in multiple countries.",
    "about.p6": " ",
    "recent.work": "Recent Work",
    "oss": "OSS Group Project",
    "website": "Live Website",
    "github": "GitHub",
    "contact.title": "Get In Touch",
    "contact.subtitle": "Have any questions, comments or concerns? Reach out to me to discuss how we can work together!",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",
    "contact.address.title": "Address",
    "contact.address.city": "Akashi",
    "contact.address.prefecture": "Hyogo",
    "contact.address.country": "Japan",
    "footer.copyright": "&copy; 2024 Sylvio Mafort",
    "footer.design": "Design: HTML5 UP",
    "social.github": "GitHub",
    "social.linkedin": "LinkedIn",
    "social.email": "Email",
    "modal.cats.description": "Cats n' Cheese is a single-player game where players act as mice stealing cheese from cats.",
    "modal.cats.features.title": "Key Features:",
    "modal.cats.features.1": "Built in two weekends for the MeltingHack Sprint#2 Hackathon",
    "modal.cats.features.2": "Asynchronously worked with 4 teammates from different continents to deliver the project in a Agile manner",
    "modal.cats.tech.title": "Technologies Used:",
    "modal.cats.tech.1": "React for client-side rendering",
    "modal.cats.tech.2": "Tailwind CSS for rapid UI development",
    "modal.cats.tech.3": "Vercel for deployment and hosting",
    "modal.guestbook.description": "Shiru Guestbook is a modern web application that allows users to create and view guestbook entries.",
    "modal.guestbook.features.title": "Key Features:",
    "modal.guestbook.features.1": "Create and view guestbook entries",
    "modal.guestbook.features.2": "Automatic Japanese translation of messages using OpenAI API",
    "modal.guestbook.features.3": "Secure authentication via GitHub and Discord",
    "modal.guestbook.tech.title": "Technologies Used:",
    "modal.guestbook.tech.1": "TypeScript for enhanced code quality",
    "modal.guestbook.tech.2": "Next.js for server-side rendering",
    "modal.guestbook.tech.3": "Tailwind CSS for rapid UI development",
    "modal.guestbook.tech.4": "tRPC for end-to-end typesafe APIs",
    "modal.guestbook.tech.5": "Amazon RDS (PostgreSQL) for data storage",
    "modal.guestbook.tech.6": "OpenAI API for Japanese translations",
    "modal.guestbook.tech.7": "Vercel for deployment and hosting",
    "modal.runeterra.title": "Runeterra Marketplace",
    "modal.runeterra.description": "A marketplace application for Legends of Runeterra, built using vanilla JavaScript and Bootstrap CSS. This project showcases the ability to create interactive web applications using fundamental web technologies.",
    "modal.runeterra.features.title": "Key Features:",
    "modal.runeterra.features.1": "Browse and search Legends of Runeterra items",
    "modal.runeterra.features.2": "Responsive design for various screen sizes",
    "modal.runeterra.features.3": "Interactive UI elements for an engaging user experience",
    "modal.runeterra.tech.title": "Technologies Used:",
    "modal.runeterra.tech.1": "HTML5 for structuring the web content",
    "modal.runeterra.tech.2": "Vanilla JavaScript for dynamic functionality",
    "modal.runeterra.tech.3": "Bootstrap CSS for responsive and attractive styling",
    "modal.coffee.title": "Coffee Chats NOW!",
    "modal.coffee.description": "A coffee chat event scheduler app designed to streamline the process of finding and scheduling coffee chats within short time frames. This full-stack application integrates a React frontend with an Express backend.",
    "modal.coffee.features.title": "Key Features:",
    "modal.coffee.features.1": "Quick and easy coffee chat scheduling",
    "modal.coffee.features.2": "User-friendly interface for managing events",
    "modal.coffee.features.3": "Real-time updates and notifications",
    "modal.coffee.tech.title": "Technologies Used:",
    "modal.coffee.tech.1": "React for building a dynamic and responsive frontend",
    "modal.coffee.tech.2": "React Query for efficient data fetching and caching",
    "modal.coffee.tech.3": "Yup for form validation",
    "modal.coffee.tech.4": "Tailwind CSS for rapid and customizable styling",
    "modal.coffee.tech.5": "Node.js and Express for a robust backend",
    "modal.coffee.tech.6": "MongoDB with Mongoose for flexible data storage and management",
    "technologies-heading": "Technologies Used:"
  },
  ja: {
    "nav.home": "ホーム",
    "nav.about": "自己紹介",
    "nav.projects": "プロジェクト",
    "nav.contact": "お問い合わせ",
    "header.greeting": "シルビオです!",
    "header.title": "フルスタック",
    "header.title2": "ウェブデベロッパー",
    "main.intro": "<span id=\"color-effect\">ウェブエンジニア</span>",
    "main.cta.projects": "最近のプロジェクトを見る",
    "main.cta.contact": "お問い合わせ",
    "about.title": "自己紹介",
    "about.p1": "経済学と教育のバックグラウンドを持つウェブ開発者です。日本で4年以上働いています。",
    "about.p2": "<b>React.js、Node.js、Typescript</b>など、さまざまな技術スタックを活用した開発経験があります。以下はこれまでの実績の一例です：",
    "about.p3": "✅ Next.js、tRPC、OpenAI APIを使用した自動日本語翻訳機能付きフルスタックウェブアプリケーション「Shiru Guestbook」を開発・リリース。",
    "about.p4": "✅「Together」のオープンソースプロジェクトに貢献し、40,000人以上のコミュニティ向けにDiscordのイベント連携機能を改善。",
    "about.p5": "また、多国籍での生活経験を生かした適応力と、3か国語<img src=\"images/brazil_flag.png\" alt=\"Brazil Flag\" class=\"flag-icon\"><img src=\"images/usa_flag.png\" alt=\"USA Flag\" class=\"flag-icon\"><img src=\"images/japan_flag.png\" alt=\"Japan Flag\" class=\"flag-icon\"></img> でのコミュニケーション能力を活かし、",
    "about.p6": "スピード感のある環境で新たな挑戦をしていきたいと考えています。",
    "recent.work": "最近の作品",
    "oss": "オプンソースプログラム",
    "website": "ウェブサイト",
    "github": "GitHub",
    "contact.title": "お問い合わせ",
    "contact.subtitle": "ご質問、ご意見、ご相談がございましたら、お気軽にお問い合わせください。",
    "contact.form.name": "お名前",
    "contact.form.email": "メールアドレス",
    "contact.form.message": "メッセージ",
    "contact.form.send": "送信",
    "contact.address.title": "住所",
    "contact.address.city": "明石",
    "contact.address.prefecture": "兵庫",
    "contact.address.country": "日本",
    "footer.copyright": "&copy; 2024 シルヴィオ・マフォート",
    "social.github": "GitHub",
    "social.linkedin": "LinkedIn",
    "social.email": "Email",
"modal.cats.description": "Cats n' Cheeseは、プレイヤーがネズミとなり、猫からチーズを盗むシングルプレイヤーゲームです。",
"modal.cats.features.title": "主な特徴：",
"modal.cats.features.1": "MeltingHack Sprint#2ハッカソンのために2週間末で作成",
"modal.cats.features.2": "アジャイル手法で異なる大陸にいる4人のチームメイトと非同期で協力してプロジェクトを完成",
"modal.cats.tech.title": "使用技術：",
"modal.cats.tech.1": "Reactを使用したクライアントサイドレンダリング",
"modal.cats.tech.2": "Tailwind CSSによる迅速なUI開発",
"modal.cats.tech.3": "Vercelによるデプロイとホスティング",
"modal.guestbook.description": "Shiru Guestbookは、ユーザーがゲストブックのエントリを作成および閲覧できるモダンなWebアプリケーションです。",
"modal.guestbook.features.title": "主な特徴：",
"modal.guestbook.features.1": "ゲストブックエントリの作成と閲覧",
"modal.guestbook.features.2": "OpenAI APIを使用したメッセージの自動日本語翻訳",
"modal.guestbook.features.3": "GitHubおよびDiscordを介した安全な認証",
"modal.guestbook.tech.title": "使用技術：",
"modal.guestbook.tech.1": "コード品質向上のためのTypeScript",
"modal.guestbook.tech.2": "サーバーサイドレンダリングのためのNext.js",
"modal.guestbook.tech.3": "迅速なUI開発のためのTailwind CSS",
"modal.guestbook.tech.4": "エンドツーエンドの型安全なAPIのためのtRPC",
"modal.guestbook.tech.5": "データストレージのためのAmazon RDS (PostgreSQL)",
"modal.guestbook.tech.6": "日本語翻訳のためのOpenAI API",
"modal.guestbook.tech.7": "デプロイとホスティングのためのVercel",
"modal.runeterra.title": "Runeterra Marketplace",
"modal.runeterra.description": "Legends of Runeterra用のマーケットプレイスアプリケーションで、バニラJavaScriptとBootstrap CSSを使用して構築されています。このプロジェクトは、基本的なWeb技術を使用してインタラクティブなWebアプリケーションを作成する能力を示しています。",
"modal.runeterra.features.title": "主な特徴：",
"modal.runeterra.features.1": "Legends of Runeterraアイテムの閲覧と検索",
"modal.runeterra.features.2": "さまざまな画面サイズに対応したレスポンシブデザイン",
"modal.runeterra.features.3": "魅力的なユーザー体験を提供するインタラクティブなUI要素",
"modal.runeterra.tech.title": "使用技術：",
"modal.runeterra.tech.1": "Webコンテンツを構造化するためのHTML5",
"modal.runeterra.tech.2": "動的機能のためのバニラJavaScript",
"modal.runeterra.tech.3": "レスポンシブで魅力的なスタイリングのためのBootstrap CSS",
"modal.coffee.title": "Coffee Chats NOW!",
"modal.coffee.description": "短時間でコーヒーチャットを見つけてスケジュールするプロセスを合理化するために設計されたコーヒーチャットイベントスケジューラーアプリ。このフルスタックアプリケーションは、ReactフロントエンドとExpressバックエンドを統合しています。",
"modal.coffee.features.title": "主な特徴：",
"modal.coffee.features.1": "迅速かつ簡単なコーヒーチャットのスケジューリング",
"modal.coffee.features.2": "イベント管理のための使いやすいインターフェース",
"modal.coffee.features.3": "リアルタイムの更新と通知",
"modal.coffee.tech.title": "使用技術：",
"modal.coffee.tech.1": "動的かつレスポンシブなフロントエンド構築のためのReact",
"modal.coffee.tech.2": "効率的なデータ取得とキャッシングのためのReact Query",
"modal.coffee.tech.3": "フォーム検証のためのYup",
"modal.coffee.tech.4": "迅速かつカスタマイズ可能なスタイリングのためのTailwind CSS",
"modal.coffee.tech.5": "堅牢なバックエンドのためのNode.jsとExpress",
"modal.coffee.tech.6": "柔軟なデータストレージと管理のためのMongoDBとMongoose",
"technologies-heading": "使用したテクノロジー:"
  }
};

// Language switching functionality
$(document).ready(function() {
  let currentLang = 'en';
  const $langToggle = $('#langToggle');

  // Function to update the content based on the selected language
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

    // Update the button text
    $langToggle.text(lang === 'en' ? '🌐 日本語' : '🌐 English');
  }

  // Call updateContent when the page first loads
  updateContent(currentLang);

  // Handle language toggle button click
  $langToggle.on('click', function() {
    currentLang = currentLang === 'en' ? 'ja' : 'en';
    updateContent(currentLang);
  });
});
