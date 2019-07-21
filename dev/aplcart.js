var options = {
  valueNames: ['SYNTAX','DESCRIPTION','CLASS','TYPE','GROUP','CATERGORY','KEYWORDS'],
  item: '<tr><td class="SYNTAX"></td><td class="DESCRIPTION"></td><td class="CATEGORY"></td><td class="CLASS"></td><td class="GROUP"></td><td class="KEYWORDS"></td><td class="TYPE"></td></tr>',
  fuzzySearch:{searchClass: "fuzzy-search"}
};

var values = [
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Conjugate ('Identity' if Y not complex)",
    "GROUP": "",
    "KEYWORDS": "plus complex ¯10○ ¯10∘○ conj() conjugating",
    "SYNTAX": "+Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Negate: 0-N",
    "GROUP": "",
    "KEYWORDS": "minus hyphen invert additiveinverse opposite dash negation signchange − negating",
    "SYNTAX": "-N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Direction ('Signum' if N is real)",
    "GROUP": "",
    "KEYWORDS": "cross sgn() sign()",
    "SYNTAX": "×N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Reciprocal: 1÷N",
    "GROUP": "",
    "KEYWORDS": "multiplicativeinverse opposite obelus inverting reciprocating",
    "SYNTAX": "÷N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Rounding down to integer",
    "GROUP": "",
    "KEYWORDS": "downstile floor rounddown down() floor()",
    "SYNTAX": "⌊N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Rounding up to integer",
    "GROUP": "",
    "KEYWORDS": "upstile roundup ceiling seiling up() ceil()",
    "SYNTAX": "⌈N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Magnitude (absolute value)",
    "GROUP": "",
    "KEYWORDS": "verticalbar pipe stile stroke verticalline modulo modulus abs magnitude amplitude 10○ 10∘|",
    "SYNTAX": "|N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "e raised to the power N",
    "GROUP": "",
    "KEYWORDS": "star asterisk exponential etothepowerof naturalexponential exp() 2.718281828459045235360287471352662",
    "SYNTAX": "*N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Natural logarithm of N",
    "GROUP": "",
    "KEYWORDS": "naturallogarithm circlestar starcircle splat ln()",
    "SYNTAX": "⍟N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Circular/Trigonometric",
    "CLASS": "Primitive",
    "DESCRIPTION": "pi times N",
    "GROUP": "",
    "KEYWORDS": "archimedesconstant 3.141592653589793238462643383279503 π 𝜋 big large ring",
    "SYNTAX": "○N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Factorial (Gamma function of N+1)",
    "GROUP": "",
    "KEYWORDS": "countpermutations exclamation bang shriek combinatorics fact() gamma() Γ",
    "SYNTAX": "!N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Random number selected from ⍳J",
    "GROUP": "",
    "KEYWORDS": "questionmark roll randominteger interrogationpoint query eroteme",
    "SYNTAX": "?J",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Random real number between (0,1) if B=0 or ⎕IO if B=1",
    "GROUP": "",
    "KEYWORDS": "questionmark roll randomfloat interrogationpoint query eroteme",
    "SYNTAX": "?B",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Logical Inverse: 0=B",
    "GROUP": "",
    "KEYWORDS": "tilde not logicalnot logicalnegation logicalcomplement ¬ negate inverting",
    "SYNTAX": "~B",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Adding N to M",
    "GROUP": "",
    "KEYWORDS": "plus addition",
    "SYNTAX": "M+N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Subtracting N from M",
    "GROUP": "",
    "KEYWORDS": "minus dash hyphen subtraction difference − subtract",
    "SYNTAX": "M-N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Multiplying M and N",
    "GROUP": "",
    "KEYWORDS": "cross times multiplication ∙ ⋅ · product",
    "SYNTAX": "M×N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Dividing M by N",
    "GROUP": "",
    "KEYWORDS": "division over ⁄ divide",
    "SYNTAX": "M÷N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Residue after dividing N by M",
    "GROUP": "",
    "KEYWORDS": "verticalbar pipe stile stroke verticalline modulo modulus residue divisionremainder mod() divide % divmod() residual",
    "SYNTAX": "M|N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "M raised to the power N",
    "GROUP": "",
    "KEYWORDS": "power star asterisk raisedtothepowerof exponentiation pow() ** raising",
    "SYNTAX": "M*N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Base-M logarithm of N",
    "GROUP": "",
    "KEYWORDS": "logarithms logs circlestar starcircle splat log() log₁₀()",
    "SYNTAX": "M⍟N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Maximum of M and N",
    "GROUP": "",
    "KEYWORDS": "upstile greater larger max() bigger",
    "SYNTAX": "M⌈N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Minimum of M and N",
    "GROUP": "",
    "KEYWORDS": "downstile lesser smaller min()",
    "SYNTAX": "M⌊N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Circular functions",
    "GROUP": "",
    "KEYWORDS": "trigonometric hyperbolic complex imaginary arcus angle goniometric circle big large ring",
    "SYNTAX": "I○N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Number of selections of size M from N (using Beta function)",
    "GROUP": "",
    "KEYWORDS": "exclamation bang shriek binomial combinatorics countcombinations unordered selecting picking",
    "SYNTAX": "M!N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Lowest Common Multiple of M and N",
    "GROUP": "",
    "KEYWORDS": "least smallest lcm() denominator lcd()",
    "SYNTAX": "M∧N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Greatest Common Divisor of M and N",
    "GROUP": "",
    "KEYWORDS": "gcd() gcf() factor hcf() highest gcm() measure hcd",
    "SYNTAX": "M∨N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Primitive",
    "DESCRIPTION": "Less Than",
    "GROUP": "",
    "KEYWORDS": "lt before precedes ≺ smaller lesser",
    "SYNTAX": "M<N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Primitive",
    "DESCRIPTION": "Less Than Or Equal To",
    "GROUP": "",
    "KEYWORDS": "le before precedes ≦ smaller lesser or same as",
    "SYNTAX": "M≤N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Primitive",
    "DESCRIPTION": "Greater Than Or Equal To",
    "GROUP": "",
    "KEYWORDS": "ge after follows ≧ greater larger or same as",
    "SYNTAX": "M≥N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Primitive",
    "DESCRIPTION": "Greater Than",
    "GROUP": "",
    "KEYWORDS": "gt after follows ≻ greater larger",
    "SYNTAX": "M>N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Primitive",
    "DESCRIPTION": "Equal To",
    "GROUP": "",
    "KEYWORDS": "same ===",
    "SYNTAX": "X=Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Primitive",
    "DESCRIPTION": "Not Equal To",
    "GROUP": "",
    "KEYWORDS": "ne unequal different != <> /=",
    "SYNTAX": "X≠Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Converse Nonimplication",
    "GROUP": "",
    "KEYWORDS": "⇍ Mpq",
    "SYNTAX": "A<B",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Implication:",
    "GROUP": "",
    "KEYWORDS": "materialconditional materialconsequence implies implying materialimplication therefore ∴ ⇒ Cpq",
    "SYNTAX": "A≤B",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Converse Implication",
    "GROUP": "",
    "KEYWORDS": "because ∵ ⇐ if converseconditional Bpq reverseimplying",
    "SYNTAX": "A≥B",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Nonimplication",
    "GROUP": "",
    "KEYWORDS": "abjunction ⇏ but not butnot Lpq",
    "SYNTAX": "A>B",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Primitive",
    "DESCRIPTION": "XNOR",
    "GROUP": "",
    "KEYWORDS": "materialbiconditional biimplication eqv nxor bothorneither exclusivenor materialequivalence ⇔ δ ẟ Kroneckerdelta iff logicalequivalence Epq doubleimplying",
    "SYNTAX": "A=B",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Primitive",
    "DESCRIPTION": "XOR",
    "GROUP": "",
    "KEYWORDS": "exclusivedisjunction eor exor ⊕ ⊻ ⇎ Jpq",
    "SYNTAX": "A≠B",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Primitive",
    "DESCRIPTION": "AND",
    "GROUP": "",
    "KEYWORDS": "conjunction caret wedge hat circumflex Kpq",
    "SYNTAX": "A∧B",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Primitive",
    "DESCRIPTION": "OR",
    "GROUP": "",
    "KEYWORDS": "disjunction vel alternation Caron hacek invertedcircumflex checkmark hachek Apq",
    "SYNTAX": "A∨B",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Primitive",
    "DESCRIPTION": "NAND",
    "GROUP": "",
    "KEYWORDS": "shefferstroke notand andtilde carettilde alternativedenial Dpq",
    "SYNTAX": "A⍲B",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Primitive",
    "DESCRIPTION": "NOR",
    "GROUP": "",
    "KEYWORDS": "peirce'sarrow quine'sdagger ampheck neithernor jointdenial Xpq",
    "SYNTAX": "A⍱B",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Circular/Trigonometric",
    "CLASS": "Tacit",
    "DESCRIPTION": "cos ←→ sin: (1-N*2)*.5",
    "GROUP": "",
    "KEYWORDS": "pythagorean complementary cop()",
    "SYNTAX": "0∘○N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Circular/Trigonometric",
    "CLASS": "Tacit",
    "DESCRIPTION": "Arcsin N",
    "GROUP": "",
    "KEYWORDS": "arcsine asin() arcussinus",
    "SYNTAX": "¯1∘○N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Circular/Trigonometric",
    "CLASS": "Tacit",
    "DESCRIPTION": "Arccos N",
    "GROUP": "",
    "KEYWORDS": "arccosine acos() arcuscosinus",
    "SYNTAX": "¯2∘○N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Circular/Trigonometric",
    "CLASS": "Tacit",
    "DESCRIPTION": "Arctan N",
    "GROUP": "",
    "KEYWORDS": "arctangent atan() arcustangent",
    "SYNTAX": "¯3∘○N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Circular/Trigonometric",
    "CLASS": "Tacit",
    "DESCRIPTION": "cosh → sinh: (N+1)×((N-1)÷N+1)*.5",
    "GROUP": "",
    "KEYWORDS": "pythagorean complementary cohn()",
    "SYNTAX": "¯4∘○N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Circular/Trigonometric",
    "CLASS": "Tacit",
    "DESCRIPTION": "Hyperbolic Arcsinh N",
    "GROUP": "",
    "KEYWORDS": "arcsine asinh() arcussinus arsinh() area",
    "SYNTAX": "¯5∘○N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Circular/Trigonometric",
    "CLASS": "Tacit",
    "DESCRIPTION": "Hyperbolic Arccosh N",
    "GROUP": "",
    "KEYWORDS": "arccosine acosh() arcuscosinus arcosh() area",
    "SYNTAX": "¯6∘○N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Circular/Trigonometric",
    "CLASS": "Tacit",
    "DESCRIPTION": "Hyperbolic Arctanh N",
    "GROUP": "",
    "KEYWORDS": "arctangent atanh() arcustangent artanh() area",
    "SYNTAX": "¯7∘○N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Circular/Trigonometric",
    "CLASS": "Tacit",
    "DESCRIPTION": "icos ←→ -isin: -(-1+N*2)*.5",
    "GROUP": "",
    "KEYWORDS": "pythagorean complementary nconh()",
    "SYNTAX": "¯8∘○N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Circular/Trigonometric",
    "CLASS": "Tacit",
    "DESCRIPTION": "N",
    "GROUP": "",
    "KEYWORDS": "identity",
    "SYNTAX": "¯9∘○N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Circular/Trigonometric",
    "CLASS": "Tacit",
    "DESCRIPTION": "+N",
    "GROUP": "",
    "KEYWORDS": "complexconjugate",
    "SYNTAX": "¯10∘○N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Circular/Trigonometric",
    "CLASS": "Tacit",
    "DESCRIPTION": "N×0J1",
    "GROUP": "",
    "KEYWORDS": "imaginary complex itimes",
    "SYNTAX": "¯11∘○N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Circular/Trigonometric",
    "CLASS": "Tacit",
    "DESCRIPTION": "*N×0J1",
    "GROUP": "",
    "KEYWORDS": "antiphase phasor cis()",
    "SYNTAX": "¯12∘○N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Circular/Trigonometric",
    "CLASS": "Tacit",
    "DESCRIPTION": "Sine N",
    "GROUP": "",
    "KEYWORDS": "sinus sin()",
    "SYNTAX": "1∘○N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Circular/Trigonometric",
    "CLASS": "Tacit",
    "DESCRIPTION": "Cosine N",
    "GROUP": "",
    "KEYWORDS": "cosinus cos()",
    "SYNTAX": "2∘○N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Circular/Trigonometric",
    "CLASS": "Tacit",
    "DESCRIPTION": "Tangent N",
    "GROUP": "",
    "KEYWORDS": "tan()",
    "SYNTAX": "3∘○N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Circular/Trigonometric",
    "CLASS": "Tacit",
    "DESCRIPTION": "sinh → cosh: (1+N*2)*.5",
    "GROUP": "",
    "KEYWORDS": "pythagorean complementary coh()",
    "SYNTAX": "4∘○N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Circular/Trigonometric",
    "CLASS": "Tacit",
    "DESCRIPTION": "Hyperbolic sine N",
    "GROUP": "",
    "KEYWORDS": "sinus sinh()",
    "SYNTAX": "5∘○N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Circular/Trigonometric",
    "CLASS": "Tacit",
    "DESCRIPTION": "Hyperbolic cosine N",
    "GROUP": "",
    "KEYWORDS": "cosinus cosh()",
    "SYNTAX": "6∘○N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Circular/Trigonometric",
    "CLASS": "Tacit",
    "DESCRIPTION": "Hyperbolic tangent N",
    "GROUP": "",
    "KEYWORDS": "tanh()",
    "SYNTAX": "7∘○N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Circular/Trigonometric",
    "CLASS": "Tacit",
    "DESCRIPTION": "icos ←→ isin: (-1+N*2)*.5",
    "GROUP": "",
    "KEYWORDS": "pythagorean complementary conh()",
    "SYNTAX": "8∘○N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Circular/Trigonometric",
    "CLASS": "Tacit",
    "DESCRIPTION": "Real part of N",
    "GROUP": "",
    "KEYWORDS": "re()",
    "SYNTAX": "9∘○N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Circular/Trigonometric",
    "CLASS": "Tacit",
    "DESCRIPTION": "Magnitude of N",
    "GROUP": "",
    "KEYWORDS": "abs() modulo modulus abs magnitude amplitude",
    "SYNTAX": "10∘○N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Circular/Trigonometric",
    "CLASS": "Tacit",
    "DESCRIPTION": "Imaginary part of N",
    "GROUP": "",
    "KEYWORDS": "im()",
    "SYNTAX": "11∘○N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Circular/Trigonometric",
    "CLASS": "Tacit",
    "DESCRIPTION": "Phase N",
    "GROUP": "",
    "KEYWORDS": "argument arc()",
    "SYNTAX": "12∘○N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Matrix inverse of Nm (square Nm)",
    "GROUP": "",
    "KEYWORDS": "domino quaddivide table inversion",
    "SYNTAX": "⌹Nm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Matrix pseudo-inverse of Nm (over-determined Nm)",
    "GROUP": "",
    "KEYWORDS": "domino quaddivide leastsquares table pseudoinversion pseudo-inverse",
    "SYNTAX": "⌹Nm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Multiplying Mm with inversed Nm",
    "GROUP": "",
    "KEYWORDS": "domino matrixdivide quaddivide inversion",
    "SYNTAX": "Mm⌹Nm",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Encoding value N in number system M",
    "GROUP": "",
    "KEYWORDS": "antibase tobase encode number downtack representation unpack tomixedradix toradix",
    "SYNTAX": "M⊤N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Decode: Evaluate N in number system M",
    "GROUP": "",
    "KEYWORDS": "frombase decoding uptack pack frommixedradix fromradix basevalue",
    "SYNTAX": "M⊥N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Primitive",
    "DESCRIPTION": "Shape: Length of each axis of Y",
    "GROUP": "",
    "KEYWORDS": "dimensions rho ρ ϱ rank",
    "SYNTAX": "⍴Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Primitive",
    "DESCRIPTION": "Depth: Maximum level of nesting in Y (negative if uneven)",
    "GROUP": "",
    "KEYWORDS": "equalunderbar",
    "SYNTAX": "≡Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Primitive",
    "DESCRIPTION": "Tally: Number of items in leading axis",
    "GROUP": "",
    "KEYWORDS": "equalunderbarslash unequalunderbar count length() cells len()",
    "SYNTAX": "≢Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Enclose: Scalar containing Y",
    "GROUP": "",
    "KEYWORDS": "leftshoe boxing scalarise scalarize enclosing",
    "SYNTAX": "⊂Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Enclose: Contain axes ax inside scalars",
    "GROUP": "",
    "KEYWORDS": "leftshoe boxing scalarise scalarize axis enclosing",
    "SYNTAX": "⊂[ax]Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Nest: Y if already nested, else scalar containing Y",
    "GROUP": "",
    "KEYWORDS": "leftshoeunderbar encloseifsimple conditionalenclose nested boxsimple eis condenclose",
    "SYNTAX": "⊆Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Mix: Remove nesting (adding trailing axes)",
    "GROUP": "",
    "KEYWORDS": "uparrow axis",
    "SYNTAX": "↑Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Split: Nest sub-arrays (from last axis)",
    "GROUP": "",
    "KEYWORDS": "downarrow subarrays",
    "SYNTAX": "↓Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Mix: Remove nesting (adding axes between ⌊ax and ⌈ax)",
    "GROUP": "",
    "KEYWORDS": "uparrow axis",
    "SYNTAX": "↑[ax]Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Split: Nest sub-arrays (from axis ax)",
    "GROUP": "",
    "KEYWORDS": "downarrow subarray",
    "SYNTAX": "↓[ax]Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Enlist: Simple vector from elements of Y",
    "GROUP": "",
    "KEYWORDS": "flattening raze razing ϵ ε ∈ list flatten()",
    "SYNTAX": "∊Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Ravel with Axis: insert new axis between ⌊ax and ⌈ax",
    "GROUP": "",
    "KEYWORDS": "increaserank expandrank comma addaxis",
    "SYNTAX": ",[ax]Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Ravel with Axes: combine axes",
    "GROUP": "",
    "KEYWORDS": "decreaserank reducerank comma removeaxes removeaxis",
    "SYNTAX": ",[ax]Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Ravel: Reshape into a vector",
    "GROUP": "",
    "KEYWORDS": "comma flattening flatten() raze razing list",
    "SYNTAX": ",Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Table: Reshape into 2-dimensional array",
    "GROUP": "",
    "KEYWORDS": "commabar ravelcells flattencells razecells",
    "SYNTAX": "⍪Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Reverse last axis of Y",
    "GROUP": "",
    "KEYWORDS": "circlestile mirroring reversing",
    "SYNTAX": "⌽Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Reverse axis ax of Y",
    "GROUP": "",
    "KEYWORDS": "circlestile mirroring reversing",
    "SYNTAX": "⌽[ax]Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Reverse leading axis of Y",
    "GROUP": "",
    "KEYWORDS": "circlebar rowel upsetting flipping upending upsidedown reversing ⌽[1]",
    "SYNTAX": "⊖Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Transpose: Reverse order of axes of Y",
    "GROUP": "",
    "KEYWORDS": "circlebackslash cant reverseaxes ^T ⸆ ᵀ reordering ordering reversing",
    "SYNTAX": "⍉Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Reshape Y to have shape Iv",
    "GROUP": "",
    "KEYWORDS": "rho mold form dimension array ρ ϱ mould dim()",
    "SYNTAX": "Iv⍴Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Rotate vectors along last axis of Y",
    "GROUP": "",
    "KEYWORDS": "circlestile rotating shifting cyclically",
    "SYNTAX": "I⌽Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Rotate vectors along axis ax of Y",
    "GROUP": "",
    "KEYWORDS": "circlestile rotating shifting cyclically",
    "SYNTAX": "I⌽[ax]Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Rotate vectors along leading axis of Y",
    "GROUP": "",
    "KEYWORDS": "circlebar rotating cyclically",
    "SYNTAX": "I⊖Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Reorder the axes of Y",
    "GROUP": "",
    "KEYWORDS": "circlebackslash diagonal reorderaxes reordering",
    "SYNTAX": "Iv⍉Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Laminate: Join along new axis",
    "GROUP": "",
    "KEYWORDS": "comma join combine juxtapose",
    "SYNTAX": "X,[ax]Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Catenate: Join along last axis",
    "GROUP": "",
    "KEYWORDS": "comma concatenate juxtapose horizontally",
    "SYNTAX": "X,Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Catenate First: Join along leading axis",
    "GROUP": "",
    "KEYWORDS": "commabar concatenate over ontop atop vertically stack X,[1]Y",
    "SYNTAX": "X⍪Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Primitive",
    "DESCRIPTION": "Indices of all items of array of shape Jv",
    "GROUP": "",
    "KEYWORDS": "iota integers ints countto sequence numbers range ɩ ι positions locations 1… 1...",
    "SYNTAX": "⍳Jv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Primitive",
    "DESCRIPTION": "Indices of all 1s in B",
    "GROUP": "",
    "KEYWORDS": "wheretrues iotaunderbar locationsoftrues positions locations",
    "SYNTAX": "⍸B",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Primitive",
    "DESCRIPTION": "Upgrade: Indices to reorder Y ascending",
    "GROUP": "",
    "KEYWORDS": "gradeup deltastile upgrade pine concordetakingoff increasing",
    "SYNTAX": "⍋Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Primitive",
    "DESCRIPTION": "Invert permutation",
    "GROUP": "",
    "KEYWORDS": "deltastile upgrade pine concordetakingoff",
    "SYNTAX": "⍋Jv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Primitive",
    "DESCRIPTION": "Downgrade: Indices to reorder Y descending",
    "GROUP": "",
    "KEYWORDS": "gradedown delstile downgrade spine concordelanding decreasing",
    "SYNTAX": "⍒Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Primitive",
    "DESCRIPTION": "Index of: First indices in X of major cells Y",
    "GROUP": "",
    "KEYWORDS": "iota indexin indexof position ɩ ι finding locating locate positionof 1st",
    "SYNTAX": "X⍳Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Primitive",
    "DESCRIPTION": "Indices of items of Y in intervals with cut-offs X",
    "GROUP": "",
    "KEYWORDS": "intervalindex iotaunderbar bins groups range buckets classes classifying classification",
    "SYNTAX": "X⍸Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Primitive",
    "DESCRIPTION": "Deal: Is random items from ⍳Js (without replacement)",
    "GROUP": "",
    "KEYWORDS": "questionmark interrogationpoint query eroteme distinct",
    "SYNTAX": "Is?Js",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Primitive",
    "DESCRIPTION": "Upgrade using collation sequence C",
    "GROUP": "",
    "KEYWORDS": "gradeup deltastile upgrade pine concordetakingoff customalphabet case-insensitive caseinsensitive",
    "SYNTAX": "C⍋D",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Primitive",
    "DESCRIPTION": "Downgrade using collation sequence C",
    "GROUP": "",
    "KEYWORDS": "gradedown delstile downgrade spine concordelanding customalphabet case-insensitive caseinsensitive",
    "SYNTAX": "C⍒D",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Primitive",
    "DESCRIPTION": "Unique: Distinct major cells of Y",
    "GROUP": "",
    "KEYWORDS": "cup downshoe distinctitems uniqueelements nub eraseremoveduplicates",
    "SYNTAX": "∪Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Primitive",
    "DESCRIPTION": "For each item of X, 1 if found in Y, else 0",
    "GROUP": "",
    "KEYWORDS": "epsilon isin membership containedin has ϵ ε ∈ memberof",
    "SYNTAX": "X∊Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Primitive",
    "DESCRIPTION": "Boolean indication of top left corner of occurrences of entire array X within Y",
    "GROUP": "",
    "KEYWORDS": "findin epsilonunderbar search locate subarray sub-array sub-vector subvector subsequence sub-sequence sub-string substring sub-list sublist locating",
    "SYNTAX": "X⍷Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Primitive",
    "DESCRIPTION": "Match: 1 if X is identical to Y, else 0",
    "GROUP": "",
    "KEYWORDS": "match equalunderbar identical? === equivalentto sameas",
    "SYNTAX": "X≡Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Primitive",
    "DESCRIPTION": "Not Match: ~X≡Y",
    "GROUP": "",
    "KEYWORDS": "notmatch natch equalunderbarslash unequalunderbar notidentical differentfrom",
    "SYNTAX": "X≢Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Primitive",
    "DESCRIPTION": "Without: (~Xv∊Y)/Xv",
    "GROUP": "",
    "KEYWORDS": "tilde butnot without except setdifference setsubtraction setminus ∖ removing remove",
    "SYNTAX": "Xv~Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Primitive",
    "DESCRIPTION": "Union: Xv,Yv~Xv",
    "GROUP": "",
    "KEYWORDS": "cup union downshoe setor",
    "SYNTAX": "Xv∪Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Primitive",
    "DESCRIPTION": "Intersection: (Xv∊Yv)/Xv",
    "GROUP": "",
    "KEYWORDS": "cap intersection upshoe setand",
    "SYNTAX": "Xv∩Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Primitive",
    "DESCRIPTION": "First item of Y",
    "GROUP": "",
    "KEYWORDS": "disclose rightshoe first unbox open contentof Y[1] X[1]",
    "SYNTAX": "⊃Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Primitive",
    "DESCRIPTION": "Reach into Y along path given by Iv",
    "GROUP": "",
    "KEYWORDS": "rightshoe pickfrom selectfrom",
    "SYNTAX": "Iv⊃Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Primitive",
    "DESCRIPTION": "Index Y using indices Iv",
    "GROUP": "",
    "KEYWORDS": "squishquad squad indexinto selectfrom",
    "SYNTAX": "Iv⌷Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Primitive",
    "DESCRIPTION": "Index Y using indices Iv along axes ax",
    "GROUP": "",
    "KEYWORDS": "squishquad squad indexinto selectfrom",
    "SYNTAX": "Iv⌷[ax]Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Primitive",
    "DESCRIPTION": "Take Iv items along leading axes of Y",
    "GROUP": "",
    "KEYWORDS": "uparrow take first last beginning end leading trailing head tail",
    "SYNTAX": "Iv↑Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Primitive",
    "DESCRIPTION": "Drop Iv items along leading axes of Y",
    "GROUP": "",
    "KEYWORDS": "downarrow split drop remove trim cut",
    "SYNTAX": "Iv↓Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Primitive",
    "DESCRIPTION": "Take Iv items along axes ax of Y",
    "GROUP": "",
    "KEYWORDS": "uparrow take first last beginning end leading trailing head tail",
    "SYNTAX": "Iv↑[ax]Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Primitive",
    "DESCRIPTION": "Drop Iv items along axes ax of Y",
    "GROUP": "",
    "KEYWORDS": "downarrow split drop remove trim cut",
    "SYNTAX": "Iv↓[ax]Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Primitive",
    "DESCRIPTION": "Replicate along last axis of Y",
    "GROUP": "",
    "KEYWORDS": "compress slash solidus filter copy repeat",
    "SYNTAX": "Iv/Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Primitive",
    "DESCRIPTION": "Replicate along axis ax",
    "GROUP": "",
    "KEYWORDS": "compress slash solidus filter copy repeat",
    "SYNTAX": "Iv/[ax]Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Primitive",
    "DESCRIPTION": "Replicate along leading axis of Y",
    "GROUP": "",
    "KEYWORDS": "compress slashbar solidus filter first copy repeat Iv/[1]",
    "SYNTAX": "Iv⌿Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Primitive",
    "DESCRIPTION": "Expand last axis of Y",
    "GROUP": "",
    "KEYWORDS": "reversesolidus slope",
    "SYNTAX": "Iv\\Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Primitive",
    "DESCRIPTION": "Expand axis ax of Y",
    "GROUP": "",
    "KEYWORDS": "reversesolidus slope",
    "SYNTAX": "Iv\\[ax]Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Primitive",
    "DESCRIPTION": "Expand leading axis of Y",
    "GROUP": "",
    "KEYWORDS": "reversesolidusbar slopebar Iv\\[1]",
    "SYNTAX": "Iv⍀Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Primitive",
    "DESCRIPTION": "Partitioned enclose of Y according to Av (along last axis)",
    "GROUP": "",
    "KEYWORDS": "segment chop split cut separate chunk sub-vectors segmented sub-lists subvectors sublists",
    "SYNTAX": "Av⊂Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Primitive",
    "DESCRIPTION": "Partitioned enclose of Y according to Av (along axis ax)",
    "GROUP": "",
    "KEYWORDS": "segment chop split cut separate chunk sub-vectors segmented sub-lists subvectors sublists",
    "SYNTAX": "Av⊂[ax]Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Primitive",
    "DESCRIPTION": "Partition Y according to Mv (along last axis)",
    "GROUP": "",
    "KEYWORDS": "segment chop split cut separate chunk",
    "SYNTAX": "Mv⊆Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Primitive",
    "DESCRIPTION": "Partition Y according to Mv (along axis ax)",
    "GROUP": "",
    "KEYWORDS": "segment chop split cut separate chunk",
    "SYNTAX": "Mv⊆[ax]Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "Primitive",
    "DESCRIPTION": "Execute: Result of expression Dv",
    "GROUP": "",
    "KEYWORDS": "evaluate uptackjot hydrant apl compute numbers atoi() run call parseexpression dyalog",
    "SYNTAX": "⍎Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "Primitive",
    "DESCRIPTION": "Format: Character representation of Y",
    "GROUP": "",
    "KEYWORDS": "downtackjot thorn itoa tostringify totext representation ⎕fmt ⎕df",
    "SYNTAX": "⍕Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "Primitive",
    "DESCRIPTION": "Execute Dv within namespace X",
    "GROUP": "",
    "KEYWORDS": "evaluatein uptackjot hydrant apl compute numbers atoi() run call inside dyalog",
    "SYNTAX": "X⍎Dv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "Primitive",
    "DESCRIPTION": "Format Y using (width, decimals) pairs Iv",
    "GROUP": "",
    "KEYWORDS": "downtackjot thorn itoa tostringify totext representation round width ⎕fmt",
    "SYNTAX": "Iv⍕Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Identity",
    "CLASS": "Primitive",
    "DESCRIPTION": "Materialise items of Y in workspace",
    "GROUP": "",
    "KEYWORDS": "squishquad squad materialise materialize defaultproperty elements items identity identify .net unpack collection",
    "SYNTAX": "⌷Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Identity",
    "CLASS": "Primitive",
    "DESCRIPTION": "Same: Y",
    "GROUP": "",
    "KEYWORDS": "lev lefttack identity",
    "SYNTAX": "⊣Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Identity",
    "CLASS": "Primitive",
    "DESCRIPTION": "Same: Y",
    "GROUP": "",
    "KEYWORDS": "dex righttack sameright identity default",
    "SYNTAX": "⊢Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Identity",
    "CLASS": "Primitive",
    "DESCRIPTION": "Left: X",
    "GROUP": "",
    "KEYWORDS": "lev lefttack sameleft identity defer ignore where",
    "SYNTAX": "X⊣Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Identity",
    "CLASS": "Primitive",
    "DESCRIPTION": "Right: Y",
    "GROUP": "",
    "KEYWORDS": "dex righttack sameright identity",
    "SYNTAX": "X⊢Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Identity",
    "CLASS": "Primitive",
    "DESCRIPTION": "Separate dyadic operator's right operand from its right argument (same as (X dop Y)Z )",
    "GROUP": "",
    "KEYWORDS": "dex righttack sameright identity separate",
    "SYNTAX": "X dop Y⊢Z",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Primitive",
    "DESCRIPTION": "Reduce: f between all items of Y on last axis",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "slash reduce fold insert solidus over rowwise reducing folding",
    "SYNTAX": "f/Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Primitive",
    "DESCRIPTION": "Reduce: f between all items of Y on axis ax",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "slash reduce fold insert solidus over rowwise reducing folding",
    "SYNTAX": "f/[ax]Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Primitive",
    "DESCRIPTION": "Reduce First: f between all items of Y on first axis",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "slashbar reducefirst foldfirst insertfirst reversesolidus columnwise f/[1] reducing",
    "SYNTAX": "f⌿Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Primitive",
    "DESCRIPTION": "Reduce: f between all items of Y in groups of Is on last axis",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "slash reduce fold insert select solidus over rowwise reducing folding",
    "SYNTAX": "Is f/Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Primitive",
    "DESCRIPTION": "Reduce First: f between all items of Y in groups of Is on first axis",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "slashbar reducefirst foldfirst insertfirst reversesolidus columnwise f/[1] reducing",
    "SYNTAX": "Is f⌿Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Primitive",
    "DESCRIPTION": "Scan: f between items of Y in progressively longer vectors along last axis",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "backslash slope scan cumulativereduce rowwise scanning",
    "SYNTAX": "f\\Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Primitive",
    "DESCRIPTION": "Scan First: f between items of Y in progressively longer vectors along first axis",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "slopebar backslashbar reversesolidusbar scanfirst cumulativereducefirst filterfirst columnwise f\\[1] scanning",
    "SYNTAX": "f⍀Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Primitive",
    "DESCRIPTION": "Scan: f between items of Y in progressively longer vectors along axis [ax]",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "backslash slope scan cumulativereduce rowwise scanning",
    "SYNTAX": "f\\[ax]Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Primitive",
    "DESCRIPTION": "Each: f on items of Y",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "foreach diaeresis map mapping",
    "SYNTAX": "f¨Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Primitive",
    "DESCRIPTION": "Each: f between items of X and Y",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "foreach diaeresis map mapping",
    "SYNTAX": "X f¨Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Primitive",
    "DESCRIPTION": "Key: f on items of Y grouped by unique X values",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "equalquad quadequal group classify bin bucket",
    "SYNTAX": "X f⌸Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Primitive",
    "DESCRIPTION": "Key: f on first axis indices of Y grouped by unique Y values",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "equalquad quadequal unique",
    "SYNTAX": "f⌸Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Primitive",
    "DESCRIPTION": "Selfie: same as Y f Y",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "commute tildediaeresis frown duplicate",
    "SYNTAX": "f⍨Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "Primitive",
    "DESCRIPTION": "Spawn: f between X and Y in a new thread",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "ampersand spawn et and greenthreading launch run",
    "SYNTAX": "X f&Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "Primitive",
    "DESCRIPTION": "I-beam: Call experimental system-related monadic function Ns",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "ibeam systemservice special foreign dyalog",
    "SYNTAX": "Ns⌶Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Primitive",
    "DESCRIPTION": "Commute: same as Y f X",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "commute switch tildediaeresis swap frown",
    "SYNTAX": "X f⍨Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "Primitive",
    "DESCRIPTION": "Spawn: f on in a new thread",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "ampersand spawn et and greenthreading launch run",
    "SYNTAX": "f&Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "Primitive",
    "DESCRIPTION": "I-beam: Call experimental system-related dyadic function Ns",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "ibeam systemservice special foreign dyalog",
    "SYNTAX": "X(Ns⌶)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Primitive",
    "DESCRIPTION": "Rank: f on or between trailing rank-Jv subarrays",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "jotdiaeresis rank paw sub-array dimensions",
    "SYNTAX": "(f⍤Jv)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Primitive",
    "DESCRIPTION": "Stencil: f on (possibly overlapping) rectangles of Y of size and (optionally step) Jm",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "diamondquad quaddiamond stencil tessellate tile cellularautomaton gameoflife vanneumann moore neighbourhoods neighborhoods",
    "SYNTAX": "(f⌺Jm)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Iteration",
    "CLASS": "Primitive",
    "DESCRIPTION": "Power: iterating f on Y until condition Y g f Y is true",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "poweroperator stardiaeresis powerlimit fixedpoint fixpoint converge while until repeating looping",
    "SYNTAX": "f⍣g Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Iteration",
    "CLASS": "Primitive",
    "DESCRIPTION": "Power: f (or X∘f) on Y Js times",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "poweroperator stardiaeresis while until inverse repeat inversion inverting iterating looping",
    "SYNTAX": "(f⍣Js)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Inner Product: f / g between trailing vectors of X and leading vectors of Y",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "small little tiny dotproduct innerproduct crossproduct vectorproduct period fullstop",
    "SYNTAX": "X f.g Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Outer Product: g between each item of X and every item of Y",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "jotdot outerproduct table cartesianproduct allcombinationsof matrix",
    "SYNTAX": "X∘.g Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Composition",
    "CLASS": "Primitive",
    "DESCRIPTION": "Atop: f on the result of g on Y, that is, f g Y",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "small little tiny jot composewith bind ring functioncomposition",
    "SYNTAX": "f∘g Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Composition",
    "CLASS": "Primitive",
    "DESCRIPTION": "With: X∘f on the result of g on Y, that is, X f g Y",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "small little tiny jot composewith bind ring functioncomposition hook",
    "SYNTAX": "X f∘g Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Composition",
    "CLASS": "Primitive",
    "DESCRIPTION": "Curry: g between X and Y, that is, XgY",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "small little tiny jot composewith bind curry ring",
    "SYNTAX": "X∘g Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Composition",
    "CLASS": "Primitive",
    "DESCRIPTION": "Curry: f between Y1 and Y2, that is, Y1fY2",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "small little tiny jot composewith bind curry ring",
    "SYNTAX": "(f∘Y2)Y1",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "Primitive",
    "DESCRIPTION": "Variant: f qualified by Zv on Y",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "colonquad quadcolon option setting mode",
    "SYNTAX": "(f⍠Zv)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "At: use values in X to replace positions N in Y",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "at substitute merge amend replace update",
    "SYNTAX": "(X@N)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Primitive",
    "DESCRIPTION": "At: apply f to modify positions N in Y",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "at amend update",
    "SYNTAX": "(f@N)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "At use values in X to replace positions identified by Boolean mask (g Y) in Y",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "at substitute merge amend replace update",
    "SYNTAX": "(X@g)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Primitive",
    "DESCRIPTION": "At: apply f (or X∘f) to modify positions identified by Boolean mask (g Y) in Y",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "at amend update",
    "SYNTAX": "(f@g)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Primitive",
    "DESCRIPTION": "Rank: f on or between trailing rank-Js subarrays",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "jotdiaeresis rank paw sub-array dimensions",
    "SYNTAX": "X(f⍤Js)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Iteration",
    "CLASS": "Primitive",
    "DESCRIPTION": "Power: iterates X∘f on Y until condition Y g X f Y is true",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "poweroperator stardiaeresis powerlimit fixedpoint fixpoint converge while until repeat",
    "SYNTAX": "X(f⍣g)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Iteration",
    "CLASS": "Primitive",
    "DESCRIPTION": "Power: X∘f on Y Js times",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "poweroperator stardiaeresis while until inverse repeat inversion",
    "SYNTAX": "X(f⍣Js)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "Primitive",
    "DESCRIPTION": "Variant: f qualified by Zv between X and Y",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "colonquad quadcolon option setting mode",
    "SYNTAX": "X(f⍠Zv)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Primitive",
    "DESCRIPTION": "At: apply X∘f to modify positions N in Y",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "at substitute merge amend replace update",
    "SYNTAX": "X(f@N)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Primitive",
    "DESCRIPTION": "At: apply X∘f to modify positions identified by Boolean mask (g Y) in Y",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "at substitute merge amend replace update",
    "SYNTAX": "X(f@g)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Namespace Member",
    "GROUP": "",
    "KEYWORDS": "namespaceseparator dotinto point period",
    "SYNTAX": "ns.name",
    "TYPE": ""
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Decimal Point",
    "GROUP": "",
    "KEYWORDS": "decimal point period rational",
    "SYNTAX": "int.frac",
    "TYPE": "Array"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Scaled Notation",
    "GROUP": "",
    "KEYWORDS": "exponent timestento scale mantissa",
    "SYNTAX": "mantEexp",
    "TYPE": "Array"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Complex Notation",
    "GROUP": "",
    "KEYWORDS": "complex plusitimes imaginary",
    "SYNTAX": "realJimag",
    "TYPE": "Array"
  },
  {
    "CATERGORY": "",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Invoke user command 'name'",
    "GROUP": "",
    "KEYWORDS": "rightsquarebracket rightbracket usercommand ucmd calling running",
    "SYNTAX": "]name",
    "TYPE": ""
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Tradfn",
    "DESCRIPTION": "Execute user command Dv under program control (from within 'ns')",
    "GROUP": "",
    "KEYWORDS": "ucmd evaluate calling running",
    "SYNTAX": "{ns}⎕SE.UCMD Dv",
    "TYPE": "Ambivalent Monadic Function, Dyadic Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "invoke system command 'name'",
    "GROUP": "",
    "KEYWORDS": "rightroundparentheses rightparenthesis systemcommand syscmd calling",
    "SYNTAX": ")name",
    "TYPE": ""
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Syntax",
    "DESCRIPTION": "Indexing (slicing)",
    "GROUP": "",
    "KEYWORDS": "squarebrackets indexing subscript choose",
    "SYNTAX": "X[I;J;…]",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Syntax",
    "DESCRIPTION": "Indexing (scatter-point)",
    "GROUP": "",
    "KEYWORDS": "squarebrackets indexing subscript choose",
    "SYNTAX": "X[Iv Jv …]",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Syntax",
    "DESCRIPTION": "f on Y along axis/axes ax",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "squarebrackets axisoperator along",
    "SYNTAX": "f[ax]Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Syntax",
    "DESCRIPTION": "f between X and Y along axis ax",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "squarebrackets axisoperator along",
    "SYNTAX": "X f[ax]Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Stranding: (⊂(⊂X1),(⊂X2)),(⊂(⊂Y1),(⊂Y2))",
    "GROUP": "",
    "KEYWORDS": "roundparentheses roundparens grouping stranding nestedarraynotation nestedvectornotation",
    "SYNTAX": "(X1 X2)(Y1 Y2)",
    "TYPE": ""
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Precedece: Y×X1+X2",
    "GROUP": "",
    "KEYWORDS": "roundparentheses grouping precedence roundparens",
    "SYNTAX": "(X1+X2)×Y",
    "TYPE": ""
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Atop: f g Y",
    "GROUP": "Train",
    "KEYWORDS": "tacit roundparentheses roundparens grouping derived train fg atop 2train 2-train",
    "SYNTAX": "(f g)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Fork: (f Y)g(h Y)",
    "GROUP": "Trian",
    "KEYWORDS": "tacit roundparentheses roundparens grouping derived train fgh fork 3train 3-train",
    "SYNTAX": "(f g h)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Fork: X g h Y",
    "GROUP": "Trian",
    "KEYWORDS": "tacit roundparentheses roundparens grouping derived train Agh fork 3train 3-train",
    "SYNTAX": "(X g h)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Atop: f X g Y",
    "GROUP": "Train",
    "KEYWORDS": "tacit roundparentheses roundparens grouping derived train fg atop 2train 2-train",
    "SYNTAX": "X(f g)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Fork: (X f Y)g(X h Y)",
    "GROUP": "Train",
    "KEYWORDS": "tacit roundparentheses roundparens grouping derived train fgh fork 3train 3-train",
    "SYNTAX": "X(f g h)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Fork: X2 g X1 h Y",
    "GROUP": "Train",
    "KEYWORDS": "tacit roundparentheses roundparens grouping derived train Agh fork 3train 3-train",
    "SYNTAX": "X1(X2 g h)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Definition",
    "CLASS": "Syntax",
    "DESCRIPTION": "Prototypical monadic Dfn",
    "GROUP": "",
    "KEYWORDS": "direct dynamic lambda anonymous curlybraces function dfn assignment header defining",
    "SYNTAX": "f←{⍵}",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Definition",
    "CLASS": "Syntax",
    "DESCRIPTION": "Prototypical monadic Dop deriving monadic functions",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "direct dynamic lambda anonymous curlybraces operator dop assignment header defining",
    "SYNTAX": "op←{⍺⍺ ⍵}",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Definition",
    "CLASS": "Syntax",
    "DESCRIPTION": "Prototypical monadic Dop deriving dyadic functions",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "direct dynamic lambda anonymous curlybraces operator dop assignment header defining",
    "SYNTAX": "op←{⍺⍺ ⍺}",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Definition",
    "CLASS": "Syntax",
    "DESCRIPTION": "Prototypical dyadic Dfn",
    "GROUP": "",
    "KEYWORDS": "direct dynamic lambda anonymous curlybraces function dfn assignment header defining",
    "SYNTAX": "f←{⍺}",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Definition",
    "CLASS": "Syntax",
    "DESCRIPTION": "Prototypical dyadic Dop deriving monadic functions",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "direct dynamic lambda anonymous curlybraces operator dop assignment header defining",
    "SYNTAX": "op←{⍵⍵ ⍵}",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Definition",
    "CLASS": "Syntax",
    "DESCRIPTION": "Prototypical dyadic Dop deriving dyadic functions",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "direct dynamic lambda anonymous curlybraces operator dop assignment header defining",
    "SYNTAX": "op←{⍵⍵ ⍺}",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Definition",
    "CLASS": "Syntax",
    "DESCRIPTION": "Shy Dfn/Dop result",
    "GROUP": "",
    "KEYWORDS": "curlybraces function operator shy hideresult traditional",
    "SYNTAX": "{_← … }",
    "TYPE": ""
  },
  {
    "CATERGORY": "Definition",
    "CLASS": "Syntax",
    "DESCRIPTION": "Shy Tradfn/Tradop result",
    "GROUP": "",
    "KEYWORDS": "curlybraces function operator shy hideresult traditional",
    "SYNTAX": "{R}←f Y",
    "TYPE": ""
  },
  {
    "CATERGORY": "Definition",
    "CLASS": "Syntax",
    "DESCRIPTION": "Tradfn/Tradop right argument name list (enforces correct number of arguments and distributes values)",
    "GROUP": "",
    "KEYWORDS": "declaration [0] declaring defining names unpacking",
    "SYNTAX": "f(X Y Z)",
    "TYPE": ""
  },
  {
    "CATERGORY": "Definition",
    "CLASS": "Syntax",
    "DESCRIPTION": "Tradfn/Tradop result name list (collects)",
    "GROUP": "",
    "KEYWORDS": "declaration [0] declaring defining names packing",
    "SYNTAX": "(X Y Z)←f",
    "TYPE": ""
  },
  {
    "CATERGORY": "Definition",
    "CLASS": "Syntax",
    "DESCRIPTION": "Optional Left Tradfn/Tradop Argument",
    "GROUP": "",
    "KEYWORDS": "curlybraces function operator optional default ambivalent variadic traditional ambivalence",
    "SYNTAX": "{X}f Y",
    "TYPE": ""
  },
  {
    "CATERGORY": "Definition",
    "CLASS": "Syntax",
    "DESCRIPTION": "Monadic tradop header for deriving monadic functions",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "declaration [0] declaring defining",
    "SYNTAX": "(f op)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Definition",
    "CLASS": "Syntax",
    "DESCRIPTION": "Dyadic tradop header for deriving monadic functions",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "declaration [0] declaring defining",
    "SYNTAX": "(f op g)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Definition",
    "CLASS": "Syntax",
    "DESCRIPTION": "Monadic tradop header for deriving dyadic functions",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "declaration [0] declaring defining",
    "SYNTAX": "X(f op)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Definition",
    "CLASS": "Syntax",
    "DESCRIPTION": "Dyadic tradop header for deriving dyadic functions",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "declaration [0] declaring defining",
    "SYNTAX": "X(f op g)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Definition",
    "CLASS": "Syntax",
    "DESCRIPTION": "Tradfn/Tradop header line localisation of names X, Y, Z",
    "GROUP": "",
    "KEYWORDS": "localisation localization shadow variable scope localise localize locals declaration declare declaring [0]",
    "SYNTAX": "f;X;Y;Z",
    "TYPE": ""
  },
  {
    "CATERGORY": "Definition",
    "CLASS": "Syntax",
    "DESCRIPTION": "Tradfn/Tradop locals line localisation of names X, Y, Z (before first code)",
    "GROUP": "",
    "KEYWORDS": "localisation localization shadow variable scope localise localize locals declaration declare declaring",
    "SYNTAX": ";X;Y;Z",
    "TYPE": ""
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Return one line of user input from stdin",
    "GROUP": "",
    "KEYWORDS": "quotequad quadquote input characterinput rawinput stdin",
    "SYNTAX": "x←⍞",
    "TYPE": "Array"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Evaluate user input (from stdin) and return result",
    "GROUP": "",
    "KEYWORDS": "quad evaluatedinput",
    "SYNTAX": "charvec←⎕",
    "TYPE": "Array"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Output x to session without trailing newline via stderr (without trailing line break)",
    "GROUP": "",
    "KEYWORDS": "quotequad quadquote output stderr",
    "SYNTAX": "⍞←x",
    "TYPE": "Assignment"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Output x to the session via stdout (with trailing line break)",
    "GROUP": "",
    "KEYWORDS": "quad evaluatedinput stdout",
    "SYNTAX": "⎕←x",
    "TYPE": "Assignment"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Character delimiter",
    "GROUP": "",
    "KEYWORDS": "quote apostrophe string text character",
    "SYNTAX": "'",
    "TYPE": "Array"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Negative number indicator",
    "GROUP": "",
    "KEYWORDS": "macron negative highminus minus indicate sign",
    "SYNTAX": "¯",
    "TYPE": "Array"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Statement Separator",
    "GROUP": "",
    "KEYWORDS": "diamond statementseparator break stop else then",
    "SYNTAX": "⋄",
    "TYPE": ""
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Comment symbol (disables rest of line)",
    "GROUP": "",
    "KEYWORDS": "commentout lamp ignore skip note nb",
    "SYNTAX": "⍝",
    "TYPE": ""
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Primitive",
    "DESCRIPTION": "Abort (cut stack back one frame)",
    "GROUP": "",
    "KEYWORDS": "rightarrow stop",
    "SYNTAX": "→",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Primitive",
    "DESCRIPTION": "Branch to first line or label in Jv (does nothing if Jv is empty)",
    "GROUP": "",
    "KEYWORDS": "rightarrow branch goto switch",
    "SYNTAX": "→Jv",
    "TYPE": "Niladic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Primitive",
    "DESCRIPTION": "Return: Leave function and return to caller",
    "GROUP": "",
    "KEYWORDS": "rightarrow :Return",
    "SYNTAX": "→0",
    "TYPE": "Niladic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "",
    "DESCRIPTION": "Conditional Return: Leave function and return to caller if Bs",
    "GROUP": "",
    "KEYWORDS": "rightarrow :ReturnIf",
    "SYNTAX": "→Bs⍴0",
    "TYPE": "Control"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Primitive",
    "DESCRIPTION": "Dfn/Dop Right Argument",
    "GROUP": "",
    "KEYWORDS": "omega rightarg ω ꞷ",
    "SYNTAX": "⍵",
    "TYPE": "Array"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Primitive",
    "DESCRIPTION": "Dfn/Dop Left Argument",
    "GROUP": "",
    "KEYWORDS": "alpha leftarg α ɑ",
    "SYNTAX": "⍺",
    "TYPE": "Array"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Primitive",
    "DESCRIPTION": "Dfn Self",
    "GROUP": "",
    "KEYWORDS": "del recurse function triangledown downtriangle carrot",
    "SYNTAX": "∇",
    "TYPE": "Monadic Function;Dyadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Primitive",
    "DESCRIPTION": "Dop Right Operand",
    "GROUP": "",
    "KEYWORDS": "omega rightop",
    "SYNTAX": "⍵⍵",
    "TYPE": "Array, Monadic Function, Dyadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Primitive",
    "DESCRIPTION": "Dop Left Operand",
    "GROUP": "",
    "KEYWORDS": "alpha leftop",
    "SYNTAX": "⍺⍺",
    "TYPE": "Array, Monadic Function, Dyadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Primitive",
    "DESCRIPTION": "Dop Self",
    "GROUP": "Monadic Operator;Dyadic Operator",
    "KEYWORDS": "deldel recurse operator triangledown downtriangle carrot",
    "SYNTAX": "∇∇",
    "TYPE": "Monadic Function, Dyadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Primitive",
    "DESCRIPTION": "Modified Assignment",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "leftarrow assignment gets is copula let redefine name naming denotes means inplace update",
    "SYNTAX": "name f←Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Primitive",
    "DESCRIPTION": "Assignment",
    "GROUP": "",
    "KEYWORDS": "leftarrow assignment gets is copula let define name naming denotes means",
    "SYNTAX": "name←Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Primitive",
    "DESCRIPTION": "Multiple assignment",
    "GROUP": "",
    "KEYWORDS": "leftarrow assignment get are copula let define name list naming denote mean unpacking distributing distribution",
    "SYNTAX": "(name1 name2)←Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Primitive",
    "DESCRIPTION": "Empty Numeric Vector",
    "GROUP": "",
    "KEYWORDS": "zilde emptylist emptynumericlist zerotilde emptyvector null emptyset none ∅ list",
    "SYNTAX": "⍬",
    "TYPE": "Array"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Dfn/Dop Guard (conditional result)",
    "GROUP": "",
    "KEYWORDS": "guard if conditional ternary",
    "SYNTAX": "bx:Y",
    "TYPE": ""
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Dfn/Dop Error Guard (result upon listed error)",
    "GROUP": "",
    "KEYWORDS": "errorguard trap catch try",
    "SYNTAX": "errno::Y",
    "TYPE": ""
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Mean of N",
    "GROUP": "",
    "KEYWORDS": "average arithmeticmean() AM() avg()",
    "SYNTAX": "(+⌿÷≢)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Cut Yv at occurences of Xs (removes separators and empty segments)",
    "GROUP": "",
    "KEYWORDS": "cut split partition segment separate chop divide chunk dividing",
    "SYNTAX": "Xs(≠⊆⊢)Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Split Yv at occurences of Xs (removes separators)",
    "GROUP": "",
    "KEYWORDS": "cut split partition segment separate chop divide chunk dividing",
    "SYNTAX": "X(1↓¨,⊂⍨⊣=,)Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Is X a Subarray of Y?",
    "GROUP": "",
    "KEYWORDS": "contains? has? isin? issubarray? appearsin? sub-array sub-string substring subvector sub-vector submatrix sub-matrix sub-sequence subsequence sub-list sublist sub-table subtable",
    "SYNTAX": "X(1∊⍷)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Y's Head of Length Is and its Tail",
    "GROUP": "",
    "KEYWORDS": "headtail split divide separate dividing",
    "SYNTAX": "Is(↑{⍺⍵}↓)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Increment",
    "GROUP": "",
    "KEYWORDS": "increase next",
    "SYNTAX": "1∘+N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Decrement",
    "GROUP": "",
    "KEYWORDS": "decrease previous",
    "SYNTAX": "(-∘1)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Round",
    "GROUP": "",
    "KEYWORDS": "round closestinteger nearestinteger nint",
    "SYNTAX": "(⌊0.5∘+)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Square",
    "GROUP": "",
    "KEYWORDS": "square ² ^2",
    "SYNTAX": "×⍨N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Cube",
    "GROUP": "",
    "KEYWORDS": "cube ³ ^3",
    "SYNTAX": "(*∘3)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Square Root",
    "GROUP": "",
    "KEYWORDS": "squareroot sqrt ²√",
    "SYNTAX": "(*∘0.5)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "M'th Root of N",
    "GROUP": "",
    "KEYWORDS": "nthroot ⁿ√ ³√",
    "SYNTAX": "M*∘÷⍨N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "2×N",
    "GROUP": "",
    "KEYWORDS": "double",
    "SYNTAX": "+⍨N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Parity of J (is J odd?)",
    "GROUP": "",
    "KEYWORDS": "parity odd",
    "SYNTAX": "2∘|J",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "J is Even",
    "GROUP": "",
    "KEYWORDS": "even",
    "SYNTAX": "(~2∘|)J",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Sum of N (column-wise)",
    "GROUP": "",
    "KEYWORDS": "vertical summation enlargedsigma bigsigma capitalsigma ∑ Σ",
    "SYNTAX": "+⌿N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Product of N (column-wise)",
    "GROUP": "",
    "KEYWORDS": "vertical product enlargedpi bigpi capitalpi ∏ Π",
    "SYNTAX": "×⌿N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Multiplication Table for Numbers up to Js",
    "GROUP": "",
    "KEYWORDS": "multiplicationtable cartesianproduct timestable matrix",
    "SYNTAX": "∘.×⍨∘⍳Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "All",
    "GROUP": "",
    "KEYWORDS": "forall true givenany tautology universalquantification ∀",
    "SYNTAX": "~0∘∊",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Any",
    "GROUP": "",
    "KEYWORDS": "thereexists forsome existentialquantification ∃",
    "SYNTAX": "1∘∊B",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Not All",
    "GROUP": "",
    "KEYWORDS": "notall somenot",
    "SYNTAX": "0∘∊B",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Not Any",
    "GROUP": "",
    "KEYWORDS": "none notany",
    "SYNTAX": "(~1∘∊)B",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Indices of Major Cells of Y",
    "GROUP": "",
    "KEYWORDS": "enumerate number count",
    "SYNTAX": "(⍳≢)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "All Indices Of Y",
    "GROUP": "",
    "KEYWORDS": "indicesof",
    "SYNTAX": "(,∘⍳⍴)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Random Permutation of length Js",
    "GROUP": "",
    "KEYWORDS": "shuffle randompermutation",
    "SYNTAX": "?⍨Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Dot/Vector/Cross/Matrix Product of M and N (¯1↑M ←→ 1↑⍴N)",
    "GROUP": "",
    "KEYWORDS": "dotproduct vectorproduct crossproduct ∙ ⋅ · multiplication",
    "SYNTAX": "M+.×N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Is Y a Simple Array?",
    "GROUP": "",
    "KEYWORDS": "simple?",
    "SYNTAX": "(1≥∘|≡)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Is Y a Simple Scalar?",
    "GROUP": "",
    "KEYWORDS": "simple?",
    "SYNTAX": "(0=≡)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Is Y a Nested Array?",
    "GROUP": "",
    "KEYWORDS": "nested?",
    "SYNTAX": "(2≤∘|≡)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Does Y have Non-Uniform Depth?",
    "GROUP": "",
    "KEYWORDS": "ragged? nonuniform? nonorthogonal? nonrectangular?",
    "SYNTAX": "(0>≡)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Does Y have Uniform Depth?",
    "GROUP": "",
    "KEYWORDS": "uniform? orthogonal? rectangular?",
    "SYNTAX": "(0≤≡)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Is Y a Scalar?",
    "GROUP": "",
    "KEYWORDS": "scalar?",
    "SYNTAX": "(⍬≡⍴)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Is Y a Singleton?",
    "GROUP": "",
    "KEYWORDS": "singleton? unit? sole? one?",
    "SYNTAX": "(1=×/∘⍴)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Type (converts characters to spaces, numbers to zeros)",
    "GROUP": "",
    "KEYWORDS": "datatypeof 0s zeroes",
    "SYNTAX": "(⊃0⍴⊂)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Alternating Sum: ((N[1]-N[2])+N[3])-N[4]+…",
    "GROUP": "",
    "KEYWORDS": "alternatingsum",
    "SYNTAX": "-⌿N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Deltas: (N[2]-N[1])(N[3]-N[2])(N[4]-N[3])…",
    "GROUP": "",
    "KEYWORDS": "pairwisedifferences changes steps",
    "SYNTAX": "(¯2-/⊢)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Ms±Ns",
    "GROUP": "",
    "KEYWORDS": "plusminus",
    "SYNTAX": "Ms(+,-)Ns",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Ms∓Ns",
    "GROUP": "",
    "KEYWORDS": "minusplus",
    "SYNTAX": "Ms(-,+)Ns",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "±N increasing rank",
    "GROUP": "",
    "KEYWORDS": "plusminus dimensions",
    "SYNTAX": "(1 ¯1∘.×⊢)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "∓N increasing rank",
    "GROUP": "",
    "KEYWORDS": "minusplus dimensions",
    "SYNTAX": "(¯1 1∘.×⊢)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Ascending cardinals numbers (ranking, all different)",
    "GROUP": "",
    "KEYWORDS": "cardinals up",
    "SYNTAX": "(⍋⍋)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Descending cardinals numbers (ranking, all different)",
    "GROUP": "",
    "KEYWORDS": "cardinals down",
    "SYNTAX": "(⍋⍒)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Primes until Js",
    "GROUP": "",
    "KEYWORDS": "primesuntil",
    "SYNTAX": "((⊢~∘.×⍨)1↓⍳)Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Is Ns a prime?",
    "GROUP": "",
    "KEYWORDS": "isprime primality",
    "SYNTAX": "(2=0+.=⍳|⊢)Ns",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "I divides J",
    "GROUP": "",
    "KEYWORDS": "divisibility divisor ∣",
    "SYNTAX": "I(0=|)J",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "I does not divide J",
    "GROUP": "",
    "KEYWORDS": "divisibility divisor ∤ dividing",
    "SYNTAX": "I(0≠|)J",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Tacit",
    "DESCRIPTION": "Is Xv a Subset of Yv?",
    "GROUP": "",
    "KEYWORDS": "subset? containedin ⊆",
    "SYNTAX": "Xv(∧/∊)Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Tacit",
    "DESCRIPTION": "Is Xv a Superset of Yv?",
    "GROUP": "",
    "KEYWORDS": "superset? contains ⊇",
    "SYNTAX": "Xv(∧/∊⍨)Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "N Degrees in Radians",
    "GROUP": "",
    "KEYWORDS": "radians",
    "SYNTAX": "(180÷⍨○)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "N Radians in Degrees",
    "GROUP": "",
    "KEYWORDS": "degrees",
    "SYNTAX": "(180÷○∘÷)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Binary representation of J",
    "GROUP": "",
    "KEYWORDS": "digits base2 base-2",
    "SYNTAX": "(2∘⊥⍣¯1)J",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Digits of N",
    "GROUP": "",
    "KEYWORDS": "digits base10 decimal base-10",
    "SYNTAX": "(10∘⊥⍣¯1)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "N in Base M",
    "GROUP": "",
    "KEYWORDS": "tobase",
    "SYNTAX": "M(⊥⍣¯1)N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Fractional Part of N",
    "GROUP": "",
    "KEYWORDS": "fractional",
    "SYNTAX": "1∘|N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Gamma function of N",
    "GROUP": "",
    "KEYWORDS": "gamma() Γ",
    "SYNTAX": "(!-∘1)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Tacit",
    "DESCRIPTION": "Symmetric Set Difference",
    "GROUP": "",
    "KEYWORDS": "⊖",
    "SYNTAX": "Xv(∪~∩)Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Tacit",
    "DESCRIPTION": "Set Identity",
    "GROUP": "",
    "KEYWORDS": "setequivalence",
    "SYNTAX": "Xv(∊∧.∧∊⍨)Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Tacit",
    "DESCRIPTION": "Index of Largest",
    "GROUP": "",
    "KEYWORDS": "indexoflargest biggest greatest lexicographically lexically",
    "SYNTAX": "(⊃⍒)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Tacit",
    "DESCRIPTION": "Index of Smallest",
    "GROUP": "",
    "KEYWORDS": "indexofsmallest least lexicographically lexically",
    "SYNTAX": "(⊃⍋)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Diagonal",
    "GROUP": "",
    "KEYWORDS": "majordiagonal",
    "SYNTAX": "(⊢⍉⍨⍴=⍴)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Anti-diagonal",
    "GROUP": "",
    "KEYWORDS": "minordiagonal",
    "SYNTAX": "(⌽⍉⍨⍴=⍴)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Is Y an Empty Array?",
    "GROUP": "",
    "KEYWORDS": "isempty? isvoid? isnull?",
    "SYNTAX": "(0∊⍴)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Sort Ascending",
    "GROUP": "",
    "KEYWORDS": "sort() order up increasing sorting reordering ordering",
    "SYNTAX": "(⊂∘⍋⌷⊢)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Sort Descending",
    "GROUP": "",
    "KEYWORDS": "sort() order down decreasing sorting reordering ordering",
    "SYNTAX": "(⊂∘⍒⌷⊢)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Is N Strictly Increasing?",
    "GROUP": "",
    "KEYWORDS": "ascending? rising? up ordered sorted",
    "SYNTAX": "(⍳∘≢≡⌽∘⍒)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Is N Strictly Decreasing?",
    "GROUP": "",
    "KEYWORDS": "descending? falling? down ordered Nondecreasing? sorted",
    "SYNTAX": "(⍳∘≢≡⌽∘⍋)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Is N Non-decreasing?",
    "GROUP": "",
    "KEYWORDS": "ascending? rising? up ordered sorted",
    "SYNTAX": "(⍳∘≢≡⍋)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Is N Non-increasing?",
    "GROUP": "",
    "KEYWORDS": "descending? falling? down ordered Nonincreasing? sorted",
    "SYNTAX": "(⍳∘≢≡⍒)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Maximum of N",
    "GROUP": "",
    "KEYWORDS": "supremum",
    "SYNTAX": "⌈/N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Minimum of N",
    "GROUP": "",
    "KEYWORDS": "infirmum",
    "SYNTAX": "⌊/N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Arccosecant",
    "GROUP": "",
    "KEYWORDS": "arccosecant acsc acosec arcuscosecant",
    "SYNTAX": "(¯1○÷)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Arcsecant",
    "GROUP": "",
    "KEYWORDS": "arcsecant asec arcussecant",
    "SYNTAX": "(¯2○÷)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Arccotangent",
    "GROUP": "",
    "KEYWORDS": "arccotangent acotg actg actn arcuscotangent",
    "SYNTAX": "(¯3○÷)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Cosecant",
    "GROUP": "",
    "KEYWORDS": "cosecant csc",
    "SYNTAX": "(÷1∘○)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Secant",
    "GROUP": "",
    "KEYWORDS": "secant",
    "SYNTAX": "(÷2∘○)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Cotangent",
    "GROUP": "",
    "KEYWORDS": "cotangent cotg ctg ctn",
    "SYNTAX": "(÷3∘○)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Complementry Angle",
    "GROUP": "",
    "KEYWORDS": "complement",
    "SYNTAX": "(¯2○1○⊢)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "Items of X at positions J",
    "GROUP": "",
    "KEYWORDS": "index",
    "SYNTAX": "X⌷⍨∘⊂J",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "Items of X at positions J",
    "GROUP": "",
    "KEYWORDS": "index",
    "SYNTAX": "X⌷⍨∘⊂J",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Dop",
    "DESCRIPTION": "Atop: f X g Y",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "on composewith functioncomposition fXgY",
    "SYNTAX": "X f{⍺←⊢ ⋄ ⍺⍺ ⍺ ⍵⍵ ⍵}g Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Dop",
    "DESCRIPTION": "Reversed Compose: (f X) g Y",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "on composewith functioncomposition fXgY backcompose back-compose",
    "SYNTAX": "X f{⍺←⊢ ⋄ (⍺⍺ ⍺) ⍵⍵ ⍵}g Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Dop",
    "DESCRIPTION": "Reversed Compose: (f X) g Y",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "on composewith functioncomposition fXgY backcompose back-compose",
    "SYNTAX": "X g⍨∘f⍨ Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Dop",
    "DESCRIPTION": "Over: (g X) f (g Y)",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "ontop composewith functioncomposition (gX)f(gY) (gX)fgY (fX)g(fY) (fX)gfY comparing",
    "SYNTAX": "X f{⍺←{⍵ ⋄ ⍺⍺} ⋄ (⍵⍵ ⍺) ⍺⍺ (⍵⍵ ⍵)}g Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Tacit",
    "DESCRIPTION": "Split Compose: (f X) g (h Y)",
    "GROUP": "",
    "KEYWORDS": "composewith functioncomposition splitover (fX)g(hY) (fX)ghY",
    "SYNTAX": "X g⍨∘f⍨∘h Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "System",
    "DESCRIPTION": "Max ratio between numbers considered equal when ⎕FR←645",
    "GROUP": "",
    "KEYWORDS": "comparison tolerance fuzz IEEE754 64-bit binaryfloatingpoint representation",
    "SYNTAX": "⎕CT←(0≤1E¯14≤2*¯32)",
    "TYPE": "Variable"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "System",
    "DESCRIPTION": "Max ratio between numbers considered equal when ⎕FR←1287",
    "GROUP": "",
    "KEYWORDS": "comparison tolerance fuzz IEEE754-2008 128-bit decimalfloatingpoint representation",
    "SYNTAX": "⎕DCT←(0≤1E¯28≤2*¯32)",
    "TYPE": "Variable"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "System",
    "DESCRIPTION": "0: 1=0÷0, all other÷0 error; 1: 0=all÷0",
    "GROUP": "",
    "KEYWORDS": "divisionbyzero divisionmethod divmethod error nan indeterminate",
    "SYNTAX": "⎕DIV←(0,1)",
    "TYPE": "Variable"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "System",
    "DESCRIPTION": "Specifies the result type of floating-point computations",
    "GROUP": "",
    "KEYWORDS": "IEEE754 64-bit binaryfloatingpoint IEEE754-2008 128-bit decimalfloatingpoint internal representation",
    "SYNTAX": "⎕FR←(645,1287)",
    "TYPE": "Variable"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "System",
    "DESCRIPTION": "Specifies whether array indices are counted from 0 or 1",
    "GROUP": "",
    "KEYWORDS": "indexing counting numbering natrualnumbers origin one zero based ordinals",
    "SYNTAX": "⎕IO←(1,0)",
    "TYPE": "Variable"
  },
  {
    "CATERGORY": "System",
    "CLASS": "System",
    "DESCRIPTION": "Degree of compatibility with IBM APL2 (from 0=low to 3=high)",
    "GROUP": "",
    "KEYWORDS": "migration level conformance APLX APL*PLUS GNUAPL APL+Win APL2000 NARS2000 ≡↑⊃ depth first mix ⎕TC terminalcontrolcharacters migrate behaviour behavior",
    "SYNTAX": "⎕ML←(0≤1≤3)",
    "TYPE": "Variable"
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "System",
    "DESCRIPTION": "Number of significant digits in the display of numeric output",
    "GROUP": "",
    "KEYWORDS": "print precision decimals rounding display",
    "SYNTAX": "⎕PP←(1≤10≤34)",
    "TYPE": "Variable"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "System",
    "DESCRIPTION": "Seed and Random Number Generator used by Roll/Deal",
    "GROUP": "",
    "KEYWORDS": "RNG rnd roll randominteger randomfloat randomness source",
    "SYNTAX": "⎕RL←⍬ 1",
    "TYPE": "Variable"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": ":For var :In│:InEach ax ⋄ block ⋄ :EndFor",
    "GROUP": "Structure",
    "KEYWORDS": "loop count iteration ¨",
    "SYNTAX": ":For",
    "TYPE": "Control"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": ":Hold tkn ⋄ block ⋄ :Else ⋄ block ⋄ :EndHold",
    "GROUP": "Structure",
    "KEYWORDS": "synchronisation synchronization parallel threading tokens greenthreading",
    "SYNTAX": ":Hold",
    "TYPE": "Control"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": ":If bx ⋄ block ⋄ :ElseIf bx│:Else ⋄ block ⋄ :EndIf",
    "GROUP": "Structure",
    "KEYWORDS": "conditional ternary branch ⍣ :",
    "SYNTAX": ":If",
    "TYPE": "Control"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": ":Repeat ⋄ block ⋄ :Until bx ⋄ :AndIf bx│:OrIf bx",
    "GROUP": "Structure",
    "KEYWORDS": "loop iteration ⍣",
    "SYNTAX": ":Repeat",
    "TYPE": "Control"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": ":Repeat ⋄ block ⋄ :EndRepeat",
    "GROUP": "Structure",
    "KEYWORDS": "loop iteration ⍣",
    "SYNTAX": ":Repeat",
    "TYPE": "Control"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": ":Select ax ⋄ :Case val│:CaseList val ⋄ block ⋄ :Else ⋄ block ⋄ :EndSelect",
    "GROUP": "Structure",
    "KEYWORDS": "switch inspect multiwaybranch",
    "SYNTAX": ":Select",
    "TYPE": "Control"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": ":Trap ecode ⋄ block ⋄ :Case ecode│:CaseList ecode ⋄ block ⋄ :Else ⋄ block ⋄ :EndTrap",
    "GROUP": "Structure",
    "KEYWORDS": "try catch errorhandling trapping exception",
    "SYNTAX": ":Trap",
    "TYPE": "Control"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": ":While bx ⋄ block ⋄ :AndIf bx│:OrIf bx ⋄ block ⋄ :EndWhile",
    "GROUP": "Structure",
    "KEYWORDS": "loop do iteration ⍣",
    "SYNTAX": ":While",
    "TYPE": "Control"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": ":While bx ⋄ block ⋄ :AndIf bx│:OrIf bx ⋄ block ⋄ :Until bx",
    "GROUP": "Structure",
    "KEYWORDS": "loop do iteration ⍣",
    "SYNTAX": ":While",
    "TYPE": "Control"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": ":With ns ⋄ block ⋄ :EndWith",
    "GROUP": "Structure",
    "KEYWORDS": "scope namespace object",
    "SYNTAX": ":With",
    "TYPE": "Control"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Branch to line or label J",
    "GROUP": "Keyword",
    "KEYWORDS": "branch switch →",
    "SYNTAX": ":GoTo J",
    "TYPE": "Control"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Abort (cut stack back one frame)",
    "GROUP": "Keyword",
    "KEYWORDS": "abort →0 stop",
    "SYNTAX": ":Return",
    "TYPE": "Control"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Terminate execution :For/:Repeat/:While block",
    "GROUP": "Keyword",
    "KEYWORDS": "break earlyexit",
    "SYNTAX": ":Leave",
    "TYPE": "Control"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Start iteration of the immediately surrounding :For/:Repeat/:While loop",
    "GROUP": "Keyword",
    "KEYWORDS": "continuation",
    "SYNTAX": ":Continue",
    "TYPE": "Control"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Make class method (tradfn) visible and callable from outside the class",
    "GROUP": "Keyword",
    "KEYWORDS": "declaration declare oo objectorientation",
    "SYNTAX": ":Access Public",
    "TYPE": "Control"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Make class method (tradfn) run in class rather than in instance of class",
    "GROUP": "Keyword",
    "KEYWORDS": "declaration declare oo objectorientation static",
    "SYNTAX": ":Access Shared",
    "TYPE": "Control"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Same as :Access Public with :Attribute System.Web.Services.WebMethodAttribute",
    "GROUP": "Keyword",
    "KEYWORDS": "declaration declare oo objectorientation .NET",
    "SYNTAX": ":Access WebMethod",
    "TYPE": "Control"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Allow derived class to redefine method (tradfn) for when it is called inside base class code",
    "GROUP": "Keyword",
    "KEYWORDS": "declaration declare oo objectorientation virtual",
    "SYNTAX": ":Access Overridable",
    "TYPE": "Control"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Redefine base class method (tradfn) so it can be called from inside base class code",
    "GROUP": "Keyword",
    "KEYWORDS": "declaration declare oo objectorientation Overrides",
    "SYNTAX": ":Access Override",
    "TYPE": "Control"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Descriptive tag that provides additional information to .NET",
    "GROUP": "Keyword",
    "KEYWORDS": "declaration declare oo objectorientation metadata",
    "SYNTAX": ":Attribute name {ConstructorArgs}",
    "TYPE": "Control"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Function is a class constructor",
    "GROUP": "Keyword",
    "KEYWORDS": "declaration declare oo objectorientation",
    "SYNTAX": ":Implements Constructor",
    "TYPE": "Control"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Function is a class constructor which calls the base constructor with the result of 'expr' as argument",
    "GROUP": "Keyword",
    "KEYWORDS": "declaration declare oo objectorientation",
    "SYNTAX": ":Implements Constructor :Base expr",
    "TYPE": "Control"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Function is a class destructor",
    "GROUP": "Keyword",
    "KEYWORDS": "declaration declare oo objectorientation",
    "SYNTAX": ":Implements Destructor",
    "TYPE": "Control"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Function implements method 'MethodName' whose syntax is specified by interface 'InterfaceName'",
    "GROUP": "Keyword",
    "KEYWORDS": "declaration declare oo objectorientation",
    "SYNTAX": ":Implements Method {InterfaceName.MethodName}",
    "TYPE": "Control"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Function is a trigger function: called when any of the listed variables is changed",
    "GROUP": "Keyword",
    "KEYWORDS": "declaration declare oo objectorientation",
    "SYNTAX": ":Implements Trigger name1{,name2,name3,...}",
    "TYPE": "Control"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Function is a global trigger function: called when any any global variable in the same namespace is changed",
    "GROUP": "Keyword",
    "KEYWORDS": "declaration declare oo objectorientation",
    "SYNTAX": ":Implements Trigger *",
    "TYPE": "Control"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Identify name and signature by which this function is exported as a method",
    "GROUP": "Keyword",
    "KEYWORDS": "declaration declare oo objectorientation .NET assembly types",
    "SYNTAX": ":Signature <rslttype←><name><arg1type arg1name>,…",
    "TYPE": "Control"
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Clear active workspace",
    "GROUP": "",
    "KEYWORDS": "new refresh empty erase delete remove purge expunge reset all ⎕clear",
    "SYNTAX": ")CLEAR",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Execute cmd (cmd is mandatory on Windows, optional on UNIX)",
    "GROUP": "",
    "KEYWORDS": "shell dos operatingsystem commandprocessor windows",
    "SYNTAX": ")CMD cmd",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Save active workspace as CONTINUE and terminate session",
    "GROUP": "",
    "KEYWORDS": "exit stop close ⎕off )off ⎕save",
    "SYNTAX": ")CONTINUE",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Copy (selected) contents of workspace ws to active workspace",
    "GROUP": "File Access",
    "KEYWORDS": "import use load transfer include item object otherworkspace )pcopy ⎕cy",
    "SYNTAX": ")COPY ws {nms}",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Change current namespace",
    "GROUP": "",
    "KEYWORDS": "into out of # ⎕se ⎕cs",
    "SYNTAX": ")CS {space}",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Erase file containing workspace ws",
    "GROUP": "",
    "KEYWORDS": "delete remove expunge",
    "SYNTAX": ")DROP {ws}",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Open Editor for named objects of type etype",
    "GROUP": "",
    "KEYWORDS": "open modify code source definition define value ⎕ed",
    "SYNTAX": ")ED {etype} nms",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Delete named objects from the active workspace",
    "GROUP": "",
    "KEYWORDS": "remove ⎕ex expunge item object",
    "SYNTAX": ")ERASE nms",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "List tokens currently held (acquired by :Hold)",
    "GROUP": "",
    "KEYWORDS": "synchronisation synchronization parallel threading tokens greenthreading vector",
    "SYNTAX": ")HOLDS",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "List workspaces either on WSPATH or in folder",
    "GROUP": "",
    "KEYWORDS": "dir ls vector",
    "SYNTAX": ")LIB {folder}",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Replace active workspace with workspace ws",
    "GROUP": "File Access",
    "KEYWORDS": "open fetch get bringin ⎕load",
    "SYNTAX": ")LOAD {ws}",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Create new global namespace called name",
    "GROUP": "",
    "KEYWORDS": "⎕NS",
    "SYNTAX": ")NS {name}",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Terminate the session",
    "GROUP": "",
    "KEYWORDS": "exit stop close ⎕off )continue",
    "SYNTAX": ")OFF",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "As )COPY but does not overwrite existing objects",
    "GROUP": "File Access",
    "KEYWORDS": "import load include item object otherworkspace )copy",
    "SYNTAX": ")PCOPY ws {nms}",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Reset state indicator and empty event queue/clear top n suspensions",
    "GROUP": "",
    "KEYWORDS": ")sic clear cutback stack",
    "SYNTAX": ")RESET {n}",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Save active workspace, optionally with new name ws",
    "GROUP": "",
    "KEYWORDS": "archive store ⎕save",
    "SYNTAX": ")SAVE {ws}",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Execute cmd (cmd is mandatory on Windows, optional on UNIX)",
    "GROUP": "",
    "KEYWORDS": "shell os operatingsystem commandprocessor ⎕sh linux macos aix unix rasbianpios",
    "SYNTAX": ")SH cmd",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Display (first n /last if n<0 lines of) state indicator (for  tdno)",
    "GROUP": "",
    "KEYWORDS": "display stack ⎕si ⎕xsi",
    "SYNTAX": ")SI {n} {-tid=tdno}",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Reset state indicator and empty event queue/clear top n suspensions",
    "GROUP": "",
    "KEYWORDS": ")reset clear cutback stack",
    "SYNTAX": ")SIC",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Display (first n /last if n<0 lines of) state indicator (for thread tdno) with local names",
    "GROUP": "",
    "KEYWORDS": "display stack list locals ⎕state vector",
    "SYNTAX": ")SINL{n} {-tid=tdno}",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Switch to thread tdno or report current thread number",
    "GROUP": "",
    "KEYWORDS": "synchronisation synchronization parallel threading greenthreading ⎕tid",
    "SYNTAX": ")TID {tdno}",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Set or report the name of the active workspace",
    "GROUP": "",
    "KEYWORDS": "identification filepath filename ⎕wsid",
    "SYNTAX": ")WSID {ws}",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Load workspace ws without executing ⎕LX",
    "GROUP": "File Access",
    "KEYWORDS": "open fetch get quiet latentexpression autoexec boot",
    "SYNTAX": ")XLOAD {ws}",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "List classes in current namespace, optionally beginning with {nm}",
    "GROUP": "",
    "KEYWORDS": "information listing report ¯9.4 vector",
    "SYNTAX": ")CLASSES {nm}",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "List events in current namespace, optionally beginning with {nm}",
    "GROUP": "",
    "KEYWORDS": "information listing report ¯8.6 vector",
    "SYNTAX": ")EVENTS {nm}",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "List functions in current namespace, optionally beginning with {nm}",
    "GROUP": "",
    "KEYWORDS": "information listing report ¯3.1 ¯3.2 ¯3.3 ¯3.6 vector",
    "SYNTAX": ")FNS {nm}",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "List interfaces in current namespace, optionally beginning with {nm}",
    "GROUP": "",
    "KEYWORDS": "information listing report ¯9.5 ¯9.7 vector",
    "SYNTAX": ")INTERFACES {nm}",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "List methods in current namespace, optionally beginning with {nm}",
    "GROUP": "",
    "KEYWORDS": "information listing report ¯3.6 vector",
    "SYNTAX": ")METHODS {nm}",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "List objects in current namespace, optionally beginning with {nm}",
    "GROUP": "",
    "KEYWORDS": "information listing report ¯9.1 ¯9.2 ¯9.4 ¯9.5 ¯9.6 ¯9.7 vector",
    "SYNTAX": ")OBJECTS {nm}",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "List objects in current namespace, optionally beginning with {nm}",
    "GROUP": "",
    "KEYWORDS": "information listing report ¯9.1 ¯9.2 ¯9.4 ¯9.5 ¯9.6 ¯9.7 vector",
    "SYNTAX": ")OBS {nm}",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "List operatoris in current namespace, optionally beginning with {nm}",
    "GROUP": "",
    "KEYWORDS": "information listing report ¯4.1 ¯4.2 ¯4.3 vector",
    "SYNTAX": ")OPS {nm}",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "List properties in current namespace, optionally beginning with {nm}",
    "GROUP": "",
    "KEYWORDS": "information listing report ¯2.3 vector",
    "SYNTAX": ")PROPS {nm}",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "List variables in current namespace, optionally beginning with {nm}",
    "GROUP": "",
    "KEYWORDS": "information listing report ¯2.1 ¯2.2 ¯2.3 ¯2.6 vector",
    "SYNTAX": ")VARS {nm}",
    "TYPE": ""
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "The letters from A to Z",
    "GROUP": "",
    "KEYWORDS": "abcdefghijklmnopqrstuvwxyz latinalphabet englishletters uppercase a-z ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "SYNTAX": "⎕A",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "The digits from 0 to 9",
    "GROUP": "",
    "KEYWORDS": "123456789 numbers arabicnumerals 0-9 0123456789",
    "SYNTAX": "⎕D",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "The null item",
    "GROUP": "",
    "KEYWORDS": "void emptycell .net nil",
    "SYNTAX": "⎕NULL",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Covers all errors (errors 1–999)",
    "GROUP": "",
    "KEYWORDS": "try catch errorhandling trapping exception",
    "SYNTAX": "0::any error",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "There is insufficient workspace in which to perform an operation",
    "GROUP": "",
    "KEYWORDS": "size memory resources maxws ⎕wa",
    "SYNTAX": "1::WS FULL",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "A line of characters does not constitute a meaningful statement",
    "GROUP": "",
    "KEYWORDS": "parser parsing",
    "SYNTAX": "2::SYNTAX ERROR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Index or axis is not in ⍳⍴Y or not in ⍳≢⍴Y",
    "GROUP": "",
    "KEYWORDS": "bounds limits overflow beyond dimensions length rank",
    "SYNTAX": "3::INDEX ERROR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Array rank invalid for function/operator, or ranks of arguments do not conform",
    "GROUP": "",
    "KEYWORDS": "dimensions conformability",
    "SYNTAX": "4::RANK ERROR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "The shape of the arguments of a function do not conform, but the ranks do conform",
    "GROUP": "",
    "KEYWORDS": "conformability",
    "SYNTAX": "5::LENGTH ERROR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Undefined name in this scope, or function does not return result while required",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "6::VALUE ERROR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Ill-formed specification in the left argument of ⎕FMT",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "7::FORMAT ERROR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "A system limit is exceeded",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "10::LIMIT ERROR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Type or value not permitted for the function/operator/system variable or unrepresentable numeric value",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "11::DOMAIN ERROR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Attempting ⎕SAVE while external arrays or component files are held by ⎕FHOLD",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "12::HOLD ERROR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "System function or syntax or appropriate value is not currently implemented but is reserved for future use",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "16::NONCE ERROR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "File tie number used as tied when not or available when tied, or missing external variable",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "18::FILE TIE ERROR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "User is not authorised, or has supplied the wrong passnumber, or ⎕FERASE/⎕FRENAME on non-exclusive tie",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "19::FILE ACCESS ERROR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "An attempt is made to reference a non-existent component",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "20::FILE INDEX ERROR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Operation would cause the file to exceed its file size limit",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "21::FILE FULL",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "File not found, file exists, incompatible file, or ⎕FERASE/⎕NERASE filename mismatch",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "22::FILE NAME ERROR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Component file damaged — check with ⎕FCHK",
    "GROUP": "",
    "KEYWORDS": "correct validate",
    "SYNTAX": "23::FILE DAMAGED",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Attempt to tie file that is exclusively tied, or to exclusively tie file that is tied",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "24::FILE TIED",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Attempt to tie file that another processor has exclusively tied, or to exclusively tie file that another processor has exclusively tied",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "25::FILE TIED REMOTELY",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Input/output error during file read/write — use ⎕FCHK when file becomes available",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "26::FILE SYSTEM ERROR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Lock attempt failed — may be due to opportunistic locks being enabled on Windows",
    "GROUP": "",
    "KEYWORDS": "oplock",
    "SYNTAX": "28::FILE SYSTEM NOT AVAILABLE",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "User already has the maximum number of files tied",
    "GROUP": "",
    "KEYWORDS": "⎕ftie fstie ⎕fcreate",
    "SYNTAX": "30::FILE SYSTEM TIES USED UP",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Maximum number of file ties for this APL instance has been reached",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "31::FILE TIE QUOTA USED UP",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "User already has the maximum number of files named",
    "GROUP": "",
    "KEYWORDS": "⎕fcreate ⎕ftie ⎕fstie ⎕frename",
    "SYNTAX": "32::FILE NAME QUOTA USED UP",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "There is insufficient disk space",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "34::FILE SYSTEM NO SPACE",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Operating system did not allow APL to upgrade component file structure",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "35::FILE ACCESS ERROR - CONVERTING FILE",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Attempt is made to access a component that is not a valid APL object — use ⎕FCHK",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "38::FILE COMPONENT DAMAGED",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Field content of rank greater than 2 is assigned to ⎕SM",
    "GROUP": "",
    "KEYWORDS": "dimensions",
    "SYNTAX": "52::FIELD CONTENTS RANK ERROR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Content of a numeric or date field assigned to ⎕SM has more than one column",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "53::FIELD CONTENTS TOO MANY COLUMNS",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Location of the field assigned to ⎕SM is outside the screen",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "54::FIELD POSITION ERROR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Invalid field size for ⎕SM",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "55::FIELD SIZE ERROR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Field contents assigned to ⎕SM does not conform with the given field type e.g. character content with numeric type",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "56::FIELD CONTENTS/TYPE MISMATCH",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Field type or behaviour code assigned to ⎕SM is invalid",
    "GROUP": "",
    "KEYWORDS": "behavior",
    "SYNTAX": "57::FIELD TYPE/BEHAVIOUR UNRECOGNISED",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "The current video attribute assigned to ⎕SM is non-scalar but its rank does not match that of the field contents",
    "GROUP": "",
    "KEYWORDS": "dimensions",
    "SYNTAX": "58::FIELD ATTRIBUTES RANK ERROR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "The current video attribute assigned to ⎕SM is non-scalar but its dimensions do not match those of the field contents",
    "GROUP": "",
    "KEYWORDS": "rank",
    "SYNTAX": "59::FIELD ATTRIBUTES LENGTH ERROR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "The required full screen capabilities are not available to ⎕SM",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "60::FULL-SCREEN ERROR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "A key code supplied to ⎕SR or ⎕PFKEY is not recognised as a valid code, or attempt at creating a KeyPress event with invalid Input Code",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "61::KEY CODE UNRECOGNISED",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "A key code supplied to ⎕SR or ⎕PFKEY is not a scalar or a vector",
    "GROUP": "",
    "KEYWORDS": "list dimensions",
    "SYNTAX": "62::KEY CODE RANK ERROR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "A key code supplied to ⎕SR or ⎕PFKEY is numeric or nested; i.e. is not a valid key code",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "63::KEY CODE TYPE ERROR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "The date format file to be used by ⎕SM does not exist or cannot be accessed",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "70::FORMAT FILE ACCESS ERROR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "The date format file to be used by ⎕SM is ill-formed",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "71::FORMAT FILE ERROR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "The limit on the number of pipes communicating between tasks is during startup, ⎕SH, or use of an external variable",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "72::NO PIPES",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "The limit on the number of processes (tasks) that the computer system can support would be exceeded",
    "GROUP": "",
    "KEYWORDS": "matrix",
    "SYNTAX": "76::PROCESSOR TABLE FULL",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Searching for a definition set for the system variable ⎕TRAP, after a trappable error has occurred, caused WS FULL",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "84::TRAP ERROR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "A Microsoft .NET object threw an exception",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "90::EXCEPTION",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "The system cannot convert a character from Unicode to an Atomic Vector (⎕AV) index or vice versa",
    "GROUP": "",
    "KEYWORDS": "⎕avu unicode classic codepage characterset charset encoding sbcs list",
    "SYNTAX": "92::TRANSLATION ERROR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Severe system error — save your work(space), and report the issue to Dyalog",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "99::INTERNAL ERROR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Covers all exceptions (errors 1001–1009)",
    "GROUP": "Exception",
    "KEYWORDS": "try catch errorhandling trapping exception",
    "SYNTAX": "1000::any exception",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Execution stopped due to ⎕STOP or stop bit set from editor",
    "GROUP": "Exception",
    "KEYWORDS": "halt inspect breakpoint list",
    "SYNTAX": "1001::STOP VECTOR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Execution stopped by weak interrupt",
    "GROUP": "Exception",
    "KEYWORDS": "",
    "SYNTAX": "1002::WEAK INTERRUPT",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Execution stopped by strong interrupt",
    "GROUP": "Exception",
    "KEYWORDS": "",
    "SYNTAX": "1003::INTERRUPT",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "EOF to ⎕ or soft interrupt to ⍞",
    "GROUP": "Exception",
    "KEYWORDS": "end-of-file",
    "SYNTAX": "1004::INPUT INTERRUPT",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "EOF when reading input from a file (when an input to APL is from a file)",
    "GROUP": "Exception",
    "KEYWORDS": "end-of-file",
    "SYNTAX": "1005::EOF INTERRUPT",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Time limit specified by ⎕RTL exceeded while awaiting input through ⍞ or ⎕SR",
    "GROUP": "Exception",
    "KEYWORDS": "character input stdin prompt",
    "SYNTAX": "1006::TIMEOUT",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "User resizes the ⎕SM window",
    "GROUP": "Exception",
    "KEYWORDS": "",
    "SYNTAX": "1007::RESIZE",
    "TYPE": ""
  },
  {
    "CATERGORY": "Error Message",
    "CLASS": "",
    "DESCRIPTION": "Two threads acquiring a hold of two different tokens, and then each asks to hold the other token",
    "GROUP": "Exception",
    "KEYWORDS": "",
    "SYNTAX": "1008::DEADLOCK",
    "TYPE": ""
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Determine the prime factors of the argument",
    "GROUP": "CALC",
    "KEYWORDS": "User commands that relate to manipulation of data ]Factors",
    "SYNTAX": "]CALC.Factors",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Convert a list of hexadecimal representations of integers to a numeric vector",
    "GROUP": "CALC",
    "KEYWORDS": "User commands that relate to manipulation of data ]FromHex",
    "SYNTAX": "]CALC.FromHex",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Create a pivot table from an appropriate matrix",
    "GROUP": "CALC",
    "KEYWORDS": "User commands that relate to manipulation of data ]PivotTable",
    "SYNTAX": "]CALC.PivotTable",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Convert integer(s) to a vector of text vectors containing the hexadecimal representation of each number",
    "GROUP": "CALC",
    "KEYWORDS": "User commands that relate to manipulation of data ]ToHex list",
    "SYNTAX": "]CALC.ToHex",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Run one or more DyalogBuild script files (.dyalogbuild)",
    "GROUP": "DEVOPS",
    "KEYWORDS": "User commands that relate to development and operations ]DBuild",
    "SYNTAX": "]DEVOPS.DBuild",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Run (a selection of) functions named test_* from a namespace, file or directory",
    "GROUP": "DEVOPS",
    "KEYWORDS": "User commands that relate to development and operations ]DTest",
    "SYNTAX": "]DEVOPS.DTest",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Report (and, optionally, change) the current directory",
    "GROUP": "FILE",
    "KEYWORDS": "User commands that relate to files ]CD",
    "SYNTAX": "]FILE.CD",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Merge all the files with the specified path/name{-nnn} into a single file",
    "GROUP": "FILE",
    "KEYWORDS": "User commands that relate to files ]Collect",
    "SYNTAX": "]FILE.Collect",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Compare two component files",
    "GROUP": "FILE",
    "KEYWORDS": "User commands that relate to files ]Compare",
    "SYNTAX": "]FILE.Compare",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Open the specified native file as an editable text file",
    "GROUP": "FILE",
    "KEYWORDS": "User commands that relate to files ]Edit",
    "SYNTAX": "]FILE.Edit",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "List line numbers and lines that contain the specified string for each file that has a match",
    "GROUP": "FILE",
    "KEYWORDS": "User commands that relate to files ]Find vector",
    "SYNTAX": "]FILE.Find",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Open a file or directory with the specified application",
    "GROUP": "FILE",
    "KEYWORDS": "User commands that relate to files ]Open",
    "SYNTAX": "]FILE.Open",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Replace strings in files and return the number of changes made",
    "GROUP": "FILE",
    "KEYWORDS": "User commands that relate to files ]Replace",
    "SYNTAX": "]FILE.Replace",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Split a single file into (up to 999) smaller files",
    "GROUP": "FILE",
    "KEYWORDS": "User commands that relate to files ]Split",
    "SYNTAX": "]FILE.Split",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Transform component files in the specified directory from small-span to large-span",
    "GROUP": "FILE",
    "KEYWORDS": "User commands that relate to files ]ToLarge",
    "SYNTAX": "]FILE.ToLarge",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Convert a component file timestamp (single float number) to ⎕TS format (vector of 7 numbers)",
    "GROUP": "FILE",
    "KEYWORDS": "User commands that relate to files ]ToQuadTS list",
    "SYNTAX": "]FILE.ToQuadTS",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Check whether the specified file exists in the current/specified location and create it if it cannot be found",
    "GROUP": "FILE",
    "KEYWORDS": "User commands that relate to files ]Touch",
    "SYNTAX": "]FILE.Touch",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Align end-of-line comments",
    "GROUP": "FN",
    "KEYWORDS": "User commands that relate to functions and operators ]Align",
    "SYNTAX": "]FN.Align",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Produce the calling tree of a function in a class/namespace/scriptfile",
    "GROUP": "FN",
    "KEYWORDS": "User commands that relate to functions and operators ]Calls",
    "SYNTAX": "]FN.Calls",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Compare two functions",
    "GROUP": "FN",
    "KEYWORDS": "User commands that relate to functions and operators ]Compare",
    "SYNTAX": "]FN.Compare",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "List single-line dfns, dops, derived functions and trains",
    "GROUP": "FN",
    "KEYWORDS": "User commands that relate to functions and operators ]Defs vector",
    "SYNTAX": "]FN.Defs",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Define a multi-line dfn, dop or derived function/operator, or execute a multi-line expression",
    "GROUP": "FN",
    "KEYWORDS": "User commands that relate to functions and operators ]DInput",
    "SYNTAX": "]FN.DInput",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "List functions modified since a specified date (default is today), most-recently-changed first",
    "GROUP": "FN",
    "KEYWORDS": "User commands that relate to functions and operators ]Latest vector",
    "SYNTAX": "]FN.Latest",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Sort local names in the header of tradfns and tradops",
    "GROUP": "FN",
    "KEYWORDS": "User commands that relate to functions and operators ]ReorderLocals sorting reordering order ordering",
    "SYNTAX": "]FN.ReorderLocals",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Associate item in linked namespace with new file/directory in corresponding directory",
    "GROUP": "LINK",
    "KEYWORDS": "User commands for namespace-directory synchronisation (see https//github.com/dyalog/link/wiki) ]Add",
    "SYNTAX": "]LINK.Add",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Break link between namespace and corresponding directory",
    "GROUP": "LINK",
    "KEYWORDS": "User commands for namespace-directory synchronisation (see https//github.com/dyalog/link/wiki) ]Break",
    "SYNTAX": "]LINK.Break",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Append filename with numeric encoding of capitalisation",
    "GROUP": "LINK",
    "KEYWORDS": "User commands for namespace-directory synchronisation (see https//github.com/dyalog/link/wiki) ]CaseCode",
    "SYNTAX": "]LINK.CaseCode",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Link a namespace with a directory (create one or both if absent)",
    "GROUP": "LINK",
    "KEYWORDS": "User commands for namespace-directory synchronisation (see https//github.com/dyalog/link/wiki) ]Create",
    "SYNTAX": "]LINK.Create",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Export a namespace to a directory (create the directory if absent); does not create a link",
    "GROUP": "LINK",
    "KEYWORDS": "User commands for namespace-directory synchronisation (see https//github.com/dyalog/link/wiki) ]Export",
    "SYNTAX": "]LINK.Export",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Erase item and associated file",
    "GROUP": "LINK",
    "KEYWORDS": "User commands for namespace-directory synchronisation (see https//github.com/dyalog/link/wiki) ]Expunge",
    "SYNTAX": "]LINK.Expunge",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Return name of file associated with item",
    "GROUP": "LINK",
    "KEYWORDS": "User commands for namespace-directory synchronisation (see https//github.com/dyalog/link/wiki) ]GetFileName",
    "SYNTAX": "]LINK.GetFileName",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Return name of item associated with file",
    "GROUP": "LINK",
    "KEYWORDS": "User commands for namespace-directory synchronisation (see https//github.com/dyalog/link/wiki) ]GetItemName",
    "SYNTAX": "]LINK.GetItemName",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Import a namespace from a directory (create the namespace if absent); does not create a link",
    "GROUP": "LINK",
    "KEYWORDS": "User commands for namespace-directory synchronisation (see https//github.com/dyalog/link/wiki) ]Import",
    "SYNTAX": "]LINK.Import",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "List active namespace-directory links",
    "GROUP": "LINK",
    "KEYWORDS": "User commands for namespace-directory synchronisation (see https//github.com/dyalog/link/wiki) ]List vector",
    "SYNTAX": "]LINK.List",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Fully synchronise namespace-directory content",
    "GROUP": "LINK",
    "KEYWORDS": "User commands for namespace-directory synchronisation (see https//github.com/dyalog/link/wiki) ]Refresh",
    "SYNTAX": "]LINK.Refresh",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "List all .NET assemblies currently loaded into memory",
    "GROUP": "MSWIN",
    "KEYWORDS": "User commands that relate to the Microsoft Windows operating system ]Assemblies vector",
    "SYNTAX": "]MSWIN.Assemblies",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Query or change window captions",
    "GROUP": "MSWIN",
    "KEYWORDS": "User commands that relate to the Microsoft Windows operating system ]Caption",
    "SYNTAX": "]MSWIN.Caption",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Copy registry entries to file and, optionally, between Dyalog versions",
    "GROUP": "MSWIN",
    "KEYWORDS": "User commands that relate to the Microsoft Windows operating system ]CopyReg",
    "SYNTAX": "]MSWIN.CopyReg",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Change the file associations of Dyalog workspaces, applications and scripts (.dws, .dyapp and .dyalog files)",
    "GROUP": "MSWIN",
    "KEYWORDS": "User commands that relate to the Microsoft Windows operating system ]FileAssociations",
    "SYNTAX": "]MSWIN.FileAssociations",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "List property names and values for given or current object",
    "GROUP": "MSWIN",
    "KEYWORDS": "User commands that relate to the Microsoft Windows operating system ]GUIProps vector",
    "SYNTAX": "]MSWIN.GUIProps",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Return message arguments of KeyPress events",
    "GROUP": "MSWIN",
    "KEYWORDS": "User commands that relate to the Microsoft Windows operating system ]KeyPress",
    "SYNTAX": "]MSWIN.KeyPress",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Synchronise namespace/class script to match current content",
    "GROUP": "NS",
    "KEYWORDS": "User commands that relate to namespaces ]ScriptUpdate",
    "SYNTAX": "]NS.ScriptUpdate",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Summarise (scope, size, syntax) the functions in a namespace/class/scriptfile",
    "GROUP": "NS",
    "KEYWORDS": "User commands that relate to namespaces ]Summary",
    "SYNTAX": "]NS.Summary",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Describe the inter-object cross-references in a class/namespace/scriptfile",
    "GROUP": "NS",
    "KEYWORDS": "User commands that relate to namespaces ]Xref",
    "SYNTAX": "]NS.Xref",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Display output with borders indicating shape, type and structure",
    "GROUP": "OUTPUT",
    "KEYWORDS": "User commands that affect the way items are displayed ]Box",
    "SYNTAX": "]OUTPUT.Box",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Display output with borders indicating shape, type and structure",
    "GROUP": "OUTPUT",
    "KEYWORDS": "User commands that affect the way items are displayed ]Boxing",
    "SYNTAX": "]OUTPUT.Boxing",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Display specified array with borders indicating sub-array shape and type",
    "GROUP": "OUTPUT",
    "KEYWORDS": "User commands that affect the way items are displayed ]Disp subarray",
    "SYNTAX": "]OUTPUT.Disp",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Display specified array with borders indicating array and sub-array shape and type",
    "GROUP": "OUTPUT",
    "KEYWORDS": "User commands that affect the way items are displayed ]Display subarray",
    "SYNTAX": "]OUTPUT.Display",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Precede output with a reference to the line of code that generated it",
    "GROUP": "OUTPUT",
    "KEYWORDS": "User commands that affect the way items are displayed ]Find",
    "SYNTAX": "]OUTPUT.Find",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Format text into vector of text vectors (or matrix if called from Session) to fit ⎕PW using specified margins",
    "GROUP": "OUTPUT",
    "KEYWORDS": "User commands that affect the way items are displayed ]Format list table",
    "SYNTAX": "]OUTPUT.Format",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Render HTML or SVG",
    "GROUP": "OUTPUT",
    "KEYWORDS": "User commands that affect the way items are displayed ]HTML",
    "SYNTAX": "]OUTPUT.HTML",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Format text into vector of text vectors (or matrix if called from Session) to fit ⎕PW using margins inferred from the text",
    "GROUP": "OUTPUT",
    "KEYWORDS": "User commands that affect the way items are displayed ]Layout list table",
    "SYNTAX": "]OUTPUT.Layout",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Plot data",
    "GROUP": "OUTPUT",
    "KEYWORDS": "User commands that affect the way items are displayed ]Plot",
    "SYNTAX": "]OUTPUT.Plot",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Cut, wrap, fold or extend the display of output lines to fit the Session window",
    "GROUP": "OUTPUT",
    "KEYWORDS": "User commands that affect the way items are displayed ]Rows folding",
    "SYNTAX": "]OUTPUT.Rows",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Report performance details (optionally through GUI)",
    "GROUP": "PERFORMANCE",
    "KEYWORDS": "User commands that relate to consumption of computing resources ]Profile",
    "SYNTAX": "]PERFORMANCE.Profile",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Report execution time of one or more expressions",
    "GROUP": "PERFORMANCE",
    "KEYWORDS": "User commands that relate to consumption of computing resources ]RunTime",
    "SYNTAX": "]PERFORMANCE.RunTime",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Compute memory needed to run expression(s)",
    "GROUP": "PERFORMANCE",
    "KEYWORDS": "User commands that relate to consumption of computing resources ]SpaceNeeded",
    "SYNTAX": "]PERFORMANCE.SpaceNeeded",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Boot from a file containing instructions or a function",
    "GROUP": "SALT",
    "KEYWORDS": "User command covers for SALT functionality ]Boot",
    "SYNTAX": "]SALT.Boot",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Remove SALT tags from the ws or specific items so that SALT no longer saves changes to associated files",
    "GROUP": "SALT",
    "KEYWORDS": "User command covers for SALT functionality ]Clean",
    "SYNTAX": "]SALT.Clean",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Compare two versions of a SALTed item",
    "GROUP": "SALT",
    "KEYWORDS": "User command covers for SALT functionality ]Compare",
    "SYNTAX": "]SALT.Compare",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "List files (default: .dyalog only) and directories in the specified directory",
    "GROUP": "SALT",
    "KEYWORDS": "User command covers for SALT functionality ]List vector",
    "SYNTAX": "]SALT.List",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Load item from native text file",
    "GROUP": "SALT",
    "KEYWORDS": "User command covers for SALT functionality ]Load",
    "SYNTAX": "]SALT.Load",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Reload all SALTed items from their associated files",
    "GROUP": "SALT",
    "KEYWORDS": "User command covers for SALT functionality ]Refresh",
    "SYNTAX": "]SALT.Refresh",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Remove one or more versions of a file managed by SALT",
    "GROUP": "SALT",
    "KEYWORDS": "User command covers for SALT functionality ]RemoveVersions",
    "SYNTAX": "]SALT.RemoveVersions",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Save item in a native text file (default: same place if already SALTed)",
    "GROUP": "SALT",
    "KEYWORDS": "User command covers for SALT functionality ]Save",
    "SYNTAX": "]SALT.Save",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Return one or all parameters or set one parameter",
    "GROUP": "SALT",
    "KEYWORDS": "User command covers for SALT functionality ]Set",
    "SYNTAX": "]SALT.Set",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Return one or all parameters or set one parameter",
    "GROUP": "SALT",
    "KEYWORDS": "User command covers for SALT functionality ]Settings",
    "SYNTAX": "]SALT.Settings",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Save all new or modified items to native text files (unscripted namespaces become directories)",
    "GROUP": "SALT",
    "KEYWORDS": "User command covers for SALT functionality ]Snap",
    "SYNTAX": "]SALT.Snap",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Generate documentation automatically",
    "GROUP": "TOOLS",
    "KEYWORDS": "Development and presentation user commands ]ADoc",
    "SYNTAX": "]TOOLS.ADoc",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Display calendar",
    "GROUP": "TOOLS",
    "KEYWORDS": "Development and presentation user commands ]Calendar",
    "SYNTAX": "]TOOLS.Calendar",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Chart the specified expression",
    "GROUP": "TOOLS",
    "KEYWORDS": "Development and presentation user commands ]Chart",
    "SYNTAX": "]TOOLS.Chart",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Provide playback mechanism for live demonstrations",
    "GROUP": "TOOLS",
    "KEYWORDS": "Development and presentation user commands ]Demo",
    "SYNTAX": "]TOOLS.Demo",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Browse or get link to information about any APL concept",
    "GROUP": "TOOLS",
    "KEYWORDS": "Development and presentation user commands ]Help",
    "SYNTAX": "]TOOLS.Help",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Report version numbers of APL, OS, SALT, UCMD, .NET and/or workspace",
    "GROUP": "TOOLS",
    "KEYWORDS": "Development and presentation user commands ]Version",
    "SYNTAX": "]TOOLS.Version",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Import a workspace from a workspace transfer file",
    "GROUP": "TRANSFER",
    "KEYWORDS": "User commands that convert workspaces between APL versions and dialects ]In",
    "SYNTAX": "]TRANSFER.In",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Export the current workspace to a workspace transfer file",
    "GROUP": "TRANSFER",
    "KEYWORDS": "User commands that convert workspaces between APL versions and dialects ]Out",
    "SYNTAX": "]TRANSFER.Out",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Facilitate debugging of user commands",
    "GROUP": "UCMD",
    "KEYWORDS": "User commands that manage the user command framework ]UDebug",
    "SYNTAX": "]UCMD.UDebug",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Load a user command's script into the current namespace",
    "GROUP": "UCMD",
    "KEYWORDS": "User commands that manage the user command framework ]ULoad",
    "SYNTAX": "]UCMD.ULoad",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Gather user command execution data",
    "GROUP": "UCMD",
    "KEYWORDS": "User commands that manage the user command framework ]UMonitor",
    "SYNTAX": "]UCMD.UMonitor",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Create one or more new user commands (optionally using a GUI)",
    "GROUP": "UCMD",
    "KEYWORDS": "User commands that manage the user command framework ]UNew",
    "SYNTAX": "]UCMD.UNew",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Refresh cache of all user command definitions",
    "GROUP": "UCMD",
    "KEYWORDS": "User commands that manage the user command framework ]UReset",
    "SYNTAX": "]UCMD.UReset",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Run Setup from setup.dyalog",
    "GROUP": "UCMD",
    "KEYWORDS": "User commands that manage the user command framework ]USetup",
    "SYNTAX": "]UCMD.USetup",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Report version information of a user command",
    "GROUP": "UCMD",
    "KEYWORDS": "User commands that manage the user command framework ]UVersion",
    "SYNTAX": "]UCMD.UVersion",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Perform workspace integrity check",
    "GROUP": "WS",
    "KEYWORDS": "User commands that relate to workspaces ]Check correct validate",
    "SYNTAX": "]WS.Check",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Compare two workspaces",
    "GROUP": "WS",
    "KEYWORDS": "User commands that relate to workspaces ]Compare",
    "SYNTAX": "]WS.Compare",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "List (part of) the workspace content, displaying each item separately",
    "GROUP": "WS",
    "KEYWORDS": "User commands that relate to workspaces ]Document vector",
    "SYNTAX": "]WS.Document",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Follow references in the workspace until all references have been found",
    "GROUP": "WS",
    "KEYWORDS": "User commands that relate to workspaces ]FindRefs",
    "SYNTAX": "]WS.FindRefs",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "List functions and operators matching a pattern",
    "GROUP": "WS",
    "KEYWORDS": "User commands that relate to workspaces ]FnsLike vector",
    "SYNTAX": "]WS.FnsLike",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Locate (and, optionally, replace) strings in the workspace",
    "GROUP": "WS",
    "KEYWORDS": "User commands that relate to workspaces ]Locate locating",
    "SYNTAX": "]WS.Locate",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Display namespace treeview",
    "GROUP": "WS",
    "KEYWORDS": "User commands that relate to workspaces ]Map",
    "SYNTAX": "]WS.Map",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "List names followed by their class matching the pattern",
    "GROUP": "WS",
    "KEYWORDS": "User commands that relate to workspaces ]NamesLike vector",
    "SYNTAX": "]WS.NamesLike",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "List names followed by their class matching the pattern",
    "GROUP": "WS",
    "KEYWORDS": "User commands that relate to workspaces ]Nms vector",
    "SYNTAX": "]WS.Nms",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "List objects matching the pattern",
    "GROUP": "WS",
    "KEYWORDS": "User commands that relate to workspaces ]ObsLike vector",
    "SYNTAX": "]WS.ObsLike",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Execute expression in temporary copy of workspace",
    "GROUP": "WS",
    "KEYWORDS": "User commands that relate to workspaces ]Peek",
    "SYNTAX": "]WS.Peek",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Report size of variables in descending order",
    "GROUP": "WS",
    "KEYWORDS": "User commands that relate to workspaces ]SizeOf sort sorting reordering ordering",
    "SYNTAX": "]WS.SizeOf",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "User command",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "List variables matching the pattern",
    "GROUP": "WS",
    "KEYWORDS": "User commands that relate to workspaces ]VarsLike vector",
    "SYNTAX": "]WS.VarsLike",
    "TYPE": "Ucmd"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Count the number of elements in an array",
    "GROUP": "",
    "KEYWORDS": "tallyall ⍴, numberofelements numberofitems howmanyelements howmanyitems whole array scalars countall ×/⍴ ×⌿⍴ ≢, ⍴,",
    "SYNTAX": "(×/⍴)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Arithmetic",
    "CLASS": "Tacit",
    "DESCRIPTION": "Sum all elements in an array",
    "GROUP": "",
    "KEYWORDS": "sumall +⌿, grandtotal sumitems",
    "SYNTAX": "(+/,)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Number of trues",
    "GROUP": "",
    "KEYWORDS": "sumall howmanytrue count tally 1s",
    "SYNTAX": "(+/,)B",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Number of trues",
    "GROUP": "",
    "KEYWORDS": "+/, +⌿, sum all howmanytrue count tally 1s",
    "SYNTAX": "(≢⍸)B",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Rank (number of dimensions) of Y",
    "GROUP": "",
    "KEYWORDS": "howmanyaxes numberofaxes axiscount ⍴⍴",
    "SYNTAX": "(≢⍴)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "If Y begins with X",
    "GROUP": "",
    "KEYWORDS": "prefixof startswith",
    "SYNTAX": "X(⊃⍷)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Execute Microsoft Windows cmd",
    "GROUP": "System",
    "KEYWORDS": "shell os operatingsystem commandprocessor ⎕sh )cmd",
    "SYNTAX": "captured_output←⎕CMD cmd",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Convert CSV data to APL matrix",
    "GROUP": "Data Conversion",
    "KEYWORDS": "tsv table import parse commaseparatedvalues tabseparatedvalues characterseparatedvalues matrix",
    "SYNTAX": "r←⎕CSV data",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Convert CSV data from APL matrix",
    "GROUP": "Data Conversion",
    "KEYWORDS": "tsv table export generate commaseparatedvalues tabseparatedvalues characterseparatedvalues matrix",
    "SYNTAX": "r←data {header} ⎕CSV format_spec",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Convert CSV data to APL inverted table (character data as matrices)",
    "GROUP": "Data Conversion",
    "KEYWORDS": "tsv table import parse commaseparatedvalues tabseparatedvalues characterseparatedvalues matrix",
    "SYNTAX": "r←(⎕CSV⍠1)data",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Convert CSV data from APL inverted table (character data as matrices)",
    "GROUP": "Data Conversion",
    "KEYWORDS": "tsv table export generate commaseparatedvalues tabseparatedvalues characterseparatedvalues matrix",
    "SYNTAX": "r←data {header}(⎕CSV⍠1)format_spec",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Convert CSV data to APL inverted table (character data as vectors of vectors)",
    "GROUP": "Data Conversion",
    "KEYWORDS": "tsv table import parse commaseparatedvalues tabseparatedvalues characterseparatedvalues matrix",
    "SYNTAX": "r←(⎕CSV⍠2)data",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Convert CSV data from APL inverted table (character data as vectors of vectors)",
    "GROUP": "Data Conversion",
    "KEYWORDS": "tsv table export generate commaseparatedvalues tabseparatedvalues characterseparatedvalues matrix",
    "SYNTAX": "r←data {header}(⎕CSV⍠2)format_spec",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Interpret internal representation as array of type 'type'",
    "GROUP": "Array Properties",
    "KEYWORDS": "datarepresentation internalrepresentation",
    "SYNTAX": "r←type ⎕DR x",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Return internal data type of x",
    "GROUP": "Array Properties",
    "KEYWORDS": "datarepresentation internalrepresentation",
    "SYNTAX": "type←⎕DR x",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Convert x into character matrix according to spec",
    "GROUP": "Data Conversion",
    "KEYWORDS": "displayform formatbyspecification cobolpictureformat fortranformatter ⎕df ⍕ table",
    "SYNTAX": "r←{format_spec} ⎕FMT x",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Convert JSON text to APL array",
    "GROUP": "Data Conversion",
    "KEYWORDS": "javascriptobjectnotation importexport parse deserialise deserialize",
    "SYNTAX": "r←0 ⎕JSON data",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Convert JSON text from APL array",
    "GROUP": "Data Conversion",
    "KEYWORDS": "javascriptobjectnotation importexport generate serialise serialize",
    "SYNTAX": "r←1 ⎕JSON data",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Convert JSON text to APL matrix",
    "GROUP": "Data Conversion",
    "KEYWORDS": "javascriptobjectnotation importexport parse deserialise deserialize",
    "SYNTAX": "r←0(⎕JSON⍠'M')data",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Convert JSON text from APL matrix",
    "GROUP": "Data Conversion",
    "KEYWORDS": "javascriptobjectnotation importexport generate serialise serialize",
    "SYNTAX": "r←1(⎕JSON⍠'M')data",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Associate name with mapped file (from offset)",
    "GROUP": "File Access",
    "KEYWORDS": "memorymap array",
    "SYNTAX": "name←{type}{shape} ⎕MAP file {rw} {offset}",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Associate name with external DLL function",
    "GROUP": "System",
    "KEYWORDS": ".dll .so .dylib .a c++ dynamiclinkedlibrary sharedlibrary dynamiclibrary",
    "SYNTAX": "{name}←{name} ⎕NA fn_desc",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Search text for PCRE reg_ex returning trans (optional tn to spool output to native file)",
    "GROUP": "Data Conversion",
    "KEYWORDS": "regex search find locate perlcompatibleregularexpression locating",
    "SYNTAX": "r←{tn} (reg_ex ⎕S trans) text",
    "TYPE": "Operator"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Replace text selected by reg_ex using trans (optional tn to spool output to native file)",
    "GROUP": "Data Conversion",
    "KEYWORDS": "regex substitute pcre perlcompatibleregularexpression",
    "SYNTAX": "r←{tn} (reg_ex ⎕R trans) text",
    "TYPE": "Operator"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Search text for case-insensitive PCRE reg_ex returning trans (optional tn to spool output to native file)",
    "GROUP": "Data Conversion",
    "KEYWORDS": "regex search find locate perlcompatibleregularexpression locating case-insensitivity caseinsensitive caseinsensitivity",
    "SYNTAX": "r←{tn} (reg_ex ⎕S trans⍠1) text",
    "TYPE": "Operator"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Replace text selected by case-insensitive reg_ex using trans (optional tn to spool output to native file)",
    "GROUP": "Data Conversion",
    "KEYWORDS": "regex substitute pcre perlcompatibleregularexpression case-insensitivity caseinsensitive caseinsensitivity",
    "SYNTAX": "r←{tn} (reg_ex ⎕R trans⍠1) text",
    "TYPE": "Operator"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Execute UNIX shell cmd",
    "GROUP": "System",
    "KEYWORDS": "shell os operatingsystem commandprocessor linux macos aix rasbianpios ⎕cmd )sh",
    "SYNTAX": "captured_output←⎕SH cmd",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Map characters to/from Unicode code points",
    "GROUP": "Data Conversion",
    "KEYWORDS": "utf-8 utf8 utf-16 utf16 utf-32 utf32 encoding ucs-4 ucs4 ucs-2 ucs2 iso10646 ord() num() chr() char() ascii latin-1 windows-1252 ansi mapping",
    "SYNTAX": "r←{encoding} ⎕UCS vec",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Set search path for .NET Namespace(s)",
    "GROUP": "System",
    "KEYWORDS": "microsoft mscorlib.dll dotnet",
    "SYNTAX": "⎕USING ←ns_specs",
    "TYPE": "Variable"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Validate numeric input: returns Boolean validity mask and numeric vector of converted input",
    "GROUP": "Data Conversion",
    "KEYWORDS": "verifyandfixinput atoi parse numbers fields formdata list check correct",
    "SYNTAX": "valid nums←{seps} ⎕VFI text",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "XML string to/from APL array",
    "GROUP": "Data Conversion",
    "KEYWORDS": "extensiblemarkuplanguage xhtmltag xmltag",
    "SYNTAX": "r←{xml_options} ⎕XML data",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "User number, compute, connect, keying time (ms)",
    "GROUP": "System",
    "KEYWORDS": "accountinformation session milliseconds uptime useridentification cpuusage processorusage idle",
    "SYNTAX": "r←⎕AI",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "User (login) name",
    "GROUP": "System",
    "KEYWORDS": "accountname",
    "SYNTAX": "user_name←⎕AN",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Clear the active workspace",
    "GROUP": "System",
    "KEYWORDS": "new refresh empty # erase delete remove purge expunge reset all )clear",
    "SYNTAX": "⎕CLEAR",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Copy (optionally selected) names from saved ws",
    "GROUP": "File Access",
    "KEYWORDS": "import load use transfer import load include item object otherworkspace )copy",
    "SYNTAX": "{0⍴⊂''}←{names} ⎕CY file",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Delay and return seconds actually delayed",
    "GROUP": "System",
    "KEYWORDS": "await sleep idle",
    "SYNTAX": "{num}←⎕DL num",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Load saved workspace",
    "GROUP": "File Access",
    "KEYWORDS": "open fetch get bringin )load",
    "SYNTAX": "⎕LOAD file",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Terminate the APL session",
    "GROUP": "System",
    "KEYWORDS": "exit stop close )off",
    "SYNTAX": "⎕OFF",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Set search path (blank-separated list of namespace names) for functions and operators",
    "GROUP": "System",
    "KEYWORDS": "stdlib standardlibrary include vector",
    "SYNTAX": "⎕PATH ←nss",
    "TYPE": "Variable"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Save active ws (with stack if flag=0) in file with 0 returned on reload of saved ws, else 1",
    "GROUP": "File Access",
    "KEYWORDS": "archive store )save",
    "SYNTAX": "{r}←{flag} ⎕SAVE file",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Session object",
    "GROUP": "System",
    "KEYWORDS": "environment gui persistent utilities",
    "SYNTAX": "⎕SE",
    "TYPE": "Namespace"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Current time (y m d h m s ms)",
    "GROUP": "System",
    "KEYWORDS": "now current localtimestamp datetime",
    "SYNTAX": "numvec←⎕TS",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Syntactical attributes of named functions or operators",
    "GROUP": "System",
    "KEYWORDS": "valence arity shyness locked niladicmonadicdyadicambivalent functionoperator variadic properties author timestamp modificationtime result",
    "SYNTAX": "r←{selector} ⎕AT names",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Source of function or operator as a character matrix",
    "GROUP": "Data Conversion",
    "KEYWORDS": "code representation table",
    "SYNTAX": "r←⎕CR name",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Open one or more objects (names) in the editor",
    "GROUP": "System",
    "KEYWORDS": "open modify code source definition define value )ed",
    "SYNTAX": "{names}←{types} ⎕ED names",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Delete named objects from the active workspace (1 if each name is now free for use, else 0)",
    "GROUP": "System",
    "KEYWORDS": "expunge erase remove item )erase",
    "SYNTAX": "{boolvec}←⎕EX names",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Name of fn or op defined from its matrix, nested, vector or object representation (or failing line no)",
    "GROUP": "Data Conversion",
    "KEYWORDS": "define fix code source function operator list table",
    "SYNTAX": "{r}←⎕FX cr/nr/vr/or",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Hide source and optionally disallow suspension",
    "GROUP": "System",
    "KEYWORDS": "secure closedsource encrypt",
    "SYNTAX": "{level}←{level} ⎕LOCK name/ref",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Source of function or operator as a nested vector",
    "GROUP": "Data Conversion",
    "KEYWORDS": "code representation vtv character list",
    "SYNTAX": "r←⎕NR name",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "\"Profile\" CPU or elapsed time consumption of code",
    "GROUP": "System",
    "KEYWORDS": "performance monitor statistics stats observe processor resources",
    "SYNTAX": "state|data←{settings} ⎕PROFILE action",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "List the names referenced by a function",
    "GROUP": "System",
    "KEYWORDS": "xref crossreference identifiers symbols vector",
    "SYNTAX": "names←⎕REFS name",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Enable/report the current state of stops for a function",
    "GROUP": "System",
    "KEYWORDS": "halt inspect breakpoint",
    "SYNTAX": "{linenos}←{linenos} ⎕STOP name",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Enable/report the current state of tracing for a function",
    "GROUP": "System",
    "KEYWORDS": "monitor",
    "SYNTAX": "{linenos}←{linenos} ⎕TRACE name",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Source of function or operator as a simple vector",
    "GROUP": "Data Conversion",
    "KEYWORDS": "code representation list",
    "SYNTAX": "r←⎕VR name",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "Syntax",
    "DESCRIPTION": "Invoke the base class definition of name",
    "GROUP": "System",
    "KEYWORDS": "template up :base",
    "SYNTAX": "⎕BASE.name",
    "TYPE": "Namespace"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Class hierarchy for a class/instance",
    "GROUP": "System",
    "KEYWORDS": "parents ancestors",
    "SYNTAX": "class_hierarchy←⎕CLASS ref",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Extract specific interface to an instance",
    "GROUP": "Data Conversion",
    "KEYWORDS": "parents ancestors",
    "SYNTAX": "ref←{class/interface} ⎕CLASS instance",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Switch to a ns, optionally exporting names",
    "GROUP": "Data Conversion",
    "KEYWORDS": "change namespace into current ⎕this )cs",
    "SYNTAX": "{old_ns}←{names} ⎕CS ns",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Set the display form of the current space",
    "GROUP": "Data Conversion",
    "KEYWORDS": "visualrepresentation format ⍕ ⎕fmt",
    "SYNTAX": "old_df←⎕DF char_array",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Define objects from source (vector of vectors or file name starting with 'file://')",
    "GROUP": "Data Conversion",
    "KEYWORDS": "define ⎕fx code source function operator namespace class interface list",
    "SYNTAX": "{ref}←{flags} ⎕FIX source",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Current instances of class",
    "GROUP": "Data Conversion",
    "KEYWORDS": "children derived",
    "SYNTAX": "refs←⎕INSTANCES class",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Create an instance of class",
    "GROUP": "Data Conversion",
    "KEYWORDS": ".new",
    "SYNTAX": "instance←⎕NEW class {conargs}",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Create (optionally named) namespace copying names or contents of ns into it",
    "GROUP": "Data Conversion",
    "KEYWORDS": "object make new construct collect )ns deepcopy clone",
    "SYNTAX": "{me/ref}←{name} ⎕NS names/ns",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "The source code of a ref",
    "GROUP": "Data Conversion",
    "KEYWORDS": "representation script definition",
    "SYNTAX": "script←⎕SRC ref",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Reference to the current namespace",
    "GROUP": "Data Conversion",
    "KEYWORDS": "here me myself",
    "SYNTAX": "ref←⎕THIS",
    "TYPE": "Namespace"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Append x to end of file (optional passnumber)",
    "GROUP": "Component Files",
    "KEYWORDS": "dcf",
    "SYNTAX": "cn←x ⎕FAPPEND tn {pn}",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "1 if file system is available, else 0",
    "GROUP": "Component Files",
    "KEYWORDS": "dcf active usable accessible",
    "SYNTAX": "r←⎕FAVAIL",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Inspect and optionally repair file",
    "GROUP": "Component Files",
    "KEYWORDS": "dcf check externalvariable correct validate",
    "SYNTAX": "cns←{fchk_opts} ⎕FCHK file",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Create copy of named file tied to tn",
    "GROUP": "Component Files",
    "KEYWORDS": "dcf duplicate",
    "SYNTAX": "{tn}←file ⎕FCOPY tn {pn}",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Create new component file",
    "GROUP": "Component Files",
    "KEYWORDS": "dcf touch make",
    "SYNTAX": "{tn}←file ⎕FCREATE tn {64}",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Drop n components from start (n>0) or end (n<0)",
    "GROUP": "Component Files",
    "KEYWORDS": "dcf remove trim slice resize cap clamp",
    "SYNTAX": "{cn}←⎕FDROP tn n {pn}",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Erase exclusively-tied file",
    "GROUP": "Component Files",
    "KEYWORDS": "dcf delete expunge remove",
    "SYNTAX": "{tn}←file ⎕FERASE tn {pn}",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Return tied file tn's history (user/time of last operations)",
    "GROUP": "Component Files",
    "KEYWORDS": "dcf log",
    "SYNTAX": "r←⎕FHIST tn {pn}",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Hold tied file tn (can be a matrix of tn {pn})",
    "GROUP": "Component Files",
    "KEYWORDS": "dcf block wait synchronisation synchronization parallel threading greenthreading table",
    "SYNTAX": "{tn}←⎕FHOLD tn {pn}",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "List component files in the specified folder",
    "GROUP": "Component Files",
    "KEYWORDS": "dcf ls dir vector",
    "SYNTAX": "names←⎕FLIB folder",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Names of tied files in same order as ⎕FNUMS",
    "GROUP": "Component Files",
    "KEYWORDS": "dcf sort sorting reordering ordering",
    "SYNTAX": "names←⎕FNAMES",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Vector containing tie numbers of tied files",
    "GROUP": "Component Files",
    "KEYWORDS": "dcf access list",
    "SYNTAX": "tns←⎕FNUMS",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Current values of the named properties of file tn",
    "GROUP": "Component Files",
    "KEYWORDS": "dcf settings query get retreive",
    "SYNTAX": "r←pnames ⎕FPROPS tn {pn}",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Set properties of file tn using name-value pairs",
    "GROUP": "Component Files",
    "KEYWORDS": "dcf settings update modify change",
    "SYNTAX": "r←nvpairs ⎕FPROPS tn {pn}",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Read access matrix",
    "GROUP": "Component Files",
    "KEYWORDS": "dcf table",
    "SYNTAX": "ax_mx←⎕FRDAC tn {pn}",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Size in bytes, user and timestamp of last update to cn",
    "GROUP": "Component Files",
    "KEYWORDS": "dcf readaccess",
    "SYNTAX": "r←⎕FRDCI tn cn {pn}",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "The array stored in component(s) cn in file tn",
    "GROUP": "Component Files",
    "KEYWORDS": "dcf get retrieve load copy fetch",
    "SYNTAX": "r←⎕FREAD tn cn {pn}",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Rename exclusively-tied file",
    "GROUP": "Component Files",
    "KEYWORDS": "dcf",
    "SYNTAX": "{tn}←file ⎕FRENAME tn {pn}",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Store array x in component number cn",
    "GROUP": "Component Files",
    "KEYWORDS": "dcf put overwrite store",
    "SYNTAX": "{cn}←x ⎕FREPLACE tn cn {pn}",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Compact exclusively-tied file tn and set its max size",
    "GROUP": "Component Files",
    "KEYWORDS": "dcf maximum limit clamp",
    "SYNTAX": "{tn}←{bytes} ⎕FRESIZE tn {pn}",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "First cn, next-free cn, used and max size in bytes",
    "GROUP": "Component Files",
    "KEYWORDS": "dcf maximum",
    "SYNTAX": "r←⎕FSIZE tn {pn}",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Set access matrix for file tn",
    "GROUP": "Component Files",
    "KEYWORDS": "dcf table",
    "SYNTAX": "{tn}←ax_mx ⎕FSTAC tn {pn}",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Share-tie component file",
    "GROUP": "Component Files",
    "KEYWORDS": "dcf multiple parallel",
    "SYNTAX": "{tn}←file ⎕FSTIE tn {pn}",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Exclusively tie component file",
    "GROUP": "Component Files",
    "KEYWORDS": "dcf single",
    "SYNTAX": "{tn}←file ⎕FTIE tn {pn}",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Untie one or more component files",
    "GROUP": "Component Files",
    "KEYWORDS": "dcf release",
    "SYNTAX": "{tn}←⎕FUNTIE tns",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Lines at which each function on stack is suspended",
    "GROUP": "Workspace",
    "KEYWORDS": "linecounter number state",
    "SYNTAX": "numvec←⎕LC",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Expression to be executed when workspace is loaded",
    "GROUP": "Workspace",
    "KEYWORDS": "latentexpression autoexec bootstrap startup automatic ⎕load )load )xload",
    "SYNTAX": "⎕LX←expression",
    "TYPE": "Variable"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Class of each name (fractional if names is nested)",
    "GROUP": "Workspace",
    "KEYWORDS": "itemtype",
    "SYNTAX": "numvec←⎕NC names",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Active names of specified class(es), optionally filtered",
    "GROUP": "Workspace",
    "KEYWORDS": "namelist classes",
    "SYNTAX": "names←{init_chars} ⎕NL nums",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Active classes, optionally filtered",
    "GROUP": "Workspace",
    "KEYWORDS": "namelist )classes",
    "SYNTAX": "names←{init_chars} ⎕NL ¯9.4",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Active events, optionally filtered",
    "GROUP": "Workspace",
    "KEYWORDS": "namelist )events",
    "SYNTAX": "names←{init_chars} ⎕NL ¯8.6",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Active functions, optionally filtered",
    "GROUP": "Workspace",
    "KEYWORDS": "namelist )fns",
    "SYNTAX": "names←{init_chars} ⎕NL ¯3",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Active interfaces, optionally filtered",
    "GROUP": "Workspace",
    "KEYWORDS": "namelist )interfaces",
    "SYNTAX": "names←{init_chars} ⎕NL ¯9.5 ¯9.7",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Active methods, optionally filtered",
    "GROUP": "Workspace",
    "KEYWORDS": "namelist )methods",
    "SYNTAX": "names←{init_chars} ⎕NL ¯3.6",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Active objects, optionally filtered",
    "GROUP": "Workspace",
    "KEYWORDS": "namelist )objects )obs",
    "SYNTAX": "names←{init_chars} ⎕NL ¯9",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Active operators, optionally filtered",
    "GROUP": "Workspace",
    "KEYWORDS": "namelist )ops",
    "SYNTAX": "names←{init_chars} ⎕NL ¯4.1",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Active properties, optionally filtered",
    "GROUP": "Workspace",
    "KEYWORDS": "namelist )props",
    "SYNTAX": "names←{init_chars} ⎕NL ¯2.3",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Active variables, optionally filtered",
    "GROUP": "Workspace",
    "KEYWORDS": "namelist )vars",
    "SYNTAX": "names←{init_chars} ⎕NL ¯2.1",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "The spaces from which functions on stack were called",
    "GROUP": "Workspace",
    "KEYWORDS": "referencestateindicator namespaces suspended",
    "SYNTAX": "space_references←⎕RSI",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Make names local to most recently invoked defined fn",
    "GROUP": "Workspace",
    "KEYWORDS": "localise localize encapsulate shield scope localisation localization declare declaring declaration",
    "SYNTAX": "{r}←⎕SHADOW names",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Vector of names of functions on the stack",
    "GROUP": "Workspace",
    "KEYWORDS": "stateindicator )si list",
    "SYNTAX": "names←⎕SI",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Space consumed by code/data attached to names",
    "GROUP": "Workspace",
    "KEYWORDS": "workspaceusage workspaceuse memoryconsumption",
    "SYNTAX": "bytes←⎕SIZE names",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Definition of each function on the stack",
    "GROUP": "Workspace",
    "KEYWORDS": "state definitions",
    "SYNTAX": "r←⎕STACK",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Details of the usage of name at each level of the stack",
    "GROUP": "Workspace",
    "KEYWORDS": "state definition )sinl",
    "SYNTAX": "r←⎕STATE name",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Workspace available (unused)",
    "GROUP": "Workspace",
    "KEYWORDS": "freememory",
    "SYNTAX": "bytes←⎕WA",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "The name of the active workspace",
    "GROUP": "Workspace",
    "KEYWORDS": "filename currentworkspace )wsid",
    "SYNTAX": "⎕WSID←name",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Full names of functions on the stack",
    "GROUP": "Workspace",
    "KEYWORDS": "extended state namespacepath references )si",
    "SYNTAX": "names←⎕XSI",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "The child thread numbers of the given thread numbers",
    "GROUP": "System",
    "KEYWORDS": "synchronisation synchronization parallel threading greenthreading",
    "SYNTAX": "tdno←⎕TCNUMS tdno",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "The number of the current thread",
    "GROUP": "System",
    "KEYWORDS": "synchronisation synchronization parallel threading greethread )tid",
    "SYNTAX": "tdno←⎕TID",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Kill threads tdno and (default 1 is true) descendants",
    "GROUP": "System",
    "KEYWORDS": "synchronisation synchronization parallel threading stop terminate greenthreading",
    "SYNTAX": "{tdno}←{0|1} ⎕TKILL tdno",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Report/set the name (tdname) of the current thread",
    "GROUP": "System",
    "KEYWORDS": "synchronisation synchronization parallel threading greenthreading",
    "SYNTAX": "⎕TNAME←{tdname}",
    "TYPE": "Variable"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Report the numbers of all current threads",
    "GROUP": "System",
    "KEYWORDS": "synchronisation synchronization parallel threading greenthreading",
    "SYNTAX": "tdno←⎕TNUMS",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Wait for threads tdno to terminate and return results",
    "GROUP": "System",
    "KEYWORDS": "synchronisation synchronization parallel threading greenthreading",
    "SYNTAX": "tdres←⎕TSYNC tdno",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Remove tokens of types tktype from the token pool",
    "GROUP": "System",
    "KEYWORDS": "synchronisation synchronization parallel threading greenthreading",
    "SYNTAX": "{tkval}←{timeout} ⎕TGET tktype",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Type of each token in the token pool",
    "GROUP": "System",
    "KEYWORDS": "synchronisation synchronization parallel threading greenthreading",
    "SYNTAX": "tktype←⎕TPOOL",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Add tokens to pool and return any tdno this unblocks",
    "GROUP": "System",
    "KEYWORDS": "synchronisation synchronization parallel threading greenthreading",
    "SYNTAX": "{tdno}←{tkval} ⎕TPUT tktype",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "List token types that threads tdno are waiting for",
    "GROUP": "System",
    "KEYWORDS": "synchronisation synchronization parallel threading greenthreading vector",
    "SYNTAX": "tktype←⎕TREQ tdno",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Create or ensure existence of directory dir",
    "GROUP": "Native Files",
    "KEYWORDS": "md newfolder make",
    "SYNTAX": "{created}←{flags} ⎕MKDIR dir",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Append x using internal representation type",
    "GROUP": "Native Files",
    "KEYWORDS": "extend concatenate",
    "SYNTAX": "{offset}←x ⎕NAPPEND tn type",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Copy files/directories from 'sources' to 'destination'",
    "GROUP": "Native Files",
    "KEYWORDS": "copying",
    "SYNTAX": "{counts}←destination ⎕NCOPY sources",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Copy files/directories from 'sources' (with ? and * globbing) to 'destination'",
    "GROUP": "Native Files",
    "KEYWORDS": "copying wildcards",
    "SYNTAX": "{counts}←destination(⎕NCOPY⍠1)sources",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Create file (tn 0 to generate tn)",
    "GROUP": "Native Files",
    "KEYWORDS": "make new",
    "SYNTAX": "{tn}←file ⎕NCREATE tn",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Delete files (if flags 1, tolerate 'file not found')",
    "GROUP": "Native Files",
    "KEYWORDS": "erase remove expunge )drop",
    "SYNTAX": "{counts}←{flags} ⎕NDELETE files",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Delete files (with ? and * globbing, if flags 1, tolerate 'file not found')",
    "GROUP": "Native Files",
    "KEYWORDS": "erase remove expunge )drop wildcards",
    "SYNTAX": "{counts}←{flags}(⎕NDELETE⍠1)files",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Erase tied file tn",
    "GROUP": "Native Files",
    "KEYWORDS": "delete remove expunge drop",
    "SYNTAX": "{tn}←file ⎕NERASE tn",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Return 1 if files exist, else 0",
    "GROUP": "Native Files",
    "KEYWORDS": "present present check lookfor",
    "SYNTAX": "r←⎕NEXISTS files",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Return 1 if files (with ? and * globbing) exist, else 0",
    "GROUP": "Native Files",
    "KEYWORDS": "present present check lookfor",
    "SYNTAX": "r←(⎕NEXISTS⍠1)files",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Read Unicode text file as lines into array r",
    "GROUP": "Native Files",
    "KEYWORDS": "fetch read load get",
    "SYNTAX": "r←{encoding} ⎕NGET file {flags}",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Return values of properties 1 for tns/files",
    "GROUP": "Native Files",
    "KEYWORDS": "dir ls list information vector",
    "SYNTAX": "t←{properties}1 ⎕NINFO tns/files",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Return values of properties 1 for tns/files (with ? and * globbing)",
    "GROUP": "Native Files",
    "KEYWORDS": "dir ls list information vector wildcards",
    "SYNTAX": "t←{properties}1(⎕NINFO⍠1)tns/files",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Change lock status of file region 0:unlock, 1:read, 2:write (optional timeout in seconds)",
    "GROUP": "Native Files",
    "KEYWORDS": "restrict access seal passcode",
    "SYNTAX": "{rarg}←lock {secs} ⎕NLOCK tn {offset} {bytes}",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Move files/directories from 'sources' to 'destination'",
    "GROUP": "Native Files",
    "KEYWORDS": "moving renaming rename",
    "SYNTAX": "{counts}←destination ⎕NMOVE sources",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Move files/directories from 'sources' (with ? and * globbing) to 'destination'",
    "GROUP": "Native Files",
    "KEYWORDS": "moving renaming rename wildcards",
    "SYNTAX": "{counts}←destination(⎕NMOVE⍠1)sources",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Names of tied files in same order as ⎕NNUMS",
    "GROUP": "Native Files",
    "KEYWORDS": "sort sorting reordering ordering",
    "SYNTAX": "file←⎕NNAMES",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Tie numbers of tied files",
    "GROUP": "Native Files",
    "KEYWORDS": "",
    "SYNTAX": "tns←⎕NNUMS",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Splits files into paths, base names and extensions (normalising files if flags=1)",
    "GROUP": "Native Files",
    "KEYWORDS": "directory",
    "SYNTAX": "r←{flags} ⎕NPARTS files",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Write (overwrite if flags 1) text lines to Unicode file",
    "GROUP": "Native Files",
    "KEYWORDS": "dump cat save 🐈",
    "SYNTAX": "{bytes}←vec ⎕NPUT file {flags}",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Read n items of specified type from file tn",
    "GROUP": "Native Files",
    "KEYWORDS": "load fetch get",
    "SYNTAX": "vec←⎕NREAD tn type n {offset}",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Rename tied file to have name file",
    "GROUP": "Native Files",
    "KEYWORDS": "move",
    "SYNTAX": "{tn}←file ⎕NRENAME tn",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Write x to file at offset as type",
    "GROUP": "Native Files",
    "KEYWORDS": "overwrite",
    "SYNTAX": "{end_offset}←x ⎕NREPLACE tn offset {typ}",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Resize file to have specified size",
    "GROUP": "Native Files",
    "KEYWORDS": "cap limit clamp",
    "SYNTAX": "{tn}←{bytes} ⎕NRESIZE tn",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Current size of file",
    "GROUP": "Native Files",
    "KEYWORDS": "bytes diskspace",
    "SYNTAX": "bytes←⎕NSIZE tn",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Tie a file in the specified mode",
    "GROUP": "Native Files",
    "KEYWORDS": "",
    "SYNTAX": "{tn}←file ⎕NTIE tn {file_mode}",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System Function",
    "CLASS": "System",
    "DESCRIPTION": "Untie one or more files",
    "GROUP": "Native Files",
    "KEYWORDS": "release",
    "SYNTAX": "{tn}←⎕NUNTIE tn",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "System",
    "DESCRIPTION": "Process events generated by object(s)",
    "GROUP": "Native Files",
    "KEYWORDS": "dequeue wait",
    "SYNTAX": "{r}←⎕DQ object",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "System",
    "DESCRIPTION": "Specify fns to be exported by an OLEClient",
    "GROUP": "Native Files",
    "KEYWORDS": "",
    "SYNTAX": "{exported}←{flags} ⎕EXPORT nm",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "System",
    "DESCRIPTION": "Enqueue an event for processing",
    "GROUP": "Native Files",
    "KEYWORDS": "push request",
    "SYNTAX": "{r}←{action} ⎕NQ object event {params}",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "System",
    "DESCRIPTION": "Create an instance of a built-in type and set property values",
    "GROUP": "Native Files",
    "KEYWORDS": "window gui new",
    "SYNTAX": "{name}←{name} ⎕WC type {ordered_props} {nvpairs} …",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "System",
    "DESCRIPTION": "The values of the properties of an object",
    "GROUP": "Native Files",
    "KEYWORDS": "window gui get fetch query",
    "SYNTAX": "r←{object} ⎕WG props…",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "System",
    "DESCRIPTION": "Child objects (of class) of parent",
    "GROUP": "Native Files",
    "KEYWORDS": "window gui names",
    "SYNTAX": "children←{class} ⎕WN parent",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "System",
    "DESCRIPTION": "Set the values of one or more specified properties of object",
    "GROUP": "Native Files",
    "KEYWORDS": "window gui assign",
    "SYNTAX": "{old_values}←{object} ⎕WS nvpairs…",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "System",
    "DESCRIPTION": "Namespace containing details of most recent error in current thread",
    "GROUP": "Error Message",
    "KEYWORDS": "extended diagnostic",
    "SYNTAX": "⎕DMX",
    "TYPE": "Namespace"
  },
  {
    "CATERGORY": "System",
    "CLASS": "System",
    "DESCRIPTION": "Details of most recent .NET exception",
    "GROUP": "Error Message",
    "KEYWORDS": "",
    "SYNTAX": "⎕EXCEPTION",
    "TYPE": "Namespace"
  },
  {
    "CATERGORY": "System",
    "CLASS": "System",
    "DESCRIPTION": "Signal an error; nvpairs set ⎕DMX props",
    "GROUP": "Error Message",
    "KEYWORDS": "throw emulate",
    "SYNTAX": "{r}←{msg} ⎕SIGNAL errno/{nvpairs}…",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "System",
    "DESCRIPTION": "Reset error-related system constants",
    "GROUP": "Error Message",
    "KEYWORDS": "clear",
    "SYNTAX": "{0}←⎕SIGNAL 0",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "System",
    "DESCRIPTION": "Define error handling",
    "GROUP": "Error Message",
    "KEYWORDS": "try catch",
    "SYNTAX": "⎕TRAP←trap_spec",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "I-beam",
    "DESCRIPTION": "Inverted Table Index-of (Xv⍳Yv)",
    "GROUP": "",
    "KEYWORDS": "iota indicesin indexof position columndatabase matrix",
    "SYNTAX": "Xv(8⌶)Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "I-beam",
    "DESCRIPTION": "Execute (⍎) Silent Expression",
    "GROUP": "",
    "KEYWORDS": "evaluate apl compute numbers atoi run call parseexpression shy noresult",
    "SYNTAX": "As(85⌶)Dv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Overwrite Free Pockets",
    "GROUP": "",
    "KEYWORDS": "memory wipe",
    "SYNTAX": "127⌶⍬",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "I-beam",
    "DESCRIPTION": "Canonical Representation (⎕CR) for methods",
    "GROUP": "",
    "KEYWORDS": "code representation oo classes private instance",
    "SYNTAX": "180⌶Dv",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "I-beam",
    "DESCRIPTION": "Unsqueezed Type (⎕DR)",
    "GROUP": "",
    "KEYWORDS": "datarepresentation internalrepresentation",
    "SYNTAX": "181⌶Y",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "I-beam",
    "DESCRIPTION": "Syntax Colouring",
    "GROUP": "",
    "KEYWORDS": "coloring highlighting parse parsing tokentypes",
    "SYNTAX": "200⌶Dv",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "I-beam",
    "DESCRIPTION": "Syntax Colour Tokens",
    "GROUP": "",
    "KEYWORDS": "coloring highlighting parse parsing tokentypes",
    "SYNTAX": "201⌶⍬",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "I-beam",
    "DESCRIPTION": "Compress/Decompress Vector of Short Integers",
    "GROUP": "",
    "KEYWORDS": "lz4 zlib gzip deflate uncompress inflate list",
    "SYNTAX": "Mv(219⌶)Jv",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "I-beam",
    "DESCRIPTION": "Serialise/Deserialise Array",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "As(220⌶)Y",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Compiler Control",
    "GROUP": "",
    "KEYWORDS": "performance",
    "SYNTAX": "{Xs}(400⌶)Y",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Trap Control",
    "GROUP": "",
    "KEYWORDS": "debugging repl try catch error handling",
    "SYNTAX": "600⌶Js",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Temporary Directory",
    "GROUP": "",
    "KEYWORDS": "tmp",
    "SYNTAX": "739⌶0",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "I-beam",
    "DESCRIPTION": "Case Convert",
    "GROUP": "",
    "KEYWORDS": "casefold casemap uppercase lowercase lettercase",
    "SYNTAX": "{Xs}(819⌶)Y",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "I-beam",
    "DESCRIPTION": "Called Monadically (tradfns/tradops only)",
    "GROUP": "",
    "KEYWORDS": "arity ambivalent ambivalence variadic leftargument ⎕nc",
    "SYNTAX": "900⌶Y",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "",
    "DESCRIPTION": "Called Monadically (dfns/dops only)",
    "GROUP": "Function Application",
    "KEYWORDS": "arity ambivalent ambivalence variadic leftargument 900⌶",
    "SYNTAX": "0=⎕NC'⍺'",
    "TYPE": ""
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Loaded Libraries",
    "GROUP": "",
    "KEYWORDS": "⎕na .dll .so .dylib .a c++ dynamiclinkedlibrary sharedlibrary dynamiclibrary",
    "SYNTAX": "950⌶⍬",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "I-beam",
    "DESCRIPTION": "Number of Threads",
    "GROUP": "",
    "KEYWORDS": "multithreading parallelprocessing performance affinity",
    "SYNTAX": "1111⌶Jv",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "I-beam",
    "DESCRIPTION": "Parallel Execution Threshold",
    "GROUP": "",
    "KEYWORDS": "multithreading parallelprocessing performance affinity",
    "SYNTAX": "1112⌶Js",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Update Function Time and User Stamp",
    "GROUP": "",
    "KEYWORDS": "⎕at properties operator",
    "SYNTAX": "X(1159⌶)Y",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "I-beam",
    "DESCRIPTION": "Hash Array",
    "GROUP": "",
    "KEYWORDS": "performance hashing",
    "SYNTAX": "Is(1500⌶)Y",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Memory Manager Statistics",
    "GROUP": "",
    "KEYWORDS": "management performance",
    "SYNTAX": "Iv(2000⌶)Jv",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Specify Workspace Available (⎕WA)",
    "GROUP": "",
    "KEYWORDS": "freememory",
    "SYNTAX": "2002⌶Js",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "I-beam",
    "DESCRIPTION": "Update DataTable",
    "GROUP": "",
    "KEYWORDS": "databinding assignment redefine inplace update",
    "SYNTAX": "{Av}(2010⌶)Yv",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "I-beam",
    "DESCRIPTION": "Read DataTable",
    "GROUP": "",
    "KEYWORDS": "databinding get fetch value",
    "SYNTAX": "{Av}(2011⌶)Yv",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "I-beam",
    "DESCRIPTION": "Remove Data Binding",
    "GROUP": "",
    "KEYWORDS": "disconnect databinding",
    "SYNTAX": "2014⌶Y",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "I-beam",
    "DESCRIPTION": "Create Data Binding Source",
    "GROUP": "",
    "KEYWORDS": "connect",
    "SYNTAX": "{Xs}(2015⌶)Dv",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "I-beam",
    "DESCRIPTION": "Create .NET Delegate",
    "GROUP": "",
    "KEYWORDS": "make new",
    "SYNTAX": "2016⌶Yv",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "I-beam",
    "DESCRIPTION": "Identify .NET Type",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "2017⌶Dv",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Flush Session Caption",
    "GROUP": "",
    "KEYWORDS": "titlebar",
    "SYNTAX": "2022⌶0",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Close all Windows",
    "GROUP": "",
    "KEYWORDS": "shut",
    "SYNTAX": "2023⌶0",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Set Dyalog Pixel Type ('ScaledPixel'/'RealPixel')",
    "GROUP": "",
    "KEYWORDS": "scaling highresolution hires retina px",
    "SYNTAX": "2035⌶Dv",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Override COM Default Value",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "{X}(2041⌶)Js",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Export Workspace to in-Memory .NET Assembly",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "2100⌶0",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Close .NET AppDomain",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "2101⌶0",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Set Workspace Save Options",
    "GROUP": "",
    "KEYWORDS": "clear trace stop monitor flags breakpoints halt inspect monitor",
    "SYNTAX": "2400⌶Bs",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Expose Root Properties",
    "GROUP": "",
    "KEYWORDS": "oo dotting",
    "SYNTAX": "2401⌶Bs",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Discard incoming .NET thread on exit",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "2501⌶Bs",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Discard parked incoming .NET threads",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "2501⌶0",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Mark Thread as Uninterruptible",
    "GROUP": "",
    "KEYWORDS": "greenthreading launch run suspend suspension",
    "SYNTAX": "2503⌶Js",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Use Separate Thread For .NET",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "2520⌶Bs",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Continue Autosave",
    "GROUP": "",
    "KEYWORDS": ")continue",
    "SYNTAX": "2701⌶Bs",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Disable Component Checksum Validation",
    "GROUP": "",
    "KEYWORDS": "dcf",
    "SYNTAX": "3002⌶Bs",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Send Text Dv to RIDE-embedded Browser with caption Cv",
    "GROUP": "",
    "KEYWORDS": "html svg rendering cef remoteintegrateddevelopmentenvironment",
    "SYNTAX": "{Cv}(3500⌶)Dv",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Connected to the RIDE",
    "GROUP": "",
    "KEYWORDS": "remoteintegrateddevelopmentenvironment",
    "SYNTAX": "3501⌶0",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Manage RIDE Connections",
    "GROUP": "",
    "KEYWORDS": "remoteintegrateddevelopmentenvironment",
    "SYNTAX": "3502⌶Yv",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Fork New Task",
    "GROUP": "",
    "KEYWORDS": "aix multithreading parallel",
    "SYNTAX": "4000⌶⍬",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Change User",
    "GROUP": "",
    "KEYWORDS": "aix multithreading parallel",
    "SYNTAX": "4001⌶Dv",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Reap Forked Tasks",
    "GROUP": "",
    "KEYWORDS": "aix multithreading parallel",
    "SYNTAX": "4002⌶⍬",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Signal Counts",
    "GROUP": "",
    "KEYWORDS": "SIGHUP SIGINT SIGQUIT SIGTERM SIGWINCH",
    "SYNTAX": "4007⌶⍬",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "List Loaded Files",
    "GROUP": "",
    "KEYWORDS": "⎕fix source text vector",
    "SYNTAX": "5176⌶0",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "List Loaded File Objects",
    "GROUP": "",
    "KEYWORDS": "⎕fix source text vector",
    "SYNTAX": "5177⌶⍬",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Remove Loaded File Object Info",
    "GROUP": "",
    "KEYWORDS": "⎕fix source text",
    "SYNTAX": "5178⌶Yv",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Loaded File Object Info",
    "GROUP": "",
    "KEYWORDS": "⎕fix source text",
    "SYNTAX": "5179⌶Yv",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "I-beam",
    "DESCRIPTION": "JSON Translate Name",
    "GROUP": "",
    "KEYWORDS": "⎕json namemangling",
    "SYNTAX": "As(7162⌶)Dv",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "I-beam",
    "DESCRIPTION": "Singular Value Decomposition",
    "GROUP": "",
    "KEYWORDS": "⌹",
    "SYNTAX": "8415⌶Nm",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "I-beam",
    "DESCRIPTION": "Line Count",
    "GROUP": "",
    "KEYWORDS": "⊃⎕lc ↑⎕lc linecounter number state stack suspension",
    "SYNTAX": "50100⌶Js",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Tacit",
    "DESCRIPTION": "Normalise Case",
    "GROUP": "",
    "KEYWORDS": "lettercase caseless caseinsensitive normalize",
    "SYNTAX": "(819⌶819⌶⍨∘1)D",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Tacit",
    "DESCRIPTION": "Caseless operation",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "lettercase caseless caseinsensitive comparison lookup",
    "SYNTAX": "C f{(⍵⍵ ⍺) ⍺⍺ (⍵⍵ ⍵)}(819⌶819⌶⍨∘1) D",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Pad elements of vector of arrays Yv to equal shape",
    "GROUP": "",
    "KEYWORDS": "list",
    "SYNTAX": "⊂⍤¯1∘↑Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dop",
    "DESCRIPTION": "Insert X at fractional positions Nv in Y (≢Nv)=≢X",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "slotin",
    "SYNTAX": "(X{(⊂⍋(⍳≢⍵),⌊⍺⍺)⌷⍵,⍺⍺}Nv)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "Constant",
    "DESCRIPTION": "Is this Dyalog APL Unicode?",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "80=⎕DR''",
    "TYPE": ""
  },
  {
    "CATERGORY": "System",
    "CLASS": "Constant",
    "DESCRIPTION": "Is this Dyalog APL Classic?",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "82=⎕DR''",
    "TYPE": ""
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Dfn",
    "DESCRIPTION": "Ternary: if Bs then execute and return X else execute and return Y",
    "GROUP": "Structure",
    "KEYWORDS": "conditionaloperator inlineiff ternaryiff ?:",
    "SYNTAX": "{⍵:X ⋄ Y}Bs",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Dfn",
    "DESCRIPTION": "Ternary: if Bs then return X else return Y",
    "GROUP": "Structure",
    "KEYWORDS": "conditionaloperator inlineiff ternaryiff ?:",
    "SYNTAX": "X⊣⍣Bs⊢Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Dop",
    "DESCRIPTION": "Ternary: if As then apply f to Y else apply g to Y1",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "conditionaloperator inlineiff ternaryiff ?:",
    "SYNTAX": "As f{⍺:⍺⍺ ⍵ ⋄ ⍵⍵ ⍵}g Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Decomposition of Hermitian positive-definite matrix",
    "GROUP": "",
    "KEYWORDS": "Choleskydecomposition table",
    "SYNTAX": "y←dfns.Cholesky x",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Cut operator",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "Cut gameoflife GoL",
    "SYNTAX": "rslt←{x} (u dfns.Cut case) y",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Apply fn at depths k",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "depth rank dimensions",
    "SYNTAX": "{larg}(fn dfns.Depth k)rarg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Quaternion arithmetic",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "Quaternion",
    "SYNTAX": "z←{larg}(fn dfns.H)rarg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Random numbers with normal distribution",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "distribution←average + standard_deviation × dfns.NormRand (shape)",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Derive undo/redo function",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "undo redo",
    "SYNTAX": "commit←(⎕NS'') dfns.UndoRedo",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Exact cover: Knuth's Algorithm X",
    "GROUP": "",
    "KEYWORDS": "exactcover AlgorithmX exactcover gameofsudoku N-Queens pentomino NQueens",
    "SYNTAX": "V←{rcols←1…} dfns.X M",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Simulation of \"fork\" syntax",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "hook fork co-operator cooperator",
    "SYNTAX": "rslt←{larg} I dfns._fk J fk_ K rarg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Accumulating reduction",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "reduction",
    "SYNTAX": "rslt←(func dfns.acc) argt",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Bijective base-⍺ numeration",
    "GROUP": "",
    "KEYWORDS": "k-adicnumbers shortlex bijectivenumeration unary kadicnumbers",
    "SYNTAX": "digs←alph dfns.adic numb",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Value for key ⍵ from list ⍺",
    "GROUP": "",
    "KEYWORDS": "associationlist dictionary look-uptable symboltable graph lists lookuptable vector",
    "SYNTAX": "val←list dfns.alget key",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Value for key ⍵, and reduced list ⍺",
    "GROUP": "",
    "KEYWORDS": "associationlist dictionary look-uptable symboltable graph lists lookuptable vector",
    "SYNTAX": "val list←list dfns.alpop key",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "List ⍺ extended with key-value pair ⍵",
    "GROUP": "",
    "KEYWORDS": "associationlist dictionary look-uptable symboltable graph lists lookuptable vector",
    "SYNTAX": "list←list dfns.alpush key val",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "List ⍺ with key-value ⍵ replacement",
    "GROUP": "",
    "KEYWORDS": "associationlist dictionary look-uptable symboltable graph lists lookuptable vector",
    "SYNTAX": "list←list dfns.alset key val",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Alternant",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "alternant determinant innerproduct SAX",
    "SYNTAX": "rslt←(f dfns.alt g) mat",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Ambivalize traditional function",
    "GROUP": "",
    "KEYWORDS": "ambivalent tradfn",
    "SYNTAX": "{name}←{ref} dfns.ambiv namelist",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Sequential test",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "lazyevaluation sequentialtest adjacentguard &&",
    "SYNTAX": "rslt←(f dfns.and g) arg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Huntington-Hill apportionment",
    "GROUP": "",
    "KEYWORDS": "USHousepfRepresentatives apportionment assignment",
    "SYNTAX": "alloc←{seats←435} dfns.apportion populations",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "⍺-ary representation of rational ⍵",
    "GROUP": "",
    "KEYWORDS": "rationalnumber binary ternary IEEEFPprecision",
    "SYNTAX": "enco←base (dfns.ary) ratnum",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Associative vector scan",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "scanoperators list scanning",
    "SYNTAX": "vect←(fn dfns.ascan) vect",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Associative higher rank scan",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "scanoperators dimensions scanning",
    "SYNTAX": "array←{ascan} (fn dfns.ascana) array",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Hungarian method cost assignment",
    "GROUP": "",
    "KEYWORDS": "assignment Hungarianmethod maximise optimise graph independentzeros",
    "SYNTAX": "bmat←dfns.assign costs",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Prefix-friendly @",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "atoperator prefixagreement whereclause SigmaAPL semicolonseparator @",
    "SYNTAX": "rslt←{⍺←⊢} (new dfns.at sel) old",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Function/operator attributes",
    "GROUP": "",
    "KEYWORDS": "attributes ⎕AT ⎕SIZE syntax name-clashproblem nameclashproblem",
    "SYNTAX": "cmat←{attributes} dfns.attrib namelist",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Adelson-Velskii, Landis (AVL) trees",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "tree binarysearchtree typenotation expressiontransformation",
    "SYNTAX": "rslt←{larg)(op dfns.avl) rarg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Manchester Small Scale Experimental Machine",
    "GROUP": "",
    "KEYWORDS": "SSEM firstcomputer assembler disassembler diversions bottom⊥ Baby",
    "SYNTAX": "bmat←{A CI} dfns.baby bmat",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Multisets/bags",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "multiset bags FinnAPLIdiomList",
    "SYNTAX": "z←l (fn dfns.bags) r",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Base64 encoding and decoding as used in MIME",
    "GROUP": "",
    "KEYWORDS": "Base64encoding MIME",
    "SYNTAX": "coded←dfns.base64 plain",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Bayes' formula",
    "GROUP": "",
    "KEYWORDS": "Bayesformula",
    "SYNTAX": "prob←cond dfns.bayes prior",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Brainfuck",
    "GROUP": "",
    "KEYWORDS": "Brainfuck turingcomplete lists hyperator 2-adicnumbers Turingtape tape 2adicnumbers",
    "SYNTAX": "{tape}←{tape} dfns.bf toks",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Arithmetic on large integers",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "infiniteprecision factorial",
    "SYNTAX": "cvec←{larg} (fn dfns.big) rarg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Probability of same birthday",
    "GROUP": "",
    "KEYWORDS": "birthday probability",
    "SYNTAX": "p←s dfns.birthday n",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Box the simple text array ⍵",
    "GROUP": "",
    "KEYWORDS": "border box box-drawingcharacters displayofarrays boxing boxdrawingcharacters",
    "SYNTAX": "cmat←{h v t←⍬ ⍬ 0} dfns.box text",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Binary search",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "binarysearch",
    "SYNTAX": "indx←(fun dfns.bsearch) range",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Balanced Ternary Arithmetic",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "balancedternary ternary Setuncomputer TERNAC BurroughsB1700",
    "SYNTAX": "tvec←{larg} (fn dfns.bt) rarg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Ref to space with initial cache",
    "GROUP": "",
    "KEYWORDS": "memoization cache persistentlocalvariable fibonaccinumber",
    "SYNTAX": "sref←dfns.cache ivec",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Calendar",
    "GROUP": "",
    "KEYWORDS": "calendar winningLoto",
    "SYNTAX": "calendar←dfns.cal date",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Select statement",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "conditionaloperator selectoperator co-operator cooperator",
    "SYNTAX": "rslt←i j k ··· F dfns.case G case H ··· arg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Ratio of operand timings",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "performance timing expressioncomparison hyperator",
    "SYNTAX": "rslt←{larg} (land dfns.cf rand) rarg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Continued fraction approx of real ⍵",
    "GROUP": "",
    "KEYWORDS": "continuedfraction goldenmean fibonaccinumber",
    "SYNTAX": "nvec←{tolerance←⎕CT} dfns.cfract numb",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Simple ⍺-digit checksum",
    "GROUP": "",
    "KEYWORDS": "checksum hashing",
    "SYNTAX": "sum←{digs←6} dfns.chksum array",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "⍺-combination matrix of ⍳⍵",
    "GROUP": "",
    "KEYWORDS": "combination expressiontransformation Pascal'striangle fibonaccinumber Pascalstriangle table",
    "SYNTAX": "mat←m dfns.cmat n",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Approx expression timings",
    "GROUP": "",
    "KEYWORDS": "performance timing expressioncomparison histogram ⎕ML",
    "SYNTAX": "table←{opts←⍬} dfns.cmpx exprs",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Multi-column display",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "cmat←{gap←1 {max←⎕PW}} dfns.cols items",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Sum of (default decimal) columns",
    "GROUP": "",
    "KEYWORDS": "addition sum columnsum infiniteprecision",
    "SYNTAX": "sumvec←{base←10} dfns.colsum cols",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Component timestamp in IDN format",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "TimeStamp←TieNo dfns.compidn CompNo",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Proposition:consequence:alternative",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "conditionaloperator Helsingør hyperator co-operator cooperator",
    "SYNTAX": "rslt←(if dfns.cond then cond else) arg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Complex function drawing",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "complexnumbers drawing unitcircle fixpoint Mandelbrotset dual under",
    "SYNTAX": "{mbrot←0}(cxfn dfns.cxdraw) zoom",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Drop All Blanks",
    "GROUP": "",
    "KEYWORDS": "blanks compression",
    "SYNTAX": "rslt←{blank} dfns.dab argt",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "⎕TS format from day number",
    "GROUP": "",
    "KEYWORDS": "Gregoriancalendar 1752 calendar",
    "SYNTAX": "dates←{g←¯53799} dfns.date daynos",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Day number from ⎕TS format",
    "GROUP": "",
    "KEYWORDS": "date 1752 InternationalDayNumber",
    "SYNTAX": "daynos←{g←17520902} dfns.days dates",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Drop Ending Blanks",
    "GROUP": "",
    "KEYWORDS": "blanks compression",
    "SYNTAX": "rslt←{blank} dfns.deb argt",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Decimal from hexadecimal",
    "GROUP": "",
    "KEYWORDS": "hexadecimal decimalfromhex",
    "SYNTAX": "nums←{signed←0} dfns.dec cvex",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Extended ]defs",
    "GROUP": "",
    "KEYWORDS": "defs display latebinding ⎕NC ]defs",
    "SYNTAX": "defns←{names←0 {list←0 {space←⎕THIS}}} dfns.defs namelist",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Determinant of square matrix",
    "GROUP": "",
    "KEYWORDS": "determinant Gaussianmethod Hilbertmatrix table",
    "SYNTAX": "num←dfns.det nmat",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Depth-first spanning tree: graph ⍺ from vertex ⍵",
    "GROUP": "",
    "KEYWORDS": "depth-firstsearch spanningtree graph abstraction depthfirstsearch",
    "SYNTAX": "tree←graph dfns.dfspan from",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Display of function tree",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "tree derivedfunction combinator hook fork box-drawingcharacters boxdrawingcharacters",
    "SYNTAX": "tree←{slant←1}(fn dfns.dft) spread",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Interpret a throw of dice",
    "GROUP": "",
    "KEYWORDS": "guard diversions",
    "SYNTAX": "cvec←dfns.dice ?6 6",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Evaluation of multi-line D-expression",
    "GROUP": "",
    "KEYWORDS": "definefunction sessioninput ⎕SE REPL",
    "SYNTAX": "rslt←dfns.din ''",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Boxed sketch of nested array",
    "GROUP": "",
    "KEYWORDS": "displayofarrays box boxing Kumquat box-drawingcharacters nestedarray boxdrawingcharacters",
    "SYNTAX": "cmat←{dec←0 {cen←0}} dfns.disp array",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Boxed display of array",
    "GROUP": "",
    "KEYWORDS": "displayofarrays box boxing box-drawingcharacters boxdrawingcharacters",
    "SYNTAX": "cmat←dfns.display array",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Boxed display of array with axis lengths and subarray depths",
    "GROUP": "",
    "KEYWORDS": "displayofarrays box boxing box-drawingcharacters boxdrawingcharacters sub-array",
    "SYNTAX": "cmat←dfns.displayr array",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Boxed display of array with axis lengths",
    "GROUP": "",
    "KEYWORDS": "displayofarrays box boxing box-drawingcharacters boxdrawingcharacters",
    "SYNTAX": "cmat←dfns.displays array",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Levenshtein distance",
    "GROUP": "",
    "KEYWORDS": "stringcomparison fuzzy",
    "SYNTAX": "d←L dfns.dist R",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Drop Leading Blanks",
    "GROUP": "",
    "KEYWORDS": "blanks compression spaces",
    "SYNTAX": "rslt←{blank} dfns.dlb argt",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Drop Multiple Blanks",
    "GROUP": "",
    "KEYWORDS": "blanks compression spaces consecutive",
    "SYNTAX": "rslt←{blank} dfns.dmb argt",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Apply no-result function \"en passant\"",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "no-result is-yfunction do-yfunction enpassant noresult isyfunction doyfunction",
    "SYNTAX": "rslt←(dewy dfns.do) rarg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Show dfn with \"white dots\"",
    "GROUP": "",
    "KEYWORDS": "whitedots functionsformatting name-clashproblem stuff nameclashproblem",
    "SYNTAX": "crep←{dot←'·'} dfns.dots crep",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Draw over '*'s",
    "GROUP": "",
    "KEYWORDS": "box box-drawingcharacters diversions boxdrawingcharacters",
    "SYNTAX": "cmat←{marker←'*'} dfns.draw cmat",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Divide scan",
    "GROUP": "",
    "KEYWORDS": "scanoperators dividing scanning",
    "SYNTAX": "nvec←{axis} dfns.dscan nvec",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Reduced version of disp",
    "GROUP": "",
    "KEYWORDS": "boxing displayofarrays tape",
    "SYNTAX": "cmat←{topbar←1} dfns.dsp array",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Drop Trailing Blanks",
    "GROUP": "",
    "KEYWORDS": "blanks compression spaces",
    "SYNTAX": "rslt←{blank} dfns.dtb argt",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Drop eXtraneous Blanks",
    "GROUP": "",
    "KEYWORDS": "blanks compression spaces",
    "SYNTAX": "rslt←{blank} dfns.dxb argt",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "Function application",
    "CLASS": "Dop",
    "DESCRIPTION": "Fast each for pure operand function",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "each purefunction",
    "SYNTAX": "rslt←(⍺⍺ dfns.each) array",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Easter Sunday in year ⍵",
    "GROUP": "",
    "KEYWORDS": "date CouncilofNicaea canonpaschalis pervasivefunction histogram",
    "SYNTAX": "yyyymmdd←dfns.easter year",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Egyptian fractions",
    "GROUP": "",
    "KEYWORDS": "Egyptianfraction",
    "SYNTAX": "nvec←P dfns.efract Q",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Enclose-if-simple / link",
    "GROUP": "",
    "KEYWORDS": "link enclose-if-simple encloseifsimple",
    "SYNTAX": "nested←{left} dfns.eis right",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Condition f else g ..",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "conditionaloperator",
    "SYNTAX": "rslt←cond (⍺⍺ dfns.else ⍵⍵) argt",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "List ⍺-leaves of nested array",
    "GROUP": "",
    "KEYWORDS": "enlist nestedarray vector",
    "SYNTAX": "list←{leaves} dfns.enlist array",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Shell for Eide-number sums",
    "GROUP": "",
    "KEYWORDS": "Eidenumbers rationalnumber balancedternary hexadecimal shell REPL",
    "SYNTAX": "dfns.esh digits",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Return to calling environment",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "cvec←dfns.exit code",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "External references from dfn ⍵",
    "GROUP": "",
    "KEYWORDS": "externalreferences",
    "SYNTAX": "names←{expr←0} dfns.externs dfn",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Conversion to 32-bit floats as ⎕DR 83",
    "GROUP": "",
    "KEYWORDS": "32-bitfloatingpoint 32bitfloatingpoint",
    "SYNTAX": "v83←dfns.f32 nums",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Tail recursive factorial",
    "GROUP": "",
    "KEYWORDS": "tailrecursion accumulator factorial",
    "SYNTAX": "num←dfns.factorial num",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Prime factors of ⍵",
    "GROUP": "",
    "KEYWORDS": "primenumber",
    "SYNTAX": "nvec←dfns.factors numb",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Tail-recursive Fibonacci",
    "GROUP": "",
    "KEYWORDS": "tailrecursion accumulator fibonaccinumber goldenmean continuedfraction",
    "SYNTAX": "nvec←dfns.fibonacci num",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Apply function to native file tie",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "nativefile railwaydiagram",
    "SYNTAX": "rslt←(fun dfns.file) fname",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Find 'string' ⍵ in component file ⍺",
    "GROUP": "",
    "KEYWORDS": "find componentfile",
    "SYNTAX": "cnos←file dfns.filefind string",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Lines containing string(s) ⍵",
    "GROUP": "",
    "KEYWORDS": "name-clashproblem stringsearch nameclashproblem",
    "SYNTAX": "cmat←{space←⎕THIS} dfns.find string",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Fix function/operator rep",
    "GROUP": "",
    "KEYWORDS": "fixfunction",
    "SYNTAX": "{name}←dfns.fix rep",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Slower but elegant simulation of \"fork\" syntax",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "hook fork co-operator cooperator",
    "SYNTAX": "rslt←{larg} I dfns.fk J fk K rarg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Simulation of \"fork\" syntax",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "hook fork co-operator cooperator",
    "SYNTAX": "rslt←{larg} I _fk J fk_ K rarg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Array of functions",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "functionarray functionarray",
    "SYNTAX": "refs←(fn dfns.fnarray) fns",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Defined function differences",
    "GROUP": "",
    "KEYWORDS": "functionsdifference comparefunctions",
    "SYNTAX": "cmat←{excl} dfns.fndiff (fna fnb)",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "External refs from tradfn ⍵",
    "GROUP": "",
    "KEYWORDS": "functionreferences cross-reference crossreference",
    "SYNTAX": "cvecs←dfns.fnrefs func",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Function string replacement",
    "GROUP": "",
    "KEYWORDS": "stringreplacement",
    "SYNTAX": "{fns}←{space←⎕THIS} dfns.fnrepl (from to)",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Fold (reduce) from the left",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "reduction fold typenotation reducing folding",
    "SYNTAX": "rslt←ival (func dfns.foldl) vals",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Multiple selection of function list",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "conditionaloperator functionselection functionarray co-operator cooperator vector",
    "SYNTAX": "rslt←i j k··· F dfns.for G for H··· arg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Select (1↓⍴⍵)-cells from array ⍵",
    "GROUP": "",
    "KEYWORDS": "arrayindexing",
    "SYNTAX": "rslt←indx dfns.from array",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Gauss-Jordan elimination",
    "GROUP": "",
    "KEYWORDS": "Gauss-Jordan Hilbertmatrix IEEEFPprecision purefunction GaussJordan",
    "SYNTAX": "inv←{vals} dfns.gauss_jordan mat",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Greatest Common Divisor",
    "GROUP": "",
    "KEYWORDS": "greatestcommondivisor leastcommonmultiple tailrecursion",
    "SYNTAX": "num←num dfns.gcd num",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Text file ⍵ as nested vector",
    "GROUP": "",
    "KEYWORDS": "nativefile textfile Unicode list",
    "SYNTAX": "lines←{tabs←0 {ctype←80}} dfns.getfile filename",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "⍵-permutation of vertices of graph ⍺",
    "GROUP": "",
    "KEYWORDS": "unweightedgraph",
    "SYNTAX": "graph←graph dfns.gperm perm",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Hexadecimal from decimal",
    "GROUP": "",
    "KEYWORDS": "hexadecimal decimalfromhex",
    "SYNTAX": "cvex←{width} dfns.hex nums",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Hex dump of native file",
    "GROUP": "",
    "KEYWORDS": "hexadecimal macro nativefile destructiveassignment endian offsiderule",
    "SYNTAX": "{cmds←''} dfns.hexdump file",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "IEEE 754/854 binary floating point",
    "GROUP": "",
    "KEYWORDS": "hexadecimal endian DecimalFloatingPoint 128-bitFloatingPoint 128bitFloatingPoint",
    "SYNTAX": "hex←dfns.hexf num",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Extract html segments",
    "GROUP": "",
    "KEYWORDS": "XML XMLtag Kumquat",
    "SYNTAX": "segs←tag dfns.htx html",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Locations of item ⍺ in array ⍵",
    "GROUP": "",
    "KEYWORDS": "find index path pick location",
    "SYNTAX": "paths←item dfns.in array",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "⍵-index of notes in space ⍺",
    "GROUP": "",
    "KEYWORDS": "index",
    "SYNTAX": "indx←notespace dfns.index class",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Insert edge ⍵ in graph ⍺",
    "GROUP": "",
    "KEYWORDS": "graph",
    "SYNTAX": "graph←graph dfns.inslink (from to)",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Insert vertex ⍵ in graph ⍺",
    "GROUP": "",
    "KEYWORDS": "graph",
    "SYNTAX": "graph←graph dfns.insnode vertex",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Signed from unsigned integers",
    "GROUP": "",
    "KEYWORDS": "typeconversion unsigned integer pervasivefunction nativefile cast",
    "SYNTAX": "i←bits dfns.int u",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Inverse of real-valued function",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "functioninverse inverse Newton-Raphson absolutezero NewtonRaphson inversion",
    "SYNTAX": "rslt←{guess←1+⎕CT} (fn dfns.invr) argt",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Generalized iota",
    "GROUP": "",
    "KEYWORDS": "generialisediota generalised⍳ Unicode",
    "SYNTAX": "rslt←{array} dfns.iotag array",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Test for D function",
    "GROUP": "",
    "KEYWORDS": "testforD-function name-clashproblem testforDfunction nameclashproblem",
    "SYNTAX": "bool←dfns.isdfn name",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Subset of the Joy language",
    "GROUP": "",
    "KEYWORDS": "lists concatenative applicative Ackermann'sfunction Ackermannsfunction Metacircular",
    "SYNTAX": "stack←{repl←0} dfns.joy program",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Justify text array",
    "GROUP": "",
    "KEYWORDS": "justifytext aligntext",
    "SYNTAX": "rslt←{dirn←¯1} dfns.just chars",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Justify line-vector to ⍺ columns",
    "GROUP": "",
    "KEYWORDS": "justifytext aligntext linevector",
    "SYNTAX": "lvec←{cols} dfns.justify lvec",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Kaprekar's operation",
    "GROUP": "",
    "KEYWORDS": "sequence 6174 Kaprekar'soperation Kaprekarsoperation",
    "SYNTAX": "seq←dfns.k6174 nnnn",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Relationship between point and k-ball",
    "GROUP": "",
    "KEYWORDS": "K-ball sphere hypersphere Kball",
    "SYNTAX": "rslt←{c←1} dfns.kball p",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Relationship between point and k-cell",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "K-cell boundary hypercube Kcell",
    "SYNTAX": "rslt←b (f dfns.kcell) p",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Parse-category of name(s) ⍵",
    "GROUP": "",
    "KEYWORDS": "kind nameclass category namecolouring hybrid coloring",
    "SYNTAX": "kinds←dfns.kind namelist",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Kind Koloring of d-fnop named ⍵",
    "GROUP": "",
    "KEYWORDS": "namecolouring parsing kind Bunda-Gerthparser polymorphism selfie BundaGerthparser coloring",
    "SYNTAX": "kmap←{xk←(⊂,⊂∘kind)⎕NL-⍳10} dfns.kk fnop",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Hypersphere surface area",
    "GROUP": "",
    "KEYWORDS": "sphere hypersphere Newton-Raphson localmaximum K-sphere manifolds NewtonRaphson Ksphere",
    "SYNTAX": "area←dim dfns.ksphere radius",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Knight's Tour Chess Problem",
    "GROUP": "",
    "KEYWORDS": "chesspuzzle knight'stour knightstour graph treesearching diversions torus",
    "SYNTAX": "nmats←{sreq←1} dfns.kt (rows cols)",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Lower-casification",
    "GROUP": "",
    "KEYWORDS": "uppercase lowercase upperorlowercase caseinsensitive",
    "SYNTAX": "chars←dfns.lcase chars",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Total array ordering (TAO) comparison",
    "GROUP": "",
    "KEYWORDS": "sort quicksort Totalarrayordering order(ofarrays) comparearrays lexically lexicographically sorting reordering order",
    "SYNTAX": "precedes←this dfns.le that",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "John Conway's \"Game of Life\"",
    "GROUP": "",
    "KEYWORDS": "gameoflife cellularautomaton glider diversions Asteroids YouTube GoL",
    "SYNTAX": "bmat←dfns.life bmat",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Function power limit (fixpoint)",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "functionpower palindrome arithmetic-geometricmean goldenmean arithmeticgeometricmean",
    "SYNTAX": "rslt←(fun dfns.limit) arg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Evaluator for a subset of Scheme",
    "GROUP": "",
    "KEYWORDS": "Lisp Scheme closure Metacircular SICP lambdaexpression evaluator",
    "SYNTAX": "rslt←{eval←1} dfns.lisp expr",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "List from vector ⍵",
    "GROUP": "",
    "KEYWORDS": "accumulator lambdaexpression min(workspace) parsing lists cons",
    "SYNTAX": "list←dfns.list vect",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "List of functions",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "conditionaloperator listoffunctions co-operator cooperator vector",
    "SYNTAX": "rslt←{larg} {''} dfns.lof F lof G lof H ... rarg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Logical function array",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "conditionaloperator booleanfunctions truthtables",
    "SYNTAX": "rslt←larg (selector dfns.logic) rarg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Lindenmayer L-system expansion",
    "GROUP": "",
    "KEYWORDS": "L-Systems fractal rewriting termrewriting Turtlegraphics LSystems",
    "SYNTAX": "rslt←pvec dfns.lsys axiom",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Lines to nested vector",
    "GROUP": "",
    "KEYWORDS": "linevector list",
    "SYNTAX": "nvec←{sepr} dfns.ltov lvec",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "List traversal",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "accumulator lambdaexpression minworkspace parsing lists cons vector",
    "SYNTAX": "rslt←init (acc dfns.ltrav) list",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "McCarthy's M91 function",
    "GROUP": "",
    "KEYWORDS": "91",
    "SYNTAX": "m←dfns.m91 n",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Simple macro processor for bf",
    "GROUP": "",
    "KEYWORDS": "Brainfuck macro continuation-passingstyle continuationpassingstyle",
    "SYNTAX": "bfobj←(dfns.mac) src",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Find with wildcards",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "hits←patn {w←'*'} dfns.match array",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Mayan numbers",
    "GROUP": "",
    "KEYWORDS": "numbersystem stela calendar date astronomy vigesimalnumbersystem abacus",
    "SYNTAX": "cols←{base←1} dfns.mayan numb",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Kidz maze",
    "GROUP": "",
    "KEYWORDS": "diversions indexedassignment maze",
    "SYNTAX": "cmat←{⎕RL←2⊃⎕AI} dfns.maze shape",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Arithmetic mean",
    "GROUP": "",
    "KEYWORDS": "localnames standarddeviation APL'88 APL88 1988",
    "SYNTAX": "num←dfns.mean nvec",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Fast: Function memoisation",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "memoization cache persistentlocalvariable fibonaccinumber",
    "SYNTAX": "rslt←{larg} (⍺⍺ dfns.memo cache) rarg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Mastermind or \"cows and bulls\"",
    "GROUP": "",
    "KEYWORDS": "Mastermind gameofcowsandbulls diversions REPL",
    "SYNTAX": "dfns.mmind ⎕A[?4⍴6]",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Make Namespace from association list ⍵",
    "GROUP": "",
    "KEYWORDS": "namespace associationlist vector",
    "SYNTAX": "ref←dfns.mns defn",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Conversion to/from Morse code",
    "GROUP": "",
    "KEYWORDS": "Morsecode",
    "SYNTAX": "code←dfns.morse text",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Create playlist(s) for music directories",
    "GROUP": "",
    "KEYWORDS": "MP3(mediaplayer) playlist music mediaplayer(MP3) diversions",
    "SYNTAX": "{files}←{type←''} dfns.mp3 dirs",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Minus scan",
    "GROUP": "",
    "KEYWORDS": "scanoperators scanning",
    "SYNTAX": "nvec←{axis} dfns.mscan nvec",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Trim off trailing blank cols",
    "GROUP": "",
    "KEYWORDS": "blanks trailingblanks",
    "SYNTAX": "cmat←dfns.mtrim cmat",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Natural number arithmetic",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "naturalnumber infiniteprecision expressiontransformation",
    "SYNTAX": "cvec←larg (fn dfns.nats) rarg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "⎕path-aware ⎕NC",
    "GROUP": "",
    "KEYWORDS": "nameclassification extended⎕NC",
    "SYNTAX": "cvec←{path←⎕PATH} dfns.ncpath names",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "⍵ similar integers with sum ⍺",
    "GROUP": "",
    "KEYWORDS": "histogram",
    "SYNTAX": "nvec←p dfns.nicediv q",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Number of display lines for simple array",
    "GROUP": "",
    "KEYWORDS": "defaultdisplay linesofoutput",
    "SYNTAX": "n←dfns.nlines simple",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Share arrays across space tree",
    "GROUP": "",
    "KEYWORDS": "packing compression enlist",
    "SYNTAX": "saved←{seed} dfns.nspack ref",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Pick'th fn applied to arg",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "functionarray conditionaloperator co-operator cooperator",
    "SYNTAX": "rslt←pick dfns.of F of G of H ... arg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Sequential test",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "lazyevaluation sequentialtest adjacentguard &&",
    "SYNTAX": "rslt←(f dfns.or g) arg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Oscillate - probably returns 1",
    "GROUP": "",
    "KEYWORDS": "Oscillate cashprize wondrousnumber Gödel,Escher,Bach Goedel,Escher,Bach GödelEscherBach GodelEscherBach GoedelEscherBach engineer'sproof engineersproof",
    "SYNTAX": "num←dfns.osc num",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Saves WS by sharing subarrays",
    "GROUP": "",
    "KEYWORDS": "compression arraysharing sub-array",
    "SYNTAX": "array←dfns.pack array",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Quad-tree packing",
    "GROUP": "",
    "KEYWORDS": "packing compression quad-tree quadtree",
    "SYNTAX": "rslt←{cmp←1} dfns.pack4 image",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Pack a simple array",
    "GROUP": "",
    "KEYWORDS": "packing compression",
    "SYNTAX": "cmp←{cmp←1} dfns.packB exp",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Pack char array to boolean vector",
    "GROUP": "",
    "KEYWORDS": "packing compression encryption list",
    "SYNTAX": "cmp←{cmp←1} dfns.packD data",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Huffman packing",
    "GROUP": "",
    "KEYWORDS": "packing compression Huffmancode",
    "SYNTAX": "cmp←{cmp←1} dfns.packH exp",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Null packing",
    "GROUP": "",
    "KEYWORDS": "packing compression stuff",
    "SYNTAX": "cmp←{cmp←1} dfns.packN exp",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Assorted uniQues packer",
    "GROUP": "",
    "KEYWORDS": "packing compression",
    "SYNTAX": "cmp←{cmp←1} dfns.packQ data",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Run-Length Encoding (RLE packing)",
    "GROUP": "",
    "KEYWORDS": "packing compression run-lengthencoding runlengthencoding",
    "SYNTAX": "cmp←{cmp←1} dfns.packR exp",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Shannon-Fano packing",
    "GROUP": "",
    "KEYWORDS": "packing compression Shannon-Fano ShannonFano",
    "SYNTAX": "cmp←{cmp←1} dfns.packS exp",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Simple text vector packager",
    "GROUP": "",
    "KEYWORDS": "packing compression list",
    "SYNTAX": "cmp←{cmp←1} dfns.packT exp",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Unique packing",
    "GROUP": "",
    "KEYWORDS": "packing compression",
    "SYNTAX": "cmp←{cmp←1} dfns.packU exp",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "TeXt Packer",
    "GROUP": "",
    "KEYWORDS": "packing compression",
    "SYNTAX": "cmp←{cmp←1} dfns.packX txt",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Abraham Lempel, Jacob Ziv, Terry Welch",
    "GROUP": "",
    "KEYWORDS": "packing compression suffixtrie Lempel-Ziv-Welch LempelZivWelch",
    "SYNTAX": "cmp←{cmp←12} dfns.packZ exp",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Bunda-Gerth parse of expression ⍵",
    "GROUP": "",
    "KEYWORDS": "parsing currying Bunda-Gerthparser bindingstrength BIDMAS BundaGerthparser",
    "SYNTAX": "tree←{trace←0} defn dfns.parse expr",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Shortest path between ⍵ in graph ⍺",
    "GROUP": "",
    "KEYWORDS": "unweightedgraph breadth-firstsearch breadthfirstsearch",
    "SYNTAX": "vvec←graph dfns.path (fm to)",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "⍵-th prime",
    "GROUP": "",
    "KEYWORDS": "primenumber J",
    "SYNTAX": "p←dfns.pco ⍵",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "1 iff ⍵ is not prime",
    "GROUP": "",
    "KEYWORDS": "primenumber J nonprime? non-prime? composite?",
    "SYNTAX": "b←0 dfns.pco ⍵",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "1 iff ⍵ is prime",
    "GROUP": "",
    "KEYWORDS": "primenumber J prime?",
    "SYNTAX": "b←1 dfns.pco ⍵",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "number of primes less than ⍵",
    "GROUP": "",
    "KEYWORDS": "primenumber J",
    "SYNTAX": "n←¯1 dfns.pco ⍵",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "prime factors and exponents",
    "GROUP": "",
    "KEYWORDS": "primenumber J",
    "SYNTAX": "v←2 dfns.pco ⍵",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "prime factorization of ⍵",
    "GROUP": "",
    "KEYWORDS": "primenumber J",
    "SYNTAX": "v←3 dfns.pco ⍵",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "next prime larger than ⍵",
    "GROUP": "",
    "KEYWORDS": "primenumber J",
    "SYNTAX": "p←4 dfns.pco ⍵",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "next prime smaller than ⍵",
    "GROUP": "",
    "KEYWORDS": "primenumber J",
    "SYNTAX": "p←¯4 dfns.pco ⍵",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "m+b/⍳⍴b are all the primes between m and n, where ⍵≡m,n",
    "GROUP": "",
    "KEYWORDS": "primenumber J",
    "SYNTAX": "b←10 dfns.pco ⍵",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Scalar pervasion",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "scalar-wise pervasivefunction scalarwise Pervade",
    "SYNTAX": "rslt←{lft} (fun dfns.perv) rgt",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Phinary representation of numbers ⍵",
    "GROUP": "",
    "KEYWORDS": "goldenmean goldenrectangle phinarynumber",
    "SYNTAX": "pnum←{fmt←1} (dfns.phinary) nums",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Permutation matrix of ⍳⍵",
    "GROUP": "",
    "KEYWORDS": "permutationmatrix table",
    "SYNTAX": "mat←dfns.pmat n",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Polar from/to cartesian coordinates",
    "GROUP": "",
    "KEYWORDS": "polarcoordinates cartesiancoordinates coordinates",
    "SYNTAX": "to←{dirn←1} dfns.polar fm",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Explicit function power",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "poweroperator functionpower fibonaccinumber",
    "SYNTAX": "rslt←count (fun dfns.pow) argt",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Partitioned reduction",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "partionedreduction sub-vectors segmented sub-lists subvectors sublists",
    "SYNTAX": "rslt←part (redn dfns.pred) rarg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Performance profiling",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "performance timing profiling monitor ⎕profile",
    "SYNTAX": "rslt←{larg} (func dfns.profile subs) rarg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Put rows to text-file",
    "GROUP": "",
    "KEYWORDS": "nativefile textfile Unicode",
    "SYNTAX": "{size}←{term←2} dfns.putfile (fid rows)",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "The N-Queens Problem",
    "GROUP": "",
    "KEYWORDS": "diversions chesspuzzle treesearching purefunction N-Queens YouTube NQueens",
    "SYNTAX": "cmats←dfns.queens N",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "A hard, simple problem",
    "GROUP": "",
    "KEYWORDS": "diversions puzzle",
    "SYNTAX": "soln←dfns.quzzle grid",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Numeric range classification",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "indx←brks dfns.range nums",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Rational approximation to real ⍵",
    "GROUP": "",
    "KEYWORDS": "rationalnumber Pi numberoftheBeast",
    "SYNTAX": "rats←{tolerance←⎕CT} dfns.rational nums",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Rational arithmetic",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "rationalnumber primenumber",
    "SYNTAX": "rslt←{larg} (fn dfns.rats) rarg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "⍺⍺-rational sum of ⍺ and ⍵",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "Eidenumbers rationalnumber balancedternary skewedfour",
    "SYNTAX": "sum←{larg} (digs dfns.ratsum) rarg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Trav: parent-first, ravt: parent last",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "tree currying typenotation fibonaccinumber N-Queens NQueens",
    "SYNTAX": "rslt←ival (accm dfns.ravt subs) tree",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Red-black trees",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "tree red-blacktrees binarysearchtree enlist redblacktrees",
    "SYNTAX": "rslt←{larg) (op dfns.redblack) rarg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Space reference match",
    "GROUP": "",
    "KEYWORDS": "comparenamespaces namespacecomparison",
    "SYNTAX": "match←this dfns.refmatch that",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Reformat dfn/op representation",
    "GROUP": "",
    "KEYWORDS": "functionsformatting",
    "SYNTAX": "crep←{tabs csep←4} dfns.refmt crep",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Refs path from root to ⍵",
    "GROUP": "",
    "KEYWORDS": "parentspace ancestorspace namespacereferences",
    "SYNTAX": "refs←dfns.refpath ref",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Vector of sub-space references",
    "GROUP": "",
    "KEYWORDS": "refs namespacereferences ⎕WX root-space rootspace list",
    "SYNTAX": "rvec←{exclude←⍬} dfns.refs ref",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Ref to saved ws ⍵",
    "GROUP": "",
    "KEYWORDS": "workspacereferences externalworkspace workspace remoteexecution",
    "SYNTAX": "ref←dfns.refws wsid",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Remove edge ⍵ from graph ⍺",
    "GROUP": "",
    "KEYWORDS": "unweightedgraph",
    "SYNTAX": "graph←graph dfns.remlink (from to)",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Graph ⍺ with vertex ⍵ removed",
    "GROUP": "",
    "KEYWORDS": "unweightedgraph",
    "SYNTAX": "graph←graph dfns.remnode vertex",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Encapsulate function/operator",
    "GROUP": "",
    "KEYWORDS": "functionarray encapsulatefunction",
    "SYNTAX": "enc←dfns.rep name",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Read-eval-print loop",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "loop shell error-guard,dynamic REPL shell errorguard,dynamic",
    "SYNTAX": "{prompt←4↑''} (eval dfns.repl) stop",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Perfect Ripple Shuffle",
    "GROUP": "",
    "KEYWORDS": "shuffle grade carddeck diversions riffleshuffle",
    "SYNTAX": "nvec←dfns.ripple nvec",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "APL source with comments removed",
    "GROUP": "",
    "KEYWORDS": "functionsformatting commentremoval one-liner oneliner",
    "SYNTAX": "line←dfns.rmcm line",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Roman numeral arithmetic",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "romannumerals numbersystem diversions",
    "SYNTAX": "res←{sin} (fvn dfns.roman) dex",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "⍺'th root",
    "GROUP": "",
    "KEYWORDS": "defaultleftargument ⍺throot",
    "SYNTAX": "num←{num←2} dfns.root num",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Real roots of quadratic",
    "GROUP": "",
    "KEYWORDS": "realrootsofquadratic complexnumbers",
    "SYNTAX": "nvec←dfns.roots triple",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Operand function applied to argument rows",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "vector-wise vectorwise",
    "SYNTAX": "rslt←(fun dfns.rows) {array}",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Round-robin tournament",
    "GROUP": "",
    "KEYWORDS": "Round-robintournament combination Roundrobintournament",
    "SYNTAX": "rounds←dfns.rr players",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Select and modify",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "selectandmodify destructiveassignment purefunction",
    "SYNTAX": "new←{larg} (sel dfns.sam mod) old",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Apply function Simple-Array-Wise",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "simple-array-wise simplearraywise",
    "SYNTAX": "rslt←{left} (fun dfns.saw) right",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Simple Binary Search Trees",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "tree binarysearchtree typenotation enlist",
    "SYNTAX": "rslt←{larg} (op dfns.sbst) rarg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Strongly connected components of directed graph ⍵",
    "GROUP": "",
    "KEYWORDS": "Stronglyconnectedcomponents graph depth-firstsearch DAG depthfirstsearch",
    "SYNTAX": "C←{trace←0} dfns.scc G",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Breadth-first search of graph ⍺",
    "GROUP": "",
    "KEYWORDS": "unweightedgraph breadth-firstsearch breadthfirstsearch",
    "SYNTAX": "vvec←graph dfns.search from",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "⍺-separated segments of vector ⍵",
    "GROUP": "",
    "KEYWORDS": "words split text partition list",
    "SYNTAX": "vecs←seps dfns.segs vec",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "⍺-selection of items from vector ⍵",
    "GROUP": "",
    "KEYWORDS": "indexedassignment destructiveassignment purefunction list",
    "SYNTAX": "rslt←indx dfns.select avec",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Shannon entropy of message ⍵",
    "GROUP": "",
    "KEYWORDS": "Entropy informationtheory",
    "SYNTAX": "entropy←dfns.shannon string",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Sieve of Eratosthenes",
    "GROUP": "",
    "KEYWORDS": "primenumber sieve",
    "SYNTAX": "nvec←dfns.sieve nvec",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Breadth-first span tree for graph ⍺ from vertex ⍵",
    "GROUP": "",
    "KEYWORDS": "unweightedgraph spanningtree breadth-firstsearch breadthfirstsearch",
    "SYNTAX": "tree←graph dfns.span fm",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Splay trees",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "tree binarysearchtree enlist",
    "SYNTAX": "rslt←{larg} (op dfns.splay) rarg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Compress multiple blanks",
    "GROUP": "",
    "KEYWORDS": "compression linevector consecutive",
    "SYNTAX": "cvec←dfns.squeeze cvec",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Approx alternative to xutils' ss",
    "GROUP": "",
    "KEYWORDS": "ssxutils stringreplacement substitution",
    "SYNTAX": "cvec←dfns.ss (srce from into)",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Matrix search/replace",
    "GROUP": "",
    "KEYWORDS": "ssxutils stringreplacement substitution table",
    "SYNTAX": "cmat←dfns.ssmat (cmat from into)",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Approx alternative to xutils ss",
    "GROUP": "",
    "KEYWORDS": "ssxutils stringreplacement substitution",
    "SYNTAX": "cvec←{prim supp} dfns.ssword (srce from into)",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Postage stamps for ⍵",
    "GROUP": "",
    "KEYWORDS": "postagestamps graph balancedternary",
    "SYNTAX": "nvec←{denoms←1 5 6 10 26 39 43} dfns.stamps value",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Spanning-tree path lengths",
    "GROUP": "",
    "KEYWORDS": "graph spanningtree path",
    "SYNTAX": "dvec←dfns.stdists tree",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Path through spanning tree ⍺ to vertex ⍵",
    "GROUP": "",
    "KEYWORDS": "graph spanningtree path",
    "SYNTAX": "vvec←tree dfns.stpath to",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Spanning tree paths",
    "GROUP": "",
    "KEYWORDS": "graph spanningtree path",
    "SYNTAX": "pvec←dfns.stpaths tree",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Vector substitution",
    "GROUP": "",
    "KEYWORDS": "stringreplacement substitution list",
    "SYNTAX": "array←(from repl) dfns.subs array",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Is ⍺ a subvector of ⍵?",
    "GROUP": "",
    "KEYWORDS": "subvector? subset? sub-sequence? subsequence? substring sub-string sub-vector sub-list sublist",
    "SYNTAX": "yes←larg dfns.subvec rarg",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Solution vector for Sudoku problem ⍵",
    "GROUP": "",
    "KEYWORDS": "diversions gameofsudoku K YouTube list",
    "SYNTAX": "svec←{shape←⍬⍴(⍴⍵)*÷2} dfns.sudoku prob",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Trace of function application",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "trace monitor debugging",
    "SYNTAX": "rslt←{larg} (func dfns.tc) rarg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Run test script: no news => good news",
    "GROUP": "",
    "KEYWORDS": "qualityassurance unittesting autoformat QA testing",
    "SYNTAX": "{ok}←{opts←'q'} dfns.test script",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Char matrix from tree(s)",
    "GROUP": "",
    "KEYWORDS": "treesformatting tree table",
    "SYNTAX": "cmat←dfns.tfmt tree",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Function application time",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "performance monitor timing",
    "SYNTAX": "{rslt}←{larg} (fun dfns.time) rarg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Time-stamped message",
    "GROUP": "",
    "KEYWORDS": "time date",
    "SYNTAX": "cvec←{time←⎕TS} dfns.timestamp cvec",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Array from TreeView style tree",
    "GROUP": "",
    "KEYWORDS": "tree treesformatting",
    "SYNTAX": "tree←dfns.tnest (depth leaves)",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Sequence ⍺ .. ⍵",
    "GROUP": "",
    "KEYWORDS": "sequence stepping … seq()",
    "SYNTAX": "nvec←from dfns.to unto",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Lex of APL src line",
    "GROUP": "",
    "KEYWORDS": "parsing lexicalscan",
    "SYNTAX": "cvecs←{nv←0} dfns.tokens cvec",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Function limit 'trajectory'",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "trajectory debugging Newton-Raphson sequence NewtonRaphson",
    "SYNTAX": "vec←(fun dfns.traj) arg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Generic depth-first tree traversal",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "tree currying typenotation fibonaccinumber N-Queens NQueens",
    "SYNTAX": "rslt←ival (accm dfns.trav subs) tree",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Display of namespace tree",
    "GROUP": "",
    "KEYWORDS": "workspace name-clashproblem nameclashproblem",
    "SYNTAX": "cvec←{maxcols←⎕PW} dfns.tree space",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Flying-turtle graphics",
    "GROUP": "",
    "KEYWORDS": "Turtlegraphics L-Systems fractal palindrome Flyingturtle polyhedron LSystems",
    "SYNTAX": "{lines}←{defs←default} dfns.turtle cmds",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "TreeView style from nested array",
    "GROUP": "",
    "KEYWORDS": "tree",
    "SYNTAX": "(depth leaves)←dfns.tview tree",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Widen ⍵ to type ⍺",
    "GROUP": "",
    "KEYWORDS": "dataconversion type ⎕DR",
    "SYNTAX": "rslt←code dfns.type array",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Upper-casification",
    "GROUP": "",
    "KEYWORDS": "uppercase lowercase upperorlowercase caseinsensitive",
    "SYNTAX": "chars←dfns.ucase chars",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Unification of expressions",
    "GROUP": "",
    "KEYWORDS": "unification parsing polymorphism",
    "SYNTAX": "expr←vars dfns.unify expr expr ···",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Conditional function power",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "conditionaloperator",
    "SYNTAX": "rslt←(func dfns.until cond) argt",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Replace [LF] with blanks",
    "GROUP": "",
    "KEYWORDS": "text wordswrapping linevector",
    "SYNTAX": "cvec←dfns.unwrap lvec",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Reference to ancestor space",
    "GROUP": "",
    "KEYWORDS": "parentspace ancestorspace namespacereferences",
    "SYNTAX": "sref←{from←⎕THIS} dfns.up gens",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Char vector from UTF-8 file ⍵",
    "GROUP": "",
    "KEYWORDS": "UTF-8 encoding Unicode UTF8 list",
    "SYNTAX": "cvec←dfns.utf8get fid",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Char vector ⍺ to UTF-8 file ⍵",
    "GROUP": "",
    "KEYWORDS": "UTF-8 encoding Unicode UTF8 list",
    "SYNTAX": "{size}←cvec dfns.utf8put fid",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Vector of functions",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "functionarray vectoroffunctions fork co-operator cooperator list",
    "SYNTAX": "rslt←{larg} {''} dfns.vof F vof G vof ··· rarg",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Capitalise first letters of names",
    "GROUP": "",
    "KEYWORDS": "diversions capitalisation",
    "SYNTAX": "caps←{ack ign←'' ''} dfns.von chars",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Nested vector to lines",
    "GROUP": "",
    "KEYWORDS": "linevector list",
    "SYNTAX": "lvec←{sepr} dfns.vtol nvec",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Remove trailing blanks",
    "GROUP": "",
    "KEYWORDS": "blanks compression",
    "SYNTAX": "cvec←dfns.vtrim cvec",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Variable-wise: apply ⍺⍺ to each var in space ⍵",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "variable-wise variablewise",
    "SYNTAX": "rslt←(fn dfns.vwise) ref",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Cost vector for path ⍵ through weighted graph ⍺",
    "GROUP": "",
    "KEYWORDS": "weightedgraph costvector list",
    "SYNTAX": "cvec←wgraph dfns.wcost path",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dop",
    "DESCRIPTION": "Conditional function power",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "conditionaloperator",
    "SYNTAX": "rslt←(func dfns.while cond) argt",
    "TYPE": ""
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Minimum Spanning Tree for weighted graph ⍺",
    "GROUP": "",
    "KEYWORDS": "weightedgraph spanningtree mininumspanningtree",
    "SYNTAX": "tree←wug dfns.wmst root",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Source vector split into words",
    "GROUP": "",
    "KEYWORDS": "text list",
    "SYNTAX": "cvecs←{prim supp} dfns.words cvec",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Quickest path from/to ⍵ in weighted graph ⍺",
    "GROUP": "",
    "KEYWORDS": "weightedgraph path destructiveassignment indexedassignment",
    "SYNTAX": "path←wgraph dfns.wpath (from to)",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Wrap word vector at ⍺ columns",
    "GROUP": "",
    "KEYWORDS": "words text linevector transitiveclosure list",
    "SYNTAX": "lvec←{cols←⎕PW} dfns.wrap cvec",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Wrap text paras in note vect",
    "GROUP": "",
    "KEYWORDS": "words text linevector box-drawingcharacters boxdrawingcharacters",
    "SYNTAX": "note←{new←⎕PW {old←⎕PW}} dfns.wrapnote note",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Workspace differences",
    "GROUP": "",
    "KEYWORDS": "compareworkspaces workspace name-clashproblem nameclashproblem",
    "SYNTAX": "{excl←'⍵'} dfns.wsdiff (wsa wsb)",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Merge saved ws into current active ws",
    "GROUP": "",
    "KEYWORDS": "workspace workspacemerge",
    "SYNTAX": "{protected←0} dfns.wsmerge wsid",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Spanning tree for weighted graph ⍺ from ⍵",
    "GROUP": "",
    "KEYWORDS": "weightedgraph spanningtree",
    "SYNTAX": "tree←wgraph dfns.wspan from",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "WS required to execute expression ⍵",
    "GROUP": "",
    "KEYWORDS": "performance monitor fudgefactor calibration",
    "SYNTAX": "bytes←dfns.wsreq expr",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Fast multi-digit power using FFT",
    "GROUP": "",
    "KEYWORDS": "FastFourierTransform",
    "SYNTAX": "digits←digits dfns.xpower number",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Extract refs vector from array ⍵",
    "GROUP": "",
    "KEYWORDS": "namespacereferences list",
    "SYNTAX": "refs←dfns.xrefs array",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Expand/compress HT chars",
    "GROUP": "",
    "KEYWORDS": "tabexpansion horizontaltabs adjacent1s flipflopRS",
    "SYNTAX": "cvec←{tabstops←8} dfns.xtabs cvec",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Dfn",
    "DESCRIPTION": "Fast multi-digit product using FFT",
    "GROUP": "",
    "KEYWORDS": "FastFourierTransform convolution polynomial",
    "SYNTAX": "z←x dfns.xtimes y",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Dfn",
    "DESCRIPTION": "Validate inverted table",
    "GROUP": "",
    "KEYWORDS": "matrix check correct",
    "SYNTAX": "{0::0⋄1⊣8⌶⍨⍵}",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Dop",
    "DESCRIPTION": "Over: preprocess (g) arguments before applying main function (f)",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "circlediaeresis on ⍥",
    "SYNTAX": "X f{(⍵⍵ ⍺)⍺⍺(⍵⍵ ⍵)}g Y",
    "TYPE": "Dyadic Functtion"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Dop",
    "DESCRIPTION": "Under: preprocess (g) arguments before applying main function (f), then undo preprocessing",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "deldiaeresis computationalunder dual while ⍢",
    "SYNTAX": "X f{⍺←⊢ ⋄ ⍺⍺⍣¯1⊢(⍵⍵ ⍺)⍺⍺(⍵⍵ ⍵)}g Y",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Dop",
    "DESCRIPTION": "Under: apply main function (f) to selection (g) of arguments",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "deldiaeresis computationalunder dual while ⍢",
    "SYNTAX": "X f{⍺←{⍵ ⋄ ⍵⍵} ⋄ w←⍵ ⋄ ((⍵⍵)w)←(⍵⍵ ⍺)⍺⍺(⍵⍵ ⍵) ⋄ w}g Y",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Type: 'a' 1 ⎕NULL → ' ' 0 ⎕NULL (∊ with ⎕ML←0)",
    "GROUP": "Non-scalar function",
    "KEYWORDS": "prototype ∊ ⍷",
    "SYNTAX": "(⊃0⍴⊂)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Inverse of monadic ⍸ with optional result shape as left argument",
    "GROUP": "Non-scalar Function",
    "KEYWORDS": "truesat ⍸⍣¯1 inversion",
    "SYNTAX": "{⍺←0⌈⊃⌈/⍵ ⋄ 1@⍵⊢⍺⍴0}Yv",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Dop",
    "DESCRIPTION": "Reverse composition: g on f X and Y, that is, (f X) g Y",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "jotunderbar composewith bind ringunderbar functioncomposition ⍛",
    "SYNTAX": "X f{⍵ ⍵⍵⍨⍺⍺ ⍺}g Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Tacit",
    "DESCRIPTION": "Split compose: f between g X and h Y, that is, (g X) f (h Y)",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "X f⍨∘g⍨∘h Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Tacit",
    "DESCRIPTION": "Split compose: f between g X and h Y, that is, (g X) f (h Y)",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "X f⍨∘g⍨∘h Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Tacit",
    "DESCRIPTION": "Nub sieve: mask for major cells to leave the distinct (∪Y)",
    "GROUP": "Non-Scalar Function",
    "KEYWORDS": "unique Boolean indication ⍧",
    "SYNTAX": "(⍳∘≢=(⍳⍨∪⍳⊢))Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dfn",
    "DESCRIPTION": "Reshape (⍴) Y to shape Iv, allowing ¯1 to automatically determine missing length",
    "GROUP": "",
    "KEYWORDS": "mold form dimension array autoshape",
    "SYNTAX": "Iv{⍵⍴⍨⍺×@(<∘0)⍨(×/⍴⍵)÷×/⍺~0}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "Select major cells Iv of Y",
    "GROUP": "Non-scalar function",
    "KEYWORDS": "rightshoeunderbar saneindexing ⊇",
    "SYNTAX": "Iv⌷⍨∘⊂⍨Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Tacit",
    "DESCRIPTION": "Self-classify: table of unique vs all major cells of Y",
    "GROUP": "Non-scalar function",
    "KEYWORDS": "nub distinctitems uniqueelemenets matrix",
    "SYNTAX": "((∪∘.=⊢)⍳⍨)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Accurately sum a vector of floating point numbers",
    "GROUP": "",
    "KEYWORDS": "sum floats precisionloss imprecision IEEE754 64-bit IEEE754-2008 128-bit binaryfloatingpoint list",
    "SYNTAX": "+/⍒∘|⊃¨⊂",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Tacit",
    "DESCRIPTION": "Apply f between vector Mv and each column of Nm",
    "GROUP": "",
    "KEYWORDS": "rank suffixagreement columns distribute columwise column-wise list dimensions",
    "SYNTAX": "Mv(f⍤0 1)Nm",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Tacit",
    "DESCRIPTION": "Apply f between vector Mv and each row of Nm",
    "GROUP": "",
    "KEYWORDS": "rank prefixargeement rows distribute rowwise row-wise list dimensions",
    "SYNTAX": "Mv(f⍤1)Nm",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "All indices of array Y",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(⍳⍴)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "All axes of array Y",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "⍳∘≢∘⍴Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "All row indices of matrix Ym",
    "GROUP": "",
    "KEYWORDS": "enumerate rows table",
    "SYNTAX": "⍳∘≢Ym",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "All column indices of array Ym",
    "GROUP": "",
    "KEYWORDS": "enumerate columns",
    "SYNTAX": "(⍳0⊥⍴)Ym",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "All divisors of Js (1=⎕IO)",
    "GROUP": "",
    "KEYWORDS": "factorisation factorization",
    "SYNTAX": "(∪⍳∨⊢)Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "All ones after the first one",
    "GROUP": "",
    "KEYWORDS": "1s 0",
    "SYNTAX": "∨\\B",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "All ones after the first zero",
    "GROUP": "",
    "KEYWORDS": "1s 0",
    "SYNTAX": "≤\\B",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "All ones to the first zero",
    "GROUP": "",
    "KEYWORDS": "1s 0",
    "SYNTAX": "∧\\B",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "All zeros except the first one",
    "GROUP": "",
    "KEYWORDS": "1 0s zeroes",
    "SYNTAX": "<\\B",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "Tacit",
    "DESCRIPTION": "Whether Dv is a valid identifier",
    "GROUP": "",
    "KEYWORDS": "symbol name validity allowed valid? name? identifier? legal",
    "SYNTAX": "(¯1≠⎕NC)Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Alternating product of N",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "÷/N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Alternating sequence of Jv[1] ones, Jv[2] zeros, Jv[3] ones, …",
    "GROUP": "",
    "KEYWORDS": "1s 0s zeroes naughts",
    "SYNTAX": "{⍵/1 0⍴⍨≢⍵}Jv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Alternating series (1,-1,2,-2, …) of length Js",
    "GROUP": "",
    "KEYWORDS": "oeisA001057 oeisA1057",
    "SYNTAX": "-\\∘⍳Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Alternating sum of N",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "-/N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Annuity coefficient: I periods at interest N",
    "GROUP": "",
    "KEYWORDS": "loan",
    "SYNTAX": "I(⊢÷∘⍉1-(1+⊢)∘.×∘-⊣)N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Area of a polygon given Mv,Nv endpoints",
    "GROUP": "",
    "KEYWORDS": "shoelaceformula",
    "SYNTAX": "Mv(|2÷⍨+.×∘(¯1∘⌽-1∘⌽))Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Area of a triangle given side length (3=≢Nv)",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(0.5*⍨0∘,×.-0.5×+/)Nv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Arithmetic progression vector: Js steps of Ms",
    "GROUP": "",
    "KEYWORDS": "sequence",
    "SYNTAX": "Ms×∘⍳Js",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "Tacit",
    "DESCRIPTION": "Is Dv defined",
    "GROUP": "",
    "KEYWORDS": "symboltable exists",
    "SYNTAX": "(0<⎕NC)Dv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "Dfn",
    "DESCRIPTION": "Assign value Y to name Cv",
    "GROUP": "",
    "KEYWORDS": "assignment name-value",
    "SYNTAX": "Cv{⍎⍺,'←⍵'}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Attach column numbers to a matrix",
    "GROUP": "",
    "KEYWORDS": "headings table",
    "SYNTAX": "(⍳∘⊃∘⌽∘≢⍪⊢)Ym",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Attach row numbers to a matrix",
    "GROUP": "",
    "KEYWORDS": "labels table",
    "SYNTAX": "(⍳∘≢,⊢)Ym",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Beta function",
    "GROUP": "",
    "KEYWORDS": "B(x,y) Β(x,y) B() Β() beta() Ꞵ",
    "SYNTAX": "Ms(+÷××⊣!+)Ns",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Multivariate Beta Function",
    "GROUP": "",
    "KEYWORDS": "B() Β() beta() Ꞵ",
    "SYNTAX": "((×/∘!-∘1)÷∘!¯1++/)N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Boolean first ones in each group of ones",
    "GROUP": "",
    "KEYWORDS": "beginningsofruns 1s",
    "SYNTAX": "(2</0∘,)B",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Tacit",
    "DESCRIPTION": "Boolean items in X that are not in Y",
    "GROUP": "",
    "KEYWORDS": "isnotin membership notcontainedin hasn't doesnothave",
    "SYNTAX": "X(~∊)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Boolean gaps of lengths Nv after each one",
    "GROUP": "",
    "KEYWORDS": "runs 1",
    "SYNTAX": "(1/⍨∘,1,∘⍪-)Nv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Boolean last ones in each group of ones",
    "GROUP": "",
    "KEYWORDS": "endsofruns 1s",
    "SYNTAX": "(2>/,∘0)B",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Tacit",
    "DESCRIPTION": "Boolean one at first occurrence of X in Y",
    "GROUP": "",
    "KEYWORDS": "findfirstin search locatefirst 1",
    "SYNTAX": "X(<\\@(≡¨⍨)⍷)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Tacit",
    "DESCRIPTION": "Boolean rows of Ym starting with X",
    "GROUP": "",
    "KEYWORDS": "findfirstin search locatefirst",
    "SYNTAX": "Xv(⊣/⍷)Ym",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Tacit",
    "DESCRIPTION": "Boolean rows of Xm all equal to scalar Ys",
    "GROUP": "",
    "KEYWORDS": "findall lookup rows",
    "SYNTAX": "Xm∧.=Ys",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Tacit",
    "DESCRIPTION": "Boolean test: Are all items of Y unique?",
    "GROUP": "",
    "KEYWORDS": "alldifferent noduplicates nodups",
    "SYNTAX": "(∪≡⊢)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Boolean test: Are all true?",
    "GROUP": "",
    "KEYWORDS": "forall ∀",
    "SYNTAX": "∧/∘,B",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Boolean test: Are any true?",
    "GROUP": "",
    "KEYWORDS": "forany thereexists ∃",
    "SYNTAX": "∨/∘,B",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Boolean test: Are none true?",
    "GROUP": "",
    "KEYWORDS": "theredoesnotexist ∄",
    "SYNTAX": "(~∨/∘,)B",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Boolean test: Is Y a simple character array?",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(⍕≡⊢)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Boolean test: Is Y a vector?",
    "GROUP": "",
    "KEYWORDS": "rank1",
    "SYNTAX": "(1=≢∘⍴)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Boolean test: Is Ym anti-symmetric?",
    "GROUP": "",
    "KEYWORDS": "antisymmetric skewsymmetric skew-symmetric",
    "SYNTAX": "(-≡⍉)Ym",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Boolean test: Is Ym symmetric?",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(⍉≡⊢)Ym",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Boolean test: Is Y numeric?",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(1=2|⎕DR)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Boolean test: Is Y Boolean?",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(11=⎕DR)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Boolean test: Is Y character?",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(0 2∊⍨⎕DR)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Boolean test: Is Xv permutation of Yv?",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Xv(∊∧.∧∊⍨)Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Boolean test: Is Yv permutation vector?",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(⊢≡∘⍋⍋)Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Boolean Parity",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "≠/B",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Tacit",
    "DESCRIPTION": "Cartesian product: all pairs of X and Y",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "X∘.,Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Make vector if scalar",
    "GROUP": "",
    "KEYWORDS": "minimumrank1 makenonscalar list",
    "SYNTAX": "1∘/Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Change sign of N on condition A",
    "GROUP": "",
    "KEYWORDS": "conditionalnegation",
    "SYNTAX": "A(⊢×¯1*⊣)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Selective picking from array",
    "GROUP": "",
    "KEYWORDS": "chipmunk",
    "SYNTAX": "X⊃¨∘⊂Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Sort A according to Ms (1: ascending, 0: unordered, ¯1: descending)",
    "GROUP": "",
    "KEYWORDS": "sort order sorting reordering ordering",
    "SYNTAX": "Ms(⊢⌷⍨∘⊂×∘⍋)A",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Coefficients of the binomial",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(⊢!⍨0,⍳)Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Count of leading ones",
    "GROUP": "",
    "KEYWORDS": "1s",
    "SYNTAX": "(+/∧\\)B",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Histogram",
    "GROUP": "",
    "KEYWORDS": "chart",
    "SYNTAX": "(↑'⎕'⍴¨⍨⌊)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Cumulative sum",
    "GROUP": "",
    "KEYWORDS": "runningtotal",
    "SYNTAX": "+\\N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Date and time (⎕TS format) to YYYY-MM-DD hh:mm:ss",
    "GROUP": "",
    "KEYWORDS": "datetime format ISO8601:2006-09",
    "SYNTAX": "{'-- ::'@(2+3×⍳5)∊⍕¨(⊃,100+1∘↓)6↑⍵}Jv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Depth of parentheses",
    "GROUP": "",
    "KEYWORDS": "bracket brace nesting level parenthesis parens",
    "SYNTAX": "(+\\'('∘=-¯1↓0,')'∘=)Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Division: force DOMAIN ERROR for division by 0",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "M×∘÷N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Doubling quotes for execution",
    "GROUP": "",
    "KEYWORDS": "serialise ⍎⍣¯1 inverse⍎",
    "SYNTAX": "''''∘{⍺,⍺,⍨⍵/⍨1+⍺=⍵}Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Ascendingly ordered Nv-coefficient polynomium at point Ms",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Ms⊥∘⌽Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "First Js triangular pyramidal numbers",
    "GROUP": "",
    "KEYWORDS": "figurative tetrahedral oeisA000292 oeisA292",
    "SYNTAX": "+\\⍣2∘⍳Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "First Js triangular numbers",
    "GROUP": "",
    "KEYWORDS": "oeisA000217 oeisA217",
    "SYNTAX": "+\\∘⍳IS",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Force Ns numbers to range 0≤Ns≤Ms",
    "GROUP": "",
    "KEYWORDS": "clamp restrictrange between 0–",
    "SYNTAX": "Ms(0⌈⌊)Ns",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Fractional part with sign",
    "GROUP": "",
    "KEYWORDS": "decimals",
    "SYNTAX": "(×|⊢)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Fractional part of number",
    "GROUP": "",
    "KEYWORDS": "decimals",
    "SYNTAX": "1∘|N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Frequencies of major cells",
    "GROUP": "",
    "KEYWORDS": "occurances statistics",
    "SYNTAX": "{≢⍵}⌸Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "Tacit",
    "DESCRIPTION": "From complex to magnitude and radians",
    "GROUP": "",
    "KEYWORDS": "polar",
    "SYNTAX": "(10 12∘.○⊢)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "Tacit",
    "DESCRIPTION": "From magnitude M and radians N to complex",
    "GROUP": "",
    "KEYWORDS": "polar",
    "SYNTAX": "M(⊣×¯12○⊢)N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Future value of cash flows N at interest Ms",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Ms(⊢⊥⍨1+⊣)N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Increment rank by one before first dimension",
    "GROUP": "",
    "KEYWORDS": "addleadingaxis GhostBuster rowmatrixfromvector dimensions",
    "SYNTAX": "↑∘,∘⊂Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Increment rank by one after last dimension",
    "GROUP": "",
    "KEYWORDS": "addtrailingaxis GhostBuster columnmatrixfromvector dimensions",
    "SYNTAX": "(,⍤0)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Gray code or reflected binary",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(≠\\⍣¯1)B",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Hilbert matrix of order Js (1=⎕IO)",
    "GROUP": "",
    "KEYWORDS": "table sort sorting reordering ordering",
    "SYNTAX": "(÷⍳∘.+¯1+⍳)Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Identity matrix: Js by Js",
    "GROUP": "",
    "KEYWORDS": "unitmatrix",
    "SYNTAX": "(,⍨⍴1,⍴∘0)Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Initialise a matrix with Js columns and no rows",
    "GROUP": "",
    "KEYWORDS": "initialise table",
    "SYNTAX": "(⍴⍨0∘,)Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Input continuation",
    "GROUP": "",
    "KEYWORDS": "linecontinuation",
    "SYNTAX": "1 2 3 4 5 6 7 8 9 0,⎕",
    "TYPE": ""
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Integer: Truncate to whole number",
    "GROUP": "",
    "KEYWORDS": "chop clamp",
    "SYNTAX": "(××⌊∘|)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Integral and fractional part of positive number",
    "GROUP": "",
    "KEYWORDS": "parts split",
    "SYNTAX": "0 1∘⊤N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Difference of adjacent pairs with seed value",
    "GROUP": "",
    "KEYWORDS": "differences deltas changes steps",
    "SYNTAX": "(+\\⍣¯1)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Dfn",
    "DESCRIPTION": "Is X lexically greater than Y?",
    "GROUP": "",
    "KEYWORDS": "tao totalarrayordering after follows ≻ ⋠ ⋩ lexicographically",
    "SYNTAX": "X{>/⍋⍺⍵}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Dfn",
    "DESCRIPTION": "Is X lexically greater than or equal to Y?",
    "GROUP": "",
    "KEYWORDS": "tao totalarrayordering notbeforefollowsorequivalentto ≽ ⊀ lexicographically",
    "SYNTAX": "X{</⍒⍺⍵}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Dfn",
    "DESCRIPTION": "Is X lexically less than Y?",
    "GROUP": "",
    "KEYWORDS": "totalarrayordering tao before precedes ≺ ⋡ ⋨ lexicographically",
    "SYNTAX": "X{>/⍒⍺⍵}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Dfn",
    "DESCRIPTION": "Is X lexically less than or equal to Y?",
    "GROUP": "",
    "KEYWORDS": "tao totalarrayordering notafter precedesorequivalentto ≼ ⊁ lexicographically",
    "SYNTAX": "X{</⍋⍺⍵}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dop",
    "DESCRIPTION": "Is-degree polynomial fit given x-values Mv, y-values Nv",
    "GROUP": "",
    "KEYWORDS": "curvefitting model best",
    "SYNTAX": "Mv(Is{⌽⍵⌹⍺∘.*0,⍳⍺⍺})Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Is Js (YYYY) a leap year?",
    "GROUP": "",
    "KEYWORDS": "gregoriancalendar 29thfeb29 29february29th",
    "SYNTAX": "(0≠.=400 100 4∘.|⊢)Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Tacit",
    "DESCRIPTION": "Test if Y is outside range ( 1⌷X , 2⌷X ]",
    "GROUP": "",
    "KEYWORDS": "≥Y> ≥X> tao totalarrayordering interval outsiderange?",
    "SYNTAX": "X(1≠6 9⍸⍳+3×⍸)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Tacit",
    "DESCRIPTION": "Test if Y is outside range ( 1⌷X , 2⌷X )",
    "GROUP": "",
    "KEYWORDS": "≥Y≥ ≥X≥ tao totalarrayordering interval outsiderange?",
    "SYNTAX": "X(6≠⍳+3×⍸)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Tacit",
    "DESCRIPTION": "Test if Y is outside range [ 1⌷X , 2⌷X )",
    "GROUP": "",
    "KEYWORDS": ">Y≥ >X≥ tao totalarrayordering interval outsiderange?",
    "SYNTAX": "X(1≠⍸)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Tacit",
    "DESCRIPTION": "Test if Y is outside range [ 1⌷X , 2⌷X ]",
    "GROUP": "",
    "KEYWORDS": ">Y> >X> tao totalarrayordering interval outsiderange?",
    "SYNTAX": "X(1≠4 9⍸⍳+3×⍸)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Tacit",
    "DESCRIPTION": "Test if Y is within range ( 1⌷X , 2⌷X ]",
    "GROUP": "",
    "KEYWORDS": "<Y≤ <X≤ tao totalarrayordering interval inrange?",
    "SYNTAX": "X(1=6 9⍸⍳+3×⍸)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Tacit",
    "DESCRIPTION": "Test if Y is within range ( 1⌷X , 2⌷X )",
    "GROUP": "",
    "KEYWORDS": "<Y< <X< tao totalarrayordering interval inrange?",
    "SYNTAX": "X(6=⍳+3×⍸)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Tacit",
    "DESCRIPTION": "Test if Y is within range [ 1⌷X , 2⌷X )",
    "GROUP": "",
    "KEYWORDS": "≤Y< ≤X< tao totalarrayordering interval inrange?",
    "SYNTAX": "X(1=⍸)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Tacit",
    "DESCRIPTION": "Test if Y is within range [ 1⌷X , 2⌷X ]",
    "GROUP": "",
    "KEYWORDS": "≤Y≤ ≤X≤ tao totalarrayordering interval inrange?",
    "SYNTAX": "X(1=4 9⍸⍳+3×⍸)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Convert fraction to (numerator,denominator)",
    "GROUP": "",
    "KEYWORDS": "rationalnumber simplefraction commonfraction vulgarfraction",
    "SYNTAX": "((,÷∨)∘1)Ns",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "ISBN check digit generator from ten first digits Jv",
    "GROUP": "",
    "KEYWORDS": "InternationalStandardBookNumber correct validate",
    "SYNTAX": "(|¯11|1⊥+\\)Jv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Permutation vector that sorts like Y",
    "GROUP": "",
    "KEYWORDS": "ranking list",
    "SYNTAX": "⍋∘⍋Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Join real part M and imaginary part N to form complex",
    "GROUP": "",
    "KEYWORDS": "complexnumber",
    "SYNTAX": "M(⊣+¯11○⊢)N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Join array of arrays horizontally",
    "GROUP": "",
    "KEYWORDS": "nextto juxtapose merge flatten",
    "SYNTAX": "(⊃,/)Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Join array of arrays vertically",
    "GROUP": "",
    "KEYWORDS": "aboveandbelow stack merge flatten",
    "SYNTAX": "(⊃⍪⌿)AA",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Join corresponding items",
    "GROUP": "",
    "KEYWORDS": "juxtapose tuples",
    "SYNTAX": "X,¨Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Least squares linear fit given X values Mv and Y values Nv",
    "GROUP": "",
    "KEYWORDS": "best",
    "SYNTAX": "Mv(⊢⌹0 1∘.*⍨⊣)Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Length of polygon given as complex points",
    "GROUP": "",
    "KEYWORDS": "circumference linelength perimeter coordinates vertices",
    "SYNTAX": "(+/∘|2-/⊢)Nv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Life: next generation given U 140 surviving 3-by-3 subarrays",
    "GROUP": "",
    "KEYWORDS": "conway's gameoflife gol conways cellularautomaton sub-array",
    "SYNTAX": "U∊⍨⊢∘⊂⌺3 3",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Lower triangular matrix without diagonal: Js by Js",
    "GROUP": "",
    "KEYWORDS": "triangle SW southwest south-west table",
    "SYNTAX": "∘.>⍨∘⍳Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Lower triangular matrix with diagonal: Js by Js",
    "GROUP": "",
    "KEYWORDS": "triangle SW southwest south-west table",
    "SYNTAX": "∘.≥⍨∘⍳Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Upper triangular matrix without diagonal: Js by Js",
    "GROUP": "",
    "KEYWORDS": "triangle NE northeast north-east table",
    "SYNTAX": "∘.<⍨∘⍳Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Upper triangular matrix with diagonal: Js by Js",
    "GROUP": "",
    "KEYWORDS": "triangle NE northeast north-east table",
    "SYNTAX": "(⊢≡∘.≤⍨∘⍳∘≢)Bm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Is Bm a lower triangular matrix without diagonal?",
    "GROUP": "",
    "KEYWORDS": "triangle SW southwest south-west table triangular?",
    "SYNTAX": "(⊢≡∘.>⍨∘⍳∘≢)Bm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Is Bm a lower triangular matrix with diagonal?",
    "GROUP": "",
    "KEYWORDS": "triangle SW southwest south-west table triangular?",
    "SYNTAX": "(⊢≡∘.≥⍨∘⍳∘≢)Bm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Is Bm a upper triangular matrix without diagonal?",
    "GROUP": "",
    "KEYWORDS": "triangle NE northeast north-east table triangular?",
    "SYNTAX": "(⊢≡∘.<⍨∘⍳∘≢)Bm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Is Bm a upper triangular matrix with diagonal?",
    "GROUP": "",
    "KEYWORDS": "triangle NE northeast north-east table triangular?",
    "SYNTAX": "(⊢≡∘.≤⍨∘⍳∘≢)Bm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Magnitude of fractional part of N",
    "GROUP": "",
    "KEYWORDS": "absolutedecimals",
    "SYNTAX": "(1||)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Mask Operator. Merge Xv and Yv using Bv (1 for Xv's item, 0 for Yv's item)",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "alternative choose mesh shuffle",
    "SYNTAX": "Xv(Bv{(⍺⍺/X)@(⊢∘⍺⍺)⍵})Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dfn",
    "DESCRIPTION": "Matricise (like ⍪ but preserves trailing instead of leading shape)",
    "GROUP": "",
    "KEYWORDS": "matrix table matrify Matricize",
    "SYNTAX": "{,[¯1↓⍳≢⍴⍵]1/⍵}Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Matrix to vector using Xs as delimiter",
    "GROUP": "",
    "KEYWORDS": "vectorise vectorize serialise serialize list table",
    "SYNTAX": "Xs(1↓∘,,)Ym",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Matrix to vector of column vectors",
    "GROUP": "",
    "KEYWORDS": "split list table",
    "SYNTAX": "⊂⍤¯1∘⍉Ym",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Matrix to vector of row vectors",
    "GROUP": "Non-scalar function",
    "KEYWORDS": "downarrow split list table",
    "SYNTAX": "↓M",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Median of non-empty Nv",
    "GROUP": "",
    "KEYWORDS": "average",
    "SYNTAX": "(2÷⍨1⊥⊢⌷⍨∘⊂⍋⌷⍨∘⊂∘⌈2÷⍨0 1+≢)Nv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dfn",
    "DESCRIPTION": "Merge X and Y alternately",
    "GROUP": "",
    "KEYWORDS": "merge mesh alternate shuffle",
    "SYNTAX": "X{(⊂⍋∊⍳∘≢¨⍺ ⍵)⌷⍺⍪⍵}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Reorder X according to the order of Y",
    "GROUP": "",
    "KEYWORDS": "mesh sort sorting reordering ordering",
    "SYNTAX": "X⌷⍨∘⊂∘⍋∘⍋Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Mid product of M and N",
    "GROUP": "",
    "KEYWORDS": "midproduct",
    "SYNTAX": "M,.×N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Mirror N in x-axis if As",
    "GROUP": "",
    "KEYWORDS": "conjugate negateimaginary",
    "SYNTAX": "As○⍨∘(¯10+~)⍨N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Mirror N in x-axis",
    "GROUP": "",
    "KEYWORDS": "conjugate negateimaginary",
    "SYNTAX": "+N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Mirror N in y-axis",
    "GROUP": "",
    "KEYWORDS": "negatereal",
    "SYNTAX": "-∘+N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Mode(s): Most frequent elements of data",
    "GROUP": "",
    "KEYWORDS": "average",
    "SYNTAX": "{(⊣/⍵)/⍨(⌈/=⊢)⊢/⍵}{⍺(≢⍵)}⌸",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Tacit",
    "DESCRIPTION": "Move items X to end of Y",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "X(⊢⌷⍨∘⊂∘⍋(⊂⍤¯1⊢)∊(⊂⍤¯1⊣))Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Tacit",
    "DESCRIPTION": "Move items Xv to end of Yv",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Xv(⊢⌷⍨∘⊂∘⍋∊⍨)Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "N-column matrix from N vectors",
    "GROUP": "",
    "KEYWORDS": "transpose columns table",
    "SYNTAX": "⍉∘↑Xv Yv …",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "N-row matrix from N vectors",
    "GROUP": "",
    "KEYWORDS": "rows table",
    "SYNTAX": "↑Xv Yv …",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Is differences of differences of adjacents",
    "GROUP": "",
    "KEYWORDS": "nth derivative deltas",
    "SYNTAX": "Is{⊃-//⍺ 1/¯2 ⍵}N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Js spokes of unit wheel",
    "GROUP": "",
    "KEYWORDS": "circle points distributed",
    "SYNTAX": "(*∘○0J2×⊢÷⍨1+⍳)Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dop",
    "DESCRIPTION": "Is-point spline of Nm Bezier matrix with Mv control points",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "curvefitting model interpolation table",
    "SYNTAX": "Nm(Is{(⍪⍺⍺÷⍨⍳⍺⍺)⊥⍺+.×⍵})Mv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Number of columns in Y",
    "GROUP": "",
    "KEYWORDS": "trailingshape",
    "SYNTAX": "(0⊥⍴)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Number of elements in Y",
    "GROUP": "",
    "KEYWORDS": "items cells",
    "SYNTAX": "×/∘⍴Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Number of elements in a plane of rank-3 array Y",
    "GROUP": "",
    "KEYWORDS": "layersshape",
    "SYNTAX": "(×/1↓⍴)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Number of leading blanks",
    "GROUP": "",
    "KEYWORDS": "prefixspaces",
    "SYNTAX": "(⊥⍨' '=⌽)Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Number of permutations of (I,J) combinations",
    "GROUP": "",
    "KEYWORDS": "combinatorics",
    "SYNTAX": "I(!×∘!⊣)J",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Number of trailing blanks",
    "GROUP": "",
    "KEYWORDS": "suffixspaces",
    "SYNTAX": "(⊥⍨' '∘=)Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Numeric matrix of (Is,Js) combinations",
    "GROUP": "",
    "KEYWORDS": "combinatorics selections unordered without replacement list vector table",
    "SYNTAX": "Is({⍵/⍨∧⌿2<⌿⍵}1+{(-⍺)↑⍳⍵}⊤∘⍳!×∘!⊣)Js",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Ohm's Law: resistance of parallel resistors/capacitance of capacitors in series",
    "GROUP": "",
    "KEYWORDS": "electronics circuits Ω",
    "SYNTAX": "(÷1⊥÷)Nv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Scatter plot of two series (one per row of Jm)",
    "GROUP": "",
    "KEYWORDS": "chart curve graph",
    "SYNTAX": "{⍉' +○⍟'[1+2⊥⍵∘.=⌽⍳⌈/,⍵]}Jm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Bar chart",
    "GROUP": "",
    "KEYWORDS": "plot curve graph",
    "SYNTAX": "(↑⍴¨∘'⎕')J",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Output assigned value",
    "GROUP": "",
    "KEYWORDS": "passthroughvalue yieldassignment",
    "SYNTAX": "⊢name←Y",
    "TYPE": ""
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Parallel projection of 3D object in Nm",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(0J1⊥⊖)Nm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Parity: Connect odd and even ones",
    "GROUP": "",
    "KEYWORDS": "1s running",
    "SYNTAX": "≠\\B",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Parity with connectors: Connect odd and even ones",
    "GROUP": "",
    "KEYWORDS": "1s",
    "SYNTAX": "(≠\\∨⊢)B",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Binomial coefficients until Js",
    "GROUP": "",
    "KEYWORDS": "pascal'striangle numberofcombinations pascalstriangle",
    "SYNTAX": "(∘.!⍨0,⍳)Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Perspective projection of Nm from distance Ms",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Ms(0J1⊥(1↓⊢∘⊖)×⊢÷⊣-¯1↑⊢)Nm",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dop",
    "DESCRIPTION": "Plot of scalaroid function f for data Nv",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "",
    "SYNTAX": "f{⍵+¯11○⍺⍺ ⍵}Nv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "±N by juxtaposition",
    "GROUP": "",
    "KEYWORDS": "plusminus",
    "SYNTAX": "(1 ¯1×⊂)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "∓N by juxtaposition",
    "GROUP": "",
    "KEYWORDS": "minusplus",
    "SYNTAX": "(¯1 1×⊂)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Poisson distribution of states N with average M",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "M((*0-⊣)×*÷⊢∘!)N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "lev lefttack where",
    "CLASS": "Primitive",
    "DESCRIPTION": "Combining two lines into one",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "expr⊣name←Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Position of /*comments*/",
    "GROUP": "",
    "KEYWORDS": "cstylecomments *//*",
    "SYNTAX": "'*/'∘(≠\\(<\\⍷)∨∘⌽(<\\⍷∘⌽))D",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Position of first item in X not in Y",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "X(⊃∘⍸∘~∊)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Position of first occurrence of string Dv in list of strings C",
    "GROUP": "",
    "KEYWORDS": "indexin indexof position vtv vector",
    "SYNTAX": "C⍳∘⊂Dv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Is string Dv a member of list of strings C",
    "GROUP": "",
    "KEYWORDS": "isin membership containedin has vtv vector",
    "SYNTAX": "C∊⍨∘⊂Dv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Position of last X in Y",
    "GROUP": "",
    "KEYWORDS": "lastindexin lastindexof lastposition vtv",
    "SYNTAX": "X⍳⍨∘⌽Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Dop",
    "DESCRIPTION": "Position of the Is'th Y in X",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "nthindexin nthindexof nthposition",
    "SYNTAX": "PO←X(Is{⍺⍺⊃⍸⍺≡¨⊂⍵})Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Positions of item Y in X",
    "GROUP": "",
    "KEYWORDS": "indicesin indicesof position subarray sub-array subsequence sub-sequence",
    "SYNTAX": "X(⍸⍷⍨∘⊂)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Position of first item Y in X",
    "GROUP": "",
    "KEYWORDS": "indicesin indicesof position",
    "SYNTAX": "X(⊃∘⍸⍷⍨∘⊂)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Positions of starts of subarrays X in Y",
    "GROUP": "",
    "KEYWORDS": "beginningsof sub-arrays sub-strings substrings subvectors sub-vectors sub-matrices submatrices sub-sequence subsequence segmented sub-lists partitioned sublists",
    "SYNTAX": "X(⍸⍷)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Position of first subarray X in Y",
    "GROUP": "",
    "KEYWORDS": "beginningsof sub-array sub-string substring subvector sub-vector sub-matrix submatrix sub-sequence subsequence sub-list sublist sub-table subtable",
    "SYNTAX": "X(⊃∘⍸⍷)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Postfix vector to each row of matrix",
    "GROUP": "",
    "KEYWORDS": "append rows list table",
    "SYNTAX": "Xm(,⍤1)Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Prefix vector to each row of matrix",
    "GROUP": "",
    "KEYWORDS": "prepend rows list table",
    "SYNTAX": "Xv(,⍤1)Ym",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Present value of cash flows Nv at interval Ms",
    "GROUP": "",
    "KEYWORDS": "worth",
    "SYNTAX": "Ms(⊢∘⌽⊥⍨∘÷1+⊣)Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Prime numbers until Js",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "((⊢~∘.×⍨)1↓⍳)Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Product of N (row-wise)",
    "GROUP": "",
    "KEYWORDS": "horizontal product enlargedpi bigpi capitalpi ∏ Π",
    "SYNTAX": "×/N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Prompt and response on same line",
    "GROUP": "",
    "KEYWORDS": "input",
    "SYNTAX": "⍞↓⍨≢⍞←'What? '",
    "TYPE": ""
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Triangle hypotenuse as function of side ratio",
    "GROUP": "",
    "KEYWORDS": "Pythagorean trigonometry",
    "SYNTAX": "4○N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Triangle side (≥1) as function of hypotenuse",
    "GROUP": "",
    "KEYWORDS": "Pythagorean trigonometry",
    "SYNTAX": "¯4○N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Triangle side as function of side (hypotenuse≤1)",
    "GROUP": "",
    "KEYWORDS": "Pythagorean trigonometry",
    "SYNTAX": "0○N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Sum of the squares of N",
    "GROUP": "",
    "KEYWORDS": "Pythagorean trigonometry",
    "SYNTAX": "+.×⍨Nv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Tacit",
    "DESCRIPTION": "Input of ×/Jv strings",
    "GROUP": "",
    "KEYWORDS": "multi input characterinput rawinput stdin",
    "SYNTAX": "({⍞}¨⍳)Jv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Random Boolean array of shape Jv",
    "GROUP": "",
    "KEYWORDS": "base2",
    "SYNTAX": "(1=∘?⍴∘2)Jv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Range of N",
    "GROUP": "",
    "KEYWORDS": "span minmaxmin extremes",
    "SYNTAX": "(⌈/-⌊/)∘,N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Main diagonal of any array",
    "GROUP": "",
    "KEYWORDS": "maindiagonal nwse nw-se",
    "SYNTAX": "(⊢⍉⍨1*⍴)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Anti-diagonal of any array",
    "GROUP": "",
    "KEYWORDS": "antidiagonal nesw ne-sw",
    "SYNTAX": "(⌽⍉⍨1*⍴)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Reassign main diagonal of matrix",
    "GROUP": "",
    "KEYWORDS": "assignment gets is copula let redefine name naming denotes means inplace update table",
    "SYNTAX": "(1 1⍉Xm)←Yv",
    "TYPE": ""
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Rectangular scale of complex N by complex factor Ms",
    "GROUP": "",
    "KEYWORDS": "resize stretch squeeze",
    "SYNTAX": "Ms((9 11○⊣)+.×(9 11∘.○⊢))N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Regular unit polygon of Js edges",
    "GROUP": "",
    "KEYWORDS": "star triangle square pentagon hexagon octagon",
    "SYNTAX": "(*∘○0J2×⊢÷⍨0,⍳)Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Remove blank columns",
    "GROUP": "",
    "KEYWORDS": "delete allspaces",
    "SYNTAX": "{⍵/⍨' '∨.≠⍵}Dm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Remove blank rows",
    "GROUP": "",
    "KEYWORDS": "delete allspaces emptylines",
    "SYNTAX": "{⍵⌿⍨' '∨.≠⍵}Dm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Remove blanks in each string",
    "GROUP": "",
    "KEYWORDS": "deletespaces",
    "SYNTAX": "~∘' '¨D",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Remove blanks in string",
    "GROUP": "",
    "KEYWORDS": "deletespaces",
    "SYNTAX": "(~∘' ')Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Remove duplicate blank columns",
    "GROUP": "",
    "KEYWORDS": "delete allspaces repeated extraneous multiple",
    "SYNTAX": "{⍵/⍨¯1↓1,1(⊢∨⌽)' '∨.≠⍵}Dm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Remove duplicate blank rows",
    "GROUP": "",
    "KEYWORDS": "delete allspaces repeated extraneous multiple",
    "SYNTAX": "{⍵⌿⍨¯1↓1,1(⊢∨⌽)⍵∨.≠' '}Dm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Remove leading, trailing, and duplicate blanks",
    "GROUP": "",
    "KEYWORDS": "delete trim reformat extraneous normalise normalize spaces multiple",
    "SYNTAX": "' '∘(1↓,(/⍨)1(⊢∨⌽)0,≠)Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Remove leading blank columns",
    "GROUP": "",
    "KEYWORDS": "delete allspaces",
    "SYNTAX": "{⍵/⍨∨\\' '∨.≠⍵}Dm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Remove leading blank rows",
    "GROUP": "",
    "KEYWORDS": "delete allspaces",
    "SYNTAX": "{⍵⌿⍨∨\\⍵∨.≠' '}Dm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Remove leading blanks",
    "GROUP": "",
    "KEYWORDS": "delete spaces beginning",
    "SYNTAX": "{⍵/⍨∨\\⍵≠' '}Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Remove punctuation",
    "GROUP": "",
    "KEYWORDS": "delete symbols",
    "SYNTAX": "(~∘'.,:;?!')Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Remove trailing blanks",
    "GROUP": "",
    "KEYWORDS": "delete spaces end",
    "SYNTAX": "{⍵↓⍨-⊥⍨' '=⍵}Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Replace all blanks with dashes",
    "GROUP": "",
    "KEYWORDS": "spaces substitute format",
    "SYNTAX": "'-'@(=∘' ')Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Syntax",
    "DESCRIPTION": "Structural assignment: Replace all items, shape unchanged",
    "GROUP": "",
    "KEYWORDS": "leftarrow assignment gets is copula let redefine name naming denotes means inplace update",
    "SYNTAX": "(,name)←⊂Y",
    "TYPE": ""
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Primitive",
    "DESCRIPTION": "Replace all occurrences of elements from Y in array Z with X",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "at substitute merge amend replace update",
    "SYNTAX": "X@(∊∘Y)Z",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Replace leading zeros with blanks",
    "GROUP": "",
    "KEYWORDS": "spaces nulls zeroes nils naughts noughts 0s",
    "SYNTAX": "' '@{2=⌈\\' 0'⍳⍵}D",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dfn",
    "DESCRIPTION": "Duplicate Y cells where indicated by Bv",
    "GROUP": "",
    "KEYWORDS": "replicate double",
    "SYNTAX": "Av{⍵⌿⍨1+⍺}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Residue after dividing N by M but replacing 0 with M",
    "GROUP": "",
    "KEYWORDS": "modulo modulus residue divisionremainder 12hourclock divide",
    "SYNTAX": "M(⊣+|⍨∘-⍨)N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Right justify matrix Dm",
    "GROUP": "",
    "KEYWORDS": "rightalignright flushrightflush rightjustifyright table",
    "SYNTAX": "(⊢⌽⍨1-1⊥⍨=∘' ')Dm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Evaluate Roman numeral",
    "GROUP": "",
    "KEYWORDS": "romannumerals arabicnumerals latinnumerals",
    "SYNTAX": "{{⍵+.×¯1*2</⍵,0}(×\\1,6⍴5 2)['IVXLCDM'⍳⍵]}Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Rotate figure Nv in direction of point Ms",
    "GROUP": "",
    "KEYWORDS": "rotation complex points",
    "SYNTAX": "Ms×∘×⍨Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Rounding N to Is decimal places",
    "GROUP": "",
    "KEYWORDS": "precision",
    "SYNTAX": "Is(⍎⍕)N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Rounding N to Is decimal places (Fast: ⍎Is⍕N)",
    "GROUP": "",
    "KEYWORDS": "precision speed optimised optimized quick",
    "SYNTAX": "Is{p÷⍨⌊0.5+⍵×p←10*⍺}N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Rounding to nearest even number (favouring away from 0)",
    "GROUP": "",
    "KEYWORDS": "precision favoring",
    "SYNTAX": "(××∘⌊|+1≤2||)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Rounding to nearest odd number (favouring away from 0)",
    "GROUP": "",
    "KEYWORDS": "precision favoring",
    "SYNTAX": "(××∘⌊|+1>2||)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Rounding N to nearest M (favouring away from 0)",
    "GROUP": "",
    "KEYWORDS": "precision favoring",
    "SYNTAX": "M(⊢∘××⊣×∘⌊0.5+∘|÷⍨)N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Rounding to nearest whole number (favouring away from 0)",
    "GROUP": "",
    "KEYWORDS": "precision favoring integer",
    "SYNTAX": "(××∘⌊0.5+|)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Row averages (0 if none)",
    "GROUP": "",
    "KEYWORDS": "arithmeticmean",
    "SYNTAX": "(+/÷1⌈0⊥⍴)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Row averages of non-zero elements (0 if none)",
    "GROUP": "",
    "KEYWORDS": "arithmeticmean nonzero",
    "SYNTAX": "(+/÷1⌈+.≠∘0)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Sample standard deviation",
    "GROUP": "",
    "KEYWORDS": "stddev σ sigma SD empirical",
    "SYNTAX": "(0.5*⍨((≢×+.*∘2)-2*⍨+⌿)÷≢×¯1+≢)Nv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Theoretical standard deviation",
    "GROUP": "",
    "KEYWORDS": "stddev σ sigma SD",
    "SYNTAX": "(≢÷⍨0.5*⍨(≢×+.*∘2)-2*⍨+⌿)Nv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Theoretical variance",
    "GROUP": "",
    "KEYWORDS": "σ² s² σ^2 s^2 Var(X) dispersion",
    "SYNTAX": "(≢÷⍨≢÷⍨(≢×+.*∘2)-2*⍨+⌿)Nv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Sample variance",
    "GROUP": "",
    "KEYWORDS": "σ² s² σ^2 s^2 empirical Var(X) dispersion",
    "SYNTAX": "(((≢×+.*∘2)-2*⍨+⌿)÷≢×1⌈¯1+≢)Nv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Column-wise percentage per column",
    "GROUP": "",
    "KEYWORDS": "%",
    "SYNTAX": "(100×⊢÷⍤1+⌿)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Row-wise percentage per row",
    "GROUP": "",
    "KEYWORDS": "%",
    "SYNTAX": "(100×⊢÷⍤1 0+/)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Running sum of Is consecutive elements of N",
    "GROUP": "",
    "KEYWORDS": "windowedsum",
    "SYNTAX": "Is+/N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "Pick  random item from vector",
    "GROUP": "",
    "KEYWORDS": "selectrandom list",
    "SYNTAX": "(?∘≢⊃⊢)Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "Index random item from array",
    "GROUP": "",
    "KEYWORDS": "selectrandom",
    "SYNTAX": "(?∘⍴⌷⊢)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "Shuffle vector",
    "GROUP": "",
    "KEYWORDS": "mix randomize randomise list",
    "SYNTAX": "(?⍨⊃¨⊂)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "⎕IO-independent (as 0) cyclic pick",
    "GROUP": "",
    "KEYWORDS": "⎕ioindependent ⎕ioindependence ⎕io-insensitive ⎕ioinsensitive",
    "SYNTAX": "Ij(⊃⌽)Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Join vectors Yv with separator Xs",
    "GROUP": "",
    "KEYWORDS": "combine merge",
    "SYNTAX": "Xs(1↓∘∊,¨)Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Separating packed YYYYMMDD date integer date",
    "GROUP": "",
    "KEYWORDS": "format split unpacked",
    "SYNTAX": "0 100 100∘⊤Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Joining  date YYYY M D to packed YYYYMMDD integer",
    "GROUP": "",
    "KEYWORDS": "format packed",
    "SYNTAX": "100∘⊥Jv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Shift Bv forward or backward Is positions",
    "GROUP": "",
    "KEYWORDS": "leftshift rightshift bits bytes",
    "SYNTAX": "Is(×∘×⍨∘≢↑↓)Bv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Sign of point Ns relative to edges of M",
    "GROUP": "",
    "KEYWORDS": "signum",
    "SYNTAX": "M{×11○(⍵-1↓⍺)×+2-/⍺}Ns",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Resign: Transfer of sign from M to N",
    "GROUP": "",
    "KEYWORDS": "signum",
    "SYNTAX": "M(×∘×⍨∘|)N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Skew N in y-axis by fraction Ms",
    "GROUP": "",
    "KEYWORDS": "oblique",
    "SYNTAX": "Ms(⊢+¯11○⊣×9○⊢)N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Constant",
    "DESCRIPTION": "Smallest representable number",
    "GROUP": "",
    "KEYWORDS": "negativeinfinity -∞ mostnegative least",
    "SYNTAX": "⌈/⍬",
    "TYPE": ""
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Constant",
    "DESCRIPTION": "Largest representable number",
    "GROUP": "",
    "KEYWORDS": "negativeinfinity ∞ mostpositive biggest largest greatest",
    "SYNTAX": "⌊/⍬",
    "TYPE": ""
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Sort each column in ascending order",
    "GROUP": "",
    "KEYWORDS": "sort order up increasing sorting reordering ordering",
    "SYNTAX": "({⍉(⊂∘⍋⌷⊢)⍤1⍉⍵}⍤2)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Sort each row in ascending order",
    "GROUP": "",
    "KEYWORDS": "sort order up increasing sorting reordering ordering",
    "SYNTAX": "((⊂∘⍋⌷⊢)⍤1)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Sorting Y in case-insensitive alphabetical order",
    "GROUP": "",
    "KEYWORDS": "sort order up increasing caseinsensitive reordering ordering",
    "SYNTAX": "{⍵⌷⍨⊂⍋{(819⌶⍵)⍵}¨⍵}Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Split complex array into real array and imaginary array",
    "GROUP": "",
    "KEYWORDS": "re() im()",
    "SYNTAX": "(9 11○⊂)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Square without changing sign",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "×∘|⍨N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "State of switch given Bv on and Av off spikes",
    "GROUP": "",
    "KEYWORDS": "signal on/off",
    "SYNTAX": "Av(≠\\∨{⍺\\2≠/0,⍺/⍵}⊢)Bv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Stereo pair (Eye separation Ms)",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Ms(⊢∘⊂+¯0.5 0.5×⊣)N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Students grades given score",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "('FDCBA'⌷⍨∘⊂0 60 70 80 90∘⍸)J",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Sum Nv by buckets Xv (⍴Nv ←→ ⍴Xv)",
    "GROUP": "",
    "KEYWORDS": "group classify bin",
    "SYNTAX": "Xv{+/⍵}⌸Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Sum of all atoms in N",
    "GROUP": "",
    "KEYWORDS": "sumall +⌿∊ grandtotal sumitems",
    "SYNTAX": "(+/∊)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Sum of magnitude of N",
    "GROUP": "",
    "KEYWORDS": "absolutesummation sumabs",
    "SYNTAX": "(+/|)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Sum of N (row-wise)",
    "GROUP": "",
    "KEYWORDS": "horizontal summation enlargedsigma bigsigma capitalsigma ∑ Σ sum()",
    "SYNTAX": "+/N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dfn",
    "DESCRIPTION": "Cut Yv into non-empty partitions of length Iv (+/Iv ←→ ⍴Y)",
    "GROUP": "",
    "KEYWORDS": "segment chop split cut separate chunks",
    "SYNTAX": "Iv{⍵⊆⍨⍺/⍳≢⍺}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dfn",
    "DESCRIPTION": "Cut Yv into partitions of length Iv",
    "GROUP": "",
    "KEYWORDS": "segment chop split cut separate chunks",
    "SYNTAX": "Iv{(-⍺)↑¨↑∘⍵¨+\\⍺}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Swap real and imaginary",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(¯11○+)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Negate real part (\"real conjugate\")",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "+∘-N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "SWIFT check digit from Is bank number",
    "GROUP": "",
    "KEYWORDS": "correct validate",
    "SYNTAX": "(¯97(|-⊣)⊢)Is",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Table of divisibility",
    "GROUP": "",
    "KEYWORDS": "matrix",
    "SYNTAX": "(0=⊢∘.|⍨∘⍳⌈/)Iv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Taylor series at point Mv, coefficients Nv",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Mv{⍵+.×(⍺∘*÷!)¯1+⍳≢⍵}Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Extract text (including quotes) in expression",
    "GROUP": "",
    "KEYWORDS": "strings extract",
    "SYNTAX": "{⍵/⍨(⊢∨≠\\)⍵=''''}Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Extract text (without quotes) in expression",
    "GROUP": "",
    "KEYWORDS": "strings extract",
    "SYNTAX": "(⊢⊆⍨∘(~∧≠\\)=∘'''')Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "The last item of Y",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(⊃⌽∘,)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Prototype (converts characters to spaces, numbers to zeros)",
    "GROUP": "",
    "KEYWORDS": "fillelement padding 0s zeroes",
    "SYNTAX": "(⊃0⍴⊂∘⊃)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "N-wise rolling average",
    "GROUP": "",
    "KEYWORDS": "rollingmean windowedmean windowedaverage",
    "SYNTAX": "Is(+/÷⊣)N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Transpose every submatrix of Y",
    "GROUP": "",
    "KEYWORDS": "cant  ^T ⸆ ᵀ sub-matrix sub-table subtable planes",
    "SYNTAX": "(⍉⍤2)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "All binary representations with Js bits (truth table with Js variables, matrix for choosing all subsets)",
    "GROUP": "",
    "KEYWORDS": "sub-sets",
    "SYNTAX": "2∘(⍉⍴⍨⊤¯1+∘⍳*)Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Truth table: All possibilities of Boolean primitive Ds",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "0 1∘{(⍵,⍺)⍪⍺,∘.(⍎⍵)⍨⍺}Ds",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Reshape Yv to Is-column matrix (filled row-wise)",
    "GROUP": "",
    "KEYWORDS": "table",
    "SYNTAX": "Is(⊢⍴⍨⊣,⍨⊢∘≢÷⊣)Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Reshape Yv to Is-column matrix (filled column-wise)",
    "GROUP": "",
    "KEYWORDS": "table",
    "SYNTAX": "Is(⍉⊢⍴⍨⊣,⊢∘≢÷⊣)Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Reshape Yv to Is-row matrix (filled row-wise)",
    "GROUP": "",
    "KEYWORDS": "table",
    "SYNTAX": "Is(⊢⍴⍨⊣,⊢∘≢÷⊣)Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Reshape Yv to Is-row matrix (filled column-wise)",
    "GROUP": "",
    "KEYWORDS": "table",
    "SYNTAX": "Is(⍉⊢⍴⍨⊣,⍨⊢∘≢÷⊣)Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Two-column matrix from two vectors (repeat scalars)",
    "GROUP": "",
    "KEYWORDS": "table",
    "SYNTAX": "Xv(,⍤0)Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Two-column matrix from two vectors (pad shorter vector)",
    "GROUP": "",
    "KEYWORDS": "list table",
    "SYNTAX": "Xv{⍉↑⍺⍵}Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Two-row matrix from two vectors (repeat scalars)",
    "GROUP": "",
    "KEYWORDS": "table",
    "SYNTAX": "Xv,[0.5]Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dfn",
    "DESCRIPTION": "Two-row matrix from two vectors (pad shorter vector)",
    "GROUP": "",
    "KEYWORDS": "list table",
    "SYNTAX": "Xv{↑⍺⍵}Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Type of simple Y (¯1:mixed, 0:character, 1:numeric)",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(326(=-⍨2|⊢)⎕DR)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Underlines a string (1=⎕IO)",
    "GROUP": "",
    "KEYWORDS": "underscore",
    "SYNTAX": "(,[0.5]∘'¯')Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Underlines non-blanks in a string",
    "GROUP": "",
    "KEYWORDS": "wordunderlinewords wordunderscorewords",
    "SYNTAX": "(⊢,[0.5]'¯'\\⍨≠∘' ')Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Constant",
    "DESCRIPTION": "Unit cube",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "2 2 2⊤⍳8",
    "TYPE": "Expression"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Constant",
    "DESCRIPTION": "Unit square",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "2 2⊤⍳4",
    "TYPE": "Expression"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Constant",
    "DESCRIPTION": "Unit tesseract",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "2 2 2 2⊤⍳16",
    "TYPE": "Expression"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Unpack a vector X into an array based on mask B",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "list",
    "SYNTAX": "X@{B}Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Split vector Dv at any sequence of characters in Cv",
    "GROUP": "",
    "KEYWORDS": "cut chop divide linebreak newline carriagereturn crnl crlf linefeed vec2vtv partition segment separate chunk list dividing",
    "SYNTAX": "Cv(⊢⊆⍨∘~∊⍨)Dv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dfn",
    "DESCRIPTION": "Vector of major cells for any rank",
    "GROUP": "",
    "KEYWORDS": "vectorise vectorize list dimensions",
    "SYNTAX": "{⊂⍤¯1⊢1/⍵}Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Weekday (Sunday:0) given Jv:Y M D",
    "GROUP": "",
    "KEYWORDS": "gregoriancalendar",
    "SYNTAX": "(7|2⎕NQ⎕←#'DateToIDN',⊂)Jv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Weekday (S-S:0-6) of first of year Js",
    "GROUP": "",
    "KEYWORDS": "gregoriancalendar",
    "SYNTAX": "(7|2⎕NQ#'DateToIDN',,∘1 1)Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Weighted average of columns of Nm with weights Mv",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Mv(+.×÷1⊥⊣)Nm",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Weighted average of rows of Nm with weights Mv",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Mv(+.×⍨÷1⊥⊣)Nm",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Dop",
    "DESCRIPTION": "Where: Execute f on condition B mask",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "at amend update",
    "SYNTAX": "f@{B}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Which rows of Y are all numeric?",
    "GROUP": "",
    "KEYWORDS": "allnumberrows",
    "SYNTAX": "(2|⎕DR⍤1)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Dop",
    "DESCRIPTION": "Run f on axes of X",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "onaxis apply",
    "SYNTAX": "X(f{↑[⍵⍵](⊂[⍵⍵]⍺)⍺⍺⊂⍵}ax)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Dop",
    "DESCRIPTION": "Run f on axes of Y",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "onaxis apply",
    "SYNTAX": "X(f{↑[⍵⍵](⊂AX)f⊂[⍵⍵]⍵}ax)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Dop",
    "DESCRIPTION": "Run f in origin Bs",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "⎕IO indexorigin apply",
    "SYNTAX": "X(f{⍺←⊢ ⋄ ⎕IO←⍵⍵ ⋄ ⍺ ⍺⍺ ⍵}Bs)Y",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Tacit",
    "DESCRIPTION": "Run f to scalars",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "apply",
    "SYNTAX": "X(f⍤0)Y",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Zeros, same shape and structure",
    "GROUP": "",
    "KEYWORDS": "zeroes naughts 0s",
    "SYNTAX": "≠⍨Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Zeros, same shape plus one",
    "GROUP": "",
    "KEYWORDS": "zeroes naughts 0s",
    "SYNTAX": "(0≠/⊢)Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Ones, same shape and structure",
    "GROUP": "",
    "KEYWORDS": "1s",
    "SYNTAX": "=⍨Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Ones, same shape plus one",
    "GROUP": "",
    "KEYWORDS": "1s",
    "SYNTAX": "(0=/⊢)Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Zeros, simple with same shape",
    "GROUP": "",
    "KEYWORDS": "zeroes naughts 0s",
    "SYNTAX": "∊∘⍬Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "Dfn",
    "DESCRIPTION": "Fast: X and Y are ignored (no result produced)",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick silence shh quiet sink dump",
    "SYNTAX": "X{}Y",
    "TYPE": "Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dfn",
    "DESCRIPTION": "Fast: X and Y as a two item vector (X Y)",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick juxtapose tuple pair list",
    "SYNTAX": "X{⍺⍵}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Fast: 0 irrespective of Y",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick zero naught",
    "SYNTAX": "{0}Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Fast: 0 corresponding to each item of Y",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick zeroes naughts 0s zeros",
    "SYNTAX": "{0}¨Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Expression",
    "DESCRIPTION": "Fast: Is Y a Simple Array?",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick simple?",
    "SYNTAX": "1=≡,Y",
    "TYPE": ""
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Expression",
    "DESCRIPTION": "Fast: Is Y a Simple Non-scalar?",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick simple? nonscalar?",
    "SYNTAX": "1=≡Y",
    "TYPE": ""
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Expression",
    "DESCRIPTION": "Fast: Is Y a Simple Scalar?",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick simple?",
    "SYNTAX": "0=≡Y",
    "TYPE": ""
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Expression",
    "DESCRIPTION": "Fast: Is Y a Scalar?",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick",
    "SYNTAX": "0=⍴⍴Y",
    "TYPE": ""
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Expression",
    "DESCRIPTION": "Fast: Does Y have an empty first dimension?",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick empty? norows?",
    "SYNTAX": "0=⊃⍴Y",
    "TYPE": ""
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Expression",
    "DESCRIPTION": "Fast: Is Y empty?",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick",
    "SYNTAX": "0∊⍴Y",
    "TYPE": ""
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Expression",
    "DESCRIPTION": "Fast: Is Y non-empty?",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick nonempty? hascontent?",
    "SYNTAX": "~0∊⍴Y",
    "TYPE": ""
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Expression",
    "DESCRIPTION": "Fast: A Boolean mask indicating the leading blank spaces in each row of D",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick",
    "SYNTAX": "∧\\' '=D",
    "TYPE": ""
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Expression",
    "DESCRIPTION": "Fast: A nested vector comprising simple character vectors constructed from the rows of Dm (which must be of depth 1) with all blank spaces removed",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick list",
    "SYNTAX": "~∘' '¨↓Dm",
    "TYPE": ""
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Fast: A nested vector comprising simple character vectors constructed from the rows of Dm (which must be of depth 1) with trailing blank spaces removed",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick list",
    "SYNTAX": "{(+/∨\\' '≠⌽⍵)↑¨↓⍵}Dm",
    "TYPE": ""
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Expression",
    "DESCRIPTION": "Fast: A nested vector comprising vectors that each correspond to a position in the original vectors of Yv – the first vector contains the first item from each vector in Yv, padded to be the same length as the largest vector, and so on",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick transpose vtv list",
    "SYNTAX": "↓⍉↑Yv",
    "TYPE": ""
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Dfn",
    "DESCRIPTION": "Fast: A simple vector comprising as many items as there are rows in Ym, where each item is the number of the first row in Xm that matches each row in Ym",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick list",
    "SYNTAX": "Xm{(↓⍺)⍳↓⍵}Ym",
    "TYPE": ""
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Fast: Dv without any leading blank spaces",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick trim left-align leftalign",
    "SYNTAX": "{(∨\\' '≠⍵)/⍵}Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Fast: Dv without any leading blank spaces",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick trim left-align leftalign",
    "SYNTAX": "{(+/∧\\' '=⍵)↓⍵}Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Expression",
    "DESCRIPTION": "Fast: Euler's idiom (accurate when N is a multiple of 0J0.5)",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick",
    "SYNTAX": "*○N",
    "TYPE": ""
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Expression",
    "DESCRIPTION": "Fast: Round to nearest integer",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick",
    "SYNTAX": "⌊0.5+N",
    "TYPE": ""
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Fast: The enclose of the items of Yv (which must be of depth 2) catenated along their first axes",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick combine merge stack joinvertically",
    "SYNTAX": "⍪/Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Fast: The enclose of the items of Yv (which must be of depth 2) catenated along their last axes",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick combine merge joinhorizontally",
    "SYNTAX": ",/Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "Fast: The first sub-array along the first axis of Y",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick topmostrow subarray",
    "SYNTAX": "⊣⌿Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "Fast: The first sub-array along the last axis of Y",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick leftmostcolumn subarray",
    "SYNTAX": "⊣/Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Expression",
    "DESCRIPTION": "Fast: The item in the bottom right of Y",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick last bottom-right se southeast south-east",
    "SYNTAX": "⊃⌽,Y",
    "TYPE": ""
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Expression",
    "DESCRIPTION": "Fast: The item in the top right of Y",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick top-right ne northeast north-east",
    "SYNTAX": "⊃⌽Y",
    "TYPE": ""
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "Fast: The last sub-array along the first axis of Y",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick bottommostrow subarray",
    "SYNTAX": "⊢⌿Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "Fast: The last sub-array along the last axis of Y",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick rightmostcolumn subarray",
    "SYNTAX": "⊢/Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Fast: The length of the first axis of each item in X",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick",
    "SYNTAX": "⊃∘⍴¨Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Expression",
    "DESCRIPTION": "Fast: The number of leading 1s in each row of B",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick ones",
    "SYNTAX": "+/∧\\B",
    "TYPE": ""
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Expression",
    "DESCRIPTION": "Fast: The number of leading blank spaces in each row of D",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick",
    "SYNTAX": "+/∧\\' '=D",
    "TYPE": ""
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Expression",
    "DESCRIPTION": "Fast: The positions in Yv corresponding to the 1s in Av",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick ones where",
    "SYNTAX": "Av/⍳⍴Yv",
    "TYPE": ""
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Expression",
    "DESCRIPTION": "Fast: The rank of Y as a 1-element vector",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick list dimensions",
    "SYNTAX": "⍴⍴Y",
    "TYPE": ""
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Expression",
    "DESCRIPTION": "Fast: The rank of Y as a scalar",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick numberofdimensions tensorrank dimensions",
    "SYNTAX": "≢⍴Y",
    "TYPE": ""
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Expression",
    "DESCRIPTION": "Fast: The subset of ⍳Ns corresponding to the 1s in Bv",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick  ones",
    "SYNTAX": "Bv/⍳Ns",
    "TYPE": ""
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Expression",
    "DESCRIPTION": "Fast: The subset of Yv in the index positions defined by M (equivalent to Yv[M])",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick chipmunk selectfrom indexinto",
    "SYNTAX": "M⊃¨⊂Yv",
    "TYPE": ""
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Tacit",
    "DESCRIPTION": "Fast: 'name' redefined to be its value with Y catenated along its last axis",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick amend append extend accumulate concatenate",
    "SYNTAX": "name,←Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Tacit",
    "DESCRIPTION": "Fast: name' redefined to be its value with Y catenated along its first axis",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick amend append extend accumulate concatenate",
    "SYNTAX": "name⍪←Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Fast: Y sorted into ascending order",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick sort() order up increasing sort sorting reordering ordering",
    "SYNTAX": "{(⊂⍋⍵)⌷⍵}Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Fast: Y sorted into descending order",
    "GROUP": "Performance",
    "KEYWORDS": "speed optimised optimized quick sort() order down decreasing sort sorting reordering ordering",
    "SYNTAX": "{(⊂⍒⍵)⌷⍵}Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Sierpiński triangle of size Js",
    "GROUP": "",
    "KEYWORDS": "Sierpinski",
    "SYNTAX": "{' ⎕'[1+↑⊢∘(≠\\)\\↓1⍴⍨2⍴2*⍵]}Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Sorted frequency table",
    "GROUP": "",
    "KEYWORDS": "matrix",
    "SYNTAX": "{⍵⌷⍨⊂⍒⊢/⍵},∘≢⌸",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Valid siteswap pattern?",
    "GROUP": "",
    "KEYWORDS": "juggling beat",
    "SYNTAX": "{n=≢∪n|⍵+⍳n←≢⍵}Jv",
    "TYPE": "Monadic function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Convert from hexadecimal",
    "GROUP": "",
    "KEYWORDS": "frombase16 base-16 ₁₆ hex2dec dec()",
    "SYNTAX": "{16⊥¯1+⍵⍳⍨⎕D,⎕A}Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Convert to hexadecimal",
    "GROUP": "",
    "KEYWORDS": "tobase16 base-16 ₁₆ dec2hex hex()",
    "SYNTAX": "{(⎕D,⎕A)[1+16⊥⍣¯1⊢⍵]}Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Constant",
    "DESCRIPTION": "Golden ratio (as a limit)",
    "GROUP": "",
    "KEYWORDS": "phi φ ϕ ɸ 1.618033988749894848204586834365638 0.618033988749894848204586834365638",
    "SYNTAX": "+∘÷⍣=⍨1",
    "TYPE": "Expression"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Constant",
    "DESCRIPTION": "Golden ratio (direct formula)",
    "GROUP": "",
    "KEYWORDS": "phi φ ϕ ɸ 1.618033988749894848204586834365638 0.618033988749894848204586834365638",
    "SYNTAX": "2÷¯1+5*÷2",
    "TYPE": "Expression"
  },
  {
    "CATERGORY": "Circular/Trigonometric",
    "CLASS": "Constant",
    "DESCRIPTION": "tau (2 pi)",
    "GROUP": "",
    "KEYWORDS": "Palais'circleconstant Palais'constant Palaisconstant 6.283185307179586476925286766559006 τ 𝜏",
    "SYNTAX": "○2",
    "TYPE": "Expression"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Valid credit card?",
    "GROUP": "",
    "KEYWORDS": "luhns luhn's formula debitcard? creditcard? checksum valid?",
    "SYNTAX": "(0=10|1⊥∘,0 10⊤⊢×∘⌽1 2⍴⍨≢)",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Transitive closure",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(∨.∧⍨∨⊢)⍣≡",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "Main diagonal of matrix",
    "GROUP": "",
    "KEYWORDS": "table",
    "SYNTAX": "1 1∘⍉Ym",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Sort matrix Ym according to column(s) I",
    "GROUP": "",
    "KEYWORDS": "order sort() sortby() table sorting reordering ordering",
    "SYNTAX": "I{⍵[⍋⍵[;⍺];]}Ym",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Evaluate polynomial with factors Mv in descending order for point(s) Nv",
    "GROUP": "",
    "KEYWORDS": "apply sort sorting reordering ordering",
    "SYNTAX": "Mv⊥⍨∘⍪Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Tacit",
    "DESCRIPTION": "Move elements Yv (which are members of Xv) to the front of Xv",
    "GROUP": "",
    "KEYWORDS": "promote",
    "SYNTAX": "Xv(∩,~)Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Dfn",
    "DESCRIPTION": "Non-unique major cells",
    "GROUP": "",
    "KEYWORDS": "duplicated duplicates nonunique",
    "SYNTAX": "{({1≠≢⍵}⌸⍵)⌿∪⍵}Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "grep: Globally search D with Regular expression C and Print",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "C(⎕S'%'⍠'ML'1)D",
    "TYPE": "Monadic Operator"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Geometric mean",
    "GROUP": "",
    "KEYWORDS": "average GM()",
    "SYNTAX": "(×⌿*÷∘≢)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Harmonic mean",
    "GROUP": "",
    "KEYWORDS": "average subcontrary mean H()",
    "SYNTAX": "(≢÷+⌿∘÷)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Geometric-harmonic mean",
    "GROUP": "",
    "KEYWORDS": "average GHM()",
    "SYNTAX": "(⊃((×⌿*÷∘≢),(≢÷+⌿∘÷))⍣≡)Nv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Arithmetic-harmonic mean",
    "GROUP": "",
    "KEYWORDS": "average AGM()",
    "SYNTAX": "(⊃((+⌿÷≢),(×⌿*÷∘≢))⍣≡)Nv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "Tacit",
    "DESCRIPTION": "Celcius to Fahrenheit",
    "GROUP": "",
    "KEYWORDS": "°Fahrenheit °Celcius f2c() ftoc() convert",
    "SYNTAX": "(32+1.8∘×)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "Tacit",
    "DESCRIPTION": "Fahrenheit to Celcius",
    "GROUP": "",
    "KEYWORDS": "°Fahrenheit °Celcius c2f() ctof() convert",
    "SYNTAX": "(1.8÷⍨¯32∘+)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Aspect ratio of a triangle given its side lengths",
    "GROUP": "",
    "KEYWORDS": "AR()",
    "SYNTAX": "(×/⊢÷+/-2×⊢)Nv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Set",
    "CLASS": "Dfn",
    "DESCRIPTION": "Modes: most frequently occuring major cells",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "{⍵⌷⍨⊂0~⍨⊢/⊢⌸⍵}Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "Tacit",
    "DESCRIPTION": "Convert from unsigned short integers to signed short integers",
    "GROUP": "",
    "KEYWORDS": "datarepresentation",
    "SYNTAX": "(¯128+256|128∘+)J",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Js-bit Grey code",
    "GROUP": "",
    "KEYWORDS": "reflected binary minimum error cyclic permutation binary progression",
    "SYNTAX": "(2∘*↑(⌽2*⍳)⊖∘⍉⍴∘2⊤2/∘⍳2∘*)Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Dop",
    "DESCRIPTION": "Segmented scan: like f\\ but starting over whenever indicated by Av",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "cumulativereduce rowwise sub-vectors sub-lists partitioned subvectors sublists",
    "SYNTAX": "Av f{⊃,/⍺⍺\\¨⍺⊂⍵}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Ratio of each number in a list to its predecessor: (N[2]÷N[1])(N[3]÷N[2])(N[4]÷N[3])…",
    "GROUP": "",
    "KEYWORDS": "pairwiseratios vector",
    "SYNTAX": "(¯2÷/⊢)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Tacit",
    "DESCRIPTION": "Are all cells identical?",
    "GROUP": "",
    "KEYWORDS": "allsame? allequal? nounique?",
    "SYNTAX": "1=∘≢∪",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Tacit",
    "DESCRIPTION": "Are all cells distinct?",
    "GROUP": "",
    "KEYWORDS": "alldifferent? allunequal? noduplicates?",
    "SYNTAX": "≢=∘≢∪",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Tacit",
    "DESCRIPTION": "Are any cells identical?",
    "GROUP": "",
    "KEYWORDS": "anysame? anyequal? anyduplicates?",
    "SYNTAX": "≢>∘≢∪",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Tacit",
    "DESCRIPTION": "Are any cells distinct?",
    "GROUP": "",
    "KEYWORDS": "anydifferent? anyunequal? anyunique?",
    "SYNTAX": "1<∘≢∪",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Tacit",
    "DESCRIPTION": "Inverse: find Z such that Y ≡ f Z",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "f⁻¹(x) f′(x) fʹ(x) opposite revert",
    "SYNTAX": "(f⍣¯1)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Tacit",
    "DESCRIPTION": "Inverse: find Z such that Y ≡ X f Z",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "f⁻¹(x,y) f′(x,y) fʹ(x,y) opposite revert",
    "SYNTAX": "X(f⍣¯1)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "All possible subvectors of length Is (Yv must be simple)",
    "GROUP": "",
    "KEYWORDS": "sub-string substring sub-vector sub-sequence subsequence sub-list subvector sublist sub-vectors segmented sub-lists partitioned sublists",
    "SYNTAX": "Is,/Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "All possible subvectors grouped by length (Yv must be simple)",
    "GROUP": "",
    "KEYWORDS": "sub-strings substrings sub-vectors sub-sequences subsequences segmented sub-lists partitioned sublists",
    "SYNTAX": "(⍳∘≢,/¨⊂)Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Dop",
    "DESCRIPTION": "If: replace/apply if Bs",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "conditional amend change",
    "SYNTAX": "X(f{⍺←⊢ ⋄ ⍺(⍺⍺⊣⊢)⍣⍵⍵⊢⍵}Bs)Y",
    "TYPE": "Ambivalent Monadic Function, Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Strictly positive?",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "0∘<N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Non-negative?",
    "GROUP": "",
    "KEYWORDS": "nonnegative?",
    "SYNTAX": "0∘≤N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Zero?",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "0∘=N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Non-positive?",
    "GROUP": "",
    "KEYWORDS": "nonpositive?",
    "SYNTAX": "0∘≥N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Strictly negative?",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "0∘>N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Non-zero?",
    "GROUP": "",
    "KEYWORDS": "nonzero?",
    "SYNTAX": "0∘≠N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "Dfn",
    "DESCRIPTION": "Import workspace content to namespace",
    "GROUP": "",
    "KEYWORDS": "load include fetch get",
    "SYNTAX": "{(⍎⍵⎕NS⍬).⎕CY⍵}Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Dfn",
    "DESCRIPTION": "Union (∪) on major cells of any rank",
    "GROUP": "",
    "KEYWORDS": "union setor",
    "SYNTAX": "X{⍺⍪⍵/⍨(≢⍺)<⍺⍳⍵}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Dfn",
    "DESCRIPTION": "Intersection (∩) on major cells for any rank",
    "GROUP": "",
    "KEYWORDS": "intersection setand",
    "SYNTAX": "X{⍺⌿⍨(≢⍵)>⍵⍳⍺}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Tacit",
    "DESCRIPTION": "Membership (∊) on major cells for any rank",
    "GROUP": "",
    "KEYWORDS": "isin membership containedin has memberof",
    "SYNTAX": "X(⊢∘≢≥⍳⍨)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Dfn",
    "DESCRIPTION": "Without (~) on major cells for any rank",
    "GROUP": "",
    "KEYWORDS": "butnot except setdifference setsubtraction setminus",
    "SYNTAX": "X{⍺⌿⍨(≢⍵)<⍵⍳⍺}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Cyclic compression of successive blanks",
    "GROUP": "",
    "KEYWORDS": "delete trim reformat extraneous spaces multiple",
    "SYNTAX": "' '∘(⊢(/⍨)1(⊢∨⌽)≠)Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Solutions of quadratic equation Nv₁x²+Nv₂x+Nv₃=0",
    "GROUP": "",
    "KEYWORDS": "coefficients f(x)=ax²+bx+c=0 f(x)=ax^2+bx+c=0",
    "SYNTAX": "(⊃÷¯2÷2∘⊃-¯1 1×0.5*⍨(×⍨2∘⊃)-(×/4@2))Nv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "A magic square, odd side Js",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "((⍳-∘⌈÷∘2)(⊣⊖⌽),⍨⍴∘⍳×⍨)Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dop",
    "DESCRIPTION": "Is-replicate along new dimension at fractional dimension Ms",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "copy repeat addaxis increaserank",
    "SYNTAX": "Is(Js{(⍋⍋⍺⍺,⍳≢⍴⍵)⍉⍵⍴⍨⍺,⍴⍵})Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dfn",
    "DESCRIPTION": "Adding an empty cell into Y at fractional position Ms",
    "GROUP": "",
    "KEYWORDS": "expand insert",
    "SYNTAX": "Ms{⍵⍀⍨(⌈⍺)≠⍳1+≢⍵}Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dfn",
    "DESCRIPTION": "Adding an empty cell into Y at fractional positions Mv",
    "GROUP": "",
    "KEYWORDS": "expand insert",
    "SYNTAX": "Mv{⍵⍀⍨~(⍳(≢⍺)+≢⍵)∊(⌊⍺)+⍳≢⍺}Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Tacit",
    "DESCRIPTION": "Apply function f (optionally with left argument X) to last cell of Y",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "onlast",
    "SYNTAX": "X f@(1↑⍨∘-≢)Y",
    "TYPE": "Ambivalent Monadic Function, Dyadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "All axes of array Y",
    "GROUP": "",
    "KEYWORDS": "dimensions",
    "SYNTAX": "⍳∘≢∘⍴Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Dfn",
    "DESCRIPTION": "All binary representations up to Js (truth table)",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "{⍉2⊥⍣¯1⊢0,⍳⍵}Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Dfn",
    "DESCRIPTION": "All elements true (∧/) on each subvector of Bv partioned by Av (fast ∧/¨Av⊂Bv)",
    "GROUP": "",
    "KEYWORDS": "speed quick sub-vector",
    "SYNTAX": "Av{(⍺⌿⍵)∧1(⍵⌿⊖)⍺⌿⍨⍵≤⍺}Bv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "All tuples of corresponding elements of ⍳¨Yv (for small Yv)",
    "GROUP": "",
    "KEYWORDS": "indices",
    "SYNTAX": ",∘⍳Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "All tuples of corresponding elements of ⍳¨Yv (for large Yv)",
    "GROUP": "",
    "KEYWORDS": "indices",
    "SYNTAX": "(⍉1+⊢⊤¯1+∘⍳×/)Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Boolean test: Are all true?",
    "GROUP": "",
    "KEYWORDS": "forall ∀",
    "SYNTAX": "∧/Bv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Constant",
    "DESCRIPTION": "An expression giving itself",
    "GROUP": "",
    "KEYWORDS": "quine",
    "SYNTAX": "1⌽,⍨9⍴'''1⌽,⍨9⍴'''",
    "TYPE": ""
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Any element true (∨/) on each subvector of Bv partitioned by Av (fast ∨/¨Av⊂Bv)",
    "GROUP": "",
    "KEYWORDS": "speed quick sub-vector",
    "SYNTAX": "Av{(⍺⌿⍵)≥1(⍵⌿⊖)⍺⌿⍨⍵∨⍺}Bv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Any? (row-wise)",
    "GROUP": "",
    "KEYWORDS": "anyone? forany thereexists ∃",
    "SYNTAX": "∨/BA",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Dop",
    "DESCRIPTION": "Applying to columns action f defined on rows",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "",
    "SYNTAX": "f{⍉⍺⍺⍉⍵}Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Angle of right triangle with height M and width N",
    "GROUP": "",
    "KEYWORDS": "pythagorean",
    "SYNTAX": "M(¯3○÷)N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Area of triangle with side lengths N",
    "GROUP": "",
    "KEYWORDS": "Heron's formula",
    "SYNTAX": "0.5∘(⊣*⍨+.××.-0,⊢)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Arithmetic mean value of all elements, also for an empty array",
    "GROUP": "",
    "KEYWORDS": "average arithmeticmean() AM() avg()",
    "SYNTAX": "(+/∘,÷(×/⍴))N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Constant",
    "DESCRIPTION": "Arithmetic precision of the system (in decimals)",
    "GROUP": "",
    "KEYWORDS": "comparison tolerance fuzz IEEE754 precision floatingpoint",
    "SYNTAX": "17×2-645=⎕FR",
    "TYPE": ""
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Array with shape of X and content of Y",
    "GROUP": "",
    "KEYWORDS": "reshape mould mold form fill",
    "SYNTAX": "X⍴⍨∘⍴⍨Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Dfn",
    "DESCRIPTION": "Cardinals Up (ranking, shareable)",
    "GROUP": "",
    "KEYWORDS": "ascendingcardinalnumbers",
    "SYNTAX": "{⌊2÷⍨(⍋⍋NV)+⌽⍋⍋⌽⍵}Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Average (mean value) of elements of N along direction Is",
    "GROUP": "",
    "KEYWORDS": "average arithmeticmean() AM() avg() axis dimension",
    "SYNTAX": "Is{(+/[⍺]÷⍺⊃⍴)⍵}N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Avoiding division by zero error (gives zero)",
    "GROUP": "",
    "KEYWORDS": "division over ⁄",
    "SYNTAX": "M{⎕DIV←1⋄⍺÷⍵}N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Primitive",
    "DESCRIPTION": "Avoiding parentheses by swapping arguments in (X,Y) f Z",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "commute switch tildediaeresis swap frown",
    "SYNTAX": "Z f⍨X,Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Binary format of decimal number Js",
    "GROUP": "",
    "KEYWORDS": "base-2 base2",
    "SYNTAX": "{∊⍕¨2⊥⍣¯1⊢⍵}Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Mask for blank rows",
    "GROUP": "",
    "KEYWORDS": "spaces empty filter",
    "SYNTAX": "(∧/' '∘=)D",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Boolean vector of length Js with ones in locations I (inverse of ⍸Bv)",
    "GROUP": "",
    "KEYWORDS": "inversion",
    "SYNTAX": "I∊∘⍳Js",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Boolean vector of length Js with zeros in locations I",
    "GROUP": "",
    "KEYWORDS": "zeroes",
    "SYNTAX": "I(~∊∘⍳)Js",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Inserting Xv after every element of Yv",
    "GROUP": "",
    "KEYWORDS": "merge",
    "SYNTAX": "Xv(,,⍤0 1⍨)Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Inserting Xv before every element of Yv",
    "GROUP": "",
    "KEYWORDS": "merge",
    "SYNTAX": "Xv(,,⍤1 0)Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Centering flush left character array",
    "GROUP": "",
    "KEYWORDS": "centre align",
    "SYNTAX": "{⍵⌽⍨-⌊2÷⍨+/∧\\' '=⌽⍵}Dm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Centering text line Dv into a field of width Is",
    "GROUP": "",
    "KEYWORDS": "centre align",
    "SYNTAX": "Is(⊢↑⍨∘-∘⌊2÷⍨+∘≢)Dv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Dfn",
    "DESCRIPTION": "Changing an index origin dependent argument to act as ⎕IO=0",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "{⎕IO+⍵}J",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Dfn",
    "DESCRIPTION": "Changing an index origin dependent argument to act as ⎕IO=1",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "{⍵+⎕IO-1}J",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Dfn",
    "DESCRIPTION": "Changing an index origin dependent result to be as ⎕IO=0",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "{-⎕IO-⍵}J",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Dfn",
    "DESCRIPTION": "Changing an index origin dependent result to be as ⎕IO=1",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "{⍵+~⎕IO}J",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Changing connection matrix Jm (¯1 to 1) to a node matrix",
    "GROUP": "",
    "KEYWORDS": "graph connectivity",
    "SYNTAX": "(⍳∘≢+.×⍨1 ¯1∘.=⍉)Jm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Changing connectivity list Jm to a connectivity matrix",
    "GROUP": "",
    "KEYWORDS": "graph connection",
    "SYNTAX": "{s⍴1@(1+s[1]⊥⍵-1)⊢0⍴⍨×/s←0 0+⌈/,⍵}Jm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Changing connectivity matrix Jm to a connectivity list",
    "GROUP": "",
    "KEYWORDS": "graph connection",
    "SYNTAX": "{(,⍵)/1+s⊤¯1+⍳×/s←⍴⍵}Jm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Changing index of an unfound element to zero",
    "GROUP": "",
    "KEYWORDS": "missing",
    "SYNTAX": "X(⍳|⍨1+∘≢⊣)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Changing index of an unfound element to zero (slow)",
    "GROUP": "",
    "KEYWORDS": "missing",
    "SYNTAX": "X(∊⍨×⍳)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Changing lengths IV of subvectors to ending indicators.",
    "GROUP": "",
    "KEYWORDS": "partitions",
    "SYNTAX": "(+\\∊⍨∘⍳+/)Jv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Changing lengths IV of subvectors to starting indicators.",
    "GROUP": "",
    "KEYWORDS": "partitions",
    "SYNTAX": "(¯1⌽+\\∊⍨∘⍳+/)Jv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Changing node matrix IM (starts,ends) to a connection matrix.",
    "GROUP": "",
    "KEYWORDS": "graph connectivity",
    "SYNTAX": "(-/(⍳⌈/∘,)∘.=⍉)Im",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Changing starting indicators Bv of subvectors to lengths",
    "GROUP": "",
    "KEYWORDS": "partitions",
    "SYNTAX": "(¯2-/∘⍸,∘1)Bv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "Dfn",
    "DESCRIPTION": "Return default value Y if input is empty",
    "GROUP": "",
    "KEYWORDS": "prompt fallback",
    "SYNTAX": "{' '∧.=⍞:⍵ ⋄ ⍵}Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Tacit",
    "DESCRIPTION": "Is Ms in range 1…Ns?",
    "GROUP": "",
    "KEYWORDS": "inrange? valid?",
    "SYNTAX": "Ms∊∘⍳Ns",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "Picking one of two values according to Bs",
    "GROUP": "",
    "KEYWORDS": "Choosing choose",
    "SYNTAX": "Bs(⊢⊃⍨1+⊣)Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "Picking based on cyclic offset (as ⎕IO=0)",
    "GROUP": "",
    "KEYWORDS": "Choosing choose",
    "SYNTAX": "Bs(⊃⌽)Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "Picking one of three values according to sign of Ms",
    "GROUP": "",
    "KEYWORDS": "Choosing choose signum",
    "SYNTAX": "Ms(⊢⊃⍨2+∘×⊣)Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Choosing Is random elements of ⍳Js with replacement",
    "GROUP": "",
    "KEYWORDS": "roll",
    "SYNTAX": "Is(?⍴)Js",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Choosing grading direction (¯1,0,1) dynamically during execution",
    "GROUP": "",
    "KEYWORDS": "sorting ascending descending grade",
    "SYNTAX": "Is(⍋×∘⍋∘⍋)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Classification of elements Nv into Is ranges of equal size",
    "GROUP": "",
    "KEYWORDS": "classify bucket bin group intervals",
    "SYNTAX": "Is{+/((⊢×⍺÷⌈/)⍵-⌊/⍵)∘.≥¯1+⍳⍺}Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Coefficients of exponential (curve) fit of points (Mv,Nv)",
    "GROUP": "",
    "KEYWORDS": "fitting model",
    "SYNTAX": "Mv(*@1⊢∘⍟⌹0 1∘.*⍨⊣)Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Tacit",
    "DESCRIPTION": "Comparing vector Yv with rows of array X",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "X∧.=Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Tacit",
    "DESCRIPTION": "Comparison of successive rows",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(∧/2=⌿⊢)Ym",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Compound interest for principals N[1] at rates N[2] in times N[3]",
    "GROUP": "",
    "KEYWORDS": "values table",
    "SYNTAX": "(⊃∘.×3∘⊃∘.*⍨1+2∘⊃)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "System",
    "DESCRIPTION": "Contitional Abort (cut stack back one frame if Bs)",
    "GROUP": "",
    "KEYWORDS": "stop",
    "SYNTAX": "⍎Bs⍴'→'",
    "TYPE": ""
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Conditional change of elements of N to one according to A",
    "GROUP": "",
    "KEYWORDS": "1",
    "SYNTAX": "A*∘~⍨N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dop",
    "DESCRIPTION": "Conditional drop of Iv elements from array Y",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "",
    "SYNTAX": "Iv(A{⍵↓⍨⍺⍺×⍺})Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Conditional drop of last element of Y",
    "GROUP": "",
    "KEYWORDS": "trailing cell",
    "SYNTAX": "As↓⍨∘-⍨Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Conditional elementwise change of sign",
    "GROUP": "",
    "KEYWORDS": "signum",
    "SYNTAX": "A(⊢×¯1*⊣)N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "Tacit",
    "DESCRIPTION": "Conditional in text",
    "GROUP": "",
    "KEYWORDS": "message true false Boolean",
    "SYNTAX": "('correct',⍨'in'/⍨~)Bs",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Consecutive integers from Is to Js (arithmetic progression)",
    "GROUP": "",
    "KEYWORDS": "range seq() sequence …",
    "SYNTAX": "Is((¯1+⊣)+∘⍳1+-⍨)Js",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Continued fraction: 1+÷2+÷3+÷4+÷5+÷6+÷…Js",
    "GROUP": "",
    "KEYWORDS": "series sequence",
    "SYNTAX": "+∘÷/∘⍳Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "System",
    "DESCRIPTION": "Continuing execution",
    "GROUP": "",
    "KEYWORDS": "resume thread",
    "SYNTAX": "→⎕LC",
    "TYPE": ""
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "Tacit",
    "DESCRIPTION": "Safe conversion of string into integer",
    "GROUP": "",
    "KEYWORDS": "eval() evaluate atoi() execute secure number",
    "SYNTAX": "(10⊥¯1+⎕D∘⍳)Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "Dfn",
    "DESCRIPTION": "Conversion of characters to hexadecimal byte representation",
    "GROUP": "",
    "KEYWORDS": "characters ord() num() hex() utf8",
    "SYNTAX": "{,⍉3↑(⎕D,⎕A)[1+16 16⊤¯1+'UTF-8'⎕UCS ⍵]}Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "Tacit",
    "DESCRIPTION": "Conversion of each row to a number (default zero)",
    "GROUP": "",
    "KEYWORDS": "eval() evaluate execute atoi() secure number",
    "SYNTAX": "((⊃2⊃⎕VFI)⍤1)Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Conversion of indices Jm of array to indices of raveled array",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(1+⍴⊥¯1∘+)Jm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Conversion of set of indices Jv to a mask",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(⊢∊⍨∘⍳⌈/)Jv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "Tacit",
    "DESCRIPTION": "Convert character or numeric data into numeric (unsafe)",
    "GROUP": "",
    "KEYWORDS": "normalise numbers",
    "SYNTAX": "⍎∘⍕Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "Corner element of a (non-empty) array Y[1;1;1…]",
    "GROUP": "",
    "KEYWORDS": "first top-left topleft northwest north-west NW",
    "SYNTAX": "⊂∘⊃Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Tacit",
    "DESCRIPTION": "Counting pairwise matches (equal elements) in two vectors",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Xv+.=Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "Tacit",
    "DESCRIPTION": "Decoding numeric codes J packed with field widths Iv (ZYYYZZZ:1 3 2)",
    "GROUP": "",
    "KEYWORDS": "unpack",
    "SYNTAX": "Iv(⊢⊤⍨10*⊣)J",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Decommenting a matrix representation of a function (⎕CR)",
    "GROUP": "",
    "KEYWORDS": "uncomment strip comments remove",
    "SYNTAX": "{(∨/a)⌿(⍴⍵)⍴(,a)\\(,a←∧\\('⍝'≠⍵)∨≠\\⍵='''')/,⍵}Dm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dop",
    "DESCRIPTION": "Definite integral of scalar function f in range Nv[1]…Nv[2] with Is steps",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "integration numeric approximation ∫ integrate",
    "SYNTAX": "Is f{a+.×⍺⍺(⊃⍵)-(a←-/⍵÷-⍺)×0.5-⍳⍺}Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Derivate of polynomial Nv",
    "GROUP": "",
    "KEYWORDS": "firstderivative",
    "SYNTAX": "¯1∘(↓×∘⌽∘⍳+∘≢)Nv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Diagonal matrix with elements of Yv (filled appropriately)",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(⌽∘⍳∘≢⌽⊢,(0 ¯1+≢)⍴0∘⍴)Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Diagonal ravel",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(,⌷⍨∘⊂∘⍋1⊥⍴⊤¯1+∘⍳×/∘⍴)Ym",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Differences of successive elements of N along direction Is",
    "GROUP": "",
    "KEYWORDS": "deltas changes steps",
    "SYNTAX": "Is{¯2-/[⍺]⍵}N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Direct matrix product",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Mm(1 3 2 4⍉∘.×)Nm",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Distribution of Y into intervals with cut-offs X",
    "GROUP": "",
    "KEYWORDS": "bin group range bucket",
    "SYNTAX": "X({¯1+≢⍵}⌸⍸,⍨0,∘⍳∘≢⊣)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Divisibility table",
    "GROUP": "",
    "KEYWORDS": "divides divisor",
    "SYNTAX": "(0=⊢∘.|⍨∘⍳⌈/)Jv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Drop Is columns from matrix Ym",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Is(⊢↓⍨0,⊣)Ym",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Drop Is rows from matrix Ym",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Is↓Ym",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Dfn",
    "DESCRIPTION": "Copying each cell of Y until before next 1 in Av",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Av{⍵⌷⍨⊂1⌈⌈\\⍺×⍳≢⍺}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Duplicating vector Yv Is times",
    "GROUP": "",
    "KEYWORDS": "copying extending recycling recycle",
    "SYNTAX": "Is(×∘⍴⍴⊢)Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Editing Dv with Cv ('/' to delete and ',' to insert)",
    "GROUP": "",
    "KEYWORDS": "line editor",
    "SYNTAX": "Cv{((~(≢b↑⍵)↑'/'=⍺)/b↑⍵),(1↓b↓⍺),⍵↓⍨b←+/∧\\⍺≠','}Dv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Elements of Jv divisible by Is",
    "GROUP": "",
    "KEYWORDS": "filter divisors",
    "SYNTAX": "Is(⊢∩∧)Jv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Empty array along first axis",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "0∘⌿Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Constant",
    "DESCRIPTION": "zero-by-zero numeric matrix",
    "GROUP": "",
    "KEYWORDS": "0 0⍴0",
    "SYNTAX": "⍬⊤⍬",
    "TYPE": ""
  },
  {
    "CATERGORY": "System",
    "CLASS": "Constant",
    "DESCRIPTION": "Packing current date (YYMMDD)",
    "GROUP": "",
    "KEYWORDS": "Encoding",
    "SYNTAX": "100⊥100|3↑⎕TS",
    "TYPE": ""
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Ending points for Is fields of width Js",
    "GROUP": "",
    "KEYWORDS": "partition vector",
    "SYNTAX": "Is(×⍴1↑⍨∘-⊢)Js",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Beginning points for Is fields of width Js",
    "GROUP": "",
    "KEYWORDS": "partition vector",
    "SYNTAX": "Is(×⍴1↑⍨⊢)Js",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Tacit",
    "DESCRIPTION": "Beginning points of groups of equal elements",
    "GROUP": "",
    "KEYWORDS": "runs sequences boolean mask",
    "SYNTAX": "(1,¯1↓2≠⌿⊢↑⍨1+≢)Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Tacit",
    "DESCRIPTION": "Ending points of groups of equal elements",
    "GROUP": "",
    "KEYWORDS": "runs sequences boolean mask",
    "SYNTAX": "(1,⍨¯1↓2≠⌿⊢↑⍨1+≢)Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Determinant of two-row matrix",
    "GROUP": "",
    "KEYWORDS": "det()",
    "SYNTAX": "{-/×⌿0 1⌽⍵}Nm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Dop",
    "DESCRIPTION": "Fast: Apply costly monadic function f on repetitive arguments",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "performance memoisation memoization quick speed",
    "SYNTAX": "f{(⊂⍵⍳⍨∪⍵)⌷⍺⍺∪⍵}Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Dfn",
    "DESCRIPTION": "Execution of expression Dv with default value X",
    "GROUP": "",
    "KEYWORDS": "fallback",
    "SYNTAX": "X{⍎⍵,'⍺'⍴⍨' '∧.=⍵}Dv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Expansion vector for Y with zeros after indices Iv",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Iv(⊢∘≢≥∘⍋⊢∘⍳∘≢,⊣)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Extending a distance table to next leg",
    "GROUP": "",
    "KEYWORDS": "extension",
    "SYNTAX": "Mm⌊.+Nm",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Extending a transitive binary relation",
    "GROUP": "",
    "KEYWORDS": "extension",
    "SYNTAX": "Am∨.∧Bm",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "Tacit",
    "DESCRIPTION": "Segment lengths from ending indices",
    "GROUP": "",
    "KEYWORDS": "chunk part",
    "SYNTAX": "(¯2-/∘⍸1∘,)Iv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "Tacit",
    "DESCRIPTION": "Segment lengths from beginning indices",
    "GROUP": "",
    "KEYWORDS": "chunk part",
    "SYNTAX": "(¯2-/∘⍸,∘1)Iv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "FIFO stock Nv decremented by Ms",
    "GROUP": "",
    "KEYWORDS": "first-in-first-out warehouse",
    "SYNTAX": "Ms{¯2-/0,0⌈⍺-⍨+\\⍵}Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dfn",
    "DESCRIPTION": "Extending Y with last cell of Y to length Is",
    "GROUP": "",
    "KEYWORDS": "filling enlongating",
    "SYNTAX": "Is{⍵⍪(⍺-≢⍵)⌿¯1↑⍵}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "First column as a column matrix (column vector)",
    "GROUP": "",
    "KEYWORDS": "leftmostcolumn leading",
    "SYNTAX": "(1∘↑⍤1)Ym",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "Last column as a column matrix (column vector)",
    "GROUP": "",
    "KEYWORDS": "rightmostcolumn trailing",
    "SYNTAX": "(¯1∘↑⍤1)Ym",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "First row as a row matrix (row vector)",
    "GROUP": "",
    "KEYWORDS": "topmostrow leading",
    "SYNTAX": "(1∘↑)Ym",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "Last row as a row matrix (row vector)",
    "GROUP": "",
    "KEYWORDS": "bottommostrow trailing",
    "SYNTAX": "(¯1∘↑)Ym",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "First group of ones",
    "GROUP": "",
    "KEYWORDS": "sequence run trues truths",
    "SYNTAX": "(⊢∧(∧\\∨\\=⊢))B",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "First occurrence of string Cv in string Dv",
    "GROUP": "",
    "KEYWORDS": "find locate positionof locating",
    "SYNTAX": "Cv(1⍳⍨⍷)Dv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "First one (<\\) in each subvector of Bv indicated by Av (fast ∊<\\¨Av⊂Bv)",
    "GROUP": "",
    "KEYWORDS": "speed quick sub-vector",
    "SYNTAX": "Av(∧∨⊢{⍵\\2</0,⍵/⍺}∨)Bv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "First ones in groups of ones",
    "GROUP": "",
    "KEYWORDS": "1s runs sequences blocks",
    "SYNTAX": "(⊢>¯1↓0,⊢)Bv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "First word in Dv",
    "GROUP": "",
    "KEYWORDS": "initial leading leftmost nonspace non-space",
    "SYNTAX": "(⊢↑⍨¯1+⍳∘' ')Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Formatting N with Jv decimals in fields of width Iv",
    "GROUP": "",
    "KEYWORDS": "widths",
    "SYNTAX": "Iv Jv⍕⍨∘(∊,⍤0/)N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Formatting with zero values replaced with blanks",
    "GROUP": "",
    "KEYWORDS": "hidden 0s empty cells space",
    "SYNTAX": "(⍕' '@(0∘=))N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Forming an Is-row matrix with all rows being Yv",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Is(,∘≢⍴⊢)Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Using sample row Yv to form an initially empty matrix for later expansion",
    "GROUP": "",
    "KEYWORDS": "default initialise initialize",
    "SYNTAX": "(⍉0/⍪)Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Forming first row of a matrix for later expansion",
    "GROUP": "",
    "KEYWORDS": "default initialise initialize",
    "SYNTAX": "⍉∘⍪Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Unicode frame a matrix",
    "GROUP": "",
    "KEYWORDS": "border box",
    "SYNTAX": "{⊃{⍺@(⊂1 1)⌽⍉⍵}/'┌┐┘└',{⍺⍪⌽⍉⍵}/'─│─│',⊂⍵}Dm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "ASCII frame a matrix",
    "GROUP": "",
    "KEYWORDS": "border box",
    "SYNTAX": "{'+'@(⊂1 1)∘⌽∘⍉⍣4⊃(⍪∘⌽∘⍉)/'─|─|',⊂⍵}Dm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Input of one character with default Ds",
    "GROUP": "",
    "KEYWORDS": "prompt default fallback",
    "SYNTAX": "{⊃⍞,⍵}Ds",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Giving a default value for input of scalar number",
    "GROUP": "",
    "KEYWORDS": "prompt default fallback",
    "SYNTAX": "(⊃{2⊃⎕VFI⍞},⊢)Ns",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Dfn",
    "DESCRIPTION": "Grade down (⍒) for sorting subarrays of Y having lengths Iv (≢Y ←→ +/Iv)",
    "GROUP": "",
    "KEYWORDS": "sub-arrays sub-vectors subvectors substrings sub-strings",
    "SYNTAX": "Iv{g⌷⍨⊂⍋(+\\(⍳≢⍵)∊+\\1,⍺)⌷⍨⊂g←⍒⍵}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Dfn",
    "DESCRIPTION": "Grade down (⍒) for sorting subarrays of Y indicated by Av",
    "GROUP": "",
    "KEYWORDS": "sub-arrays sub-vectors subvectors substrings sub-strings",
    "SYNTAX": "Av{g[⍋(+\\⍺)[g←⍒⍵]]}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Dfn",
    "DESCRIPTION": "Grade up (⍋) for sorting subarrays of Y having lengths Iv (≢Y ←→ +/Iv)",
    "GROUP": "",
    "KEYWORDS": "sub-arrays sub-vectors subvectors substrings sub-strings",
    "SYNTAX": "Iv{g⌷⍨⊂⍋(+\\(⍳≢⍵)∊+\\1,⍺)⌷⍨⊂g←⍋⍵}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Dfn",
    "DESCRIPTION": "Grade up (⍋) for sorting subarrays of Y indicated by Av",
    "GROUP": "",
    "KEYWORDS": "sub-arrays sub-vectors subvectors substrings sub-strings",
    "SYNTAX": "Av{g[⍋(+\\⍺)[g←⍋⍵]]}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Grade up of Y according to key X",
    "GROUP": "",
    "KEYWORDS": "custom sort order",
    "SYNTAX": "X(⍋⍳)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dop",
    "DESCRIPTION": "Graph of scalar function f at points Nv",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "plot draw",
    "SYNTAX": "f{' ∘'[1+(⊢∘.=⍨∘⌽¯1+⌊/+∘⍳1+⌈/-⌊/)⌊0.5+⍺⍺ ⍵]}Nv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Tacit",
    "DESCRIPTION": "Handling array Y temporarily as a vector (optionally with left argument X)",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "columnheadings columnnumbers",
    "SYNTAX": "X f@(1⍴⍨⍴)Y",
    "TYPE": "Ambivalent Monadic Function, Dyadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Vertically stack digits of ⍳Is (helps locating column positions)",
    "GROUP": "",
    "KEYWORDS": "locate",
    "SYNTAX": "(1 0⍕10 10⊤⍳)Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Hilbert matrix of order Is",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(÷¯1+∘.+⍨∘⍳)Is",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Histogram (distribution barchart, down the page)",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "({'⎕'/⍨¯1+≢⍵}⌸⊢,⍨∘⍳⌈/)Jv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Identity matrix of shape of matrix Nm",
    "GROUP": "",
    "KEYWORDS": "diagonal",
    "SYNTAX": "(⍴⍴1,0∘×)Nm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Tacit",
    "DESCRIPTION": "Identity of two sets",
    "GROUP": "",
    "KEYWORDS": "equivalence",
    "SYNTAX": "Xv(∧/∊⍨,∊)Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Increasing absolute value without change of sign",
    "GROUP": "",
    "KEYWORDS": "adjust decrease magnitude preserve signum direction",
    "SYNTAX": "M(⊢∘××+∘|)N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dfn",
    "DESCRIPTION": "Increasing rank of Y to rank of X",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "X{⍵⍴⍨(1⍴⍨-/≢∘⍴¨⍺⍵),⍴⍵}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Increasing the leading dimension of Y to multiple of IS",
    "GROUP": "",
    "KEYWORDS": "1st axis divisibleby pad extend",
    "SYNTAX": "Is(⊢↑⍨⊢∘≢+|∘-∘≢)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Increasing the dimensions of Y to multiples of Iv",
    "GROUP": "",
    "KEYWORDS": "allaxes divisibleby pad extend",
    "SYNTAX": "Iv(⊢↑⍨⊢∘⍴+|∘-∘⍴)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Incrementing cyclic counter J with upper limit I",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "I(1+|)J",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Index of (first) maximum call of Y",
    "GROUP": "",
    "KEYWORDS": "indexin indexof find locate positionof largest biggest greatest locating",
    "SYNTAX": "(⊃⍒)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Index of (first) minimum cell of Y",
    "GROUP": "",
    "KEYWORDS": "indexin indexof find locate positionof largest smallest least locating",
    "SYNTAX": "(⊃⍋)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Index of first differing element in X and Y",
    "GROUP": "",
    "KEYWORDS": "indexin indexof find locate positionof unequal different 1st locating",
    "SYNTAX": "X(⊃∘⍸≠)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Index of first occurrence of elements of Y in X",
    "GROUP": "",
    "KEYWORDS": "indexin indexof find locate positionof any 1st locating",
    "SYNTAX": "X(⌊/⍳)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Index of first consecutive occurrence of major cells of X in Y",
    "GROUP": "",
    "KEYWORDS": "indexin indexof find locate positionof subarray sub-array locating",
    "SYNTAX": "Y(1⍳⍨∘(⊃⍤¯1)⍷)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Index of first one after index Is in Bv",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "I(⊣+1⍳⍨↓)B",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Index of first satisfied condition in B",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(⊃⍸)B",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Primitive",
    "DESCRIPTION": "Index of keys Y in key vector Xv",
    "GROUP": "",
    "KEYWORDS": "find locate positionof locating",
    "SYNTAX": "Xv⍳Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Index of last minimum element of Y",
    "GROUP": "",
    "KEYWORDS": "find locate positionof smallest least locating",
    "SYNTAX": "(⊢/⍒)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Index of last maximum element of Y",
    "GROUP": "",
    "KEYWORDS": "find locate positionof greatest biggest locating",
    "SYNTAX": "(⊢/⍋)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Last indices in X of major cells Y",
    "GROUP": "",
    "KEYWORDS": "indexin indexof find locate positionof locating",
    "SYNTAX": "X{l-(l←1+≢⍺)|⍵⍳⍨⊖⍺}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "First indices in X of major cells Y, 0 if not found",
    "GROUP": "",
    "KEYWORDS": "indexin indexof find locate positionof 1st zero locating",
    "SYNTAX": "X(⍳|⍨1+∘≢⊣)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Last indices in X of major cells Y, 0 if not found",
    "GROUP": "",
    "KEYWORDS": "indexin indexof find locate positionof zero locating",
    "SYNTAX": "X((1+∘≢⊣)-⍳⍨∘⊖⍨)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Last indices in X of major cells Y, counted from the rear",
    "GROUP": "",
    "KEYWORDS": "indexin indexof find locate positionof locating",
    "SYNTAX": "X⍳⍨∘⌽⍨Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Dfn",
    "DESCRIPTION": "Indexing two-element vector Xv with Boolean values B",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Xv{⍺[1+⍵]}B",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Tacit",
    "DESCRIPTION": "Indicator of first occurrence of each unique major cell of Y",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(⍳⍨=⍳∘≢)XV",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Indices of all occurrences of elements of X in Y",
    "GROUP": "",
    "KEYWORDS": "locate membersof positionsof locating",
    "SYNTAX": "X(⍸∊)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Indices of elements of X in corresponding rows of X (X[i;]⍳Y[i;])",
    "GROUP": "",
    "KEYWORDS": "indexin indexof find locate positionof rowwise row-wise locating",
    "SYNTAX": "X(⍳⍤1)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Indices of all occurrences of elements Y in array X",
    "GROUP": "",
    "KEYWORDS": "locate find positionsof locating",
    "SYNTAX": "X(⍸∊)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Indices of first blanks in rows of array D",
    "GROUP": "",
    "KEYWORDS": "1st spaces row-wise rowwise text",
    "SYNTAX": "(⍳∘' '⍤1)D",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Indices of last non-blanks in rows",
    "GROUP": "",
    "KEYWORDS": "nonblanks nonspaces characters text row-wise rowwise",
    "SYNTAX": "((⊃∘⌽⍸)⍤1≠∘' ')D",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Amend row Is of matrix Ym",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "at substitute merge amend replace update",
    "SYNTAX": "(Xv@Js)Ym",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Expansion vector (left argument for \\ or ⍀) to insert Jv[i] elements before i'th element",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "((+\\∊⍨∘⍳+/)1∘+)Jv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Expansion vector (left argument for \\ or ⍀) to insert Jv[i] elements after i'th element",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "((¯1⌽+\\∊⍨∘⍳+/)1∘+)Jv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dfn",
    "DESCRIPTION": "Expansion vector (left argument for \\ or ⍀) to insert Iv[i] elements after i'th subvector (subvectors indicated by Bv)",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Iv{(⍳(≢⍵)++/⍺)∊+\\1+¯1↓0,⍺\\⍨1⌽⍵}Bv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dop",
    "DESCRIPTION": "Inserting Is Y's into Z after indices Iv",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "",
    "SYNTAX": "Iv(Is{(⊂(1+≢⍵)⌊⍋(⍳≢⍵),⍺⍴⍨⍺⍺×≢⍺)⌷⍵⍪⍵⍵}Y)Z",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dop",
    "DESCRIPTION": "Inserting X into Y after major cell Is",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "",
    "SYNTAX": "X(Is{⍺⍺(↑⍪⍺⍪↓)⍵})Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dfn",
    "DESCRIPTION": "Appending vector Xv to the end of matrix Ym, adjusting width of both as necessary",
    "GROUP": "",
    "KEYWORDS": "inserting stack bottom ontop on-top under",
    "SYNTAX": "Xv{(↑∘⍵⍪⍺↑⍨1∘↓)(⍴⍵)⌈0,≢⍺}Ym",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Inserting Xs after each element of Yv",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Xs(,,⍤0)Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Integer representation of logical vector Bv",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "2∘⊥Bv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dop",
    "DESCRIPTION": "Interpolated value of series Mv=f(Nv) at Ms",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "interpolate extrapolate",
    "SYNTAX": "Mv(Ms{⍺⍺⊥⍺⌹⍵∘.*⌽¯1+⍳≢⍵})Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Cumulative sums (+\\) over subvectors of Nv indicated by Bv",
    "GROUP": "",
    "KEYWORDS": "+⍀ sub-vectors",
    "SYNTAX": "Bv{+\\⍵-⍺\\¯2-/0,⍺/+\\¯1↓0,⍵}Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "First Js figurate numbers",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(+\\+\\∘⍳)Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Dfn",
    "DESCRIPTION": "The Is largest cells of Y in order of occurrence",
    "GROUP": "",
    "KEYWORDS": "biggest greatest",
    "SYNTAX": "Is{⍵⌿⍨(⍋⍒⍵)∊⍳⍺}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Dfn",
    "DESCRIPTION": "The Is smallest cells of Y in order of occurrence",
    "GROUP": "",
    "KEYWORDS": "smallest least",
    "SYNTAX": "Is{Y⌿⍨(⍋⍋⍵)∊⍺}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Dop",
    "DESCRIPTION": "The Is'th subvector of Yv (subvectors indicated by Bv)",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "",
    "SYNTAX": "Bv(Is{⍵⌿⍨⍺⍺=+\\⍺})Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Dfn",
    "DESCRIPTION": "The Is'th subvector of Yv (subvectors separated by Yv[1])",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Is{1↓⍵/⍨⍺=+\\⍵=⊃⍵}Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "Mask to get subvectors with indices Iv as indicated by Bv",
    "GROUP": "",
    "KEYWORDS": "sub-vectors",
    "SYNTAX": "Iv((+\\⊢)∊⊣)Bv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Dfn",
    "DESCRIPTION": "Iv-shaped array of random numbers in range Jv[1]…Jv[2] (inclusively, with replacement)",
    "GROUP": "",
    "KEYWORDS": "between integers",
    "SYNTAX": "Iv{(¯1+⊃⍵)+?⍺⍴1--/⍵}Jv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Joining pairs of ones (fill gaps with ones)",
    "GROUP": "",
    "KEYWORDS": "1s pad parity",
    "SYNTAX": "(≠\\∨⊢)B",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Justifying left",
    "GROUP": "",
    "KEYWORDS": "leftalign left-align",
    "SYNTAX": "{⍵⌽⍨+/∧\\' '=⍵}D",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dop",
    "DESCRIPTION": "Justifying left fields of Yv (lengths Iv) to length Is",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "leftalign left-align",
    "SYNTAX": "Iv(Is{⍵\\⍨,⍺∘.>¯1+⍳⍺⍺})Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Justifying right",
    "GROUP": "",
    "KEYWORDS": "rightalign right-align",
    "SYNTAX": "(⊢⌽⍨1-1⊥⍨' '=⊢)D",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dop",
    "DESCRIPTION": "Justifying right fields of Yv (lengths Iv) to length Is",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "rightalign right-align",
    "SYNTAX": "Iv(Is{⍵\\⍨,⍺∘.>⌽¯1+⍳⍺⍺})Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Padding Yv on the left to width width Is",
    "GROUP": "",
    "KEYWORDS": "extend left-align leftalign text",
    "SYNTAX": "Is↑⍨∘-⍨Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Padding Yv on the right to width width Is",
    "GROUP": "",
    "KEYWORDS": "extend right-align rightalign text",
    "SYNTAX": "Is↑Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Juxtapositioning planes of rank 3 array Y",
    "GROUP": "",
    "KEYWORDS": "merge layers",
    "SYNTAX": "((×⌿2 2⍴1,⍴)⍴2 1 3∘⍉)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "Last major cell of numeric array",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "0∘⊥N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Last ones in groups of ones",
    "GROUP": "",
    "KEYWORDS": "runs blocks groups",
    "SYNTAX": "(2>/⍪∘0)B",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "Tacit",
    "DESCRIPTION": "Last part of packed numeric code ABBB",
    "GROUP": "",
    "KEYWORDS": "unpack",
    "SYNTAX": "1000∘|IA",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Leading ones (∧⍀) in each subvector of Bv indicated by Av",
    "GROUP": "",
    "KEYWORDS": "1s",
    "SYNTAX": "Av(≥{~≠\\⍺\\2≠/1,⍺⌿⍵}⊢)Bv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "Dfn",
    "DESCRIPTION": "Format with leading zeroes for non-negative Jv in fields of width Is",
    "GROUP": "",
    "KEYWORDS": "pad fill align zeros 0s tostringify",
    "SYNTAX": "Is{0 1↓(2↑1+⍺)⍕⍵∘.+,10*⍺}Jv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "Leftmost neighbouring elements (padding at edge)",
    "GROUP": "",
    "KEYWORDS": "neighboring neighbours neighbors lefthand bitshift",
    "SYNTAX": "((¯1↓⊢,⍨1↑0∘⍴)⍤1)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "Leftmost neighbouring elements (cyclically)",
    "GROUP": "",
    "KEYWORDS": "neighboring neighbours neighbors lefthand bitshift",
    "SYNTAX": "¯1∘⌽Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Vertically lengthening matrix Xm to be compatible (for ,) with Ym",
    "GROUP": "",
    "KEYWORDS": "compatibility sameheight adjust",
    "SYNTAX": "Xm↑⍨∘≢Ym",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Lengths of groups of ones in Bv",
    "GROUP": "",
    "KEYWORDS": "runs 1s",
    "SYNTAX": "(0~⍨¯1-2-/∘⍸1,1,⍨~)Bv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Tacit",
    "DESCRIPTION": "Lengths of subvectors of Yv having equal elements",
    "GROUP": "",
    "KEYWORDS": "runs changes identical consistent",
    "SYNTAX": "(¯2-/∘⍸1,1,⍨2≠/⊢)Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Dop",
    "DESCRIPTION": "Giving a default value X for indices beyond end of Y",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "fallback indexing",
    "SYNTAX": "I(X{(⊂⍺⌊1+≢⍵)⌷⍵⍪⍺⍺})Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dop",
    "DESCRIPTION": "Force N to range Ms≤N≤Ns",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "clamp limitrange between –",
    "SYNTAX": "(Ms{⍺⍺⌈⍵⍵⌊⍵}Ns)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Clamp non-negative N to fit in ⍕ field Iv[1 2]",
    "GROUP": "",
    "KEYWORDS": "clamp limitrange format",
    "SYNTAX": "Iv{1(↑⌊⍵⌈↓)(2 2⍴¯1 1 1 ¯0.1)+.×10*(-⊃⌽⍺),-/⍺+⍺>99 0}N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Extracting field number Is from Dv (field separated by first element of Dv)",
    "GROUP": "",
    "KEYWORDS": "select pick partitionedvector segmentedstring index",
    "SYNTAX": "Is{1↓⍵/⍨⍺=+\\⍵=⊃⍵}Dv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Locations of texts between and including quotes",
    "GROUP": "",
    "KEYWORDS": "strings",
    "SYNTAX": "{2∨/0,≠\\⍵=''''}Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Locations of texts between and excluding quotes",
    "GROUP": "",
    "KEYWORDS": "strings",
    "SYNTAX": "{2∧/0,≠\\⍵=''''}Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Matrix of all indices of Y",
    "GROUP": "",
    "KEYWORDS": "element locations flat",
    "SYNTAX": "(¯1⌽⍴⊤∘⍳×/∘⍴)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Matrix with Is columns, each consisting of Yv",
    "GROUP": "",
    "KEYWORDS": "fill",
    "SYNTAX": "Is/∘⍪Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Matrix with Is rows, each consisting of Yv",
    "GROUP": "",
    "KEYWORDS": "fill",
    "SYNTAX": "Is⌿∘⍉∘⍪Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Matrix with Iv[i] leading ones on row i",
    "GROUP": "",
    "KEYWORDS": "1st",
    "SYNTAX": "(⊢∘.≥∘⍳⌈/)Iv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Matrix with Iv[i] leading zeroes on row i",
    "GROUP": "",
    "KEYWORDS": "0s zeros",
    "SYNTAX": "(⊢∘.<∘⍳⌈/)Iv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Matrix with Iv[i] trailing ones on row i",
    "GROUP": "",
    "KEYWORDS": "1st",
    "SYNTAX": "(⌽⊢∘.≥∘⍳⌈/)Iv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Matrix with Iv[i] trailing zeroes on row i",
    "GROUP": "",
    "KEYWORDS": "1s",
    "SYNTAX": "(⌽⊢∘.<∘⍳⌈/)Iv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Matrix with shape of Xm and Xv as its columns",
    "GROUP": "",
    "KEYWORDS": "fill mold mould",
    "SYNTAX": "Xm(⍉⍴⍨∘⌽∘⍴⍨)Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Maxima (⌈/) of elements of subvectors of Y indicated by Av",
    "GROUP": "",
    "KEYWORDS": "segmented partitioned array maximums greatest largest biggest",
    "SYNTAX": "Av{⍵⌷⍨⊂g[⍺/⍋(+\\⍺)[g←⍒⍵]]}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Maxima of elements of subsets of Nv specified by A (one mask per column)",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "A{m+⍺⌈.×⍨⍵-m←⌊/⍵}Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Maximum major cell of Y",
    "GROUP": "",
    "KEYWORDS": "greatest largest biggest lexicographically",
    "SYNTAX": "(⊢⌷⍨1⌷⍒)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Maximum of Nv with weights Mv",
    "GROUP": "",
    "KEYWORDS": "greatest largest biggest",
    "SYNTAX": "Mv⌈.×Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Maximum table of 1…Js",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "∘.⌈⍨∘⍳Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Constant",
    "DESCRIPTION": "Meaning of life (traditional)",
    "GROUP": "",
    "KEYWORDS": "hitchhiker'sguidetothegalaxy hitchhikersguidetothegalaxy Deep Thought 42 HG2G HHGTTG H2G2 tHGttG the Answer to the Ultimate Question of Life, the Universe, and Everything FinnAPL",
    "SYNTAX": "⍎⊖⍕⊃⊂|⌊-*+○⌈×÷!⌽⍉⌹~⍴⍋⍒,⍟?⍳0",
    "TYPE": ""
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Constant",
    "DESCRIPTION": "Meaning of life (modern)",
    "GROUP": "",
    "KEYWORDS": "hitchhiker'sguidetothegalaxy hitchhikersguidetothegalaxy Deep Thought 42 HG2G HHGTTG H2G2 tHGttG the Answer to the Ultimate Question of Life, the Universe, and Everything new updated",
    "SYNTAX": "⍎⌽⍕⌈*○≡⍬",
    "TYPE": ""
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Constant",
    "DESCRIPTION": "Meaning of life (short)",
    "GROUP": "",
    "KEYWORDS": "hitchhiker'sguidetothegalaxy hitchhikersguidetothegalaxy Deep Thought 42 HG2G HHGTTG H2G2 tHGttG the Answer to the Ultimate Question of Life, the Universe, and Everything golf",
    "SYNTAX": "⍴⍕!⍋⎕D",
    "TYPE": ""
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Merging equal-length vectors Xv and Yv alternately",
    "GROUP": "",
    "KEYWORDS": "merge mesh alternate shuffle",
    "SYNTAX": "Xv(,,⍤0)Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dop",
    "DESCRIPTION": "Merging X and Y under control of Av (0:cell from X, 1:cell from Y)",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "merge mesh shuffle",
    "SYNTAX": "X(Av{⊣@(⍋⍺⍺)⍨⍺⍪⍵})Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dfn",
    "DESCRIPTION": "Merging Y[1] Y[2] Y[3], … under control of Iv (1:cell from Y[1], 2:cell from Y[2], …)",
    "GROUP": "",
    "KEYWORDS": "merge mesh shuffle",
    "SYNTAX": "Iv{(⊂⍋⍋⍺)⌷⊃⍪⌿⍵}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Minima (⌊/) of elements of subvectors of Y indicated by Av",
    "GROUP": "",
    "KEYWORDS": "segmented partitioned array minimums smallest least",
    "SYNTAX": "Av{⍵⌷⍨⊂g[⍺/⍋(+\\⍺)[g←⍋⍵]]}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Minimum of Nv with weights Mv",
    "GROUP": "",
    "KEYWORDS": "smallest least",
    "SYNTAX": "Mv⌊.×Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Move set of points Nm into first quadrant",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(1 2 1⍉⊢∘.-⌊/)Nm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Moving all blanks to end of each rows (Fast: (~,∩)∘' '⍤1)",
    "GROUP": "",
    "KEYWORDS": "fast quick speed spaces",
    "SYNTAX": "{(⍴⍵)⍴(,(+/b)∘.>¯1+⍳¯1↑⍴⍵)\\(,b←⍵≠' ')/,⍵}D",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Moving all blanks to end of text",
    "GROUP": "",
    "KEYWORDS": "spaces",
    "SYNTAX": "((~,∩)∘' ')Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dfn",
    "DESCRIPTION": "Moving cells of Y indicated by Av to the start of Y",
    "GROUP": "",
    "KEYWORDS": "conditional promote promotion",
    "SYNTAX": "Av{⍵⌷⍨⊂⍒⍺}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Constant",
    "DESCRIPTION": "Negative \"infinity\" (the smallest representable value)",
    "GROUP": "",
    "KEYWORDS": "-∞ ¯∞ ¯¯",
    "SYNTAX": "⌈/⍬",
    "TYPE": ""
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Not first zero (≤\\) in each subvector of Bv indicated by Av",
    "GROUP": "",
    "KEYWORDS": "segmented partitioned",
    "SYNTAX": "Av{(b∧⍺)⍱c⍀2<⌿0⍪(c←b∨⍺)⌿b←~⍵}Bv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Not first zero (turn on all zeroes after first zero)",
    "GROUP": "",
    "KEYWORDS": "0 zeros",
    "SYNTAX": "≤\\BA",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Not leading zeroes (turn on all zeroes after first one)",
    "GROUP": "",
    "KEYWORDS": "0 zeros",
    "SYNTAX": "∨\\BA",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Not leading zeroes (∨\\) in each subvector of ⍵ indicated by ⍺",
    "GROUP": "",
    "KEYWORDS": "0 zeros",
    "SYNTAX": "Av{≠⍀b⍀2≠⌿0⍪⍵⌿⍨b←⍺∨⍵}Bv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Number of areas intersecting areas in N (⍴N ←→ (n × 2 × dim))",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "{+/∧∘⍉⍨∧/⍵[;a⍴1;]≤2 1 3⍉⍵[;2⍴⍨a←≢⍵;]}N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Number of days in months I of years J",
    "GROUP": "",
    "KEYWORDS": "calendar lengths gregorian",
    "SYNTAX": "I{(12⍴7⍴31 30)[⍺]-(⍺=2)×2-0≠.=400 100 4∘.|⍵}J",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Number of decimals (up to Is) of elements of N",
    "GROUP": "",
    "KEYWORDS": "digits",
    "SYNTAX": "Is{0+.≠(10*⌽0,⍳⍺)∘.|⌊⍵×10*⍺}N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Number of decimals of elements of Nv",
    "GROUP": "",
    "KEYWORDS": "digits",
    "SYNTAX": "(⌊10⍟⊢÷⍨∘⍎'.'~⍨⍕)Nv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Number of digit positions in integers in J",
    "GROUP": "",
    "KEYWORDS": "digits",
    "SYNTAX": "0∘(1+<+∘⌊10⍟∘|⊢+=)J",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Number of digit positions in Js (depends on ⎕PP)",
    "GROUP": "",
    "KEYWORDS": "digits",
    "SYNTAX": "(≢⍕)Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Number of digits in positive integers in J",
    "GROUP": "",
    "KEYWORDS": "positions",
    "SYNTAX": "0∘(1+∘⌊10⍟⊢+=)J",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Tacit",
    "DESCRIPTION": "Number of occurrences of scalar Xs in array Y",
    "GROUP": "",
    "KEYWORDS": "count tally",
    "SYNTAX": "Xs+.=∘,Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Number of rows in array Y (also of vector)",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(×/¯1↓⍴)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Primitive",
    "DESCRIPTION": "Number of rows in matrix Xm",
    "GROUP": "",
    "KEYWORDS": "count tally",
    "SYNTAX": "≢Xm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Add line numbers to table Xm",
    "GROUP": "",
    "KEYWORDS": "matrix",
    "SYNTAX": "((3⌽']  [',⍕)⍤0∘⍳∘≢,⍕)Ym",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Dfn",
    "DESCRIPTION": "Count of occurences of the cells of Y",
    "GROUP": "",
    "KEYWORDS": "tally selfcount",
    "SYNTAX": "{--⌿(2,≢⍵)⍴⍋⍋⍪⍨⍵}Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dop",
    "DESCRIPTION": "Open a gap of Iv[i] after Y[Jv[i]] (for all i)",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "",
    "SYNTAX": "(Iv{⍵⍀⍨(⍳(≢⍵)++/⍺⍺)∊+\\1+¯1↓0,⍺⍺\\⍨⍵⍵∊⍨⍳≢⍵}Jv)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dop",
    "DESCRIPTION": "Open a gap of Iv[i] before Y[Jv[i]] (for all i)",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "",
    "SYNTAX": "(Iv{⍵⍀⍨(⍳(≢⍵)++/⍺⍺)∊+\\1+⍺⍺\\⍨⍵⍵∊⍨⍳≢⍵}Jv)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Dfn",
    "DESCRIPTION": "Ordinal numbers of words in Dv that indices I point to",
    "GROUP": "",
    "KEYWORDS": "which",
    "SYNTAX": "I{(1++\\' '=⍵)[⍺]}Dv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Places between pairs of ones",
    "GROUP": "",
    "KEYWORDS": "1s",
    "SYNTAX": "(~∧≠\\)B",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Dfn",
    "DESCRIPTION": "Playing order in a cup for Js ranked players",
    "GROUP": "",
    "KEYWORDS": "single-elimination knockout sudden death tournament",
    "SYNTAX": "{,⍉2(⍴⍨⍴(⍳⍵)↑⍨*)⌈2⍟⍵}Js",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Polynomial with roots Nv",
    "GROUP": "",
    "KEYWORDS": "solve",
    "SYNTAX": "{⌽((0,⍳≢⍵)∘.=+⌿~b)+.×(-⍵)×.*b←t⊤¯1+⍳×/t←2⍴⍨≢⍵}Nv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Expression",
    "CLASS": "Constant",
    "DESCRIPTION": "Positive \"infinity\" (the largest representable value)",
    "GROUP": "",
    "KEYWORDS": "∞ ∞ ¯",
    "SYNTAX": "⌊/⍬",
    "TYPE": ""
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Positive maximum, at least zero (also for empty N)",
    "GROUP": "",
    "KEYWORDS": "largest biggest",
    "SYNTAX": "(⌈/,∘0)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Predicted values of least squares fit, given X values Mv and Y values Nv",
    "GROUP": "",
    "KEYWORDS": "best",
    "SYNTAX": "Mv(⊢(⊢+.×⌹)0 1∘.*⍨⊣)Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Predicted values of exponential curve fit, given X values Mv and Y values Nv",
    "GROUP": "",
    "KEYWORDS": "best",
    "SYNTAX": "Mv(*⊢∘⍟(⊢+.×⌹)0 1∘.*⍨⊣)Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Product of two polynomials with coefficients Mv and Nv",
    "GROUP": "",
    "KEYWORDS": "multiplication multiply",
    "SYNTAX": "Mv{+⌿(1-⍳≢⍺)⌽⍺∘.×⍵,0×1↓⍺}Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Products over subsets of Nv specified by B",
    "GROUP": "",
    "KEYWORDS": "sub-sets",
    "SYNTAX": "Nv×.*B",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Dfn",
    "DESCRIPTION": "Progressive index of (⍳) without replacement",
    "GROUP": "",
    "KEYWORDS": "indexin indexof matchingpositionof find locatecorresponding PDI",
    "SYNTAX": "X{⍺(I⍨⍳I←⊢∘≢↑∘⍋∘⍋⊣⍳⍪⍨)⍵}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Dfn",
    "DESCRIPTION": "Progressive member of (∊) without replacement",
    "GROUP": "",
    "KEYWORDS": "isin membership containedin hascorresponding mathcingmemberof PDE",
    "SYNTAX": "X{⍺(I⍨∊I←⊢∘≢↑∘⍋∘⍋⊣⍳⍪⍨)⍵}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Dfn",
    "DESCRIPTION": "Progressive without (~) without replacement",
    "GROUP": "",
    "KEYWORDS": "butnot withoutmatching exceptcorresponding setdifference setsubtraction setminus PDT",
    "SYNTAX": "X{⍺⌷⍨⊂(⍳≢⍺)~⍺(I⍨⍳I←⊢∘≢↑∘⍋∘⍋⊣⍳⍪⍨)⍵}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Expression",
    "DESCRIPTION": "Randomising random numbers",
    "GROUP": "",
    "KEYWORDS": "random link randomising initialise initialize RNG generator randomise randomize",
    "SYNTAX": "⎕RL←⍬",
    "TYPE": ""
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dop",
    "DESCRIPTION": "Ravel of a matrix to Is columns with a gap of Js",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(Is{(⍺⍺*¯1 1)(×⍴⍵↑⍨⊢)(⍴⍵)+⍵⍵,⍨⍺⍺|-≢⍵}Js)Ym",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Dop",
    "DESCRIPTION": "Reduction (/) with f in dimension Is (default: last), rank unchanged",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "reduce fold insert over rowwise reducing folding",
    "SYNTAX": "Is f{⍺←≢⍴⍵ ⋄ (⍺⊃⍴⍵)⍺⍺/[⍺]⍵}Y",
    "TYPE": "Ambivalent Monadic Function, Dyadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Dop",
    "DESCRIPTION": "Reduction with f without respect to shape",
    "GROUP": "",
    "KEYWORDS": "reduce fold insert over rowwise reducing folding",
    "SYNTAX": "{⍺⍺/,⍵}Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Removing blank columns",
    "GROUP": "",
    "KEYWORDS": "all-space allspace empty remove",
    "SYNTAX": "{⍵/⍨∨⌿' '≠⍵}Dm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Removing blank rows",
    "GROUP": "",
    "KEYWORDS": "all-space allspace empty remove",
    "SYNTAX": "{⍵⌿⍨∨/' '≠⍵}Dm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Dfn",
    "DESCRIPTION": "Removing columns Iv from array Y",
    "GROUP": "",
    "KEYWORDS": "except without butnot",
    "SYNTAX": "Iv{⍵/⍨~⍺∊⍨⍳⊃⌽⍴⍵}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Dfn",
    "DESCRIPTION": "Removing consecutive duplicate rows from ordered matrix Ym",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "{⍵⌿⍨1,∨/2≢⌿⍵}Ym",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Tacit",
    "DESCRIPTION": "Removing consecutive duplicate Xs's from vector Yv",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Xs(⊢(/⍨)2∨/1,≠)Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Dfn",
    "DESCRIPTION": "Removing consecutive duplicates from an ordered vector",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "{⍵/⍨1,2≢⌿⍵}Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Dfn",
    "DESCRIPTION": "Removing elements in X from beginning and end of vector Yv",
    "GROUP": "",
    "KEYWORDS": "trim leading trailing left right",
    "SYNTAX": "X{(⊥⍨∘⌽↓⍵↓⍨∘-⊥⍨)⍵∊⍺}Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Dfn",
    "DESCRIPTION": "Removing elements in X from beginning of vector Yv",
    "GROUP": "",
    "KEYWORDS": "trim leading left",
    "SYNTAX": "X{⍵↓⍨⊥⍨⌽⍵∊⍺}Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Dfn",
    "DESCRIPTION": "Removing elements in X from end of vector Yv",
    "GROUP": "",
    "KEYWORDS": "trim trailing right",
    "SYNTAX": "X{⍵↓⍨-⊥⍨⍵∊⍺}Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Dfn",
    "DESCRIPTION": "Removing every Is'th cell of Y",
    "GROUP": "",
    "KEYWORDS": "filter",
    "SYNTAX": "Is{⍵⌿⍨0≠⍺|⍳≢⍵}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Dfn",
    "DESCRIPTION": "Removing every second cellof XV",
    "GROUP": "",
    "KEYWORDS": "filter even odd parity",
    "SYNTAX": "{⍵⌿⍨2|⍳≢⍵}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Removing leading and multiple blanks",
    "GROUP": "",
    "KEYWORDS": "trim spaces left consecutive",
    "SYNTAX": "{⍵/⍨2∨/0,' '≠⍵}Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Removing leading and trailing blanks",
    "GROUP": "",
    "KEYWORDS": "trim left right spaces",
    "SYNTAX": "{⍵/⍨(∨\\∧∘⌽∨\\∘⌽)' '≠⍵}Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Removing leading zeroes",
    "GROUP": "",
    "KEYWORDS": "zeros 0s trim left",
    "SYNTAX": "{⍵/⍨∨\\⍵≠'0'}Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "Removing leading, multiple and trailing Xs's",
    "GROUP": "",
    "KEYWORDS": "trim left right spaces consecutive",
    "SYNTAX": "Xs(1↓,(/⍨)1(⊢∨⌽)0,≠)Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Removing multiple and trailing blanks",
    "GROUP": "",
    "KEYWORDS": "trim right consecutive spaces",
    "SYNTAX": "{⍵/⍨2∨/0,⍨' '≠⍵}Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Removing multiple blanks",
    "GROUP": "",
    "KEYWORDS": "consecutive spaces",
    "SYNTAX": "{⍵/⍨2∨/1,' '≠⍵}Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Removing non-alphanumeric ASCII characters",
    "GROUP": "",
    "KEYWORDS": "punctuation",
    "SYNTAX": "(∩∘(⎕D,⎕A,819⌶⎕A))Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Removing trailing blank columns",
    "GROUP": "",
    "KEYWORDS": "all-space allspace empty remove trim right",
    "SYNTAX": "{⍵/⍨⌽∨\\⌽' '∨.≠⍵}",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Removing trailing blank rows",
    "GROUP": "",
    "KEYWORDS": "all-space allspace empty remove trim bottom",
    "SYNTAX": "{⍵↓⍨-+/∧\\⌽Dm∧.=' '}Dm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Replacing all values Xs in Y with Ys",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "substitute merge amend replace update",
    "SYNTAX": "Xs@(Ys∘=)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dop",
    "DESCRIPTION": "Replacing elements of Y in set Xv with corresponding element from Yv",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "substitute merge amend replace update",
    "SYNTAX": "(Xv{(⍵⍵⌷⍨∘⊂⍺⍺∘⍳)@(∊∘⍺⍺)⊢⍵}Yv)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dfn",
    "DESCRIPTION": "Replacing major cells of Y not satisfying Bv with prototypical cells",
    "GROUP": "",
    "KEYWORDS": "blanks spaces 0s zeros zeros fill substitute merge aamend replace update mask",
    "SYNTAX": "Bv{⍺⍀⍺⌿⍵}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dfn",
    "DESCRIPTION": "Replacing elements of Y in set X with prototypical elements",
    "GROUP": "",
    "KEYWORDS": "blanks spaces 0s zeros zeros fill substitute merge aamend replace update",
    "SYNTAX": "X{(⊃0⍴⊂)@(∊∘⍺)⊢⍵}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dfn",
    "DESCRIPTION": "Replacing elements of Y not in set X with prototypical elements",
    "GROUP": "",
    "KEYWORDS": "blanks spaces 0s zeros zeros fill substitute merge aamend replace update",
    "SYNTAX": "X{(⊃0⍴⊂)@(~∊∘⍺)⊢⍵}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dop",
    "DESCRIPTION": "Replacing elements of Y satisfying Bv with Xs",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "substitute merge amend replace update mask",
    "SYNTAX": "(Xs{⍺⍺@(⍵⍵∘⊣)⍵}Bv)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Replacing first major cell of Y with Xs",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "substitute merge amend replace update 1st first",
    "SYNTAX": "Xs(@1)Y",
    "TYPE": ""
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Replacing last major cell of Y with Xs",
    "GROUP": "",
    "KEYWORDS": "substitute merge amend replace update",
    "SYNTAX": "Xs(⊖⊣@1∘⊖)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Replacing zeroes in N with corresponding elements of M",
    "GROUP": "",
    "KEYWORDS": "substitute merge amend replace update 0s zeros",
    "SYNTAX": "M(⊢+⊣×0=⊢)N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Date (⎕TS format) to M/D/YY",
    "GROUP": "",
    "KEYWORDS": "date format ANSI INCITS 30-1997 (R2008) NIST FIPS PUB 4-2 American USA",
    "SYNTAX": "('/'@(' '∘=)∘⍕100|1⌽3∘↑)Jv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Date (⎕TS format) to D.M.YYYY",
    "GROUP": "",
    "KEYWORDS": "date format ÖNORM DS Austrian Denmark Danish Finnish Finland Montenegro Serbian Montenegrin",
    "SYNTAX": "('.'@(' '∘=)∘⍕∘⌽3∘↑)Jv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Date (⎕TS format) to YYYY-MM-DD",
    "GROUP": "",
    "KEYWORDS": "date format SS-ISO8601:2006-09 PN-90/N-01204 GB/T 7408-2005 KS X NP EN 28601 CAN/CSA-Z234.4-89 (R2007) DS/ISO 8601:2005 LST",
    "SYNTAX": "('-'@5 8∘⍕1000⊥3∘↑)Jv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Date (⎕TS format) to H:mm:sstt",
    "GROUP": "",
    "KEYWORDS": "timestamp H:MM:SStt tt am/pm 12-hour clock",
    "SYNTAX": "{2⌽(⊃'am'⌽⍨12≤4⊃⍵),1↓∊':',¨'m00',∘⍕¨3↑3↓⍵}Jv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Date (⎕TS format) to hh:mm:ss",
    "GROUP": "",
    "KEYWORDS": "timestamp HH:MM:SS 24-hour clock",
    "SYNTAX": "{1↓∊':'@1∘⍕¨100+3↑3↓⍵}Jv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "First element of Y as a scalar",
    "GROUP": "",
    "KEYWORDS": "1st",
    "SYNTAX": "⍬∘⍴Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Reshaping non-empty lower-rank array Yv into a matrix",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(⊢⍴⍨1⌈¯2↑⍴)Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Reshaping only one-element numeric vector Nv into a scalar (leave longer vectors as-is)",
    "GROUP": "",
    "KEYWORDS": "1-element singleton",
    "SYNTAX": "(⍎⍕)Nv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Join (⍪) planes of rank 3 array Y to form a single matrix",
    "GROUP": "",
    "KEYWORDS": "Merge demoterank lessenrank reduce flatten reducing",
    "SYNTAX": "(⍉⍪∘⍉)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Ravel planes of rank 3 array Y to form rows of a matrix",
    "GROUP": "",
    "KEYWORDS": "Merge demoterank lessenrank reduce flatten reducing",
    "SYNTAX": "⍪Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Reshaping scalar Y into a one-element vector (leave any other array as-is)",
    "GROUP": "",
    "KEYWORDS": "unscalarise unscalarize 1-element",
    "SYNTAX": "1∘/Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Primitive",
    "DESCRIPTION": "Reshaping vector Yv into a one-column matrix",
    "GROUP": "",
    "KEYWORDS": "1-column",
    "SYNTAX": "⍪Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Reshaping vector Yv into a one-row matrix",
    "GROUP": "",
    "KEYWORDS": "1-row",
    "SYNTAX": "⍉∘⍪Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Reshaping vector Yv into a two-column matrix",
    "GROUP": "",
    "KEYWORDS": "2-column",
    "SYNTAX": "(⊢⍴⍨2,⍨2÷⍨≢)Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dfn",
    "DESCRIPTION": "Reversal (⊖) of subvectors of Y having lengths Iv",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Iv{⍵⌷⍨⊂⌽⍒+\\(⍳≢⍵)∊+\\1,⍺}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dfn",
    "DESCRIPTION": "Reversal (⊖) of subvectors of Y indicated by Av",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Av{⍵⌷⍨⊂⌽⍒+\\⍺}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dfn",
    "DESCRIPTION": "Reverse Y on condition As",
    "GROUP": "",
    "KEYWORDS": "conditional",
    "SYNTAX": "As{⊖⍣⍺⊢⍵}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "Rightmost neighboring elements (padding at edge)",
    "GROUP": "",
    "KEYWORDS": "neighboring neighbours neighbors lefthand bitshift",
    "SYNTAX": "((1↓⊢,1↑0∘⍴)⍤1)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "Rightmost neighboring elements (cyclically)",
    "GROUP": "",
    "KEYWORDS": "neighboring neighbours neighbors lefthand bitshift",
    "SYNTAX": "1⌽Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Rotation matrix for angle Ns (in radians) counter-clockwise",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(2 2⍴1 ¯1 1 1×2 1 1 2∘○)Ns",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Rounding currencies to nearest 5 subunits",
    "GROUP": "",
    "KEYWORDS": "cents nickels ¢5¢",
    "SYNTAX": "0.05∘(⊣×∘⌊0.5+÷⍨)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Rounding to ⎕PP precision",
    "GROUP": "",
    "KEYWORDS": "system",
    "SYNTAX": "(⍎⍕)Nv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Rounding to nearest even integer (favouring up)",
    "GROUP": "",
    "KEYWORDS": "precision favoring whole number favoring",
    "SYNTAX": "(⌊⊢+1≤2|⊢)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Rounding to nearest hundredth (favouring up)",
    "GROUP": "",
    "KEYWORDS": "precision favoring whole number favoring",
    "SYNTAX": "0.01∘(⊣×∘⌊0.5+÷⍨)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Rounding to nearest integer (favouring up)",
    "GROUP": "",
    "KEYWORDS": "precision favoring whole number favoring",
    "SYNTAX": "(⌊0.5+⊢)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Rounding to zero values of N within M of zero",
    "GROUP": "",
    "KEYWORDS": "precision fuzz 0",
    "SYNTAX": "M(≤∘|×⊢)N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Rounding, to nearest even integer for 0.5 = 1||N",
    "GROUP": "",
    "KEYWORDS": "precision whole number favoring",
    "SYNTAX": "(⌊⊢+2÷⍨0.5≠2|⊢)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Stochastic rounding to integer",
    "GROUP": "",
    "KEYWORDS": "precision whole number probabilistic",
    "SYNTAX": "(⌊+1∘|>∘?0∘×)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Dfn",
    "DESCRIPTION": "Rows of matrix Ym starting with Xv",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Xv{⍵⌿⍨⍺∧.=⍨⍵↑[2]⍨≢⍺}Ym",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Dfn",
    "DESCRIPTION": "Rows of non-empty matrix Y starting with an element in X",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "X{⍵⌿⍨⍺∊⍨⊣/⍵}Ym",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Running parity (≠\\) over subvectors of B indicated by Av",
    "GROUP": "",
    "KEYWORDS": "sub-vectors sublists sub-lists",
    "SYNTAX": "Av{≠\\⍵≠⍺\\2≠/0,⍺/≠\\¯1↓0,⍵}B",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Function Application",
    "CLASS": "Dop",
    "DESCRIPTION": "Scan from end with f",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "cumulativereduce rowwise backscan backwards suffix scanning",
    "SYNTAX": "f{⌽⍺⍺\\⌽⍵}↑",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Primitive",
    "DESCRIPTION": "Selecting elements of Y satisfying condition A",
    "GROUP": "",
    "KEYWORDS": "compress filter",
    "SYNTAX": "A/Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Selecting elements satisfying condition A, others to 1",
    "GROUP": "",
    "KEYWORDS": "one",
    "SYNTAX": "A!N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Selecting elements satisfying condition A, others to 0",
    "GROUP": "",
    "KEYWORDS": "zero",
    "SYNTAX": "A×N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Dop",
    "DESCRIPTION": "Selection of elements of M and N depending on condition A",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "conditional selector mesh mask merge",
    "SYNTAX": "M(A{{⍺×⍺⍺)+⍵×~⍺⍺})N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Dop",
    "DESCRIPTION": "Selection of X or Y depending on condition As",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "conditional selector pick choose",
    "SYNTAX": "X(As{⊃⍺⍺↓⍺⍵})Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Join lines with line feed (LF)",
    "GROUP": "",
    "KEYWORDS": "combine glue 0x0A U+0A U+000A",
    "SYNTAX": "Cv(⊣,(⎕UCS 10),⊢)Dv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Expression",
    "DESCRIPTION": "Assignment of character vector without needing to double quotes",
    "GROUP": "",
    "KEYWORDS": "characterinput gets is copula let define name naming denotes means",
    "SYNTAX": "name←⍞",
    "TYPE": ""
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "Shifting vector Yv left with Is (padding on right)",
    "GROUP": "",
    "KEYWORDS": "leftshift",
    "SYNTAX": "Is(⊢∘≢↑↓)Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "Shifting vector XV right with IS (padding on left)",
    "GROUP": "",
    "KEYWORDS": "rightshift",
    "SYNTAX": "Is(⊢∘-∘≢↑↓⍨∘-⍨)Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Shur product",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Mm(1 2 1 2⍉1∘.×)Nm",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Sorting indices Jv according to data X",
    "GROUP": "",
    "KEYWORDS": "permute",
    "SYNTAX": "X(⊢⌷⍨∘⊂∘⍋⌷⍨∘⊂)Jv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Sorting rows of Ym according to key Xv (alphabetising)",
    "GROUP": "",
    "KEYWORDS": "alphabetizing sort order",
    "SYNTAX": "Xv{⍵[⍋(1+≢⍺)⊥⍺⍳⍉⍵;]}Ym",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Sorting words in list Dm according to word length",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "{⍵[⍋⍵+.≠' ';]}Dm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Sorting Y according to X",
    "GROUP": "",
    "KEYWORDS": "ordering",
    "SYNTAX": "X(⍵⌷⍨⊂⍋⍺)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Dfn",
    "DESCRIPTION": "Spacing out text",
    "GROUP": "",
    "KEYWORDS": "insert blanks expanded",
    "SYNTAX": "{⍵\\⍨1 0⍴⍨⊃⌽⍴⍵}D",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Starting points for Is fields of width Js",
    "GROUP": "",
    "KEYWORDS": "segmented partitioned",
    "SYNTAX": "Is(×⍴1↑⍨⊢)Js",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Starting points for Y in indices pointed by Iv",
    "GROUP": "",
    "KEYWORDS": "segmented partitioned",
    "SYNTAX": "Iv∊∘⍳∘≢Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Tacit",
    "DESCRIPTION": "Starting points of groups of equal elements (non-empty Yv)",
    "GROUP": "",
    "KEYWORDS": "runs identical",
    "SYNTAX": "(1,2≠/⊢)Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Starting positions of subvectors having lengths Jv",
    "GROUP": "",
    "KEYWORDS": "sub-vectors sub-lists sublists",
    "SYNTAX": "(+\\¯1↓1∘,)Jv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Generate consolidated left argument for successive transposes Iv⍉Jv⍉Y",
    "GROUP": "",
    "KEYWORDS": "optimise optimize",
    "SYNTAX": "Iv⌷⍨∘⊂Jv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Sum elements of Nv marked by succeeding identicals in Mv",
    "GROUP": "",
    "KEYWORDS": "partitioned segmented",
    "SYNTAX": "Mv{¯2-⌿0⍪(2≠/⍺⍪0)⌿+⍀⍵}Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Sum of alternating reciprocal series Mv÷Nv",
    "GROUP": "",
    "KEYWORDS": "sequence",
    "SYNTAX": "Mv-.÷Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Sum of common parts of matrices (matrix sum)",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Mm(1 2 1 2⍉∘.+)Nm",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "Tacit",
    "DESCRIPTION": "Sum of numbers in character matrix Dm",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(+/2 1∘⊃∘⎕VFI⍤1)Dm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Sum of reciprocal series Mv÷Nv",
    "GROUP": "",
    "KEYWORDS": "sequence",
    "SYNTAX": "Mv(+.÷)Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Sum of squares of Nv",
    "GROUP": "",
    "KEYWORDS": "² ^2",
    "SYNTAX": "+.×⍨Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Summation over subsets of Nv specified by Av",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Av+.×⍨Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Sums of N according to codes X for lookup table Y",
    "GROUP": "",
    "KEYWORDS": "look-up",
    "SYNTAX": "X(Y{⍺∘.=⍺⍺+.×⍵})N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Sums over (+/) subvectors of N indicated by Av",
    "GROUP": "",
    "KEYWORDS": "segmented partitioned sub-vectors",
    "SYNTAX": "Av{¯2-⌿0⍪(1⌽⍺)⌿+⍀⍵}N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Sums over (+/) subvectors of N, lengths in Iv",
    "GROUP": "",
    "KEYWORDS": "segmented partitioned sub-vectors",
    "SYNTAX": "Iv{¯2-⌿0⍪(⊂+\\⍺)⌷+⍀⍵}N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Syllabisation of a Finnish word Dv",
    "GROUP": "",
    "KEYWORDS": "Syllabization syllables",
    "SYNTAX": "(⊢⊂⍨1,1↓≢↑2</'aeiouyäö'∊⍨819⌶)Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "Non-syntax",
    "DESCRIPTION": "Syntax error to stop execution",
    "GROUP": "",
    "KEYWORDS": "halt error",
    "SYNTAX": "...",
    "TYPE": ""
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Tacit",
    "DESCRIPTION": "Take of at most Iv elements from Y",
    "GROUP": "",
    "KEYWORDS": "limit",
    "SYNTAX": "Iv(⊢↑⍨⊢∘≢⍨↑⌊∘⍴)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Selection",
    "CLASS": "Dfn",
    "DESCRIPTION": "Taking every Is'th major cell of of Y",
    "GROUP": "",
    "KEYWORDS": "nth element",
    "SYNTAX": "Is{⍵⌿⍨0=⍺|⍳≢⍵}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "",
    "CLASS": "Tacit",
    "DESCRIPTION": "Temporary ravel of Y for applying function f",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "flatten",
    "SYNTAX": "X f@(1⍴⍨⍴)Y",
    "TYPE": "Ambivalent Monadic Function, Dyadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Tacit",
    "DESCRIPTION": "Test if all elements of Y are equal",
    "GROUP": "",
    "KEYWORDS": "allsame allmatch? equal?",
    "SYNTAX": "(⊃∧.=,)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Dfn",
    "DESCRIPTION": "Test if circular lists are equal (excluding phase)",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Xv{(⊂⍺)∊⌽∘⍵¨⍳≢⍵}Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Tacit",
    "DESCRIPTION": "Test if elements differ from next ones (non-empty Yv)",
    "GROUP": "",
    "KEYWORDS": "neighbouring neightbors neighboring neighbours neighbors righthand",
    "SYNTAX": "(1,⍨2≠/⊢)Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Tacit",
    "DESCRIPTION": "Test if elements differ from previous ones (non-empty Yv)",
    "GROUP": "",
    "KEYWORDS": "neighboring neighbours neighbors lefthand",
    "SYNTAX": "(1,2≠/⊢)Yv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Tacit",
    "DESCRIPTION": "Test if elements of X belong to corresponding row of Y (≢X ←→ ≢Y)",
    "GROUP": "",
    "KEYWORDS": "memberof isin membership containedin has",
    "SYNTAX": "X(∊⍤1)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Is N Strictly Increasing along axis Is?",
    "GROUP": "",
    "KEYWORDS": "ascending? rising? up ordered sorted",
    "SYNTAX": "Is{~0∊2</[⍺]⍵}N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Is N Strictly Decreasing along axis Is?",
    "GROUP": "",
    "KEYWORDS": "descending? falling? down ordered Nondecreasing? sorted",
    "SYNTAX": "Is{~0∊2>/[⍺]⍵}N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Is N Non-decreasing along axis Is?",
    "GROUP": "",
    "KEYWORDS": "ascending? rising? up ordered sorted",
    "SYNTAX": "Is{~0∊2≤/[⍺]⍵}N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Is N Non-increasing along axis Is?",
    "GROUP": "",
    "KEYWORDS": "descending? falling? down ordered Nonincreasing? sorted",
    "SYNTAX": "Is{~0∊2>/[⍺]⍵}N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Dfn",
    "DESCRIPTION": "Test if X and Y are permutations of each other",
    "GROUP": "",
    "KEYWORDS": "permutation? permutationof?",
    "SYNTAX": "X{(S⍺)≡(S←⊂∘⍋⌷⊢)⍵}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Tacit",
    "DESCRIPTION": "Test if rows of Y contain elements differing from Xs",
    "GROUP": "",
    "KEYWORDS": "hasdifferent",
    "SYNTAX": "Xs∨.≠⍨Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Tacit",
    "DESCRIPTION": "Test if Xv and Yv have any elements in common",
    "GROUP": "",
    "KEYWORDS": "anyshared? anycommon?",
    "SYNTAX": "Xv(∨/∊)Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Tacit",
    "DESCRIPTION": "Test relations (¯2…2) of elements of N to ranges M (2=¯1↑⍴M)",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "M(+/∘×∘.-⍨)N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Comparison",
    "CLASS": "Tacit",
    "DESCRIPTION": "Test relations (¯2…2) of major cells Y to range 1⌷X,2⌷X",
    "GROUP": "",
    "KEYWORDS": "tao totalarrayordering interval",
    "SYNTAX": "X(⌊¯3+0.6×⍳+3×⍸)Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Tests Finnish social security number (10=≢Dv)",
    "GROUP": "",
    "KEYWORDS": "SSN",
    "SYNTAX": "(⊢/=(⎕D,⎕A~'GIOQ')⊃⍨1+31|∘⍎9∘↑)Dv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Transpose matrix Ym on condition Bs",
    "GROUP": "",
    "KEYWORDS": "conditional",
    "SYNTAX": "Bs(⊢⍉⍨1 2⌽⍨⊣)Ym",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dfn",
    "DESCRIPTION": "\"Transpose\" of matrix Ym with column fields of width Is",
    "GROUP": "",
    "KEYWORDS": "fieldwidth",
    "SYNTAX": "Is{((a×⌽)⍴2 1 3⍉⍵⍴⍨1⌽⍺,⊢)(⍴⍵)÷a←1,⍺}Ym",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Using Boolean array A for expanding Yv (Yv's elements at 1s in A)",
    "GROUP": "",
    "KEYWORDS": "ones",
    "SYNTAX": "A⊣@⊢⍨Yv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "Dfn",
    "DESCRIPTION": "Using default value X if Dv does not exist",
    "GROUP": "",
    "KEYWORDS": "fallback missing variable",
    "SYNTAX": "X{2=⎕NC⍵:⍎⍵⋄⍺}Dv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Primitive",
    "DESCRIPTION": "Value of polynomial with coefficients N at point Ns",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Ns⊥N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Value of polynomial with coefficients Nv at point Ms",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Ms{⍵+.×⍨⍺*¯1+⍳≢⍵}Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Value of saddle point",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(,(/⍨)(<\\∘,(⊢=⍴⍴⌈⌿)∧⊢=∘⍉⌽∘⍴⍴⌊/))Nm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Value of Taylor series with coefficients Nv at point Ns",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Ns{+/⍵××\\1,⍺÷⍳¯1+≢⍵}Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Vector (cross) product of vectors",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Mv(((1⌽⊣)×¯1⌽⊢)-(¯1⌽⊣)×1⌽⊢)Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Vector (Jv[1]⍴1),(Jv[2]⍴0),(Jv[3]⍴1),…",
    "GROUP": "",
    "KEYWORDS": "sequence list alternating bits 1s 0s ones zeros zeroes",
    "SYNTAX": "(≠\\(⍳+/)∊(+\\1∘,))Jv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Vector (Iv[1]⍴1),(Jv[1]⍴0),(Iv[2]⍴1),…",
    "GROUP": "",
    "KEYWORDS": "sequence list alternating bits 1s 0s ones zeros zeroes",
    "SYNTAX": "Iv{(⍳+/Iv,Jv)∊+\\1+¯1↓0,⍵\\⍨(⍳+/Iv)∊+\\Iv}Jv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Vector (Jv[1]+⍳Iv[1]),(Jv[2]+⍳Iv[2]),(Jv[3]+⍳Iv[3]),… (≢Iv ←→ ≢Jv)",
    "GROUP": "",
    "KEYWORDS": "sequence list",
    "SYNTAX": "Iv{1++\\1+((⍳+/⍺)∊+\\1,⍺)\\⍵-¯1↓1,⍺+⍵}Jv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Vector having as many ones as Ym has rows",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(1⍴⍨≢)Ym",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Suffix Vector: length Is with Js ones on the right, the rest zeroes",
    "GROUP": "",
    "KEYWORDS": "1s 0s zeros Is⍵Js",
    "SYNTAX": "Is((-⊣)↑1⍴⍨⊢)Js",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Prefix Vector: length Is with Js ones on the left, the rest zeroes",
    "GROUP": "",
    "KEYWORDS": "1s 0s zeros Is⍺Js",
    "SYNTAX": "Is(⊣↑1⍴⍨⊢)Js",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Vector to expand a new element after each one in Bv",
    "GROUP": "",
    "KEYWORDS": "insert openup",
    "SYNTAX": "((,1,⍨⍪)(/∘,)⍪,~)Bv",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dfn",
    "DESCRIPTION": "Vectors as column matrices in catenation beneath each other",
    "GROUP": "",
    "KEYWORDS": "combine",
    "SYNTAX": "X{⍺,[1+2÷⍨⌈/≢∘⍴¨⍺⍵]⍵}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dfn",
    "DESCRIPTION": "Vectors as row matrices in catenation upon each other",
    "GROUP": "",
    "KEYWORDS": "combine",
    "SYNTAX": "X{⍺,[2÷⍨⌈/≢∘⍴¨⍺⍵]⍵}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Widening matrix Ym to be compatible with Xm",
    "GROUP": "",
    "KEYWORDS": "adjust width",
    "SYNTAX": "Xm↑[2]⍨∘⊃∘⌽∘⍴⍨Ym",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Text",
    "CLASS": "Tacit",
    "DESCRIPTION": "Word lengths of words in list D",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "(+.≠∘' ')D",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Is'th moment of Nv",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Is(⊢∘≢÷⍨1⊥⊣*⍨⊢-⊢∘≢÷⍨1⊥⊢)Nv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Zero array of shape, size, and structure of N",
    "GROUP": "",
    "KEYWORDS": "zeroes zeros fill mold mould",
    "SYNTAX": "0∘×N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Array Properties",
    "CLASS": "Tacit",
    "DESCRIPTION": "Fill element (converts characters to spaces, numbers to zeros)",
    "GROUP": "",
    "KEYWORDS": "fillelement padding 0s zeroes type",
    "SYNTAX": "(⊃0∘⍴)Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Tacit",
    "DESCRIPTION": "Fill array Y with Xs",
    "GROUP": "Monadic Operator",
    "KEYWORDS": "",
    "SYNTAX": "Xs@(1⍴⍨⍴)Y",
    "TYPE": ""
  },
  {
    "CATERGORY": "Sets",
    "CLASS": "Tacit",
    "DESCRIPTION": "Zeroing elements of N that are found in M",
    "GROUP": "",
    "KEYWORDS": "arein membersof 0ing",
    "SYNTAX": "M(⊢×∘~∊⍨)N",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Test if N is integer",
    "GROUP": "",
    "KEYWORDS": "integer? whole number?",
    "SYNTAX": "(⌊=⊢)N",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Is Nm a Hermitian matrix?",
    "GROUP": "",
    "KEYWORDS": "Hermitian? self-adjoint? selfadjoint? Yᴴ Y† Aᴴ A†",
    "SYNTAX": "(⍉≡+)Nm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Is Nm an Orthogonal matrix?",
    "GROUP": "",
    "KEYWORDS": "Orthogonal?",
    "SYNTAX": "(⍉≡⌹)Nm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Conjugate Transpose",
    "GROUP": "",
    "KEYWORDS": "self-adjoint selfadjoin Yᴴ Y^H Y† Y^† Aᴴ A^H A† A^†",
    "SYNTAX": "⍉∘+Nm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Is Nm a Unitary matrix?",
    "GROUP": "",
    "KEYWORDS": "Unitary?",
    "SYNTAX": "(⌹≡⍉∘+)Nm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Trim groups of ones in B to begin only where first pointed to by a 1 in A",
    "GROUP": "",
    "KEYWORDS": "runs sequences 1s chop limit indicated",
    "SYNTAX": "A{⍵∧s=⌈⍀⍺×s←+⍀2<⌿0⍪⍵}B",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Boolean/Logical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Groups of ones in Bv pointed to by at least one 1 in Av",
    "GROUP": "",
    "KEYWORDS": "runs sequences 1s indicated",
    "SYNTAX": "Av(∧{⍵∧s∊⍺/s←+\\2</0,⍵}⊢)Bv",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Tacit",
    "DESCRIPTION": "Boolean matrix indicating saddle points",
    "GROUP": "",
    "KEYWORDS": "minimax",
    "SYNTAX": "(⌊/∘.=⌈⌿)NM",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Index Generation",
    "CLASS": "Tacit",
    "DESCRIPTION": "Moving width-Is window of indices for array Y",
    "GROUP": "",
    "KEYWORDS": "",
    "SYNTAX": "Is,/∘⍳∘≢Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Structural",
    "CLASS": "Dfn",
    "DESCRIPTION": "Rotate first major cells (1⊖) of subvectors of Y indicated by Av",
    "GROUP": "",
    "KEYWORDS": "sub-vectors sub-lists sublists",
    "SYNTAX": "Av{⍵⌷⍨⊂⍋⍺++\\⍺}Y",
    "TYPE": "Dyadic Function"
  },
  {
    "CATERGORY": "Data Conversion",
    "CLASS": "Dop",
    "DESCRIPTION": "Row-by-row formatting (width Is) of Nm with Iv decimals per row",
    "GROUP": "Dyadic Operator",
    "KEYWORDS": "format",
    "SYNTAX": "(Is{⍵⍕⍤1⍨⍺⍺,⍪⍵⍵}Iv)Nm",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "Mathematical",
    "CLASS": "Dfn",
    "DESCRIPTION": "Sorting rows of matrix Y into ascending order (Fast (⊂∘⍋⌷⊢)⍤1)",
    "GROUP": "",
    "KEYWORDS": "ordering",
    "SYNTAX": "{s⍴r[g[⍋(,⍉(⌽s←⍴⍵)⍴⍳≢⍵)[g←⍋r←,⍵]]]}Y",
    "TYPE": "Monadic Function"
  },
  {
    "CATERGORY": "System",
    "CLASS": "System",
    "DESCRIPTION": "Reference to the workspace root namespace",
    "GROUP": "",
    "KEYWORDS": "workspace top",
    "SYNTAX": "#",
    "TYPE": "Constant"
  },
  {
    "CATERGORY": "System",
    "CLASS": "System",
    "DESCRIPTION": "Reference the the parent namespace",
    "GROUP": "",
    "KEYWORDS": "workspace top",
    "SYNTAX": "##",
    "TYPE": "Constant"
  }
];