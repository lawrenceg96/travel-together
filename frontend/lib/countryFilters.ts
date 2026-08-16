export const ignoredCountries = [

  // =====================
  // Africa
  // =====================

  "benin",
  "burkina-faso",
  "cabo-verde",
  "cote-divoire",
  "gambia",
  "ghana",
  "guinea",
  "guinea-bissau",
  "liberia",
  "mali",
  "mauritania",
  "niger",
  "nigeria",
  "senegal",
  "sierra-leone",
  "togo",

  "angola",
  "cameroon",
  "central-african-republic",
  "chad",
  "congo",
  "democratic-republic-of-the-congo",
  "equatorial-guinea",
  "gabon",
  "sao-tome-and-principe",

  "burundi",
  "comoros",
  "djibouti",
  "eritrea",
  "kenya",
  "rwanda",
  "somalia",
  "south-sudan",
  "tanzania",
  "uganda",

  "botswana",
  "namibia",
  "mozambique",
  "malawi",
  "zimbabwe",
  "zambia",
  "lesotho",



  // =====================
  // Middle East
  // =====================

  "saudi-arabia",
  "iran",
  "iraq",
  "israel",
  "jordan",
  "lebanon",
  "syria",
  "yemen",
  "oman",
  "united-arab-emirates",
  "qatar",
  "kuwait",
  "bahrain",
  "palestine",



  // =====================
  // Asia exclusions
  // =====================

  "afghanistan",
  "azerbaijan",
  "bangladesh",
  "india",
  "bhutan",

  "kazakhstan",
  "kyrgyzstan",
  "tajikistan",
  "turkmenistan",
  "uzbekistan",

  "macao",

  

  // =====================
  // Islands / territories / special regions
  // =====================

  "akrotiri-sovereign-base-area",
  "aland",
  "ashmore-and-cartier-islands",
  "bajo-nuevo-bank-petrel-is",
  "baykonur-cosmodrome",
  "bir-tawil",
  "brazilian-island",
  "british-indian-ocean-territory",
  "clipperton-island",
  "coral-sea-islands",
  "cyprus-no-mans-area",
  "dhekelia-sovereign-base-area",
  "falkland-islands",
  "federated-states-of-micronesia",
  "french-southern-and-antarctic-lands",
  "heard-island-and-mcdonald-islands",
  "indian-ocean-territories",
  "kiribati",


];



export function isCountryAllowed(
  countryId: string
){

  return !ignoredCountries.includes(
    countryId
  );

}