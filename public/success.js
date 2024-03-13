google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      // Simulation de données (exemples)
      var years = 20;
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Year');
      data.addColumn('number', 'Nombre de Portefeuilles');

      // Remplacez ces valeurs par les résultats réels de votre simulation
      data.addRow([1, 100]);
      data.addRow([2, 99]);
      data.addRow([3, 98]);
      data.addRow([4, 97.5]);
      data.addRow([5, 96]);
      data.addRow([6, 94]);
      data.addRow([7, 92]);
      data.addRow([8, 89.5]);
      data.addRow([9, 87]);
      data.addRow([10, 84]);
      data.addRow([11, 81]);
      data.addRow([12, 77]);
      data.addRow([13, 73]);
      data.addRow([14, 68]);
      data.addRow([15, 63]);
      data.addRow([16, 58]);
      data.addRow([17, 53]);
      data.addRow([18, 48]);
      data.addRow([19, 43]);
      data.addRow([20, 38]);
    

      var options = {
        curveType: 'function',
        legend: { position: 'bottom', textStyle: { color: '#ffffff' } }, // Couleur de la légende
        isStacked: true,
        colors: ['#3366cc'],
        backgroundColor: { fill: '#000130' }, // Couleur de l'arrière-plan
        titleTextStyle: { color: '#ffffff', display: 'none' }, // Supprime le titre
        hAxis: { textStyle: { color: '#ffffff' } }, // Couleur du texte de l'axe horizontal
        vAxis: { textStyle: { color: '#ffffff' } } // Couleur du texte de l'axe vertical
      };

      var chart = new google.visualization.AreaChart(document.getElementById('area_chart'));

      chart.draw(data, options);
    }