// NovaMind JS：中英文切換為單一按鈕，支援所有頁面
document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    zh: {
      // 共用導航與頁尾
      home: '首頁', about: '認識我們', kids: '兒童AI課程', corporate: '企業AI培訓',
      lab: '教學實驗室', team: '師資與合作', news: '最新消息', contact: '聯絡我們',
      footer_powered_by: '由 虎珀探索科技股份有限公司 提供',
      footer_copyright: '© 2025 NovaMind 星智探索學院. All Rights Reserved.',

      // 首頁 index.html
      home_hero_title: '歡迎來到 NovaMind 星智探索學院',
      home_hero_text: '培養下一代AI創新者和操作者，深入了解AI技術並運用它解決實際問題。',
      home_cta_button: '了解更多課程',
      home_courses_title: '我們的核心課程',
      home_achievements_title: '精選學習成果',
      home_news_title: '最新活動消息',
      home_news_text: '隨時掌握我們的最新課程開班、工作坊和品牌媒體曝光。',

      // 認識我們 about.html
      about_us_title: '認識我們',
      about_mission_vision_title: '使命與願景',
      about_mission_vision_text: '我們致力於培育具備AI素養與創造力的下一代。',
      about_founders_title: '創辦團隊',
      about_founders_text: '由教育專家與科技實踐者組成的核心團隊，共同打造具啟發性的AI學習環境。',
      about_history_future_title: '歷程與展望',
      about_history_future_text: '自成立以來，NovaMind 不斷探索AI教育的無限可能，引領學生邁向未來。',
      about_roles_title: '主要職責與分工',
      about_roles_text_aipextec: '星智探索科技股份有限公司：AI課程開發與教學資源整合。',
      about_roles_text_paul: 'Paul Lin：AI教育策略規劃與國際合作。',
      about_roles_text_pan: 'Pan：課程內容設計與師資培訓。',

      // 兒童AI課程 kids.html
      kids_hero_title: '兒童AI課程',
      kids_hero_text: '專為兒童設計的AI啟蒙課程，以趣味互動方式培養未來競爭力。',
      kids_courses_title: '課程特色',
      kids_courses_feature1_title: '啟發興趣',
      kids_courses_feature1_desc: '透過遊戲化學習，讓孩子愛上AI。',
      kids_courses_feature2_title: '實作應用',
      kids_courses_feature2_desc: '動手實作AI專案，培養解決問題能力。',
      kids_courses_feature3_title: '創意無限',
      kids_courses_feature3_desc: '鼓勵孩子發揮想像力，用AI創造獨特作品。',
      kids_curriculum_title: '課程內容',
      kids_curriculum_beginner_title: 'AI初階探索',
      kids_curriculum_beginner_desc: '認識AI基本概念、圖形辨識與簡單互動。',
      kids_curriculum_intermediate_title: 'AI創意實作',
      kids_curriculum_intermediate_desc: '使用AI工具進行圖像生成、語音互動。',
      kids_curriculum_advanced_title: 'AI專案進階',
      kids_curriculum_advanced_desc: '設計AI小遊戲、應用AI於生活問題解決。',
      kids_outcomes_title: '學習成果範例',
      kids_work1_title: 'AI智慧繪本創作',
      kids_work1_desc: '學生使用AI工具生成圖像和文字，完成一本專屬繪本。',
      kids_work2_title: 'AI互動小遊戲',
      kids_work2_desc: '透過程式設計，讓AI與玩家互動，完成簡單的益智遊戲。',
      kids_work3_title: 'AI智慧家居模型',
      kids_work3_desc: '結合AI語音辨識，設計智能家居控制系統模型。',
      kids_faq_title: '常見問題',
      kids_faq1_question: '課程適合幾歲的孩子？',
      kids_faq1_answer: '我們的課程主要針對6-12歲的兒童設計。',
      kids_faq2_question: '孩子需要有程式設計經驗嗎？',
      kids_faq2_answer: '不需要，課程從基礎開始，循序漸進。',
      kids_faq3_question: '課程是線上還是實體？',
      kids_faq3_answer: '我們提供線上與實體課程，可依需求選擇。',
      kids_contact_button: '立即諮詢課程',

      // 企業AI培訓 corporate.html
      corporate_hero_title: '企業AI培訓',
      corporate_hero_text: '為企業量身打造AI培訓方案，提升團隊AI素養與應用能力。',
      corporate_advantages_title: '培訓優勢',
      corporate_advantages_custom_title: '客製化課程',
      corporate_advantages_custom_desc: '依企業需求，設計專屬培訓內容。',
      corporate_advantages_expert_title: '專業師資',
      corporate_advantages_expert_desc: '來自業界的AI專家，提供實戰經驗。',
      corporate_advantages_flexible_title: '彈性授課',
      corporate_advantages_flexible_desc: '可選擇線上、線下或混合式教學。',
      corporate_training_methods_title: '培訓方式',
      corporate_training_methods_text_offline: '線下實體培訓',
      corporate_training_offline_details: '在您的企業所在地或我們的教學中心進行實體授課。',
      corporate_training_methods_text_online: '線上直播課程',
      corporate_training_online_details: '透過線上平台進行互動式直播教學，方便遠端團隊參與。',
      corporate_training_methods_text_hybrid: '混合式培訓',
      corporate_training_hybrid_details: '結合線上與線下優勢，提供彈性且高效的學習體驗。',
      corporate_case_studies_title: '成功案例',
      corporate_case_studies_text: '與多家企業合作，成功提升員工AI技能。',
      corporate_case1_title: '金融業AI應用培訓',
      corporate_case1_desc: '協助金融機構員工掌握AI數據分析與風險評估工具。',
      corporate_case2_title: '製造業智慧轉型培訓',
      corporate_case2_desc: '導入AI視覺辨識與預測性維護，提升生產效率。',
      corporate_contact_button: '預約企業諮詢',

      // 教學實驗室 lab.html
      lab_hero_title: 'AI教學實驗室',
      lab_hero_text: '先進的AI教學實驗室，提供豐富的實作環境與資源。',
      lab_features_title: '實驗室特色',
      lab_features_hardware_title: '頂尖硬體設備',
      lab_features_hardware_desc: '配備高效能AI運算主機與各種感測器。',
      lab_features_software_title: '多元軟體平台',
      lab_features_software_desc: '支援Python、TensorFlow、PyTorch等多種開發環境。',
      lab_features_resources_title: '豐富教學資源',
      lab_features_resources_desc: '提供預訓練模型、數據集與專案模板。',
      lab_materials_title: '教學資源下載',
      lab_material1_title: 'AI基礎概念簡報',
      lab_material1_desc: '一份深入淺出的AI入門簡報，幫助您快速了解AI核心。',
      lab_material2_title: 'Python程式設計範例',
      lab_material2_desc: '包含多個Python AI程式碼範例，供實作練習。',
      lab_download_button: '立即下載',
      lab_visit_title: '預約參訪',
      lab_visit_text: '歡迎學校、企業或個人預約參訪我們的AI教學實驗室。',
      lab_visit_option1: '學校團體參訪',
      lab_visit_option1_desc: '為學生提供沉浸式AI學習體驗，激發對科技的熱情。',
      lab_visit_option2: '企業研發團隊交流',
      lab_visit_option2_desc: '分享AI最新技術與應用，促進產學合作。',
      lab_contact_button: '預約參訪',

      // 師資與合作 team.html
      team_hero_title: '師資與合作',
      team_hero_text: '我們的專業師資團隊與堅實的合作夥伴，為您提供最優質的AI教育。',
      team_instructors_title: '我們的AI導師',
      team_instructor1_name: 'Dr. Emily Chen',
      team_instructor1_title: 'AI演算法專家',
      team_instructor1_desc: '專精機器學習與深度學習，擁有多年教學與產業實戰經驗。',
      team_instructor2_name: 'Mr. David Lee',
      team_instructor2_title: 'AI應用開發者',
      team_instructor2_desc: '擅長AI產品開發與專案管理，指導學生將AI應用於實際問題。',
      team_instructor3_name: 'Ms. Sarah Wang',
      team_instructor3_title: 'AI教育顧問',
      team_instructor3_desc: '具備豐富的兒童教育經驗，擅長引導學生探索AI世界。',
      team_partners_title: '合作夥伴',
      team_partner1_name: '科技大學AI研究中心',
      team_partner1_desc: '共同開發前瞻AI教育課程與研究項目。',
      team_partner2_name: '程式設計教育協會',
      team_partner2_desc: '推廣程式教育與AI素養，舉辦全國性競賽。',
      team_partner3_name: '創新科技園區',
      team_partner3_desc: '提供實習與就業機會，促進AI人才發展。',
      team_collaboration_title: '合作機會',
      team_collab1_title: '加入我們的師資團隊',
      team_collab1_desc: '如果您是AI領域的專家，歡迎加入我們，共同培養下一代AI人才。',
      team_collab2_title: '成為合作夥伴',
      team_collab2_desc: '歡迎教育機構、企業或組織與我們建立合作關係，共創AI教育生態。',
      team_contact_button: '洽談合作',

      // 最新消息 news.html
      news_hero_title: '最新消息',
      news_hero_text: '掌握星智探索學院的最新動態、課程資訊與業界活動。',
      news_updates_title: '學院動態',
      news_update1_title: 'NovaMind 成功舉辦「AI未來之星」夏令營',
      news_update1_date: '2025年7月10日',
      news_update1_text: '為期兩週的AI夏令營圓滿落幕，學員們展現出驚人的AI創造力。',
      news_update2_title: '新開設「AI倫理與社會影響」課程',
      news_update2_date: '2025年6月20日',
      news_update2_text: '探討AI發展中的倫理議題，培養學生的批判性思維。',
      news_media_title: '媒體報導',
      news_media1_title: '《科技日報》：NovaMind 引領台灣AI教育新趨勢',
      news_media1_text: '報導指出NovaMind在兒童AI教育領域的創新模式與成果。',
      news_media2_title: '《教育觀察》：AI走進校園，星智探索學院的實踐',
      news_media2_text: '專訪我院如何將AI融入K12教育體系，培養學生未來能力。',
      read_more: '閱讀更多',
      news_events_title: '近期活動',
      event1_title: 'AI親子工作坊',
      event1_time: '2025年8月5日 上午 10:00 - 12:00',
      event1_location: 'NovaMind 台北教學中心',
      event2_title: '企業AI轉型研討會',
      event2_time: '2025年9月15日 下午 2:00 - 5:00',
      event2_location: '線上會議室',
      register_now: '立即報名',

      // 聯絡我們 contact.html
      contact_hero_title: '聯絡我們',
      contact_hero_text: '有任何問題或合作意向，歡迎隨時與我們聯繫。',
      contact_details_title: '聯絡資訊',
      contact_phone_title: '電話',
      contact_phone_hours: '服務時間：週一至週五 09:00 - 18:00',
      contact_email_title: '電子郵件',
      contact_address_title: '地址',
      contact_address_line1: '台北市大安區新生南路一段168號',
      contact_address_line2: '龍門大樓12樓',
      contact_social_title: '社群媒體',
      contact_form_title: '傳送訊息給我們',
      contact_form_name: '姓名',
      contact_form_email: '電子郵件',
      contact_form_message: '您的訊息',
      contact_form_send: '傳送',

      // 全站通用
      language_toggle: 'EN', // 初始顯示為EN
    },
    en: {
      // Common Navigation & Footer
      home: 'Home', about: 'About Us', kids: 'Kids AI Programs', corporate: 'Corporate AI Training',
      lab: 'AI Teaching Lab', team: 'Team & Partners', news: 'News & Events', contact: 'Contact',
      footer_powered_by: 'Powered by Apextech Corp.',
      footer_copyright: '© 2025 NovaMind Academy. All Rights Reserved.',

      // Home Page index.html
      home_hero_title: 'Welcome to NovaMind Academy',
      home_hero_text: 'Cultivating the next generation of AI innovators and operators, delving into AI technology and applying it to solve real-world problems.',
      home_cta_button: 'Learn More About Courses',
      home_courses_title: 'Our Core Courses',
      home_achievements_title: 'Selected Learning Outcomes',
      home_news_title: 'Latest News & Events',
      home_news_text: 'Stay updated on our latest course openings, workshops, and brand media exposure.',

      // About Us about.html
      about_us_title: 'About Us',
      about_mission_vision_title: 'Mission & Vision',
      about_mission_vision_text: 'We are committed to nurturing the next generation with AI literacy and creativity.',
      about_founders_title: 'Founding Team',
      about_founders_text: 'A core team composed of educational experts and technology practitioners, jointly creating an inspiring AI learning environment.',
      about_history_future_title: 'Journey & Outlook',
      about_history_future_text: 'Since its inception, NovaMind has continuously explored the infinite possibilities of AI education, leading students towards the future.',
      about_roles_title: 'Key Responsibilities & Divisions',
      about_roles_text_aipextec: 'Apextech Corp.: AI Course Development & Teaching Resource Integration.',
      about_roles_text_paul: 'Paul Lin: AI Education Strategy Planning & International Collaboration.',
      about_roles_text_pan: 'Pan: Curriculum Content Design & Instructor Training.',

      // Kids AI Programs kids.html
      kids_hero_title: 'Kids AI Programs',
      kids_hero_text: 'AI enlightenment courses designed for children, fostering future competitiveness through fun and interactive methods.',
      kids_courses_title: 'Course Features',
      kids_courses_feature1_title: 'Inspire Interest',
      kids_courses_feature1_desc: 'Through gamified learning, children fall in love with AI.',
      kids_courses_feature2_title: 'Hands-on Application',
      kids_courses_feature2_desc: 'Hands-on AI projects to develop problem-solving skills.',
      kids_courses_feature3_title: 'Unlimited Creativity',
      kids_courses_feature3_desc: 'Encourage children to use their imagination and create unique works with AI.',
      kids_curriculum_title: 'Curriculum Content',
      kids_curriculum_beginner_title: 'AI Beginner Exploration',
      kids_curriculum_beginner_desc: 'Learn basic AI concepts, pattern recognition, and simple interactions.',
      kids_curriculum_intermediate_title: 'AI Creative Projects',
      kids_curriculum_intermediate_desc: 'Use AI tools for image generation and voice interaction.',
      kids_curriculum_advanced_title: 'AI Project Advanced',
      kids_curriculum_advanced_desc: 'Design small AI games, apply AI to solve real-life problems.',
      kids_outcomes_title: 'Learning Outcomes Examples',
      kids_work1_title: 'AI Smart Picture Book Creation',
      kids_work1_desc: 'Students use AI tools to generate images and text, completing a personalized picture book.',
      kids_work2_title: 'AI Interactive Mini-Game',
      kids_work2_desc: 'Through programming, AI interacts with players to complete simple puzzle games.',
      kids_work3_title: 'AI Smart Home Model',
      kids_work3_desc: 'Combine AI voice recognition to design a smart home control system model.',
      kids_faq_title: 'Frequently Asked Questions',
      kids_faq1_question: 'What age group are the courses suitable for?',
      kids_faq1_answer: 'Our courses are primarily designed for children aged 6-12.',
      kids_faq2_question: 'Does my child need programming experience?',
      kids_faq2_answer: 'No, the courses start from basics and progress gradually.',
      kids_faq3_question: 'Are the courses online or in-person?',
      kids_faq3_answer: 'We offer both online and in-person courses, selectable based on your needs.',
      kids_contact_button: 'Inquire About Courses Now',

      // Corporate AI Training corporate.html
      corporate_hero_title: 'Corporate AI Training',
      corporate_hero_text: 'Tailored AI training programs for businesses to enhance team AI literacy and application capabilities.',
      corporate_advantages_title: 'Training Advantages',
      corporate_advantages_custom_title: 'Customized Curriculum',
      corporate_advantages_custom_desc: 'Design exclusive training content based on corporate needs.',
      corporate_advantages_expert_title: 'Expert Instructors',
      corporate_advantages_expert_desc: 'AI experts from the industry provide practical experience.',
      corporate_advantages_flexible_title: 'Flexible Instruction',
      corporate_advantages_flexible_desc: 'Choose between online, offline, or blended learning.',
      corporate_training_methods_title: 'Training Methods',
      corporate_training_methods_text_offline: 'Offline In-person Training',
      corporate_training_offline_details: 'In-person instruction at your company location or our training center.',
      corporate_training_methods_text_online: 'Online Live Classes',
      corporate_training_online_details: 'Interactive live teaching via online platforms, convenient for remote teams.',
      corporate_training_methods_text_hybrid: 'Blended Training',
      corporate_training_hybrid_details: 'Combines the advantages of online and offline for flexible and efficient learning.',
      corporate_case_studies_title: 'Success Stories',
      corporate_case_studies_text: 'Partnered with various companies to successfully enhance employee AI skills.',
      corporate_case1_title: 'Financial Industry AI Application Training',
      corporate_case1_desc: 'Assisted financial institution employees in mastering AI data analysis and risk assessment tools.',
      corporate_case2_title: 'Manufacturing Smart Transformation Training',
      corporate_case2_desc: 'Introduced AI visual recognition and predictive maintenance to improve production efficiency.',
      corporate_contact_button: 'Schedule Corporate Consultation',

      // AI Teaching Lab lab.html
      lab_hero_title: 'AI Teaching Lab',
      lab_hero_text: 'Advanced AI teaching laboratory, providing a rich hands-on environment and resources.',
      lab_features_title: 'Lab Features',
      lab_features_hardware_title: 'Cutting-edge Hardware',
      lab_features_hardware_desc: 'Equipped with high-performance AI computing hosts and various sensors.',
      lab_features_software_title: 'Diverse Software Platforms',
      lab_features_software_desc: 'Supports multiple development environments such as Python, TensorFlow, PyTorch.',
      lab_features_resources_title: 'Abundant Teaching Resources',
      lab_features_resources_desc: 'Provides pre-trained models, datasets, and project templates.',
      lab_materials_title: 'Teaching Resources Download',
      lab_material1_title: 'AI Basic Concepts Presentation',
      lab_material1_desc: 'An easy-to-understand AI introduction presentation to help you quickly grasp AI core concepts.',
      lab_material2_title: 'Python Programming Examples',
      lab_material2_desc: 'Includes multiple Python AI code examples for practical exercises.',
      lab_download_button: 'Download Now',
      lab_visit_title: 'Schedule a Visit',
      lab_visit_text: 'Schools, businesses, or individuals are welcome to schedule a visit to our AI teaching laboratory.',
      lab_visit_option1: 'School Group Visit',
      lab_visit_option1_desc: 'Provides students with an immersive AI learning experience, inspiring passion for technology.',
      lab_visit_option2: 'Corporate R&D Team Exchange',
      lab_visit_option2_desc: 'Share the latest AI technologies and applications, promoting industry-academia collaboration.',
      lab_contact_button: 'Schedule Visit',

      // Team & Partners team.html
      team_hero_title: 'Team & Partners',
      team_hero_text: 'Our professional instructor team and strong partners provide you with the highest quality AI education.',
      team_instructors_title: 'Our AI Mentors',
      team_instructor1_name: 'Dr. Emily Chen',
      team_instructor1_title: 'AI Algorithm Expert',
      team_instructor1_desc: 'Specializing in machine learning and deep learning, with years of teaching and industry experience.',
      team_instructor2_name: 'Mr. David Lee',
      team_instructor2_title: 'AI Application Developer',
      team_instructor2_desc: 'Proficient in AI product development and project management, guiding students to apply AI to real-world problems.',
      team_instructor3_name: 'Ms. Sarah Wang',
      team_instructor3_title: 'AI Education Consultant',
      team_instructor3_desc: 'Possesses rich experience in children\'s education, skilled at guiding students to explore the world of AI.',
      team_partners_title: 'Partners',
      team_partner1_name: 'University of Technology AI Research Center',
      team_partner1_desc: 'Jointly develop cutting-edge AI education courses and research projects.',
      team_partner2_name: 'Programming Education Association',
      team_partner2_desc: 'Promotes programming education and AI literacy, organizes national competitions.',
      team_partner3_name: 'Innovation Technology Park',
      team_partner3_desc: 'Provides internship and employment opportunities, fostering AI talent development.',
      team_collaboration_title: 'Collaboration Opportunities',
      team_collab1_title: 'Join Our Instructor Team',
      team_collab1_desc: 'If you are an AI expert, welcome to join us and jointly cultivate the next generation of AI talent.',
      team_collab2_title: 'Become a Partner',
      team_collab2_desc: 'Educational institutions, businesses, or organizations are welcome to establish partnerships with us to co-create an AI education ecosystem.',
      team_contact_button: 'Discuss Collaboration',

      // News & Events news.html
      news_hero_title: 'News & Events',
      news_hero_text: 'Stay updated on NovaMind Academy\'s latest developments, course information, and industry events.',
      news_updates_title: 'Academy Updates',
      news_update1_title: 'NovaMind Successfully Hosted "AI Future Stars" Summer Camp',
      news_update1_date: 'July 10, 2025',
      news_update1_text: 'The two-week AI summer camp concluded successfully, with participants showcasing amazing AI creativity.',
      news_update2_title: 'New Course: "AI Ethics and Social Impact" Launched',
      news_update2_date: 'June 20, 2025',
      news_update2_text: 'Exploring ethical issues in AI development and cultivating students\' critical thinking.',
      news_media_title: 'Media Coverage',
      news_media1_title: 'Technology Daily: NovaMind Leads New Trends in Taiwan AI Education',
      news_media1_text: 'Report highlights NovaMind\'s innovative model and achievements in children\'s AI education.',
      news_media2_title: 'Education Watch: AI Enters Campus, NovaMind Academy\'s Practice',
      news_media2_text: 'Exclusive interview on how our academy integrates AI into K12 education to develop students\' future capabilities.',
      read_more: 'Read More',
      news_events_title: 'Upcoming Events',
      event1_title: 'AI Parent-Child Workshop',
      event1_time: 'August 5, 2025, 10:00 AM - 12:00 PM',
      event1_location: 'NovaMind Taipei Learning Center',
      event2_title: 'Corporate AI Transformation Seminar',
      event2_time: 'September 15, 2025, 2:00 PM - 5:00 PM',
      event2_location: 'Online Meeting Room',
      register_now: 'Register Now',

      // Contact contact.html
      contact_hero_title: 'Contact Us',
      contact_hero_text: 'For any questions or collaboration inquiries, feel free to contact us.',
      contact_details_title: 'Contact Information',
      contact_phone_title: 'Phone',
      contact_phone_hours: 'Service Hours: Mon - Fri 09:00 - 18:00',
      contact_email_title: 'Email',
      contact_address_title: 'Address',
      contact_address_line1: '168, Section 1, Xinsheng South Road, Da’an District, Taipei City',
      contact_address_line2: '12F, Longmen Building',
      contact_social_title: 'Social Media',
      contact_form_title: 'Send Us a Message',
      contact_form_name: 'Name',
      contact_form_email: 'Email',
      contact_form_message: 'Your Message',
      contact_form_send: 'Send',

      // Site-wide
      language_toggle: '中文', // Initial display is Chinese
    }
  };

  const currentLang = localStorage.getItem('lang') || 'zh';
  updateContent(currentLang);
  updateTitle(currentLang);

  const toggleButton = document.querySelector('.language-toggle button');
  if (toggleButton) {
    updateToggleButton(currentLang);
    toggleButton.addEventListener('click', () => {
      const newLang = currentLang === 'zh' ? 'en' : 'zh';
      localStorage.setItem('lang', newLang);
      location.reload(); // 重新載入頁面以應用新語言
    });
  }

  function updateContent(lang) {
    document.querySelectorAll('[data-lang-key]').forEach(element => {
      const key = element.getAttribute('data-lang-key');
      if (key && translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
  }

  function updateTitle(lang) {
    const title = document.querySelector('title');
    const key = title.getAttribute('data-title-key');
    if (key && translations[lang] && translations[lang][key]) {
      title.textContent = translations[lang][key];
    }
  }

  function updateToggleButton(lang) {
    toggleButton.textContent = lang === 'zh' ? 'EN' : '中文';
  }

  // 初始化 AOS (Animate On Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, once: true });
  }

  // 判斷是否為首頁
  const isIndex = location.pathname.endsWith('index.html') || location.pathname === '/';

  // =============== particles.js 邏輯 (僅在首頁執行) ===============
  if (isIndex && typeof particlesJS !== 'undefined') {
    const particleContainer = document.createElement('div');
    particleContainer.id = 'particles-js';
    document.body.insertBefore(particleContainer, document.body.firstChild);
    Object.assign(particleContainer.style, {
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      zIndex: '-1', // 確保在內容下方
      background: '#001f3f' // 首頁特有的深藍色背景
    });
    particlesJS('particles-js', {
      particles: {
        number: { value: 50 }, color: { value: '#ffffff' }, shape: { type: 'circle' },
        opacity: { value: 0.5 }, size: { value: 3 },
        line_linked: {
          enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1
        },
        move: { enable: true, speed: 2 }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        }
      }
    });
  }

  // =============== Vanta.js 邏輯 (僅在非首頁執行) ===============
  // 檢查 VANTA 物件是否存在，以確保 Vanta.js 庫已載入
  if (!isIndex && typeof VANTA !== 'undefined') {
    // 創建一個容器 div 用於 Vanta.js 效果
    const vantaContainer = document.createElement('div');
    vantaContainer.id = 'vanta-bg'; // 給它一個唯一的 ID
    document.body.insertBefore(vantaContainer, document.body.firstChild); // 插入到 body 的最前面

    // 設定 Vanta 容器的樣式，確保它覆蓋整個背景且在內容下方
    Object.assign(vantaContainer.style, {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: '-2', // 比 particles-js 的 -1 更低，確保在所有內容和 particles.js 之下
      // background: 'transparent' // 可以設定為透明或白色，讓頁面本身的白色背景透出
    });

    // 初始化 VANTA.NET 效果 (AI 感推薦選項)
    // 參數可根據喜好調整
    VANTA.NET({
      el: "#vanta-bg", // 綁定到我們創建的 div
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x005599,       // 網格線條顏色 (深藍色，匹配 --secondary-color)
      backgroundColor: 0xf8f8f8, // 背景顏色 (淺灰色，匹配 --light-bg)
      points: 8.00,           // 點的數量
      maxDistance: 25.00,     // 連接線的最大距離
      spacing: 15.00          // 點之間的間距
    });

    /*
    // 如果你更喜歡 VANTA.DOTS 效果，請註釋掉上面的 VANTA.NET 效果代碼，並啟用這段：
    VANTA.DOTS({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x005599,       // 點的顏色 (深藍色，匹配 --secondary-color)
      backgroundColor: 0xf8f8f8, // 背景顏色 (淺灰色，匹配 --light-bg)
      size: 2.50,           // 點的大小
      spacing: 18.00          // 點之間的間距
    });
    */

    /*
    // 如果你更喜歡 VANTA.WAVES 效果，請註釋掉上面的 VANTA.NET/DOTS 效果代碼，並啟用這段：
    VANTA.WAVES({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x005599,        // 波浪顏色 (深藍色)
      shininess: 30.00,
      waveHeight: 15.00,
      waveSpeed: 0.8,
      zoom: 0.75,
      // backgroundColor: 0xf8f8f8 // 對於 WAVES，通常不需要明確設定 background，它會自己渲染
    });
    */
  }

});