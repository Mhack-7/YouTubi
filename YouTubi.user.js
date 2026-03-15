// ==UserScript==
// @name         YouTubi
// @namespace 	https://github.com/Mhack-7/YouTubi
// @version      4.7.0
// @description YouTubi
// @author       Mhack
// @match        *://www.youtube.com/*
// @match        *://music.youtube.com/*
// @icon          https://raw.githubusercontent.com/Mhack-7/YouTubi/refs/heads/main/yt-favicon2.ico
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_listValues
// @grant GM_deleteValue
// @grant GM_info
// @grant GM_openInTab
// @run-at document-start
// @updateURL    https://github.com/Mhack-7/YouTubi/releases/latest/download/YouTubi.user.js
// @downloadURL  https://github.com/Mhack-7/YouTubi/releases/latest/download/YouTubi.user.js
// ==/UserScript==
(async () => {
	//#region Налаштування
	let RTfirstLaunch = await GM_getValue('rt-firstLaunch')
	let RTcolors = await getSavedSetting('rt-colors')
	let RTanimateLoad = await getSavedSetting('rt-animateLoad')
	let RThideAllTrash = await getSavedSetting('rt-hideAllTrash')
	let RTwatchedVideo = await getSavedSetting('rt-watchedVideo')
	let RTbetterFont = await getSavedSetting('rt-betterFont')
	let RTvideoDateCreated = await getSavedSetting('rt-videoDateCreated')
	let RTfocusFix = await getSavedSetting('rt-focusFix')
	let RTnotificationsRemove = await getSavedSetting('rt-notificationsRemove')
	let RTcustomTitleIcon = await getSavedSetting('rt-customTitleIcon')
	let RTreturnDislikes = await getSavedSetting('rt-returnDislikes')
	let RTfullVideoNames = await getSavedSetting('rt-fullVideoNames')
	let RTstopChannelTrailer = await getSavedSetting('rt-stopChannelTrailer')
	let RTremainingTime = await getSavedSetting('rt-remainingTime')
	let RTrememberTime = await getSavedSetting('rt-rememberTime')
	let RTvideoQuality = await getSavedSetting('rt-videoQuality')
	let RTfixChannelLinks = await getSavedSetting('rt-fixChannelLinks')
	let RTshowTranslationTime = await getSavedSetting('rt-showTranslationTime')
	let RTdisablePlayerSleep = await getSavedSetting('rt-disablePlayerSleep')
	let RTshowVideoCountOnChannel = await getSavedSetting('rt-showVideoCountOnChannel')
	let RThotkeysAlwaysActive = await getSavedSetting('rt-hotkeysAlwaysActive')
	let RTscrollVolume = await getSavedSetting('rt-scrollVolume')
	let RTmiddleClickSearch = await getSavedSetting('rt-middleClickSearch')
	let RTtranslateCommentButton = await getSavedSetting('rt-translateCommentButton')
	let RTscrollSpeed = await getSavedSetting('rt-scrollSpeed')
	let RTDefaultVolume = await getSavedSetting('rt-defaultVolume')
	let RTRememberSpeed = await getSavedSetting('rt-rememberSpeed')
	let RTRememberSpeedBypass = await getSavedSetting('rt-rememberSpeedBypass')
	let RTFixesForNewYouTube = await getSavedSetting('rt-fixesForNewYouTube')
	let RTSettingsDateOnVideoBackgroundChange = await getSavedSetting('rt-settings-dateOnVideoBackgroundChange')
	// NEW FEATURES
	let RTskipAds = await getSavedSetting('rt-skipAds')
	let RTsponsorBlock = await getSavedSetting('rt-sponsorBlock')
		let RTscreenshotFrame = await getSavedSetting('rt-screenshotFrame')
	let RTloopVideo = await getSavedSetting('rt-loopVideo')
			let RTchannelAvatar = await getSavedSetting('rt-channelAvatar')
	let RTdefaultCommentSort = await getSavedSetting('rt-defaultCommentSort')
	let RTcollapseReplies = await getSavedSetting('rt-collapseReplies')
	let RThighlightOwner = await getSavedSetting('rt-highlightOwner')
	let RThideShorts = await getSavedSetting('rt-hideShorts')
	let RThidePremieresLive = await getSavedSetting('rt-hidePremieresLive')
	let RTrememberChannelTab = await getSavedSetting('rt-rememberChannelTab')
	let RTcustomCSSEditor = await getSavedSetting('rt-customCSSEditor')
	let RTcompactSidebar = await getSavedSetting('rt-compactSidebar')
		let RTabsoluteLikes = await getSavedSetting('rt-absoluteLikes')
	let RTfilterShortVideos = await getSavedSetting('rt-filterShortVideos')
		let RTcopyTimestampButton = await getSavedSetting('rt-copyTimestampButton')
		let RTrestoreQualityAfterAd = await getSavedSetting('rt-restoreQualityAfterAd')
	let RTdisableAutoplay = await getSavedSetting('rt-disableAutoplay')
	// Color settings
	let RTColorWatchedLabelBackground = await GM_getValue('rt-color-watchedLabelBackground') ?? '#343a41'
	let RTColorWatchedBackground = await GM_getValue('rt-color-watchedBackground') ?? '#bdbdbd'
	let RTColorYTMain = await GM_getValue('rt-color-YTMain') ?? '#1b222a'
	let RTColorYTAdditional = await GM_getValue('rt-color-YTAdditional') ?? '#222b35'
	let RTColorYTPlayer = await GM_getValue('rt-color-YTPlayer') ?? '#11161c'
	let RTColorYTText = await GM_getValue('rt-color-YTText') ?? '#c9d0d3'
	let RTColorYTLink = await GM_getValue('rt-color-YTLink') ?? '#a1bad7'
	let RTColorYTVideoProgress = await GM_getValue('rt-color-YTVideoProgress') ?? '#5785ba'
	let RTSelectYTColors = await GM_getValue('rt-select-YTColors') ?? 'default'
	let RTSelectVideoQuality = await GM_getValue('rt-select-videoQuality') ?? 'hd1440'
	let RTSelectTitleIconColor = await GM_getValue('rt-select-title-icon-color') ?? 'blue'
	let RTDefaultVolumeLevel = await GM_getValue('rt-select-defaultVolumeLevel') ?? '30'
	let RTSelectRememberSpeedLevel = await GM_getValue('rt-select-rememberSpeedLevel') ?? '1'
	let RTHeadTop = await GM_getValue('rt-head-top') ?? '100px'
	let RTHeadLeft = await GM_getValue('rt-head-left') ?? '100px'
	let RTUpdateCheck = await getSavedSetting('rt-updateCheck') ? true : await GM_getValue('rt-updateCheck') === undefined
	let RTSponsorBlockCategories = await GM_getValue('rt-sponsorblock-categories') ?? 'sponsor,intro,outro,selfpromo'
	let RTFilterMinDuration = await GM_getValue('rt-filter-min-duration') ?? '3'
	let RTCustomCSS = await GM_getValue('rt-custom-css') ?? ''
	let RTCommentSortDefault = await GM_getValue('rt-comment-sort-default') ?? 'top'
	//#endregion
	//#region Перемінні
	let apiKeysArrayLength = 0, noValidApiKeys = false, userLanguage = GetUserLanguage(), apiKeyQueue = Promise.resolve()
	let playerHoverHandler, isScrolling = false, wheel = false
	let sponsorBlockSegments = [], sponsorBlockCheckInterval = null
	let _ssKeyFn = null, _loopKeyFn = null, _cleanObs = null, _filterObs = null
	//#endregion
	// Виправлення document.head null для Firefox
	if (navigator.userAgent.includes('Firefox')) {
		while (!document.head) {
			await new Promise(resolve => setTimeout(resolve, 1));
		}
	}
	// Обходимо використання HTML коду
	if (window.trustedTypes)
		try { trustedTypes.createPolicy('default', { createHTML: input => input }); } catch { }
	if (RTanimateLoad) {
		waitSelector('head').then(() => {
			pushCSS('body, ytd-app, #background.ytd-masthead, #container.ytd-searchbox, #chips-wrapper.ytd-feed-filter-chip-bar-renderer, yt-chip-cloud-chip-renderer[chip-style=STYLE_HOME_FILTER], yt-chip-cloud-chip-renderer[chip-style=STYLE_REFRESH_TO_NOVEL_CHIP], #guide-content.ytd-app, ytd-mini-guide-renderer, ytd-mini-guide-entry-renderer, #description.ytd-watch-metadata, .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal, yt-chip-cloud-chip-renderer[chip-style=STYLE_DEFAULT], .ytp-swatch-background-color, .header.ytd-playlist-panel-renderer, .badge-style-type-medium-grey.ytd-badge-supported-renderer, .playlist-items.ytd-playlist-panel-renderer, ytd-playlist-panel-video-renderer[selected][use-color-palette], tp-yt-app-toolbar.ytd-c4-tabbed-header-renderer, #channel-container.ytd-c4-tabbed-header-renderer, #background, #primary, #container, #contentContainer' +
				'{transition: background 1s cubic-bezier(.21,.98,1,1); animation: 1s show cubic-bezier(0, 0, 0.5, 1)} @keyframes show { 0% { opacity: 0; } 50% { opacity: 0; } 95% { opacity: 0.95; } 100% { opacity: 1; } }', 'rtAnim')
			pushCSS('ytd-video-renderer, ytd-channel-renderer, ytd-rich-item-renderer, ytd-playlist-video-renderer, ytd-playlist-renderer, .ytd-grid-renderer:is(ytd-grid-video-renderer, ytd-grid-playlist-renderer, ytd-grid-show-renderer, ytd-grid-channel-renderer, ytd-vertical-product-card-renderer), .ytd-item-section-renderer:is(ytd-radio-renderer, ytd-playlist-renderer, ytd-compact-video-renderer, ytd-compact-playlist-renderer, ytd-compact-radio-renderer, ytd-backstage-post-thread-renderer, ytd-channel-about-metadata-renderer, ytd-channel-video-player-renderer, ytd-message-renderer, ytd-background-promo-renderer), #body.ytd-comment-renderer, #description.ytd-watch-metadata, ytd-metadata-row-container-renderer, #description.ytd-video-secondary-info-renderer, ytd-video-primary-info-renderer, .arrow.yt-horizontal-list-renderer {animation: cubic-bezier(0.4, 0, 0.2, 1) fadeInUp .8s} @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px);}to {opacity: 1;transform: translateY(0px);}}', 'rtAnimFadeInUp')
			pushCSS('.ytd-recognition-shelf-renderer:is(#avatars-container, #action-button), .ytd-channel-sub-menu-renderer:is(#sort-menu, ytd-menu-renderer), #subscribe-button.ytd-shelf-renderer, #menu:is(.ytd-watch-metadata, .ytd-rich-shelf-renderer, .ytd-shelf-renderer), #sort-filter.ytd-horizontal-card-list-renderer, ytd-menu-renderer.ytd-reel-shelf-renderer {animation: cubic-bezier(0.4, 0, 0.2, 1) fadeInLeft .8s} @keyframes fadeInLeft {from {opacity: 0;transform: translateX(20px);}to {opacity: 1;transform: translateX(0px);}}', 'rtAnimFadeInLeft')
			pushCSS('#text-container.ytd-recognition-shelf-renderer, #items:is(.yt-horizontal-list-renderer, .ytd-horizontal-card-list-renderer), h2:is(.ytd-rich-shelf-renderer, .ytd-shelf-renderer), #subtitle.ytd-shelf-renderer, #primary-items.ytd-channel-sub-menu-renderer, .ytd-watch-metadata:is(h1, ytd-badge-supported-renderer, #owner), .thumbnail-and-metadata-wrapper.ytd-playlist-header-renderer, h3.ytd-channel-featured-content-renderer, .ytd-horizontal-card-list-renderer:is(#header, #header-button), h2.ytd-reel-shelf-renderer {animation: cubic-bezier(0.4, 0, 0.2, 1) fadeInRight .8s;} @keyframes fadeInRight {from {opacity: 0;transform: translateX(-20px);}to {opacity: 1;transform: translateX(0px);}}', 'rtAnimFadeInLeft')
		})
	}
	if (RThideAllTrash) HideTrash(true)
	if (RTDefaultVolume) ForceDefaultVideoVolume(true)
	if (RTvideoDateCreated) finishEvent(() => DateTimeCreated(true, RTSettingsDateOnVideoBackgroundChange))
	if (RTstopChannelTrailer) StopChannelTrailer()
	if (RTvideoQuality) VideoQuality()
	if (RTshowVideoCountOnChannel) finishEvent(() => ShowVideoCountOnChannel())
	if (RTskipAds) SkipAds()
	if (RTsponsorBlock) SponsorBlock()
	if (RThideShorts) HideShorts(true)
	if (RThidePremieresLive) HidePremieresLive(true)
	if (RTcompactSidebar) CompactSidebar(true)
	if (RTfilterShortVideos) FilterShortVideos(true)
	if (RTdisableAutoplay) DisableAutoplay(true)
	if (RTCustomCSS) ApplyCustomCSS(RTCustomCSS)
	// Чисті CSS функції — чекаємо head як оригінальний скрипт
	waitSelector('head').then(() => {
			if (RThighlightOwner) HighlightOwnerComments(true)
	})
	if (document.readyState !== 'loading') YouTubi(); else document.addEventListener('DOMContentLoaded', YouTubi)
	async function YouTubi() {
		if (!RTfirstLaunch && currentPage() != 'embed') {
			await Delay(1500)
			alert('YouTubi.\nЩоб відкрити меню налаштувань, натисніть F2 на сайті YouTube.')
			GM_setValue('rt-firstLaunch', 'yes')
		}
		if (RTcustomTitleIcon) CustomIcon(true, RTSelectTitleIconColor)
		if (RTfullVideoNames) FullVideoNames(true)
		if (RTnotificationsRemove) RemoveNotificationNumber()
		if (RTfocusFix) FocusAndScrollFix(true)
		if (RTremainingTime) RemainingTime()
		if (RTrememberTime) RememberTime()
		if (RTfixChannelLinks) FixChannelLinks()
		if (RTshowTranslationTime) ShowTranslationTime()
		if (RTdisablePlayerSleep) DisableSleep()
		if (RThotkeysAlwaysActive) HotkeysAlwaysActive()
		if (RTscrollVolume) ScrollVolume()
		if (RTmiddleClickSearch) MiddleClickSearch()
		if (RTtranslateCommentButton) TranslateCommentButton()
		if (RTscrollSpeed) ScrollSpeed()
		if (RTRememberSpeed) RememberSpeed()
		if (RTcolors) PaintYouTube(true)
		if (RTbetterFont) ImproveFont(true)
		if (RTwatchedVideo && !window.location.href.includes('feed/history')) MarkWatchedVideos(true)
		if (RTreturnDislikes) ReturnDislikes()
		if (RTFixesForNewYouTube) FixesForNewYouTube(true)
		// NEW — функції що потребують DOM
		if (RTscreenshotFrame) ScreenshotFrame(true)
		if (RTloopVideo) LoopVideo(true)
		if (RTcopyTimestampButton) CopyTimestampButton()
		if (RTcollapseReplies) CollapseReplies()
		if (RTchannelAvatar) ChannelAvatarSidebar()
		if (RTdefaultCommentSort) DefaultCommentSort()
		if (RTrememberChannelTab) RememberChannelTab()
		if (RTabsoluteLikes) AbsoluteLikes()
		if (RTrestoreQualityAfterAd) RestoreQualityAfterAd()
		await Delay(3000)
		document.querySelector('#rtAnim')?.remove()
		if (RTUpdateCheck && currentPage() != 'embed') {
			await Delay(5000)
			fetch('https://api.github.com/repos/Mhack-7/YouTubi/releases/latest').then(response => response.json()).then(data => {
				const localVersion = GM_info.script.version;
				const onlineVersion = data.tag_name.replace('v', '');
				const changeLog = data.body;
				if (onlineVersion > localVersion) {
					if (confirm(`YouTubi.\nДоступно обновление (${localVersion} > ${onlineVersion})\n\nСписок изменений:\n${changeLog}\n\nОбновить сейчас?`)) {
						GM_openInTab('https://github.com/Mhack-7/YouTubi/raw/main/YouTubi.user.js')
					}
				}
			}).catch()
		}
	}

	// i18n
	let RTLanguage = (function(){try{return localStorage.getItem('rt-lang')||'uk'}catch{return 'uk'}})()
	const _i18n = {
		uk:{
			head:'YouTubi',t1:'Головна',t2:'Кольори',t3:'Інфо',t4:'Нові',
			sub1:'Основні',sub2:'Інші',
			save:'Зберегти',saved:'Збережено!',dev:'Розробник: Mhack',
			github:'GitHub репозиторій',hreset:'Скинути ВСІ налаштування YouTubi',
			hreset_q:'Скинути всі налаштування?',lang:'Мова:',
			s1:'Плавні анімації сторінки',s2:'Приховати зайві кнопки та написи',
			s3:'Змінити шрифт на Ubuntu',s4:'Показувати дату та час завантаження в назві',
			s4b:'Обводка замість заливки',s5:'Фокус на відео при наведенні',
			s6:'Прибрати кількість повідомлень з вкладки',s7:'Синя іконка в заголовку',
			s7b:'Синій',s7c:'Сірий',s8:'Повернути дизлайки',s9:'Показувати повні назви відео',
			s10:'Примусова якість відео',s11:'Гарячі клавіші плеєра завжди активні',
			s12:'Повернути старі функції',s13:'Позначати переглянуті відео',
			s14:'Зупинити автоплей трейлера',s15:'Показувати час що залишився',
			s16:'Зберігати прогрес при перезавантаженні',s17:'Виправити посилання на канал',
			s18:'Показувати час трансляції',s19:'Вимкнути засинання плеєра',
			s20:'Показувати кількість відео на каналі',s21:'Зміна гучності (Shift+колесо)',
			s22:'Відкривати пошук у новій вкладці (СКМ)',s23:'Кнопка перекладу коментарів',
			s24:'Зміна швидкості відео на кнопці Налаштування',
			s25:'Примусова гучність при запуску',s26:'Примусова швидкість при запуску',
			s26b:'Дозволити нестандартні значення',s27:'Перевірка оновлень скрипту',
			c1:'Перефарбувати YouTube',cm:'Основний',ca:'Додатковий',cpl:'Плеєр',
			ct:'Текст',cl:'Посилання',cg:'Полоска прогресу',cw1:'Задній колір напису',cw2:'Задній колір',
			cp1:'YouTubi',cp2:'YouTubi Dark',cp3:'Темний',cp4:'Пурпурний',cp5:'Зелений',cp6:'Свої кольори',
			ic1:'Синій',ic2:'Сірий',
			n1:'🎬 Плеєр і відео',n2:'Пропуск реклами (автоклік)',n3:'SponsorBlock — пропуск сегментів',
			n3b:'Категорії (через кому):',n4:'Скриншот кадру відео',n5:'Зациклити відео (кнопка + L)',
			n6:'Аватар каналу в бічній панелі',n7:'Відновити якість після реклами',
			n8:'Вимкнути автовідтворення',n9:'💬 Коментарі',n10:'Сортування коментарів',
			n10a:'За популярністю',n10b:'Спочатку нові',n11:'Згорнути відповіді',
			n12:'Підсвічувати коментарі автора',n13:'🖥 Інтерфейс',n14:'Приховати Shorts',
			n15:'Приховати премєри та трансляції',n16:'Запамятати вкладку каналу',
			n17:'Компактна бічна панель',n18:'Точна кількість лайків',
			n19:'Кнопка копіювання посилання з часом',n20:'🔍 Пошук і навігація',
			n21:'Фільтр коротких відео на головній',n21b:'хв',
			n22:'🎨 Свій CSS',n23:'Свій CSS (застосовується одразу)',n23b:'/* Ваш CSS */',
			tp_cb0:'Будуть приховані:||• Кнопка голосового пошуку||• Країна біля іконки||• Елементи лівої панелі||• Кнопки в плеєрі (перемотка, авто, трансляція)||• Анотація каналу в кінці відео||• Панель реакцій у чаті||• Кнопка клавіатури в пошуку||• Кнопка «Додати в чергу»||• Кнопки «Поділитися», «Кліп», «Завантажити»',
			tp_cb2:'Додатково рекомендується вимкнути||ClearType у браузері',
			tp_cb15:'Корисно для фонового прослуховування.||Забороняє паузу відео при неактивності',
			tp_cb17:'Клавіші перемотки відео,||регулювання звуку.',
			tp_cb21:'Правий клік: стандартна швидкість||Колесо: зміна швидкості на 0.1x',
			tp_cb_bypass:'Дозволяє нестандартні значення||швидкості, але може працювати нестабільно',
			tp_cb25:'Повертає/виправляє деякі функції:||• прокрутка в повноекранному режимі||• 4 відео в ряд на головній',
			tp_cbMain:'Для коректної роботи||тема YouTube має бути темною',
			tp_cbSkipAds:'Автоматично натискає кнопку||Пропустити рекламу та приховує||рекламні оверлеї',
			tp_cbSponsorBlock:'Автоматично пропускає спонсорські||вставки, інтро та аутро через||публічне API SponsorBlock',
			tp_cbScreenshot:'Додає кнопку скриншоту||в плеєр (або Ctrl+Shift+S)||Файл зберігається автоматично',
			tp_cbLoop:'Додає кнопку зациклення||в плеєр, або натисніть L||на клавіатурі',
			tp_cbAvatar:'Показує аватар каналу поруч||з назвою каналу в бічній||панелі рекомендацій',
			tp_cbRestoreQ:'Відновлює якість відео||до обраного після показу реклами',
			tp_cbNoAuto:'Вимикає автоматичний перехід||до наступного відео',
			tp_cbSort:'Вибирає сортування коментарів||за замовчуванням при відкритті відео',
			tp_cbCollapse:'Згортає всі відповіді на||коментарі за замовчуванням',
			tp_cbOwner:'Виділяє коментарі від||автора каналу кольоровою рамкою',
			tp_cbShorts:'Приховує Shorts з головної сторінки,||бічної панелі та вкладки каналу',
			tp_cbLive:'Приховує майбутні преміри||та активні трансляції з головної',
			tp_cbRemTab:'Запамятовує останню відкриту||вкладку на сторінці каналу||та відкриває її знову',
			tp_cbCompact:'Завжди тримає бічну панель||у компактному (згорнутому) вигляді',
			tp_cbLikes:'Показує точну кількість лайків||замість скороченого (1.2K → 1234)',
			tp_cbTS:'Додає кнопку копіювання||посилання на відео з поточним||часом під плеєром',
			tp_cbFilter:'Приховує відео коротше вказаної||кількості хвилин на головній'
		},
		ru:{
			head:'YouTubi',t1:'Главная',t2:'Цвета',t3:'Инфо',t4:'Новые',
			sub1:'Основные',sub2:'Другие',
			save:'Сохранить',saved:'Сохранено!',dev:'Разработчик: Mhack',
			github:'GitHub репозиторий',hreset:'Сбросить ВСЕ настройки YouTubi',
			hreset_q:'Сбросить все настройки?',lang:'Язык:',
			s1:'Плавные анимации страницы',s2:'Скрыть ненужные кнопки и надписи',
			s3:'Изменить шрифт на Ubuntu',s4:'Показывать дату загрузки в названии',
			s4b:'Обводка вместо заливки',s5:'Сфокусироваться на видео при наведении',
			s6:'Удалить количество уведомлений с вкладки',s7:'Синяя иконка в заголовке',
			s7b:'Синяя',s7c:'Серая',s8:'Вернуть дизлайки',s9:'Показывать целиком заголовки',
			s10:'Принудительное качество видео',s11:'Горячие клавиши плеера всегда активны',
			s12:'Вернуть старые функции',s13:'Помечать просмотренные видео',
			s14:'Запретить автовоспроизведение трейлера',s15:'Показывать оставшееся время',
			s16:'Сохранение прогресса при перезагрузке',s17:'Исправить ссылки на канал',
			s18:'Показывать время трансляции',s19:'Отключить засыпание плеера',
			s20:'Показывать количество видео на канале',s21:'Изменение громкости (Shift+колесо)',
			s22:'Открывать поиск в новой вкладке (СКМ)',s23:'Кнопка перевода комментариев',
			s24:'Изменение скорости на кнопке Настройки',
			s25:'Принудительная громкость при запуске',s26:'Принудительная скорость при запуске',
			s26b:'Разрешить нестандартные значения',s27:'Проверка обновлений скрипта',
			c1:'Перекрасить YouTube',cm:'Основной',ca:'Дополнительный',cpl:'Плеер',
			ct:'Текст',cl:'Ссылки',cg:'Полоска прогресса',cw1:'Задний цвет надписи',cw2:'Задний цвет',
			cp1:'YouTubi',cp2:'YouTubi Dark',cp3:'Тёмный',cp4:'Пурпурный',cp5:'Зелёный',cp6:'Свои цвета',
			ic1:'Синяя',ic2:'Серая',
			n1:'🎬 Плеер и видео',n2:'Пропуск рекламы (автоклик)',n3:'SponsorBlock — пропуск сегментов',
			n3b:'Категории (через запятую):',n4:'Скриншот кадра видео',n5:'Зациклить видео (кнопка + L)',
			n6:'Аватар канала в боковой панели',n7:'Восстановить качество после рекламы',
			n8:'Отключить автовоспроизведение',n9:'💬 Комментарии',n10:'Сортировка комментариев',
			n10a:'По популярности',n10b:'Сначала новые',n11:'Свернуть ответы',
			n12:'Подсвечивать комментарии автора',n13:'🖥 Интерфейс',n14:'Скрыть Shorts',
			n15:'Скрыть премьеры и трансляции',n16:'Запомнить вкладку канала',
			n17:'Компактная боковая панель',n18:'Точное число лайков',
			n19:'Кнопка копирования ссылки с временем',n20:'🔍 Поиск и навигация',
			n21:'Фильтр коротких видео на главной',n21b:'мин',
			n22:'🎨 Свой CSS',n23:'Свой CSS (применяется сразу)',n23b:'/* Ваш CSS */',
			tp_cb0:'Будут скрыты:||• Кнопка голосового поиска||• Страна возле иконки||• Элементы левой панели||• Кнопки в плеере (перемотка, авто, трансляция)||• Аннотация канала в конце видео||• Панель реакций в чате||• Кнопка клавиатуры в поиске||• Кнопка «Добавить в очередь»||• Кнопки «Поделиться», «Клип», «Скачать»',
			tp_cb2:'Дополнительно желательно отключить||ClearType в браузере',
			tp_cb15:'Полезно для фонового прослушивания.||Запрещает паузу видео при неактивности',
			tp_cb17:'Клавиши перемотки видео,||регулировки звука.',
			tp_cb21:'Правый клик: стандартная скорость||Колесо: регулировка скорости на 0.1x',
			tp_cb_bypass:'Позволяет нестандартные значения||скорости, но может работать нестабильно',
			tp_cb25:'Возвращает/исправляет некоторые функции:||• прокрутка в полноэкранном режиме||• 4 видео в ряд на главной',
			tp_cbMain:'Для корректной работы||тема YouTube должна быть тёмной',
			tp_cbSkipAds:'Автоматически нажимает кнопку||Пропустить рекламу и скрывает||рекламные оверлеи',
			tp_cbSponsorBlock:'Автоматически пропускает спонсорские||вставки, интро и аутро через||публичное API SponsorBlock',
			tp_cbScreenshot:'Добавляет кнопку скриншота||в плеер (или Ctrl+Shift+S)||Файл сохраняется автоматически',
			tp_cbLoop:'Добавляет кнопку зацикливания||в плеер, или нажмите L||на клавиатуре',
			tp_cbAvatar:'Показывает аватар канала рядом||с названием канала в боковой||панели рекомендаций',
			tp_cbRestoreQ:'Восстанавливает качество видео||до выбранного после показа рекламы',
			tp_cbNoAuto:'Отключает автоматический переход||к следующему видео',
			tp_cbSort:'Выбирает сортировку комментариев||по умолчанию при открытии видео',
			tp_cbCollapse:'Сворачивает все ответы на||комментарии по умолчанию',
			tp_cbOwner:'Выделяет комментарии от||автора канала цветной рамкой',
			tp_cbShorts:'Скрывает Shorts с главной страницы,||боковой панели и вкладки канала',
			tp_cbLive:'Скрывает предстоящие премьеры||и активные трансляции с главной',
			tp_cbRemTab:'Запоминает последнюю открытую||вкладку на странице канала||и открывает её снова',
			tp_cbCompact:'Всегда держит боковую панель||в компактном (свёрнутом) виде',
			tp_cbLikes:'Показывает точное число лайков||вместо сокращённого (1.2K → 1234)',
			tp_cbTS:'Добавляет кнопку копирования||ссылки на видео с текущим||временем под плеером',
			tp_cbFilter:'Скрывает видео короче указанного||количества минут на главной'
		},
		en:{
			head:'YouTubi',t1:'Main',t2:'Colors',t3:'Info',t4:'New',
			sub1:'General',sub2:'Other',
			save:'Save',saved:'Saved!',dev:'Developer: Mhack',
			github:'GitHub repository',hreset:'Reset ALL YouTubi settings',
			hreset_q:'Reset all settings?',lang:'Language:',
			s1:'Smooth page animations',s2:'Hide unnecessary buttons',
			s3:'Change font to Ubuntu',s4:'Show upload date in title',
			s4b:'Outline instead of fill',s5:'Focus video on hover',
			s6:'Remove notification count from tab',s7:'Blue icon in page title',
			s7b:'Blue',s7c:'Gray',s8:'Return dislikes',s9:'Show full video titles',
			s10:'Force video quality',s11:'Player hotkeys always active',
			s12:'Restore old features',s13:'Mark watched videos',
			s14:'Stop channel trailer autoplay',s15:'Show remaining video time',
			s16:'Save video progress on reload',s17:'Fix channel links in sidebar',
			s18:'Show stream time',s19:'Disable player sleep',
			s20:'Show video count on channel',s21:'Change volume (Shift+scroll)',
			s22:'Open search in new tab (MMB)',s23:'Comment translation button',
			s24:'Change speed via Settings button',
			s25:'Force video volume on start',s26:'Force video speed on start',
			s26b:'Allow non-standard values',s27:'Auto-check for updates',
			c1:'Repaint YouTube',cm:'Main',ca:'Additional',cpl:'Player',
			ct:'Text',cl:'Links',cg:'Progress bar',cw1:'Label background',cw2:'Background color',
			cp1:'YouTubi',cp2:'YouTubi Dark',cp3:'Dark',cp4:'Purple',cp5:'Green',cp6:'Custom colors',
			ic1:'Blue',ic2:'Gray',
			n1:'🎬 Player & Video',n2:'Skip ads (auto-click)',n3:'SponsorBlock — skip segments',
			n3b:'Categories (comma separated):',n4:'Screenshot video frame',n5:'Loop video (button + L)',
			n6:'Channel avatar in sidebar',n7:'Restore quality after ad',
			n8:'Disable autoplay',n9:'💬 Comments',n10:'Comment sorting',
			n10a:'Top comments',n10b:'Newest first',n11:'Collapse replies',
			n12:'Highlight author comments',n13:'🖥 Interface',n14:'Hide Shorts',
			n15:'Hide premieres and streams',n16:'Remember channel tab',
			n17:'Compact sidebar',n18:'Exact like count',
			n19:'Copy link with timestamp button',n20:'🔍 Search & Navigation',
			n21:'Filter short videos on home',n21b:'min',
			n22:'🎨 Custom CSS',n23:'Custom CSS (applied instantly)',n23b:'/* Your CSS */',
			tp_cb0:'Will be hidden:||• Voice search button||• Country near icon||• Left panel elements||• Player buttons (rewind, autoplay, cast)||• Channel annotation at end||• Chat reaction panel||• Keyboard button in search||• «Add to queue» button||• «Share», «Clip», «Download» buttons',
			tp_cb2:'Also recommended to disable||ClearType in browser',
			tp_cb15:'Useful for background listening.||Prevents video pause on inactivity',
			tp_cb17:'Video seek keys,||volume control.',
			tp_cb21:'Right click: default speed||Scroll: change speed by 0.1x',
			tp_cb_bypass:'Allows non-standard speed values,||but may be unstable',
			tp_cb25:'Restores/fixes some features:||• scroll in fullscreen mode||• 4 videos per row on home',
			tp_cbMain:'For correct operation||YouTube theme must be dark',
			tp_cbSkipAds:'Automatically clicks||Skip Ad button and hides||ad overlays',
			tp_cbSponsorBlock:'Automatically skips sponsor||segments, intros and outros via||public SponsorBlock API',
			tp_cbScreenshot:'Adds screenshot button||to player (or Ctrl+Shift+S)||File saves automatically',
			tp_cbLoop:'Adds loop button||to player, or press L||on keyboard',
			tp_cbAvatar:'Shows channel avatar next||to channel name in the||recommendations sidebar',
			tp_cbRestoreQ:'Restores video quality||to selected after ad plays',
			tp_cbNoAuto:'Disables automatic transition||to next video',
			tp_cbSort:'Sets default comment sort||when opening a video',
			tp_cbCollapse:'Collapses all comment||replies by default',
			tp_cbOwner:'Highlights comments from||channel owner with colored border',
			tp_cbShorts:'Hides Shorts from home page,||sidebar and channel tab',
			tp_cbLive:'Hides upcoming premieres||and active streams from home',
			tp_cbRemTab:'Remembers last opened||channel tab||and opens it again',
			tp_cbCompact:'Always keeps sidebar||in compact (collapsed) mode',
			tp_cbLikes:'Shows exact like count||instead of abbreviated (1.2K → 1234)',
			tp_cbTS:'Adds button to copy||video link with current||timestamp below player',
			tp_cbFilter:'Hides videos shorter than||specified minutes on home'

		}
	}
	function _t(k){return(_i18n[RTLanguage]||_i18n.uk)[k]||k}
	// end i18n
	document.addEventListener('keyup', function (e) {
		if (e.key == 'F2' && currentPage() != 'embed') {
			const YouTubiMenuStyle = document.querySelector('#YouTubi-menu-style')
			if (YouTubiMenuStyle) {
				document.querySelector('#YouTubi-menu')?.toggleAttribute('hidden')
				return
			}
			//#region Стилі меню
			pushCSS(`
@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Rajdhani:wght@400;500;600;700&display=swap');
#YouTubi-menu{animation:.25s rt-show cubic-bezier(.16,1,.3,1);background:#080d12;position:fixed;z-index:999999;width:320px;max-width:calc(100vw - 20px);max-height:calc(100vh - 20px);border:1px solid #1a3a5c;border-radius:8px;box-shadow:0 0 0 1px rgba(0,212,255,.07),0 24px 64px rgba(0,0,0,.75);font-family:Rajdhani,sans-serif;overflow:hidden;display:flex;flex-direction:column}
@keyframes rt-show{from{opacity:0;transform:scale(.97) translateY(-4px)}to{opacity:1;transform:none}}
#rt-head{background:linear-gradient(90deg,rgba(0,212,255,.09),transparent);border-bottom:1px solid #1a3a5c;border-radius:8px 8px 0 0;display:flex;justify-content:space-between;align-items:center;padding:8px 12px;cursor:grab;flex-shrink:0}
#rt-head:active{cursor:grabbing}
.rt-label-head{font-family:'Share Tech Mono',monospace;font-size:14px;letter-spacing:3px;color:#00d4ff;text-shadow:0 0 12px rgba(0,212,255,.55);pointer-events:none}
#rt-close-head{margin-left:auto;cursor:pointer;opacity:.55;transition:opacity .2s}
#rt-close-head:hover{opacity:1}
#rt-tabs{display:flex;gap:2px;padding:5px 8px 4px;background:#0d1520;border-bottom:1px solid #1a3a5c;flex-shrink:0}
.rt-button-tab{flex:1;background:transparent;border:1px solid transparent;border-radius:6px;padding:4px 2px;cursor:pointer;transition:background .2s;display:flex;flex-direction:column;align-items:center;gap:2px;width:auto!important}
.rt-button-tab:not(.active):hover{background:rgba(0,212,255,.06);border-color:rgba(0,212,255,.15)}
.rt-button-tab.active{background:rgba(0,212,255,.1);border-color:rgba(0,212,255,.35)}
.rt-button-tab:focus{outline:none}
.rt-label-tabs{font-size:10px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:#6a8fa8;font-family:Rajdhani,sans-serif}
.rt-button-tab.active .rt-label-tabs{color:#00d4ff}
.img-tab-icon{width:20px;height:20px;pointer-events:none;opacity:.6;filter:hue-rotate(180deg) brightness(1.5) saturate(.7)}
.rt-button-tab.active .img-tab-icon{opacity:1;filter:hue-rotate(180deg) brightness(2) saturate(1.3)}
#rt-settings-tabs{display:flex;flex-direction:row!important;gap:4px;padding:5px 6px 3px;border-bottom:1px solid rgba(26,58,92,.5)}
.rt-button-settings-tab{flex:1;background:transparent;border:1px solid transparent;border-radius:5px;padding:3px 6px;cursor:pointer;display:flex;flex-direction:row!important;align-items:center;gap:4px;width:auto!important;transition:background .2s}
.rt-button-settings-tab:not(.active):hover{background:rgba(0,212,255,.05);border-color:rgba(0,212,255,.12)}
.rt-button-settings-tab.active{background:rgba(0,212,255,.08);border-color:rgba(0,212,255,.28)}
.rt-button-settings-tab:focus{outline:none}
.rt-label-settings-tabs{font-size:11px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:#6a8fa8;font-family:Rajdhani,sans-serif}
.rt-button-settings-tab.active .rt-label-settings-tabs{color:#00d4ff}
div[id^='YouTubi-tab']{overflow-y:auto;overflow-x:hidden;padding:6px 10px;scrollbar-width:thin;scrollbar-color:#1a3a5c transparent;flex:1 1 auto;min-height:0}
div[id^='YouTubi-tab']::-webkit-scrollbar{width:4px}
div[id^='YouTubi-tab']::-webkit-scrollbar-thumb{background:#1a3a5c;border-radius:4px}
.YouTubi-label{font-size:13px;font-weight:500;color:#cce8f4;font-family:Rajdhani,sans-serif;padding:4px 6px;-webkit-user-select:none;border-radius:5px;display:flex;align-items:center;gap:6px;box-sizing:border-box;width:100%}
.YouTubi-label:not(.info):hover{background:rgba(0,212,255,.06)}
.YouTubi-label > input{accent-color:#00d4ff}
.YouTubi-label > .important{accent-color:#39ff7e}
.YouTubi-label-additional{font-size:12px;color:#6a8fa8;display:flex;align-items:center;gap:4px}
.YouTubi-additionalDiv:not(.color){margin-left:14px;border-left:2px solid rgba(0,212,255,.12);padding-left:4px}
input[type='color']{background:transparent;border:none;width:26px;height:22px;cursor:pointer}
.rt-title{font-family:'Share Tech Mono',monospace!important;font-size:10px!important;font-weight:400!important;letter-spacing:2px;text-transform:uppercase;color:#0088cc!important;border-bottom:1px solid rgba(0,212,255,.1);padding:6px 6px 3px;display:block;margin-bottom:2px}
.YouTubi-button{background:rgba(0,212,255,.08);color:#00d4ff;border:1px solid rgba(0,212,255,.28);border-radius:6px;padding:6px 10px;cursor:pointer;display:flex;align-items:center;justify-content:center;width:100%;margin-bottom:5px;font-family:'Share Tech Mono',monospace;font-size:11px;letter-spacing:1px;text-transform:uppercase;transition:background .2s}
.YouTubi-button:hover{background:rgba(0,212,255,.16)}
.YouTubi-button:not(.YouTubi-button-reset){margin-bottom:5px}
.YouTubi-button-reset{display:inline-flex;width:28px;height:22px;padding:0;margin:0 0 0 4px;font-size:10px;border-radius:4px;margin-bottom:0}
.YouTubi-button-hardReset{background:rgba(255,58,110,.1);border-color:rgba(255,58,110,.35);color:#ff3a6e}
.YouTubi-button-hardReset:hover{background:rgba(255,58,110,.2)}
.rt-select{background:#111d2b;color:#cce8f4;border:1px solid #1a3a5c;border-radius:5px;height:20px;margin-left:3px;font-family:Rajdhani,sans-serif;font-size:12px;padding:0 4px}
.rt-select:focus{outline:1px solid #0088cc}
option{background:#111d2b;color:#cce8f4}
[YouTubi-tooltip]{position:relative}
[YouTubi-tooltip]::after{content:attr(YouTubi-tooltip);position:absolute;white-space:pre;left:0;top:0;background:#0d1520;color:#cce8f4;font-family:'Share Tech Mono',monospace;font-size:12px;padding:8px 12px;border:1px solid #1a3a5c;box-shadow:0 8px 32px rgba(0,0,0,.7);pointer-events:none;opacity:0;transition:.35s;border-radius:7px;z-index:999999}
[YouTubi-tooltip]:hover::after{transition-delay:.7s;opacity:1;top:1.7em}
.fade-in{opacity:1;transition:opacity .25s ease}
.fade-out{opacity:0;max-height:0;pointer-events:none}
#rt-customCSSArea{width:100%;min-height:80px;background:#0a1219;color:#00d4ff;border:1px solid #1a3a5c;border-radius:6px;font-family:'Share Tech Mono',monospace;font-size:12px;resize:vertical;box-sizing:border-box;padding:6px;outline:none}
`, 'YouTubi-menu-style')
			//#endregion
			//#region Основа меню
			document.querySelector('body').insertAdjacentHTML('beforeend', '<div id="YouTubi-menu"></div>')
			document.querySelector('#YouTubi-menu').insertAdjacentHTML('beforeend', '<div id="rt-head"><span class="YouTubi-label rt-label-head">'+_t('head')+'</span><span id="rt-close-head"><img src="https://i.imgur.com/ibUUDqp.png" style="width: 21px; margin-right: 4px" id="rt-closeImg-head" /></span></div>')
			document.querySelector('#YouTubi-menu').insertAdjacentHTML('beforeend', '<div id="rt-tabs"><button class="rt-button-tab" data-tab="1"><img src="https://i.imgur.com/UW7uxaH.png" class="img-tab-icon" style="width:20px;height:20px"/><span class="rt-label-tabs">'+_t('t1')+'</span></button><button class="rt-button-tab" data-tab="4"><img src="https://i.imgur.com/l8f9xhj.png" class="img-tab-icon" style="width:20px;height:20px"/><span class="rt-label-tabs">'+_t('t4')+'</span></button><button class="rt-button-tab" data-tab="2"><img src="https://i.imgur.com/PQ9b4Ke.png" class="img-tab-icon" style="width:20px;height:20px"/><span class="rt-label-tabs">'+_t('t2')+'</span></button><button class="rt-button-tab" data-tab="3"><img src="https://i.imgur.com/fKkwgP1.png" class="img-tab-icon" style="width:20px;height:20px"/><span class="rt-label-tabs">'+_t('t3')+'</span></button></div>')
			document.querySelector('#YouTubi-menu').insertAdjacentHTML('beforeend', '<div id="YouTubi-tab1"></div>')
			document.querySelector('#YouTubi-menu').insertAdjacentHTML('beforeend', '<div id="YouTubi-tab2"></div>')
			document.querySelector('#YouTubi-menu').insertAdjacentHTML('beforeend', '<div id="YouTubi-tab3"></div>')
			document.querySelector('#YouTubi-menu').insertAdjacentHTML('beforeend', '<div id="YouTubi-tab4"></div>')
			//#endregion
			//#region Таб Головна
			document.querySelector('#YouTubi-tab1').insertAdjacentHTML('beforeend', '<div id="rt-settings-tabs"><button class="rt-button-tab rt-button-settings-tab" data-settingsTab="1"><img src="https://i.imgur.com/l8f9xhj.png" class="img-tab-icon" style="width:18px;height:18px"/><span class="rt-label-settings-tabs">'+_t('sub1')+'</span></button><button class="rt-button-tab rt-button-settings-tab" data-settingsTab="2"><img src="https://i.imgur.com/jCyfm4a.png" class="img-tab-icon" style="width:18px;height:18px"/><span class="rt-label-settings-tabs">'+_t('sub2')+'</span></button></div>')
			document.querySelector('#YouTubi-tab1').insertAdjacentHTML('beforeend', '<div id="YouTubi-settings-tab1"></div>')
			document.querySelector('#YouTubi-tab1').insertAdjacentHTML('beforeend', '<div id="YouTubi-settings-tab2"></div>')
			document.querySelector('#YouTubi-tab1').insertAdjacentHTML('beforeend', '<div id="YouTubi-settings-tab3"></div>')
			document.querySelector('#YouTubi-settings-tab1').insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label"><input type="checkbox" id="rt-checkboxAnimateLoad">'+_t('s1')+'</label></div>')
			document.querySelector('#YouTubi-settings-tab1').insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label" YouTubi-tooltip="KEY:tp_cb0"><input type="checkbox" id="rt-checkbox0">'+_t('s2')+'</label></div>')
			document.querySelector('#YouTubi-settings-tab2').insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label" YouTubi-tooltip="https://i.imgur.com/rqgywVe.png"><input type="checkbox" id="rt-checkbox1">'+_t('s13')+'</input></label></div>')
			document.querySelector('#YouTubi-settings-tab1').insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label" YouTubi-tooltip="KEY:tp_cb2"><input type="checkbox" id="rt-checkbox2">'+_t('s3')+'</input></label></div>')
			document.querySelector('#YouTubi-settings-tab1').insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label" YouTubi-tooltip="https://i.imgur.com/ZQ3CFlm.png"><input type="checkbox" id="rt-checkbox3">'+_t('s4')+'</label></div>')
			document.querySelector('#YouTubi-settings-tab1').insertAdjacentHTML('beforeend', `<div class="rt-settingsDateOnVideoBackgroundDiv YouTubi-additionalDiv"${RTvideoDateCreated ? '' : ' hidden'}><label class="YouTubi-label" YouTubi-tooltip="https://i.imgur.com/8NzFBsS.png"><input type="checkbox" id="rt-checkboxSettingsDateOnVideoBackground">${_t('s4b')}</label></div>`)
			document.querySelector('#YouTubi-settings-tab2').insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label"><input type="checkbox" id="rt-checkbox4"></input>'+_t('s5')+'</label></div>')
			document.querySelector('#YouTubi-settings-tab1').insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label"><input type="checkbox" id="rt-checkbox5"></input>'+_t('s6')+'</label></div>')
			document.querySelector('#YouTubi-settings-tab1').insertAdjacentHTML('beforeend', `<div><label class="YouTubi-label"><input type="checkbox" id="rt-checkbox6"></input>${_t('s7')}</label><select id="rt-selectTitleIconColor" class="rt-select" ${RTcustomTitleIcon ? '' : ' hidden'}><option value="blue">${_t('ic1')}</option><option value="gray">${_t('ic2')}</option></select></div>`)
			document.querySelector('#YouTubi-settings-tab1').insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label"><input type="checkbox" id="rt-checkbox7">'+_t('s8')+'</label></div>')
			document.querySelector('#YouTubi-settings-tab1').insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label"><input type="checkbox" id="rt-checkbox8">'+_t('s9')+'</label></div>')
			document.querySelector('#YouTubi-settings-tab2').insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label"><input type="checkbox" id="rt-checkbox9">'+_t('s14')+'</label></div>')
			document.querySelector('#YouTubi-settings-tab2').insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label"><input type="checkbox" id="rt-checkbox10">'+_t('s15')+'</label></div>')
			document.querySelector('#YouTubi-settings-tab2').insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label"><input type="checkbox" id="rt-checkbox11">'+_t('s16')+'</label></div>')
			document.querySelector('#YouTubi-settings-tab1').insertAdjacentHTML('beforeend', `<div><label class="YouTubi-label"><input type="checkbox" id="rt-checkbox12"></input>${_t('s10')}</label><select id="rt-selectVideoQuality" class="rt-select" ${RTvideoQuality ? '' : ' hidden'}><option value="highres">8K/4320p</option><option value="hd2160">4K/2160p</option><option value="hd1440">QHD/1440p</option><option value="hd1080">FHD/1080p</option><option value="hd720">720p</option><option value="large">480p</option><option value="medium">360p</option><option value="small">240p</option><option value="tiny">144p</option></select></div>`)
			document.querySelector('#YouTubi-settings-tab2').insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label" YouTubi-tooltip="https://i.imgur.com/bVYoFaS.png"><input type="checkbox" id="rt-checkbox13">'+_t('s17')+'</label></div>')
			document.querySelector('#YouTubi-settings-tab2').insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label" YouTubi-tooltip="https://i.imgur.com/kICYHsq.png"><input type="checkbox" id="rt-checkbox14">'+_t('s18')+'</label></div>')
			document.querySelector('#YouTubi-settings-tab2').insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label" YouTubi-tooltip="KEY:tp_cb15"><input type="checkbox" id="rt-checkbox15">'+_t('s19')+'</label></div>')
			document.querySelector('#YouTubi-settings-tab2').insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label" YouTubi-tooltip="https://i.imgur.com/9V8WYnf.png"><input type="checkbox" id="rt-checkbox16">'+_t('s20')+'</label></div>')
			document.querySelector('#YouTubi-settings-tab1').insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label" YouTubi-tooltip="KEY:tp_cb17"><input type="checkbox" id="rt-checkbox17">'+_t('s11')+'</label></div>')
			document.querySelector('#YouTubi-settings-tab2').insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label" YouTubi-tooltip="https://i.imgur.com/SRYep7k.png"><input type="checkbox" id="rt-checkbox18">'+_t('s21')+'</label></div>')
			document.querySelector('#YouTubi-settings-tab2').insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label" YouTubi-tooltip="https://i.imgur.com/YNFVrke.png"><input type="checkbox" id="rt-checkbox19">'+_t('s22')+'</label></div>')
			document.querySelector('#YouTubi-settings-tab2').insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label" YouTubi-tooltip="https://i.imgur.com/PyJ1GvF.png"><input type="checkbox" id="rt-checkbox20">'+_t('s23')+'</label></div>')
			document.querySelector('#YouTubi-settings-tab2').insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label" YouTubi-tooltip="KEY:tp_cb21"><input type="checkbox" id="rt-checkbox21"></input>Изменение скорости видео на кнопке \'Настройки\'</label></div>')
			document.querySelector('#YouTubi-settings-tab2').insertAdjacentHTML('beforeend', `<div><label class="YouTubi-label"><input type="checkbox" id="rt-checkbox23">${_t('s25')}</label><select id="rt-selectDefaultVolume" class="rt-select" ${RTDefaultVolume ? '' : ' hidden'}><option value="100">100%</option><option value="80">80%</option><option value="70">70%</option><option value="60">60%</option><option value="50">50%</option><option value="40">40%</option><option value="30">30%</option><option value="20">20%</option><option value="10">10%</option><option value="5">5%</option><option value="1">1%</option><option value="0">0%</option></select></div>`)
			document.querySelector('#YouTubi-settings-tab2').insertAdjacentHTML('beforeend', `<div><label class="YouTubi-label"><input type="checkbox" id="rt-checkbox24">${_t('s26')}</label><select id="rt-selectRememberSpeed" class="rt-select" ${RTRememberSpeed ? '' : ' hidden'}></select></div>`)
			document.querySelector('#YouTubi-settings-tab2').insertAdjacentHTML('beforeend', `<div class="rt-rememberSpeedBypassDiv YouTubi-additionalDiv"${RTRememberSpeed ? '' : ' hidden'}><label class="YouTubi-label" YouTubi-tooltip="KEY:tp_cb_bypass"><input type="checkbox" id="rt-checkboxRememberSpeedBypass">${_t('s26b')}</label></div>`)
			document.querySelector('#YouTubi-settings-tab1').insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label" YouTubi-tooltip="KEY:tp_cb25"><input type="checkbox" id="rt-checkbox25">'+_t('s12')+'</label></div>')
			document.querySelector('#YouTubi-settings-tab2').insertAdjacentHTML('beforeend', '<br><div><label class="YouTubi-label"><input type="checkbox" id="rt-checkbox22" class="important">'+_t('s27')+'</label></div>')
			document.querySelector('#YouTubi-tab1').insertAdjacentHTML('beforeend', '<br><button class="YouTubi-button YouTubi-button-save">'+_t('save')+'</button>')
			//#endregion
			//#region Таб Колір
			document.querySelector('#YouTubi-tab2').insertAdjacentHTML('beforeend', `<div><label class="YouTubi-label" YouTubi-tooltip="KEY:tp_cbMain"><input type="checkbox" id="rt-checkboxMain"></input>${_t('c1')}</label><select id="rt-selectRTColors" class="rt-select"${RTcolors ? '' : ' hidden'}><option value="default">${_t('cp1')}</option><option value="defaultDark">${_t('cp2')}</option><option value="dark">${_t('cp3')}</option><option value="purple">${_t('cp4')}</option><option value="green">${_t('cp5')}</option><option value="custom">${_t('cp6')}</option></select></div>`)
			document.querySelector('#YouTubi-tab2').insertAdjacentHTML('beforeend', `<div class="rt-colorYT YouTubi-additionalDiv color"${RTcolors ? '' : ' hidden'}><label class="YouTubi-label YouTubi-label-additional">${_t('cm')}<input type="color" id="rt-colorYTMain"></input></label><button class="YouTubi-button YouTubi-button-reset" onclick="const colorInput = document.querySelector('#rt-colorYTMain'); colorInput.value = '#1b222a'; colorInput.dispatchEvent(new Event('input', { bubbles: true }))"></button></div>`)
			document.querySelector('#YouTubi-tab2').insertAdjacentHTML('beforeend', `<div class="rt-colorYT YouTubi-additionalDiv color"${RTcolors ? '' : ' hidden'}><label class="YouTubi-label YouTubi-label-additional">${_t('ca')}<input type="color" id="rt-colorYTAdditional"></input></label><button class="YouTubi-button YouTubi-button-reset" onclick="const colorInput = document.querySelector('#rt-colorYTAdditional'); colorInput.value = '#222b35'; colorInput.dispatchEvent(new Event('input', { bubbles: true }))"></button></div>`)
			document.querySelector('#YouTubi-tab2').insertAdjacentHTML('beforeend', `<div class="rt-colorYT YouTubi-additionalDiv color"${RTcolors ? '' : ' hidden'}><label class="YouTubi-label YouTubi-label-additional">${_t('cpl')}<input type="color" id="rt-colorYTPlayer"></input></label><button class="YouTubi-button YouTubi-button-reset" onclick="const colorInput = document.querySelector('#rt-colorYTPlayer'); colorInput.value = '#11161c'; colorInput.dispatchEvent(new Event('input', { bubbles: true }))"></button></div>`)
			document.querySelector('#YouTubi-tab2').insertAdjacentHTML('beforeend', `<div class="rt-colorYT YouTubi-additionalDiv color"${RTcolors ? '' : ' hidden'}><label class="YouTubi-label YouTubi-label-additional">${_t('ct')}<input type="color" id="rt-colorYTText"></input></label><button class="YouTubi-button YouTubi-button-reset" onclick="const colorInput = document.querySelector('#rt-colorYTText'); colorInput.value = '#c9d0d3'; colorInput.dispatchEvent(new Event('input', { bubbles: true }))"></button></div>`)
			document.querySelector('#YouTubi-tab2').insertAdjacentHTML('beforeend', `<div class="rt-colorYT YouTubi-additionalDiv color"${RTcolors ? '' : ' hidden'}><label class="YouTubi-label YouTubi-label-additional">${_t('cl')}<input type="color" id="rt-colorYTLink"></input></label><button class="YouTubi-button YouTubi-button-reset" onclick="const colorInput = document.querySelector('#rt-colorYTLink'); colorInput.value = '#a1bad7'; colorInput.dispatchEvent(new Event('input', { bubbles: true }))"></button></div>`)
			document.querySelector('#YouTubi-tab2').insertAdjacentHTML('beforeend', `<div class="rt-colorYT YouTubi-additionalDiv color"${RTcolors ? '' : ' hidden'}><label class="YouTubi-label YouTubi-label-additional">${_t('cg')}<input type="color" id="rt-colorYTVideoProgress"></input></label><button class="YouTubi-button YouTubi-button-reset" onclick="const colorInput = document.querySelector('#rt-colorYTVideoProgress'); colorInput.value = '#5785ba'; colorInput.dispatchEvent(new Event('input', { bubbles: true }))"></button></div>`)
			document.querySelector('#YouTubi-tab2').insertAdjacentHTML('beforeend', `<div class="rt-colorWatched YouTubi-additionalDiv color"${RTwatchedVideo ? '' : ' hidden'} style="margin-bottom: 5px; margin-top: 5px"><span class="YouTubi-label info rt-title">Просмотрено</span></div>`)
			document.querySelector('#YouTubi-tab2').insertAdjacentHTML('beforeend', `<div class="rt-colorWatched YouTubi-additionalDiv color"${RTwatchedVideo ? '' : ' hidden'}><label class="YouTubi-label YouTubi-label-additional">${_t('cw1')}<input type="color" id="rt-color1"></input></label><button class="YouTubi-button YouTubi-button-reset" onclick="const colorInput = document.querySelector('#rt-color1'); colorInput.value = '#343a41'; colorInput.dispatchEvent(new Event('input', { bubbles: true }))"></button></div>`)
			document.querySelector('#YouTubi-tab2').insertAdjacentHTML('beforeend', `<div class="rt-colorWatched YouTubi-additionalDiv color"${RTwatchedVideo ? '' : ' hidden'}><label class="YouTubi-label YouTubi-label-additional">${_t('cw2')}<input type="color" id="rt-color2"></input></label><button class="YouTubi-button YouTubi-button-reset" onclick="const colorInput = document.querySelector('#rt-color2'); colorInput.value = '#ffffff'; colorInput.dispatchEvent(new Event('input', { bubbles: true }))"></button></div>`)
			document.querySelector('#YouTubi-tab2').insertAdjacentHTML('beforeend', '<br><button class="YouTubi-button YouTubi-button-save">'+_t('save')+'</button>')
			//#endregion
			//#region Таб Новыі функції
			const t4 = document.querySelector('#YouTubi-tab4')
			// Плеер
			t4.insertAdjacentHTML('beforeend', '<div style="margin:4px 0 2px 4px"><span class="YouTubi-label info rt-title" style="font-size:16px">'+_t('n1')+'</span></div>')
			t4.insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label" YouTubi-tooltip="KEY:tp_cbSkipAds"><input type="checkbox" id="rt-cbSkipAds">'+_t('n2')+'</input></label></div>')
			t4.insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label" YouTubi-tooltip="KEY:tp_cbSponsorBlock"><input type="checkbox" id="rt-cbSponsorBlock">'+_t('n3')+'</input></label></div>')
			t4.insertAdjacentHTML('beforeend', `<div class="YouTubi-additionalDiv rt-sbCatDiv"${RTsponsorBlock ? '' : ' hidden'}><label class="YouTubi-label" style="font-size:13px">${_t('n3b')}<br><input type="text" id="rt-sbCategories" style="background:rgb(40 50 60/80%);color:#c9d0d3;border:1px solid rgb(72 75 91);border-radius:6px;width:95%;font-size:14px;padding:2px 4px" value="${RTSponsorBlockCategories}"></label></div>`)
			t4.insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label" YouTubi-tooltip="KEY:tp_cbScreenshot"><input type="checkbox" id="rt-cbScreenshot">'+_t('n4')+'</input></label></div>')
			t4.insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label" YouTubi-tooltip="KEY:tp_cbLoop"><input type="checkbox" id="rt-cbLoop">'+_t('n5')+'</input></label></div>')
			t4.insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label" YouTubi-tooltip="KEY:tp_cbAvatar"><input type="checkbox" id="rt-cbChannelAvatar">'+_t('n6')+'</input></label></div>')
			t4.insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label" YouTubi-tooltip="KEY:tp_cbRestoreQ"><input type="checkbox" id="rt-cbRestoreQuality">'+_t('n7')+'</input></label></div>')
			t4.insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label" YouTubi-tooltip="KEY:tp_cbNoAuto"><input type="checkbox" id="rt-cbDisableAutoplay">'+_t('n8')+'</input></label></div>')
			// Комментарии
			t4.insertAdjacentHTML('beforeend', '<div style="margin:4px 0 2px 4px"><span class="YouTubi-label info rt-title" style="font-size:16px">'+_t('n9')+'</span></div>')
			t4.insertAdjacentHTML('beforeend', `<div><label class="YouTubi-label" YouTubi-tooltip="KEY:tp_cbSort"><input type="checkbox" id="rt-cbCommentSort">${_t('n10')}</input></label><select id="rt-selectCommentSort" class="rt-select"${RTdefaultCommentSort ? '' : ' hidden'}><option value="top">${_t('n10a')}</option><option value="new">${_t('n10b')}</option></select></div>`)
			t4.insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label" YouTubi-tooltip="KEY:tp_cbCollapse"><input type="checkbox" id="rt-cbCollapseReplies">'+_t('n11')+'</input></label></div>')
			t4.insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label" YouTubi-tooltip="KEY:tp_cbOwner"><input type="checkbox" id="rt-cbHighlightOwner">'+_t('n12')+'</input></label></div>')
			// Интерфейс
			t4.insertAdjacentHTML('beforeend', '<div style="margin:4px 0 2px 4px"><span class="YouTubi-label info rt-title" style="font-size:16px">'+_t('n13')+'</span></div>')
			t4.insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label" YouTubi-tooltip="KEY:tp_cbShorts"><input type="checkbox" id="rt-cbHideShorts">'+_t('n14')+'</input></label></div>')
			t4.insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label" YouTubi-tooltip="KEY:tp_cbLive"><input type="checkbox" id="rt-cbHideLive">'+_t('n15')+'</input></label></div>')
			t4.insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label" YouTubi-tooltip="KEY:tp_cbRemTab"><input type="checkbox" id="rt-cbRememberTab">'+_t('n16')+'</input></label></div>')
			t4.insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label" YouTubi-tooltip="KEY:tp_cbCompact"><input type="checkbox" id="rt-cbCompactSidebar">'+_t('n17')+'</input></label></div>')
			t4.insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label" YouTubi-tooltip="KEY:tp_cbLikes"><input type="checkbox" id="rt-cbAbsoluteLikes">'+_t('n18')+'</input></label></div>')
			t4.insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label" YouTubi-tooltip="KEY:tp_cbTS"><input type="checkbox" id="rt-cbCopyTimestamp">Кнопка \'Скопировать ссылку с временем\'</input></label></div>')
			// Поиск и навигация
			t4.insertAdjacentHTML('beforeend', '<div style="margin:4px 0 2px 4px"><span class="YouTubi-label info rt-title" style="font-size:16px">'+_t('n20')+'</span></div>')
			t4.insertAdjacentHTML('beforeend', `<div><label class="YouTubi-label" YouTubi-tooltip="KEY:tp_cbFilter"><input type="checkbox" id="rt-cbFilterShort">${_t('n21')}</input></label><input type="number" id="rt-filterMinDuration" min="1" max="60" value="${RTFilterMinDuration}" style="width:38px;background:rgb(40 50 60/80%);color:#c9d0d3;border:1px solid rgb(72 75 91);border-radius:6px;font-size:14px;padding:1px 3px;margin-left:3px;${RTfilterShortVideos ? '' : 'display:none'}"> <span id="rt-filterMinLabel" style="color:#c9d0d3;font-size:14px;${RTfilterShortVideos ? '' : 'display:none'}">${_t('n21b')}</span></div>`)
			// Кастомный CSS
			t4.insertAdjacentHTML('beforeend', '<div style="margin:4px 0 2px 4px"><span class="YouTubi-label info rt-title" style="font-size:16px">'+_t('n22')+'</span></div>')
			t4.insertAdjacentHTML('beforeend', '<div><label class="YouTubi-label"><input type="checkbox" id="rt-cbCustomCSS">'+_t('n23')+'</input></label></div>')
			t4.insertAdjacentHTML('beforeend', `<div id="rt-customCSSDiv"${RTcustomCSSEditor ? '' : ' hidden'}><textarea id="rt-customCSSArea" placeholder="${_t('n23b')}">${RTCustomCSS.replace(/</g,'&lt;')}</textarea></div>`)
			t4.insertAdjacentHTML('beforeend', '<br><button class="YouTubi-button YouTubi-button-save">'+_t('save')+'</button>')
			//#endregion
			//#region Таб Інфо
			document.querySelector('#YouTubi-tab3').insertAdjacentHTML('beforeend', `<br><div style="text-align:center;font-size:18px;font-weight:bold;font-family:'Share Tech Mono',monospace;color:#00d4ff">YouTubi v${GM_info.script.version}</div>`)
			document.querySelector('#YouTubi-tab3').insertAdjacentHTML('beforeend', '<div class="YouTubi-label info" style="text-align:center">'+_t('dev')+'</div>')
			document.querySelector('#YouTubi-tab3').insertAdjacentHTML('beforeend', '<div style="padding:6px 8px;display:flex;align-items:center;gap:8px"><span class="YouTubi-label info" style="font-size:12px">'+_t('lang')+'</span><select id="rt-langSel" class="rt-select"><option value="uk">🇺🇦 Укр</option><option value="ru">🇷🇺 Рус</option><option value="en">🇬🇧 Eng</option></select></div>')
			document.querySelector('#YouTubi-tab3').insertAdjacentHTML('beforeend', '<div><br><button class="YouTubi-button" onclick="window.open(\'https://github.com/Mhack-7/YouTubi\')">GitHub</button></div>')
			document.querySelector('#YouTubi-tab3').insertAdjacentHTML('beforeend', '<div><br><button class="YouTubi-button YouTubi-button-hardReset">'+_t('hreset')+'</button></div>')
			//#endregion
			//#region Перемикання табів
			document.querySelectorAll('button[data-tab]').forEach(button => {
				button.addEventListener('click', function () {
					const tabId = button.getAttribute('data-tab');
					document.querySelectorAll('div[id^="YouTubi-tab"]').forEach(el => {
						el.classList.remove('fade-in')
						el.classList.add('fade-out')
					})
					document.querySelector(`#YouTubi-tab${tabId}`).classList.remove('fade-out')
					document.querySelector(`#YouTubi-tab${tabId}`).classList.add('fade-in')
					document.querySelectorAll('button[data-tab]').forEach(x => x.classList.remove('active'))
					button.classList.add('active')
				})
			})
			document.querySelector('button[data-tab="1"]').dispatchEvent(new Event('click', { bubbles: true }))
			document.querySelectorAll('button[data-settingsTab]').forEach(button => {
				button.addEventListener('click', function () {
					const tabId = button.getAttribute('data-settingsTab');
					document.querySelectorAll('div[id^="YouTubi-settings-tab"]').forEach(el => {
						el.classList.remove('fade-in')
						el.classList.add('fade-out')
					})
					document.querySelector(`#YouTubi-settings-tab${tabId}`).classList.remove('fade-out')
					document.querySelector(`#YouTubi-settings-tab${tabId}`).classList.add('fade-in')
					document.querySelectorAll('button[data-settingsTab]').forEach(x => x.classList.remove('active'))
					button.classList.add('active')
				})
			})
			document.querySelector('button[data-settingsTab="1"]').dispatchEvent(new Event('click', { bubbles: true }))
			//#endregion
			//#region Налаштування та збереження
			document.querySelector('#YouTubi-menu').style.top = RTHeadTop
			document.querySelector('#YouTubi-menu').style.left = RTHeadLeft
			const checkboxMain = document.querySelector('#rt-checkboxMain')
			const checkboxAnimateLoad = document.querySelector('#rt-checkboxAnimateLoad')
			const checkbox0 = document.querySelector('#rt-checkbox0')
			const checkbox1 = document.querySelector('#rt-checkbox1')
			const checkbox2 = document.querySelector('#rt-checkbox2')
			const checkbox3 = document.querySelector('#rt-checkbox3')
			const checkbox4 = document.querySelector('#rt-checkbox4')
			const checkbox5 = document.querySelector('#rt-checkbox5')
			const checkbox6 = document.querySelector('#rt-checkbox6')
			const checkbox7 = document.querySelector('#rt-checkbox7')
			const checkbox8 = document.querySelector('#rt-checkbox8')
			const checkbox9 = document.querySelector('#rt-checkbox9')
			const checkbox10 = document.querySelector('#rt-checkbox10')
			const checkbox11 = document.querySelector('#rt-checkbox11')
			const checkbox12 = document.querySelector('#rt-checkbox12')
			const checkbox13 = document.querySelector('#rt-checkbox13')
			const checkbox14 = document.querySelector('#rt-checkbox14')
			const checkbox15 = document.querySelector('#rt-checkbox15')
			const checkbox16 = document.querySelector('#rt-checkbox16')
			const checkbox17 = document.querySelector('#rt-checkbox17')
			const checkbox18 = document.querySelector('#rt-checkbox18')
			const checkbox19 = document.querySelector('#rt-checkbox19')
			const checkbox20 = document.querySelector('#rt-checkbox20')
			const checkbox21 = document.querySelector('#rt-checkbox21')
			const checkbox22 = document.querySelector('#rt-checkbox22')
			const checkbox23 = document.querySelector('#rt-checkbox23')
			const checkbox24 = document.querySelector('#rt-checkbox24')
			const checkboxRememberSpeedBypass = document.querySelector('#rt-checkboxRememberSpeedBypass')
			const checkbox25 = document.querySelector('#rt-checkbox25')
			const checkboxSettings1 = document.querySelector('#rt-checkboxSettingsDateOnVideoBackground')
			const color1 = document.querySelector('#rt-color1')
			const color2 = document.querySelector('#rt-color2')
			const colorMain = document.querySelector('#rt-colorYTMain')
			const colorAdditional = document.querySelector('#rt-colorYTAdditional')
			const colorPlayer = document.querySelector('#rt-colorYTPlayer')
			const colorText = document.querySelector('#rt-colorYTText')
			const colorLink = document.querySelector('#rt-colorYTLink')
			const colorVideoProgress = document.querySelector('#rt-colorYTVideoProgress')
			const selectYTColors = document.querySelector('#rt-selectRTColors')
			const selectVideoQuality = document.querySelector('#rt-selectVideoQuality')
			const selectTitleIconColor = document.querySelector('#rt-selectTitleIconColor')
			const selectDefaultVolume = document.querySelector('#rt-selectDefaultVolume')
			const selectRememberSpeed = document.querySelector('#rt-selectRememberSpeed')
			// New feature checkboxes
			const cbSkipAds = document.querySelector('#rt-cbSkipAds')
			const cbSponsorBlock = document.querySelector('#rt-cbSponsorBlock')
			const cbScreenshot = document.querySelector('#rt-cbScreenshot')
			const cbLoop = document.querySelector('#rt-cbLoop')
			const cbChannelAvatar = document.querySelector('#rt-cbChannelAvatar')
			const cbRestoreQuality = document.querySelector('#rt-cbRestoreQuality')
			const cbDisableAutoplay = document.querySelector('#rt-cbDisableAutoplay')
			const cbCommentSort = document.querySelector('#rt-cbCommentSort')
			const cbCollapseReplies = document.querySelector('#rt-cbCollapseReplies')
			const cbHighlightOwner = document.querySelector('#rt-cbHighlightOwner')
			const cbHideShorts = document.querySelector('#rt-cbHideShorts')
			const cbHideLive = document.querySelector('#rt-cbHideLive')
			const cbRememberTab = document.querySelector('#rt-cbRememberTab')
			const cbCompactSidebar = document.querySelector('#rt-cbCompactSidebar')
			const cbAbsoluteLikes = document.querySelector('#rt-cbAbsoluteLikes')
			const cbCopyTimestamp = document.querySelector('#rt-cbCopyTimestamp')
			const cbFilterShort = document.querySelector('#rt-cbFilterShort')
			const cbCustomCSS = document.querySelector('#rt-cbCustomCSS')
			const selectCommentSort = document.querySelector('#rt-selectCommentSort')
			const filterMinDurationInput = document.querySelector('#rt-filterMinDuration')
			const filterMinLabel = document.querySelector('#rt-filterMinLabel')
			const sbCategoriesInput = document.querySelector('#rt-sbCategories')
			const customCSSArea = document.querySelector('#rt-customCSSArea')
			// Set saved values
			checkboxMain.checked = RTcolors
			checkboxAnimateLoad.checked = RTanimateLoad
			checkbox0.checked = RThideAllTrash
			checkbox1.checked = RTwatchedVideo
			checkbox2.checked = RTbetterFont
			checkbox3.checked = RTvideoDateCreated
			checkbox4.checked = RTfocusFix
			checkbox5.checked = RTnotificationsRemove
			checkbox6.checked = RTcustomTitleIcon
			checkbox7.checked = RTreturnDislikes
			checkbox8.checked = RTfullVideoNames
			checkbox9.checked = RTstopChannelTrailer
			checkbox10.checked = RTremainingTime
			checkbox11.checked = RTrememberTime
			checkbox12.checked = RTvideoQuality
			checkbox13.checked = RTfixChannelLinks
			checkbox14.checked = RTshowTranslationTime
			checkbox15.checked = RTdisablePlayerSleep
			checkbox16.checked = RTshowVideoCountOnChannel
			checkbox17.checked = RThotkeysAlwaysActive
			checkbox18.checked = RTscrollVolume
			checkbox19.checked = RTmiddleClickSearch
			checkbox20.checked = RTtranslateCommentButton
			checkbox21.checked = RTscrollSpeed
			checkbox22.checked = RTUpdateCheck
			checkbox23.checked = RTDefaultVolume
			checkbox24.checked = RTRememberSpeed
			checkboxRememberSpeedBypass.checked = RTRememberSpeedBypass
			checkbox25.checked = RTFixesForNewYouTube
			checkboxSettings1.checked = RTSettingsDateOnVideoBackgroundChange
			color1.value = RTColorWatchedLabelBackground
			color2.value = RTColorWatchedBackground
			colorMain.value = RTColorYTMain
			colorAdditional.value = RTColorYTAdditional
			colorPlayer.value = RTColorYTPlayer
			colorText.value = RTColorYTText
			colorLink.value = RTColorYTLink
			colorVideoProgress.value = RTColorYTVideoProgress
			selectYTColors.value = RTSelectYTColors
			selectVideoQuality.value = RTSelectVideoQuality
			selectTitleIconColor.value = RTSelectTitleIconColor
			selectDefaultVolume.value = RTDefaultVolumeLevel
			// New features
			cbSkipAds.checked = RTskipAds
			cbSponsorBlock.checked = RTsponsorBlock
			cbScreenshot.checked = RTscreenshotFrame
			cbLoop.checked = RTloopVideo
			cbChannelAvatar.checked = RTchannelAvatar
			cbRestoreQuality.checked = RTrestoreQualityAfterAd
			cbDisableAutoplay.checked = RTdisableAutoplay
			cbCommentSort.checked = RTdefaultCommentSort
			cbCollapseReplies.checked = RTcollapseReplies
			cbHighlightOwner.checked = RThighlightOwner
			cbHideShorts.checked = RThideShorts
			cbHideLive.checked = RThidePremieresLive
			cbRememberTab.checked = RTrememberChannelTab
			cbCompactSidebar.checked = RTcompactSidebar
			cbAbsoluteLikes.checked = RTabsoluteLikes
			cbCopyTimestamp.checked = RTcopyTimestampButton
			cbFilterShort.checked = RTfilterShortVideos
			cbCustomCSS.checked = RTcustomCSSEditor
			selectCommentSort.value = RTCommentSortDefault
			function populateSpeedSelect(isBypass) {
				selectRememberSpeed.innerHTML = '';
				const standardSpeeds = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
				const granularSpeeds = [];
				for (let i = 0.25; i <= 4; i += 0.125) {
					granularSpeeds.push(Number(i.toPrecision(15)));
				}
				const speedList = isBypass ? granularSpeeds : standardSpeeds;
				speedList.forEach(speed => {
					const option = document.createElement('option');
					option.value = speed;
					option.textContent = `${speed}x`;
					selectRememberSpeed.appendChild(option);
				});
				if (!speedList.map(String).includes(String(RTSelectRememberSpeedLevel))) {
					const option = document.createElement('option');
					option.value = RTSelectRememberSpeedLevel;
					option.textContent = `${RTSelectRememberSpeedLevel}x (свой)`;
					selectRememberSpeed.appendChild(option);
				}
				selectRememberSpeed.value = RTSelectRememberSpeedLevel;
			}
			populateSpeedSelect(checkboxRememberSpeedBypass.checked);
			document.querySelectorAll('.YouTubi-button-save').forEach(x => x.addEventListener('click', function () {
				GM_setValue('rt-colors', checkboxMain.checked ? 'true' : 'false')
				GM_setValue('rt-animateLoad', checkboxAnimateLoad.checked ? 'true' : 'false')
				GM_setValue('rt-hideAllTrash', checkbox0.checked ? 'true' : 'false')
				GM_setValue('rt-watchedVideo', checkbox1.checked ? 'true' : 'false')
				GM_setValue('rt-betterFont', checkbox2.checked ? 'true' : 'false')
				GM_setValue('rt-videoDateCreated', checkbox3.checked ? 'true' : 'false')
				GM_setValue('rt-focusFix', checkbox4.checked ? 'true' : 'false')
				GM_setValue('rt-notificationsRemove', checkbox5.checked ? 'true' : 'false')
				GM_setValue('rt-customTitleIcon', checkbox6.checked ? 'true' : 'false')
				GM_setValue('rt-returnDislikes', checkbox7.checked ? 'true' : 'false')
				GM_setValue('rt-fullVideoNames', checkbox8.checked ? 'true' : 'false')
				GM_setValue('rt-stopChannelTrailer', checkbox9.checked ? 'true' : 'false')
				GM_setValue('rt-remainingTime', checkbox10.checked ? 'true' : 'false')
				GM_setValue('rt-rememberTime', checkbox11.checked ? 'true' : 'false')
				GM_setValue('rt-videoQuality', checkbox12.checked ? 'true' : 'false')
				GM_setValue('rt-fixChannelLinks', checkbox13.checked ? 'true' : 'false')
				GM_setValue('rt-showTranslationTime', checkbox14.checked ? 'true' : 'false')
				GM_setValue('rt-disablePlayerSleep', checkbox15.checked ? 'true' : 'false')
				GM_setValue('rt-showVideoCountOnChannel', checkbox16.checked ? 'true' : 'false')
				GM_setValue('rt-hotkeysAlwaysActive', checkbox17.checked ? 'true' : 'false')
				GM_setValue('rt-scrollVolume', checkbox18.checked ? 'true' : 'false')
				GM_setValue('rt-middleClickSearch', checkbox19.checked ? 'true' : 'false')
				GM_setValue('rt-translateCommentButton', checkbox20.checked ? 'true' : 'false')
				GM_setValue('rt-scrollSpeed', checkbox21.checked ? 'true' : 'false')
				GM_setValue('rt-defaultVolume', checkbox23.checked ? 'true' : 'false')
				GM_setValue('rt-rememberSpeed', checkbox24.checked ? 'true' : 'false')
				GM_setValue('rt-rememberSpeedBypass', checkboxRememberSpeedBypass.checked ? 'true' : 'false')
				GM_setValue('rt-fixesForNewYouTube', checkbox25.checked ? 'true' : 'false')
				GM_setValue('rt-updateCheck', checkbox22.checked ? 'true' : 'false')
				GM_setValue('rt-settings-dateOnVideoBackgroundChange', checkboxSettings1.checked ? 'true' : 'false')
				GM_setValue('rt-color-watchedLabelBackground', color1.value)
				GM_setValue('rt-color-watchedBackground', color2.value)
				GM_setValue('rt-color-YTMain', colorMain.value)
				GM_setValue('rt-color-YTAdditional', colorAdditional.value)
				GM_setValue('rt-color-YTPlayer', colorPlayer.value)
				GM_setValue('rt-color-YTText', colorText.value)
				GM_setValue('rt-color-YTLink', colorLink.value)
				GM_setValue('rt-color-YTVideoProgress', colorVideoProgress.value)
				GM_setValue('rt-select-YTColors', selectYTColors.value)
				GM_setValue('rt-select-videoQuality', selectVideoQuality.value)
				GM_setValue('rt-select-title-icon-color', selectTitleIconColor.value)
				GM_setValue('rt-select-defaultVolumeLevel', selectDefaultVolume.value)
				GM_setValue('rt-select-rememberSpeedLevel', selectRememberSpeed.value)
				GM_setValue('rt-head-top', document.querySelector('#YouTubi-menu').style.top)
				GM_setValue('rt-head-left', document.querySelector('#YouTubi-menu').style.left)
				// New features save
				GM_setValue('rt-skipAds', cbSkipAds.checked ? 'true' : 'false')
				GM_setValue('rt-sponsorBlock', cbSponsorBlock.checked ? 'true' : 'false')
				GM_setValue('rt-screenshotFrame', cbScreenshot.checked ? 'true' : 'false')
				GM_setValue('rt-loopVideo', cbLoop.checked ? 'true' : 'false')
				GM_setValue('rt-channelAvatar', cbChannelAvatar.checked ? 'true' : 'false')
				GM_setValue('rt-restoreQualityAfterAd', cbRestoreQuality.checked ? 'true' : 'false')
				GM_setValue('rt-disableAutoplay', cbDisableAutoplay.checked ? 'true' : 'false')
				GM_setValue('rt-defaultCommentSort', cbCommentSort.checked ? 'true' : 'false')
				GM_setValue('rt-collapseReplies', cbCollapseReplies.checked ? 'true' : 'false')
				GM_setValue('rt-highlightOwner', cbHighlightOwner.checked ? 'true' : 'false')
				GM_setValue('rt-hideShorts', cbHideShorts.checked ? 'true' : 'false')
				GM_setValue('rt-hidePremieresLive', cbHideLive.checked ? 'true' : 'false')
				GM_setValue('rt-rememberChannelTab', cbRememberTab.checked ? 'true' : 'false')
				GM_setValue('rt-compactSidebar', cbCompactSidebar.checked ? 'true' : 'false')
				GM_setValue('rt-absoluteLikes', cbAbsoluteLikes.checked ? 'true' : 'false')
				GM_setValue('rt-copyTimestampButton', cbCopyTimestamp.checked ? 'true' : 'false')
				GM_setValue('rt-filterShortVideos', cbFilterShort.checked ? 'true' : 'false')
				GM_setValue('rt-customCSSEditor', cbCustomCSS.checked ? 'true' : 'false')
				GM_setValue('rt-sponsorblock-categories', sbCategoriesInput.value.trim())
				GM_setValue('rt-filter-min-duration', filterMinDurationInput.value)
				GM_setValue('rt-custom-css', customCSSArea.value)
				GM_setValue('rt-comment-sort-default', selectCommentSort.value)
				x.textContent = _t('saved')
				setTimeout(() => x.textContent = _t('save'), 1000)
			}))
			//#endregion
			//#region Функціональність всіх кнопок | панелей | колорпікерів
			color1.addEventListener('input', function (e) {
				document.querySelectorAll('#progress.ytd-thumbnail-overlay-resume-playback-renderer').forEach(x => x.style.setProperty('--label-color', e.target.value + '80'))
				document.querySelectorAll('.ytd-rich-grid-media #progress.ytd-thumbnail-overlay-resume-playback-renderer').forEach(x => x.style.setProperty('--label-color', e.target.value + '80'))
				document.querySelectorAll('.ytd-search ytd-video-renderer #progress.ytd-thumbnail-overlay-resume-playback-renderer').forEach(x => x.style.setProperty('--label-color', e.target.value + '80'))
			})
			color2.addEventListener('input', function (e) {
				document.querySelectorAll('#progress.ytd-thumbnail-overlay-resume-playback-renderer').forEach(x => x.style.setProperty('--background-color', e.target.value + '80'))
				document.querySelectorAll('.ytd-rich-grid-media #progress.ytd-thumbnail-overlay-resume-playback-renderer').forEach(x => x.style.setProperty('--background-color', e.target.value + '80'))
				document.querySelectorAll('.ytd-search #progress.ytd-thumbnail-overlay-resume-playback-renderer').forEach(x => x.style.setProperty('--background-color', e.target.value + '80'))
			})
			colorMain.addEventListener('input', debounce(e => {
				document.documentElement.style.setProperty('--YT-main-color', e.target.value)
				document.documentElement.style.setProperty('--YT-main-color-transparent', e.target.value + 'cc')
			}, 20))
			colorAdditional.addEventListener('input', debounce(e => {
				document.documentElement.style.setProperty('--YT-additional-color', e.target.value)
				document.documentElement.style.setProperty('--YT-hover-and-dateVideoLoad-color', ModifyColor(e.target.value, 4, 4, 4))
				document.documentElement.style.setProperty('--YT-hoverVideoButton-color', ModifyColor(e.target.value, 11, 12, 13))
				document.documentElement.style.setProperty('--YT-overlayMenu-color', ModifyColor(e.target.value, 5, 4, 3) + 'ba')
				document.documentElement.style.setProperty('--YT-hoverAndPanels2-color', ModifyColor(e.target.value, 14, 15, 15))
				document.documentElement.style.setProperty('--YT-searchBorder-color', ModifyColor(e.target.value, 62, 60, 70) + '42')
				document.documentElement.style.setProperty('--YT-searchBorderHover-color', ModifyColor(e.target.value, 92, 90, 100) + '42')
				document.documentElement.style.setProperty('--YT-icon-color', ModifyColor(e.target.value, 26, 22, 17))
				document.documentElement.style.setProperty('--YT-videoTime-color', ModifyColor(e.target.value, 11, 13, 15) + 'ba')
			}, 20))
			colorPlayer.addEventListener('input', debounce(e => document.documentElement.style.setProperty('--YT-player-color', e.target.value), 20))
			colorText.addEventListener('input', debounce(e => {
				document.documentElement.style.setProperty('--YT-text-color', e.target.value)
				document.documentElement.style.setProperty('--YT-icon-inactive', ModifyColor(e.target.value, -25, -23, -15))
				document.documentElement.style.setProperty('--YT-iconText-color', ModifyColor(e.target.value, -1, -8, -11))
				document.documentElement.style.setProperty('--YT-searchBoxPlaceholder-color', ModifyColor(e.target.value, -50, -50, -50))
			}, 20))
			colorLink.addEventListener('input', debounce(e => {
				document.documentElement.style.setProperty('--YT-link-color', e.target.value)
				document.documentElement.style.setProperty('--YT-notificationsBadge-color', ModifyColor(e.target.value, -95, -78, -58))
				document.documentElement.style.setProperty('--YT-panelActiveButton-color', ModifyColor(e.target.value, -56, -46, -20))
				document.documentElement.style.setProperty('--YT-HD4KBadge-color', ModifyColor(e.target.value, -97, -94, -78))
			}, 20))
			colorVideoProgress.addEventListener('input', debounce(e => document.documentElement.style.setProperty('--YT-videoProgress-color', e.target.value), 20))
			checkboxMain.addEventListener('change', e => {
				document.querySelectorAll(".rt-colorYT").forEach(x => x.toggleAttribute('hidden', !e.target.checked || selectYTColors.value != 'custom'))
				document.querySelector("#rt-selectRTColors").toggleAttribute('hidden', !e.target.checked)
				pushCSS('body, ytd-app, #background.ytd-masthead, #container.ytd-searchbox, #chips-wrapper.ytd-feed-filter-chip-bar-renderer, yt-chip-cloud-chip-renderer[chip-style=STYLE_HOME_FILTER], yt-chip-cloud-chip-renderer[chip-style=STYLE_REFRESH_TO_NOVEL_CHIP], #guide-content.ytd-app, ytd-mini-guide-renderer, ytd-mini-guide-entry-renderer, #description.ytd-watch-metadata, .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal, yt-chip-cloud-chip-renderer[chip-style=STYLE_DEFAULT], .ytp-swatch-background-color, .header.ytd-playlist-panel-renderer, .badge-style-type-medium-grey.ytd-badge-supported-renderer, .playlist-items.ytd-playlist-panel-renderer, ytd-playlist-panel-video-renderer[selected][use-color-palette], tp-yt-app-toolbar.ytd-c4-tabbed-header-renderer, #channel-container.ytd-c4-tabbed-header-renderer, #background, #primary, #container, #contentContainer' +
					'{transition: background 1s ease !important}', 'rtChangeAnimation')
				PaintYouTube(e.target.checked)
				setTimeout(() => document.querySelector('#rtChangeAnimation')?.remove(), 1100)
			})
			checkbox0.addEventListener('change', e => HideTrash(e.target.checked))
			checkbox1.addEventListener('change', e => MarkWatchedVideos(e.target.checked))
			checkbox2.addEventListener('change', e => ImproveFont(e.target.checked))
			checkbox3.addEventListener('change', e => DateTimeCreated(e.target.checked, document.querySelector('#rt-checkboxSettingsDateOnVideoBackground').checked))
			checkboxSettings1.addEventListener('change', e => DateTimeCreated(document.querySelector('#rt-checkbox3').checked, e.target.checked))
			checkbox4.addEventListener('change', e => FocusAndScrollFix(e.target.checked))
			checkbox6.addEventListener('change', e => selectTitleIconColor.toggleAttribute('hidden', !e.target.checked) & CustomIcon(e.target.checked, selectTitleIconColor.value))
			checkbox7.addEventListener('change', e => { if (e.target.checked) ReturnDislikes() })
			checkbox8.addEventListener('change', e => FullVideoNames(e.target.checked))
			checkbox9.addEventListener('change', e => { if (e.target.checked) StopChannelTrailer() })
			checkbox10.addEventListener('change', e => { if (e.target.checked) RemainingTime() })
			checkbox11.addEventListener('change', e => { if (e.target.checked) RememberTime() })
			checkbox12.addEventListener('change', e => selectVideoQuality.toggleAttribute('hidden', !e.target.checked))
			checkbox13.addEventListener('change', e => { if (e.target.checked) FixChannelLinks() })
			checkbox15.addEventListener('change', e => { if (e.target.checked) DisableSleep() })
			checkbox16.addEventListener('change', e => { if (e.target.checked) finishEvent(() => ShowVideoCountOnChannel()) })
			checkbox17.addEventListener('change', e => { if (e.target.checked) HotkeysAlwaysActive() })
			checkbox18.addEventListener('change', e => { if (e.target.checked) ScrollVolume() })
			checkbox21.addEventListener('change', e => { if (e.target.checked) ScrollSpeed() })
			checkbox23.addEventListener('change', e => (RTDefaultVolume = e.target.checked, ForceDefaultVideoVolume(e.target.checked), selectDefaultVolume.toggleAttribute('hidden', !e.target.checked)));
			checkbox25.addEventListener('change', e => FixesForNewYouTube(e.target.checked))
			checkbox24.addEventListener('change', e => {
				const isEnabled = e.target.checked;
				RTRememberSpeed = isEnabled;
				selectRememberSpeed.toggleAttribute('hidden', !isEnabled);
				document.querySelector(".rt-rememberSpeedBypassDiv").toggleAttribute('hidden', !isEnabled);
				if (isEnabled) {
					RememberSpeed();
					setPlaybackSpeedNow();
				}
			});
			checkboxRememberSpeedBypass.addEventListener('change', e => {
				const isBypass = e.target.checked;
				RTRememberSpeedBypass = isBypass;
				RTSelectRememberSpeedLevel = selectRememberSpeed.value;
				populateSpeedSelect(isBypass);
				setPlaybackSpeedNow();
			});
			selectRememberSpeed.addEventListener('change', e => (RTSelectRememberSpeedLevel = e.target.value, setPlaybackSpeedNow()));
			checkbox1.addEventListener('change', e => document.querySelectorAll(".rt-colorWatched").forEach(x => x.toggleAttribute('hidden', !e.target.checked)))
			checkbox3.addEventListener('change', e => document.querySelector(".rt-settingsDateOnVideoBackgroundDiv").toggleAttribute('hidden', !e.target.checked))
			// New feature live toggles
			cbSkipAds.addEventListener('change', e => { if (e.target.checked) SkipAds() })
			cbSponsorBlock.addEventListener('change', e => {
				document.querySelector('.rt-sbCatDiv').toggleAttribute('hidden', !e.target.checked)
				if (e.target.checked) SponsorBlock()
			})
			cbScreenshot.addEventListener('change', e => ScreenshotFrame(e.target.checked))
			cbLoop.addEventListener('change', e => LoopVideo(e.target.checked))
			cbChannelAvatar.addEventListener('change', e => { if (e.target.checked) ChannelAvatarSidebar() })
			cbRestoreQuality.addEventListener('change', e => { if (e.target.checked) RestoreQualityAfterAd() })
			cbDisableAutoplay.addEventListener('change', e => DisableAutoplay(e.target.checked))
			cbCommentSort.addEventListener('change', e => {
				selectCommentSort.toggleAttribute('hidden', !e.target.checked)
				if (e.target.checked) DefaultCommentSort()
			})
			cbCollapseReplies.addEventListener('change', e => { if (e.target.checked) CollapseReplies() })
			cbHighlightOwner.addEventListener('change', e => HighlightOwnerComments(e.target.checked))
			cbHideShorts.addEventListener('change', e => HideShorts(e.target.checked))
			cbHideLive.addEventListener('change', e => HidePremieresLive(e.target.checked))
			cbRememberTab.addEventListener('change', e => { if (e.target.checked) RememberChannelTab() })
			cbCompactSidebar.addEventListener('change', e => CompactSidebar(e.target.checked))
			cbAbsoluteLikes.addEventListener('change', e => { if (e.target.checked) AbsoluteLikes() })
			cbCopyTimestamp.addEventListener('change', e => { if (e.target.checked) CopyTimestampButton() })
			cbFilterShort.addEventListener('change', e => {
				filterMinDurationInput.style.display = e.target.checked ? '' : 'none'
				filterMinLabel.style.display = e.target.checked ? '' : 'none'
				FilterShortVideos(e.target.checked)
			})
			cbCustomCSS.addEventListener('change', e => {
				document.querySelector('#rt-customCSSDiv').toggleAttribute('hidden', !e.target.checked)
			})
			customCSSArea.addEventListener('input', debounce(e => {
				RTCustomCSS = e.target.value
				ApplyCustomCSS(RTCustomCSS)
			}, 500))
			document.querySelectorAll('.YouTubi-label').forEach(label => {
				let tooltipText = label.getAttribute('YouTubi-tooltip');
				if (tooltipText && tooltipText.startsWith('KEY:')) {
					tooltipText = _t(tooltipText.slice(4));
					label.setAttribute('YouTubi-tooltip', tooltipText);
				}
				if (!tooltipText) return;
				const randomClass = `RT${Math.floor(Math.random() * 100000)}`;
				label.classList.add(randomClass);
				const styleContent = tooltipText.includes('http')
					? `content: ""; background-image: url("${tooltipText}"); background-size: cover; width: 400px; height: 225px;`
					: `content: "${tooltipText.replaceAll('||', '\\a')}"; white-space: pre;`;
				const tooltipStyle = document.createElement('style');
				tooltipStyle.innerHTML = `.YouTubi-label.${randomClass}::after {${styleContent}}`;
				document.head.appendChild(tooltipStyle);
			});
			document.querySelectorAll('.YouTubi-button-reset').forEach(button => {
				button.setAttribute('YouTubi-tooltip', 'Reset')
				button.innerHTML = '<img src="https://i.imgur.com/fguClbQ.png">';
			})
			document.querySelector('.YouTubi-button-hardReset').addEventListener('click', () => {
				if (!confirm(_t('hreset_q'))) return
				GM_listValues().forEach(x => GM_deleteValue(x))
				location.reload()
			})

			// Language switcher
			const rtLS = document.querySelector('#rt-langSel')
			if (rtLS) {
				rtLS.value = RTLanguage
				rtLS.addEventListener('change', e => {
					try { localStorage.setItem('rt-lang', e.target.value) } catch {}
					location.reload()
				})
			}
			if (!checkboxMain.checked || selectYTColors.value != 'custom') document.querySelectorAll(".rt-colorYT").forEach(x => x.toggleAttribute('hidden', true))
			selectYTColors.addEventListener("change", e => {
				HideColors(true)
				pushCSS('body, ytd-app, #background.ytd-masthead, #container.ytd-searchbox, #chips-wrapper.ytd-feed-filter-chip-bar-renderer, yt-chip-cloud-chip-renderer[chip-style=STYLE_HOME_FILTER], yt-chip-cloud-chip-renderer[chip-style=STYLE_REFRESH_TO_NOVEL_CHIP], #guide-content.ytd-app, ytd-mini-guide-renderer, ytd-mini-guide-entry-renderer, #description.ytd-watch-metadata, .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal, yt-chip-cloud-chip-renderer[chip-style=STYLE_DEFAULT], .ytp-swatch-background-color, .header.ytd-playlist-panel-renderer, .badge-style-type-medium-grey.ytd-badge-supported-renderer, .playlist-items.ytd-playlist-panel-renderer, ytd-playlist-panel-video-renderer[selected][use-color-palette], tp-yt-app-toolbar.ytd-c4-tabbed-header-renderer, #channel-container.ytd-c4-tabbed-header-renderer, #background, #primary, #container, #contentContainer' +
					'{transition: background 1s ease !important}', 'rtChangeAnim')
				const selected = e.target.value
				if (selected == 'default') {
					colorMain.value = '#1b222a'
					colorAdditional.value = '#222b35'
					colorPlayer.value = '#11161c'
					colorText.value = '#c9d0d3'
					colorLink.value = '#a1bad7'
					colorVideoProgress.value = '#5785ba'
				}
				else if (selected == 'defaultDark') {
					colorMain.value = '#101419'
					colorAdditional.value = '#1a2128'
					colorPlayer.value = '#0c0d0e'
					colorText.value = '#c9d0d3'
					colorLink.value = '#a1bad7'
					colorVideoProgress.value = '#5785ba'
				}
				else if (selected == 'dark') {
					colorMain.value = '#101214'
					colorAdditional.value = '#1b1e21'
					colorPlayer.value = '#080909'
					colorText.value = '#c9d0d3'
					colorLink.value = '#a1bad7'
					colorVideoProgress.value = '#5785ba'
				}
				else if (selected == 'purple') {
					colorMain.value = '#191014'
					colorAdditional.value = '#2e1f2a'
					colorPlayer.value = '#0e0c0e'
					colorText.value = '#c9d0d3'
					colorLink.value = '#d1a8b2'
					colorVideoProgress.value = '#954166'
				}
				else if (selected == 'green') {
					colorMain.value = '#101917'
					colorAdditional.value = '#1a2825'
					colorPlayer.value = '#0c0d0e'
					colorText.value = '#c9d0d3'
					colorLink.value = '#a5e4d9'
					colorVideoProgress.value = '#409c91'
				}
				else if (selected == 'custom') {
					HideColors(false)
				}
				CallColorEvent()
				setTimeout(() => document.querySelector('#rtChangeAnim')?.remove(), 1100)
				function HideColors(hide) {
					document.querySelectorAll(".rt-colorYT").forEach(x => x.toggleAttribute('hidden', hide))
				}
				function CallColorEvent() {
					colorMain.dispatchEvent(new Event('input', { bubbles: true }))
					colorAdditional.dispatchEvent(new Event('input', { bubbles: true }))
					colorPlayer.dispatchEvent(new Event('input', { bubbles: true }))
					colorText.dispatchEvent(new Event('input', { bubbles: true }))
					colorLink.dispatchEvent(new Event('input', { bubbles: true }))
					colorVideoProgress.dispatchEvent(new Event('input', { bubbles: true }))
				}
			})
			selectTitleIconColor.addEventListener("change", e => {
				const selected = e.target.value
				if (selected == 'blue') CustomIcon(true, 'blue')
				else if (selected == 'gray') CustomIcon(true, 'gray')
			})
			selectDefaultVolume.addEventListener("change", e => {
				RTDefaultVolumeLevel = e.target.value
			})
			const dragHeader = (() => {
				let isDragging = false;
				let offsetX, offsetY;
				const draggableWindow = document.querySelector('#YouTubi-menu');
				const windowPadding = 10;
				const snapDistance = 20;
				const setPosition = (x, y) => {
					draggableWindow.style.left = `${x}px`;
					draggableWindow.style.top = `${y}px`;
				};
				return (e) => {
					if (e.type === 'mousedown') {
						e.preventDefault();
						isDragging = true;
						const { offsetLeft, offsetTop } = draggableWindow;
						offsetX = e.clientX - offsetLeft;
						offsetY = e.clientY - offsetTop;
					} else if (e.type === 'mousemove' && isDragging) {
						const x = e.clientX - offsetX;
						const y = e.clientY - offsetY;
						const snapX = x <= snapDistance ? windowPadding :
							x >= window.innerWidth - draggableWindow.offsetWidth - (snapDistance + 10) ? window.innerWidth - draggableWindow.offsetWidth - (windowPadding + 10) : x;
						const snapY = y <= snapDistance ? windowPadding :
							y >= window.innerHeight - draggableWindow.offsetHeight - snapDistance ? window.innerHeight - draggableWindow.offsetHeight - windowPadding : y;
						setPosition(snapX, snapY);
					} else if (e.type === 'mouseup') {
						isDragging = false;
					}
				};
			})();
			document.querySelector('#rt-head').addEventListener('mousedown', dragHeader);
			document.addEventListener('mousemove', dragHeader);
			document.addEventListener('mouseup', dragHeader);
			document.querySelector('#rt-closeImg-head').addEventListener('click', () => document.querySelector('#YouTubi-menu')?.toggleAttribute('hidden'))
			//#endregion
		}
	})
	//#region Основні функції (оригінальні - без змін)
	function PaintYouTube(paint) {
		if (!paint) {
			document.querySelector('#rt-paint')?.remove()
			return
		}
		pushCSS(`:root {--YT-main-color: ${RTColorYTMain}; --YT-main-color-transparent: ${RTColorYTMain + 'CC'}; --YT-additional-color: ${RTColorYTAdditional}; --YT-hover-and-dateVideoLoad-color: ${ModifyColor(RTColorYTAdditional, 4, 4, 4)};` +
			`--YT-hoverVideoButton-color: ${ModifyColor(RTColorYTAdditional, 11, 12, 13)}; --YT-text-color: ${RTColorYTText}; --YT-overlayMenu-color: ${ModifyColor(RTColorYTAdditional, 5, 4, 3)}ba;` +
			`--YT-hoverAndPanels2-color: ${ModifyColor(RTColorYTAdditional, 14, 15, 15)}; --YT-link-color: ${RTColorYTLink}; --YT-icon-inactive: ${ModifyColor(RTColorYTText, -25, -23, -15)};` +
			`--YT-searchBorder-color: ${ModifyColor(RTColorYTAdditional, 62, 60, 70)}42; --YT-searchBorderHover-color: ${ModifyColor(RTColorYTAdditional, 92, 90, 100)}42;` +
			`--YT-videoProgress-color: ${RTColorYTVideoProgress}; --YT-iconText-color: ${ModifyColor(RTColorYTText, -1, -8, -11)}; --YT-icon-color: ${ModifyColor(RTColorYTAdditional, 26, 22, 17)};` +
			`--YT-player-color: ${RTColorYTPlayer}; --YT-videoTime-color: ${ModifyColor(RTColorYTAdditional, 11, 13, 15)}ba;` +
			`--YT-notificationsBadge-color: ${ModifyColor(RTColorYTLink, -95, -78, -58)}; --YT-panelActiveButton-color: ${ModifyColor(RTColorYTLink, -56, -46, -20)};` +
			`--YT-HD4KBadge-color: ${ModifyColor(RTColorYTLink, -97, -94, -78)}; --YT-searchBoxPlaceholder-color: ${ModifyColor(RTColorYTText, -50, -50, -50)} }` +
			'html[dark], [dark] {--yt-spec-base-background: var(--YT-main-color)}' +
			'html[darker-dark-theme][dark], [darker-dark-theme] [dark] {--yt-spec-text-primary: var(--YT-text-color)}' +
			'html[dark], [dark] {--yt-spec-menu-background: var(--YT-overlayMenu-color)} ytd-simple-menu-header-renderer {background-color: transparent}' +
			'html[dark], [dark] {--yt-spec-raised-background: var(--YT-overlayMenu-color)} .YtSearchboxComponentSuggestionsContainer, .ytSearchboxComponentSuggestionsContainer {background-color: var(--YT-overlayMenu-color)}' +
			'html[dark], [dark] {--yt-spec-brand-background-primary: var(--YT-additional-color); --yt-spec-general-background-a: var(--YT-main-color)}' +
			'html[dark], [dark] {--yt-spec-badge-chip-background: var(--YT-additional-color); --yt-spec-button-chip-background-hover: var(--YT-hover-and-dateVideoLoad-color)}' +
			'.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal:hover, .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled:hover {background-color: var(--YT-hoverVideoButton-color)}' +
			'ytd-playlist-panel-renderer[use-color-palette][is-dark-theme] {--yt-active-playlist-panel-background-color: var(--YT-hover-and-dateVideoLoad-color)}' +
			'html[dark], [dark] {--yt-spec-call-to-action: var(--YT-link-color); --yt-spec-themed-blue: var(--YT-link-color)} .yt-core-attributed-string__link--call-to-action-color {color: var(--yt-spec-call-to-action) !important} .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--text {color: var(--yt-spec-call-to-action)} .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--text:hover {background-color: var(--YT-additional-color)}' +
			'html[dark], [dark] {--ytd-searchbox-background: var(--YT-main-color)}' +
			'.YtSearchboxComponentInputBoxDark, .ytSearchboxComponentInputBoxDark {background-color: var(--YT-main-color)}' +
			'.YtSuggestionComponentPersonalizedSuggestion, .YtSuggestionComponentSuggestion, .ytSuggestionComponentPersonalizedSuggestion, .ytSuggestionComponentSuggestion {color: var(--YT-text-color)} .YtSuggestionComponentRemoveLinkDark, .ytSuggestionComponentRemoveLinkDark {color: var(--YT-link-color)}' +
			'html[dark] {--yt-live-chat-background-color: var(--YT-main-color)}' +
			'ytd-playlist-panel-renderer#playlist {--yt-lightsource-secondary-title-color: var(--YT-text-color) !important; --yt-lightsource-primary-title-color: var(--YT-text-color) !important}' +
			'html[system-icons][dark], html[system-icons] [dark] {--yt-spec-brand-icon-inactive: var(--YT-icon-inactive)}' +
			'html[dark] {--yt-spec-icon-active-other: var(--YT-icon-inactive)}' +
			'html[dark] {--yt-spec-brand-icon-active: var(--YT-icon-inactive)}' +
			'html[dark], [dark] {--ytd-searchbox-legacy-button-hover-border-color: var(--YT-searchBorderHover-color)}' +
			'html[dark], [dark] {--ytd-searchbox-legacy-border-color: var(--YT-searchBorder-color)}' +
			'html[dark], [dark] {--ytd-searchbox-legacy-button-border-color: var(--YT-searchBorder-color)}' +
			'html[dark], [dark] {--yt-spec-static-brand-red: var(--YT-videoProgress-color)} .YtThumbnailOverlayProgressBarHostWatchedProgressBarSegmentModern {background: var(--YT-videoProgress-color)}' +
			'.ytp-swatch-background-color, #progress.ytd-thumbnail-overlay-resume-playback-renderer, .ytThumbnailOverlayProgressBarHostWatchedProgressBarSegment {background: var(--YT-videoProgress-color) !important} .ytp-load-progress {transition: transform 1.5s ease-in-out}' +
			'.ytp-live-badge[disabled]:before {background: var(--YT-videoProgress-color) !important}' +
			'#ytp-id-17, #ytp-id-18, #ytp-id-19, .ytp-popup {background: var(--YT-overlayMenu-color) !important; backdrop-filter: blur(15px)}' +
			'html[dark], [dark] {--yt-spec-wordmark-text: var(--YT-iconText-color)}' +
			'path[d^="M14.4848 20C14.4848"] {fill: var(--YT-icon-color)}' +
			'svg.external-icon > svg > g > path:nth-child(1), #card svg g g path:nth-child(1) {fill: var(--YT-icon-color)}' +
			'#logo-icon > svg > g > g:nth-child(1) > path:nth-child(1) {fill: var(--YT-icon-color)}' +
			'.html5-video-player {background: var(--YT-player-color)}' +
			'#time-status.ytd-thumbnail-overlay-time-status-renderer, .badge-shape-wiz--default.badge-shape-wiz--overlay, .badge-shape-wiz--thumbnail-default, .yt-badge-shape {background: var(--YT-videoTime-color); backdrop-filter: blur(10px)}' +
			'.badge-shape-wiz--live.badge-shape-wiz--overlay {background: var(--YT-HD4KBadge-color); backdrop-filter: blur(10px)}' +
			'.yt-spec-icon-badge-shape--type-notification .yt-spec-icon-badge-shape__badge {background-color: var(--YT-notificationsBadge-color); color: var(--YT-text-color) !important}' +
			'sup.ytp-swatch-color-white {color: var(--YT-link-color)}' +
			'.ytp-chrome-controls .ytp-button[aria-pressed]:after {background-color: var(--YT-panelActiveButton-color) !important}' +
			'.ytp-button.ytp-settings-button.ytp-hd-quality-badge:after, .ytp-button.ytp-settings-button.ytp-4k-quality-badge:after, .ytp-button.ytp-settings-button.ytp-8k-quality-badge:after {background-color: var(--YT-HD4KBadge-color) !important; border-radius: 3px}' +
			'.ytp-big-mode .ytp-settings-button.ytp-hd-quality-badge:after, .ytp-big-mode .ytp-settings-button.ytp-4k-quality-badge:after, .ytp-big-mode .ytp-settings-button.ytp-8k-quality-badge:after {border-radius: 6px !important}' +
			'.ytp-menuitem[aria-checked=true] .ytp-menuitem-toggle-checkbox {background: var(--YT-notificationsBadge-color) !important}' +
			'.ytp-popup.ytp-contextmenu {background: var(--YT-overlayMenu-color); border-radius: 10px; backdrop-filter: blur(10px)}' +
			'html[dark], [dark] {--yt-spec-additive-background: var(--YT-searchBorderHover-color)}' +
			'.ytp-contextmenu .ytp-menuitem[aria-checked=true] .ytp-menuitem-toggle-checkbox {background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIj48cGF0aCBkPSJNOSAxNi4yTDQuOCAxMmwtMS40IDEuNEw5IDE5IDIxIDdsLTEuNC0xLjRMOSAxNi4yeiIgZmlsbD0iI2ZmZiIgLz48L3N2Zz4=) !important;}' +
			'html[dark], [dark] {--yt-spec-static-overlay-background-heavy: var(--YT-videoTime-color); --yt-spec-static-overlay-background-solid: var(--YT-videoTime-color)}' +
			'html[dark], [dark] {--yt-spec-static-overlay-background-brand: var(--YT-notificationsBadge-color)}' +
			'#icon.ytd-reel-shelf-renderer path, #icon.ytd-rich-shelf-renderer path {fill: var( --YT-icon-color)}' +
			'.tp-yt-paper-tooltip[style-target=tooltip], .ytp-tooltip-text {background-color: var(--YT-videoTime-color) !important; backdrop-filter: blur(10px); padding: 4px 8px; text-wrap: nowrap} .ytp-tooltip-bottom-text {background-color: transparent !important}' +
			'html[dark] {--yt-live-chat-banner-gradient-scrim: linear-gradient(var(--YT-hover-and-dateVideoLoad-color), transparent )}' +
			'#top-level-buttons-computed #segmented-dislike-button ytd-toggle-button-renderer *[aria-pressed="true"] yt-icon {color: rgb(249 137 137) !important}' +
			'.html5-video-player[aria-label*="в "] {background: rgb(0, 0, 0)}' +
			'html[dark], [dark] {--yt-spec-outline: var(--YT-hoverAndPanels2-color)}' +
			'.ytp-bezel-text {border-radius: 20px !important; font-weight: bold; backdrop-filter: blur(4px); }' +
			'html[dark], [dark] {--ytd-searchbox-text-color: var(--YT-text-color)} #container.ytd-searchbox input.ytd-searchbox::placeholder, #container.ytd-searchbox>[slot=search-input] input::placeholder {color: var(--YT-searchBoxPlaceholder-color) !important}' +
			'.YtSearchboxComponentInput::placeholder, .ytSearchboxComponentInput::placeholder {color: var(--YT-searchBoxPlaceholder-color) !important} .YtSearchboxComponentInput, .ytSearchboxComponentInput {color: var(--YT-text-color)}' +
			'html[dark] .sbsb_a, .YtSearchboxComponentSuggestionsContainer, .ytSearchboxComponentSuggestionsContainer {backdrop-filter: blur(15px)}' +
			'.ytp-doubletap-static-circle {background-color: rgba(0 0 0 / 50%) !important; backdrop-filter: blur(4px);} .ytp-doubletap-tooltip-label { font-size: 15px !important; font-weight: bold !important; margin-left: 8px;}' +
			'ytd-searchbox[has-focus] #container.ytd-searchbox, .YtSearchboxComponentInputBoxDark.YtSearchboxComponentInputBoxHasFocus, .ytSearchboxComponentInputBoxDark.ytSearchboxComponentInputBoxHasFocus {border: 1px solid var(--ytd-searchbox-legacy-border-color) !important}' +
			'.YtSearchboxComponentInputBoxDark, .ytSearchboxComponentInputBoxDark {border-color: var(--ytd-searchbox-legacy-border-color)}' +
			'#card.yt-live-chat-viewer-engagement-message-renderer, #contents.yt-live-chat-mode-change-message-renderer {background-color: var(--YT-additional-color)}' +
			'tp-yt-paper-dialog {backdrop-filter: blur(17px); background-color: var(--YT-overlayMenu-color)}' +
			'#subscribe-button-shape > button {background-color: var(--YT-additional-color); color: var(--YT-text-color)} #subscribe-button-shape > button:hover {background-color: var(--YT-hoverVideoButton-color)}' +
			'span.yt-core-attributed-string--link-inherit-color { color: var(--YT-text-color) !important }' +
			'.ytp-tooltip.ytp-preview .ytp-tooltip-text, .ytp-tooltip-text, .tp-yt-paper-tooltip[style-target=tooltip] { border-radius: 12px !important }' +
			'html[dark], [dark] { --yt-spec-static-brand-white: var(--YT-text-color) }' +
			'.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal, .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled { background-color: var(--YT-additional-color) }' +
			'html[dark] ::selection { background: var(--YT-hoverAndPanels2-color) !important; }' +
			'::-webkit-scrollbar {width: 9px; height: 9px; background-color: var(--YT-main-color) !important} html, ytd-app {scrollbar-color: unset !important}' +
			'.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--tonal, .yt-spec-button-shape-next--mono.yt-spec-button-shape-next--filled {color: var(--YT-text-color)}' +
			'#cinematics-container {display: none}' +
			'#button.ytd-topbar-menu-button-renderer {color: #fff !important}' +
			'ytd-popup-container {z-index: 9999}' +
			'tp-yt-paper-toast.yt-notification-action-renderer {background-color: var(--YT-additional-color); box-shadow: 0 0 10px var(--YT-additional-color)}' +
			'#text.yt-notification-action-renderer, yt-notification-action-renderer[ui-refresh] #sub-text.yt-notification-action-renderer {color: var(--YT-text-color)}' +
			'.yt-spec-button-shape-next--call-to-action-inverse.yt-spec-button-shape-next--text {color: var(--YT-link-color)}' +
			'.ytp-offline-slate-bar {background: rgba(0, 0, 0, 0.4) !important; backdrop-filter: blur(15px) !important} .ytp-offline-slate-button {background: var(--YT-searchBorderHover-color) !important; border-radius: 15px !important}' +
			'#progress.yt-page-navigation-progress {background: var(--YT-videoProgress-color)}' +
			'#cinematic-shorts-scrim {display: none}' +
			'.ytd-popup-container {backdrop-filter: blur(15px)}' +
			'.ytd-masthead button:has(path[d^="M20 12h"]) {background: transparent !important} .ytd-masthead button:has(path[d^="M20 12h"]):hover {background: var(--yt-spec-10-percent-layer) !important}' +
			'.ytd-masthead button:has(path[d^="M20 12h"]) > .yt-spec-button-shape-next__button-text-content {display: none !important}' +
			'.ytd-masthead button:has(path[d^="M20 12h"]) > .yt-spec-button-shape-next__icon {margin-right: -10px; margin-left: -10px; color: white}' +
			'.ytp-progress-bar-container:not(:hover) .ytp-scrubber-button {display: none}' +
			'#frosted-glass.with-chipbar.ytd-app, ytd-masthead[frosted-glass-mode=without-chipbar] #background.ytd-masthead {background: var(--YT-main-color-transparent)}' +
			'ytd-playlist-video-renderer:not(:hover) #menu {display: none}' +
			'#time.ytd-macro-markers-list-item-renderer {background-color: var(--YT-hoverAndPanels2-color) !important}' +
			'.yt-lockup-metadata-view-model-wiz__title {color: var(--YT-text-color) !important}'
			, 'rt-paint')
	}
	function HideTrash(hide) {
		if (!hide) {
			document.querySelector('#rt-hideTrashStyle')?.remove()
			return
		}
		pushCSS('#voice-search-button {display: none}' +
			'#country-code {display: none}' +
			'#footer, ytd-guide-section-renderer:nth-child(5) > div > ytd-guide-entry-renderer:nth-child(2),' +
			'ytd-guide-section-renderer:nth-child(5) > div > ytd-guide-entry-renderer:nth-child(3),' +
			'ytd-guide-section-renderer:nth-child(5) > div > ytd-guide-entry-renderer:nth-child(4),' +
			'ytd-guide-section-renderer:nth-child(3) > div > ytd-guide-entry-renderer:nth-child(2),' +
			'ytd-guide-section-renderer:nth-child(3) > div > ytd-guide-entry-renderer:nth-child(3),' +
			'ytd-guide-section-renderer:nth-child(3) > div > ytd-guide-entry-renderer:nth-child(4),' +
			'ytd-guide-section-renderer:nth-child(3) > div > ytd-guide-entry-renderer:nth-child(5),' +
			'ytd-guide-section-renderer:nth-child(3) > div > ytd-guide-entry-renderer:nth-child(6),' +
			'ytd-guide-section-renderer:nth-child(3) > div > ytd-guide-entry-renderer:nth-child(7),' +
			'ytd-guide-section-renderer:nth-child(1) > div > ytd-guide-entry-renderer:nth-child(2) {display: none}' +
			'a.ytp-next-button.ytp-button, a.ytp-prev-button.ytp-button, .ytp-jump-button {display: none !important}' +
			'.annotation.annotation-type-custom.iv-branding {display: none}' +
			'#reaction-control-panel {display: none}' +
			'.sbfl_a, .YtSearchboxComponentReportButton, .ytSearchboxComponentReportButton {display: none !important}' +
			'[role="button"][aria-label="Добавить в очередь"], [role="button"][aria-label="Додати в чергу"] {display: none}' +
			'.gsst_a, .YtSearchboxComponentYtdTextInputAssistantWrapper, .ytSearchboxComponentYtdTextInputAssistantWrapper {display: none !important}' +
			'button[title="Автовоспроизведение выключено"], button[title="Автоматичне відтворення вимкнено"], .ytp-button:has(.ytp-autonav-toggle-button[aria-checked="false"]) {display: none !important}' +
			'button[title="Субтитры недоступны"], button[title="Субтитри недоступні"] {display: none !important}' +
			'.ytp-button.ytp-remote-button {display: none !important}' +
			'.ytp-button.ytp-miniplayer-button {display: none !important}' +
			'#premium-upsell-link, .ytd-guide-renderer.style-scope:nth-of-type(4) {display: none}' +
			'yt-multi-page-menu-section-renderer:nth-child(5) {display: none}' +
			'.ytp-fullerscreen-edu-button-subtle {display: none !important}' +
			'button[id="infoButton"] {display: none !important}' +
			'#sponsor-button {display: none !important}' +
			'.ytp-paid-content-overlay, .iv-branding, #movie_player > [class^="ytp-ce-"], .ytp-cards-teaser-text, ytm-paid-content-overlay-renderer, ' +
			'ytd-search-pyv-renderer, [class^="ytd-promoted-"], ytd-video-renderer + ytd-shelf-renderer, ytd-video-renderer + ytd-reel-shelf-renderer, ' +
			'#clarify-box, .ytd-watch-flexy.attached-message, ytd-popup-container tp-yt-paper-dialog ytd-single-option-survey-renderer, #donation-shelf ytd-donation-unavailable-renderer, ' +
			'.sparkles-light-cta, ytd-feed-nudge-renderer, .ytp-pause-overlay-container {display: none !important}' +
			'.ytp-settings-menu .ytp-panel-menu > .ytp-menuitem[role="menuitemcheckbox"], .ytp-settings-menu .ytp-panel-menu > .ytp-menuitem:has(path[d^="M16.67,4.31C19"]) {display: none !important}' +
			'ytd-rich-section-renderer:has(a[href^="/premium/"]) {display: none !important}' +
			'#newness-dot {display: none !important}' +
			'#teaser-carousel:has(> .ytVideoMetadataCarouselViewModelHost) {display: none !important}'
			, 'rt-hideTrashStyle')
		pushCSS('ytd-download-button-renderer, yt-button-view-model:has(button[aria-label="Поделиться"]), yt-button-view-model:has(button[aria-label="Создать клип"]), yt-button-view-model:has(button[aria-label="Спасибо"]), yt-button-view-model:has(button[aria-label="Показать текст видео"]), ' +
			'yt-button-view-model:has(button[aria-label="Поділитися"]), yt-button-view-model:has(button[aria-label="Створити кліп"]), yt-button-view-model:has(button[aria-label="Дякую"]), yt-button-view-model:has(button[aria-label="Показати текстову версію"]), ' +
			'yt-button-view-model:has(button[aria-label="Share"]), yt-button-view-model:has(button[aria-label="Clip"]), yt-button-view-model:has(button[aria-label="Thank You"]), yt-button-view-model:has(button[aria-label="Show text version"])' +
			'{display: none}', 'rt-hideTrashStyle')
		waitSelector('.ytp-menuitem').then(() => {
			if (RTcolors) {
				Array.from(document.querySelector('.ytp-popup.ytp-settings-menu .ytp-panel-menu').children).forEach(x => (x.innerHTML.includes('Профессиональное освещение') || x.innerHTML.includes('Кінематографічне освітлення')) && x.getAttribute('aria-checked') == "true" && x.click())
				Array.from(document.querySelector('.ytp-popup.ytp-settings-menu .ytp-panel-menu').children).forEach(x => (x.innerHTML.includes('Профессиональное освещение') || x.innerHTML.includes('Кінематографічне освітлення')) && x.remove())
			}
			const settings = document.querySelector('.ytp-settings-button')
			settings.click()
			settings.click()
		})
	}
	function MarkWatchedVideos(mark) {
		if (!mark) {
			document.querySelector('#rt-watchedVideoStyle')?.remove()
			return
		}
		pushCSS(`yt-thumbnail-overlay-progress-bar-view-model, ytd-thumbnail-overlay-resume-playback-renderer {--background-color: ${RTColorWatchedBackground + '80'}}` +
			'ytd-thumbnail-overlay-resume-playback-renderer::after {content: " " !important;top: -280px !important;position: absolute !important;background-color: var(--background-color) !important;padding: 7px !important; width: 100%;height: 10000%; animation: 0.5s show ease;}' +
			`yt-thumbnail-overlay-progress-bar-view-model, ytd-thumbnail-overlay-resume-playback-renderer {--label-color: ${RTColorWatchedLabelBackground + '80'}}` +
			'ytd-thumbnail-overlay-resume-playback-renderer:before {content: "ПРОСМОТРЕНО"; background-color: var(--label-color); top: -112px;font-size: 12px;color: white;position: absolute;z-index: 1;left: 0; margin: 8px;opacity: 1;padding: 4px 5px; border-radius: 9px;font-weight: 500;line-height: 1.2rem; backdrop-filter: blur(4px); animation: 0.5s show ease;}' +
			'ytd-thumbnail-overlay-time-status-renderer {z-index: 1}' +
			'#overlays > ytd-thumbnail-overlay-playback-status-renderer {display: none !important;}' +
			'ytd-expanded-shelf-contents-renderer ytd-thumbnail-overlay-resume-playback-renderer:after, ytd-video-renderer  ytd-thumbnail-overlay-resume-playback-renderer:after {top: -134px !important;width: 232px;height: 120px;}' +
			'#related ytd-thumbnail-overlay-resume-playback-renderer:after {top: -90px !important;width: 154px; height: 76px;}' +
			'#related ytd-thumbnail-overlay-resume-playback-renderer:before {top: -90px;font-size: 11px; padding: 3px 4px;}' +
			'.style-scope.ytd-grid-video-renderer:hover ytd-thumbnail-overlay-resume-playback-renderer:before, .style-scope.ytd-grid-video-renderer:hover ytd-thumbnail-overlay-resume-playback-renderer:after, div#dismissible.style-scope.ytd-video-renderer:hover ytd-thumbnail-overlay-resume-playback-renderer:after, div#dismissible.style-scope.ytd-video-renderer:hover ytd-thumbnail-overlay-resume-playback-renderer:before, div#dismissible.style-scope.ytd-compact-video-renderer:hover ytd-thumbnail-overlay-resume-playback-renderer:after, div#dismissible.style-scope.ytd-compact-video-renderer:hover ytd-thumbnail-overlay-resume-playback-renderer:before {display: none;}' +
			'.ytrp_rb_bg_bottom {bottom: unset !important; top: 0 !important;}' +
			'html .resume-playback-background, html  .resume-playback-progress-bar, html ytd-thumbnail-overlay-resume-playback-renderer {top: unset !important; bottom: 0 !important;}' +
			'.ytd-playlist-panel-video-renderer ytd-thumbnail-overlay-resume-playback-renderer::after {width: 92px; height: 48px; top: -52px !important; padding: 4px !important;}' +
			'.ytd-playlist-video-renderer ytd-thumbnail-overlay-resume-playback-renderer::after {top: -52px; padding: 4px}' +
			'.ytd-playlist-panel-video-renderer ytd-thumbnail-overlay-resume-playback-renderer::before {top: -52px; font-size: 9px; line-height: 1rem; margin: 4px; padding: 4px;}' +
			'.ytd-playlist-video-renderer ytd-thumbnail-overlay-resume-playback-renderer::before {top: -83px; font-size: 9px; line-height: 1rem; margin: 4px; padding: 4px;}' +
			'.ytd-playlist-panel-video-renderer:hover .ytd-playlist-panel-video-renderer ytd-thumbnail-overlay-resume-playback-renderer::before, .ytd-playlist-panel-video-renderer:hover .ytd-playlist-panel-video-renderer ytd-thumbnail-overlay-resume-playback-renderer::after {display: none;}' +
			'.ytd-playlist-video-renderer:hover .ytd-playlist-video-renderer ytd-thumbnail-overlay-resume-playback-renderer::before, .ytd-playlist-video-renderer:hover .ytd-playlist-video-renderer ytd-thumbnail-overlay-resume-playback-renderer::after {display: none;}' +
			`yt-thumbnail-view-model ytd-thumbnail-overlay-resume-playback-renderer, .ytd-search ytd-video-renderer ytd-thumbnail-overlay-resume-playback-renderer {--label-color: ${RTColorWatchedLabelBackground + '80'}}` +
			`yt-thumbnail-overlay-progress-bar-view-model::before, yt-thumbnail-view-model ytd-thumbnail-overlay-resume-playback-renderer::before, .ytd-search ytd-video-renderer ytd-thumbnail-overlay-resume-playback-renderer::before {content: "ПРОСМОТРЕНО"; top: -95px; background-color: var(--label-color); font-size: 14px; color: white; position: absolute; z-index: 1;left: 2px; opacity: 1; font-weight: 500; line-height: 1.5rem; margin: -65px 10px; padding: 4px 5px; border-radius: 9px; backdrop-filter: blur(4px); animation: 0.5s show ease;}` +
			`yt-thumbnail-view-model ytd-thumbnail-overlay-resume-playback-renderer, .ytd-search ytd-thumbnail-overlay-resume-playback-renderer {--background-color: ${RTColorWatchedBackground + '80'}}` +
			'yt-thumbnail-view-model ytd-thumbnail-overlay-resume-playback-renderer::after, .ytd-search ytd-thumbnail-overlay-resume-playback-renderer::after, yt-thumbnail-overlay-progress-bar-view-model::after {width: 100%;height: 30vh; content: " " !important;top: -28vh !important;position: absolute !important;background-color: var(--background-color) !important;padding: 7px !important; animation: 0.5s show ease;}' +
			'yt-thumbnail-view-model:hover ytd-thumbnail-overlay-resume-playback-renderer::before, yt-thumbnail-view-model:hover ytd-thumbnail-overlay-resume-playback-renderer::after, yt-thumbnail-view-model:hover yt-thumbnail-overlay-progress-bar-view-model::after, yt-thumbnail-view-model:hover yt-thumbnail-overlay-progress-bar-view-model::before {display: none;}' +
			'@keyframes show { from { opacity: 0; } to { opacity: 1; } }'
			, 'rt-watchedVideoStyle')
	}
	function ImproveFont(improve) {
		if (!improve) {
			document.querySelector('#rt-betterFontStyle')?.remove()
			return
		}
		pushCSS('@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"); @font-face {font-family: "Ubuntu Light Custom"; src: url("https://raw.githubusercontent.com/Mhack-7/YouTubi/main/Ubuntu%20Light.woff2") format("woff2")}' +
			'yt-formatted-string.style-scope.ytd-rich-grid-media, span.style-scope.ytd-video-meta-block {font-family: Ubuntu !important; font-weight: 400 !important; font-style: normal !important;}' +
			'span.style-scope.ytd-compact-radio-renderer {font-family: Ubuntu !important; font-weight: 700 !important; font-style: normal !important;}' +
			'ytd-rich-grid-renderer.style-scope.ytd-two-column-browse-results-renderer, ytd-guide-section-renderer.style-scope.ytd-guide-renderer, .button.ytd-text-inline-expander, ' +
			'#title.ytd-structured-description-video-lockup-renderer, #subtitle.ytd-structured-description-video-lockup-renderer, h4.ytd-macro-markers-list-item-renderer, ' +
			'.metadata.ytd-notification-renderer, .metadata-stats.ytd-playlist-byline-renderer, .badge.ytd-badge-supported-renderer, #content-text.ytd-comment-view-model, ' +
			'.yt-content-metadata-view-model-wiz--medium-text .yt-content-metadata-view-model-wiz__metadata-text, .truncated-text-wiz--medium-text, .yt-attribution-view-model-wiz--medium-text .yt-attribution-view-model-wiz__attribution-text, ' +
			'#published-time-text.ytd-comment-view-model, #text.ytd-alert-with-button-renderer, #home-content-text.ytd-post-renderer, .badge-shape-wiz, ' +
			'tp-yt-paper-button, #index.ytd-playlist-video-renderer, .yt-lockup-metadata-view-model-wiz--compact .yt-lockup-metadata-view-model-wiz__title, ' +
			'.yt-content-metadata-view-model-wiz__metadata-text, .yt-list-item-view-model-wiz__container--compact .yt-list-item-view-model-wiz__title-wrapper, ' +
			'#channel-handle.ytd-active-account-header-renderer, ytd-active-account-header-renderer[enable-handles-account-menu-switcher] #account-name.ytd-active-account-header-renderer, ' +
			'.yt-video-attribute-view-model__subtitle, .yt-video-attribute-view-model__secondary-subtitle, .title.reel-player-header-renderer, .ytStorybookReelMultiFromatLinkViewModelLink, ' +
			'ytd-video-meta-block:not([rich-meta]) #byline-container.ytd-video-meta-block, ytd-post-renderer[uses-compact-lockup] #author-text.yt-simple-endpoint.ytd-post-renderer, .YtSearchboxComponentInput, .ytSearchboxComponentInput, ' +
			'#inner-background.ytd-thumbnail-overlay-endorsement-renderer, .yt-content-metadata-view-model__metadata-text {font-family: Ubuntu !important;}' +
			'div.style-scope.ytd-rich-grid-row, .yt-lockup-metadata-view-model-wiz--compact .yt-lockup-metadata-view-model-wiz__title {font-weight: 400 !important;}' +
			'span.style-scope.ytd-comment-renderer, #label.ytd-toggle-theme-compact-link-renderer {font-family: Ubuntu !important; font-weight: 500 !important;}' +
			'yt-formatted-string.style-scope.ytd-toggle-button-renderer.style-default-active {font-family: Ubuntu !important; font-weight: 700 !important;}' +
			'a.yt-simple-endpoint.style-scope.yt-formatted-string, tp-yt-paper-item.style-scope.ytd-guide-entry-renderer, iron-selector.style-scope.ytd-feed-filter-chip-bar-renderer, ' +
			'yt-formatted-string.title.style-scope.ytd-guide-entry-renderer, span.style-scope.ytd-rich-grid-slim-media, yt-formatted-string.style-scope.ytd-video-primary-info-renderer, div.style-scope.ytd-video-primary-info-renderer, ' +
			'div.top-level-buttons.style-scope.ytd-menu-renderer, div.style-scope.ytd-expander, a.yt-simple-endpoint.style-scope.ytd-rich-metadata-renderer, div.style-scope.ytd-rich-metadata-renderer, ' +
			'yt-formatted-string.less-button.style-scope.ytd-video-secondary-info-renderer, span.style-scope.yt-formatted-string, div.style-scope.yt-dropdown-menu, yt-formatted-string.style-scope.ytd-subscribe-button-renderer, ' +
			'yt-formatted-string.style-scope.ytd-button-renderer.style-suggestive.size-default, span.style-scope.ytd-compact-video-renderer, yt-formatted-string.style-scope.ytd-channel-name, ' +
			'yt-formatted-string.style-scope.ytd-button-renderer.style-default.size-default, yt-formatted-string.style-scope.ytd-toggle-button-renderer.style-text, yt-formatted-string.style-scope.yt-chip-cloud-chip-renderer, ' +
			'span.style-scope.ytd-compact-playlist-renderer, yt-formatted-string.message.style-scope.ytd-notification-renderer, yt-formatted-string.style-scope.ytd-simple-menu-header-renderer, ' +
			'yt-formatted-string.style-scope.ytd-compact-link-renderer, yt-formatted-string.style-scope.ytd-c4-tabbed-header-renderer, yt-formatted-string.title.style-scope.ytd-recognition-shelf-renderer, ' +
			'yt-formatted-string.subtitle.style-scope.ytd-recognition-shelf-renderer, span.style-scope.ytd-shelf-renderer, yt-formatted-string.style-scope.ytd-button-renderer.style-text.size-default, ' +
			'a.yt-simple-endpoint.style-scope.ytd-grid-video-renderer, yt-formatted-string.can-be-empty.style-scope.ytd-shelf-renderer, span.style-scope.ytd-grid-video-renderer, span.style-scope.ytd-badge-supported-renderer' +
			'yt-formatted-string.style-scope.ytd-channel-renderer, span.style-scope.ytd-channel-renderer, div.tab-content.style-scope.tp-yt-paper-tab, yt-formatted-string.style-scope.ytd-channel-about-metadata-renderer, ' +
			'yt-formatted-string.subheadline.style-scope.ytd-channel-about-metadata-renderer, div.style-scope.ytd-c4-tabbed-header-renderer, div.banner-visible-area.style-scope.ytd-c4-tabbed-header-renderer, ' +
			'ytd-browse.style-scope.ytd-page-manager, #search-input input, span.style-scope.ytd-rich-shelf-renderer, div span b, div div b, div.sbsb_a, span.sbpqs_a, li.sbsb_c.gsfs, ' +
			'yt-formatted-string.style-scope.ytd-reel-player-header-renderer, yt-formatted-string.style-scope.ytd-button-renderer, yt-formatted-string.style-scope.ytd-comment-renderer, div.style-scope.yt-formatted-string, ' +
			'div.style-scope.ytd-watch-flexy, yt-formatted-string.more-button.style-scope.ytd-video-secondary-info-renderer, yt-formatted-string.style-scope.ytd-sponsorships-tier-renderer, ' +
			'yt-formatted-string.style-scope.ytd-sponsorships-offer-renderer, div.scrollable.style-scope.tp-yt-paper-dialog-scrollable, yt-formatted-string.style-scope.ytd-sponsorships-perk-renderer, ' +
			'div.header.style-scope.ytd-playlist-panel-renderer, yt-formatted-string.title.style-scope.ytd-playlist-panel-renderer, yt-formatted-string.publisher.style-scope.ytd-playlist-panel-renderer, ' +
			'span.style-scope.ytd-playlist-panel-video-renderer, button.style-scope.yt-icon-button, yt-formatted-string.style-scope.ytd-button-renderer.style-primary.size-default, span.view-count.style-scope.ytd-video-view-count-renderer, ' +
			'yt-formatted-string.style-scope.ytd-video-owner-renderer, button.ytp-button.ytp-settings-button.ytp-hd-quality-badge, div.ytp-bezel-text-wrapper, span.ytp-time-duration, span.ytp-time-current, span.ytp-time-remaining-duration, ' +
			'div.ytp-left-controls, span.ytp-time-separator, a.yt-simple-endpoint.style-scope.ytd-playlist-video-renderer, div.ytp-chapter-title-content, span.ytp-time-display.notranslate, a.yt-simple-endpoint.style-scope.ytd-video-renderer, ' +
			'yt-formatted-string.style-scope.ytd-video-renderer, a.yt-simple-endpoint.style-scope.ytd-grid-playlist-renderer, span.ytp-caption-segment, a.ytp-title-link.yt-uix-sessionlink.ytp-title-fullerscreen-link, div.ytp-menuitem-label, ' +
			'#simplebox-placeholder.ytd-comment-simplebox-renderer, #label.ytd-playlist-add-to-option-renderer, .ytd-menu-title-renderer, #rt-videoCount, #content.ytd-channel-tagline-renderer, #first-link.ytd-channel-header-links-view-model, ' +
			'#more.ytd-channel-header-links-view-model, .yt-spec-button-shape-next--call-to-action-inverse.yt-spec-button-shape-next--text, .yt-attribution-view-model-wiz--medium-text .yt-attribution-view-model-wiz__suffix, ' +
			'.YtSuggestionComponentBold, .yt-lockup-metadata-view-model-wiz--standard .yt-lockup-metadata-view-model-wiz__title, .yt-lockup-metadata-view-model__title, .yt-lockup-metadata-view-model__title' +
			'{font-family: "Ubuntu" !important; font-weight: 400 !important;}' +
			'.tp-yt-paper-tooltip[style-target=tooltip] {font-size: 1.35rem !important}' +
			'.ytp-tooltip {font-size: 125% !important}' +
			'.yt-spec-button-shape-next, yt-formatted-string.ytd-menu-service-item-renderer, ytd-text-inline-expander, ytd-rich-list-header-renderer[is-modern-sd] #title.ytd-rich-list-header-renderer, ' +
			'#time.ytd-macro-markers-list-item-renderer, #title.ytd-video-description-infocards-section-renderer, #subtitle.ytd-video-description-infocards-section-renderer, ' +
			'#guide-section-title.ytd-guide-section-renderer, .title.ytd-mini-guide-entry-renderer, .ytp-tooltip, .tp-yt-paper-tooltip[style-target=tooltip], ' +
			'#message.yt-live-chat-viewer-engagement-message-renderer, html, .animated-rolling-number-wiz, #video-title.ytd-reel-item-renderer, .html5-video-player, tp-yt-paper-toast.yt-notification-action-renderer, ' +
			'.truncated-text-wiz--medium-text .truncated-text-wiz__absolute-button, yt-formatted-string.ytd-menu-service-item-download-renderer, ' +
			'.more-button.ytd-comment-view-model, .less-button.ytd-comment-view-model, .YtChipShapeChip, ytd-thumbnail-overlay-bottom-panel-renderer, ' +
			'ytd-thumbnail-overlay-toggle-button-renderer[use-expandable-tooltip] #label.ytd-thumbnail-overlay-toggle-button-renderer, .ShortsLockupViewModelHostOutsideMetadataTitle,' +
			'ytd-thumbnail-overlay-hover-text-renderer, .ytChipShapeChip, .shortsLockupViewModelHostOutsideMetadataTitle, .shortsLockupViewModelHostMetadataSubhead,' +
			'.ytChipShapeText, .yt-tab-shape-wiz__tab, .animatedRollingNumberHost, .yt-list-item-view-model__title, .yt-badge-shape, .yt-tab-shape__tab {font-family: "Ubuntu Light Custom" !important}' +
			'ytd-watch-metadata[title-headline-xs] h1.ytd-watch-metadata {font-family: "YouTube Sans"; font-weight: 600}'
			, 'rt-betterFontStyle')
	}
	function DateTimeCreated(showDate, style2) {
		if (currentPage() != 'watch') return;
		['.video-date', '#dateVideoStyle', '#dateVideoStyle2'].forEach(selector => document.querySelector(selector)?.remove());
		if (!showDate) return
		GetVideoDate().then(dateCreated => {
			waitSelector('#title > h1', { stop_on_page_change: true }).then(el => {
				document.querySelector('.video-date')?.remove()
				const label = document.createElement('span')
				label.classList.add('video-date')
				label.textContent = dateCreated
				if (!document.querySelector('#dateVideoStyle')) {
					pushCSS('.video-date {border-radius: 18px; padding-inline: 7px; white-space: nowrap; margin-top: 2px; height: 23px; margin-left: 5px; font-size: 95%; display: inline-flex; align-items: center; background-color: var(--yt-spec-button-chip-background-hover); animation: 1s show ease} @keyframes show { from { opacity: 0; } to { opacity: 1; } }', 'dateVideoStyle')
					if (style2) {
						pushCSS('.video-date {background-color: var(--yt-spec-base-background); filter: drop-shadow(0 0 1px rgb(201 208 211))}', 'dateVideoStyle2')
					}
				}
				el.appendChild(label)
			})
		})
		async function GetVideoDate() {
			if (noValidApiKeys) return TryParseVideoDateFromPage();
			const videoId = getVideoId();
			const cacheKey = 'videoDates';
			const cachedDates = JSON.parse(localStorage.getItem(cacheKey)) || {};
			if (cachedDates[videoId]) return Promise.resolve(cachedDates[videoId]);
			const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${await ApiKey()}`;
			return fetch(apiUrl).then(response => response.json()).then(json => {
				if (!json.items || !json.items[0]) return TryParseVideoDateFromPage();
				const dateCreated = new Date(json.items[0].snippet.publishedAt).toLocaleString('ru-RU', {
					day: 'numeric', month: 'numeric', year: 'numeric',
					hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false,
				}).replace(',', '')
				cachedDates[videoId] = dateCreated;
				localStorage.setItem(cacheKey, JSON.stringify(cachedDates));
				return dateCreated;
			}).catch(() => {
				CleanApiKeys();
				return TryParseVideoDateFromPage();
			})
		}
		// Резервний варіант: парсинг з розмітки сторінки
		function TryParseVideoDateFromPage() {
			try {
				const dateEl = document.querySelector('ytd-video-primary-info-renderer #info-strings yt-formatted-string')
					|| document.querySelector('#info-strings yt-formatted-string')
					|| document.querySelector('ytd-watch-metadata #info-strings yt-formatted-string');
				if (dateEl && dateEl.textContent.trim()) return dateEl.textContent.trim();
				// Пробуємо знайти дату у ytInitialData
				const scripts = document.querySelectorAll('script');
				for (const s of scripts) {
					if (s.textContent.includes('dateText')) {
						const match = s.textContent.match(/"dateText":\{"simpleText":"([^"]+)"/);
						if (match) return match[1];
					}
				}
			} catch { }
			return 'Дата неизвестна';
		}
	}
	function ShowVideoCountOnChannel() {
		if (currentPage() != 'watch') return;
		document.querySelector('#rt-videoCount')?.remove()
		GetVideosCount().then(count => {
			waitSelector('#upload-info #owner-sub-count, ytm-slim-owner-renderer .subhead', { stop_on_page_change: true }).then(el => {
				document.querySelector('#rt-videoCount')?.remove()
				el.insertAdjacentHTML('beforeend',
					`<span class="date style-scope ytd-video-secondary-info-renderer" style="margin-right:5px;" id="rt-videoCount"> • <span>${count}</span> видео</span>`);
			})
		})
		async function GetVideosCount() {
			await new Promise(resolve => setTimeout(resolve, 500))
			if (noValidApiKeys) return '?';
			const channelId = await getChannelId();
			// Кешуємо назву каналу і кількість відео
			const cacheKey = 'videoCounts';
			const cachedCounts = JSON.parse(localStorage.getItem(cacheKey)) || {};
			if (cachedCounts[channelId]) return Promise.resolve(cachedCounts[channelId]);
			const apiUrl = `https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=${channelId}&key=${await ApiKey()}`;
			return fetch(apiUrl).then(response => response.json()).then(json => {
				if (!json.items || !json.items[0]) return '?';
				const videoCount = json.items[0].statistics.videoCount;
				// Кешуємо аватар і назву каналу
				const channelData = {
					videoCount,
					title: json.items[0].snippet.title,
					avatar: json.items[0].snippet.thumbnails?.default?.url || ''
				};
				cachedCounts[channelId] = videoCount;
				localStorage.setItem(cacheKey, JSON.stringify(cachedCounts));
				// Кеш аватарів
				const avatarCache = JSON.parse(localStorage.getItem('rt-channel-avatars')) || {};
				avatarCache[channelId] = channelData;
				localStorage.setItem('rt-channel-avatars', JSON.stringify(avatarCache));
				return videoCount;
			}).catch(() => {
				CleanApiKeys();
				return '?';
			})
		}
	}
	function FocusAndScrollFix(fix) {
		const playerSelector = 'video.video-stream.html5-main-video'
		if (!fix) {
			document.querySelector(playerSelector).removeEventListener('mouseenter', playerHoverHandler)
			return
		}
		playerHoverHandler = PlayerHover
		waitSelector(playerSelector).then(player => player.addEventListener('mouseenter', playerHoverHandler))
		async function PlayerHover(evt) {
			if (currentPage() != 'watch' || isScrolling || document.querySelector('.ytSearchboxComponentInputBoxHasFocus') || (evt.relatedTarget instanceof Element && evt.relatedTarget.matches('.ytp-caption-segment'))) return;
			isScrolling = true
			wheel = false
			function WheelFix(e) {
				if (e.deltaY > 0) {
					wheel = true
					document.removeEventListener('wheel', WheelFix)
				}
			}
			document.addEventListener('wheel', WheelFix)
			const easingFn = t => 1 - (1 - t) * (1 - t)
			const scrollToTop = async () => {
				const scrollTop = document.documentElement.scrollTop
				if (scrollTop > 0 && !wheel) {
					const progress = scrollTop / 1000;
					const easingValue = easingFn(progress)
					const scrollDistance = easingValue * 25;
					window.scrollTo(0, scrollTop - scrollDistance)
					window.requestAnimationFrame(scrollToTop)
				}
			}
			scrollToTop()
			isScrolling = false
			while (document.documentElement.scrollTop != 0) {
				await Delay(25)
			}
			document.querySelector(playerSelector).focus()
			document.removeEventListener('wheel', WheelFix)
		}
	}
	function RemoveNotificationNumber() {
		try {
			new MutationObserver(mutations => {
				mutations.forEach(mutation => {
					if (mutation.type === 'childList' || mutation.type === 'characterData') {
						if (document.title.match(/^\(\d+\)\s*/)) {
							document.title = document.title.replace(/^\(\d+\)\s*/, "");
						}
					}
				});
			}).observe(document.querySelector('head > title') || document.head, { childList: true, subtree: true, characterData: true });
		} catch (e) {
			console.error(e);
		}
	}
	function CustomIcon(custom, color) {
		document.querySelector('#rt-titleIcon')?.remove()
		const link = document.createElement('link')
		link.rel = 'icon'
		let customIconColor = color == 'blue' ? 'https://github.com/Mhack-7/YouTubi/raw/main/yt-favicon2.ico' : 'https://github.com/Mhack-7/YouTubi/raw/main/Gray6.ico'
		link.href = custom ? customIconColor : 'https://www.youtube.com/s/desktop/79c80fdc/img/favicon.ico'
		if (custom) link.id = 'rt-titleIcon'
		document.querySelector('head').appendChild(link)
	}
	function ReturnDislikes() {
		const CACHE_PREFIX = 'YouTubi-dislikes-count:', SELECTOR_ID = 'YouTubi-dislikes-count';
		runOnPageInitOrTransition(async () => {
			if (currentPage() !== 'watch') return;
			await Delay(1000);
			waitSelector('#actions dislike-button-view-model button', { stop_on_page_change: true }).then(setDislikeCount);
		});
		async function setDislikeCount(container) {
			const videoId = getVideoId();
			if (!videoId) return console.error('return-dislike videoId: empty', videoId);
			container.style.width = 'auto';
			let dislikeData = sessionStorage.getItem(CACHE_PREFIX + videoId);
			if (dislikeData) {
				dislikeData = JSON.parse(dislikeData);
			} else {
				dislikeData = await getDislikeCount(videoId);
				if (dislikeData) {
					sessionStorage.setItem(CACHE_PREFIX + videoId, JSON.stringify(dislikeData));
				}
			}
			if (dislikeData) {
				insertToHTML(dislikeData, container);
			}
			document.querySelectorAll('#actions dislike-button-view-model button, #actions like-button-view-model button')
				.forEach(button => {
					button.addEventListener('focusout', async () => {
						await Delay(500);
						insertToHTML({ dislikes: dislikeData.dislikes }, container);
					});
				});
		}
		async function getDislikeCount(videoId) {
			try {
				const response = await fetch(`https://returnyoutubedislikeapi.com/votes?videoId=${videoId}`);
				const json = await response.json();
				return json.dislikes ? { likes: json.likes, dislikes: json.dislikes } : null;
			} catch (error) {
				console.error('Error fetching dislike count:', error);
				return null;
			}
		}
		function insertToHTML(data, container) {
			if (!(container instanceof HTMLElement)) return console.error('container not HTMLElement:', container);
			const dislikeCount = container.getAttribute("aria-pressed") === 'true' ? data.dislikes + 1 : data.dislikes;
			const dislikeText = FormatDislikeCount(dislikeCount);
			let countElement = document.getElementById(SELECTOR_ID);
			if (!countElement) {
				container.insertAdjacentHTML('beforeend', `<span id="${SELECTOR_ID}" style="text-overflow:ellipsis; overflow:visible; white-space:nowrap; padding-left:3px;">${dislikeText}</span>`);
				countElement = document.getElementById(SELECTOR_ID);
			}
			countElement.textContent = dislikeText;
			container.title = dislikeText;
			container.querySelector('.yt-spec-button-shape-next__icon').style.marginRight = '3px';
		}
		function FormatDislikeCount(count) {
			return Intl.NumberFormat(userLanguage, {
				notation: "compact",
				compactDisplay: "short",
			}).format(roundDown(count));
		}
	}
	function FullVideoNames(enable) {
		if (!enable) {
			document.querySelector('#rt-fullVideoNamesStyle')?.remove()
			return
		}
		pushCSS('#video-title.yt-simple-endpoint.ytd-grid-video-renderer, ' +
			'#video-title.ytd-compact-video-renderer, ' +
			'ytd-compact-video-renderer.use-ellipsis #video-title.ytd-compact-video-renderer {max-height: unset !important; -webkit-line-clamp: unset !important; word-wrap: break-word !important}' +
			'#video-title.ytd-video-renderer {max-height: unset !important; line-height: 2rem !important}' +
			'#metadata-line.ytd-grid-video-renderer {max-height: unset !important}' +
			'.ytp-videowall-still-info-title {max-height: unset !important}' +
			'.ytp-videowall-still-info-content {background-image: -moz-linear-gradient(top,rgba(12,12,12,0.8) 0,transparent 200px) !important; background-image: -ms-linear-gradient(top,rgba(12,12,12,0.8) 0,transparent 200px) !important; background-image: -o-linear-gradient(top,rgba(12,12,12,0.8) 0,transparent 200px) !important; background-image: -webkit-linear-gradient(top,rgba(12,12,12,0.8) 0,transparent 200px) !important; background-image: linear-gradient(to bottom,rgba(12,12,12,0.8) 0,transparent 200px) !important}' +
			'#video-title.ytd-playlist-panel-video-renderer {max-height: unset !important; -webkit-line-clamp: unset !important}' +
			'ytd-playlist-video-renderer #progress.ytd-thumbnail-overlay-resume-playback-renderer::before {top: -66px; font-size: 9px}' +
			'#video-title.ytd-rich-grid-video-renderer, .yt-lockup-metadata-view-model__title {max-height: unset !important; overflow: unset !important; -webkit-line-clamp: unset !important}' +
			'#video-title.ytd-rich-grid-media {-webkit-line-clamp: unset !important; max-height: unset !important}' +
			'h4.ytd-macro-markers-list-item-renderer {max-height: unset !important; -webkit-line-clamp: unset !important}'
			, 'rt-fullVideoNamesStyle')
	}
	function StopChannelTrailer() {
		runOnPageInitOrTransition(() => {
			waitSelector('#c4-player.playing-mode', { stop_on_page_change: true }).then(player => player.stopVideo())
		})
	}
	function RemainingTime() {
		const SELECTOR_ID = 'YouTubi-player-time-remaining'
		waitSelector('.ytp-time-duration, ytm-time-display .time-display-content').then(container => {
			waitSelector('video').then(video => {
				video.addEventListener('timeupdate', setRemaining.bind(video))
				video.addEventListener('ratechange', setRemaining.bind(video))
				video.addEventListener('ended', () => insertToHTML({ 'container': container }))
				document.addEventListener('yt-navigate-finish', () => insertToHTML({ 'container': container }))
			});
			function setRemaining() {
				if (isNaN(this.duration)
					|| movie_player.getVideoData().isLive
					|| (currentPage() == 'embed' && window.self.location.href.includes('live_stream'))
					|| document.visibilityState == 'hidden'
					|| movie_player.classList.contains('ytp-autohide')
				) return;
				const getProgressPt = () => {
					const floatRound = pt => (this.duration > 3600) ? pt.toFixed(2) : (this.duration > 1500) ? pt.toFixed(1) : Math.round(pt)
					return floatRound((this.currentTime / this.duration) * 100) + '%'
				}
				const getLeftTime = () => '-' + timeFormat((this.duration - this.currentTime) / this.playbackRate)
				let text = getLeftTime() + ` (${getProgressPt()})`
				if (text) {
					insertToHTML({ 'text': text, 'container': container })
				}
			}
			function insertToHTML({ text = '', container }) {
				if (!(container instanceof HTMLElement)) return console.error('container not HTMLElement:', container);
				(document.getElementById(SELECTOR_ID) || (function () {
					container.insertAdjacentHTML('afterend', `&nbsp;<span id="${SELECTOR_ID}">${text}</span>`)
					return document.getElementById(SELECTOR_ID)
				})())
					.textContent = text
			}
		})
	}
	function RememberTime() {
		if (!navigator.cookieEnabled && currentPage() == 'embed') return;
		const getCacheName = () => `YouTubi-resume-playback-time:${getVideoId()}`
		let cacheName
		waitSelector('video').then(video => {
			cacheName = getCacheName()
			resumePlayback.apply(video)
			video.addEventListener('loadeddata', resumePlayback.bind(video))
			video.addEventListener('timeupdate', savePlayback.bind(video))
			video.addEventListener('ended', () => sessionStorage.removeItem(cacheName))
		})
		function savePlayback() {
			const moviePlayer = document.querySelector('#movie_player');
			if (!moviePlayer || moviePlayer.classList.contains('ad-showing') || this.duration < 30) return;
			this.currentTime > 15 ? sessionStorage.setItem(cacheName, ~~this.currentTime) : sessionStorage.removeItem(cacheName);
		}
		async function resumePlayback() {
			if (new URLSearchParams(location.search).has('t')) return;
			cacheName = getCacheName()
			if ((time = +sessionStorage.getItem(cacheName)) && (time < (this.duration - 1))) {
				this.currentTime = time;
			}
		}
	}
	function VideoQuality() {
		let selectedQuality = RTSelectVideoQuality
		const qualityFormatListWidth = {
			highres: 4320, hd2880: 2880, hd2160: 2160, hd1440: 1440,
			hd1080: 1080, hd720: 720, large: 480, medium: 360, small: 240, tiny: 144,
		}
		waitSelector('#movie_player').then(movie_player => {
			if (currentPage() == 'watch') {
				movie_player.addEventListener('onPlaybackQualityChange', quality => {
					if (document.activeElement.getAttribute('role') == 'menuitemradio' && quality !== selectedQuality) {
						selectedQuality = quality
					}
				})
			}
			setQuality()
			movie_player.addEventListener('onStateChange', setQuality)
		})
		async function setQuality(state) {
			if (!selectedQuality) return;
			if ((1 == state || 3 == state) && !setQuality.quality_lock) {
				setQuality.quality_lock = true;
				let availableQualityLevels;
				await waitUntil(() => (availableQualityLevels = movie_player.getAvailableQualityLevels()) && availableQualityLevels.length, 50);
				const maxQualityIdx = availableQualityLevels.findIndex(i => qualityFormatListWidth[i]);
				availableQualityLevels = availableQualityLevels.slice(maxQualityIdx);
				const availableQualityIdx = function () {
					let i = availableQualityLevels.indexOf(selectedQuality);
					if (i === -1) {
						const availableQuality = Object.keys(qualityFormatListWidth).filter(v => availableQualityLevels.includes(v) || (v == selectedQuality)),
							nearestQualityIdx = availableQuality.findIndex(q => q === selectedQuality) - 1
						i = availableQualityLevels[nearestQualityIdx] ? nearestQualityIdx : 0
					}
					return i
				}();
				const newQuality = availableQualityLevels[availableQualityIdx]
				if (typeof movie_player.setPlaybackQuality === 'function') movie_player.setPlaybackQuality(newQuality)
				if (typeof movie_player.setPlaybackQualityRange === 'function') movie_player.setPlaybackQualityRange(newQuality, newQuality)
			}
			else if (state <= 0) {
				setQuality.quality_lock = false
			}
		}
	}
	function FixChannelLinks() {
		document.addEventListener('click', evt => patchLink(evt), { capture: true });
		document.addEventListener('auxclick', evt => evt.button === 1 && patchLink(evt), { capture: true });
		function patchLink(evt) {
			if (evt.isTrusted && currentPage() == "watch" && evt.target.closest('#channel-name') && (link = evt.target.closest('a'))) {
				if ((data = evt.target.closest('ytd-compact-video-renderer, ytd-video-meta-block')?.data) && (res = SearchInObjectByKey({
					'obj': data,
					'keys': 'navigationEndpoint',
					'match_fn': val => { return val?.commandMetadata?.webCommandMetadata?.webPageType == 'WEB_PAGE_TYPE_CHANNEL'; },
				})?.data)) {
					const urlOrigData = link.data, urlOrig = link.href;
					link.data = res;
					link.href = link.data.commandMetadata.webCommandMetadata.url += '/videos';
					evt.target.addEventListener('mouseout', () => {
						link.data = urlOrigData;
						link.href = urlOrig;
					}, { capture: true, once: true });
				}
			}
		}
	}
	function ShowTranslationTime() {
		waitSelector('#movie_player video').then(video => {
			video.addEventListener('canplay', function () {
				if (movie_player.getVideoData().isLive) {
					pushCSS('#movie_player .ytp-chrome-controls .ytp-time-display.ytp-live {display: flex !important}', 'rt-translationTimeStyle')
					pushCSS('#movie_player .ytp-chrome-controls .ytp-live .ytp-time-current {display: block !important; margin-right: 5px;}', 'rt-translationTimeStyle2')
				} else {
					document.querySelector('#rt-translationTimeStyle')?.remove()
					document.querySelector('#rt-translationTimeStyle2')?.remove()
				}
			})
		})
	}
	function DisableSleep() {
		setInterval(() => {
			if (!document.hasFocus()) {
				document.dispatchEvent(new KeyboardEvent('keyup', { keyCode: 143, which: 143, bubbles: true, cancelable: true }));
			}
		}, 1000 * 60 * 5);
	}
	function HotkeysAlwaysActive() {
		let cachedMode = "";
		document.addEventListener("keydown", function onEvent(e) {
			if (currentPage() != 'watch' || e.code !== "Space" || document.querySelector('.CodeMirror-focused')) return;
			let ae = document.activeElement;
			if (ae.tagName.toLowerCase() == "input" || ae.hasAttribute("contenteditable")) return;
			let player = document.querySelector(".html5-video-player");
			if (player.classList.contains("paused-mode")) cachedMode = "paused-mode";
			if (player.classList.contains("playing-mode")) cachedMode = "playing-mode";
			if (player.classList.contains("ended-mode")) cachedMode = "ended-mode";
			setTimeout(() => {
				let player = document.querySelector(".html5-video-player");
				if (player.classList.contains(cachedMode)) {
					movie_player.focus({ preventScroll: true })
					document.querySelector("button.ytp-play-button").click();
					cachedMode = "";
				}
			}, 200);
		});
		document.addEventListener('keyup', e => currentPage() == 'watch' && setFocus(e.target))
		document.addEventListener('click', e => currentPage() == 'watch' && e.isTrusted && setFocus(e.target))
		function setFocus(target) {
			try {
				if (['input', 'textarea', 'select'].includes(target.localName) || target.isContentEditable || (target.classList.length > 0 && target.classList[0]?.includes('CodeMirror'))) return;
				movie_player.focus({ preventScroll: true })
			} catch { }
		}
	}
	function ScrollVolume() {
		waitSelector('#movie_player video').then(() => {
			waitSelector('.html5-video-container').then(container => {
				container.addEventListener('wheel', evt => {
					if (!evt.shiftKey) return;
					const dir = (evt.deltaY > 0 ? -1 : 1) * 1
					const vol = Math.max(Math.min(Math.round(movie_player.getVolume()) + 1 * dir, 100), 0)
					vol > 0 && movie_player.isMuted() && movie_player.unMute()
					movie_player.setVolume(vol)
					let currentVideoVolume = movie_player.getVolume()
					showOSD(currentVideoVolume + '%');
					let obj = {
						"data": JSON.stringify({ "volume": currentVideoVolume, "muted": false }),
						"expiration": 17125032379999,
						"creation": Date.now()
					};
					localStorage.setItem("yt-player-volume", JSON.stringify(obj));
					sessionStorage.setItem("yt-player-volume", JSON.stringify(obj));
					evt.preventDefault();
					evt.stopImmediatePropagation();
				}, { capture: true });
			});
		})
	}
	function MiddleClickSearch() {
		const inputText = () => document.querySelector('.YtSearchboxComponentInput, .ytSearchboxComponentInput, input.ytd-searchbox').value.trim()
		const searchButton = '.YtSearchboxComponentSearchButton, .ytSearchboxComponentSearchButton, #search-icon-legacy'
		const searchSuggestion = '.sbsb_c.gsfs:not(.done), .YtSearchboxComponentSuggestionsContainer > .YtSuggestionComponentSuggestion:not(.done), .ytSearchboxComponentSuggestionsContainer > .ytSuggestionComponentSuggestion:not(.done)'
		const suggestionText = '.ytSuggestionComponentText'
		suggEl()
		waitSelector(searchButton).then(btn => {
			btn.addEventListener('mousedown', e => { if (e.button === 1) e.preventDefault() })
			btn.addEventListener('auxclick', e => {
				if (e.button !== 1) return;
				e.preventDefault(); e.stopImmediatePropagation()
				const queryValue = inputText()
				if (!queryValue) return;
				GM_openInTab(`${location.origin}/results?search_query=${encodeURIComponent(queryValue).replace(/%20/gu, '+')}`, true)
			})
		})
		function suggEl() {
			waitSelector(searchSuggestion, { stop_on_page_change: true }).then(el => {
				el.classList.add('done')
				el.addEventListener('mousedown', e => { if (e.button != 1) return; e.preventDefault(); e.stopImmediatePropagation() }, true)
				el.addEventListener('auxclick', e => {
					if (e.button != 1) return;
					e.preventDefault(); e.stopImmediatePropagation()
					const text = el.querySelector(suggestionText).attributes['aria-label'].value
					GM_openInTab(`${location.origin}/results?search_query=${encodeURIComponent(text).replace(/%20/gu, '+')}`, true)
				})
				suggEl()
			})
		}
	}
	function TranslateCommentButton() {
		const QS_TRANSLATE_BUTTON = "#header>#header-author>yt-formatted-string>#translate-button";
		const QS_CONTENT_TEXT = "#expander>#content>#content-text";
		const QS_BUTTON_CONTAINER = "#header>#header-author>#published-time-text";
		const TRANSLATE_TEXT = "Перевести", UNDO_TEXT = "Вернуть", TARGET = navigator.language || navigator.userLanguage;
		const replaceNode = (a, b) => a.replaceWith(b);
		const resetTranslateButton = (tb) => {
			if (tb._ntext.isConnected) replaceNode(tb._ntext, tb._otext);
			tb._ntext.innerText = "";
			tb.innerText = TRANSLATE_TEXT;
			tb.onclick = translateButtonTranslate;
		};
		const translateButtonSetState = function () {
			const isTranslated = this._ntext.isConnected;
			replaceNode(isTranslated ? this._ntext : this._otext, isTranslated ? this._otext : this._ntext);
			this.innerText = isTranslated ? TRANSLATE_TEXT : UNDO_TEXT;
		};
		const translateButtonTranslate = function () {
			this.onclick = translateButtonSetState;
			fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${TARGET}&dt=t&q=${encodeURIComponent(this._otext.innerText)}`)
				.then(response => response.json())
				.then(json => {
					this._ntext.innerText = json[0].map(item => item[0].replace('\n', ' ')).join(' ');
					this.onclick();
				});
		};
		const createTranslateButton = (main) => {
			const tb = document.createElement("a");
			tb.id = "translate-button";
			tb.style.marginLeft = "5px";
			tb.className = "yt-simple-endpoint style-scope yt-formatted-string";
			tb._otext = main.querySelector(QS_CONTENT_TEXT);
			tb._ntext = document.createElement("div");
			tb._ntext.style.whiteSpace = "pre-wrap";
			tb._ntext.style.fontSize = window.getComputedStyle(tb._otext).fontSize;
			tb._ntext.style.fontFamily = window.getComputedStyle(tb._otext).fontFamily;
			tb._ntext.style.lineHeight = "2rem";
			tb._ntext.style.color = "var(--yt-spec-text-primary)";
			tb._ntext.className = "style-scope ytd-comment-renderer translate-text yt-formatted-string";
			tb._otext.addEventListener("DOMSubtreeModified", () => resetTranslateButton(tb));
			resetTranslateButton(tb);
			return tb;
		};
		const injectTranslateButton = () => {
			const observer = new MutationObserver(mutations => {
				mutations.forEach(mutation => {
					if (mutation.target.id === "contents") {
						mutation.addedNodes.forEach(node => {
							const main = node.querySelector("#body>#main");
							if (main) {
								const existingButton = main.querySelector(QS_TRANSLATE_BUTTON);
								if (existingButton) {
									resetTranslateButton(existingButton);
								} else {
									main.querySelector(QS_BUTTON_CONTAINER).appendChild(createTranslateButton(main));
								}
							}
						});
					}
				});
			});
			observer.observe(document, { childList: true, subtree: true });
		};
		injectTranslateButton();
	}
	function ScrollSpeed() {
		waitSelector('.ytp-settings-button').then(container => {
			container.addEventListener('wheel', e => {
				try {
					e.preventDefault()
					const player = document.querySelector('.video-stream.html5-main-video')
					const currentSpeed = player.playbackRate
					const newSpeed = e.deltaY < 0 ? currentSpeed + 0.1 : currentSpeed - 0.1
					player.playbackRate = parseFloat(newSpeed.toFixed(2))
					showOSD(document.querySelector('.video-stream.html5-main-video').playbackRate + 'x')
				} catch { }
			})
			container.addEventListener('contextmenu', e => {
				try {
					e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation()
					document.querySelector('.video-stream.html5-main-video').playbackRate = 1
					showOSD(document.querySelector('.video-stream.html5-main-video').playbackRate + 'x')
				} catch { }
			})
		})
	}
	function ForceDefaultVideoVolume(enabled) {
		if (!enabled) { RTDefaultVolume = false; return; }
		waitSelector('#movie_player video').then(video => {
			video.addEventListener('loadeddata', () => {
				if (RTDefaultVolume) movie_player.setVolume(RTDefaultVolumeLevel);
			}, { capture: true });
		})
	}
	function RememberSpeed() {
		waitSelector('#movie_player video').then(video => {
			video.addEventListener('loadeddata', setPlaybackSpeedNow, { capture: true });
		});
	}
	function setPlaybackSpeedNow() {
		if (window.location.href.includes('/shorts/')) return;
		const ytPlayer = document.getElementById("movie_player") || document.getElementsByClassName("html5-video-player")[0];
		const targetSpeed = parseFloat(RTSelectRememberSpeedLevel);
		if (!ytPlayer || typeof ytPlayer.getAvailableQualityLabels !== 'function' || !ytPlayer.getAvailableQualityLabels()[0]) return;
		if (RTRememberSpeedBypass) {
			try {
				const video = ytPlayer.querySelector('video');
				if (video) video.playbackRate = targetSpeed;
			} catch (error) { console.error("[YouTubi] Error setting speed via bypass:", error); }
		} else {
			if (typeof ytPlayer.setPlaybackRate === 'function') ytPlayer.setPlaybackRate(targetSpeed);
		}
	}
	function FixesForNewYouTube(enabled) {
		if (!enabled) {
			document.querySelector('#rt-fixesForNewYouTube')?.remove()
			return
		}
		pushCSS(
			`ytd-app[fullscreen] { overflow: auto !important; }
			ytd-app[scrolling] { position: absolute !important; top: 0 !important; left: 0 !important; right: calc((var(--ytd-app-fullerscreen-scrollbar-width) + 1px)*-1) !important; bottom: 0 !important; overflow-x: auto !important; }
			ytd-watch-flexy[fullscreen] #single-column-container.ytd-watch-flexy, ytd-watch-flexy[fullscreen] #columns.ytd-watch-flexy { display: flex !important; }` +
			'#primary > .ytd-two-column-browse-results-renderer {--ytd-rich-grid-items-per-row: 4 !important}' +
			'ytd-rich-item-renderer[rendered-from-rich-grid][is-in-first-column] {margin-left: calc(var(--ytd-rich-grid-item-margin)/2) !important}' +
			'#contents.ytd-rich-grid-renderer {margin-left: 40px}'
			, 'rt-fixesForNewYouTube')
	}
	//#endregion
	//#region НОВІ ФУНКЦІЇ

	// --- Пропуск реклами ---
	function SkipAds() {
		pushCSS(
			'.ytp-ad-overlay-container,.ytp-ad-text-overlay,.ytp-ad-player-overlay-instream-info,' +
			'.ytp-ad-progress-list,.ytp-ad-simple-ad-badge,.ytp-ad-visit-advertiser-button,' +
			'.video-ads.ytp-ad-module,#masthead-ad,ytd-banner-promo-renderer,' +
			'ytd-statement-banner-renderer,ytd-ad-slot-renderer,#player-ads,' +
			'ytd-in-feed-ad-layout-renderer,ytd-display-ad-renderer{display:none!important}',
			'rt-skipAdsStyle'
		)
		setInterval(() => {
			const skip = document.querySelector(
				'.ytp-skip-ad-button,.ytp-ad-skip-button,button.ytp-ad-skip-button-modern,.ytp-ad-skip-button-slot button'
			)
			if (skip) { skip.click(); return }
			const player = document.querySelector('#movie_player')
			const video = document.querySelector('video.html5-main-video')
			if (video && player && player.classList.contains('ad-showing') && !isNaN(video.duration) && video.duration > 0) {
				video.currentTime = video.duration
				video.playbackRate = 16
			}
		}, 300)
	}

	// --- SponsorBlock ---
	function SponsorBlock() {
		let sbSegments = [], sbVideoId = null, sbInterval = null
		const load = async () => {
			if (currentPage() !== 'watch') return
			const vid = getVideoId()
			if (!vid || vid === sbVideoId) return
			sbVideoId = vid; sbSegments = []
			if (sbInterval) clearInterval(sbInterval)
			try {
				const cats = JSON.stringify(RTSponsorBlockCategories.split(',').map(s => s.trim()).filter(Boolean))
				const r = await fetch(`https://sponsor.ajay.app/api/skipSegments?videoID=${vid}&categories=${encodeURIComponent(cats)}`)
				if (r.ok) sbSegments = await r.json()
			} catch { }
			if (!sbSegments.length) return
			sbInterval = setInterval(() => {
				const v = document.querySelector('video.html5-main-video')
				if (!v || isNaN(v.currentTime)) return
				for (const seg of sbSegments) {
					const [s, e] = seg.segment
					if (v.currentTime >= s && v.currentTime < e - 0.3) {
						v.currentTime = e
						showOSD('SB: ' + seg.category)
						break
					}
				}
			}, 500)
		}
		load()
		document.addEventListener('yt-navigate-finish', load)
	}

	// --- Збереження позиції прокрутки ---

	// -----------------------------------------------------------------------
	// Кнопки в плеєр: .ytp-right-controls — підтверджено існує
	// Стиль — як рідні кнопки плеєра (.ytp-button)
	// -----------------------------------------------------------------------
	pushCSS(
		'.rt-player-btn{background:none;border:none;cursor:pointer;color:#fff;' +
		'width:48px;height:100%;padding:0;display:inline-flex;align-items:center;' +
		'justify-content:center;opacity:.9}' +
		'.rt-player-btn:hover{opacity:1}' +
		'.rt-player-btn svg{width:24px;height:24px;fill:#fff;pointer-events:none}' +
		'.rt-player-btn.rt-on svg{fill:#5bb8ff}',
		'rt-playerBtnStyle'
	)

	function injectPlayerBtn(id, text, title, onClick) {
		document.querySelector('#' + id)?.remove()
		const doInject = () => {
			if (document.querySelector('#' + id)) return true
			// settings-button є прямим дочірнім .ytp-right-controls-left
			const settings = document.querySelector('.ytp-right-controls-left .ytp-settings-button')
			if (!settings) return false
			const btn = document.createElement('button')
			btn.id = id
			btn.className = 'ytp-button rt-player-btn'
			btn.title = title
			btn.innerHTML = text
			btn.addEventListener('click', e => { e.stopPropagation(); onClick() })
			settings.parentNode.insertBefore(btn, settings)
			return true
		}
		if (doInject()) return
		const obs = new MutationObserver(() => { if (doInject()) obs.disconnect() })
		obs.observe(document.body || document.documentElement, { childList: true, subtree: true })
		setTimeout(() => obs.disconnect(), 15000)
	}

	// --- Скриншот кадру ---
	function ScreenshotFrame(enable) {
		document.querySelector('#rt-ssBtn')?.remove()
		if (_ssKeyFn) { document.removeEventListener('keydown', _ssKeyFn); _ssKeyFn = null }
		if (!enable) return
		function doShot() {
			const v = document.querySelector('video.html5-main-video'); if (!v) return
			const c = document.createElement('canvas')
			c.width = v.videoWidth; c.height = v.videoHeight
			c.getContext('2d').drawImage(v, 0, 0)
			const a = document.createElement('a')
			a.download = 'yt-' + Date.now() + '.png'; a.href = c.toDataURL(); a.click()
			showOSD('📷 Збережено')
		}
		_ssKeyFn = e => { if (e.ctrlKey && e.shiftKey && e.key === 'S') { e.preventDefault(); doShot() } }
		document.addEventListener('keydown', _ssKeyFn)
		const ssSvg = '<svg viewBox="0 0 24 24"><path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z"/><path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>'
		const inject = () => {
			if (currentPage() !== 'watch') return
			injectPlayerBtn('rt-ssBtn', ssSvg, 'Скриншот (Ctrl+Shift+S)', doShot)
		}
		inject()
		document.addEventListener('yt-navigate-finish', inject)
	}

	// --- Зациклення відео ---
	function LoopVideo(enable) {
		document.querySelector('#rt-loopBtn')?.remove()
		if (_loopKeyFn) { document.removeEventListener('keydown', _loopKeyFn); _loopKeyFn = null }
		const v = document.querySelector('video.html5-main-video')
		if (!enable) { if (v) v.loop = false; return }
		let on = false
		function toggle() {
			on = !on
			const vid = document.querySelector('video.html5-main-video'); if (vid) vid.loop = on
			const b = document.querySelector('#rt-loopBtn')
			if (b) b.classList.toggle('rt-on', on)
			showOSD(on ? '🔁 Повтор ВКЛ' : '🔁 Повтор ВЫКЛ')
		}
		_loopKeyFn = e => {
			if (currentPage() !== 'watch') return
			const ae = document.activeElement
			if (ae && (ae.tagName === 'INPUT' || ae.tagName === 'TEXTAREA' || ae.isContentEditable)) return
			if (e.key === 'l' || e.key === 'L') toggle()
		}
		document.addEventListener('keydown', _loopKeyFn)
		const loopSvg = '<svg viewBox="0 0 24 24"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/></svg>'
		const inject = () => {
			if (currentPage() !== 'watch') return
			on = false
			injectPlayerBtn('rt-loopBtn', loopSvg, 'Повтор (L)', toggle)
		}
		inject()
		document.addEventListener('yt-navigate-finish', inject)
	}

	// --- Кнопка копіювання посилання з часом (теж у плеєр) ---
	function CopyTimestampButton() {
		const tsSvg = '<svg viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>'
		const inject = () => {
			if (currentPage() !== 'watch') return
			injectPlayerBtn('rt-tsBtn', tsSvg, 'Скопіювати посилання з часом', () => {
				const v = document.querySelector('video.html5-main-video')
				const t = v ? Math.floor(v.currentTime) : 0
				const url = 'https://youtu.be/' + getVideoId() + '?t=' + t
				navigator.clipboard.writeText(url)
					.then(() => showOSD('🔗 Скопійовано!'))
					.catch(() => prompt('Посилання:', url))
			})
		}
		inject()
		document.addEventListener('yt-navigate-finish', inject)
	}

	// --- Прибирання "- YouTube" з вкладки ---

	// --- Тривалість відео у вкладці ---
	// video.duration = 2062 і readyState = 4 — підтверджено що відео доступне

	// --- Авторозкриття опису ---
	// expander.hasAttribute('is-expanded') = false, #collapse не видимий
	// — тобто опис ЗГОРНУТИЙ, треба клікнути #expand

	// --- Аватар каналу в бічній панелі ---
	function ChannelAvatarSidebar() {
		const getCache = () => JSON.parse(localStorage.getItem('rt-av-cache') || '{}')
		const setCache = o => localStorage.setItem('rt-av-cache', JSON.stringify(o))
		const run = async () => {
			if (currentPage() !== 'watch') return
			await Delay(800)
			document.querySelectorAll('ytd-compact-video-renderer:not([rt-av])').forEach(async item => {
				item.setAttribute('rt-av', '1')
				const d = item.data
				const cid = d?.shortBylineText?.runs?.[0]?.navigationEndpoint?.browseEndpoint?.browseId
					|| d?.longBylineText?.runs?.[0]?.navigationEndpoint?.browseEndpoint?.browseId
				if (!cid) return
				const cache = getCache(); let url = cache[cid]
				if (!url && !noValidApiKeys) {
					try {
						const key = await ApiKey()
						const r = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${cid}&key=${key}`)
						url = (await r.json()).items?.[0]?.snippet?.thumbnails?.default?.url
						if (url) { cache[cid] = url; setCache(cache) }
					} catch { }
				}
				if (!url) return
				const nameEl = item.querySelector('#channel-name yt-formatted-string')
				if (!nameEl || nameEl.querySelector('.rt-av-i')) return
				const img = document.createElement('img')
				img.className = 'rt-av-i'; img.src = url
				img.style.cssText = 'width:14px;height:14px;border-radius:50%;vertical-align:middle;margin-right:3px;object-fit:cover;display:inline-block'
				nameEl.prepend(img)
			})
		}
		run()
		document.addEventListener('yt-navigate-finish', run)
		new MutationObserver(debounce(run, 1000)).observe(document.body, { childList: true, subtree: true })
	}

	// --- Сортування коментарів ---
	// Підтверджено: кнопка = tp-yt-paper-button#label всередині yt-sort-filter-sub-menu-renderer
	// яка знаходиться в #sort-menu
	function DefaultCommentSort() {
		let lastVid = null
		const run = () => {
			if (currentPage() !== 'watch') return
			const vid = getVideoId()
			if (vid === lastVid) return
			lastVid = vid
			// Чекаємо кнопку сортування — вона з'являється тільки після прокрутки до коментарів
			waitSelector('#sort-menu tp-yt-paper-button#label', { stop_on_page_change: true }).then(async sortBtn => {
				await Delay(300)
				sortBtn.click()
				await Delay(1500)
				// Пункти меню — теги A всередині tp-yt-paper-listbox#menu (підтверджено)
				const listbox = document.querySelector('tp-yt-paper-listbox#menu')
				if (!listbox) { sortBtn.click(); return }
				const items = Array.from(listbox.querySelectorAll('a'))
				let clicked = false
				for (const item of items) {
					const t = (item.textContent || '').toLowerCase()
					if (RTCommentSortDefault === 'new' && (t.includes('нов') || t.includes('new') || t.includes('recent'))) {
						item.click(); clicked = true; break
					}
					if (RTCommentSortDefault === 'top' && (t.includes('популяр') || t.includes('top') || t.includes('лучш') || t.includes('best'))) {
						item.click(); clicked = true; break
					}
				}
				if (!clicked) sortBtn.click()
			})
		}
		run()
		document.addEventListener('yt-navigate-finish', () => { lastVid = null; setTimeout(run, 300) })
	}

	// --- Згортання відповідей ---
	function CollapseReplies() {
		const run = debounce(() => {
			document.querySelectorAll('ytd-comment-replies-renderer:not([rt-cl])').forEach(el => {
				el.setAttribute('rt-cl', '1')
				const less = el.querySelector('#less-replies tp-yt-paper-button')
				if (less && less.offsetParent !== null) less.click()
			})
		}, 600)
		new MutationObserver(run).observe(document.body, { childList: true, subtree: true })
		document.addEventListener('yt-navigate-finish', () => {
			document.querySelectorAll('[rt-cl]').forEach(el => el.removeAttribute('rt-cl'))
		})
	}

	// --- Підсвічування коментарів автора ---
	// Підтверджено: #author-comment-badge існує у ВСІХ коментарів але порожній.
	// Тільки у автора він містить ytd-author-comment-badge-renderer
	// Тому правильний селектор: :has(ytd-author-comment-badge-renderer)
	function HighlightOwnerComments(enable) {
		document.querySelector('#rt-ownerStyle')?.remove()
		if (!enable) return
		pushCSS(
			'ytd-comment-view-model:has(ytd-author-comment-badge-renderer) #body,' +
			'ytd-comment-renderer:has(ytd-author-comment-badge-renderer) #body' +
			'{border-left:3px solid #5785ba!important;padding-left:6px;' +
			'background:rgba(87,133,186,.1);border-radius:0 4px 4px 0}',
			'rt-ownerStyle'
		)
	}

	// --- Приховування Shorts ---
	function HideShorts(hide) {
		document.querySelector('#rt-noShorts')?.remove()
		if (!hide) return
		pushCSS(
			'ytd-rich-shelf-renderer[is-shorts],ytd-reel-shelf-renderer,' +
			'ytd-guide-entry-renderer:has(a[href="/shorts"]),ytd-mini-guide-entry-renderer:has(a[href="/shorts"]),' +
			'ytd-reel-item-renderer,ytd-rich-grid-slim-media[is-shorts],' +
			'yt-tab-shape:has(.yt-tab-shape-wiz__tab-title-text[title="Shorts"])' +
			'{display:none!important}',
			'rt-noShorts'
		)
	}

	// --- Приховування трансляцій і прем'єр ---
	function HidePremieresLive(hide) {
		document.querySelector('#rt-noLive')?.remove()
		if (!hide) return
		pushCSS(
			'ytd-rich-item-renderer:has(ytd-thumbnail-overlay-time-status-renderer[overlay-style="LIVE"]),' +
			'ytd-rich-item-renderer:has(ytd-thumbnail-overlay-time-status-renderer[overlay-style="UPCOMING"]),' +
			'ytd-rich-item-renderer:has(.badge-shape-wiz--live)' +
			'{display:none!important}',
			'rt-noLive'
		)
	}

	// --- Запам'ятовування вкладки каналу ---
	function RememberChannelTab() {
		document.addEventListener('click', e => {
			const tab = e.target.closest('tp-yt-paper-tab, yt-tab-shape')
			if (!tab || currentPage() !== 'channel') return
			const txt = tab.textContent?.trim()
			if (txt) sessionStorage.setItem('rt-lastTab', txt)
		})
		runOnPageInitOrTransition(async () => {
			if (currentPage() !== 'channel') return
			const last = sessionStorage.getItem('rt-lastTab')
			if (!last) return
			waitSelector('tp-yt-paper-tab, yt-tab-shape', { stop_on_page_change: true }).then(async () => {
				await Delay(700)
				const tabs = document.querySelectorAll('tp-yt-paper-tab, yt-tab-shape')
				for (const tab of tabs) {
					if (tab.textContent?.trim() === last) { tab.click(); break }
				}
			})
		}, true)
	}

	// --- Компактна бічна панель ---
	function CompactSidebar(enable) {
		document.querySelector('#rt-compactStyle')?.remove()
		if (!enable) return
		pushCSS(
			'ytd-app[guide-persistent-and-visible] #guide-inner-content.ytd-app{width:72px!important}' +
			'ytd-app[guide-persistent-and-visible] ytd-guide-entry-renderer .title.ytd-guide-entry-renderer{display:none!important}' +
			'ytd-app[guide-persistent-and-visible] #page-manager.ytd-app{margin-left:72px!important}',
			'rt-compactStyle'
		)
	}

	// --- Точне число лайків ---
	function AbsoluteLikes() {
		const CACHE_PREFIX = 'rt-lk-gm:';
		const SPAN_ID = 'YouTubi-absolute-likes';
		// hide YouTube's own shortened like count
		pushCSS(
			'#actions like-button-view-model button .yt-spec-button-shape-next__button-text-content { display: none !important }',
			'YouTubi-abs-likes-style'
		);
		// Same structure as ReturnDislikes: runOnPageInitOrTransition + waitSelector
		// waitSelector handles the case when tab becomes active (button already in DOM)
		runOnPageInitOrTransition(async () => {
			if (currentPage() !== 'watch') return;
			await Delay(1000);
			waitSelector('#actions like-button-view-model button', { stop_on_page_change: true })
				.then(setLikesCount);
		});
		async function setLikesCount(btn) {
			const videoId = getVideoId();
			if (!videoId) return;
			btn.style.width = 'auto';
			let likes = await GM_getValue(CACHE_PREFIX + videoId);
			if (!likes && !noValidApiKeys) {
				try {
					const key = await ApiKey();
					const d = await (await fetch(
						`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${key}`
					)).json();
					likes = d.items?.[0]?.statistics?.likeCount;
					if (likes) await GM_setValue(CACHE_PREFIX + videoId, likes);
				} catch { return; }
			}
			if (!likes) return;
			insertLikes(likes, btn);
			document.querySelectorAll('#actions like-button-view-model button, #actions dislike-button-view-model button')
				.forEach(button => {
					button.addEventListener('click', async () => {
						await Delay(600);
						insertLikes(likes, btn);
					});
					button.addEventListener('focusout', async () => {
						await Delay(500);
						insertLikes(likes, btn);
					});
				});
		}
		function insertLikes(likes, btn) {
			if (!(btn instanceof HTMLElement)) return;
			const count = Number(likes) + (btn.getAttribute('aria-pressed') === 'true' ? 1 : 0);
			const fmt = Intl.NumberFormat(userLanguage).format(count);
			let span = document.getElementById(SPAN_ID);
			if (!span) {
				btn.insertAdjacentHTML('beforeend',
					`<span id="${SPAN_ID}" style="text-overflow:ellipsis;overflow:visible;white-space:nowrap;padding-left:3px;">${fmt}</span>`);
			} else {
				span.textContent = fmt;
			}
			btn.title = fmt;
			btn.querySelector('.yt-spec-button-shape-next__icon')?.style.setProperty('margin-right', '3px');
		}
	}

	// --- Фільтр коротких відео на головній ---
	function FilterShortVideos(enable) {
		if (_filterObs) { _filterObs.disconnect(); _filterObs = null }
		document.querySelectorAll('[rt-df]').forEach(el => { el.removeAttribute('rt-df'); el.style.display = '' })
		if (!enable) return
		const minSec = (parseInt(RTFilterMinDuration) || 3) * 60
		const check = item => {
			if (item.hasAttribute('rt-df')) return
			item.setAttribute('rt-df', '1')
			const span = item.querySelector('ytd-thumbnail-overlay-time-status-renderer span#text')
			if (!span) return
			const txt = span.textContent?.trim(); if (!txt) return
			const p = txt.split(':').reverse().map(Number)
			const s = (p[0] || 0) + (p[1] || 0) * 60 + (p[2] || 0) * 3600
			if (s > 0 && s < minSec) item.style.display = 'none'
		}
		const run = () => document.querySelectorAll('ytd-rich-item-renderer').forEach(check)
		run()
		_filterObs = new MutationObserver(debounce(run, 500))
		_filterObs.observe(document.body, { childList: true, subtree: true })
	}

	// --- Приховування переглянутих на головній ---

	// --- Відкривати відео з бічної панелі в новій вкладці (СКМ) ---

	// --- Відновлення якості після реклами ---
	function RestoreQualityAfterAd() {
		waitSelector('#movie_player').then(player => {
			let savedQ = null
			new MutationObserver(() => {
				const isAd = player.classList.contains('ad-showing')
				if (isAd) {
					if (!savedQ) try { savedQ = player.getPlaybackQuality() } catch { }
				} else if (savedQ) {
					const q = savedQ; savedQ = null
					setTimeout(() => {
						try {
							if (typeof player.setPlaybackQuality === 'function') player.setPlaybackQuality(q)
							if (typeof player.setPlaybackQualityRange === 'function') player.setPlaybackQualityRange(q, q)
						} catch { }
					}, 1200)
				}
			}).observe(player, { attributes: true, attributeFilter: ['class'] })
		})
	}

	// --- Відключення автовідтворення ---
	// ВИПРАВЛЕНО: aria-checked="false" — вже вимкнений.
	// Треба клікати ТІЛЬКИ якщо aria-checked="true"
	function DisableAutoplay(enable) {
		document.querySelector('#rt-noAutoStyle')?.remove()
		if (!enable) return
		// Ховаємо контейнер кнопки автовідтворення (підтверджено клас ytp-autonav-toggle-button-container)
		pushCSS(
			'.ytp-autonav-toggle-button-container{display:none!important}',
			'rt-noAutoStyle'
		)
		const turnOff = () => {
			// Клікаємо ТІЛЬКИ якщо увімкнений (aria-checked="true")
			const btn = document.querySelector('.ytp-autonav-toggle-button')
			if (btn && btn.getAttribute('aria-checked') === 'true') {
				try { btn.click() } catch { }
			}
		}
		waitSelector('.ytp-autonav-toggle-button').then(turnOff)
		// При кожному новому відео перевіряємо знову
		document.addEventListener('yt-navigate-finish', () => setTimeout(turnOff, 1500))
	}

	// --- Кастомний CSS ---
	function ApplyCustomCSS(css) {
		let el = document.querySelector('#rt-customCSSUser')
		if (!el) {
			el = document.createElement('style')
			el.id = 'rt-customCSSUser'
			document.head.appendChild(el)
		}
		el.textContent = css
	}
	//#endregion
	//#region Доп функції (оригінальні без змін)
	function hexToRgb(hex) {
		const bigint = parseInt(hex.slice(1), 16)
		const r = (bigint >> 16) & 255
		const g = (bigint >> 8) & 255
		const b = bigint & 255
		return [r, g, b]
	}
	function rgbToHex(rgb) {
		const r = Math.round(rgb[0])
		const g = Math.round(rgb[1])
		const b = Math.round(rgb[2])
		return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`
	}
	function ModifyColor(hex, rAmount, gAmount, bAmount) {
		const rgb = hexToRgb(hex);
		const brightenedR = Math.max(Math.min(rgb[0] + rAmount, 255), 0);
		const brightenedG = Math.max(Math.min(rgb[1] + gAmount, 255), 0);
		const brightenedB = Math.max(Math.min(rgb[2] + bAmount, 255), 0);
		return rgbToHex([brightenedR, brightenedG, brightenedB]);
	}
	function pushCSS(value, id) {
		const style = document.head.appendChild(document.createElement('style'))
		style.textContent = value
		if (id) style.id = id
	}
	function debounce(callback, delay) {
		let timeoutId
		return function () {
			clearTimeout(timeoutId)
			timeoutId = setTimeout(() => {
				callback.apply(this, arguments)
			}, delay)
		}
	}
	function waitSelector(selector, limit_data) {
		if (typeof selector !== 'string') return console.error('wait > selector:', typeof selector);
		if (limit_data?.container && !(limit_data.container instanceof HTMLElement)) return console.error('wait > container not HTMLElement:', limit_data.container);
		if (selector.includes(':has(') && !CSS.supports('selector(:has(*))')) {
			return new Promise((resolve, reject) => {
				console.warn('CSS ":has()" unsupported');
				reject('CSS ":has()" unsupported');
			});
		}
		return new Promise(resolve => {
			if (element = (limit_data?.container || document.body || document).querySelector(selector)) {
				return resolve(element);
			}
			const observer1 = new MutationObserver((mutationRecordsArray, observer) => {
				for (const record of mutationRecordsArray) {
					for (const node of record.addedNodes) {
						if (![1, 3, 8].includes(node.nodeType) || !(node instanceof HTMLElement)) continue;
						if (node.matches && node.matches(selector)) {
							observer.disconnect();
							return resolve(node);
						}
						else if (
							(parentEl = node.parentElement || node)
							&& (parentEl instanceof HTMLElement)
							&& (element = parentEl.querySelector(selector))
						) {
							observer.disconnect();
							return resolve(element);
						}
					}
				}
				if (document?.readyState != 'loading'
					&& (element = (limit_data?.container || document?.body || document).querySelector(selector))
				) {
					observer.disconnect();
					return resolve(element);
				}
			})
			observer1.observe(limit_data?.container || document.body || document.documentElement || document, {
				childList: true, subtree: true, attributes: true,
			});
			if (limit_data?.stop_on_page_change) {
				isURLChange();
				window.addEventListener('transitionend', ({ target }) => {
					if (isURLChange()) observer1.disconnect();
				});
				function isURLChange() {
					return (this.prevURL === location.href) ? false : this.prevURL = location.href;
				}
			}
		});
	}
	function waitUntil(condition = required(), timeout = required()) {
		if (typeof condition !== 'function') return console.error('waitUntil > condition is not fn:', typeof condition);
		return new Promise((resolve) => {
			if (result = condition()) {
				resolve(result);
			} else {
				const waitCondition = setInterval(() => {
					if (result = condition()) {
						clearInterval(waitCondition);
						resolve(result);
					}
				}, ~~timeout || 500);
			}
		});
	}
	function runOnPageInitOrTransition(callback, onlyEvent) {
		if (!callback || typeof callback !== 'function') {
			return console.error('runOnPageInitOrTransition > callback not function:', ...arguments);
		}
		let prevURL = location.href;
		const isURLChange = () => (prevURL === location.href) ? false : prevURL = location.href;
		if (onlyEvent) { isURLChange() } else { isURLChange() || callback() }
		document.addEventListener('yt-navigate-finish', () => isURLChange() && callback());
	}
	function currentPage() {
		const pathnameArray = location.pathname.split('/').filter(Boolean)
		let [page, channelTab] = [pathnameArray[0], pathnameArray.pop()]
		channelTab = ['featured', 'videos', 'shorts', 'streams', 'playlists', 'community', 'channels', 'about', 'search'].includes(channelTab) ? channelTab : false
		return (page != 'live_chat')
			&& (['channel', 'c', 'user'].includes(page)
				|| page?.startsWith('@')
				|| /[A-Z\d_]/.test(page)
				|| channelTab
			) ? 'channel' : (page == 'clip') ? 'watch' : page || 'home'
	}
	function getVideoId() {
		return new URL(window.location.href).searchParams.get("v")
	}
	function timeFormat(time_sec) {
		const ts = Math.abs(+time_sec), d = ~~(ts / 86400), h = ~~((ts % 86400) / 3600), m = ~~((ts % 3600) / 60), s = ~~(ts % 60)
		return (d ? `${d}d ` : '') + (h ? (d ? h.toString().padStart(2, '0') : h) + ':' : '') + (h ? m.toString().padStart(2, '0') : m) + ':' + s.toString().padStart(2, '0')
	}
	async function getChannelId() {
		const isChannelId = id => id && /UC([a-z0-9-_]{22})$/i.test(id);
		await waitUntil(() => document.body.querySelector('ytd-watch-flexy')?.playerData?.videoDetails.channelId, 50);
		let result = [
			document.querySelector('meta[itemprop="channelId"][content]')?.content,
			(document.body.querySelector('ytd-app')?.__data?.data?.response
				|| document.body.querySelector('ytd-app')?.data?.response
				|| window.ytInitialData
			)?.metadata?.channelMetadataRenderer?.externalId,
			document.querySelector('link[itemprop="url"][href]')?.href.split('/')[4],
			location.pathname.split('/')[2],
			document.body.querySelector('#video-owner a[href]')?.href.split('/')[4],
			document.body.querySelector('a.ytp-ce-channel-title[href]')?.href.split('/')[4],
			document.body.querySelector('ytd-watch-flexy')?.playerData?.videoDetails.channelId,
		].find(i => isChannelId(i));
		return result;
	}
	function finishEvent(callback) {
		document.addEventListener('yt-navigate-finish', () => callback())
	}
	function showOSD(text) {
		if (!text || (currentPage() != 'embed' && currentPage() != 'watch')) return;
		if (typeof this.fadeBezel === 'number') clearTimeout(this.fadeBezel);
		const bezelEl = document.body.querySelector('.ytp-bezel-text');
		if (!bezelEl) return console.error(`showOSD ${text}=>${bezelEl}`);
		const bezelContainer = bezelEl.parentElement.parentElement, CLASS_VALUE = 'ytp-text-root', SELECTOR = '.' + CLASS_VALUE;
		if (!this.bezel_css_inited) {
			this.bezel_css_inited = true;
			pushCSS(
				`${SELECTOR} { display: block !important; }
				  ${SELECTOR} .ytp-bezel-text-wrapper { pointer-events: none; z-index: 40 !important; }
				  ${SELECTOR} .ytp-bezel-text { display: inline-block !important; }
				  ${SELECTOR} .ytp-bezel { display: none !important; }`);
		}
		bezelEl.textContent = text;
		bezelContainer.classList.add(CLASS_VALUE);
		let ms = 1200;
		if ((text = String(text)) && (text.endsWith('%') || text.endsWith('x'))) { ms = 600 }
		this.fadeBezel = setTimeout(() => {
			bezelContainer.classList.remove(CLASS_VALUE);
			bezelEl.textContent = '';
		}, ms);
	}
	async function getSavedSetting(key) {
		return await GM_getValue(key) == 'true';
	}
	function SearchInObjectByKey({ obj, keys, match_fn = data => data.constructor.name !== 'Object', multiple = false, path = '' }) {
		if (typeof obj !== 'object') {
			console.error('searchInObjectByKey > keys is not Object:', ...arguments);
			return;
		}
		const setPath = d => (path ? path + '.' : '') + d;
		let hasKey, results = [];
		for (const prop in obj) {
			if (obj.hasOwnProperty(prop) && obj[prop]) {
				hasKey = keys.constructor.name === 'String' ? (keys === prop) : keys.indexOf(prop) > -1;
				if (hasKey && (!match_fn || match_fn(obj[prop]))) {
					if (multiple) { results.push({ 'path': setPath(prop), 'data': obj[prop] }); }
					else { return { 'path': setPath(prop), 'data': obj[prop] }; }
				} else {
					switch (obj[prop].constructor.name) {
						case 'Object':
							const resultObject = SearchInObjectByKey({ obj: obj[prop], keys: keys, path: setPath(prop), match_fn: match_fn });
							if (resultObject) { if (multiple) results.push(resultObject); else return resultObject; }
							break;
						case 'Array':
							for (let i = 0; i < obj[prop].length; i++) {
								const resultArray = SearchInObjectByKey({ obj: obj[prop][i], keys: keys, path: path + `[${i}]`, match_fn: match_fn });
								if (resultArray) { if (multiple) results.push(resultArray); else return resultArray; }
							}
							break;
						case 'Function':
							if (Object.keys(obj[prop]).length) {
								for (const j in obj[prop]) {
									if (typeof obj[prop][j] !== 'undefined') {
										const resultFunction = SearchInObjectByKey({ obj: obj[prop][j], keys: keys, path: setPath(prop) + '.' + j, match_fn: match_fn });
										if (resultFunction) { if (multiple) results.push(resultFunction); else return resultFunction; }
									}
								}
							}
							break;
					}
				}
			}
		}
		if (multiple) return results;
	}
	async function Delay(ms = 1000) {
		return new Promise(resolve => setTimeout(resolve, ms))
	}
	function GetUserLanguage() {
		if (document.documentElement.lang) return document.documentElement.lang;
		else if (navigator.language) return navigator.language;
		else {
			try {
				return new URL(
					Array.from(document.querySelectorAll("head > link[rel='search']"))
						?.find((n) => n?.getAttribute("href")?.includes("?locale="))
						?.getAttribute("href"),
				)?.searchParams?.get("locale");
			} catch {
				console.log("Cannot find browser locale. Use en as default for number formatting.");
				return "en";
			}
		}
	}
	function roundDown(num) {
		if (num < 1000) return num;
		const int = Math.floor(Math.log10(num) - 2);
		const decimal = int + (int % 3 ? 1 : 0);
		const value = Math.floor(num / 10 ** decimal);
		return value * 10 ** decimal;
	}
	async function ApiKey() {
		return apiKeyQueue = apiKeyQueue.then(async () => {
			return await CheckApiKey()
		}).catch();
	}
	async function CheckApiKey() {
		const STORAGE_VALID_APIKEY = 'YOUTUBE_VALID_APIKEY'
		if (localStorage.hasOwnProperty(STORAGE_VALID_APIKEY)) return localStorage.getItem(STORAGE_VALID_APIKEY);
		return GetApiKey().then(key => {
			if (noValidApiKeys) return;
			return fetch(`https://www.googleapis.com/youtube/v3/videos?id=dQw4w9WgXcQ&part=id&key=${key}`).then(response => {
				if (response.ok) {
					localStorage.setItem(STORAGE_VALID_APIKEY, key);
					return key;
				}
				return CheckApiKey()
			})
		})
	}
	async function GetApiKey() {
		const STORAGE_API_KEYS = 'YOUTUBE_API_KEYS';
		const YOUTUBE_API_KEYS = localStorage.hasOwnProperty(STORAGE_API_KEYS) ? JSON.parse(localStorage.getItem(STORAGE_API_KEYS)) : await getKeys();
		async function getKeys() {
			return await fetch('https://raw.githubusercontent.com/Mhack-7/YouTubi/refs/heads/main/yt_api_keys.json').then(res => res.json()).then(keys => {
				shuffleArray(keys);
				localStorage.setItem(STORAGE_API_KEYS, JSON.stringify(keys));
				return keys;
			}).catch(() => { localStorage.removeItem(STORAGE_API_KEYS); });
		}
		if (apiKeysArrayLength >= YOUTUBE_API_KEYS.length) {
			noValidApiKeys = true;
			localStorage.removeItem(STORAGE_API_KEYS);
			return;
		}
		const apiKey = YOUTUBE_API_KEYS[apiKeysArrayLength];
		apiKeysArrayLength++;
		return 'AIzaSy' + apiKey;
	}
	function CleanApiKeys() {
		localStorage.removeItem('YOUTUBE_API_KEYS');
		localStorage.removeItem('YOUTUBE_VALID_APIKEY');
	}
	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}
	//#endregion
})()
