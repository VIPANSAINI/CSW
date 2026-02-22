const kbc = [
  {
    level: 1,
    question_pa: "ਸਭ ਤੋਂ ਛੋਟੀ ਪ੍ਰਾਕ੍ਰਿਤਕ ਸੰਖਿਆ ਕਿਹੜੀ ਹੈ?",
    options_pa: ["0", "1", "-1", "2"],
    correct_answer_index: 1,
    explanation_pa: "ਪ੍ਰਾਕ੍ਰਿਤਕ ਸੰਖਿਆਵਾਂ 1 ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦੀਆਂ ਹਨ।"
  },
  {
    level: 1,
    question_pa: "ਸਭ ਤੋਂ ਛੋਟੀ ਪੂਰਨ ਸੰਖਿਆ ਕਿਹੜੀ ਹੈ?",
    options_pa: ["1", "0", "-1", "2"],
    correct_answer_index: 1,
    explanation_pa: "ਪੂਰਨ ਸੰਖਿਆਵਾਂ 0,1,2… ਹੁੰਦੀਆਂ ਹਨ।"
  },
  {
    level: 1,
    question_pa: "ਸਭ ਤੋਂ ਛੋਟੀ ਸੰਪੂਰਨ ਸੰਖਿਆ ਕਿਹੜੀ ਹੈ?",
    options_pa: ["-1", "0", "-2", "-3"],
    correct_answer_index: 2,
    explanation_pa: "ਸੰਪੂਰਨ ਸੰਖਿਆਵਾਂ ਵਿੱਚ ਸਭ ਤੋਂ ਛੋਟੀ ਸੰਖਿਆ …–3, –2, –1, 0, 1… ਵਿੱਚ –2 ਹੈ।"
  },
  {
    level: 1,
    question_pa: "ਸਭ ਤੋਂ ਵੱਡੀ ਪ੍ਰਾਕ੍ਰਿਤਕ ਸੰਖਿਆ ਕਿਹੜੀ ਹੈ?",
    options_pa: ["100", "1000", "ਅਸੀਮ", "ਕੋਈ ਨਹੀਂ"],
    correct_answer_index: 2,
    explanation_pa: "ਪ੍ਰਾਕ੍ਰਿਤਕ ਸੰਖਿਆਵਾਂ ਦੀ ਕੋਈ ਸਭ ਤੋਂ ਵੱਡੀ ਸੰਖਿਆ ਨਹੀਂ ਹੁੰਦੀ।"
  },
  {
    level: 1,
    question_pa: "ਸਭ ਤੋਂ ਵੱਡੀ ਪੂਰਨ ਸੰਖਿਆ ਕਿਹੜੀ ਹੈ?",
    options_pa: ["0", "100", "ਅਸੀਮ", "ਕੋਈ ਨਹੀਂ"],
    correct_answer_index: 2,
    explanation_pa: "ਪੂਰਨ ਸੰਖਿਆਵਾਂ ਦੀ ਕੋਈ ਵੱਧ ਤੋਂ ਵੱਡੀ ਸੰਖਿਆ ਨਹੀਂ ਹੁੰਦੀ।"
  },
  {
    level: 1,
    question_pa: "-5 ਅਤੇ -7 ਵਿੱਚੋਂ ਛੋਟੀ ਸੰਖਿਆ ਕਿਹੜੀ ਹੈ?",
    options_pa: ["-5", "-7", "-1", "0"],
    correct_answer_index: 1,
    explanation_pa: "ਨਿਗੇਟਿਵ ਸੰਖਿਆਵਾਂ ਵਿੱਚ ਜਿੰਨੀ ਹੋਰ ਨਿਗੇਟਿਵ, ਉਹਨੀ ਛੋਟੀ ਹੁੰਦੀ ਹੈ।"
  },
  {
    level: 1,
    question_pa: "13 ਦਾ ਵਰਗ ਕਿੰਨਾ ਹੁੰਦਾ ਹੈ?",
    options_pa: ["156", "169", "113", "26"],
    correct_answer_index: 1,
    explanation_pa: "13 × 13 = 169।"
  },
  {
    level: 1,
    question_pa: "15 ਦਾ ਘਣ ਕਿੰਨਾ ਹੁੰਦਾ ਹੈ?",
    options_pa: ["225", "1500", "3375", "375"],
    correct_answer_index: 2,
    explanation_pa: "15 × 15 × 15 = 3375।"
  },
  {
    level: 1,
    question_pa: "ਦੋ ਲਗਾਤਾਰ ਸੰਖਿਆਵਾਂ ਦਾ ਮ.ਸਵ. ਹਮੇਸ਼ਾ?",
    options_pa: ["1", "2", "0", "ਸੰਭਵ ਨਹੀਂ"],
    correct_answer_index: 0,
    explanation_pa: "ਲਗਾਤਾਰ ਸੰਖਿਆਵਾਂ ਇੱਕ ਦੂਜੇ ਨਾਲ ਸਹਭਾਜ ਹੁੰਦੀਆਂ ਹਨ।"
  },
  {
    level: 1,
    question_pa: "ਦੋ ਸੰਖਿਆਵਾਂ ਦੇ ਮ.ਸਵ. × ਲ.ਸਵ. = ?",
    options_pa: ["ਜੋੜ", "ਘਟਾਉ", "ਗੁਣਾ", "ਭਾਗ"],
    correct_answer_index: 2,
    explanation_pa: "ਮ.ਸਵ. × ਲ.ਸਵ. = ਦੋਨਾਂ ਸੰਖਿਆਵਾਂ ਦਾ ਗੁਣਾ।"
  },

  // LEVEL 2 QUESTIONS (11–15)
  {
    level: 2,
    question_pa: "ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜੀ ਇੱਕਲੇ ਜ਼ਿਸਤ ਅਭਾਜ ਸੰਖਿਆ ਹੈ?",
    options_pa: ["2", "4", "6", "8"],
    correct_answer_index: 0,
    explanation_pa: "2 ਇਕੱਲੀ ਜੁੜੀ ਅਭਾਜ ਸੰਖਿਆ ਹੈ।"
  },
  {
    level: 2,
    question_pa: "ਦੋ ਅਭਾਜ ਸੰਖਿਆਵਾਂ ਦਾ ਮ.ਸਵ. ਕੀ ਹੁੰਦਾ ਹੈ?",
    options_pa: ["0", "1", "2", "ਅਸੀਮ"],
    correct_answer_index: 1,
    explanation_pa: "ਅਭਾਜ ਸੰਖਿਆਵਾਂ ਵਿੱਚ ਮ.ਸਵ. ਹਮੇਸ਼ਾਂ 1 ਹੁੰਦਾ ਹੈ।"
  },
  {
    level: 2,
    question_pa: "ਦੋ ਰਾਸ਼ੀਆਂ ਦੀ ਭਾਗ ਰਾਹੀਂ ਤੁਲਨਾ ਨੂੰ ਕੀ ਕਹਿੰਦੇ ਹਨ?",
    options_pa: ["ਅਨੁਪਾਤ", "ਸਮਾਨੁਪਾਤ", "ਪੂਰਕ", "ਸੰਪੂਰਕ"],
    correct_answer_index: 0,
    explanation_pa: "ਭਾਗ ਰਾਹੀਂ ਤੁਲਨਾ ਅਨੁਪਾਤ ਕਹਾਉਂਦੀ ਹੈ।"
  },
  {
    level: 2,
    question_pa: "ਦੋ ਅਨੁਪਾਤਾਂ ਦੀ ਤੁਲਨਾ ਨੂੰ ਕੀ ਕਹਿੰਦੇ ਹਨ?",
    options_pa: ["ਅਨੁਪਾਤ", "ਸਮਾਨੁਪਾਤ", "ਚਲ", "ਅਚਲ"],
    correct_answer_index: 1,
    explanation_pa: "ਦੋ ਅਨੁਪਾਤ ਬਰਾਬਰ ਹੋਣ 'ਤੇ ਸਮਾਨੁਪਾਤ ਬਣਦਾ ਹੈ।"
  },
  {
    level: 2,
    question_pa: "ਸਮਾਨੁਪਾਤ ਵਿੱਚ ਕੁੱਲ ਪਦ ਕਿੰਨੇ ਹੁੰਦੇ ਹਨ?",
    options_pa: ["1", "2", "3", "4"],
    correct_answer_index: 3,
    explanation_pa: "a:b = c:d ਵਿੱਚ ਚਾਰ ਪਦ ਹੁੰਦੇ ਹਨ।"
  },

  // LEVEL 3 (16–20)
  {
    level: 3,
    question_pa: "ਜਿਆਦਾ ਰਾਸ਼ੀਆਂ ਤੋਂ ਇੱਕ ਰਾਸ਼ੀ ਦਾ ਮੁੱਲ ਕੱਢਣ ਵਾਲੀ ਵਿਧੀ?",
    options_pa: ["ਇਕਾਈ ਵਿਧੀ", "ਅਨੁਪਾਤ", "ਭਾਗ", "ਗੁਣਾ"],
    correct_answer_index: 0,
    explanation_pa: "ਇਕਾਈ ਵਿਧੀ ਰਾਹੀਂ ਇੱਕ ਇਕਾਈ ਦਾ ਮੁੱਲ ਕੱਢਿਆ ਜਾਂਦਾ ਹੈ।"
  },
  {
    level: 3,
    question_pa: "ਪ੍ਰਤੀਸ਼ਤ ਦਾ ਅਰਥ ਕੀ ਹੈ?",
    options_pa: ["ਪ੍ਰਤੀ 5", "ਪ੍ਰਤੀ 10", "ਪ੍ਰਤੀ ਸੈਂਕੜਾ", "ਪ੍ਰਤੀ 50"],
    correct_answer_index: 2,
    explanation_pa: "ਪ੍ਰਤੀਸੱਤ ਦਾ ਮਤਲਬ 'ਹਰ ਸੌ ਵਿੱਚੋਂ' ਹੈ।"
  },
  {
    level: 3,
    question_pa: "ਸਧਾਰਨ ਵਿਆਜ ਦਾ ਸੂਤਰ ਕੀ ਹੈ?",
    options_pa: ["ਦਰ×ਸਮਾਂ", "ਮੂਲਧਨ×ਦਰ×ਸਮਾਂ/100", "ਗੁਣਾ", "ਭਾਗ"],
    correct_answer_index: 1,
    explanation_pa: "Simple Interest = P × R × T / 100"
  },
  {
    level: 3,
    question_pa: "x – 7 = 3 ਵਿੱਚ x ਦਾ ਮੁੱਲ?",
    options_pa: ["7", "10", "3", "5"],
    correct_answer_index: 1,
    explanation_pa: "x = 3 + 7 = 10"
  },
  {
    level: 3,
    question_pa: "ਇੱਕ ਬਿੰਦੂ ਵਿੱਚੋਂ ਕਿੰਨੀਆਂ ਰੇਖਾਵਾਂ ਖਿੱਚੀਆਂ ਜਾ ਸਕਦੀਆਂ ਹਨ?",
    options_pa: ["1", "2", "5", "ਅਣਗਿਣਤ"],
    correct_answer_index: 3,
    explanation_pa: "ਇੱਕ ਬਿੰਦੂ ਵਿੱਚੋਂ ਅਣਗਿਣਤ ਰੇਖਾਵਾਂ ਲੰਘ ਸਕਦੀਆਂ ਹਨ।"
  },

  // LEVEL 4 (21–25)
  {
    level: 4,
    question_pa: "ਤਲ ਵਿੱਚ ਇੱਕ ਬਿੰਦੂ ਜਿੱਥੇ 3 ਤੋਂ ਵੱਧ ਰੇਖਾਵਾਂ ਲੰਘਦੀਆਂ ਹਨ, ਕਿਹਾ ਜਾਂਦਾ ਹੈ?",
    options_pa: ["ਕਾਟ ਬਿੰਦੂ", "ਸਮਾਂਤਰ", "ਸੰਗਾਮੀ ਬਿੰਦੂ", "ਲੰਬ"],
    correct_answer_index: 2,
    explanation_pa: "ਜਿੱਥੇ ਕਈ ਰੇਖਾਵਾਂ ਮਿਲਦੀਆਂ ਹਨ ਉਹ ਸੰਗਾਮੀ ਬਿੰਦੂ ਹੁੰਦਾ ਹੈ।"
  },
  {
    level: 4,
    question_pa: "ਜੋ ਰੇਖਾਵਾਂ ਕਦੇ ਕੱਟਦੀਆਂ ਨਹੀਂ?",
    options_pa: ["ਸਮਾਂਤਰ", "ਕਾਟਵੀਆਂ", "ਲੰਬ", "ਢਲਾਨ"],
    correct_answer_index: 0,
    explanation_pa: "ਜੋ ਰੇਖਾਵਾਂ ਇੱਕੋ ਦੂਜੇ ਤੋਂ ਹਰ ਜਗ੍ਹਾ ਇੱਕੋ ਦੂਰ ਰਹਿੰਦੀਆਂ ਹਨ ਉਹ ਸਮਾਂਤਰ ਹੁੰਦੀਆਂ ਹਨ।"
  },
  {
    level: 4,
    question_pa: "ਦੋ ਬਿੰਦੂਆਂ ਵਿੱਚੋਂ ਸਿਰਫ਼ ਕਿੰਨੀ ਰੇਖਾ ਖਿੱਚ ਸਕਦੇ ਹਾਂ?",
    options_pa: ["ਅਣਗਿਣਤ", "2", "1", "0"],
    correct_answer_index: 2,
    explanation_pa: "ਦੋ ਬਿੰਦੂਆਂ ਨੂੰ ਮਿਲਾਉਣ ਵਾਲੀ ਕੇਵਲ ਇੱਕ ਰੇਖਾ ਹੁੰਦੀ ਹੈ।"
  },
  {
    level: 4,
    question_pa: "ਰੇਖਾ ਦਾ ਜੋ ਭਾਗ ਮਾਪਿਆ ਜਾ ਸਕੇ ਉਹ ਕਿਹੜਾ ਹੈ?",
    options_pa: ["ਕਿਰਨ", "ਰੇਖਾ", "ਰੇਖਾਖੰਡ", "ਕੋਣ"],
    correct_answer_index: 2,
    explanation_pa: "ਰੇਖਾਖੰਡ ਦੀ ਲੰਬਾਈ ਨਿਰਧਾਰਤ ਅਤੇ ਮਾਪਯੋਗ ਹੁੰਦੀ ਹੈ।"
  },
  {
    level: 4,
    question_pa: "ਰੇਖਾਖੰਡ ਦੇ ਕਿੰਨੇ ਅੰਤ ਬਿੰਦੂ ਹੁੰਦੇ ਹਨ?",
    options_pa: ["0", "1", "2", "ਅਣਗਿਣਤ"],
    correct_answer_index: 2,
    explanation_pa: "ਰੇਖਾਖੰਡ ਦੋ ਅੰਤ ਬਿੰਦੂਆਂ ਵਿਚਕਾਰ ਬਣਦਾ ਹੈ।"
  },
{ level: 5, question_pa: "ਕਿੰਨੀਆਂ ਚਾਰ-ਅੰਕਾਂ ਵਾਲੀਆਂ ਸੰਖਿਆਵਾਂ ਹਨ?", options_pa: ["9999", "9900", "9000", "9990"], correct_answer_index: 2, explanation_pa: "ਕੁੱਲ ਸੰਖਿਆਵਾਂ = 9999 - 1000 + 1 = 9000।" },
{ level: 5, question_pa: "ਜੋੜਨ ਵਾਲੀ ਤਤਸਮਕ ਸੰਖਿਆ (additive identity) ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜੀ ਹੈ?", options_pa: ["0", "1", "2", "3"], correct_answer_index: 0, explanation_pa: "ਜੋੜਨ ਵਾਲੀ ਤਤਸਮਕ 0 ਹੈ, ਕਿਉਂਕਿ ਕਿਸੇ ਵੀ ਸੰਖਿਆ ਵਿੱਚ 0 ਜੋੜਨ 'ਤੇ ਸੰਖਿਆ ਉਹੀ ਰਹਿੰਦੀ ਹੈ।" },
{ level: 5, question_pa: "ਗੁਣਾਤਮਕ ਤਤਸਮਕ (multiplicative identity) ਸੰਖਿਆ ਕੀ ਹੈ?", options_pa: ["0", "1", "2", "3"], correct_answer_index: 1, explanation_pa: "ਗੁਣਾਤਮਕ ਤਤਸਮਕ 1 ਹੈ, ਕਿਉਂਕਿ ਕਿਸੇ ਵੀ ਸੰਖਿਆ ਨੂੰ 1 ਨਾਲ ਗੁਣਾ ਕਰਨ 'ਤੇ ਸੰਖਿਆ ਉਹੀ ਰਹਿੰਦੀ ਹੈ।" },
{ level: 5, question_pa: "ਸਤਾਰਾਂ ਮਿਲੀਅਨ ਚੌਵੀ ਹਜ਼ਾਰ ਚੌਂਜਾਹ ਨੂੰ ਅੰਕਾਂ ਵਿੱਚ ਕਿਵੇਂ ਲਿਖਿਆ ਜਾਂਦਾ ਹੈ?", options_pa: ["172454", "170024054", "170240054", "17024054"], correct_answer_index: 3, explanation_pa: "17 ਮਿਲੀਅਨ, 24 ਹਜ਼ਾਰ, 54 = 17,024,054।" },
{ level: 5, question_pa: "1 ਕਰੋੜ (Crore) ਕਿੰਨੇ ਮਿਲੀਅਨ (million) ਦੇ ਬਰਾਬਰ ਹੈ?", options_pa: ["1", "10", "100", "1000"], correct_answer_index: 1, explanation_pa: "1 ਕਰੋੜ ਵਿੱਚ 10 ਮਿਲੀਅਨ (10,000,000) ਹੁੰਦੇ ਹਨ।" },

  // LEVEL 6 (Q26–30)
  {
    level: 6,
    question_pa: "ਤਲ ਵਿੱਚ ਜੋ ਰੇਖਾਵਾਂ ਇੱਕ ਦੂਜੇ ਨੂੰ ਕੱਟਦੀਆਂ ਹਨ, ਉਨ੍ਹਾਂ ਨੂੰ ਕੀ ਕਹਿੰਦੇ ਹਨ?",
    options_pa: ["ਸਮਾਂਤਰ ਰੇਖਾਵਾਂ", "ਕਾਟਵੀਆਂ ਰੇਖਾਵਾਂ", "ਸੰਗਾਮੀ ਰੇਖਾਵਾਂ", "ਲੰਬ ਰੇਖਾਵਾਂ"],
    correct_answer_index: 1,
    explanation_pa: "ਜੋ ਰੇਖਾਵਾਂ ਆਪਸ ਵਿੱਚ ਕਿਸੇ ਬਿੰਦੂ 'ਤੇ ਮਿਲਦੀਆਂ ਹਨ, ਉਹ ਕਾਟਵੀਆਂ ਰੇਖਾਵਾਂ ਕਹਾਈਆਂ ਜਾਂਦੀਆਂ ਹਨ।"
  },
  {
    level: 6,
    question_pa: "ਰੇਖਾ ਦੀ ਲੰਬਾਈ ਕਿਵੇਂ ਹੁੰਦੀ ਹੈ?",
    options_pa: ["ਨਿਰਧਾਰਤ", "ਅਨਿਸ਼ਚਿਤ", "2 ਇਕਾਈ", "1 ਇਕਾਈ"],
    correct_answer_index: 1,
    explanation_pa: "ਰੇਖਾ ਦੋਨਾਂ ਪਾਸੇ ਅਨੰਤ ਤੱਕ ਫੈਲੀ ਹੁੰਦੀ ਹੈ, ਇਸ ਲਈ ਇਸ ਦੀ ਲੰਬਾਈ ਅਨਿਸ਼ਚਿਤ ਹੁੰਦੀ ਹੈ।"
  },
  {
    level: 6,
    question_pa: "ਤਲ ਵਿੱਚ ਦੋ ਬਿੰਦੂਆਂ ਵਿੱਚੋਂ ਕਿੰਨੀਆਂ ਸਾਂਝੀਆਂ ਰੇਖਾਵਾਂ ਖਿੱਚੀਆਂ ਜਾ ਸਕਦੀਆਂ ਹਨ?",
    options_pa: ["1", "2", "ਅਣਗਿਣਤ", "0"],
    correct_answer_index: 0,
    explanation_pa: "ਦੋ ਬਿੰਦੂਆਂ ਨੂੰ ਮਿਲਾਉਣ ਲਈ ਸਿਰਫ਼ ਇੱਕ ਹੀ ਰੇਖਾ ਖਿੱਚੀ ਜਾ ਸਕਦੀ ਹੈ।"
  },
  {
    level: 6,
    question_pa: "ਤਲ ਵਿੱਚ ਉਹ ਬਿੰਦੂ ਜਿਸ 'ਤੇ ਰੇਖਾਵਾਂ ਕੱਟਦੀਆਂ ਹਨ, ਕਿਹੜਾ ਹੈ?",
    options_pa: ["ਸਿਖਰ", "ਸੰਗਾਮੀ ਬਿੰਦੂ", "ਕਾਟ ਬਿੰਦੂ", "ਕੇਂਦਰ"],
    correct_answer_index: 2,
    explanation_pa: "ਰੇਖਾਵਾਂ ਜਿੱਥੇ ਮਿਲਦੀਆਂ ਹਨ, ਉਸ ਨੂੰ ਕਾਟ ਬਿੰਦੂ ਕਹਿੰਦੇ ਹਨ।"
  },
  {
    level: 6,
    question_pa: "ਜੇ ਇੱਕ ਬਿੰਦੂ ਵਿੱਚੋਂ ਤਿੰਨ ਤੋਂ ਵੱਧ ਰੇਖਾਵਾਂ ਲੰਘਦੀਆਂ ਹਨ, ਉਹ ਰੇਖਾਵਾਂ ਕਹਾਉਂਦੀਆਂ ਹਨ?",
    options_pa: ["ਸਮਾਂਤਰ", "ਸੰਗਾਮੀ ਰੇਖਾਵਾਂ", "ਲੰਬ ਰੇਖਾਵਾਂ", "ਢਲਾਨ ਰੇਖਾਵਾਂ"],
    correct_answer_index: 1,
    explanation_pa: "ਇੱਕ ਬਿੰਦੂ ਵਿੱਚੋਂ ਤਿੰਨ ਤੋਂ ਵੱਧ ਰੇਖਾਵਾਂ ਲੰਘਣ 'ਤੇ ਉਹ ਸੰਗਾਮੀ ਰੇਖਾਵਾਂ ਬਣਦੀਆਂ ਹਨ।"
  },

  // LEVEL 7 (Q31–35)
  {
    level: 7,
    question_pa: "ਕਿਰਨ ਦੀ ਲੰਬਾਈ ਕਿਵੇਂ ਹੁੰਦੀ ਹੈ?",
    options_pa: ["ਨਿਰਧਾਰਤ", "ਅਨਿਸ਼ਚਿਤ", "ਕੇਵਲ 1 ਇਕਾਈ", "ਬਦਲਦੀ"],
    correct_answer_index: 1,
    explanation_pa: "ਕਿਰਨ ਇਕ ਬਿੰਦੂ ਤੋਂ ਸ਼ੁਰੂ ਹੋ ਕੇ ਇੱਕ ਪਾਸੇ ਅਨੰਤ ਤੱਕ ਜਾਂਦੀ ਹੈ, ਇਸ ਲਈ ਇਸ ਦੀ ਲੰਬਾਈ ਅਨਿਸ਼ਚਿਤ ਹੈ।"
  },
  {
    level: 7,
    question_pa: "ਕਿਰਨ ਦੇ ਆਰੰਭਿਕ ਬਿੰਦੂ ਕਿੰਨੇ ਹੁੰਦੇ ਹਨ?",
    options_pa: ["0", "1", "2", "ਅਣਗਿਣਤ"],
    correct_answer_index: 1,
    explanation_pa: "ਕਿਰਨ ਹਮੇਸ਼ਾ ਇੱਕ ਹੀ ਆਰੰਭਿਕ ਬਿੰਦੂ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦੀ ਹੈ।"
  },
  {
    level: 7,
    question_pa: "ਦੋ ਕਿਰਨਾਂ ਨਾਲ ਬਣਦਾ ਚਿੱਤਰ ਕੀ ਹੁੰਦਾ ਹੈ?",
    options_pa: ["ਰੇਖਾ", "ਰੇਖਾਖੰਡ", "ਕੋਣ", "ਤਿਕੋਣ"],
    correct_answer_index: 2,
    explanation_pa: "ਦੋ ਕਿਰਨਾਂ ਇੱਕੇ ਬਿੰਦੂ ਤੋਂ ਸ਼ੁਰੂ ਹੋ ਕੇ ਇੱਕ ਕੋਣ ਬਣਾਉਂਦੀਆਂ ਹਨ।"
  },
  {
    level: 7,
    question_pa: "ਰੇਖਾਖੰਡ ਦੇ ਕਿੰਨੇ ਅੰਤ ਬਿੰਦੂ ਹੁੰਦੇ ਹਨ?",
    options_pa: ["0", "1", "2", "3"],
    correct_answer_index: 2,
    explanation_pa: "ਰੇਖਾਖੰਡ ਦੋ ਨਿਰਧਾਰਤ ਬਿੰਦੂਆਂ ਦੇ ਵਿਚਕਾਰ ਹੁੰਦਾ ਹੈ, ਇਸ ਲਈ ਇਸ ਦੇ 2 ਅੰਤ ਬਿੰਦੂ ਹਨ।"
  },
  {
    level: 7,
    question_pa: "ਕੋਣ ਦੀਆਂ ਕਿੰਨੀਆਂ ਕਿਸਮਾਂ ਹੁੰਦੀਆਂ ਹਨ?",
    options_pa: ["2", "3", "4", "5"],
    correct_answer_index: 1,
    explanation_pa: "ਮੁੱਖ ਤੌਰ 'ਤੇ ਤਿੰਨ ਕਿਸਮਾਂ ਦੇ ਕੋਣ ਹੁੰਦੇ ਹਨ: ਨਿਊਨ, ਸਮਕੋਣ, ਅਧਿਕ।"
  },

  // LEVEL 8 (Q36–40)
  {
    level: 8,
    question_pa: "ਰੇਖੀ ਜੋੜਾ ਕੋਣ ਕਿੰਨੇ ਡਿਗਰੀ ਦਾ ਹੁੰदा ਹੈ?",
    options_pa: ["90°", "120°", "180°", "360°"],
    correct_answer_index: 2,
    explanation_pa: "ਰੇਖੀ ਜੋੜੇ ਦੇ ਦੋ ਕੋਣ ਇੱਕ ਸਿੱਧੀ ਰੇਖਾ ਬਣਾਉਂਦੇ ਹਨ, ਇਸ ਲਈ 180°।"
  },
  {
    level: 8,
    question_pa: "ਸਿਖਰ ਸਨਮੁਖ ਕੋਣ ਕਿਹੋ ਜਿਹੇ ਹੁੰਦੇ ਹਨ?",
    options_pa: ["ਸਮਾਨ", "ਅਸਮਾਨ", "ਕੋਈ ਨਹੀਂ", "ਬਦਲਦੇ"],
    correct_answer_index: 0,
    explanation_pa: "ਸਿਖਰ ਸਨਮੁਖ ਕੋਣ ਹਮੇਸ਼ਾਂ ਇੱਕੋ ਮਾਪ ਦੇ ਹੁੰਦੇ ਹਨ।"
  },
  {
    level: 8,
    question_pa: "ਜਿਨ੍ਹਾਂ ਕੋਣਾਂ ਦਾ ਜੋੜ 90° ਹੋਵੇ, ਉਹ ਕਿਹੜੇ ਕਹਾਉਂਦੇ ਹਨ?",
    options_pa: ["ਸੰਪੂਰਕ ਕੋਣ", "ਪੂਰਕ ਕੋਣ", "ਰੇਖੀ ਕੋਣ", "ਨਿਊਨ ਕੋਣ"],
    correct_answer_index: 1,
    explanation_pa: "ਜੇ ਦੋ ਕੋਣਾਂ ਦਾ ਜੋੜ 90° ਹੋਵੇ ਤਾਂ ਉਹ ਪੂਰਕ ਕੋਣ ਹਨ।"
  },
  {
    level: 8,
    question_pa: "ਜਿਨ੍ਹਾਂ ਕੋਣਾਂ ਦਾ ਜੋੜ 180° ਹੋਵੇ, ਉਹ ਕਿਹੜੇ ਕਹਾਉਂਦੇ ਹਨ?",
    options_pa: ["ਪੂਰਕ ਕੋਣ", "ਸੰਪੂਰਕ ਕੋਣ", "ਅਧਿਕ ਕੋਣ", "ਸਿਖਰ ਕੋਣ"],
    correct_answer_index: 1,
    explanation_pa: "180° ਵਾਲੇ ਦੋ ਕੋਣ ਸੰਪੂਰਕ ਕੋਣ ਕਹਾਉਂਦੇ ਹਨ।"
  },
  {
    level: 8,
    question_pa: "ਪੂਰਕ ਕੋਣਾਂ ਦੇ ਬਰਾਬਰ ਵਾਲਾ ਕੋਣ ਕਿੰਨੇ ਡਿਗਰੀ ਦਾ ਹੁੰਦਾ ਹੈ?",
    options_pa: ["30°", "45°", "60°", "180°"],
    correct_answer_index: 1,
    explanation_pa: "ਜੇ ਕੋਣ ਆਪਣੇ ਪੂਰਕ ਦੇ ਬਰਾਬਰ ਹੋਵੇ ਤਾਂ ਉਹ 45° ਹੁੰਦਾ ਹੈ, ਕਿਉਂਕਿ 45° + 45° = 90°।"
  },

  // LEVEL 9 (Q41–45)
  {
    level: 9,
    question_pa: "ਸੰਪੂਰਕ ਕੋਣਾਂ ਦੇ ਬਰਾਬਰ ਵਾਲਾ ਕੋਣ ਕਿੰਨੇ ਡਿਗਰੀ ਦਾ ਹੁੰਦਾ ਹੈ?",
    options_pa: ["60°", "90°", "45°", "120°"],
    correct_answer_index: 1,
    explanation_pa: "ਜੇ ਕੋਣ ਆਪਣੇ ਸੰਪੂਰਕ ਦੇ ਬਰਾਬਰ ਹੋਵੇ ਤਾਂ ਉਹ 90° ਹੁੰਦਾ ਹੈ, ਕਿਉਂਕਿ 90° + 90° = 180°।"
  },
  {
    level: 9,
    question_pa: "ਕੀ ਦੋ ਅਧਿਕ ਕੋਣ ਸੰਪੂਰਕ ਹੋ ਸਕਦੇ ਹਨ?",
    options_pa: ["ਹਾਂ", "ਨਹੀਂ", "ਕਦੇ-ਕਦੇ", "ਨਿਰਭਰ ਕਰਦਾ ਹੈ"],
    correct_answer_index: 1,
    explanation_pa: "ਅਧਿਕ ਕੋਣ 90° ਤੋਂ ਵੱਧ ਹੁੰਦੇ ਹਨ, ਇਸ ਲਈ ਦੋ ਅਧਿਕ ਕੋਣ 180° ਨਹੀਂ ਬਣਾ ਸਕਦੇ।"
  },
  {
    level: 9,
    question_pa: "ਕੀ ਦੋ ਨਿਊਨ ਕੋਣ ਸੰਪੂਰਕ ਹੋ ਸਕਦੇ ਹਨ?",
    options_pa: ["ਹਾਂ", "ਨਹੀਂ", "ਕਦੇ-ਕਦੇ", "ਹਮੇਸ਼ਾਂ"],
    correct_answer_index: 1,
    explanation_pa: "ਦੋ ਨਿਊਨ ਕੋਣ (ਹਰੇਕ < 90°) ਮਿਲ ਕੇ 180° ਨਹੀਂ ਬਣਾਉਂਦੇ।"
  },
  {
    level: 9,
    question_pa: "ਕੀ ਦੋ ਨਿਊਨ ਕੋਣ ਪੂਰਕ ਹੋ ਸਕਦੇ ਹਨ?",
    options_pa: ["ਹਾਂ", "ਨਹੀਂ", "ਕਦੇ-ਕਦੇ", "ਹਮੇਸ਼ਾਂ"],
    correct_answer_index: 0,
    explanation_pa: "ਦੋ ਨਿਊਨ ਕੋਣ ਮਿਲ ਕੇ 90° ਬਣਾ ਸਕਦੇ ਹਨ।"
  },
  {
    level: 9,
    question_pa: "ਦੋ ਕਾਟਵੀਆਂ ਰੇਖਾਵਾਂ ਵਿੱਚ ਦੂਰੀ ਕਿਹੋ ਜਿਹੀ ਹੁੰਦੀ ਹੈ?",
    options_pa: ["ਸਮਾਨ", "ਹਰ ਥਾਂ ਇੱਕੋ ਜਿਹੀ", "ਨਿਰਧਾਰਤ ਨਹੀਂ", "ਅਨੰਤ"],
    correct_answer_index: 2,
    explanation_pa: "ਕਾਟਵੀਆਂ ਰੇਖਾਵਾਂ ਇੱਕ ਥਾਂ ਮਿਲਦੀਆਂ ਹਨ, ਫਿਰ ਇੱਕ-ਦੂਜੇ ਤੋਂ ਦੂਰ ਜਾਂਦੀਆਂ ਹਨ, ਇਸ ਲਈ ਦੂਰੀ ਨਿਰਧਾਰਤ ਨਹੀਂ।"
  },

  // LEVEL 10 (Q46–50)
  {
    level: 10,
    question_pa: "ਦੋ ਸਮਾਂਤਰ ਰੇਖਾਵਾਂ ਵਿੱਚ ਦੂਰੀ ਕਿਹੋ ਜਿਹੀ ਹੁੰਦੀ ਹੈ?",
    options_pa: ["ਬਦਲਦੀ", "ਅਨਿਸ਼ਚਿਤ", "ਹਰ ਸਥਾਨ 'ਤੇ ਸਮਾਨ", "ਕਦੇ-ਕਦੇ ਸਮਾਨ"],
    correct_answer_index: 2,
    explanation_pa: "ਸਮਾਂਤਰ ਰੇਖਾਵਾਂ ਹਰ ਸਥਾਨ 'ਤੇ ਇੱਕੋ ਦੂਰੀ 'ਤੇ ਰਹਿੰਦੀਆਂ ਹਨ।"
  },
  {
    level: 10,
    question_pa: "ਤਿਕੋਣ ਦੇ ਕਿੰਨੇ ਸਿਖਰ ਹੁੰਦੇ ਹਨ?",
    options_pa: ["2", "3", "4", "5"],
    correct_answer_index: 1,
    explanation_pa: "ਤਿਕੋਣ ਤਿੰਨ ਸਿਖਰਾਂ ਤੋਂ ਬਣਦਾ ਹੈ।"
  },
  {
    level: 10,
    question_pa: "ਤਿਕੋਣ ਦੇ ਕਿੰਨੇ ਕੋਣ ਹੁੰਦੇ ਹਨ?",
    options_pa: ["2", "3", "4", "5"],
    correct_answer_index: 1,
    explanation_pa: "ਤਿਕੋਣ ਦੇ ਤਿੰਨ ਅੰਦਰੂਨੀ ਕੋਣ ਹੁੰਦੇ ਹਨ।"
  },
  {
    level: 10,
    question_pa: "ਤਿਕੋਣ ਦੀਆਂ ਕਿੰਨੀਆਂ ਭੁਜਾਵਾਂ ਹੁੰਦੀਆਂ ਹਨ?",
    options_pa: ["2", "3", "4", "5"],
    correct_answer_index: 1,
    explanation_pa: "ਤਿਕੋਣ ਤਿੰਨ ਭੁਜਾਵਾਂ ਤੋਂ ਬਣਦਾ ਹੈ।"
  },
  {
    level: 10,
    question_pa: "ਤਿਕੋਣ ਦੇ ਤਿੰਨੋਂ ਕੋਣਾਂ ਦਾ ਜੋੜ ਕਿੰਨਾ ਹੁੰਦਾ ਹੈ?",
    options_pa: ["90°", "120°", "180°", "360°"],
    correct_answer_index: 2,
    explanation_pa: "ਹਰ ਤਿਕੋਣ ਦੇ ਅੰਦਰੂਨੀ ਕੋਣਾਂ ਦਾ ਜੋੜ ਹਮੇਸ਼ਾਂ 180° ਹੁੰਦਾ ਹੈ।"
  },

  // LEVEL 11 (Q51–55)
  {
    level: 11,
    question_pa: "ਤਿਕੋਣ ਦੀਆਂ ਕਿੰਨੀਆਂ ਭੁਜਾਵਾਂ ਹੁੰਦੀਆਂ ਹਨ?",
    options_pa: ["2", "3", "4", "5"],
    correct_answer_index: 1,
    explanation_pa: "ਤਿਕੋਣ ਦੀ ਪਰਿਭਾਸ਼ਾ ਅਨੁਸਾਰ ਇਸ ਵਿੱਚ 3 ਭੁਜਾਵਾਂ ਹੁੰਦੀਆਂ ਹਨ।"
  },
  {
    level: 11,
    question_pa: "ਤਿਕੋਣ ਦੇ ਕੋਣਾਂ ਦਾ ਜੋੜ ਕਿੰਨਾ ਹੁੰਦਾ ਹੈ?",
    options_pa: ["90°", "120°", "180°", "270°"],
    correct_answer_index: 2,
    explanation_pa: "ਕਿਸੇ ਵੀ ਤਿਕੋਣ ਦੇ ਅੰਦਰੂਨੀ ਤਿੰਨ ਕੋਣਾਂ ਦਾ ਜੋੜ ਹਮੇਸ਼ਾਂ 180° ਹੁੰਦਾ ਹੈ।"
  },
  {
    level: 11,
    question_pa: "ਭੁਜਾਵਾਂ ਦੇ ਅਧਾਰ ਤੇ ਤਿਕੋਣ ਦੀਆਂ ਕਿਸਮਾਂ ਕਿੰਨੀਆਂ ਹਨ?",
    options_pa: ["2", "3", "4", "5"],
    correct_answer_index: 1,
    explanation_pa: "ਭੁਜਾਵਾਂ ਦੇ ਅਧਾਰ ਤੇ ਤਿਕੋਣ ਤਿੰਨ ਕਿਸਮਾਂ ਦੇ ਹੁੰਦੇ ਹਨ: ਸਮਭੁਜ, ਸਮਦੋਭੁਜ, ਵਿਸਮਭੁਜ।"
  },
  {
    level: 11,
    question_pa: "ਕੋਣਾਂ ਦੇ ਅਧਾਰ ਤੇ ਤਿਕੋਣ ਦੀਆਂ ਕਿਸਮਾਂ ਕਿੰਨੀਆਂ ਹਨ?",
    options_pa: ["2", "3", "4", "5"],
    correct_answer_index: 1,
    explanation_pa: "ਕੋਣਾਂ ਦੇ ਅਧਾਰ ਤੇ ਤਿਕੋਣ ਨਿਊਨ, ਸਮਕੋਣ ਅਤੇ ਅਧਿਕ ਤਿਕੋਣ ਹੁੰਦੇ ਹਨ।"
  },
  {
    level: 11,
    question_pa: "ਤਿਕੋਣ ਦੀਆਂ ਦੋ ਭੁਜਾਵਾਂ ਦਾ ਜੋੜ ਤੀਸਰੀ ਭੁਜਾ ਨਾਲ ਕਿਹੋ ਜਿਹਾ ਹੁੰਦਾ ਹੈ?",
    options_pa: ["ਛੋਟਾ", "ਵੱਡਾ", "ਬਰਾਬਰ", "ਕਦੇ ਛੋਟਾ ਕਦੇ ਵੱਡਾ"],
    correct_answer_index: 1,
    explanation_pa: "ਤਿਕੋਣ ਅਸਮਤਾ ਨਿਯਮ ਅਨੁਸਾਰ ਦੋ ਭੁਜਾਵਾਂ ਦਾ ਜੋੜ ਹਮੇਸ਼ਾਂ ਤੀਸਰੀ ਭੁਜਾ ਤੋਂ ਵੱਡਾ ਹੁੰਦਾ ਹੈ।"
  },

  // LEVEL 12 (Q56–60)
  {
    level: 12,
    question_pa: "ਚੱਕਰ ਦੇ ਸਾਰੇ ਅਰਧ-ਵਿਆਸ ਕਿਹੋ ਜਿਹੇ ਹੁੰਦੇ ਹਨ?",
    options_pa: ["ਅਲੱਗ", "ਛੋਟੇ-ਵੱਡੇ", "ਸਮਾਨ", "ਕਦੇ ਸਮਾਨ"],
    correct_answer_index: 2,
    explanation_pa: "ਚੱਕਰ ਵਿੱਚ ਹਰ ਅਰਧ-ਵਿਆਸ ਕੇਂਦਰ ਤੋਂ ਘੇਰੇ ਤੱਕ ਇਕੋ ਦੂਰੀ ਦਾ ਹੁੰਦਾ ਹੈ।"
  },
  {
    level: 12,
    question_pa: "ਚੱਕਰ ਦਾ ਵਿਆਸ ਅਰਧ-ਵਿਆਸ ਤੋਂ ਕਿੰਨਾ ਹੁੰਦਾ ਹੈ?",
    options_pa: ["ਅੱਧਾ", "ਬਰਾਬਰ", "ਦੁਗਣਾ", "ਨਿਰਭਰ ਕਰਦਾ ਹੈ"],
    correct_answer_index: 2,
    explanation_pa: "ਵਿਆਸ = 2 × ਅਰਧ-ਵਿਆਸ।"
  },
  {
    level: 12,
    question_pa: "ਚੱਕਰ ਦੇ ਘੇਰੇ ਉੱਤੇ ਦੋ ਬਿੰਦੂਆਂ ਨੂੰ ਮਿਲਾਉਣ ਵਾਲਾ ਰੇਖਾਖੰਡ ਕਿਹੜਾ ਹੈ?",
    options_pa: ["ਅਰਧ-ਵਿਆਸ", "ਵਿਆਸ", "ਜੀਵਾ", "ਕੋਣ"],
    correct_answer_index: 2,
    explanation_pa: "ਘੇਰੇ ਉੱਤੇ ਦੋ ਬਿੰਦੂਆਂ ਨੂੰ ਮਿਲਾਉਣ ਵਾਲੀ ਰੇਖਾ ਨੂੰ ਜੀਵਾ ਕਹਿੰਦੇ ਹਨ।"
  },
  {
    level: 12,
    question_pa: "ਜੀਵਾ ਚੱਕਰ ਨੂੰ ਕਿੰਨੇ ਭਾਗਾਂ ਵਿੱਚ ਵੰਡਦੀ ਹੈ?",
    options_pa: ["1", "2", "3", "ਅਣਗਿਣਤ"],
    correct_answer_index: 1,
    explanation_pa: "ਜੀਵਾ ਚੱਕਰ ਨੂੰ ਹਮੇਸ਼ਾਂ 2 ਭਾਗਾਂ ਵਿੱਚ ਵੰਡਦੀ ਹੈ।"
  },
  {
    level: 12,
    question_pa: "ਉਹ ਚੱਕਰ ਜਿਨ੍ਹਾਂ ਦਾ ਇੱਕੋ ਕੇਂਦਰ ਹੋਵੇ, ਕਿਹੜੇ ਕਹਾਉਂਦੇ ਹਨ?",
    options_pa: ["ਸਮਵਿਆਸੀ", "ਸਮਰੂਪ", "ਸਮਕੇਂਦਰੀ", "ਸਮਭੁਜ"],
    correct_answer_index: 2,
    explanation_pa: "ਇੱਕੋ ਕੇਂਦਰ ਵਾਲੇ ਚੱਕਰਾਂ ਨੂੰ ਸਮਕੇਂਦਰੀ ਚੱਕਰ ਕਹਿੰਦੇ ਹਨ।"
  },

  // LEVEL 13 (Q61–65)
  {
    level: 13,
    question_pa: "ਚੱਕਰ ਦੀ ਸਭ ਤੋਂ ਵੱਡੀ ਜੀਵਾ ਕਿਹੜੀ ਹੁੰਦੀ ਹੈ?",
    options_pa: ["ਅਰਧ-ਵਿਆਸ", "ਵਿਆਸ", "ਕੇਂਦਰ", "ਕੋਣ"],
    correct_answer_index: 1,
    explanation_pa: "ਵਿਆਸ ਚੱਕਰ ਦੀ ਸਭ ਤੋਂ ਵੱਡੀ ਜੀਵਾ ਹੁੰਦਾ ਹੈ।"
  },
  {
    level: 13,
    question_pa: "ਕਿਸੇ ਬੰਦ ਚਿੱਤਰ ਦੀ ਸੀਮਾ ਦੀ ਲੰਬਾਈ ਨੂੰ ਕੀ ਕਹਿੰਦੇ ਹਨ?",
    options_pa: ["ਖੇਤਰਫਲ", "ਘੇਰਾ ਜਾਂ ਪਰਿਮਾਪ", "ਉਚਾਈ", "ਚੌੜਾਈ"],
    correct_answer_index: 1,
    explanation_pa: "ਬੰਦ ਚਿੱਤਰ ਦੀ ਬਾਹਰੀ ਲਾਈਨ ਨੂੰ ਘੇਰਾ ਜਾਂ ਪਰਿਮਾਪ ਕਹਿੰਦੇ ਹਨ।"
  },
  {
    level: 13,
    question_pa: "ਜਿਸ ਚਿੱਤਰ ਦੀਆਂ ਸਨਮੁਖ ਭੁਜਾਵਾਂ ਸਮਾਨ ਅਤੇ ਹਰ ਕੋਣ 90° ਹੋਵੇ ਉਹ ਕਿਹੜਾ ਹੈ?",
    options_pa: ["ਵਰਗ", "ਆਇਤ", "ਤਿਕੋਣ", "ਚੱਕਰ"],
    correct_answer_index: 1,
    explanation_pa: "ਆਇਤ ਵਿੱਚ ਸਨਮੁਖ ਭੁਜਾਵਾਂ ਸਮਾਨ ਅਤੇ ਚਾਰਾਂ ਕੋਣ 90° ਹੁੰਦੇ ਹਨ।"
  },
  {
    level: 13,
    question_pa: "ਜਿਸ ਚਿੱਤਰ ਦੀਆਂ ਸਾਰੀਆਂ ਭੁਜਾਵਾਂ ਸਮਾਨ ਅਤੇ ਹਰ ਕੋਣ 90° ਹੋਵੇ, ਉਹ ਕਿਹੜਾ ਹੈ?",
    options_pa: ["ਆਇਤ", "ਵਰਗ", "ਚਤੁਰਭੁਜ", "ਤਿਕੋਣ"],
    correct_answer_index: 1,
    explanation_pa: "ਵਰਗ ਵਿੱਚ ਚਾਰਾਂ ਭੁਜਾਵਾਂ ਸਮਾਨ ਅਤੇ ਚਾਰਾਂ ਕੋਣ 90° ਹੁੰਦੇ ਹਨ।"
  },
  {
    level: 13,
    question_pa: "ਕਿਸੇ ਚਿੱਤਰ ਦੁਆਰਾ ਘਿਰੇ ਖੇਤਰ ਨੂੰ ਕੀ ਕਹਿੰਦੇ ਹਨ?",
    options_pa: ["ਪਰਿਮਾਪ", "ਖੇਤਰਫਲ", "ਉਚਾਈ", "ਚੌੜਾਈ"],
    correct_answer_index: 1,
    explanation_pa: "ਬੰਦ ਚਿੱਤਰ ਦੁਆਰਾ ਘਿਰੇ ਅੰਦਰਲੇ ਹਿੱਸੇ ਨੂੰ ਖੇਤਰਫਲ ਕਹਿੰਦੇ ਹਨ।"
  },

  // LEVEL 14 (Q66–70)
  {
    level: 14,
    question_pa: "ਆਇਤ ਦੇ ਘੇਰੇ ਦਾ ਸੂਤਰ ਕੀ ਹੈ?",
    options_pa: ["4 × ਭੁਜਾ", "ਲੰਬਾਈ × ਚੌੜਾਈ", "2(ਲੰਬਾਈ + ਚੌੜਾਈ)", "ਭੁਜਾ × ਭੁਜਾ"],
    correct_answer_index: 2,
    explanation_pa: "ਆਇਤ ਦਾ ਪਰਿਮਾਪ = 2(ਲੰਬਾਈ + ਚੌੜਾਈ)।"
  },
  {
    level: 14,
    question_pa: "ਵਰਗ ਦੇ ਘੇਰੇ ਦਾ ਸੂਤਰ ਕੀ ਹੈ?",
    options_pa: ["ਭੁਜਾ × ਭੁਜਾ", "4 × ਭੁਜਾ", "ਲੰਬਾਈ + ਚੌੜਾਈ", "2 × ਭੁਜਾ"],
    correct_answer_index: 1,
    explanation_pa: "ਵਰਗ ਦਾ ਘੇਰਾ: 4 × ਭੁਜਾ।"
  },
  {
    level: 14,
    question_pa: "ਆਇਤ ਦੇ ਖੇਤਰਫਲ ਦਾ ਸੂਤਰ ਕੀ ਹੈ?",
    options_pa: ["ਲੰਬਾਈ × ਚੌੜਾਈ", "4 × ਭੁਜਾ", "2(ਲੰਬਾਈ + ਚੌੜਾਈ)", "ਅਰਧ-ਵਿਆਸ × 2"],
    correct_answer_index: 0,
    explanation_pa: "ਆਇਤ ਦਾ ਖੇਤਰਫਲ ਲੰਬਾਈ × ਚੌੜਾਈ ਹੁੰਦਾ ਹੈ।"
  },
  {
    level: 14,
    question_pa: "ਵਰਗ ਦੇ ਖੇਤਰਫਲ ਦਾ ਸੂਤਰ ਕੀ ਹੈ?",
    options_pa: ["ਭੁਜਾ × ਭੁਜਾ", "4 × ਭੁਜਾ", "ਲੰਬਾਈ × ਚੌੜਾਈ", "2 × ਭੁਜਾ"],
    correct_answer_index: 0,
    explanation_pa: "ਵਰਗ ਦਾ ਖੇਤਰਫਲ = ਭੁਜਾ × ਭੁਜਾ।"
  },
  {
    level: 14,
    question_pa: "ਜੇ ਤਿਕੋਣ ਦੇ ਸਾਰੇ ਕੋਣ ਬਰਾਬਰ ਹੋਣ ਤਾਂ ਹਰੇਕ ਕੋਣ ਕਿੰਨੇ ਡਿਗਰੀ ਦਾ ਹੁੰਦਾ ਹੈ?",
    options_pa: ["30°", "45°", "60°", "90°"],
    correct_answer_index: 2,
    explanation_pa: "ਸਮਭੁਜ ਤਿਕੋਣ ਵਿੱਚ ਹਰੇਕ ਕੋਣ 60° ਦਾ ਹੁੰਦਾ ਹੈ।"
  },

  // LEVEL 15 (Q71–75)
  {
    level: 15,
    question_pa: "ਜੇ ਤਿਕੋਣ ਦੇ ਦੋ ਕੋਣ ਪੂਰਕ ਹੋਣ ਤਾਂ ਤਿਕੋਣ ਕਿਸ ਕਿਸਮ ਦਾ ਹੁੰਦਾ ਹੈ?",
    options_pa: ["ਸਮਭੁਜ", "ਅਧਿਕ", "ਸਮਕੋਣ", "ਨਿਊਨ"],
    correct_answer_index: 2,
    explanation_pa: "ਜੇ ਦੋ ਕੋਣਾਂ ਦਾ ਜੋੜ 90° ਹੋਵੇ ਤਾਂ ਤਿਕੋਣ ਸਮਕੋਣ ਤਿਕੋਣ ਹੁੰਦਾ ਹੈ।"
  },
  {
    level: 15,
    question_pa: "ਸਮਕੋਣ ਤਿਕੋਣ ਵਿੱਚ ਸਮਕੋਣ ਦੇ ਸਾਹਮਣੀ ਭੁਜਾ ਕਿਹੜੀ ਹੁੰਦੀ ਹੈ?",
    options_pa: ["ਲੰਬ", "ਅਧਰ", "ਕਰਣ", "ਰੇਖਾ"],
    correct_answer_index: 2,
    explanation_pa: "ਸਮਕੋਣ ਤਿਕੋਣ ਵਿੱਚ 90° ਕੋਣ ਦੇ ਸਾਹਮਣੀ ਭੁਜਾ ਕਰਣ ਹੁੰਦੀ ਹੈ।"
  },
  {
    level: 15,
    question_pa: "ਸਮਭੁਜੀ ਤਿਕੋਣ ਵਿੱਚ ਕਿੰਨੀਆਂ ਭੁਜਾਵਾਂ ਬਰਾਬਰ ਹੁੰਦੀਆਂ ਹਨ?",
    options_pa: ["1", "2", "3", "4"],
    correct_answer_index: 2,
    explanation_pa: "ਸਮਭੁਜੀ ਤਿਕੋਣ ਵਿੱਚ ਤਿੰਨੋਂ ਭੁਜਾਵਾਂ ਬਰਾਬਰ ਹੁੰਦੀਆਂ ਹਨ।"
  },
  {
    level: 15,
    question_pa: "ਸਮਦੋਭੁਜੀ ਤਿਕੋਣ ਵਿੱਚ ਕਿਹੜੇ ਕੋਣ ਬਰਾਬਰ ਹੁੰਦੇ ਹਨ?",
    options_pa: ["ਅਧਰ ਦੇ ਕੋਣ", "ਸਿਖਰ ਦੇ ਕੋਣ", "ਬਰਾਬਰ ਭੁਜਾਵਾਂ ਦੇ ਸਨਮੁਖ ਕੋਣ", " ਕੋਈ ਨਹੀਂ"],
    correct_answer_index: 2,
    explanation_pa: "ਸਮਦੋਭੁਜੀ ਤਿਕੋਣ ਵਿੱਚ ਬਰਾਬਰ ਭੁਜਾਵਾਂ ਦੇ ਸਨਮੁਖ ਕੋਣ ਵੀ ਬਰਾਬਰ ਹੁੰਦੇ ਹਨ।"
  },
  {
    level: 15,
    question_pa: "ਸਮਾਂਤਰ ਰੇਖਾਵਾਂ ਤੇ ਕਾਟਵੀਂ ਰੇਖਾ ਨਾਲ ਕਿਹੜੇ ਕੋਣ ਬਰਾਬਰ ਬਣਦੇ ਹਨ?",
    options_pa: ["ਪੂਰਕ", "ਸਿੱਧੇ", "ਸੰਗਤ, ਸਿਖਰ-ਸਨਮੁਖ, ਇਕਾਂਤਰ ਕੋਣ", "ਅਧਿਕ ਕੋਣ"],
    correct_answer_index: 2,
    explanation_pa: "ਸਮਾਂਤਰ ਰੇਖਾਵਾਂ ਤੇ ਕਾਟਵੀਂ ਰੇਖਾ ਨਾਲ ਸੰਗਤ ਕੋਣ, ਸਿਖਰ-ਸਨਮੁਖ ਕੋਣ ਅਤੇ ਇਕਾਂਤਰ ਕੋਣ ਹਮੇਸ਼ਾਂ ਬਰਾਬਰ ਬਣਦੇ ਹਨ।"
  }


];