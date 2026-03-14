(function () {
  const majorArcana = [
    {
      name: "The Fool",
      arcana: "Major Arcana",
      number: 0,
      imageFile: "RWS_Tarot_00_Fool.jpg",
      upright: "A fresh start, curiosity, and movement before the whole path is mapped out.",
      reversed: "Impulsiveness, avoidable risk, or hesitation that keeps a new chapter stalled.",
    },
    {
      name: "The Magician",
      arcana: "Major Arcana",
      number: 1,
      imageFile: "RWS_Tarot_01_Magician.jpg",
      upright: "Skill, focus, and the ability to turn intent into something concrete.",
      reversed: "Scattered energy, weak follow-through, or using influence in a shallow way.",
    },
    {
      name: "The High Priestess",
      arcana: "Major Arcana",
      number: 2,
      imageFile: "RWS_Tarot_02_High_Priestess.jpg",
      upright: "Intuition, restraint, and information that matters more when observed than forced.",
      reversed: "Blocked instinct, mixed signals, or avoiding what you already sense is true.",
    },
    {
      name: "The Empress",
      arcana: "Major Arcana",
      number: 3,
      imageFile: "RWS_Tarot_03_Empress.jpg",
      upright: "Growth, care, and conditions that help something steady become abundant.",
      reversed: "Smothering, neglect, or a lack of support around what needs tending.",
    },
    {
      name: "The Emperor",
      arcana: "Major Arcana",
      number: 4,
      imageFile: "RWS_Tarot_04_Emperor.jpg",
      upright: "Structure, authority, and a need for clear rules or ownership.",
      reversed: "Rigidity, control issues, or weak leadership that creates instability.",
    },
    {
      name: "The Hierophant",
      arcana: "Major Arcana",
      number: 5,
      imageFile: "RWS_Tarot_05_Hierophant.jpg",
      upright: "Tradition, trusted guidance, and value in established methods.",
      reversed: "Questioning the script, rejecting stale rules, or conforming without conviction.",
    },
    {
      name: "The Lovers",
      arcana: "Major Arcana",
      number: 6,
      imageFile: "RWS_Tarot_06_Lovers.jpg",
      upright: "Alignment, shared values, and a choice that should match what matters most.",
      reversed: "Misalignment, strained bonds, or choices made against your own values.",
    },
    {
      name: "The Chariot",
      arcana: "Major Arcana",
      number: 7,
      imageFile: "RWS_Tarot_07_Chariot.jpg",
      upright: "Direction, discipline, and progress earned through controlled effort.",
      reversed: "Loss of control, competing priorities, or pushing forward without traction.",
    },
    {
      name: "Strength",
      arcana: "Major Arcana",
      number: 8,
      imageFile: "RWS_Tarot_08_Strength.jpg",
      upright: "Patience, courage, and influence built through composure rather than force.",
      reversed: "Self-doubt, impatience, or reacting from stress instead of steadiness.",
    },
    {
      name: "The Hermit",
      arcana: "Major Arcana",
      number: 9,
      imageFile: "RWS_Tarot_09_Hermit.jpg",
      upright: "Reflection, solitude, and stepping back long enough to see clearly.",
      reversed: "Isolation, overthinking, or staying withdrawn past the useful point.",
    },
    {
      name: "Wheel of Fortune",
      arcana: "Major Arcana",
      number: 10,
      imageFile: "RWS_Tarot_10_Wheel_of_Fortune.jpg",
      upright: "Change in motion, timing, and events that shift faster than expected.",
      reversed: "Resistance to change, bad timing, or repeating the same cycle again.",
    },
    {
      name: "Justice",
      arcana: "Major Arcana",
      number: 11,
      imageFile: "RWS_Tarot_11_Justice.jpg",
      upright: "Accountability, fairness, and the need to face the facts cleanly.",
      reversed: "Bias, avoidance, or consequences that follow from unclear judgment.",
    },
    {
      name: "The Hanged Man",
      arcana: "Major Arcana",
      number: 12,
      imageFile: "RWS_Tarot_12_Hanged_Man.jpg",
      upright: "Pause, surrender, and a better answer that comes from changing perspective.",
      reversed: "Stalling, martyrdom, or refusing the pause that would clarify things.",
    },
    {
      name: "Death",
      arcana: "Major Arcana",
      number: 13,
      imageFile: "RWS_Tarot_13_Death.jpg",
      upright: "An ending that clears space for the next stage to begin properly.",
      reversed: "Dragging out an ending, clinging to what is already done, or fearing change.",
    },
    {
      name: "Temperance",
      arcana: "Major Arcana",
      number: 14,
      imageFile: "RWS_Tarot_14_Temperance.jpg",
      upright: "Balance, moderation, and steady integration between different needs.",
      reversed: "Excess, poor pacing, or pieces that are not working together yet.",
    },
    {
      name: "The Devil",
      arcana: "Major Arcana",
      number: 15,
      imageFile: "RWS_Tarot_15_Devil.jpg",
      upright: "Attachment, habit, or desire that has more control than it should.",
      reversed: "Breaking a pattern, seeing the trap clearly, or loosening unhealthy ties.",
    },
    {
      name: "The Tower",
      arcana: "Major Arcana",
      number: 16,
      imageFile: "RWS_Tarot_16_Tower.jpg",
      upright: "Disruption, truth arriving hard, and structures failing where they were weak.",
      reversed: "A slow collapse, resisting the obvious, or trying to contain necessary change.",
    },
    {
      name: "The Star",
      arcana: "Major Arcana",
      number: 17,
      imageFile: "RWS_Tarot_17_Star.jpg",
      upright: "Hope, renewal, and a calmer sense of direction after strain.",
      reversed: "Low morale, doubt, or recovery that needs more time and trust.",
    },
    {
      name: "The Moon",
      arcana: "Major Arcana",
      number: 18,
      imageFile: "RWS_Tarot_18_Moon.jpg",
      upright: "Uncertainty, instinct, and conditions where not everything is visible yet.",
      reversed: "Confusion starting to clear, exposed illusions, or fear losing its grip.",
    },
    {
      name: "The Sun",
      arcana: "Major Arcana",
      number: 19,
      imageFile: "RWS_Tarot_19_Sun.jpg",
      upright: "Clarity, warmth, and the confidence that comes from seeing things directly.",
      reversed: "Partial success, delayed joy, or clarity that is present but underused.",
    },
    {
      name: "Judgement",
      arcana: "Major Arcana",
      number: 20,
      imageFile: "RWS_Tarot_20_Judgement.jpg",
      upright: "Reckoning, renewal, and acting on what you now know for sure.",
      reversed: "Avoiding the call, harsh self-criticism, or delaying the needed decision.",
    },
    {
      name: "The World",
      arcana: "Major Arcana",
      number: 21,
      imageFile: "RWS_Tarot_21_World.jpg",
      upright: "Completion, integration, and the sense that a full cycle has landed.",
      reversed: "Loose ends, stalled completion, or progress that needs one last pass.",
    },
  ];

  const suits = [
    {
      name: "Wands",
      topic: "initiative, ambition, momentum, and creative drive",
      filePrefix: "Wands",
    },
    {
      name: "Cups",
      topic: "emotion, closeness, intuition, and memory",
      filePrefix: "Cups",
    },
    {
      name: "Swords",
      topic: "thought, language, pressure, and conflict",
      filePrefix: "Swords",
    },
    {
      name: "Pentacles",
      topic: "work, money, health, and practical stability",
      filePrefix: "Pents",
    },
  ];

  const ranks = [
    { name: "Ace", fileNumber: "01" },
    { name: "Two", fileNumber: "02" },
    { name: "Three", fileNumber: "03" },
    { name: "Four", fileNumber: "04" },
    { name: "Five", fileNumber: "05" },
    { name: "Six", fileNumber: "06" },
    { name: "Seven", fileNumber: "07" },
    { name: "Eight", fileNumber: "08" },
    { name: "Nine", fileNumber: "09" },
    { name: "Ten", fileNumber: "10" },
    { name: "Page", fileNumber: "11" },
    { name: "Knight", fileNumber: "12" },
    { name: "Queen", fileNumber: "13" },
    { name: "King", fileNumber: "14" },
  ];

  const imageFileOverrides = {
    "Nine of Wands": "Tarot Nine of Wands.jpg",
  };

  function buildDeck() {
    return [...majorArcana, ...buildMinorArcana()];
  }

  function buildMinorArcana() {
    return suits.flatMap((suit) =>
      ranks.map((rank, index) => ({
        name: `${rank.name} of ${suit.name}`,
        arcana: "Minor Arcana",
        suit: suit.name,
        topic: suit.topic,
        number: index + 1,
        rank: rank.name,
        imageFile:
          imageFileOverrides[`${rank.name} of ${suit.name}`] ??
          `${suit.filePrefix}${rank.fileNumber}.jpg`,
      }))
    );
  }

  function getImageUrl(card) {
    return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(card.imageFile)}`;
  }

  function spreadPositions(size, language = "en") {
    const labels = {
      en: {
        1: ["Single card"],
        3: ["Past", "Present", "Next step"],
        5: ["Current state", "Pressure", "What helps", "What changes", "Likely outcome"],
      },
      lv: {
        1: ["Viena kārts"],
        3: ["Pagātne", "Tagadne", "Nākamais solis"],
        5: ["Pašreizējais stāvoklis", "Spiediens", "Kas palīdz", "Kas mainās", "Iespējamais iznākums"],
      },
      ru: {
        1: ["Одна карта"],
        3: ["Прошлое", "Настоящее", "Следующий шаг"],
        5: ["Текущее состояние", "Давление", "Что помогает", "Что меняется", "Вероятный итог"],
      },
    };

    return labels[language]?.[size] ?? labels.en[size];
  }

  const localizedMajorMeanings = {
    lv: {
      "The Fool": {
        upright: "Jauns sākums, zinātkāre un kustība, vēl pirms viss ceļš ir skaidri redzams.",
        reversed: "Impulsivitāte, izvairāms risks vai vilcināšanās, kas aiztur jaunu posmu.",
      },
      "The Magician": {
        upright: "Prasme, fokuss un spēja pārvērst nodomu kaut ko taustāmu.",
        reversed: "Izkliedēta enerģija, vājš izpildījums vai ietekmes izmantošana virspusēji.",
      },
      "The High Priestess": {
        upright: "Intuīcija, atturība un informācija, kas svarīgāka kļūst tad, kad to novēro, nevis spiež.",
        reversed: "Bloķēta intuīcija, jaukti signāli vai izvairīšanās no tā, ko jau jūti kā patiesu.",
      },
      "The Empress": {
        upright: "Izaugsme, rūpes un apstākļi, kas palīdz kaut kam stabilam kļūt bagātīgam.",
        reversed: "Pāraprūpe, nolaidība vai atbalsta trūkums tam, kas jākopj.",
      },
      "The Emperor": {
        upright: "Struktūra, autoritāte un vajadzība pēc skaidriem noteikumiem vai atbildības.",
        reversed: "Stīvums, kontroles problēmas vai vāja vadība, kas rada nestabilitāti.",
      },
      "The Hierophant": {
        upright: "Tradīcija, uzticams padoms un vērtība pārbaudītās metodēs.",
        reversed: "Scenārija apšaubīšana, novecojušu noteikumu noraidīšana vai pakļaušanās bez pārliecības.",
      },
      "The Lovers": {
        upright: "Saskaņa, kopīgas vērtības un izvēle, kurai jāsakrīt ar svarīgāko.",
        reversed: "Nesaskaņa, saspringtas saites vai izvēles pret savām vērtībām.",
      },
      "The Chariot": {
        upright: "Virziens, disciplīna un progress, kas iegūts ar savaldītu piepūli.",
        reversed: "Kontroles zudums, konfliktējošas prioritātes vai virzīšanās bez saķeres.",
      },
      Strength: {
        upright: "Pacietība, drosme un ietekme, kas balstīta mierā, nevis spēkā.",
        reversed: "Paššaubas, nepacietība vai reakcija no stresa, nevis stabilitātes.",
      },
      "The Hermit": {
        upright: "Pārdomas, vientulība un atkāpšanās, lai ieraudzītu skaidrāk.",
        reversed: "Izolācija, pārdomāšanās vai pārlieka noslēgšanās ilgāk nekā vajadzīgs.",
      },
      "Wheel of Fortune": {
        upright: "Pārmaiņas kustībā, laiks un notikumi, kas mainās ātrāk nekā gaidīts.",
        reversed: "Pretošanās pārmaiņām, slikts laiks vai viena un tā paša cikla atkārtošana.",
      },
      Justice: {
        upright: "Atbildība, taisnīgums un vajadzība skaidri saskatīt faktus.",
        reversed: "Aizspriedumi, izvairīšanās vai sekas no neskaidra sprieduma.",
      },
      "The Hanged Man": {
        upright: "Pauze, pieņemšana un labāka atbilde, kas rodas no perspektīvas maiņas.",
        reversed: "Iestrēgums, mocekļa loma vai atteikšanās no pauzes, kas dotu skaidrību.",
      },
      Death: {
        upright: "Noslēgums, kas atbrīvo vietu nākamajam posmam.",
        reversed: "Noslēguma vilkšana garumā, turēšanās pie jau pabeigtā vai bailes no pārmaiņām.",
      },
      Temperance: {
        upright: "Līdzsvars, mērenība un vienmērīga dažādu vajadzību savienošana.",
        reversed: "Pārmērība, slikts temps vai daļas, kas vēl nestrādā kopā.",
      },
      "The Devil": {
        upright: "Pieķeršanās, ieradums vai vēlme, kam ir pārāk liela vara.",
        reversed: "Raksta pārraušana, slazda saskatīšana vai neveselīgu saišu atslābināšana.",
      },
      "The Tower": {
        upright: "Satricinājums, skarba patiesība un vāju struktūru sabrukums.",
        reversed: "Lēns sabrukums, pretošanās acīmredzamajam vai mēģinājums aizturēt vajadzīgas pārmaiņas.",
      },
      "The Star": {
        upright: "Cerība, atjaunošanās un mierīgāka virziena sajūta pēc spriedzes.",
        reversed: "Zems gars, šaubas vai atkopšanās, kurai vajag vairāk laika un uzticības.",
      },
      "The Moon": {
        upright: "Neskaidrība, instinkts un apstākļi, kuros vēl ne viss ir redzams.",
        reversed: "Apjukuma mazināšanās, atmaskotas ilūzijas vai baiļu vājināšanās.",
      },
      "The Sun": {
        upright: "Skaidrība, siltums un pārliecība, kas rodas no tieša redzējuma.",
        reversed: "Daļēji panākumi, aizkavēts prieks vai skaidrība, kas vēl netiek pilnībā izmantota.",
      },
      Judgement: {
        upright: "Izšķirošs brīdis, atjaunošanās un rīcība, balstīta uz to, ko jau zini droši.",
        reversed: "Aicinājuma ignorēšana, skarba paškritika vai vajadzīgā lēmuma atlikšana.",
      },
      "The World": {
        upright: "Noslēgums, integrācija un sajūta, ka pilns cikls ir piezemējies.",
        reversed: "Nenoslēgtas lietas, aizkavēts noslēgums vai progress, kam vajag pēdējo soli.",
      },
    },
    ru: {
      "The Fool": {
        upright: "Новый старт, любопытство и движение еще до того, как весь путь стал понятен.",
        reversed: "Импульсивность, лишний риск или колебание, которое задерживает новый этап.",
      },
      "The Magician": {
        upright: "Навык, фокус и способность превратить намерение во что-то конкретное.",
        reversed: "Распыленная энергия, слабое исполнение или поверхностное использование влияния.",
      },
      "The High Priestess": {
        upright: "Интуиция, сдержанность и информация, которая важнее, когда ее наблюдают, а не форсируют.",
        reversed: "Заблокированная интуиция, смешанные сигналы или избегание того, что уже ощущается как правда.",
      },
      "The Empress": {
        upright: "Рост, забота и условия, в которых что-то устойчивое может стать изобильным.",
        reversed: "Чрезмерная опека, запущенность или нехватка поддержки тому, что требует заботы.",
      },
      "The Emperor": {
        upright: "Структура, авторитет и необходимость ясных правил или ответственности.",
        reversed: "Жесткость, проблемы с контролем или слабое лидерство, создающее нестабильность.",
      },
      "The Hierophant": {
        upright: "Традиция, надежное наставничество и ценность проверенных методов.",
        reversed: "Сомнение в готовом сценарии, отказ от устаревших правил или конформизм без убежденности.",
      },
      "The Lovers": {
        upright: "Согласованность, общие ценности и выбор, который должен совпадать с самым важным.",
        reversed: "Несовпадение, напряженные связи или выбор против собственных ценностей.",
      },
      "The Chariot": {
        upright: "Направление, дисциплина и прогресс, достигнутый через собранное усилие.",
        reversed: "Потеря контроля, конфликтующие приоритеты или движение вперед без сцепления.",
      },
      Strength: {
        upright: "Терпение, смелость и влияние, построенное на спокойствии, а не на силе.",
        reversed: "Неуверенность в себе, нетерпение или реакция из стресса вместо устойчивости.",
      },
      "The Hermit": {
        upright: "Размышление, уединение и шаг назад, чтобы увидеть яснее.",
        reversed: "Изоляция, чрезмерные раздумья или затянувшаяся отстраненность.",
      },
      "Wheel of Fortune": {
        upright: "Перемены в движении, время и события, которые разворачиваются быстрее ожидаемого.",
        reversed: "Сопротивление переменам, неудачный момент или повторение одного и того же цикла.",
      },
      Justice: {
        upright: "Ответственность, справедливость и необходимость честно взглянуть на факты.",
        reversed: "Предвзятость, избегание или последствия неясного суждения.",
      },
      "The Hanged Man": {
        upright: "Пауза, принятие и лучший ответ, который приходит через смену взгляда.",
        reversed: "Зависание, роль жертвы или отказ от паузы, которая дала бы ясность.",
      },
      Death: {
        upright: "Завершение, освобождающее место для следующего этапа.",
        reversed: "Затягивание конца, цепляние за уже завершенное или страх перемен.",
      },
      Temperance: {
        upright: "Баланс, умеренность и ровное соединение разных потребностей.",
        reversed: "Избыток, плохой темп или части, которые пока не работают вместе.",
      },
      "The Devil": {
        upright: "Привязанность, привычка или желание, получившие слишком много власти.",
        reversed: "Разрыв паттерна, ясное видение ловушки или ослабление нездоровых связей.",
      },
      "The Tower": {
        upright: "Потрясение, жесткая правда и разрушение слабых структур.",
        reversed: "Медленный распад, сопротивление очевидному или попытка удержать неизбежные перемены.",
      },
      "The Star": {
        upright: "Надежда, восстановление и более спокойное чувство направления после напряжения.",
        reversed: "Упадок духа, сомнение или восстановление, которому нужно больше времени и доверия.",
      },
      "The Moon": {
        upright: "Неясность, инстинкт и обстоятельства, в которых еще не все видно.",
        reversed: "Начинающее рассеиваться замешательство, разоблаченные иллюзии или ослабление страха.",
      },
      "The Sun": {
        upright: "Ясность, тепло и уверенность, приходящие от прямого видения вещей.",
        reversed: "Частичный успех, отложенная радость или ясность, которая пока недоиспользована.",
      },
      Judgement: {
        upright: "Пробуждение, обновление и действие на основе того, что уже ясно известно.",
        reversed: "Игнорирование зова, жесткая самокритика или откладывание нужного решения.",
      },
      "The World": {
        upright: "Завершение, целостность и ощущение, что полный цикл завершился.",
        reversed: "Незакрытые вопросы, задержка завершения или прогресс, которому нужен последний шаг.",
      },
    },
  };
  const minorMeaningTranslations = {
    lv: {
      Ace: { upright: "Ir pieejams jauns atvērums vai tīrs sākumpunkts.", reversed: "Atvērums pastāv, bet to aiztur vilcināšanās vai neveiksmīgs laiks." },
      Two: { upright: "Izvēlei vai līdzsvarošanai vajadzīga stingra roka.", reversed: "Līdzsvars ir izjaukts, un neizlēmība to pasliktina." },
      Three: { upright: "Izaugsme parādās caur sadarbību vai agrīnu redzamu progresu.", reversed: "Progress ir nevienmērīgs vai apkārtējais atbalsts nestrādā labi." },
      Four: { upright: "Stabilitāte nāk no struktūras, pauzes vai jau strādājošā aizsargāšanas.", reversed: "Struktūra ir pārāk stīva vai pārāk vāja, lai noturētu." },
      Five: { upright: "Berze atsedz spriedzes punktu, ko vairs nevar ignorēt.", reversed: "Konflikts mazinās, bet saknes problēmai joprojām vajag tiešu atbildi." },
      Six: { upright: "Iespējama virzība uz līdzsvaru, atbalstu vai taisnīgāku apmaiņu.", reversed: "Atkopšanās ir daļēja, un zem virsmas joprojām redzams disbalanss." },
      Seven: { upright: "Šī ir izvērtēšanas, aizsardzības vai virzīšanās cauri pretestībai kārts.", reversed: "Aizsardzības pozīcija, nogurums vai šaubas padara noturēšanos grūtāku." },
      Eight: { upright: "Notikumus uz priekšu dzen ātrums, atkārtojums vai spēcīgs fokuss.", reversed: "Lietas ķeras, apstājas vai kļūst atkārtotas bez progresa." },
      Nine: { upright: "Tu esi tuvu beigām, bet spriedze ir reāla.", reversed: "Spriedze ieplūst bailēs, izvairīšanās vai pārreakcijā." },
      Ten: { upright: "Suitas svars sasniedz pilnu apjomu - gan labā, gan sliktā nozīmē.", reversed: "Svars kļūst neizturams, un kaut kas jāatlaiž." },
      Page: { upright: "Parādās vēsts, mācība vai agrīnas stadijas iespēja.", reversed: "Signāls ir nenobriedis, neskaidrs vai viegli pārprotams." },
      Knight: { upright: "Kustība nāk caur vajāšanu, steigu un tiešu rīcību.", reversed: "Kustība ir neapdomīga, iestrēgusi vai vērsta nepareizā virzienā." },
      Queen: { upright: "Nobriedusi kontrole nāk no mierpilnas pārliecības un pieredzējuša sprieduma.", reversed: "Kontrole pārvēršas noslēgtībā, attālumā vai pārmērīgā aizsardzībā." },
      King: { upright: "Rezultātu veido vadība, standarti un izlēmīga atbildība.", reversed: "Autoritāte kļūst stīva, trūkstoša vai kalpo tikai sev." },
    },
    ru: {
      Ace: { upright: "Открывается новая возможность или чистая точка старта.", reversed: "Возможность есть, но ее сдерживают колебание или неудачный момент." },
      Two: { upright: "Выбору или балансировке нужна твердая рука.", reversed: "Баланс нарушен, а нерешительность лишь ухудшает ситуацию." },
      Three: { upright: "Рост проявляется через сотрудничество или ранний заметный прогресс.", reversed: "Прогресс неравномерен, или поддержка вокруг работает плохо." },
      Four: { upright: "Стабильность приходит через структуру, паузу или защиту того, что уже работает.", reversed: "Структура слишком жесткая или слишком слабая, чтобы удерживать." },
      Five: { upright: "Трение показывает точку напряжения, которую уже нельзя игнорировать.", reversed: "Конфликт ослабевает, но корневая проблема все еще требует прямого ответа." },
      Six: { upright: "Возможен сдвиг к балансу, поддержке или более честному обмену.", reversed: "Восстановление частичное, и дисбаланс все еще виден под поверхностью." },
      Seven: { upright: "Это карта оценки, защиты или продвижения сквозь сопротивление.", reversed: "Оборонительность, усталость или сомнение затрудняют удержание позиции." },
      Eight: { upright: "События ускоряются благодаря скорости, повторению или сильной концентрации.", reversed: "Все цепляется, тормозит или повторяется без настоящего прогресса." },
      Nine: { upright: "Вы уже близко к концу, но давление реально.", reversed: "Напряжение переходит в страх, избегание или чрезмерную реакцию." },
      Ten: { upright: "Масть доходит до полного веса - как в хорошем, так и в тяжелом смысле.", reversed: "Груз становится неустойчивым, и что-то нужно отпустить." },
      Page: { upright: "Входит сообщение, урок или возможность ранней стадии.", reversed: "Сигнал незрелый, неясный или его легко неверно прочитать." },
      Knight: { upright: "Движение приходит через преследование, срочность и прямое действие.", reversed: "Движение безрассудно, застопорилось или направлено не туда." },
      Queen: { upright: "Зрелый контроль приходит через спокойную уверенность и опытное суждение.", reversed: "Контроль превращается в отстраненность, холодность или чрезмерную опеку." },
      King: { upright: "Исход формируют лидерство, стандарты и решительная ответственность.", reversed: "Авторитет становится жестким, отсутствующим или эгоистичным." },
    },
  };
  const minorSuitTopics = {
    lv: {
      Wands: "iniciatīvas, ambīciju, impulsa un radošā dzinuļa jomā",
      Cups: "emociju, tuvības, intuīcijas un atmiņu jomā",
      Swords: "domu, valodas, spriedzes un konflikta jomā",
      Pentacles: "darba, naudas, veselības un praktiskās stabilitātes jomā",
    },
    ru: {
      Wands: "в сфере инициативы, амбиций, импульса и творческого драйва",
      Cups: "в сфере эмоций, близости, интуиции и памяти",
      Swords: "в сфере мысли, языка, давления и конфликта",
      Pentacles: "в сфере работы, денег, здоровья и практической стабильности",
    },
  };
  const minorDirectionTranslations = {
    lv: {
      upright: "Enerģija ir tieša, pieejama un vieglāk īstenojama.",
      reversed: "Enerģija vēršas uz iekšu, kavējas vai izpaužas sagrozīti.",
    },
    ru: {
      upright: "Энергия прямая, доступная и ей легче дать ход.",
      reversed: "Энергия обращена внутрь, задерживается или искажается.",
    },
  };
  const applicationTranslations = {
    lv: {
      major: {
        upright: "Uztver šo kā galveno mācību vai pagrieziena punktu šajā lasījumā.",
        reversed: "Uztver šo kā zīmi piebremzēt un sakārtot to, kas ir šķībi.",
      },
      suits: {
        Wands: {
          upright: "Atbalsti spēcīgāko ideju un virzi to ar skaidru piepūli, negaidot pilnīgu pārliecību.",
          reversed: "Nogriež troksni, izvēlies vienu virzienu un beidz dedzināt enerģiju izklaidus sākumos.",
        },
        Cups: {
          upright: "Uzticies attiecību tonim un reaģē godīgi, nevis ar pārmērīgu kontroli.",
          reversed: "Nosauc sajūtu tieši, pirms tā sāk ietekmēt lēmumus apkārtceļos.",
        },
        Swords: {
          upright: "Lieto tiešu valodu, skaidru domāšanu un ļauj faktiem darīt savu darbu.",
          reversed: "Pārbaudi pieņēmumus, noņem pārspīlējumus un nestrīdies ar savu projekciju.",
        },
        Pentacles: {
          upright: "Izvēlies vienmērīgu izpildi, praktiskas rūpes un darbu, kas krājas laika gaitā.",
          reversed: "Sakārto rutīnu, budžetu vai procesu, pirms dzenies pēc lielāka rezultāta.",
        },
      },
    },
    ru: {
      major: {
        upright: "Считай это главным уроком или поворотным моментом данного расклада.",
        reversed: "Воспринимай это как знак замедлиться и привести в порядок то, что пошло криво.",
      },
      suits: {
        Wands: {
          upright: "Поддержи самую сильную идею и двигай ее ясным усилием, не дожидаясь полной уверенности.",
          reversed: "Срежь шум, выбери одно направление и перестань тратить силы на рассеянные старты.",
        },
        Cups: {
          upright: "Доверься тону связи и отвечай честно, а не через чрезмерный контроль.",
          reversed: "Назови чувство прямо, прежде чем оно начнет влиять на решения обходным путем.",
        },
        Swords: {
          upright: "Используй прямую речь, ясное мышление и позволь фактам сделать свою работу.",
          reversed: "Проверь предположения, убери преувеличения и не спорь со своей проекцией.",
        },
        Pentacles: {
          upright: "Выбирай ровное исполнение, практическую заботу и работу, которая накапливает эффект.",
          reversed: "Подтяни рутину, бюджет или процесс, прежде чем гнаться за большим результатом.",
        },
      },
    },
  };
  const keywordTranslations = {
    lv: {
      start: "sākums", risk: "risks", trust: "uzticība", hesitation: "vilcināšanās", openness: "atvērtība",
      skill: "prasme", intent: "nodoms", focus: "fokuss", misuse: "ļaunprātība", execution: "izpilde",
      intuition: "intuīcija", restraint: "atturība", signal: "signāls", block: "bloks", knowing: "zināšana",
      growth: "izaugsme", care: "rūpes", support: "atbalsts", neglect: "nolaidība", abundance: "pārpilnība",
      order: "kārtība", authority: "autoritāte", structure: "struktūra", rigidity: "stīvums", control: "kontrole",
      tradition: "tradīcija", teaching: "mācība", method: "metode", rebellion: "dumpīgums", guidance: "vadība",
      values: "vērtības", union: "savienība", choice: "izvēle", misalignment: "nesaskaņa", alignment: "saskaņa",
      direction: "virziens", discipline: "disciplīna", drive: "dzinulis", drift: "novirze", progress: "progress",
      courage: "drosme", patience: "pacietība", composure: "savaldība", doubt: "šaubas", influence: "ietekme",
      solitude: "vientulība", reflection: "pārdomas", clarity: "skaidrība", withdrawal: "norobežošanās", search: "meklējums",
      change: "pārmaiņas", timing: "laiks", cycle: "cikls", resistance: "pretestība", shift: "maiņa",
      truth: "patiesība", fairness: "taisnīgums", consequence: "sekas", bias: "aizspriedums", balance: "līdzsvars",
      pause: "pauze", perspective: "perspektīva", release: "atlaišana", stall: "iestrēgums", surrender: "pieņemšana",
      ending: "noslēgums", transition: "pāreja", clinging: "pieķeršanās", renewal: "atjaunošanās",
      pace: "temps", integration: "integrācija", excess: "pārmērība", moderation: "mērenība",
      attachment: "pieķeršanās", habit: "ieradums", desire: "vēlme", bondage: "saistība",
      shock: "satricinājums", collapse: "sabrukums", avoidance: "izvairīšanās", disruption: "izjaukums",
      hope: "cerība", repair: "atjaunošana", uncertainty: "neskaidrība", instinct: "instinkts", fog: "migla", exposure: "atsegšana", mystery: "noslēpums",
      joy: "prieks", confidence: "pārliecība", delay: "kavēšanās", success: "veiksme",
      reckoning: "spriedums", call: "aicinājums", decision: "lēmums", completion: "pabeigšana", closure: "noslēgums", arrival: "nonākšana",
      opening: "atvērums", potential: "potenciāls", spark: "dzirksts", exchange: "apmaiņa", results: "rezultāti",
      consolidation: "nostiprināšana", friction: "berze", stress: "spriedze", test: "pārbaudījums",
      adjustment: "pielāgošanās", movement: "kustība", defense: "aizsardzība", strain: "spriedze",
      effort: "piepūle", resilience: "izturība", pressure: "spiediens", threshold: "slieksnis",
      culmination: "kulminācija", load: "slodze", "full weight": "pilns svars", message: "vēsts", study: "mācīšanās",
      curiosity: "zinātkāre", pursuit: "vajāšana", action: "rīcība", mastery: "meistarība", responsibility: "atbildība",
      active: "aktīvs", blocked: "bloķēts", motion: "kustība", emotion: "emocija", bond: "saikne", work: "darbs", resources: "resursi", stability: "stabilitāte",
    },
    ru: {
      start: "начало", risk: "риск", trust: "доверие", hesitation: "колебание", openness: "открытость",
      skill: "навык", intent: "намерение", focus: "фокус", misuse: "злоупотребление", execution: "исполнение",
      intuition: "интуиция", restraint: "сдержанность", signal: "сигнал", block: "блок", knowing: "знание",
      growth: "рост", care: "забота", support: "поддержка", neglect: "запущенность", abundance: "изобилие",
      order: "порядок", authority: "авторитет", structure: "структура", rigidity: "жесткость", control: "контроль",
      tradition: "традиция", teaching: "обучение", method: "метод", rebellion: "бунт", guidance: "наставление",
      values: "ценности", union: "союз", choice: "выбор", misalignment: "несовпадение", alignment: "согласованность",
      direction: "направление", discipline: "дисциплина", drive: "импульс", drift: "дрейф", progress: "прогресс",
      courage: "смелость", patience: "терпение", composure: "самообладание", doubt: "сомнение", influence: "влияние",
      solitude: "уединение", reflection: "размышление", clarity: "ясность", withdrawal: "отстранение", search: "поиск",
      change: "перемена", timing: "время", cycle: "цикл", resistance: "сопротивление", shift: "сдвиг",
      truth: "правда", fairness: "справедливость", consequence: "последствие", bias: "предвзятость", balance: "баланс",
      pause: "пауза", perspective: "перспектива", release: "отпускание", stall: "застой", surrender: "принятие",
      ending: "завершение", transition: "переход", clinging: "цепляние", renewal: "обновление",
      pace: "темп", integration: "интеграция", excess: "избыток", moderation: "умеренность",
      attachment: "привязанность", habit: "привычка", desire: "желание", bondage: "зависимость",
      shock: "шок", collapse: "обрушение", avoidance: "избегание", disruption: "разрушение",
      hope: "надежда", repair: "восстановление", uncertainty: "неясность", instinct: "инстинкт", fog: "туман", exposure: "разоблачение", mystery: "тайна",
      joy: "радость", confidence: "уверенность", delay: "задержка", success: "успех",
      reckoning: "пробуждение", call: "зов", decision: "решение", completion: "завершенность", closure: "закрытие", arrival: "прибытие",
      opening: "открытие", potential: "потенциал", spark: "искра", exchange: "обмен", results: "результаты",
      consolidation: "укрепление", friction: "трение", stress: "напряжение", test: "испытание",
      adjustment: "настройка", movement: "движение", defense: "защита", strain: "напряжение",
      effort: "усилие", resilience: "стойкость", pressure: "давление", threshold: "порог",
      culmination: "кульминация", load: "нагрузка", "full weight": "полный вес", message: "сообщение", study: "изучение",
      curiosity: "любопытство", pursuit: "преследование", action: "действие", mastery: "мастерство", responsibility: "ответственность",
      active: "активно", blocked: "заблокировано", motion: "движение", emotion: "эмоция", bond: "связь", work: "работа", resources: "ресурсы", stability: "стабильность",
    },
  };

  function getMeaning(card, reversed, language = "en") {
    if (card.arcana === "Major Arcana") {
      if (language !== "en") {
        return localizedMajorMeanings[language]?.[card.name]?.[reversed ? "reversed" : "upright"] ??
          (reversed ? card.reversed : card.upright);
      }

      return reversed ? card.reversed : card.upright;
    }

    const rankText = minorRankMeaning(card.rank, reversed, language);

    if (language === "lv" || language === "ru") {
      const topic = minorSuitTopics[language][card.suit];
      const direction = minorDirectionTranslations[language][reversed ? "reversed" : "upright"];
      return `${rankText} ${topic}. ${direction}`;
    }

    const direction = reversed
      ? "The energy is turned inward, delayed, or distorted."
      : "The energy is direct, available, and easier to act on.";

    return `${rankText} In ${card.topic}, ${direction}`;
  }

  function getApplication(card, reversed, language = "en") {
    if (language !== "en") {
      if (card.arcana === "Major Arcana") {
        return applicationTranslations[language].major[reversed ? "reversed" : "upright"];
      }

      return applicationTranslations[language].suits[card.suit][reversed ? "reversed" : "upright"];
    }

    if (card.arcana === "Major Arcana") {
      return reversed
        ? "Treat this as a sign to slow down and clean up what is off."
        : "Treat this as the main lesson or turning point in the reading.";
    }

    const suitGuidance = {
      Wands: reversed
        ? "Cut noise, pick one direction, and stop burning effort on scattered starts."
        : "Back the strongest idea and move it with clear effort instead of waiting for certainty.",
      Cups: reversed
        ? "Name the feeling directly before it leaks into decisions sideways."
        : "Trust the tone of the connection and respond with honesty rather than over-control.",
      Swords: reversed
        ? "Check assumptions, strip out exaggeration, and avoid arguing with your own projection."
        : "Use direct language, clean thinking, and let the facts do the work.",
      Pentacles: reversed
        ? "Tighten the routine, budget, or process before chasing a larger result."
        : "Favor steady execution, practical care, and work that compounds over time.",
    };

    return suitGuidance[card.suit];
  }

  function getKeywords(card, reversed, language = "en") {
    if (card.arcana === "Major Arcana") {
      return localizeKeywords(majorKeywords(card.name, reversed), language);
    }

    const suitKeywords = {
      Wands: ["drive", "motion", "risk"],
      Cups: ["emotion", "intuition", "bond"],
      Swords: ["clarity", "pressure", "decision"],
      Pentacles: ["stability", "work", "resources"],
    };

    const rankKeywords = {
      Ace: ["opening", "potential", "spark"],
      Two: ["choice", "balance", "exchange"],
      Three: ["growth", "support", "results"],
      Four: ["structure", "pause", "consolidation"],
      Five: ["friction", "stress", "test"],
      Six: ["adjustment", "movement", "support"],
      Seven: ["evaluation", "defense", "strain"],
      Eight: ["speed", "pattern", "effort"],
      Nine: ["resilience", "pressure", "threshold"],
      Ten: ["culmination", "load", "full weight"],
      Page: ["message", "study", "curiosity"],
      Knight: ["pursuit", "action", "change"],
      Queen: ["composure", "mastery", "care"],
      King: ["authority", "responsibility", "control"],
    };

    const reversalKeyword = reversed ? ["blocked"] : ["active"];
    return localizeKeywords(
      [...rankKeywords[card.rank], ...suitKeywords[card.suit], ...reversalKeyword].slice(0, 4),
      language
    );
  }

  function minorRankMeaning(rank, reversed, language = "en") {
    if (language !== "en") {
      return minorMeaningTranslations[language][rank][reversed ? "reversed" : "upright"];
    }

    const meanings = {
      Ace: {
        upright: "A new opening or clean starting point is available.",
        reversed: "The opening exists, but hesitation or poor timing is holding it back.",
      },
      Two: {
        upright: "A choice or balancing act needs a steady hand.",
        reversed: "The balance is off, and indecision is making it worse.",
      },
      Three: {
        upright: "Growth shows up through collaboration or early visible progress.",
        reversed: "Progress is uneven, or the support around it is not working well.",
      },
      Four: {
        upright: "Stability comes from structure, pause, or protecting what already works.",
        reversed: "The structure is too rigid or too weak to hold.",
      },
      Five: {
        upright: "Friction exposes the pressure point that cannot be ignored.",
        reversed: "Conflict eases, but the root issue still needs a direct response.",
      },
      Six: {
        upright: "Movement toward balance, support, or a fairer exchange is possible.",
        reversed: "Recovery is partial, and the imbalance still shows underneath.",
      },
      Seven: {
        upright: "This is a card of evaluation, defense, or pushing through resistance.",
        reversed: "Defensiveness, fatigue, or doubt makes the position harder to hold.",
      },
      Eight: {
        upright: "Speed, repetition, or strong focus drives events forward.",
        reversed: "Things snag, stall, or become repetitive without progress.",
      },
      Nine: {
        upright: "You are close to the end, but the pressure is real.",
        reversed: "Strain is leaking into fear, avoidance, or overreaction.",
      },
      Ten: {
        upright: "The suit reaches full weight, for better or worse.",
        reversed: "The weight is unsustainable, and something has to be released.",
      },
      Page: {
        upright: "A message, lesson, or early-stage opportunity is entering the picture.",
        reversed: "The signal is immature, unclear, or easy to misread.",
      },
      Knight: {
        upright: "Movement comes through pursuit, urgency, and direct action.",
        reversed: "The movement is reckless, stalled, or aimed at the wrong target.",
      },
      Queen: {
        upright: "Mature control comes from calm confidence and practiced judgment.",
        reversed: "Control slips into moodiness, distance, or overprotection.",
      },
      King: {
        upright: "Leadership, standards, and decisive responsibility shape the outcome.",
        reversed: "Authority becomes rigid, absent, or self-serving.",
      },
    };

    return reversed ? meanings[rank].reversed : meanings[rank].upright;
  }

  function localizeKeywords(keywords, language) {
    if (language === "en") {
      return keywords;
    }

    return keywords.map((keyword) => keywordTranslations[language]?.[keyword] ?? keyword);
  }

  function majorKeywords(name, reversed) {
    const map = {
      "The Fool": ["start", "risk", "trust", reversed ? "hesitation" : "openness"],
      "The Magician": ["skill", "intent", "focus", reversed ? "misuse" : "execution"],
      "The High Priestess": ["intuition", "restraint", "signal", reversed ? "block" : "knowing"],
      "The Empress": ["growth", "care", "support", reversed ? "neglect" : "abundance"],
      "The Emperor": ["order", "authority", "structure", reversed ? "rigidity" : "control"],
      "The Hierophant": ["tradition", "teaching", "method", reversed ? "rebellion" : "guidance"],
      "The Lovers": ["values", "union", "choice", reversed ? "misalignment" : "alignment"],
      "The Chariot": ["direction", "discipline", "drive", reversed ? "drift" : "progress"],
      Strength: ["courage", "patience", "composure", reversed ? "doubt" : "influence"],
      "The Hermit": ["solitude", "reflection", "clarity", reversed ? "withdrawal" : "search"],
      "Wheel of Fortune": ["change", "timing", "cycle", reversed ? "resistance" : "shift"],
      Justice: ["truth", "fairness", "consequence", reversed ? "bias" : "balance"],
      "The Hanged Man": ["pause", "perspective", "release", reversed ? "stall" : "surrender"],
      Death: ["ending", "change", "transition", reversed ? "clinging" : "renewal"],
      Temperance: ["balance", "pace", "integration", reversed ? "excess" : "moderation"],
      "The Devil": ["attachment", "habit", "desire", reversed ? "release" : "bondage"],
      "The Tower": ["shock", "truth", "collapse", reversed ? "avoidance" : "disruption"],
      "The Star": ["hope", "repair", "trust", reversed ? "doubt" : "renewal"],
      "The Moon": ["uncertainty", "instinct", "fog", reversed ? "exposure" : "mystery"],
      "The Sun": ["clarity", "joy", "confidence", reversed ? "delay" : "success"],
      Judgement: ["reckoning", "call", "renewal", reversed ? "avoidance" : "decision"],
      "The World": ["completion", "closure", "integration", reversed ? "delay" : "arrival"],
    };

    return map[name];
  }

  window.TarotDeck = {
    buildDeck,
    getApplication,
    getImageUrl,
    getKeywords,
    getMeaning,
    spreadPositions,
  };
})();
