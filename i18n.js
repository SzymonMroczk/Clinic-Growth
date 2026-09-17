/*
 * Clinic Growth – tłumaczenia i wybór języka
 *
 * Kolejność ustalania języka:
 *   1. parametr w adresie: ?lang=pl | en | tr   (np. do linków w kampaniach i mailach)
 *   2. język wybrany ręcznie flagą (zapamiętany w przeglądarce)
 *   3. kraj odwiedzającego z Cloudflare (/cdn-cgi/trace): PL → pl, TR → tr, reszta → en
 *   4. gdy kraj jest nieznany (np. lokalnie): język przeglądarki, domyślnie en
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'cg-lang';
  var SUPPORTED = ['pl', 'en', 'tr'];

  var I18N = {
    pl: {
      'meta.title': 'Clinic Growth | Marketing dla klinik chirurgii plastycznej',
      'meta.description': 'Clinic Growth pomaga klinikom chirurgii estetycznej pozyskiwać wartościowe zapytania dzięki kampaniom Meta Ads, Google Ads, landing page i uporządkowanemu procesowi obsługi leadów.',

      'a11y.logo': 'Clinic Growth logo',
      'a11y.lang': 'Wybór języka',
      'a11y.menu': 'Otwórz menu',

      'nav.focus': 'Specjalizacja',
      'nav.services': 'Usługi',
      'nav.procedures': 'Najpopularniejsze zabiegi',
      'nav.process': 'Proces',
      'nav.cta': 'Umów rozmowę',

      'hero.eyebrow': 'Marketing dla klinik chirurgii plastycznej',
      'hero.title': 'Przewidywalny system pozyskiwania klientów dla klinik chirurgii plastycznej',
      'hero.lead': 'Pomagamy klinikom chirurgii plastycznej uporządkować marketing, zwiększyć przewidywalność pozyskiwania klientów, budować bardziej profesjonalny wizerunek i lepiej kontrolować działania, które realnie wspierają rozwój kliniki.',
      'hero.cta': 'Umów się na rozmowę',
      'hero.scope': 'Zobacz zakres współpracy',

      'tag.landing': 'Landing page',
      'tag.leads': 'Obsługa leadów',
      'tag.premium': 'Komunikacja premium',

      'stat1.value': '3 usługi',
      'stat1.text': 'promowane w pierwszym etapie współpracy',
      'stat2.value': '1 miesiąc',
      'stat2.text': 'kampanii testowej przed dalszym skalowaniem',
      'stat3.text': 'dwa główne źródła pozyskiwania jakościowych zapytań',

      'focus.label': 'W czym się specjalizujemy',
      'focus.title': 'Łączymy reklamę, komunikację i proces obsługi pacjenta w jeden spójny system',
      'focus.lead': 'Specjalizujemy się w budowaniu przewidywalnego systemu pozyskiwania klientów dla klinik chirurgii plastycznej. Łączymy strategię, komunikację i analizę działań, aby marketing był spójny z pozycjonowaniem kliniki, wspierał rozwój marki i dawał większą kontrolę nad wynikami.',
      'focus.b1.title': 'Spójny kierunek działań',
      'focus.b1.text': 'Pomagamy uporządkować marketing kliniki tak, aby działania były spójne z ofertą, wizerunkiem marki i celami biznesowymi.',
      'focus.b2.title': 'Bezpieczna komunikacja',
      'focus.b2.text': 'Treści i kreacje budujemy w sposób spójny z charakterem kliniki, ograniczeniami branży medycznej i obecnie obowiązującymi przepisami prawa.',
      'focus.b3.title': 'Kontrola nad wynikami',
      'focus.b3.text': 'Dzięki uporządkowanemu podejściu łatwiej ocenić, które działania realnie wspierają rozwój kliniki i gdzie warto dalej inwestować.',

      'services.label': 'Zakres współpracy',
      'services.title': 'Co możemy zrobić dla Twojej kliniki',
      'services.lead': 'Pomagamy klinikom uporządkować działania marketingowe tak, aby cały proces pozyskiwania klientów był bardziej spójny, przewidywalny i dopasowany do charakteru marki.',
      'svc1.title': 'Strategia pozyskiwania pacjentów',
      'svc1.text': 'Analizujemy potencjał rynku, lokalizację kliniki i ofertę zabiegów, aby wybrać usługi z największą szansą na skuteczną promocję.',
      'svc2.title': 'Kampanie Meta Ads i Google Ads',
      'svc2.text': 'Prowadzimy reklamy na Facebooku, Instagramie i w Google, skupiając się na jakości zapytań i kosztach pozyskania kontaktu.',
      'svc3.title': 'Landing page dla konkretnych usług',
      'svc3.text': 'Tworzymy strony sprzedażowe, które budują zaufanie, porządkują komunikację i zwiększają szansę na pozostawienie kontaktu.',
      'svc4.title': 'Komunikacja dopasowana do branży',
      'svc4.text': 'Przygotowujemy treści i przekaz premium, bez nachalnej sprzedaży i bez obietnic, które mogłyby osłabić wiarygodność kliniki.',
      'svc5.title': 'Obsługa leadów i proces sprzedaży',
      'svc5.text': 'Pomagamy uporządkować formularze, kontakt z pacjentem, skrypty rozmów i prosty system pracy z zapytaniami.',
      'svc6.title': 'Raportowanie i optymalizacja',
      'svc6.text': 'Regularnie analizujemy wyniki kampanii, sprawdzamy jakość leadów i rozwijamy działania tam, gdzie widać największy potencjał.',

      'proc.label': 'Najpopularniejsze zabiegi',
      'proc.title': 'Usługi, które promujemy najczęściej',
      'proc.lead': 'Najczęściej promujemy usługi, które są popularne, dobrze rozpoznawalne i mają duży potencjał sprzedażowy. Poniżej przykłady zabiegów, wokół których najczęściej budujemy kampanie.',
      'proc.p1': 'Liposukcja',
      'proc.p2': 'Powiększanie piersi',
      'proc.p3': 'Plastyka brzucha',
      'proc.p4': 'Lifting piersi',
      'proc.p5': 'Plastyka powiek',

      'why.imgAlt': 'Specjalistka medyczna podczas zabiegu',
      'why.label': 'Dlaczego to działa',
      'why.title': 'Nie robimy tylko reklam. Budujemy przewidywalny system pozyskiwania pacjentów.',
      'why.lead': 'W chirurgii estetycznej decyzja pacjenta rzadko zapada od razu. Potrzebne są zaufanie, jasna komunikacja, dobrze dobrana usługa reklamowa i szybka obsługa kontaktu. Dlatego przygotowujemy nie tylko reklamy, ale cały proces pozyskiwania klientów.',
      'why.b1': 'Komunikacja bez nachalnej sprzedaży i bez obietnic, które osłabiają wiarygodność kliniki.',
      'why.b2': 'Leady kierowane na konkretne usługi, zamiast ogólnej promocji kliniki bez jasnego celu.',
      'why.b3': 'Proces pozwalający ocenić, czy kampania ma sens przed nawiązaniem stałej współpracy.',

      'process.label': 'Proces',
      'process.title': 'Jak wygląda współpraca krok po kroku',
      'process.lead': 'Nie ryzykujemy Twoim budżetem. Weryfikujemy potencjał rynku, uruchamiamy precyzyjne testy i skalujemy wyłącznie te działania, które realnie przynoszą efekty.',
      'process.stage': 'Etap',
      'step1.title': 'Analiza kliniki i rynku',
      'step1.text': 'Sprawdzamy ofertę zabiegów, lokalny rynek, konkurencję i aktualny potencjał kliniki.',
      'step2.title': 'Wybór usług do promocji',
      'step2.text': 'Skupiamy się na usługach, które najszybciej zamieniają zapytania w konkretne wizyty w gabinecie.',
      'step3.title': 'Strategia i komunikacja',
      'step3.text': 'Przygotowujemy przekaz, kreacje i strukturę działań tak, aby były spójne z marką kliniki.',
      'step4.title': 'Landing page i kampanie',
      'step4.text': 'Tworzymy stronę dla wybranych usług i uruchamiamy kampanie w Meta oraz Google.',
      'step5.title': 'Optymalizowanie działań',
      'step5.text': 'Analizujemy wyniki, poprawiamy reklamy i sprawdzamy, co działa najlepiej.',
      'step6.title': 'Skalowanie najlepszych działań',
      'step6.text': 'Na bazie danych podejmujemy decyzję, które usługi i kampanie warto dalej rozwijać.',

      'cta.label': 'Kampania testowa',
      'cta.title': 'Zaplanujmy skuteczną strategię pozyskiwania pacjentów w Twojej klinice',
      'cta.lead': 'Wypełnij poniższy formularz. Przeanalizujemy Twoje usługi i przygotujemy plan, od jakich zabiegów warto zacząć, aby szybko i przewidywalnie pozyskiwać pacjentów.',

      'form.name': 'Imię i nazwisko',
      'form.namePh': 'Jan Kowalski',
      'form.email': 'E-mail',
      'form.emailPh': 'kontakt@klinika.pl',
      'form.phone': 'Telefon',
      'form.phonePh': '+48 000 000 000',
      'form.message': 'Jakie usługi chcesz promować?',
      'form.messagePh': 'Napisz krótko, czym zajmuje się klinika i jakie zabiegi są dla Ciebie najważniejsze.',
      'form.submit': 'Wyślij zapytanie',
      'form.note': 'Po wysłaniu formularza wrócimy z propozycją pierwszych kroków.',

      'footer.text': 'Clinic Growth | Marketing dla klinik chirurgii plastycznej'
    },

    en: {
      'meta.title': 'Clinic Growth | Marketing for plastic surgery clinics',
      'meta.description': 'Clinic Growth helps plastic surgery clinics attract high-quality patient enquiries through Meta Ads and Google Ads campaigns, landing pages and a well-organised lead handling process.',

      'a11y.logo': 'Clinic Growth logo',
      'a11y.lang': 'Choose language',
      'a11y.menu': 'Open menu',

      'nav.focus': 'Our focus',
      'nav.services': 'Services',
      'nav.procedures': 'Popular procedures',
      'nav.process': 'Process',
      'nav.cta': 'Book a call',

      'hero.eyebrow': 'Marketing for plastic surgery clinics',
      'hero.title': 'A predictable patient acquisition system for plastic surgery clinics',
      'hero.lead': 'We help plastic surgery clinics bring order to their marketing, make patient acquisition more predictable, build a more professional brand image and keep better control over the activities that genuinely drive the clinic’s growth.',
      'hero.cta': 'Book a call',
      'hero.scope': 'See what we do',

      'tag.landing': 'Landing pages',
      'tag.leads': 'Lead handling',
      'tag.premium': 'Premium messaging',

      'stat1.value': '3 services',
      'stat1.text': 'promoted in the first stage of our cooperation',
      'stat2.value': '1 month',
      'stat2.text': 'test campaign before scaling further',
      'stat3.text': 'two main sources of high-quality enquiries',

      'focus.label': 'What we specialise in',
      'focus.title': 'We bring advertising, messaging and patient handling together into one coherent system',
      'focus.lead': 'We specialise in building predictable patient acquisition systems for plastic surgery clinics. We combine strategy, messaging and performance analysis so that your marketing stays consistent with the clinic’s positioning, supports the growth of your brand and gives you more control over results.',
      'focus.b1.title': 'A consistent direction',
      'focus.b1.text': 'We help organise the clinic’s marketing so that every activity is aligned with your services, brand image and business goals.',
      'focus.b2.title': 'Safe, compliant messaging',
      'focus.b2.text': 'We create content and ad creatives that match the clinic’s character, respect the limits of the medical industry and comply with current regulations.',
      'focus.b3.title': 'Control over results',
      'focus.b3.text': 'A structured approach makes it easier to see which activities genuinely support the clinic’s growth and where it is worth investing further.',

      'services.label': 'Scope of work',
      'services.title': 'What we can do for your clinic',
      'services.lead': 'We help clinics organise their marketing so that the whole patient acquisition process becomes more coherent, predictable and true to the character of the brand.',
      'svc1.title': 'Patient acquisition strategy',
      'svc1.text': 'We analyse market potential, the clinic’s location and its range of procedures to choose the services with the best chance of successful promotion.',
      'svc2.title': 'Meta Ads and Google Ads campaigns',
      'svc2.text': 'We run ads on Facebook, Instagram and Google, focusing on the quality of enquiries and the cost per lead.',
      'svc3.title': 'Landing pages for specific services',
      'svc3.text': 'We create sales pages that build trust, clarify your message and make visitors more likely to leave their contact details.',
      'svc4.title': 'Messaging tailored to the industry',
      'svc4.text': 'We prepare premium content and messaging without pushy selling or promises that could undermine the clinic’s credibility.',
      'svc5.title': 'Lead handling and sales process',
      'svc5.text': 'We help you streamline forms, patient contact, call scripts and a simple system for working with enquiries.',
      'svc6.title': 'Reporting and optimisation',
      'svc6.text': 'We regularly analyse campaign results, check lead quality and expand the activities with the greatest potential.',

      'proc.label': 'Most popular procedures',
      'proc.title': 'The services we promote most often',
      'proc.lead': 'We most often promote services that are popular, widely recognised and have strong sales potential. Below are examples of the procedures we most often build campaigns around.',
      'proc.p1': 'Liposuction',
      'proc.p2': 'Breast augmentation',
      'proc.p3': 'Tummy tuck',
      'proc.p4': 'Breast lift',
      'proc.p5': 'Eyelid surgery',

      'why.imgAlt': 'Medical specialist during a procedure',
      'why.label': 'Why it works',
      'why.title': 'We don’t just run ads. We build a predictable patient acquisition system.',
      'why.lead': 'In aesthetic surgery, patients rarely decide straight away. It takes trust, clear communication, the right service to advertise and a quick response to every enquiry. That’s why we prepare not just the ads, but the entire patient acquisition process.',
      'why.b1': 'Messaging without pushy selling or promises that weaken the clinic’s credibility.',
      'why.b2': 'Leads directed to specific services instead of generic clinic promotion with no clear goal.',
      'why.b3': 'A process that shows whether a campaign makes sense before you commit to long-term cooperation.',

      'process.label': 'Process',
      'process.title': 'How we work, step by step',
      'process.lead': 'We don’t gamble with your budget. We verify market potential, run precise tests and scale only the activities that deliver real results.',
      'process.stage': 'Stage',
      'step1.title': 'Clinic and market analysis',
      'step1.text': 'We review your range of procedures, the local market, your competitors and the clinic’s current potential.',
      'step2.title': 'Choosing services to promote',
      'step2.text': 'We focus on the services that turn enquiries into actual clinic visits the fastest.',
      'step3.title': 'Strategy and messaging',
      'step3.text': 'We prepare the messaging, creatives and campaign structure so that they are consistent with the clinic’s brand.',
      'step4.title': 'Landing page and campaigns',
      'step4.text': 'We build a page for the selected services and launch campaigns on Meta and Google.',
      'step5.title': 'Optimisation',
      'step5.text': 'We analyse the results, refine the ads and check what works best.',
      'step6.title': 'Scaling what works best',
      'step6.text': 'Based on the data, we decide which services and campaigns are worth developing further.',

      'cta.label': 'Test campaign',
      'cta.title': 'Let’s plan an effective patient acquisition strategy for your clinic',
      'cta.lead': 'Fill in the form below. We’ll analyse your services and prepare a plan showing which procedures to start with to attract patients quickly and predictably.',

      'form.name': 'Full name',
      'form.namePh': 'John Smith',
      'form.email': 'Email',
      'form.emailPh': 'contact@clinic.com',
      'form.phone': 'Phone',
      'form.phonePh': '+44 0000 000000',
      'form.message': 'Which services would you like to promote?',
      'form.messagePh': 'Briefly describe your clinic and the procedures that matter most to you.',
      'form.submit': 'Send enquiry',
      'form.note': 'Once we receive your form, we’ll get back to you with suggested first steps.',

      'footer.text': 'Clinic Growth | Marketing for plastic surgery clinics'
    },

    tr: {
      'meta.title': 'Clinic Growth | Plastik cerrahi klinikleri için pazarlama',
      'meta.description': 'Clinic Growth, plastik cerrahi kliniklerinin Meta Ads ve Google Ads kampanyaları, açılış sayfaları ve düzenli bir talep yönetimi süreciyle nitelikli hasta talepleri almasına yardımcı olur.',

      'a11y.logo': 'Clinic Growth logosu',
      'a11y.lang': 'Dil seçimi',
      'a11y.menu': 'Menüyü aç',

      'nav.focus': 'Uzmanlık',
      'nav.services': 'Hizmetler',
      'nav.procedures': 'Popüler işlemler',
      'nav.process': 'Süreç',
      'nav.cta': 'Görüşme planlayın',

      'hero.eyebrow': 'Plastik cerrahi klinikleri için pazarlama',
      'hero.title': 'Plastik cerrahi klinikleri için öngörülebilir bir hasta kazanım sistemi',
      'hero.lead': 'Plastik cerrahi kliniklerinin pazarlamalarını düzene sokmalarına, hasta kazanımını daha öngörülebilir hâle getirmelerine, daha profesyonel bir marka imajı oluşturmalarına ve kliniğin büyümesine gerçekten katkı sağlayan çalışmaları daha iyi kontrol etmelerine yardımcı oluyoruz.',
      'hero.cta': 'Görüşme planlayın',
      'hero.scope': 'Hizmet kapsamını görün',

      'tag.landing': 'Açılış sayfası',
      'tag.leads': 'Talep yönetimi',
      'tag.premium': 'Premium iletişim',

      'stat1.value': '3 hizmet',
      'stat1.text': 'iş birliğinin ilk aşamasında tanıtılır',
      'stat2.value': '1 ay',
      'stat2.text': 'ölçeklendirme öncesi test kampanyası',
      'stat3.text': 'nitelikli talepler için iki ana kaynak',

      'focus.label': 'Uzmanlık alanımız',
      'focus.title': 'Reklamı, iletişimi ve hasta yönetim sürecini tek bir tutarlı sistemde birleştiriyoruz',
      'focus.lead': 'Plastik cerrahi klinikleri için öngörülebilir hasta kazanım sistemleri kurmada uzmanız. Pazarlamanın kliniğin konumlandırmasıyla uyumlu olması, markanın gelişimini desteklemesi ve sonuçlar üzerinde daha fazla kontrol sağlaması için strateji, iletişim ve performans analizini bir araya getiriyoruz.',
      'focus.b1.title': 'Tutarlı bir yol haritası',
      'focus.b1.text': 'Kliniğin pazarlamasını, tüm çalışmaların hizmetlerle, marka imajıyla ve iş hedefleriyle uyumlu olacağı şekilde düzenlemenize yardımcı oluyoruz.',
      'focus.b2.title': 'Güvenli ve mevzuata uygun iletişim',
      'focus.b2.text': 'İçerikleri ve reklam görsellerini kliniğin karakterine, sağlık sektörünün kısıtlamalarına ve yürürlükteki mevzuata uygun şekilde hazırlıyoruz.',
      'focus.b3.title': 'Sonuçlar üzerinde kontrol',
      'focus.b3.text': 'Düzenli bir yaklaşım sayesinde hangi çalışmaların kliniğin büyümesine gerçekten katkı sağladığını ve nereye yatırım yapmaya değer olduğunu görmek kolaylaşır.',

      'services.label': 'Hizmet kapsamı',
      'services.title': 'Kliniğiniz için neler yapabiliriz',
      'services.lead': 'Kliniklerin pazarlama çalışmalarını, tüm hasta kazanım sürecinin daha tutarlı, öngörülebilir ve markanın karakterine uygun olacağı şekilde düzenlemelerine yardımcı oluyoruz.',
      'svc1.title': 'Hasta kazanım stratejisi',
      'svc1.text': 'Tanıtımda başarılı olma şansı en yüksek hizmetleri seçmek için pazar potansiyelini, kliniğin konumunu ve sunulan işlemleri analiz ediyoruz.',
      'svc2.title': 'Meta Ads ve Google Ads kampanyaları',
      'svc2.text': 'Facebook, Instagram ve Google’da reklamlarınızı yönetiyor; talep kalitesine ve talep başına maliyete odaklanıyoruz.',
      'svc3.title': 'Belirli hizmetler için açılış sayfaları',
      'svc3.text': 'Güven oluşturan, mesajınızı netleştiren ve ziyaretçilerin iletişim bilgilerini bırakma olasılığını artıran satış sayfaları hazırlıyoruz.',
      'svc4.title': 'Sektöre uygun iletişim',
      'svc4.text': 'Agresif satış dili ve kliniğin güvenilirliğini zedeleyebilecek vaatler olmadan premium içerik ve mesajlar hazırlıyoruz.',
      'svc5.title': 'Talep yönetimi ve satış süreci',
      'svc5.text': 'Formları, hastayla iletişimi, görüşme senaryolarını ve taleplerle çalışmak için basit bir sistemi düzenlemenize yardımcı oluyoruz.',
      'svc6.title': 'Raporlama ve optimizasyon',
      'svc6.text': 'Kampanya sonuçlarını düzenli olarak analiz ediyor, talep kalitesini kontrol ediyor ve en yüksek potansiyelin görüldüğü alanlarda çalışmaları geliştiriyoruz.',

      'proc.label': 'En popüler işlemler',
      'proc.title': 'En sık tanıttığımız hizmetler',
      'proc.lead': 'Çoğunlukla popüler, bilinirliği yüksek ve güçlü satış potansiyeli olan hizmetleri tanıtıyoruz. Aşağıda kampanyalarımızı en sık üzerine kurguladığımız işlemlerden örnekler bulabilirsiniz.',
      'proc.p1': 'Liposuction',
      'proc.p2': 'Meme büyütme',
      'proc.p3': 'Karın germe',
      'proc.p4': 'Meme dikleştirme',
      'proc.p5': 'Göz kapağı estetiği',

      'why.imgAlt': 'İşlem sırasında bir sağlık uzmanı',
      'why.label': 'Neden işe yarıyor',
      'why.title': 'Sadece reklam yapmıyoruz. Öngörülebilir bir hasta kazanım sistemi kuruyoruz.',
      'why.lead': 'Estetik cerrahide hastalar nadiren hemen karar verir. Güven, net iletişim, doğru seçilmiş bir tanıtım hizmeti ve taleplere hızlı dönüş gerekir. Bu yüzden yalnızca reklamları değil, tüm hasta kazanım sürecini hazırlıyoruz.',
      'why.b1': 'Agresif satış dili ve kliniğin güvenilirliğini zayıflatan vaatler içermeyen iletişim.',
      'why.b2': 'Net bir hedefi olmayan genel klinik tanıtımı yerine belirli hizmetlere yönlendirilen talepler.',
      'why.b3': 'Kalıcı bir iş birliğine başlamadan önce kampanyanın mantıklı olup olmadığını değerlendirmenizi sağlayan bir süreç.',

      'process.label': 'Süreç',
      'process.title': 'Adım adım iş birliği süreci',
      'process.lead': 'Bütçenizi riske atmıyoruz. Pazar potansiyelini doğruluyor, hassas testler yapıyor ve yalnızca gerçekten sonuç getiren çalışmaları ölçeklendiriyoruz.',
      'process.stage': 'Aşama',
      'step1.title': 'Klinik ve pazar analizi',
      'step1.text': 'Sunulan işlemleri, yerel pazarı, rakipleri ve kliniğin mevcut potansiyelini inceliyoruz.',
      'step2.title': 'Tanıtılacak hizmetlerin seçimi',
      'step2.text': 'Talepleri en hızlı şekilde klinik ziyaretlerine dönüştüren hizmetlere odaklanıyoruz.',
      'step3.title': 'Strateji ve iletişim',
      'step3.text': 'Mesajları, reklam görsellerini ve çalışma yapısını kliniğin markasıyla uyumlu olacak şekilde hazırlıyoruz.',
      'step4.title': 'Açılış sayfası ve kampanyalar',
      'step4.text': 'Seçilen hizmetler için bir sayfa hazırlıyor ve Meta ile Google’da kampanyaları başlatıyoruz.',
      'step5.title': 'Optimizasyon',
      'step5.text': 'Sonuçları analiz ediyor, reklamları iyileştiriyor ve en iyi neyin işe yaradığını kontrol ediyoruz.',
      'step6.title': 'En iyi sonuç verenleri ölçeklendirme',
      'step6.text': 'Verilere dayanarak hangi hizmetlerin ve kampanyaların geliştirilmeye değer olduğuna karar veriyoruz.',

      'cta.label': 'Test kampanyası',
      'cta.title': 'Kliniğiniz için etkili bir hasta kazanım stratejisi planlayalım',
      'cta.lead': 'Aşağıdaki formu doldurun. Hizmetlerinizi analiz edelim ve hızlı, öngörülebilir şekilde hasta kazanmak için hangi işlemlerle başlamanız gerektiğini gösteren bir plan hazırlayalım.',

      'form.name': 'Ad soyad',
      'form.namePh': 'Ahmet Yılmaz',
      'form.email': 'E-posta',
      'form.emailPh': 'iletisim@klinik.com.tr',
      'form.phone': 'Telefon',
      'form.phonePh': '+90 500 000 00 00',
      'form.message': 'Hangi hizmetleri tanıtmak istiyorsunuz?',
      'form.messagePh': 'Kliniğinizi ve sizin için en önemli işlemleri kısaca yazın.',
      'form.submit': 'Talebi gönder',
      'form.note': 'Formu gönderdikten sonra size ilk adımlar için bir öneriyle dönüş yapacağız.',

      'footer.text': 'Clinic Growth | Plastik cerrahi klinikleri için pazarlama'
    }
  };

  function isSupported(lang) {
    return SUPPORTED.indexOf(lang) !== -1;
  }

  function countryToLang(country) {
    if (country === 'PL') return 'pl';
    if (country === 'TR') return 'tr';
    return 'en';
  }

  function browserLang() {
    var list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
    var first = String(list[0] || '').slice(0, 2).toLowerCase();
    return first === 'pl' || first === 'tr' ? first : 'en';
  }

  function readStorage() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function writeStorage(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  // Cloudflare udostępnia kraj odwiedzającego pod /cdn-cgi/trace (linia "loc=PL").
  function fetchCountry() {
    try {
      var cached = sessionStorage.getItem('cg-country');
      if (cached) return Promise.resolve(cached);
    } catch (e) {}

    var controller = 'AbortController' in window ? new AbortController() : null;
    var timer = setTimeout(function () { if (controller) controller.abort(); }, 1500);

    return fetch('/cdn-cgi/trace', { cache: 'no-store', signal: controller ? controller.signal : undefined })
      .then(function (res) { return res.ok ? res.text() : ''; })
      .then(function (text) {
        clearTimeout(timer);
        var match = /^loc=([A-Z]{2})$/m.exec(text);
        var country = match && match[1] !== 'XX' ? match[1] : null;
        if (country) {
          try { sessionStorage.setItem('cg-country', country); } catch (e) {}
        }
        return country;
      })
      .catch(function () {
        clearTimeout(timer);
        return null;
      });
  }

  function detectLang() {
    var forced = new URLSearchParams(location.search).get('lang');
    if (isSupported(forced)) return Promise.resolve(forced);

    var saved = readStorage();
    if (isSupported(saved)) return Promise.resolve(saved);

    return fetchCountry().then(function (country) {
      return country ? countryToLang(country) : browserLang();
    });
  }

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.pl;
    var root = document.documentElement;

    root.lang = lang;
    document.title = dict['meta.title'];

    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', dict['meta.description']);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var value = dict[el.getAttribute('data-i18n')];
      if (value != null) el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var parts = pair.split(':');
        var value = dict[parts[1]];
        if (parts[0] && value != null) el.setAttribute(parts[0], value);
      });
    });

    updateSwitcher(lang, dict);

    // Język zapytania trafia razem z formularzem
    document.querySelectorAll('input[name="language"]').forEach(function (input) {
      input.value = lang;
    });

    root.classList.remove('i18n-pending');
  }

  // --- Rozwijany przełącznik: widać aktualną flagę, pozostałe po kliknięciu ---
  var toggle = document.querySelector('.lang-current');
  var menu = document.getElementById('lang-menu');
  var currentFlag = document.getElementById('lang-current-flag');

  function updateSwitcher(lang, dict) {
    if (!toggle || !menu) return;
    var active = null;
    menu.querySelectorAll('.lang-btn').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.hidden = isActive;
      if (isActive) active = btn;
    });
    if (active && currentFlag) {
      // kopia flagi z unikalnymi id (flaga UK używa clipPath)
      currentFlag.innerHTML = active.querySelector('.flag').innerHTML.replace(/ukClip/g, 'ukClipCurrent');
      var name = active.getAttribute('title');
      toggle.setAttribute('title', name);
      toggle.setAttribute('aria-label', dict['a11y.lang'] + ': ' + name);
    }
  }

  function setMenuOpen(open, focusToggle) {
    if (!toggle || !menu) return;
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    if (open) {
      var first = menu.querySelector('.lang-btn:not([hidden])');
      if (first) first.focus();
    } else if (focusToggle) {
      toggle.focus();
    }
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      setMenuOpen(menu.hidden);
    });

    menu.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-lang');
        if (!isSupported(lang)) return;
        writeStorage(lang);
        applyLang(lang);
        setMenuOpen(false, true);
      });
    });

    document.addEventListener('click', function (e) {
      if (!menu.hidden && !e.target.closest('.lang-switch')) setMenuOpen(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menu.hidden) setMenuOpen(false, true);
    });

    menu.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
      var items = Array.prototype.filter.call(menu.querySelectorAll('.lang-btn'), function (b) { return !b.hidden; });
      var i = items.indexOf(document.activeElement);
      var next = e.key === 'ArrowDown' ? (i + 1) % items.length : (i - 1 + items.length) % items.length;
      items[next].focus();
      e.preventDefault();
    });
  }

  detectLang().then(applyLang, function () { applyLang('pl'); });

  window.ClinicGrowthI18n = { translations: I18N, setLanguage: function (lang) { if (isSupported(lang)) { writeStorage(lang); applyLang(lang); } } };
})();
