type Ratio =
  | 'logo'
  | '1x1'
  | '4x3'
  | '16x9'
  | '174x136'
  | '1126x376'
  | '1371x620'
  | '721x303'
  | '370x208'
  | '226x127'
  | '350x197'
  | '221x166'
  | '483x286'
  | '549x308'
  | '354x88'
  | '223x320'
  | '507x370'
  | '547x410'
  | '1366x600'
  | '311x78';

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
  | 'taupeGray';

type FontFamily = 'fontLexend' | 'fontNoto' | 'fontLato';

type GeneralTextStyle = ColorStyle | FontWeightStyle | TextStyle | FontFamily;
