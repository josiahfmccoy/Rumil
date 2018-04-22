
var Keyboarder = {};

(function(Keyboarder) {
	
	var keyRows = [
		[
			{ which: 192 }, // `
			{ which: 49 }, // 1
			{ which: 50 }, // 2
			{ which: 51 }, // 3
			{ which: 52 }, // 4
			{ which: 53 }, // 5
			{ which: 54 }, // 6
			{ which: 55 }, // 7
			{ which: 56 }, // 8
			{ which: 57 }, // 9
			{ which: 48 }, // 0
			{ which: 189 }, // -
			{ which: 187 }, // =
			{ which: 8, name: 'BKSP' }, // BKSP
		],
		[
			{ which: 9, name: 'TAB' }, // TAB
			{ which: 81 }, // q
			{ which: 87 }, // w
			{ which: 69 }, // e
			{ which: 82 }, // r
			{ which: 84 }, // t
			{ which: 89 }, // y
			{ which: 85 }, // u
			{ which: 73 }, // i
			{ which: 79 }, // o
			{ which: 80 }, // p
			{ which: 219 }, // [
			{ which: 221 }, // ]
			{ which: 220 }, // '\''
		],
		[
			{ which: 20, name: 'CAPS' }, // CAPS
			{ which: 65 }, // a
			{ which: 83 }, // s
			{ which: 68 }, // d
			{ which: 70 }, // f
			{ which: 71 }, // g
			{ which: 72 }, // h
			{ which: 74 }, // j
			{ which: 75 }, // k
			{ which: 76 }, // l
			{ which: 186 }, // ;
			{ which: 222 }, // '
			{ which: 13, name: 'RETN' }, // RETN
		],
		[
			{ which: 16, name: 'SHIFT' }, // SHIFT
			{ which: 90 }, // z
			{ which: 88 }, // x
			{ which: 67 }, // c
			{ which: 86 }, // v
			{ which: 66 }, // b
			{ which: 78 }, // n
			{ which: 77 }, // m
			{ which: 188 }, // ,
			{ which: 190 }, // .
			{ which: 191 }, // /
			{ which: 16, name: 'SHIFT' }, // SHIFT
		],
		[
			{ which: 17, name: 'CTRL' }, // CTRL
			{ which: 18, name: 'ALT' }, // ALT
			{ which: 32, name: 'SPAC' }, // SPAC
			{ which: 18, name: 'ALTGR' }, // ALTGR
			{ which: 17, name: 'CTRL' }, // CTRL
		]
	];
	
	function newHtmlKeyboard (keyMap) {
		
		var keyboard = document.createElement('ul');
		keyboard.classList.add('no-style');
		keyboard.classList.add('keyboard');
		keyboard.classList.add('showStandard');
		
		for (var i = 0, leni = keyRows.length; i < leni; i++) {
			
			var row = (document.createElement('li')).appendChild( document.createElement('ul') );
			row.classList.add('clear');
		
			var keys = keyRows[i];
			
			for (var j = 0, lenj = keys.length; j < lenj; j++) {
				
				var key = document.createElement('li');
				key.classList.add('key');
				key.setAttribute('data-which', keys[j].which);
				key.setAttribute('title', LatinKeyMap[keys[j].which].val);
				
				var mapping = keyMap[keys[j].which];
				if (mapping === undefined) {
					mapping = LatinKeyMap[keys[j].which];
				}
				
				var keyVal = document.createElement('span');
				if (mapping.invariant === true) {
					keyVal.classList.add('invariant');
				}
				else {
					keyVal.classList.add('standard');
				}
				keyVal.innerText = mapping.val !== undefined ? mapping.val : '';
				
				var keyShift = document.createElement('span');
				keyShift.classList.add('shift');
				keyShift.innerText = mapping.shift !== undefined ? mapping.shift : 
					(mapping.val !== undefined && ! mapping.invariant ? mapping.val : '');
				
				var keyAlt = document.createElement('span');
				keyAlt.classList.add('alt');
				keyAlt.innerText = mapping.alt !== undefined ? mapping.alt : '';
				
				var keyAltShift = document.createElement('span');
				keyAltShift.classList.add('altShift');
				keyAltShift.innerText = mapping.altShift !== undefined ? mapping.altShift : '';
				
				key.appendChild(keyVal);
				key.appendChild(keyShift);
				key.appendChild(keyAlt);
				key.appendChild(keyAltShift);
				
				if (keys[j].name !== undefined) {
					key.classList.add(keys[j].name);
				}
				
				row.appendChild(key);
			}
			
			keyboard.appendChild(row.parentElement);
		}
		
		return keyboard;
	}
			
	Keyboarder.showOnscreenKeyboard = function (elem, keyMap) {
		
		keyMap = keyMap || {};
		
		var keyboard = newHtmlKeyboard(keyMap);
		
		keyboard.style.fontFamily = window.getComputedStyle(elem)['font-family'];
		elem.parentElement.appendChild(keyboard);
		
		
		function renderHtmlKeys(e) {
			
			keyboard.classList.remove('showStandard');
			keyboard.classList.remove('showShift');
			keyboard.classList.remove('showAlt');
			keyboard.classList.remove('showAltShift');
			
			if (e.shiftKey && e.altKey) {
				keyboard.classList.add('showAltShift');
			}
			else if (e.shiftKey) {
				keyboard.classList.add('showShift');
			}
			else if (e.altKey) {
				keyboard.classList.add('showAlt');
			}
			else {
				keyboard.classList.add('showStandard');
			}
		}
	
	
		document.body.addEventListener('keydown', function (e) {
			var key = (e.keyCode || e.which);
			var active = keyboard.querySelectorAll('.key[data-which="' + key + '"]')[0];
			active.classList.add('active');
			
			renderHtmlKeys(e);
		});
		document.body.addEventListener('keyup', function (e) {
			var key = (e.keyCode || e.which);
			var active = keyboard.querySelectorAll('.key[data-which="' + key + '"]')[0];
			active.classList.remove('active');
			
			renderHtmlKeys(e);
		});
		
		
		function handleKeyClick() {
			//return; // disabled for now
			
			var e = document.createEvent('Event'); 
			e.initEvent('keydown', true, true); 
			e.keyCode = this.getAttribute('data-which');
			e.which = e.keyCode;
			elem.dispatchEvent(e);
			
			e = document.createEvent('Event'); 
			e.initEvent('keyup', true, true); 
			e.keyCode = this.getAttribute('data-which');
			e.which = e.keyCode;
			elem.dispatchEvent(e);	

			elem.focus();
		}
		
		var keylist = keyboard.querySelectorAll('.key');
		for (var i = 0, len = keylist.length; i < len; i++) {
			keylist[i].addEventListener('click', handleKeyClick);
		}
	}
	
	Keyboarder.applyLayout = function (elem, keyMap) {
		
		var helper = {
			
			handleKeydown: function (e) {
				var key = (e.keyCode || e.which);
				
				if (e.ctrlKey) {
					return;
				}
				else if (key == 18) { // alt
					e.preventDefault();
				}
				
				var mapping = keyMap[key];
				if (mapping !== undefined) {
					e.preventDefault();
					
					var text = this.value;
					
					if (e.altKey && e.shiftKey && mapping.altShift !== undefined) {
						text += mapping.altShift;
					}
					else if (e.altKey && mapping.alt !== undefined) {
						text += mapping.alt;
					}
					else if (e.shiftKey && mapping.shift !== undefined) {
						text += mapping.shift;
					}
					else {
						if (mapping.val !== undefined) {
							text += mapping.val;
						}
					}
					
					this.value = text;
				}
			},
			
			handleKeyup: function (e) {
				var key = (e.keyCode || e.which);
				
				if (key == 18) { // alt
					e.preventDefault();
				}
			}
		}
		
		elem.addEventListener('keydown', helper.handleKeydown);
		elem.addEventListener('keyup', helper.handleKeyup);
	};
	
})(Keyboarder);


var LatinKeyMap = {
	
	16: { // SHIFT
		val: 'Shift',
		invariant: true
	},
	17: { // CTRL
		val: 'Ctrl',
		invariant: true
	},
	18: { // ALT
		val: 'Alt',
		invariant: true
	},
	32: { // SPAC
		val: ' ',
		invariant: true
	},
	8: { // BKSP
		val: 'Backspace',
		invariant: true
	},
	9: { // TAB
		val: 'Tab',
		invariant: true
	},
	20: { // CAPS
		val: 'Caps Lock',
		invariant: true
	},
	13: { // RETN
		val: 'Enter',
		invariant: true
	},
	
	192: { // `
		val: '`',
		shift: '~'
	},
	
	65: { // A
		val: 'A'
	},
	
	66: { // B
		val: 'B'
	},
	
	67: { // C
		val: 'C'
	},
	
	68: { // D
		val: 'D'
	},
	
	69: { // E
		val: 'E'
	},
	
	70: { // F
		val: 'F'
	},
	
	71: { // G
		val: 'G'
	},
	
	72: { // H
		val: 'H'
	},
	
	73: { // I
		val: 'I'
	},
	
	74: { // J
		val: 'J'
	},
	
	75: { // K
		val: 'K'
	},
	
	76: { // L
		val: 'L'
	},
	
	77: { // M
		val: 'M'
	},
	
	78: { // N
		val: 'N'
	},
	
	79: { // O
		val: 'O'
	},
	
	80: { // P
		val: 'P'
	},
	
	81: { // Q
		val: 'Q'
	},
	
	82: { // R
		val: 'R'
	},
	
	83: { // S
		val: 'S'
	},
	
	84: { // T
		val: 'T'
	},
	
	85: { // U
		val: 'U'
	},
	
	86: { // V
		val: 'V'
	},
	
	87: { // W
		val: 'W'
	},
	
	88: { // X
		val: 'X'
	},
	
	89: { // Y
		val: 'Y'
	},
	
	90: { // Z
		val: 'Z'
	},
	
	222: { // '
		val: '\'',
		shift: '\"'
	},
	
	
	48: { // 0
		val: '0',
		shift: ')'
	},
	
	49: { // 1
		val: '1',
		shift: '!'
	},
	
	50: { // 2
		val: '2',
		shift: '@'
	},
	
	51: { // 3
		val: '3',
		shift: '#'
	},
	
	52: { // 4
		val: '4',
		shift: '$'
	},
	
	53: { // 5
		val: '5',
		shift: '%'
	},
	
	54: { // 6
		val: '6',
		shift: '^'
	},
	
	55: { // 7
		val: '7',
		shift: '&'
	},
	
	56: { // 8
		val: '8',
		shift: '*'
	},
	
	57: { // 9
		val: '9',
		shift: '('
	},
	
	
	
	189: { // -
		val: '-',
		shift: '_'
	},
	
	
	
	220: { // backslash
		val: '\\',
		shift: '|'
	},
	
	
	
	186: { // ;
		val: ';',
		shift: ':'
	},	
	187: { // =
		val: '=',
		shift: '+'
	},
	188: { // ,
		val: ',',
		shift: '<'
	},	
	190: { // .
		val: '.',
		shift: '>'
	},
	191: { // forwardslash
		val: '/',
		shift: '?'
	},
	
	219: { // [
		val: '[',
		shift: '{'
	},
	221: { // ]
		val: ']',
		shift: '}'
	},
}