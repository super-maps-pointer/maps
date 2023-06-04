import { SAMPLE_SIZE } from "@/components/game/game";
import { Level } from "@/utils/rules";
import { sampleSize } from "lodash";

export interface Country {
  code: string;
  name: string;
  capital: string;
  population: number;
  funFact: string;
  dependOf?: string;
  level?: Level;
}

export const COUNTRIES: { [key: string]: Country } = {
  AFG: {
    name: "Afghanistan",
    capital: "Kabul",
    population: 38928346,
    funFact: "Home to the Hindu Kush mountain range.",
    code: "AFG",
  },
  ALB: {
    name: "Albania",
    capital: "Tirana",
    population: 2877797,
    funFact: "One of the oldest inhabited regions in Europe.",
    code: "ALB",
  },
  DZA: {
    name: "Algeria",
    capital: "Algiers",
    population: 43851044,
    funFact: "The largest country in Africa.",
    code: "DZA",
  },
  ASM: {
    name: "American Samoa",
    capital: "Pago Pago",
    population: 55191,
    funFact: "The only U.S. territory south of the Equator.",
    code: "ASM",
  },
  AND: {
    name: "Andorra",
    capital: "Andorra la Vella",
    population: 77265,
    funFact: "Has the highest life expectancy in the world.",
    level: Level.Normal,
    code: "AND",
  },
  AGO: {
    name: "Angola",
    capital: "Luanda",
    population: 32866272,
    funFact: "The second-largest oil producer in Africa.",
    code: "AGO",
  },
  AIA: {
    name: "Anguilla",
    capital: "The Valley",
    population: 15003,
    funFact: "Has some of the world's most beautiful beaches.",
    code: "AIA",
  },
  ATG: {
    name: "Antigua and Barbuda",
    capital: "Saint John's",
    population: 97929,
    funFact: "The birthplace of cricket legend Sir Vivian Richards.",
    level: Level.Normal,
    code: "ATG",
  },
  ARG: {
    name: "Argentina",
    capital: "Buenos Aires",
    population: 45195774,
    funFact: "Home to the world's widest avenue, 9 de Julio Avenue.",
    level: Level.Easy,
    code: "ARG",
  },
  ARM: {
    name: "Armenia",
    capital: "Yerevan",
    population: 2963243,
    funFact: "One of the earliest Christian civilizations.",
    code: "ARM",
  },
  ABW: {
    name: "Aruba",
    capital: "Oranjestad",
    population: 106766,
    funFact: "Famous for its white sandy beaches and turquoise waters.",
    code: "ABW",
  },
  AUS: {
    name: "Australia",
    capital: "Canberra",
    population: 25499884,
    funFact:
      "Home to the Great Barrier Reef, the world's largest coral reef system.",
    level: Level.Easy,
    code: "AUS",
  },
  AUT: {
    name: "Austria",
    capital: "Vienna",
    population: 9006398,
    funFact:
      "Famous for its classical music composers like Mozart and Strauss.",
    level: Level.Easy,
    code: "AUT",
  },
  AZE: {
    name: "Azerbaijan",
    capital: "Baku",
    population: 10139177,
    funFact:
      "Azerbaijan is known for its rich cultural heritage and traditional carpets.",
    code: "AZE",
  },
  BHS: {
    name: "Bahamas",
    capital: "Nassau",
    population: 393248,
    funFact: "Comprises 700 islands and over 2,000 cays.",
    code: "BHS",
  },
  BHR: {
    name: "Bahrain",
    capital: "Manama",
    population: 1701575,
    funFact: "Known for its Formula One Grand Prix circuit.",
    code: "BHR",
  },
  BGD: {
    name: "Bangladesh",
    capital: "Dhaka",
    population: 164689383,
    funFact: "One of the most densely populated countries in the world.",
    code: "BGD",
  },
  BRB: {
    name: "Barbados",
    capital: "Bridgetown",
    population: 287375,
    funFact: "Birthplace of legendary cricketer Sir Garfield Sobers.",
    level: Level.Normal,
    code: "BRB",
  },
  BLR: {
    name: "Belarus",
    capital: "Minsk",
    population: 9449323,
    funFact: "Has the highest number of World War II memorials per capita.",
    code: "BLR",
  },
  BEL: {
    name: "Belgium",
    capital: "Brussels",
    population: 11589623,
    funFact: "Famous for its chocolate, waffles, and beer.",
    level: Level.Easy,
    code: "BEL",
  },
  BLZ: {
    name: "Belize",
    capital: "Belmopan",
    population: 397628,
    funFact:
      "Home to the largest barrier reef system in the Northern Hemisphere.",
    code: "BLZ",
  },
  BEN: {
    name: "Benin",
    capital: "Porto-Novo",
    population: 12123200,
    funFact: "Birthplace of the voodoo religion.",
    code: "BEN",
  },
  BMU: {
    name: "Bermuda",
    capital: "Hamilton",
    population: 62278,
    funFact: "Famous for its pink sandy beaches.",
    code: "BMU",
  },
  BTN: {
    name: "Bhutan",
    capital: "Thimphu",
    population: 771608,
    funFact:
      "The only country in the world to measure its success by Gross National Happiness.",
    level: Level.Normal,
    code: "BTN",
  },
  BOL: {
    name: "Bolivia",
    capital: "Sucre (constitutional), La Paz (administrative)",
    population: 11673021,
    funFact: "Has the highest capital city in the world, La Paz.",
    code: "BOL",
  },
  BIH: {
    name: "Bosnia and Herzegovina",
    capital: "Sarajevo",
    population: 3301000,
    funFact:
      "Home to the historic city of Mostar and the iconic Stari Most bridge.",
    code: "BIH",
  },
  BWA: {
    name: "Botswana",
    capital: "Gaborone",
    population: 2250260,
    funFact:
      "Famous for its wildlife, including the Okavango Delta and the Kalahari Desert.",
    code: "BWA",
  },
  BRA: {
    name: "Brazil",
    capital: "Brasília",
    population: 213993437,
    funFact:
      "The largest country in South America and known for the Amazon rainforest.",
    level: Level.Easy,
    code: "BRA",
  },
  VGB: {
    name: "British Virgin Islands",
    capital: "Road Town",
    population: 30030,
    funFact:
      "A British Overseas Territory known for its stunning beaches and sailing spots.",
    code: "VGB",
  },
  BRN: {
    name: "Brunei",
    capital: "Bandar Seri Begawan",
    population: 442400,
    funFact:
      "One of the world's wealthiest countries with rich cultural heritage.",
    code: "BRN",
  },
  BGR: {
    name: "Bulgaria",
    capital: "Sofia",
    population: 7000039,
    funFact:
      "Has a diverse landscape, including the stunning Black Sea coastline and the Pirin National Park.",
    code: "BGR",
  },
  BFA: {
    name: "Burkina Faso",
    capital: "Ouagadougou",
    population: 19193382,
    funFact: "Known for its traditional music, art, and craftwork.",
    code: "BFA",
  },
  BDI: {
    name: "Burundi",
    capital: "Bujumbura",
    population: 10114505,
    funFact:
      "Famous for its drumming rituals and the source of the Nile River.",
    code: "BDI",
  },
  CPV: {
    name: "Cabo Verde",
    capital: "Praia",
    population: 531239,
    funFact:
      "Comprised of a group of volcanic islands in the central Atlantic Ocean.",
    level: Level.Normal,
    code: "CPV",
  },
  KHM: {
    name: "Cambodia",
    capital: "Phnom Penh",
    population: 16245729,
    funFact: "Home to the iconic temple complex of Angkor Wat.",
    code: "KHM",
  },
  CMR: {
    name: "Cameroon",
    capital: "Yaoundé",
    population: 24263089,
    funFact: "Known for its diverse cultures, landscapes, and wildlife.",
    code: "CMR",
  },
  CAN: {
    name: "Canada",
    capital: "Ottawa",
    population: 38048738,
    funFact:
      "The second-largest country in the world by land area, known for its stunning natural beauty.",
    level: Level.Easy,
    code: "CAN",
  },
  BES: {
    name: "Caribbean Netherlands",
    capital: "Kralendijk",
    population: 26221,
    funFact:
      "Part of the Caribbean Netherlands, special municipalities of the Netherlands.",
    code: "BES",
  },
  CYM: {
    name: "Cayman Islands",
    capital: "George Town",
    population: 66454,
    funFact:
      "A British Overseas Territory known for its crystal-clear waters and stunning coral reefs.",
    code: "CYM",
  },
  CAF: {
    name: "Central African Republic",
    capital: "Bangui",
    population: 4745185,
    funFact:
      "Has a rich cultural heritage and diverse wildlife, including forest elephants.",
    code: "CAF",
  },
  TCD: {
    name: "Chad",
    capital: "N'Djamena",
    population: 16877000,
    funFact:
      "Home to Lake Chad, a large, shallow lake in the Sahelian zone of Africa.",
    code: "TCD",
  },
  CHL: {
    name: "Chile",
    capital: "Santiago",
    population: 19064337,
    funFact:
      "Known for its stunning landscapes, including the Atacama Desert and Patagonia.",
    code: "CHL",
  },
  CHN: {
    name: "China",
    capital: "Beijing",
    population: 1444216107,
    funFact:
      "The most populous country in the world and known for its rich history and culture.",
    level: Level.Easy,
    code: "CHN",
  },
  COL: {
    name: "Colombia",
    capital: "Bogotá",
    population: 50372424,
    funFact:
      "Home to the world's second-most biodiverse country, with a rich variety of flora and fauna.",
    level: Level.Easy,
    code: "COL",
  },
  COM: {
    name: "Comoros",
    capital: "Moroni",
    population: 806153,
    funFact:
      "An archipelago located off the eastern coast of Africa in the Indian Ocean.",
    level: Level.Normal,
    code: "COM",
  },
  COG: {
    name: "Congo",
    capital: "Brazzaville",
    population: 4741000,
    funFact:
      "Known for its dense rainforests and diverse wildlife, including gorillas and chimpanzees.",
    code: "COG",
  },
  COK: {
    name: "Cook Islands",
    capital: "Avarua",
    population: 15250,
    funFact:
      "A group of 15 islands located in the South Pacific Ocean, known for their stunning natural beauty.",
    code: "COK",
  },
  CRI: {
    name: "Costa Rica",
    capital: "San José",
    population: 5058007,
    funFact:
      "Famous for its rich biodiversity, national parks, and eco-tourism opportunities.",
    code: "CRI",
  },
  HRV: {
    name: "Croatia",
    capital: "Zagreb",
    population: 4087843,
    funFact:
      "Home to the stunning Dalmatian Coastline and historic cities like Dubrovnik and Split.",
    code: "HRV",
  },
  CUB: {
    name: "Cuba",
    capital: "Havana",
    population: 11338134,
    funFact:
      "Known for its vintage cars, vibrant music, and historic architecture.",
    code: "CUB",
  },
  CUW: {
    name: "Curaçao",
    capital: "Willemstad",
    population: 162752,
    funFact:
      "A Caribbean island country with a unique blend of European and Caribbean cultures.",
    code: "CUW",
  },
  CYP: {
    name: "Cyprus",
    capital: "Nicosia",
    population: 847000,
    funFact: "The mythical birthplace of the Greek goddess of love, Aphrodite.",
    code: "CYP",
  },
  CZE: {
    name: "Czech Republic",
    capital: "Prague",
    population: 10650000,
    funFact:
      "Home to Prague Castle, the largest ancient castle complex in the world.",
    code: "CZE",
  },
  COD: {
    name: "Democratic Republic of the Congo",
    capital: "Kinshasa",
    population: 85026000,
    funFact:
      "The second-largest country in Africa by land area and home to the Congo River, the deepest river in the world.",
    code: "COD",
  },
  DNK: {
    name: "Denmark",
    capital: "Copenhagen",
    population: 5831405,
    funFact:
      "Known for its high standard of living, beautiful landscapes, and the iconic Little Mermaid statue.",
    level: Level.Easy,
    code: "DNK",
  },
  DJI: {
    name: "Djibouti",
    capital: "Djibouti",
    population: 971408,
    funFact:
      "A small country located in the Horn of Africa, known for its salt lakes and diverse marine life.",
    level: Level.Normal,
    code: "DJI",
  },
  DMA: {
    name: "Dominica",
    capital: "Roseau",
    population: 71293,
    funFact:
      "Nicknamed the 'Nature Isle of the Caribbean' due to its lush rainforests, waterfalls, and natural hot springs.",
    level: Level.Normal,
    code: "DMA",
  },
  DOM: {
    name: "Dominican Republic",
    capital: "Santo Domingo",
    population: 10882996,
    funFact:
      "The birthplace of merengue music and home to the highest peak in the Caribbean, Pico Duarte.",
    code: "DOM",
  },
  ECU: {
    name: "Ecuador",
    capital: "Quito",
    population: 17346548,
    funFact:
      "Named after the equator, which runs through the country, and known for the Galápagos Islands.",
    code: "ECU",
  },
  EGY: {
    name: "Egypt",
    capital: "Cairo",
    population: 91251840,
    funFact:
      "Home to the ancient wonders of the world, including the Great Pyramid of Giza and the Sphinx.",
    level: Level.Easy,
    code: "EGY",
  },
  SLV: {
    name: "El Salvador",
    capital: "San Salvador",
    population: 6486205,
    funFact:
      "The smallest country in Central America and known for its beautiful beaches and surfing spots.",
    code: "SLV",
  },
  GNQ: {
    name: "Equatorial Guinea",
    capital: "Malabo",
    population: 1267689,
    funFact: "The only country in Africa with Spanish as an official language.",
    level: Level.Normal,
    code: "GNQ",
  },
  ERI: {
    name: "Eritrea",
    capital: "Asmara",
    population: 5741159,
    funFact:
      "Home to one of the world's oldest churches, the Church of Our Lady of the Rosary in Asmara.",
    code: "ERI",
  },
  EST: {
    name: "Estonia",
    capital: "Tallinn",
    population: 1315819,
    funFact:
      "Considered one of the most advanced digital societies in the world, with widespread internet access and e-governance.",
    code: "EST",
  },
  SWZ: {
    name: "Eswatini",
    capital: "Mbabane",
    population: 1093238,
    funFact:
      "A small landlocked country in Southern Africa known for its wildlife reserves and traditional Swazi culture.",
    level: Level.Normal,
    code: "SWZ",
  },
  ETH: {
    name: "Ethiopia",
    capital: "Addis Ababa",
    population: 109224559,
    funFact:
      "Home to the ruins of the ancient city of Aksum and the rock-hewn churches of Lalibela.",
    code: "ETH",
  },
  FRO: {
    name: "Faeroe Islands",
    capital: "Tórshavn",
    population: 49188,
    funFact:
      "An autonomous territory of Denmark with stunning landscapes and abundant birdlife.",
    code: "FRO",
  },
  FLK: {
    name: "Falkland Islands",
    capital: "Stanley",
    population: 2563,
    funFact:
      "A remote archipelago in the South Atlantic Ocean known for its rugged natural beauty and wildlife, including penguins and seals.",
    code: "FLK",
  },
  FJI: {
    name: "Fiji",
    capital: "Suva",
    population: 884887,
    funFact:
      "A tropical paradise with pristine beaches, crystal-clear waters, and a unique blend of Melanesian, Polynesian, and Indian cultures.",
    code: "FJI",
  },
  FIN: {
    name: "Finland",
    capital: "Helsinki",
    population: 5527405,
    funFact:
      "Known as the 'Land of a Thousand Lakes' with stunning landscapes and the magical Northern Lights.",
    level: Level.Easy,
    code: "FIN",
  },
  FRA: {
    name: "France",
    capital: "Paris",
    population: 67069000,
    funFact:
      "Home to the Eiffel Tower, Louvre Museum, and renowned cuisine, and known for its rich history and culture.",
    level: Level.Easy,
    code: "FRA",
  },
  GUF: {
    name: "French Guiana",
    capital: "Cayenne",
    population: 290691,
    funFact:
      "An overseas department and region of France located on the northeastern coast of South America.",
    code: "GUF",
  },
  PYF: {
    name: "French Polynesia",
    capital: "Papeete",
    population: 280908,
    funFact:
      "An overseas collectivity of France consisting of 118 islands and known for its stunning turquoise lagoons and overwater bungalows.",
    code: "PYF",
  },
  GAB: {
    name: "Gabon",
    capital: "Libreville",
    population: 2119275,
    funFact:
      "Home to a vast array of wildlife, including forest elephants, gorillas, and chimpanzees, in its lush rainforests.",
    code: "GAB",
  },
  GMB: {
    name: "Gambia",
    capital: "Banjul",
    population: 2347706,
    funFact:
      "A small country in West Africa known for its beautiful beaches along the Atlantic coast.",
    code: "GMB",
  },
  GEO: {
    name: "Georgia",
    capital: "Tbilisi",
    population: 3726549,
    funFact:
      "Situated at the intersection of Europe and Asia, known for its rich history, ancient churches, and stunning mountain landscapes.",
    code: "GEO",
  },
  DEU: {
    name: "Germany",
    capital: "Berlin",
    population: 83190556,
    funFact:
      "Famous for its engineering prowess, Oktoberfest, and fairy tale castles, and home to influential composers like Beethoven and Bach.",
    level: Level.Easy,
    code: "DEU",
  },
  GHA: {
    name: "Ghana",
    capital: "Accra",
    population: 30280811,
    funFact:
      "The first African country to gain independence from colonial rule and known for its vibrant culture and hospitality.",
    code: "GHA",
  },
  GIB: {
    name: "Gibraltar",
    capital: "Gibraltar",
    population: 33701,
    funFact:
      "A British Overseas Territory located on the southern tip of the Iberian Peninsula, known for its iconic Rock of Gibraltar.",
    code: "GIB",
  },
  GRC: {
    name: "Greece",
    capital: "Athens",
    population: 10715549,
    funFact:
      "Considered the birthplace of Western civilization, known for its ancient ruins, picturesque islands, and delicious Mediterranean cuisine.",
    level: Level.Easy,
    code: "GRC",
  },
  GRL: {
    name: "Greenland",
    capital: "Nuuk",
    population: 56081,
    funFact:
      "The world's largest island, known for its vast ice sheet, stunning fjords, and unique Arctic wildlife.",
    code: "GRL",
  },
  GRD: {
    name: "Grenada",
    capital: "St. George's",
    population: 112003,
    funFact:
      "Known as the 'Spice Isle' for its production of nutmeg, cinnamon, and cloves, and famous for its beautiful beaches and waterfalls.",
    level: Level.Normal,
    code: "GRD",
  },
  GLP: {
    name: "Guadeloupe",
    capital: "Basse-Terre",
    population: 395725,
    funFact:
      "An overseas department and region of France located in the Caribbean, known for its stunning beaches and vibrant Creole culture.",
    code: "GLP",
  },
  GUM: {
    name: "Guam",
    capital: "Hagåtña",
    population: 168485,
    funFact:
      "A U.S. territory in Micronesia with a unique blend of Chamorro and American cultures, known for its pristine beaches and diving spots.",
    code: "GUM",
  },
  GTM: {
    name: "Guatemala",
    capital: "Guatemala City",
    population: 17915568,
    funFact:
      "Home to ancient Mayan ruins, vibrant indigenous cultures, and breathtaking volcanic landscapes.",
    code: "GTM",
  },
  GGY: {
    name: "Guernsey",
    capital: "St. Peter Port",
    population: 62999,
    funFact:
      "A British Crown dependency known for its picturesque landscapes, charming coastal villages, and rich maritime history.",
    code: "GGY",
  },
  GIN: {
    name: "Guinea",
    capital: "Conakry",
    population: 13132792,
    funFact:
      "Famous for its diverse wildlife, including chimpanzees and hippos, and known for its vibrant music and cultural traditions.",
    code: "GIN",
  },
  GNB: {
    name: "Guinea-Bissau",
    capital: "Bissau",
    population: 1968001,
    funFact:
      "A small country in West Africa known for its pristine coastline, mangrove forests, and wildlife reserves.",
    code: "GNB",
  },
  GUY: {
    name: "Guyana",
    capital: "Georgetown",
    population: 782225,
    funFact:
      "Located on the northern mainland of South America, known for its dense rainforests, savannahs, and the mighty Kaieteur Falls.",
    level: Level.Normal,
    code: "GUY",
  },
  HTI: {
    name: "Haiti",
    capital: "Port-au-Prince",
    population: 11402533,
    funFact:
      "The first independent nation in Latin America and the Caribbean, known for its vibrant culture, music, and historic sites.",
    code: "HTI",
  },
  HND: {
    name: "Honduras",
    capital: "Tegucigalpa",
    population: 10183339,
    funFact:
      "Home to ancient Mayan ruins, beautiful Caribbean and Pacific coastlines, and diverse ecosystems including rainforests and coral reefs.",
    code: "HND",
  },
  HKG: {
    name: "Hong Kong",
    capital: "Hong Kong",
    population: 7496981,
    funFact:
      "A Special Administrative Region of China known for its iconic skyline, bustling street markets, and delicious Cantonese cuisine.",
    code: "HKG",
  },
  HUN: {
    name: "Hungary",
    capital: "Budapest",
    population: 9769526,
    funFact:
      "Famous for its stunning architecture, thermal baths, and rich cultural heritage, and known for its delicious goulash dish.",
    code: "HUN",
  },
  ISL: {
    name: "Iceland",
    capital: "Reykjavík",
    population: 356991,
    funFact:
      "A Nordic island country known for its breathtaking landscapes, geothermal hot springs, and the stunning Northern Lights.",
    code: "ISL",
  },
  IND: {
    name: "India",
    capital: "New Delhi",
    population: 1393409038,
    funFact:
      "The seventh-largest country by land area and the second-most populous country in the world, known for its rich cultural heritage and diverse cuisine.",
    level: Level.Easy,
    code: "IND",
  },
  IDN: {
    name: "Indonesia",
    capital: "Jakarta",
    population: 273523615,
    funFact:
      "The world's largest island country, consisting of thousands of islands and known for its stunning beaches, ancient temples, and vibrant arts scene.",
    level: Level.Easy,
    code: "IDN",
  },
  IRN: {
    name: "Iran",
    capital: "Tehran",
    population: 83992953,
    funFact:
      "Formerly known as Persia, Iran is home to ancient historical sites, beautiful mosques, and a rich cultural heritage.",
    code: "IRN",
  },
  IRQ: {
    name: "Iraq",
    capital: "Baghdad",
    population: 40222503,
    funFact:
      "Known as the cradle of civilization, Iraq has a rich history dating back to ancient Mesopotamia and is home to historical sites like Babylon and Ur.",
    code: "IRQ",
  },
  IRL: {
    name: "Ireland",
    capital: "Dublin",
    population: 4982907,
    funFact:
      "Also known as the Emerald Isle, Ireland is famous for its lush green landscapes, vibrant music and dance traditions, and friendly people.",
    level: Level.Easy,
    code: "IRL",
  },
  IMN: {
    name: "Isle of Man",
    capital: "Douglas",
    population: 85122,
    funFact:
      "A self-governing British Crown dependency located in the Irish Sea, known for its rugged coastline, motorcycle racing events, and Celtic heritage.",
    code: "IMN",
  },
  ISR: {
    name: "Israel",
    capital: "Jerusalem",
    population: 9197590,
    funFact:
      "A Middle Eastern country with a rich history, diverse culture, and significant religious sites sacred to Judaism, Christianity, and Islam.",
    level: Level.Easy,
    code: "ISR",
  },
  ITA: {
    name: "Italy",
    capital: "Rome",
    population: 60461826,
    funFact:
      "Famous for its art, architecture, cuisine, and iconic landmarks such as the Colosseum, the Leaning Tower of Pisa, and the Vatican City.",
    level: Level.Easy,
    code: "ITA",
  },
  CIV: {
    name: "Ivory Coast",
    capital: "Yamoussoukro",
    population: 26378274,
    funFact:
      "Also known as Côte d'Ivoire, this West African country is known for its vibrant music, diverse wildlife, and cultural festivals.",
    code: "CIV",
  },
  JAM: {
    name: "Jamaica",
    capital: "Kingston",
    population: 2961167,
    funFact:
      "Famous for its reggae music, stunning beaches, and laid-back vibe, Jamaica is also the birthplace of legendary musician Bob Marley.",
    code: "JAM",
  },
  JPN: {
    name: "Japan",
    capital: "Tokyo",
    population: 125960000,
    funFact:
      "Known for its unique blend of ancient traditions and modern technology, Japan is famous for sushi, cherry blossoms and its bullet train.",
    level: Level.Easy,
    code: "JPN",
  },
  JEY: {
    name: "Jersey",
    capital: "Saint Helier",
    population: 107800,
    funFact:
      "A British Crown dependency known for its stunning beaches, medieval castles, and the famous Jersey cow.",
    code: "JEY",
  },
  JOR: {
    name: "Jordan",
    capital: "Amman",
    population: 10203134,
    funFact:
      "Home to the ancient city of Petra, Jordan offers a unique mix of history, culture, and natural wonders such as the Dead Sea.",
    code: "JOR",
  },
  KAZ: {
    name: "Kazakhstan",
    capital: "Nur-Sultan",
    population: 18754440,
    funFact:
      "The world's largest landlocked country, known for its vast steppes, the Baikonur Cosmodrome, and traditional nomadic culture.",
    code: "KAZ",
  },
  KEN: {
    name: "Kenya",
    capital: "Nairobi",
    population: 54813373,
    funFact:
      "Famous for its diverse wildlife and stunning landscapes, including the Maasai Mara Reserve and Mount Kilimanjaro.",
    level: Level.Easy,
    code: "KEN",
  },
  KIR: {
    name: "Kiribati",
    capital: "Tarawa",
    population: 125000,
    funFact:
      "A Pacific island nation composed of 33 coral atolls, known for its pristine beaches, abundant marine life, and traditional culture.",
    level: Level.Normal,
    code: "KIR",
  },
  KWT: {
    name: "Kuwait",
    capital: "Kuwait City",
    population: 4420110,
    funFact:
      "Situated at the tip of the Persian Gulf, Kuwait is known for its modern architecture, vast oil reserves, and rich cultural heritage.",
    code: "KWT",
  },
  KGZ: {
    name: "Kyrgyzstan",
    capital: "Bishkek",
    population: 6624577,
    funFact:
      "A mountainous country in Central Asia known for its stunning alpine landscapes, nomadic traditions, and hospitality.",
    code: "KGZ",
  },
  LAO: {
    name: "Laos",
    capital: "Vientiane",
    population: 7313150,
    funFact:
      "Landlocked and nestled between Thailand, Vietnam, and Cambodia, Laos offers ancient temples, scenic rivers, and a laid-back atmosphere.",
    code: "LAO",
  },
  LVA: {
    name: "Latvia",
    capital: "Riga",
    population: 1886198,
    funFact:
      "Situated on the eastern shore of the Baltic Sea, Latvia is known for its picturesque landscapes, historic castles, and vibrant art scene.",
    code: "LVA",
  },
  LBN: {
    name: "Lebanon",
    capital: "Beirut",
    population: 6825442,
    funFact:
      "A Mediterranean country known for its rich history, vibrant culture, and culinary delights, often referred to as the 'Paris of the Middle East'.",
    code: "LBN",
  },
  LSO: {
    name: "Lesotho",
    capital: "Maseru",
    population: 2142249,
    funFact:
      "A highland kingdom entirely surrounded by South Africa, known for its breathtaking mountain landscapes and traditional Basotho culture.",
    level: Level.Normal,
    code: "LSO",
  },
  LBR: {
    name: "Liberia",
    capital: "Monrovia",
    population: 5057681,
    funFact:
      "Founded by freed American slaves, Liberia is the oldest republic in Africa and offers beautiful beaches and diverse wildlife.",
    code: "LBR",
  },
  LBY: {
    name: "Libya",
    capital: "Tripoli",
    population: 6871287,
    funFact:
      "Located in North Africa, Libya is known for its ancient Roman ruins, Sahara Desert landscapes, and rich historical heritage.",
    code: "LBY",
  },
  LIE: {
    name: "Liechtenstein",
    capital: "Vaduz",
    population: 38380,
    funFact:
      "A small principality nestled between Switzerland and Austria, known for its stunning alpine scenery and low-tax haven status.",
    level: Level.Normal,
    code: "LIE",
  },
  LTU: {
    name: "Lithuania",
    capital: "Vilnius",
    population: 2722289,
    funFact:
      "One of the Baltic states, Lithuania is known for its medieval architecture, beautiful lakes, and the Hill of Crosses.",
    code: "LTU",
  },
  LUX: {
    name: "Luxembourg",
    capital: "Luxembourg City",
    population: 625978,
    funFact:
      "A small landlocked country known for its fairy-tale-like castles, picturesque villages, and thriving financial sector.",
    code: "LUX",
  },
  MAC: {
    name: "Macau",
    capital: "Macau",
    population: 649100,
    funFact:
      "A Special Administrative Region of China, Macau is famous for its vibrant casinos, Portuguese architecture, and fusion cuisine.",
    code: "MAC",
  },
  MDG: {
    name: "Madagascar",
    capital: "Antananarivo",
    population: 27691019,
    funFact:
      "An island nation off the coast of East Africa, Madagascar is known for its unique wildlife, baobab trees, and stunning biodiversity.",
    code: "MDG",
  },
  MWI: {
    name: "Malawi",
    capital: "Lilongwe",
    population: 22261660,
    funFact:
      "Known as the 'Warm Heart of Africa,' Malawi offers stunning landscapes, including Lake Malawi, and rich cultural traditions.",
    code: "MWI",
  },
  MYS: {
    name: "Malaysia",
    capital: "Kuala Lumpur",
    population: 32365999,
    funFact:
      "A Southeast Asian country known for its diverse culture, stunning islands, lush rainforests, and iconic Petronas Twin Towers.",
    level: Level.Easy,
    code: "MYS",
  },
  MDV: {
    name: "Maldives",
    capital: "Malé",
    population: 540542,
    funFact:
      "A tropical paradise in the Indian Ocean, the Maldives is famous for its pristine white-sand beaches, coral reefs, and luxury resorts.",
    level: Level.Normal,
    code: "MDV",
  },
  MLI: {
    name: "Mali",
    capital: "Bamako",
    population: 20250833,
    funFact:
      "A landlocked country in West Africa known for its historic trading city of Timbuktu, vibrant music, and ancient mud-brick mosques.",
    code: "MLI",
  },
  MLT: {
    name: "Malta",
    capital: "Valletta",
    population: 502653,
    funFact:
      "Located in the Mediterranean Sea, Malta offers a rich history, stunning architecture, and beautiful beaches.",
    code: "MLT",
  },
  MHL: {
    name: "Marshall Islands",
    capital: "Majuro",
    population: 59190,
    funFact:
      "An island nation in the Pacific Ocean, the Marshall Islands are known for their pristine coral reefs, World War II wrecks, and traditional handicrafts.",
    level: Level.Normal,
    code: "MHL",
  },
  MTQ: {
    name: "Martinique",
    capital: "Fort-de-France",
    population: 376480,
    funFact:
      "A Caribbean island and overseas department of France, Martinique is famous for its lush rainforests, volcanic landscapes, and Creole culture.",
    code: "MTQ",
  },
  MRT: {
    name: "Mauritania",
    capital: "Nouakchott",
    population: 4649658,
    funFact:
      "Mauritania is known for its rich cultural heritage and is home to ancient Saharan cities.",
    code: "MRT",
  },
  MUS: {
    name: "Mauritius",
    capital: "Port Louis",
    population: 1265985,
    funFact:
      "Mauritius is famous for its stunning beaches, turquoise waters, and diverse marine life.",
    code: "MUS",
  },
  MYT: {
    name: "Mayotte",
    capital: "Mamoudzou",
    population: 272815,
    funFact:
      "Mayotte is an overseas department and region of France located in the Indian Ocean.",
    code: "MYT",
  },
  MEX: {
    name: "Mexico",
    capital: "Mexico City",
    population: 126190788,
    funFact:
      "Mexico is renowned for its vibrant culture, delicious cuisine, and ancient Mayan ruins.",
    level: Level.Easy,
    code: "MEX",
  },
  FSM: {
    name: "Micronesia",
    capital: "Palikir",
    population: 113815,
    funFact:
      "Micronesia is a country located in the western Pacific Ocean, comprising more than 600 islands.",
    level: Level.Normal,
    code: "FSM",
  },
  MDA: {
    name: "Moldova",
    capital: "Chișinău",
    population: 3545883,
    funFact:
      "Moldova is known for its beautiful countryside, vineyards, and traditional winemaking.",
    level: Level.Hard,
    code: "MDA",
  },
  MCO: {
    name: "Monaco",
    capital: "Monaco",
    population: 39244,
    funFact:
      "Monaco is the second-smallest country in the world and is famous for its luxury casinos and yacht-lined harbor.",
    level: Level.Normal,
    code: "MCO",
  },
  MNG: {
    name: "Mongolia",
    capital: "Ulaanbaatar",
    population: 3278290,
    funFact:
      "Mongolia is known for its vast steppes, nomadic culture, and the Gobi Desert.",
    level: Level.Hard,
    code: "MNG",
  },
  MNE: {
    name: "Montenegro",
    capital: "Podgorica",
    population: 622359,
    funFact:
      "Montenegro is a small Balkan country known for its breathtaking coastline and rugged mountains.",
    level: Level.Hard,
    code: "MNE",
  },
  MSR: {
    name: "Montserrat",
    capital: "Plymouth",
    population: 4922,
    funFact:
      "Montserrat is a British Overseas Territory in the Caribbean and is nicknamed the 'Emerald Isle of the Caribbean'.",
    code: "MSR",
  },
  MAR: {
    name: "Morocco",
    capital: "Rabat",
    population: 36910560,
    funFact:
      "Morocco is famous for its vibrant markets, stunning architecture, and the Sahara Desert.",
    code: "MAR",
  },
  MOZ: {
    name: "Mozambique",
    capital: "Maputo",
    population: 30066648,
    funFact:
      "Mozambique is located on the southeastern coast of Africa and is known for its beautiful beaches and wildlife reserves.",
    level: Level.Hard,
    code: "MOZ",
  },
  MMR: {
    name: "Myanmar",
    capital: "Naypyidaw",
    population: 54339766,
    funFact:
      "Myanmar, formerly known as Burma, is home to ancient temples, picturesque landscapes, and diverse ethnic cultures.",
    level: Level.Hard,
    code: "MMR",
  },
  NAM: {
    name: "Namibia",
    capital: "Windhoek",
    population: 2608467,
    funFact:
      "Namibia is home to the Namib Desert, one of the oldest deserts in the world.",
    level: Level.Hard,
    code: "NAM",
  },
  NRU: {
    name: "Nauru",
    capital: "Yaren",
    population: 10824,
    funFact: "Nauru is the smallest island country in the world.",
    level: Level.Normal,
    code: "NRU",
  },
  NPL: {
    name: "Nepal",
    capital: "Kathmandu",
    population: 29609623,
    funFact: "Nepal is home to Mount Everest, the highest peak in the world.",
    code: "NPL",
  },
  NLD: {
    name: "Netherlands",
    capital: "Amsterdam",
    population: 17441067,
    funFact:
      "The Netherlands is known for its iconic windmills, tulip fields, and extensive canal systems.",
    level: Level.Easy,
    code: "NLD",
  },
  NCL: {
    name: "New Caledonia",
    capital: "Nouméa",
    population: 289335,
    funFact:
      "New Caledonia is a French overseas territory located in the South Pacific and is known for its stunning coral reefs.",
    code: "NCL",
  },
  NZL: {
    name: "New Zealand",
    capital: "Wellington",
    population: 4885500,
    funFact:
      "New Zealand is famous for its breathtaking landscapes, including mountains, fjords, and geothermal areas.",
    level: Level.Easy,
    code: "NZL",
  },
  NIC: {
    name: "Nicaragua",
    capital: "Managua",
    population: 6624554,
    funFact:
      "Nicaragua is known as the 'Land of Lakes and Volcanoes' due to its abundance of both natural wonders.",
    level: Level.Hard,
    code: "NIC",
  },
  NER: {
    name: "Niger",
    capital: "Niamey",
    population: 25058048,
    funFact:
      "Niger is home to the Sahara Desert and is one of the hottest countries in the world.",
    level: Level.Hard,
    code: "NER",
  },
  NGA: {
    name: "Nigeria",
    capital: "Abuja",
    population: 214028302,
    funFact:
      "Nigeria is the most populous country in Africa and is known for its cultural diversity and vibrant music scene.",
    level: Level.Hard,
    code: "NGA",
  },
  NIU: {
    name: "Niue",
    capital: "Alofi",
    population: 1624,
    funFact:
      "Niue is a small island nation located in the South Pacific and is known for its limestone cliffs and coral reefs.",
    level: Level.Normal,
    code: "NIU",
  },
  NFK: {
    name: "Norfolk Island",
    capital: "Kingston",
    population: 1748,
    funFact:
      "Norfolk Island is a small Australian territory located in the Pacific Ocean, known for its historic sites and beautiful coastline.",
    code: "NFK",
  },
  PRK: {
    name: "North Korea",
    capital: "Pyongyang",
    population: 25778816,
    funFact:
      "North Korea is a highly secretive country and is known for its strict political regime and isolation from the international community.",
    level: Level.Hard,
    code: "PRK",
  },
  MKD: {
    name: "North Macedonia",
    capital: "Skopje",
    population: 2085051,
    funFact:
      "North Macedonia is a landlocked country located in the Balkan Peninsula and is known for its rich history and diverse cultural heritage.",
    level: Level.Normal,
    code: "MKD",
  },
  MNP: {
    name: "Northern Mariana Islands",
    capital: "Saipan",
    population: 55144,
    funFact:
      "The Northern Mariana Islands is a U.S. commonwealth territory in the Pacific Ocean and is known for its tropical beauty and World War II historical sites.",
    code: "MNP",
  },
  NOR: {
    name: "Norway",
    capital: "Oslo",
    population: 5463047,
    funFact:
      "Norway is famous for its stunning fjords, Northern Lights, and outdoor activities such as hiking and skiing.",
    level: Level.Easy,
    code: "NOR",
  },
  OMN: {
    name: "Oman",
    capital: "Muscat",
    population: 5308897,
    funFact:
      "Oman is known for its diverse landscapes, including deserts, mountains, and beautiful coastline.",
    level: Level.Hard,
    code: "OMN",
  },
  PAK: {
    name: "Pakistan",
    capital: "Islamabad",
    population: 225199937,
    funFact:
      "Pakistan is home to K2, the second-highest peak in the world, and is known for its rich cultural heritage and historical sites.",
    level: Level.Hard,
    code: "PAK",
  },
  PLW: {
    name: "Palau",
    capital: "Ngerulmud",
    population: 17907,
    funFact:
      "Palau is a small island country in the western Pacific Ocean and is renowned for its pristine beaches, coral reefs, and marine biodiversity.",
    level: Level.Normal,
    code: "PLW",
  },
  PSE: {
    name: "Palestine",
    capital: "Ramallah",
    population: 5052776,
    funFact:
      "Palestine is a region with a complex political situation and is known for its historical significance and religious sites.",
    code: "PSE",
  },
  PAN: {
    name: "Panama",
    capital: "Panama City",
    population: 4373784,
    funFact:
      "Panama is famous for the Panama Canal, an engineering marvel that connects the Atlantic and Pacific Oceans.",
    level: Level.Hard,
    code: "PAN",
  },
  PNG: {
    name: "Papua New Guinea",
    capital: "Port Moresby",
    population: 9139265,
    funFact:
      "Papua New Guinea is one of the most culturally diverse countries in the world, with over 800 languages spoken.",
    level: Level.Normal,
    code: "PNG",
  },
  PRY: {
    name: "Paraguay",
    capital: "Asunción",
    population: 7132538,
    funFact:
      "Paraguay is known for its traditional music and dance, including the lively polka-like genre called polca paraguaya.",
    level: Level.Hard,
    code: "PRY",
  },
  PER: {
    name: "Peru",
    capital: "Lima",
    population: 33469403,
    funFact:
      "Peru is home to Machu Picchu, an ancient Incan citadel and one of the New Seven Wonders of the World.",
    level: Level.Hard,
    code: "PER",
  },
  PHL: {
    name: "Philippines",
    capital: "Manila",
    population: 111046913,
    funFact:
      "The Philippines is an archipelago consisting of over 7,000 islands and is known for its stunning beaches, rich biodiversity, and vibrant festivals.",
    level: Level.Hard,
    code: "PHL",
  },
  PCN: {
    name: "Pitcairn Islands",
    capital: "Adamstown",
    population: 50,
    funFact:
      "The Pitcairn Islands is a British Overseas Territory in the South Pacific and is one of the least populous jurisdictions in the world.",
    code: "PCN",
  },
  POL: {
    name: "Poland",
    capital: "Warsaw",
    population: 38386000,
    funFact:
      "Poland is famous for its medieval architecture, picturesque cities, and delicious cuisine, including dishes like pierogi and kielbasa.",
    level: Level.Hard,
    code: "POL",
  },
  PRT: {
    name: "Portugal",
    capital: "Lisbon",
    population: 10305564,
    funFact:
      "Portugal is known for its beautiful coastline, historic landmarks, and being the birthplace of explorers like Vasco da Gama.",
    level: Level.Easy,
    code: "PRT",
  },
  PRI: {
    name: "Puerto Rico",
    capital: "San Juan",
    population: 2860853,
    funFact:
      "Puerto Rico is a U.S. territory in the Caribbean known for its vibrant culture, stunning beaches, and bioluminescent bays.",
    code: "PRI",
  },
  QAT: {
    name: "Qatar",
    capital: "Doha",
    population: 2930524,
    funFact:
      "Qatar is one of the richest countries in the world and will be hosting the FIFA World Cup in 2022.",
    level: Level.Hard,
    code: "QAT",
  },
  REU: {
    name: "Réunion",
    capital: "Saint-Denis",
    population: 895312,
    funFact:
      "Réunion is an overseas department and region of France located in the Indian Ocean and is known for its volcanic landscapes and biodiversity.",
    level: Level.Hard,
    code: "REU",
  },
  ROU: {
    name: "Romania",
    capital: "Bucharest",
    population: 19523621,
    funFact:
      "Romania is home to the legendary region of Transylvania and the famous Bran Castle, often associated with the story of Dracula.",
    code: "ROU",
  },
  RUS: {
    name: "Russia",
    capital: "Moscow",
    population: 144373535,
    funFact:
      "Russia is the largest country in the world, spanning across two continents, and is known for its rich history, diverse culture, and iconic landmarks like the Red Square and the Kremlin.",
    level: Level.Easy,
    code: "RUS",
  },
  RWA: {
    name: "Rwanda",
    capital: "Kigali",
    population: 12663116,
    funFact:
      "Rwanda is known as the 'Land of a Thousand Hills' and has made significant progress in economic development and conservation efforts.",
    level: Level.Hard,
    code: "RWA",
  },
  BLM: {
    name: "Saint Barthélemy",
    capital: "Gustavia",
    population: 9877,
    funFact:
      "Saint Barthélemy is a Caribbean island and an overseas collectivity of France known for its luxury resorts, white sandy beaches, and vibrant nightlife.",
    level: Level.Hard,
    code: "BLM",
  },
  SHN: {
    name: "Saint Helena",
    capital: "Jamestown",
    population: 5633,
    funFact:
      "Saint Helena is a remote volcanic island in the South Atlantic Ocean and is famously known as the place of Napoleon Bonaparte's exile and death.",
    level: Level.Hard,
    code: "SHN",
  },
  KNA: {
    name: "Saint Kitts and Nevis",
    capital: "Basseterre",
    population: 53244,
    funFact:
      "Saint Kitts and Nevis is a dual-island nation in the Caribbean and is a popular tourist destination known for its beautiful beaches and historic sites.",
    level: Level.Normal,
    code: "KNA",
  },
  LCA: {
    name: "Saint Lucia",
    capital: "Castries",
    population: 183627,
    funFact:
      "Saint Lucia is a tropical paradise in the Eastern Caribbean and is famous for its stunning landscapes, including the iconic Pitons.",
    level: Level.Hard,
    code: "LCA",
  },
  MAF: {
    name: "Saint Martin (French part)",
    capital: "Marigot",
    population: 34606,
    funFact:
      "Saint Martin is a Caribbean island divided between France and the Netherlands and is known for its beautiful beaches, water sports, and lively culture.",
    level: Level.Hard,
    code: "MAF",
  },
  SPM: {
    name: "Saint Pierre and Miquelon",
    capital: "Saint-Pierre",
    population: 5990,
    funFact:
      "Saint Pierre and Miquelon is a small archipelago off the coast of Canada and is an overseas collectivity of France known for its French heritage and seafood cuisine.",
    level: Level.Hard,
    code: "SPM",
  },
  VCT: {
    name: "Saint Vincent and the Grenadines",
    capital: "Kingstown",
    population: 110608,
    funFact:
      "Saint Vincent and the Grenadines is an island country in the Caribbean and is famous for its pristine beaches, coral reefs, and sailing opportunities.",
    level: Level.Normal,
    code: "VCT",
  },
  WSM: {
    name: "Samoa",
    capital: "Apia",
    population: 198410,
    funFact:
      "Samoa is a Polynesian country in the South Pacific known for its traditional fa'a Samoa culture, natural beauty, and rugby passion.",
    level: Level.Hard,
    code: "WSM",
  },
  SMR: {
    name: "San Marino",
    capital: "San Marino",
    population: 33860,
    funFact:
      "San Marino is a microstate surrounded by Italy and is known for its medieval architecture and being one of the oldest republics in the world.",
    level: Level.Normal,
    code: "SMR",
  },
  STP: {
    name: "São Tomé and Príncipe",
    capital: "São Tomé",
    population: 219159,
    funFact:
      "São Tomé and Príncipe is an island nation in the Gulf of Guinea and is known for its stunning beaches, lush rainforests, and cocoa production.",
    level: Level.Normal,
    code: "STP",
  },
  SAU: {
    name: "Saudi Arabia",
    capital: "Riyadh",
    population: 35040000,
    funFact:
      "Saudi Arabia is the birthplace of Islam and is home to the two holiest cities of Islam, Mecca and Medina.",
    level: Level.Easy,
    code: "SAU",
  },
  SEN: {
    name: "Senegal",
    capital: "Dakar",
    population: 16743927,
    funFact:
      "Senegal is known for its vibrant music and dance scene, rich cultural heritage, and the stunning natural beauty of places like the Pink Lake (Lac Rose).",
    level: Level.Hard,
    code: "SEN",
  },
  SRB: {
    name: "Serbia",
    capital: "Belgrade",
    population: 8733407,
    funFact:
      "Serbia is known for its rich history, delicious cuisine, and vibrant music festivals, including the world-famous Exit festival.",
    level: Level.Hard,
    code: "SRB",
  },
  SYC: {
    name: "Seychelles",
    capital: "Victoria",
    population: 97417,
    funFact:
      "Seychelles is an archipelago in the Indian Ocean known for its stunning beaches, coral reefs, and diverse marine life, including the giant Aldabra tortoises.",
    level: Level.Normal,
    code: "SYC",
  },
  SLE: {
    name: "Sierra Leone",
    capital: "Freetown",
    population: 7901454,
    funFact:
      "Sierra Leone is known for its beautiful beaches, wildlife reserves, and the unique Krio language, which blends English with several African languages.",
    level: Level.Hard,
    code: "SLE",
  },
  SGP: {
    name: "Singapore",
    capital: "Singapore",
    population: 5703600,
    funFact:
      "Singapore is a city-state and island country known for its modern skyline, multicultural society, and efficient public transportation system.",
    level: Level.Easy,
    code: "SGP",
  },
  SXM: {
    name: "Sint Maarten (Dutch part)",
    capital: "Philipsburg",
    population: 41486,
    funFact:
      "Sint Maarten is a small island divided between the Netherlands and France, known for its beautiful beaches, vibrant nightlife, and duty-free shopping.",
    level: Level.Hard,
    code: "SXM",
  },
  SVK: {
    name: "Slovakia",
    capital: "Bratislava",
    population: 5450421,
    funFact:
      "Slovakia is a landlocked country in Central Europe known for its picturesque castles, stunning mountainous landscapes, and traditional folk culture.",
    level: Level.Hard,
    code: "SVK",
  },
  SVN: {
    name: "Slovenia",
    capital: "Ljubljana",
    population: 2114066,
    funFact:
      "Slovenia is a country known for its breathtaking natural beauty, including Lake Bled and the Julian Alps, as well as its excellent wines and outdoor activities.",
    level: Level.Hard,
    code: "SVN",
  },
  SLB: {
    name: "Solomon Islands",
    capital: "Honiara",
    population: 682500,
    funFact:
      "The Solomon Islands is an archipelago in the South Pacific known for its stunning coral reefs, World War II history, and traditional Melanesian culture.",
    level: Level.Normal,
    code: "SLB",
  },
  SOM: {
    name: "Somalia",
    capital: "Mogadishu",
    population: 15181925,
    funFact:
      "Somalia is located in the Horn of Africa and is known for its rich cultural heritage, ancient cities like Mogadishu, and beautiful coastline along the Indian Ocean.",
    level: Level.Hard,
    code: "SOM",
  },
  ZAF: {
    name: "South Africa",
    capital:
      "Pretoria (executive), Cape Town (legislative), Bloemfontein (judicial)",
    population: 58775022,
    funFact:
      "South Africa is a diverse country known for its wildlife safaris, stunning landscapes, vibrant cities like Johannesburg and Cape Town, and its rich history, including the legacy of Nelson Mandela.",
    level: Level.Easy,
    code: "ZAF",
  },
  SGS: {
    name: "South Georgia and the South Sandwich Islands",
    capital: "Grytviken",
    population: 30,
    funFact:
      "South Georgia and the South Sandwich Islands are a remote British overseas territory in the South Atlantic Ocean known for their rugged beauty, abundant wildlife, and historical whaling stations.",
    level: Level.Hard,
    code: "SGS",
  },
  KOR: {
    name: "South Korea",
    capital: "Seoul",
    population: 51780579,
    funFact:
      "South Korea is known for its technological advancements, K-pop music, vibrant street markets, delicious cuisine, and ancient palaces, such as Gyeongbokgung.",
    level: Level.Easy,
    code: "KOR",
  },
  SSD: {
    name: "South Sudan",
    capital: "Juba",
    population: 11062113,
    funFact:
      "South Sudan is the youngest country in the world, gaining independence from Sudan in 2011. It is home to diverse ethnic groups, wildlife, and the vast Sudd wetland.",
    level: Level.Hard,
    code: "SSD",
  },
  ESP: {
    name: "Spain",
    capital: "Madrid",
    population: 46736776,
    funFact:
      "Spain is known for its rich history, vibrant culture, stunning architecture (such as Sagrada Familia and Alhambra), world-famous cuisine, and beautiful beaches.",
    level: Level.Easy,
    code: "ESP",
  },
  LKA: {
    name: "Sri Lanka",
    capital: "Colombo (executive), Sri Jayawardenepura Kotte (legislative)",
    population: 21670000,
    funFact:
      "Sri Lanka, often referred to as the 'Pearl of the Indian Ocean,' is famous for its ancient ruins, vibrant festivals, flavorful cuisine, and stunning tea plantations.",
    level: Level.Hard,
    code: "LKA",
  },
  SDN: {
    name: "Sudan",
    capital: "Khartoum",
    population: 42813238,
    funFact:
      "Sudan is the third-largest country in Africa and is known for its ancient pyramids, diverse cultures, the Nile River, and vast desert landscapes.",
    level: Level.Hard,
    code: "SDN",
  },
  SUR: {
    name: "Suriname",
    capital: "Paramaribo",
    population: 575991,
    funFact:
      "Suriname is a small country on the northeastern coast of South America known for its diverse ethnic makeup, lush rainforests, and the historic capital city of Paramaribo.",
    level: Level.Normal,
    code: "SUR",
  },
  SWE: {
    name: "Sweden",
    capital: "Stockholm",
    population: 10353474,
    funFact:
      "Sweden is known for its stunning landscapes, including forests, lakes, and coastal islands. It is also famous for its design, ABBA, meatballs, and the Northern Lights.",
    level: Level.Easy,
    code: "SWE",
  },
  CHE: {
    name: "Switzerland",
    capital: "Bern",
    population: 8586550,
    funFact:
      "Switzerland is renowned for its beautiful Alps, Swiss watches, delicious chocolate, efficient public transportation, and being a global hub for diplomacy and finance.",
    level: Level.Easy,
    code: "CHE",
  },
  SYR: {
    name: "Syria",
    capital: "Damascus",
    population: 17500657,
    funFact:
      "Syria is an ancient country with a rich history and is known for its historic sites, such as the ancient city of Palmyra, as well as its diverse cultural heritage.",
    level: Level.Hard,
    code: "SYR",
  },
  TWN: {
    name: "Taiwan",
    capital: "Taipei",
    population: 23816775,
    funFact:
      "Taiwan, officially known as the Republic of China (ROC), is an island nation famous for its technological innovation, night markets, beautiful scenery, and delicious street food.",
    level: Level.Hard,
    code: "TWN",
  },
  TJK: {
    name: "Tajikistan",
    capital: "Dushanbe",
    population: 9537645,
    funFact:
      "Tajikistan is a mountainous country in Central Asia known for its rugged landscapes, ancient Silk Road cities, and traditional arts and crafts, such as handwoven carpets and intricate metalwork.",
    level: Level.Hard,
    code: "TJK",
  },
  TZA: {
    name: "Tanzania",
    capital: "Dodoma (official), Dar es Salaam (administrative)",
    population: 59734218,
    funFact:
      "Tanzania is home to Mount Kilimanjaro, the highest peak in Africa, as well as the Serengeti National Park and the stunning Zanzibar Archipelago, known for its beautiful beaches and rich cultural heritage.",
    code: "TZA",
  },
  THA: {
    name: "Thailand",
    capital: "Bangkok",
    population: 69428524,
    funFact:
      "Thailand, also known as the 'Land of Smiles,' is famous for its rich history, ornate temples (such as Wat Arun and Wat Phra Kaew), delicious cuisine (including pad Thai and green curry), and vibrant street markets.",
    level: Level.Easy,
    code: "THA",
  },
  TLS: {
    name: "Timor-Leste",
    capital: "Dili",
    population: 1387149,
    funFact:
      "Timor-Leste, also known as East Timor, is a Southeast Asian country known for its stunning beaches, diverse marine life, and vibrant cultural traditions.",
    level: Level.Normal,
    code: "TLS",
  },
  TGO: {
    name: "Togo",
    capital: "Lomé",
    population: 8278724,
    funFact:
      "Togo is a small West African country known for its palm-fringed beaches, traditional voodoo practices, vibrant markets, and the Koutammakou landscape, a UNESCO World Heritage site.",
    code: "TGO",
  },
  TKL: {
    name: "Tokelau",
    capital: "Nukunonu, Atafu, Fakaofo",
    population: 1500,
    funFact:
      "Tokelau is a group of three coral atolls in the South Pacific Ocean. With a small population and a remote location, Tokelau is known for its pristine natural beauty and traditional Polynesian culture.",
    code: "TKL",
  },
  TON: {
    name: "Tonga",
    capital: "Nuku'alofa",
    population: 103197,
    funFact:
      "Tonga is an archipelago in the South Pacific known for its stunning beaches, coral reefs, and warm hospitality. It is the only monarchy in the Pacific region.",
    level: Level.Normal,
    code: "TON",
  },
  TTO: {
    name: "Trinidad and Tobago",
    capital: "Port of Spain",
    population: 1394973,
    funFact:
      "Trinidad and Tobago is a twin-island nation in the Caribbean known for its vibrant Carnival celebrations, diverse cultural heritage, and beautiful beaches.",
    code: "TTO",
  },
  TUN: {
    name: "Tunisia",
    capital: "Tunis",
    population: 11818619,
    funFact:
      "Tunisia is a North African country known for its ancient ruins, such as Carthage and the Roman amphitheater of El Djem, as well as its beautiful Mediterranean coastline.",
    code: "TUN",
  },
  TUR: {
    name: "Turkey",
    capital: "Ankara",
    population: 83154997,
    funFact:
      "Turkey is a transcontinental country located at the crossroads of Europe and Asia. It is known for its rich history, iconic landmarks (such as Hagia Sophia and Cappadocia), delicious cuisine, and vibrant bazaars.",
    level: Level.Easy,
    code: "TUR",
  },
  TKM: {
    name: "Turkmenistan",
    capital: "Ashgabat",
    population: 5942089,
    funFact:
      "Turkmenistan is a Central Asian country known for its vast deserts, ancient Silk Road sites, and impressive white marble architecture in the capital city of Ashgabat.",
    code: "TKM",
  },
  TCA: {
    name: "Turks and Caicos Islands",
    capital: "Cockburn Town",
    population: 38717,
    funFact:
      "The Turks and Caicos Islands are a British Overseas Territory in the Caribbean. Known for their pristine beaches, turquoise waters, and vibrant coral reefs, they are a popular destination for luxury resorts and water sports.",
    code: "TCA",
  },
  TUV: {
    name: "Tuvalu",
    capital: "Funafuti",
    population: 11646,
    funFact:
      "Tuvalu is a small island nation in the Pacific Ocean. It is known for its stunning seascapes, traditional Polynesian culture, and being one of the world's least populated countries.",
    level: Level.Normal,
    code: "TUV",
  },
  UGA: {
    name: "Uganda",
    capital: "Kampala",
    population: 47121858,
    funFact:
      "Uganda is often referred to as the 'Pearl of Africa' due to its diverse wildlife, including mountain gorillas in Bwindi Impenetrable National Park, and stunning natural landscapes such as Murchison Falls and Lake Victoria.",
    code: "UGA",
  },
  UKR: {
    name: "Ukraine",
    capital: "Kyiv",
    population: 43733759,
    funFact:
      "Ukraine is the largest country in Europe. It is known for its rich history, diverse architecture, including UNESCO World Heritage sites like Kyiv's Saint Sophia Cathedral, and its cultural contributions, particularly in literature and music.",
    code: "UKR",
  },
  ARE: {
    name: "United Arab Emirates",
    capital: "Abu Dhabi",
    population: 9890400,
    funFact:
      "The United Arab Emirates is a federation of seven emirates located in the Middle East. Known for its modern architecture, luxurious resorts, and vibrant cities like Dubai and Abu Dhabi, it is a popular tourist destination.",
    level: Level.Easy,
    code: "ARE",
  },
  GBR: {
    name: "United Kingdom",
    capital: "London",
    population: 67886011,
    funFact:
      "The United Kingdom, consisting of four countries (England, Scotland, Wales, and Northern Ireland), is known for its rich history, iconic landmarks (such as the Big Ben and Stonehenge), vibrant cultural scene, and royal traditions.",
    level: Level.Easy,
    code: "GBR",
  },
  USA: {
    name: "United States",
    capital: "Washington, D.C.",
    population: 331002651,
    funFact:
      "The United States is a vast country known for its diverse landscapes, cultural melting pot, iconic cities (such as New York City and Los Angeles), and landmarks like the Statue of Liberty and the Grand Canyon.",
    level: Level.Easy,
    code: "USA",
  },
  VIR: {
    name: "United States Virgin Islands",
    capital: "Charlotte Amalie",
    population: 104425,
    funFact:
      "The United States Virgin Islands is a group of islands in the Caribbean Sea. Known for their beautiful beaches, crystal-clear waters, and vibrant coral reefs, they are a popular destination for snorkeling, diving, and sailing.",
    code: "VIR",
  },
  URY: {
    name: "Uruguay",
    capital: "Montevideo",
    population: 3473730,
    funFact:
      "Uruguay is a South American country known for its stunning coastline, vibrant culture, and progressive social policies. It is the birthplace of tango and home to beautiful colonial towns like Colonia del Sacramento.",
    code: "URY",
  },
  UZB: {
    name: "Uzbekistan",
    capital: "Tashkent",
    population: 33469203,
    funFact:
      "Uzbekistan is a Central Asian country known for its rich history along the Silk Road. It is famous for its stunning Islamic architecture, such as the Registan Square in Samarkand and the Kalon Minaret in Bukhara.",
    code: "UZB",
  },
  VUT: {
    name: "Vanuatu",
    capital: "Port Vila",
    population: 307145,
    funFact:
      "Vanuatu is a South Pacific island nation known for its stunning natural beauty, including active volcanoes, pristine beaches, and vibrant coral reefs. It is also famous for its unique tribal cultures and traditional ceremonies.",
    level: Level.Normal,
    code: "VUT",
  },
  VAT: {
    name: "Vatican City",
    capital: "Vatican City",
    population: 825,
    funFact:
      "Vatican City is the smallest independent state in the world, both in terms of area and population. It is the spiritual and administrative headquarters of the Roman Catholic Church, and home to St. Peter's Basilica and the Vatican Museums.",
    code: "VAT",
  },
  VEN: {
    name: "Venezuela",
    capital: "Caracas",
    population: 28435940,
    funFact:
      "Venezuela is a South American country known for its stunning landscapes, including the world's tallest waterfall, Angel Falls. It is also famous for its rich biodiversity, vibrant music and dance, and the delicious arepas.",
    code: "VEN",
  },
  VNM: {
    name: "Vietnam",
    capital: "Hanoi",
    population: 97338579,
    funFact:
      "Vietnam is a Southeast Asian country known for its diverse culture, ancient temples, beautiful landscapes, and delicious cuisine. From the bustling streets of Hanoi to the iconic limestone formations of Halong Bay, Vietnam offers a wide range of experiences.",
    code: "VNM",
  },
  WLF: {
    name: "Wallis and Futuna",
    capital: "Mata-Utu",
    population: 15289,
    funFact:
      "Wallis and Futuna is a French overseas collectivity in the South Pacific. It is made up of three main volcanic islands and is known for its stunning lagoons, traditional Polynesian culture, and beautiful handicrafts.",
    level: Level.Normal,
    code: "WLF",
  },
  ESH: {
    name: "Western Sahara",
    capital: "El Aaiún",
    population: 597339,
    funFact:
      "Western Sahara is a disputed territory in North Africa. It is known for its vast desert landscapes, including the world's largest non-polar desert, the Sahara. The status of Western Sahara is the subject of ongoing international negotiations.",
    code: "ESH",
  },
  YEM: {
    name: "Yemen",
    capital: "Sana'a",
    population: 29825968,
    funFact:
      "Yemen is a country located in the southern part of the Arabian Peninsula. It is known for its rich history, ancient architecture (such as the UNESCO World Heritage Site of Old Sana'a), and unique blend of cultures.",
    code: "YEM",
  },
  ZMB: {
    name: "Zambia",
    capital: "Lusaka",
    population: 18383955,
    funFact:
      "Zambia is a landlocked country in Southern Africa known for its diverse wildlife, stunning landscapes (including Victoria Falls), and vibrant culture. It is also one of the world's largest producers of copper.",
    code: "ZMB",
  },
  ZWE: {
    name: "Zimbabwe",
    capital: "Harare",
    population: 14862924,
    funFact:
      "Zimbabwe is a landlocked country in Southern Africa known for its diverse wildlife, ancient ruins (such as Great Zimbabwe), and beautiful national parks (such as Hwange National Park and Mana Pools National Park).",
    code: "ZWE",
  },

  // Special Cases
  USG: {
    name: "USNB Guantanamo Bay",
    capital: "N/A",
    population: 6000,
    funFact: "A U.S. Naval base located in Guantanamo Bay, Cuba.",
    code: "USG",
  },
  UMI: {
    name: "U.S. Minor Outlying Islands",
    capital: "N/A",
    population: 300,
    funFact:
      "Consists of multiple uninhabited U.S. territories in the Pacific Ocean and the Caribbean Sea.",
    code: "UMI",
  },
  BJN: {
    name: "Bajo Nuevo Bank",
    capital: "N/A",
    population: 0,
    funFact:
      "An uninhabited reef in the western Caribbean Sea, claimed by the United States, Colombia, and Jamaica.",
    code: "BJN",
  },
  SER: {
    name: "Serranilla Bank",
    capital: "N/A",
    population: 0,
    funFact:
      "An uninhabited reef in the western Caribbean Sea, claimed by the United States, Colombia, and Nicaragua.",
    code: "SER",
  },
  ESB: {
    name: "Dhekelia",
    capital: "N/A",
    population: 7500,
    funFact: "A British Overseas Territory located in Cyprus.",
    code: "ESB",
  },
  PSX: {
    name: "Palestine",
    capital: "N/A",
    population: 5050000,
    funFact:
      "A state recognized by the United Nations, with its status and borders subject to ongoing disputes.",
    code: "PSX",
  },
  CYN: {
    name: "Northern Cyprus",
    capital: "Nicosia",
    population: 351965,
    funFact:
      "A self-declared state recognized only by Turkey and occupying the northern portion of the island of Cyprus.",
    code: "CYN",
  },
  CNM: {
    name: "Cyprus U.N. Buffer Zone",
    capital: "N/A",
    population: 0,
    funFact:
      "A demilitarized zone administered by the United Nations, dividing Cyprus into two parts.",
    code: "CNM",
  },
  KAS: {
    name: "Siachen Glacier",
    capital: "N/A",
    population: 0,
    funFact:
      "A disputed territory located in the eastern Karakoram range of the Himalayas, claimed by India and Pakistan.",
    code: "KAS",
  },
  KAB: {
    name: "Baikonur",
    capital: "N/A",
    population: 23000,
    funFact:
      "A city in Kazakhstan known for the Baikonur Cosmodrome, the world's first and largest operational space launch facility.",
    code: "KAB",
  },
  WSB: {
    name: "Akrotiri",
    capital: "N/A",
    population: 15000,
    funFact: "A British Overseas Territory located on the island of Cyprus.",
    code: "WSB",
  },
  IOA: {
    name: "British Indian Ocean Territory",
    capital: "N/A",
    population: 3000,
    funFact:
      "A British Overseas Territory in the Indian Ocean, known for the strategic military base of Diego Garcia.",
    code: "IOA",
  },
  PGA: {
    name: "Spratly Islands",
    capital: "N/A",
    population: 0,
    funFact:
      "A disputed archipelago in the South China Sea, claimed in whole or in part by several countries.",
    code: "PGA",
  },
  SCR: {
    name: "Scarborough Reef",
    capital: "N/A",
    population: 0,
    funFact:
      "An atoll reef in the South China Sea, claimed by China, Taiwan, and the Philippines.",
    code: "SCR",
  },
  BRI: {
    name: "Brazilian Island",
    capital: "N/A",
    population: 0,
    funFact:
      "An uninhabited island in the South Atlantic Ocean, administered by Brazil.",
    code: "BRI",
  },
  SPI: {
    name: "Southern Patagonian Ice Field",
    capital: "N/A",
    population: 0,
    funFact:
      "One of the largest non-polar ice fields in the world, located in southern Chile and Argentina.",
    code: "SPI",
  },
  SDS: {
    name: "South Sudan",
    capital: "Juba",
    population: 11193729,
    funFact:
      "The youngest country in the world, having gained independence from Sudan in 2011.",
    code: "SDS",
  },
  SOL: {
    name: "Somaliland",
    capital: "Hargeisa",
    population: 3508180,
    funFact:
      "A self-declared state internationally recognized as an autonomous region of Somalia.",
    code: "SOL",
  },
  SAH: {
    name: "Western Sahara",
    capital: "N/A",
    population: 567421,
    funFact:
      "A disputed territory in North Africa, claimed by both Morocco and the Sahrawi Arab Democratic Republic.",
    code: "SAH",
  },
  BRT: {
    name: "Bir Tawil",
    capital: "N/A",
    population: 0,
    funFact:
      "An area along the border between Egypt and Sudan, claimed by neither country due to a territorial dispute.",
    code: "BRT",
  },
  KOS: {
    name: "Kosovo",
    capital: "Pristina",
    population: 1810366,
    funFact:
      "A partially recognized state in Southeastern Europe, with a complex political status and ongoing disputes.",
    code: "KOS",
  },
  ALD: {
    name: "Åland Islands",
    capital: "Mariehamn",
    population: 29989,
    funFact:
      "An autonomous territory of Finland, known for its Swedish-speaking population and picturesque archipelago.",
    code: "ALD",
  },
  CSI: {
    name: "Coral Sea Islands",
    capital: "N/A",
    population: 4,
    funFact:
      "An external territory of Australia comprising numerous small islands and reefs in the Coral Sea.",
    code: "CSI",
  },
  ATC: {
    name: "Ashmore and Cartier Islands",
    capital: "N/A",
    population: 0,
    funFact:
      "An external territory of Australia located in the Indian Ocean, known for its rich marine biodiversity.",
    code: "ATC",
  },
};

const getCountriesByLevel = (level: Level): Country[] => {
  let countries: Country[] = [];

  Object.entries(COUNTRIES).forEach(([key, value]) => {
    if (value.level === level) {
      countries.push(value);
    }
  });
  return countries;
};

export const getCountries = (level: Level): Country[] => {
  const countriesByLevel = getCountriesByLevel(level);
  const randomSample = sampleSize(countriesByLevel, SAMPLE_SIZE);
  return randomSample;
};
