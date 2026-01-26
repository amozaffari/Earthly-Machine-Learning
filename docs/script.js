// Episode data from markdown files
const episodes2025 = [
    { episode: 1, name: "GenCast", title: "Probabilistic weather forecasting with machine learning", doi: "https://doi.org/10.1038/s41586-024-08252-9", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/gencast-probabilistic-weather-forecasting-with-machine-learning-85365767", year: 2025 },
    { episode: 2, name: "Robustness of AI Weather", title: "Robustness of AI-based weather forecasts in a changing climate", doi: "https://doi.org/10.48550/arXiv.2409.18529", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/robustness-of-ai-based-weather-forecasts-in-a-changing-climate-85365763", year: 2025 },
    { episode: 3, name: "AIFS", title: "AIFS: ECMWF's data-driven forecasting system", doi: "https://doi.org/10.48550/arXiv.2406.01465", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/aifs-ecmwfs-data-driven-forecasting-system-85365760", year: 2025 },
    { episode: 4, name: "Deep Learning for Tipping", title: "Deep learning for predicting rate-induced tipping", doi: "https://doi.org/10.1038/s42256-024-00937-0", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/deep-learning-for-predicting-rate-induced-tipping-85365757", year: 2025 },
    { episode: 5, name: "NeuralGCM", title: "Neural general circulation models for weather and climate", doi: "https://doi.org/10.1038/s41586-024-07744-y", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/neuralgcm-neural-general-circulation-models-for-weather-and-climate-85365753", year: 2025 },
    { episode: 6, name: "Prithvi WxC", title: "Prithvi WxC: Foundation model for weather and climate", doi: "https://doi.org/10.48550/arXiv.2409.13598", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/prithvi-wxc-foundation-model-for-weather-and-climate-85365750", year: 2025 },
    { episode: 7, name: "Aardvark Weather", title: "Aardvark Weather: End-to-End Data-Driven Weather Forecasting", doi: "https://doi.org/10.48550/arXiv.2404.00411", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/aardvark-weather-end-to-end-data-driven-weather-forecasting-85365747", year: 2025 },
    { episode: 8, name: "Bias in AI/ML", title: "Identifying and Categorizing Bias in AI/ML for Earth Sciences", doi: "https://doi.org/10.1175/BAMS-D-23-0196.1", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/identifying-and-categorizing-bias-in-aiml-for-earth-sciences-85365744", year: 2025 },
    { episode: 9, name: "SFNO", title: "Spherical fourier neural operators: Learning stable dynamics on the sphere", doi: "https://doi.org/10.48550/arXiv.2306.03838", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/spherical-fourier-neural-operators-learning-stable-dynamics-on-the-sphere-85365741", year: 2025 },
    { episode: 10, name: "FuXi-ENS", title: "FuXi-ENS: A machine learning model for medium-range ensemble weather forecasting", doi: "https://doi.org/10.48550/arXiv.2405.05925", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/fuxi-ens-a-machine-learning-model-for-medium-range-ensemble-weather-forecasting-85365738", year: 2025 },
    { episode: 11, name: "WeatherBench 2", title: "WeatherBench 2: A benchmark for the next generation of data‐driven global weather models", doi: "https://doi.org/10.48550/arXiv.2308.15560", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/weatherbench-2-a-benchmark-for-the-next-generation-of-data-driven-glob-85365734", year: 2025 },
    { episode: 12, name: "ACE", title: "ACE: A fast, skillful learned global atmospheric model for climate prediction", doi: "https://doi.org/10.48550/arXiv.2310.02074", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/ace-a-fast-skillful-learned-global-atmospheric-model-for-climate-predi-85365731", year: 2025 },
    { episode: 13, name: "AURORA", title: "Aurora: A foundation model of the atmosphere", doi: "https://doi.org/10.48550/arXiv.2405.13063", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/aurora-a-foundation-model-of-the-atmosphere-85365727", year: 2025 },
    { episode: 14, name: "ACE2", title: "ACE2: Accurately learning subseasonal to decadal atmospheric variability and forced responses", doi: "https://doi.org/10.48550/arXiv.2411.11268", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/ace2-accurately-learning-subseasonal-to-decadal-atmospheric-variabilit-85365724", year: 2025 },
    { episode: 15, name: "Land Surface Forecasting", title: "Advances in Land Surface Model-based Forecasting", doi: "https://doi.org/10.5194/egusphere-2024-2081", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/advances-in-land-surface-model-based-forecasting-85863072", year: 2025 },
    { episode: 16, name: "ARCHESWEATHER", title: "AI foundation models for weather and climate: Applications, design, and implementation", doi: "https://doi.org/10.48550/arXiv.2405.14527", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/archesweather-an-efficient-ai-weather-forecasting-model-at-15%c2%ba-resolut-86542021", year: 2025 },
    { episode: 17, name: "DiffDA", title: "DiffDA: A diffusion model for weather-scale data assimilation", doi: "https://doi.org/10.48550/arXiv.2401.05932", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/diffda-a-diffusion-model-for-weather-scale-data-assimilation-86977219", year: 2025 },
    { episode: 18, name: "GRAPHDOP", title: "GraphDOP: Towards skilful data-driven medium-range weather forecasts", doi: "https://doi.org/10.48550/arXiv.2412.15687", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/graphdop-towards-skillful-data-driven-medium-range-weather-forecasts-87414251", year: 2025 },
    { episode: 19, name: "Pangu-Weather", title: "Accurate medium-range global weather forecasting with 3D neural networks", doi: "https://doi.org/10.1038/s41586-023-06185-3", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/pangu-weather-accurate-medium-range-global-weather-forecasting-with-3d-87873304", year: 2025 },
    { episode: 20, name: "Explainable AI Climate", title: "Finding the right XAI method—A guide for the evaluation and ranking of explainable AI methods", doi: "https://doi.org/10.48550/arXiv.2303.00652", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/finding-the-right-xai-methoda-guide-for-the-evaluation-and-ranking-of-88298174", year: 2025 },
    { episode: 21, name: "AtmoRep", title: "AtmoRep: A stochastic model of atmosphere dynamics using large scale representation learning", doi: "https://doi.org/10.48550/arXiv.2308.13280", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/atmorep-a-stochastic-model-of-atmosphere-dynamics-using-large-scale-re-89060151", year: 2025 },
    { episode: 22, name: "KGML-ag-Carbon", title: "Knowledge-guided machine learning can improve carbon cycle quantification in agroecosystems", doi: "https://doi.org/10.1038/s41467-023-43860-5", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/knowledge-guided-machine-learning-can-improve-carbon-cycle-quantificat-89303713", year: 2025 },
    { episode: 23, name: "FourCastNet", title: "FourCastNet: Accelerating global high-resolution weather forecasting", doi: "https://doi.org/10.1145/3592979.3593412", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/fourcastnet-accelerating-global-high-resolution-weather-forecasting-us-89595943", year: 2025 },
    { episode: 24, name: "AI Climate Modelling", title: "AI-empowered next-generation multiscale climate modelling for mitigation and adaptation", doi: "https://doi.org/10.1038/s41561-024-01527-w", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/ai-empowered-next-generation-multiscale-climate-modelling-for-mitigati-89996601", year: 2025 },
    { episode: 25, name: "ClimaX", title: "ClimaX: A foundation model for weather and climate", doi: "https://doi.org/10.48550/arXiv.2301.10343", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/climax-a-foundation-model-for-weather-and-climate-90447799", year: 2025 },
    { episode: 26, name: "Climate-Invariant ML", title: "Climate-invariant machine learning", doi: "https://doi.org/10.1126/sciadv.adj7250", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/climate-invariant-machine-learning-90968587", year: 2025 },
    { episode: 27, name: "Spherical Harmonic Loss", title: "Fixing the Double Penalty in Data-Driven Weather Forecasting", doi: "https://doi.org/10.48550/arXiv.2501.19374", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/fixing-the-double-penalty-in-data-driven-weather-forecasting-through-a-93296149", year: 2025 },
    { episode: 28, name: "AI for Extreme Events", title: "Artificial intelligence for modeling and understanding extreme weather and climate events", doi: "https://doi.org/10.1038/s41467-025-56573-8", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/artificial-intelligence-for-modeling-and-understanding-extreme-weather-93810151", year: 2025 },
    { episode: 29, name: "ML Weather Limitations", title: "On Some Limitations of Current Machine Learning Weather Prediction Models", doi: "https://doi.org/10.1029/2023GL107377", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/on-some-limitations-of-current-machine-learning-weather-prediction-mod-94692120", year: 2025 },
    { episode: 30, name: "Early Warning AI", title: "Early warning of complex climate risk with integrated artificial intelligence", doi: "https://doi.org/10.1038/s41467-025-57640-w", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/early-warning-of-complex-climate-risk-with-integrated-artificial-intel-95185754", year: 2025 },
    { episode: 31, name: "AI vs Physics Models", title: "Do AI models produce better weather forecasts than physics-based models?", doi: "https://doi.org/10.1038/s41586-024-08252-9", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/do-ai-models-produce-better-weather-forecasts-than-physics-based-model-96621593", year: 2025 },
    { episode: 32, name: "Probabilistic Climate", title: "Probabilistic Emulation of a Global Climate Model with Spherical Diffusion", doi: "https://arxiv.org/abs/2406.14798", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/probabilistic-emulation-of-a-global-climate-model-with-spherical-dyffu-96788146", year: 2025 },
    { episode: 33, name: "Gray Swan Cyclones", title: "Can AI weather models predict out-of-distribution gray swan tropical cyclones?", doi: "https://doi.org/10.1038/s41586-024-08252-9", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/can-ai-weather-models-predict-out-of-distribution-gray-swan-tropical-c-97126813", year: 2025 },
    { episode: 34, name: "FourCastNet 3", title: "FourCastNet 3: A geometric approach to probabilistic machine-learning weather forecasting at scale", doi: "https://doi.org/10.1145/3592979.3593412", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/fourcastnet-3-a-geometric-approach-to-probabilistic-machine-learning-w-98441807", year: 2025 },
    { episode: 35, name: "FuXI Weather", title: "A data-to-forecast machine learning system for global weather", doi: "https://doi.org/10.48550/arXiv.2401.05932", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/fuxi-weather-a-data-to-forecast-machine-learning-system-for-global-wea-99344917", year: 2025 },
    { episode: 36, name: "XiChen", title: "XiChen: An observation-scalable fully AI-driven global weather forecasting system with 4D variational knowledge", doi: "https://arxiv.org/abs/2507.09202", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/xichen-an-observation-scalable-fully-ai-driven-global-weather-forecast-100267257", year: 2025 },
    { episode: 37, name: "Jigsaw Training", title: "Jigsaw Training Multi-Billion-Parameter AIWeather Models With Optimized Model Parallelism", doi: "https://arxiv.org/abs/2507.05753", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/jigsaw-training-multi-billion-parameter-ai-weather-models-with-optimiz-100664785", year: 2025 },
    { episode: 38, name: "Probabilistic Measures", title: "Probabilistic measures afford fair comparisons of AIWP and NWP model output", doi: "https://arxiv.org/abs/2506.03744", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/probabilistic-measures-for-fair-ai-and-nwp-model-comparison-101430866", year: 2025 },
    { episode: 39, name: "Climate in a Bottle", title: "Climate in a Bottle: Towards a Generative Foundation Model for the Kilometer-Scale Global Atmosphere", doi: "https://arxiv.org/abs/2505.06474", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/climate-in-a-bottle-towards-a-generative-foundation-model-for-the-kilo-102223988", year: 2025 },
    { episode: 40, name: "Beyond Training Data", title: "Beyond the Training Data: Confidence-Guided Mixing of Parameterizations in a Hybrid AI-Climate Model", doi: "https://arxiv.org/abs/2510.08107", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/beyond-the-training-data-confidence-guided-mixing-of-parameterizations-102428732", year: 2025 },
    { episode: 41, name: "FuXi-Ocean", title: "FuXi-Ocean: A Global Ocean Forecasting System with Sub-Daily Resolution", doi: "https://arxiv.org/abs/2506.03210", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/fuxi-ocean-a-global-ocean-forecasting-system-with-sub-daily-resolution-102666447", year: 2025 },
    { episode: 42, name: "Score-based Diffusion", title: "Score-based diffusion nowcasting of GOES imagery", doi: "https://arxiv.org/abs/2505.10432v1", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/score-based-diffusion-nowcasting-of-goes-imagery-102963396", year: 2025 },
    { episode: 43, name: "Spherical Harmonic Transforms", title: "Differentiable and accelerated spherical harmonic and Wigner transforms", doi: "https://arxiv.org/abs/2311.14670", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/differentiable-and-accelerated-spherical-harmonic-and-wigner-transform-103410304", year: 2025 }
];

// Episodes from 2026
const episodes2026 = [
    { episode: 1, name: "AI for Atmospheric Sciences", title: "Artificial Intelligence for Atmospheric Sciences: A Research Roadmap", doi: "https://doi.org/10.48550/arXiv.2506.16281", podcast: "https://goodpods.com/podcasts/earthly-machine-learning-645229/artificial-intelligence-for-atmospheric-sciences-a-research-roadmap-104249836", year: 2026 },
    { episode: 2, name: "Climate Knowledge in LLMs", title: "Climate Knowledge in Large Language Models", doi: "https://arxiv.org/abs/2510.08043", podcast: "https://open.spotify.com/episode/19FrLWH5n7WIbIUX7KXjaY?si=LrlqAZloSfiXRZ_nHWnaMg", year: 2026 }
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
