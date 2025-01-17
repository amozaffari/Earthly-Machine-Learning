# Season 1


### Episode 1: Probabilistic weather forecasting with machine learning

- https://doi.org/10.1038/s41586-024-08252-9
- Published: 04 December 2024
- [_Nature_](https://www.nature.com/)

**Abstract** : Weather forecasts are fundamentally uncertain, so predicting the range of probable weather scenarios is crucial for important decisions, from warning the public about hazardous weather to planning renewable energy use. Traditionally, weather forecasts have been based on numerical weather prediction (NWP)[1](https://www.nature.com/articles/s41586-024-08252-9#ref-CR1 "Bauer, P., Thorpe, A. & Brunet, G. The quiet revolution of numerical weather prediction. Nature 525, 47–55 (2015)."), which relies on physics-based simulations of the atmosphere. Recent advances in machine learning (ML)-based weather prediction (MLWP) have produced ML-based models with less forecast error than single NWP simulations[2](https://www.nature.com/articles/s41586-024-08252-9#ref-CR2 "Lam, R. et al. Learning skillful medium-range global weather forecasting. Science 382, 1416–1421 (2023)."),[3](https://www.nature.com/articles/s41586-024-08252-9#ref-CR3 "Bi, K. et al. Accurate medium-range global weather forecasting with 3D neural networks. Nature 619, 533–538 (2023)."). However, these advances have focused primarily on single, deterministic forecasts that fail to represent uncertainty and estimate risk. Overall, MLWP has remained less accurate and reliable than state-of-the-art NWP ensemble forecasts. Here we introduce GenCast, a probabilistic weather model with greater skill and speed than the top operational medium-range weather forecast in the world, ENS, the ensemble forecast of the European Centre for Medium-Range Weather Forecasts[4](https://www.nature.com/articles/s41586-024-08252-9#ref-CR4 "ECMWF. IFS Documentation CY46R1. Part V: Ensemble Prediction System (ECMWF, 2019)."). GenCast is an ML weather prediction method, trained on decades of reanalysis data. GenCast generates an ensemble of stochastic 15-day global forecasts, at 12-h steps and 0.25° latitude–longitude resolution, for more than 80 surface and atmospheric variables, in 8 min. It has greater skill than ENS on 97.2% of 1,320 targets we evaluated and better predicts extreme weather, tropical cyclone tracks and wind power production. This work helps open the next chapter in operational weather forecasting, in which crucial weather-dependent decisions are made more accurately and efficiently.

**Citation**: Price, I., Sanchez-Gonzalez, A., Alet, F. et al. Probabilistic weather forecasting with machine learning. Nature 637, 84–90 (2025). ⁠

**DOI**: ⁠https://doi.org/10.1038/s41586-024-08252-9


### Episode 2: Robustness of AI-based weather forecasts in a changing climate

**Abstract** : Data-driven machine learning models for weather forecasting have made transformational progress in the last 1-2 years, with state-of-the-art ones now outperforming the best physics-based models for a wide range of skill scores. Given the strong links between weather and climate modelling, this raises the question whether machine learning models could also revolutionize climate science, for example by informing mitigation and adaptation to climate change or to generate larger ensembles for more robust uncertainty estimates. Here, we show that current state-of-the-art machine learning models trained for weather forecasting in present-day climate produce skillful forecasts across different climate states corresponding to pre-industrial, present-day, and future 2.9K warmer climates. This indicates that the dynamics shaping the weather on short timescales may not differ fundamentally in a changing climate. It also demonstrates out-of-distribution generalization capabilities of the machine learning models that are a critical prerequisite for climate applications. Nonetheless, two of the models show a global-mean cold bias in the forecasts for the future warmer climate state, i.e. they drift towards the colder present-day climate they have been trained for. A similar result is obtained for the pre-industrial case where two out of three models show a warming. We discuss possible remedies for these biases and analyze their spatial distribution, revealing complex warming and cooling patterns that are partly related to missing ocean-sea ice and land surface information in the training data. Despite these current limitations, our results suggest that data-driven machine learning models will provide powerful tools for climate science and transform established approaches by complementing conventional physics-based models.

**Citation**: Rackow, Thomas, et al. "Robustness of AI-based weather forecasts in a changing climate." arXiv preprint arXiv:2409.18529 (2024)

**DOI**: ⁠⁠⁠⁠https://doi.org/10.48550/arXiv.2409.18529

### Episode 3: AIFS -- ECMWF's data-driven forecasting system

**Abstract**: Machine learning-based weather forecasting models have quickly emerged as a promising methodology for accurate medium-range global weather forecasting. Here, we introduce the Artificial Intelligence Forecasting System (AIFS), a data driven forecast model developed by the European Centre for Medium-Range Weather Forecasts (ECMWF). AIFS is based on a graph neural network (GNN) encoder and decoder, and a sliding window transformer processor, and is trained on ECMWF's ERA5 re-analysis and ECMWF's operational numerical weather prediction (NWP) analyses. It has a flexible and modular design and supports several levels of parallelism to enable training on high-resolution input data. AIFS forecast skill is assessed by comparing its forecasts to NWP analyses and direct observational data. We show that AIFS produces highly skilled forecasts for upper-air variables, surface weather parameters and tropical cyclone tracks. AIFS is run four times daily alongside ECMWF's physics-based NWP model and forecasts are available to the public under ECMWF's open data policy.

**Citation**: Lang, Simon, et al. "AIFS-ECMWF's data-driven forecasting system." arXiv preprint arXiv:2406.01465 (2024).

**DOI**:https://doi.org/10.48550/arXiv.2406.01465

### Episode 4: Deep learning for predicting rate-induced tipping

**Abstract**: Nonlinear dynamical systems exposed to changing forcing values can exhibit catastrophic transitions between distinct states. The phenomenon of critical slowing down can help anticipate such transitions if caused by a bifurcation and if the change in forcing is slow compared with the system’s internal timescale. However, in many real-world situations, these assumptions are not met and transitions can be triggered because the forcing exceeds a critical rate. For instance, the rapid pace of anthropogenic climate change compared with the internal timescales of key Earth system components, like polar ice sheets or the Atlantic Meridional Overturning Circulation, poses significant risk of rate-induced tipping. Moreover, random perturbations may cause some trajectories to cross an unstable boundary whereas others do not—even under the same forcing. Critical-slowing-down-based indicators generally cannot distinguish these cases of noise-induced tipping from no tipping. This severely limits our ability to assess the tipping risks and to predict individual trajectories. To address this, we make the first attempt to develop a deep learning framework predicting the transition probabilities of dynamical systems ahead of rate-induced transitions. Our method issues early warnings, as demonstrated on three prototypical systems for rate-induced tipping subjected to time-varying equilibrium drift and noise perturbations. Exploiting explainable artificial intelligence methods, our framework captures the fingerprints for the early detection of rate-induced tipping, even with long lead times. Our findings demonstrate the predictability of rate-induced and noise-induced tipping, advancing our ability to determine safe operating spaces for a broader class of dynamical systems than possible so far.

**Citation**: Huang, Y., Bathiany, S., Ashwin, P. et al. Deep learning for predicting rate-induced tipping. Nat Mach Intell 6, 1556–1565 (2024). https://doi.org/10.1038/s42256-024-00937-0.

**DOI**:https://doi.org/10.1038/s42256-024-00937-0

### Episode 5: Neural general circulation models for weather and climate

**Abstract**: General circulation models (GCMs) are the foundation of weather and climate prediction1,2. GCMs are physics-based simulators that combine a numerical solver for large-scale dynamics with tuned representations for small-scale processes such as cloud formation. Recently, machine-learning models trained on reanalysis data have achieved comparable or better skill than GCMs for deterministic weather forecasting3,4. However, these models have not demonstrated improved ensemble forecasts, or shown sufficient stability for long-term weather and climate simulations. Here we present a GCM that combines a differentiable solver for atmospheric dynamics with machine-learning components and show that it can generate forecasts of deterministic weather, ensemble weather and climate on par with the best machine-learning and physics-based methods. NeuralGCM is competitive with machine-learning models for one- to ten-day forecasts, and with the European Centre for Medium-Range Weather Forecasts ensemble prediction for one- to fifteen-day forecasts. With prescribed sea surface temperature, NeuralGCM can accurately track climate metrics for multiple decades, and climate forecasts with 140-kilometre resolution show emergent phenomena such as realistic frequency and trajectories of tropical cyclones. For both weather and climate, our approach offers orders of magnitude computational savings over conventional GCMs, although our model does not extrapolate to substantially different future climates. Our results show that end-to-end deep learning is compatible with tasks performed by conventional GCMs and can enhance the large-scale physical simulations that are essential for understanding and predicting the Earth system.

**Citation**: Kochkov, D., Yuval, J., Langmore, I. et al. Neural general circulation models for weather and climate. Nature 632, 1060–1066 (2024). https://doi.org/10.1038/s41586-024-07744-y.

**DOI**:https://doi.org/10.1038/s41586-024-07744-y

### Episode 6: Prithvi WxC: Foundation Model for Weather and Climate

**Abstract**: Triggered by the realization that AI emulators can rival the performance of traditional numerical weather prediction models running on HPC systems, there is now an increasing number of large AI models that address use cases such as forecasting, downscaling, or nowcasting. While the parallel developments in the AI literature focus on foundation models -- models that can be effectively tuned to address multiple, different use cases -- the developments on the weather and climate side largely focus on single-use cases with particular emphasis on mid-range forecasting. We close this gap by introducing Prithvi WxC, a 2.3 billion parameter foundation model developed using 160 variables from the Modern-Era Retrospective Analysis for Research and Applications, Version 2 (MERRA-2). Prithvi WxC employs an encoder-decoder-based architecture, incorporating concepts from various recent transformer models to effectively capture both regional and global dependencies in the input data. The model has been designed to accommodate large token counts to model weather phenomena in different topologies at fine resolutions. Furthermore, it is trained with a mixed objective that combines the paradigms of masked reconstruction with forecasting. We test the model on a set of challenging downstream tasks namely: Autoregressive rollout forecasting, Downscaling, Gravity wave flux parameterization, and Extreme events estimation. The pretrained model with 2.3 billion parameters, along with the associated fine-tuning workflows, has been publicly released as an open-source contribution via Hugging Face.

**Citation**: Schmude, Johannes, et al. "Prithvi wxc: Foundation model for weather and climate." arXiv preprint arXiv:2409.13598 (2024).

**DOI**:https://doi.org/10.48550/arXiv.2409.13598

### Episode 7:Aardvark weather: end-to-end data-driven weather forecasting

**Abstract**: Weather forecasting is critical for a range of human activities including transportation, agriculture, industry, as well as the safety of the general public. Machine learning models have the potential to transform the complex weather prediction pipeline, but current approaches still rely on numerical weather prediction (NWP) systems, limiting forecast speed and accuracy. Here we demonstrate that a machine learning model can replace the entire operational NWP pipeline. Aardvark Weather, an end-to-end data-driven weather prediction system, ingests raw observations and outputs global gridded forecasts and local station forecasts. Further, it can be optimised end-to-end to maximise performance over quantities of interest. Global forecasts outperform an operational NWP baseline for multiple variables and lead times. Local station forecasts are skillful up to ten days lead time and achieve comparable and often lower errors than a post-processed global NWP baseline and a state-of-the-art end-to-end forecasting system with input from human forecasters. These forecasts are produced with a remarkably simple neural process model using just 8% of the input data and three orders of magnitude less compute than existing NWP and hybrid AI-NWP methods. We anticipate that Aardvark Weather will be the starting point for a new generation of end-to-end machine learning models for medium-range forecasting that will reduce computational costs by orders of magnitude and enable the rapid and cheap creation of bespoke models for users in a variety of fields, including for the developing world where state-of-the-art local models are not currently available.

**Citation**: Vaughan, Anna, et al. "Aardvark weather: end-to-end data-driven weather forecasting." arXiv preprint arXiv:2404.00411 (2024).

**DOI**: https://doi.org/10.48550/arXiv.2404.00411

### Episode 8:Identifying and Categorizing Bias in AI/ML for Earth Sciences

**Abstract**: Artificial intelligence (AI) can be used to improve performance across a wide range of Earth system prediction tasks. As with any application of AI, it is important for AI to be developed in an ethical and responsible manner to minimize bias and other effects. In this work, we extend our previous work demonstrating how AI can go wrong with weather and climate applications by presenting a categorization of bias for AI in the Earth sciences. This categorization can assist AI developers to identify potential biases that can affect their model throughout the AI development life cycle. We highlight examples from a variety of Earth system prediction tasks of each category of bias.

**Citation**: McGovern, Amy, et al. "Identifying and Categorizing Bias in AI/ML for Earth Sciences." Bulletin of the American Meteorological Society 105.3 (2024): E567-E583.

**DOI**: https://doi.org/10.1175/BAMS-D-23-0196.1

### Episode 9: Probabilistic Emulation of a Global Climate Model with Spherical DYffusion

### Episode 10: FuXi-ENS: A machine learning model for medium-range ensemble weather forecasting

### Episode 11: ACE: A fast, skillful learned global atmospheric model for climate prediction

### Episode 12: AURORA: A FOUNDATION MODEL OF THE ATMOSPHERE

### Episode 13: ADVANCES IN LAND SURFACE MODEL-BASED FORECASTING: A COMPARATIVE STUDY OF LSTM, GRADIENT BOOSTING, AND FEEDFORWARD NEURAL NETWORK MODELS AS PROGNOSTIC STATE EMULATORS

### Episode 14: ARCHESWEATHER: An efficient AI weather forecasting model at 1.5º resolution

### Episode 15: DiffDA: a diffusion model for weather-scale data assimilation

### Episode 15: GRAPHDOP: TOWARDS SKILFUL DATA-DRIVEN MEDIUM-RANGE WEATHER FORECASTS LEARNT AND INITIALISED DIRECTLY FROM OBSERVATIONS
