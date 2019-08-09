window.addEventListener("load", function(){

    document.getElementById("menuToggleButton").addEventListener("click", function(){
        let navbar = document.getElementById("navbar");
        if(navbar.style.display == "none"){
            navbar.style.display = "block";
        } else {
            navbar.style.display = "none";
        }
    });

    document.getElementById("buttonToogle").addEventListener("click", function(){
        let button = document.getElementById("input");
        let currentValue = document.getElementById("input").placeholder

        let firstRow = document.getElementById("firstRow");
        let secondRow = document.getElementById("secondRow");
        let showUnit = document.getElementById("showUnit");
   
        if(secondRow.style.display == "none"){
            secondRow.style.display = "block";
        } else {
            secondRow.style.display = "none";
        }

        if(firstRow.style.display == "block"){
            firstRow.style.display = "none";
        } else {
            firstRow.style.display = "block";
        }

        if(showUnit.style.display == "inline-block"){
            showUnit.style.display = "none";
        } else {
            showUnit.style.display = "inline-block";
        }
    });
    document.getElementById("buttonCalc").addEventListener("click", function(){
        let input = document.getElementById("input");
        let unit = document.getElementById("selectunit");
        let result = 0;
        let unitPr0 = "";
        switch(unit.value){
            case "Fussballfeld":
                result = input.value / 52.941;
                break;
            case "Millimeter":
                result = input.value * 1700;
                break;
            case "Zentimeter":
                result = input.value * 170;
                break;
            case "Meter":
                result = input.value * 1.7;
                break;
            case "Kilometer":
                result = input.value * 0.0017;
                break;
            case "Quadratmeter":
                result = input.value * 1.275;
                break;
            case "Kubikmeter":
                result = input.value * 0.75225;
                break;
            case "Liter":
                result = input.value * 140;
                break;
            case "Euro":
                result = input.value * 2586.97;
                break;
            case "US-Dollar":
                result = input.value * 2923.2761;
                break;
            case "Kilogramm":
                result = input.value * 595.0031;
                break;
            case "Kilojoule":
                result = input.value * 266.59;
                break;
            case "Kilowatt":
                result = input.value * 266.59;
                break;
            default:
        }

        switch(unit.value){
            case "Fussballfeld":
                unitPr0 = "Badewannenlänge:";
                break;
            case "Millimeter":
                unitPr0 = "Badewannenlänge:";
                break;
            case "Zentimeter":
                unitPr0 = "Badewannenlänge:";
                break;
            case "Meter":
                unitPr0 = "Badewannenlänge:";
                break;
            case "Kilometer":
                unitPr0 = "Badewannenlänge:";
                break;
            case "Quadratmeter":
                unitPr0 = "Flächenwanne:";
                break;
            case "Kubikmeter":
                unitPr0 = "Raumwanne:";
                break;
            case "Liter":
                unitPr0 = "Festwanne:";
                break;
            case "Euro":
                unitPr0 = "Geldwanne:";
                break;
            case "US-Dollar":
                unitPr0 = "Geldwanne:";
                break;
            case "Kilogramm":
                unitPr0 = "Wägewertwanne:";
                break;
            case "Kilojoule":
                unitPr0 = "Energiewanne:";
                break;
            case "Kilowatt":
                unitPr0 = "Leistungswanne:";
                break;
            default:
        }
        document.getElementById("showUnitPr0").value = unitPr0;
        document.getElementById("showUnit").value = unit.value;
        document.getElementById("output").value = result;
    });

    function printUnit(){
        let unit = document.getElementById("selectunit_metricToWanne");
        let unitPr0 = "";

        switch(unit.value){
            case "Fussballfeld":
                unitPr0 = "Badewannenlänge:";
                break;
            case "Millimeter":
                unitPr0 = "Badewannenlänge:";
                break;
            case "Zentimeter":
                unitPr0 = "Badewannenlänge:";
                break;
            case "Meter":
                unitPr0 = "Badewannenlänge:";
                break;
            case "Kilometer":
                unitPr0 = "Badewannenlänge:";
                break;
            case "Quadratmeter":
                unitPr0 = "Flächenwanne:";
                break;
            case "Kubikmeter":
                unitPr0 = "Raumwanne:";
                break;
            case "Liter":
                unitPr0 = "Festwanne:";
                break;
            case "Euro":
                unitPr0 = "Geldwanne:";
                break;
            case "US-Dollar":
                unitPr0 = "Geldwanne:";
                break;
            case "Kilogramm":
                unitPr0 = "Wägewertwanne:";
                break;
            case "Kilojoule":
                unitPr0 = "Energiewanne:";
                break;
            case "Kilowatt":
                unitPr0 = "Leistungswanne:";
                break;
            default:
        }
        document.getElementById("textForCalcualtor").value = unitPr0;
    }

    document.getElementById("input_metricToWanne").addEventListener("click", function(){
        printUnit();
    });

    document.getElementById("selectunit_metricToWanne").addEventListener("click", function(){
        printUnit();
    });

    document.getElementById("buttonCalc_metricToWanne").addEventListener("click", function(){
        let input = document.getElementById("input_metricToWanne");
        let unit = document.getElementById("selectunit_metricToWanne");
        let result = 0;
        let unitPr0 = "";

        switch(unit.value){
            case "Fussballfeld":
                result = input.value * 52.941;
                break;
            case "Millimeter":
                result = input.value / 1700;
                break;
            case "Zentimeter":
                result = input.value / 170;
                break;
            case "Meter":
                result = input.value / 1.7;
                break;
            case "Kilometer":
                result = input.value / 0.0017;
                break;
            case "Quadratmeter":
                result = input.value / 1.275;
                break;
            case "Kubikmeter":
                result = input.value / 0.75225;
                break;
            case "Liter":
                result = input.value / 140;
                break;
            case "Euro":
                result = input.value / 2586.97;
                break;
            case "US-Dollar":
                result = input.value / 2923.2761;
                break;
            case "Kilogramm":
                result = input.value / 595.0031;
                break;
            case "Kilojoule":
                result = input.value / 266.59;
                break;
            case "Kilowatt":
                result = input.value / 266.59;
                break;
            default:
        }

        switch(unit.value){
            case "Fussballfeld":
                unitPr0 = "Badewannenlänge:";
                break;
            case "Millimeter":
                unitPr0 = "Badewannenlänge:";
                break;
            case "Zentimeter":
                unitPr0 = "Badewannenlänge:";
                break;
            case "Meter":
                unitPr0 = "Badewannenlänge:";
                break;
            case "Kilometer":
                unitPr0 = "Badewannenlänge:";
                break;
            case "Quadratmeter":
                unitPr0 = "Flächenwanne:";
                break;
            case "Kubikmeter":
                unitPr0 = "Raumwanne:";
                break;
            case "Liter":
                unitPr0 = "Festwanne:";
                break;
            case "Euro":
                unitPr0 = "Geldwanne:";
                break;
            case "US-Dollar":
                unitPr0 = "Geldwanne:";
                break;
            case "Kilogramm":
                unitPr0 = "Wägewertwanne:";
                break;
            case "Kilojoule":
                unitPr0 = "Energiewanne:";
                break;
            case "Kilowatt":
                unitPr0 = "Leistungswanne:";
                break;
            default:
        }

        document.getElementById("showUnitPr0").value = unitPr0;
        document.getElementById("showUnit").value = unit.value;
        document.getElementById("output").value = result;
    });
});