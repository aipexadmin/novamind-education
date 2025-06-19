// NovaMind JS：中英文切換為單一按鈕，支援所有頁面

document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    zh: {
      // 共用導航與頁尾
      home: '首頁', about: '認識我們', kids: '兒童AI課程', corporate: '企業AI培訓',
      lab: '教學實驗室', team: '師資與合作', news: '最新消息', contact: '聯絡我們',
      footer_powered_by: '由 虎珀探索科技 提供',
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
      about_founders_text: '由教育專家與科技實踐者組成，致力推動AI普及教育。',
      about_history_future_title: '發展歷程與未來藍圖',
      about_history_future_text: '從課程實驗到品牌擴展，邁向國際教育舞台。',
      about_roles_title: '核心角色',
      about_roles_text_aipextec: '技術支援：虎珀探索科技',
      about_roles_text_paul: '執行統籌：Pan ',
      about_roles_text_pan: '課程策畫：Paul',

      // 兒童課程 kids.html
      kids_ai_title: '兒童AI課程',
      kids_ai_intro_text: '為6-12歲學生設計，啟發創意與AI素養。',
      kids_stage_classification_title: '課程階段分類',
      kids_stage_text_beginner: '初階探索',
      kids_stage_beginner_details: '從互動遊戲開始，建立AI初步理解。',
      kids_stage_beginner_item1: '認識AI概念',
      kids_stage_beginner_item2: '體驗語音與影像生成',
      kids_stage_beginner_item3: '操作ChatGPT繪圖',
      kids_stage_text_intermediate: '進階應用',
      kids_stage_intermediate_details: '結合專題任務，培養創作與分析力。',
      kids_stage_intermediate_item1: '製作繪本',
      kids_stage_intermediate_item2: '設計簡報動畫',
      kids_stage_intermediate_item3: '進行主題寫作',
      kids_stage_text_advanced: '專案實戰',
      kids_stage_advanced_details: '跨領域整合，導入團隊合作與提案展示。',
      kids_stage_advanced_item1: 'AI遊戲設計',
      kids_stage_advanced_item2: '創作數位作品集',
      kids_stage_advanced_item3: '提案與發表演練',
      kids_activities_workshops_title: '工作坊與活動',
      kids_activities_workshops_text: '定期舉辦AI體驗營、創作比賽與發表會。',
      kids_workshop1_title: 'AI互動體驗營',
      kids_workshop1_desc: '結合遊戲與任務，引導學生認識AI。',
      kids_workshop2_title: '創作實戰工作坊',
      kids_workshop2_desc: '小組合作完成一份AI專題作品。',
      kids_achievements_title: '學生作品與成果',
      kids_achievements_text: '來自課堂與活動的精彩創作展示。',
      kids_work1_title: 'AI生成插畫',
      kids_work1_desc: '學生以AI輔助設計角色與場景。',
      kids_work2_title: '故事與繪本設計',
      kids_work2_desc: '整合文本與圖像創作繪本作品。',
      kids_work3_title: '數位互動專案',
      kids_work3_desc: '程式+AI+視覺整合成實際應用。',
      kids_faq_title: '常見問題',
      kids_faq1_question: '課程是否需要基礎程式能力？',
      kids_faq1_answer: '不需要，從零開始引導。',
      kids_faq2_question: '是否有英文教學班？',
      kids_faq2_answer: '有，並根據學生程度進行編班。',
      kids_faq3_question: '是否提供證書與作品集？',
      kids_faq3_answer: '完成階段可獲認證與導出作品。',
      kids_contact_button: '聯繫我們了解詳情',

      // 企業合作 corporate.html
      corporate_ai_title: '企業AI培訓方案',
      corporate_ai_intro_text: '為企業打造實用導向的AI人才培訓內容。',
      corporate_core_philosophy_title: '核心理念',
      corporate_core_philosophy_text: '以實務導向、跨部門整合與落地推行為主軸。',
      corporate_philosophy1_title: '模組化設計',
      corporate_philosophy1_text: '依企業需求客製不同主題內容。',
      corporate_philosophy2_title: '應用導向',
      corporate_philosophy2_text: '以實務應用情境為出發點設計教案。',
      corporate_philosophy3_title: '持續成長',
      corporate_philosophy3_text: '課後提供延伸資源與內部教練機制。',
      corporate_modules_topics_title: '模組設計與主題',
      corporate_modules_topics_text: '從AI認知到應用實作，提供彈性組合。',
      corporate_module1_title: 'AI入門與概念建構',
      corporate_module1_item1: 'AI發展簡史與應用地圖',
      corporate_module1_item2: '生成式AI工具介紹',
      corporate_module1_item3: 'Prompt撰寫與溝通技巧',
      corporate_module2_title: '數據與影像處理應用',
      corporate_module2_item1: 'AI簡報與報表生成',
      corporate_module2_item2: '影像分類與辨識實作',
      corporate_module2_item3: '資料自動化處理案例',
      corporate_module3_title: '產業情境應用',
      corporate_module3_item1: '製造業AI流程',
      corporate_module3_item2: '客服與人資自動化',
      corporate_module3_item3: '行銷內容生成',
      corporate_training_methods_title: '培訓方式',
      corporate_training_methods_text_physical: '實體課程',
      corporate_training_physical_details: '到場授課，適合工作坊與互動任務設計。',
      corporate_training_methods_text_online: '線上課程',
      corporate_training_online_details: '遠距連線互動教學與線上學習平台資源。',
      corporate_training_methods_text_hybrid: '混合課程',
      corporate_training_hybrid_details: '實體結合線上，兼具彈性與實作效益。',
      corporate_case_studies_title: '企業案例',
      corporate_case_studies_text: '來自不同行業的AI轉型實踐故事。',
      corporate_case1_title: '製造業資料自動化流程',
      corporate_case1_desc: '導入後成功降低資料處理成本30%。',
      corporate_case2_title: '內部簡報自動產出',
      corporate_case2_desc: '協助主管團隊快速彙整部門報告。',
      corporate_contact_button: '聯繫我們安排課程',

      // 師資與合作 team.html
      team_title: '團隊與合作夥伴',
      team_intro_text: '集結教育專家與業界夥伴，建構AI教學生態。',
      team_faculty_title: '師資群',
      team_faculty_intro_text: '具備豐富教學與實務經驗的跨領域導師。',
      team_faculty1_name: 'XXX', team_faculty1_title: '課程總監',
      team_faculty1_bio: '擅長教材設計與跨齡教學。',
      team_faculty1_expertise: '專長：生成式AI、創意寫作、圖像設計',
      team_faculty2_name: 'XXX', team_faculty2_title: '執行教學長',
      team_faculty2_bio: '具備跨界整合與實作帶領經驗。',
      team_faculty2_expertise: '專長：AI整合應用、簡報動畫、兒童引導',
      team_faculty3_name: 'XXX', team_faculty3_title: '品牌創意師',
      team_faculty3_bio: '擅長品牌視覺與風格建構。',
      team_faculty3_expertise: '專長：AI視覺設計、教育品牌包裝',
      team_partners_title: '合作夥伴',
      team_partners_intro_text: '我們與科技公司、設計師、學校單位共同發展。',
      team_partner1_name: 'AIPEXTEC 虎珀探索科技股份有限公司', team_partner1_desc: '技術與系統整合支援',
      team_partner2_name: 'XXXXXX', team_partner2_desc: '國際策略合作與拓展',
      team_partner3_name: '教師聯盟', team_partner3_desc: '課程共創與教案共享',
      team_collaboration_title: '合作方式',
      team_collab1_title: '課程共創', team_collab1_desc: '與教學單位或教育家共同設計主題內容。',
      team_collab2_title: '資源共享', team_collab2_desc: '開放模組內容與平台合作資源。',
      team_contact_button: '聯絡我們展開合作',

      // 教學實驗室 lab.html
      lab_title: 'AI教學實驗室',
      lab_intro_text: '結合教學科技與創新空間，啟發學習動能。',
      lab_venue_equipment_title: '空間與設備',
      lab_venue_equipment_text: '配備智慧教室、互動白板與生成式AI展示牆。',
      lab_equipment1_title: '互動教學白板',
      lab_equipment1_desc: '支援即時協作與AI筆跡辨識。',
      lab_equipment2_title: 'AI體驗站',
      lab_equipment2_desc: '提供語音、影像與文字AI工具體驗。',
      lab_equipment3_title: '行動錄製系統',
      lab_equipment3_desc: '自動化記錄學習歷程與分享成果。',
      lab_videos_cases_title: '實錄影片與案例',
      lab_videos_cases_text: '展示實際上課畫面與學生互動成果。',
      lab_video1_title: '創意AI故事生成',
      lab_video1_desc: '學生分組合作寫作與語音輸出。',
      lab_video2_title: 'AI動畫課堂實錄',
      lab_video2_desc: '整合角色設計與場景生成。',
      lab_materials_title: '教材下載與資源',
      lab_materials_text: '提供教師與學生可使用的公開教材與模組。',
      lab_material1_title: 'AI故事模組',
      lab_material1_desc: '引導學生創作屬於自己的AI故事。',
      lab_material2_title: '視覺創作工具包',
      lab_material2_desc: '教導學生運用DALL·E進行圖像設計。',
      lab_download_button: '下載教材',
      lab_visit_title: '參觀與合作申請',
      lab_visit_text: '歡迎學校與教育團體實地參觀與交流。',
      lab_visit_option1: '學校參訪',
      lab_visit_option1_desc: '適合班級／教師群體了解AI教學實作。',
      lab_visit_option2: '教師共備',
      lab_visit_option2_desc: '與團隊進行教材共創與教案交流。',
      lab_contact_button: '聯繫我們申請參觀',

      // 最新消息 news.html
      news_title: '最新消息與活動',
      news_intro_text: '掌握第一手品牌、課程、活動與媒體曝光動態。',
      news_announcements_title: '公告資訊',
      news_announcement1_title: '2025暑期營報名開跑',
      news_announcement1_text: '兒童AI夏令營，6/1 起接受報名，限額40人。',
      news_announcement2_title: '網站改版完成',
      news_announcement2_text: '全新雙語介面與手機版優化，歡迎瀏覽。',
      read_more: '閱讀更多',
      news_media_title: '媒體報導',
      news_media1_title: 'NovaMind 登上《親子天下》',
      news_media1_text: '談AI素養教育的重要性與課程創新。',
      news_media2_title: '教育部肯定本院創新模式',
      news_media2_text: '列為生成式AI教育推動示範點。',
      news_events_title: '近期活動',
      event1_title: 'AI故事創作比賽',
      event1_time: '時間：2025年7月10日',
      event1_location: '地點：台中',
      event2_title: '家長體驗日',
      event2_time: '時間：2025年8月3日',
      event2_location: '地點：星智實驗教室',
      register_now: '立即報名',

      // 聯絡我們 contact.html
      contact_title: '聯絡我們',
      contact_intro_text: '有任何課程或合作需求，歡迎與我們聯繫。',
      contact_form_title: '聯絡表單',
      contact_form_name: '姓名',
      contact_form_email: '電子信箱',
      contact_form_phone: '聯絡電話',
      contact_form_inquiry_type: '諮詢類別',
      contact_form_select_option: '請選擇...',
      contact_form_inquiry_type_kids: '兒童課程',
      contact_form_inquiry_type_corporate: '企業合作',
      contact_form_inquiry_type_other: '其他',
      contact_form_message: '您的留言',
      contact_form_submit: '送出表單',
      contact_info_title: '聯絡資訊',
      contact_phone_title: '電話聯絡',
      contact_phone_hours: '服務時間：週一至週五 9:00–18:00',
      contact_email_title: '電子信箱',
      contact_address_title: '實體地址',
      contact_address_line1: '台北市信義區科技路88號',
      contact_address_line2: '5樓 NovaMind 辦公室',
      contact_social_title: '社群平台',

    },

    en: {
      // Common Navigation & Footer
      home: 'Home',
      about: 'About Us',
      kids: 'Kids AI Programs',
      corporate: 'Corporate AI Training',
      lab: 'AI Teaching Lab',
      team: 'Team & Partners',
      news: 'News & Events',
      contact: 'Contact Us',
      footer_powered_by: 'Powered by AIPEXTEC',
      footer_copyright: '© 2025 NovaMind AI Academy. All Rights Reserved.',

      // Homepage index.html
      home_hero_title: 'Welcome to NovaMind AI Academy',
      home_hero_text: 'Cultivating the next generation of AI innovators and operators, delving into AI technology and applying it to solve real-world problems.',
      home_cta_button: 'Learn More About Courses',
      home_courses_title: 'Our Core Programs',
      home_achievements_title: 'Featured Student Achievements',
      home_news_title: 'Latest News & Events',
      home_news_text: 'Stay updated on our latest course openings, workshops, and media coverage.',

      // About Us about.html
      about_us_title: 'About Us',
      about_mission_vision_title: 'Mission & Vision',
      about_mission_vision_text: 'We are committed to nurturing the next generation with AI literacy and creativity.',
      about_founders_title: 'Founding Team',
      about_founders_text: 'Composed of education experts and technology practitioners, dedicated to promoting AI popular education.',
      about_history_future_title: 'Development History & Future Blueprint',
      about_history_future_text: 'From curriculum experimentation to brand expansion, moving towards the international education stage.',
      about_roles_title: 'Core Roles',
      about_roles_text_aipextec: 'Technical Support: AIPEXTEC',
      about_roles_text_paul: 'Executive Coordinator: Teacher Pan',
      about_roles_text_pan: 'Curriculum Planning: Teacher Paul',

      // Kids Courses kids.html
      kids_ai_title: 'Kids AI Programs',
      kids_ai_intro_text: 'Designed for students aged 6-12, inspiring creativity and AI literacy.',
      kids_stage_classification_title: 'Course Stage Classification',
      kids_stage_text_beginner: 'Beginner Exploration',
      kids_stage_beginner_details: 'Start with interactive games to build initial AI understanding.',
      kids_stage_beginner_item1: 'Understand AI Concepts',
      kids_stage_beginner_item2: 'Experience Voice & Image Generation',
      kids_stage_beginner_item3: 'Operate ChatGPT for Drawing',
      kids_stage_text_intermediate: 'Intermediate Application',
      kids_stage_intermediate_details: 'Combine with project tasks to cultivate creativity and analytical skills.',
      kids_stage_intermediate_item1: 'Create Picture Books',
      kids_stage_intermediate_item2: 'Design Presentation Animations',
      kids_stage_intermediate_item3: 'Conduct Thematic Writing',
      kids_stage_text_advanced: 'Project Practice',
      kids_stage_advanced_details: 'Cross-disciplinary integration, including teamwork and presentation display.',
      kids_stage_advanced_item1: 'AI Game Design',
      kids_stage_advanced_item2: 'Create Digital Portfolios',
      kids_stage_advanced_item3: 'Pitching & Presentation Practice',
      kids_activities_workshops_title: 'Workshops & Activities',
      kids_activities_workshops_text: 'Regularly host AI experience camps, creative competitions, and presentations.',
      kids_workshop1_title: 'AI Interactive Experience Camp',
      kids_workshop1_desc: 'Guides students to understand AI through games and tasks.',
      kids_workshop2_title: 'Creative Practice Workshop',
      kids_workshop2_desc: 'Students work in groups to complete an AI project.',
      kids_achievements_title: 'Student Works & Achievements',
      kids_achievements_text: 'Showcasing exciting creations from classes and activities.',
      kids_work1_title: 'AI Generated Illustrations',
      kids_work1_desc: 'Students use AI to assist in designing characters and scenes.',
      kids_work2_title: 'Story & Picture Book Design',
      kids_work2_desc: 'Integrate text and images to create picture book works.',
      kids_work3_title: 'Digital Interactive Projects',
      kids_work3_desc: 'Combine programming, AI, and visuals into practical applications.',
      kids_faq_title: 'Frequently Asked Questions',
      kids_faq1_question: 'Is prior programming knowledge required for the courses?',
      kids_faq1_answer: 'No, we guide students from scratch.',
      kids_faq2_question: 'Are there English language classes available?',
      kids_faq2_answer: 'Yes, and students are grouped by proficiency level.',
      kids_faq3_question: 'Are certificates and portfolios provided?',
      kids_faq3_answer: 'Completion of stages grants certification and allows portfolio export.',
      kids_contact_button: 'Contact Us for Details',

      // Corporate Training corporate.html
      corporate_ai_title: 'Corporate AI Training Programs',
      corporate_ai_intro_text: 'Tailored practical AI talent training for businesses.',
      corporate_core_philosophy_title: 'Core Philosophy',
      corporate_core_philosophy_text: 'Focus on practical application, cross-departmental integration, and implementation.',
      corporate_philosophy1_title: 'Modular Design',
      corporate_philosophy1_text: 'Customized content themes based on corporate needs.',
      corporate_philosophy2_title: 'Application-Oriented',
      corporate_philosophy2_text: 'Curricula designed around practical application scenarios.',
      corporate_philosophy3_title: 'Continuous Growth',
      corporate_philosophy3_text: 'Post-course extended resources and internal coaching mechanisms.',
      corporate_modules_topics_title: 'Module Design & Topics',
      corporate_modules_topics_text: 'Flexible combinations from AI cognition to practical application.',
      corporate_module1_title: 'AI Introduction & Concept Building',
      corporate_module1_item1: 'Brief History of AI Development & Application Map',
      corporate_module1_item2: 'Introduction to Generative AI Tools',
      corporate_module1_item3: 'Prompt Writing & Communication Skills',
      corporate_module2_title: 'Data & Image Processing Applications',
      corporate_module2_item1: 'AI Presentation & Report Generation',
      corporate_module2_item2: 'Image Classification & Recognition Practice',
      corporate_module2_item3: 'Automated Data Processing Cases',
      corporate_module3_title: 'Industry Scenario Applications',
      corporate_module3_item1: 'AI Processes in Manufacturing',
      corporate_module3_item2: 'Customer Service & HR Automation',
      corporate_module3_item3: 'Marketing Content Generation',
      corporate_training_methods_title: 'Training Methods',
      corporate_training_methods_text_physical: 'Physical Courses',
      corporate_training_physical_details: 'On-site instruction, suitable for workshops and interactive tasks.',
      corporate_training_methods_text_online: 'Online Courses',
      corporate_training_online_details: 'Remote interactive teaching and online learning platform resources.',
      corporate_training_methods_text_hybrid: 'Hybrid Courses',
      corporate_training_hybrid_details: 'Combines physical and online, balancing flexibility with practical effectiveness.',
      corporate_case_studies_title: 'Corporate Cases',
      corporate_case_studies_text: 'AI transformation success stories from various industries.',
      corporate_case1_title: 'Automated Data Processes in Manufacturing',
      corporate_case1_desc: 'Successfully reduced data processing costs by 30% after implementation.',
      corporate_case2_title: 'Automated Internal Presentation Generation',
      corporate_case2_desc: 'Helped management teams quickly compile department reports.',
      corporate_contact_button: 'Contact Us to Arrange Training',

      // Team & Partners team.html
      team_title: 'Team & Partners',
      team_intro_text: 'Gathering education experts and industry partners to build an AI education ecosystem.',
      team_faculty_title: 'Faculty',
      team_faculty_intro_text: 'Cross-disciplinary mentors with rich teaching and practical experience.',
      team_faculty1_name: 'XXXX', team_faculty1_title: 'Curriculum Director',
      team_faculty1_bio: 'Skilled in curriculum design and cross-age teaching.',
      team_faculty1_expertise: 'Expertise: Generative AI, Creative Writing, Image Design',
      team_faculty2_name: 'XXXXX', team_faculty2_title: 'Executive Dean of Teaching',
      team_faculty2_bio: 'Experienced in cross-domain integration and practical guidance.',
      team_faculty2_expertise: 'Expertise: AI Integration, Presentation Animation, Children’s Guidance',
      team_faculty3_name: 'XXXXX', team_faculty3_title: 'Brand Creative Director',
      team_faculty3_bio: 'Specializes in brand visual identity and style building.',
      team_faculty3_expertise: 'Expertise: AI Visual Design, Education Brand Packaging',
      team_partners_title: 'Partners',
      team_partners_intro_text: 'We collaborate with tech companies, designers, and schools.',
      team_partner1_name: 'AIPEXTEC', team_partner1_desc: 'Technical and system integration support',
      team_partner2_name: 'Star Insights International', team_partner2_desc: 'International strategic cooperation and expansion',
      team_partner3_name: 'XXXXXX', team_partner3_desc: 'Curriculum co-creation and lesson plan sharing',
      team_collaboration_title: 'Collaboration Methods',
      team_collab1_title: 'Curriculum Co-creation', team_collab1_desc: 'Co-designing themed content with educational institutions or educators.',
      team_collab2_title: 'Resource Sharing', team_collab2_desc: 'Open module content and platform collaboration resources.',
      team_contact_button: 'Contact Us to Collaborate',

      // AI Teaching Lab lab.html
      lab_title: 'AI Teaching Lab',
      lab_intro_text: 'Combining teaching technology and innovation spaces to inspire learning potential.',
      lab_venue_equipment_title: 'Facilities & Equipment',
      lab_venue_equipment_text: 'Equipped with smart classrooms, interactive boards, and generative AI walls.',
      lab_equipment1_title: 'Interactive Whiteboard',
      lab_equipment1_desc: 'Supports real-time collaboration and AI handwriting recognition.',
      lab_equipment2_title: 'AI Experience Station',
      lab_equipment2_desc: 'Experience tools for voice, image, and text generation.',
      lab_equipment3_title: 'Mobile Recording System',
      lab_equipment3_desc: 'Automatically records learning progress and outcomes.',
      lab_videos_cases_title: 'Class Videos & Cases',
      lab_videos_cases_text: 'Showcase actual classes and student engagement.',
      lab_video1_title: 'Creative AI Story Generation',
      lab_video1_desc: 'Students collaborate to write stories and generate audio.',
      lab_video2_title: 'AI Animation Class',
      lab_video2_desc: 'Integrate character design and scene generation.',
      lab_materials_title: 'Downloadable Materials',
      lab_materials_text: 'Resources and modules for teachers and students.',
      lab_material1_title: 'AI Story Module',
      lab_material1_desc: 'Guide students in creating their own AI stories.',
      lab_material2_title: 'Visual Creation Toolkit',
      lab_material2_desc: 'Teach students to design images using DALL·E.',
      lab_download_button: 'Download Materials',
      lab_visit_title: 'Visit & Collaboration Requests',
      lab_visit_text: 'We welcome schools and educational groups for visits.',
      lab_visit_option1: 'School Visit',
      lab_visit_option1_desc: 'Ideal for class groups and faculty AI teaching exploration.',
      lab_visit_option2: 'Teacher Co-Preparation',
      lab_visit_option2_desc: 'Collaborate on lesson modules and plans.',
      lab_contact_button: 'Contact Us for Visits',

      // News & Events news.html
      news_title: 'News & Events',
      news_intro_text: 'Stay informed on our latest brand updates, programs, events, and media coverage.',
      news_announcements_title: 'Announcements',
      news_announcement1_title: '2025 Summer Camp Registration Begins',
      news_announcement1_text: 'Kids AI summer camp opens June 1st, limited to 40 participants.',
      news_announcement2_title: 'Website Revamp Complete',
      news_announcement2_text: 'New bilingual interface and mobile optimization available now.',
      read_more: 'Read More',
      news_media_title: 'Media Coverage',
      news_media1_title: 'NovaMind Featured in Parenting Magazine',
      news_media1_text: 'Discussing AI literacy and curriculum innovation.',
      news_media2_title: 'Recognized by Ministry of Education',
      news_media2_text: 'Designated as a model site for generative AI education.',
      news_events_title: 'Upcoming Events',
      event1_title: 'AI Storytelling Competition',
      event1_time: 'Date: July 10, 2025',
      event1_location: 'Venue: Taichang',
      event2_title: 'Parent Experience Day',
      event2_time: 'Date: August 3, 2025',
      event2_location: 'Venue: NovaMind Experimental Classroom',
      register_now: 'Register Now',

      // Contact Us contact.html
      contact_title: 'Contact Us',
      contact_intro_text: 'Feel free to contact us for course or partnership inquiries.',
      contact_form_title: 'Contact Form',
      contact_form_name: 'Name',
      contact_form_email: 'Email',
      contact_form_phone: 'Phone',
      contact_form_inquiry_type: 'Inquiry Type',
      contact_form_select_option: 'Please Select...',
      contact_form_inquiry_type_kids: 'Kids Program',
      contact_form_inquiry_type_corporate: 'Corporate Training',
      contact_form_inquiry_type_other: 'Other',
      contact_form_message: 'Your Message',
      contact_form_submit: 'Submit',
      contact_info_title: 'Contact Info',
      contact_phone_title: 'Phone',
      contact_phone_hours: 'Office Hours: Mon–Fri 9:00–18:00',
      contact_email_title: 'Email',
      contact_address_title: 'Address',
      contact_address_line1: '88 Technology Rd, Xinyi Dist, Taipei',
      contact_address_line2: '5F, NovaMind Office',
      contact_social_title: 'Follow Us'
    }
  };

  const toggleButton = document.querySelector('.language-toggle button');
  let currentLang = localStorage.getItem('novamindLang') || 'zh';
  applyLanguage(currentLang);
  updateToggleButton(currentLang);

  toggleButton.addEventListener('click', () => {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('novamindLang', currentLang);
    applyLanguage(currentLang);
    updateToggleButton(currentLang);
  });

  function applyLanguage(lang) {
    document.querySelectorAll('[data-lang-key]').forEach(el => {
      const key = el.getAttribute('data-lang-key');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
    const title = document.querySelector('title');
    const key = title.getAttribute('data-title-key');
    if (key && translations[lang] && translations[lang][key]) {
      title.textContent = translations[lang][key];
    }
  }

  function updateToggleButton(lang) {
    toggleButton.textContent = lang === 'zh' ? 'EN' : '中文';
  }

  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, once: true });
  }

  const isIndex = location.pathname.endsWith('index.html') || location.pathname === '/';
  if (isIndex && typeof particlesJS !== 'undefined') {
    const particleContainer = document.createElement('div');
    particleContainer.id = 'particles-js';
    document.body.insertBefore(particleContainer, document.body.firstChild);
    Object.assign(particleContainer.style, {
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      zIndex: '-1', background: '#001f3f'
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
          onclick: { enable: true, mode: 'push' }
        },
        modes: {
          repulse: { distance: 100 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  }
});