document.addEventListener('DOMContentLoaded', () => {
    // 定義所有需要翻譯的文本
    const translations = {
        zh: {
            home: '首頁',
            about: '認識我們',
            kids: '兒童AI課程',
            corporate: '企業AI培訓',
            lab: '教學實驗室',
            team: '師資與合作',
            news: '最新消息',
            contact: '聯絡我們',
            // 首頁
            home_hero_title: '歡迎來到 NovaMind 星智探索學院',
            home_hero_text: '培養下一代AI創新者和操作者，深入了解AI技術並運用它解決實際問題。',
            home_cta_button: '了解更多課程',
            home_courses_title: '我們的核心課程',
            home_course_intro_title1: 'AI 初階探索課程',
            home_course_intro_text1: '認識AI世界，互動體驗，學習ChatGPT和DALL·E基礎工具。',
            home_course_intro_title2: '進階應用：一個巨星的誕生！',
            home_course_intro_text2: '運用ChatGPT故事創作，DALL·E AI繪圖，結合Canva AI和Storybird印製書本。',
            home_news_title: '最新活動消息',
            home_news_text: '隨時掌握我們的最新課程開班、工作坊和品牌媒體曝光。',
            home_achievements_title: '精選學習成果',
            home_achievements_text: '探索學生們在AI學習旅程中的傑出作品與創意專案。',
            // 認識我們
            about_us_title: '認識我們 / About Us',
            about_mission_vision_title: '品牌使命與願景',
            about_mission_vision_text: 'NovaMind星智探索學院致力於透過創新的AI教育，啟發孩子們的潛能，培養他們成為未來的AI領航者。我們的願景是讓每個孩子都能掌握AI技術，用創意解決真實世界的問題，共同塑造更美好的未來。',
            about_founders_title: '創辦人與團隊介紹',
            about_founders_text: '我們的團隊由一群熱愛AI教育的專家、資深工程師和教育工作者組成，他們不僅擁有深厚的專業知識，更富有豐富的教學經驗。我們相信，透過專業且富有激情的引導，能夠點燃學生對AI的興趣。',
            about_history_future_title: '發展歷程與未來計畫',
            about_history_future_text: '自成立以來，NovaMind已成功舉辦多期課程，見證了無數孩子的成長與蛻變。未來，我們將持續更新課程內容，引進最新AI技術，並計畫拓展更多教學點，讓AI教育惠及更多學子。',
            about_roles_title: '合作角色說明',
            about_roles_text_aipextec: '虎珀探索科技：作為我們的母公司或主要技術支持夥伴，提供堅實的技術後盾與創新資源，確保教學內容與業界最新技術同步。',
            about_roles_text_paul: 'Paul (角色說明)：在AI教育領域具有豐富經驗，負責課程設計與教學指導，是學生學習路徑的重要引路人。',
            about_roles_text_pan: 'Pan (角色說明)：專精於AI應用與創新實踐，負責實驗室項目開發與師資培訓，確保教學品質與實用性。',
            // 兒童AI課程
            kids_ai_title: '兒童AI課程 / Kids AI Programs',
            kids_stage_classification_title: '課程階段分類',
            kids_stage_text_beginner: '初階：AI啟蒙與基礎認知 (適合初學者)',
            kids_stage_text_intermediate: '中階：AI工具應用與簡單專案 (適合有基礎者)',
            kids_stage_text_advanced: '高階：AI專題研究與進階程式設計 (適合進階學習者)',
            kids_activities_workshops_title: '體驗活動與主題式工作坊',
            kids_activities_workshops_text: '定期舉辦互動性強的AI體驗營和主題式工作坊，讓孩子們在遊戲中學習AI，激發創造力。',
            kids_full_courses_fees_title: '完整課程內容與收費方案',
            kids_full_courses_fees_text: '提供多樣化的課程組合，涵蓋從基礎認知到進階應用的全方位內容。詳情請洽詢，我們將提供最適合您孩子的學習方案。',
            kids_achievements_title: '學生學習成果展示',
            kids_achievements_text: '瀏覽我們學生們的創意作品，包括AI繪圖、AI故事創作、智能機器人項目等，見證他們的學習成就。',
            kids_faq_guide_title: '常見問題與家長指南',
            kids_faq_guide_text: '我們整理了家長們常問的問題，並提供選課、學習進度追蹤和家庭輔導的建議。',
            // 企業AI培訓
            corporate_ai_title: '企業AI培訓 / Corporate AI Training',
            corporate_core_philosophy_title: '企業培訓核心理念與特色',
            corporate_core_philosophy_text: 'NovaMind為企業提供客製化的AI培訓方案，旨在提升員工的AI素養與實戰能力，助力企業實現數位轉型與業務創新。我們的課程注重實用性和前瞻性。',
            corporate_modules_topics_title: '課程模組與主題範例',
            corporate_modules_topics_text: '涵蓋AI基礎知識、機器學習、深度學習、自然語言處理、電腦視覺、AI倫理與治理等。可根據企業需求靈活組合。',
            corporate_training_methods_title: '培訓方式',
            corporate_training_methods_text_physical: '實體培訓：在智能教室或企業內部進行，提供沉浸式學習體驗。',
            corporate_training_methods_text_online: '線上培訓：靈活彈性的遠程學習，方便員工隨時隨地學習。',
            corporate_training_methods_text_hybrid: '混成培訓：結合線上線下優勢，實現最佳學習效果。',
            corporate_faculty_equipment_title: '師資與設備支援',
            corporate_faculty_equipment_text: '我們擁有來自業界和學術界的頂尖AI專家團隊。並提供專業AI實驗室和高速網絡，確保培訓品質。',
            corporate_customization_process_title: '洽談與客製化合作流程',
            corporate_customization_process_text: '從需求評估、方案設計、課程實施到效果評估，我們提供全程專業服務，確保培訓方案完美契合您的企業目標。',
            // 教學實驗室
            lab_title: '教學實驗室 / AI Teaching Lab',
            lab_venue_equipment_title: '教室場地規劃與設備展示',
            lab_venue_equipment_text: '我們的智能教室配備互動式白板、高性能電腦和各種AI開發工具。專業AI實驗室提供機器人、物聯網裝置和感測器等，供學生進行實際專案開發。',
            lab_videos_cases_title: '教學影片與案例分享',
            lab_videos_cases_text: '觀看我們的教學影片，了解課程內容和教學方法。同時分享學生和企業在實驗室中完成的成功案例。',
            lab_materials_download_title: '教材樣本與下載區',
            lab_materials_download_text: '提供部分課程的教材樣本和相關學習資源供下載，幫助您初步了解我們的教學品質。',
            lab_visit_cooperation_title: '開放參訪或合作方式介紹',
            lab_visit_cooperation_text: '我們歡迎學校、企業或個人預約參訪教學實驗室，親身體驗先進設備。同時也開放場地租賃和項目合作。',
            // 師資與合作
            team_title: '師資與合作 / Team & Partners',
            team_faculty_intro_title: '講師團隊介紹',
            team_faculty_intro_text: '我們的講師團隊由來自AI領域的資深工程師、數據科學家、大學教授和教育專家組成。他們不僅具備深厚的理論知識，更擁有豐富的實戰經驗和教學熱情，致力於將複雜的AI概念以淺顯易懂的方式傳授給學生。',
            team_faculty_expertise_background: '專長與背景：涵蓋機器學習、深度學習、自然語言處理、電腦視覺、數據分析、AI倫理等多元領域。',
            team_training_recruitment_title: '教師培訓與招募機制',
            team_training_recruitment_text: 'NovaMind擁有一套嚴謹的教師培訓體系，確保每位講師都具備卓越的教學能力和最新的AI知識。我們持續招募對AI教育充滿熱情、具備專業素養的業界精英加入團隊。',
            team_partnerships_title: '合作夥伴機制',
            team_partnerships_text_materials: '教材夥伴：與頂尖教育出版商和AI內容提供商合作，共同開發創新教材，確保課程內容的前瞻性和豐富性。',
            team_partnerships_text_franchise: '加盟據點：開放對AI教育有共同願景的教育機構或個人加盟，共同推廣NovaMind的AI課程，擴大AI教育的影響力。',
            // 最新消息
            news_title: '最新消息 / News & Events',
            news_announcements_title: '課程開班公告',
            news_announcements_text: '第一期AI初階探索課程將於9月1日正式開課，現正開放報名！',
            news_media_exposure_title: '品牌媒體曝光',
            news_media_exposure_text: 'NovaMind榮獲「年度最佳AI教育品牌」獎項，相關報導已刊登於各大科技媒體。',
            news_events_preview_title: '活動回顧與預告',
            news_events_preview_text: '瀏覽我們過往成功舉辦的AI工作坊精彩瞬間，並預告即將到來的AI創意大賽。',
            // 聯絡我們
            contact_title: '聯絡我們 / Contact',
            contact_form_intro: '請填寫以下表格，我們將盡快與您聯繫。',
            contact_form_name: '姓名',
            contact_form_email: '電子郵件',
            contact_form_phone: '電話',
            contact_form_inquiry_type: '諮詢類型',
            contact_form_inquiry_type_kids: '兒童AI課程',
            contact_form_inquiry_type_corporate: '企業AI培訓',
            contact_form_inquiry_type_other: '其他',
            contact_form_message: '您的訊息',
            contact_form_submit: '送出',
            contact_info_title: '聯絡方式',
            contact_info_phone: '電話：',
            contact_info_email: '電子郵件：',
            contact_info_address: '地址：',
            contact_cooperation_title: '合作洽談或提案提交',
            contact_cooperation_text: '如果您有任何合作意向或創新提案，歡迎隨時與我們聯繫。',
            contact_cooperation_link: '提交合作提案',
            footer_copyright: '© 2025 NovaMind 星智探索學院. All Rights Reserved.',
            footer_powered_by: '由 虎珀探索科技 提供'
        },
        en: {
            home: 'Home',
            about: 'About Us',
            kids: 'Kids AI Programs',
            corporate: 'Corporate AI Training',
            lab: 'AI Teaching Lab',
            team: 'Team & Partners',
            news: 'News & Events',
            contact: 'Contact',
            // Home Page
            home_hero_title: 'Welcome to NovaMind Academy',
            home_hero_text: 'Cultivating the next generation of AI innovators and operators, deeply understanding AI technology and applying it to solve real-world problems.',
            home_cta_button: 'Explore Courses',
            home_courses_title: 'Our Core Programs',
            home_course_intro_title1: 'AI Introductory Exploration Course',
            home_course_intro_text1: 'Understand the world of AI, interactive experiences, and learn basic AI tools like ChatGPT and DALL·E.',
            home_course_intro_title2: 'Advanced Application: Birth of a Superstar!',
            home_course_intro_text2: 'Use ChatGPT for story creation, DALL·E for AI illustration, and combine Canva AI and Storybird for book printing.',
            home_news_title: 'Latest News & Events',
            home_news_text: 'Stay updated with our latest course openings, workshops, and brand media exposure.',
            home_achievements_title: 'Featured Learning Outcomes',
            home_achievements_text: 'Explore outstanding projects and creative works from our students on their AI learning journey.',
            // About Us Page
            about_us_title: 'About Us',
            about_mission_vision_title: 'Brand Mission & Vision',
            about_mission_vision_text: 'NovaMind Academy is dedicated to inspiring children\'s potential through innovative AI education, cultivating them to be future AI leaders. Our vision is for every child to master AI technology, solve real-world problems with creativity, and collectively shape a better future.',
            about_founders_title: 'Founders & Team Introduction',
            about_founders_text: 'Our team comprises experts, senior engineers, and educators passionate about AI education. They possess profound professional knowledge and rich teaching experience. We believe that professional and passionate guidance can ignite students\' interest in AI.',
            about_history_future_title: 'Development History & Future Plans',
            about_history_future_text: 'Since its establishment, NovaMind has successfully conducted multiple courses, witnessing the growth and transformation of countless children. In the future, we will continuously update course content, introduce the latest AI technologies, and plan to expand to more teaching locations, making AI education accessible to more students.',
            about_roles_title: 'Role Descriptions for Collaboration',
            about_roles_text_aipextec: 'AIPEXTEC (虎珀探索科技): As our parent company or main technical support partner, providing solid technical backing and innovative resources to ensure teaching content is aligned with the latest industry technologies.',
            about_roles_text_paul: 'Paul (Role Description): Possesses extensive experience in AI education, responsible for curriculum design and teaching guidance, acting as a crucial guide in students\' learning paths.',
            about_roles_text_pan: 'Pan (Role Description): Specializes in AI application and innovation practice, responsible for laboratory project development and teacher training, ensuring teaching quality and practicality.',
            // Kids AI Programs Page
            kids_ai_title: 'Kids AI Programs',
            kids_stage_classification_title: 'Course Stage Classification',
            kids_stage_text_beginner: 'Beginner: AI Enlightenment & Basic Cognition (suitable for beginners)',
            kids_stage_text_intermediate: 'Intermediate: AI Tool Application & Simple Projects (suitable for those with basics)',
            kids_stage_text_advanced: 'Advanced: AI Project Research & Advanced Programming (suitable for advanced learners)',
            kids_activities_workshops_title: 'Experiential Activities & Themed Workshops',
            kids_activities_workshops_text: 'Regularly organize highly interactive AI camps and themed workshops, allowing children to learn AI through play and stimulate creativity.',
            kids_full_courses_fees_title: 'Complete Course Content & Fee Plans',
            kids_full_courses_fees_text: 'Offer diverse course combinations covering comprehensive content from basic cognition to advanced applications. Please inquire for details, and we will provide the most suitable learning plan for your child.',
            kids_achievements_title: 'Student Learning Outcome Display',
            kids_achievements_text: 'Browse the creative works of our students, including AI illustrations, AI story creation, smart robot projects, etc., witnessing their learning achievements.',
            kids_faq_guide_title: 'FAQ & Parent Guide',
            kids_faq_guide_text: 'We have compiled frequently asked questions from parents and provide advice on course selection, progress tracking, and home tutoring.',
            // Corporate AI Training Page
            corporate_ai_title: 'Corporate AI Training',
            corporate_core_philosophy_title: 'Core Philosophy & Features of Corporate Training',
            corporate_core_philosophy_text: 'NovaMind provides customized AI training solutions for enterprises, aiming to enhance employees\' AI literacy and practical skills, assisting enterprises in digital transformation and business innovation. Our courses focus on practicality and foresight.',
            corporate_modules_topics_title: 'Course Modules & Topic Examples',
            corporate_modules_topics_text: 'Covers AI basics, machine learning, deep learning, natural language processing, computer vision, AI ethics and governance. Flexible combinations are available based on enterprise needs.',
            corporate_training_methods_title: 'Training Methods',
            corporate_training_methods_text_physical: 'Physical Training: Conducted in smart classrooms or within the enterprise, providing an immersive learning experience.',
            corporate_training_methods_text_online: 'Online Training: Flexible remote learning, convenient for employees to learn anytime, anywhere.',
            corporate_training_methods_text_hybrid: 'Hybrid Training: Combines the advantages of online and offline, achieving optimal learning results.',
            corporate_faculty_equipment_title: 'Faculty & Equipment Support',
            corporate_faculty_equipment_text: 'We have a team of top AI experts from industry and academia. We also provide professional AI laboratories and high-speed networks to ensure training quality.',
            corporate_customization_process_title: 'Consultation & Customization Collaboration Process',
            corporate_customization_process_text: 'From needs assessment, solution design, course implementation to effect evaluation, we provide full professional services, ensuring the training program perfectly aligns with your business goals.',
            // AI Teaching Lab Page
            lab_title: 'AI Teaching Lab',
            lab_venue_equipment_title: 'Classroom Venue Planning & Equipment Display',
            lab_venue_equipment_text: 'Our smart classrooms are equipped with interactive whiteboards, high-performance computers, and various AI development tools. The professional AI laboratory provides robots, IoT devices, and sensors for students to conduct actual project development.',
            lab_videos_cases_title: 'Teaching Videos & Case Sharing',
            lab_videos_cases_text: 'Watch our teaching videos to understand course content and teaching methods. Also share successful cases completed by students and enterprises in the lab.',
            lab_materials_download_title: 'Teaching Material Samples & Download Area',
            lab_materials_download_text: 'Provide samples of some courses and related learning resources for download, helping you to initially understand our teaching quality.',
            lab_visit_cooperation_title: 'Open Visits or Cooperation Methods Introduction',
            lab_visit_cooperation_text: 'We welcome schools, enterprises, or individuals to book visits to the AI Teaching Lab to personally experience advanced equipment. We also offer venue rental and project cooperation.',
            // Team & Partners Page
            team_title: 'Team & Partners',
            team_faculty_intro_title: 'Instructor Team Introduction',
            team_faculty_intro_text: 'Our instructor team consists of senior engineers, data scientists, university professors, and education experts from the AI field. They possess not only profound theoretical knowledge but also rich practical experience and teaching enthusiasm, dedicated to imparting complex AI concepts in an easy-to-understand manner.',
            team_faculty_expertise_background: 'Expertise & Background: Covers diverse fields such as machine learning, deep learning, natural language processing, computer vision, data analysis, and AI ethics.',
            team_training_recruitment_title: 'Teacher Training & Recruitment Mechanism',
            team_training_recruitment_text: 'NovaMind has a rigorous teacher training system, ensuring every instructor possesses excellent teaching abilities and the latest AI knowledge. We continuously recruit industry elites who are passionate about AI education and possess professional qualities to join our team.',
            team_partnerships_title: 'Partnership Mechanism',
            team_partnerships_text_materials: 'Curriculum Partners: Collaborating with leading educational publishers and AI content providers to jointly develop innovative teaching materials, ensuring the forward-looking and richness of course content.',
            team_partnerships_text_franchise: 'Franchise Locations: Open to educational institutions or individuals with a shared vision for AI education to join us, jointly promoting NovaMind\'s AI courses and expanding the influence of AI education.',
            // News & Events Page
            news_title: 'News & Events',
            news_announcements_title: 'Course Opening Announcements',
            news_announcements_text: 'The first phase of the AI Introductory Exploration Course will officially start on September 1st, and registration is now open!',
            news_media_exposure_title: 'Brand Media Exposure',
            news_media_exposure_text: 'NovaMind awarded "Best AI Education Brand of the Year," with related reports published in major tech media.',
            news_events_preview_title: 'Event Recaps & Previews',
            news_events_preview_text: 'Browse highlights from our past successful AI workshops and preview the upcoming AI Creative Competition.',
            // Contact Page
            contact_title: 'Contact Us',
            contact_form_intro: 'Please fill out the form below, and we will contact you as soon as possible.',
            contact_form_name: 'Name',
            contact_form_email: 'Email',
            contact_form_phone: 'Phone',
            contact_form_inquiry_type: 'Inquiry Type',
            contact_form_inquiry_type_kids: 'Kids AI Programs',
            contact_form_inquiry_type_corporate: 'Corporate AI Training',
            contact_form_inquiry_type_other: 'Other',
            contact_form_message: 'Your Message',
            contact_form_submit: 'Submit',
            contact_info_title: 'Contact Information',
            contact_info_phone: 'Phone:',
            contact_info_email: 'Email:',
            contact_info_address: 'Address:',
            contact_cooperation_title: 'Partnership or Proposal Submission',
            contact_cooperation_text: 'If you have any partnership intentions or innovative proposals, please feel free to contact us.',
            contact_cooperation_link: 'Submit Partnership Proposal',
            footer_copyright: '© 2025 NovaMind Academy. All Rights Reserved.',
            footer_powered_by: 'Powered by AIPEXTEC'
        }
    };

    // 獲取語言切換按鈕
    const langButtons = document.querySelectorAll('.language-toggle button');

    // 根據瀏覽器或本地存儲設置初始語言
    let currentLang = localStorage.getItem('novamindLang') || 'zh'; // 預設為中文

    // 初始化頁面文本
    applyLanguage(currentLang);
    updateLanguageButtons(currentLang);
    addSectionFadeInEffect(); // 添加滾動漸顯效果

    // 添加語言切換事件監聽器
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const newLang = button.dataset.lang; // 從 data-lang 屬性獲取語言
            if (newLang) {
                switchLanguage(newLang);
            }
        });
    });

    function switchLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('novamindLang', lang); // 儲存用戶選擇的語言
        applyLanguage(lang);
        updateLanguageButtons(lang);
    }

    function applyLanguage(lang) {
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            } else {
                // 如果翻譯鍵不存在，可以考慮回退到預設語言或清空
                // 例如：element.textContent = translations['zh'][key] || '';
                console.warn(`Missing translation for key: ${key} in language: ${lang}`);
            }
        });
        // 額外處理 title，因為 title 通常沒有 data-lang-key
        const pageTitle = document.querySelector('title');
        if (pageTitle) {
            const titleKey = pageTitle.getAttribute('data-title-key'); // 假設 title 也用 data-title-key
            if (titleKey && translations[lang] && translations[lang][titleKey]) {
                pageTitle.textContent = translations[lang][titleKey];
            } else {
                // 如果 title 沒有 data-title-key，可以根據當前頁面URL來設置
                // 這是個簡化邏輯，您可以根據實際情況調整
                const path = window.location.pathname.split('/').pop();
                if (path === 'index.html' || path === '') {
                    pageTitle.textContent = lang === 'zh' ? '首頁 | 星智探索學院' : 'Home | NovaMind Academy';
                } else if (path === 'about.html') {
                    pageTitle.textContent = lang === 'zh' ? '認識我們 | 星智探索學院' : 'About Us | NovaMind Academy';
                } else if (path === 'kids.html') {
                    pageTitle.textContent = lang === 'zh' ? '兒童AI課程 | 星智探索學院' : 'Kids AI Programs | NovaMind Academy';
                } else if (path === 'corporate.html') {
                    pageTitle.textContent = lang === 'zh' ? '企業AI培訓 | 星智探索學院' : 'Corporate AI Training | NovaMind Academy';
                } else if (path === 'lab.html') {
                    pageTitle.textContent = lang === 'zh' ? '教學實驗室 | 星智探索學院' : 'AI Teaching Lab | NovaMind Academy';
                } else if (path === 'team.html') {
                    pageTitle.textContent = lang === 'zh' ? '師資與合作 | 星智探索學院' : 'Team & Partners | NovaMind Academy';
                } else if (path === 'news.html') {
                    pageTitle.textContent = lang === 'zh' ? '最新消息 | 星智探索學院' : 'News & Events | NovaMind Academy';
                } else if (path === 'contact.html') {
                    pageTitle.textContent = lang === 'zh' ? '聯絡我們 | 星智探索學院' : 'Contact Us | NovaMind Academy';
                }
            }
        }
    }

    function updateLanguageButtons(activeLang) {
        langButtons.forEach(button => {
            if (button.dataset.lang === activeLang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    // 滾動漸顯效果
    function addSectionFadeInEffect() {
        const sections = document.querySelectorAll('section');
        const observerOptions = {
            root: null, // 視窗為根元素
            rootMargin: '0px',
            threshold: 0.1 // 10% 可見時觸發
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target); // 一旦觸發，停止觀察
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // 當語言切換按鈕點擊時，更新 data-lang 屬性
    document.querySelectorAll('.language-toggle button').forEach(button => {
        if (button.textContent === '中文') {
            button.setAttribute('data-lang', 'zh');
        } else if (button.textContent === 'EN') {
            button.setAttribute('data-lang', 'en');
        }
    });
});