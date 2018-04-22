// Cf. http://www.kreativekorp.com/charset/font.php?font=Constructium

var Cirth = {
	1: '\uE080',
	2: '\uE081',
	3: '\uE082',
	4: '\uE083',
	5: '\uE084',
	6: '\uE085',
	7: '\uE086',
	8: '\uE087',
	9: '\uE088',
	10: '\uE089',
	11: '\uE08A',	
	12: '\uE08B',
	13: '\uE08C',
	14: '\uE08D',
	15: '\uE08E',
	
	16: '\uE08F',
	17: '\uE090',
	18: '\uE091',
	19: '\uE092',
	20: '\uE093',
	21: '\uE094',
	22: '\uE095',
	23: '\uE096',
	24: '\uE097',
	25: '\uE098',
	26: '\uE099',
	27: '\uE09A',
	28: '\uE09B',
	29: '\uE09C',
	30: '\uE09D',
	
	31: '\uE09E',
	32: '\uE09F',
	33: '\uE0A0',
	34: '\uE0A1',
	35: '\uE0A2',
	36: '\uE0A3',
	37: '\uE0A4',
	'38a': '\uE0A5',
	'38b': '\uE0A6',
	39: '\uE0A7',
	40: '\uE0A8',
	41: '\uE0A9',
	42: '\uE0AA',
	43: '\uE0AB',
	44: '\uE0AC',
	'45a': '\uE0AD',
	'45b': '\uE0AE',
	
	46: '\uE0AF',
	47: '\uE0B0',
	48: '\uE0B1',
	49: '\uE0B2',
	50: '\uE0B3',
	'51a': '\uE0B4',
	'51b': '\uE0B5',
	'51inverted': '\uE0D7',
	'52a': '\uE0B6',
	'52b': '\uE0B7',
	53: '\uE0B8',
	54: '\uE0B9',
	'55a': '\uE0BA',
	'55b': '\uE0BB',
	'56a': '\uE0BC',
	'56b': '\uE0BD',
	57: '\uE0BE',
	58: '\uE0BF',
	59: '\uE0C0',
	60: '\uE0C1',
}

var Punctuation = {
	
	Dot: '\uE0E7',
	TwoDot: '\uE0E8',
	ThreeDot: '\uE0E9',
	FourDot: '\uE0EA',
	DoubleLine: '\uE0EB',
	
	ZeroWidthJoiner: '\u200D',
}

// Recreates http://freetengwar.sourceforge.net/html-files/keyboard-20091211.pdf
var CirthKeyMap = {
	
	65: { // A
		val: Cirth[48],
		shift: Cirth[47],
	},
	
	66: { // B
		val: Cirth[2],
		shift: Cirth[4],
	},
	
	67: { // C
		val: Cirth[18],
		shift: Cirth[20],
	},
	
	68: { // D
		val: Cirth[9],
		shift: Cirth[11],
		alt: Cirth['38a'],
		altShift: Cirth['38b'],
	},
	
	69: { // E
		val: Cirth[46],
		shift: Cirth[49],
		alt: Cirth['52a'],
		altShift: Cirth['52b'],
	},
	
	70: { // F
		val: Cirth[3],
	},
	
	71: { // G
		val: Cirth[19],
		shift: Cirth[21],
		alt: Cirth[29],
		altShift: Cirth[30],
	},
	
	72: { // H
		val: Cirth[34],
		shift: Cirth[59],
		alt: Cirth[54]
	},
	
	73: { // I
		val: Cirth[39],
	},
	
	74: { // J
		val: Cirth[13],
		val: Cirth[14],
	},
	
	75: { // K
		val: Cirth[21],
		alt: Cirth[30],
	},
	
	76: { // L
		val: Cirth[31],
		shift: Cirth[32],
	},
	
	77: { // M
		val: Cirth[6],
		shift: Cirth[7],
	},
	
	78: { // N
		val: Cirth[22],
		shift: Cirth[53],
		alt: Cirth[12]
	},
	
	79: { // O
		val: Cirth[50],
		shift: Cirth['51a'],
		alt: Cirth['51b'],
	},
	
	80: { // P
		val: Cirth[1],
		shift: Cirth[3],
	},
	
	81: { // Q
		val: Cirth['55a'],
		shift: Cirth['56a'],
		alt: Cirth['55b'],
		altShift: Cirth['56b'],
	},
	
	82: { // R
		val: Cirth[12],
		alt: Cirth[29],
	},
	
	83: { // S
		val: Cirth[54],
		shift: Cirth[15],
		alt: Cirth[34],
		altShift: Cirth[35],
	},
	
	84: { // T
		val: Cirth[8],
		shift: Cirth[10],
	},
	
	85: { // U
		val: Cirth[42],
		altShift: Cirth[43],
	},
	
	86: { // V
		val: Cirth[4],
	},
	
	87: { // W
		val: Cirth[44],
		shift: Cirth[5],
	},
	
	88: { // X
		val: Cirth[17],
	},
	
	89: { // Y
		val: Cirth[40],
		alt: Cirth['45a'],
		altShift: Cirth['45b'],
	},
	
	90: { // Z
		val: Cirth[43],
		shift: Cirth[16],
		alt: Cirth[36],
	},
	
	222: { // '
		val: Cirth[35],
	},
	
	219: { // [
		val: Cirth[57],
	},
	221: { // ]
		val: Cirth[58],
	},
	
	
	48: { // 0
	},
	
	49: { // 1
		val: Cirth[39],
	},
	
	50: { // 2
		val: Cirth[50],
	},
	
	51: { // 3
		val: Cirth['52a'],
	},
	
	52: { // 4
		val: Cirth['51inverted'],
	},
	
	53: { // 5
		val: Cirth[22],
	},
	
	54: { // 6
		val: Cirth[39] + Cirth[39] + Cirth[39] + Cirth[39] + Cirth[39] + Cirth[39],
	},
	
	55: { // 7
		shift: Cirth[60],
	},
	
	56: { // 8
	},
	
	57: { // 9
	},
	
	
	
	189: { // -
		shift: Punctuation.ZeroWidthJoiner,
	},
	
	
	
	220: { // backslash
	},
	
	
	
	186: { // ;
		val: Punctuation.TwoDot,
	},	
	187: { // =
		val: Punctuation.DoubleLine,
	},
	188: { // ,
		val: Punctuation.Dot,
	},	
	190: { // .
		val: Punctuation.ThreeDot,
		shift: Punctuation.FourDot,
	},
	191: { // forwardslash
	},
}




