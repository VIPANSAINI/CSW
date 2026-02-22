/* ========================= LEVEL 1 ========================= */
const kbc = [
{ level: 1, question_pa:"ਭਾਰਤ ਦੀ ਤੱਟ ਰੇਖਾ ਦੀ ਲੰਬਾਈ ਕਿੰਨੀ ਹੈ?", options_pa:["15200 ਕਿ.ਮੀ.","4880 ਕਿ.ਮੀ.","7516.6 ਕਿ.ਮੀ.","3214 ਕਿ.ਮੀ."], correct_answer_index:2, explanation_pa:"ਭਾਰਤ ਦੀ ਤੱਟ ਰੇਖਾ 7516.6 ਕਿਲੋਮੀਟਰ ਲੰਬੀ ਹੈ।" }, // 0

{ level: 1, question_pa:"ਦੇਸ਼ ਵਿੱਚ ਮੁੱਢਲੀ ਹਵਾਈ ਆਵਾਜਾਈ ਸੇਵਾ ਕਦੋਂ ਸ਼ੁਰੂ ਹੋਈ ਸੀ?", options_pa:["1901 ਵਿਚ","1911 ਵਿਚ","1914 ਵਿਚ","1947 ਵਿਚ"], correct_answer_index:1, explanation_pa:"ਭਾਰਤ ਵਿੱਚ ਪਹਿਲੀ ਹਵਾਈ ਸੇਵਾ 1911 ਵਿੱਚ ਸ਼ੁਰੂ ਹੋਈ ਸੀ।" }, // 1

{ level: 1, question_pa:"ਭਾਰਤ ਵਿੱਚ ਹਵਾਈ ਆਵਾਜਾਈ ਦਾ ਸਰਕਾਰੀਕਰਨ ਕਦੋਂ ਕੀਤਾ ਗਿਆ?", options_pa:["1947","1950","1951","1953"], correct_answer_index:3, explanation_pa:"1953 ਵਿੱਚ ਹਵਾਈ ਆਵਾਜਾਈ ਸਰਕਾਰੀ ਕਬਜ਼ੇ ਵਿੱਚ ਲਈ ਗਈ।" }, // 2

{ level: 1, question_pa:"ਇੱਕ ਨਿਸ਼ਚਿਤ ਸਮੇਂ ਦੌਰਾਨ ਪੂੰਜੀ ਭੰਡਾਰ ਵਿੱਚ ਵਾਧੇ ਨੂੰ ਕੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?", options_pa:["ਉਪਭੋਗ","ਬੱਚਤ","ਨਿਵੇਸ਼","ਆਮਦਨ"], correct_answer_index:2, explanation_pa:"ਨਿਵੇਸ਼ ਦਾ ਅਰਥ ਹੈ ਪੂੰਜੀ ਭੰਡਾਰ ਵਿੱਚ ਵਾਧਾ।" }, // 3

{ level: 1, question_pa:"ਆਮਦਨ ਵਿੱਚੋਂ ਉਪਭੋਗ ਖਰਚ ਘਟਾ ਕੇ ਕਿਸ ਦਾ ਪਤਾ ਲਗਦਾ ਹੈ?", options_pa:["ਉਪਭੋਗ","ਬੱਚਤ","ਨਿਵੇਸ਼","ਮਹਿੰਗਾਈ"], correct_answer_index:1, explanation_pa:"ਬੱਚਤ = ਆਮਦਨ - ਉਪਭੋਗ।" }, // 4

{ level: 1, question_pa:"ਸਨਅਤਾਂ ਵਾਤਾਵਰਣ ਨੂੰ ਕਿਸ ਤਰ੍ਹਾਂ ਪ੍ਰਭਾਵਿਤ ਕਰਦੀਆਂ ਹਨ?", options_pa:["ਵਾਤਾਵਰਣ ਸੁਧਾਰਦੀਆਂ ਹਨ","ਪਲੀਤ ਕਰਦੀਆਂ ਹਨ","ਕੋਈ ਪ੍ਰਭਾਵ ਨਹੀਂ","ਕੁਦਰਤੀ ਸੰਸਾਧਨ ਵਧਾਉਂਦੀਆਂ ਹਨ"], correct_answer_index:1, explanation_pa:"ਸਨਅਤੀ ਬੁਰਾਦ ਅਤੇ ਧੂੰਏਂ ਨਾਲ ਵਾਤਾਵਰਣ ਪ੍ਰਦੂਸ਼ਿਤ ਹੁੰਦਾ ਹੈ।" }, // 5

{ level: 1, question_pa:"ਬਾਕਸਾਈਟ ਕੱਚੇ ਧਾਤ ਤੋਂ ਕਿਹੜੀ ਧਾਤ ਕੱਢੀ ਜਾਂਦੀ ਹੈ?", options_pa:["ਮੈਂਗਨੀਜ਼","ਥੋਰੀਅਮ","ਐਲੂਮੀਨੀਅਮ","ਅਬਰਕ"], correct_answer_index:2, explanation_pa:"ਐਲੂਮੀਨੀਅਮ ਬਾਕਸਾਈਟ ਤੋਂ ਪ੍ਰਾਪਤ ਹੁੰਦਾ ਹੈ।" }, // 6

{ level: 1, question_pa:"ਮੈਗਨੇਟਾਈਟ ਕਿਸ ਦੀ ਕਿਸਮ ਹੈ?", options_pa:["ਕੱਚਾ ਲੋਹਾ","ਤਾਂਬਾ","ਕੋਲਾ","ਅਬਰਕ"], correct_answer_index:0, explanation_pa:"ਮੈਗਨੇਟਾਈਟ ਸਭ ਤੋਂ ਵਧੀਆ ਗੁਣਵੱਤਾ ਵਾਲਾ ਲੋਹ ਧਾਤੂ ਹੈ।" }, // 7

{ level: 1, question_pa:"ਅੰਬਾ ਦਰਿਆ ਕਿਸ ਰਾਜ ਵਿੱਚ ਵਗਦਾ ਹੈ?", options_pa:["ਆਸਾਮ","ਉੱਤਰ ਪ੍ਰਦੇਸ਼","ਮਹਾਰਾਸ਼ਟਰ","ਗੋਆ"], correct_answer_index:2, explanation_pa:"ਅੰਬਾ ਦਰਿਆ ਮਹਾਰਾਸ਼ਟਰ ਰਾਜ ਵਿੱਚ ਹੈ।" }, // 8

{ level: 1, question_pa:"ਜਲ ਆਵਾਜਾਈ ਦੇ ਕਿੰਨੇ ਪ੍ਰਕਾਰ ਹੁੰਦੇ ਹਨ?", options_pa:["1","2","3","4"], correct_answer_index:1, explanation_pa:"ਦੇਸ਼ ਅੰਦਰਲੇ ਤੇ ਮਹਾਂਸਾਗਰੀ – ਦੋ ਪ੍ਰਕਾਰ।" }, // 9

{ level: 1, question_pa:"GDP ਦੀ ਵਰਤੋਂ ਕਿਹੜੇ ਅਰਥਸ਼ਾਸਤਰ ਵਿੱਚ ਹੁੰਦੀ ਹੈ?", options_pa:["ਵਿਅਸ਼ਟੀ","ਸਮੂਹਿਕ / ਸਮੱਸ਼ਟੀ","ਦੋਵੇਂ","ਕਿਸੇ ਵਿੱਚ ਨਹੀਂ"], correct_answer_index:1, explanation_pa:"ਸਮੱਸ਼ਟੀ ਅਰਥਸ਼ਾਸਤਰ ਵੱਡੇ ਪੱਧਰ ਤੇ ਆਰਥਿਕਤਾ ਦਾ ਅਧਿਐਨ ਕਰਦਾ ਹੈ।" }, // 10

{ level: 1, question_pa:"ਕੇਂਦਰੀ ਬੈਂਕ ਦਾ ਮੁੱਖ ਕੰਮ ਕਿਹੜਾ ਹੈ?", options_pa:["ਨੋਟ ਜਾਰੀ ਕਰਨਾ","ਸਰਕਾਰ ਦਾ ਬੈਂਕ","ਬੈਂਕਾਂ ਦਾ ਬੈਂਕ","ਉਪਰੋਕਤ ਸਾਰੇ"], correct_answer_index:3, explanation_pa:"ਕੇਂਦਰੀ ਬੈਂਕ ਇਹ ਤਿੰਨੇ ਕੰਮ ਕਰਦਾ ਹੈ।" }, // 11

{ level: 1, question_pa:"ਅਰਥਵਿਵਸਥਾ ਕਿਸ ਭਾਸ਼ਾ ਸ਼ਬਦ ਤੋਂ ਲਿਆ ਗਿਆ ਹੈ?", options_pa:["ਲਾਤੀਨੀ","ਯੂਨਾਨੀ","ਜਾਪਾਨੀ","ਚੀਨੀ"], correct_answer_index:1, explanation_pa:"‘Economics’ ਸ਼ਬਦ ਯੂਨਾਨੀ ਭਾਸ਼ਾ ਤੋਂ ਆਇਆ ਹੈ।" }, // 12

{ level: 1, question_pa:"ਐਡਮ ਸਮਿਥ ਨੇ ਕਿਹੜੀ ਪਰਿਭਾਸ਼ਾ ਦਿੱਤੀ ਸੀ?", options_pa:["ਧਨ ਸਬੰਧੀ ਪਰਿਭਾਸ਼ਾ","ਭੌਤਿਕ ਕਲਿਆਣ","ਮਨੁੱਖੀ ਭਲਾਈ","ਉਪਭੋਗ"], correct_answer_index:0, explanation_pa:"ਐਡਮ ਸਮਿਥ ਨੇ ਅਰਥਸ਼ਾਸਤਰ ਦੀ ਧਨ ਸਬੰਧੀ ਪਰਿਭਾਸ਼ਾ ਦਿੱਤੀ।" }, // 13

{ level: 1, question_pa:"ਉਪਭੋਗਤਾ ਸ਼ੋਸ਼ਣ ਤੋਂ ਬਚਾਉਣ ਲਈ ਕੀ ਲੋੜੀਂਦਾ ਹੈ?", options_pa:["ਅਗਿਆਨਤਾ","ਜਾਗਰੂਕਤਾ","ਵਪਾਰੀ ਦਾ ਸਹਿਯੋਗ","ਟੈਕਸ"], correct_answer_index:1, explanation_pa:"ਜਾਗਰੂਕਤਾ ਨਾਲ ਉਪਭੋਗਤਾ ਆਪਣੇ ਹਿੱਤਾਂ ਦੀ ਰੱਖਿਆ ਕਰ ਸਕਦਾ ਹੈ।" },// 14
/* ========================= LEVEL 2 ========================= */
{ level: 2, question_pa:"ਭਾਰਤ ਕੋਲ ਦੁਨੀਆਂ ਦੇ ਕਿਨੇ ਫੀਸਦੀ ਨਵਿਆਉਣਯੋਗ ਜਲ ਸਰੋਤ ਹਨ?", options_pa:["2%","4%","6%","8%"], correct_answer_index:1, explanation_pa:"ਭਾਰਤ ਕੋਲ ਦੁਨੀਆ ਦੇ 4% ਨਵਿਆਉਣਯੋਗ ਜਲ ਸਰੋਤ ਹਨ।" },

{ level: 2, question_pa:"ਧਰਤੀ ਉੱਤੇ 97% ਜਲ ਖਾਰਾ ਹੈ ਤੇ ਤਾਜ਼ਾ ਜਲ ਕਿਨ੍ਹਾ ਹੈ?", options_pa:["03%","05%","10%","02%"], correct_answer_index:0, explanation_pa:"97% ਖਾਰਾ ਅਤੇ 3% ਤਾਜ਼ਾ ਜਲ ਹੈ।" },

{ level: 2, question_pa:"ਜ਼ਮੀਨਦੋਜ਼ ਜਲ ਦੀ ਵਰਤੋਂ ਸਭ ਤੋਂ ਵੱਧ ਕਿਸ ਮਹਾਂਦੀਪ ਵਿੱਚ ਹੁੰਦੀ ਹੈ?", options_pa:["ਅਫ਼ਰੀਕਾ","ਏਸ਼ੀਆ","ਆਸਟਰੇਲੀਆ","ਯੂਰਪ"], correct_answer_index:1, explanation_pa:"ਏਸ਼ੀਆ ਵਿੱਚ ਭੂਜਲ ਦੀ ਸਭ ਤੋਂ ਵੱਧ ਵਰਤੋਂ ਹੁੰਦੀ ਹੈ।" },

{ level: 2, question_pa:"ਖੇਤੀਬਾੜੀ ਲਈ ਜ਼ਮੀਨਦੋਜ਼ ਜਲ ਵਰਤਣ ਵਿਚ ਸੰਸਾਰ ਦਾ ਸਭ ਤੋਂ ਮੋਹਰੀ ਦੇਸ਼?", options_pa:["ਅਮਰੀਕਾ","ਚੀਨ","ਭਾਰਤ","ਆਸਟਰੇਲੀਆ"], correct_answer_index:2, explanation_pa:"ਭਾਰਤ ਭੂਜਲ ਖਪਤ ਵਿੱਚ ਪਹਿਲੇ ਸਥਾਨ ਤੇ ਹੈ।" },

{ level: 2, question_pa:"ਅਰਥਵਿਵਸਥਾ ਦਾ ਕਿਹੜਾ ਖੇਤਰ ਕੁਦਰਤੀ ਸਾਧਨਾਂ ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ?", options_pa:["ਪ੍ਰਾਥਮਿਕ ਖੇਤਰ","ਗੌਣ ਖੇਤਰ","ਸੇਵਾ ਖੇਤਰ","ਸਾਰੇ"], correct_answer_index:0, explanation_pa:"ਪ੍ਰਾਥਮਿਕ ਖੇਤਰ ਕੁਦਰਤੀ ਸਰੋਤਾਂ ’ਤੇ ਆਧਾਰਿਤ ਹੁੰਦਾ ਹੈ।" },

{ level: 2, question_pa:"ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਗੌਣ ਖੇਤਰ ਦਾ ਉਦਾਹਰਨ ਕਿਹੜਾ ਹੈ?", options_pa:["ਖੁਦਾਈ","ਨਿਰਮਾਣ","ਆਵਾਜਾਈ","ਉਪਰੋਕਤ ਸਾਰੇ"], correct_answer_index:1, explanation_pa:"ਨਿਰਮਾਣ ਗੌਣ ਖੇਤਰ ਵਿੱਚ ਆਉਂਦਾ ਹੈ।" },

{ level: 2, question_pa:"ਅਰਥਵਿਵਸਥਾ ਦੇ ਤਿੰਨੋ ਖੇਤਰ ਇੱਕ-ਦੂਸਰੇ ਤੇ ਨਿਰਭਰ ਹੁੰਦੇ ਹਨ।", options_pa:["ਸਹੀ","ਗਲਤ","ਕੇਵਲ ਗੌਣ ਤੇ ਤੀਸਰਾ","ਕੇਵਲ ਪ੍ਰਾਥਮਿਕ"], correct_answer_index:0, explanation_pa:"ਤਿੰਨੇ ਖੇਤਰ ਆਪਸੀ ਨਿਰਭਰ ਹਨ।" },

{ level: 2, question_pa:"ਦੇਸ਼ ਵਿਚ ਸਭ ਤੋਂ ਵੱਧ ਅਖਬਾਰ ਕਿਸ ਭਾਸ਼ਾ ਵਿੱਚ ਛਪਦੇ ਹਨ?", options_pa:["ਅੰਗਰੇਜ਼ੀ","ਉਰਦੂ","ਪੰਜਾਬੀ","ਹਿੰਦੀ"], correct_answer_index:3, explanation_pa:"ਹਿੰਦੀ ਭਾਸ਼ਾ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਅਖਬਾਰ ਛਪਦੇ ਹਨ।" },

{ level: 2, question_pa:"ਆਯਾਤ-ਨਿਰਯਾਤ ਦੇ ਅੰਤਰ ਨੂੰ ਕੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?", options_pa:["ਮਹਿੰਗਾਈ","ਵਿਦੇਸ਼ੀ ਵਪਾਰ","ਵਪਾਰਕ ਸਮਤੋਲ","ਉਤਪਾਦਨ"], correct_answer_index:2, explanation_pa:"ਵਪਾਰਕ ਸਮਤੋਲ ਆਯਾਤ-ਨਿਰਯਾਤ ਦੇ ਅੰਤਰ ਨੂੰ ਕਹਿੰਦੇ ਹਨ।" },

{ level: 2, question_pa:"FDI ਦਾ ਪੂਰਾ ਨਾਂ ਕੀ ਹੈ?", options_pa:["Foreign Direct Investment","Foreign District Investment","Full Direct Investment","Free Direct Investment"], correct_answer_index:0, explanation_pa:"FDI ਦਾ ਪੂਰਾ ਨਾਂ Foreign Direct Investment ਹੈ।" },

{ level: 2, question_pa:"ਭਾਰਤ ਵਿੱਚ ਨਵੀਂ ਆਰਥਿਕ ਨੀਤੀ ਕਦੋਂ ਲਾਗੂ ਹੋਈ ਸੀ?", options_pa:["1919","1929","1950","1991"], correct_answer_index:3, explanation_pa:"ਨਵੀਂ ਆਰਥਿਕ ਨੀਤੀ 1991 ਵਿੱਚ ਲਾਗੂ ਹੋਈ ਸੀ।" },

{ level: 2, question_pa:"MNC ਦਾ ਪੂਰਾ ਨਾਂ ਕੀ ਹੈ?", options_pa:["Multi Channel Corporation","Multi National Companies","Multi National Corporation","Multi National Cars"], correct_answer_index:2, explanation_pa:"MNC ਦਾ ਮਤਲਬ Multi National Corporation ਹੈ।" },

{ level: 2, question_pa:"ਵਿਸ਼ਵੀਕਰਨ ਹੇਠ ਉਪਭੋਗਤਾ ਨੂੰ ਵਸਤੂਆਂ ਦੀ ਚੋਣ?", options_pa:["ਸੀਮਤ","ਘੱਟ","ਵਧੇਰੇ","ਕੋਈ ਨਹੀਂ"], correct_answer_index:2, explanation_pa:"ਵਿਸ਼ਵੀਕਰਨ ਨਾਲ ਉਪਭੋਗਤਾਵਾਂ ਕੋਲ ਵਧੇਰੇ ਵਿਕਲਪ ਹੁੰਦੇ ਹਨ।" },

{ level: 2, question_pa:"ਸਟਾਕ ਐਕਸਚੇਂਜ ਵਿੱਚ ਨਿਵੇਸ਼?", options_pa:["ਨਿਵੇਸ਼ ਦੀ ਇੱਕ ਕਿਰਿਆ","ਨਿਵੇਸ਼ ਨਹੀਂ","ਸਿਰਫ ਧਨਵਾਨਾਂ ਲਈ","ਜੂਆ"], correct_answer_index:0, explanation_pa:"ਇਹ ਨਿਵੇਸ਼ ਦੇ ਇੱਕ ਢੰਗ ਵਜੋਂ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ।" },

{ level: 2, question_pa:"SENSEX ਦਾ ਪੂਰਾ ਨਾਂ ਕੀ ਹੈ?", options_pa:["Store Exchange Sensitive Index","Stock Exchange Sensitive Index","State Exchange Sensitive Index","Super Exchange Sensitive Index"], correct_answer_index:1, explanation_pa:"SENSEX ਦਾ ਮਤਲਬ Stock Exchange Sensitive Index ਹੈ।" },
/* ========================= LEVEL 3 ========================= */
{ level: 3, question_pa:"ਭਾਰਤ ਵਿੱਚ ਉਦਯੋਗਾਂ ਲਈ ਸਭ ਤੋਂ ਵੱਧ ਵਰਤਿਆ ਜਾਣ ਵਾਲਾ ਖਣਿਜ ਇਂਧਨ?", options_pa:["ਕੋਲਾ","ਪੈਟਰੋਲ","ਕੁਦਰਤੀ ਗੈਸ","ਯੂਰੇਨੀਅਮ"], correct_answer_index:0, explanation_pa:"ਉਦਯੋਗ ਅਤੇ ਬਿਜਲੀ ਉਤਪਾਦਨ ਵਿੱਚ ਕੋਲੇ ਦੀ ਸਭ ਤੋਂ ਵੱਧ ਵਰਤੋਂ ਹੁੰਦੀ ਹੈ।" },

{ level: 3, question_pa:"MNC ਦੀ ਫੈਕਟਰੀ ਆਮ ਤੌਰ ’ਤੇ ਕਿੱਥੇ ਲਗਾਈ ਜਾਂਦੀ ਹੈ?", options_pa:["ਘੱਟ ਮਜ਼ਦੂਰੀ ਵਾਲੇ ਦੇਸ਼ਾਂ ਵਿੱਚ","ਸਿਰਫ਼ ਵਿਕਸਿਤ ਦੇਸ਼ਾਂ ਵਿੱਚ","ਰੇਗਿਸਤਾਨ ਵਿੱਚ","ਬਿਨਾ ਮਾਰਕੇਟ ਵਾਲੀ ਥਾਂ"], correct_answer_index:0, explanation_pa:"ਮਜ਼ਦੂਰੀ ਸਸਤੀ ਤੇ ਵੱਡਾ ਬਾਜ਼ਾਰ ਮਿਲਣ ਕਾਰਨ MNCਆਂ ਵਿਕਾਸਸ਼ੀਲ ਦੇਸ਼ ਚੁਣਦੀਆਂ ਹਨ।" },

{ level: 3, question_pa:"ਭਾਰਤ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਕ੍ਰਿਸ਼ੀ ਖੇਤਰ ਕਿਹੜੀ ਫਸਲ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?", options_pa:["ਚੌਲ","ਗੰਹੂੰ","ਚਾਹ","ਗੰਨ੍ਹਾ"], correct_answer_index:0, explanation_pa:"ਚੌਲ ਭਾਰਤ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਖੇਤਰਫਲ ’ਤੇ ਬੀਜਿਆ ਜਾਂਦਾ ਹੈ।" },

{ level: 3, question_pa:"ਬੀ.ਪੀ.ਐੱਲ. ਦਾ ਪੂਰਾ ਨਾਂ ਕੀ ਹੈ?", options_pa:["Below Poverty Line","Basic Population Level","Best Production Limit","Bank Profit List"], correct_answer_index:0, explanation_pa:"BPL ਦਾ ਅਰਥ ਗਰੀਬੀ ਰੇਖਾ ਤੋਂ ਹੇਠਾਂ ਰਹਿਣ ਵਾਲੇ।" },

{ level: 3, question_pa:"ਸਰਕਾਰ ਦੁਆਰਾ ਵਸਤੂਆਂ ਦੀ ਕੀਮਤ ਨਿਯੰਤ੍ਰਿਤ ਕਰਨ ਨੂੰ ਕੀ ਕਹਿੰਦੇ ਹਨ?", options_pa:["ਕੀਮਤ ਛੱਤ","ਮਹਿੰਗਾਈ","ਮਾਨਸੂਨ","ਨਿਰਯਾਤ"], correct_answer_index:0, explanation_pa:"ਕੀਮਤ ਛੱਤ ਨਾਲ ਆਵਸ਼੍ਯਕ ਵਸਤੂਆਂ ਦੀ ਕੀਮਤ ਨਿਯੰਤ੍ਰਿਤ ਰਹਿੰਦੀ ਹੈ।" },

{ level: 3, question_pa:"ਸੰਸਾਧਨ ਦੀ ਪਰਿਭਾਸ਼ਾ ਕਿਹੜੀ ਹੈ?", options_pa:["ਕੁਦਰਤੀ ਵਸਤੂ","ਮਨੁੱਖੀ ਲੋੜਾਂ ਪੂਰੀ ਕਰਨ ਵਾਲੀ ਵਸਤੂ","ਫੈਕਟਰੀ","ਮਸ਼ੀਨ"], correct_answer_index:1, explanation_pa:"ਜੋ ਮਨੁੱਖੀ ਲੋੜਾਂ ਪੂਰੀ ਕਰੇ ਉਹ ਸੰਸਾਧਨ ਕਹਾਂਦਾ ਹੈ।" },

{ level: 3, question_pa:"ਕਿਸੀ ਇਮਾਰਤ ਦਾ ਨਕਸ਼ਾ ਕਿਸ ਪ੍ਰਕਾਰ ਦੀ ਸੰਸਾਧਨ ਹੈ?", options_pa:["ਕੁਦਰਤੀ","ਮਨੁੱਖੀ-ਨਿਰਮਿਤ","ਮਾਨਵੀ","ਵਿਰਾਸਤੀ"], correct_answer_index:1, explanation_pa:"ਮਨੁੱਖ ਦੁਆਰਾ ਤਿਆਰ ਹੋਏ ਸਮਰਥਨ ਮਨੁੱਖ-ਨਿਰਮਿਤ ਸੰਸਾਧਨ ਹਨ।" },

{ level: 3, question_pa:"ਖੇਤੀਬਾੜੀ ਵਿੱਚ ਵਰਤੀ ਜਾਣ ਵਾਲੀ 'ਖੇਤੀਯੋਗ ਭੂਮੀ' ਕਿਸ ਦਾ ਉਦਾਹਰਨ ਹੈ?", options_pa:["ਕੁਦਰਤੀ ਸੰਸਾਧਨ","ਮਨੁੱਖੀ ਸੰਸਾਧਨ","ਦੋਵੇਂ","ਕਿਸੇ ਦਾ ਨਹੀਂ"], correct_answer_index:0, explanation_pa:"ਖੇਤੀਯੋਗ ਭੂਮੀ ਕੁਦਰਤੀ ਸੰਸਾਧਨ ਹੈ।" },

{ level: 3, question_pa:"ਕਿਹੜਾ ਖੇਤਰ ਸੇਵਾਵਾਂ ਉਪਲਬਧ ਕਰਵਾਉਂਦਾ ਹੈ?", options_pa:["ਪ੍ਰਾਥਮਿਕ","ਦੁਤੀਆ","ਤ੍ਰਿਤੀਕ","ਸਾਰੇ"], correct_answer_index:2, explanation_pa:"ਤ੍ਰਿਤੀਕ ਖੇਤਰ ਸੇਵਾਵਾਂ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।" },

{ level: 3, question_pa:"ਪਾਣੀ ਦਾ ਦੁਪਯੋਗ (Overuse) ਸਭ ਤੋਂ ਵੱਧ ਕਿਹੜੇ ਖੇਤਰ ਵਿੱਚ ਹੁੰਦਾ ਹੈ?", options_pa:["ਘਰਾਂ ਵਿੱਚ","ਖੇਤੀਬਾੜੀ","ਉਦਯੋਗ","ਆਵਾਜਾਈ"], correct_answer_index:1, explanation_pa:"ਸਿੰਚਾਈ ਕਾਰਨ ਖੇਤੀ ਵਿੱਚ ਪਾਣੀ ਸਭ ਤੋਂ ਵੱਧ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।" },

{ level: 3, question_pa:"ਪੰਜਾਬ ਦੀ ਮਿੱਟੀ ਮੁੱਖ ਤੌਰ ਤੇ ਬਿਮਾਰ ਹੋ ਰਹੀ ਹੈ ਕਿਉਂਕਿ:", options_pa:["ਵਰਖਾ ਘੱਟ","ਵਿਸ਼ੇਸ਼ ਖਾਦਾਂ ਦਾ ਅਧਿਕ ਵਰਤੋਂ","ਰੇਤਲਾ ਇਲਾਕਾ","ਬਾੜ੍ਹਾਂ"], correct_answer_index:1, explanation_pa:"ਰਸਾਇਣਕ ਖਾਦਾਂ ਕਾਰਨ ਮਿੱਟੀ ਦੀ ਉਪਜਾਊ ਸ਼ਕਤੀ ਘਟ ਰਿਹਾ ਹੈ।" },

{ level: 3, question_pa:"ਉਦਯੋਗ ਲਗਾਉਣ ਲਈ ਸਭ ਤੋਂ ਜ਼ਰੂਰੀ ਤੱਤ ਕਿਹੜਾ ਹੈ?", options_pa:["ਪਾਣੀ","ਬਿਜਲੀ","ਕੱਚਾ ਮਾਲ","ਉਪਰੋਕਤ ਸਾਰੇ"], correct_answer_index:3, explanation_pa:"ਉਦਯੋਗ ਲਈ ਕਈ ਤੱਤ ਮਿਲ ਕੇ ਕੰਮ ਕਰਦੇ ਹਨ।" },

{ level: 3, question_pa:"ਪ੍ਰਾਥਮਿਕ ਖੇਤਰ ਵਿੱਚ ਕੰਮ ਕਰਨ ਵਾਲ਼ੇ ਕੰਮ ਨੂੰ ਕੀ ਕਹਿੰਦੇ ਹਨ?", options_pa:["ਨਿਰਮਾਣ ਕਾਰਜ","ਸੇਵਾ ਪ੍ਰਦਾਨ","ਕੁਦਰਤੀ ਸਰੋਤਾਂ ਤੋਂ ਲਾਭ","ਬੈਂਕਿੰਗ"], correct_answer_index:2, explanation_pa:"ਇਸ ਖੇਤਰ ਵਿੱਚ ਕੁਦਰਤੀ ਸਰੋਤਾਂ ਦੀ ਵਰਤੋਂ ਹੁੰਦੀ ਹੈ।" },

{ level: 3, question_pa:"ਮਨੁੱਖੀ ਵਿਕਾਸ ਸੂਚਕਾਂਕ (HDI) ਕਿਸ ਨਾਲ ਸੰਬੰਧਿਤ ਹੈ?", options_pa:["ਕੇਵਲ ਆਮਦਨ","ਕੇਵਲ ਸਿੱਖਿਆ","ਸਿਹਤ, ਆਮਦਨ ਅਤੇ ਸਿੱਖਿਆ","ਕੇਵਲ ਰੋਜ਼ਗਾਰ"], correct_answer_index:2, explanation_pa:"HDI ਵਿੱਚ ਸਿਹਤ, ਆਮਦਨ ਅਤੇ ਸਿੱਖਿਆ ਨੂੰ ਮਾਪਿਆ ਜਾਂਦਾ ਹੈ।" },

{ level: 3, question_pa:"ਬਿਜਲੀ ਬਣਾਉਣ ਦਾ ਸਭ ਤੋਂ ਸਸਤਾ ਸਰੋਤ?", options_pa:["ਸੂਰਜੀ ਊਰਜਾ","ਹਾਈਡਲ ਊਰਜਾ","ਥਰਮਲ ਊਰਜਾ","ਪਰਮਾਣੂ"], correct_answer_index:1, explanation_pa:"ਪਾਣੀ ਨਾਲ ਚੱਲਣ ਵਾਲੀ ਹਾਈਡਲ ਪਾਵਰ ਸਸਤੀ ਤੇ ਸਾਫ਼ ਹੁੰਦੀ ਹੈ।" },
/* ========================= LEVEL 4 ========================= */

{ level: 4, question_pa:"ਮਨੁੱਖੀ ਸਰਮਾਇਆ ਕਦੋਂ ਵਿਕਸਿਤ ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ?", options_pa:["ਜਦੋਂ ਲੋਕ ਬਿਮਾਰ ਹੋਣ","ਜਦੋਂ ਲੋਕਾਂ ਕੋਲ ਪੈਸਾ ਹੋਵੇ","ਜਦੋਂ ਸਿੱਖਿਆ, ਸਿਹਤ ਤੇ ਹੁਨਰ ਚੰਗੇ ਹੋਣ","ਜਦੋਂ ਲੋਕ ਗਰੀਬ ਹੋਣ"], correct_answer_index:2, explanation_pa:"ਚੰਗੀ ਸਿਹਤ, ਸਿੱਖਿਆ ਅਤੇ ਤਜਰਬਾ ਮਨੁੱਖੀ ਪੂੰਜੀ ਦਾ ਵਿਕਾਸ ਦੱਸਦਾ ਹੈ।" },

{ level: 4, question_pa:"ਬੇਰੋਜ਼ਗਾਰੀ ਦਾ ਇੱਕ ਨਤੀਜਾ ਕੀ ਹੁੰਦਾ ਹੈ?", options_pa:["ਆਮਦਨੀ ਵਧਦੀ ਹੈ","ਅਪਰਾਧ ਤੇ ਗਰੀਬੀ ਵਧਦੀ ਹੈ","ਅਰਥਵਿਵਸਥਾ ਮਜ਼ਬੂਤ ਹੁੰਦੀ ਹੈ","ਉਤਪਾਦਨ ਵਧਦਾ ਹੈ"], correct_answer_index:1, explanation_pa:"ਬੇਰੋਜ਼ਗਾਰੀ ਨਾਲ ਆਮਦਨੀ ਘਟਦੀ ਅਤੇ ਅਪਰਾਧ ਵਧਦਾ ਹੈ।" },

{ level: 4, question_pa:"ਗਰੀਬੀ ਰੇਖਾ ਤੋਂ ਹੇਠਾਂ ਜਨਸੰਖਿਆ ਦੀ ਗਿਣਤੀ ਨੂੰ ਕੀ ਕਹਿੰਦੇ ਹਨ?", options_pa:["ਬੇਰੋਜ਼ਗਾਰੀ","ਗਰੀਬੀ ਅਨੁਪਾਤ","ਮਹਿੰਗਾਈ","ਵਿਕਾਸ"], correct_answer_index:1, explanation_pa:"ਗਰੀਬੀ ਅਨੁਪਾਤ ਗਰੀਬਾਂ ਦੀ ਸੰਖਿਆ ਦਰਸਾਉਂਦਾ ਹੈ।" },

{ level: 4, question_pa:"‘ਸਚਾਈ ਦੀ ਰਾਹ’ ਕਿਤਾਬ ਕਿਸ ਨੇ ਲਿਖੀ?", options_pa:["ਜਵਾਹਰਲਾਲ ਨੇਹਰੂ","ਮਹਾਤਮਾ ਗਾਂਧੀ","ਸੁਭਾਸ਼ ਚੰਦਰ ਬੋਸ","ਟੈਗੋਰ"], correct_answer_index:1, explanation_pa:"ਮਹਾਤਮਾ ਗਾਂਧੀ ਦੀ ਆਤਮਕਥਾ ‘ਮਾਈ ਐਕਸਪਰੀਮੈਂਟ ਵਿਥ ਟ੍ਰੁੱਥ’ ਹੈ।" },

{ level: 4, question_pa:"ਰੋਜ਼ਗਾਰ ਗਾਰੰਟੀ ਯੋਜਨਾ ਦਾ ਉਦੇਸ਼?", options_pa:["ਨਿਰਯਾਤ ਵਧਾਉਣਾ","ਕਿਸਾਨਾਂ ਨੂੰ ਕਰਜ਼ਾ","ਗਰੀਬਾਂ ਨੂੰ ਰੋਜ਼ਗਾਰ","ਸੜਕਾਂ ਦੀ ਮੁਰੰਮਤ"], correct_answer_index:2, explanation_pa:"ਇਸ ਯੋਜਨਾ ਤਹਿਤ ਗਰੀਬਾਂ ਨੂੰ ਰੋਜ਼ਗਾਰ ਦੇਣਾ ਮੁੱਖ ਉਦੇਸ਼ ਹੈ।" },

{ level: 4, question_pa:"ਬਾਲਮਜ਼ਦੂਰੀ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਕਾਰਨ?", options_pa:["ਮਹਿੰਗੀਆਂ ਸਕੂਲ ਫੀਸਾਂ","ਗਰੀਬੀ","ਖੇਡਾਂ ਦਾ ਸ਼ੌਂਕ","ਕੰਮ ਦੀ ਕਮੀ"], correct_answer_index:1, explanation_pa:"ਗਰੀਬੀ ਕਾਰਨ ਬੱਚੇ ਵੀ ਮਿਹਨਤ-ਮਜ਼ਦੂਰੀ ਕਰਦੇ ਹਨ।" },

{ level: 4, question_pa:"ਜਨਸੰਖਿਆ ਦਾ ਲਿੰਗ ਅਨੁਪਾਤ ਕਿਸ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ?", options_pa:["1000 ਮਰਦਾਂ ਪ੍ਰਤੀ ਔਰਤਾਂ ਦੀ ਗਿਣਤੀ","1000 ਔਰਤਾਂ ਪ੍ਰਤੀ ਮਰਦਾਂ ਦੀ ਗਿਣਤੀ","ਸਿਰਫ਼ ਬੱਚਿਆਂ ਦੀ ਗਿਣਤੀ","ਕੁੱਲ ਜਨਸੰਖਿਆ"], correct_answer_index:0, explanation_pa:"ਲਿੰਗ ਅਨੁਪਾਤ 1000 ਮਰਦਾਂ ’ਤੇ ਔਰਤਾਂ ਦੀ ਗਿਣਤੀ ਦੱਸਦਾ ਹੈ।" },

{ level: 4, question_pa:"‘ਮਿਸ਼ਨ ਇੰਦਰਧਨੁਸ਼’ ਕਿਸ ਨਾਲ ਸੰਬੰਧਿਤ ਹੈ?", options_pa:["ਟੀਕਾਕਰਣ","ਸਿੱਖਿਆ","ਕਿਸਾਨੀ","ਬਿਜਲੀ"], correct_answer_index:0, explanation_pa:"ਇਹ ਟੀਕਾਕਰਣ ਮੁਹਿੰਮ ਹੈ।" },

{ level: 4, question_pa:"ਖੇਤੀਬਾੜੀ ਤੇ ਨਿਰਭਰ ਜਨਸੰਖਿਆ ਸਭ ਤੋਂ ਵੱਧ ਕਿੱਥੇ ਹੈ?", options_pa:["ਭਾਰਤ","ਜਪਾਨ","ਅਮਰੀਕਾ","ਯੂਕੇ"], correct_answer_index:0, explanation_pa:"ਭਾਰਤ ਦੀ ਜਨਸੰਖਿਆ ਵਿੱਚ ਖੇਤੀਬਾੜੀ ਤੇ ਨਿਰਭਰ ਭਾਗ ਸਭ ਤੋਂ ਵੱਧ ਹੈ।" },

{ level: 4, question_pa:"ਕਿਸ ਕਾਰਨ ਨਾਲ ਝੀਲਾਂ ਤੇ ਦਰਿਆ ਪ੍ਰਦੂਸ਼ਿਤ ਹੁੰਦੇ ਹਨ?", options_pa:["ਮੀਂਹ ਕਾਰਨ","ਵਿਅਰਥ ਰਸਾਇਣਕ ਪਦਾਰਥ","ਬਾੜ੍ਹ ਕਾਰਨ","ਹਵਾਈ ਦਬਾਅ ਨਾਲ"], correct_answer_index:1, explanation_pa:"ਉਦਯੋਗ ਤੇ ਖੇਤੀ ਵਿਸ਼ੇਲੇ ਪਦਾਰਥ ਜਲ ਨੂੰ ਗੰਦਾ ਕਰਦੇ ਹਨ।" },

{ level: 4, question_pa:"ਵਿਦੇਸ਼ੀ ਵਪਾਰ ਦਾ ਅਰਥ ਕੀ ਹੈ?", options_pa:["ਦੇਸ਼ੀ ਵੇਪਾਰ","ਦੇਸ਼ਾਂ ਵਿਚਕਾਰ ਵਪਾਰ","ਗਾਹਕਾਂ ਨਾਲ ਸੇਵਾ","ਸਿਰਫ਼ ਨਿਰਯਾਤ"], correct_answer_index:1, explanation_pa:"ਦੋ ਜਾਂ ਵੱਧ ਦੇਸ਼ਾਂ ਵਿਚਕਾਰ ਵਪਾਰ ਨੂੰ ਵਿਦੇਸ਼ੀ ਵਪਾਰ ਕਹਿੰਦੇ ਹਨ।" },

{ level: 4, question_pa:"ਰੋਜ਼ਗਾਰ ਦੇ ਦੋ ਪ੍ਰਕਾਰ ਕਿਹੜੇ ਹਨ?", options_pa:["ਕਰਮਚਾਰੀ ਤੇ ਨੌਕਰੀ","ਨਿਰਾਸ਼ਾ ਤੇ ਉਮੀਦ","ਸਵੈਰੋਜ਼ਗਾਰੀ ਅਤੇ ਨੌਕਰੀ","ਉਤਪਾਦਨ ਤੇ ਸੇਵਾ"], correct_answer_index:2, explanation_pa:"ਸਵੈਰੋਜ਼ਗਾਰੀ ਅਤੇ ਨੌਕਰੀ ਰੋਜ਼ਗਾਰ ਦੇ ਮੁੱਖ ਰੂਪ ਹਨ।" },

{ level: 4, question_pa:"ਹੇਠ ਲਿਖਿਆਂ ਵਿਚੋਂ ਕਿਹੜਾ ਮਨੁੱਖੀ ਵਿਕਾਸ ਦਾ ਸੂਚਕ ਨਹੀਂ?", options_pa:["ਸਿੱਖਿਆ","ਸਿਹਤ","ਆਮਦਨ","ਆਵਾਜਾਈ"], correct_answer_index:3, explanation_pa:"ਆਵਾਜਾਈ ਮਨੁੱਖੀ ਵਿਕਾਸ ਦੇ ਸੂਚਕਾਂ ਵਿੱਚ ਸ਼ਾਮਲ ਨਹੀਂ।" },

{ level: 4, question_pa:"ਮਾਨਵੀ ਸੰਸਾਧਨ ਕਿਹੜੇ ਦੇਸ਼ ਲਈ ਕੀਮਤੀ ਹੁੰਦਾ ਹੈ?", options_pa:["ਸਿਰਫ਼ ਵਿਕਸਿਤ ਦੇਸ਼","ਸਿਰਫ਼ ਗਰੀਬ ਦੇਸ਼","ਹਰ ਦੇਸ਼","ਕੇਵਲ ਯੂਰਪ"], correct_answer_index:2, explanation_pa:"ਹਰ ਦੇਸ਼ ਲਈ ਯੋਗਤਾ ਵਾਲੇ ਨਾਗਰਿਕ ਕੀਮਤੀ ਹੁੰਦੇ ਹਨ।" },

{ level: 4, question_pa:"ਪੰਜਾਬ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਰੋਜ਼ਗਾਰ ਕਿਸ ਖੇਤਰ ਵਿੱਚ ਹੈ?", options_pa:["ਉਦਯੋਗ","ਖੇਤੀਬਾੜੀ","ਆਈਟੀ ਸੇਵਾ","ਆਵਾਜਾਈ"], correct_answer_index:1, explanation_pa:"ਪੰਜਾਬ ਦੀ ਵੱਡੀ ਜਨਸੰਖਿਆ ਖੇਤੀ ਉੱਤੇ ਨਿਰਭਰ ਹੈ।" },
/* ========================= LEVEL 5 ========================= */

{ level: 5, question_pa:"ਧਰਤੀ ਦੀ ਸਭ ਤੋਂ ਬਾਹਰੀ ਪਰਤ ਨੂੰ ਕੀ ਕਹਿੰਦੇ ਹਨ?", options_pa:["ਮੈਂਟਲ","ਕੋਰ","ਭੂ-ਪੜੱਤ (ਕਰਸਟ)","ਮੈਗਮਾ"], correct_answer_index:2, explanation_pa:"ਧਰਤੀ ਦੀ ਸਭ ਤੋਂ ਉੱਪਰੀ ਪੱਥਰੀ ਪਰਤ ਨੂੰ ਕਰਸਟ ਕਹਿੰਦੇ ਹਨ।" },

{ level: 5, question_pa:"ਧਰਤੀ ਦੀ ਅੰਦਰਲੀ ਗਰਮ ਤਰਲ ਪਰਤ ਦਾ ਨਾਂ ਕੀ ਹੈ?", options_pa:["ਮੈਗਮਾ","ਹਵਾ","ਪਾਣੀ","ਬਾਦਲ"], correct_answer_index:0, explanation_pa:"ਮੈਂਟਲ ਵਿੱਚ ਪਾਇਆ ਜਾਣ ਵਾਲਾ ਤਰਲ ਪਦਾਰਥ ਮੈਗਮਾ ਹੈ।" },

{ level: 5, question_pa:"ਭੂਚਾਲ ਦਾ ਮਾਪ ਕਰਨ ਲਈ ਕਿਹੜਾ ਪੈਮਾਨਾ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?", options_pa:["ਲੰਬਾਈ ਪੈਮਾਨਾ","ਰਿਕਟਰ ਪੈਮਾਨਾ","ਥਰਮਾਮੀਟਰ","ਮੀਟਰ"], correct_answer_index:1, explanation_pa:"ਰਿਕਟਰ ਸਕੇਲ ਨਾਲ ਭੂਚਾਲ ਦੀ ਤੀਬਰਤਾ ਮਾਪੀ ਜਾਂਦੀ ਹੈ।" },

{ level: 5, question_pa:"ਚੱਟਾਨਾਂ ਦੇ ਕੱਟਣ ਅਤੇ ਘਸਣ ਤੋਂ ਕਿਹੜੀ ਪ੍ਰਕਿਰਿਆ ਹੁੰਦੀ ਹੈ?", options_pa:["ਅਰੋਸ਼ਨ","ਡਿਪੋਜ਼ੀਸ਼ਨ","ਕੰਡੈਂਸੇਸ਼ਨ","ਵਾਸ਼ਪੀਕਰਨ"], correct_answer_index:0, explanation_pa:"ਹਵਾ, ਪਾਣੀ ਤੇ ਬਰਫ਼ ਚੱਟਾਨਾਂ ਨੂੰ ਕੱਟ ਕੇ ਅਰੋਸ਼ਨ ਕਰਦੇ ਹਨ।" },

{ level: 5, question_pa:"ਸੰਸਾਧਨਾਂ ਦੀ ਸੰਭਾਲ ਨੂੰ ਕੀ ਕਹਿੰਦੇ ਹਨ?", options_pa:["ਦੇਖਭਾਲ","ਵਿਕਾਸ","ਸੁਰੱਖਿਆ (ਕੰਜ਼ਰਵੇਸ਼ਨ)","ਬਰਬਾਦੀ"], correct_answer_index:2, explanation_pa:"ਸੰਸਾਧਨ ਨੂੰ ਸਹੀ ਤਰੀਕੇ ਨਾਲ ਵਰਤਣ ਨੂੰ ਸੰਰਕਸ਼ਣ ਕਹਿੰਦੇ ਹਨ।" },

{ level: 5, question_pa:"ਕਿਹੜਾ ਸੰਸਾਧਨ ਸਮੇਂ ਨਾਲ ਆਪੇ-ਆਪ ਬਣ ਜਾਂਦਾ ਹੈ?", options_pa:["ਔਦਯੋਗਿਕ","ਮਨੁੱਖੀ","ਨਵਿਆਉਣਯੋਗ","ਖਣਿਜ"], correct_answer_index:2, explanation_pa:"ਸੂਰਜੀ, ਹਵਾਈ ਜਿਹੇ ਸਰੋਤ ਮੁੜ ਬਣ ਸਕਦੇ ਹਨ।" },

{ level: 5, question_pa:"ਕਿਸਾਨੀ ਵਿੱਚ ਪਾਣੀ ਦੀ ਸਭ ਤੋਂ ਵੱਧ ਬਰਬਾਦੀ ਕਿਸ ਕਾਰਨ ਹੁੰਦੀ ਹੈ?", options_pa:["ਪਾਈਪਾਂ ਨਾਲ","ਡ੍ਰਿਪ ਸਿੰਚਾਈ","ਛਿੜਕਾਓ ਨਾਲ","ਨ੍ਹੇਰਾਂ ਵਿੱਚ ਰਿਸਾਅ"], correct_answer_index:3, explanation_pa:"ਨ੍ਹੇਰਾਂ ਦੇ ਰਿਸਾਅ ਨਾਲ ਪਾਣੀ ਬਹੁਤ ਖਰਚ ਹੁੰਦਾ ਹੈ।" },

{ level: 5, question_pa:"ਕਿਹੜੀ ਪਾਵਰ ਘਰ ਬਿਜਲੀ ਸਸਤੀ ਤਰੀਕੇ ਨਾਲ ਬਣਾਉਂਦੇ ਹਨ?", options_pa:["ਪਰਮਾਣੂ ਘਰ","ਹਾਈਡਲ ਪਾਵਰ ਘਰ","ਥਰਮਲ ਘਰ","ਡੀਜ਼ਲ ਘਰ"], correct_answer_index:1, explanation_pa:"ਹਾਈਡਲ ਬਿਜਲੀ ਸਭ ਤੋਂ ਸਸਤੀ ਤੇ ਸਾਫ਼ ਹੁੰਦੀ ਹੈ।" },

{ level: 5, question_pa:"ਕਿਹੜਾ ਉਦਯੋਗ ‘ਸਮੋਕ ਸਟੈਕ’ ਉਦਯੋਗ ਕਹਾਉਂਦਾ ਹੈ?", options_pa:["ਆਈਟੀ ਉਦਯੋਗ","ਕੱਪੜਾ ਉਦਯੋਗ","ਲੋਹਾ-ਸਟੀਲ ਉਦਯੋਗ","ਖੇਤੀ"], correct_answer_index:2, explanation_pa:"ਲੋਹਾ-ਸਟੀਲ ਉਦਯੋਗ ਵਿੱਚ ਧੂੰਆ ਵੱਧ ਹੁੰਦਾ ਹੈ।" },

{ level: 5, question_pa:"GST ਦਾ ਪੂਰਾ ਨਾਂ ਕੀ ਹੈ?", options_pa:["General Supply Tax","Goods and Services Tax","Government State Tax","Goods Salary Tax"], correct_answer_index:1, explanation_pa:"GST ਇੱਕ ਸਾਂਝਾ ਕਰ ਪ੍ਰਣਾਲੀ ਹੈ।" },

{ level: 5, question_pa:"ਸੰਸਾਰ ਦੀ ਸਭ ਤੋਂ ਵੱਧ ਜਨਸੰਖਿਆ ਵਾਲਾ ਦੇਸ਼ ਕਿਹੜਾ ਹੈ?", options_pa:["ਭਾਰਤ","ਚੀਨ","ਅਮਰੀਕਾ","ਰੂਸ"], correct_answer_index:0, explanation_pa:"ਭਾਰਤ ਦੀ ਜਨਸੰਖਿਆ ਸਭ ਤੋਂ ਵੱਧ ਹੈ।" },

{ level: 5, question_pa:"ਓਜ਼ੋਨ ਪਰਤ ਧਰਤੀ ਨੂੰ ਕਿਹੜੀਆਂ ਕਿਰਨਾਂ ਤੋਂ ਬਚਾਉਂਦੀ ਹੈ?", options_pa:["ਕਿਰਣ-ਏ","ਕਿਰਣ-ਬੀ","ਯੂਵੀ ਕਿਰਣਾਂ","ਲਾਲ ਕਿਰਣਾਂ"], correct_answer_index:2, explanation_pa:"ਓਜ਼ੋਨ ਪਰਤ ਧਰਤੀ ਨੂੰ ਹਾਨੀਕਾਰਕ UV ਰੇਡੀਏਸ਼ਨ ਤੋਂ ਬਚਾਂਦੀ ਹੈ।" },

{ level: 5, question_pa:"ਹੇਠ ਲਿਖਿਆਂ ’ਚੋਂ ਕਿਹੜਾ ਪ੍ਰਾਇਮਰੀ ਸੈਕਟਰ ਦਾ ਕੰਮ ਹੈ?", options_pa:["ਖਾਣ-ਪੀਣ ਦੀਆਂ ਚੀਜ਼ਾਂ ਤਿਆਰ ਕਰਨਾ","ਕੱਚਾ ਮਾਲ ਇਕੱਠਾ ਕਰਨਾ","ਆਈਟੀ ਸੇਵਾ","ਨਿਰਮਾਣ"], correct_answer_index:1, explanation_pa:"ਪ੍ਰਾਥਮਿਕ ਖੇਤਰ ਕੁਦਰਤੀ ਸਰੋਤਾਂ ਤੋਂ ਕੱਚਾ ਮਾਲ ਪ੍ਰਾਪਤ ਕਰਦਾ ਹੈ।" },

{ level: 5, question_pa:"ਵਿਦੇਸ਼ੀ ਨਿਵੇਸ਼ ਦਾ ਲਾਭ ਕੀ ਹੈ?", options_pa:["ਕੰਮ ਦੇ ਮੌਕੇ ਵਧਦੇ ਹਨ","ਦੇਸ਼ ਗਰੀਬ ਹੋ ਜਾਂਦਾ ਹੈ","ਆਯਾਤ ਵਧ ਜਾਂਦਾ ਹੈ","ਟੈਕ्स ਘਟ ਜਾਂਦੇ ਹਨ"], correct_answer_index:0, explanation_pa:"FDI ਨਾਲ ਰੋਜ਼ਗਾਰ ਦੇ ਮੌਕੇ ਵਧਦੇ ਹਨ।" },

{ level: 5, question_pa:"ਕਿਹੜੀ ਫਸਲ ਰੇਨਫੈੱਡ (ਬਰਸਾਤ-ਅਧਾਰਿਤ) ਕਹਾਂਦੀ ਹੈ?", options_pa:["ਚੌਲ","ਕਪਾਹ","ਗੰਹੂੰ","ਆਲੂ"], correct_answer_index:1, explanation_pa:"ਕਪਾਹ ਵੱਧਤਰ ਮੀਂਹ ’ਤੇ ਨਿਰਭਰ ਰਹਿੰਦੀ ਹੈ।" },
/* ========================= LEVEL 6 ========================= */
{ level: 6, question_pa:"ਇੰਟਰਨੈੱਟ ਨੇ ਕਿਸ ਖੇਤਰ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਡਾ ਬਦਲਾਅ ਲਿਆਂਦਾ ਹੈ?", options_pa:["ਖੇਤੀਬਾੜੀ","ਸੇਵਾ ਖੇਤਰ","ਖਣਿਜ ਉਦਯੋਗ","ਨਿਰਮਾਣ"], correct_answer_index:1, explanation_pa:"ਆਧੁਨਿਕ ਸੇਵਾਵਾਂ ਜਿਵੇਂ ਬੈਂਕਿੰਗ, ਸਿੱਖਿਆ, ਵਪਾਰ ਦਾ ਵੱਡਾ ਹਿੱਸਾ ਇੰਟਰਨੈੱਟ ਤੇ ਨਿਰਭਰ ਹੈ।" },

{ level: 6, question_pa:"ਇਕਰੂਪ ਬਾਜ਼ਾਰ ਬਣਾਉਣ ਲਈ ਭਾਰਤ ਵਿੱਚ ਕਿਹੜਾ ਟੈਕਸ ਲਾਇਆ ਗਿਆ?", options_pa:["ਇਨਕਮ ਟੈਕਸ","GST","ਸਰਲ ਟੈਕਸ","ਸਰਕਾਰੀ ਟੈਕਸ"], correct_answer_index:1, explanation_pa:"GST ਨਾਲ ਵੱਖਰੇ ਰਾਜਾਂ ਵਿੱਚ ਇਕਰੂਪ ਬਾਜ਼ਾਰ ਬਣਿਆ।" },

{ level: 6, question_pa:"ਕਿਹੜੀ ਬਿਮਾਰੀ ਪ੍ਰਦੂਸ਼ਤ ਪਾਣੀ ਨਾਲ ਫੈਲਦੀ ਹੈ?", options_pa:["ਮਲੇਰੀਆ","ਹੈਜ਼ਾ","ਡੇਂਗੂ","ਟਿ.ਬੀ."], correct_answer_index:1, explanation_pa:"ਹੈਜ਼ਾ ਪ੍ਰਦੂਸ਼ਤ ਪਾਣੀ ਨਾਲ ਤੇਜ਼ੀ ਨਾਲ ਫੈਲਦਾ ਹੈ।" },

{ level: 6, question_pa:"ਭਾਰਤ ਵਿੱਚ ਜਨਸੰਖਿਆ ਦੀ ਗਿਣਤੀ ਕਿੰਨੇ ਸਾਲਾਂ ਬਾਅਦ ਕੀਤੀ ਜਾਂਦੀ ਹੈ?", options_pa:["ਹਰ 5 ਸਾਲ","ਹਰ 10 ਸਾਲ","ਹਰ 20 ਸਾਲ","ਹਰ ਸਾਲ"], correct_answer_index:1, explanation_pa:"ਭਾਰਤ ਵਿੱਚ ਹਰ 10 ਸਾਲ ਬਾਅਦ ਜਨਗਣਨਾ ਹੁੰਦੀ ਹੈ।" },

{ level: 6, question_pa:"ਮਹਾਂਸਾਗਰੀ ਪਾਣੀ ਖਾਰਾ ਕਿਉਂ ਹੁੰਦਾ ਹੈ?", options_pa:["ਬਾਰਿਸ਼ ਕਾਰਨ","ਲੂਣ ਅਤੇ ਖਣਿਜ","ਪਾਣੀ ਗਰਮ ਹੋਣ ਕਾਰਨ","ਬਰਫ਼ ਕਾਰਨ"], correct_answer_index:1, explanation_pa:"ਨਦੀਆਂ ਖਣਿਜ ਸਮੁੰਦਰਾਂ ਵਿੱਚ ਲੈ ਆਉਂਦੀਆਂ ਹਨ ਜਿਸ ਨਾਲ ਪਾਣੀ ਖਾਰਾ ਬਣਦਾ ਹੈ।" },

{ level: 6, question_pa:"ਭੂਚਾਲ ਦੀਆਂ ਲਹਿਰਾਂ ਕਿਸ ਤੋਂ ਬਣਦੀਆਂ ਹਨ?", options_pa:["ਧਰਤੀ ਦੇ ਘੁੰਮਣ ਨਾਲ","ਟੈਕਟੋਨਿਕ ਪਲੇਟਾਂ ਦੀ ਗਤੀ ਨਾਲ","ਸੂਰਜੀ ਗਰਮੀ ਨਾਲ","ਵਾਪਸੀ ਲਹਿਰਾਂ ਨਾਲ"], correct_answer_index:1, explanation_pa:"ਪਲੇਟਾਂ ਦੇ ਟਕਰਾਅ ਜਾਂ ਖਿਸਕਣ ਨਾਲ ਭੂਚਾਲ ਆਉਂਦਾ ਹੈ।" },

{ level: 6, question_pa:"ਪੰਜਾਬ ਵਿੱਚ ਧਾਨ-ਗੰਹੂੰ ਚੱਕਰ ਨਾਲ ਕਿਹੜੀ ਸਮੱਸਿਆ ਵਧੀ?", options_pa:["ਭੂਜਲ ਘਟਣਾ","ਬਰਸਾਤ ਵਧ ਗਈ","ਖੇਤੀਬਾੜੀ ਲੇਬਰ ਘਟਿਆ","ਫਸਲਾਂ ਦੀ ਕੀਮਤ ਘਟੀ"], correct_answer_index:0, explanation_pa:"ਧੀਮੀ ਗਤੀ ਨਾਲ ਪਾਣੀ ਦੀ ਕਮੀ ਵਧ ਰਹੀ ਹੈ।" },

{ level: 6, question_pa:"ਯੂਨੇਸਕੋ ਦਾ ਮੁੱਖ ਉਦੇਸ਼ ਕੀ ਹੈ?", options_pa:["ਜੰਗ ਕਰਵਾਉਣਾ","ਸਿੱਖਿਆ, ਵਿਗਿਆਨ ਅਤੇ ਸੱਭਿਆਚਾਰ ਦਾ ਵਿਕਾਸ","ਕੇਵਲ ਖੇਤੀ","ਸੁਰੱਖਿਆ"], correct_answer_index:1, explanation_pa:"ਯੂਨੇਸਕੋ ਦੁਨੀਆ ਵਿੱਚ ਸਿੱਖਿਆ ਅਤੇ ਸੱਭਿਆਚਾਰਕ ਵਿਕਾਸ ਲਈ ਕੰਮ ਕਰਦਾ ਹੈ।" },

{ level: 6, question_pa:"ਭਾਰਤ ਦਾ ਸੰਵਿਧਾਨ ਕਿਸ ਨੇ ਬਣਾਇਆ?", options_pa:["ਸੰਵਿਧਾਨ ਸਭਾ ਨੇ","ਅੰਗਰੇਜ਼ੀ ਸਰਕਾਰ ਨੇ","ਸੁਪਰੀਮ ਕੋਰਟ ਨੇ","ਰਾਸ਼ਟਰਪਤੀ ਨੇ"], correct_answer_index:0, explanation_pa:"ਫੈਸਲੇ ਸੰਵਿਧਾਨ ਸਭਾ ਨੇ ਕੀਤੇ।" },

{ level: 6, question_pa:"ਭਾਰਤ ਦੇ ਸੰਵਿਧਾਨ ਦਾ ਮੁੱਖ ਸਰੋਤ?", options_pa:["ਮਜ਼ਦੂਰ ਵਰਗ","ਵਿਦੇਸ਼ੀ ਕਾਨੂੰਨ","ਭਾਰਤੀ ਸੰਸਕ੍ਰਿਤੀ ਅਤੇ ਲੋਕ ਇੱਛਾ","ਸੈਨਾ"], correct_answer_index:2, explanation_pa:"ਜਨਤਾ ਦੀ ਇੱਛਾ ਤੇ ਆਧਾਰਿਤ ਹੈ।" },

{ level: 6, question_pa:"ਮਨੁੱਖੀ ਅਧਿਕਾਰ ਕਿਹੜੇ ਹਨ?", options_pa:["ਦਿੱਤੇ ਅਧਿਕਾਰ","ਜਨਮਜਾਤ ਅਧਿਕਾਰ","ਖਰੀਦੇ ਗਏ ਅਧਿਕਾਰ","ਸਿਰਫ਼ ਸੋਸ਼ਲ ਮੀਡੀਆ"], correct_answer_index:1, explanation_pa:"ਜਨਮ ਤੋਂ ਹਰ ਮਨੁੱਖ ਨੂੰ ਮਿਲਣ ਵਾਲੇ ਅਧਿਕਾਰ ਹਨ।" },

{ level: 6, question_pa:"ਵੋਟਰ ਹੋਣ ਲਈ ਘੱਟੋ-ਘੱਟ ਉਮਰ?", options_pa:["16 ਸਾਲ","18 ਸਾਲ","21 ਸਾਲ","25 ਸਾਲ"], correct_answer_index:1, explanation_pa:"ਭਾਰਤ ਵਿੱਚ 18 ਸਾਲ ਦਾ ਨਾਗਰਿਕ ਵੋਟ ਪਾ ਸਕਦਾ ਹੈ।" },

{ level: 6, question_pa:"ਨਾਗਰਿਕ ਸ਼ਾਮਿਲ ਹੁੰਦੇ ਹਨ ਕਿਹੜੇ ਤਰ੍ਹਾਂ ਦੇ ਕੰਮ ਵਿੱਚ?", options_pa:["ਰਾਜਨੀਤਿਕ ਪ੍ਰਕਿਰਿਆ","ਸੰਵਿਧਾਨ ਬਣਾਉਣਾ","ਸਿਰਫ਼ ਕਾਨੂੰਨ ਤੋੜਨਾ","ਸਿਰਫ਼ ਖੇਡਾਂ"], correct_answer_index:0, explanation_pa:"ਵੋਟ ਪਾਉਣਾ, ਰਾਏ ਦੇਣਾ ਆਦਿ ਰਾਜਨੀਤਿਕ ਭਾਗੀਦਾਰੀ ਹੈ।" },

{ level: 6, question_pa:"ਸਰਕਾਰ ਦਾ ਮੁੱਖ ਉਦੇਸ਼?", options_pa:["ਲੜਾਈ ਕਰਵਾਉਣਾ","ਲੋਕਾਂ ਦੀ ਭਲਾਈ","ਸਿਰਫ ਪੈਸਾ ਕਮਾਉਣਾ","ਅਮੀਰਾਂ ਦੀ ਮਦਦ"], correct_answer_index:1, explanation_pa:"ਸਰਕਾਰ ਲੋਕਾਂ ਦੀ ਭਲਾਈ ਲਈ ਕੰਮ ਕਰਦੀ ਹੈ।" },

{ level: 6, question_pa:"ਵਿਕਾਸ ਦੀ ਮਾਪ ਦਾ ਉਪਾਅ?", options_pa:["ਕੇਵਲ ਧਨ","ਕੇਵਲ ਸਿੱਖਿਆ","ਭਲਾਈ ਅਤੇ ਆਰਥਿਕ ਤਰੱਕੀ","ਸਿਰਫ਼ ਖੇਡ"], correct_answer_index:2, explanation_pa:"ਸਮਾਜਿਕ ਅਤੇ ਆਰਥਿਕ ਤਰੱਕੀ ਨੂੰ ਮਿਲਾ ਕੇ ਵਿਕਾਸ ਮਾਪਿਆ ਜਾਂਦਾ ਹੈ।" },
/* ========================= LEVEL 7 ========================= */

{ level: 7, question_pa:"ਭਾਰਤ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਵਰਤੀ ਜਾਣ ਵਾਲੀ ਭਾਸ਼ਾ ਕਿਹੜੀ ਹੈ?", options_pa:["ਅੰਗਰੇਜ਼ੀ","ਪੰਜਾਬੀ","ਉਰਦੂ","ਹਿੰਦੀ"], correct_answer_index:3, explanation_pa:"ਦੇਸ਼ ਦੀ ਵੱਡੀ ਜਨਸੰਖਿਆ ਹਿੰਦੀ ਬੋਲਦੀ ਹੈ।" },

{ level: 7, question_pa:"ਲੋਕਤੰਤਰ ਵਿੱਚ ਸਰਕਾਰ ਕਿਸ ਦੀ ਇੱਛਾ ਨਾਲ ਚਲਦੀ ਹੈ?", options_pa:["ਰਾਜੇ ਦੀ","ਅਮੀਰਾਂ ਦੀ","ਜਨਤਾ ਦੀ","ਫੌਜ ਦੀ"], correct_answer_index:2, explanation_pa:"ਲੋਕਤੰਤਰ ਵਿੱਚ ਜਨਤਾ ਸਭ ਤੋਂ ਵੱਡੀ ਹੁੰਦੀ ਹੈ।" },

{ level: 7, question_pa:"ਭਾਰਤ ਦਾ ਸੰਵਿਧਾਨ ਕਦੋਂ ਲਾਗੂ ਹੋਇਆ?", options_pa:["1947","1950","1935","1962"], correct_answer_index:1, explanation_pa:"26 ਜਨਵਰੀ 1950 ਨੂੰ ਸੰਵਿਧਾਨ ਲਾਗੂ ਹੋਇਆ।" },

{ level: 7, question_pa:"ਲੋਕ ਸਭਾ ਦੇ ਮੈਂਬਰ ਕਿਵੇਂ ਚੁਣੇ ਜਾਂਦੇ ਹਨ?", options_pa:["ਰਾਸ਼ਟਰਪਤੀ ਚੁਣਦਾ ਹੈ","ਸੁਪਰੀਮ ਕੋਰਟ ਚੁਣਦੀ ਹੈ","ਜਨਤਾ ਵੋਟਾਂ ਰਾਹੀਂ ਚੁਣਦੀ ਹੈ","ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਚੁਣਦਾ ਹੈ"], correct_answer_index:2, explanation_pa:"ਲੋਕ ਸਭਾ ਦੇ ਮੈਂਬਰ ਸਿੱਧੇ ਚੁਣੇ ਜਾਂਦੇ ਹਨ।" },

{ level: 7, question_pa:"ਰਾਸ਼ਟਰਪਤੀ ਦੇ ਚੁਣਾਅ ਵਿੱਚ ਕੌਣ ਵੋਟ ਪਾਉਂਦਾ ਹੈ?", options_pa:["ਸਾਰੇ ਨਾਗਰਿਕ","ਕੇਵਲ ਲੋਕ ਸਭਾ","ਚੁਣੇ ਹੋਏ ਵਿਧਾਇਕ ਅਤੇ ਸਾਂਸਦ","ਸੈਨਾ"], correct_answer_index:2, explanation_pa:"ਚੁਣੇ ਹੋਏ ਸਾਂਸਦ ਅਤੇ ਵਿਧਾਇਕ ਰਾਸ਼ਟਰਪਤੀ ਚੁਣਦੇ ਹਨ।" },

{ level: 7, question_pa:"ਸੰਵਿਧਾਨ ਵਿੱਚ 'ਮੁਲ਼ ਅਧਿਕਾਰ' ਕਿਸ ਲਈ ਹਨ?", options_pa:["ਸਰਕਾਰੀ ਅਧਿਕਾਰੀਆਂ ਲਈ","ਹਰ ਨਾਗਰਿਕ ਲਈ","ਸੈਨਾ ਲਈ","ਵਿਦੇਸ਼ੀਆਂ ਲਈ"], correct_answer_index:1, explanation_pa:"ਮੁਲ਼ ਅਧਿਕਾਰ ਹਰ ਨਾਗਰਿਕ ਲਈ ਹਨ।" },

{ level: 7, question_pa:"ਭਾਰਤ ਦਾ ਸਭ ਤੋਂ ਉੱਚਾ ਅਦਾਲਤੀ ਅੰਗ?", options_pa:["ਉੱਚ ਅਦਾਲਤ","ਸੁਪਰੀਮ ਕੋਰਟ","ਜ਼ਿਲ੍ਹਾ ਅਦਾਲਤ","ਲੋਕ ਅਦਾਲਤ"], correct_answer_index:1, explanation_pa:"ਸੁਪਰੀਮ ਕੋਰਟ ਸੱਭ ਤੋਂ ਉੱਚੀ ਅਦਾਲਤ ਹੈ।" },

{ level: 7, question_pa:"ਮਸ਼ਹੂਰ ਕਿਆਰਾ ਝੀਲ ਕਿੱਥੇ ਹੈ?", options_pa:["ਜੰਮੂ-ਕਸ਼ਮੀਰ","ਹਿਮਾਚਲ","ਉੱਤਰਾਖੰਡ","ਕੇਰਲ"], correct_answer_index:0, explanation_pa:"ਸ਼੍ਰੀਨਗਰ ਦੀ ਡਲ ਝੀਲ ਵਿਸ਼ਵ ਪ੍ਰਸਿੱਧ ਹੈ।" },

{ level: 7, question_pa:"ਕਿਹੜਾ ਸ਼ਹਿਰ 'ਸਟੀਲ ਸਿਟੀ ਆਫ ਇੰਡੀਆ' ਕਹਾਉਂਦਾ ਹੈ?", options_pa:["ਲੁਧਿਆਣਾ","ਜਮਸ਼ੇਦਪੁਰ","ਕਾਨਪੁਰ","ਮੁੰਬਈ"], correct_answer_index:1, explanation_pa:"ਟਾਟਾ ਸਟੀਲ ਉਦਯੋਗ ਜਮਸ਼ੇਦਪੁਰ ਵਿੱਚ ਹੈ।" },

{ level: 7, question_pa:"ਹੇਠਾਂੋਂ ਕਿਹੜਾ ਜੀਵਾਸ਼ਮ ਇਂਧਨ ਨਹੀਂ?", options_pa:["ਕੋਲਾ","ਪੈਟਰੋਲ","ਸੂਰਜੀ ਊਰਜਾ","ਕੁਦਰਤੀ ਗੈਸ"], correct_answer_index:2, explanation_pa:"ਸੂਰਜੀ ਊਰਜਾ ਨਵਿਆਉਣਯੋਗ ਸਰੋਤ ਹੈ।" },

{ level: 7, question_pa:"ਭਾਰਤ ਦੀ ‘ਧਾਨ ਦੀ ਪਿਆਲੀ’ ਕਿਹੜਾ ਰਾਜ ਕਹਾਉਂਦਾ ਹੈ?", options_pa:["ਹਰਿਆਣਾ","ਉਡੀਸਾ","ਛਤੀਸਗੜ੍ਹ","ਪੰਜਾਬ"], correct_answer_index:2, explanation_pa:"ਛਤੀਸਗੜ੍ਹ ਨੂੰ ਧਾਨ ਦੀ ਪਿਆਲੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ।" },

{ level: 7, question_pa:"ਭਾਰਤ-ਪਾਕਿਸਤਾਨ ਵਿੱਚ ਸਾਂਝਾ ਨਦੀ ਦਾ ਸਮਝੌਤਾ ਕਿਸ ਨੂੰ ਕਹਿੰਦੇ ਹਨ?", options_pa:["ਗੰਗਾ ਸਮਝੌਤਾ","ਇੰਡਸ ਵਾਟਰ ਟਰੀਟੀ","ਨਰਮਦਾ ਸਮਝੌਤਾ","ਕਾਵੇਰੀ ਸਮਝੌਤਾ"], correct_answer_index:1, explanation_pa:"ਇੰਡਸ ਵਾਟਰ ਟਰੀਟੀ 1960 ਵਿੱਚ ਹੋਈ।" },

{ level: 7, question_pa:"ਭਾਰਤ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਮਰੂਥਲ ਕਿਹੜਾ ਹੈ?", options_pa:["ਸਹਾਰਾ","ਠਾਰ","ਲੱਦਾਖ","ਕਾਲਾਹਾਰੀ"], correct_answer_index:1, explanation_pa:"ਠਾਰ ਮਰੂਥਲ ਰਾਜਸਥਾਨ ਵਿੱਚ ਹੈ।" },

{ level: 7, question_pa:"ਚੋਣ ਕਮਿਸ਼ਨ ਕਿਹੜੀ ਪੱਧਰ ਦੀ ਚੋਣ ਕਰਵਾਂਦਾ ਹੈ?", options_pa:["ਕੇਵਲ ਗ੍ਰਾਮ ਚੋਣ","ਕੇਵਲ ਰਾਜ ਚੋਣ","ਕੇਵਲ ਰਾਸ਼ਟਰੀ ਚੋਣ","ਰਾਸ਼ਟਰੀ ਅਤੇ ਰਾਜ ਚੋਣ"], correct_answer_index:3, explanation_pa:"ਚੋਣ ਕਮਿਸ਼ਨ ਰਾਜ ਅਤੇ ਰਾਸ਼ਟਰੀ ਚੋਣਾਂ ਦੀ ਦੇਖਭਾਲ ਕਰਦਾ ਹੈ।" },

{ level: 7, question_pa:"ਕਿਹੜਾ ਅਧਿਕਾਰ ਨਾਗਰਿਕ ਨੂੰ ਅਦਾਲਤ ’ਚ ਜਾਣ ਦੀ ਆਜ਼ਾਦੀ ਦਿੰਦਾ ਹੈ?", options_pa:["ਲੇਖ 370","ਲੇਖ 32","ਲੇਖ 356","ਲੇਖ 24"], correct_answer_index:1, explanation_pa:"ਲੇਖ 32 ਮੁਲ਼ ਅਧਿਕਾਰਾਂ ਦੀ ਰੱਖਿਆ ਲਈ ਹੈ।" },
/* ========================= LEVEL 8 ========================= */
{ level: 8, question_pa:"ਧਰਤੀ ’ਤੇ ਸਭ ਤੋਂ ਵੱਧ ਭੂਮਿ ਕਿਹੜੇ ਮਹਾਂਦੀਪ ਵਿੱਚ ਹੈ?", options_pa:["ਏਸ਼ੀਆ","ਅਫ਼ਰੀਕਾ","ਯੂਰਪ","ਆਸਟਰੇਲੀਆ"], correct_answer_index:0, explanation_pa:"ਏਸ਼ੀਆ ਸਭ ਤੋਂ ਵੱਡਾ ਮਹਾਂਦੀਪ ਹੈ।" },

{ level: 8, question_pa:"ਭਾਰਤ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਰੇਲਵੇ ਜੰਕਸ਼ਨ ਕਿਹੜਾ ਹੈ?", options_pa:["ਮੁੰਬਈ","ਹਾਊੜਾ","ਚੈਨਈ","ਕਾਨਪੁਰ"], correct_answer_index:1, explanation_pa:"ਹਾਊੜਾ ਭਾਰਤ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਅਤੇ ਰੁਸ਼ ਵਾਲਾ ਜੰਕਸ਼ਨ ਹੈ।" },

{ level: 8, question_pa:"ਕਪਾਹ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਉਤਪਾਦਕ ਰਾਜ?", options_pa:["ਪੰਜਾਬ","ਗੁਜਰਾਤ","ਹਰਿਆਣਾ","ਬਿਹਾਰ"], correct_answer_index:1, explanation_pa:"ਗੁਜਰਾਤ ਕਪਾਹ ਉਤਪਾਦਨ ਵਿੱਚ ਅੱਗੇ ਹੈ।" },

{ level: 8, question_pa:"ਭਾਰਤ ਦੀ ਸੋਨੇ ਦੀ ਪੰਛੀ ਕਿਹੜੀ ਕ੍ਰਾਂਤੀ ਸੀ?", options_pa:["ਹਰੀ ਕ੍ਰਾਂਤੀ","ਸਫ਼ੈਦ ਕ੍ਰਾਂਤੀ","ਪੀਲੀ ਕ੍ਰਾਂਤੀ","ਨੀਲੀ ਕ੍ਰਾਂਤੀ"], correct_answer_index:2, explanation_pa:"ਪੀਲੀ ਕ੍ਰਾਂਤੀ ਤੇਲਹਨ ਉਤਪਾਦਨ ਨਾਲ ਜੁੜੀ ਹੈ।" },

{ level: 8, question_pa:"ਜਨਗਣਨਾ 2011 ਅਨੁਸਾਰ ਭਾਰਤ ਵਿੱਚ ਪੜ੍ਹੇ-ਲਿਖੇ ਲੋਕਾਂ ਦੀ ਦਰ ਕਿੰਨੀ ਸੀ?", options_pa:["54%","62%","74%","90%"], correct_answer_index:2, explanation_pa:"2011 ਅਨੁਸਾਰ ਸਾਖਰਤਾ ਦਰ 74% ਸੀ।" },

{ level: 8, question_pa:"ਦੁਨੀਆ ਵਿੱਚ ਗ੍ਰੀਨ ਹਾਊਸ ਪ੍ਰਭਾਵ ਦਾ ਮੁੱਖ ਗੈਸ?", options_pa:["CO₂","O₂","N₂","He"], correct_answer_index:0, explanation_pa:"ਕਾਰਬਨ ਡਾਈਆਕਸਾਈਡ ਵਾਤਾਵਰਣ ਨੂੰ ਗਰਮ ਕਰਦੀ ਹੈ।" },

{ level: 8, question_pa:"ਹਵਾਈ ਜਹਾਜ਼ ਦਾ ਆਵਿਸਕਾਰ ਕਿਸ ਨੇ ਕੀਤਾ?", options_pa:["ਗ੍ਰਾਹਮ ਬੈਲ","ਰਾਈਟ ਬ੍ਰਦਰਜ਼","ਆਇੰਸਟਾਈਨ","ਨਿਊਟਨ"], correct_answer_index:1, explanation_pa:"ਰਾਈਟ ਬ੍ਰਦਰਜ਼ ਨੇ 1903 ਵਿੱਚ ਉਡਾਣ ਭਰੀ।" },

{ level: 8, question_pa:"ਭਾਰਤ ਦੀ ਪਹਿਲੀ ਉਪਗ੍ਰਹਿ ‘ਆਰਿਆਭਟ’ ਕਦੋਂ ਲਾਂਚ ਹੋਈ?", options_pa:["1965","1975","1985","1999"], correct_answer_index:1, explanation_pa:"ਆਰਿਆਭਟ 1975 ਵਿੱਚ ਲਾਂਚ ਹੋਈ।" },

{ level: 8, question_pa:"ਕਿਹੜਾ ਖੇਤਰ ‘ਵਿਕਾਸ ਦੀ ਇੰਜਣ’ ਕਹਾਉਂਦਾ ਹੈ?", options_pa:["ਖੇਤੀਬਾੜੀ","ਉਦਯੋਗ","ਸੇਵਾ","ਸਾਰੇ"], correct_answer_index:1, explanation_pa:"ਉਦਯੋਗ ਖੇਤਰ ਵਿਕਾਸ ਨੂੰ ਤੇਜ਼ੀ ਨਾਲ ਅੱਗੇ ਵਧਾਉਂਦਾ ਹੈ।" },

{ level: 8, question_pa:"ਭਾਰਤ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਦਰਿਆ ਟਾਪੂ ‘ਮਾਜੁਲੀ’ ਕਿੱਥੇ ਹੈ?", options_pa:["ਅਸਾਮ","ਪੰਜਾਬ","ਉੱਤਰਾਖੰਡ","ਗੁਜਰਾਤ"], correct_answer_index:0, explanation_pa:"ਬ੍ਰਹਮਪੁਤ੍ਰਾ ਨਦੀ ਵਿਖੇ ਅਸਾਮ ਵਿੱਚ ਹੈ।" },

{ level: 8, question_pa:"ਭੂਦਰਾਜ (Relief) ਦਾ ਅਰਥ?", options_pa:["ਮਨੁੱਖੀ ਪ੍ਰਬੰਧ","ਭੂ-ਆਕਾਰ","ਮੌਸਮ","ਨਦੀਆਂ"], correct_answer_index:1, explanation_pa:"ਭੂਦਰਾਜ ਵਿੱਚ ਪਹਾੜ, ਮੈਦਾਨ, ਪਠਾਰ ਆਉਂਦੇ ਹਨ।" },

{ level: 8, question_pa:"ਸਰਕਾਰ ਕਿਸ ਤਰ੍ਹਾਂ ਦਾ ਖੇਤਰ ਹੈ?", options_pa:["ਪ੍ਰਾਥਮਿਕ","ਦੁਤੀਆ","ਤ੍ਰਿਤੀਕ","ਚੌਥਾ"], correct_answer_index:2, explanation_pa:"ਸਰਕਾਰ ਦੁਆਰਾ ਪ੍ਰਦਾਨ ਸੇਵਾਵਾਂ ਤ੍ਰਿਤੀਕ ਖੇਤਰ ਵਿਚ ਆਉਂਦੀਆਂ ਹਨ।" },

{ level: 8, question_pa:"ਓਰਿਸਾ ਤੋਂ ਆਉਣ ਵਾਲੀ ਪ੍ਰਸਿੱਧ ਨੱਚ ਕਲਾ?", options_pa:["ਭਰਤਨਾਟਯਮ","ਓਡਿਸ਼ੀ","ਕੁਚਿਪੁਡੀ","ਕਥਕ"], correct_answer_index:1, explanation_pa:"ਓਡਿਸ਼ੀ ਨ੍ਰਿਤਯ ਓਡੀਸ਼ਾ ਦੀ ਪਰੰਪਰਾਗਤ ਕਲਾ ਹੈ।" },

{ level: 8, question_pa:"ਬਾਜ਼ਾਰ ਵਿੱਚ ਵਸਤੂਆਂ ਦੀ ਮੰਗ ਵੱਧਣ ’ਤੇ ਕੀ ਹੁੰਦਾ ਹੈ?", options_pa:["ਕੀਮਤ ਘਟਦੀ ਹੈ","ਕੀਮਤ ਵਧਦੀ ਹੈ","ਉਤਪਾਦਨ ਰੁਕ ਜਾਂਦਾ ਹੈ","ਕੋਈ ਅਸਰ ਨਹੀਂ"], correct_answer_index:1, explanation_pa:"ਮੰਗ ਵੱਧੇ ਤਾਂ ਕੀਮਤ ਵਧਣ ਦਾ ਰੁਝਾਨ ਹੈ।" },

{ level: 8, question_pa:"ਲੋਕ ਸਭਾ ਦਾ ਕਾਰਜਕਾਲ ਕਿੰਨਾ ਹੁੰਦਾ ਹੈ?", options_pa:["3 ਸਾਲ","4 ਸਾਲ","5 ਸਾਲ","7 ਸਾਲ"], correct_answer_index:2, explanation_pa:"ਲੋਕ ਸਭਾ ਦਾ ਕਾਰਜਕਾਲ 5 ਸਾਲ ਦਾ ਹੁੰਦਾ ਹੈ।" },
/* ========================= LEVEL 9 ========================= */

{ level: 9, question_pa:"ਭਾਰਤ ਵਿੱਚ ਭੂਚਾਲ ਸਭ ਤੋਂ ਵੱਧ ਕਿਸ ਖੇਤਰ ਵਿੱਚ ਆਉਂਦੇ ਹਨ?", options_pa:["ਦੱਖਣ","ਉੱਤਰ-ਪੂਰਬ","ਕੇਂਦਰ","ਪੱਛਮ"], correct_answer_index:1, explanation_pa:"ਹਿਮਾਲਿਆਈ ਪੱਟੀ ਤੇ ਉੱਤਰ-ਪੂਰਬੀ ਰਾਜ ਭੂਚਾਲ ਪ੍ਰਭਾਵਿਤ ਹਨ।" },

{ level: 9, question_pa:"ਹਿਮਾਲਿਆ ਕਿਵੇਂ ਬਣੇ?", options_pa:["ਜਵਾਲਾਮੁਖੀ ਨਾਲ","ਪਲੇਟ ਟੱਕਰ ਨਾਲ","ਸਮੁੰਦਰੀ ਤੂਫ਼ਾਨ ਨਾਲ","ਬਾੜ੍ਹਾਂ ਨਾਲ"], correct_answer_index:1, explanation_pa:"ਇੰਡੀਆ ਅਤੇ ਯੂਰੋਸ਼ੀਆ ਪਲੇਟ ਟੱਕਰ ਨਾਲ ਹਿਮਾਲਿਆ ਬਣੇ।" },

{ level: 9, question_pa:"ਭਾਰਤ ਦਾ 'ਧਾਨ ਦਾ ਘਰ' ਕਿਹੜਾ ਖੇਤਰ ਕਹਾਉਂਦਾ ਹੈ?", options_pa:["ਭਾਰਤੀ-ਗੰਗਾ ਸਮਤਲ","ਦੱਖਣੀ ਪਠਾਰ","ਪੱਛਮੀ ਘਾਟ","ਰੇਗਿਸਤਾਨ"], correct_answer_index:0, explanation_pa:"ਇੱਥੇ ਚੌਲ ਦਾ ਵੱਡਾ ਉਤਪਾਦਨ ਹੁੰਦਾ ਹੈ।" },

{ level: 9, question_pa:"ਹੇਠਾਂੋਂ ਕਿਹੜਾ ਨਕਦੀ ਫਸਲ ਹੈ?", options_pa:["ਚੌਲ","ਬਾਜਰਾ","ਗੰਨ੍ਹਾ","ਗੰਹੂੰ"], correct_answer_index:2, explanation_pa:"ਗੰਨ੍ਹਾ ਉਦਯੋਗ ਲਈ ਵਰਤੀ ਜਾਣ ਵਾਲੀ ਨਕਦੀ ਫਸਲ ਹੈ।" },

{ level: 9, question_pa:"ਭਾਰਤ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਡਾ ਅਲੂਦਗਾਰ ਉਦਯੋਗ ਕਿਹੜਾ ਹੈ?", options_pa:["ਲੋਹਾ-ਸਟੀਲ","ਰਸਾਇਣ","ਕੱਪੜਾ","ਸੀਮੈਂਟ"], correct_answer_index:2, explanation_pa:"ਕੱਪੜਾ ਉਦਯੋਗ ਸਭ ਤੋਂ ਵੱਧ ਰੋਜ਼ਗਾਰ ਦਿੰਦਾ ਹੈ।" },

{ level: 9, question_pa:"ਉਦਯੋਗਾਂ ਵਿੱਚ ਭਾਰੀ ਮਸ਼ੀਨਰੀ ਦੀ ਸਫਲਤਾ ਕਿਹੜੇ ਊਰਜਾ ਸਰੋਤ ’ਤੇ ਨਿਰਭਰ ਕਰਦੀ ਹੈ?", options_pa:["ਗੈਸ","ਬਿਜਲੀ","ਕੋਲਾ","ਡੀਜ਼ਲ"], correct_answer_index:1, explanation_pa:"ਬਿਜਲੀ ਦੇ ਬਿਨਾਂ ਉਦਯੋਗ ਚੱਲ ਨਹੀਂ ਸਕਦੇ।" },

{ level: 9, question_pa:"ਕਿਸੇ ਦੇਸ਼ ਵਿੱਚ ਵਿਕਾਸ ਦੀ ਦਰ ਮਾਪਣ ਲਈ ਕੀ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?", options_pa:["ਜੀਡੀਪੀ","ਮੌਸਮ","ਜਮੀਨ","ਭੂਚਾਲ"], correct_answer_index:0, explanation_pa:"Gross Domestic Product ਅਰਥਵਿਵਸਥਾ ਦੀ ਤਾਕਤ ਦਿਖਾਉਂਦਾ ਹੈ।" },

{ level: 9, question_pa:"ਗਰੀਬੀ ਦੇ ਮਾਪ ਦਾ ਅਧਾਰ ਕੀ ਹੁੰਦਾ ਹੈ?", options_pa:["ਆਮਦਨ","ਖੇਡਾਂ","ਕਾਲਾ ਧਨ","ਟੈਕਸ"], correct_answer_index:0, explanation_pa:"ਆਮਦਨ ਦੇ ਅਧਾਰ ’ਤੇ ਗਰੀਬੀ ਦਾ ਅੰਦਾਜ਼ ਲਗਾਇਆ ਜਾਂਦਾ ਹੈ।" },

{ level: 9, question_pa:"ਮਹਿੰਗਾਈ ਵਧਣ ਨਾਲ ਦੇਸ਼ ਵਿੱਚ ਕੀ ਪ੍ਰਭਾਵ ਪੈਂਦਾ ਹੈ?", options_pa:["ਕੀਮਤਾਂ ਘਟਦੀਆਂ ਹਨ","ਪੈਸੇ ਦੀ ਕਦਰ ਘਟਦੀ ਹੈ","ਉਤਪਾਦਨ ਘਟਦਾ ਹੈ","ਆਬਾਦੀ ਘਟਦੀ ਹੈ"], correct_answer_index:1, explanation_pa:"ਮਹਿੰਗਾਈ ਨਾਲ ਪੈਸੇ ਦੀ ਖਰੀਦਣ ਤਾਕਤ ਘਟ ਜਾਂਦੀ ਹੈ।" },

{ level: 9, question_pa:"ਭਾਰਤ ਦੇ ਯਾਤਰਾ ਅਤੇ ਵਪਾਰ ਲਈ ਸਭ ਤੋਂ ਮਹੱਤਵਪੂਰਨ ਆਵਾਜਾਈ ਮਾਰਗ?", options_pa:["ਸੜਕ","ਰੇਲ","ਹਵਾਈ","ਜਲ ਮਾਰਗ"], correct_answer_index:1, explanation_pa:"ਰੇਲਵੇ ਲੰਮਾ ਤੇ ਆਰਥਿਕ ਸਾਧਨ ਹੈ।" },

{ level: 9, question_pa:"ਵਿਸ਼ਵੀਕਰਨ ਦਾ ਮੁੱਖ ਲਾਭ?", options_pa:["ਬੇਰੋਜ਼ਗਾਰੀ ਵਧਦੀ ਹੈ","ਬਾਜ਼ਾਰ ਵਧਦਾ ਹੈ","ਮਹਿੰਗਾਈ ਰੁਕਦੀ ਹੈ","ਨਿਰਯਾਤ ਰੁਕਦਾ ਹੈ"], correct_answer_index:1, explanation_pa:"ਵਸਤੂਆਂ ਅਤੇ ਸੇਵਾਵਾਂ ਦਾ ਵਿਸ਼ਵ ਪੱਧਰੀ ਵਪਾਰ ਵਧਦਾ ਹੈ।" },

{ level: 9, question_pa:"ਖੇਤੀਬਾੜੀ ਨੂੰ ਉਦਯੋਗ ਨਾਲ ਜੋੜਨ ਲਈ ਕੀ ਲਾਜ਼ਮੀ ਹੈ?", options_pa:["ਰੋਜ਼ਗਾਰ","ਮਾਰਕੀਟ","ਖੇਡ ਮੈਦਾਨ","ਬਿਜਲੀ ਘਰ"], correct_answer_index:1, explanation_pa:"ਖਰੀਦ-ਵਿਕਰੀ ਲਈ ਮਾਰਕੀਟ ਲਾਜ਼ਮੀ ਹੈ।" },

{ level: 9, question_pa:"ਭਾਰਤ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਨਿਰਯਾਤ ਖੇਤਰ?", options_pa:["ਆਈਟੀ ਸੇਵਾ","ਖੇਤੀ","ਸੁਤ ਉਦਯੋਗ","ਕੱਚਾ ਮਾਲ"], correct_answer_index:0, explanation_pa:"ਆਈਟੀ ਸੇਵਾ ਭਾਰਤ ਦੀ ਅਰਥਵਿਵਸਥਾ ਵਿੱਚ ਮਹੱਤਵਪੂਰਨ ਯੋਗਦਾਨ ਦਿੰਦੀ ਹੈ।" },

{ level: 9, question_pa:"ਅਧਿਕਾਰ ਅਤੇ ਕਰਤਵ ਇੱਕ-ਦੂਜੇ ਨਾਲ?", options_pa:["ਕੋਈ ਸੰਬੰਧ ਨਹੀਂ","ਪੂਰੀ ਤਰ੍ਹਾਂ ਵੱਖਰੇ","ਇੱਕ ਦੂਜੇ ਦੇ ਪੂਰਕ","ਸਿਰਫ਼ ਨਾਗਰਿਕ ਲਈ"], correct_answer_index:2, explanation_pa:"ਅਧਿਕਾਰ ਅਤੇ ਕਰਤਵ ਇੱਕ ਦੂਜੇ ਦੇ ਪੂਰਕ ਹਨ।" },

{ level: 9, question_pa:"ਪਹਿਲੀ ਸਾਰਵ ਭਾਰਤੀ ਰਾਜਨੀਤਿਕ ਸੰਗਠਨ?", options_pa:["ਕਾਂਗਰਸ","ਆਰਐਸਐਸ","ਆਮ ਆਦਮੀ ਪਾਰਟੀ","ਸੂਬਾਈ ਸਭਾ"], correct_answer_index:0, explanation_pa:"1885 ਵਿੱਚ ਬਣੀ ਕਾਂਗਰਸ ਨੇ ਰਾਸ਼ਟਰੀ ਅੰਦੋਲਨ ਚਲਾਇਆ।" },
/* ========================= LEVEL 10 ========================= */
{ level: 10, question_pa:"ਭਾਰਤ ਵਿਚ ਅਨਾਜ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਭੰਡਾਰ ਕਿਹੜਾ ਸੰਗਠਨ ਕਰਦਾ ਹੈ?", options_pa:["FCI","RBI","LIC","CSIR"], correct_answer_index:0, explanation_pa:"Food Corporation of India ਅਨਾਜ ਦੀ ਖਰੀਦ ਅਤੇ ਸਟੋਰੇਜ ਕਰਦਾ ਹੈ।" },

{ level: 10, question_pa:"MSP ਦਾ ਪੂਰਾ ਨਾਂ ਕੀ ਹੈ?", options_pa:["Minimum Support Price","Maximum Selling Price","Market Selling Price","Mean Supply Price"], correct_answer_index:0, explanation_pa:"MSP ਕਿਸਾਨਾਂ ਨੂੰ ਘੱਟੋ-ਘੱਟ ਕੀਮਤ ਦੀ ਗਰੰਟੀ ਦਿੰਦਾ ਹੈ।" },

{ level: 10, question_pa:"ਸਮਾਜਿਕ ਵਿਭੇਦ ਦਾ ਮੁੱਖ ਕਾਰਨ?", options_pa:["ਸਮਾਨਤਾ","ਅਸਮਾਨਤਾ","ਭਾਈਚਾਰਾ","ਸਿੱਖਿਆ"], correct_answer_index:1, explanation_pa:"ਜਦੋਂ ਸਮਾਜ ਵਿੱਚ ਅਸਮਾਨਤਾ ਵਧਦੀ ਹੈ ਤਾਂ ਵਿਭੇਦ ਪੈਦਾ ਹੁੰਦਾ ਹੈ।" },

{ level: 10, question_pa:"ਸੰਸਦ ਦੇ ਦੋ ਸਦਨ?", options_pa:["ਰਾਜ ਸਭਾ ਅਤੇ ਲੋਕ ਸਭਾ","ਲੋਕ ਸਭਾ ਅਤੇ ਵਿਧਾਨ ਸਭਾ","ਰਾਜ ਸਭਾ ਅਤੇ ਉੱਚੀ ਅਦਾਲਤ","ਸਿਰਫ ਲੋਕ ਸਭਾ"], correct_answer_index:0, explanation_pa:"ਕੇਂਦਰੀ ਪੱਧਰ ’ਤੇ ਸੰਸਦ ਦੇ ਦੋ ਸਦਨ ਹੁੰਦੇ ਹਨ।" },

{ level: 10, question_pa:"ਰਾਜ ਸਭਾ ਦੇ ਮੈਂਬਰ ਕਿੰਨੇ ਸਾਲਾਂ ਲਈ ਚੁਣੇ ਜਾਂਦੇ ਹਨ?", options_pa:["2 ਸਾਲ","4 ਸਾਲ","6 ਸਾਲ","10 ਸਾਲ"], correct_answer_index:2, explanation_pa:"ਰਾਜ ਸਭਾ ਵਿੱਚ ਮੈਂਬਰ 6 ਸਾਲ ਲਈ ਚੁਣੇ ਜਾਂਦੇ ਹਨ।" },

{ level: 10, question_pa:"ਸੁਪਰੀਮ ਕੋਰਟ ਦਾ ਮੁੱਖ ਕੰਮ?", options_pa:["ਕਾਨੂੰਨ ਬਣਾਉਣਾ","ਕਾਨੂੰਨ ਲਾਗੂ ਕਰਨਾ","ਨਿਆਂ ਦੇਣਾ","ਚੋਣ ਕਰਵਾਉਣਾ"], correct_answer_index:2, explanation_pa:"ਸੁਪਰੀਮ ਕੋਰਟ ਨਿਆਂ ਪ੍ਰਦਾਨ ਕਰਦੀ ਹੈ।" },

{ level: 10, question_pa:"ਭਾਰਤ ਵਿੱਚ ਰਾਸ਼ਟਰਪਤੀ ਕਿਸ ਅਧੀਨ ਕੰਮ ਕਰਦਾ ਹੈ?", options_pa:["ਸੁਪਰੀਮ ਕੋਰਟ","ਸੰਵਿਧਾਨ","ਪ੍ਰਧਾਨ ਮੰਤਰੀ","ਸੈਨਾ"], correct_answer_index:1, explanation_pa:"ਰਾਸ਼ਟਰਪਤੀ ਸੰਵਿਧਾਨ ਅਨੁਸਾਰ ਕਾਰਜ ਕਰਦਾ ਹੈ।" },

{ level: 10, question_pa:"ਸੈਕੰਡਰੀ ਖੇਤਰ ਦਾ ਮੁੱਖ ਕੰਮ?", options_pa:["ਸੇਵਾਵਾਂ ਦੇਣਾ","ਨਿਰਮਾਣ ਕਰਨਾ","ਕੱਚਾ ਮਾਲ ਕੱਢਣਾ","ਜੰਗਲਾਤ"], correct_answer_index:1, explanation_pa:"ਨਿਰਮਾਣ ਕਾਰਜ ਦੂਸਰਾ ਖੇਤਰ ਹੈ।" },

{ level: 10, question_pa:"ਦਲਿਤ ਅੰਦੋਲਨ ਕਿਸ ਮੂਲ ਅਧਿਕਾਰ ਨਾਲ ਸੰਬੰਧਤ ਹੈ?", options_pa:["ਸਮਾਨਤਾ ਦਾ ਅਧਿਕਾਰ","ਧਰਮ ਦੀ ਆਜ਼ਾਦੀ","ਸੰਪਤੀ ਦਾ ਅਧਿਕਾਰ","ਅਰਥਕ ਅਧਿਕਾਰ"], correct_answer_index:0, explanation_pa:"ਦਲਿਤਾਂ ਦੇ ਹੱਕ ਸਮਾਨਤਾ ਦੇ ਅਧਿਕਾਰ ਨਾਲ ਜੁੜੇ ਹਨ।" },

{ level: 10, question_pa:"ਭਾਰਤ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਨਿਰਯਾਤ ਕੀ ਹੈ?", options_pa:["ਕੱਚਾ ਮਾਲ","ਆਈਟੀ ਸੇਵਾਵਾਂ","ਚਾਹ","ਕਪਾਹ"], correct_answer_index:1, explanation_pa:"IT ਭਾਰਤ ਦੇ ਵਿਦੇਸ਼ੀ ਵਪਾਰ ਵਿੱਚ ਮਹੱਤਵਪੂਰਨ ਯੋਗਦਾਨ ਦਿੰਦਾ ਹੈ।" },

{ level: 10, question_pa:"ਵਾਤਾਵਰਣ ਦੇ ਸੰਤੁਲਨ ਲਈ ਸਭ ਤੋਂ ਜ਼ਰੂਰੀ?", options_pa:["ਜਨਸੰਖਿਆ ਵਧਾਉਣਾ","ਵ੍ਰਿਕਸ਼ਾਰੋਪਣ","ਪਲਾਸਟਿਕ ਵਰਤੋਂ ਵਧਾਉਣਾ","ਕੋਲਾ ਜਲਾਉਣਾ"], correct_answer_index:1, explanation_pa:"ਵ੍ਰਿਕਸ਼ ਰੋਪਣ ਨਾਲ ਪ੍ਰਕ੍ਰਿਤਿਕ ਸੰਤੁਲਨ ਬਣਿਆ ਰਹਿੰਦਾ ਹੈ।" },

{ level: 10, question_pa:"ਹੇਠਾਂੋਂ ਕਿਹੜਾ ਨਵਿਆਉਣਯੋਗ ਊਰਜਾ ਸਰੋਤ ਹੈ?", options_pa:["ਕੋਲਾ","ਤੇਲ","ਸੂਰਜੀ ਊਰਜਾ","ਡੀਜ਼ਲ"], correct_answer_index:2, explanation_pa:"ਸੂਰਜੀ ਊਰਜਾ ਮੁੜ ਪ੍ਰਾਪਤ ਹੋ ਸਕਦੀ ਹੈ।" },

{ level: 10, question_pa:"ਭਾਰਤ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਰੋਜ਼ਗਾਰ ਕਿਹੜਾ ਖੇਤਰ ਦਿੰਦਾ ਹੈ?", options_pa:["ਸੇਵਾ","ਪ੍ਰਾਥਮਿਕ","ਦੂਸਰਾ","ਆਈਟੀ"], correct_answer_index:1, explanation_pa:"ਅਜੇ ਵੀ ਭਾਰਤ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਰੋਜ਼ਗਾਰ ਖੇਤੀ ਦਿੰਦੀ ਹੈ।" },

{ level: 10, question_pa:"DBT ਸਕੀਮ ਕਿਹੜੇ ਮਾਦਿਆਂ ਲਈ ਹੈ?", options_pa:["ਸਿੱਧੀ ਰਕਮ ਟਰਾਂਸਫ਼ਰ","ਸੈਨਾ","ਵਪਾਰ","ਖੇਡਾਂ"], correct_answer_index:0, explanation_pa:"Direct Benefit Transfer ਨਾਲ ਲਾਭ ਸਿੱਧੇ ਖਾਤੇ ਵਿੱਚ ਪਹੁੰਚਦਾ ਹੈ।" },

{ level: 10, question_pa:"ਜਲਵਾਯੂ ਪਰੀਵਰਤਨ ਦਾ ਮੁੱਖ ਕਾਰਨ?", options_pa:["ਓਜ਼ੋਨ ਦੀ ਮੁਰੰਮਤ","ਗ੍ਰੀਨ ਹਾਊਸ ਗੈਸਾਂ","ਬਰਫ਼ ਘਟਣਾ ਨਿਉਂਤਾ ਹੈ","ਦੇਸ਼ਾਂ ਦੀ ਦੋਸਤੀ"], correct_answer_index:1, explanation_pa:"ਗ੍ਰੀਨ ਹਾਊਸ ਗੈਸਾਂ ਨਾਲ ਗਲੋਬਲ ਵਾਰਮਿੰਗ ਵਧਦੀ ਹੈ।" },
/* ========================= LEVEL 11 ========================= */
{ level: 11, question_pa:"ਇੰਡਸ ਵਾਟਰ ਟਰੀਟੀ 1960 ਅਨੁਸਾਰ ਕਿਹੜੀਆਂ ਨਦੀਆਂ ਭਾਰਤ ਨੂੰ ਮਿਲੀਆਂ?", options_pa:["ਸਤਲੁਜ, ਬਿਆਸ, ਰਾਵੀ","ਝੇਲਮ, ਚਿਨਾਬ, ਰਾਵੀ","ਗੰਗਾ, ਯਮੁਨਾ, ਘਾਘਰਾ","ਨਰਮਦਾ, ਤਾਪਤੀ, ਲੂਣ"], correct_answer_index:0, explanation_pa:"ਸਤਲੁਜ, ਬਿਆਸ ਅਤੇ ਰਾਵੀ ਦਾ ਪਾਣੀ ਭਾਰਤ ਦੇ ਹਿੱਸੇ ਹੈ।" },

{ level: 11, question_pa:"ਭਾਰਤ ਵਿੱਚ ਰਾਸ਼ਟਰੀ ਪੰਛੀ ਕਿਹੜਾ ਹੈ?", options_pa:["ਮੋਰ","ਗਿੱਲ੍ਹੀ","ਬਾਜ","ਹੰਸ"], correct_answer_index:0, explanation_pa:"ਮੋਰ ਨੂੰ ਭਾਰਤ ਦਾ ਰਾਸ਼ਟਰੀ ਪੰਛੀ ਮੰਨਿਆ ਗਿਆ ਹੈ।" },

{ level: 11, question_pa:"ਪਾਵਰਲੂਮ ਉਦਯੋਗ ਕਿਹੜੀ ਵਸਤੂ ਨਾਲ ਸੰਬੰਧਿਤ ਹੈ?", options_pa:["ਪਲਾਸਟਿਕ","ਕੱਪੜਾ","ਸੀਮੈਂਟ","ਕਾਗਜ਼"], correct_answer_index:1, explanation_pa:"ਪਾਵਰਲੂਮ ਕੱਪੜੇ ਦੀ ਤਿਆਰੀ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।" },

{ level: 11, question_pa:"ਸੰਸਾਰ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਚਾਹ ਨਿਰਮਾਤਾ ਦੇਸ਼?", options_pa:["ਭਾਰਤ","ਚੀਨ","ਸ੍ਰੀਲੰਕਾ","ਜਪਾਨ"], correct_answer_index:1, explanation_pa:"ਚੀਨ ਚਾਹ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਨਿਰਮਾਤਾ ਹੈ।" },

{ level: 11, question_pa:"‘ਗਰੀਬੀ ਹਟਾਓ’ ਨਾਰਾ ਕਿਸ ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਨੇ ਦਿੱਤਾ?", options_pa:["ਅਟਲ ਬਿਹਾਰੀ ਵਾਜਪੇਈ","ਇੰਦਰਾ ਗਾਂਧੀ","ਜਵਾਹਰ ਲਾਲ ਨੇਹਰੂ","ਲਾਲ ਬਹਾਦੁਰ ਸ਼ਾਸ਼ਤਰੀ"], correct_answer_index:1, explanation_pa:"ਇੰਦਰਾ ਗਾਂਧੀ ਨੇ 1971 ਵਿੱਚ ਇਹ ਨਾਰਾ ਦਿੱਤਾ।" },

{ level: 11, question_pa:"ਹੇਠਾਂੋਂ ਕਿਹੜੀ ਨਜ਼ਮ ਰਬਿੰਦਰਨਾਥ ਟੈਗੋਰ ਨੇ ਲਿਖੀ?", options_pa:["ਜਨ ਗਣ ਮਨ","ਵੰਦੇ ਮਾਤਰਮ","ਸਾਰੇ ਜਹਾਂ ਤੋਂ ਅੱਛਾ","ਹਮ ਦੇਖੇਂਗੇ"], correct_answer_index:0, explanation_pa:"ਜਨ ਗਣ ਮਨ ਭਾਰਤ ਦਾ ਰਾਸ਼ਟਰੀ ਗੀਤ ਹੈ।" },

{ level: 11, question_pa:"ਭਾਰਤ ਵਿੱਚ ਸਿੱਖਿਆ ਦਾ ਅਧਿਕਾਰ ਕਿਸ ਲੇਖ ਹੇਠ ਹੈ?", options_pa:["ਲੇਖ 21A","ਲੇਖ 356","ਲੇਖ 370","ਲੇਖ 32"], correct_answer_index:0, explanation_pa:"ਲੇਖ 21A ਅਨੁਸਾਰ 6 ਤੋਂ 14 ਸਾਲ ਦੇ ਬੱਚਿਆਂ ਲਈ ਸਿੱਖਿਆ ਲਾਜ਼ਮੀ ਹੈ।" },

{ level: 11, question_pa:"ਮਹਾਰਾਸ਼ਟਰ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਖੇਤੀ ਕਿਹੜੀ ਹੁੰਦੀ ਹੈ?", options_pa:["ਗੰਹੂੰ","ਧਾਨ","ਗੰਨ੍ਹਾ","ਕਪਾਹ"], correct_answer_index:3, explanation_pa:"ਮਹਾਰਾਸ਼ਟਰ ਵਿੱਚ ਕਪਾਹ ਦੀ ਖੇਤੀ ਵੱਧ ਹੈ।" },

{ level: 11, question_pa:"ਉਦਯੋਗੀਕਰਨ ਦੇ ਨਕਾਰਾਤਮਕ ਪ੍ਰਭਾਵਾਂ ਵਿੱਚੋਂ ਇੱਕ?", options_pa:["ਹਵਾ ਪ੍ਰਦੂਸ਼ਣ","ਰੋਜ਼ਗਾਰ ਵਾਧਾ","ਆਮਦਨ ਵਾਧਾ","ਸੇਵਾਵਾਂ ਵਿੱਚ ਵਾਧਾ"], correct_answer_index:0, explanation_pa:"ਉਦਯੋਗ ਪ੍ਰਦੂਸ਼ਣ ਦਾ ਮੁੱਖ ਸਰੋਤ ਹਨ।" },

{ level: 11, question_pa:"ਭਾਰਤ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਜੰਗਲ ਕਿਸ ਰਾਜ ਵਿੱਚ?", options_pa:["ਮੱਧ ਪ੍ਰਦੇਸ਼","ਪੰਜਾਬ","ਹਰਿਆਣਾ","ਗੁਜਰਾਤ"], correct_answer_index:0, explanation_pa:"ਮੱਧ ਪ੍ਰਦੇਸ਼ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਜੰਗਲ ਹਨ।" },

{ level: 11, question_pa:"ਮੌਸਮੀ ਬਾਰਿਸ਼ ਭਾਰਤ ਵਿਚ ਕਦੋਂ ਆਉਂਦੀ ਹੈ?", options_pa:["ਦਸੰਬਰ-ਜਨਵਰੀ","ਮਾਰਚ-ਅਪ੍ਰੈਲ","ਜੂਨ-ਸਤੰਬਰ","ਅਕਤੂਬਰ"], correct_answer_index:2, explanation_pa:"ਜੂਨ ਤੋਂ ਸਤੰਬਰ ਤੱਕ ਦੱਖਣ-ਪੱਛਮੀ ਮਾਨਸੂਨ ਆਉਂਦਾ ਹੈ।" },

{ level: 11, question_pa:"ਰਾਸ਼ਟਰੀ ਆਦਰਸ਼ (National Values) ਕਿੱਥੇ ਲਿਖੇ ਹਨ?", options_pa:["ਨੀਤੀ ਨਿਰਦੇਸ਼ਕ ਤੱਤ","ਮੁਖੜਾ","ਪ੍ਰਾਸੰਗਿਕ ਟਿੱਪਣੀ","ਪ੍ਰਸਤਾਵਨਾ"], correct_answer_index:3, explanation_pa:"ਪ੍ਰਸਤਾਵਨਾ ਵਿੱਚ ਸਮਾਨਤਾ, ਨਿਆਂ ਆਦਿ ਆਦਰਸ਼ ਹਨ।" },

{ level: 11, question_pa:"ਭਾਰਤ ਸੰਵਿਧਾਨ ਅਨੁਸਾਰ ਭਾਰਤ ਦਾ ਰਾਜਮੁੱਖ ਕੌਣ?", options_pa:["ਪ੍ਰਧਾਨ ਮੰਤਰੀ","ਰਾਸ਼ਟਰਪਤੀ","ਲੋਕ ਸਭਾ ਸਪੀਕਰ","ਗਵਰਨਰ"], correct_answer_index:1, explanation_pa:"ਰਾਸ਼ਟਰਪਤੀ ਰਾਜਮੁੱਖ ਹੈ।" },

{ level: 11, question_pa:"ਚੋਣਾਂ ਵਿੱਚ ‘ਨੋਟਾ’ ਦਾ ਅਰਥ?", options_pa:["ਕੋਈ ਸਰਕਾਰ ਨਹੀਂ","ਉਪਰੋਕਤ ਵਿੱਚੋਂ ਕੋਈ ਨਹੀਂ","ਸਿਰਫ਼ ਨਾਮਮਾਤਰ ਵੋਟ","ਨਵੀਂ ਪਾਰਟੀ"], correct_answer_index:1, explanation_pa:"NOTA = None Of The Above" },

{ level: 11, question_pa:"ਰਾਜ ਸਭਾ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਮੈਂਬਰ?", options_pa:["200","230","238","250"], correct_answer_index:3, explanation_pa:"ਰਾਜ ਸਭਾ ਦੀ ਵੱਧ ਤੋਂ ਵੱਧ ਸੀਟਾਂ 250 ਹਨ।" },
/* ========================= LEVEL 12 ========================= */
{ level: 12, question_pa:"ਭਾਰਤ ਵਿਚ ਰਾਜਪਾਲ ਕਿਸ ਦੇਸ਼ ਦਾ ਪ੍ਰਤੀਨਿਧੀ ਹੁੰਦਾ ਹੈ?", options_pa:["ਸੁਪਰੀਮ ਕੋਰਟ","ਸੰਵਿਧਾਨ","ਰਾਸ਼ਟਰਪਤੀ","ਪ੍ਰਧਾਨ ਮੰਤਰੀ"], correct_answer_index:2, explanation_pa:"ਰਾਜਪਾਲ ਰਾਜ ਵਿੱਚ ਰਾਸ਼ਟਰਪਤੀ ਦਾ ਪ੍ਰਤੀਨਿਧੀ ਹੁੰਦਾ ਹੈ।" },

{ level: 12, question_pa:"ਕਿਹੜੇ ਖੇਤਰ ਵਿੱਚ ਤਕਨੀਕ ਦੀ ਵਰਤੋਂ ਸਭ ਤੋਂ ਵੱਧ ਹੈ?", options_pa:["ਖਣਿਜ","ਸੇਵਾ ਖੇਤਰ","ਪਸ਼ੂਪਾਲਨ","ਜੰਗਲਾਤ"], correct_answer_index:1, explanation_pa:"ਸੇਵਾ ਖੇਤਰ ਵਿੱਚ ਇੰਟਰਨੈੱਟ ਤੇ ਤਕਨੀਕ ਦਾ ਵੱਡਾ ਯੋਗਦਾਨ ਹੈ।" },

{ level: 12, question_pa:"ਮਾਨਸੂਨ ਦੇਰੀ ਨਾਲ ਆਉਣ ਨਾਲ ਕਿਸਾਨਾਂ ਨੂੰ?", options_pa:["ਜ਼ਿਆਦਾ ਮਦਦ","ਫਸਲ ਨੂੰ ਨੁਕਸਾਨ","ਜਲ ਸਰੋਤ ਵਧਦੇ ਹਨ","ਬਾਜ਼ਾਰ ਖੁਸ਼"], correct_answer_index:1, explanation_pa:"ਮਾਨਸੂਨ ਦੇਰੀ ਨਾਲ ਆਉਣ ਕਾਰਨ ਬੀਜਾਈ ਪ੍ਰਭਾਵਿਤ ਹੁੰਦੀ ਹੈ।" },

{ level: 12, question_pa:"‘ਸਰਵੋਚ ਨਿਆਂਲੈ’ ਕਿਸ ਤਰ੍ਹਾਂ ਦੀ ਅਦਾਲਤ ਹੈ?", options_pa:["ਜ਼ਿਲ੍ਹਾ","ਤਲਕ","ਦੇਸ਼ ਦੀ ਸਭ ਤੋਂ ਉੱਚੀ","ਲੋਕ ਅਦਾਲਤ"], correct_answer_index:2, explanation_pa:"ਸੁਪਰੀਮ ਕੋਰਟ ਦੇਸ਼ ਦੀ ਸਭ ਤੋਂ ਉੱਚੀ ਅਦਾਲਤ ਹੈ।" },

{ level: 12, question_pa:"ਮੌਸਮ ਦੀ ਨਿਗਰਾਨੀ ਕਰਨ ਵਾਲਾ ਵਿਭਾਗ?", options_pa:["ISRO","BSNL","IMD","IRCTC"], correct_answer_index:2, explanation_pa:"India Meteorological Department ਮੌਸਮ ਦੀ ਭਵਿੱਖਬਾਣੀ ਕਰਦਾ ਹੈ।" },

{ level: 12, question_pa:"ਭਾਰਤ ਵਿੱਚ ਰਾਜ ਸਭਾ ਨੂੰ ਹੋਰ ਕੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?", options_pa:["ਉੱਚ ਸਭਾ","ਨੀਵੀਂ ਸਭਾ","ਲੋਕਾਂ ਦੀ ਸਭਾ","ਸਿੱਧੀ ਚੋਣ ਸਭਾ"], correct_answer_index:0, explanation_pa:"ਰਾਜ ਸਭਾ ਉੱਚ ਸਭਾ ਹੈ।" },

{ level: 12, question_pa:"‘ਰਿਜ਼ਰਵ ਬੈਂਕ ਆਫ ਇੰਡੀਆ’ ਦੀ ਮੁੱਖ ਭੂਮਿਕਾ ਕੀ ਹੈ?", options_pa:["ਕਾਨੂੰਨ ਬਣਾਉਣਾ","ਵੋਟਿੰਗ ਕਰਵਾਉਣਾ","ਮੁਦਰਾ ਜਾਰੀ ਕਰਨਾ","ਖਾਦ ਪੈਦਾ ਕਰਨਾ"], correct_answer_index:2, explanation_pa:"RBI ਦੇਸ਼ ਦੀ ਮੁਦਰਾ ਅਤੇ ਬੈਂਕਿੰਗ ਪ੍ਰਣਾਲੀ ਸੰਭਾਲਦਾ ਹੈ।" },

{ level: 12, question_pa:"ਉਦਾਸੀਨਤਾ (Apathy) ਕਿਸ ਨੂੰ ਕਹਿੰਦੇ ਹਨ?", options_pa:["ਕੋਈ ਰੁਚੀ ਨਾ ਹੋਣਾ","ਹੱਦ ਤੋਂ ਜ਼ਿਆਦਾ ਰੁਚੀ","ਅੰਧ ਵਿਸ਼ਵਾਸ","ਹਿੰਸਾ"], correct_answer_index:0, explanation_pa:"ਸਮਾਜਿਕ ਮੁੱਦਿਆਂ ਤੋਂ ਬੇ-ਰੁਖ਼ੀ ਉਦਾਸੀਨਤਾ ਹੈ।" },

{ level: 12, question_pa:"GDP ਦਾ ਕਮ ਹੁੰਦਾ ਅਰਥ ਕੀ ਹੈ?", options_pa:["ਦੇਸ਼ ਦੀ ਕੁੱਲ ਆਮਦਨ","ਦੇਸ਼ ਦੀ ਕੁੱਲ ਜਨਸੰਖਿਆ","ਜੰਗਲਾਂ ਦੀ ਗਿਣਤੀ","ਚੋਣ ਦਾ ਨਤੀਜਾ"], correct_answer_index:0, explanation_pa:"GDP ਦੇਸ਼ ਦੀ ਕੁੱਲ ਆਰਥਿਕ ਉਤਪਾਦਨ ਦੱਸਦਾ ਹੈ।" },

{ level: 12, question_pa:"ਮੀਠਾ ਪਾਣੀ ਸਭ ਤੋਂ ਵੱਧ ਕਿੱਥੇ ਸਟੋਰ ਹੁੰਦਾ ਹੈ?", options_pa:["ਦਰਿਆ","ਝੀਲ","ਹਿਮਪਾਤ (ਗਲੇਸ਼ੀਅਰ)","ਸਮੁੰਦਰ"], correct_answer_index:2, explanation_pa:"ਧਰਤੀ ਦਾ ਜ਼ਿਆਦਾਤਰ ਮਿੱਠਾ ਪਾਣੀ ਬਰਫ਼ ਰੂਪ ਵਿੱਚ ਹੈ।" },

{ level: 12, question_pa:"ਮਹਿਲਾਵਾਂ ਨੂੰ ਵੋਟ ਦਾ ਹੱਕ ਭਾਰਤ ਵਿੱਚ ਕਦੋਂ ਮਿਲਿਆ?", options_pa:["1919","1947","1950","1960"], correct_answer_index:2, explanation_pa:"1950 ਤੋਂ ਹੀ ਪੁਰਸ਼ਾਂ ਦੇ ਬਰਾਬਰ ਹੱਕ ਦਿੱਤੇ ਗਏ।" },

{ level: 12, question_pa:"ਹਵਾਈ ਆਵਾਜਾਈ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਲਾਭ?", options_pa:["ਸਸਤੀ","ਤੇਜ਼","ਬਿਨਾਂ ਊਰਜਾ","ਖ਼ਤਰੇ ਰਹਿਤ"], correct_answer_index:1, explanation_pa:"ਹਵਾਈ ਆਵਾਜਾਈ ਸਭ ਤੋਂ ਤੇਜ਼ ਹੈ।" },

{ level: 12, question_pa:"ਜਨਸੰਖਿਆ ਦੀ ਘਣਤਾ ਦਾ ਅਰਥ?", options_pa:["ਕੁੱਲ ਜਨਸੰਖਿਆ","ਪ੍ਰਤੀ ਵਰਗ ਕਿਲੋਮੀਟਰ ਲੋਕ","ਵੱਡੇ ਲੋਕਾਂ ਦੀ ਜਨਸੰਖਿਆ","ਗਰੀਬਾਂ ਦਾ ਅਨੁਪਾਤ"], correct_answer_index:1, explanation_pa:"ਘਣਤਾ = ਪ੍ਰਤੀ ਵਰਗ ਕਿਲੋਮੀਟਰ ਆਬਾਦੀ।" },

{ level: 12, question_pa:"ਵਾਤਾਵਰਣ ਵਿੱਚ CO₂ ਵਧਣ ਨਾਲ ਕੀ ਪ੍ਰਭਾਵ ਹੁੰਦਾ ਹੈ?", options_pa:["ਪ੍ਰਦੂਸ਼ਣ ਘਟੇ","ਹਿਮਪਾਤ ਵਧੇ","ਤਾਪਮਾਨ ਵਧੇ","ਫਸਲਾਂ ਘੱਟ"], correct_answer_index:2, explanation_pa:"CO₂ ਵਧਣ ਨਾਲ ਗ੍ਰਹਿ ਤਾਪ ਵਧਦਾ ਹੈ।" },

{ level: 12, question_pa:"ਭਾਰਤ ’ਚ ਸਭ ਤੋਂ ਵੱਧ ਆਬਾਦੀ ਕਿਸ ਉਮਰ ਵਰਗ ਵਿੱਚ ਹੈ?", options_pa:["5–10 ਸਾਲ","25–59 ਸਾਲ","15–59 ਸਾਲ","60+ ਸਾਲ"], correct_answer_index:2, explanation_pa:"15–59 ਸਾਲ ਦੇ ਉਮਰਵਰਗ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਜਨਸੰਖਿਆ ਹੈ।" },
/* ========================= LEVEL 13 ========================= */

{ level: 13, question_pa:"ਜਨਸੰਖਿਆ ਦਾ ਬੋਝ ਸਭ ਤੋਂ ਵੱਧ ਕਿਸ ਉੱਤੇ ਪੈਂਦਾ ਹੈ?", options_pa:["ਸਿੱਖਿਆ ’ਤੇ","ਆਰਥਿਕ ਸੰਸਾਧਨਾਂ ’ਤੇ","ਧਰਮ ’ਤੇ","ਕਲਾ ’ਤੇ"], correct_answer_index:1, explanation_pa:"ਵੱਧ ਜਨਸੰਖਿਆ ਨਾਲ ਰੋਜ਼ਗਾਰ, ਖਾਦ ਅਤੇ ਰਿਹਾਇਸ਼ ਉੱਤੇ ਦਬਾਅ ਪੈਂਦਾ ਹੈ।" },

{ level: 13, question_pa:"ਸੁਪਰੀਮ ਕੋਰਟ ਕਿਸ ਅਧਿਕਾਰ ਦਾ ਰੱਖਿਆਕ ਹੈ?", options_pa:["ਸੰਪਤੀ","ਮੁਲ਼ ਅਧਿਕਾਰ","ਪਦ ਅਤੇ ਪਰਿਵਾਰ","ਕੇਵਲ ਚੋਣ"], correct_answer_index:1, explanation_pa:"ਸੁਪਰੀਮ ਕੋਰਟ ਮੁਲ਼ ਅਧਿਕਾਰਾਂ ਦੀ ਰੱਖਿਆ ਕਰਦੀ ਹੈ।" },

{ level: 13, question_pa:"ਪ੍ਰਿਵੇਂਸ਼ਨ ਆਫ ਕਰਪਸ਼ਨ ਐਕਟ ਕਿਸ ਲਈ ਬਣਾਇਆ ਗਿਆ?", options_pa:["ਗਰੀਬੀ ਹਟਾਉਣ","ਰਿਸ਼ਵਤਖੋਰੀ ਰੋਕਣ","ਅਧਿਕਾਰੀ ਵਧਾਉਣ","ਚੋਣ ਕਰਵਾਉਣ"], correct_answer_index:1, explanation_pa:"ਇਸ ਕਾਨੂੰਨ ਦਾ ਮਕਸਦ ਭ੍ਰਿਸ਼ਟਾਚਾਰ ਰੋਕਣਾ ਹੈ।" },

{ level: 13, question_pa:"ਭਾਰਤ ਵਿੱਚ ਹਵਾ ਪ੍ਰਦੂਸ਼ਣ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਸਰੋਤ?", options_pa:["ਵਾਹਨ","ਖੇਡਾਂ","ਮਨੋਰੰਜਨ","ਸੰਗੀਤ"], correct_answer_index:0, explanation_pa:"ਵੱਡੇ ਸ਼ਹਿਰਾਂ ਵਿੱਚ ਵਾਹਨ ਹਵਾ ਪ੍ਰਦੂਸ਼ਣ ਦਾ ਮੁੱਖ ਕਾਰਨ ਹਨ।" },

{ level: 13, question_pa:"ਭਾਰਤ ਦਾ ਸਭ ਤੋਂ ਵੱਡਾ ਕਪਾਹ ਉਤਪਾਦਕ ਰਾਜ?", options_pa:["ਪੰਜਾਬ","ਗੁਜਰਾਤ","ਬਿਹਾਰ","ਅਸਾਮ"], correct_answer_index:1, explanation_pa:"ਗੁਜਰਾਤ ਕਪਾਹ ਵਿੱਚ ਅਗੇ ਹੈ।" },

{ level: 13, question_pa:"ਰਾਸ਼ਟਰਪਤੀ ਐਮਰਜੈਂਸੀ ਕਿੱਥੇ ਲਗਾ ਸਕਦਾ ਹੈ?", options_pa:["ਰਾਜਾਂ ’ਤੇ","ਸਿਰਫ਼ ਇੱਕ ਜ਼ਿਲ੍ਹਾ","ਕਿਸੇ ਇੱਕ ਵਿਭਾਗ ’ਤੇ","ਸਿਰਫ਼ ਅਦਾਲਤ ’ਤੇ"], correct_answer_index:0, explanation_pa:"ਸੰਵਿਧਾਨ ਅਨੁਸਾਰ ਸੰਪੂਰਨ ਰਾਜ ’ਤੇ ਲਗ ਸਕਦੀ ਹੈ।" },

{ level: 13, question_pa:"ਐਲੁਮੀਨੀਅਮ ਦਾ ਮੁੱਖ ਅਯਸ?", options_pa:["ਚੂਨਾ ਪੱਥਰ","ਬਾਕਸਾਈਟ","ਤਾਂਬਾ","ਕੋਇਲਾ"], correct_answer_index:1, explanation_pa:"ਐਲੁਮੀਨੀਅਮ ਬਾਕਸਾਈਟ ਤੋਂ ਤਿਆਰ ਹੁੰਦਾ ਹੈ।" },

{ level: 13, question_pa:"ਪ੍ਰਾਇਮਰੀ ਖੇਤਰ ਵਿੱਚ ਕੰਮ ਦਾ ਮੁੱਖ ਰੂਪ?", options_pa:["ਉਦਯੋਗ","ਸੇਵਾਵਾਂ","ਖੇਤੀ ਅਤੇ ਕੱਚਾ ਮਾਲ","ਵਪਾਰ"], correct_answer_index:2, explanation_pa:"ਪ੍ਰਾਇਮਰੀ ਖੇਤਰ ਖੇਤੀ, ਮੱਛਲੀਪਾਲਨ, ਜੰਗਲਾਤ ਤੇ ਨਿਰਭਰ ਹੈ।" },

{ level: 13, question_pa:"ਹਾਊਸਿੰਗ ਬੋਰਡ ਦਾ ਮੁੱਖ ਲਕਸ਼?", options_pa:["ਮਹਿੰਗੇ ਘਰ ਵੇਚਣਾ","ਘੱਟ ਲਾਗਤ ਵਾਲੇ ਘਰ","ਜੰਗਲ ਵਧਾਉਣਾ","ਖੇਤੀ ਵਧਾਉਣਾ"], correct_answer_index:1, explanation_pa:"ਇਹ ਆਮ ਜਨਤਾ ਨੂੰ ਸਸਤੇ ਘਰ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।" },

{ level: 13, question_pa:"ਹੇਠਾਂੋਂ ਕਿਹੜਾ ਅਨੁਕੂਲ ਜਲਵਾਯੂ ਵਾਲਾ ਫਲ ਹੈ?", options_pa:["ਅਨਾਰ","ਦਰਿਆਈ ਮੱਛੀ","ਤਾਮਾ","ਤੇਲ"], correct_answer_index:0, explanation_pa:"ਅਨਾਰ ਸੁਕੇ ਤੇ ਗਰਮ ਖੇਤਰਾਂ ਵਿੱਚ ਵਧੀਆ ਹੁੰਦਾ ਹੈ।" },

{ level: 13, question_pa:"ਮਹਿਲਾਵਾਂ ਲਈ 33% ਰਿਜ਼ਰਵੇਸ਼ਨ ਕਿੱਥੇ?", options_pa:["ਰਾਜ ਸਭਾ","ਪੰਚਾਇਤਾਂ ਤੇ ਨਗਰ ਨਿਗਮ","ਲੋਕ ਸਭਾ","ਸੁਪਰੀਮ ਕੋਰਟ"], correct_answer_index:1, explanation_pa:"ਸਥਾਨਕ ਚੁਣੇ ਸੰਗਠਨਾਂ ਵਿੱਚ ਮਹਿਲਾਵਾਂ ਲਈ ਰਿਜ਼ਰਵੇਸ਼ਨ ਹੈ।" },

{ level: 13, question_pa:"ਸਰੋਤਾਂ ਦੀ ਸੁਰੱਖਿਆ ਲਈ ਸਭ ਤੋਂ ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਤਰੀਕਾ?", options_pa:["ਬੇਹਿਸਾਬ ਖਪਤ","ਰੀਸਾਈਕਲ","ਜੰਗਲ ਕਟਾਈ","ਕੂੜਾ ਵਧਾਉਣਾ"], correct_answer_index:1, explanation_pa:"ਰੀਸਾਈਕਲ ਨਾਲ ਸਰੋਤਾਂ ਦੀ ਬਚਤ ਹੁੰਦੀ ਹੈ।" },

{ level: 13, question_pa:"ਦਲ-ਬਦਲੀ ਰੋਕੂ ਕਾਨੂੰਨ ਕਦੋਂ ਲਾਗੂ ਹੋਇਆ?", options_pa:["1960","1985","2005","1999"], correct_answer_index:1, explanation_pa:"1985 ਵਿੱਚ 52ਵੀਂ ਸੋਧ ਦੁਆਰਾ ਲਾਗੂ ਹੋਇਆ।" },

{ level: 13, question_pa:"ਬ੍ਰਾਡਕਾਸਟਿੰਗ ਦਾ ਉਦਾਹਰਣ?", options_pa:["ਮੋਬਾਇਲ ਕਾਲ","ਦੂਰਦਰਸ਼ਨ","ਲਿਫ਼ਟ","ਰੇਲ"], correct_answer_index:1, explanation_pa:"ਦੂਰਦਰਸ਼ਨ ਸੰਦੇਸ਼ ਨੂੰ ਇੱਕ ਤੋਂ ਕਈ ਦਰਸ਼ਕਾਂ ਤੱਕ ਪਹੁੰਚਾਉਂਦਾ ਹੈ।" },

{ level: 13, question_pa:"ਜਨਤਕ ਵੰਡ ਪ੍ਰਣਾਲੀ (PDS) ਦਾ ਮੁੱਖ ਲਕਸ਼?", options_pa:["ਅਮੀਰਾਂ ਲਈ ਖਾਸ ਅਨਾਜ","ਸਸਤਾ ਅਨਾਜ ਗਰੀਬਾਂ ਨੂੰ","ਵਾਹਨ ਪ੍ਰਦੂਸ਼ਣ","ਮੰਦੀ ਵਧਾਉਣਾ"], correct_answer_index:1, explanation_pa:"PDS ਰਾਹੀਂ ਗਰੀਬਾਂ ਨੂੰ ਰਾਸ਼ਨ ਘੱਟ ਕੀਮਤ ’ਤੇ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ।" },
/* ========================= LEVEL 14 ========================= */

{ level: 14, question_pa:"CO₂ ਵਿੱਚ ਵਧੋਤਰੀ ਨਾਲ ਸਭ ਤੋਂ ਵੱਡਾ ਖਤਰਾ?", options_pa:["ਬਾਰਿਸ਼ ਵਧਣਾ","ਗ੍ਰਹਿ ਤਾਪ ਵਧਣਾ","ਪਹਾੜ ਵੱਧਣਾ","ਸਮੁੰਦਰ ਘੱਟਣਾ"], correct_answer_index:1, explanation_pa:"CO₂ ਨਾਲ ਗ੍ਰੀਨਹਾਊਸ ਪ੍ਰਭਾਵ ਵਧਦਾ ਹੈ ਜਿਸ ਨਾਲ ਤਾਪਮਾਨ ਵਧਦਾ ਹੈ।" },

{ level: 14, question_pa:"ਭਾਰਤ ਵਿੱਚ ਬਹੁਦਲੀ ਪ੍ਰਣਾਲੀ ਦਾ ਲਾਭ?", options_pa:["ਕੇਵਲ ਇੱਕ ਰਾਇ","ਜਨਤਾ ਨੂੰ ਵੱਧ ਵਿਕਲਪ","ਚੋਣਾਂ ਨਹੀਂ","ਜਨਤੰਤਰ ਨਹੀਂ"], correct_answer_index:1, explanation_pa:"ਬਹੁਦਲੀ ਪ੍ਰਣਾਲੀ ਵਿੱਚ ਵੋਟਰਾਂ ਨੂੰ ਚੋਣ ਲਈ ਵੱਧ ਪਾਰਟੀਆਂ ਮਿਲਦੀਆਂ ਹਨ।" },

{ level: 14, question_pa:"ਨੋਨ-ਰਿਨਿਊਏਬਲ ਸਰੋਤ ਕਿਹੜਾ ਹੈ?", options_pa:["ਹਵਾ","ਸੂਰਜ","ਕੋਲਾ","ਪਾਣੀ"], correct_answer_index:2, explanation_pa:"ਕੋਲਾ ਮੁੜ ਤਿਆਰ ਨਹੀਂ ਹੁੰਦਾ, ਇਸ ਲਈ ਅਪੁਨਰਜਨਯੋਗ ਹੈ।" },

{ level: 14, question_pa:"ਪਾਣੀ ਪ੍ਰਬੰਧਨ ਦਾ ਇੱਕ ਜ਼ਰੂਰੀ ਹਿੱਸਾ?", options_pa:["ਪਾਣੀ ਵਿਆਰਥ ਕਰਨਾ","ਵ੍ਰਿਕਸ਼ਾਰੋਪਣ","ਪਲਾਸਟਿਕ ਵਧਾਉਣਾ","ਜ਼ਮੀਨ ਖ਼ਤਮ ਕਰਨਾ"], correct_answer_index:1, explanation_pa:"ਵ੍ਰਿਕਸ਼ ਪਾਣੀ ਚੱਕਰ ਸਥਿਰ ਰੱਖਣ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਨ।" },

{ level: 14, question_pa:"ਪ੍ਰਸ਼ਾਸਨ ਦਾ ਮੁੱਖ ਕੰਮ?", options_pa:["ਖੇਡ ਕਰਵਾਉਣਾ","ਕਾਨੂੰਨ ਲਾਗੂ ਕਰਨਾ","ਸ਼ੁਲਕ ਵਧਾਉਣਾ","ਸਿਰਫ ਰੋਜ਼ਗਾਰ ਦੇਣਾ"], correct_answer_index:1, explanation_pa:"ਪ੍ਰਸ਼ਾਸਨ ਕਾਨੂੰਨ ਤੇ ਨਿਯਮਾਂ ਨੂੰ ਲਾਗੂ ਕਰਦਾ ਹੈ।" },

{ level: 14, question_pa:"ਹੇਠਾਂੋਂ ਕਿਸਨੂੰ ਮਾਨਵ ਸਰੋਤ ਕਿਹਾ ਜਾ ਸਕਦਾ ਹੈ?", options_pa:["ਮਸ਼ੀਨ","ਮਨੁੱਖ","ਜਾਨਵਰ","ਮਿਟੀ"], correct_answer_index:1, explanation_pa:"ਕੌਸ਼ਲ ਅਤੇ ਮਿਹਨਤ ਦੇ ਆਧਾਰ ’ਤੇ ਮਨੁੱਖ ਮਾਨਵ ਸਰੋਤ ਹੈ।" },

{ level: 14, question_pa:"ਭਾਰਤ ਵਿੱਚ ਨਾਗਰਿਕਤਾ ਕਿਹੜੇ ਮਾਪਦੰਡ ’ਤੇ ਮਿਲਦੀ ਹੈ?", options_pa:["ਰੰਗ ’ਤੇ","ਪੈਸੇ ’ਤੇ","ਜਨਮ ਜਾਂ ਵੰਸ਼ਜ ’ਤੇ","ਕੋਈ ਨਿਯਮ ਨਹੀਂ"], correct_answer_index:2, explanation_pa:"ਨਾਗਰਿਕਤਾ ਜਨਮ ਜਾਂ ਮਾਤਾ-ਪਿਤਾ ਦੁਆਰਾ ਮਿਲਦੀ ਹੈ।" },

{ level: 14, question_pa:"ਆਯਾਤ ਦਾ ਅਰਥ?", options_pa:["ਦੇਸ਼ ਵਿੱਚ ਚੀਜ਼ਾਂ ਲਿਆਉਣਾ","ਦੇਸ਼ੋਂ ਚੀਜ਼ਾਂ ਭੇਜਣਾ","ਉਤਪਾਦ ਘਟਾਉਣਾ","ਸਰੋਤ ਖਤਮ ਕਰਨਾ"], correct_answer_index:0, explanation_pa:"ਜੋ ਚੀਜ਼ਾਂ ਬਾਹਰ ਦੇਸ਼ ਤੋਂ ਖਰੀਦ ਕੇ ਅੰਦਰ ਲਿਆਈਆਂ ਜਾਣ ਉਹ ਆਯਾਤ ਹਨ।" },

{ level: 14, question_pa:"ਭਾਰਤ ਦਾ ਮੁੱਖ ਆਮਦਨੀ ਕਰ ਸਰੋਤ?", options_pa:["ਸਿਰਫ ਖੇਤੀ","ਵਿਕਰੀ ਕਰ","ਆਮਦਨ ਕਰ","ਰੌਇਲਟੀ"], correct_answer_index:2, explanation_pa:"ਆਮਦਨ ਕਰ ਕੇਂਦਰ ਸਰਕਾਰ ਦਾ ਵੱਡਾ ਕਰ ਸਰੋਤ ਹੈ।" },

{ level: 14, question_pa:"ਜਲਵਾਯੂ ਪਰੀਵਰਤਨ ਦਾ ਮਹੱਤਵਪੂਰਨ ਨਤੀਜਾ?", options_pa:["ਬਰਫ਼ ਵੱਧ ਜਾਵੇਗੀ","ਸਮੁੰਦਰੀ ਤਟ ਡੂੰਘੇ ਹੋਣ","ਹੜ੍ਹਾਂ ਵਿੱਚ ਵਾਧਾ","ਪਹਾੜ ਘੱਟ"], correct_answer_index:2, explanation_pa:"ਤਾਪਮਾਨ ਵੱਧਣ ਨਾਲ ਹੜ੍ਹਾਂ ਅਤੇ ਅਤੀਵ ਮੌਸਮ ਵਧਦਾ ਹੈ।" },

{ level: 14, question_pa:"ਜਨਸੰਖਿਆ ਨੀਤੀ ਦਾ ਮਕਸਦ?", options_pa:["ਯੁੱਧ ਵਧਾਉਣਾ","ਜਨਸੰਖਿਆ ਉੱਤੇ ਨੀਂਤਰਣ","ਜੰਗਲ ਘਟਾਉਣਾ","ਸ਼ਹਿਰ ਬੇਸਹਾਰੇ ਕਰਨਾ"], correct_answer_index:1, explanation_pa:"ਜਨਸੰਖਿਆ ਨੀਤੀ ਨਾਲ ਆਬਾਦੀ ਨੂੰ ਨਿਯੰਤਰਿਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।" },

{ level: 14, question_pa:"ਭਾਰਤੀ ਲੋਕਤੰਤਰ ਦੀ ਸਭ ਤੋਂ ਵੱਡੀ ਤਾਕਤ?", options_pa:["ਧਰਮ ਨੀਤੀ","ਸੰਵਿਧਾਨ","ਮਹਿੰਗਾਈ","ਅਜਿਹੀ ਕਾਇਦਾ"], correct_answer_index:1, explanation_pa:"ਸੰਵਿਧਾਨ ਲੋਕਤੰਤਰ ਦਾ ਮੁੱਖ ਅਧਾਰ ਹੈ।" },

{ level: 14, question_pa:"ਹਵਾ ਪ੍ਰਦੂਸ਼ਣ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਵਾਧਾ ਕਿਸ ਨਾਲ?", options_pa:["ਪੈਦਲ ਚੱਲਣਾ","ਵਰਖਾ","ਵਾਹਨਾਂ ਦੀ ਵਾਧੂ ਵਰਤੋਂ","ਧਰਤੀ ਖੋਦਾਈ"], correct_answer_index:2, explanation_pa:"ਸ਼ਹਿਰਾਂ ਵਿੱਚ ਵਾਹਨਾਂ ਨਾਲ ਪ੍ਰਦੂਸ਼ਣ ਵੱਧਦਾ ਹੈ।" },

{ level: 14, question_pa:"ਉਰਜਾ ਸੰਕਟ ਦਾ ਕਾਰਨ?", options_pa:["ਊਰਜਾ ਦੀ ਬਚਤ","ਵਿਕਾਸਸ਼ੀਲ ਤਕਨੀਕ","ਊਰਜਾ ਸਰੋਤਾਂ ਦੀ ਘਾਟ","ਸੂਰਜੀ ਊਰਜਾ"], correct_answer_index:2, explanation_pa:"ਅਪੁਨਰਜਨਯੋਗ ਊਰਜਾ ਸਰੋਤ ਘਟਦੇ ਜਾ ਰਹੇ ਹਨ।" },

{ level: 14, question_pa:"ਵਿਸ਼ਵੀਕਰਨ ਦਾ ਇੱਕ ਨਕਾਰਾਤਮਕ ਪ੍ਰਭਾਵ?", options_pa:["ਤਕਨੀਕ ਵਾਧਾ","ਰੋਜ਼ਗਾਰ ਘਾਟ ਦਾ ਖਤਰਾ","ਨਵੀਨਤਾ ਵਧਦੀ ਹੈ","ਵਪਾਰ ਵਧਦਾ ਹੈ"], correct_answer_index:1, explanation_pa:"ਬਾਹਰੀ ਕੰਪਨੀਆਂ ਦੇ ਕਾਰਨ ਸਥਾਨਕ ਰੋਜ਼ਗਾਰ ਖਤਰੇ ’ਚ ਪੈ ਜਾਂਦਾ ਹੈ।" },

/* ========================= LEVEL 15 ========================= */

{ level: 15, question_pa:"ਭਾਰਤ ਦੇ ਸੰਵਿਧਾਨ ਵਿੱਚ ‘ਸੈਕੂਲਰ’ ਸ਼ਬਦ ਕਿਸ ਸੋਧ ਨਾਲ ਜੋੜਿਆ ਗਿਆ?", options_pa:["42ਵੀਂ ਸੋਧ","44ਵੀਂ ਸੋਧ","52ਵੀਂ ਸੋਧ","73ਵੀਂ ਸੋਧ"], correct_answer_index:0, explanation_pa:"1976 ਦੀ 42ਵੀਂ ਸੰਵਿਧਾਨੀ ਸੋਧ ਨਾਲ ‘ਸੈਕੂਲਰ’ ਸ਼ਬਦ ਪ੍ਰਸਤਾਵਨਾ ਵਿੱਚ ਜੋੜਿਆ ਗਿਆ।" },

{ level: 15, question_pa:"ਭਾਰਤ ਦੀ ਸੰਘੀ ਪ੍ਰਣਾਲੀ ਵਿੱਚ ਵਿਵਾਦਾਂ ਦਾ ਨਿਪਟਾਰਾ ਕੌਣ ਕਰਦਾ ਹੈ?", options_pa:["ਲੋਕ ਸਭਾ","ਸੁਪਰੀਮ ਕੋਰਟ","ਗਵਰਨਰ","ਰਾਜ ਸਭਾ"], correct_answer_index:1, explanation_pa:"ਕੇਂਦਰ-ਰਾਜ ਵਿਵਾਦਾਂ ਦਾ ਨਿਪਟਾਰਾ ਸੁਪਰੀਮ ਕੋਰਟ ਕਰਦੀ ਹੈ।" },

{ level: 15, question_pa:"ਭਾਰਤ ਵਿੱਚ ‘ਸਮਾਨ ਮਜ਼ਦੂਰੀ ਕਾਨੂੰਨ’ ਦਾ ਮੁੱਖ ਉਦੇਸ਼?", options_pa:["ਪੁਰਸ਼ਾਂ ਨੂੰ ਘੱਟ ਮਜ਼ਦੂਰੀ","ਮਹਿਲਾਵਾਂ ਨੂੰ ਘੱਟ ਤਨਖਾਹ","ਭੇਦਭਾਵ ਰੋਕਣਾ","ਸਿਰਫ਼ ਨੌਕਰੀ ਵਧਾਉਣਾ"], correct_answer_index:2, explanation_pa:"ਇਹ ਕਾਨੂੰਨ ਮਹਿਲਾ ਤੇ ਪੁਰਸ਼ ਲਈ ਇੱਕੋ ਕੰਮ ਦਾ ਇੱਕੋ ਮੋਹਰਾਂ ਦਾ ਭੁਗਤਾਨ ਯਕੀਨੀ ਬਣਾਉਂਦਾ ਹੈ।" },

{ level: 15, question_pa:"ਪ੍ਰਸਿੱਧ ‘ਬਲੂ ਰਿਵੋਲੁਸ਼ਨ’ ਕਿਸ ਨਾਲ ਸੰਬੰਧਿਤ ਹੈ?", options_pa:["ਤੇਲ ਉਤਪਾਦਨ","ਵਾਤਾਵਰਣ","ਮੱਛਲੀ ਪਾਲਣ","ਖਣਨ"], correct_answer_index:2, explanation_pa:"ਬਲੂ ਰਿਵੋਲੁਸ਼ਨ ਮੱਛਲੀਪਾਲਨ ਅਤੇ ਜਲ ਉਤਪਾਦਨ ਵੱਧਾਉਣ ਨਾਲ ਸੰਬੰਧਤ ਹੈ।" },

{ level: 15, question_pa:"ਜਨਗਣਨਾ ਭਾਰਤ ਵਿੱਚ ਕਿੰਨੇ ਸਾਲਾਂ ਬਾਅਦ ਹੁੰਦੀ ਹੈ?", options_pa:["5 ਸਾਲ","10 ਸਾਲ","12 ਸਾਲ","20 ਸਾਲ"], correct_answer_index:1, explanation_pa:"ਭਾਰਤ ਵਿੱਚ ਹਰ 10 ਸਾਲ ਬਾਅਦ ਜਨਗਣਨਾ ਹੁੰਦੀ ਹੈ।" },

{ level: 15, question_pa:"ਸਪਰੀਮ ਕੋਰਟ ਕਿਸ ਨੂੰ ‘ਸੰਵਿਧਾਨ ਦਾ ਰੱਖਿਆਕ’ ਕਹਿੰਦੀ ਹੈ?", options_pa:["ਰਾਸ਼ਟਰਪਤੀ","ਲੋਕ ਸਭਾ","ਨਿਆਂਪਾਲਿਕਾ","ਪ੍ਰਧਾਨ ਮੰਤਰੀ"], correct_answer_index:2, explanation_pa:"ਨਿਆਂਪਾਲਿਕਾ ਸੰਵਿਧਾਨ ਦੀ ਸਰਵੋਚ ਰੱਖਿਆਕ ਹੈ।" },

{ level: 15, question_pa:"ਮਿਲੀ-ਜੁਲੀ ਅਰਥਵਿਵਸਥਾ ਦਾ ਮੁੱਖ ਲੱਛਣ?", options_pa:["ਸਿਰਫ਼ ਸਰਕਾਰੀ ਕੰਪਨੀਆਂ","ਸਿਰਫ਼ ਨਿੱਜੀ ਖੇਤਰ","ਸਰਕਾਰੀ ਤੇ ਨਿੱਜੀ ਦੋਵੇਂ ਖੇਤਰ","ਕੋਈ ਖੇਤਰ ਨਹੀਂ"], correct_answer_index:2, explanation_pa:"ਮਿਲੀ-ਜੁਲੀ ਅਰਥਵਿਵਸਥਾ ਵਿੱਚ ਦੋਵੇਂ ਖੇਤਰ ਕੰਮ ਕਰਦੇ ਹਨ।" },

{ level: 15, question_pa:"PDS ਦਾ ਪੂਰਾ ਨਾਂ ਕੀ ਹੈ?", options_pa:["ਪਬਲਿਕ ਡਿਸਟ੍ਰਿਬਿਊਸ਼ਨ ਸਿਸਟਮ","ਪ੍ਰਾਈਵੇਟ ਡਿਵੈਲਪਮੈਂਟ ਸਟੋਰ","ਪਬਲਿਕ ਡਿਵਾਈਸ ਸਿਸਟਮ","ਪੋਜ਼ਿਟਿਵ ਡਿਵੀਜ਼ਨ ਸਿਸਟਮ"], correct_answer_index:0, explanation_pa:"PDS ਰਾਹੀਂ ਗਰੀਬਾਂ ਨੂੰ ਸਸਤਾ ਅਨਾਜ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ।" },

{ level: 15, question_pa:"ਹੇਠਾਂੋਂ ਮੁਲ਼ ਅਧਿਕਾਰ ਨਹੀਂ ਹੈ?", options_pa:["ਸਿੱਖਿਆ ਦਾ ਹੱਕ","ਸਮਾਨਤਾ ਦਾ ਹੱਕ","ਵੋਟ ਦਾ ਹੱਕ","ਜੀਵਨ ਦਾ ਹੱਕ"], correct_answer_index:2, explanation_pa:"ਵੋਟ ਦਾ ਹੱਕ ਮੁਲ਼ ਅਧਿਕਾਰ ਨਹੀਂ, ਇਹ ਰਾਜਨੀਤਿਕ ਅਧਿਕਾਰ ਹੈ।" },

{ level: 15, question_pa:"ਭਾਰਤ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਰਾਸ਼ਟਰੀ ਪਾਰਕ ਕਿਸ ਰਾਜ ਵਿੱਚ?", options_pa:["ਰਾਜਸਥਾਨ","ਮੱਧ ਪ੍ਰਦੇਸ਼","ਉੱਤਰ ਪ੍ਰਦੇਸ਼","ਪੰਜਾਬ"], correct_answer_index:1, explanation_pa:"ਮੱਧ ਪ੍ਰਦੇਸ਼ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਰਾਸ਼ਟਰੀ ਪਾਰਕ ਹਨ।" },

{ level: 15, question_pa:"ਸਰੋਤਾਂ ਦੀ ਅਤਿ ਵਰਤੋਂ ਕਿਸ ਵੱਲ ਲੈ ਜਾਂਦੀ ਹੈ?", options_pa:["ਸਰੋਤਾਂ ਦੀ ਸੁਰੱਖਿਆ","ਸਰੋਤਾਂ ਦੀ ਘਾਟ","ਜੰਗਲ ਵਧਣਾ","ਪਾਣੀ ਵਧਣਾ"], correct_answer_index:1, explanation_pa:"ਅਤਿ ਖਪਤ ਨਾਲ ਕੁਦਰਤੀ ਸਰੋਤ ਘੱਟਦੇ ਹਨ।" },

{ level: 15, question_pa:"ਗਰੀਬੀ ਮਾਪਣ ਲਈ ਕਿਹੜੀ ਰੇਖਾ ਵਰਤੀ ਜਾਂਦੀ ਹੈ?", options_pa:["ਗਲੋਬਲ ਰੇਖਾ","ਗਰੀਬੀ ਰੇਖਾ","ਖਰੀਦ ਰੇਖਾ","ਹਾਸਲ ਰੇਖਾ"], correct_answer_index:1, explanation_pa:"ਜਿਸ ਤੋਂ ਘੱਟ ਆਮਦਨ ਵਾਲੇ ਲੋਕ ਗਰੀਬੀ ਰੇਖਾ ਤੋਂ ਹੇਠਾਂ ਆਉਂਦੇ ਹਨ।" },

{ level: 15, question_pa:"ਸੰਵਿਧਾਨ ਦੀ ਰਚਨਾ ਕਿਹੜੇ ਸਰੀਰ ਨੇ ਕੀਤੀ?", options_pa:["ਲੋਕ ਸਭਾ","ਵਿਧਾਨ ਸਭਾ","ਸੰਵਿਧਾਨ ਸਭਾ","ਉੱਚ ਅਦਾਲਤ"], correct_answer_index:2, explanation_pa:"ਸੰਵਿਧਾਨ ਸਭਾ ਨੇ 1946–1949 ਦੌਰਾਨ ਸੰਵਿਧਾਨ ਲਿਖਿਆ।" },

{ level: 15, question_pa:"ਭਾਰਤ ਵਿੱਚ ਬੇਰੁਜ਼ਗਾਰੀ ਦਾ ਮੁੱਖ ਕਾਰਨ?", options_pa:["ਉਚਿਤ ਸਿੱਖਿਆ","ਅਣਕੁਸ਼ਲ ਮਜ਼ਦੂਰੀ","ਤਕਨੀਕ ਦੀ ਘਾਟ","ਘੱਟ ਜਨਸੰਖਿਆ"], correct_answer_index:1, explanation_pa:"ਕੁਸ਼ਲਤਾ ਦੀ ਘਾਟ ਕਾਰਨ ਨੌਜਵਾਨਾਂ ਨੂੰ ਨੌਕਰੀਆਂ ਨਹੀਂ ਮਿਲਦੀਆਂ।" },

{ level: 15, question_pa:"ਸੰਸਾਰ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਚਾਵਲ ਕੌਣ ਉਗਾਉਂਦਾ?", options_pa:["ਚੀਨ","ਭਾਰਤ","ਬੰਗਲਾਦੇਸ਼","ਜਪਾਨ"], correct_answer_index:0, explanation_pa:"ਚੀਨ ਵਿਸ਼ਵ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਚਾਵਲ ਉਤਪਾਦਨ ਕਰਦਾ ਹੈ।" }

];