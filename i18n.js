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
      'meta.title': 'Clinic Growth | Skalowanie klinik medycyny turystycznej',
      'meta.description': 'Clinic Growth pomaga klinikom chirurgii plastycznej w Turcji i Albanii pozyskiwać pacjentów z zagranicy dzięki kampaniom Meta Ads i Google Ads, landing page i formularzom w języku pacjenta.',

      'a11y.logo': 'Clinic Growth logo',
      'a11y.lang': 'Wybór języka',
      'a11y.menu': 'Otwórz menu',

      'nav.focus': 'Specjalizacja',
      'nav.services': 'Usługi',
      'nav.procedures': 'Zabiegi',
      'nav.process': 'Proces',
      'nav.cta': 'Umów rozmowę',

      'hero.eyebrow': 'Medycyna turystyczna · Turcja · Albania',
      'hero.title': 'Skalujemy kliniki medycyny turystycznej',
      'hero.titleAccent': 'o pacjentów z zagranicy',
      'hero.imgAlt': 'Chirurg podczas zabiegu',
      'hero.badge': 'Pacjenci z zagranicy, w ich języku',
      'hero.lead': 'Specjalizujemy się w kampaniach dla klinik chirurgii plastycznej w Turcji i Albanii. Budujemy system, który w przewidywalny sposób dostarcza zapytania od pacjentów z rynków zagranicznych, w ich języku i z komunikacją zgodną z przepisami.',
      'hero.cta': 'Umów się na rozmowę',
      'hero.scope': 'Zobacz zakres współpracy',

      'tag.landing': 'Landing page i formularze',
      'tag.leads': 'Kampanie w języku pacjenta',
      'tag.premium': 'Rynki zagraniczne',

      'stat1.value': 'Turcja i Albania',
      'stat1.text': 'kliniki, z którymi pracujemy',
      'stat2.value': 'Wiele rynków',
      'stat2.text': 'pacjenci z różnych krajów, każdy rynek w swoim języku',
      'stat3.value': 'Meta + Google',
      'stat3.text': 'kanały, którymi docieramy do pacjentów za granicą',

      'focus.label': 'W czym się specjalizujemy',
      'focus.title': 'Skalowanie klinik, które leczą pacjentów z zagranicy',
      'focus.lead': 'Medycyna turystyczna rządzi się innymi prawami niż rynek lokalny. Pacjent wybiera klinikę w innym kraju, porównuje oferty z kilku miejsc i potrzebuje znacznie więcej zaufania, zanim zdecyduje się na wyjazd. Dlatego łączymy strategię rynków, kampanie, komunikację i analizę wyników w jeden spójny system.',
      'focus.b1.title': 'Właściwe rynki i zabiegi',
      'focus.b1.text': 'Wybieramy kraje i zabiegi z największym potencjałem dla Twojej kliniki, zamiast reklamować wszystko wszędzie.',
      'focus.b2.title': 'Komunikacja zgodna z przepisami',
      'focus.b2.text': 'Kreacje i treści przygotowujemy z uwzględnieniem przepisów kraju, w którym wyświetlają się reklamy, oraz zasad reklamowych Meta i Google.',
      'focus.b3.title': 'Kontrola nad wynikami',
      'focus.b3.text': 'Widzisz, które rynki i zabiegi realnie przynoszą pacjentów i gdzie warto zwiększać budżet.',

      'services.label': 'Zakres współpracy',
      'services.title': 'Co robimy dla Twojej kliniki',
      'services.lead': 'Odpowiadamy za pozyskanie zapytań od pacjentów z zagranicy. Twój zespół zajmuje się tym, w czym jest najlepszy, czyli rozmową z pacjentem i leczeniem.',
      'svc1.title': 'Strategia rynków i zabiegów',
      'svc1.text': 'Analizujemy ofertę kliniki, konkurencję i potencjał poszczególnych krajów, aby wybrać rynki i zabiegi, od których warto zacząć.',
      'svc2.title': 'Kampanie Meta Ads i Google Ads',
      'svc2.text': 'Prowadzimy reklamy na Facebooku, Instagramie i w Google na rynkach zagranicznych, w języku pacjenta, z naciskiem na jakość zapytań.',
      'svc3.title': 'Landing page lub formularz',
      'svc3.text': 'Przygotowujemy stronę albo formularz dla konkretnego zabiegu i rynku, które budują zaufanie i wyjaśniają pacjentowi, jak wygląda leczenie za granicą.',
      'svc4.title': 'Audyt obecności w internecie',
      'svc4.text': 'Sprawdzamy stronę kliniki, profile w social mediach, wizytówkę Google i obecne reklamy, także pod kątem błędów prawnych.',
      'svc5.title': 'Konsultacja i wsparcie obsługi zapytań',
      'svc5.text': 'Doradzamy, jak szybko i skutecznie odpowiadać na zapytania. Rozmowy z pacjentami prowadzi zespół kliniki w języku pacjenta.',
      'svc6.title': 'Optymalizacja i raportowanie',
      'svc6.text': 'Regularnie analizujemy wyniki, poprawiamy kampanie i rozwijamy te rynki oraz zabiegi, które dają najlepsze efekty.',

      'proc.label': 'Najpopularniejsze zabiegi',
      'proc.title': 'Zabiegi, z którymi pacjenci przyjeżdżają najczęściej',
      'proc.lead': 'Najczęściej budujemy kampanie wokół zabiegów, dla których pacjenci z zagranicy są gotowi podróżować. Poniżej kilka przykładów.',
      'proc.p1': 'Przeszczep włosów',
      'proc.p2': 'Rynoplastyka',
      'proc.p3': 'Liposukcja',
      'proc.p4': 'Powiększanie piersi',
      'proc.p5': 'Plastyka brzucha',

      'why.imgAlt': 'Specjalistka medyczna podczas zabiegu',
      'why.label': 'Dlaczego to działa',
      'why.title': 'Nie sprzedajemy leadów. Budujemy system pozyskiwania pacjentów z zagranicy.',
      'why.lead': 'Pacjent, który ma polecieć na zabieg do innego kraju, potrzebuje czasu, zaufania i jasnych odpowiedzi w swoim języku. Dlatego przygotowujemy nie pojedyncze reklamy, ale cały proces, który prowadzi go od pierwszego kontaktu do rozmowy z kliniką.',
      'why.b1': 'Reklamy i komunikacja w języku pacjenta, dopasowane do konkretnego rynku, a nie jedna angielska kampania na cały świat.',
      'why.b2': 'Zapytania kierowane na konkretne zabiegi i kraje, zamiast ogólnej promocji kliniki bez jasnego celu.',
      'why.b3': 'System rozwijany etapami, miesiąc po miesiącu, w oparciu o dane z kampanii.',

      'process.label': 'Proces',
      'process.title': 'Jak wygląda współpraca krok po kroku',
      'process.lead': 'Nie ryzykujemy Twoim budżetem. Zaczynamy od analizy, kampanie uruchamiamy po kolei i skalujemy tylko to, co realnie przynosi pacjentów.',
      'process.stage': 'Etap',
      'step1.title': 'Analiza kliniki i obecnych działań',
      'step1.text': 'Sprawdzamy ofertę, stronę, social media, wizytówkę Google i obecne reklamy kliniki.',
      'step2.title': 'Wybór rynków i zabiegów',
      'step2.text': 'Wybieramy kraje i zabiegi z największym potencjałem na start.',
      'step3.title': 'Strategia i komunikacja',
      'step3.text': 'Przygotowujemy przekaz i kreacje w języku pacjenta, zgodne z przepisami i spójne z marką kliniki.',
      'step4.title': 'Landing page, formularze i kampanie',
      'step4.text': 'Tworzymy strony lub formularze i uruchamiamy kampanie w Meta oraz Google, jedną po drugiej.',
      'step5.title': 'Optymalizacja',
      'step5.text': 'Analizujemy wyniki, poprawiamy reklamy i sprawdzamy, które rynki działają najlepiej.',
      'step6.title': 'Skalowanie',
      'step6.text': 'Zwiększamy budżet tam, gdzie są wyniki, i dokładamy kolejne rynki oraz zabiegi.',

      'cta.label': 'Rozmowa wstępna',
      'cta.title': 'Sprawdźmy, czy Twoja klinika jest gotowa na skalowanie',
      'cta.lead': 'Wypełnij formularz. Przyjrzymy się Twojej klinice i obecnym działaniom, a na rozmowie pokażemy, od jakich rynków i zabiegów warto zacząć.',

      'form.name': 'Imię i nazwisko',
      'form.namePh': 'Jan Kowalski',
      'form.email': 'E-mail',
      'form.emailPh': 'kontakt@klinika.com',
      'form.phone': 'Telefon / WhatsApp',
      'form.phonePh': '+48 000 000 000',
      'form.message': 'Jakie zabiegi i rynki chcesz rozwijać?',
      'form.messagePh': 'Napisz krótko, gdzie działa klinika, jakie zabiegi wykonuje i z jakich krajów chcesz pozyskiwać pacjentów.',
      'form.submit': 'Wyślij zapytanie',
      'form.note': 'Po wysłaniu formularza wrócimy z propozycją terminu rozmowy.',

      'ads.label': 'Przykładowe reklamy',
      'ads.title': 'Jedna obawa pacjenta, jedna reklama',
      'ads.lead': 'Każda reklama odpowiada na jedno pytanie, które pacjent zadaje sobie przed wyjazdem, w jego języku. Testujemy je między sobą i zostawiamy te, które przynoszą pacjentów.',
      'ad.page': 'Twoja klinika',
      'ad.sponsored': 'Sponsorowane',
      'ad.cta': 'Wyślij zapytanie',
      'ad.domain': 'twojaklinika.com',
      'ad1.q': 'Kto mnie będzie operował? Zobacz, zanim zdecydujesz.',
      'ad1.h': 'Poznaj swojego chirurga, zanim polecisz.',
      'ad1.sub': 'Konsultacja online w Twoim języku',
      'ad2.q': 'Ile dni potrwa pobyt i ile razy trzeba przylecieć?',
      'ad2.h': 'Plan leczenia i liczba dni, zanim kupisz bilet.',
      'ad2.sub': 'Plan przygotowany na podstawie zdjęć',
      'ad3.q': 'Bez ukrytych kosztów na miejscu.',
      'ad3.h': 'Jedna cena na piśmie, zanim polecisz.',
      'ad3.sub': 'Pakiet z hotelem i transferem',
      'ads.tag1': 'Obawa',
      'ads.tag2': 'Odpowiedź',
      'ads.note': 'Przykładowe kreacje. Treść każdej reklamy uzgadniamy z kliniką i sprawdzamy pod kątem przepisów.',

      'ad.like': 'Lubię to!',
      'ad.comment': 'Komentarz',
      'ad.share': 'Udostępnij',

      'nav.results': 'Raport',
      'rep.label': 'Raportowanie',
      'rep.title': 'Co tydzień widzisz, ile kosztuje Cię pacjent',
      'rep.lead': 'Dostajesz krótki raport z każdego rynku i zabiegu. Widać w nim cały lejek, od zapytania do umówionego pacjenta, a budżet przesuwamy tam, gdzie pacjent kosztuje najmniej.',
      'rep.funnel': 'Lejek pacjenta',
      'rep.schema': 'Schemat',
      'rep.f1': 'Zapytania z reklam',
      'rep.f2': 'Zdjęcia lub RTG od pacjenta',
      'rep.f3': 'Rozmowy z kliniką',
      'rep.f4': 'Umówieni pacjenci',
      'rep.markets': 'Koszt pacjenta według rynku',
      'rep.mk1': 'Rynek A',
      'rep.mk2': 'Rynek B',
      'rep.mk3': 'Rynek C',
      'rep.best': 'Tu zwiększamy budżet',
      'rep.axis': 'niższy koszt pacjenta = krótszy pasek',
      'rep.note': 'Budżet idzie tam, gdzie pacjent kosztuje najmniej.',
      'rep.inreport': 'W raporcie',
      'rep.m1': 'Zapytania',
      'rep.m2': 'Koszt zapytania',
      'rep.m3': 'Rozmowy',
      'rep.m4': 'Umówieni pacjenci',
      'rep.m5': 'Koszt pacjenta',
      'rep.schemaNote': 'Wykresy pokazują układ raportu, a nie wyniki konkretnej kliniki.',

      'footer.text': 'Clinic Growth | Skalowanie klinik medycyny turystycznej'
    },

    en: {
      'meta.title': 'Clinic Growth | Scaling medical tourism clinics',
      'meta.description': 'Clinic Growth helps plastic surgery clinics in Turkey and Albania attract international patients through Meta Ads and Google Ads campaigns, landing pages and forms in the patient’s own language.',

      'a11y.logo': 'Clinic Growth logo',
      'a11y.lang': 'Choose language',
      'a11y.menu': 'Open menu',

      'nav.focus': 'Our focus',
      'nav.services': 'Services',
      'nav.procedures': 'Procedures',
      'nav.process': 'Process',
      'nav.cta': 'Book a call',

      'hero.eyebrow': 'Medical tourism · Turkey · Albania',
      'hero.title': 'We scale medical tourism clinics',
      'hero.titleAccent': 'with patients from abroad',
      'hero.imgAlt': 'Surgeon during a procedure',
      'hero.badge': 'Patients from abroad, in their own language',
      'hero.lead': 'We specialise in campaigns for plastic surgery clinics in Turkey and Albania. We build a system that predictably brings in enquiries from international patients, in their own language and with compliant messaging.',
      'hero.cta': 'Book a call',
      'hero.scope': 'See what we do',

      'tag.landing': 'Landing pages & forms',
      'tag.leads': 'Campaigns in the patient’s language',
      'tag.premium': 'International markets',

      'stat1.value': 'Turkey & Albania',
      'stat1.text': 'where the clinics we work with are based',
      'stat2.value': 'Multiple markets',
      'stat2.text': 'patients from different countries, each market in its own language',
      'stat3.value': 'Meta + Google',
      'stat3.text': 'the channels we use to reach patients abroad',

      'focus.label': 'What we specialise in',
      'focus.title': 'Scaling clinics that treat patients from abroad',
      'focus.lead': 'Medical tourism follows different rules than a local market. Patients choose a clinic in another country, compare offers from several places and need far more trust before they decide to travel. That’s why we combine market strategy, campaigns, messaging and performance analysis into one coherent system.',
      'focus.b1.title': 'The right markets and procedures',
      'focus.b1.text': 'We choose the countries and procedures with the greatest potential for your clinic instead of advertising everything everywhere.',
      'focus.b2.title': 'Compliant messaging',
      'focus.b2.text': 'We create ad creatives and content with the regulations of each target country and the advertising policies of Meta and Google in mind.',
      'focus.b3.title': 'Control over results',
      'focus.b3.text': 'You can see which markets and procedures genuinely bring in patients and where it’s worth increasing the budget.',

      'services.label': 'Scope of work',
      'services.title': 'What we do for your clinic',
      'services.lead': 'We take care of bringing in enquiries from international patients. Your team focuses on what it does best, talking to patients and treating them.',
      'svc1.title': 'Market and procedure strategy',
      'svc1.text': 'We analyse the clinic’s services, competitors and the potential of individual countries to choose the markets and procedures worth starting with.',
      'svc2.title': 'Meta Ads and Google Ads campaigns',
      'svc2.text': 'We run ads on Facebook, Instagram and Google in international markets, in the patient’s language, with a focus on enquiry quality.',
      'svc3.title': 'Landing page or lead form',
      'svc3.text': 'We create a page or form for a specific procedure and market that builds trust and explains how treatment abroad works.',
      'svc4.title': 'Online presence audit',
      'svc4.text': 'We review the clinic’s website, social media profiles, Google Business Profile and current ads, including legal and compliance issues.',
      'svc5.title': 'Consulting and enquiry handling support',
      'svc5.text': 'We advise on how to respond to enquiries quickly and effectively. Conversations with patients are handled by the clinic’s team in the patient’s language.',
      'svc6.title': 'Optimisation and reporting',
      'svc6.text': 'We regularly analyse results, refine campaigns and expand the markets and procedures that perform best.',

      'proc.label': 'Most popular procedures',
      'proc.title': 'The procedures patients travel for most often',
      'proc.lead': 'We most often build campaigns around procedures that international patients are willing to travel for. Here are a few examples.',
      'proc.p1': 'Hair transplant',
      'proc.p2': 'Rhinoplasty',
      'proc.p3': 'Liposuction',
      'proc.p4': 'Breast augmentation',
      'proc.p5': 'Tummy tuck',

      'why.imgAlt': 'Medical specialist during a procedure',
      'why.label': 'Why it works',
      'why.title': 'We don’t sell leads. We build a system for attracting patients from abroad.',
      'why.lead': 'A patient who is about to fly to another country for surgery needs time, trust and clear answers in their own language. That’s why we don’t prepare one-off ads but an entire process that takes them from the first contact to a conversation with your clinic.',
      'why.b1': 'Ads and messaging in the patient’s language, tailored to a specific market, not one English campaign for the whole world.',
      'why.b2': 'Enquiries directed to specific procedures and countries instead of generic clinic promotion with no clear goal.',
      'why.b3': 'A system developed in stages, month by month, based on campaign data.',

      'process.label': 'Process',
      'process.title': 'How we work, step by step',
      'process.lead': 'We don’t gamble with your budget. We start with analysis, launch campaigns one at a time and scale only what genuinely brings in patients.',
      'process.stage': 'Stage',
      'step1.title': 'Clinic and current activity analysis',
      'step1.text': 'We review the clinic’s services, website, social media, Google Business Profile and current ads.',
      'step2.title': 'Choosing markets and procedures',
      'step2.text': 'We select the countries and procedures with the greatest potential to start with.',
      'step3.title': 'Strategy and messaging',
      'step3.text': 'We prepare messaging and creatives in the patient’s language, compliant with regulations and consistent with the clinic’s brand.',
      'step4.title': 'Landing pages, forms and campaigns',
      'step4.text': 'We build pages or forms and launch Meta and Google campaigns one after another.',
      'step5.title': 'Optimisation',
      'step5.text': 'We analyse the results, refine the ads and check which markets perform best.',
      'step6.title': 'Scaling',
      'step6.text': 'We increase the budget where the results are and add new markets and procedures.',

      'cta.label': 'Intro call',
      'cta.title': 'Let’s see if your clinic is ready to scale',
      'cta.lead': 'Fill in the form. We’ll take a look at your clinic and current activities, and on the call we’ll show you which markets and procedures are worth starting with.',

      'form.name': 'Full name',
      'form.namePh': 'John Smith',
      'form.email': 'Email',
      'form.emailPh': 'contact@clinic.com',
      'form.phone': 'Phone / WhatsApp',
      'form.phonePh': '+90 500 000 00 00',
      'form.message': 'Which procedures and markets would you like to grow?',
      'form.messagePh': 'Briefly tell us where your clinic is based, which procedures you perform and which countries you want to attract patients from.',
      'form.submit': 'Send enquiry',
      'form.note': 'Once we receive your form, we’ll get back to you to arrange a call.',

      'ads.label': 'Example ads',
      'ads.title': 'One patient doubt, one ad',
      'ads.lead': 'Each ad answers one question patients ask themselves before travelling, in their own language. We test them against each other and keep the ones that bring in patients.',
      'ad.page': 'Your clinic',
      'ad.sponsored': 'Sponsored',
      'ad.cta': 'Send enquiry',
      'ad.domain': 'yourclinic.com',
      'ad1.q': 'Who will operate on me? See for yourself before you decide.',
      'ad1.h': 'Meet your surgeon before you fly.',
      'ad1.sub': 'Online consultation in your language',
      'ad2.q': 'How many days will it take, and how many trips?',
      'ad2.h': 'Your plan and your days, before you book a flight.',
      'ad2.sub': 'A plan prepared from your photos',
      'ad3.q': 'No hidden costs once you arrive.',
      'ad3.h': 'One written price before you fly.',
      'ad3.sub': 'Package with hotel and transfers',
      'ads.tag1': 'Doubt',
      'ads.tag2': 'Answer',
      'ads.note': 'Example creatives. We agree the content of every ad with the clinic and check it against regulations.',

      'ad.like': 'Like',
      'ad.comment': 'Comment',
      'ad.share': 'Share',

      'nav.results': 'Reporting',
      'rep.label': 'Reporting',
      'rep.title': 'Every week you see what a patient costs you',
      'rep.lead': 'You get a short report for every market and procedure. It shows the whole funnel, from enquiry to booked patient, and we move the budget to wherever a patient costs least.',
      'rep.funnel': 'Patient funnel',
      'rep.schema': 'Schematic',
      'rep.f1': 'Enquiries from ads',
      'rep.f2': 'Photos or X-rays from the patient',
      'rep.f3': 'Calls with the clinic',
      'rep.f4': 'Booked patients',
      'rep.markets': 'Cost per patient by market',
      'rep.mk1': 'Market A',
      'rep.mk2': 'Market B',
      'rep.mk3': 'Market C',
      'rep.best': 'More budget here',
      'rep.axis': 'lower cost per patient = shorter bar',
      'rep.note': 'The budget goes where a patient costs least.',
      'rep.inreport': 'In the report',
      'rep.m1': 'Enquiries',
      'rep.m2': 'Cost per enquiry',
      'rep.m3': 'Calls',
      'rep.m4': 'Booked patients',
      'rep.m5': 'Cost per patient',
      'rep.schemaNote': 'The charts show the layout of the report, not the results of any specific clinic.',

      'footer.text': 'Clinic Growth | Scaling medical tourism clinics'
    },

    tr: {
      'meta.title': 'Clinic Growth | Sağlık turizmi kliniklerini büyütüyoruz',
      'meta.description': 'Clinic Growth, Türkiye ve Arnavutluk’taki plastik cerrahi kliniklerinin Meta Ads ve Google Ads kampanyaları, açılış sayfaları ve hastanın dilindeki formlarla yurt dışından hasta kazanmasına yardımcı olur.',

      'a11y.logo': 'Clinic Growth logosu',
      'a11y.lang': 'Dil seçimi',
      'a11y.menu': 'Menüyü aç',

      'nav.focus': 'Uzmanlık',
      'nav.services': 'Hizmetler',
      'nav.procedures': 'İşlemler',
      'nav.process': 'Süreç',
      'nav.cta': 'Görüşme planlayın',

      'hero.eyebrow': 'Sağlık turizmi · Türkiye · Arnavutluk',
      'hero.title': 'Sağlık turizmi kliniklerini',
      'hero.titleAccent': 'yurt dışından gelen hastalarla büyütüyoruz',
      'hero.imgAlt': 'Ameliyat sırasında bir cerrah',
      'hero.badge': 'Yurt dışından hastalar, kendi dillerinde',
      'hero.lead': 'Türkiye ve Arnavutluk’taki plastik cerrahi klinikleri için kampanyalarda uzmanız. Yurt dışı pazarlardan, hastanın kendi dilinde ve mevzuata uygun iletişimle, öngörülebilir şekilde hasta talebi getiren bir sistem kuruyoruz.',
      'hero.cta': 'Görüşme planlayın',
      'hero.scope': 'Hizmet kapsamını görün',

      'tag.landing': 'Açılış sayfası ve formlar',
      'tag.leads': 'Hastanın dilinde kampanyalar',
      'tag.premium': 'Yurt dışı pazarlar',

      'stat1.value': 'Türkiye ve Arnavutluk',
      'stat1.text': 'birlikte çalıştığımız kliniklerin bulunduğu ülkeler',
      'stat2.value': 'Birçok pazar',
      'stat2.text': 'farklı ülkelerden hastalar, her pazar kendi dilinde',
      'stat3.value': 'Meta + Google',
      'stat3.text': 'yurt dışındaki hastalara ulaştığımız kanallar',

      'focus.label': 'Uzmanlık alanımız',
      'focus.title': 'Yurt dışından hasta kabul eden klinikleri büyütüyoruz',
      'focus.lead': 'Sağlık turizmi, yerel pazardan farklı kurallarla işler. Hasta başka bir ülkedeki bir kliniği seçer, birkaç yerden teklif karşılaştırır ve seyahate karar vermeden önce çok daha fazla güvene ihtiyaç duyar. Bu yüzden pazar stratejisini, kampanyaları, iletişimi ve sonuç analizini tek bir tutarlı sistemde birleştiriyoruz.',
      'focus.b1.title': 'Doğru pazarlar ve işlemler',
      'focus.b1.text': 'Her şeyi her yerde tanıtmak yerine kliniğiniz için en yüksek potansiyele sahip ülkeleri ve işlemleri seçiyoruz.',
      'focus.b2.title': 'Mevzuata uygun iletişim',
      'focus.b2.text': 'Reklam görsellerini ve içerikleri, reklamların gösterildiği ülkenin mevzuatını ve Meta ile Google’ın reklam politikalarını dikkate alarak hazırlıyoruz.',
      'focus.b3.title': 'Sonuçlar üzerinde kontrol',
      'focus.b3.text': 'Hangi pazarların ve işlemlerin gerçekten hasta getirdiğini ve bütçeyi nerede artırmaya değer olduğunu görürsünüz.',

      'services.label': 'Hizmet kapsamı',
      'services.title': 'Kliniğiniz için neler yapıyoruz',
      'services.lead': 'Yurt dışındaki hastalardan talep getirmek bizim işimiz. Ekibiniz en iyi yaptığı işe, yani hastayla iletişime ve tedaviye odaklanır.',
      'svc1.title': 'Pazar ve işlem stratejisi',
      'svc1.text': 'Başlamaya değer pazarları ve işlemleri seçmek için kliniğin hizmetlerini, rakipleri ve ülkelerin potansiyelini analiz ediyoruz.',
      'svc2.title': 'Meta Ads ve Google Ads kampanyaları',
      'svc2.text': 'Facebook, Instagram ve Google’da yurt dışı pazarlarda, hastanın dilinde ve talep kalitesine odaklanarak reklamlarınızı yönetiyoruz.',
      'svc3.title': 'Açılış sayfası veya form',
      'svc3.text': 'Belirli bir işlem ve pazar için güven oluşturan ve hastaya yurt dışında tedavinin nasıl işlediğini anlatan bir sayfa ya da form hazırlıyoruz.',
      'svc4.title': 'Dijital varlık denetimi',
      'svc4.text': 'Kliniğin web sitesini, sosyal medya hesaplarını, Google işletme profilini ve mevcut reklamlarını, yasal hatalar açısından da inceliyoruz.',
      'svc5.title': 'Danışmanlık ve talep yönetimi desteği',
      'svc5.text': 'Taleplere nasıl hızlı ve etkili dönüş yapılacağı konusunda yol gösteriyoruz. Hastalarla görüşmeleri, hastanın dilinde kliniğin ekibi yürütür.',
      'svc6.title': 'Optimizasyon ve raporlama',
      'svc6.text': 'Sonuçları düzenli olarak analiz ediyor, kampanyaları iyileştiriyor ve en iyi sonuç veren pazarları ve işlemleri geliştiriyoruz.',

      'proc.label': 'En popüler işlemler',
      'proc.title': 'Hastaların en sık seyahat ettiği işlemler',
      'proc.lead': 'Kampanyalarımızı çoğunlukla yurt dışındaki hastaların seyahat etmeye hazır olduğu işlemler üzerine kuruyoruz. Aşağıda birkaç örnek bulabilirsiniz.',
      'proc.p1': 'Saç ekimi',
      'proc.p2': 'Rinoplasti',
      'proc.p3': 'Liposuction',
      'proc.p4': 'Meme büyütme',
      'proc.p5': 'Karın germe',

      'why.imgAlt': 'İşlem sırasında bir sağlık uzmanı',
      'why.label': 'Neden işe yarıyor',
      'why.title': 'Talep satmıyoruz. Yurt dışından hasta kazanım sistemi kuruyoruz.',
      'why.lead': 'Ameliyat için başka bir ülkeye uçacak bir hastanın zamana, güvene ve kendi dilinde net cevaplara ihtiyacı vardır. Bu yüzden tek tek reklamlar değil, hastayı ilk temastan klinikle görüşmeye kadar götüren bütün bir süreç hazırlıyoruz.',
      'why.b1': 'Tüm dünya için tek bir İngilizce kampanya yerine, belirli bir pazara uygun, hastanın dilinde reklamlar ve iletişim.',
      'why.b2': 'Net bir hedefi olmayan genel klinik tanıtımı yerine belirli işlemlere ve ülkelere yönlendirilen talepler.',
      'why.b3': 'Kampanya verilerine dayanarak ay ay, aşamalı olarak geliştirilen bir sistem.',

      'process.label': 'Süreç',
      'process.title': 'Adım adım iş birliği süreci',
      'process.lead': 'Bütçenizi riske atmıyoruz. Analizle başlıyor, kampanyaları sırayla başlatıyor ve yalnızca gerçekten hasta getiren çalışmaları ölçeklendiriyoruz.',
      'process.stage': 'Aşama',
      'step1.title': 'Klinik ve mevcut çalışmaların analizi',
      'step1.text': 'Kliniğin hizmetlerini, web sitesini, sosyal medyasını, Google işletme profilini ve mevcut reklamlarını inceliyoruz.',
      'step2.title': 'Pazar ve işlem seçimi',
      'step2.text': 'Başlangıç için en yüksek potansiyele sahip ülkeleri ve işlemleri seçiyoruz.',
      'step3.title': 'Strateji ve iletişim',
      'step3.text': 'Mesajları ve reklam görsellerini hastanın dilinde, mevzuata uygun ve kliniğin markasıyla uyumlu şekilde hazırlıyoruz.',
      'step4.title': 'Açılış sayfaları, formlar ve kampanyalar',
      'step4.text': 'Sayfaları veya formları hazırlıyor, Meta ve Google kampanyalarını birbiri ardına başlatıyoruz.',
      'step5.title': 'Optimizasyon',
      'step5.text': 'Sonuçları analiz ediyor, reklamları iyileştiriyor ve hangi pazarların en iyi çalıştığını kontrol ediyoruz.',
      'step6.title': 'Ölçeklendirme',
      'step6.text': 'Sonuç alınan yerlerde bütçeyi artırıyor, yeni pazarlar ve işlemler ekliyoruz.',

      'cta.label': 'Ön görüşme',
      'cta.title': 'Kliniğinizin büyümeye hazır olup olmadığını birlikte görelim',
      'cta.lead': 'Formu doldurun. Kliniğinizi ve mevcut çalışmalarınızı inceleyelim, görüşmede hangi pazarlar ve işlemlerle başlamanın mantıklı olduğunu gösterelim.',

      'form.name': 'Ad soyad',
      'form.namePh': 'Ahmet Yılmaz',
      'form.email': 'E-posta',
      'form.emailPh': 'iletisim@klinik.com.tr',
      'form.phone': 'Telefon / WhatsApp',
      'form.phonePh': '+90 500 000 00 00',
      'form.message': 'Hangi işlemleri ve pazarları büyütmek istiyorsunuz?',
      'form.messagePh': 'Kliniğinizin nerede olduğunu, hangi işlemleri yaptığını ve hangi ülkelerden hasta kazanmak istediğinizi kısaca yazın.',
      'form.submit': 'Talebi gönder',
      'form.note': 'Formu gönderdikten sonra görüşme planlamak için size dönüş yapacağız.',

      'ads.label': 'Örnek reklamlar',
      'ads.title': 'Bir hasta endişesi, bir reklam',
      'ads.lead': 'Her reklam, hastanın seyahatten önce kendine sorduğu tek bir soruyu kendi dilinde yanıtlar. Reklamları birbirine karşı test ediyor, hasta getirenleri tutuyoruz.',
      'ad.page': 'Kliniğiniz',
      'ad.sponsored': 'Sponsorlu',
      'ad.cta': 'Talep gönder',
      'ad.domain': 'kliniginiz.com',
      'ad1.q': 'Beni kim ameliyat edecek? Karar vermeden önce görün.',
      'ad1.h': 'Uçmadan önce cerrahınızla tanışın.',
      'ad1.sub': 'Kendi dilinizde online konsültasyon',
      'ad2.q': 'Kaç gün sürecek, kaç kez gelmem gerekecek?',
      'ad2.h': 'Bilet almadan önce tedavi planınız ve gün sayınız.',
      'ad2.sub': 'Fotoğraflarınıza göre hazırlanan plan',
      'ad3.q': 'Geldiğinizde gizli maliyet yok.',
      'ad3.h': 'Uçmadan önce yazılı tek bir fiyat.',
      'ad3.sub': 'Otel ve transfer dahil paket',
      'ads.tag1': 'Endişe',
      'ads.tag2': 'Yanıt',
      'ads.note': 'Örnek görseller. Her reklamın içeriğini klinikle birlikte belirliyor ve mevzuata uygunluğunu kontrol ediyoruz.',

      'ad.like': 'Beğen',
      'ad.comment': 'Yorum yap',
      'ad.share': 'Paylaş',

      'nav.results': 'Raporlama',
      'rep.label': 'Raporlama',
      'rep.title': 'Her hafta bir hastanın size kaça mal olduğunu görürsünüz',
      'rep.lead': 'Her pazar ve işlem için kısa bir rapor alırsınız. Talepten randevulu hastaya kadar tüm huniyi gösterir, bütçeyi de hastanın en ucuza geldiği yere kaydırırız.',
      'rep.funnel': 'Hasta hunisi',
      'rep.schema': 'Şema',
      'rep.f1': 'Reklamlardan gelen talepler',
      'rep.f2': 'Hastadan fotoğraf veya röntgen',
      'rep.f3': 'Klinikle görüşmeler',
      'rep.f4': 'Randevu alan hastalar',
      'rep.markets': 'Pazara göre hasta başına maliyet',
      'rep.mk1': 'Pazar A',
      'rep.mk2': 'Pazar B',
      'rep.mk3': 'Pazar C',
      'rep.best': 'Bütçeyi burada artırıyoruz',
      'rep.axis': 'daha düşük hasta maliyeti = daha kısa çubuk',
      'rep.note': 'Bütçe, hastanın en ucuza geldiği yere gider.',
      'rep.inreport': 'Raporda',
      'rep.m1': 'Talepler',
      'rep.m2': 'Talep başına maliyet',
      'rep.m3': 'Görüşmeler',
      'rep.m4': 'Randevu alan hastalar',
      'rep.m5': 'Hasta başına maliyet',
      'rep.schemaNote': 'Grafikler raporun yapısını gösterir, belirli bir kliniğin sonuçlarını değil.',

      'footer.text': 'Clinic Growth | Sağlık turizmi kliniklerini büyütüyoruz'
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
