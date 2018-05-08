$(document).ready(function() {
  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyDYIymwE96hrnwsMAd2DjJT5NTywGQDLHQ',
    authDomain: 'project1-burger.firebaseapp.com',
    databaseURL: 'https://project1-burger.firebaseio.com',
    projectId: 'project1-burger',
    storageBucket: '',
    messagingSenderId: '297665083434'
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  var countryCodeConversion = {
    BD: 'BGD',
    BE: 'BEL',
    BF: 'BFA',
    BG: 'BGR',
    BA: 'BIH',
    BB: 'BRB',
    WF: 'WLF',
    BL: 'BLM',
    BM: 'BMU',
    BN: 'BRN',
    BO: 'BOL',
    BH: 'BHR',
    BI: 'BDI',
    BJ: 'BEN',
    BT: 'BTN',
    JM: 'JAM',
    BV: 'BVT',
    BW: 'BWA',
    WS: 'WSM',
    BQ: 'BES',
    BR: 'BRA',
    BS: 'BHS',
    JE: 'JEY',
    BY: 'BLR',
    BZ: 'BLZ',
    RU: 'RUS',
    RW: 'RWA',
    RS: 'SRB',
    TL: 'TLS',
    RE: 'REU',
    TM: 'TKM',
    TJ: 'TJK',
    RO: 'ROU',
    TK: 'TKL',
    GW: 'GNB',
    GU: 'GUM',
    GT: 'GTM',
    GS: 'SGS',
    GR: 'GRC',
    GQ: 'GNQ',
    GP: 'GLP',
    JP: 'JPN',
    GY: 'GUY',
    GG: 'GGY',
    GF: 'GUF',
    GE: 'GEO',
    GD: 'GRD',
    GB: 'GBR',
    GA: 'GAB',
    SV: 'SLV',
    GN: 'GIN',
    GM: 'GMB',
    GL: 'GRL',
    GI: 'GIB',
    GH: 'GHA',
    OM: 'OMN',
    TN: 'TUN',
    JO: 'JOR',
    HR: 'HRV',
    HT: 'HTI',
    HU: 'HUN',
    HK: 'HKG',
    HN: 'HND',
    HM: 'HMD',
    VE: 'VEN',
    PR: 'PRI',
    PS: 'PSE',
    PW: 'PLW',
    PT: 'PRT',
    SJ: 'SJM',
    PY: 'PRY',
    IQ: 'IRQ',
    PA: 'PAN',
    PF: 'PYF',
    PG: 'PNG',
    PE: 'PER',
    PK: 'PAK',
    PH: 'PHL',
    PN: 'PCN',
    PL: 'POL',
    PM: 'SPM',
    ZM: 'ZMB',
    EH: 'ESH',
    EE: 'EST',
    EG: 'EGY',
    ZA: 'ZAF',
    EC: 'ECU',
    IT: 'ITA',
    VN: 'VNM',
    SB: 'SLB',
    ET: 'ETH',
    SO: 'SOM',
    ZW: 'ZWE',
    SA: 'SAU',
    ES: 'ESP',
    ER: 'ERI',
    ME: 'MNE',
    MD: 'MDA',
    MG: 'MDG',
    MF: 'MAF',
    MA: 'MAR',
    MC: 'MCO',
    UZ: 'UZB',
    MM: 'MMR',
    ML: 'MLI',
    MO: 'MAC',
    MN: 'MNG',
    MH: 'MHL',
    MK: 'MKD',
    MU: 'MUS',
    MT: 'MLT',
    MW: 'MWI',
    MV: 'MDV',
    MQ: 'MTQ',
    MP: 'MNP',
    MS: 'MSR',
    MR: 'MRT',
    IM: 'IMN',
    UG: 'UGA',
    TZ: 'TZA',
    MY: 'MYS',
    MX: 'MEX',
    IL: 'ISR',
    FR: 'FRA',
    IO: 'IOT',
    SH: 'SHN',
    FI: 'FIN',
    FJ: 'FJI',
    FK: 'FLK',
    FM: 'FSM',
    FO: 'FRO',
    NI: 'NIC',
    NL: 'NLD',
    NO: 'NOR',
    NA: 'NAM',
    VU: 'VUT',
    NC: 'NCL',
    NE: 'NER',
    NF: 'NFK',
    NG: 'NGA',
    NZ: 'NZL',
    NP: 'NPL',
    NR: 'NRU',
    NU: 'NIU',
    CK: 'COK',
    XK: 'XKX',
    CI: 'CIV',
    CH: 'CHE',
    CO: 'COL',
    CN: 'CHN',
    CM: 'CMR',
    CL: 'CHL',
    CC: 'CCK',
    CA: 'CAN',
    CG: 'COG',
    CF: 'CAF',
    CD: 'COD',
    CZ: 'CZE',
    CY: 'CYP',
    CX: 'CXR',
    CR: 'CRI',
    CW: 'CUW',
    CV: 'CPV',
    CU: 'CUB',
    SZ: 'SWZ',
    SY: 'SYR',
    SX: 'SXM',
    KG: 'KGZ',
    KE: 'KEN',
    SS: 'SSD',
    SR: 'SUR',
    KI: 'KIR',
    KH: 'KHM',
    KN: 'KNA',
    KM: 'COM',
    ST: 'STP',
    SK: 'SVK',
    KR: 'KOR',
    SI: 'SVN',
    KP: 'PRK',
    KW: 'KWT',
    SN: 'SEN',
    SM: 'SMR',
    SL: 'SLE',
    SC: 'SYC',
    KZ: 'KAZ',
    KY: 'CYM',
    SG: 'SGP',
    SE: 'SWE',
    SD: 'SDN',
    DO: 'DOM',
    DM: 'DMA',
    DJ: 'DJI',
    DK: 'DNK',
    VG: 'VGB',
    DE: 'DEU',
    YE: 'YEM',
    DZ: 'DZA',
    US: 'USA',
    UY: 'URY',
    YT: 'MYT',
    UM: 'UMI',
    LB: 'LBN',
    LC: 'LCA',
    LA: 'LAO',
    TV: 'TUV',
    TW: 'TWN',
    TT: 'TTO',
    TR: 'TUR',
    LK: 'LKA',
    LI: 'LIE',
    LV: 'LVA',
    TO: 'TON',
    LT: 'LTU',
    LU: 'LUX',
    LR: 'LBR',
    LS: 'LSO',
    TH: 'THA',
    TF: 'ATF',
    TG: 'TGO',
    TD: 'TCD',
    TC: 'TCA',
    LY: 'LBY',
    VA: 'VAT',
    VC: 'VCT',
    AE: 'ARE',
    AD: 'AND',
    AG: 'ATG',
    AF: 'AFG',
    AI: 'AIA',
    VI: 'VIR',
    IS: 'ISL',
    IR: 'IRN',
    AM: 'ARM',
    AL: 'ALB',
    AO: 'AGO',
    AQ: 'ATA',
    AS: 'ASM',
    AR: 'ARG',
    AU: 'AUS',
    AT: 'AUT',
    AW: 'ABW',
    IN: 'IND',
    AX: 'ALA',
    AZ: 'AZE',
    IE: 'IRL',
    ID: 'IDN',
    UA: 'UKR',
    QA: 'QAT',
    MZ: 'MOZ'
  };

  /*---------------------------Step 1 ------------------------------------
	-	API functionality for populating the search box
		- Autocomplete request/response expectations: https://stackoverflow.com/questions/5077409/what-does-autocomplete-request-server-response-look-like
		- Requires ajax/jquery UI and style
	------------------------------------------------------------------------*/

  $('#f_elem_city').autocomplete({
    source: function(request, response) {
      $.getJSON(
        'http://gd.geobytes.com/AutoCompleteCity?callback=?&q=' + request.term,
        function(data) {
          // var placesArray = [];
          // for(let i = 0; i<data.places.length; i++){
          // 	var valueObject = {
          // 		"value": data.places[i].longName
          // 	}
          // 	placesArray.push(valueObject);
          // }

          response(data);
        }
      );
    },
    minLength: 3,
    select: function(event, ui) {
      var selectedObj = ui.item;
      $('#f_elem_city').val(selectedObj.value);
      return false;
    },
    open: function() {
      $(this)
        .removeClass('ui-corner-all')
        .addClass('ui-corner-top');
    },
    close: function() {
      $(this)
        .removeClass('ui-corner-top')
        .addClass('ui-corner-all');
    }
  });
  $('#f_elem_city').autocomplete('option', 'delay', 100);

  /*---------------------------Step 2 ------------------------------------
	-	Take the values in the box and use the API to get equired info.
		Part 1: Required Info to search for in the api:
			1. COUNTRY (in ISO-3, caps)	(Get through string manipulation)
			2. CITY    (in caps)	(Get through string manipulation)
			3. Currency (Three letter initial) (May need to search through the API or use a direct object)
			4. The selected month	(Get through user input)
		Part 2: Run the info through our APIs and show desired values.
	------------------------------------------------------------------------*/

  const bigMacUSD = 5.3;

  // PART 2: Run the info through our APIs and show desired values.

  function getMonthlyWeather(
    exchangeRate,
    currency,
    bigMacIndex,
    countryDollarPrice,
    country,
    city,
    selectedMonth,
    countryFullName,
    countryProvince,
    dataId
  ) {
    //needs a valid city name input
    var queryURL =
      'https://api.worldweatheronline.com/premium/v1/weather.ashx?key=19524ba32874499aad0234430180805=' +
      city +
      '&format=json&mca=yes&showmap=yes';

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
      var results = response.data.ClimateAverages[0].month;
      //var selectedMonth is a user input. needs to be an index #, 0-11.

      //minimum temperature of the selected month in input city
      var minTemp = results[selectedMonth].avgMinTemp_F;

      //maximum temperature of the selected month in input city
      var maxTemp = results[selectedMonth].absMaxTemp_F;

      //average daily rainfall in selected month in input city, in milimeters
      var averageDailyRainfall = results[selectedMonth].avgDailyRainfall;

      //coverts the average rainfall into inches. *(days in a month) /(milimeters in a inch)
      var averageMonthRainfall = averageDailyRainfall * 30 / 25.4;

      var minTempNumber = parseInt(minTemp);
      var maxTempNumber = parseInt(maxTemp);

      var averageTemp = (minTempNumber + maxTempNumber) / 2;
      var averageTemp = maxTempNumber - 7;

      var averageDailyRainfall = results[selectedMonth].avgDailyRainfall;
      var averageMonthRainfall = averageDailyRainfall * 30 / 25.4; //coverts the average rainfall into inches. *(days in a month) /(milimeters in a inch)

      travelCard(
        exchangeRate,
        currency,
        bigMacIndex,
        countryDollarPrice,
        country,
        city,
        selectedMonth,
        averageTemp,
        averageMonthRainfall,
        countryFullName,
        countryProvince,
        dataId
      );
    });
  }

  function getBicMacIndex(
    exchangeRate,
    currency,
    country,
    city,
    selectedMonth,
    countryFullName,
    countryProvince,
    dataId
  ) {
    //ALERT - will need to change the var country to the country code. will need to put info a country object
    var queryURL =
      'https://www.quandl.com/api/v3/datasets/ECONOMIST/BIGMAC_' +
      country +
      '?start_date=2017-07-31&end_date=2017-07-31&api_key=9TGtJzuQxqvJizpJDPXX';

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
      var results = response.dataset;

      // the cost of a big mac in the input country's currency
      var countryPrice = results.data[0][1];

      //the cost of a big mac in the input country, in USD
      var countryDollarPrice = countryPrice / exchangeRate;

      // the USA big mac price divided by the big mac price in the input country
      var bigMacIndex = bigMacUSD / countryDollarPrice;

      getMonthlyWeather(
        exchangeRate,
        currency,
        bigMacIndex,
        countryDollarPrice,
        country,
        city,
        selectedMonth,
        countryFullName,
        countryProvince,
        dataId
      );
    });
  }

  function getCurrentExchangeRate(
    currency,
    country,
    city,
    selectedMonth,
    countryFullName,
    countryProvince,
    dataId
  ) {
    // var queryURL = "https://v3.exchangerate-api.com/bulk/4b0db198bb26ff6f36044583/USD"
    var queryURL =
      'https://v3.exchangerate-api.com/bulk/d6e2faac133e3b07d10ea4c7/USD';

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
      var results = response.rates;

      //currently using the currency input field, but we will put each country in an object and call the currency from there
      //and we will call the currency code of the selected country
      var exchangeRate = results[currency];

      getBicMacIndex(
        exchangeRate,
        currency,
        country,
        city,
        selectedMonth,
        countryFullName,
        countryProvince,
        dataId
      ); //We must call getBigMac here because we need the exchange rate after exchange rate is called.
    });
  }

  function displayValues(
    currency,
    country,
    city,
    selectedMonth,
    countryFullName,
    countryProvince,
    dataId
  ) {
    //Functions called after each done... to make it synchronous.
    getCurrentExchangeRate(
      currency,
      country,
      city,
      selectedMonth,
      countryFullName,
      countryProvince,
      dataId
    );
  }

  database.ref().on('child_added', function(childSnapshot) {
    var dataCurrency = childSnapshot.val().currency;
    var dataCountry = childSnapshot.val().countryName;
    var dataCity = childSnapshot.val().cityName;
    var dataMonth = childSnapshot.val().month;
    var dataCountryFullName = childSnapshot.val().countryFullName;
    var dataCountryProvince = childSnapshot.val().countryProvince;
    var dataId = childSnapshot.key;

    displayValues(
      dataCurrency,
      dataCountry,
      dataCity,
      dataMonth,
      dataCountryFullName,
      dataCountryProvince,
      dataId
    );
  });

  // 	PART 1: Required Info to search for in the api:
  // 1. COUNTRY (in ISO-3, caps)	(Get through string manipulation)
  // 2. CITY    (in caps)	(Get through string manipulation)
  // 3. Currency (Three letter initial) (May need to search through the API or use a direct object)
  // 4. The selected month	(Get through user input)

  function getRequiredInfo(cityValues, selectedMonth) {
    var queryURL =
      'http://gd.geobytes.com/GetCityDetails?callback=?&fqcn=' + cityValues;

    $.ajax({
      dataType: 'json', //Some APIs don't know what datatype to return unless you tell them to!
      url: queryURL,
      method: 'GET'
    }).done(function(data) {
      console.log(data);
      var countryiso2 = data.geobytesinternet;
      var countryiso3 = countryCodeConversion[countryiso2];
      var countryFullName = data.geobytescountry;
      var countryProvince = data.geobytescode;
      console.log('country province is ' + countryProvince);
      var city = data.geobytescity.toUpperCase();
      var country = countryiso3;
      var currency = data.geobytescurrencycode;

      var userSearch = {
        countryFullName: countryFullName,
        currency: currency,
        countryName: country,
        cityName: city,
        month: selectedMonth,
        countryProvince: countryProvince
      };
      database.ref().push(userSearch);
    });
  }

  $('#nc-submit-city').on('click', function(event) {
    event.preventDefault();

    $('#logo-main').animateCss('fadeOut');
    $('#logo-row').remove();

    var selectedMonth = $('#month-input')
      .val()
      .trim(); //Sets the month here. Rest of info is set in the following function

    if ($('#f_elem_city').val() != '' && selectedMonth != '') {
      var cityValues = $('#f_elem_city')
        .val()
        .trim(); //Gets a city in format: City, State Initials, Country
      getRequiredInfo(cityValues, selectedMonth);

      $('#f_elem_city').val('');
      $('#month-input').val('');
    } else {
      alert('Warning: Bad input!'); //Change later
    }
  });

  //Script to remove the card element by clicking the 'X'
  $('body').on('click', '.remove-button', function() {
    var idToRemove = $(this).attr('data-id');
    database
      .ref()
      .child(idToRemove)
      .remove();
    $(this)
      .closest('.card-div')
      .remove();
  });

  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById('modal-button');

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName('close')[0];

  // When the user clicks the button, open the modal
  btn.onclick = function() {
    modal.style.display = 'block';
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = 'none';
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
});
//script to add animations to elements that are clicked with animiate.css classes added to it
$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd =
      'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);
      if (callback) {
        callback();
      }
    });
    return this;
  }
});

/*---------------------------------------Travel Card Functions----------------------------------- 
	- The following 'handle' functions all handle what functions to execute when a drag listener is triggered happens.
	- travelCard is a function that takes in all the previous data gathered from Firebase and the APIs and appends it to a 
	cardDiv. 
	- See link for drag and drop details: https://www.html5rocks.com/en/tutorials/dnd/basics/#toc-dragging-events
		- WARNING: The event argument (e) from this link did not work as expected. I suspect this is because our event 
		listener was made from jQuery. Instead of e.dataTransfer, I was forced to use e.originalEvent.dataTransfer. 
		So watch out for jQuery leaks when following this guide!
*/

var dragSrcEl; //Global variable to store element data before being moved.

function handleDragStart(e) {
  this.style.opacity = '0.4';

  dragSrcEl = this;
  e.originalEvent.dataTransfer.effectAllowed = 'move';
  e.originalEvent.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }

  e.originalEvent.dataTransfer.dropEffect = 'move';

  return false;
}
function handleDragEnter(e) {
  // this / e.target is the current hover target.
  this.classList.add('over');
}
function handleDragLeave(e) {
  this.classList.remove('over'); // this / e.target is previous target element.
}
function handleDrop(e) {
  // this/e.target is current target element.

  if (e.stopPropagation) {
    e.stopPropagation(); // Stops some browsers from redirecting.
  }
  // Don't do anything if dropping the same column we're dragging.
  if (dragSrcEl != this) {
    // Set the source column's HTML to the HTML of the column we dropped on.
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.originalEvent.dataTransfer.getData('text/html');
  }
  this.classList.remove('over');
  return false;
}
function handleDragEnd(e) {
  // this/e.target is the source node.
  this.style.opacity = '0.83';
  this.classList.remove('over');
}
function travelCard(
  exchangeRate,
  currency,
  bigMacIndex,
  countryDollarPrice,
  country,
  city,
  selectedMonth,
  averageTemp,
  averageMonthRainfall,
  countryFullName,
  countryProvince,
  dataId
) {
  $('#logo-main').animateCss('fadeOut');
  $('#tagline').remove();
  setTimeout(function() {
    $('#logo-main').remove();
  }, 1000);
  $('#logo-row').animate({ height: '0px' });

  var monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  var cardDiv = $('<div>');

  var exchangeRateConverted = Math.round(exchangeRate * 100) / 100;

  var countryDollarPriceConverted = Math.round(countryDollarPrice * 100) / 100;
  $(countryDollarPriceConverted).addClass('big-mac-price');

  // Always show at least two digits, as a floating number (for site consistency).
  var bigMacIndexConverted = parseFloat(
    Math.round(bigMacIndex * 100) / 100
  ).toFixed(2);

  var averageMonthRainfallConverted =
    Math.round(averageMonthRainfall * 100) / 100;

  //converts city in first letter uppercase
  var cityLower = city.toLowerCase();
  var cityUpperCaseFirst =
    cityLower.charAt(0).toUpperCase() + cityLower.slice(1);

  var cityDiv = $('<div>');
  cityDiv.addClass('city');
  cityDiv.append(
    cityUpperCaseFirst + ', ' + countryProvince + ', ' + countryFullName
  );
  cityDiv.addClass('col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8');

  var monthDiv = $('<div>');
  monthDiv.addClass('month');
  monthDiv.append(monthNames[selectedMonth]);
  monthDiv.addClass('col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3');

  var exchangeRateConvertedDiv = $('<div>');
  exchangeRateConvertedDiv.addClass('exchange-rate');
  exchangeRateConvertedDiv.text(exchangeRateConverted);
  exchangeRateConvertedDiv.append(' ' + currency);

  var bigMacIndexConvertedDiv = $('<div>');
  bigMacIndexConvertedDiv.addClass('big-mac-index');
  bigMacIndexConvertedDiv.text(bigMacIndexConverted); //temporary hard code

  var averageTempDiv = $('<div>');
  averageTempDiv.addClass('temperature');
  averageTempDiv.text(averageTemp); //temperature hard code
  averageTempDiv.append(' F');

  var averageMonthRainfallConvertedDiv = $('<div>');
  averageMonthRainfallConvertedDiv.addClass('rainfall');
  averageMonthRainfallConvertedDiv.text(averageMonthRainfallConverted);
  averageMonthRainfallConvertedDiv.append(' in');

  var countryDollarPriceConvertedDiv = $('<div>');
  countryDollarPriceConvertedDiv.addClass('big-mac-price');
  countryDollarPriceConvertedDiv.text('$');
  countryDollarPriceConvertedDiv.append(countryDollarPriceConverted);

  var removeDiv = $('<button>');
  removeDiv.addClass('remove-button');
  removeDiv.attr('data-id', dataId);
  removeDiv.text('X');

  var countryFullNameLower = countryFullName.toLowerCase();
  countryFullNameLower = countryFullNameLower.replace(/\s/g, '-');
  var countryLink =
    'https://travel.state.gov/content/passports/en/country/' +
    countryFullNameLower +
    '.html';
  var buttonDiv = $('<a href=' + countryLink + " target='_blank'></a>");
  buttonDiv.addClass('travel-button');
  buttonDiv.addClass('col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2');

  var buttonText = $('<div>');
  buttonText.addClass('button-text');
  buttonText.text('Visa Passport Embassy');
  buttonDiv.append(buttonText);

  iconDiv0 = $('<div>');
  iconDiv0.append(
    "<img id='icon0' src='assets/images/final_currency.png' draggable = 'false' />"
  );
  iconDiv0.append(exchangeRateConvertedDiv);
  iconDiv0.addClass('icon-box col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2');
  iconDiv0.attr('id', 'exchange-rate-box');
  iconDiv1 = $('<div>');
  iconDiv1.append(
    "<img id='icon1' src='assets/images/final_burger.png' draggable = 'false' />"
  );
  iconDiv1.append(bigMacIndexConvertedDiv);
  iconDiv1.addClass('icon-box col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2');
  iconDiv1.attr('id', 'big-mac-box');
  iconDiv2 = $('<div>');
  iconDiv2.append(
    "<img id='icon2' src='assets/images/final_temperature.png' draggable = 'false'/>"
  );
  iconDiv2.append(averageTempDiv);
  iconDiv2.addClass('icon-box col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2');
  iconDiv2.attr('id', 'temp-box');
  iconDiv3 = $('<div>');
  iconDiv3.append(
    "<img id='icon3' src='assets/images/final_rainfall.png' draggable = 'false'/>"
  );
  iconDiv3.append(averageMonthRainfallConvertedDiv);
  iconDiv3.addClass('icon-box col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2');
  iconDiv3.attr('id', 'rain-box');

  $(cardDiv).attr({ class: 'card-div grabbable', draggable: true }); //Adding listeners for dragging and dropping divs.
  $(cardDiv).addClass('animated slideInUp');
  $(cardDiv).addClass('row'); //animation to make the card slide up into the card well
  $(cardDiv).on('dragstart', handleDragStart);
  $(cardDiv).on('dragenter', handleDragEnter);
  $(cardDiv).on('dragleave', handleDragLeave);
  $(cardDiv).on('dragover', handleDragOver);
  $(cardDiv).on('drop', handleDrop);
  $(cardDiv).on('dragend', handleDragEnd);

  cardDiv.append(cityDiv);
  cardDiv.append(monthDiv);
  cardDiv.append(iconDiv0);
  cardDiv.append(iconDiv1);
  cardDiv.append(iconDiv2);
  cardDiv.append(iconDiv3);
  cardDiv.append(removeDiv);
  cardDiv.append(buttonDiv);

  $('#card-well').append(cardDiv);
}
