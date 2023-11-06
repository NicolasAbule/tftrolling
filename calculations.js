var chartWeb = document.getElementById("myChart");

var chart = new Chart(chartWeb, {
    type: "bar",
    data: {
        labels: ['1','2','3'],
        datasets: [{
            label: "average amount of rolls to get # of units",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
            color: '#000000'
		}]
	},
	options: {
		scales: {
			y: {
				suggestedMin: 0,
				suggestedMax: 25,
				beginAtZero: true
			}
		},
    }
})

function onePercentage(poolPercentage, pool, poolMax, totalc, totalp, num){

    var sum;
    var remainingPool = poolMax - totalp;
    
    sum = (((pool - totalc)/remainingPool) * poolPercentage/20);

    if ((pool - totalc) <= 0){sum = 0};
    
    var rolls = (1/sum);
    
    if (num > 1) {return (rolls + (onePercentage(poolPercentage, pool, poolMax, totalc + 1, totalp + 1, num - 1)));}

    return rolls;

}

function levelChange(level){

    document.getElementById("level").value = level;
    change();

}

function tierChange(tier){

    document.getElementById("tierbuy").value = tier;
    change();

}

function change(){

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

            document.getElementById("result").innerHTML = "for one champion ev is " + onePercentage(t2lvl, t2pool, t2max, totalc, totalp, 1) + " rolls";
            chartChange(t2lvl, t2pool, t2max, totalc, totalp);
        });
        
}

function chartChange(poolPercentage, pool, poolMax, totalc, totalp){

    chart.data.datasets = [{
        label: "average amount of rolls to get # of units",
        data: [onePercentage(poolPercentage, pool, poolMax, totalc, totalp, 1), onePercentage(poolPercentage, pool, poolMax, totalc, totalp, 2),
            onePercentage(poolPercentage, pool, poolMax, totalc, totalp, 3)]
    }];
    chart.update();

}