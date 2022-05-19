document.getElementById("end").addEventListener("click", function(){

    fetch('https://nicolasabule.github.io/tftrolling/rollingodds.json')
        .then(response => response.json())
        .then(data => {

            const t1 = JSON.stringify(data);
            const t2 = JSON.parse(t1);

            var level = document.getElementById('level').value;
            var tierbuy = document.getElementById('tierbuy').value;
            var totalc = document.getElementById('totalc').value;
            var totalp = document.getElementById('totalp').value;

            var t2lvl;
            var t2pool;
            var t2max;

            console.log(t2);

            switch (level){
                case "1":
                    t2lvl = t2.lvl1;
                    break;
                case "2":
                    t2lvl = t2.lvl2;
                    break;
                case "3":
                    t2lvl = t2.lvl3;
                    break;
                case "4":
                    t2lvl = t2.lvl4;
                    break;
                case "5":
                    t2lvl = t2.lvl5;
                    break;
                case "6":
                    t2lvl = t2.lvl6;
                    break;
                case "7":
                    t2lvl = t2.lvl7;
                    break;
                case "8":
                    t2lvl = t2.lvl8;
                    break;
                case "9":
                    t2lvl = t2.lvl9;
                    break;
                case "10":
                    t2lvl = t2.lvl10;
                    break;
                case "11":
                    t2lvl = t2.lvl11;
                    break;
            }

            switch (tierbuy){
                case "1":
                    t2lvl = t2lvl.tier1;
                    t2pool = t2.pool.tier1;
                    t2max = t2.pool2.tier1;
                    break;
                case "2":
                    t2lvl = t2lvl.tier2;
                    t2pool = t2.pool.tier2;
                    t2max = t2.pool2.tier2;
                    break;
                case "3":
                    t2lvl = t2lvl.tier3;
                    t2pool = t2.pool.tier3;
                    t2max = t2.pool2.tier3;
                    break;
                case "4":
                    t2lvl = t2lvl.tier4;
                    t2pool = t2.pool.tier4;
                    t2max = t2.pool2.tier4;
                    break;
                case "5":
                    t2lvl = t2lvl.tier5;
                    t2pool = t2.pool.tier5;
                    t2max = t2.pool2.tier5;
                    break;
            }

            document.getElementById("result").innerHTML = "for one champion ev is " + onePercentage(t2lvl, t2pool, t2max, totalc, totalp);
        });
        
});

var onePercentage = function(poolPercentage, pool, poolMax, totalc, totalp){

    var sum;
    const remainingPool = poolMax - totalp;
    
    sum = (((pool - totalc)/remainingPool) * poolPercentage/20);
    
    return 1/sum;

}