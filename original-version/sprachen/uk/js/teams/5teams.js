let teams = 0;
let feld1;
let feld2;
let feld3;
let feld4;
let feld5;
let feld6;
let feld7;
let feld8;
let feld9;
let feld10;
let feld11;
let feld12;
let feld13;
let feld14;
let feld15;
let feld16;
let feld17;
let feld18;
let feld19;
let feld20;
let feld21;
let feld22;
let feld23;
let feld24;
let feld25;
let feld26;
let feld27;
let feld28;
let feld29;
let feld30;
let feld31;
let feld32;
let feld33;
let feld34;
let feld35;
let feld36;
let feld37;
let feld38;
let feld39;
let feld40;
let feld41;
let feld42;
let feld43;
let feld44;
let feld45;
let feld46;
let feld47;
let feld48;
let feld49;
let feld50;
let feld51;
let feld52;
let feld53;
let feld54;
let feld55;
let feld56;
let team0 = "darkgoldenrod";
let team1 = "darkred";
let team2 = "darkblue"; 
let team3 = "darkorange";
let team4 = "darkgrey";

function field(fieldnb) { //Testet welches Feld angeklickt wurde.

    let field = fieldnb;

    currentPlayer();
    if(teams == 0) {
        if(field == 1) {
            document.getElementById("1").style.backgroundColor = team0;
            feld1 = team0;      
        }else if(field == 2) {
            document.getElementById("2").style.backgroundColor = team0;
            feld2 = team0;
        }else if(field == 3) {
            document.getElementById("3").style.backgroundColor = team0;
            feld3 = team0
        }else if(field == 4) {
            document.getElementById("4").style.backgroundColor = team0;
            feld4 = team0;      
        }else if(field == 5) {
            document.getElementById("5").style.backgroundColor = team0;
            feld5 = team0;
        }else if(field == 6) {
            document.getElementById("6").style.backgroundColor = team0;
            feld6 = team0
        }else if(field == 7) {
            document.getElementById("7").style.backgroundColor = team0;
            feld7 = team0
        }else if(field == 8) {
            document.getElementById("8").style.backgroundColor = team0;
            feld8 = team0;      
        }else if(field == 9) {
            document.getElementById("9").style.backgroundColor = team0;
            feld9 = team0;
        }else if(field == 10) {
            document.getElementById("10").style.backgroundColor = team0;
            feld10 = team0
        }else if(field == 11) {
            document.getElementById("11").style.backgroundColor = team0;
            feld11 = team0;      
        }else if(field == 12) {
            document.getElementById("12").style.backgroundColor = team0;
            feld12 = team0;
        }else if(field == 13) {
            document.getElementById("13").style.backgroundColor = team0;
            feld13 = team0
        }else if(field == 14) {
            document.getElementById("14").style.backgroundColor = team0;
            feld14 = team0;      
        }else if(field == 15) {
            document.getElementById("15").style.backgroundColor = team0;
            feld15 = team0;
        }else if(field == 16) {
            document.getElementById("16").style.backgroundColor = team0;
            feld16 = team0
        }else if(field == 17) {
            document.getElementById("17").style.backgroundColor = team0;
            feld17 = team0;      
        }else if(field == 18) {
            document.getElementById("18").style.backgroundColor = team0;
            feld18 = team0;
        }else if(field == 19) {
            document.getElementById("19").style.backgroundColor = team0;
            feld19 = team0
        }else if(field == 20) {
            document.getElementById("20").style.backgroundColor = team0;
            feld20 = team0;      
        }else if(field == 21) {
            document.getElementById("21").style.backgroundColor = team0;
            feld21 = team0;
        }else if(field == 22) {
            document.getElementById("22").style.backgroundColor = team0;
            feld22 = team0
        }else if(field == 23) {
            document.getElementById("23").style.backgroundColor = team0;
            feld23 = team0;      
        }else if(field == 24) {
            document.getElementById("24").style.backgroundColor = team0;
            feld24 = team0;
        }else if(field == 25) {
            document.getElementById("25").style.backgroundColor = team0;
            feld25 = team0
        }else if(field == 26) {
            document.getElementById("26").style.backgroundColor = team0;
            feld26 = team0;      
        }else if(field == 27) {
            document.getElementById("27").style.backgroundColor = team0;
            feld27 = team0;
        }else if(field == 28) {
            document.getElementById("28").style.backgroundColor = team0;
            feld28 = team0
        }else if(field == 29) {
            document.getElementById("29").style.backgroundColor = team0;
            feld29 = team0;      
        }else if(field == 30) {
            document.getElementById("30").style.backgroundColor = team0;
            feld30 = team0;
        }else if(field == 31) {
            document.getElementById("31").style.backgroundColor = team0;
            feld31 = team0
        }else if(field == 32) {
            document.getElementById("32").style.backgroundColor = team0;
            feld32 = team0;      
        }else if(field == 33) {
            document.getElementById("33").style.backgroundColor = team0;
            feld33 = team0;
        }else if(field == 34) {
            document.getElementById("34").style.backgroundColor = team0;
            feld34 = team0
        }else if(field == 35) {
            document.getElementById("35").style.backgroundColor = team0;
            feld35 = team0;      
        }else if(field == 36) {
            document.getElementById("36").style.backgroundColor = team0;
            feld36 = team0;
        }else if(field == 37) {
            document.getElementById("37").style.backgroundColor = team0;
            feld37 = team0
        }else if(field == 38) {
            document.getElementById("38").style.backgroundColor = team0;
            feld38 = team0;      
        }else if(field == 39) {
            document.getElementById("39").style.backgroundColor = team0;
            feld39 = team0;
        }else if(field == 40) {
            document.getElementById("40").style.backgroundColor = team0;
            feld40 = team0
        }else if(field == 41) {
            document.getElementById("41").style.backgroundColor = team0;
            feld41 = team0;      
        }else if(field == 42) {
            document.getElementById("42").style.backgroundColor = team0;
            feld42 = team0;
        }else if(field == 43) {
            document.getElementById("43").style.backgroundColor = team0;
            feld43 = team0
        }else if(field == 44) {
            document.getElementById("44").style.backgroundColor = team0;
            feld44 = team0;      
        }else if(field == 45) {
            document.getElementById("45").style.backgroundColor = team0;
            feld45 = team0;
        }else if(field == 46) {
            document.getElementById("46").style.backgroundColor = team0;
            feld46 = team0
        }else if(field == 47) {
            document.getElementById("47").style.backgroundColor = team0;
            feld47 = team0;      
        }else if(field == 48) {
            document.getElementById("48").style.backgroundColor = team0;
            feld48 = team0;
        }else if(field == 49) {
            document.getElementById("49").style.backgroundColor = team0;
            feld49 = team0
        }else if(field == 50) {
            document.getElementById("50").style.backgroundColor = team0;
            feld50 = team0;      
        }else if(field == 51) {
            document.getElementById("51").style.backgroundColor = team0;
            feld51 = team0;
        }else if(field == 52) {
            document.getElementById("52").style.backgroundColor = team0;
            feld52 = team0
        }else if(field == 53) {
            document.getElementById("53").style.backgroundColor = team0;
            feld53 = team0
        }else if(field == 54) {
            document.getElementById("54").style.backgroundColor = team0;
            feld54 = team0
        }else if(field == 55) {
            document.getElementById("55").style.backgroundColor = team0;
            feld55 = team0
        }else if(field == 56) {
            document.getElementById("56").style.backgroundColor = team0;
            feld56 = team0
        }
    } else if(teams == 1){
        if(field == 1) {
            document.getElementById("1").style.backgroundColor = team1;
            feld1 = team1;     
        }else if(field == 2) {
            document.getElementById("2").style.backgroundColor = team1;
            feld2 = team1;
        }else if(field == 3) {
            document.getElementById("3").style.backgroundColor = team1;
            feld3 = team1;
        }else if(field == 4) {
            document.getElementById("4").style.backgroundColor = team1;
            feld4 = team1;      
        }else if(field == 5) {
            document.getElementById("5").style.backgroundColor = team1;
            feld5 = team1;
        }else if(field == 6) {
            document.getElementById("6").style.backgroundColor = team1;
            feld6 = team1;
        }else if(field == 7) {
            document.getElementById("7").style.backgroundColor = team1;
            feld7 = team1;
        }else if(field == 8) {
            document.getElementById("8").style.backgroundColor = team1;
            feld8 = team1;      
        }else if(field == 9) {
            document.getElementById("9").style.backgroundColor = team1;
            feld9 = team1;
        }else if(field == 10) {
            document.getElementById("10").style.backgroundColor = team1;
            feld10 = team1;
        }else if(field == 11) {
            document.getElementById("11").style.backgroundColor = team1;
            feld11 = team1;      
        }else if(field == 12) {
            document.getElementById("12").style.backgroundColor = team1;
            feld12 = team1;
        }else if(field == 13) {
            document.getElementById("13").style.backgroundColor = team1;
            feld13 = team1;
        }else if(field == 14) {
            document.getElementById("14").style.backgroundColor = team1;
            feld14 = team1;      
        }else if(field == 15) {
            document.getElementById("15").style.backgroundColor = team1;
            feld15 = team1;
        }else if(field == 16) {
            document.getElementById("16").style.backgroundColor = team1;
            feld16 = team1;
        }else if(field == 17) {
            document.getElementById("17").style.backgroundColor = team1;
            feld17 = team1;      
        }else if(field == 18) {
            document.getElementById("18").style.backgroundColor = team1;
            feld18 = team1;
        }else if(field == 19) {
            document.getElementById("19").style.backgroundColor = team1;
            feld19 = team1;
        }else if(field == 20) {
            document.getElementById("20").style.backgroundColor = team1;
            feld20 = team1;      
        }else if(field == 21) {
            document.getElementById("21").style.backgroundColor = team1;
            feld21 = team1;
        }else if(field == 22) {
            document.getElementById("22").style.backgroundColor = team1;
            feld22 = team1;
        }else if(field == 23) {
            document.getElementById("23").style.backgroundColor = team1;
            feld23 = team1;      
        }else if(field == 24) {
            document.getElementById("24").style.backgroundColor = team1;
            feld24 = team1;
        }else if(field == 25) {
            document.getElementById("25").style.backgroundColor = team1;
            feld25 = team1;
        }else if(field == 26) {
            document.getElementById("26").style.backgroundColor = team1;
            feld26 = team1;      
        }else if(field == 27) {
            document.getElementById("27").style.backgroundColor = team1;
            feld27 = team1;
        }else if(field == 28) {
            document.getElementById("28").style.backgroundColor = team1;
            feld28 = team1;
        }else if(field == 29) {
            document.getElementById("29").style.backgroundColor = team1;
            feld29 = team1;      
        }else if(field == 30) {
            document.getElementById("30").style.backgroundColor = team1;
            feld30 = team1;
        }else if(field == 31) {
            document.getElementById("31").style.backgroundColor = team1;
            feld31 = team1;
        }else if(field == 32) {
            document.getElementById("32").style.backgroundColor = team1;
            feld32 = team1;      
        }else if(field == 33) {
            document.getElementById("33").style.backgroundColor = team1;
            feld33 = team1;
        }else if(field == 34) {
            document.getElementById("34").style.backgroundColor = team1;
            feld34 = team1;
        }else if(field == 35) {
            document.getElementById("35").style.backgroundColor = team1;
            feld35 = team1;      
        }else if(field == 36) {
            document.getElementById("36").style.backgroundColor = team1;
            feld36 = team1;
        }else if(field == 37) {
            document.getElementById("37").style.backgroundColor = team1;
            feld37 = team1;
        }else if(field == 38) {
            document.getElementById("38").style.backgroundColor = team1;
            feld38 = team1;      
        }else if(field == 39) {
            document.getElementById("39").style.backgroundColor = team1;
            feld39 = team1;
        }else if(field == 40) {
            document.getElementById("40").style.backgroundColor = team1;
            feld40 = team1;
        }else if(field == 41) {
            document.getElementById("41").style.backgroundColor = team1;
            feld41 = team1;      
        }else if(field == 42) {
            document.getElementById("42").style.backgroundColor = team1;
            feld42 = team1;
        }else if(field == 43) {
            document.getElementById("43").style.backgroundColor = team1;
            feld43 = team1;
        }else if(field == 44) {
            document.getElementById("44").style.backgroundColor = team1;
            feld44 = team1;      
        }else if(field == 45) {
            document.getElementById("45").style.backgroundColor = team1;
            feld45 = team1;
        }else if(field == 46) {
            document.getElementById("46").style.backgroundColor = team1;
            feld46 = team1;
        }else if(field == 47) {
            document.getElementById("47").style.backgroundColor = team1;
            feld47 = team1;      
        }else if(field == 48) {
            document.getElementById("48").style.backgroundColor = team1;
            feld48 = team1;
        }else if(field == 49) {
            document.getElementById("49").style.backgroundColor = team1;
            feld49 = team1;
        }else if(field == 50) {
            document.getElementById("50").style.backgroundColor = team1;
            feld50 = team1;      
        }else if(field == 51) {
            document.getElementById("51").style.backgroundColor = team1;
            feld51 = team1;
        }else if(field == 52) {
            document.getElementById("52").style.backgroundColor = team1;
            feld52 = team1;
        }else if(field == 53) {
            document.getElementById("53").style.backgroundColor = team1;
            feld53 = team1;
        }else if(field == 54) {
            document.getElementById("54").style.backgroundColor = team1;
            feld54 = team1;
        }else if(field == 55) {
            document.getElementById("55").style.backgroundColor = team1;
            feld55 = team1;
        }else if(field == 56) {
            document.getElementById("56").style.backgroundColor = team1;
            feld56 = team1;
        }
    }else if(teams == 2) {
        if(field == 1) {
            document.getElementById("1").style.backgroundColor = team2;
            feld1 = team2;     
        }else if(field == 2) {
            document.getElementById("2").style.backgroundColor = team2;
            feld2 = team2;
        }else if(field == 3) {
            document.getElementById("3").style.backgroundColor = team2;
            feld3 = team2;
        }else if(field == 4) {
            document.getElementById("4").style.backgroundColor = team2;
            feld4 = team2;      
        }else if(field == 5) {
            document.getElementById("5").style.backgroundColor = team2;
            feld5 = team2;
        }else if(field == 6) {
            document.getElementById("6").style.backgroundColor = team2;
            feld6 = team2;
        }else if(field == 7) {
            document.getElementById("7").style.backgroundColor = team2;
            feld7 = team2;
        }else if(field == 8) {
            document.getElementById("8").style.backgroundColor = team2;
            feld8 = team2;      
        }else if(field == 9) {
            document.getElementById("9").style.backgroundColor = team2;
            feld9 = team2;
        }else if(field == 10) {
            document.getElementById("10").style.backgroundColor = team2;
            feld10 = team2;
        }else if(field == 11) {
            document.getElementById("11").style.backgroundColor = team2;
            feld11 = team2;      
        }else if(field == 12) {
            document.getElementById("12").style.backgroundColor = team2;
            feld12 = team2;
        }else if(field == 13) {
            document.getElementById("13").style.backgroundColor = team2;
            feld13 = team2;
        }else if(field == 14) {
            document.getElementById("14").style.backgroundColor = team2;
            feld14 = team2;      
        }else if(field == 15) {
            document.getElementById("15").style.backgroundColor = team2;
            feld15 = team2;
        }else if(field == 16) {
            document.getElementById("16").style.backgroundColor = team2;
            feld16 = team2;
        }else if(field == 17) {
            document.getElementById("17").style.backgroundColor = team2;
            feld17 = team2;      
        }else if(field == 18) {
            document.getElementById("18").style.backgroundColor = team2;
            feld18 = team2;
        }else if(field == 19) {
            document.getElementById("19").style.backgroundColor = team2;
            feld19 = team2;
        }else if(field == 20) {
            document.getElementById("20").style.backgroundColor = team2;
            feld20 = team2;      
        }else if(field == 21) {
            document.getElementById("21").style.backgroundColor = team2;
            feld21 = team2;
        }else if(field == 22) {
            document.getElementById("22").style.backgroundColor = team2;
            feld22 = team2;
        }else if(field == 23) {
            document.getElementById("23").style.backgroundColor = team2;
            feld23 = team2;      
        }else if(field == 24) {
            document.getElementById("24").style.backgroundColor = team2;
            feld24 = team2;
        }else if(field == 25) {
            document.getElementById("25").style.backgroundColor = team2;
            feld25 = team2;
        }else if(field == 26) {
            document.getElementById("26").style.backgroundColor = team2;
            feld26 = team2;      
        }else if(field == 27) {
            document.getElementById("27").style.backgroundColor = team2;
            feld27 = team2;
        }else if(field == 28) {
            document.getElementById("28").style.backgroundColor = team2;
            feld28 = team2;
        }else if(field == 29) {
            document.getElementById("29").style.backgroundColor = team2;
            feld29 = team2;      
        }else if(field == 30) {
            document.getElementById("30").style.backgroundColor = team2;
            feld30 = team2;
        }else if(field == 31) {
            document.getElementById("31").style.backgroundColor = team2;
            feld31 = team2;
        }else if(field == 32) {
            document.getElementById("32").style.backgroundColor = team2;
            feld32 = team2;      
        }else if(field == 33) {
            document.getElementById("33").style.backgroundColor = team2;
            feld33 = team2;
        }else if(field == 34) {
            document.getElementById("34").style.backgroundColor = team2;
            feld34 = team2;
        }else if(field == 35) {
            document.getElementById("35").style.backgroundColor = team2;
            feld35 = team2;      
        }else if(field == 36) {
            document.getElementById("36").style.backgroundColor = team2;
            feld36 = team2;
        }else if(field == 37) {
            document.getElementById("37").style.backgroundColor = team2;
            feld37 = team2;
        }else if(field == 38) {
            document.getElementById("38").style.backgroundColor = team2;
            feld38 = team2;      
        }else if(field == 39) {
            document.getElementById("39").style.backgroundColor = team2;
            feld39 = team2;
        }else if(field == 40) {
            document.getElementById("40").style.backgroundColor = team2;
            feld40 = team2;
        }else if(field == 41) {
            document.getElementById("41").style.backgroundColor = team2;
            feld41 = team2;      
        }else if(field == 42) {
            document.getElementById("42").style.backgroundColor = team2;
            feld42 = team2;
        }else if(field == 43) {
            document.getElementById("43").style.backgroundColor = team2;
            feld43 = team2;
        }else if(field == 44) {
            document.getElementById("44").style.backgroundColor = team2;
            feld44 = team2;      
        }else if(field == 45) {
            document.getElementById("45").style.backgroundColor = team2;
            feld45 = team2;
        }else if(field == 46) {
            document.getElementById("46").style.backgroundColor = team2;
            feld46 = team2;
        }else if(field == 47) {
            document.getElementById("47").style.backgroundColor = team2;
            feld47 = team2;      
        }else if(field == 48) {
            document.getElementById("48").style.backgroundColor = team2;
            feld48 = team2;
        }else if(field == 49) {
            document.getElementById("49").style.backgroundColor = team2;
            feld49 = team2;
        }else if(field == 50) {
            document.getElementById("50").style.backgroundColor = team2;
            feld50 = team2;      
        }else if(field == 51) {
            document.getElementById("51").style.backgroundColor = team2;
            feld51 = team2;
        }else if(field == 52) {
            document.getElementById("52").style.backgroundColor = team2;
            feld52 = team2;
        }else if(field == 53) {
            document.getElementById("53").style.backgroundColor = team2;
            feld53 = team2;
        }else if(field == 54) {
            document.getElementById("54").style.backgroundColor = team2;
            feld54 = team2;
        }else if(field == 55) {
            document.getElementById("55").style.backgroundColor = team2;
            feld55 = team2;
        }else if(field == 56) {
            document.getElementById("56").style.backgroundColor = team2;
            feld56 = team2;
            }
    }else if(teams == 3) {
        if(field == 1) {
            document.getElementById("1").style.backgroundColor = team3;
            feld1 = team3;     
        }else if(field == 2) {
            document.getElementById("2").style.backgroundColor = team3;
            feld2 = team3;
        }else if(field == 3) {
            document.getElementById("3").style.backgroundColor = team3;
            feld3 = team3;
        }else if(field == 4) {
            document.getElementById("4").style.backgroundColor = team3;
            feld4 = team3;      
        }else if(field == 5) {
            document.getElementById("5").style.backgroundColor = team3;
            feld5 = team3;
        }else if(field == 6) {
            document.getElementById("6").style.backgroundColor = team3;
            feld6 = team3;
        }else if(field == 7) {
            document.getElementById("7").style.backgroundColor = team3;
            feld7 = team3;
        }else if(field == 8) {
            document.getElementById("8").style.backgroundColor = team3;
            feld8 = team3;      
        }else if(field == 9) {
            document.getElementById("9").style.backgroundColor = team3;
            feld9 = team3;
        }else if(field == 10) {
            document.getElementById("10").style.backgroundColor = team3;
            feld10 = team3;
        }else if(field == 11) {
            document.getElementById("11").style.backgroundColor = team3;
            feld11 = team3;      
        }else if(field == 12) {
            document.getElementById("12").style.backgroundColor = team3;
            feld12 = team3;
        }else if(field == 13) {
            document.getElementById("13").style.backgroundColor = team3;
            feld13 = team3;
        }else if(field == 14) {
            document.getElementById("14").style.backgroundColor = team3;
            feld14 = team3;      
        }else if(field == 15) {
            document.getElementById("15").style.backgroundColor = team3;
            feld15 = team3;
        }else if(field == 16) {
            document.getElementById("16").style.backgroundColor = team3;
            feld16 = team3;
        }else if(field == 17) {
            document.getElementById("17").style.backgroundColor = team3;
            feld17 = team3;      
        }else if(field == 18) {
            document.getElementById("18").style.backgroundColor = team3;
            feld18 = team3;
        }else if(field == 19) {
            document.getElementById("19").style.backgroundColor = team3;
            feld19 = team3;
        }else if(field == 20) {
            document.getElementById("20").style.backgroundColor = team3;
            feld20 = team3;      
        }else if(field == 21) {
            document.getElementById("21").style.backgroundColor = team3;
            feld21 = team3;
        }else if(field == 22) {
            document.getElementById("22").style.backgroundColor = team3;
            feld22 = team3;
        }else if(field == 23) {
            document.getElementById("23").style.backgroundColor = team3;
            feld23 = team3;      
        }else if(field == 24) {
            document.getElementById("24").style.backgroundColor = team3;
            feld24 = team3;
        }else if(field == 25) {
            document.getElementById("25").style.backgroundColor = team3;
            feld25 = team3;
        }else if(field == 26) {
            document.getElementById("26").style.backgroundColor = team3;
            feld26 = team3;      
        }else if(field == 27) {
            document.getElementById("27").style.backgroundColor = team3;
            feld27 = team3;
        }else if(field == 28) {
            document.getElementById("28").style.backgroundColor = team3;
            feld28 = team3;
        }else if(field == 29) {
            document.getElementById("29").style.backgroundColor = team3;
            feld29 = team3;      
        }else if(field == 30) {
            document.getElementById("30").style.backgroundColor = team3;
            feld30 = team3;
        }else if(field == 31) {
            document.getElementById("31").style.backgroundColor = team3;
            feld31 = team3;
        }else if(field == 32) {
            document.getElementById("32").style.backgroundColor = team3;
            feld32 = team3;      
        }else if(field == 33) {
            document.getElementById("33").style.backgroundColor = team3;
            feld33 = team3;
        }else if(field == 34) {
            document.getElementById("34").style.backgroundColor = team3;
            feld34 = team3;
        }else if(field == 35) {
            document.getElementById("35").style.backgroundColor = team3;
            feld35 = team3;      
        }else if(field == 36) {
            document.getElementById("36").style.backgroundColor = team3;
            feld36 = team3;
        }else if(field == 37) {
            document.getElementById("37").style.backgroundColor = team3;
            feld37 = team3;
        }else if(field == 38) {
            document.getElementById("38").style.backgroundColor = team3;
            feld38 = team3;      
        }else if(field == 39) {
            document.getElementById("39").style.backgroundColor = team3;
            feld39 = team3;
        }else if(field == 40) {
            document.getElementById("40").style.backgroundColor = team3;
            feld40 = team3;
        }else if(field == 41) {
            document.getElementById("41").style.backgroundColor = team3;
            feld41 = team3;      
        }else if(field == 42) {
            document.getElementById("42").style.backgroundColor = team3;
            feld42 = team3;
        }else if(field == 43) {
            document.getElementById("43").style.backgroundColor = team3;
            feld43 = team3;
        }else if(field == 44) {
            document.getElementById("44").style.backgroundColor = team3;
            feld44 = team3;      
        }else if(field == 45) {
            document.getElementById("45").style.backgroundColor = team3;
            feld45 = team3;
        }else if(field == 46) {
            document.getElementById("46").style.backgroundColor = team3;
            feld46 = team3;
        }else if(field == 47) {
            document.getElementById("47").style.backgroundColor = team3;
            feld47 = team3;      
        }else if(field == 48) {
            document.getElementById("48").style.backgroundColor = team3;
            feld48 = team3;
        }else if(field == 49) {
            document.getElementById("49").style.backgroundColor = team3;
            feld49 = team3;
        }else if(field == 50) {
            document.getElementById("50").style.backgroundColor = team3;
            feld50 = team3;      
        }else if(field == 51) {
            document.getElementById("51").style.backgroundColor = team3;
            feld51 = team3;
        }else if(field == 52) {
            document.getElementById("52").style.backgroundColor = team3;
            feld52 = team3;
        }else if(field == 53) {
            document.getElementById("53").style.backgroundColor = team3;
            feld53 = team3;
        }else if(field == 54) {
            document.getElementById("54").style.backgroundColor = team3;
            feld54 = team3;
        }else if(field == 55) {
            document.getElementById("55").style.backgroundColor = team3;
            feld55 = team3;
        }else if(field == 56) {
            document.getElementById("56").style.backgroundColor = team3;
            feld56 = team3;
            }
    }else if(teams == 4) {
        if(field == 1) {
            document.getElementById("1").style.backgroundColor = team4;
            feld1 = team4;     
        }else if(field == 2) {
            document.getElementById("2").style.backgroundColor = team4;
            feld2 = team4;
        }else if(field == 3) {
            document.getElementById("3").style.backgroundColor = team4;
            feld3 = team4;
        }else if(field == 4) {
            document.getElementById("4").style.backgroundColor = team4;
            feld4 = team4;      
        }else if(field == 5) {
            document.getElementById("5").style.backgroundColor = team4;
            feld5 = team4;
        }else if(field == 6) {
            document.getElementById("6").style.backgroundColor = team4;
            feld6 = team4;
        }else if(field == 7) {
            document.getElementById("7").style.backgroundColor = team4;
            feld7 = team4;
        }else if(field == 8) {
            document.getElementById("8").style.backgroundColor = team4;
            feld8 = team4;      
        }else if(field == 9) {
            document.getElementById("9").style.backgroundColor = team4;
            feld9 = team4;
        }else if(field == 10) {
            document.getElementById("10").style.backgroundColor = team4;
            feld10 = team4;
        }else if(field == 11) {
            document.getElementById("11").style.backgroundColor = team4;
            feld11 = team4;      
        }else if(field == 12) {
            document.getElementById("12").style.backgroundColor = team4;
            feld12 = team4;
        }else if(field == 13) {
            document.getElementById("13").style.backgroundColor = team4;
            feld13 = team4;
        }else if(field == 14) {
            document.getElementById("14").style.backgroundColor = team4;
            feld14 = team4;      
        }else if(field == 15) {
            document.getElementById("15").style.backgroundColor = team4;
            feld15 = team4;
        }else if(field == 16) {
            document.getElementById("16").style.backgroundColor = team4;
            feld16 = team4;
        }else if(field == 17) {
            document.getElementById("17").style.backgroundColor = team4;
            feld17 = team4;      
        }else if(field == 18) {
            document.getElementById("18").style.backgroundColor = team4;
            feld18 = team4;
        }else if(field == 19) {
            document.getElementById("19").style.backgroundColor = team4;
            feld19 = team4;
        }else if(field == 20) {
            document.getElementById("20").style.backgroundColor = team4;
            feld20 = team4;      
        }else if(field == 21) {
            document.getElementById("21").style.backgroundColor = team4;
            feld21 = team4;
        }else if(field == 22) {
            document.getElementById("22").style.backgroundColor = team4;
            feld22 = team4;
        }else if(field == 23) {
            document.getElementById("23").style.backgroundColor = team4;
            feld23 = team4;      
        }else if(field == 24) {
            document.getElementById("24").style.backgroundColor = team4;
            feld24 = team4;
        }else if(field == 25) {
            document.getElementById("25").style.backgroundColor = team4;
            feld25 = team4;
        }else if(field == 26) {
            document.getElementById("26").style.backgroundColor = team4;
            feld26 = team4;      
        }else if(field == 27) {
            document.getElementById("27").style.backgroundColor = team4;
            feld27 = team4;
        }else if(field == 28) {
            document.getElementById("28").style.backgroundColor = team4;
            feld28 = team4;
        }else if(field == 29) {
            document.getElementById("29").style.backgroundColor = team4;
            feld29 = team4;      
        }else if(field == 30) {
            document.getElementById("30").style.backgroundColor = team4;
            feld30 = team4;
        }else if(field == 31) {
            document.getElementById("31").style.backgroundColor = team4;
            feld31 = team4;
        }else if(field == 32) {
            document.getElementById("32").style.backgroundColor = team4;
            feld32 = team4;      
        }else if(field == 33) {
            document.getElementById("33").style.backgroundColor = team4;
            feld33 = team4;
        }else if(field == 34) {
            document.getElementById("34").style.backgroundColor = team4;
            feld34 = team4;
        }else if(field == 35) {
            document.getElementById("35").style.backgroundColor = team4;
            feld35 = team4;      
        }else if(field == 36) {
            document.getElementById("36").style.backgroundColor = team4;
            feld36 = team4;
        }else if(field == 37) {
            document.getElementById("37").style.backgroundColor = team4;
            feld37 = team4;
        }else if(field == 38) {
            document.getElementById("38").style.backgroundColor = team4;
            feld38 = team4;      
        }else if(field == 39) {
            document.getElementById("39").style.backgroundColor = team4;
            feld39 = team4;
        }else if(field == 40) {
            document.getElementById("40").style.backgroundColor = team4;
            feld40 = team4;
        }else if(field == 41) {
            document.getElementById("41").style.backgroundColor = team4;
            feld41 = team4;      
        }else if(field == 42) {
            document.getElementById("42").style.backgroundColor = team4;
            feld42 = team4;
        }else if(field == 43) {
            document.getElementById("43").style.backgroundColor = team4;
            feld43 = team4;
        }else if(field == 44) {
            document.getElementById("44").style.backgroundColor = team4;
            feld44 = team4;      
        }else if(field == 45) {
            document.getElementById("45").style.backgroundColor = team4;
            feld45 = team4;
        }else if(field == 46) {
            document.getElementById("46").style.backgroundColor = team4;
            feld46 = team4;
        }else if(field == 47) {
            document.getElementById("47").style.backgroundColor = team4;
            feld47 = team4;      
        }else if(field == 48) {
            document.getElementById("48").style.backgroundColor = team4;
            feld48 = team4;
        }else if(field == 49) {
            document.getElementById("49").style.backgroundColor = team4;
            feld49 = team4;
        }else if(field == 50) {
            document.getElementById("50").style.backgroundColor = team4;
            feld50 = team4;      
        }else if(field == 51) {
            document.getElementById("51").style.backgroundColor = team4;
            feld51 = team4;
        }else if(field == 52) {
            document.getElementById("52").style.backgroundColor = team4;
            feld52 = team4;
        }else if(field == 53) {
            document.getElementById("53").style.backgroundColor = team4;
            feld53 = team4;
        }else if(field == 54) {
            document.getElementById("54").style.backgroundColor = team4;
            feld54 = team4;
        }else if(field == 55) {
            document.getElementById("55").style.backgroundColor = team4;
            feld55 = team4;
        }else if(field == 56) {
            document.getElementById("56").style.backgroundColor = team4;
            feld56 = team4;
            }
    }
    changeTeam();
    TestWinCyan();
    TestWinRed();
    TestWinBlue();
    TestWinOrange();
    TestWinGrey();
}

function TestWinCyan() { //Testet ob das Türkise Team gewonnen hat.
    if (
        // 1. Reihe
        feld1 == team0 && feld2 == team0 && feld3 == team0 && feld4 == team0 ||
        feld2 == team0 && feld3 == team0 && feld4 == team0 && feld5 == team0 ||
        feld3 == team0 && feld4 == team0 && feld5 == team0 && feld6 == team0 ||
        feld4 == team0 && feld5 == team0 && feld6 == team0 && feld7 == team0 ||
        // 2. Reihe
        feld8 == team0 && feld9 == team0 && feld10 == team0 && feld11 == team0 ||
        feld9 == team0 && feld10 == team0 && feld11 == team0 && feld12 == team0 ||
        feld10 == team0 && feld11 == team0 && feld12 == team0 && feld13 == team0 ||
        feld11 == team0 && feld12 == team0 && feld13 == team0 && feld14 == team0 ||
        //3. Reihe
        feld15 == team0 && feld16 == team0 && feld17 == team0 && feld18 == team0 ||
        feld16 == team0 && feld17 == team0 && feld18 == team0 && feld19 == team0 ||
        feld17 == team0 && feld18 == team0 && feld19 == team0 && feld20 == team0 ||
        feld18 == team0 && feld19 == team0 && feld20 == team0 && feld21 == team0 ||
        //4.Reihe
        feld22 == team0 && feld23 == team0 && feld24 == team0 && feld25 == team0 ||
        feld23 == team0 && feld24 == team0 && feld25 == team0 && feld26 == team0 ||
        feld24 == team0 && feld25 == team0 && feld26 == team0 && feld27 == team0 ||
        feld25 == team0 && feld26 == team0 && feld27 == team0 && feld28 == team0 ||
        //5. Reihe
        feld29 == team0 && feld30 == team0 && feld31 == team0 && feld32 == team0 ||
        feld30 == team0 && feld31 == team0 && feld32 == team0 && feld33 == team0 ||
        feld31 == team0 && feld32 == team0 && feld33 == team0 && feld34 == team0 ||
        feld32 == team0 && feld33 == team0 && feld34 == team0 && feld35 == team0 ||
        //6. Reihe
        feld36 == team0 && feld37 == team0 && feld38 == team0 && feld39 == team0 ||
        feld37 == team0 && feld38 == team0 && feld39 == team0 && feld40 == team0 ||
        feld38 == team0 && feld39 == team0 && feld40 == team0 && feld41 == team0 ||
        feld39 == team0 && feld40 == team0 && feld41 == team0 && feld42 == team0 ||
        // 7. Reihe
        feld43 == team0 && feld44 == team0 && feld45 == team0 && feld46 == team0 ||
        feld44 == team0 && feld45 == team0 && feld46 == team0 && feld47 == team0 ||
        feld45 == team0 && feld46 == team0 && feld47 == team0 && feld48 == team0 ||
        feld46 == team0 && feld47 == team0 && feld48 == team0 && feld48 == team0 ||
        //8. Reihe
        feld49 == team0 && feld50 == team0 && feld51 == team0 && feld52 == team0 ||
        feld50 == team0 && feld51 == team0 && feld52 == team0 && feld53 == team0 ||
        feld51 == team0 && feld52 == team0 && feld53 == team0 && feld54 == team0 ||
        feld52 == team0 && feld53 == team0 && feld54 == team0 && feld55 == team0 ||
        feld53 == team0 && feld54 == team0 && feld55 == team0 && feld56 == team0 ||
        //1. Spalte
        feld1 == team0 && feld8 == team0 && feld15 == team0 && feld22 == team0 ||
        feld8 == team0 && feld15 == team0 && feld22 == team0 && feld29 == team0 ||
        feld15 == team0 && feld22 == team0 && feld29 == team0 && feld36 == team0 ||
        feld22 == team0 && feld29 == team0 && feld36 == team0 && feld43 == team0 ||
        feld29 == team0 && feld36 == team0 && feld43 == team0 && feld50 == team0 ||
        //2. Spalte
        feld2 == team0 && feld9 == team0 && feld16 == team0 && feld23 == team0 ||
        feld9 == team0 && feld16 == team0 && feld23 == team0 && feld30 == team0 ||
        feld16 == team0 && feld23 == team0 && feld30 == team0 && feld37 == team0 ||
        feld23 == team0 && feld30 == team0 && feld37 == team0 && feld44 == team0 ||
        feld30 == team0 && feld37 == team0 && feld44 == team0 && feld51 == team0 ||
        //3. Spalte
        feld3 == team0 && feld10 == team0 && feld17 == team0 && feld24 == team0 ||
        feld10 == team0 && feld17 == team0 && feld24 == team0 && feld31 == team0 ||
        feld17 == team0 && feld24 == team0 && feld31 == team0 && feld38 == team0 ||
        feld24 == team0 && feld31 == team0 && feld38 == team0 && feld45 == team0 ||
        feld31 == team0 && feld38 == team0 && feld45 == team0 && feld52 == team0 ||
        //4. Spalte
        feld4 == team0 && feld11 == team0 && feld18 == team0 && feld25 == team0 ||
        feld11 == team0 && feld18 == team0 && feld25 == team0 && feld32 == team0 ||
        feld18 == team0 && feld25 == team0 && feld32 == team0 && feld39 == team0 ||
        feld25 == team0 && feld32 == team0 && feld39 == team0 && feld46 == team0 ||
        feld32 == team0 && feld39 == team0 && feld46 == team0 && feld53 == team0 ||
        //5. Spalte
        feld5 == team0 && feld12 == team0 && feld19 == team0 && feld26 == team0 ||
        feld12 == team0 && feld19 == team0 && feld26 == team0 && feld33 == team0 ||
        feld19 == team0 && feld26 == team0 && feld33 == team0 && feld40 == team0 ||
        feld26 == team0 && feld33 == team0 && feld40 == team0 && feld47 == team0 ||
        feld33 == team0 && feld40 == team0 && feld47 == team0 && feld54 == team0 ||
        //6. Spalte
        feld6 == team0 && feld13 == team0 && feld20 == team0 && feld27 == team0 ||
        feld13 == team0 && feld20 == team0 && feld27 == team0 && feld34 == team0 ||
        feld20 == team0 && feld27 == team0 && feld34 == team0 && feld41 == team0 ||
        feld27 == team0 && feld34 == team0 && feld41 == team0 && feld48 == team0 ||
        feld34 == team0 && feld41 == team0 && feld48 == team0 && feld55 == team0 ||
        //7. Spalte
        feld7 == team0 && feld14 == team0 && feld21 == team0 && feld28 == team0 ||
        feld14 == team0 && feld21 == team0 && feld28 == team0 && feld35 == team0 ||
        feld21 == team0 && feld28 == team0 && feld35 == team0 && feld42 == team0 ||
        feld28 == team0 && feld35 == team0 && feld42 == team0 && feld49 == team0 ||
        feld35 == team0 && feld42 == team0 && feld49 == team0 && feld56 == team0 
        ) {
        writeInfo("The Dark Gold team won the game. <br> Congratulations!");
        setTimeout(function() {
            location.reload();
        },2000)
    }
}

function TestWinRed() { //Testet ob das Rote Team gewonnen hat.
    if (
        // 1. Reihe
        feld1 == team1 && feld2 == team1 && feld3 == team1 && feld4 == team1 ||
        feld2 == team1 && feld3 == team1 && feld4 == team1 && feld5 == team1 ||
        feld3 == team1 && feld4 == team1 && feld5 == team1 && feld6 == team1 ||
        feld4 == team1 && feld5 == team1 && feld6 == team1 && feld7 == team1 ||
        // 2. Reihe
        feld8 == team1 && feld9 == team1 && feld10 == team1 && feld11 == team1 ||
        feld9 == team1 && feld10 == team1 && feld11 == team1 && feld12 == team1 ||
        feld10 == team1 && feld11 == team1 && feld12 == team1 && feld13 == team1 ||
        feld11 == team1 && feld12 == team1 && feld13 == team1 && feld14 == team1 ||
        //3. Reihe
        feld15 == team1 && feld16 == team1 && feld17 == team1 && feld18 == team1 ||
        feld16 == team1 && feld17 == team1 && feld18 == team1 && feld19 == team1 ||
        feld17 == team1 && feld18 == team1 && feld19 == team1 && feld20 == team1 ||
        feld18 == team1 && feld19 == team1 && feld20 == team1 && feld21 == team1 ||
        //4.Reihe
        feld22 == team1 && feld23 == team1 && feld24 == team1 && feld25 == team1 ||
        feld23 == team1 && feld24 == team1 && feld25 == team1 && feld26 == team1 ||
        feld24 == team1 && feld25 == team1 && feld26 == team1 && feld27 == team1 ||
        feld25 == team1 && feld26 == team1 && feld27 == team1 && feld28 == team1 ||
        //5. Reihe
        feld29 == team1 && feld30 == team1 && feld31 == team1 && feld32 == team1 ||
        feld30 == team1 && feld31 == team1 && feld32 == team1 && feld33 == team1 ||
        feld31 == team1 && feld32 == team1 && feld33 == team1 && feld34 == team1 ||
        feld32 == team1 && feld33 == team1 && feld34 == team1 && feld35 == team1 ||
        //6. Reihe
        feld36 == team1 && feld37 == team1 && feld38 == team1 && feld39 == team1 ||
        feld37 == team1 && feld38 == team1 && feld39 == team1 && feld40 == team1 ||
        feld38 == team1 && feld39 == team1 && feld40 == team1 && feld41 == team1 ||
        feld39 == team1 && feld40 == team1 && feld41 == team1 && feld42 == team1 ||
        // 7. Reihe
        feld43 == team1 && feld44 == team1 && feld45 == team1 && feld46 == team1 ||
        feld44 == team1 && feld45 == team1 && feld46 == team1 && feld47 == team1 ||
        feld45 == team1 && feld46 == team1 && feld47 == team1 && feld48 == team1 ||
        feld46 == team1 && feld47 == team1 && feld48 == team1 && feld48 == team1 ||
        //8. Reihe
        feld49 == team1 && feld50 == team1 && feld51 == team1 && feld52 == team1 ||
        feld50 == team1 && feld51 == team1 && feld52 == team1 && feld53 == team1 ||
        feld51 == team1 && feld52 == team1 && feld53 == team1 && feld54 == team1 ||
        feld52 == team1 && feld53 == team1 && feld54 == team1 && feld55 == team1 ||
        feld53 == team1 && feld54 == team1 && feld55 == team1 && feld56 == team1 ||
        //1. Spalte
        feld1 == team1 && feld8 == team1 && feld15 == team1 && feld22 == team1 ||
        feld8 == team1 && feld15 == team1 && feld22 == team1 && feld29 == team1 ||
        feld15 == team1 && feld22 == team1 && feld29 == team1 && feld36 == team1 ||
        feld22 == team1 && feld29 == team1 && feld36 == team1 && feld43 == team1 ||
        feld29 == team1 && feld36 == team1 && feld43 == team1 && feld50 == team1 ||
        //2. Spalte
        feld2 == team1 && feld9 == team1 && feld16 == team1 && feld23 == team1 ||
        feld9 == team1 && feld16 == team1 && feld23 == team1 && feld30 == team1 ||
        feld16 == team1 && feld23 == team1 && feld30 == team1 && feld37 == team1 ||
        feld23 == team1 && feld30 == team1 && feld37 == team1 && feld44 == team1 ||
        feld30 == team1 && feld37 == team1 && feld44 == team1 && feld51 == team1 ||
        //3. Spalte
        feld3 == team1 && feld10 == team1 && feld17 == team1 && feld24 == team1 ||
        feld10 == team1 && feld17 == team1 && feld24 == team1 && feld31 == team1 ||
        feld17 == team1 && feld24 == team1 && feld31 == team1 && feld38 == team1 ||
        feld24 == team1 && feld31 == team1 && feld38 == team1 && feld45 == team1 ||
        feld31 == team1 && feld38 == team1 && feld45 == team1 && feld52 == team1 ||
        //4. Spalte
        feld4 == team1 && feld11 == team1 && feld18 == team1 && feld25 == team1 ||
        feld11 == team1 && feld18 == team1 && feld25 == team1 && feld32 == team1 ||
        feld18 == team1 && feld25 == team1 && feld32 == team1 && feld39 == team1 ||
        feld25 == team1 && feld32 == team1 && feld39 == team1 && feld46 == team1 ||
        feld32 == team1 && feld39 == team1 && feld46 == team1 && feld53 == team1 ||
        //5. Spalte
        feld5 == team1 && feld12 == team1 && feld19 == team1 && feld26 == team1 ||
        feld12 == team1 && feld19 == team1 && feld26 == team1 && feld33 == team1 ||
        feld19 == team1 && feld26 == team1 && feld33 == team1 && feld40 == team1 ||
        feld26 == team1 && feld33 == team1 && feld40 == team1 && feld47 == team1 ||
        feld33 == team1 && feld40 == team1 && feld47 == team1 && feld54 == team1 ||
        //6. Spalte
        feld6 == team1 && feld13 == team1 && feld20 == team1 && feld27 == team1 ||
        feld13 == team1 && feld20 == team1 && feld27 == team1 && feld34 == team1 ||
        feld20 == team1 && feld27 == team1 && feld34 == team1 && feld41 == team1 ||
        feld27 == team1 && feld34 == team1 && feld41 == team1 && feld48 == team1 ||
        feld34 == team1 && feld41 == team1 && feld48 == team1 && feld55 == team1 ||
        //7. Spalte
        feld7 == team1 && feld14 == team1 && feld21 == team1 && feld28 == team1 ||
        feld14 == team1 && feld21 == team1 && feld28 == team1 && feld35 == team1 ||
        feld21 == team1 && feld28 == team1 && feld35 == team1 && feld42 == team1 ||
        feld28 == team1 && feld35 == team1 && feld42 == team1 && feld49 == team1 ||
        feld35 == team1 && feld42 == team1 && feld49 == team1 && feld56 == team1 
    ) {
        writeInfo("The Dark Red team won the game. <br> Congratulations!");
        setTimeout(function() {
            location.reload();
        },2000)
    }
}

function TestWinBlue() { //Testet ob das Blau Team gewonnen hat.
    if (
        // 1. Reihe
        feld1 == team2 && feld2 == team2 && feld3 == team2 && feld4 == team2 ||
        feld2 == team2 && feld3 == team2 && feld4 == team2 && feld5 == team2 ||
        feld3 == team2 && feld4 == team2 && feld5 == team2 && feld6 == team2 ||
        feld4 == team2 && feld5 == team2 && feld6 == team2 && feld7 == team2 ||
        // 2. Reihe
        feld8 == team2 && feld9 == team2 && feld10 == team2 && feld11 == team2 ||
        feld9 == team2 && feld10 == team2 && feld11 == team2 && feld12 == team2 ||
        feld10 == team2 && feld11 == team2 && feld12 == team2 && feld13 == team2 ||
        feld11 == team2 && feld12 == team2 && feld13 == team2 && feld14 == team2 ||
        //3. Reihe
        feld15 == team2 && feld16 == team2 && feld17 == team2 && feld18 == team2 ||
        feld16 == team2 && feld17 == team2 && feld18 == team2 && feld19 == team2 ||
        feld17 == team2 && feld18 == team2 && feld19 == team2 && feld20 == team2 ||
        feld18 == team2 && feld19 == team2 && feld20 == team2 && feld21 == team2 ||
        //4.Reihe
        feld22 == team2 && feld23 == team2 && feld24 == team2 && feld25 == team2 ||
        feld23 == team2 && feld24 == team2 && feld25 == team2 && feld26 == team2 ||
        feld24 == team2 && feld25 == team2 && feld26 == team2 && feld27 == team2 ||
        feld25 == team2 && feld26 == team2 && feld27 == team2 && feld28 == team2 ||
        //5. Reihe
        feld29 == team2 && feld30 == team2 && feld31 == team2 && feld32 == team2 ||
        feld30 == team2 && feld31 == team2 && feld32 == team2 && feld33 == team2 ||
        feld31 == team2 && feld32 == team2 && feld33 == team2 && feld34 == team2 ||
        feld32 == team2 && feld33 == team2 && feld34 == team2 && feld35 == team2 ||
        //6. Reihe
        feld36 == team2 && feld37 == team2 && feld38 == team2 && feld39 == team2 ||
        feld37 == team2 && feld38 == team2 && feld39 == team2 && feld40 == team2 ||
        feld38 == team2 && feld39 == team2 && feld40 == team2 && feld41 == team2 ||
        feld39 == team2 && feld40 == team2 && feld41 == team2 && feld42 == team2 ||
        // 7. Reihe
        feld43 == team2 && feld44 == team2 && feld45 == team2 && feld46 == team2 ||
        feld44 == team2 && feld45 == team2 && feld46 == team2 && feld47 == team2 ||
        feld45 == team2 && feld46 == team2 && feld47 == team2 && feld48 == team2 ||
        feld46 == team2 && feld47 == team2 && feld48 == team2 && feld48 == team2 ||
        //8. Reihe
        feld49 == team2 && feld50 == team2 && feld51 == team2 && feld52 == team2 ||
        feld50 == team2 && feld51 == team2 && feld52 == team2 && feld53 == team2 ||
        feld51 == team2 && feld52 == team2 && feld53 == team2 && feld54 == team2 ||
        feld52 == team2 && feld53 == team2 && feld54 == team2 && feld55 == team2 ||
        feld53 == team2 && feld54 == team2 && feld55 == team2 && feld56 == team2 ||
        //1. Spalte
        feld1 == team2 && feld8 == team2 && feld15 == team2 && feld22 == team2 ||
        feld8 == team2 && feld15 == team2 && feld22 == team2 && feld29 == team2 ||
        feld15 == team2 && feld22 == team2 && feld29 == team2 && feld36 == team2 ||
        feld22 == team2 && feld29 == team2 && feld36 == team2 && feld43 == team2 ||
        feld29 == team2 && feld36 == team2 && feld43 == team2 && feld50 == team2 ||
        //2. Spalte
        feld2 == team2 && feld9 == team2 && feld16 == team2 && feld23 == team2 ||
        feld9 == team2 && feld16 == team2 && feld23 == team2 && feld30 == team2 ||
        feld16 == team2 && feld23 == team2 && feld30 == team2 && feld37 == team2 ||
        feld23 == team2 && feld30 == team2 && feld37 == team2 && feld44 == team2 ||
        feld30 == team2 && feld37 == team2 && feld44 == team2 && feld51 == team2 ||
        //3. Spalte
        feld3 == team2 && feld10 == team2 && feld17 == team2 && feld24 == team2 ||
        feld10 == team2 && feld17 == team2 && feld24 == team2 && feld31 == team2 ||
        feld17 == team2 && feld24 == team2 && feld31 == team2 && feld38 == team2 ||
        feld24 == team2 && feld31 == team2 && feld38 == team2 && feld45 == team2 ||
        feld31 == team2 && feld38 == team2 && feld45 == team2 && feld52 == team2 ||
        //4. Spalte
        feld4 == team2 && feld11 == team2 && feld18 == team2 && feld25 == team2 ||
        feld11 == team2 && feld18 == team2 && feld25 == team2 && feld32 == team2 ||
        feld18 == team2 && feld25 == team2 && feld32 == team2 && feld39 == team2 ||
        feld25 == team2 && feld32 == team2 && feld39 == team2 && feld46 == team2 ||
        feld32 == team2 && feld39 == team2 && feld46 == team2 && feld53 == team2 ||
        //5. Spalte
        feld5 == team2 && feld12 == team2 && feld19 == team2 && feld26 == team2 ||
        feld12 == team2 && feld19 == team2 && feld26 == team2 && feld33 == team2 ||
        feld19 == team2 && feld26 == team2 && feld33 == team2 && feld40 == team2 ||
        feld26 == team2 && feld33 == team2 && feld40 == team2 && feld47 == team2 ||
        feld33 == team2 && feld40 == team2 && feld47 == team2 && feld54 == team2 ||
        //6. Spalte
        feld6 == team2 && feld13 == team2 && feld20 == team2 && feld27 == team2 ||
        feld13 == team2 && feld20 == team2 && feld27 == team2 && feld34 == team2 ||
        feld20 == team2 && feld27 == team2 && feld34 == team2 && feld41 == team2 ||
        feld27 == team2 && feld34 == team2 && feld41 == team2 && feld48 == team2 ||
        feld34 == team2 && feld41 == team2 && feld48 == team2 && feld55 == team2 ||
        //7. Spalte
        feld7 == team2 && feld14 == team2 && feld21 == team2 && feld28 == team2 ||
        feld14 == team2 && feld21 == team2 && feld28 == team2 && feld35 == team2 ||
        feld21 == team2 && feld28 == team2 && feld35 == team2 && feld42 == team2 ||
        feld28 == team2 && feld35 == team2 && feld42 == team2 && feld49 == team2 ||
        feld35 == team2 && feld42 == team2 && feld49 == team2 && feld56 == team2 
    ) {
        writeInfo("The Dark Blue team won the game. <br> Congratulations!");
        setTimeout(function() {
            location.reload();
        },2000)
    }
}

function TestWinOrange() { //Testet ob das Orangene Team gewonnen hat. Muss noch überarbeitet werden
    if (
        // 1. Reihe
        feld1 == team3 && feld2 == team3 && feld3 == team3 && feld4 == team3 ||
        feld2 == team3 && feld3 == team3 && feld4 == team3 && feld5 == team3 ||
        feld3 == team3 && feld4 == team3 && feld5 == team3 && feld6 == team3 ||
        feld4 == team3 && feld5 == team3 && feld6 == team3 && feld7 == team3 ||
        // 2. Reihe
        feld8 == team3 && feld9 == team3 && feld10 == team3 && feld11 == team3 ||
        feld9 == team3 && feld10 == team3 && feld11 == team3 && feld12 == team3 ||
        feld10 == team3 && feld11 == team3 && feld12 == team3 && feld13 == team3 ||
        feld11 == team3 && feld12 == team3 && feld13 == team3 && feld14 == team3 ||
        //3. Reihe
        feld15 == team3 && feld16 == team3 && feld17 == team3 && feld18 == team3 ||
        feld16 == team3 && feld17 == team3 && feld18 == team3 && feld19 == team3 ||
        feld17 == team3 && feld18 == team3 && feld19 == team3 && feld20 == team3 ||
        feld18 == team3 && feld19 == team3 && feld20 == team3 && feld21 == team3 ||
        //4.Reihe
        feld22 == team3 && feld23 == team3 && feld24 == team3 && feld25 == team3 ||
        feld23 == team3 && feld24 == team3 && feld25 == team3 && feld26 == team3 ||
        feld24 == team3 && feld25 == team3 && feld26 == team3 && feld27 == team3 ||
        feld25 == team3 && feld26 == team3 && feld27 == team3 && feld28 == team3 ||
        //5. Reihe
        feld29 == team3 && feld30 == team3 && feld31 == team3 && feld32 == team3 ||
        feld30 == team3 && feld31 == team3 && feld32 == team3 && feld33 == team3 ||
        feld31 == team3 && feld32 == team3 && feld33 == team3 && feld34 == team3 ||
        feld32 == team3 && feld33 == team3 && feld34 == team3 && feld35 == team3 ||
        //6. Reihe
        feld36 == team3 && feld37 == team3 && feld38 == team3 && feld39 == team3 ||
        feld37 == team3 && feld38 == team3 && feld39 == team3 && feld40 == team3 ||
        feld38 == team3 && feld39 == team3 && feld40 == team3 && feld41 == team3 ||
        feld39 == team3 && feld40 == team3 && feld41 == team3 && feld42 == team3 ||
        // 7. Reihe
        feld43 == team3 && feld44 == team3 && feld45 == team3 && feld46 == team3 ||
        feld44 == team3 && feld45 == team3 && feld46 == team3 && feld47 == team3 ||
        feld45 == team3 && feld46 == team3 && feld47 == team3 && feld48 == team3 ||
        feld46 == team3 && feld47 == team3 && feld48 == team3 && feld48 == team3 ||
        //8. Reihe
        feld49 == team3 && feld50 == team3 && feld51 == team3 && feld52 == team3 ||
        feld50 == team3 && feld51 == team3 && feld52 == team3 && feld53 == team3 ||
        feld51 == team3 && feld52 == team3 && feld53 == team3 && feld54 == team3 ||
        feld52 == team3 && feld53 == team3 && feld54 == team3 && feld55 == team3 ||
        feld53 == team3 && feld54 == team3 && feld55 == team3 && feld56 == team3 ||
        //1. Spalte
        feld1 == team3 && feld8 == team3 && feld15 == team3 && feld22 == team3 ||
        feld8 == team3 && feld15 == team3 && feld22 == team3 && feld29 == team3 ||
        feld15 == team3 && feld22 == team3 && feld29 == team3 && feld36 == team3 ||
        feld22 == team3 && feld29 == team3 && feld36 == team3 && feld43 == team3 ||
        feld29 == team3 && feld36 == team3 && feld43 == team3 && feld50 == team3 ||
        //2. Spalte
        feld2 == team3 && feld9 == team3 && feld16 == team3 && feld23 == team3 ||
        feld9 == team3 && feld16 == team3 && feld23 == team3 && feld30 == team3 ||
        feld16 == team3 && feld23 == team3 && feld30 == team3 && feld37 == team3 ||
        feld23 == team3 && feld30 == team3 && feld37 == team3 && feld44 == team3 ||
        feld30 == team3 && feld37 == team3 && feld44 == team3 && feld51 == team3 ||
        //3. Spalte
        feld3 == team3 && feld10 == team3 && feld17 == team3 && feld24 == team3 ||
        feld10 == team3 && feld17 == team3 && feld24 == team3 && feld31 == team3 ||
        feld17 == team3 && feld24 == team3 && feld31 == team3 && feld38 == team3 ||
        feld24 == team3 && feld31 == team3 && feld38 == team3 && feld45 == team3 ||
        feld31 == team3 && feld38 == team3 && feld45 == team3 && feld52 == team3 ||
        //4. Spalte
        feld4 == team3 && feld11 == team3 && feld18 == team3 && feld25 == team3 ||
        feld11 == team3 && feld18 == team3 && feld25 == team3 && feld32 == team3 ||
        feld18 == team3 && feld25 == team3 && feld32 == team3 && feld39 == team3 ||
        feld25 == team3 && feld32 == team3 && feld39 == team3 && feld46 == team3 ||
        feld32 == team3 && feld39 == team3 && feld46 == team3 && feld53 == team3 ||
        //5. Spalte
        feld5 == team3 && feld12 == team3 && feld19 == team3 && feld26 == team3 ||
        feld12 == team3 && feld19 == team3 && feld26 == team3 && feld33 == team3 ||
        feld19 == team3 && feld26 == team3 && feld33 == team3 && feld40 == team3 ||
        feld26 == team3 && feld33 == team3 && feld40 == team3 && feld47 == team3 ||
        feld33 == team3 && feld40 == team3 && feld47 == team3 && feld54 == team3 ||
        //6. Spalte
        feld6 == team3 && feld13 == team3 && feld20 == team3 && feld27 == team3 ||
        feld13 == team3 && feld20 == team3 && feld27 == team3 && feld34 == team3 ||
        feld20 == team3 && feld27 == team3 && feld34 == team3 && feld41 == team3 ||
        feld27 == team3 && feld34 == team3 && feld41 == team3 && feld48 == team3 ||
        feld34 == team3 && feld41 == team3 && feld48 == team3 && feld55 == team3 ||
        //7. Spalte
        feld7 == team3 && feld14 == team3 && feld21 == team3 && feld28 == team3 ||
        feld14 == team3 && feld21 == team3 && feld28 == team3 && feld35 == team3 ||
        feld21 == team3 && feld28 == team3 && feld35 == team3 && feld42 == team3 ||
        feld28 == team3 && feld35 == team3 && feld42 == team3 && feld49 == team3 ||
        feld35 == team3 && feld42 == team3 && feld49 == team3 && feld56 == team3 
    ) {
        writeInfo("The dark orange team won the game. <br> Congratulations!");
        setTimeout(function() {
            location.reload();
        },2000)
    }
}

function TestWinGrey() { //Testet ob das Orangene Team gewonnen hat. Muss noch überarbeitet werden
    if (
        // 1. Reihe
        feld1 == team4 && feld2 == team4 && feld3 == team4 && feld4 == team4 ||
        feld2 == team4 && feld3 == team4 && feld4 == team4 && feld5 == team4 ||
        feld3 == team4 && feld4 == team4 && feld5 == team4 && feld6 == team4 ||
        feld4 == team4 && feld5 == team4 && feld6 == team4 && feld7 == team4 ||
        // 2. Reihe
        feld8 == team4 && feld9 == team4 && feld10 == team4 && feld11 == team4 ||
        feld9 == team4 && feld10 == team4 && feld11 == team4 && feld12 == team4 ||
        feld10 == team4 && feld11 == team4 && feld12 == team4 && feld13 == team4 ||
        feld11 == team4 && feld12 == team4 && feld13 == team4 && feld14 == team4 ||
        //3. Reihe
        feld15 == team4 && feld16 == team4 && feld17 == team4 && feld18 == team4 ||
        feld16 == team4 && feld17 == team4 && feld18 == team4 && feld19 == team4 ||
        feld17 == team4 && feld18 == team4 && feld19 == team4 && feld20 == team4 ||
        feld18 == team4 && feld19 == team4 && feld20 == team4 && feld21 == team4 ||
        //4.Reihe
        feld22 == team4 && feld23 == team4 && feld24 == team4 && feld25 == team4 ||
        feld23 == team4 && feld24 == team4 && feld25 == team4 && feld26 == team4 ||
        feld24 == team4 && feld25 == team4 && feld26 == team4 && feld27 == team4 ||
        feld25 == team4 && feld26 == team4 && feld27 == team4 && feld28 == team4 ||
        //5. Reihe
        feld29 == team4 && feld30 == team4 && feld31 == team4 && feld32 == team4 ||
        feld30 == team4 && feld31 == team4 && feld32 == team4 && feld33 == team4 ||
        feld31 == team4 && feld32 == team4 && feld33 == team4 && feld34 == team4 ||
        feld32 == team4 && feld33 == team4 && feld34 == team4 && feld35 == team4 ||
        //6. Reihe
        feld36 == team4 && feld37 == team4 && feld38 == team4 && feld39 == team4 ||
        feld37 == team4 && feld38 == team4 && feld39 == team4 && feld40 == team4 ||
        feld38 == team4 && feld39 == team4 && feld40 == team4 && feld41 == team4 ||
        feld39 == team4 && feld40 == team4 && feld41 == team4 && feld42 == team4 ||
        // 7. Reihe
        feld43 == team4 && feld44 == team4 && feld45 == team4 && feld46 == team4 ||
        feld44 == team4 && feld45 == team4 && feld46 == team4 && feld47 == team4 ||
        feld45 == team4 && feld46 == team4 && feld47 == team4 && feld48 == team4 ||
        feld46 == team4 && feld47 == team4 && feld48 == team4 && feld48 == team4 ||
        //8. Reihe
        feld49 == team4 && feld50 == team4 && feld51 == team4 && feld52 == team4 ||
        feld50 == team4 && feld51 == team4 && feld52 == team4 && feld53 == team4 ||
        feld51 == team4 && feld52 == team4 && feld53 == team4 && feld54 == team4 ||
        feld52 == team4 && feld53 == team4 && feld54 == team4 && feld55 == team4 ||
        feld53 == team4 && feld54 == team4 && feld55 == team4 && feld56 == team4 ||
        //1. Spalte
        feld1 == team4 && feld8 == team4 && feld15 == team4 && feld22 == team4 ||
        feld8 == team4 && feld15 == team4 && feld22 == team4 && feld29 == team4 ||
        feld15 == team4 && feld22 == team4 && feld29 == team4 && feld36 == team4 ||
        feld22 == team4 && feld29 == team4 && feld36 == team4 && feld43 == team4 ||
        feld29 == team4 && feld36 == team4 && feld43 == team4 && feld50 == team4 ||
        //2. Spalte
        feld2 == team4 && feld9 == team4 && feld16 == team4 && feld23 == team4 ||
        feld9 == team4 && feld16 == team4 && feld23 == team4 && feld30 == team4 ||
        feld16 == team4 && feld23 == team4 && feld30 == team4 && feld37 == team4 ||
        feld23 == team4 && feld30 == team4 && feld37 == team4 && feld44 == team4 ||
        feld30 == team4 && feld37 == team4 && feld44 == team4 && feld51 == team4 ||
        //3. Spalte
        feld3 == team4 && feld10 == team4 && feld17 == team4 && feld24 == team4 ||
        feld10 == team4 && feld17 == team4 && feld24 == team4 && feld31 == team4 ||
        feld17 == team4 && feld24 == team4 && feld31 == team4 && feld38 == team4 ||
        feld24 == team4 && feld31 == team4 && feld38 == team4 && feld45 == team4 ||
        feld31 == team4 && feld38 == team4 && feld45 == team4 && feld52 == team4 ||
        //4. Spalte
        feld4 == team4 && feld11 == team4 && feld18 == team4 && feld25 == team4 ||
        feld11 == team4 && feld18 == team4 && feld25 == team4 && feld32 == team4 ||
        feld18 == team4 && feld25 == team4 && feld32 == team4 && feld39 == team4 ||
        feld25 == team4 && feld32 == team4 && feld39 == team4 && feld46 == team4 ||
        feld32 == team4 && feld39 == team4 && feld46 == team4 && feld53 == team4 ||
        //5. Spalte
        feld5 == team4 && feld12 == team4 && feld19 == team4 && feld26 == team4 ||
        feld12 == team4 && feld19 == team4 && feld26 == team4 && feld33 == team4 ||
        feld19 == team4 && feld26 == team4 && feld33 == team4 && feld40 == team4 ||
        feld26 == team4 && feld33 == team4 && feld40 == team4 && feld47 == team4 ||
        feld33 == team4 && feld40 == team4 && feld47 == team4 && feld54 == team4 ||
        //6. Spalte
        feld6 == team4 && feld13 == team4 && feld20 == team4 && feld27 == team4 ||
        feld13 == team4 && feld20 == team4 && feld27 == team4 && feld34 == team4 ||
        feld20 == team4 && feld27 == team4 && feld34 == team4 && feld41 == team4 ||
        feld27 == team4 && feld34 == team4 && feld41 == team4 && feld48 == team4 ||
        feld34 == team4 && feld41 == team4 && feld48 == team4 && feld55 == team4 ||
        //7. Spalte
        feld7 == team4 && feld14 == team4 && feld21 == team4 && feld28 == team4 ||
        feld14 == team4 && feld21 == team4 && feld28 == team4 && feld35 == team4 ||
        feld21 == team4 && feld28 == team4 && feld35 == team4 && feld42 == team4 ||
        feld28 == team4 && feld35 == team4 && feld42 == team4 && feld49 == team4 ||
        feld35 == team4 && feld42 == team4 && feld49 == team4 && feld56 == team4 
    ) {
        writeInfo("The Dark Gray team won the game. <br> Congratulations!");
        setTimeout(function() {
            location.reload();
        },2000)
    }
}

function changeTeam() { //Wechselt das Team
    if (teams == 0) {
        teams = 1;
    } else if (teams == 1) {
        teams = 2;
    }else if(teams == 2) {
        teams = 3;
    }else if(teams == 3) {
        teams = 4;
    }else if(teams == 4) {
        teams = 0;
    }
}
  
function currentPlayer() { //Druckt aus welches Team gerade dran ist.
    if(teams == 0) {
        document.getElementById("currentPlayer").style.backgroundColor = team1;
        document.getElementById("currentPlayer").innerHTML = "Team: It's the Dark Red Team's turn!";
    }else if(teams == 1) {
        document.getElementById("currentPlayer").style.backgroundColor = team2;
        document.getElementById("currentPlayer").innerHTML = "Team: It's the Dark Blue Team's turn!";
    }else if(teams == 2) {
        document.getElementById("currentPlayer").style.backgroundColor = team3;
        document.getElementById("currentPlayer").innerHTML = "Team: It's the dark orange team's turn!";
    }else if(teams == 3) {
        document.getElementById("currentPlayer").style.backgroundColor = team4;
        document.getElementById("currentPlayer").innerHTML = "Team: It's the Dark Gray Team's turn!";
    }else if(teams == 4) {
        document.getElementById("currentPlayer").style.backgroundColor = team0;
        document.getElementById("currentPlayer").innerHTML = "Team: It's the Dark Turquoise team's turn!";
    }else {
        console.log("Please contact our developer to let him know the problem! Email: moinjulian.dev@outlook.com");
    }
}

const infoElement = document.getElementById("info");

function hideInfo() {
    infoElement.style.display = "none";
}

function writeInfo(txt) {
    infoElement.style.display = "block";
    infoElement.innerHTML = txt;
}