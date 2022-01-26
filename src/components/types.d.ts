type Ratio =
  | 'logo'
  | '1x1'
  | '4x3'
  | '16x9'
  | '174x136'
  | '1194x191'
  | '1371x620'
  | '674x272'
  | '370x208'
  | '226x127'
  | '350x197'
  | '221x166'
  | '483x286'
  | '549x308'
  | '354x88'
  | '223x320'
  | '507x370'
  | '582x438'
  | '1366x600'
  | '311x78'
  | '228x145'
  | '582x534'
  | '582x252'
  | '386x98'
  | '376x212'
  | '1366x250'
  | '257x64'
  | '546x308'
  | '546x308'
  | '567x246'
  | '185x142'
  | '612x340'
  | '641x211'
  | '348x720'
  | '1364x721'
  | '624x495'
  | '110x86'
  | '990x463'
  | '378x212';

type FontWeightStyle =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

type TextStyle =
  | 'uppercase'
  | 'capitalize'
  | 'underline'
  | 'italic'
  | 'center'
  | 'justify'
  | 'normal'
  | 'right'
  | 'left';

type ColorStyle =
  | 'white'
  | 'raisinBlack'
  | 'davysGrey'
  | 'whitesmoke'
  | 'grayX11'
  | 'snow'
  | 'gainsboro'
  | 'amazon'
  | 'xanadu'
  | 'goldenBrown'
  | 'paleGoldenrod'
  | 'juneBud'
  | 'greenryb'
  | 'aeroBlue'
  | 'coolBlack'
  | 'metallicSunburst'
  | 'cyberGrape'
  | 'antiqueBronze'
  | 'urobilin'
  | 'arsenic'
  | 'jet'
  | 'black085'
  | 'darkMidnightBlue'
  | 'deer'
  | 'dimGray'
  | 'lavenderGray'
  | 'taupeGray'
  | 'camel'
  | 'jet333'
  | 'columbiaBlue'
  | 'spanishGray';

type FontFamily = 'fontLexend' | 'fontNoto' | 'fontLato';

type GeneralTextStyle = ColorStyle | FontWeightStyle | TextStyle | FontFamily;
