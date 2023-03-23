var welc = alert('Welcome To JS Grades Calculator!');
var name = prompt('Please Type Your Full Name');
function grades() {
    var studName;
    var filgrd1,filgrd2,filgrd3,filgrd4,enggrd1,enggrd2,enggrd3,enggrd4,mthgrd1,mthgrd2,mthgrd3,mthgrd4,scigrd1,scigrd2,scigrd3,scigrd4,filavg,engavg,mthavg,sciavg;
    studName = prompt("Please Type Your Student's Full Name");
    filgrd1 = parseFloat(prompt("Please Type Your Student's grades in Filipino First Quarter"));
    filgrd2 = parseFloat(prompt("Please Type Your Student's grades in Filipino Second Quarter"));
    filgrd3 = parseFloat(prompt("Please Type Your Student's grades in Filipino Third Quarter"));
    filgrd4 = parseFloat(prompt("Please Type Your Student's grades in Filipino Fourth Quarter"));
    enggrd1 = parseFloat(prompt("Please Type Your Student's grades in English First Quarter"));
    enggrd2 = parseFloat(prompt("Please Type Your Student's grades in English Second Quarter"));
    enggrd3 = parseFloat(prompt("Please Type Your Student's grades in English Third Quarter"));
    enggrd4 = parseFloat(prompt("Please Type Your Student's grades in English Fourth Quarter"));
    mthgrd1 = parseFloat(prompt("Please Type Your Student's grades in Math First Quarter"));
    mthgrd2 = parseFloat(prompt("Please Type Your Student's grades in Math Second Quarter"));
    mthgrd3 = parseFloat(prompt("Please Type Your Student's grades in Math Third Quarter"));
    mthgrd4 = parseFloat(prompt("Please Type Your Student's grades in Math Fourth Quarter"));
    scigrd1 = parseFloat(prompt("Please Type Your Student's grades in Science First Quarter"));
    scigrd2 = parseFloat(prompt("Please Type Your Student's grades in Science Second Quarter"));
    scigrd3 = parseFloat(prompt("Please Type Your Student's grades in Science Third Quarter"));
    scigrd4 = parseFloat(prompt("Please Type Your Student's grades in Science Fourth Quarter"));
    filavg = (filgrd1+filgrd2+filgrd3+filgrd4)/4;
    engavg = (enggrd1+enggrd2+enggrd3+enggrd4)/4;
    mthavg = (mthgrd1+mthgrd2+mthgrd3+mthgrd4)/4;
    sciavg = (scigrd1+scigrd2+scigrd3+scigrd4)/4;
    genavg = (filavg+engavg+sciavg+mthavg)/4;
    const studObj = {
        name: studName,
        fil: {
            fst: filgrd1,
            scd: filgrd2,
            trd: filgrd3,
            fth: filgrd4,
        },
        eng: {
            fst: enggrd1,
            scd: enggrd2,
            trd: enggrd3,
            fth: enggrd4,
        },
        math: {
            fst: mthgrd1,
            scd: mthgrd2,
            trd: mthgrd3,
            fth: mthgrd4,
        },
        sci: {
            fst: scigrd1,
            scd: scigrd2,
            trd: scigrd3,
            fth: scigrd4,
        },
        avg: {
            fil: filavg,
            eng: engavg,
            mth: mthavg,
            sci: sciavg,
        },
        gen: genavg,
    }
    studObj;
    
    document.getElementById(filfst).innerHTML = studObj.fil.fst;
    document.getElementById(filscd).innerHTML = studObj.fil.scd;
    document.getElementById(filtrd).innerHTML = studObj.fil.trd;
    document.getElementById(filfth).innerHTML = studObj.fil.fth;
    document.getElementById(engfst).innerHTML = studObj.eng.fst;
    document.getElementById(engscd).innerHTML = studObj.eng.scd;
    document.getElementById(engtrd).innerHTML = studObj.eng.trd;
    document.getElementById(engfth).innerHTML = studObj.eng.fth;
    document.getElementById(mthfst).innerHTML = studObj.mth.fst;
    document.getElementById(mthscd).innerHTML = studObj.mth.scd;
    document.getElementById(mthtrd).innerHTML = studObj.mth.trd;
    document.getElementById(mthfth).innerHTML = studObj.mth.fth;
    document.getElementById(scifst).innerHTML = studObj.sci.fst;
    document.getElementById(sciscd).innerHTML = studObj.sci.scd;
    document.getElementById(scitrd).innerHTML = studObj.sci.trd;
    document.getElementById(scifth).innerHTML = studObj.sci.fth;
    document.getElementById(genavg).innerHTML = studObj.gen;
}
grades();