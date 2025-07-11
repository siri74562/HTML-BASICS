const countrySelect = document.getElementById('countrySelect');
        const lastUpdatedEl = document.getElementById('lastUpdated');
        const confirmedEl = document.getElementById('confirmed');
        const recoveredEl = document.getElementById('recovered');
        const deathsEl = document.getElementById('deaths');
        const activeEl = document.getElementById('active');
        const confirmedChangeEl = document.getElementById('confirmedChange');
        const recoveredChangeEl = document.getElementById('recoveredChange');
        const deathsChangeEl = document.getElementById('deathsChange');
        const activeChangeEl = document.getElementById('activeChange');

        let dailyChart;
        let distributionChart;

        function formatNumber(num) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        async function fetchData(country = 'global') {
            try {
                let url;
                if (country === 'global') {
                    url = 'https://disease.sh/v3/covid-19/all';
                } else {
                    url = `https://disease.sh/v3/covid-19/countries/${country}`;
                }

                const response = await fetch(url);
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error fetching data:', error);
                return null;
            }
        }
        async function fetchHistoricalData(country = 'global') {
            try {
                let url;
                if (country === 'global') {
                    url = 'https://disease.sh/v3/covid-19/historical/all?lastdays=30';
                } else {
                    url = `https://disease.sh/v3/covid-19/historical/${country}?lastdays=30`;
                }

                const response = await fetch(url);
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error fetching historical data:', error);
                return null;
            }
        }

        function updateDashboard(data) {
            // Update last updated time
            const lastUpdated = new Date(data.updated);
            lastUpdatedEl.textContent = lastUpdated.toLocaleString();

            // Update main stats
            confirmedEl.textContent = formatNumber(data.cases);
            recoveredEl.textContent = formatNumber(data.recovered);
            deathsEl.textContent = formatNumber(data.deaths);
            activeEl.textContent = formatNumber(data.active);

            // Update today's changes
            updateChangeElement(confirmedChangeEl, data.todayCases);
            updateChangeElement(recoveredChangeEl, data.todayRecovered);
            updateChangeElement(deathsChangeEl, data.todayDeaths);
            updateChangeElement(activeChangeEl, data.todayCases - data.todayRecovered - data.todayDeaths);
        }

        function updateChangeElement(element, value) {
            const changeValue = Math.abs(value);
            const span = element.querySelector('span');
            span.textContent = formatNumber(changeValue);

            // Update icon and color based on value
            if (value > 0) {
                element.className = 'card-change positive';
                element.querySelector('i').className = 'fas fa-caret-up';
            } else if (value < 0) {
                element.className = 'card-change negative';
                element.querySelector('i').className = 'fas fa-caret-down';
            } else {
                element.className = 'card-change';
                element.querySelector('i').className = 'fas fa-minus';
            }
        }

        // Create or update charts
        function updateCharts(historicalData, country) {
            // Prepare data for daily cases chart
            let casesData = historicalData.cases ? Object.values(historicalData.cases) : Object.values(historicalData.timeline.cases);
            let dates = historicalData.cases ? Object.keys(historicalData.cases) : Object.keys(historicalData.timeline.cases);

            // Calculate daily new cases
            let dailyCases = [];
            for (let i = 1; i < casesData.length; i++) {
                dailyCases.push(casesData[i] - casesData[i - 1]);
            }
            dates = dates.slice(1); // Remove first date since we don't have a previous day to compare

            // Create or update daily cases chart
            const dailyCtx = document.getElementById('dailyChart').getContext('2d');
            
            if (dailyChart) {
                dailyChart.data.labels = dates;
                dailyChart.data.datasets[0].data = dailyCases;
                dailyChart.update();
            } else {
                dailyChart = new Chart(dailyCtx, {
                    type: 'line',
                    data: {
                        labels: dates,
                        datasets: [{
                            label: 'Daily New Cases',
                            data: dailyCases,
                            backgroundColor: 'rgba(255, 107, 107, 0.2)',
                            borderColor: 'rgba(255, 107, 107, 1)',
                            borderWidth: 2,
                            tension: 0.4,
                            fill: true
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            title: {
                                display: true,
                                text: `Daily New Cases in ${country === 'global' ? 'the World' : country}`
                            },
                            legend: {
                                display: false
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true,
                                title: {
                                    display: true,
                                    text: 'Number of Cases'
                                }
                            },
                            x: {
                                title: {
                                    display: true,
                                    text: 'Date'
                                }
                            }
                        }
                    }
                });
            }

            // Prepare data for distribution chart
            let distributionData;
            if (country === 'global') {
                distributionData = {
                    active: activeEl.textContent.replace(/,/g, ''),
                    recovered: recoveredEl.textContent.replace(/,/g, ''),
                    deaths: deathsEl.textContent.replace(/,/g, '')
                };
            } else {
                distributionData = {
                    active: activeEl.textContent.replace(/,/g, ''),
                    recovered: recoveredEl.textContent.replace(/,/g, ''),
                    deaths: deathsEl.textContent.replace(/,/g, '')
                };
            }

            // Create or update distribution chart
            const distributionCtx = document.getElementById('distributionChart').getContext('2d');
            
            if (distributionChart) {
                distributionChart.data.datasets[0].data = [
                    distributionData.active,
                    distributionData.recovered,
                    distributionData.deaths
                ];
                distributionChart.update();
            } else {
                distributionChart = new Chart(distributionCtx, {
                    type: 'doughnut',
                    data: {
                        labels: ['Active', 'Recovered', 'Deaths'],
                        datasets: [{
                            data: [
                                distributionData.active,
                                distributionData.recovered,
                                distributionData.deaths
                            ],
                            backgroundColor: [
                                'rgba(51, 154, 240, 0.7)',
                                'rgba(81, 207, 102, 0.7)',
                                'rgba(134, 142, 150, 0.7)'
                            ],
                            borderColor: [
                                'rgba(51, 154, 240, 1)',
                                'rgba(81, 207, 102, 1)',
                                'rgba(134, 142, 150, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            title: {
                                display: true,
                                text: `Cases Distribution in ${country === 'global' ? 'the World' : country}`
                            },
                            legend: {
                                position: 'bottom'
                            }
                        },
                        cutout: '70%'
                    }
                });
            }
        }

        // Load data for selected country
        async function loadData(country = 'global') {
            // Show loading state
            document.querySelectorAll('.card-value').forEach(el => el.textContent = '...');
            document.querySelectorAll('.card-change span').forEach(el => el.textContent = '...');

            // Fetch data
            const data = await fetchData(country);
            const historicalData = await fetchHistoricalData(country);

            if (data && historicalData) {
                updateDashboard(data);
                updateCharts(historicalData, country);
            }
        }

        // Event listener for country selection
        countrySelect.addEventListener('change', (e) => {
            loadData(e.target.value);
        });

        // Initialize dashboard with global data
        loadData();