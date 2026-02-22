const kbc = [
    /* ----------------- LEVEL 1 (10 QUESTIONS) ----------------- */
    {
        level: 1,
        question_pa: "ਬਾਈਨਰੀ ਨੰਬਰ ਸਿਸਟਮ ਵਿੱਚ ਕਿਹੜੇ ਦੋ ਅੰਕ ਵਰਤੇ ਜਾਂਦੇ ਹਨ?",
        options_pa: ["0 ਅਤੇ 1", "1 ਅਤੇ 2", "2 ਅਤੇ 3", "5 ਅਤੇ 6"],
        correct_answer_index: 0,
        explanation_pa: "ਬਾਈਨਰੀ ਸਿਸਟਮ ਸਿਰਫ 0 ਅਤੇ 1 ਅੰਕਾਂ ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ।"
    },
    {
        level: 1,
        question_pa: "ਕੰਪਿਊਟਰ ਦਾ ਦਿਮਾਗ ਕਿਹੜਾ ਹਿੱਸਾ ਹੈ?",
        options_pa: ["ਰੈਮ", "ਸੀਪੀਯੂ (CPU)", "ਮਾਨੀਟਰ", "ਮਾਊਸ"],
        correct_answer_index: 1,
        explanation_pa: "CPU ਕੰਪਿਊਟਰ ਦਾ ਮੁੱਖ ਹਿੱਸਾ ਹੈ ਜੋ ਸਾਰੇ ਕੰਮ ਸੰਭਾਲਦਾ ਹੈ।"
    },
    {
        level: 1,
        question_pa: "Python ਨੂੰ ਕਿਸ ਨੇ ਵਿਕਸਿਤ ਕੀਤਾ?",
        options_pa: ["ਚਾਰਲਜ਼ ਬੈਬੇਜ", "ਗੁਇਡੋ ਵੈਨ ਰੋਸਮ", "ਡੈਨਿਸ ਰਿਚੀ", "ਬਿੱਲ ਗੇਟਸ"],
        correct_answer_index: 1,
        explanation_pa: "Python ਗੁਇਡੋ ਵੈਨ ਰੋਸਮ ਵੱਲੋਂ 1991 ਵਿੱਚ ਬਣਾਈ ਗਈ ਸੀ।"
    },
    {
        level: 1,
        question_pa: "ਹੇਠ ਲਿਖਿਆਂ ਵਿੱਚੋਂ ਕਿਹੜਾ Input Device ਹੈ?",
        options_pa: ["ਪ੍ਰਿੰਟਰ", "ਸਕੈਨਰ", "ਸਪੀਕਰ", "ਮਾਨੀਟਰ"],
        correct_answer_index: 1,
        explanation_pa: "ਸਕੈਨਰ ਇੱਕ ਇਨਪੁਟ ਡਿਵਾਈਸ ਹੈ ਜੋ ਦਸਤਾਵੇਜ਼ ਨੂੰ ਡਿਜੀਟਲ ਰੂਪ ਵਿੱਚ ਬਦਲਦਾ ਹੈ।"
    },
    {
        level: 1,
        question_pa: "Hexadecimal ਸਿਸਟਮ ਦਾ ਬੇਸ ਕੀ ਹੁੰਦਾ ਹੈ?",
        options_pa: ["2", "8", "10", "16"],
        correct_answer_index: 3,
        explanation_pa: "Hexadecimal ਨੰਬਰ ਸਿਸਟਮ ਦਾ ਬੇਸ 16 ਹੁੰਦਾ ਹੈ।"
    },
    {
        level: 1,
        question_pa: "DBMS ਦਾ ਪੂਰਾ ਨਾਮ ਕੀ ਹੈ?",
        options_pa: ["Data Base Managing Source", "Database Management System", "Data Basic Main System", "Double Byte Main Source"],
        correct_answer_index: 1,
        explanation_pa: "DBMS ਦਾ ਪੂਰਾ ਨਾਮ Database Management System ਹੈ।"
    },
    {
        level: 1,
        question_pa: "Cyber Crime ਦਾ ਅਰਥ ਕੀ ਹੈ?",
        options_pa: ["ਸਿਰਫ ਗੇਮਿੰਗ", "ਇੰਟਰਨੈੱਟ 'ਤੇ ਅਪਰਾਧ", "ਫੋਨ ਕਾਲ ਕਰਨਾ", "ਡਾਟਾ ਸੇਵ ਕਰਨਾ"],
        correct_answer_index: 1,
        explanation_pa: "ਇੰਟਰਨੈੱਟ ਜਾਂ ਕੰਪਿਊਟਰ ਰਾਹੀਂ ਕੀਤਾ ਗਿਆ ਅਪਰਾਧ Cyber Crime ਕਹਾਉਂਦਾ ਹੈ।"
    },
    {
        level: 1,
        question_pa: "RAM ਦਾ ਮੁੱਖ ਕੰਮ ਕੀ ਹੈ?",
        options_pa: ["ਡਾਟਾ ਸਟੋਰ ਕਰਨਾ", "ਪ੍ਰੋਗਰਾਮ ਚਲਾਉਂਦੇ ਸਮੇਂ ਅਸਥਾਈ ਮੈਮੋਰੀ ਦੇਣਾ", "ਤਸਵੀਰ ਦਿਖਾਉਣਾ", "ਆਵਾਜ਼ ਚਲਾਉਣਾ"],
        correct_answer_index: 1,
        explanation_pa: "RAM ਅਸਥਾਈ ਮੈਮੋਰੀ ਦੇਣ ਲਈ ਵਰਤੀ ਜਾਂਦੀ ਹੈ।"
    },
    {
        level: 1,
        question_pa: "Python ਵਿੱਚ ਆਉਟਪੁੱਟ ਦਿਖਾਉਣ ਲਈ ਕਿਹੜਾ ਫੰਕਸ਼ਨ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?",
        options_pa: ["show()", "display()", "print()", "output()"],
        correct_answer_index: 2,
        explanation_pa: "Python ਵਿੱਚ print() ਫੰਕਸ਼ਨ ਆਉਟਪੁੱਟ ਦਿਖਾਉਣ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।"
    },
    {
        level: 1,
        question_pa: "ਕਿਹੜਾ ਇੱਕ Storage Device ਹੈ?",
        options_pa: ["ਕੀਬੋਰਡ", "ਮਾਊਸ", "ਹਾਰਡ ਡਿਸਕ", "ਸਪੀਕਰ"],
        correct_answer_index: 2,
        explanation_pa: "ਹਾਰਡ ਡਿਸਕ ਡਾਟਾ ਨੂੰ ਸਥਾਈ ਤੌਰ 'ਤੇ ਸਟੋਰ ਕਰਦੀ ਹੈ।"
    },

    /* ----------------- LEVEL 2 ----------------- */
    {
        level: 2,
        question_pa: "Decimal ਸਿਸਟਮ ਵਿੱਚ ਕਿੰਨੇ ਅੰਕ ਵਰਤੇ ਜਾਂਦੇ ਹਨ?",
        options_pa: ["2", "8", "10", "16"],
        correct_answer_index: 2,
        explanation_pa: "Decimal ਸਿਸਟਮ ਵਿੱਚ 0 ਤੋਂ 9 ਤੱਕ 10 ਅੰਕ ਵਰਤੇ ਜਾਂਦੇ ਹਨ।"
    },
    {
        level: 2,
        question_pa: "Python ਵਿੱਚ ਟਿੱਪਣੀਆਂ ਲਿਖਣ ਲਈ ਕਿਹੜਾ ਚਿੰਨ੍ਹ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?",
        options_pa: ["//", "#", "/* */", "<!-- -->"],
        correct_answer_index: 1,
        explanation_pa: "Python ਵਿੱਚ ਸਿੰਗਲ ਲਾਈਨ ਕਮੈਂਟ ਲਈ # ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।"
    },
    {
        level: 2,
        question_pa: "Octal ਨੰਬਰ ਸਿਸਟਮ ਦਾ ਬੇਸ ਕੀ ਹੈ?",
        options_pa: ["2", "8", "10", "16"],
        correct_answer_index: 1,
        explanation_pa: "Octal ਨੰਬਰ ਸਿਸਟਮ ਦਾ ਬੇਸ 8 ਹੁੰਦਾ ਹੈ।"
    },
    {
        level: 2,
        question_pa: "DBMS ਵਿੱਚ 'Table' ਨੂੰ ਕੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?",
        options_pa: ["Relation", "Tuple", "Attribute", "Field"],
        correct_answer_index: 0,
        explanation_pa: "DBMS ਵਿੱਚ Table ਨੂੰ Relation ਕਿਹਾ ਜਾਂਦਾ ਹੈ।"
    },
    {
        level: 2,
        question_pa: "Cyber Ethics ਦਾ ਮਤਲਬ ਕੀ ਹੈ?",
        options_pa: ["ਇੰਟਰਨੈੱਟ ਦੇ ਨਿਯਮ", "ਕੰਪਿਊਟਰ ਦੀ ਗਤੀ", "ਹਾਰਡਵੇਅਰ ਕੰਟਰੋਲ", "ਮੈਮੋਰੀ ਮੈਨੇਜਮੈਂਟ"],
        correct_answer_index: 0,
        explanation_pa: "Online ਵਰਤੋਂ ਲਈ ਨੈਤਿਕ ਨਿਯਮਾਂ ਨੂੰ Cyber Ethics ਕਿਹਾ ਜਾਂਦਾ ਹੈ।"
    },
    {
        level: 2,
        question_pa: "ਕੰਪਿਊਟਰ ਦੀ ਤੀਜ਼ੀ ਵਧਾਉਣ ਲਈ ਕਿਹੜਾ ਟੂਲ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?",
        options_pa: ["Disk Cleanup", "MS Paint", "Notepad", "Calculator"],
        correct_answer_index: 0,
        explanation_pa: "Disk Cleanup ਗੈਰ-ਜ਼ਰੂਰੀ ਫਾਈਲਾਂ ਮਿਟਾ ਕੇ ਤੀਜ਼ੀ ਵਧਾਉਂਦਾ ਹੈ।"
    },
    {
        level: 2,
        question_pa: "Python ਵਿੱਚ Variable ਕੀ ਹੁੰਦਾ ਹੈ?",
        options_pa: ["ਕੋਈ ਫਾਈਲ", "ਮੁੱਲ ਸਟੋਰ ਕਰਨ ਲਈ ਥਾਂ", "ਗ੍ਰਾਫ ਬਣਾਉਣ ਵਾਲਾ ਟੂਲ", "ਡ੍ਰਾਇੰਗ ਕਮਾਂਡ"],
        correct_answer_index: 1,
        explanation_pa: "Variable ਡਾਟਾ ਜਾਂ ਮੁੱਲ ਸਟੋਰ ਕਰਨ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।"
    },
    {
        level: 2,
        question_pa: "Primary Key ਦਾ ਕੰਮ ਕੀ ਹੈ?",
        options_pa: ["ਡਾਟਾ ਮਿਟਾਉਣਾ", "ਰਿਕਾਰਡਾਂ ਦੀ ਗਿਣਤੀ", "ਰਿਕਾਰਡ ਦੀ ਵਿਲੱਖਣ ਪਹਿਚਾਣ", "ਸਕ੍ਰੀਨ 'ਤੇ ਪ੍ਰਿੰਟ ਕਰਨਾ"],
        correct_answer_index: 2,
        explanation_pa: "Primary Key ਹਰ ਰਿਕਾਰਡ ਨੂੰ ਵਿਲੱਖਣ ਤਰੀਕੇ ਨਾਲ ਪਛਾਣਦੀ ਹੈ।"
    },
    {
        level: 2,
        question_pa: "Python ਵਿੱਚ input ਲੈਣ ਲਈ ਕਿਹੜਾ ਫੰਕਸ਼ਨ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?",
        options_pa: ["scan()", "read()", "input()", "take()"],
        correct_answer_index: 2,
        explanation_pa: "User ਤੋਂ input ਲੈਣ ਲਈ input() ਫੰਕਸ਼ਨ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।"
    },
    {
        level: 2,
        question_pa: "RAM ਕਿਹੜੀ ਮੈਮੋਰੀ ਹੈ?",
        options_pa: ["Permanent", "Temporary", "Hard Memory", "External Memory"],
        correct_answer_index: 1,
        explanation_pa: "RAM Temporary ਜਾਂ Volatile ਮੈਮੋਰੀ ਹੁੰਦੀ ਹੈ।"
    },

    /* ----------------- LEVEL 3 ----------------- */
    {
        level: 3,
        question_pa: "Binary 1111 ਦਾ Decimal ਮੁੱਲ ਕੀ ਹੈ?",
        options_pa: ["10", "12", "15", "16"],
        correct_answer_index: 2,
        explanation_pa: "1111₂ = 15₁₀ ਹੁੰਦਾ ਹੈ।"
    },
    {
        level: 3,
        question_pa: "Python IDE ਦਾ ਪੂਰਾ ਨਾਮ ਕੀ ਹੈ?",
        options_pa: ["Internal Development Engine", "Integrated Development Environment", "Interactive Data Editor", "None"],
        correct_answer_index: 1,
        explanation_pa: "IDE ਦਾ ਪੂਰਾ ਨਾਮ Integrated Development Environment ਹੈ।"
    },
    {
        level: 3,
        question_pa: "Tuple ਕਿਹੜੀ ਕਿਸਮ ਦਾ ਡਾਟਾ ਟਾਈਪ ਹੈ?",
        options_pa: ["Mutable", "Immutable", "Boolean", "Numeric"],
        correct_answer_index: 1,
        explanation_pa: "Tuple immutable ਹੁੰਦੀ ਹੈ, ਇੱਕ ਵਾਰ ਬਣੀ ਤਾਂ ਬਦਲੀ ਨਹੀਂ ਜਾ ਸਕਦੀ।"
    },
    {
        level: 3,
        question_pa: "DBMS ਵਿੱਚ Row ਨੂੰ ਕੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?",
        options_pa: ["Attribute", "Tuple", "Field", "Relation"],
        correct_answer_index: 1,
        explanation_pa: "Row ਨੂੰ Tuple ਕਿਹਾ ਜਾਂਦਾ ਹੈ।"
    },
    {
        level: 3,
        question_pa: "Firewall ਦਾ ਮੁੱਖ ਕੰਮ ਕੀ ਹੈ?",
        options_pa: ["ਵਾਇਰਸ ਬਣਾਉਣਾ", "ਡਾਟਾ ਚੋਰੀ", "Unauthorized ਐਕਸੈਸ ਰੋਕਣਾ", "ਸਾਫਟਵੇਅਰ ਇੰਸਟਾਲ ਕਰਨਾ"],
        correct_answer_index: 2,
        explanation_pa: "Firewall ਬਾਹਰੀ ਹਮਲਿਆਂ ਤੋਂ ਕੰਪਿਊਟਰ ਦੀ ਰੱਖਿਆ ਕਰਦਾ ਹੈ।"
    },
    {
        level: 3,
        question_pa: "Python ਵਿੱਚ 5 ** 2 ਦਾ ਨਤੀਜਾ ਕੀ ਹੈ?",
        options_pa: ["7", "10", "25", "32"],
        correct_answer_index: 2,
        explanation_pa: "5 ** 2 ਦਾ ਮਤਲਬ 5 ਦਾ ਸਕਵੇਅਰ = 25।"
    },
    {
        level: 3,
        question_pa: "Cyber Bullying ਦਾ ਉਦਾਹਰਨ ਕਿਹੜਾ ਹੈ?",
        options_pa: ["Online ਧਮਕੀ ਦੇਣਾ", "ਖੇਡ ਖੇਡਣਾ", "ਮੋਬਾਈਲ ਚਾਰਜ ਕਰਨਾ", "ਵੀਡੀਓ ਦੇਖਣਾ"],
        correct_answer_index: 0,
        explanation_pa: "Online ਕਿਸੇ ਨੂੰ ਧਮਕਾਉਣਾ Cyber Bullying ਹੈ।"
    },
    {
        level: 3,
        question_pa: "Operating System ਦਾ ਮੁੱਖ ਕੰਮ ਕੀ ਹੈ?",
        options_pa: ["ਗੇਮ ਚਲਾਉਣਾ", "ਹਾਰਡਵੇਅਰ ਤੇ ਸਾਫਟਵੇਅਰ ਵਿਚਕਾਰ ਸਹਿਯੋਗ", "ਫੋਟੋ ਖਿੱਚਣਾ", "ਕੇਬਲ ਜੋੜਣਾ"],
        correct_answer_index: 1,
        explanation_pa: "OS ਯੂਜ਼ਰ ਅਤੇ ਹਾਰਡਵੇਅਰ ਵਿਚਕਾਰ ਇੰਟਰਫੇਸ ਹੈ।"
    },
    {
        level: 3,
        question_pa: "Hexadecimal ਵਿੱਚ A ਦਾ Decimal ਮੁੱਲ ਕੀ ਹੈ?",
        options_pa: ["8", "9", "10", "15"],
        correct_answer_index: 2,
        explanation_pa: "A (Hex) = 10 (Decimal)।"
    },
    {
        level: 3,
        question_pa: "SQL ਦਾ ਪੂਰਾ ਨਾਮ ਕੀ ਹੈ?",
        options_pa: ["Simple Query Language", "Structured Query Language", "System Query Level", "Source Query Logic"],
        correct_answer_index: 1,
        explanation_pa: "SQL ਦਾ ਪੂਰਾ ਨਾਮ Structured Query Language ਹੈ।"
    },

    /* ----------------- LEVEL 4 ----------------- */
    {
        level: 4,
        question_pa: "Python ਵਿੱਚ range(5) ਕੀ ਬਣਾਉਂਦਾ ਹੈ?",
        options_pa: ["0 ਤੋਂ 5", "1 ਤੋਂ 5", "0 ਤੋਂ 4", "5 ਤੋਂ 10"],
        correct_answer_index: 2,
        explanation_pa: "range(5) → 0,1,2,3,4 ਤੱਕ ਮੁੱਲ ਦਿੰਦਾ ਹੈ।"
    },
    {
        level: 4,
        question_pa: "DBMS ਵਿੱਚ Attribute ਕਿਹੜਾ ਹੁੰਦਾ ਹੈ?",
        options_pa: ["Row", "Column", "Table", "Database"],
        correct_answer_index: 1,
        explanation_pa: "Table ਦਾ ਹਰ ਕਾਲਮ Attribute ਹੁੰਦਾ ਹੈ।"
    },
    {
        level: 4,
        question_pa: "Python ਵਿੱਚ List ਕਿਹੜੀ ਕਿਸਮ ਦੀ ਹੁੰਦੀ ਹੈ?",
        options_pa: ["Mutable", "Immutable", "Constant", "String"],
        correct_answer_index: 0,
        explanation_pa: "List mutable ਹੁੰਦੀ ਹੈ, ਇਸ ਦੇ ਡਾਟਾ ਨੂੰ ਬਦਲਾ ਜਾ ਸਕਦਾ ਹੈ।"
    },
    {
        level: 4,
        question_pa: "E-Waste ਦਾ ਉਦਾਹਰਨ ਕਿਹੜਾ ਹੈ?",
        options_pa: ["ਪੁਰਾਣਾ ਮੋਬਾਈਲ", "ਨਵੀਂ ਕਿਤਾਬ", "ਪੈਨ", "ਬੋਤਲ"],
        correct_answer_index: 0,
        explanation_pa: "ਪੁਰਾਣਾ ਇਲੈਕਟ੍ਰਾਨਿਕ ਸਮਾਨ E-Waste ਹੁੰਦਾ ਹੈ।"
    },
    {
        level: 4,
        question_pa: "Disk Defragmentation ਦਾ ਕੰਮ ਕੀ ਹੈ?",
        options_pa: ["ਫਾਈਲਾਂ ਮਿਟਾਉਣਾ", "ਡਾਟਾ ਨੂੰ ਇਕੱਠਾ ਕਰਨਾ", "ਕੰਪਿਊਟਰ ਬੰਦ ਕਰਨਾ", "ਵਾਇਰਸ ਖਤਮ ਕਰਨਾ"],
        correct_answer_index: 1,
        explanation_pa: "Defragmentation ਡਿਸਕ 'ਤੇ ਖੰਡਿਤ ਡਾਟੇ ਨੂੰ ਇਕੱਠਾ ਕਰਦਾ ਹੈ।"
    },
    {
        level: 4,
        question_pa: "Binary 101 ਦਾ Decimal ਮੁੱਲ ਕੀ ਹੈ?",
        options_pa: ["3", "4", "5", "6"],
        correct_answer_index: 2,
        explanation_pa: "101₂ = 5₁₀ ਹੁੰਦਾ ਹੈ।"
    },
    {
        level: 4,
        question_pa: "Python ਵਿੱਚ type() ਫੰਕਸ਼ਨ ਦਾ ਕੀ ਕੰਮ ਹੈ?",
        options_pa: ["ਡਾਟਾ ਦਿਖਾਉਣਾ", "ਡਾਟਾ ਟਾਈਪ ਦੱਸਣਾ", "ਫਾਈਲ ਖੋਲ੍ਹਣਾ", "ਫਾਈਲ ਸੇਵ ਕਰਨਾ"],
        correct_answer_index: 1,
        explanation_pa: "type() ਕਿਸੇ ਵੀ ਮੁੱਲ ਦਾ ਡਾਟਾ ਟਾਈਪ ਦੱਸਦਾ ਹੈ।"
    },
    {
        level: 4,
        question_pa: "Cyber Crime ਵਿੱਚ 'Phishing' ਦਾ ਕੀ ਮਤਲਬ ਹੈ?",
        options_pa: ["ਫੋਨ ਕਾਲ ਕਰਨਾ", "ਨਕਲੀ ਲਿੰਕ ਭੇਜਣਾ", "ਖੇਡ ਖੇਡਣਾ", "ਵੀਡੀਓ ਦੇਖਣਾ"],
        correct_answer_index: 1,
        explanation_pa: "Phishing ਵਿੱਚ ਨਕਲੀ ਲਿੰਕ ਰਾਹੀਂ ਜਾਣਕਾਰੀ ਚੋਰੀ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।"
    },
    {
        level: 4,
        question_pa: "DBMS ਵਿੱਚ Cardinality ਕਿਹੜੀ ਗਿਣਤੀ ਹੈ?",
        options_pa: ["Columns", "Rows", "Keys", "Tables"],
        correct_answer_index: 1,
        explanation_pa: "Cardinality ਰੋਜ਼ (Tuples) ਦੀ ਗਿਣਤੀ ਹੁੰਦੀ ਹੈ।"
    },
    {
        level: 4,
        question_pa: "Python ਵਿੱਚ '==' ਓਪਰੇਟਰ ਦਾ ਕੀ ਕੰਮ ਹੈ?",
        options_pa: ["Addition", "Comparison", "Division", "Multiplication"],
        correct_answer_index: 1,
        explanation_pa: "== ਦੋ ਮੁੱਲ ਬਰਾਬਰ ਹਨ ਜਾਂ ਨਹੀਂ, ਇਹ ਚੈਕ ਕਰਦਾ ਹੈ।"
    },

    /* ----------------- LEVEL 5 ----------------- */
    {
        level: 5,
        question_pa: "Binary 1001 ਦਾ Decimal ਮੁੱਲ ਕੀ ਹੈ?",
        options_pa: ["7", "8", "9", "10"],
        correct_answer_index: 2,
        explanation_pa: "1001₂ = 9₁₀ ਹੁੰਦਾ ਹੈ।"
    },
    {
        level: 5,
        question_pa: "Python ਵਿੱਚ while ਲੂਪ ਕਦੋਂ ਤੱਕ ਚਲਦਾ ਹੈ?",
        options_pa: ["1 ਵਾਰ", "10 ਵਾਰ", "ਜਦ ਤੱਕ ਸ਼ਰਤ True ਹੈ", "ਕਦੇ ਵੀ ਨਹੀਂ"],
        correct_answer_index: 2,
        explanation_pa: "while ਲੂਪ ਸ਼ਰਤ True ਹੋਣ ਤੱਕ ਚਲਦਾ ਹੈ।"
    },
    {
        level: 5,
        question_pa: "Primary Key ਦੀ ਕੀ ਖਾਸੀਅਤ ਹੁੰਦੀ ਹੈ?",
        options_pa: ["Duplicate ਹੋ ਸਕਦੀ ਹੈ", "Null ਹੋ ਸਕਦੀ ਹੈ", "Unique ਹੁੰਦੀ ਹੈ", "ਕੋਈ ਵੀ ਨਹੀਂ"],
        correct_answer_index: 2,
        explanation_pa: "Primary Key ਹਮੇਸ਼ਾਂ Unique ਅਤੇ Non-Null ਹੁੰਦੀ ਹੈ।"
    },
    {
        level: 5,
        question_pa: "Python ਵਿੱਚ 10 // 3 ਦਾ ਜਵਾਬ ਕੀ ਹੈ?",
        options_pa: ["3.3", "3", "4", "0"],
        correct_answer_index: 1,
        explanation_pa: "10 // 3 ਇੱਕ Integer Division ਹੈ; ਨਤੀਜਾ 3 ਹੁੰਦਾ ਹੈ।"
    },
    {
        level: 5,
        question_pa: "E-Waste ਵਿੱਚ ਕਿਹੜਾ ਤੱਤ ਮਿਲਦਾ ਹੈ?",
        options_pa: ["ਸੋਨਾ", "ਚਾਂਦੀ", "ਪਾਰੇ ਵਰਗੇ ਹਾਨੀਕਾਰਕ ਤੱਤ", "ਚੋਕਲੇਟ"],
        correct_answer_index: 2,
        explanation_pa: "E-Waste ਵਿੱਚ Mercury, Lead ਆਦਿ ਹਾਨੀਕਾਰਕ ਤੱਤ ਹੁੰਦੇ ਹਨ।"
    },
    {
        level: 5,
        question_pa: "Cyber Security ਦਾ ਮੁੱਖ ਮਕਸਦ ਕੀ ਹੈ?",
        options_pa: ["ਫਿਲਮਾਂ ਡਾਊਨਲੋਡ ਕਰਨਾ", "ਡਾਟਾ ਸੁਰੱਖਿਆ", "ਫੋਨ ਕਾਲ ਕਰਨਾ", "ਗੇਮ ਖੇਡਣਾ"],
        correct_answer_index: 1,
        explanation_pa: "Cyber Security ਡਾਟਾ ਅਤੇ ਕੰਪਿਊਟਰ ਸਿਸਟਮ ਦੀ ਸੁਰੱਖਿਆ ਕਰਦੀ ਹੈ।"
    },
    {
        level: 5,
        question_pa: "DBMS ਵਿੱਚ Degree ਕਿਸ ਨੂੰ ਕਹਿੰਦੇ ਹਨ?",
        options_pa: ["ਰੋਜ਼ ਦੀ ਗਿਣਤੀ", "ਕਾਲਮਾਂ ਦੀ ਗਿਣਤੀ", "ਟੇਬਲਾਂ ਦੀ ਗਿਣਤੀ", "ਡਾਟਾ ਦੀ ਕੁਆਲਿਟੀ"],
        correct_answer_index: 1,
        explanation_pa: "Degree ਟੇਬਲ ਦੇ ਕਾਲਮਾਂ ਦੀ ਗਿਣਤੀ ਹੁੰਦੀ ਹੈ।"
    },
    {
        level: 5,
        question_pa: "Python ਵਿੱਚ indent (spacing) ਕਿੱਥੇ ਵਰਤੀ ਜਾਂਦੀ ਹੈ?",
        options_pa: ["Function", "Loop", "if statement", "ਉਪਰੋਕਤ ਸਭ"],
        correct_answer_index: 3,
        explanation_pa: "Python ਵਿੱਚ Function, Loop ਅਤੇ if ਵਿੱਚ indent ਬਹੁਤ ਜ਼ਰੂਰੀ ਹੈ।"
    },
    {
        level: 5,
        question_pa: "Hexadecimal 'F' ਦਾ Decimal ਮੁੱਲ ਕੀ ਹੈ?",
        options_pa: ["10", "12", "14", "15"],
        correct_answer_index: 3,
        explanation_pa: "F (Hex) = 15 (Decimal)।"
    },
    {
        level: 5,
        question_pa: "Safe Mode ਕਿਸ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?",
        options_pa: ["ਤੇਜ਼ੀ ਵਧਾਉਣ ਲਈ", "ਡਾਇਗਨੋਸਟਿਕ ਮੋਡ ਲਈ", "ਮਿਊਜ਼ਿਕ ਚਲਾਉਣ ਲਈ", "ਵੀਡੀਓ ਬਣਾਉਣ ਲਈ"],
        correct_answer_index: 1,
        explanation_pa: "Safe Mode ਕੰਪਿਊਟਰ ਦੇ ਸਮੱਸਿਆ ਹੱਲ ਕਰਨ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।"
    },
/* ---------------------- LEVEL 6 (10 QUESTIONS) ---------------------- */
{
    level: 6,
    question_pa: "Decimal 25 ਦਾ Binary ਰੂਪ ਕੀ ਹੈ?",
    options_pa: ["11000", "11001", "10101", "10011"],
    correct_answer_index: 1,
    explanation_pa: "25₁₀ ਨੂੰ Binary ਵਿੱਚ 11001₂ ਲਿਖਿਆ ਜਾਂਦਾ ਹੈ।"
},
{
    level: 6,
    question_pa: "Python ਵਿੱਚ keywords ਦੀ ਸੂਚੀ ਵੇਖਣ ਲਈ ਕਿਹੜੀ ਕਮਾਂਡ ਵਰਤੀ ਜਾਂਦੀ ਹੈ?",
    options_pa: ["import key", "import keyword", "keyword.list()", "show keyword"],
    correct_answer_index: 1,
    explanation_pa: "Python ਵਿੱਚ keyword ਮੋਡੀਊਲ ਦੀ ਵਰਤੋਂ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।"
},
{
    level: 6,
    question_pa: "List ਵਿੱਚ ਡਾਟਾ ਸ਼ਾਮਲ ਕਰਨ ਲਈ ਕਿਹੜਾ ਮੈਥਡ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?",
    options_pa: ["add()", "insert()", "append()", "push()"],
    correct_answer_index: 2,
    explanation_pa: "append() ਲਿਸਟ ਦੇ ਅੰਤ 'ਚ ਡਾਟਾ ਸ਼ਾਮਲ ਕਰਦਾ ਹੈ।"
},
{
    level: 6,
    question_pa: "DBMS ਵਿੱਚ ਕਿਸੇ ਟੇਬਲ ਦੀਆਂ ਰੋਜ਼ ਨੂੰ ਕੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?",
    options_pa: ["Attributes", "Fields", "Tuples", "Indexes"],
    correct_answer_index: 2,
    explanation_pa: "Row ਨੂੰ Tuple ਕਿਹਾ ਜਾਂਦਾ ਹੈ।"
},
{
    level: 6,
    question_pa: "Cyber Security ਵਿੱਚ 'Confidentiality' ਦਾ ਕੀ ਮਤਲਬ ਹੈ?",
    options_pa: ["ਡਾਟਾ ਦੀ ਸਹੀਤਾ", "ਡਾਟਾ ਦੀ ਉਪਲੱਬਧਤਾ", "ਡਾਟਾ ਨੂੰ ਗੁਪਤ ਰੱਖਣਾ", "ਕੋਈ ਨਹੀਂ"],
    correct_answer_index: 2,
    explanation_pa: "Confidentiality ਦਾ ਅਰਥ ਹੈ ਡਾਟਾ ਨੂੰ ਗੁਪਤ ਰੱਖਣਾ।"
},
{
    level: 6,
    question_pa: "Disk Cleanup ਕਿਸ ਲਈ ਵਰਤੀ ਜਾਂਦੀ ਹੈ?",
    options_pa: ["ਵਾਇਰਸ ਮਿਟਾਉਣ ਲਈ", "ਗੈਰ-ਜ਼ਰੂਰੀ ਫਾਈਲਾਂ ਹਟਾਉਣ ਲਈ", "ਫਾਈਲ ਆਕਾਰ ਵਧਾਉਣ ਲਈ", "ਰੈਮ ਵਧਾਉਣ ਲਈ"],
    correct_answer_index: 1,
    explanation_pa: "Disk Cleanup ਗੈਰ-ਜ਼ਰੂਰੀ ਫਾਈਲਾਂ ਹਟਾ ਕੇ ਸਿਸਟਮ ਤੇਜ਼ ਕਰਦੀ ਹੈ।"
},
{
    level: 6,
    question_pa: "Python ਵਿੱਚ '!=' ਓਪਰੇਟਰ ਕੀ ਦਰਸਾਉਂਦਾ ਹੈ?",
    options_pa: ["ਬਰਾਬਰ", "ਨਹੀਂ ਬਰਾਬਰ", "ਵੱਡਾ", "ਛੋਟਾ"],
    correct_answer_index: 1,
    explanation_pa: "!= ਦਾ ਮਤਲਬ 'ਨਹੀਂ ਬਰਾਬਰ' ਹੁੰਦਾ ਹੈ।"
},
{
    level: 6,
    question_pa: "Hexadecimal 3D ਦਾ Decimal ਮੁੱਲ ਕੀ ਹੈ?",
    options_pa: ["55", "58", "61", "47"],
    correct_answer_index: 0,
    explanation_pa: "3D₁₆ = 3×16 + 13 = 61 ਨਹੀਂ, 3×16 + 13 = 48 + 13 = 61 → ਪਰ 3D = 61। ਤਰੀਕੇ ਅਨੁਸਾਰ 3×16=48, + D(13)=61।"
},
{
    level: 6,
    question_pa: "Python ਵਿੱਚ 'for' ਲੂਪ ਕਿਸ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?",
    options_pa: ["ਇੱਕ ਵਾਰ ਚਲਾਉਣ ਲਈ", "ਦੁਹਰਾਵਟ ਲਈ", " ਫਾਈਲ ਮਿਟਾਉਣ ਲਈ", "ਮੈਮੋਰੀ ਸਾਫ਼ ਕਰਨ ਲਈ"],
    correct_answer_index: 1,
    explanation_pa: "for ਲੂਪ ਦੁਹਰਾਵਟ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।"
},
{
    level: 6,
    question_pa: "E-Waste ਦੇ ਗਲਤ ਨਿਸ਼ਕਾਸ਼ਨ ਨਾਲ ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਕੀ ਪ੍ਰਭਾਵਿਤ ਹੁੰਦਾ ਹੈ?",
    options_pa: ["ਹਵਾ", "ਪਾਣੀ", "ਮਿੱਟੀ", "ਸਾਰੇ"],
    correct_answer_index: 3,
    explanation_pa: "ਗਲਤ ਨਿਸ਼ਕਾਸ਼ਨ ਨਾਲ ਹਵਾ, ਪਾਣੀ, ਮਿੱਟੀ ਤਿੰਨਾਂ ਪ੍ਰਭਾਵਿਤ ਹੁੰਦੇ ਹਨ।"
},

/* ---------------------- LEVEL 7 (10 QUESTIONS) ---------------------- */
{
    level: 7,
    question_pa: "10111₂ ਦਾ Decimal ਮੁੱਲ ਕੀ ਹੈ?",
    options_pa: ["19", "23", "27", "17"],
    correct_answer_index: 1,
    explanation_pa: "10111₂ = 23₁₀।"
},
{
    level: 7,
    question_pa: "Python ਵਿੱਚ Mutable ਡਾਟਾ ਟਾਈਪ ਕਿਹੜਾ ਹੈ?",
    options_pa: ["String", "Tuple", "List", "Integer"],
    correct_answer_index: 2,
    explanation_pa: "List Mutable ਹੁੰਦੀ ਹੈ।"
},
{
    level: 7,
    question_pa: "Relational Model ਕਿਸ ਰੂਪ ਵਿੱਚ ਡਾਟਾ ਦਿਖਾਉਂਦਾ ਹੈ?",
    options_pa: ["Tree", "Graph", "Table", "Document"],
    correct_answer_index: 2,
    explanation_pa: "Relational Model ਡਾਟਾ ਨੂੰ ਟੇਬਲਾਂ ਵਿੱਚ ਰੱਖਦਾ ਹੈ।"
},
{
    level: 7,
    question_pa: "Cyberbullying ਦੀ ਇੱਕ ਪਹਿਚਾਣ ਕੀ ਹੈ?",
    options_pa: ["Online ਮਜ਼ਾਕ ਕਰਨਾ", "ਧਮਕੀ ਭਰੇ ਮੈਸੇਜ", "ਫੋਟੋ ਖਿੱਚਣਾ", "ਬਲੂਟੂਥ ਚਾਲੂ ਕਰਨਾ"],
    correct_answer_index: 1,
    explanation_pa: "ਧਮਕੀ ਭਰੇ ਮੈਸੇਜ Cyberbullying ਦਾ ਹਿੱਸਾ ਹਨ।"
},
{
    level: 7,
    question_pa: "Software Update ਵਿੱਚ ਕੀ ਹੁੰਦਾ ਹੈ?",
    options_pa: ["ਨਵੀਆਂ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ", "ਬੱਗ ਫਿਕਸ", "ਸਿਸਟਮ ਡਿਲੀਟ", "ਸਾਰਾ ਡਾਟਾ ਮਿਟਾਉਣਾ"],
    correct_answer_index: 1,
    explanation_pa: "Update ਵਿੱਚ ਬੱਗ ਫਿਕਸ ਅਤੇ ਛੋਟੇ ਸੁਧਾਰ ਹੁੰਦੇ ਹਨ।"
},
{
    level: 7,
    question_pa: "Python ਵਿੱਚ len() ਕੀ ਦਿੰਦਾ ਹੈ?",
    options_pa: ["ਲੂਪ ਦੀ ਲੰਬਾਈ", "ਸਟ੍ਰਿੰਗ/ਲਿਸਟ ਦੀ ਲੰਬਾਈ", "ਫਾਈਲ ਆਕਾਰ", "ਨੈੱਟਵਰਕ ਗਤੀ"],
    correct_answer_index: 1,
    explanation_pa: "len() ਕਿਸੇ ਵੀ ਆਈਟਮ ਦੀ ਲੰਬਾਈ ਦਿੰਦਾ ਹੈ।"
},
{
    level: 7,
    question_pa: "Octal 47₈ ਦਾ Decimal ਕੀ ਹੁੰਦਾ ਹੈ?",
    options_pa: ["39", "40", "47", "35"],
    correct_answer_index: 0,
    explanation_pa: "47₈ = 4×8 + 7 = 32 + 7 = 39।"
},
{
    level: 7,
    question_pa: "SQL ਦੀ DML ਭਾਸ਼ਾ ਕਿਸ ਲਈ ਵਰਤੀ ਜਾਂਦੀ ਹੈ?",
    options_pa: ["ਸਰਚਨਾ ਬਣਾਉਣ ਲਈ", "ਡਾਟਾ ਮੈਨੇਜਮੈਂਟ ਲਈ", "ਪਾਸਵਰਡ ਬਦਲਣ ਲਈ", "ਡਿਸਕ ਫਾਰਮੈਟ ਕਰਨ ਲਈ"],
    correct_answer_index: 1,
    explanation_pa: "DML ਡਾਟਾ ਦੇ ਇਨਸਰਟ, ਅੱਪਡੇਟ ਅਤੇ ਡਿਲੀਟ ਲਈ ਵਰਤੀ ਜਾਂਦੀ ਹੈ।"
},
{
    level: 7,
    question_pa: "Virus ਦਾ ਮੁੱਖ ਮਕਸਦ ਕੀ ਹੁੰਦਾ ਹੈ?",
    options_pa: ["ਸਿਸਟਮ ਤੇਜ਼ ਕਰਨਾ", "ਡਾਟਾ ਖਰਾਬ ਕਰਨਾ", "ਰੈਮ ਵਧਾਉਣਾ", "ਕੈਮਰਾ ਚਾਲੂ ਕਰਨਾ"],
    correct_answer_index: 1,
    explanation_pa: "Virus ਸਿਸਟਮ ਦੇ ਡਾਟਾ ਨੂੰ ਖਰਾਬ ਕਰ ਸਕਦਾ ਹੈ।"
},
{
    level: 7,
    question_pa: "Python ਵਿੱਚ 3 * 'hi' ਦਾ ਕੀ ਨਤੀਜਾ ਆਉਂਦਾ ਹੈ?",
    options_pa: ["error", "hi3", "hihihi", "3hi"],
    correct_answer_index: 2,
    explanation_pa: "3 * 'hi' → 'hihihi'।"
},

/* ---------------------- LEVEL 8 (10 QUESTIONS) ---------------------- */
{
    level: 8,
    question_pa: "Hexadecimal 9A₁₆ ਦਾ Decimal ਮੁੱਲ ਕੀ ਹੈ?",
    options_pa: ["145", "154", "157", "160"],
    correct_answer_index: 1,
    explanation_pa: "9A₁₆ = 9×16 + 10 = 144 + 10 = 154।"
},
{
    level: 8,
    question_pa: "Python ਵਿੱਚ break ਦਾ ਕੀ ਕੰਮ ਹੈ?",
    options_pa: ["ਲੂਪ ਰੋਕਣਾ", "ਲੂਪ ਸ਼ੁਰੂ ਕਰਨਾ", "ਲੂਪ ਦੁਹਰਾਉਣਾ", "ਪ੍ਰੋਗਰਾਮ ਬੰਦ ਕਰਨਾ"],
    correct_answer_index: 0,
    explanation_pa: "break ਲੂਪ ਨੂੰ ਤੁਰੰਤ ਰੋਕ ਦਿੰਦਾ ਹੈ।"
},
{
    level: 8,
    question_pa: "DBMS ਵਿੱਚ Integrity Rules ਕਿਸ ਲਈ ਹੁੰਦੇ ਹਨ?",
    options_pa: ["ਮਾਲਵੇਅਰ ਰੋਕਣ ਲਈ", "ਡਾਟਾ ਸਹੀ ਰੱਖਣ ਲਈ", "ਫਾਈਲ ਕਾਪੀ ਕਰਨ ਲਈ", "ਫੋਲਡਰ ਬਣਾਉਣ ਲਈ"],
    correct_answer_index: 1,
    explanation_pa: "Integrity Rules ਡਾਟਾ ਦੀ ਸਹੀਤਾ ਯਕੀਨੀ ਬਣਾਉਂਦੇ ਹਨ।"
},
{
    level: 8,
    question_pa: "Cyber Crime ਵਿੱਚ Eavesdropping ਦਾ ਕੀ ਮਤਲਬ ਹੈ?",
    options_pa: ["ਡਾਟਾ ਸਟੋਰ ਕਰਨਾ", "ਚੋਰੀ ਨਾਲ ਸੁਣਨਾ", "ਫਾਈਲ ਸੇਵ ਕਰਨਾ", "ਵਾਇਰਸ ਖੋਜਣਾ"],
    correct_answer_index: 1,
    explanation_pa: "Eavesdropping ਦਾ ਮਤਲਬ ਗੁਪਤ ਤੌਰ 'ਤੇ ਸੁਣਨਾ ਹੈ।"
},
{
    level: 8,
    question_pa: "Python ਵਿੱਚ float() ਦਾ ਉਦੇਸ਼ ਕੀ ਹੈ?",
    options_pa: ["Integer ਬਣਾਉਣਾ", "Decimal ਸੰਖਿਆ ਬਣਾਉਣਾ", "String ਬਣਾਉਣਾ", "None"],
    correct_answer_index: 1,
    explanation_pa: "float() ਡਾਟਾ ਨੂੰ Decimal ਵਿੱਚ ਬਦਲਦਾ ਹੈ।"
},
{
    level: 8,
    question_pa: "Binary 110011 ਦਾ Decimal ਮੁੱਲ ਕੀ ਹੈ?",
    options_pa: ["49", "51", "57", "60"],
    correct_answer_index: 1,
    explanation_pa: "110011₂ = 51₁₀।"
},
{
    level: 8,
    question_pa: "Database Administrator ਦਾ ਮੁੱਖ ਕੰਮ ਕੀ ਹੈ?",
    options_pa: ["ਗੇਮ ਖੇਡਣਾ", "ਡਾਟਾ ਸੰਭਾਲਣਾ", "ਫੋਟੋ ਐਡਿਟ ਕਰਨਾ", "ਕੀਬੋਰਡ ਮੁਰੰਮਤ"],
    correct_answer_index: 1,
    explanation_pa: "DBA ਡਾਟਾਬੇਸ ਦੀ ਦੇਖਭਾਲ ਕਰਦਾ ਹੈ।"
},
{
    level: 8,
    question_pa: "Python ਵਿੱਚ AND ਲਾਜਿਕਲ ਓਪਰੇਟਰ ਕਦੋਂ True ਹੁੰਦਾ ਹੈ?",
    options_pa: ["ਦੋਵੇਂ False ਹੋਣ 'ਤੇ", "ਇੱਕ True ਹੋਣ 'ਤੇ", "ਦੋਵੇਂ True ਹੋਣ 'ਤੇ", "ਕਦੇ ਵੀ ਨਹੀਂ"],
    correct_answer_index: 2,
    explanation_pa: "AND ਸਿਰਫ ਦੋਵੇਂ ਸ਼ਰਤਾਂ True ਹੋਣ 'ਤੇ True ਹੁੰਦਾ ਹੈ।"
},
{
    level: 8,
    question_pa: "E-Waste ਵਿੱਚੋਂ ਕੀ-ਕੀ ਦੁਬਾਰਾ ਵਰਤਿਆ ਜਾ ਸਕਦਾ ਹੈ?",
    options_pa: ["ਸੋਨਾ", "ਤਾਂਬਾ", "ਲੋਹਾ", "ਉਪਰੋਕਤ ਸਭ"],
    correct_answer_index: 3,
    explanation_pa: "E-Waste ਵਿੱਚ ਕੀਮਤੀ ਧਾਤਾਂ ਦੁਬਾਰਾ ਵਰਤੀਆਂ ਜਾ ਸਕਦੀਆਂ ਹਨ।"
},
{
    level: 8,
    question_pa: "OS ਦਾ ਕੰਮ ਕੀ ਹੈ?",
    options_pa: ["ਸੌਂਗ ਚਲਾਉਣਾ", "ਹਾਰਡਵੇਅਰ ਨਿਯੰਤਰਣ", "ਕੈਮਰਾ ਓਪਨ ਕਰਨਾ", "ਫੋਨ ਬੈਲੰਸ ਕਰਨਾ"],
    correct_answer_index: 1,
    explanation_pa: "Operating System ਹਾਰਡਵੇਅਰ ਤੇ ਸਾਫਟਵੇਅਰ ਵਿਚਕਾਰ ਕੰਮ ਸੰਭਾਲਦਾ ਹੈ।"
},

/* ---------------------- LEVEL 9 (10 QUESTIONS) ---------------------- */
{
    level: 9,
    question_pa: "Hexadecimal A4 ਦਾ Decimal ਮੁੱਲ ਕੀ ਹੈ?",
    options_pa: ["132", "148", "164", "175"],
    correct_answer_index: 2,
    explanation_pa: "A4₁₆ = 10×16 + 4 = 160 + 4 = 164।"
},
{
    level: 9,
    question_pa: "Python ਵਿੱਚ Dictionary ਦੀ ਖਾਸੀਅਤ ਕੀ ਹੈ?",
    options_pa: ["Indexed", "Key-Value Structure", "Sequential", "Immutable"],
    correct_answer_index: 1,
    explanation_pa: "Dictionary Key-Value ਜੋੜਿਆਂ ਵਿੱਚ ਡਾਟਾ ਰੱਖਦੀ ਹੈ।"
},
{
    level: 9,
    question_pa: "SQL ਵਿੱਚ ALTER ਕਮਾਂਡ ਕਿਸ ਲਈ ਵਰਤੀ ਜਾਂਦੀ ਹੈ?",
    options_pa: ["ਨਵਾਂ ਟੇਬਲ ਬਣਾਉਣ ਲਈ", "ਟੇਬਲ ਵਿੱਚ ਤਬਦੀਲੀ ਲਈ", "ਟੇਬਲ ਮਿਟਾਉਣ ਲਈ", "ਡਾਟਾ ਇਨਸਰਟ ਕਰਨ ਲਈ"],
    correct_answer_index: 1,
    explanation_pa: "ALTER ਟੇਬਲ ਦੀ ਬਣਾਵਟ ਵਿੱਚ ਤਬਦੀਲੀਆਂ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।"
},
{
    level: 9,
    question_pa: "Cyber Crime ਵਿੱਚ Identity Theft ਕੀ ਹੈ?",
    options_pa: ["ਫੋਟੋ ਕਾਪੀ ਕਰਨਾ", "ਕਿਸੇ ਦੀ ਜਾਣਕਾਰੀ ਚੋਰੀ ਕਰਨਾ", "ਪੈਨ ਚਲਾਉਣਾ", "ਕੰਪਿਊਟਰ ਚਾਲੂ ਕਰਨਾ"],
    correct_answer_index: 1,
    explanation_pa: "Identity Theft ਕਿਸੇ ਦੀ ਨਿੱਜੀ ਜਾਣਕਾਰੀ ਚੋਰੀ ਕਰਕੇ ਵਰਤਣਾ ਹੈ।"
},
{
    level: 9,
    question_pa: "Python ਵਿੱਚ continue ਦਾ ਕੀ ਕੰਮ ਹੈ?",
    options_pa: ["ਲੂਪ ਰੋਕਣਾ", "ਅਗਲੀ iteration 'ਤੇ ਜਾਣਾ", "ਲੂਪ ਮਿਟਾਉਣਾ", "ਪ੍ਰੋਗਰਾਮ ਬੰਦ ਕਰਨਾ"],
    correct_answer_index: 1,
    explanation_pa: "continue ਅਗਲੀ iteration 'ਤੇ ਲੈ ਜਾਂਦਾ ਹੈ।"
},
{
    level: 9,
    question_pa: "Binary 101101 ਦਾ Decimal ਮੁੱਲ ਕੀ ਹੈ?",
    options_pa: ["43", "45", "52", "55"],
    correct_answer_index: 0,
    explanation_pa: "101101₂ = 45 ਨਹੀਂ, 32+8+4+1 = 45 → Correction: 32+8+4+1 = 45।"
},
{
    level: 9,
    question_pa: "DBMS ਵਿੱਚ Data Model ਕਿਸ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ?",
    options_pa: ["ਲੋਜਿਕਲ ਬਣਾਵਟ", "ਰੈਮ", "ਫੋਟੋ", "ਕੀਬੋਰਡ"],
    correct_answer_index: 0,
    explanation_pa: "Data Model ਡਾਟਾਬੇਸ ਦੀ ਲੋਜਿਕਲ ਬਣਾਵਟ ਹੈ।"
},
{
    level: 9,
    question_pa: "Malware ਦਾ ਉਦਾਹਰਨ ਕਿਹੜਾ ਹੈ?",
    options_pa: ["Music Player", "Trojan", "Notepad", "Paint"],
    correct_answer_index: 1,
    explanation_pa: "Trojan ਇੱਕ ਮਾਲਵੇਅਰ ਹੈ।"
},
{
    level: 9,
    question_pa: "Python ਵਿੱਚ int('25') ਦਾ ਨਤੀਜਾ ਕੀ ਹੈ?",
    options_pa: ["25", "'25'", "Error", "None"],
    correct_answer_index: 0,
    explanation_pa: "int('25') → 25 (Integer)।"
},
{
    level: 9,
    question_pa: "Database ਵਿੱਚ Cardinality ਕਿਸ ਨੂੰ ਕਹਿੰਦੇ ਹਨ?",
    options_pa: ["Columns", "Rows", "Keys", "Schemas"],
    correct_answer_index: 1,
    explanation_pa: "|R| = Cardinality = Rows ਦੀ ਗਿਣਤੀ।"
},

/* ---------------------- LEVEL 10 (10 QUESTIONS) ---------------------- */
{
    level: 10,
    question_pa: "Octal 75 ਦਾ Decimal ਮੁੱਲ ਕੀ ਹੈ?",
    options_pa: ["61", "63", "65", "57"],
    correct_answer_index: 0,
    explanation_pa: "75₈ = 7×8 + 5 = 56 + 5 = 61।"
},
{
    level: 10,
    question_pa: "Python ਵਿੱਚ pass statement ਕਦੋਂ ਵਰਤੀ ਜਾਂਦੀ ਹੈ?",
    options_pa: ["ਲੂਪ ਖਤਮ ਕਰਨ ਲਈ", "ਕੋਡ ਖਾਲੀ ਛੱਡਣ ਲਈ", "Error ਹਟਾਉਣ ਲਈ", "String ਬਣਾਉਣ ਲਈ"],
    correct_answer_index: 1,
    explanation_pa: "pass ਬਲਾਕ ਖਾਲੀ ਛੱਡਣ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।"
},
{
    level: 10,
    question_pa: "SQL SELECT ਕਮਾਂਡ ਕਿਸ ਲਈ ਹੁੰਦੀ ਹੈ?",
    options_pa: ["ਡਾਟਾ ਲੈਣ ਲਈ", "ਡਾਟਾ ਮਿਟਾਉਣ ਲਈ", "ਡਾਟਾ ਬਦਲਣ ਲਈ", "ਟੇਬਲ ਬਣਾਉਣ ਲਈ"],
    correct_answer_index: 0,
    explanation_pa: "SELECT ਡਾਟਾ ਨੂੰ retrieve ਕਰਨ ਲਈ ਵਰਤੀ ਜਾਂਦੀ ਹੈ।"
},
{
    level: 10,
    question_pa: "Cyber Ethics ਵਿੱਚ Property ਦਾ ਕੀ ਮਤਲਬ ਹੈ?",
    options_pa: ["ਕਿਸੇ ਦੀ ਸਿਵਲ ਜਾਇਦਾਦ", "ਡਿਜ਼ੀਟਲ ਸਮੱਗਰੀ ਦਾ ਹੱਕ", "ਹਰ ਚੀਜ਼", "ਵਿਕਰੀ ਕਰਨਾ"],
    correct_answer_index: 1,
    explanation_pa: "Property ਦਾ ਮਤਲਬ ਡਿਜ਼ੀਟਲ ਸਮੱਗਰੀ ਦੇ ਹੱਕਾਂ ਦੀ ਰੱਖਿਆ।"
},
{
    level: 10,
    question_pa: "Python ਵਿੱਚ list.remove(x) ਕੀ ਕਰਦਾ ਹੈ?",
    options_pa: ["x ਜੋੜਦਾ ਹੈ", "x ਮਿਟਾਉਂਦਾ ਹੈ", "ਸਾਰੀ ਲਿਸਟ ਮਿਟਾਉਂਦਾ ਹੈ", "x ਦਿਖਾਉਂਦਾ ਹੈ"],
    correct_answer_index: 1,
    explanation_pa: "remove() value ਦੇ ਆਧਾਰ 'ਤੇ item ਮਿਟਾਉਂਦਾ ਹੈ।"
},
{
    level: 10,
    question_pa: "Binary 1110001100₂ ਦਾ Decimal ਮੁੱਲ ਕੀ ਹੈ?",
    options_pa: ["892", "908", "910", "912"],
    correct_answer_index: 1,
    explanation_pa: "1110001100₂ = 908₁₀।"
},
{
    level: 10,
    question_pa: "DBMS ਵਿੱਚ Schema ਕੀ ਹੈ?",
    options_pa: ["Hardware", "Logical Structure", "Mouse Settings", "Screen Size"],
    correct_answer_index: 1,
    explanation_pa: "Schema ਡਾਟਾਬੇਸ ਦੀ ਲੋਜਿਕਲ ਬਣਤਰ ਹੈ।"
},
{
    level: 10,
    question_pa: "Firewall ਕਿਸ ਨੂੰ ਰੋਕਦਾ ਹੈ?",
    options_pa: ["Unauthorized ਐਕਸੈਸ", "ਰੈਮ", "ਪ੍ਰਿੰਟਰ", "ਕੀਬੋਰਡ"],
    correct_answer_index: 0,
    explanation_pa: "Firewall ਅਣਅਧਿਕਾਰਿਤ ਐਕਸੈਸ ਰੋਕਦਾ ਹੈ।"
},
{
    level: 10,
    question_pa: "Python ਵਿੱਚ zip() ਫੰਕਸ਼ਨ ਕੀ ਕਰਦਾ ਹੈ?",
    options_pa: ["ਲਿਸਟ ਜੋੜਦਾ ਹੈ", "ਲਿਸਟਾਂ ਨੂੰ ਜੋੜ ਕੇ ਜੋੜੇ ਬਣਾਉਂਦਾ ਹੈ", "ਫਾਈਲ ਕੰਪ੍ਰੈਸ ਕਰਦਾ ਹੈ", "ਲੂਪ ਬਣਾਉਂਦਾ ਹੈ"],
    correct_answer_index: 1,
    explanation_pa: "zip() ਦੋ ਜਾਂ ਵੱਧ sequences ਨੂੰ ਜੋੜ ਕੇ pairs ਬਣਾਉਂਦਾ ਹੈ।"
},
{
    level: 10,
    question_pa: "E-Waste ਵਿੱਚ Mercury ਕਿਉਂ ਖਤਰਨਾਕ ਹੈ?",
    options_pa: ["ਸਿਰਫ ਬਦਬੂ ਕਰਦਾ ਹੈ", "ਹਵਾ ਨੂੰ ਗੰਦਲਾ ਕਰਦਾ ਹੈ", "ਦਿਮਾਗ ਅਤੇ ਸਰੀਰ ਲਈ ਜ਼ਹਰੀਲਾ ਹੈ", "ਮੋਬਾਈਲ ਚਾਰਜ ਨਹੀਂ ਹੋਣ ਦਿੰਦਾ"],
    correct_answer_index: 2,
    explanation_pa: "Mercury ਮਨੁੱਖੀ ਸਰੀਰ ਅਤੇ ਦਿਮਾਗ ਲਈ ਬਹੁਤ ਹਾਨੀਕਾਰਕ ਹੈ।"
},
/* ---------------------- LEVEL 11 (10 QUESTIONS) ---------------------- */
{
    level: 11,
    question_pa: "Binary 101011101₂ ਦਾ Decimal ਮੁੱਲ ਕੀ ਹੈ?",
    options_pa: ["349", "365", "381", "445"],
    correct_answer_index: 1,
    explanation_pa: "101011101₂ = 365₁₀।"
},
{
    level: 11,
    question_pa: "Python ਵਿੱਚ enumerate() ਫੰਕਸ਼ਨ ਦਾ ਉਦੇਸ਼ ਕੀ ਹੈ?",
    options_pa: ["Index ਅਤੇ Value ਇਕੱਠੇ ਦੇਣਾ", "ਲਿਸਟ ਮਿਟਾਉਣਾ", "ਲਿਸਟ ਕਾਪੀ ਕਰਨਾ", "ਲਿਸਟ sort ਕਰਨਾ"],
    correct_answer_index: 0,
    explanation_pa: "enumerate() iteration ਦੌਰਾਨ index+value ਮੁਹੱਈਆ ਕਰਦਾ ਹੈ।"
},
{
    level: 11,
    question_pa: "DBMS ਵਿੱਚ Foreign Key ਕਦੋਂ ਵਰਤੀ ਜਾਂਦੀ ਹੈ?",
    options_pa: ["ਦੋ ਟੇਬਲਾਂ ਨੂੰ ਜੋੜਣ ਲਈ", "ਡਾਟਾ ਮਿਟਾਉਣ ਲਈ", "ਵਾਇਰਸ ਰੋਕਣ ਲਈ", "ਡਾਟਾ Import ਕਰਨ ਲਈ"],
    correct_answer_index: 0,
    explanation_pa: "Foreign Key ਦੋ ਟੇਬਲਾਂ ਵਿੱਚ ਰਿਸ਼ਤਾ ਬਣਾਉਂਦੀ ਹੈ।"
},
{
    level: 11,
    question_pa: "Cyber Security ਵਿੱਚ Phishing ਦਾ ਮੁੱਖ ਨਿਸ਼ਾਨਾ ਕੀ ਹੁੰਦਾ ਹੈ?",
    options_pa: ["ਗਾਣੇ ਚੋਰੀ ਕਰਨਾ", "ਪਾਸਵਰਡ ਚੋਰੀ ਕਰਨਾ", "ਮੋਬਾਈਲ ਚਾਰਜ ਕਰਨਾ", "ਰੈਮ ਵਧਾਉਣਾ"],
    correct_answer_index: 1,
    explanation_pa: "Phishing ਅਧਿਕਤਮ ਪਾਸਵਰਡ ਚੋਰੀ ਕਰਨ ਲਈ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।"
},
{
    level: 11,
    question_pa: "Python ਵਿੱਚ sorted() ਅਤੇ sort() ਵਿੱਚ ਕੀ ਫਰਕ ਹੈ?",
    options_pa: ["sorted() ਮੂਲ ਲਿਸਟ ਬਦਲਦਾ ਹੈ", "sort() ਨਵੀਂ ਲਿਸਟ ਦਿੰਦਾ ਹੈ", "sorted() ਨਵੀਂ ਲਿਸਟ ਦਿੰਦਾ ਹੈ", "ਕੋਈ ਫਰਕ ਨਹੀਂ"],
    correct_answer_index: 2,
    explanation_pa: "sorted() ਨਵੀਂ ਲਿਸਟ ਬਣਾਉਂਦਾ ਹੈ, ਜਦਕਿ sort() ਮੂਲ ਲਿਸਟ ਬਦਲਦਾ ਹੈ।"
},
{
    level: 11,
    question_pa: "Decimal 199 ਨੂੰ Hexadecimal ਵਿੱਚ ਲਿਖੋ:",
    options_pa: ["C7", "CB", "D1", "B3"],
    correct_answer_index: 0,
    explanation_pa: "199₁₀ = C7₁₆।"
},
{
    level: 11,
    question_pa: "DBMS ਵਿੱਚ Normalization ਕਿਸ ਸਮੱਸਿਆ ਨੂੰ ਘਟਾਉਂਦਾ ਹੈ?",
    options_pa: ["ਡਾਟਾ ਦੁਹਰਾਵਟ", "ਰੈਮ ਘਾਟ", "ਸਕਰੀਨ ਬ੍ਰਾਈਟਨੈਸ", "ਵਾਇਰਸ"],
    correct_answer_index: 0,
    explanation_pa: "Normalization ਡਾਟਾ redundancy ਨੂੰ ਘਟਾਉਂਦਾ ਹੈ।"
},
{
    level: 11,
    question_pa: "Cyber Crime ਵਿੱਚ Keylogging ਕੀ ਕਰਦਾ ਹੈ?",
    options_pa: ["ਕੀਬੋਰਡ ਦੀ ਮੁਰੰਮਤ", "ਕੀ ਦਬਾਅ ਰਿਕਾਰਡ ਕਰਨਾ", "ਵਾਇਰਸ ਮਿਟਾਉਣਾ", "ਡਾਟਾ ਬੈਕਅੱਪ"],
    correct_answer_index: 1,
    explanation_pa: "Keylogger ਕੀਬੋਰਡ ਦਬਾਅ ਨੂੰ ਰਿਕਾਰਡ ਕਰਦਾ ਹੈ।"
},
{
    level: 11,
    question_pa: "Python ਵਿੱਚ *args ਕਿਸ ਲਈ ਹੈ?",
    options_pa: ["Multiple arguments ਲੈਣ ਲਈ", "Class ਬਣਾਉਣ ਲਈ", "File read ਕਰਨ ਲਈ", "Modules import ਕਰਨ ਲਈ"],
    correct_answer_index: 0,
    explanation_pa: "*args ਇੱਕ ਫੰਕਸ਼ਨ ਨੂੰ ਬੇਹਿਸਾਬ arguments ਦੇ ਸਕਦਾ ਹੈ।"
},
{
    level: 11,
    question_pa: "Binary 11111001₂ ਨੂੰ Octal ਵਿੱਚ ਬਦਲੋ:",
    options_pa: ["371", "765", "757", "745"],
    correct_answer_index: 0,
    explanation_pa: "11111001₂ = 371₈।"
},

/* ---------------------- LEVEL 12 (10 QUESTIONS) ---------------------- */
{
    level: 12,
    question_pa: "Hexadecimal 1F3 ਦਾ Binary ਰੂਪ ਕੀ ਹੈ?",
    options_pa: ["11111001", "111110011", "000111100011", "000111110011"],
    correct_answer_index: 3,
    explanation_pa: "1F3₁₆ = 0001 1111 0011₂।"
},
{
    level: 12,
    question_pa: "Python ਵਿੱਚ Recursion ਕੀ ਹੈ?",
    options_pa: ["ਫੰਕਸ਼ਨ ਦਾ ਆਪਣੇ ਆਪ ਨੂੰ ਕਾਲ ਕਰਨਾ", "ਲੂਪ ਚਲਾਉਣਾ", "ਫਾਈਲ ਮਿਟਾਉਣਾ", "ਡਾਟਾ sort ਕਰਨਾ"],
    correct_answer_index: 0,
    explanation_pa: "Recursion ਉਹ ਤਰੀਕਾ ਹੈ ਜਿੱਥੇ ਫੰਕਸ਼ਨ ਆਪ ਨੂੰ ਕਾਲ ਕਰਦਾ ਹੈ।"
},
{
    level: 12,
    question_pa: "DBMS ਵਿੱਚ ACID ਵਿੱਚ 'A' ਦਾ ਕੀ ਮਤਲਬ ਹੈ?",
    options_pa: ["Atomicity", "Accuracy", "Availability", "Access"],
    correct_answer_index: 0,
    explanation_pa: "ACID ਦਾ 'A' = Atomicity।"
},
{
    level: 12,
    question_pa: "Spyware ਦਾ ਕੰਮ ਕੀ ਹੈ?",
    options_pa: ["ਡਾਟਾ ਦੀ ਮੁਰੰਮਤ", "ਹਾਰਡਵੇਅਰ update", "ਚੁਪਕੇ ਨਾਲ ਡਾਟਾ ਇਕੱਠਾ ਕਰਨਾ", "Internet speed ਵਧਾਉਣਾ"],
    correct_answer_index: 2,
    explanation_pa: "Spyware ਗੁਪਤ ਤਰੀਕੇ ਨਾਲ ਡਾਟਾ ਇਕੱਠਾ ਕਰਦਾ ਹੈ।"
},
{
    level: 12,
    question_pa: "Python ਵਿੱਚ lambda ਕੀ ਹੈ?",
    options_pa: ["ਲੂਪ", "Anonymous ਫੰਕਸ਼ਨ", "Error", "Class"],
    correct_answer_index: 1,
    explanation_pa: "lambda ਇੱਕ ਛੋਟਾ anonymous function ਹੈ।"
},
{
    level: 12,
    question_pa: "Decimal 512 ਦਾ Binary ਰੂਪ ਕੀ ਹੈ?",
    options_pa: ["1000000000", "100000000", "1010000000", "111111111"],
    correct_answer_index: 1,
    explanation_pa: "512₁₀ = 100000000₁₂।"
},
{
    level: 12,
    question_pa: "DBMS ਵਿੱਚ Indexing ਦਾ ਉਦੇਸ਼ ਕੀ ਹੈ?",
    options_pa: ["ਸਰਵਰ ਤੇਜ਼ ਕਰਨਾ", "ਡਾਟਾ ਖੋਜਣ ਦੀ ਗਤੀ ਵਧਾਉਣਾ", "ਡਾਟਾ ਮਿਟਾਉਣਾ", "Backup"],
    correct_answer_index: 1,
    explanation_pa: "Indexing ਡਾਟਾ ਰੀਟਰੀਵਲ ਤੇਜ਼ ਕਰਦੀ ਹੈ।"
},
{
    level: 12,
    question_pa: "Cyber Crime ਵਿੱਚ DoS Attack ਦਾ ਮਤਲਬ ਕੀ ਹੈ?",
    options_pa: ["Data over safety", "Denial of Service", "Device over scan", "Digital operating system"],
    correct_answer_index: 1,
    explanation_pa: "DoS Attack ਵਿੱਚ ਸਰਵਰ ਨੂੰ ਅਣਉਪਲਭ ਬਣਾਇਆ ਜਾਂਦਾ ਹੈ।"
},
{
    level: 12,
    question_pa: "Python ਵਿੱਚ map() ਕਿਹੜੇ ਨਾਲ ਕੰਮ ਕਰਦਾ ਹੈ?",
    options_pa: ["Loops", "Functions", "Classes", "Modules"],
    correct_answer_index: 1,
    explanation_pa: "map() ਕਿਸੇ function ਨੂੰ sequence 'ਤੇ ਲਗਾਉਂਦਾ ਹੈ।"
},
{
    level: 12,
    question_pa: "Hexadecimal FF ਦਾ Decimal ਮੁੱਲ ਕੀ ਹੈ?",
    options_pa: ["240", "255", "260", "225"],
    correct_answer_index: 1,
    explanation_pa: "FF₁₆ = 255₁₀।"
},

/* ---------------------- LEVEL 13 (10 QUESTIONS) ---------------------- */
{
    level: 13,
    question_pa: "Binary 110110101101₂ ਨੂੰ Decimal ਵਿੱਚ ਬਦਲੋ:",
    options_pa: ["3293", "3501", "3437", "3677"],
    correct_answer_index: 2,
    explanation_pa: "110110101101₂ = 3437₁₀।"
},
{
    level: 13,
    question_pa: "Python ਵਿੱਚ Generator ਕੀ ਹੈ?",
    options_pa: ["List", "Iterator ਬਣਾਉਣ ਵਾਲਾ function", "Module", "Error"],
    correct_answer_index: 1,
    explanation_pa: "Generator yield ਦੀ ਵਰਤੋਂ ਨਾਲ iterator ਬਣਾਉਂਦਾ ਹੈ।"
},
{
    level: 13,
    question_pa: "DBMS ਵਿੱਚ Deadlock ਕਦੋਂ ਹੁੰਦਾ ਹੈ?",
    options_pa: ["ਦੋ process ਇੱਕ ਦੂਜੇ ਦੀ resources ਦੀ ਉਡੀਕ ਕਰਨ", "Software crash", "Virus attack", "Backup pending"],
    correct_answer_index: 0,
    explanation_pa: "Deadlock ਦੋ ਪ੍ਰਕਿਰਿਆਵਾਂ ਦੀ ਉਡੀਕ ਦੀ ਸਥਿਤੀ ਹੈ।"
},
{
    level: 13,
    question_pa: "Cyber Security ਵਿੱਚ Encryption ਕਿਸ ਲਈ ਵਰਤੀ ਜਾਂਦੀ ਹੈ?",
    options_pa: ["ਡਾਟਾ ਛੁਪਾਉਣ ਲਈ", "ਕੈਮਰਾ ਚਾਲੂ ਕਰਨ ਲਈ", "ਮੋਬਾਈਲ ਰੀਸੈੱਟ", "ਕੀਬੋਰਡ fix"],
    correct_answer_index: 0,
    explanation_pa: "Encryption ਡਾਟਾ ਨੂੰ unreadable ਬਣਾਉਂਦੀ ਹੈ।"
},
{
    level: 13,
    question_pa: "Python ਵਿੱਚ Decorator ਕਿਸ ਲਈ ਹੁੰਦਾ ਹੈ?",
    options_pa: ["Function enhance ਕਰਨ ਲਈ", "File save ਕਰਨ ਲਈ", "Loop optimize ਕਰਨ ਲਈ", "Variable ਮਿਟਾਉਣਾ"],
    correct_answer_index: 0,
    explanation_pa: "Decorator function ਦੀ functionality ਵਧਾਉਂਦਾ ਹੈ।"
},
{
    level: 13,
    question_pa: "Octal 765₈ ਦਾ Decimal ਮੁੱਲ ਕੀ ਹੈ?",
    options_pa: ["493", "501", "503", "457"],
    correct_answer_index: 0,
    explanation_pa: "765₈ = 493₁₀।"
},
{
    level: 13,
    question_pa: "DBMS ਵਿੱਚ Trigger ਕੀ ਹੈ?",
    options_pa: ["Manual command", "Automatically ਚਲਣ ਵਾਲਾ procedure", "Hardware switch", "Log file"],
    correct_answer_index: 1,
    explanation_pa: "Trigger ਕਿਸੇ event 'ਤੇ ਆਪਣੇ ਆਪ ਚਲਦਾ ਹੈ।"
},
{
    level: 13,
    question_pa: "Cyber Attack ਵਿੱਚ Botnet ਕੀ ਹੁੰਦਾ ਹੈ?",
    options_pa: ["Robot computer group", "Internet speed", "Backup server", "None"],
    correct_answer_index: 0,
    explanation_pa: "Botnet compromised computers ਦਾ group ਹੁੰਦਾ ਹੈ।"
},
{
    level: 13,
    question_pa: "Python ਵਿੱਚ list comprehension ਦਾ ਫਾਇਦਾ ਕੀ ਹੈ?",
    options_pa: ["ਕੋਡ ਲੰਮਾ ਬਣਾਉਣਾ", "ਤੇਜ਼ ਅਤੇ ਛੋਟਾ ਕੋਡ", "ਕੋਡ error", "None"],
    correct_answer_index: 1,
    explanation_pa: "List comprehension concise ਅਤੇ fast ਕੋਡ ਦਿੰਦਾ ਹੈ।"
},
{
    level: 13,
    question_pa: "Decimal 4096 ਦਾ Binary ਰੂਪ ਕੀ ਹੈ?",
    options_pa: ["1 ਦੇ ਬਾਅਦ 10 zeros", "1 ਦੇ ਬਾਅਦ 12 zeros", "1 ਦੇ ਬਾਅਦ 8 zeros", "None"],
    correct_answer_index: 0,
    explanation_pa: "4096 = 2¹², binary: 1 ਅਤੇ 12 zeros।"
},

/* ---------------------- LEVEL 14 (10 QUESTIONS) ---------------------- */
{
    level: 14,
    question_pa: "Binary 111101011101₂ ਦਾ Hexadecimal ਰੂਪ ਕੀ ਹੈ?",
    options_pa: ["F5D", "F9B", "F7D", "FED"],
    correct_answer_index: 2,
    explanation_pa: "1111 0111 1101₂ = F7D₁₆।"
},
{
    level: 14,
    question_pa: "Python ਵਿੱਚ OOP ਦਾ ਮੁੱਖ ਲਾਭ ਕੀ ਹੈ?",
    options_pa: ["Memory waste", "Reusability", "Error increase", "None"],
    correct_answer_index: 1,
    explanation_pa: "OOP code reusability ਅਤੇ modularity ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।"
},
{
    level: 14,
    question_pa: "DBMS ਵਿੱਚ B-Tree Index ਕਿਉਂ ਮਹੱਤਵਪੂਰਨ ਹੈ?",
    options_pa: ["Searching fast ਕਰਨ ਲਈ", "Data compress ਕਰਨ ਲਈ", "Backup ਲਈ", "Security ਲਈ"],
    correct_answer_index: 0,
    explanation_pa: "B-Tree balanced structure ਹੁੰਦਾ ਹੈ ਜੋ search ਤੇਜ਼ ਕਰਦਾ ਹੈ।"
},
{
    level: 14,
    question_pa: "Cyber Security ਵਿੱਚ Social Engineering ਕੀ ਹੈ?",
    options_pa: ["Server control", "Insaan ਨੂੰ ਠੱਗ ਕੇ ਜਾਣਕਾਰੀ ਲੈਣਾ", "Router reset", "Firewall delete"],
    correct_answer_index: 1,
    explanation_pa: "Social Engineering psychological manipulation ਦੁਆਰਾ ਜਾਣਕਾਰੀ ਚੁਰਾਉਂਦਾ ਹੈ।"
},
{
    level: 14,
    question_pa: "Python ਵਿੱਚ classmethod ਕਿਸ ਨੂੰ access ਕਰਦਾ ਹੈ?",
    options_pa: ["Objects", "Class itself", "Module", "None"],
    correct_answer_index: 1,
    explanation_pa: "classmethod ਕਲਾਸ ਨੂੰ ਹੀ access ਕਰਦਾ ਹੈ।"
},
{
    level: 14,
    question_pa: "Decimal 1023 ਦਾ Binary ਰੂਪ ਕੀ ਹੈ?",
    options_pa: ["1111111111", "111111111", "11111111", "1010101010"],
    correct_answer_index: 0,
    explanation_pa: "1023 = 2¹⁰ – 1 → 1111111111₂।"
},
{
    level: 14,
    question_pa: "DBMS ਵਿੱਚ Transaction Logging ਕਾਹਦੇ ਲਈ ਹੈ?",
    options_pa: ["RAM increase", "Data recovery", "Screen light", "Gaming performance"],
    correct_answer_index: 1,
    explanation_pa: "Transaction logs failure ਦੌਰਾਨ recovery ਲਈ ਵਰਤੇ ਜਾਂਦੇ ਹਨ।"
},
{
    level: 14,
    question_pa: "Cyber Attack ਵਿੱਚ Ransomware ਕੀ ਕਰਦਾ ਹੈ?",
    options_pa: ["Data compress", "Data ਨੂੰ lock ਕਰਕੇ ਪੈਸੇ ਮੰਗਦਾ ਹੈ", "Internet ਤੇਜ਼", "Hard disk ਮੁਰੰਮਤ"],
    correct_answer_index: 1,
    explanation_pa: "Ransomware ਡਾਟਾ ਨੂੰ encrypt ਕਰਕੇ ransom ਮੰਗਦਾ ਹੈ।"
},
{
    level: 14,
    question_pa: "Python ਵਿੱਚ super() ਕਿਸ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?",
    options_pa: ["Child class ਤੋਂ parent methods access ਕਰਨ ਲਈ", "Module import", "File close ਕਰਨ ਲਈ", "Loop break ਕਰਨ ਲਈ"],
    correct_answer_index: 0,
    explanation_pa: "super() parent class ਦਾ access ਦਿੰਦਾ ਹੈ।"
},
{
    level: 14,
    question_pa: "Hexadecimal ABC ਦਾ Decimal ਮੁੱਲ ਕੀ ਹੈ?",
    options_pa: ["2750", "2748", "2742", "2748"],
    correct_answer_index: 1,
    explanation_pa: "ABC₁₆ = 2748₁₀।"
},

/* ---------------------- LEVEL 15 (10 QUESTIONS) ---------------------- */
{
    level: 15,
    question_pa: "Binary 110110111001101₂ ਦਾ Decimal ਮੁੱਲ ਕੀ ਹੈ?",
    options_pa: ["14029", "14061", "14077", "14093"],
    correct_answer_index: 1,
    explanation_pa: "110110111001101₂ = 14061₁₀।"
},
{
    level: 15,
    question_pa: "Python ਵਿੱਚ Metaclass ਕੀ ਹੈ?",
    options_pa: ["Class ਬਣਾਉਣ ਵਾਲੀ class", "Module", "Function", "Iterator"],
    correct_answer_index: 0,
    explanation_pa: "Metaclass ਉਹ class ਹੈ ਜੋ ਹੋਰ classes ਬਣਾਉਂਦੀ ਹੈ।"
},
{
    level: 15,
    question_pa: "DBMS ਵਿੱਚ Star Schema ਕਿੱਥੇ ਵਰਤੀ ਜਾਂਦੀ ਹੈ?",
    options_pa: ["OLAP/ Data Warehousing", "Game design", "Cyber Crime", "Mobile apps"],
    correct_answer_index: 0,
    explanation_pa: "Star Schema ਡਾਟਾ ਵੇਅਰਹਾਊਸਿੰਗ ਵਿੱਚ ਵਰਤੀ ਜਾਂਦੀ ਹੈ।"
},
{
    level: 15,
    question_pa: "Quantum Cryptography ਕਿਸ ਸਿਧਾਂਤ 'ਤੇ ਆਧਾਰਤ ਹੈ?",
    options_pa: ["Newton Law", "Heisenberg Uncertainty", "Ohm Law", "Einstein Gravity"],
    correct_answer_index: 1,
    explanation_pa: "Quantum Cryptography Heisenberg ਦੇ Uncertainty Principle 'ਤੇ ਆਧਾਰਤ ਹੈ।"
},
{
    level: 15,
    question_pa: "Python ਵਿੱਚ Coroutine ਕੀ ਹੁੰਦਾ ਹੈ?",
    options_pa: ["Asynchronous function", "Class", "Binary converter", "Compiler"],
    correct_answer_index: 0,
    explanation_pa: "Coroutine asynchronous ਕੰਮ ਲਈ ਬਣਿਆ ਹੁੰਦਾ ਹੈ।"
},
{
    level: 15,
    question_pa: "Hexadecimal 3AF9 ਦਾ Decimal ਮੁੱਲ ਕੀ ਹੈ?",
    options_pa: ["15065", "15097", "15081", "15001"],
    correct_answer_index: 0,
    explanation_pa: "3AF9₁₆ = 15065₁₀।"
},
{
    level: 15,
    question_pa: "DBMS ਵਿੱਚ Shadow Paging ਕਿਸ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ?",
    options_pa: ["Recovery without log", "Virus scan", "Encryption", "Indexing"],
    correct_answer_index: 0,
    explanation_pa: "Shadow Paging recovery ਨੂੰ ਬਿਨਾਂ log ਦੇ ਸੰਭਵ ਬਣਾਉਂਦਾ ਹੈ।"
},
{
    level: 15,
    question_pa: "Cyber Attack ਵਿੱਚ Zero-Day Exploit ਕੀ ਹੁੰਦਾ ਹੈ?",
    options_pa: ["New keyboard", "Unpatched vulnerability ਦਾ ਫਾਇਦਾ ਉਠਾਉਣਾ", "Screen heating", "Battery drain"],
    correct_answer_index: 1,
    explanation_pa: "Zero-Day Exploit ਇੱਕ ਅਣਪੈਚ ਕਮੀ ਦਾ ਤੁਰੰਤ ਫਾਇਦਾ ਲੈਣ ਨੂੰ ਕਹਿੰਦੇ ਹਨ।"
},
{
    level: 15,
    question_pa: "Python ਵਿੱਚ MRO (Method Resolution Order) ਕਿਸ ਲਈ ਹੈ?",
    options_pa: ["Multiple inheritance ਵਿੱਚ method ਕ੍ਰਮ ਨਿਰਧਾਰਤ ਕਰਨ ਲਈ", "Loop order", "Sort order", "None"],
    correct_answer_index: 0,
    explanation_pa: "MRO multiple inheritance ਵਿੱਚ ਕਿਹੜੀ class ਪਹਿਲਾਂ ਆਵੇਗੀ ਇਹ ਦੱਸਦਾ ਹੈ।"
},
{
    level: 15,
    question_pa: "Binary 111111111111₂ ਦਾ Decimal ਮੁੱਲ ਕੀ ਹੈ?",
    options_pa: ["4095", "4096", "4094", "4092"],
    correct_answer_index: 0,
    explanation_pa: "12 bits ਦੇ ਸਾਰੇ 1 → 2¹²–1 = 4095।"
}
];