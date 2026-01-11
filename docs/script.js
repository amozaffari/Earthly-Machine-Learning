// Episode data from markdown files
const episodes2025 = [
    { episode: 1, name: "GenCast", title: "Probabilistic weather forecasting with machine learning", doi: "https://doi.org/10.1038/s41586-024-08252-9", podcast: null, year: 2025 },
    { episode: 2, name: "Robustness of AI Weather", title: "Robustness of AI-based weather forecasts in a changing climate", doi: "https://doi.org/10.48550/arXiv.2409.18529", podcast: null, year: 2025 },
    { episode: 3, name: "AIFS", title: "AIFS: ECMWF's data-driven forecasting system", doi: "https://doi.org/10.48550/arXiv.2406.01465", podcast: null, year: 2025 },
    { episode: 4, name: "Deep Learning for Tipping", title: "Deep learning for predicting rate-induced tipping", doi: "https://doi.org/10.1038/s42256-024-00937-0", podcast: null, year: 2025 },
    { episode: 5, name: "NeuralGCM", title: "Neural general circulation models for weather and climate", doi: "https://doi.org/10.1038/s41586-024-07744-y", podcast: null, year: 2025 },
    { episode: 6, name: "Prithvi WxC", title: "Prithvi WxC: Foundation model for weather and climate", doi: "https://doi.org/10.48550/arXiv.2409.13598", podcast: null, year: 2025 },
    { episode: 7, name: "Aardvark Weather", title: "Aardvark Weather: End-to-End Data-Driven Weather Forecasting", doi: "https://doi.org/10.48550/arXiv.2404.00411", podcast: null, year: 2025 },
    { episode: 8, name: "Bias in AI/ML", title: "Identifying and Categorizing Bias in AI/ML for Earth Sciences", doi: "https://doi.org/10.1175/BAMS-D-23-0196.1", podcast: null, year: 2025 },
    { episode: 9, name: "SFNO", title: "Spherical fourier neural operators: Learning stable dynamics on the sphere", doi: "https://doi.org/10.48550/arXiv.2306.03838", podcast: null, year: 2025 },
    { episode: 10, name: "FuXi-ENS", title: "FuXi-ENS: A machine learning model for medium-range ensemble weather forecasting", doi: "https://doi.org/10.48550/arXiv.2405.05925", podcast: null, year: 2025 },
    { episode: 11, name: "WeatherBench 2", title: "WeatherBench 2: A benchmark for the next generation of data‐driven global weather models", doi: "https://doi.org/10.48550/arXiv.2308.15560", podcast: null, year: 2025 },
    { episode: 12, name: "ACE", title: "ACE: A fast, skillful learned global atmospheric model for climate prediction", doi: "https://doi.org/10.48550/arXiv.2310.02074", podcast: null, year: 2025 },
    { episode: 13, name: "AURORA", title: "Aurora: A foundation model of the atmosphere", doi: "https://doi.org/10.48550/arXiv.2405.13063", podcast: null, year: 2025 },
    { episode: 14, name: "ACE2", title: "ACE2: Accurately learning subseasonal to decadal atmospheric variability and forced responses", doi: "https://doi.org/10.48550/arXiv.2411.11268", podcast: null, year: 2025 },
    { episode: 15, name: "Land Surface Forecasting", title: "Advances in Land Surface Model-based Forecasting", doi: "https://doi.org/10.5194/egusphere-2024-2081", podcast: null, year: 2025 },
    { episode: 16, name: "ARCHESWEATHER", title: "AI foundation models for weather and climate: Applications, design, and implementation", doi: "https://doi.org/10.48550/arXiv.2405.14527", podcast: null, year: 2025 },
    { episode: 17, name: "DiffDA", title: "DiffDA: A diffusion model for weather-scale data assimilation", doi: "https://doi.org/10.48550/arXiv.2401.05932", podcast: null, year: 2025 },
    { episode: 18, name: "GRAPHDOP", title: "GraphDOP: Towards skilful data-driven medium-range weather forecasts", doi: "https://doi.org/10.48550/arXiv.2412.15687", podcast: null, year: 2025 },
    { episode: 19, name: "Pangu-Weather", title: "Accurate medium-range global weather forecasting with 3D neural networks", doi: "https://doi.org/10.1038/s41586-023-06185-3", podcast: null, year: 2025 },
    { episode: 20, name: "Explainable AI Climate", title: "Finding the right XAI method—A guide for the evaluation and ranking of explainable AI methods", doi: "https://doi.org/10.48550/arXiv.2303.00652", podcast: null, year: 2025 },
    { episode: 21, name: "AtmoRep", title: "AtmoRep: A stochastic model of atmosphere dynamics using large scale representation learning", doi: "https://doi.org/10.48550/arXiv.2308.13280", podcast: null, year: 2025 },
    { episode: 22, name: "KGML-ag-Carbon", title: "Knowledge-guided machine learning can improve carbon cycle quantification in agroecosystems", doi: "https://doi.org/10.1038/s41467-023-43860-5", podcast: null, year: 2025 },
    { episode: 23, name: "FourCastNet", title: "FourCastNet: Accelerating global high-resolution weather forecasting", doi: "https://doi.org/10.1145/3592979.3593412", podcast: null, year: 2025 },
    { episode: 24, name: "AI Climate Modelling", title: "AI-empowered next-generation multiscale climate modelling for mitigation and adaptation", doi: "https://doi.org/10.1038/s41561-024-01527-w", podcast: null, year: 2025 },
    { episode: 25, name: "ClimaX", title: "ClimaX: A foundation model for weather and climate", doi: "https://doi.org/10.48550/arXiv.2301.10343", podcast: null, year: 2025 },
    { episode: 26, name: "Climate-Invariant ML", title: "Climate-invariant machine learning", doi: "https://doi.org/10.1126/sciadv.adj7250", podcast: null, year: 2025 },
    { episode: 27, name: "Spherical Harmonic Loss", title: "Fixing the Double Penalty in Data-Driven Weather Forecasting", doi: "https://doi.org/10.48550/arXiv.2501.19374", podcast: null, year: 2025 },
    { episode: 28, name: "AI for Extreme Events", title: "Artificial intelligence for modeling and understanding extreme weather and climate events", doi: "https://doi.org/10.1038/s41467-025-56573-8", podcast: null, year: 2025 },
    { episode: 29, name: "ML Weather Limitations", title: "On Some Limitations of Current Machine Learning Weather Prediction Models", doi: "https://doi.org/10.1029/2023GL107377", podcast: "https://open.spotify.com/episode/4m8fvXMZgqaRHFcNENhPLh", year: 2025 },
    { episode: 30, name: "Early Warning AI", title: "Early warning of complex climate risk with integrated artificial intelligence", doi: "https://doi.org/10.1038/s41467-025-57640-w", podcast: "https://open.spotify.com/episode/7HBioDgzyJPQ7D8vSYkIBM", year: 2025 },
    { episode: 31, name: "AI vs Physics Models", title: "Do AI models produce better weather forecasts than physics-based models?", doi: "https://doi.org/10.1038/s41586-024-08252-9", podcast: "https://open.spotify.com/episode/5GAmrYg0E9lGwDE1i0oVwl", year: 2025 },
    { episode: 32, name: "Probabilistic Climate", title: "Probabilistic Emulation of a Global Climate Model with Spherical Diffusion", doi: "https://doi.org/10.48550/arXiv.2401.05932", podcast: "https://open.spotify.com/episode/5jqVrJ8kImbskBrcU8RKpb", year: 2025 },
    { episode: 33, name: "Gray Swan Cyclones", title: "Can AI weather models predict out-of-distribution gray swan tropical cyclones?", doi: "https://doi.org/10.1038/s41586-024-08252-9", podcast: "https://open.spotify.com/episode/2z5JTBrv9VkZ0F0SknPWFl", year: 2025 },
    { episode: 34, name: "FourCastNet 3", title: "FourCastNet 3: A geometric approach to probabilistic machine-learning weather forecasting at scale", doi: "https://doi.org/10.1145/3592979.3593412", podcast: "https://open.spotify.com/episode/4ABuJ0PRyDC3SY7rIvAywj", year: 2025 },
    { episode: 35, name: "Data-to-Forecast System", title: "A data-to-forecast machine learning system for global weather", doi: "https://doi.org/10.48550/arXiv.2401.05932", podcast: null, year: 2025 },
    { episode: 36, name: "XiChen", title: "XiChen: An observation-scalable fully AI-driven global weather forecasting system with 4D variational knowledge", doi: "https://doi.org/10.48550/arXiv.2401.05932", podcast: "https://open.spotify.com/episode/6dP1Eed2PQ3JLdXPY9OSr6", year: 2025 },
    { episode: 37, name: "Jigsaw Training", title: "Jigsaw Training Multi-Billion-Parameter AIWeather Models With Optimized Model Parallelism", doi: "https://doi.org/10.48550/arXiv.2401.05932", podcast: null, year: 2025 },
    { episode: 38, name: "Probabilistic Measures", title: "Probabilistic measures afford fair comparisons of AIWP and NWP model output", doi: "https://doi.org/10.48550/arXiv.2401.05932", podcast: null, year: 2025 },
    { episode: 39, name: "Climate in a Bottle", title: "Climate in a Bottle: Towards a Generative Foundation Model for the Kilometer-Scale Global Atmosphere", doi: "https://doi.org/10.48550/arXiv.2401.05932", podcast: null, year: 2025 },
    { episode: 40, name: "Beyond Training Data", title: "Beyond the Training Data: Confidence-Guided Mixing of Parameterizations in a Hybrid AI-Climate Model", doi: "https://doi.org/10.48550/arXiv.2401.05932", podcast: null, year: 2025 },
    { episode: 41, name: "FuXi-Ocean", title: "FuXi-Ocean: A Global Ocean Forecasting System with Sub-Daily Resolution", doi: "https://doi.org/10.48550/arXiv.2401.05932", podcast: null, year: 2025 },
    { episode: 42, name: "Score-based Diffusion", title: "Score-based diffusion nowcasting of GOES imagery", doi: "https://doi.org/10.48550/arXiv.2401.05932", podcast: null, year: 2025 },
    { episode: 43, name: "Spherical Harmonic Transforms", title: "Differentiable and accelerated spherical harmonic and Wigner transforms", doi: "https://doi.org/10.48550/arXiv.2401.05932", podcast: null, year: 2025 }
];

// Episodes from 2026
const episodes2026 = [
    { episode: 1, name: "AI for Atmospheric Sciences", title: "Artificial Intelligence for Atmospheric Sciences: A Research Roadmap", doi: "https://doi.org/10.48550/arXiv.2506.16281", podcast: "https://open.spotify.com/episode/2MaNsw86JwWldyZnjQOarc", year: 2026 }
];

// Combine all episodes
const allEpisodes = [...episodes2025, ...episodes2026];

// State
let currentFilter = '2026';

// DOM Elements
const episodesContainer = document.getElementById('episodes-container');
const loadingElement = document.getElementById('episodes-loading');
const yearButtons = document.querySelectorAll('.year-btn');

// Create episode card HTML
function createEpisodeCard(episode) {
    const podcastBtn = episode.podcast
        ? `<a href="${episode.podcast}" target="_blank" class="link-btn podcast">🎧 Listen</a>`
        : `<span class="link-btn disabled">🎧 Coming Soon</span>`;

    return `
        <div class="episode-card">
            <div class="episode-header">
                <span class="episode-number">#${episode.episode}</span>
                <h3 class="episode-name">${episode.name}</h3>
            </div>
            <p class="episode-title">${episode.title}</p>
            <div class="episode-links">
                <a href="${episode.doi}" target="_blank" class="link-btn doi">📄 Paper</a>
                ${podcastBtn}
            </div>
            <span class="year-badge">${episode.year}</span>
        </div>
    `;
}

// Filter and display episodes
function displayEpisodes(filter) {
    let filteredEpisodes;

    if (filter === 'all') {
        filteredEpisodes = allEpisodes;
    } else {
        filteredEpisodes = allEpisodes.filter(ep => ep.year === parseInt(filter));
    }

    // Sort by episode number descending (most recent first)
    filteredEpisodes.sort((a, b) => b.episode - a.episode);

    // Clear container
    episodesContainer.innerHTML = '';

    // Add episode cards
    if (filteredEpisodes.length === 0) {
        episodesContainer.innerHTML = '<p class="loading">No episodes found for this year.</p>';
    } else {
        filteredEpisodes.forEach(episode => {
            episodesContainer.innerHTML += createEpisodeCard(episode);
        });
    }

    // Hide loading
    loadingElement.style.display = 'none';
}

// Handle year filter button clicks
yearButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        yearButtons.forEach(btn => btn.classList.remove('active'));

        // Add active class to clicked button
        button.classList.add('active');

        // Get filter value and display episodes
        currentFilter = button.dataset.year;
        displayEpisodes(currentFilter);
    });
});

// Initialize - display 2026 episodes by default
document.addEventListener('DOMContentLoaded', () => {
    displayEpisodes(currentFilter);
});
