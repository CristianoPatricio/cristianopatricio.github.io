
  const data = [
    {
      id: 0,
      method: '<a href="https://arxiv.org/abs/1711.08195", target="blank">Jing et al.</a>',
      year: 2017,
      interpretability_method: 'Attention-based',
      modality: 'X-ray',
      dataset: 'IU Chest X-ray, PEIR Gross'
      },
      {
      id: 1,
      method: '<a href="https://arxiv.org/abs/1707.02485", target="blank">Zhang et al.</a>',
      year: 2017,
      interpretability_method: 'Attention-based',
      modality: 'Microscopic Images',
      dataset: 'BCIDR'
      },
      {
      id: 2,
      method: '<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8759236", target="blank">Gale et al.</a>',
      year: 2018,
      interpretability_method: 'SmoothGrad',
      modality: 'X-ray',
      dataset: 'Pelvic X-ray'
      },
      {
      id: 3,
      method: '<a href="https://proceedings.neurips.cc/paper_files/paper/2018/file/e07413354875be01a996dc560274708e-Paper.pdf", target="blank">Li et al.</a>',
      year: 2018,
      interpretability_method: 'Text-based',
      modality: 'X-ray',
      dataset: 'IU Chest X-ray, CX-CHR (private)'
      },
      {
      id: 4,
      method: '<a href="https://journals.plos.org/plosmedicine/article?id=10.1371/journal.pmed.1002686", target="blank">Rajpurkar et al.</a>',
      year: 2018,
      interpretability_method: 'CAM',
      modality: 'X-ray',
      dataset: 'ChestX-ray8'
      },
      {
      id: 5,
      method: '<a href="https://openaccess.thecvf.com/content_cvpr_2018/papers/Wang_TieNet_Text-Image_Embedding_CVPR_2018_paper.pdf", target="blank">Wang et al.</a>',
      year: 2018,
      interpretability_method: 'Saliency maps',
      modality: 'X-ray',
      dataset: 'IU Chest X-ray,ChestX-ray14'
      },
      {
      id: 6,
      method: '<a href="https://openaccess.thecvf.com/content_CVPRW_2019/papers/ISIC/Barata_Deep_Attention_Model_for_the_Hierarchical_Diagnosis_of_Skin_Lesions_CVPRW_2019_paper.pdf", target="blank">Barata et al.</a>',
      year: 2019,
      interpretability_method: 'CAM',
      modality: 'Dermoscopy',
      dataset: 'ISIC 2017, ISIC 2018'
      },
      {
      id: 7,
      method: '<a href="https://arxiv.org/abs/1909.08856", target="blank">Eitel et al.</a>',
      year: 2019,
      interpretability_method: 'Occlusion',
      modality: 'MRI',
      dataset: 'ADNI Initiative'
      },
      {
      id: 8,
      method: '<a href="https://www.sciencedirect.com/science/article/pii/S0933365718304846", target="blank">Lamy et al.</a>',
      year: 2019,
      interpretability_method: 'CBR',
      modality: 'Mammography',
      dataset: 'Breast Cancer Wisconsin Dataset, Mammographic Mass Dataset, Breast Dataset'
      },
      {
      id: 9,
      method: '<a href="https://arxiv.org/abs/1906.03922", target="blank">Lee et al.</a>',
      year: 2019,
      interpretability_method: 'Saliency maps',
      modality: 'Mammography',
      dataset: 'CBIS-DDSM'
      },
      {
      id: 10,
      method: '<a href="http://proceedings.mlr.press/v106/liu19a/liu19a.pdf", target="blank">Liu et al.</a>',
      year: 2019,
      interpretability_method: 'Attention maps',
      modality: 'X-ray',
      dataset: 'IU Chest X-ray,MIMIC-CXR'
      },
      {
      id: 11,
      method: '<a href="https://ieeexplore.ieee.org/document/8945986", target="blank">Malhi et al.</a>',
      year: 2019,
      interpretability_method: 'LIME',
      modality: 'Endoscopy',
      dataset: 'Red Lesion Endoscopy'
      },
      {
      id: 12,
      method: '<a href="https://www.sciencedirect.com/science/article/pii/S0161642018315756", target="blank">Sayres et al.</a>',
      year: 2019,
      interpretability_method: 'Integrated Gradients',
      modality: 'Fundus Images',
      dataset: 'Private'
      },
      {
      id: 13,
      method: '<a href="https://ieeexplore.ieee.org/document/8945819", target="blank">Singh et al.</a>',
      year: 2019,
      interpretability_method: 'Stacked LSTM',
      modality: 'X-ray',
      dataset: 'IU Chest X-ray'
      },
      {
      id: 14,
      method: '<a href="https://link.springer.com/chapter/10.1007/978-3-030-26763-6_66", target="blank">Sun et al.</a>',
      year: 2019,
      interpretability_method: 'Text-based',
      modality: 'Mammography',
      dataset: 'Inbreast'
      },
      {
      id: 15,
      method: '<a href="https://pubmed.ncbi.nlm.nih.gov/30207594/", target="blank">Tschandl et al.</a>',
      year: 2019,
      interpretability_method: 'CBIR',
      modality: 'Dermoscopy',
      dataset: ' EDRA, ISIC 2017, Private Dataset'
      },
      {
      id: 16,
      method: '<a href="https://ieeexplore.ieee.org/document/8970668", target="blank">Yin et al.</a>',
      year: 2019,
      interpretability_method: 't-SNE',
      modality: 'X-ray',
      dataset: 'IU Chest X-ray'
      },
      {
      id: 17,
      method: '<a href="https://arxiv.org/abs/1908.06612", target="blank">Young et al.</a>',
      year: 2019,
      interpretability_method: 'KernelSHAP',
      modality: 'Dermoscopy',
      dataset: 'HAM10000'
      },
      {
      id: 18,
      method: '<a href="https://aclanthology.org/2020.emnlp-main.112/", target="blank">Chen et al.</a>',
      year: 2020,
      interpretability_method: 'Multi-Head Attention',
      modality: 'X-ray',
      dataset: 'IU Chest X-ray, MIMIC-CXR'
      },
      {
      id: 19,
      method: '<a href="https://dl.acm.org/doi/10.1145/3394171.3413557", target="blank">Fang et al.</a>',
      year: 2020,
      interpretability_method: 'Concept-based',
      modality: 'Microscopic Images',
      dataset: 'Infectious Keratitis Dataset'
      },
      {
      id: 20,
      method: '<a href="https://www.sciencedirect.com/science/article/pii/S0010482520302225", target="blank">Graziani et al.</a>',
      year: 2020,
      interpretability_method: 'TCAV',
      modality: 'Microscopic Images',
      dataset: 'Camelyon16, Camelyon17'
      },
      {
      id: 21,
      method: '<a href="https://dl.acm.org/doi/10.1145/3418094.3418096", target="blank">Lin et al.</a>',
      year: 2020,
      interpretability_method: 'Guided Grad-CAM',
      modality: 'X-ray',
      dataset: 'COVIDx'
      },
      {
      id: 22,
      method: '<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7775402/", target="blank">Lopatina et al.</a>',
      year: 2020,
      interpretability_method: 'DeepLIFT',
      modality: 'MRI',
      dataset: 'Private'
      },
      {
      id: 23,
      method: '<a href="https://www.sciencedirect.com/science/article/abs/pii/S0010482520303723", target="blank">Magesh et al.</a>',
      year: 2020,
      interpretability_method: 'LIME',
      modality: 'DaTscan',
      dataset: 'PPMI'
      },
      {
      id: 24,
      method: '<a href="https://arxiv.org/abs/2012.01166", target="blank">Margeloiu et al.</a>',
      year: 2020,
      interpretability_method: 'Gradient, Integrated Gradient',
      modality: 'Dermoscopy',
      dataset: 'HAM10000'
      },
      {
      id: 25,
      method: '<a href="https://www.sciencedirect.com/science/article/abs/pii/S0167865520301240", target="blank">Rio-Torto et al.</a>',
      year: 2020,
      interpretability_method: 'In-model',
      modality: 'Microscopic Images',
      dataset: 'NIH-NCI Cervical Cancer'
      },
      {
      id: 26,
      method: '<a href="https://link.springer.com/chapter/10.1007/978-3-030-59710-8_30", target="blank">Silva et al.</a>',
      year: 2020,
      interpretability_method: 'CBIR, Saliency Map',
      modality: 'X-ray',
      dataset: 'CheXpert'
      },
      {
      id: 27,
      method: '<a href="https://pubmed.ncbi.nlm.nih.gov/32500277/", target="blank">Windish et al.</a>',
      year: 2020,
      interpretability_method: 'Grad-CAM',
      modality: 'MRI',
      dataset: 'IXI, Gliobastoma'
      },
      {
      id: 28,
      method: '<a href="https://link.springer.com/chapter/10.1007/978-3-030-87199-4_52", target="blank">Barata et al.</a>',
      year: 2021,
      interpretability_method: 'CBIR',
      modality: 'Dermoscopy',
      dataset: 'ISIC 2018'
      },
      {
      id: 29,
      method: '<a href="https://arxiv.org/abs/2107.05605", target="blank">Barnett et al.</a>',
      year: 2021,
      interpretability_method: 'Prototype Activation Map',
      modality: 'Mammography',
      dataset: 'Mammography Private Dataset'
      },
      {
      id: 30,
      method: '<a href="https://ieeexplore.ieee.org/document/9506282", target="blank">Kim et al.</a>',
      year: 2021,
      interpretability_method: 'Counterfactual Examples',
      modality: 'X-ray',
      dataset: 'Chest X-ray 14, VinDr-CXR'
      },
      {
      id: 31,
      method: '<a href="https://openaccess.thecvf.com/content/CVPR2021/papers/Kim_XProtoNet_Diagnosis_in_Chest_Radiography_With_Global_and_Local_Explanations_CVPR_2021_paper.pdf", target="blank">Kim et al.</a>',
      year: 2021,
      interpretability_method: 'Saliency maps',
      modality: 'X-ray',
      dataset: 'NIH chest X-ray14'
      },
      {
      id: 32,
      method: '<a href="https://link.springer.com/article/10.1007/s10489-020-01900-3", target="blank">Punn et al.</a>',
      year: 2021,
      interpretability_method: 'LIME',
      modality: 'X-ray',
      dataset: 'COVID-19 Dataset'
      },
      {
      id: 33,
      method: '<a href="https://arxiv.org/abs/2101.07563", target="blank">Schutte et al.</a>',
      year: 2021,
      interpretability_method: 'Grad-CAM',
      modality: 'X-ray/Microscopy Images',
      dataset: 'Osteoarthritis X-ray, Camelyon16'
      },
      {
      id: 34,
      method: '<a href="https://ieeexplore.ieee.org/document/9448270", target="blank">Singh et al.</a>',
      year: 2021,
      interpretability_method: 'Prototype Activation Maps',
      modality: 'X-ray',
      dataset: 'CORD-19'
      },
      {
      id: 35,
      method: '<a href="https://arxiv.org/abs/2101.04230", target="blank">Singla et al.</a>',
      year: 2023,
      interpretability_method: 'Counterfactual Examples',
      modality: 'X-ray',
      dataset: 'MIMIC-CXR'
      },
      {
      id: 36,
      method: '<a href="https://ieeexplore.ieee.org/document/9585450", target="blank">Thiagarajan et al.</a>',
      year: 2021,
      interpretability_method: 't-SNE',
      modality: 'Microscopic Images',
      dataset: 'Breast Histopathology'
      },
      {
      id: 37,
      method: '<a href="https://pubmed.ncbi.nlm.nih.gov/34546933/", target="blank">Wang et al.</a>',
      year: 2021,
      interpretability_method: 'SHAP',
      modality: 'Dermoscopy',
      dataset: 'HAM10000 '
      },
      {
      id: 38,
      method: '<a href="https://www.tandfonline.com/doi/full/10.1080/08839514.2021.2011688", target="blank">Billah and Javed et al.</a>',
      year: 2021,
      interpretability_method: 'BCNN',
      modality: 'Microscopic Images',
      dataset: 'ALL-IDB'
      },
      {
      id: 39,
      method: '<a href="https://openaccess.thecvf.com/content/CVPR2021/papers/Liu_Exploring_and_Distilling_Posterior_and_Prior_Knowledge_for_Radiology_Report_CVPR_2021_paper.pdf", target="blank">Liu et al.</a>',
      year: 2021,
      interpretability_method: 'Text-based',
      modality: 'X-ray',
      dataset: 'IU Chest X-ray, MIMIC-CXR'
      },
      {
      id: 40,
      method: '<a href="https://arxiv.org/abs/2106.06965", target="blank">Liu et al.</a>',
      year: 2021,
      interpretability_method: 'Text-based',
      modality: 'X-ray',
      dataset: 'IU Chest X-ray, MIMIC-CXR'
      },
      {
      id: 41,
      method: '<a href="https://openaccess.thecvf.com/content/WACV2022/papers/Hu_X-MIR_EXplainable_Medical_Image_Retrieval_WACV_2022_paper.pdf", target="blank">Hu et al.</a>',
      year: 2022,
      interpretability_method: 'CBIR',
      modality: 'X-ray/Dermoscopy',
      dataset: 'COVIDx, ISIC 2019'
      },
      {
      id: 42,
      method: '<a href="https://www.sciencedirect.com/science/article/abs/pii/S0169260722000050", target="blank">Lucieri et al.</a>',
      year: 2022,
      interpretability_method: 'TCAV',
      modality: 'Dermoscopy',
      dataset: 'ISIC 2019, Derm7pt, PH2, SkinL2'
      },
      {
      id: 43,
      method: '<a href="https://www.sciencedirect.com/science/article/pii/S0010482521008416", target="blank">Gour and Jain</a>',
      year: 2022,
      interpretability_method: 'Uncertainty-based',
      modality: 'X-ray',
      dataset: 'COVID19CXr'
      },
      {
      id: 44,
      method: '<a href="https://arxiv.org/abs/2205.15480", target="blank">Yuksekgonul et al.</a>',
      year: 2022,
      interpretability_method: 'CBM',
      modality: 'Dermoscopy',
      dataset: 'HAM 10000, ISIC 2020'
      },
      {
      id: 45,
      method: '<a href="https://arxiv.org/abs/2208.10358", target="blank">Wang et al.</a>',
      year: 2022,
      interpretability_method: 'Text-based',
      modality: 'X-ray',
      dataset: 'MIMIC-CXR'
      },
      {
      id: 46,
      method: '<a href="https://arxiv.org/abs/2303.00885", target="blank">Yan et al.</a>',
      year: 2023,
      interpretability_method: 'CBM',
      modality: 'Dermoscopy',
      dataset: 'ISIC 2016-2020'
      },
      {
      id: 47,
      method: '<a href="https://www.nature.com/articles/s41598-023-31223-5", target="blank">Selivanov et al.</a>',
      year: 2023,
      interpretability_method: 'Text-based',
      modality: 'X-ray',
      dataset: 'IU Chest X-ray, MIMIC-CXR'
      },
      {
      id: 48,
      method: '<a href="https://ieeexplore.ieee.org/document/10016250", target="blank">Zhang et al.</a>',
      year: 2023,
      interpretability_method: 'Text-based',
      modality: 'X-ray',
      dataset: 'IU Chest X-ray, MIMIC-CXR, COV-CTR'
      },
      {
      id: 49,
      method: '<a href="https://openaccess.thecvf.com/content/CVPR2023/papers/Wang_METransformer_Radiology_Report_Generation_by_Transformer_With_Multiple_Learnable_Expert_CVPR_2023_paper.pdf", target="blank">Wang et al.</a>',
      year: 2023,
      interpretability_method: 'Text-based',
      modality: 'X-ray',
      dataset: 'IU Chest X-ray, MIMIC-CXR'
      },
      {
      id: 50,
      method: '<a href="https://arxiv.org/abs/2303.09117", target="blank">Chen et al.</a>',
      year: 2023,
      interpretability_method: 'Text-based',
      modality: 'X-ray',
      dataset: 'IU Chest X-ray, MIMIC-CXR'
      },
      {
      id: 51,
      method: '<a href="https://www.sciencedirect.com/science/article/pii/S1361841523000592", target="blank">Yang et al.</a>',
      year: 2023,
      interpretability_method: 'Text-based',
      modality: 'X-ray',
      dataset: 'IU Chest X-ray, MIMIC-CXR'
      },
      {
      id: 52,
      method: '<a href="https://openaccess.thecvf.com/content/CVPR2023W/SAIAD/papers/Patricio_Coherent_Concept-Based_Explanations_in_Medical_Image_and_Its_Application_to_CVPRW_2023_paper.pdf", target="blank">Patrício et al.</a>',
      year: 2023,
      interpretability_method: 'CBM',
      modality: 'Dermoscopy',
      dataset: 'PH2, Derm7pt'
      }
  ];

  const sortableTable = new SortableTable();
  // set table element
  sortableTable.setTable(document.querySelector('#my-table1'));
  // set data to be sorted
  sortableTable.setData(data);
  // handling events
  sortableTable.events()
      .on('sort', (event) => {
        console.log(`[SortableTable#onSort]
      event.colId=${event.colId}
      event.sortDir=${event.sortDir}
      event.data=\n${JSON.stringify(event.data)}`);
      });
