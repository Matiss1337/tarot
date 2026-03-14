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

  function spreadPositions(size) {
    return {
      1: ["Single card"],
      3: ["Past", "Present", "Next step"],
      5: ["Current state", "Pressure", "What helps", "What changes", "Likely outcome"],
    }[size];
  }

  function getMeaning(card, reversed) {
    if (card.arcana === "Major Arcana") {
      return reversed ? card.reversed : card.upright;
    }

    const rankText = minorRankMeaning(card.rank, reversed);
    const direction = reversed
      ? "The energy is turned inward, delayed, or distorted."
      : "The energy is direct, available, and easier to act on.";

    return `${rankText} In ${card.topic}, ${direction}`;
  }

  function getApplication(card, reversed) {
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

  function getKeywords(card, reversed) {
    if (card.arcana === "Major Arcana") {
      return majorKeywords(card.name, reversed);
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
    return [...rankKeywords[card.rank], ...suitKeywords[card.suit], ...reversalKeyword].slice(0, 4);
  }

  function minorRankMeaning(rank, reversed) {
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

  function summarizeReading(cards, question) {
    if (!cards.length) {
      return "";
    }

    resetSummarySeed(
      cards
        .map((card) => `${card.name}:${card.reversed ? "r" : "u"}:${card.slotLabel || ""}`)
        .join("|") + `|${question || ""}`
    );

    const reversedCount = cards.filter((card) => card.reversed).length;
    const majorCount = cards.filter((card) => card.arcana === "Major Arcana").length;
    const suitCounts = cards.reduce((counts, card) => {
      if (card.suit) {
        counts[card.suit] = (counts[card.suit] || 0) + 1;
      }
      return counts;
    }, {});
    const rankCounts = cards.reduce((counts, card) => {
      if (card.rank) {
        counts[card.rank] = (counts[card.rank] || 0) + 1;
      }
      return counts;
    }, {});

    const dominantSuit = getDominantEntry(suitCounts);
    const repeatedRank = getDominantEntry(rankCounts);
    const patternSummaries = [
      buildMajorArcanaSummary(majorCount, cards.length),
      buildSuitSummary(dominantSuit, suitCounts, cards.length),
      buildReversalSummary(reversedCount, cards.length),
      buildRepeatedRankSummary(repeatedRank),
    ].filter(Boolean);

    const selectedPatterns = sampleMany(patternSummaries, Math.min(patternSummaries.length, 2));

    if (cards.length === 5) {
      const [currentState, pressure, help, change, outcome] = cards;

      return [
        buildFiveCardOverview(currentState, outcome, question),
        buildPressureHelpSummary(pressure, help),
        ...selectedPatterns,
        buildChangeOutcomeSummary(change, help, outcome),
      ].join(" ");
    }

    return [
      buildGeneralOverview(cards, question),
      ...selectedPatterns,
      buildGeneralAdvice(cards[cards.length - 1]),
    ].join(" ");
  }

  function dominantSuitSummary(suit) {
    return {
      Wands: "action, timing, and momentum",
      Cups: "emotion, connection, and instinct",
      Swords: "clarity, conflict, and hard decisions",
      Pentacles: "practical work, money, and stability",
    }[suit];
  }

  function getDominantEntry(counts) {
    const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);

    if (!entries.length) {
      return null;
    }

    if (entries.length > 1 && entries[0][1] === entries[1][1]) {
      return null;
    }

    return entries[0];
  }

  function buildFiveCardOverview(currentState, outcome, question) {
    const lead = question
      ? sample([
          `For "${question},"`,
          `On "${question},"`,
          `Around "${question},"`,
        ])
      : sample([
          "This five-card spread opens with",
          "The reading begins with",
          "The first movement in this spread is",
        ]);

    const stateKeyword = currentState.keywords?.[0] || "the present tone";
    const outcomeKeyword = outcome.keywords?.[0] || "the likely result";

    return sample([
      `${lead} ${currentState.name} in ${currentState.slotLabel.toLowerCase()} and leans toward ${outcome.name} in ${outcome.slotLabel.toLowerCase()}, so the story moves from ${stateKeyword} toward ${outcomeKeyword}.`,
      `${lead} ${currentState.name} names the situation now, while ${outcome.name} shows where the line of events is trying to land.`,
      `${lead} the spread starts in ${currentState.name} and resolves through ${outcome.name}, which frames the whole reading as a move from ${stateKeyword} toward ${outcomeKeyword}.`,
    ]);
  }

  function buildPressureHelpSummary(pressure, help) {
    if (pressure.arcana === "Major Arcana" || help.arcana === "Major Arcana") {
      return sample([
        `${pressure.name} describes the pressure, but ${help.name} suggests the answer is less a quick tactic and more a shift in perspective or timing.`,
        `What presses here is ${pressure.name}; what helps is ${help.name}, which makes the solution feel like a lesson to embody rather than a small fix.`,
      ]);
    }

    const relation = elementalRelationship(pressure.suit, help.suit);

    if (relation === "same") {
      return sample([
        `${pressure.name} and ${help.name} come from the same suit, so the remedy lives in the exact area where the strain is happening.`,
        `${help.name} answers ${pressure.name} on its own turf, which usually means the pressure can be handled directly rather than sidestepped.`,
      ]);
    }

    if (relation === "friendly") {
      return sample([
        `${pressure.name} meets ${help.name} through compatible elements, so the support in this spread is real if you use it consistently.`,
        `${help.name} strengthens ${pressure.name} rather than cancelling it out, which suggests the pressure is workable with the right follow-through.`,
      ]);
    }

    if (relation === "hostile") {
      return sample([
        `${pressure.name} and ${help.name} clash elementally, so the way through is not more of the same; it needs a different mode entirely.`,
        `${help.name} does not solve ${pressure.name} by force. It redirects it, which is usually a sign that the current approach is mismatched to the problem.`,
      ]);
    }

    return sample([
      `${pressure.name} and ${help.name} do not fully reinforce each other, which makes this a reading about balance rather than a single obvious answer.`,
      `${help.name} sits beside ${pressure.name} without cancelling it, so progress depends on pacing and adjustment more than a clean breakthrough.`,
    ]);
  }

  function buildMajorArcanaSummary(majorCount, total) {
    if (majorCount === 0) {
      return sample([
        "The spread is all Minor Arcana, which usually means this is still in the realm of choices, habits, and day-to-day handling rather than fate.",
        "With no Major Arcana present, the reading feels practical: important, but still shaped heavily by what you choose next.",
      ]);
    }

    if (majorCount >= Math.ceil(total / 2)) {
      return sample([
        `With ${majorCount} Major Arcana in the spread, this reads more like a genuine turning point than a passing mood.`,
        `${majorCount} Major Arcana push this beyond routine noise. The reading is pointing at a larger lesson or threshold.`,
      ]);
    }

    return sample([
      `The ${majorCount} Major Arcana card${majorCount > 1 ? "s" : ""} here act like pressure points, so a few moments in the spread carry more weight than the rest.`,
      `${majorCount} Major Arcana card${majorCount > 1 ? "s" : ""} suggest that part of this is ordinary life, but part of it has real consequence and cannot be brushed off.`,
    ]);
  }

  function buildSuitSummary(dominantSuit, suitCounts, total) {
    if (dominantSuit) {
      const [suit, count] = dominantSuit;

      if (count >= Math.ceil(total / 2)) {
        return sample([
          `${suit} dominate the spread, so the reading is strongly about ${dominantSuitSummary(suit)}.`,
          `There is a clear ${suit} emphasis, which makes ${dominantSuitSummary(suit)} the main language of the reading.`,
        ]);
      }

      return sample([
        `${suit} appear most often, so they quietly set the tone toward ${dominantSuitSummary(suit)}.`,
        `${suit} are the strongest suit here, which pulls the spread toward ${dominantSuitSummary(suit)} even when other themes show up.`,
      ]);
    }

    const suitTypes = Object.keys(suitCounts).length;

    if (suitTypes >= 3) {
      return sample([
        "No single suit takes over, so the issue is split across action, emotion, thought, and practical reality at the same time.",
        "The suits are mixed enough that this does not reduce to one theme; several layers of life are moving together here.",
      ]);
    }

    return "";
  }

  function buildReversalSummary(reversedCount, total) {
    if (reversedCount === 0) {
      return sample([
        "Everything is upright, which usually means the message is visible and the path to action is relatively direct.",
        "With no reversals, the spread reads openly. The issue may be difficult, but it is not especially hidden.",
      ]);
    }

    if (reversedCount >= Math.ceil(total / 2)) {
      return sample([
        `With ${reversedCount} reversals, the reading is heavy on delay, internal conflict, or energy that is turning inward before it can move outward.`,
        `${reversedCount} reversed cards make this feel less blocked by circumstance than tangled by resistance, timing, or mixed signals.`,
      ]);
    }

    return sample([
      `There are ${reversedCount} reversals in the spread, which adds friction without overwhelming the whole message.`,
      `${reversedCount} reversed card${reversedCount > 1 ? "s" : ""} suggest some drag in the system, but not enough to erase the forward movement.`,
    ]);
  }

  function buildRepeatedRankSummary(repeatedRank) {
    if (!repeatedRank || repeatedRank[1] < 2) {
      return "";
    }

    const [rank, count] = repeatedRank;

    return sample([
      `The repeated ${rank} energy matters here. Seeing it ${count} times puts extra emphasis on ${rankPhaseSummary(rank)}.`,
      `${count} ${rank} cards echo each other across the spread, which usually means the reading is circling the theme of ${rankPhaseSummary(rank)}.`,
    ]);
  }

  function buildChangeOutcomeSummary(change, help, outcome) {
    if (outcome.reversed) {
      return sample([
        `The cleanest advice sits in ${help.name}: ${help.application} If that is ignored, ${outcome.name} is more likely to show up as delay or drag than a clean result.`,
        `${change.name} marks the hinge point in the spread. ${help.application} That is what reduces the risk of ${outcome.name} arriving in its harder form.`,
      ]);
    }

    return sample([
      `${change.name} shows where the turn happens. The most usable guidance is in ${help.name}: ${help.application}`,
      `The route forward runs through ${change.name}, but the practical lever is still ${help.name}: ${help.application}`,
    ]);
  }

  function buildGeneralOverview(cards, question) {
    const firstCard = cards[0];
    const lastCard = cards[cards.length - 1];
    const lead = question
      ? sample([`For "${question},"`, `On "${question},"`])
      : sample(["This spread shows", "The reading points to", "The cards suggest"]);

    return sample([
      `${lead} a movement from ${firstCard.name} toward ${lastCard.name}, so the message develops rather than staying fixed in one mood.`,
      `${lead} ${firstCard.name} as the opening note and ${lastCard.name} as the later emphasis, which gives the reading a clear arc.`,
    ]);
  }

  function buildGeneralAdvice(card) {
    return sample([
      `The clearest takeaway is simple: ${card.application}`,
      `If you want one usable instruction from the spread, start here: ${card.application}`,
    ]);
  }

  function elementalRelationship(firstSuit, secondSuit) {
    if (!firstSuit || !secondSuit) {
      return "neutral";
    }

    if (firstSuit === secondSuit) {
      return "same";
    }

    const pair = [firstSuit, secondSuit].sort().join("|");

    if (pair === "Swords|Wands" || pair === "Cups|Pentacles") {
      return "friendly";
    }

    if (pair === "Cups|Wands" || pair === "Pentacles|Swords") {
      return "hostile";
    }

    return "neutral";
  }

  function rankPhaseSummary(rank) {
    return {
      Ace: "openings and first signals",
      Two: "choice and balancing",
      Three: "growth and early results",
      Four: "structure and consolidation",
      Five: "friction and testing",
      Six: "adjustment and rebalancing",
      Seven: "evaluation and resistance",
      Eight: "speed and sustained motion",
      Nine: "pressure near the threshold",
      Ten: "culmination and full weight",
      Page: "messages and early learning",
      Knight: "movement and pursuit",
      Queen: "mature control and steady care",
      King: "authority and final responsibility",
    }[rank];
  }

  let summarySeed = 1;

  function resetSummarySeed(signature) {
    summarySeed = hashString(signature);
  }

  function hashString(value) {
    let hash = 2166136261;

    for (let index = 0; index < value.length; index += 1) {
      hash ^= value.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }

    return (hash >>> 0) || 1;
  }

  function nextSummarySeed() {
    summarySeed = (Math.imul(summarySeed, 1664525) + 1013904223) >>> 0;
    return summarySeed;
  }

  function sample(list) {
    return list[nextSummarySeed() % list.length];
  }

  function sampleMany(list, count) {
    const pool = [...list];
    const picked = [];

    while (pool.length && picked.length < count) {
      const index = nextSummarySeed() % pool.length;
      picked.push(pool.splice(index, 1)[0]);
    }

    return picked;
  }

  window.TarotDeck = {
    buildDeck,
    getApplication,
    getImageUrl,
    getKeywords,
    getMeaning,
    spreadPositions,
    summarizeReading,
  };
})();
