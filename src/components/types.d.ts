type Ratio =
  | 'logo'
  | '1x1'
  | '4x3'
  | '16x9'
  | '220x145'
  | '1126x376'
  | '1371x620';

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
  | 'lavenderGray'
  | 'dimGray';

type FontFamily = 'fontLexend' | 'fontNoto' | 'fontLato';

type GeneralTextStyle = ColorStyle | FontWeightStyle | TextStyle | FontFamily;
