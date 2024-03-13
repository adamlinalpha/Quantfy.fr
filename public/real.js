  // Charger la bibliothèque Google Charts
  google.charts.load('current', {'packages':['corechart']});
        
  // Définir la fonction de dessin pour créer le graphique
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
      // Créer un tableau de données avec 5 courbes sur 50 périodes
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Période');
      data.addColumn('number', 'Percentile 10');
      data.addColumn('number', 'Percentile 25');
      data.addColumn('number', 'Percentile 50');
      data.addColumn('number', 'Percentile 75');
      data.addColumn('number', 'Percentile 90');

      var rows = [
        [
            1,
            100,
            100,
            100,
            100,
            100
        ],
        [
            2,
            98,
            99,
            100,
            101,
            102
        ],
        [
            3,
            96,
            97,
            100,
            102,
            104
        ],
        [
            4,
            94,
            96,
            100,
            103,
            106
        ],
        [
            5,
            92,
            95,
            100,
            104,
            108
        ],
        [
            6,
            90,
            94,
            100,
            105,
            110
        ],
        [
            7,
            88,
            93,
            100,
            106,
            112
        ],
        [
            8,
            86,
            92,
            100,
            107,
            114
        ],
        [
            9,
            84,
            91,
            100,
            108,
            116
        ],
        [
            10,
            83,
            90,
            100,
            109,
            118
        ],
        [
            11,
            81,
            89,
            100,
            110,
            120
        ],
        [
            12,
            79,
            88,
            100,
            111,
            122
        ],
        [
            13,
            75,
            86,
            100,
            113,
            127
        ],
        [
            14,
            71,
            84,
            100,
            115,
            131
        ],
        [
            15,
            67,
            82,
            100,
            117,
            135
        ],
        [
            16,
            63,
            80,
            100,
            119,
            139
        ],
        [
            17,
            59,
            78,
            100,
            121,
            143
        ],
        [
            18,
            55,
            76,
            100,
            123,
            147
        ],
        [
            19,
            51,
            74,
            100,
            125,
            151
        ],
        [
            20,
            47,
            72,
            100,
            127,
            155
        ]
    ];

      data.addRows(rows);

      // Définir les options du graphique
      var options = {
          curveType: 'function',
          legend: {
              position: 'bottom',
              textStyle: {
                  fontSize: 13,
                  color: '#ffffff'  // Couleur du texte de la légende
              }
          },
          backgroundColor: '#000130',  // Couleur de l'arrière-plan
          hAxis: {
              textStyle: {
                  color: '#ffffff'  // Couleur du texte de l'axe horizontal
              }
          },
          vAxis: {
              textStyle: {
                  color: '#ffffff'  // Couleur du texte de l'axe vertical
              }
          }
      };

      // Créer un objet de graphique de ligne et le dessiner dans la div avec l'ID "chart_div"
      var chart = new google.visualization.LineChart(document.getElementById('chart_div_real'));
      chart.draw(data, options);
  }