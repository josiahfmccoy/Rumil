// Cf. http://freetengwar.sourceforge.net/mapping.html,
// http://at.mansbjorkman.net/tengwar.htm

var Tengwar = {
	Tinco: '\uE000',
	Parma: '\uE001',
	Calma: '\uE002',
	Quesse: '\uE003',
	
	Ando: '\uE004',
	Umbar: '\uE005',
	Anga: '\uE006',
	Ungwe: '\uE007',
	
	Sule: '\uE008',
	Formen: '\uE009',
	Aha: '\uE00A',
	Hwesta: '\uE00B',
	
	Anto: '\uE00C',
	Ampa: '\uE00D',
	Anca: '\uE00E',
	Unque: '\uE00F',
	
	Numen: '\uE010',
	Malta: '\uE011',
	Noldo: '\uE012',
	Nwalme: '\uE013',
	
	Ore: '\uE014',
	Vala: '\uE015',
	Anna: '\uE016',
	Vilya: '\uE017',
	
	TincoHalla: '\uE018',
	ParmaHalla: '\uE019',
	CalmaHalla: '\uE01A',
	QuesseHalla: '\uE01B',
	
	AndoHalla: '\uE01C',
	UmbarHalla: '\uE01D',
	AngaHalla: '\uE01E',
	UngweHalla: '\uE01F',
	
	Romen: '\uE020',
	Arda: '\uE021',
	Lambe: '\uE022',
	Alda: '\uE023',
	
	Silme: '\uE024',
	SilmeNuquerna: '\uE025',
	Esse: '\uE026',
	EsseNuquerna: '\uE027',
	
	Hyarmen: '\uE028',
	HwestaSindarinwa: '\uE029',
	Yanta: '\uE02A',
	Ure: '\uE02B',
	
	// Other letters
	Halla: '\uE02D', // Gasdil
	Osse: '\uE032', // Beleriandic "a" tengwa
	OsseNanwa: '\uE030', // Reversed Beleriandic "a" tengwa
	Tindumhiell: '\uE03B', // nasal v (mh) for Doriathrin
	TindumhiellAtatya: '\uE03A', // long nasal v (mh) for Doriathrin
	RomenHalla: '\uE03C', // Lowdham's hw
	Vaiya: '\uE03D', // Etymologies
	
	KhuzdulE: '\uE034', // Used for schwa in some texts
	
	Ar: '\u204A', // &-symbol
	
	// Carriers
	Ara: '\uE02C', // long
	Telco: '\uE02E', // short
	
	// Numbers
	Zero: '\uE070',
	Mine: '\uE071',
	Atta: '\uE072',
	Nelde: '\uE073',
	Canta: '\uE074',
	Lempe: '\uE075',
	Enque: '\uE076',
	Otso: '\uE077',
	Tolto: '\uE078',
	Nerte: '\uE079',
	Quain: '\uE07a',
	Minque: '\uE07b',
}
var Tehtar = {
	Tixe: '\uE05A', // center-dot
	
	NeldeAmatixe: '\uE040', // a-tehta
	NeldeUnutixe: '\uE041',
	
	Amatixe: '\uE044', // i-tehta
	Unutixe: '\uE045',
	
	Tecco: '\uE046', // e-tehta
	Andatehta: '\uE046', // long-mark
	
	OsseTehta: '\uE04A', // forward-curl tehta
	
	UreTehta: '\uE04C', // backward-curl tehta
	
	TyelpeAmatixi: '\uE042', // y-tehta
	TyelpeUnutixi: '\uE043',
	
	NumenTehta: '\uE050', // nasal-tehta
	Atatya: '\uE051', // doubling-tehta
	
	VilyaTehta: '\uE052', // labial-tehta
	
	Amayanta: '\uE055', // raised-yanta
	
	SaRince: '\uE058', // following-s
	UnuSaRince: '\uE059', // under-following-s
	
	Thinnas: '\uE057',
}
var Punctuation = {
	Tixe: '\u2E31', // mid-dot
	AttaTixi: '\u003A', // two stacked dots
	NeldeTixi: '\u205D', // three stacked dots
	NeldeTixiQuernar: '\u10FB', // three arrow-arranged dots
	CantaTixi: '\u2058', // four diamond-patterned dots
	AttaTixiAtatyar: '\u2E2C', // four square-patterned dots
	LempeTixi: '\u2E2D', // five diamond-patterned dots
	
	Ma: '\uE066',
	
	Line: '\uE068', // wavy line
	
	Exclamation: '\uE065',
	ExclamationDwarvish: '\uE06C', // in Bilbo's contract
	Equals: '\uE069',
	Parenthesis: '\uE067',
	
	ZeroWidthJoiner: '\u200D',
}

// Recreates http://freetengwar.sourceforge.net/html-files/keyboard-20091211.pdf
var TengwarKeyMap = {
	
	65: { // A
		val: Tehtar.NeldeAmatixe,
		shift: Tengwar.Osse,
		alt: Tehtar.NeldeUnutixe
	},
	
	66: { // B
		val: Tengwar.Umbar,
		shift: Tengwar.Ampa,
		alt: Tengwar.UmbarHalla
	},
	
	67: { // C
		val: Tengwar.Calma,
		shift: Tengwar.Aha,
		alt: Tengwar.CalmaHalla
	},
	
	68: { // D
		val: Tengwar.Ando,
		shift: Tengwar.Anto,
		alt: Tengwar.AndoHalla
	},
	
	69: { // E
		val: Tehtar.Tecco,
		shift: Tengwar.Yanta,
		altShift: Tehtar.Amayanta
	},
	
	70: { // F
		val: Tengwar.Formen,
		alt: Tengwar.ParmaHalla
	},
	
	71: { // G
		val: Tengwar.Ungwe,
		shift: Tengwar.Unque,
		alt: Tengwar.UngweHalla
	},
	
	72: { // H
		val: Tengwar.Hyarmen,
		shift: Tengwar.Halla,
		alt: Tehtar.Thinnas
	},
	
	73: { // I
		val: Tehtar.Amatixe,
		shift: Tehtar.Tixe,
		alt: Tehtar.Unutixe
	},
	
	74: { // J
		val: Tengwar.Anga,
		shift: Tengwar.Anca,
		alt: Tengwar.AngaHalla
	},
	
	75: { // K
		val: Tengwar.Quesse,
		shift: Tengwar.Hwesta,
		alt: Tengwar.QuesseHalla
	},
	
	76: { // L
		val: Tengwar.Lambe,
		shift: Tengwar.Alda
	},
	
	77: { // M
		val: Tengwar.Malta,
		shift: Tengwar.TindumhiellAtatya,
		alt: Tengwar.Tindumhiell
	},
	
	78: { // N
		val: Tengwar.Numen,
		shift: Tengwar.Nwalme,
		alt: Tengwar.Noldo
	},
	
	79: { // O
		val: Tehtar.OsseTehta,
		shift: Tengwar.OsseNanwa
	},
	
	80: { // P
		val: Tengwar.Parma,
		shift: Tengwar.Formen,
		alt: Tengwar.ParmaHalla
	},
	
	81: { // Q
		val: Tengwar.HwestaSindarinwa,
		alt: Tengwar.RomenHalla
	},
	
	82: { // R
		val: Tengwar.Romen,
		shift: Tengwar.Ore,
		alt: Tengwar.Arda
	},
	
	83: { // S
		val: Tengwar.Silme,
		shift: Tengwar.SilmeNuquerna
	},
	
	84: { // T
		val: Tengwar.Tinco,
		shift: Tengwar.Sule,
		alt: Tengwar.TincoHalla
	},
	
	85: { // U
		val: Tehtar.UreTehta,
		shift: Tengwar.Ure
	},
	
	86: { // V
		val: Tengwar.Ampa,
		alt: Tengwar.UmbarHalla
	},
	
	87: { // W
		val: Tengwar.Vala,
		shift: Tehtar.VilyaTehta,
		altShift: Tengwar.Vaiya
	},
	
	88: { // X
		val: Tehtar.SaRince,
		shift: Tehtar.UnuSaRince
	},
	
	89: { // Y
		val: Tengwar.Anna,
		shift: Tehtar.TyelpeAmatixi,
		alt: Tehtar.TyelpeUnutixi
	},
	
	90: { // Z
		val: Tengwar.Esse,
		shift: Tengwar.EsseNuquerna
	},
	
	222: { // '
		val: Tengwar.Vilya,
	},
	
	
	48: { // 0
		val: Tengwar.Zero,
		alt: Tengwar.Quain,
		shift: Punctuation.Parenthesis
	},
	
	49: { // 1
		val: Tengwar.Mine,
		alt: Tengwar.Minque,
		shift: Punctuation.Exclamation
	},
	
	50: { // 2
		val: Tengwar.Atta,
	},
	
	51: { // 3
		val: Tengwar.Nelde,
	},
	
	52: { // 4
		val: Tengwar.Canta,
	},
	
	53: { // 5
		val: Tengwar.Lempe,
	},
	
	54: { // 6
		val: Tengwar.Enque,
		shift: Punctuation.ExclamationDwarvish
	},
	
	55: { // 7
		val: Tengwar.Otso,
		shift: Tengwar.Ar
	},
	
	56: { // 8
		val: Tengwar.Tolto,
		shift: Punctuation.LempeTixi
	},
	
	57: { // 9
		val: Tengwar.Nerte,
		shift: Punctuation.Parenthesis
	},
	
	
	
	189: { // -
		val: Tehtar.NumenTehta,
		shift: Tehtar.Atatya,
		altShift: Tehtar.Thinnas
	},
	
	
	
	220: { // backslash
		val: Tengwar.Telco,
		shift: Tengwar.Ara,
		alt: Tengwar.KhuzdulE
	},
	
	
	
	186: { // ;
		val: Punctuation.NeldeTixiQuernar,
		shift: Punctuation.NeldeTixi,
		altShift: Punctuation.AttaTixi
	},	
	187: { // =
		val: Punctuation.Equals,
		shift: Punctuation.ZeroWidthJoiner,
		alt: Punctuation.ZeroWidthJoiner
	},
	188: { // ,
		val: Punctuation.Tixe,
		shift: Punctuation.AttaTixi
	},	
	190: { // .
		val: Punctuation.CantaTixi,
		shift: Punctuation.AttaTixiAtatyar,
		alt: Punctuation.Tixe
	},
	191: { // forwardslash
		val: Punctuation.Line,
		shift: Punctuation.Ma
	},
}




