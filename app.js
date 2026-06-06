// MASTER PYQ COLLECTION MAPPED BY SUBJECT FIELDS
const questionDatabase = [
    {
        subject: "Anatomy",
        questionText: "Upward movement of the thyroid gland during swallowing is primarily prevented due to the structural attachment of which of the following?",
        options: ["Berry ligament", "Pretracheal fascia", "Sternothyroid muscle", "Thyrohyoid membrane"],
        correctAnswer: 1,
        explanation: "The outer layer of the thyroid capsule is continuous with the pretracheal fascia, anchoring the gland to the cricoid and thyroid cartilages, ensuring it moves exclusively with deglutition."
    },
    {
        subject: "Anatomy",
        questionText: "The reason for the long left recurrent laryngeal nerve is due to the persistence of which embryological arch artery?",
        options: ["3rd arch", "4th arch", "5th arch", "2nd arch"],
        correctAnswer: 1,
        explanation: "The left recurrent laryngeal nerve winds around the arch of the aorta, which is derived from the embryological 4th aortic arch."
    },
    {
        subject: "Anatomy",
        questionText: "Ligation of the hepatic artery will impair blood supply in which combination of vessels?",
        options: ["Right gastric and Right gastroepiploic artery", "Right gastric and Left gastric artery", "Right gastroepiploic and short gastric vessels", "Right gastric and short gastric vessels"],
        correctAnswer: 0,
        explanation: "The right gastric artery and right gastroepiploic artery are downstream branches originating from the common hepatic lineage, while the left gastric arises from the celiac trunk."
    },
    {
        subject: "Anatomy",
        questionText: "Which of the following represents a Wolffian duct remnant in females?",
        options: ["Pouch of Douglas", "Uterovesical pouch", "Gartner's cyst", "Broad ligament"],
        correctAnswer: 2,
        explanation: "Gartner's cysts represent benign vaginal inclusion lesions derived from persistent remnants of the caudal mesonephric (Wolffian) duct system."
    },
    {
        subject: "Anatomy",
        questionText: "Nerve supply of the extraocular muscles is constituted by all of the following except:",
        options: ["Ophthalmic nerve", "Oculomotor nerve", "Trochlear nerve", "Abducent nerve"],
        correctAnswer: 0,
        explanation: "The ophthalmic nerve is a major sensory branch of the Trigeminal nerve (CN V1) and carries no motor fibers for extraocular muscles."
    },
    {
        subject: "Anatomy",
        questionText: "Claudication due to popliteal femoral incompetence is primarily localized to which region?",
        options: ["Thigh", "Calf", "Buttocks", "Feet"],
        correctAnswer: 1,
        explanation: "Superficial femoral and popliteal arterial vascular disease selectively induces downstream ischemic muscle claudication parameters across the calf."
    },
    {
        subject: "Anatomy",
        questionText: "Which muscle group is paralyzed if there is hyperextension of metacarpophalangeal joint paired with flexion of the interphalangeal joints?",
        options: ["Extensor digitorum", "Interossei and lumbricals", "Adductor pollicis", "Pronator quadratus muscle"],
        correctAnswer: 1,
        explanation: "Lumbricals and interossei perform intrinsic flexion at the MCP joints and extension at the IP joints; their simultaneous paralysis generates clawing."
    },
    {
        subject: "Anatomy",
        questionText: "A tumor of the uncinate process of the pancreas will directly compress which adjacent blood vessel?",
        options: ["Portal vein", "Superior mesenteric artery", "Inferior mesenteric artery", "Common hepatic artery"],
        correctAnswer: 1,
        explanation: "The superior mesenteric artery runs immediately anterior to the anatomical uncinate process layout of the pancreatic head."
    },
    {
        subject: "Anatomy",
        questionText: "A boy presents after a motor vehicle accident. CT brain shows an injury isolated to the posterior end of the superior temporal gyrus. Deficits match which clinical description?",
        options: ["Fluent aphasia", "Non-fluent aphasia", "Conduction aphasia", "Global motor apraxia"],
        correctAnswer: 0,
        explanation: "Lesions in the posterior portion of the left superior temporal gyrus (Wernicke area) compromise the comprehension of language, producing fluent aphasia."
    },
    {
        subject: "Anatomy",
        questionText: "A 65-year-old lady presents with an isolated vascular stroke affecting the inferior frontal gyrus. Which functional center is impaired?",
        options: ["Visual cortex", "Auditory field", "Wernicke's center", "Motor speech area"],
        correctAnswer: 3,
        explanation: "The left inferior frontal gyrus contains Broca's area, which controls motor programming outputs for expressive speech."
    },
    {
        subject: "Physiology",
        questionText: "Where is the highest oxygen concentration present within the fetal circulatory pathway?",
        options: ["Superior Vena Cava (SVC)", "Inferior Vena Cava (IVC)", "Right Ventricle", "Aorta"],
        correctAnswer: 1,
        explanation: "Oxygenated placental blood returns via the umbilical vein and shunts through the ductus venosus directly into the inferior vena cava."
    },
    {
        subject: "Physiology",
        questionText: "When the Ventilation-Perfusion ratio (V/Q) equals infinity, this clinically describes:",
        options: ["Ventilation-perfusion matching", "Dead space", "Shunt pathway mechanism", "Equilibrium partial pressure"],
        correctAnswer: 1,
        explanation: "An area showing normal gas ventilation but zero blood perfusion produces an infinite V/Q value, representing alveolar dead space parameters."
    },
    {
        subject: "Physiology",
        questionText: "Which major structural proteoglycan is present inside the glomerular basement membrane to maintain its charge selectivity?",
        options: ["Keratan sulphate 1", "Keratan sulphate 2", "Heparan sulphate", "Chondroitin sulphate"],
        correctAnswer: 2,
        explanation: "Heparan sulphate proteoglycans provide the strong negative electrical charge barrier that repels anionic serum proteins like albumin."
    },
    {
        subject: "Physiology",
        questionText: "A female patient notices tingling over her arm after holding her hands under her head while sleeping. Which fiber type is most susceptible to this pressure block?",
        options: ["A-alpha fibers", "B-fibers", "C-fibers", "Sympathetic post-ganglionic fibers"],
        correctAnswer: 0,
        explanation: "Large, myelinated A-type somatic nerve fibers are highly vulnerable to physical, mechanical compression changes."
    },
    {
        subject: "Physiology",
        questionText: "Which reflex inhibits gastric emptying when hypertonic solutions or high acid concentrations enter the duodenal lumen?",
        options: ["Enterogastric reflex", "Gastroileal reflex", "Gastrocolic reflex", "Myenteric localized cascade"],
        correctAnswer: 0,
        explanation: "The enterogastric reflex triggers neural and hormonal suppression of stomach motility when acid levels spike inside the duodenum."
    },
    {
        subject: "Physiology",
        questionText: "The marked slowing of motor and sensory signal velocities observed in Multiple Sclerosis is primarily caused by:",
        options: ["Defects at the Node of Ranvier", "Loss of the myelin sheath", "Leaking of voltage-gated sodium channels", "Calcium channel degradation"],
        correctAnswer: 1,
        explanation: "Demyelination within the CNS disrupts fast saltatory conduction, slowing or completely blocking neural pathway transmission."
    },
    {
        subject: "Biochemistry",
        questionText: "A patient diagnosed with deep vein thrombosis (DVT) and pulmonary embolism is initiated on Warfarin therapy. Which of the following clotting factors will exhibit a decreased concentration of γ-carboxyglutamate residues?",
        options: ["Factor 11", "Factor 2", "Tissue factor", "Factor 5"],
        correctAnswer: 1,
        explanation: "Warfarin acts as a Vitamin K antagonist, directly inhibiting the enzyme-mediated modification of factors II, VII, IX, and X."
    },
    {
        subject: "Physiology",
        questionText: "Why is donor blood stored in Citrate-Phosphate-Dextrose (CPD) superior for hypoxic recipients compared to Acid-Citrate-Dextrose (ACD)?",
        options: ["It features a lower overall P50 value", "It runs more acidic inside serum", "The rate of fall in 2,3-DPG is slower", "It increases pure oxygen affinity parameters"],
        correctAnswer: 2,
        explanation: "CPD storage preserves intracellular 2,3-DPG profiles, facilitating regular oxygen unloading into target peripheral tissues."
    },
    {
        subject: "Physiology",
        questionText: "Which anatomical node is universally referred to as the 'Window of the limbic system'?",
        options: ["Hypothalamus", "Amygdala", "Hippocampus", "Thalamus"],
        correctAnswer: 1,
        explanation: "The amygdala acts as a critical hub connecting visual, auditory, and higher neocortical inputs directly to core limbic centers."
    },
    {
        subject: "Physiology",
        questionText: "Cerebral blood flow auto-regulation holds the blood flow constant across which systemic pressure range?",
        options: ["60-150 mm Hg", "90-120 mm Hg", "50-100 mm Hg", "120-180 mm Hg"],
        correctAnswer: 0,
        explanation: "Cerebral circulation uses auto-regulatory adjustments to stay flat across systemic pressures from 60 to 150 mmHg."
    },
    {
        subject: "Biochemistry",
        questionText: "By what primary molecular step does the hormone hepcidin regulate systemic iron storage?",
        options: ["Inhibiting absorption of cobalamin", "Blocking the transfer of iron into enterocytes/macrophages", "Halting folic acid synthesis pathways", "Deactivating respiratory oxidase activity"],
        correctAnswer: 1,
        explanation: "Hepcidin binds to the iron exporter ferroportin, causing its breakdown and trapping iron inside cells."
    },
    {
        subject: "Physiology",
        questionText: "Which laboratory technique is uniquely designed to track real-time current flows crossing a single isolated ion channel?",
        options: ["Patch clamp", "Voltage clamp", "Iontophoresis", "Galvanometry"],
        correctAnswer: 0,
        explanation: "The patch-clamp technique uses an ultra-fine pipette tip to isolate and record individual cell membrane ion channel openings."
    },
    {
        subject: "Biochemistry",
        questionText: "A 4-year-old child from a consanguineous marriage is observed to have urine that turns almost pitch-black upon standing. Growth and development parameters are normal. Which of the following biochemical intermediates is characteristically elevated in this condition?",
        options: ["Methylmalonate", "Phenylpyruvate", "Homogentisate", "α-Ketoisovalerate"],
        correctAnswer: 2,
        explanation: "Alkaptonuria involves a deficiency of homogentisic acid oxidase, causing homogentisate accumulation and air-oxidation to dark pigments."
    },
    {
        subject: "Biochemistry",
        questionText: "Which of the following structural statements regarding protein configuration is correct?",
        options: ["Secondary structures comprise the gross three-dimensional profile", "Secondary structures are primarily stabilized by covalent disulfide bridges", "Denaturation leaves secondary and tertiary structural fields fully intact", "Secondary and tertiary structures are entirely dependent on the primary amino acid sequence"],
        correctAnswer: 3,
        explanation: "The spatial folding patterns of both secondary and tertiary conformations are driven by the underlying primary sequence of amino acids."
    },
    {
        subject: "Biochemistry",
        questionText: "During state shifts where the insulin-to-glucagon ratio is low, which hepatic enzyme exhibits high activity?",
        options: ["Glucokinase", "Hexokinase", "Phosphofructokinase", "Glucose-6-phosphatase"],
        correctAnswer: 3,
        explanation: "A low insulin-to-glucagon ratio characterizes fasting states, activating key gluconeogenic pathways via glucose-6-phosphatase."
    },
    {
        subject: "Pathology",
        questionText: "Ochronosis manifests as deep pigment deposition within intervertebral discs and ear cartilage due to systemic accumulation of:",
        options: ["Homogentisic acid", "Xanthurenate", "Glyoxylate", "Phenylpyruvic intermediate"],
        correctAnswer: 0,
        explanation: "Chronic alkaptonuria causes polymer pigments of homogentisic acid to bind selectively to systemic connective tissues."
    },
    {
        subject: "Biochemistry",
        questionText: "Total and conjugated fractions of bilirubin inside a serum specimen are quantitatively evaluated using the:",
        options: ["Van den Bergh reaction", "Ehrlich's Reaction", "Schlesinger's Reaction", "Fouchet's Reaction"],
        correctAnswer: 0,
        explanation: "Diazotized sulfanilic acid reacts directly with water-soluble conjugated bilirubin to provide quick color readouts."
    },
    {
        subject: "Biochemistry",
        questionText: "If a double-stranded DNA sample contains exactly 28% Adenine, what is the total percentage of Cytosine present?",
        options: ["23%", "25%", "46%", "22%"],
        correctAnswer: 3,
        explanation: "By Chargaff's rules, A=T (28%+28%=56%). The remainder is G+C (44%), split evenly, giving 22% Cytosine."
    },
    {
        subject: "Ophthalmology",
        questionText: "High therapeutic doses of Niacin (Vitamin B3) can provoke which of the following serious ocular complications?",
        options: ["Optic nerve structural avulsion", "Cystoid macular edema (CME)", "Nuclear sclerotic cataract development", "Exudative retinal detachment"],
        correctAnswer: 1,
        explanation: "Niacin intake exceeding 3 grams per day can induce reversible cystoid macular edema changes in the central macula."
    },
    {
        subject: "Biochemistry",
        questionText: "Which statement accurately describes the underlying molecular mutation mechanism driving Huntington's chorea?",
        options: ["It is driven by a simple loss-of-function point deletion", "It tracks an autosomal recessive line of inheritance", "It represents a trinucleotide repeat expansion type of disorder", "It displays an increased array of specific CAA coding blocks"],
        correctAnswer: 2,
        explanation: "Huntington's disease is an autosomal dominant disorder caused by a pathologic expansion of unstable CAG trinucleotide repeats."
    },
    {
        subject: "Biochemistry",
        questionText: "Which amino acid residue contributes most significantly to a protein's maximum ultraviolet light absorption spectrum at 280 nm?",
        options: ["Tryptophan", "Leucine", "Proline", "Arginine"],
        correctAnswer: 0,
        explanation: "Aromatic amino acids absorb UV light; tryptophan absorbs roughly ten times more efficiently than tyrosine or phenylalanine at 280 nm."
    },
    {
        subject: "Biochemistry",
        questionText: "Which of the following serves as the richest natural dietary source of Cyanocobalamin (Vitamin B12)?",
        options: ["Meat", "Green leafy vegetables", "Corn oil complexes", "Sunflower seed extracts"],
        correctAnswer: 0,
        explanation: "Vitamin B12 is synthesized exclusively by bacteria and concentrated naturally within animal tissues and organ meats."
    },
    {
        subject: "Biochemistry",
        questionText: "Which amino acid serves as the mandatory primary substrate for the cellular synthesis of Nitric Oxide (NO)?",
        options: ["Glycine", "Arginine", "Tyrosine", "Threonine"],
        correctAnswer: 1,
        explanation: "Nitric Oxide Synthase converts L-arginine into citrulline and free nitric oxide gas molecules."
    },
    {
        subject: "Pharmacology",
        questionText: "What changes occur to the kinetic parameters Km and Vmax in the presence of a non-competitive enzyme antagonist?",
        options: ["Km remains unchanged; Vmax decreases", "Km increases; Vmax decreases", "Km decreases; Vmax increases", "Km increases; Vmax increases"],
        correctAnswer: 0,
        explanation: "Non-competitive inhibitors do not affect substrate binding affinity (Km) but reduce structural velocity output capacity (Vmax)."
    },
    {
        subject: "Biochemistry",
        questionText: "Werner syndrome presents with accelerated premature systemic aging due to a genetic defect affecting which enzyme class?",
        options: ["Telomerase complexes", "Caspase arrays", "DNA topoisomerase", "DNA helicase"],
        correctAnswer: 3,
        explanation: "Mutations in the WRN gene disrupt normal RecQ-type DNA helicase activity, destabilizing genome replication."
    },
    {
        subject: "Biochemistry",
        questionText: "Which of the following dietary fiber components is completely insoluble in water?",
        options: ["Pectin matrix", "Lignin", "Hemicellulose grids", "Mucilage compounds"],
        correctAnswer: 1,
        explanation: "Lignin forms a rigid polymer structure within plant cell walls that is completely resistant to water dissolution."
    },
    {
        subject: "Medicine",
        questionText: "According to NCEP-ATP III diagnostic criteria, which parameter is NOT included in the core definition of Metabolic Syndrome?",
        options: ["High LDL", "Hypertriglyceridemia", "Central Obesity", "Elevated blood pressure measurements"],
        correctAnswer: 0,
        explanation: "Metabolic syndrome tracks high fasting glucose, low HDL, elevated triglycerides, high BP, and waist sizing, but excludes raw LDL metrics."
    },
    {
        subject: "Biochemistry",
        questionText: "What molecular mechanism allows for the tissue-specific expression of apoprotein B-48 inside human intestinal cells?",
        options: ["DNA structural rearrangement", "Alternative splicing of pre-mRNA transcripts", "RNA editing", "Translational target block suppression"],
        correctAnswer: 2,
        explanation: "Cytidine deaminase converts a CAA sense codon to a premature UAA stop codon in the intestine via post-transcriptional RNA editing."
    },
    {
        subject: "Pathology",
        questionText: "A 30-year-old male presents with painful swelling around the knee joint. Biopsy confirms numerous multinucleated giant cells interspersed evenly among uniform mononuclear stromal cells. What is the diagnosis?",
        options: ["Osteosarcoma", "Ewing's sarcoma", "Giant cell tumour", "Chondrosarcoma"],
        correctAnswer: 2,
        explanation: "Giant cell tumors characteristically present around the knee epiphysis with a highly vascular stromal background of mononuclear and osteoclast giant cells."
    },
    {
        subject: "Pathology",
        questionText: "A 30-year-old woman presenting with high TSH and anemia is treated with folate. Her anemia improves but neurological symptoms worsen. What is the mechanism?",
        options: ["Folate was completely blocked from intestinal absorption channels", "An unmasked pyridoxine co-factor structural deficiency occurred", "Folate therapy drove rapid consumption of remaining Vitamin B12 stores, worsening spinal cord subacute degeneration", "Central nervous system folate reductase fields failed to respond"],
        correctAnswer: 2,
        explanation: "Folate administration bypasses the folate trap to fix megaloblastic anemia but depletes cobalamin reserves, accelerating neurological decline."
    },
    {
        subject: "Pathology",
        questionText: "A bronchoscopic biopsy from a chronic smoker shows normal pseudostratified ciliated columnar tissue replaced entirely by stratified squamous epithelium. What adaptation is this?",
        options: ["Hyperplasia", "Dysplasia", "Metaplasia", "Anaplasia"],
        correctAnswer: 2,
        explanation: "Metaplasia is a reversible adaptive replacement of one adult cell type with another that is more resistant to chronic stress irritations."
    },
    {
        subject: "Pathology",
        questionText: "A 30-year-old woman presenting with thyroid swelling and high TSH undergoes a thyroidectomy. Pathology shows extensive lymphocytic infiltrate with germinal centers and abundant Hurthle cells. What is the diagnosis?",
        options: ["Graves disease", "Hashimoto's thyroiditis", "Follicular carcinoma", "Medullary thyroid carcinoma"],
        correctAnswer: 1,
        explanation: "Hashimoto's thyroiditis features progressive autoimmune destruction of follicles, which undergo atrophic Hurthle cell metaplasia."
    },
    {
        subject: "Pathology",
        questionText: "Which distinct histopathologic finding is seen on a cardiac muscle biopsy sample following post-myocardial infarction reperfusion injury?",
        options: ["Diffuse cellular waviness patterns", "Eosinophilic contraction bands", "Early neutrophilic cell margination inside vessels", "Simple hydro-degenerative cell swelling"],
        correctAnswer: 1,
        explanation: "Reperfusion drives a massive influx of extracellular calcium, causing actin-myosin hypercontraction into dense eosinophilic contraction bands."
    },
    {
        subject: "Pathology",
        questionText: "Diffuse podocyte foot process effacement without significant immune complex deposits is the hallmark of Minimal Change Disease or:",
        options: ["Membranous glomerulitis", "Segmental glomerulosclerosis", "IgA nephropathy matrices", "Diabetic diffuse glomerulosclerosis"],
        correctAnswer: 1,
        explanation: "Podocyte foot process effacement seen under electron microscopy underpins structural protein-leak syndromes like focal segmental glomerulosclerosis."
    },
    {
        subject: "Pathology",
        questionText: "Which element of Virchow's Triad plays the most critical role in initiating baseline thrombus formation within high-flow arterial lines?",
        options: ["Transient reflex vasoconstriction", "Coagulation cascade activation sequences", "Localized platelet margin activation", "Endothelial injury"],
        correctAnswer: 3,
        explanation: "Endothelial injury directly exposes highly thrombogenic subendothelial collagen, initiating the clotting sequence in high-flow systems."
    },
    {
        subject: "Pathology",
        questionText: "A 33-year-old man presents with a 5-week history of calf pain, swelling, and muscle biopsy revealing numerous eosinophils along with peripheral blood eosinophilia. Which cytokine drives this?",
        options: ["IL 2", "IL 4", "IL 1", "IL 6"],
        correctAnswer: 1,
        explanation: "Th2 immune responses secrete IL-4 and IL-5, which actively recruit and activate tissue eosinophils."
    },
    {
        subject: "Pathology",
        questionText: "Which of the following statements is clinically true regarding the necrotizing vasculitis Polyarteritis Nodosa (PAN)?",
        options: ["Microscopy rules out structural fibrinoid necrosis involvement", "Serology shows a high rate of ANCA positivity", "30% of people have HbsAg positive", "It typically causes secondary hypogammaglobulinemia"],
        correctAnswer: 2,
        explanation: "Roughly 30% of PAN cases involve active Hepatitis B virus immune complexes depositing directly within vascular walls."
    },
    {
        subject: "Pathology",
        questionText: "A 23-year-old worker presents with fatigue and tiredness. Hb is 9g%, MCV 101 FL. Peripheral smear shows microcytic RBCs and hypersegmented neutrophils. What is the diagnosis?",
        options: ["Lead poisoning", "Iron deficiency anemia", "Chronic alcoholism", "Hemolytic anemia"],
        correctAnswer: 0,
        explanation: "Chronic lead exposure disrupts multiple enzyme pathways, leading to a mixed microcytic picture with constitutional tiredness features."
    },
    {
        subject: "Pathology",
        questionText: "What is the defining feature of leukocyte chemotaxis during an acute inflammatory response?",
        options: ["Bi-directional random movement of neutrophils", "Heightened structural adhesion to vascular endothelial intima", "Upregulation of generalized cellular phagocytosis capacity", "Unidirectional locomotion of neutrophils"],
        correctAnswer: 3,
        explanation: "Chemotaxis describes targeted, unidirectional cell movement guided along a chemical concentration gradient."
    },
    {
        subject: "Pharmacology",
        questionText: "Which of the following molecularly targeted anti-cancer agents acts as a competitive inhibitor of tyrosine kinase?",
        options: ["Imatinib and sunitinib", "Letrozole", "Bicalutamide", "Fulvestrant"],
        correctAnswer: 0,
        explanation: "Small-molecule targeted therapeutics ending in '-nib' competitively block ATP binding on functional oncogenic tyrosine kinases."
    },
    {
        subject: "Pharmacology",
        questionText: "Which of the following choices does NOT classify as a gastrointestinal prokinetic agent?",
        options: ["Metoclopramide", "Domperidone", "Mosapride", "Diphenylmethane"],
        correctAnswer: 3,
        explanation: "Diphenylmethane options function as stimulant contact laxatives rather than prokinetic pro-motility agents."
    },
    {
        subject: "Pharmacology",
        questionText: "Which anti-cancer antimetabolite drug exerts its direct cytotoxicity by blocking de novo purine nucleotide synthesis pathways?",
        options: ["6 Mercaptopurine", "Actinomycin D", "Mitomycin C", "Asparaginase"],
        correctAnswer: 0,
        explanation: "6-Mercaptopurine is converted into fraudulent monoribonucleotides that block core purine interconversion pathways."
    },
    {
        subject: "Pharmacology",
        questionText: "What is the established systemic Drug of Choice (DOC) for managing severe, extensive Onychomycosis?",
        options: ["Terbinafine", "Fluconazole", "Nystatin", "Itraconazole"],
        correctAnswer: 0,
        explanation: "Terbinafine concentrates inside keratinized nail matrix tissues, where it blocks squalene epoxidase to treat dermatophytes."
    },
    {
        subject: "Pharmacology",
        questionText: "By what primary molecular mechanism does theophylline induce a mild diuretic effect within the kidneys?",
        options: ["Phosphodiesterase-3 inhibition", "Phosphodiesterase-4 suppression", "Beta-2 adrenergic receptor agonism", "Adenosine A1 receptor antagonism"],
        correctAnswer: 3,
        explanation: "Theophylline blocks proximal tubule adenosine A1 receptors, halting the reabsorption of fluids and solutes."
    },
    {
        subject: "Pharmacology",
        questionText: "Which antimicrobial agent should be strictly avoided in a chronic asthmatic patient managed on active daily theophylline therapy?",
        options: ["Erythromycin", "Amoxicillin", "Cefotaxime", "Cotrimoxazole"],
        correctAnswer: 0,
        explanation: "Macrolide antibiotics like erythromycin strongly inhibit CYP1A2, driving toxic accumulations of theophylline."
    },
    {
        subject: "Pharmacology",
        questionText: "What is the clinical system prophylactic Drug of Choice (DOC) for the prevention of motion sickness?",
        options: ["Promethazine", "Prochlorperazine", "Metoclopramide", "Itopride"],
        correctAnswer: 0,
        explanation: "Antihistaminic antiemetics like promethazine with potent central anticholinergic properties provide optimal vestibular protection."
    },
    {
        subject: "Pharmacology",
        questionText: "Which antihypertensive agent should be avoided in patients displaying high baseline serum uric acid levels or active gouty tophi?",
        options: ["Hydrochlorothiazide", "Enalapril", "Prazosin", "Atenolol"],
        correctAnswer: 0,
        explanation: "Thiazide diuretics compete with uric acid for organic anion transport mechanics inside proximal tubules, elevating serum urate."
    },
    {
        subject: "Pharmacology",
        questionText: "What is the primary target alteration mechanism behind beta-lactamase mediated resistance to standard penicillin agents?",
        options: ["Altered structural configuration of Penicillin-Binding Proteins (PBPs)", "Active trans-membrane drug efflux pumping", "Breaks drug structure", "Ribosomal protection structural configuration changes"],
        correctAnswer: 2,
        explanation: "Bacterial beta-lactamase enzymes directly cleave the internal amide bond of the four-membered beta-lactam ring to break the structure."
    },
    {
        subject: "Pharmacology",
        questionText: "A patient stable on lithium therapy is prescribed a Thiazide diuretic for new-onset hypertension and quickly develops lithium toxicity. Why?",
        options: ["Thiazide increases the tubular reabsorption of lithium", "Thiazide inhibits the metabolism of lithium", "Thiazides act as an add on the drug to lithium", "Thiazides actively displace lithium from plasma proteins"],
        correctAnswer: 0,
        explanation: "Thiazide-induced sodium loss triggers compensatory proximal renal tubule reabsorption of sodium and lithium concurrently."
    },
    {
        subject: "Pharmacology",
        questionText: "Which hormone binds to a Receptor Tyrosine Kinase (RTK) trans-membrane cell structure?",
        options: ["Insulin", "TSH", "LH", "MSH"],
        correctAnswer: 0,
        explanation: "The insulin receptor is a classic heterotetrameric transmembrane receptor tyrosine kinase glycoprotein."
    },
    {
        subject: "Pharmacology",
        questionText: "Pegloticase is indicated for the treatment of which clinical condition?",
        options: ["Ankylosing spondylosis", "Reactive限制性关节炎", "Chronic tophaceous gout", "Refractory Rheumatoid arthritis"],
        correctAnswer: 2,
        explanation: "Pegloticase is a pegylated recombinant uricase enzyme that metabolizes plasma uric acid directly into allantoin for chronic gout."
    },
    {
        subject: "Pharmacology",
        questionText: "Which fluoroquinolone antimicrobial is strictly contraindicated in patients with severe baseline liver disease?",
        options: ["Levofloxacin", "Pefloxacin", "Ofloxacin", "Lomefloxacin"],
        correctAnswer: 1,
        explanation: "Pefloxacin undergoes heavy hepatic transformation and can accumulate dangerously in patients with compromised liver function."
    },
    {
        subject: "Medicine",
        questionText: "A person ascending to 3000m altitude develops acute mountain sickness. All of the following are indicated EXCEPT:",
        options: ["Intravenous digoxin", "Oxygen supplementation", "Immediate descent", "Acetazolamide"],
        correctAnswer: 0,
        explanation: "Digoxin plays no physiological role in managing acute hypobaric hypoxia or high-altitude capillary shifts."
    },
    {
        subject: "Pharmacology",
        questionText: "A diabetic patient with COPD develops postoperative urinary retention. Which drug provides safe short-term therapeutic relief?",
        options: ["Bethanechol", "Methacholine", "Terazosin", "Tamsulosin"],
        correctAnswer: 0,
        explanation: "Bethanechol is a muscarinic agonist that stimulates the detrusor muscle without inducing severe bronchospastic shifts in COPD."
    },
    {
        subject: "Pharmacology",
        questionText: "What is the primary baseline Drug of Choice (DOC) for managing invasive aspergillosis?",
        options: ["Posaconazole", "Voriconazole", "Liposomal AMB", "Caspofungin"],
        correctAnswer: 1,
        explanation: "Voriconazole inhibits fungal ergosterol synthesis and has proven superior to amphotericin B in primary trial datasets."
    },
    {
        subject: "Pharmacology",
        questionText: "Which drug achieves its antimicrobial efficacy by inhibiting the transcription of DNA to RNA?",
        options: ["Rifampicin", "Nitrofurantoin", "Ciprofloxacin", "Novobiocin"],
        correctAnswer: 0,
        explanation: "Rifampicin directly binds to the beta subunit of bacterial RNA polymerase, structurally jamming transcription expansion steps."
    },
    {
        subject: "Pharmacology",
        questionText: "A patient on Fluphenazine develops drug-induced tremors, rigidity, and excessive salivation. What is the first-line management?",
        options: ["Selegiline", "Trihexyphenidyl", "Pramipexole", "Amantadine"],
        correctAnswer: 1,
        explanation: "Central anticholinergics like trihexyphenidyl restore the striatal dopamine-acetylcholine balance skewed by neuroleptics."
    },
    {
        subject: "Pharmacology",
        questionText: "Which of the following agents is used postoperatively to reverse neuromuscular blockade induced by non-depolarizing competitive muscle relaxants?",
        options: ["Neostigmine", "Carbachol", "Succinylcholine", "Physostigmine"],
        correctAnswer: 0,
        explanation: "Neostigmine inhibits acetylcholinesterase, accumulating acetylcholine at the NMJ to displace competitive blockers."
    },
    {
        subject: "Pharmacology",
        questionText: "Zero-order drug elimination kinetics is otherwise known as saturation kinetics. It is independent of which parameter?",
        options: ["Plasma concentration", "Clearance", "Volume of distribution", "Half life"],
        correctAnswer: 0,
        explanation: "In zero-order kinetics, a fixed, absolute amount of drug is cleared per unit time regardless of its current plasma concentration."
    },
    {
        subject: "Forensic Medicine",
        questionText: "Which primary piece of legislation defines criminal definitions and punishments for child sexual abuse scenarios across all of India?",
        options: ["Child Sexual Abuse Prevention Act", "Protection Of Children from Sexual Offences Act (POCSO)", "Child Welfare Act", "Sexual Offences Act"],
        correctAnswer: 1,
        explanation: "The POCSO Act of 2012 provides a strict legal framework for protecting individuals under the age of 18 from sexual assault and abuse."
    },
    {
        subject: "Forensic Medicine",
        questionText: "Punishment guidelines for perjury and fabricating false evidence under official legal oath map to which Indian Penal Code (IPC) section?",
        options: ["IPC 191", "IPC 192", "IPC 193", "IPC 197"],
        correctAnswer: 2,
        explanation: "IPC 193 prescribes a penalty of up to 7 years in prison plus structural financial fines for providing fabricated false evidence."
    },
    {
        subject: "Forensic Medicine",
        questionText: "When civil negligence is brought up against a doctor, where does the primary burden (onus) of proof lie?",
        options: ["Judicial first-degree magistrate", "Police not below the level of sub-inspector", "Doctor", "Patient"],
        correctAnswer: 3,
        explanation: "The plaintiff (patient) must establish a breach of duty and subsequent damage, unless the rule of res ipsa loquitur applies."
    },
    {
        subject: "Forensic Medicine",
        questionText: "If a deceased patient's relatives note a faded skin tattoo that is now completely invisible on external autopsy, how do you verify its presence?",
        options: ["Examine the Lymph node", "Spectrophotometer", "Ordinary light", "X-ray"],
        correctAnswer: 0,
        explanation: "Insoluble ink pigments from dermal tattoos migrate over time and collect permanently inside adjacent regional lymph nodes."
    },
    {
        subject: "Forensic Medicine",
        questionText: "Which statement is true regarding anatomical hymeneal rupture checks during child rape forensic evaluations?",
        options: ["Hymen easily tears because it is thin", "Hymen easily tears because it is in the front", "Hymen hardly tears because it is highly elastic", "Hymen hardly tears because it is situated deep"],
        correctAnswer: 3,
        explanation: "In young children, full penetration may not occur, or a thick, elastic hymen may remain intact because it is situated deep within the young vaginal vault."
    },
    {
        subject: "Forensic Medicine",
        questionText: "Magnan's symptoms (tactile hallucinations describing creeping bugs or sand underneath the skin) are pathognomonic for poisoning by:",
        options: ["Cocaine poisoning", "Cannabis", "Opium extracts", "Alcohol"],
        correctAnswer: 0,
        explanation: "Chronic cocaine toxicity induces severe central paresthesias, manifesting as tactile bugs or crawling skin sensations (formication)."
    },
    {
        subject: "Forensic Medicine",
        questionText: "Which colorimetric forensic test generates bright yellow needle-shaped rhombic crystals when picric acid interacts with prostate spermine compounds?",
        options: ["Florence test", "Barberio's test", "Acid phosphatase test", "Creatine Phosphokinase"],
        correctAnswer: 1,
        explanation: "Barberio's test uses a saturated solution of picric acid to detect spermine in seminal fluid specimens, forming yellow crystals."
    },
    {
        subject: "Forensic Medicine",
        questionText: "Under current healthcare guidelines, what is the maximum duration a magistrate can execute a formal psychiatric detention reception order for a mentally ill person?",
        options: ["30 days", "90 days", "50 days", "100 days"],
        correctAnswer: 0,
        explanation: "A standard legal reception order for inpatient psychiatric hold remains valid for an initial period of 30 days."
    },
    {
        subject: "Microbiology",
        questionText: "Which primary mosquito vector is responsible for the epidemiological transmission of the Zika virus?",
        options: ["Aedes", "Culex", "Anopheles", "None of these"],
        correctAnswer: 0,
        explanation: "Aedes mosquitoes (Aedes aegypti and albopictus) transmit Zika, dengue, and chikungunya via a common urban vector profile."
    },
    {
        subject: "Microbiology",
        questionText: "All of the following statements regarding Japanese Encephalitis are true EXCEPT:",
        options: ["Caused by flavivirus", "Humans are dead-end hosts", "Transmitted by culex", "Cattles are amplifier hosts"],
        correctAnswer: 3,
        explanation: "Pigs act as the key amplifying hosts for Japanese Encephalitis, while cattle and humans display dead-end profiles."
    },
    {
        subject: "Microbiology",
        questionText: "Which of the following pathogens lacks superantigen properties?",
        options: ["Vibrio cholera", "Streptococcal pyrogenic", "Staphylococcal enterotoxins", "None of these"],
        correctAnswer: 0,
        explanation: "Cholera toxin is a classic A-B subunit exotoxin, whereas pyrogenic and enterotoxin strains secrete superantigens."
    },
    {
        subject: "Microbiology",
        questionText: "Which pathogen is classified as a Category A high-priority bioterrorism threat agent?",
        options: ["Chikungunya", "Anthrax", "Hendra", "Influenza"],
        correctAnswer: 1,
        explanation: "Category A agents like anthrax (Bacillus anthracis), botulism, and plague pose the highest risk to national biosecurity due to easy mass dissemination."
    },
    {
        subject: "Microbiology",
        questionText: "Which selective culture agar containing sorbitol is recommended for isolating the enterohemorrhagic strain E. coli O157:H7?",
        options: ["SMAC", "Wilson and Blair medium", "Potassium tellurite in Mcleod's medium", "Deoxycholate citrate agar (DCA)"],
        correctAnswer: 0,
        explanation: "E. coli O157:H7 cannot ferment sorbitol, producing distinct colorless colonies on Sorbitol MacConkey (SMAC) agar."
    },
    {
        subject: "Microbiology",
        questionText: "What is the primary causative organism behind the clinical presentation of Donovanosis?",
        options: ["H. ducreyi", "Leishmania donovani", "K. granulomatis", "Treponema pallidum"],
        correctAnswer: 2,
        explanation: "Donovanosis is a chronic granulomatous venereal disease caused by the intracellular bacterium Klebsiella granulomatis."
    },
    {
        subject: "Microbiology",
        questionText: "Which dimorphic fungal infection is typically acquired via direct traumatic inoculation from vegetation or rose thorns?",
        options: ["Sporothrix", "Blastomycosis", "Coccidioides", "Paracoccidioides"],
        correctAnswer: 0,
        explanation: "Sporotrichosis ('rose gardener's disease') follows cutaneous traumatic inoculation of Sporothrix schenckii conidia."
    },
    {
        subject: "Microbiology",
        questionText: "Which of the following microorganisms is NOT typically involved in causing infectious acute urethritis?",
        options: ["Trichomonas", "H.ducreyi", "Chlamydia", "Gonococcus"],
        correctAnswer: 1,
        explanation: "Haemophilus ducreyi induces painful localized soft chancroid ulcers rather than internal urethritis tracks."
    },
    {
        subject: "Microbiology",
        questionText: "A patient develops intense nausea, vomiting, and stomach cramps within 3 hours of attending a social gathering. What is the cause?",
        options: ["Staphylococcus aureus", "Salmonella", "Clostridium botulinum", "Clostridium perfringens"],
        correctAnswer: 0,
        explanation: "Staphylococcus aureus preformed enterotoxins trigger rapid activation of the emetic reflex center within 1-6 hours of ingestion."
    },
    {
        subject: "Microbiology",
        questionText: "An advanced HIV patient develops severe, persistent watery diarrhea. Acid-fast stains confirm protozoan oocysts. What is the organism?",
        options: ["Cryptosporidium", "Staphylococcus aureus", "Salmonella", "Clostridium botulinum"],
        correctAnswer: 0,
        explanation: "Cryptosporidium is a classic opportunistic parasite that adheres to intestinal enterocytes, causing severe fluid loss in AIDS patients."
    },
    {
        subject: "Microbiology",
        questionText: "Lymphogranuloma Venereum (LGV) is a chronic infection of the regional lymphatic networks caused by specific serovars of:",
        options: ["Chlamydia trachomatis", "Neisseria gonorrhoeae", "Treponema pallidum", "Haemophilus ducreyi"],
        correctAnswer: 0,
        explanation: "The L1, L2, and L3 serovars of Chlamydia trachomatis invade lymphoid tissues, leading to clinical lymphogranuloma venereum."
    },
    {
        subject: "Microbiology",
        questionText: "Which critical interleukin helper signal is primarily responsible for inducing B cells to switch isotype production to IgE?",
        options: ["IL 1", "IL 3", "IL 4", "Both B & C"],
        correctAnswer: 2,
        explanation: "IL-4 and IL-13 secreted by Th2 helper pathways drive somatic recombination in B-cells toward the epsilon heavy-chain locus to produce IgE."
    },
    {
        subject: "Microbiology",
        questionText: "Point-of-care rapid diagnostic test kits for tracking persistent surface HBsAg are primarily built upon which platform?",
        options: ["Immunochromatography assays", "Chemiluminescence", "ELISA", "Immunofluorescence"],
        correctAnswer: 0,
        explanation: "Lateral flow immunochromatography tracks visible antigen-antibody migration vectors quickly across paper membranes for point-of-care screening."
    },
    {
        subject: "Microbiology",
        questionText: "By classic epidemiological definition, a hospital-acquired (nosocomial) infection manifests after admission within a minimum window of:",
        options: ["48 hours", "72 hours", "24 hours", "50 hours"],
        correctAnswer: 0,
        explanation: "Infections absent at admission but appearing 48 hours or later inside the hospital environment are classified as nosocomial events."
    },
    {
        subject: "Microbiology",
        questionText: "Which structural component produced by Neisseria gonorrhoeae directly mediates initial adherence to host mucosal surfaces?",
        options: ["Lipooligosaccharide", "Pili (fimbriae)", "IgA1 protease", "Outer membrane porin protein"],
        correctAnswer: 1,
        explanation: "Gonococcal pili (fimbriae) extend outward to attach to host mucosal surfaces and provide structural resistance to phagocytosis."
    },
    {
        subject: "PSM",
        questionText: "According to current biomedical waste rules, into which color-coded collection category should hazardous liquid chemical waste be placed?",
        options: ["White", "Yellow", "Blue", "Red"],
        correctAnswer: 1,
        explanation: "Chemical liquids, body secretions, and cytotoxic waste products go into yellow containers for disposal under biomedical waste rules."
    },
    {
        subject: "PSM",
        questionText: "Under the provisions of the Indian Factories Act, what is the maximum permissible total weekly work hours limit, including regular overtime?",
        options: ["48", "50", "60", "100"],
        correctAnswer: 2,
        explanation: "The baseline week is 48 hours, but with permitted daily overtime additions, the absolute peak limit is 60 hours under the Factories Act."
    },
    {
        subject: "PSM",
        questionText: "Following a catastrophic natural disaster event, which mass emergency routine vaccination profile is uniformly indicated?",
        options: ["vaccination against typhoid", "vaccination against cholera", "vaccination against typhoid and cholera", "vaccination against tetanus"],
        correctAnswer: 3,
        explanation: "Trauma exposures in unsanitary disaster fields require immediate tetanus immunization updates to protect injured patients."
    },
    {
        subject: "PSM",
        questionText: "What is the structural monitoring focus of the global healthcare platform known as the MONICA project?",
        options: ["Multinational monitoring of trends and determinants in Cardiovascular Disease", "Multinational of trends and determinants in cerebrovascular disease", "Multinational monitoring of trends and determinants in diabetes", "Multinational monitoring of trends and determinants in congenital heart disease"],
        correctAnswer: 0,
        explanation: "The WHO MONICA project monitored multinational trends and determinants in cardiovascular disease patterns over a ten-year cycle."
    },
    {
        subject: "PSM",
        questionText: "Under the active ESI Act, what is the maximum available duration for extended sickness benefit support for an insured person tracking active tuberculosis?",
        options: ["91 days", "1-year", "2 years", "4 years"],
        correctAnswer: 2,
        explanation: "The ESI Act provides up to 2 years of continuous extended sickness coverage for long-term chronic illnesses like tuberculosis."
    },
    {
        subject: "PSM",
        questionText: "A person reports 4 hours after having a clean wound without laceration. He had taken a TT booster 10 years before. What is the next step in management?",
        options: ["Full course Tetanus vaccine to be given", "Full dose TT with TIG", "Single-dose TT", "No need for any vaccine"],
        correctAnswer: 2,
        explanation: "Clean wounds older than 10 years since the last booster require a single Tetanus Toxoid (TT) dose to restore protective levels."
    },
    {
        subject: "PSM",
        questionText: "The major global respiratory influenza pandemics of both 1918 and 2009 were driven by which viral strain subtype?",
        options: ["H1N1", "H5N1", "H7N7", "H3N2"],
        correctAnswer: 0,
        explanation: "The H1N1 influenza subtype caused the devastating 1918 Spanish Flu and the 2009 Swine Flu pandemics."
    },
    {
        subject: "PSM",
        questionText: "What is the primary operational mission target behind the health layout known as Mission Indradhanush?",
        options: ["Non-communicable diseases", "Universal immunization", "Family planning", "Safe water and sanitation"],
        correctAnswer: 1,
        explanation: "Launched in 2014, Mission Indradhanush aims to achieve universal immunization coverage for children against vaccine-preventable diseases."
    },
    {
        subject: "Biostatistics",
        questionText: "In a study featuring a perfect normal distribution with a median value of 200 and a Standard Deviation (SD) of 20, exactly 68% of the sample values fall within which range?",
        options: ["160-240", "170-230", "180-220", "190-210"],
        correctAnswer: 2,
        explanation: "In normal distributions, Mean=Median. 68% of the population falls within +/- 1 Standard Deviation (200 +/- 20), which translates to 180-220."
    },
    {
        subject: "PSM",
        questionText: "Which of the following health administration techniques is natively based upon organizational behavioral sciences?",
        options: ["Management by objectives", "Network analysis", "Systems analysis", "Decision making"],
        correctAnswer: 0,
        explanation: "Management by objectives (MBO) is explicitly based on behavioral sciences, emphasizing communication and goal-setting."
    },
    {
        subject: "PSM",
        questionText: "According to the Sustainable Development Goals (SDGs) targets, what is the global Maternal Mortality Ratio (MMR) benchmark to be achieved by 2030?",
        options: ["< 70 / Lac live births", "< 100 / lac live births", "< 7 / 1000 live births", "< 10 / 1000 live births"],
        correctAnswer: 0,
        explanation: "SDG Goal 3 aims to reduce the global maternal mortality ratio to less than 70 per 100,000 (Lac) live births by 2030."
    },
    {
        subject: "PSM",
        questionText: "Which combination of markers is utilized for continuous routine monitoring of urban ambient air pollution frameworks?",
        options: ["Sulphur dioxide, smoke, and particulate matter", "Sulphur dioxide, Hydrogen sulphide, carbon monoxide", "Carbon dioxide, hydrogen sulphide, lead", "Sulphur dioxide, Lead and particulate matter"],
        correctAnswer: 3,
        explanation: "The core parameters of the Air Quality Index routinely track Sulphur dioxide, Lead, and particulate matter alongside other markers."
    },
    {
        subject: "Biostatistics",
        questionText: "The relative variation between separate numerical biological datasets containing different units is best compared using the:",
        options: ["Variance", "Coefficient of variation", "The standard error of mean", "Standard deviation"],
        correctAnswer: 1,
        explanation: "The coefficient of variation standardizes the measure of dispersion, allowing direct variation comparisons across different units."
    },
    {
        subject: "Biostatistics",
        questionText: "Which health economics management evaluation framework explicitly quantifies treatment outcomes using purely natural physical units?",
        options: ["Program budgeting system", "Network analysis", "Cost-effective analysis", "Cost-benefit analysis"],
        correctAnswer: 2,
        explanation: "In cost-effectiveness analysis (CEA), benefits are measured in natural units of the outcomes (e.g., life-years gained, cases prevented) rather than monetary values."
    },
    {
        subject: "Biostatistics",
        questionText: "The absolute difference in disease incidence rates between a risk-factor exposed cohort and a non-exposed cohort is defined as the:",
        options: ["Relative risk", "Attributable risk", "Population attributable risk", "Odds ratio"],
        correctAnswer: 1,
        explanation: "Attributable Risk is the absolute difference in incidence rates between an exposed group and a non-exposed group, reflecting excess risk."
    },
    {
        subject: "Biostatistics",
        questionText: "If the specific quantitative value of an independent variable x is known, the matching value of a dependent variable y can be predicted using the:",
        options: ["Coefficient of variation", "Coefficient of correlation", "Coefficient of regression", "Coefficient of determination"],
        correctAnswer: 2,
        explanation: "The regression coefficient quantifies the dynamic functional mathematical relationship to predict or find variable y knowing variable x."
    },
    {
        subject: "PSM",
        questionText: "Which clinical screening scenario provides an example of prospective screening implementation?",
        options: ["Neonate for thyroid diseases", "Immigrant screening", "Pap smear for 45-year female", "Diabetes mellitus for 40-year male"],
        correctAnswer: 1,
        explanation: "Screening of immigrants to a country is an example of prospective screening, where people are screened for the broader benefit of others."
    },
    {
        subject: "PSM",
        questionText: "A researcher gathers regional aggregate tobacco sales data alongside hospital diagnostic databases to evaluate the link between smoking and COPD. Which study design is this?",
        options: ["Cross-sectional", "Posological study", "Ecological study", "Operations research"],
        correctAnswer: 2,
        explanation: "An ecological study is an observational study where information is collected and evaluated at the group or population level rather than tracking individual data parameters."
    },
    {
        subject: "Biostatistics",
        questionText: "A study compares malnutrition rates between 100 rural children and 100 urban children (nominal data proportions). Which statistical significance test should be utilized?",
        options: ["Paired t-test", "Chi-square", "The standard error of mean", "ANOVA"],
        correctAnswer: 1,
        explanation: "The Chi-square test is ideal for analyzing and comparing categorical data proportions across independent test groups."
    },
    {
        subject: "PSM",
        questionText: "The active disinfecting property and chemical potency of bleaching powder inside water systems is primarily driven by the generation of:",
        options: ["Chlorine", "Hypochloric acid", "Hypochlorous acid", "Chloramines"],
        correctAnswer: 2,
        explanation: "The active component and disinfecting action of bleaching powder (CaOCl2) is driven by the formation of hypochlorous acid."
    },
    {
        subject: "Psychiatry",
        questionText: "Which of the following is included in a form of thought disorder?",
        options: ["Derailment", "Obsession", "Thought insertion", "Delusion"],
        correctAnswer: 0,
        explanation: "Types of formal thought disorder include derailment, pressured speech, poverty of speech, tangentiality, verbigeration, and thought blocking."
    },
    {
        subject: "Psychiatry",
        questionText: "During the course of psychotherapy, the therapist has mixed conscious and unconscious feelings towards a patient. This is clinically known as:",
        options: ["Transference", "Countertransference", "Dissociation", "Preoccupation"],
        correctAnswer: 1,
        explanation: "In psychoanalytic theory, countertransference occurs when the clinician projects their own unresolved conflicts or psychological reactions onto the client."
    }
];

// STATE CONTROLLERS
let currentFocus = "All";
let currentSize = 10;
let activeExamSheet = [];
let currentIndex = 0;
let score = 0;
let isAnswered = false;

// INTERFACE FILTER SELECTION HANDLERS
function setFocus(focusType) {
    currentFocus = focusType;
    document.querySelectorAll('.focus-btn').forEach(btn => {
        btn.classList.remove('border-blue-600', 'bg-blue-50', 'text-blue-700');
        btn.classList.add('border-gray-200', 'text-gray-700');
    });
    document.getElementById(`focus-${focusType}`).classList.add('border-blue-600', 'bg-blue-50', 'text-blue-700');
}

function setSize(sizeVal) {
    currentSize = sizeVal;
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('border-blue-600', 'bg-blue-50', 'text-blue-700');
        btn.classList.add('border-gray-200', 'text-gray-700');
    });
    document.getElementById(`size-${sizeVal}`).classList.add('border-blue-600', 'bg-blue-50', 'text-blue-700');
}

// THE SHUFFLING ENGINE
function startExam() {
    let filteredList = questionDatabase;
    if (currentFocus !== "All") {
        filteredList = questionDatabase.filter(q => q.subject === currentFocus);
    }

    if (filteredList.length === 0) {
        alert("No questions matching this subject filter were found in the database module yet!");
        return;
    }

    let pool = [...filteredList];
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    let targetSize = currentSize === "Max" ? pool.length : parseInt(currentSize);
    activeExamSheet = pool.slice(0, Math.min(targetSize, pool.length));

    currentIndex = 0;
    score = 0;
    
    document.getElementById('dashboard-view').classList.add('hidden');
    document.getElementById('quiz-view').classList.remove('hidden');
    
    loadQuestion();
}

// INJECT ACTIVE SHEET COMPONENT INTO DOM VIEW
function loadQuestion() {
    isAnswered = false;
    const currentQ = activeExamSheet[currentIndex];
    
    document.getElementById('current-q-num').innerText = currentIndex + 1;
    document.getElementById('total-q-num').innerText = activeExamSheet.length;
    document.getElementById('live-score').innerText = score;
    document.getElementById('subject-tag').innerText = currentQ.subject;
    document.getElementById('question-text').innerText = currentQ.questionText;
    
    const nextBtn = document.getElementById('next-btn');
    nextBtn.disabled = true;
    nextBtn.className = "bg-gray-300 text-gray-500 font-bold py-3 px-6 rounded-xl transition flex items-center gap-2 cursor-not-allowed";
    
    document.getElementById('explanation-box').classList.add('hidden');
    
    const container = document.getElementById('options-container');
    container.innerHTML = "";
    
    currentQ.options.forEach((option, idx) => {
        const btn = document.createElement('button');
        btn.className = "option-card w-full text-left p-4 rounded-xl border-2 border-gray-100 bg-white hover:bg-gray-50 font-medium flex justify-between items-center";
        btn.id = `option-${idx}`;
        btn.onclick = () => handleSelection(idx);
        btn.innerHTML = `<span>${option}</span><div class="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center text-xs"></div>`;
        container.appendChild(btn);
    });
}

// SELECTION FEEDBACK HANDLER
function handleSelection(selectedIdx) {
    if (isAnswered) return;
    isAnswered = true;
    
    const currentQ = activeExamSheet[currentIndex];
    const nextBtn = document.getElementById('next-btn');
    
    nextBtn.disabled = false;
    nextBtn.className = "bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition flex items-center gap-2 shadow";

    if (selectedIdx === currentQ.correctAnswer) {
        score++;
        document.getElementById('live-score').innerText = score;
    }

    currentQ.options.forEach((_, idx) => {
        const card = document.getElementById(`option-${idx}`);
        card.onclick = null;
        const indicator = card.querySelector('div');
        
        if (idx === currentQ.correctAnswer) {
            card.className = "w-full text-left p-4 rounded-xl border-2 border-green-500 bg-green-50 font-bold text-green-900 flex justify-between items-center";
            indicator.className = "w-5 h-5 rounded-full bg-green-500 text-white flex items-center justify-center text-xs";
            indicator.innerHTML = '<i class="fa-solid fa-check"></i>';
        } else if (idx === selectedIdx) {
            card.className = "w-full text-left p-4 rounded-xl border-2 border-red-500 bg-red-50 font-bold text-red-900 flex justify-between items-center";
            indicator.className = "w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center text-xs";
            indicator.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            card.className = "w-full text-left p-4 rounded-xl border-2 border-gray-100 bg-gray-50/50 text-gray-400 flex justify-between items-center";
        }
    });

    document.getElementById('explanation-text').innerText = currentQ.explanation;
    document.getElementById('explanation-box').classList.remove('hidden');
}

// NEXT STEP ENGINE PROGRESSOR
function nextQuestion() {
    if (currentIndex < activeExamSheet.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}

// FINAL RESULTS SCREEN CALCULATION VIEWS
function showResults() {
    document.getElementById('quiz-view').classList.add('hidden');
    document.getElementById('results-view').classList.remove('hidden');
    
    document.getElementById('final-score-raw').innerText = `${score} / ${activeExamSheet.length}`;
    
    const percentage = Math.round((score / activeExamSheet.length) * 100);
    document.getElementById('percentage-text').innerText = `${percentage}%`;
    
    const circle = document.getElementById('score-ring');
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;
    circle.style.strokeDashoffset = offset;
    
    let feedback = "";
    if (percentage >= 80) feedback = "Outstanding clinical precision! You are well on track to securing your target specialty residency branch.";
    else if (percentage >= 50) feedback = "Solid pass performance metrics. Focus on clarifying clinical rationales to boost baseline scores.";
    else feedback = "Good effort review sample session. Re-verify core fundamentals across highlighted past year question sheets.";
    
    document.getElementById('feedback-message').innerText = feedback;
}

function returnToDashboard() {
    document.getElementById('results-view').classList.add('hidden');
    document.getElementById('dashboard-view').classList.remove('hidden');
}
