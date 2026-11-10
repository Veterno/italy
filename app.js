'use strict';

// Все данные и изображения находятся в этом проекте. Сторонние библиотеки и сетевые запросы не требуются.
const ТОЧКА = (name, lon, lat, info, kind='Объект') => ({name, lon, lat, info, kind});
const ЛИНИЯ = (name, coords, info, kind='Линия') => ({name, coords, info, kind, lon:coords[Math.floor(coords.length/2)][0], lat:coords[Math.floor(coords.length/2)][1]});
const РАЙОН = (ref, color, opacity=.6) => ({ref, color, opacity});

const темы = [
  {
    id:'egp', title:'ЭГП и транспорт', icon:'↗', symbol:'↗', color:'#d87849',
    description:'Италия расположена в центре Средиземноморья. Она связывает рынки Центральной Европы с портами и морскими путями, но горы усложняют сухопутные перевозки.',
    facts:[['Главное преимущество','Приморское и транзитное положение, множество портов и выход на рынки Европы.'],['Сухопутные соседи','Франция, Швейцария, Австрия и Словения. Внутри страны — Ватикан и Сан-Марино.'],['Ограничения','Альпийский барьер, сейсмическая активность и различия в развитии регионов.']],
    lines:[
      ЛИНИЯ('Транспортная ось Север — Юг',[[9.19,45.46],[11.34,44.5],[11.25,43.78],[12.50,41.90],[14.27,40.85],[15.65,38.11],[13.36,38.12]],'Главная меридиональная цепочка городов и транспортных связей: Милан — Болонья — Флоренция — Рим — Неаполь — Сицилия.','Транспортный коридор'),
      ЛИНИЯ('Связи Запад — Восток',[[7.69,45.07],[9.19,45.46],[10.99,45.44],[12.315,45.44],[13.777,45.65]],'Связывает Турин и Милан с городами Венето и портом Триест.','Транспортный коридор'),
      ЛИНИЯ('Переходы через Альпы',[[9.19,45.46],[9.3,46.0],[9.17,46.6]],'Тоннели и перевалы соединяют индустриальный Север Италии с европейскими торговыми партнёрами.','Транзитный маршрут')
    ],
    points:[
      ТОЧКА('Генуя',8.946,44.405,'Крупный морской порт на Лигурийском побережье; ворота к промышленным районам Севера.','Порт'),
      ТОЧКА('Триест',13.7768,45.6495,'Важный порт северной Адриатики и узел международной логистики.','Порт'),
      ТОЧКА('Венеция',12.3155,45.4408,'Порт, туристический центр и узел путей северо-восточной Италии.','Порт'),
      ТОЧКА('Неаполь',14.268,40.852,'Порт Тирренского моря, крупная агломерация и транспортный узел Юга.','Порт'),
      ТОЧКА('Бари',16.872,41.117,'Порт Адриатического моря, морские связи с Балканами.','Порт'),
      ТОЧКА('Таранто',17.243,40.465,'Портовый и промышленный центр на Ионическом море.','Порт'),
      ТОЧКА('Милан',9.19,45.464,'Главный финансовый и деловой центр Северной Италии.','Город'),
      ТОЧКА('Рим',12.496,41.903,'Столица и транспортный узел Центральной Италии.','Столица')
    ]
  },
  {
    id:'relief',title:'Рельеф',icon:'▰',symbol:'▰',color:'#93805c',
    description:'Большая часть страны занята возвышенностями и горами. Главная равнина — Паданская, где сосредоточены сельское хозяйство и густая сеть городов.',
    facts:[['Альпы','Горная цепь на севере, формирующая естественную границу и горный климат.'],['Апеннины','Протягиваются вдоль полуострова; влияют на транспорт и расселение.'],['Паданская равнина','Наиболее значимая низменность: промышленный и аграрный пояс страны.']],
    areas:[РАЙОН('alps','#a1a48c',.83),РАЙОН('po','#a5d19d',.82)],
    lines:[ЛИНИЯ('Апеннинская горная цепь',[[8.9,44.5],[10.0,44.1],[11.2,43.5],[12.4,42.4],[13.6,41.7],[14.9,40.6],[15.7,39.3],[16.1,38.35]],'Горная ось Италии тянется от Лигурии к югу полуострова.','Горная цепь')],
    points:[ТОЧКА('Альпы',10.4,46.45,'Высокогорный пояс Севера с ледниковыми формами рельефа.','Горы'),ТОЧКА('Паданская равнина',10.1,45.12,'Главный сельскохозяйственный и индустриальный равнинный район.','Равнина'),ТОЧКА('Сицилия',13.9,37.45,'Крупнейший остров Средиземного моря; рельеф преимущественно холмистый и горный.','Остров'),ТОЧКА('Сардиния',9.13,40.03,'Крупный остров с горным внутренним районом и многочисленными бухтами.','Остров'),ТОЧКА('Этна',14.998,37.751,'Активный вулкан на острове Сицилия.','Вулкан'),ТОЧКА('Везувий',14.426,40.822,'Вулкан у Неаполя; природная опасность для плотнозаселённого района.','Вулкан')]
  },
  {
    id:'mountains',title:'Горы и вулканы',icon:'▲',symbol:'▲',color:'#a87955',
    description:'Альпы и Апеннины формируют ландшафты Италии. В стране есть высокие вершины, вулканы и районы повышенной сейсмичности.',
    facts:[['Альпийские вершины','Монблан, Монте-Роза и Маттерхорн находятся в пограничных горных районах.'],['Апеннины','Гран-Сассо и Монте-Ветторе — известные массивы центральной части страны.'],['Вулканизм','Этна и Везувий — важные природные объекты и потенциальные угрозы.']],
    areas:[РАЙОН('alps','#b7a98c',.65)],
    points:[
      ТОЧКА('Монблан',6.865,45.832,'Высочайший массив Альп на границе Италии и Франции.','Горная вершина'),
      ТОЧКА('Монте-Роза',7.867,45.937,'Высокогорный массив на итало-швейцарской границе.','Горная вершина'),
      ТОЧКА('Маттерхорн',7.658,45.976,'Знаменитая пирамидальная вершина на границе со Швейцарией.','Горная вершина'),
      ТОЧКА('Гран-Парадизо',7.268,45.517,'Высокая вершина Грайских Альп и один из символов национального парка.','Горная вершина'),
      ТОЧКА('Доломитовые Альпы',11.865,46.435,'Живописные известняковые горы с выразительными скальными вершинами.','Горы'),
      ТОЧКА('Гран-Сассо',13.565,42.47,'Высокий массив Центральных Апеннин; вершина Корно-Гранде.','Горная вершина'),
      ТОЧКА('Монте-Ветторе',13.265,42.819,'Известная вершина гор Сибиллини в Центральных Апеннинах.','Горная вершина'),
      ТОЧКА('Везувий',14.426,40.822,'Вулкан рядом с Неаполем; одно из наиболее известных вулканических мест Европы.','Вулкан'),
      ТОЧКА('Этна',14.999,37.751,'Высокий активный вулкан в восточной Сицилии.','Вулкан'),
      ТОЧКА('Стромболи',15.213,38.789,'Действующий вулкан на одном из Липарских островов.','Вулкан')]
  },
  {
    id:'climate',title:'Климат',icon:'☼',symbol:'☼',color:'#d78d40',
    description:'Климат меняется от альпийского на севере до средиземноморского на побережьях и юге. Тепло способствует земледелию, но засухи становятся серьёзной проблемой.',
    facts:[['Север и Альпы','Холоднее зимой, осадки и снег на высотах; в долинах континентальные черты.'],['Центр','Тёплое лето, благоприятные условия для винограда и оливок.'],['Юг и острова','Долгое жаркое лето, мягкие зимы, риск засух и нехватки воды.']],
    areas:[РАЙОН('climate-alps','#77a9d0',.82),РАЙОН('climate-north','#a6d6ba',.72),РАЙОН('climate-medit','#ecb46c',.65)],
    points:[ТОЧКА('Альпийский климат',10.8,46.7,'Горные температуры, снежные зимы и вертикальная поясность.','Климатическая зона'),ТОЧКА('Паданская равнина',10.1,45.1,'Более континентальные условия: жаркое лето, прохладная зима, частые туманы.','Климатическая зона'),ТОЧКА('Средиземноморский климат',12.2,41.2,'Сухое тёплое лето и более влажная мягкая зима.','Климатическая зона'),ТОЧКА('Жаркий юг',16.1,39.6,'Выраженная летняя засушливость, потребность в орошении.','Климатическая зона')]
  },
  {
    id:'water',title:'Реки и озёра',icon:'≈',symbol:'≈',color:'#278fba',
    description:'Воды Италии представлены альпийскими озёрами, реками По, Адидже, Тибр, Арно и другими. Горные реки особенно важны для гидроэнергетики.',
    facts:[['По','Крупнейшая речная система страны, питающая Паданскую равнину.'],['Озёра Севера','Гарда, Комо, Маджоре и Изео — центры отдыха и водного хозяйства.'],['ГЭС','Горные реки Альп и водохранилища используются для получения электричества.']],
    lines:[
      ЛИНИЯ('Река По',[[7.08,44.69],[7.57,45.06],[8.68,45.11],[9.47,45.08],[10.5,45.07],[11.41,44.98],[12.41,44.95]],'Крупнейшая по протяжённости река Италии; протекает по Паданской низменности.','Река'),
      ЛИНИЯ('Река Адидже',[[10.5,46.57],[11.07,46.06],[11.07,45.55],[11.17,45.43],[12.2,45.18]],'Альпийская река, протекающая через район Тренто и Вероны.','Река'),
      ЛИНИЯ('Река Тибр',[[12.08,43.82],[12.42,43.05],[12.47,42.45],[12.50,41.9],[12.23,41.72]],'На реке Тибр расположен Рим.','Река'),
      ЛИНИЯ('Река Арно',[[11.79,43.88],[11.25,43.77],[10.4,43.72],[10.28,43.69]],'Протекает через Флоренцию и Пизу, впадает в Лигурийское море.','Река'),
      ЛИНИЯ('Река Пьяве',[[12.37,46.53],[12.19,45.93],[12.52,45.58]],'Альпийская река северо-восточной Италии.','Река')
    ],
    points:[
      ТОЧКА('Озеро Гарда',10.65,45.62,'Крупнейшее озеро Италии, у подножья Альп.','Озеро'),
      ТОЧКА('Озеро Комо',9.27,46.01,'Глубокое ледниковое озеро к северу от Милана.','Озеро'),
      ТОЧКА('Озеро Маджоре',8.63,45.94,'Крупное альпийское озеро на границе со Швейцарией.','Озеро'),
      ТОЧКА('Озеро Изео',10.06,45.73,'Альпийское озеро между районами Бергамо и Брешиа.','Озеро'),
      ТОЧКА('Тразименское озеро',12.1,43.14,'Крупное озеро в Умбрии.','Озеро'),
      ТОЧКА('Озеро Больсена',11.96,42.64,'Вулканическое озеро в Лацио.','Озеро'),
      ТОЧКА('Альпийские ГЭС',10.25,46.47,'Горный рельеф и водотоки создают хорошие условия для гидроэнергетики.','Гидроэнергетика')
    ]
  },
  {
    id:'coast',title:'Моря и побережья',icon:'≋',symbol:'≋',color:'#2b91a5',
    description:'Приморское положение создаёт условия для торговли, портов, рыболовства, пляжного отдыха и круизного туризма.',
    facts:[['Четыре моря','Лигурийское, Тирренское, Ионическое и Адриатическое.'],['Два крупных острова','Сицилия и Сардиния расширяют морское и туристическое пространство страны.'],['Разнообразие берегов','От скалистых бухт Лигурии до песчаных берегов Адриатики.']],
    points:[
      ТОЧКА('Лигурийское море',8.1,43.37,'Северо-запад Средиземноморья у берегов Лигурии и Тосканы.','Море'),
      ТОЧКА('Тирренское море',10.31,40.75,'Между западным побережьем Италии, Сардинией и Сицилией.','Море'),
      ТОЧКА('Адриатическое море',15.31,43.73,'Восточная часть морских берегов страны, важные порты и пляжи.','Море'),
      ТОЧКА('Ионическое море',17.73,38.48,'Юго-восточные побережья Калабрии, Базиликаты, Апулии и Сицилии.','Море'),
      ТОЧКА('Чинкве-Терре',9.72,44.13,'Скалистое лигурийское побережье с яркими приморскими посёлками.','Побережье'),
      ТОЧКА('Амальфитанское побережье',14.59,40.63,'Знаменитые обрывистые берега к югу от Неаполя.','Побережье'),
      ТОЧКА('Итальянская Ривьера',8.26,43.89,'Курортное побережье Лигурии, включая Сан-Ремо.','Побережье'),
      ТОЧКА('Коста-Смеральда',9.49,41.09,'Известная курортная область на северо-востоке Сардинии.','Побережье'),
      ТОЧКА('Римини',12.58,44.07,'Крупный курортный район Адриатического побережья.','Побережье'),
      ТОЧКА('Саленто',18.09,40.18,'Полуостров на крайнем юго-востоке, омывается Адриатическим и Ионическим морями.','Побережье'),
      ТОЧКА('Мессинский пролив',15.62,38.24,'Узкий пролив между Сицилией и Калабрией.','Пролив')
    ]
  },
  {
    id:'parks',title:'Национальные парки',icon:'♣',symbol:'♣',color:'#2e9370',
    description:'Охраняемые территории сохраняют альпийские леса, редких животных, апеннинские ландшафты, вулканы и морские экосистемы.',
    facts:[['Горные экосистемы','Альпы и Апеннины: леса, луга, высокогорная фауна.'],['Средиземноморская природа','Прибрежные кустарники, островные биотопы и уникальные геологические памятники.'],['Значение','Охрана природы, экологический туризм и научные исследования.']],
    points:[
      ТОЧКА('Гран-Парадизо',7.25,45.53,'Один из старейших национальных парков страны, охраняет альпийскую природу.','Национальный парк'),
      ТОЧКА('Стельвио',10.55,46.43,'Большой альпийский парк на севере Италии.','Национальный парк'),
      ТОЧКА('Доломити-Беллунези',12.07,46.2,'Национальный парк в Доломитовых Альпах.','Национальный парк'),
      ТОЧКА('Чинкве-Терре',9.72,44.13,'Охраняемые приморские склоны, культурные ландшафты и деревни.','Национальный парк'),
      ТОЧКА('Гран-Сассо',13.41,42.49,'Национальный парк Центральных Апеннин.','Национальный парк'),
      ТОЧКА('Абруццо, Лацио и Молизе',13.84,41.81,'Лесные горные экосистемы, среда обитания редких животных.','Национальный парк'),
      ТОЧКА('Чиленто',15.29,40.31,'Национальный парк с горами, берегами и археологическими памятниками.','Национальный парк'),
      ТОЧКА('Поллино',16.15,39.9,'Большой горный национальный парк на юге Апеннин.','Национальный парк'),
      ТОЧКА('Гаргано',15.75,41.77,'Национальный парк на полуострове Гаргано в Апулии.','Национальный парк'),
      ТОЧКА('Аспромонте',15.91,38.16,'Парк в горной области южной Калабрии.','Национальный парк'),
      ТОЧКА('Этна',15.00,37.75,'Охрана вулканического ландшафта и редких природных сообществ.','Региональный парк'),
      ТОЧКА('Архипелаг Маддалена',9.45,41.24,'Морской национальный парк у северных берегов Сардинии.','Национальный парк')
    ]
  },
  {
    id:'settlement',title:'Размещение населения',icon:'●',symbol:'●',color:'#bb5e54',
    description:'Население концентрируется на Паданской равнине, в прибрежных агломерациях и крупных городах. В части внутренних и южных районов население сокращается.',
    facts:[['Главные агломерации','Рим, Милан, Неаполь и Турин.'],['Север','Густая сеть городов, рабочих мест и транспортных связей.'],['Демографический вызов','Низкая рождаемость, старение населения и региональные различия.']],
    areas:[РАЙОН('po','#d8b6a4',.38)],
    points:[
      ТОЧКА('Рим',12.496,41.903,'Столица страны; крупнейший административный и туристический центр.','Город'),
      ТОЧКА('Милан',9.19,45.464,'Финансы, мода, промышленность и крупнейшая северная агломерация.','Город'),
      ТОЧКА('Неаполь',14.268,40.852,'Крупная южная агломерация на Тирренском побережье.','Город'),
      ТОЧКА('Турин',7.687,45.07,'Важный промышленный и университетский центр.','Город'),
      ТОЧКА('Палермо',13.361,38.116,'Крупнейший город Сицилии, порт и исторический центр.','Город'),
      ТОЧКА('Генуя',8.946,44.405,'Приморский город и важный порт.','Город'),
      ТОЧКА('Болонья',11.343,44.495,'Транспортный, университетский и промышленный центр.','Город'),
      ТОЧКА('Флоренция',11.256,43.77,'Культурный и промышленный центр Тосканы.','Город'),
      ТОЧКА('Венеция',12.316,45.441,'Исторический город в лагуне и туристический центр.','Город'),
      ТОЧКА('Верона',10.992,45.439,'Важный городской узел северо-востока.','Город'),
      ТОЧКА('Бари',16.872,41.117,'Главный город Апулии и порт Адриатики.','Город'),
      ТОЧКА('Катания',15.087,37.503,'Крупный город у подножья Этны на Сицилии.','Город'),
      ТОЧКА('Кальяри',9.122,39.223,'Административный центр Сардинии.','Город'),
      ТОЧКА('Триест',13.777,45.650,'Порт, городской и научный центр у границы со Словенией.','Город'),
      ТОЧКА('Падуя',11.876,45.406,'Университетский и промышленный центр региона Венето.','Город'),
      ТОЧКА('Брешиа',10.219,45.54,'Промышленный город Ломбардии.','Город'),
      ТОЧКА('Перуджа',12.388,43.11,'Центр Умбрии, исторический университетский город.','Город'),
      ТОЧКА('Лечче',18.172,40.351,'Известный исторический центр Апулии.','Город')
    ]
  },
  {
    id:'economy',title:'Хозяйство',icon:'▦',symbol:'▦',color:'#b88450',
    description:'Хозяйство Италии сочетает индустриальный Север, крупные сервисные центры и южные аграрно-туристические территории. Север и Юг заметно различаются по уровню развития.',
    facts:[['Север','Милан, Турин, Генуя, Болонья: производство, торговля, логистика и услуги.'],['Центр','Рим: управление, деловые услуги и туризм; Тоскана: дизайн и лёгкая промышленность.'],['Юг','Более заметная роль сельского хозяйства, туризма и пищевой промышленности.']],
    areas:[РАЙОН('north','#83c7a1',.66),РАЙОН('center','#98bee4',.40),РАЙОН('south','#e5c695',.56)],
    points:[
      ТОЧКА('Милан',9.19,45.464,'Финансовая система, мода, дизайн и широкий спектр услуг.','Экономический центр'),
      ТОЧКА('Турин',7.687,45.07,'Машиностроение и автомобилестроение.','Промышленный центр'),
      ТОЧКА('Генуя',8.946,44.405,'Морская логистика и портовые производства.','Портовый центр'),
      ТОЧКА('Болонья',11.343,44.495,'Машиностроение, логистика и промышленная кооперация.','Промышленный центр'),
      ТОЧКА('Рим',12.496,41.903,'Государственное управление, услуги, туризм и информационная экономика.','Экономический центр'),
      ТОЧКА('Флоренция',11.256,43.77,'Туризм, культурные услуги, мода и ремесленные производства.','Экономический центр'),
      ТОЧКА('Неаполь',14.268,40.852,'Услуги, порт, туризм и предприятия промышленности.','Экономический центр'),
      ТОЧКА('Бари',16.872,41.117,'Услуги и логистика юго-востока Италии.','Экономический центр'),
      ТОЧКА('Катания',15.087,37.503,'Технологические производства, услуги и сельское хозяйство региона.','Экономический центр')
    ]
  },
  {
    id:'special',title:'Специализация',icon:'✦',symbol:'✦',color:'#a6659b',
    description:'Италия известна конкурентоспособными производствами, региональными брендами и экспортом продукции с узнаваемым дизайном и качеством.',
    facts:[['Машиностроение','Автомобили, промышленное оборудование, станки и автоматизация.'],['Мода и мебель','Текстиль, одежда, обувь, интерьерный дизайн.'],['Экспорт','Пищевая продукция, химия, фармацевтика, промышленные изделия.']],
    points:[
      ТОЧКА('Милан — мода',9.19,45.464,'Мировой центр моды, дизайна, деловых услуг и торговли.','Мода и дизайн'),
      ТОЧКА('Турин — автомобили',7.687,45.07,'Один из исторических центров итальянского автомобилестроения.','Машиностроение'),
      ТОЧКА('Модена — автомобили',10.925,44.647,'Известна автомобильными и инженерными предприятиями Эмилии-Романьи.','Машиностроение'),
      ТОЧКА('Болонья — техника',11.343,44.495,'Промышленная автоматизация, машины и упаковочное оборудование.','Машиностроение'),
      ТОЧКА('Прато — текстиль',11.099,43.881,'Один из главных текстильных центров Тосканы.','Текстиль'),
      ТОЧКА('Венето — мебель',12.1,45.72,'Производство мебели, техники, обуви и предметов дизайна.','Промышленный район'),
      ТОЧКА('Парма — пищевые товары',10.328,44.802,'Пищевая промышленность и переработка сельскохозяйственной продукции.','Пищевая промышленность'),
      ТОЧКА('Генуя — порт',8.946,44.405,'Морская торговля и транспортировка товаров.','Логистика'),
      ТОЧКА('Триест — логистика',13.777,45.65,'Международные морские и сухопутные связи.','Логистика'),
      ТОЧКА('Рим — услуги',12.496,41.903,'Управление, деловые услуги, культура и туризм.','Сфера услуг')
    ]
  },
  {
    id:'agri',title:'Сельское хозяйство и пищепром',icon:'✿',symbol:'✿',color:'#bd8e47',
    description:'Разнообразие климата позволяет выращивать зерновые, рис, виноград, оливки и цитрусовые. Пищевая промышленность перерабатывает местное сырьё в известную продукцию.',
    facts:[['Север','Рис, пшеница, молоко, сыр, мясные изделия.'],['Центр','Виноградники, оливковые рощи, вина и продукты переработки.'],['Юг и острова','Оливки, овощи, цитрусовые, виноград и средиземноморские культуры.']],
    areas:[РАЙОН('north','#a0cfa1',.44),РАЙОН('center','#d5bb89',.42),РАЙОН('south','#dfad74',.5)],
    points:[
      ТОЧКА('Рис — Паданская равнина',8.55,45.24,'Орошаемые поля риса особенно характерны для Пьемонта и Ломбардии.','Растениеводство'),
      ТОЧКА('Сыры — Парма',10.328,44.802,'Молочное животноводство и производство твёрдых сыров.','Пищевая отрасль'),
      ТОЧКА('Паста — Эмилия-Романья',11.343,44.495,'Крупный район пищевых производств.','Пищевая отрасль'),
      ТОЧКА('Вино — Тоскана',11.22,43.52,'Виноградники, виноделие и агротуризм.','Виноградарство'),
      ТОЧКА('Вино — Пьемонт',8.04,44.7,'Винодельческие территории Ланге и Монферрато.','Виноградарство'),
      ТОЧКА('Оливки — Апулия',16.68,40.89,'Один из важнейших районов выращивания оливок.','Растениеводство'),
      ТОЧКА('Томаты — Кампания',14.73,40.66,'Теплолюбивые овощи и пищевая переработка.','Растениеводство'),
      ТОЧКА('Цитрусовые — Сицилия',14.50,37.42,'Апельсины, лимоны и другие цитрусовые культуры.','Растениеводство'),
      ТОЧКА('Овцеводство — Сардиния',9.16,40.11,'Животноводство и производство овечьих сыров.','Животноводство'),
      ТОЧКА('Оливки — Калабрия',16.49,39.4,'Оливковые рощи и переработка оливок.','Растениеводство')
    ]
  },
  {
    id:'tourism',title:'Туризм',icon:'★',symbol:'★',color:'#bb6756',
    description:'Италия привлекает историческими городами, искусством, морскими курортами, Альпами, озёрами и вулканами. Туристические районы работают круглый год.',
    facts:[['Культурный туризм','Рим, Флоренция, Венеция, Пиза и множество исторических городов.'],['Горный отдых','Доломитовые Альпы, зимние курорты и альпийские озёра.'],['Морской отдых','Амальфитанское побережье, Лигурия, Сицилия, Сардиния, Адриатика.']],
    points:[
      ТОЧКА('Рим',12.496,41.903,'Античные памятники, Колизей, музеи и архитектура разных эпох.','Культурный туризм'),
      ТОЧКА('Венеция',12.316,45.441,'Уникальный город-лагуна, каналы, мосты и исторические здания.','Культурный туризм'),
      ТОЧКА('Флоренция',11.256,43.77,'Архитектура, музеи и искусство эпохи Возрождения.','Культурный туризм'),
      ТОЧКА('Пиза',10.401,43.723,'Известна архитектурным ансамблем Площади чудес.','Культурный туризм'),
      ТОЧКА('Верона',10.992,45.439,'Исторические памятники, архитектура и фестивали.','Культурный туризм'),
      ТОЧКА('Доломитовые Альпы',11.865,46.435,'Горные маршруты, зимний спорт и живописные виды.','Горный туризм'),
      ТОЧКА('Озеро Гарда',10.65,45.62,'Озёрные курорты, спорт и отдых у подножия Альп.','Природный туризм'),
      ТОЧКА('Чинкве-Терре',9.72,44.13,'Пешеходные маршруты и знаменитые приморские деревни.','Приморский туризм'),
      ТОЧКА('Амальфи',14.59,40.63,'Живописные скалистые берега Тирренского моря.','Приморский туризм'),
      ТОЧКА('Римини',12.58,44.07,'Традиционный курорт Адриатического моря.','Приморский туризм'),
      ТОЧКА('Палермо',13.361,38.116,'Культура Сицилии, рынки, музеи и историческая архитектура.','Культурный туризм'),
      ТОЧКА('Этна',14.999,37.751,'Экскурсии к вулканическим ландшафтам Сицилии.','Природный туризм'),
      ТОЧКА('Коста-Смеральда',9.49,41.09,'Морские курорты и живописные бухты Сардинии.','Приморский туризм')
    ]
  },
  {
    id:'resources',title:'Полезные ископаемые и энергия',icon:'◆',symbol:'◆',color:'#9871a4',
    description:'Минеральные ресурсы Италии разнообразны, но запасов нефти и газа недостаточно для полного самообеспечения. Выделяются природный газ, нефть, мрамор, гидроэнергия и геотермальное тепло.',
    facts:[['Газ и нефть','Добыча в долине По, на шельфе и в отдельных районах Юга.'],['Каменные материалы','Каррарский мрамор — всемирно известный строительный и декоративный материал.'],['Возобновляемая энергия','Альпийские ГЭС и геотермальные электростанции Тосканы.']],
    points:[
      ТОЧКА('Природный газ — долина По',11.44,44.94,'Исторический нефтегазоносный район на севере страны.','Газ'),
      ТОЧКА('Газ — Адриатический шельф',12.76,44.75,'Морские газовые месторождения у Адриатического побережья.','Газ'),
      ТОЧКА('Нефть — Базиликата',15.88,40.25,'Один из главных районов нефтедобычи Италии.','Нефть'),
      ТОЧКА('Каррарский мрамор',10.1,44.08,'Знаменитые каменоломни белого мрамора в Тоскане.','Строительное сырьё'),
      ТОЧКА('Лардерелло — геотермальная энергия',10.88,43.26,'Использование тепла недр для выработки электроэнергии.','Геотермальная энергия'),
      ТОЧКА('Альпийские ГЭС',9.8,46.35,'Высокие перепады высот и горные воды способствуют гидроэнергетике.','Гидроэнергия'),
      ТОЧКА('Солнечная энергетика — Юг',16.58,39.45,'Большой потенциал солнечной генерации благодаря инсоляции.','Возобновляемая энергия')
    ]
  }
];

// Вся видимая информация карты формируется в браузере, без внешних картографических серверов.
const MAP_NS='http://www.w3.org/2000/svg';
const project=(lon,lat)=>({x:(lon-4.4)*65, y:(48.45-lat)*69});
const svg=document.getElementById('italy-map');
const zoneLayer=document.getElementById('zone-layer');
const lineLayer=document.getElementById('line-layer');
const markersLayer=document.getElementById('markers-layer');
const viewport=document.getElementById('map-viewport');
const baseOrientiers=document.getElementById('base-orientiers');
const controls=document.getElementById('layer-controls');
const colors={Город:'#bb5e54',Столица:'#bb5e54',Порт:'#2d869b',Река:'#247da9',Озеро:'#247da9',Море:'#2d869b',Горы:'#968265',Вулкан:'#bd5f49','Горная вершина':'#968265','Национальный парк':'#328a63','Региональный парк':'#328a63'};
const symbols={Город:'•',Столица:'★',Порт:'⚑',Река:'≈',Озеро:'≈',Море:'≈',Вулкан:'▲','Горная вершина':'▲',Горы:'▲','Национальный парк':'♣','Региональный парк':'♣'};
let active=темы[0];
let currentFeature=null;
let zoom=1;
let pan={x:0,y:0};
const center={x:515,y:500};
const allObjects=[];
for(const theme of темы){
 for(const [index,item] of [...(theme.points||[]),...(theme.lines||[])].entries()){
   item._key=theme.id+'-'+index;
   allObjects.push({...item, theme:theme.id, themeName:theme.title});
 }
}

function createSVG(tag,attributes={}){
 const element=document.createElementNS(MAP_NS,tag);
 Object.entries(attributes).forEach(([k,v])=>element.setAttribute(k,String(v)));
 return element;
}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function updateMapTransform(){
 viewport.setAttribute('transform',`translate(${pan.x.toFixed(1)} ${pan.y.toFixed(1)}) translate(${center.x} ${center.y}) scale(${zoom.toFixed(3)}) translate(${-center.x} ${-center.y})`);
 document.getElementById('zoom-out').disabled=zoom<=1.001;
 document.getElementById('zoom-in').disabled=zoom>=3.95;
}
function setZoom(value){zoom=Math.max(1,Math.min(4,value));const limit=430*(zoom-1)+120;pan.x=Math.max(-limit,Math.min(limit,pan.x));pan.y=Math.max(-limit,Math.min(limit,pan.y));updateMapTransform();}
function resetMap(){zoom=1;pan={x:0,y:0};updateMapTransform();}
function zoomToFeature(feature){const p=project(feature.lon,feature.lat);zoom=window.innerWidth<560?1.9:1.55;pan.x=-(p.x-center.x)*zoom;pan.y=-(p.y-center.y)*zoom;updateMapTransform();}
function clear(node){node.replaceChildren();}
function buildLabelPosition(p,label,placed,index){
 const width=label.length*7.6+12;
 const guesses=[{dx:17,dy:-15,anchor:'start'},{dx:17,dy:21,anchor:'start'},{dx:-17,dy:-15,anchor:'end'},{dx:-17,dy:21,anchor:'end'},{dx:0,dy:-23,anchor:'middle'}];
 let fallback=guesses[index%guesses.length], bestScore=Infinity;
 for(const g of guesses){
  const xx=p.x+g.dx,yy=p.y+g.dy;
  const left=g.anchor==='end'?xx-width:g.anchor==='middle'?xx-width/2:xx;
  const box={x:left-3,y:yy-14,w:width+6,h:19};
  let score=0;
  if(box.x<5||box.x+box.w>1023||box.y<5||box.y+box.h>995)score+=90;
  for(const b of placed){const overlap=Math.max(0,Math.min(box.x+box.w,b.x+b.w)-Math.max(box.x,b.x))*Math.max(0,Math.min(box.y+box.h,b.y+b.h)-Math.max(box.y,b.y));score+=overlap;}
  if(score<bestScore){bestScore=score;fallback={...g,box};}
  if(score===0)break;
 }
 placed.push(fallback.box);
 return fallback;
}
function showFeature(feature){
 currentFeature=feature;
 document.querySelectorAll('.map-marker').forEach(el=>el.classList.toggle('selected',el.dataset.key===feature._key));
 const node=document.getElementById('selected-object');
 node.innerHTML=`<span class="selected-type">${esc(feature.kind.toUpperCase())}</span><strong>${esc(feature.name)}</strong><p>${esc(feature.info)}</p>`;
 const toast=document.getElementById('map-toast');
 if(toast){toast.innerHTML=`<strong>${esc(feature.name)}</strong><span>${esc(feature.info)}</span>`;toast.hidden=false;}
}
function hideToast(){const node=document.getElementById('map-toast');if(node)node.hidden=true;}
function renderMarker(feature,placed,index){
 const p=project(feature.lon,feature.lat);
 const color=colors[feature.kind]||active.color;
 const group=createSVG('g',{class:'map-marker',role:'button',tabindex:'0','aria-label':feature.name+', '+feature.kind,'data-key':feature._key,style:`--feature-color:${color}`});
 group.append(createSVG('circle',{cx:p.x,cy:p.y,r:27,class:'marker-hit'}));
 group.append(createSVG('circle',{cx:p.x,cy:p.y,r:11.7,class:'marker-dot'}));
 const mark=createSVG('text',{x:p.x,y:p.y+1,class:'marker-symbol'});mark.textContent=symbols[feature.kind]||'•';group.append(mark);
 const pos=buildLabelPosition(p,feature.name,placed,index);
 const label=createSVG('text',{x:(p.x+pos.dx).toFixed(1),y:(p.y+pos.dy).toFixed(1),'text-anchor':pos.anchor,class:'marker-label'});
 label.textContent=feature.name;group.append(label);
 const title=createSVG('title');title.textContent=feature.name+': '+feature.info;group.append(title);
 group.addEventListener('click',()=>{if(!wasDragging)showFeature(feature);});
 group.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();showFeature(feature);}});
 markersLayer.append(group);
}
function renderLine(item,index){
 const points=item.coords.map(pair=>project(pair[0],pair[1]));
 const d=points.map((p,j)=>(j?'L':'M')+p.x.toFixed(1)+','+p.y.toFixed(1)).join(' ');
 lineLayer.append(createSVG('path',{d,class:'feature-line-outline'}));
 lineLayer.append(createSVG('path',{d,class:'feature-line'+(item.kind==='Транзитный маршрут'?' line-secondary':''),style:`--feature-color:${active.color}`}));
}
function renderLayer(themeId,preserveZoom=false){
 const next=темы.find(t=>t.id===themeId);if(!next)return;
 active=next;currentFeature=null;
 if(!preserveZoom)resetMap();
 clear(zoneLayer);clear(lineLayer);clear(markersLayer);
 for(const a of next.areas||[]){zoneLayer.append(createSVG('use',{href:'#zone-'+a.ref,class:'area-path',fill:a.color,opacity:a.opacity}));}
 (next.lines||[]).forEach(renderLine);
 const placed=[];
 const allFeatures=[...(next.points||[]),...(next.lines||[])];
 allFeatures.forEach((f,i)=>renderMarker(f,placed,i));
 // Названия базовых городов не дублируются поверх маркеров тематических слоёв.
 baseOrientiers.style.opacity=['settlement','economy','tourism','special','egp'].includes(next.id)?'0':'.85';
 document.getElementById('map-current-title').textContent=next.title;
 document.getElementById('map-count').textContent='Объектов: '+allFeatures.length;
 document.getElementById('layer-title').textContent=next.title;
 document.getElementById('layer-description').textContent=next.description;
 document.getElementById('layer-symbol').textContent=next.symbol;
 document.getElementById('layer-insights').innerHTML=next.facts.map(([h,txt])=>`<div class="insight-card"><strong>${esc(h)}</strong><span>${esc(txt)}</span></div>`).join('');
 document.getElementById('selected-object').innerHTML='<div class="selected-empty">Нажмите на точку или подпись объекта на карте, чтобы прочитать пояснение.</div>';
 controls.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.theme===next.id)));
 hideToast();
}
for(const theme of темы){
 const b=document.createElement('button');b.type='button';b.className='layer-button';b.dataset.theme=theme.id;
 b.setAttribute('aria-pressed','false');b.innerHTML=`<span class="layer-emoji" aria-hidden="true">${esc(theme.icon)}</span><span>${esc(theme.title)}</span>`;
 b.addEventListener('click',()=>renderLayer(theme.id));controls.append(b);
}
const toast=document.createElement('div');toast.id='map-toast';toast.className='map-toast';toast.hidden=true;document.querySelector('.map-svg-wrap').append(toast);
renderLayer('egp');
updateMapTransform();

// Поиск охватывает все темы, а не только открытый слой.
const search=document.getElementById('map-search'),searchResults=document.getElementById('search-results');
const normalize=t=>String(t).toLocaleLowerCase('ru').replace(/ё/g,'е');
function chooseSearchResult(item){
 renderLayer(item.theme);
 const feature=[...(active.points||[]),...(active.lines||[])].find(x=>x._key===item._key);
 if(feature){zoomToFeature(feature);showFeature(feature);}
 search.value=item.name;searchResults.hidden=true;
 document.getElementById('map').scrollIntoView({behavior:'smooth',block:'start'});
}
function renderSearch(){
 const query=normalize(search.value.trim());
 if(query.length<2){searchResults.hidden=true;return;}
 const matches=allObjects.filter(x=>normalize(x.name+' '+x.kind+' '+x.themeName+' '+x.info).includes(query)).slice(0,9);
 clear(searchResults);
 if(!matches.length){const d=document.createElement('div');d.className='search-no-results';d.textContent='Ничего не найдено. Попробуйте другое название.';searchResults.append(d);}
 for(const item of matches){const b=document.createElement('button');b.type='button';b.className='search-result';b.setAttribute('role','option');b.innerHTML=`<strong>${esc(item.name)}</strong><small>${esc(item.themeName)}</small>`;b.addEventListener('click',()=>chooseSearchResult(item));searchResults.append(b);}
 searchResults.hidden=false;
}
search.addEventListener('input',renderSearch);
search.addEventListener('keydown',e=>{if(e.key==='Escape')searchResults.hidden=true;if(e.key==='Enter'){const first=searchResults.querySelector('button');if(first){e.preventDefault();first.click();}}});
document.addEventListener('click',e=>{if(!e.target.closest('.map-search-wrap'))searchResults.hidden=true;});

// Перетаскивание мышью и касанием, изменение масштаба колесом и жестом двумя пальцами.
const pointers=new Map();let lastPointer=null, pinchDistance=0, wasDragging=false;
function svgPoint(evt){const point=svg.createSVGPoint();point.x=evt.clientX;point.y=evt.clientY;return point.matrixTransform(svg.getScreenCTM().inverse());}
svg.addEventListener('pointerdown',e=>{if(e.button!==0&&e.pointerType==='mouse')return;svg.setPointerCapture(e.pointerId);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});lastPointer=svgPoint(e);wasDragging=false;svg.classList.add('dragging');});
svg.addEventListener('pointermove',e=>{
 if(!pointers.has(e.pointerId))return;
 const old=pointers.get(e.pointerId);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
 if(pointers.size>=2){const [a,b]=[...pointers.values()];const dist=Math.hypot(a.x-b.x,a.y-b.y);if(pinchDistance>0){setZoom(zoom*dist/pinchDistance);}pinchDistance=dist;wasDragging=true;return;}
 if(Math.hypot(e.clientX-old.x,e.clientY-old.y)>2){wasDragging=true;}
 const point=svgPoint(e);
 if(lastPointer&&wasDragging){pan.x+=point.x-lastPointer.x;pan.y+=point.y-lastPointer.y;updateMapTransform();}
 lastPointer=point;
});
function releasePointer(e){pointers.delete(e.pointerId);if(pointers.size<2)pinchDistance=0;if(!pointers.size){lastPointer=null;svg.classList.remove('dragging');setTimeout(()=>{wasDragging=false;},90);}}
svg.addEventListener('pointerup',releasePointer);svg.addEventListener('pointercancel',releasePointer);svg.addEventListener('lostpointercapture',releasePointer);
svg.addEventListener('wheel',e=>{e.preventDefault();setZoom(zoom*(e.deltaY<0?1.16:1/1.16));},{passive:false});
document.getElementById('zoom-in').addEventListener('click',()=>setZoom(zoom*1.25));
document.getElementById('zoom-out').addEventListener('click',()=>setZoom(zoom/1.25));
document.getElementById('zoom-reset').addEventListener('click',resetMap);
document.getElementById('map-reset').addEventListener('click',()=>{renderLayer('egp');resetMap();});
const mobileQuery=window.matchMedia('(max-width:560px)');
function updateMapViewport(){svg.setAttribute('preserveAspectRatio',mobileQuery.matches?'xMidYMid slice':'xMidYMid meet');}
updateMapViewport();mobileQuery.addEventListener?.('change',updateMapViewport);

// Переключение темы с сохранением выбора на устройстве.
const themeButton=document.getElementById('theme-toggle');
function updateThemeButton(){const dark=document.documentElement.dataset.theme==='dark';document.getElementById('theme-icon').textContent=dark?'☀':'☾';themeButton.querySelector('.theme-text').textContent=dark?'Светлая тема':'Тёмная тема';themeButton.setAttribute('aria-label',dark?'Включить светлую тему':'Включить тёмную тему');document.querySelector('meta[name="theme-color"]').content=dark?'#101d1d':'#f5f6f1';}
updateThemeButton();
themeButton.addEventListener('click',()=>{const dark=document.documentElement.dataset.theme==='dark';document.documentElement.dataset.theme=dark?'light':'dark';try{localStorage.setItem('тема-италия',dark?'light':'dark');}catch(_){}updateThemeButton();});

// Локальная галерея исходной презентации без подписей источников.
const slideTitles=[
 'Италия — географическая характеристика','Визитная карточка','ЭГП: Средиземноморье','ЭГП: транспорт и транзит',
 'Рельеф','Климат','Водные и минеральные ресурсы','Природные ландшафты',
 'Население','Размещение населения','Хозяйственные районы','Специализация',
 'Сельское хозяйство и пищевая промышленность','Туризм','Главные выводы и вопросы'
];
let slideIndex=0;
const slideImage=document.getElementById('slide-image');
const thumbs=document.getElementById('slide-thumbnails');
const player=document.getElementById('slide-player');
const pathForSlide=i=>`slides/${String(i+1).padStart(2,'0')}.webp`;
function setSlide(i){
 slideIndex=Math.max(0,Math.min(slideTitles.length-1,i));
 slideImage.src=pathForSlide(slideIndex);
 slideImage.alt=`Слайд ${slideIndex+1} из ${slideTitles.length}: ${slideTitles[slideIndex]}`;
 document.getElementById('slide-counter').textContent=String(slideIndex+1).padStart(2,'0')+' / 15';
 document.getElementById('slide-subtitle').textContent=slideTitles[slideIndex];
 document.getElementById('slide-prev').disabled=slideIndex===0;
 document.getElementById('slide-next').disabled=slideIndex===slideTitles.length-1;
 [...thumbs.children].forEach((b,j)=>b.setAttribute('aria-current',String(j===slideIndex)));
 const thumb=thumbs.children[slideIndex];if(thumb){const left=thumb.offsetLeft-thumbs.offsetLeft-thumbs.clientWidth/2+thumb.clientWidth/2;thumbs.scrollTo({left:Math.max(0,left),behavior:'smooth'});}
}
for(let i=0;i<slideTitles.length;i++){
 const button=document.createElement('button');button.type='button';button.className='thumb';button.title=slideTitles[i];button.setAttribute('aria-label',`Показать слайд ${i+1}: ${slideTitles[i]}`);
 const im=document.createElement('img');im.src=`slides/${String(i+1).padStart(2,'0')}-mini.webp`;im.alt='';im.width=240;im.height=135;im.loading='lazy';
 const caption=document.createElement('small');caption.textContent=String(i+1).padStart(2,'0')+' · '+slideTitles[i];caption.style.cssText='overflow:hidden;text-overflow:ellipsis;white-space:nowrap';
 button.append(im,caption);button.addEventListener('click',()=>setSlide(i));thumbs.append(button);
}
document.getElementById('slide-prev').addEventListener('click',()=>setSlide(slideIndex-1));
document.getElementById('slide-next').addEventListener('click',()=>setSlide(slideIndex+1));
setSlide(0);
let swipeStart=null;
const slideFrame=document.getElementById('slide-frame');
slideFrame.addEventListener('touchstart',e=>{if(e.touches.length===1)swipeStart={x:e.touches[0].clientX,y:e.touches[0].clientY};},{passive:true});
slideFrame.addEventListener('touchend',e=>{if(!swipeStart||!e.changedTouches[0])return;const dx=e.changedTouches[0].clientX-swipeStart.x;const dy=e.changedTouches[0].clientY-swipeStart.y;if(Math.abs(dx)>44&&Math.abs(dx)>Math.abs(dy)*1.25)setSlide(slideIndex+(dx<0?1:-1));swipeStart=null;},{passive:true});
document.addEventListener('keydown',e=>{
 if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName))return;
 if(e.key!=='ArrowLeft'&&e.key!=='ArrowRight')return;
 const bounds=player.getBoundingClientRect();
 const visible=bounds.top<window.innerHeight*.78&&bounds.bottom>window.innerHeight*.25;
 if(!visible&&!player.contains(document.activeElement))return;
 e.preventDefault();setSlide(slideIndex+(e.key==='ArrowRight'?1:-1));
});
document.getElementById('slide-fullscreen').addEventListener('click',async()=>{
 try{if(document.fullscreenElement)await document.exitFullscreen();else if(player.requestFullscreen)await player.requestFullscreen();}catch(_){/* На некоторых мобильных браузерах полноэкранный режим недоступен. */}
});
// Загружаем ближайшие слайды после показа, сохраняя трафик на телефоне.
slideImage.addEventListener('load',()=>{for(let i=slideIndex+1;i<=Math.min(14,slideIndex+2);i++){const img=new Image();img.src=pathForSlide(i);}});
