import Ember from "ember";

let countrySet = [{
  "code": "af",
  "phoneCode": "93",
  "real-value": "Afghanistan",
  "label": "Afghanistan",
  "matches": "Afghanistan AF افغانستان",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "al",
  "phoneCode": "355",
  "real-value": "Albania",
  "label": "Albania",
  "matches": "Albania AL",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "dz",
  "phoneCode": "213",
  "real-value": "Algeria",
  "label": "Algeria",
  "matches": "Algeria DZ الجزائر",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "as",
  "phoneCode": "1",
  "real-value": "American Samoa",
  "label": "American Samoa",
  "matches": "American Samoa AS",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "ad",
  "phoneCode": "376",
  "real-value": "Andorra",
  "label": "Andorra",
  "matches": "Andorra AD",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "ao",
  "phoneCode": "244",
  "real-value": "Angola",
  "label": "Angola",
  "matches": "Angola AO",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "ai",
  "phoneCode": "1",
  "real-value": "Anguilla",
  "label": "Anguilla",
  "matches": "Anguilla AI",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "aq",
  "phoneCode": "672",
  "real-value": "Antarctica",
  "label": "Antarctica",
  "matches": "Antarctica AQ",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "ag",
  "phoneCode": "1",
  "real-value": "Antigua And Barbuda",
  "label": "Antigua And Barbuda",
  "matches": "Antigua And Barbuda AG",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "ar",
  "phoneCode": "54",
  "real-value": "Argentina",
  "label": "Argentina",
  "matches": "Argentina AR",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "am",
  "phoneCode": "374",
  "real-value": "Armenia",
  "label": "Armenia",
  "matches": "Armenia AM Հայաստան",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "aw",
  "phoneCode": "297",
  "real-value": "Aruba",
  "label": "Aruba",
  "matches": "Aruba AW",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "au",
  "phoneCode": "61",
  "real-value": "Australia",
  "label": "Australia",
  "matches": "Australia AU",
  "relevancy-score": 0,
  "relevancy-score-booster": 1.5
}, {
  "code": "at",
  "phoneCode": "43",
  "real-value": "Austria",
  "label": "Austria",
  "matches": "Austria AT Österreich Osterreich Oesterreich ",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "az",
  "phoneCode": "994",
  "real-value": "Azerbaijan",
  "label": "Azerbaijan",
  "matches": "Azerbaijan AZ",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "bs",
  "phoneCode": "1",
  "real-value": "Bahamas",
  "label": "Bahamas",
  "matches": "Bahamas BS",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "bh",
  "phoneCode": "973",
  "real-value": "Bahrain",
  "label": "Bahrain",
  "matches": "Bahrain BH البحرين",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "bd",
  "phoneCode": "880",
  "real-value": "Bangladesh",
  "label": "Bangladesh",
  "matches": "Bangladesh BD বাংলাদেশ",
  "relevancy-score": 0,
  "relevancy-score-booster": 2
}, {
  "code": "cc",
  "phoneCode": "1",
  "real-value": "Barbados",
  "label": "Barbados",
  "matches": "Barbados BB",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "by",
  "phoneCode": "375",
  "real-value": "Belarus",
  "label": "Belarus",
  "matches": "Belarus BY Беларусь",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "be",
  "phoneCode": "32",
  "real-value": "Belgium",
  "label": "Belgium",
  "matches": "Belgium BE België Belgie Belgien Belgique",
  "relevancy-score": 0,
  "relevancy-score-booster": 1.5
}, {
  "code": "bz",
  "phoneCode": "501",
  "real-value": "Belize",
  "label": "Belize",
  "matches": "Belize BZ",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "bj",
  "phoneCode": "229",
  "real-value": "Benin",
  "label": "Benin",
  "matches": "Benin BJ",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "bm",
  "phoneCode": "1",
  "real-value": "Bermuda",
  "label": "Bermuda",
  "matches": "Bermuda BM",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "bt",
  "phoneCode": "975",
  "real-value": "Bhutan",
  "label": "Bhutan",
  "matches": "Bhutan BT भूटान",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "bo",
  "phoneCode": "591",
  "real-value": "Bolivia",
  "label": "Bolivia",
  "matches": "Bolivia BO",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "an",
  "phoneCode": "599",
  "real-value": "Bonaire, Sint Eustatius and Saba",
  "label": "Bonaire, Sint Eustatius and Saba",
  "matches": "Bonaire, Sint Eustatius and Saba BQ",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "ba",
  "phoneCode": "387",
  "real-value": "Bosnia and Herzegovina",
  "label": "Bosnia and Herzegovina",
  "matches": "Bosnia and Herzegovina BA BiH Bosna i Hercegovina Босна и Херцеговина",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "bw",
  "phoneCode": "267",
  "real-value": "Botswana",
  "label": "Botswana",
  "matches": "Botswana BW",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "br",
  "phoneCode": "55",
  "real-value": "Brazil",
  "label": "Brazil",
  "matches": "Brazil BR Brasil",
  "relevancy-score": 0,
  "relevancy-score-booster": 2
}, {
  "code": "io",
  "phoneCode": "246",
  "real-value": "British Indian Ocean Territory",
  "label": "British Indian Ocean Territory",
  "matches": "British Indian Ocean Territory IO",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "bn",
  "phoneCode": "673",
  "real-value": "Brunei Darussalam",
  "label": "Brunei Darussalam",
  "matches": "Brunei Darussalam BN",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "bg",
  "phoneCode": "359",
  "real-value": "Bulgaria",
  "label": "Bulgaria",
  "matches": "Bulgaria BG България",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "bf",
  "phoneCode": "226",
  "real-value": "Burkina Faso",
  "label": "Burkina Faso",
  "matches": "Burkina Faso BF",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "bi",
  "phoneCode": "257",
  "real-value": "Burundi",
  "label": "Burundi",
  "matches": "Burundi BI",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "kh",
  "phoneCode": "855",
  "real-value": "Cambodia",
  "label": "Cambodia",
  "matches": "Cambodia KH កម្ពុជា",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "cm",
  "phoneCode": "237",
  "real-value": "Cameroon",
  "label": "Cameroon",
  "matches": "Cameroon CM",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "ca",
  "phoneCode": "1",
  "real-value": "Canada",
  "label": "Canada",
  "matches": "Canada CA",
  "relevancy-score": 0,
  "relevancy-score-booster": 2
}, {
  "code": "cv",
  "phoneCode": "238",
  "real-value": "Cape Verde",
  "label": "Cape Verde",
  "matches": "Cape Verde CV Cabo",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "1",
  "phoneCode": "ky",
  "real-value": "Cayman Islands",
  "label": "Cayman Islands",
  "matches": "Cayman Islands KY",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "cf",
  "phoneCode": "236",
  "real-value": "Central African Republic",
  "label": "Central African Republic",
  "matches": "Central African Republic CF",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "td",
  "phoneCode": "235",
  "real-value": "Chad",
  "label": "Chad",
  "matches": "Chad TD تشاد‎ Tchad",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "cl",
  "phoneCode": "56",
  "real-value": "Chile",
  "label": "Chile",
  "matches": "Chile CL",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "tw",
  "phoneCode": "886",
  "real-value": "China",
  "label": "China",
  "matches": "China CN Zhongguo Zhonghua Peoples Republic 中国/中华",
  "relevancy-score": 0,
  "relevancy-score-booster": 3.5
}, {
  "code": "cx",
  "phoneCode": "61",
  "real-value": "Christmas Island",
  "label": "Christmas Island",
  "matches": "Christmas Island CX",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "cc",
  "phoneCode": "61",
  "real-value": "Cocos (Keeling) Islands",
  "label": "Cocos (Keeling) Islands",
  "matches": "Cocos (Keeling) Islands CC",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "co",
  "phoneCode": "57",
  "real-value": "Colombia",
  "label": "Colombia",
  "matches": "Colombia CO",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "km",
  "phoneCode": "269",
  "real-value": "Comoros",
  "label": "Comoros",
  "matches": "Comoros KM جزر القمر",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "cd",
  "phoneCode": "243",
  "real-value": "Congo",
  "label": "Congo",
  "matches": "Congo CG",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "cd",
  "phoneCode": "243",
  "real-value": "Congo, the Democratic Republic of the",
  "label": "Congo, the Democratic Republic of the",
  "matches": "Congo, the Democratic Republic of the CD Congo-Brazzaville Repubilika ya Kongo",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "ck",
  "phoneCode": "682",
  "real-value": "Cook Islands",
  "label": "Cook Islands",
  "matches": "Cook Islands CK",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "cr",
  "phoneCode": "506",
  "real-value": "Costa Rica",
  "label": "Costa Rica",
  "matches": "Costa Rica CR",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "hr",
  "phoneCode": "385",
  "real-value": "Croatia",
  "label": "Croatia",
  "matches": "Croatia HR Hrvatska",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "cu",
  "phoneCode": "53",
  "real-value": "Cuba",
  "label": "Cuba",
  "matches": "Cuba CU",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "cw",
  "phoneCode": "599",
  "real-value": "Curaçao",
  "label": "Curaçao",
  "matches": "Curaçao CW Curacao",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "cy",
  "phoneCode": "357",
  "real-value": "Cyprus",
  "label": "Cyprus",
  "matches": "Cyprus CY Κύπρος Kýpros Kıbrıs",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "cz",
  "phoneCode": "420",
  "real-value": "Czech Republic",
  "label": "Czech Republic",
  "matches": "Czech Republic CZ Česká Ceska",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "ci",
  "phoneCode": "225",
  "real-value": "Côte d'Ivoire",
  "label": "Côte d'Ivoire",
  "matches": "Côte d'Ivoire CI Cote dIvoire",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "dk",
  "phoneCode": "45",
  "real-value": "Denmark",
  "label": "Denmark",
  "matches": "Denmark DK Danmark",
  "relevancy-score": 0,
  "relevancy-score-booster": 1.5
}, {
  "code": "dj",
  "phoneCode": "253",
  "real-value": "Djibouti",
  "label": "Djibouti",
  "matches": "Djibouti DJ جيبوتي‎ Jabuuti Gabuuti",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "dm",
  "phoneCode": "1",
  "real-value": "Dominica",
  "label": "Dominica",
  "matches": "Dominica DM Dominique",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "do",
  "phoneCode": "1",
  "real-value": "Dominican Republic",
  "label": "Dominican Republic",
  "matches": "Dominican Republic DO",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "ec",
  "phoneCode": "593",
  "real-value": "Ecuador",
  "label": "Ecuador",
  "matches": "Ecuador EC",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "eg",
  "phoneCode": "20",
  "real-value": "Egypt",
  "label": "Egypt",
  "matches": "Egypt EG",
  "relevancy-score": 0,
  "relevancy-score-booster": 1.5
}, {
  "code": "sv",
  "phoneCode": "503",
  "real-value": "El Salvador",
  "label": "El Salvador",
  "matches": "El Salvador SV",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "gq",
  "phoneCode": "240",
  "real-value": "Equatorial Guinea",
  "label": "Equatorial Guinea",
  "matches": "Equatorial Guinea GQ",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "er",
  "phoneCode": "291",
  "real-value": "Eritrea",
  "label": "Eritrea",
  "matches": "Eritrea ER إرتريا ኤርትራ",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "ee",
  "phoneCode": "372",
  "real-value": "Estonia",
  "label": "Estonia",
  "matches": "Estonia EE Eesti",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "et",
  "phoneCode": "251",
  "real-value": "Ethiopia",
  "label": "Ethiopia",
  "matches": "Ethiopia ET ኢትዮጵያ",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "fk",
  "phoneCode": "500",
  "real-value": "Falkland Islands (Malvinas)",
  "label": "Falkland Islands (Malvinas)",
  "matches": "Falkland Islands (Malvinas) FK",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "fo",
  "phoneCode": "298",
  "real-value": "Faroe Islands",
  "label": "Faroe Islands",
  "matches": "Faroe Islands FO Føroyar Færøerne",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "fj",
  "phoneCode": "679",
  "real-value": "Fiji",
  "label": "Fiji",
  "matches": "Fiji FJ Viti फ़िजी",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "fi",
  "phoneCode": "358",
  "real-value": "Finland",
  "label": "Finland",
  "matches": "Finland FI Suomi",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "fr",
  "phoneCode": "33",
  "real-value": "France",
  "label": "France",
  "matches": "France FR République française",
  "relevancy-score": 0,
  "relevancy-score-booster": 2.5
}, {
  "code": "GF",
  "phoneCode": "594",
  "real-value": "French Guiana",
  "label": "French Guiana",
  "matches": "French Guiana GF",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "pf",
  "phoneCode": "689",
  "real-value": "French Polynesia",
  "label": "French Polynesia",
  "matches": "French Polynesia PF Polynésie française",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "tf",
  "phoneCode": "262",
  "real-value": "French Southern Territories",
  "label": "French Southern Territories",
  "matches": "French Southern Territories TF",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "ga",
  "phoneCode": "241",
  "real-value": "Gabon",
  "label": "Gabon",
  "matches": "Gabon GA République Gabonaise",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "gm",
  "phoneCode": "220",
  "real-value": "Gambia",
  "label": "Gambia",
  "matches": "Gambia GM",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "ge",
  "phoneCode": "995",
  "real-value": "Georgia",
  "label": "Georgia",
  "matches": "Georgia GE საქართველო",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "de",
  "phoneCode": "49",
  "real-value": "Germany",
  "label": "Germany",
  "matches": "Germany DE Bundesrepublik Deutschland",
  "relevancy-score": 0,
  "relevancy-score-booster": 3
}, {
  "code": "gh",
  "phoneCode": "233",
  "real-value": "Ghana",
  "label": "Ghana",
  "matches": "Ghana GH",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "gi",
  "phoneCode": "350",
  "real-value": "Gibraltar",
  "label": "Gibraltar",
  "matches": "Gibraltar GI",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "gr",
  "phoneCode": "30",
  "real-value": "Greece",
  "label": "Greece",
  "matches": "Greece GR Ελλάδα",
  "relevancy-score": 0,
  "relevancy-score-booster": 1.5
}, {
  "code": "gl",
  "phoneCode": "299",
  "real-value": "Greenland",
  "label": "Greenland",
  "matches": "Greenland GL grønland",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "gd",
  "phoneCode": "1",
  "real-value": "Grenada",
  "label": "Grenada",
  "matches": "Grenada GD",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "gp",
  "phoneCode": "590",
  "real-value": "Guadeloupe",
  "label": "Guadeloupe",
  "matches": "Guadeloupe GP",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "gu",
  "phoneCode": "1",
  "real-value": "Guam",
  "label": "Guam",
  "matches": "Guam GU",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "gt",
  "phoneCode": "502",
  "real-value": "Guatemala",
  "label": "Guatemala",
  "matches": "Guatemala GT",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "gg",
  "phoneCode": "44",
  "real-value": "Guernsey",
  "label": "Guernsey",
  "matches": "Guernsey GG",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "pg",
  "phoneCode": "675",
  "real-value": "Guinea",
  "label": "Guinea",
  "matches": "Guinea GN",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "gw",
  "phoneCode": "245",
  "real-value": "Guinea-Bissau",
  "label": "Guinea-Bissau",
  "matches": "Guinea-Bissau GW",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "gy",
  "phoneCode": "592",
  "real-value": "Guyana",
  "label": "Guyana",
  "matches": "Guyana GY",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "ht",
  "phoneCode": "509",
  "real-value": "Haiti",
  "label": "Haiti",
  "matches": "Haiti HT",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "va",
  "phoneCode": "39",
  "real-value": "Holy See (Vatican City State)",
  "label": "Holy See (Vatican City State)",
  "matches": "Holy See (Vatican City State) VA",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "hn",
  "phoneCode": "504",
  "real-value": "Honduras",
  "label": "Honduras",
  "matches": "Honduras HN",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "hk",
  "phoneCode": "852",
  "real-value": "Hong Kong",
  "label": "Hong Kong",
  "matches": "Hong Kong HK 香港",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "hu",
  "phoneCode": "36",
  "real-value": "Hungary",
  "label": "Hungary",
  "matches": "Hungary HU Magyarország",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "is",
  "phoneCode": "354",
  "real-value": "Iceland",
  "label": "Iceland",
  "matches": "Iceland IS Island",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "in",
  "phoneCode": "91",
  "real-value": "India",
  "label": "India",
  "matches": "India IN भारत गणराज्य Hindustan",
  "relevancy-score": 0,
  "relevancy-score-booster": 3
}, {
  "code": "id",
  "phoneCode": "62",
  "real-value": "Indonesia",
  "label": "Indonesia",
  "matches": "Indonesia ID",
  "relevancy-score": 0,
  "relevancy-score-booster": 2
}, {
  "code": "ir",
  "phoneCode": "98",
  "real-value": "Iran, Islamic Republic of",
  "label": "Iran, Islamic Republic of",
  "matches": "Iran, Islamic Republic of IR ایران",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "iq",
  "phoneCode": "964",
  "real-value": "Iraq",
  "label": "Iraq",
  "matches": "Iraq IQ العراق‎",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "ie",
  "phoneCode": "353",
  "real-value": "Ireland",
  "label": "Ireland",
  "matches": "Ireland IE Éire",
  "relevancy-score": 0,
  "relevancy-score-booster": 1.2
}, {
  "code": "im",
  "phoneCode": "44",
  "real-value": "Isle of Man",
  "label": "Isle of Man",
  "matches": "Isle of Man IM",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "il",
  "phoneCode": "972",
  "real-value": "Israel",
  "label": "Israel",
  "matches": "Israel IL إسرائيل ישראל",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "it",
  "phoneCode": "39",
  "real-value": "Italy",
  "label": "Italy",
  "matches": "Italy IT Italia",
  "relevancy-score": 0,
  "relevancy-score-booster": 2
}, {
  "code": "jm",
  "phoneCode": "1",
  "real-value": "Jamaica",
  "label": "Jamaica",
  "matches": "Jamaica JM",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "jp",
  "phoneCode": "81",
  "real-value": "Japan",
  "label": "Japan",
  "matches": "Japan JP Nippon Nihon 日本",
  "relevancy-score": 0,
  "relevancy-score-booster": 2.5
}, {
  "code": "je",
  "phoneCode": "44",
  "real-value": "Jersey",
  "label": "Jersey",
  "matches": "Jersey JE",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "jo",
  "phoneCode": "962",
  "real-value": "Jordan",
  "label": "Jordan",
  "matches": "Jordan JO الأردن",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "kz",
  "phoneCode": "7",
  "real-value": "Kazakhstan",
  "label": "Kazakhstan",
  "matches": "Kazakhstan KZ Қазақстан Казахстан",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "ke",
  "phoneCode": "254",
  "real-value": "Kenya",
  "label": "Kenya",
  "matches": "Kenya KE",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "ki",
  "phoneCode": "686",
  "real-value": "Kiribati",
  "label": "Kiribati",
  "matches": "Kiribati KI",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "kp",
  "phoneCode": "850",
  "real-value": "Korea, Democratic People's Republic of",
  "label": "Korea, Democratic People's Republic of",
  "matches": "Korea, Democratic People's Republic of KP North Korea",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "kr",
  "phoneCode": "82",
  "real-value": "Korea, Republic of",
  "label": "Korea, Republic of",
  "matches": "Korea, Republic of KR South Korea",
  "relevancy-score": 0,
  "relevancy-score-booster": 1.5
}, {
  "code": "kw",
  "phoneCode": "965",
  "real-value": "Kuwait",
  "label": "Kuwait",
  "matches": "Kuwait KW الكويت",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "kg",
  "phoneCode": "996",
  "real-value": "Kyrgyzstan",
  "label": "Kyrgyzstan",
  "matches": "Kyrgyzstan KG Кыргызстан",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "la",
  "phoneCode": "856",
  "real-value": "Lao People's Democratic Republic",
  "label": "Lao People's Democratic Republic",
  "matches": "Lao People's Democratic Republic LA",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "lv",
  "phoneCode": "371",
  "real-value": "Latvia",
  "label": "Latvia",
  "matches": "Latvia LV Latvija",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "lb",
  "phoneCode": "961",
  "real-value": "Lebanon",
  "label": "Lebanon",
  "matches": "Lebanon LB لبنان",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "ls",
  "phoneCode": "266",
  "real-value": "Lesotho",
  "label": "Lesotho",
  "matches": "Lesotho LS",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "lr",
  "phoneCode": "231",
  "real-value": "Liberia",
  "label": "Liberia",
  "matches": "Liberia LR",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "ly",
  "phoneCode": "218",
  "real-value": "Libyan Arab Jamahiriya",
  "label": "Libyan Arab Jamahiriya",
  "matches": "Libyan Arab Jamahiriya LY ليبيا",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "li",
  "phoneCode": "423",
  "real-value": "Liechtenstein",
  "label": "Liechtenstein",
  "matches": "Liechtenstein LI",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "lt",
  "phoneCode": "370",
  "real-value": "Lithuania",
  "label": "Lithuania",
  "matches": "Lithuania LT Lietuva",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "lu",
  "phoneCode": "352",
  "real-value": "Luxembourg",
  "label": "Luxembourg",
  "matches": "Luxembourg LU",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "mo",
  "phoneCode": "853",
  "real-value": "Macao",
  "label": "Macao",
  "matches": "Macao MO",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "mk",
  "phoneCode": "389",
  "real-value": "Macedonia, The Former Yugoslav Republic Of",
  "label": "Macedonia, The Former Yugoslav Republic Of",
  "matches": "Macedonia, The Former Yugoslav Republic Of MK Македонија",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "mg",
  "phoneCode": "261",
  "real-value": "Madagascar",
  "label": "Madagascar",
  "matches": "Madagascar MG Madagasikara",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "mw",
  "phoneCode": "265",
  "real-value": "Malawi",
  "label": "Malawi",
  "matches": "Malawi MW",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "my",
  "phoneCode": "60",
  "real-value": "Malaysia",
  "label": "Malaysia",
  "matches": "Malaysia MY",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "mv",
  "phoneCode": "960",
  "real-value": "Maldives",
  "label": "Maldives",
  "matches": "Maldives MV",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "so",
  "phoneCode": "252",
  "real-value": "Mali",
  "label": "Mali",
  "matches": "Mali ML",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "mt",
  "phoneCode": "356",
  "real-value": "Malta",
  "label": "Malta",
  "matches": "Malta MT",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "mh",
  "phoneCode": "692",
  "real-value": "Marshall Islands",
  "label": "Marshall Islands",
  "matches": "Marshall Islands MH",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "mq",
  "phoneCode": "596",
  "real-value": "Martinique",
  "label": "Martinique",
  "matches": "Martinique MQ",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "mr",
  "phoneCode": "222",
  "real-value": "Mauritania",
  "label": "Mauritania",
  "matches": "Mauritania MR الموريتانية",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "mu",
  "phoneCode": "230",
  "real-value": "Mauritius",
  "label": "Mauritius",
  "matches": "Mauritius MU",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "yt",
  "phoneCode": "262",
  "real-value": "Mayotte",
  "label": "Mayotte",
  "matches": "Mayotte YT",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "mx",
  "phoneCode": "52",
  "real-value": "Mexico",
  "label": "Mexico",
  "matches": "Mexico MX Mexicanos",
  "relevancy-score": 0,
  "relevancy-score-booster": 1.5
}, {
  "code": "fm",
  "phoneCode": "691",
  "real-value": "Micronesia, Federated States of",
  "label": "Micronesia, Federated States of",
  "matches": "Micronesia, Federated States of FM",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "md",
  "phoneCode": "373",
  "real-value": "Moldova, Republic of",
  "label": "Moldova, Republic of",
  "matches": "Moldova, Republic of MD",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "mc",
  "phoneCode": "377",
  "real-value": "Monaco",
  "label": "Monaco",
  "matches": "Monaco MC",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "mn",
  "phoneCode": "976",
  "real-value": "Mongolia",
  "label": "Mongolia",
  "matches": "Mongolia MN Mongγol ulus Монгол улс",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "me",
  "phoneCode": "382",
  "real-value": "Montenegro",
  "label": "Montenegro",
  "matches": "Montenegro ME",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "ms",
  "phoneCode": "1",
  "real-value": "Montserrat",
  "label": "Montserrat",
  "matches": "Montserrat MS",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "ma",
  "phoneCode": "212",
  "real-value": "Morocco",
  "label": "Morocco",
  "matches": "Morocco MA المغرب",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "mz",
  "phoneCode": "258",
  "real-value": "Mozambique",
  "label": "Mozambique",
  "matches": "Mozambique MZ Moçambique",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "mm",
  "phoneCode": "95",
  "real-value": "Myanmar",
  "label": "Myanmar",
  "matches": "Myanmar MM",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "na",
  "phoneCode": "264",
  "real-value": "Namibia",
  "label": "Namibia",
  "matches": "Namibia NA Namibië",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "nr",
  "phoneCode": "674",
  "real-value": "Nauru",
  "label": "Nauru",
  "matches": "Nauru NR Naoero",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "np",
  "phoneCode": "977",
  "real-value": "Nepal",
  "label": "Nepal",
  "matches": "Nepal NP नेपाल",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "nl",
  "phoneCode": "31",
  "real-value": "Netherlands",
  "label": "Netherlands",
  "matches": "Netherlands NL Holland Nederland",
  "relevancy-score": 0,
  "relevancy-score-booster": 1.5
}, {
  "code": "nc",
  "phoneCode": "687",
  "real-value": "New Caledonia",
  "label": "New Caledonia",
  "matches": "New Caledonia NC",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "nz",
  "phoneCode": "64",
  "real-value": "New Zealand",
  "label": "New Zealand",
  "matches": "New Zealand NZ Aotearoa",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "ni",
  "phoneCode": "505",
  "real-value": "Nicaragua",
  "label": "Nicaragua",
  "matches": "Nicaragua NI",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "ng",
  "phoneCode": "234",
  "real-value": "Niger",
  "label": "Niger",
  "matches": "Niger NE Nijar",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "ng",
  "phoneCode": "234",
  "real-value": "Nigeria",
  "label": "Nigeria",
  "matches": "Nigeria NG Nijeriya Naíjíríà",
  "relevancy-score": 0,
  "relevancy-score-booster": 1.5
}, {
  "code": "nu",
  "phoneCode": "683",
  "real-value": "Niue",
  "label": "Niue",
  "matches": "Niue NU",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "nf",
  "phoneCode": "672",
  "real-value": "Norfolk Island",
  "label": "Norfolk Island",
  "matches": "Norfolk Island NF",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "mp",
  "phoneCode": "1",
  "real-value": "Northern Mariana Islands",
  "label": "Northern Mariana Islands",
  "matches": "Northern Mariana Islands MP",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "no",
  "phoneCode": "47",
  "real-value": "Norway",
  "label": "Norway",
  "matches": "Norway NO Norge Noreg",
  "relevancy-score": 0,
  "relevancy-score-booster": 1.5
}, {
  "code": "ro",
  "phoneCode": "40",
  "real-value": "Oman",
  "label": "Oman",
  "matches": "Oman OM عمان",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "pk",
  "phoneCode": "92",
  "real-value": "Pakistan",
  "label": "Pakistan",
  "matches": "Pakistan PK پاکستان",
  "relevancy-score": 0,
  "relevancy-score-booster": 2
}, {
  "code": "pw",
  "phoneCode": "680",
  "real-value": "Palau",
  "label": "Palau",
  "matches": "Palau PW",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "ps",
  "phoneCode": "970",
  "real-value": "Palestinian Territory, Occupied",
  "label": "Palestinian Territory, Occupied",
  "matches": "Palestinian Territory, Occupied PS فلسطين",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "pa",
  "phoneCode": "507",
  "real-value": "Panama",
  "label": "Panama",
  "matches": "Panama PA",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "pg",
  "phoneCode": "675",
  "real-value": "Papua New Guinea",
  "label": "Papua New Guinea",
  "matches": "Papua New Guinea PG",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "py",
  "phoneCode": "595",
  "real-value": "Paraguay",
  "label": "Paraguay",
  "matches": "Paraguay PY",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "pe",
  "phoneCode": "51",
  "real-value": "Peru",
  "label": "Peru",
  "matches": "Peru PE",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "ph",
  "phoneCode": "63",
  "real-value": "Philippines",
  "label": "Philippines",
  "matches": "Philippines PH Pilipinas",
  "relevancy-score": 0,
  "relevancy-score-booster": 1.5
}, {
  "code": "pn",
  "phoneCode": "870",
  "real-value": "Pitcairn",
  "label": "Pitcairn",
  "matches": "Pitcairn PN",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "pl",
  "phoneCode": "48",
  "real-value": "Poland",
  "label": "Poland",
  "matches": "Poland PL Polska",
  "relevancy-score": 0,
  "relevancy-score-booster": 1.25
}, {
  "code": "pt",
  "phoneCode": "351",
  "real-value": "Portugal",
  "label": "Portugal",
  "matches": "Portugal PT Portuguesa",
  "relevancy-score": 0,
  "relevancy-score-booster": 1.5
}, {
  "code": "pr",
  "phoneCode": "1",
  "real-value": "Puerto Rico",
  "label": "Puerto Rico",
  "matches": "Puerto Rico PR",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "qa",
  "phoneCode": "974",
  "real-value": "Qatar",
  "label": "Qatar",
  "matches": "Qatar QA قطر",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "ro",
  "phoneCode": "40",
  "real-value": "Romania",
  "label": "Romania",
  "matches": "Romania RO Rumania Roumania România",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "ru",
  "phoneCode": "7",
  "real-value": "Russian Federation",
  "label": "Russian Federation",
  "matches": "Russian Federation RU Rossiya Российская Россия",
  "relevancy-score": 0,
  "relevancy-score-booster": 2.5
}, {
  "code": "rw",
  "phoneCode": "250",
  "real-value": "Rwanda",
  "label": "Rwanda",
  "matches": "Rwanda RW",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "re",
  "phoneCode": "262",
  "real-value": "Réunion",
  "label": "Réunion",
  "matches": "Réunion RE Reunion",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "bl",
  "phoneCode": "590",
  "real-value": "Saint Barthélemy",
  "label": "Saint Barthélemy",
  "matches": "Saint Barthélemy BL St. Barthelemy",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "sh",
  "phoneCode": "290",
  "real-value": "Saint Helena",
  "label": "Saint Helena",
  "matches": "Saint Helena SH St.",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "kn",
  "phoneCode": "869",
  "real-value": "Saint Kitts and Nevis",
  "label": "Saint Kitts and Nevis",
  "matches": "Saint Kitts and Nevis KN St.",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "lc",
  "phoneCode": "1",
  "real-value": "Saint Lucia",
  "label": "Saint Lucia",
  "matches": "Saint Lucia LC St.",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "mf",
  "phoneCode": "590",
  "real-value": "Saint Martin (French Part)",
  "label": "Saint Martin (French Part)",
  "matches": "Saint Martin (French Part) MF St.",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "pm",
  "phoneCode": "508",
  "real-value": "Saint Pierre and Miquelon",
  "label": "Saint Pierre and Miquelon",
  "matches": "Saint Pierre and Miquelon PM St.",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "vc",
  "phoneCode": "784",
  "real-value": "Saint Vincent and the Grenadines",
  "label": "Saint Vincent and the Grenadines",
  "matches": "Saint Vincent and the Grenadines VC St.",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "ws",
  "phoneCode": "685",
  "real-value": "Samoa",
  "label": "Samoa",
  "matches": "Samoa WS",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "sm",
  "phoneCode": "378",
  "real-value": "San Marino",
  "label": "San Marino",
  "matches": "San Marino SM RSM Repubblica",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "st",
  "phoneCode": "239",
  "real-value": "Sao Tome and Principe",
  "label": "Sao Tome and Principe",
  "matches": "Sao Tome and Principe ST",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "sa",
  "phoneCode": "966",
  "real-value": "Saudi Arabia",
  "label": "Saudi Arabia",
  "matches": "Saudi Arabia SA السعودية",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "sn",
  "phoneCode": "221",
  "real-value": "Senegal",
  "label": "Senegal",
  "matches": "Senegal SN Sénégal",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "rs",
  "phoneCode": "381",
  "real-value": "Serbia",
  "label": "Serbia",
  "matches": "Serbia RS Србија Srbija",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "sc",
  "phoneCode": "248",
  "real-value": "Seychelles",
  "label": "Seychelles",
  "matches": "Seychelles SC",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "sl",
  "phoneCode": "232",
  "real-value": "Sierra Leone",
  "label": "Sierra Leone",
  "matches": "Sierra Leone SL",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "sg",
  "phoneCode": "65",
  "real-value": "Singapore",
  "label": "Singapore",
  "matches": "Singapore SG Singapura  சிங்கப்பூர் குடியரசு 新加坡共和国",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "sx",
  "phoneCode": "1",
  "real-value": "Sint Maarten (Dutch Part)",
  "label": "Sint Maarten (Dutch Part)",
  "matches": "Sint Maarten (Dutch Part) SX",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "sk",
  "phoneCode": "421",
  "real-value": "Slovakia",
  "label": "Slovakia",
  "matches": "Slovakia SK Slovenská Slovensko",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "si",
  "phoneCode": "386",
  "real-value": "Slovenia",
  "label": "Slovenia",
  "matches": "Slovenia SI Slovenija",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "sb",
  "phoneCode": "677",
  "real-value": "Solomon Islands",
  "label": "Solomon Islands",
  "matches": "Solomon Islands SB",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "so",
  "phoneCode": "252",
  "real-value": "Somalia",
  "label": "Somalia",
  "matches": "Somalia SO الصومال",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "za",
  "phoneCode": "27",
  "real-value": "South Africa",
  "label": "South Africa",
  "matches": "South Africa ZA RSA Suid-Afrika",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "gs",
  "phoneCode": "500",
  "real-value": "South Georgia and the South Sandwich Islands",
  "label": "South Georgia and the South Sandwich Islands",
  "matches": "South Georgia and the South Sandwich Islands GS",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "ss",
  "phoneCode": "211",
  "real-value": "South Sudan",
  "label": "South Sudan",
  "matches": "South Sudan SS",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "es",
  "phoneCode": "34",
  "real-value": "Spain",
  "label": "Spain",
  "matches": "Spain ES España",
  "relevancy-score": 0,
  "relevancy-score-booster": 2
}, {
  "code": "lk",
  "phoneCode": "94",
  "real-value": "Sri Lanka",
  "label": "Sri Lanka",
  "matches": "Sri Lanka LK ශ්‍රී ලංකා இலங்கை Ceylon",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "sd",
  "phoneCode": "249",
  "real-value": "Sudan",
  "label": "Sudan",
  "matches": "Sudan SD السودان",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "sr",
  "phoneCode": "597",
  "real-value": "Suriname",
  "label": "Suriname",
  "matches": "Suriname SR शर्नम् Sarnam Sranangron",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "sj",
  "phoneCode": "47",
  "real-value": "Svalbard and Jan Mayen",
  "label": "Svalbard and Jan Mayen",
  "matches": "Svalbard and Jan Mayen SJ",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "sz",
  "phoneCode": "268",
  "real-value": "Swaziland",
  "label": "Swaziland",
  "matches": "Swaziland SZ weSwatini Swatini Ngwane",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "se",
  "phoneCode": "46",
  "real-value": "Sweden",
  "label": "Sweden",
  "matches": "Sweden SE Sverige",
  "relevancy-score": 0,
  "relevancy-score-booster": 1.5
}, {
  "code": "ch",
  "phoneCode": "41",
  "real-value": "Switzerland",
  "label": "Switzerland",
  "matches": "Switzerland CH Swiss Confederation Schweiz Suisse Svizzera Svizra",
  "relevancy-score": 0,
  "relevancy-score-booster": 1.5
}, {
  "code": "sy",
  "phoneCode": "963",
  "real-value": "Syrian Arab Republic",
  "label": "Syrian Arab Republic",
  "matches": "Syrian Arab Republic SY Syria سورية",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "tw",
  "phoneCode": "886",
  "real-value": "Taiwan, Province of China",
  "label": "Taiwan, Province of China",
  "matches": "Taiwan, Province of China TW 台灣 臺灣",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "tj",
  "phoneCode": "992",
  "real-value": "Tajikistan",
  "label": "Tajikistan",
  "matches": "Tajikistan TJ Тоҷикистон Toçikiston",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "tz",
  "phoneCode": "255",
  "real-value": "Tanzania, United Republic of",
  "label": "Tanzania, United Republic of",
  "matches": "Tanzania, United Republic of TZ",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "th",
  "phoneCode": "66",
  "real-value": "Thailand",
  "label": "Thailand",
  "matches": "Thailand TH ประเทศไทย Prathet Thai",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "tl",
  "phoneCode": "670",
  "real-value": "Timor-Leste",
  "label": "Timor-Leste",
  "matches": "Timor-Leste TL",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "tg",
  "phoneCode": "228",
  "real-value": "Togo",
  "label": "Togo",
  "matches": "Togo TG Togolese",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "tk",
  "phoneCode": "690",
  "real-value": "Tokelau",
  "label": "Tokelau",
  "matches": "Tokelau TK",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "to",
  "phoneCode": "676",
  "real-value": "Tonga",
  "label": "Tonga",
  "matches": "Tonga TO",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "tt",
  "phoneCode": "1",
  "real-value": "Trinidad and Tobago",
  "label": "Trinidad and Tobago",
  "matches": "Trinidad and Tobago TT",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "tn",
  "phoneCode": "216",
  "real-value": "Tunisia",
  "label": "Tunisia",
  "matches": "Tunisia TN تونس",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "tr",
  "phoneCode": "90",
  "real-value": "Turkey",
  "label": "Turkey",
  "matches": "Turkey TR Türkiye Turkiye",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "tm",
  "phoneCode": "993",
  "real-value": "Turkmenistan",
  "label": "Turkmenistan",
  "matches": "Turkmenistan TM Türkmenistan",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "tc",
  "phoneCode": "1",
  "real-value": "Turks and Caicos Islands",
  "label": "Turks and Caicos Islands",
  "matches": "Turks and Caicos Islands TC",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "tv",
  "phoneCode": "688",
  "real-value": "Tuvalu",
  "label": "Tuvalu",
  "matches": "Tuvalu TV",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "ug",
  "phoneCode": "256",
  "real-value": "Uganda",
  "label": "Uganda",
  "matches": "Uganda UG",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "ua",
  "phoneCode": "380",
  "real-value": "Ukraine",
  "label": "Ukraine",
  "matches": "Ukraine UA Ukrayina Україна",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "ae",
  "phoneCode": "971",
  "real-value": "United Arab Emirates",
  "label": "United Arab Emirates",
  "matches": "United Arab Emirates AE UAE الإمارات",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "gb",
  "phoneCode": "44",
  "real-value": "United Kingdom",
  "label": "United Kingdom",
  "matches": "United Kingdom GB Great Britain England UK Wales Scotland Northern Ireland",
  "relevancy-score": 0,
  "relevancy-score-booster": 2.5
}, {
  "code": "us",
  "phoneCode": "1",
  "real-value": "United States",
  "label": "United States",
  "matches": "United States US USA United States of America",
  "relevancy-score": 0,
  "relevancy-score-booster": 3.5
}, {
  "code": "um",
  "phoneCode": "1",
  "real-value": "United States Minor Outlying Islands",
  "label": "United States Minor Outlying Islands",
  "matches": "United States Minor Outlying Islands UM",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "uy",
  "phoneCode": "598",
  "real-value": "Uruguay",
  "label": "Uruguay",
  "matches": "Uruguay UY",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "uz",
  "phoneCode": "998",
  "real-value": "Uzbekistan",
  "label": "Uzbekistan",
  "matches": "Uzbekistan UZ Ўзбекистон O'zbekstan O‘zbekiston",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "vu",
  "phoneCode": "678",
  "real-value": "Vanuatu",
  "label": "Vanuatu",
  "matches": "Vanuatu VU",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "ve",
  "phoneCode": "58",
  "real-value": "Venezuela",
  "label": "Venezuela",
  "matches": "Venezuela VE",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "vn",
  "phoneCode": "84",
  "real-value": "Vietnam",
  "label": "Vietnam",
  "matches": "Vietnam VN Việt Nam",
  "relevancy-score": 0,
  "relevancy-score-booster": 1.5
}, {
  "code": "vg",
  "phoneCode": "1",
  "real-value": "Virgin Islands, British",
  "label": "Virgin Islands, British",
  "matches": "Virgin Islands, British VG",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "vi",
  "phoneCode": "1",
  "real-value": "Virgin Islands, U.S.",
  "label": "Virgin Islands, U.S.",
  "matches": "Virgin Islands, U.S. VI",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "wf",
  "phoneCode": "681",
  "real-value": "Wallis and Futuna",
  "label": "Wallis and Futuna",
  "matches": "Wallis and Futuna WF",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}, {
  "code": "eh",
  "phoneCode": "212",
  "real-value": "Western Sahara",
  "label": "Western Sahara",
  "matches": "Western Sahara EH لصحراء الغربية",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "ye",
  "phoneCode": "967",
  "real-value": "Yemen",
  "label": "Yemen",
  "matches": "Yemen YE اليمن",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "zm",
  "phoneCode": "260",
  "real-value": "Zambia",
  "label": "Zambia",
  "matches": "Zambia ZM",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "zw",
  "phoneCode": "263",
  "real-value": "Zimbabwe",
  "label": "Zimbabwe",
  "matches": "Zimbabwe ZW",
  "relevancy-score": 0,
  "relevancy-score-booster": 1
}, {
  "code": "ax",
  "phoneCode": "358",
  "real-value": "Åland Islands",
  "label": "Åland Islands",
  "matches": "Åland Islands AX Aaland Aland",
  "relevancy-score": 0,
  "relevancy-score-booster": 0.5
}];

export default Ember.Service.extend({
  countries: function() {
    return countrySet;
  }.property("countrySet"),
  getCountryByFuzzyName: function(fuzzyName) {
    let results = [];
    let matchingCountry = this.get("countries").filter((country) => {
      let matchExists = false;
      let possibleMatches = country.matches.split(" ");
      possibleMatches.forEach((match) => {
        if(match.toLowerCase().indexOf(fuzzyName.toLowerCase()) > -1) return matchExists = true;
      });
      return matchExists;
    });
    return matchingCountry;
  },
  getCountryByProperty: function(property, value) {
    let results = this.get("countries").filter((country) => {
      return country[property] === value;
    });
    if (Ember.isArray(results) && results.length > 0) return results.objectAt(0);
    return results;
  },
  getISOCodeForCountry: function(name) {
    var result = null;
    this.get("countries").forEach(function(country) {
      if (country["real-value"].toLowerCase() === name.toLowerCase()) {
        result = country;
      }
    });
    if (result) return result.code;
    return result;
  },
  getDiallingCodeForCountry: function(name) {
    var result = null;
    this.get("countries").forEach(function(country) {
      if (country["real-value"].toLowerCase() === name.toLowerCase()) {
        result = country;
      }
    });
    if (result) return result.phoneCode;
    return result;
  },
  getCountryNameByISO: function(isoCode) {
    let matchingCountry = this.get("countries").filter((country) => {
      return country.code === isoCode.toLowerCase();
    });
    if (Ember.isArray(matchingCountry)) return matchingCountry.objectAt(0)["real-value"];
    return matchingCountry["real-value"];
  }

});
