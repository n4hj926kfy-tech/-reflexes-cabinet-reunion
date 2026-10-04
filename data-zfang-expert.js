// Guide de travail ZFANG — La Réunion — vérifié au 04/10/2026
(()=>{
  const f=KB.fiches.find(x=>x.id==='zfang');
  if(!f) return;

  f.status='Guide expert — vérifié 04/10/2026';
  f.reflex='ZFANG = 4 tests avant tout calcul : 1) exploitation réellement située à La Réunion, 2) entreprise < 250 salariés ET CA < 50 M€, 3) activité principale de l’exploitation éligible au 199 undecies B, 4) déterminer si l’on est à 50 % / 150 k€ ou à 80 % / 300 k€. Les six communes renforcées de 2026 ne rendent PAS éligible une activité normalement exclue.';
  f.ask=[
    'Quelle est l’adresse exacte de chaque exploitation réunionnaise et quels moyens humains/matériels y sont réellement affectés ?',
    'L’exploitation est-elle située à Bras-Panon, La Plaine-des-Palmistes, Saint-André, Saint-Benoît, Sainte-Rose ou Salazie ?',
    'Quel est l’effectif total de l’entreprise à la clôture ? Moins de 250 salariés ?',
    'Quel est le chiffre d’affaires annuel HT de l’entreprise, tous établissements confondus ? Moins de 50 M€ ?',
    'Quelle activité est réellement exercée dans l’exploitation concernée ? Ne pas se limiter au code APE.',
    'Cette activité entre-t-elle dans le champ du 199 undecies B ou dans un de ses secteurs expressément exclus ?',
    'Si elle est éligible : l’activité principale de l’exploitation appartient-elle à un secteur prioritaire ouvrant le taux de 80 % ?',
    'L’entreprise relève-t-elle d’un régime réel, du micro-BIC (50-0), micro-BA (64 bis) ou micro-BNC (102 ter) ?',
    'Le bénéfice est-il rattachable à cette exploitation ? Existe-t-il plusieurs établissements ou plusieurs activités à ventiler ?',
    'L’entreprise bénéficie-t-elle déjà d’un autre régime zoné visé par l’article 44 quaterdecies VII ? Une option a-t-elle été exercée ?',
    'Pour la CFE/TFPB : la collectivité ou l’EPCI a-t-il pris une délibération contraire et les options/déclarations requises ont-elles été déposées ?'
  ];
  f.detail=[
    'Article de base : CGI art. 44 quaterdecies. L’avantage porte sur le bénéfice provenant d’une exploitation située à La Réunion ; le simple siège social réunionnais ne suffit pas.',
    'Taille : moins de 250 salariés ET chiffre d’affaires annuel inférieur à 50 M€. Ces conditions s’apprécient à la clôture de chaque exercice concerné.',
    'Activité : à La Réunion, l’activité principale de l’exploitation doit relever d’un secteur éligible au régime d’investissement outre-mer de l’article 199 undecies B. De nombreux secteurs sont expressément exclus.',
    'Régime fiscal : en 2026, le dispositif n’est pas réservé au réel. Il peut aussi concerner les régimes micro visés aux articles 50-0, 64 bis et 102 ter, sous réserve de remplir toutes les autres conditions.',
    'Droit commun : abattement de 50 % du bénéfice éligible, plafonné à 150 000 € pour une période de 12 mois. Le plafond est proratisé lorsque la période diffère de 12 mois.',
    'Taux majoré : 80 %, plafond 300 000 €, notamment pour les secteurs prioritaires de l’article 44 quaterdecies III-3 et, temporairement, pour les exploitations éligibles situées dans six communes réunionnaises.',
    'Communes renforcées : Bras-Panon, La Plaine-des-Palmistes, Saint-André, Saint-Benoît, Sainte-Rose et Salazie. Dans ces communes, une activité qui est déjà éligible au dispositif bénéficie du taux renforcé ; une activité exclue ne devient pas éligible par le seul effet de l’adresse.',
    'Période du renforcement Réunion : IR 2025 à 2029 ; IS pour les exercices clos à compter du 31/12/2025 et ouverts jusqu’au 31/12/2029 ; CFE et TFPB pour 2026 à 2030.',
    'Le code APE n’est qu’un indice : l’administration retient l’activité réellement exercée et, pour le taux majoré sectoriel, l’activité principale de l’exploitation concernée.',
    'Les obligations déclaratives imposent notamment de documenter CA, effectif, adresse et activité principale de chaque exploitation, bénéfice, taux et clé de répartition du résultat global.'
  ];
  f.trap='Le piège n°1 est de confondre « commune à 80 % » et « toute entreprise de la commune à 80 % ». Exemple : un commerce de détail ou un cabinet comptable à Saint-Benoît reste hors champ si son activité est exclue. Le renforcement géographique ne supprime pas le test d’activité.';
  f.example='Une entreprise de programmation informatique (activité réelle de création de logiciels) exploitée à Saint-André, 12 salariés, 1,2 M€ de CA, bénéfice éligible 250 k€ : activité générale éligible et secteur TIC prioritaire ; Saint-André est en outre une commune renforcée. Abattement théorique = 80 % × 250 k€ = 200 k€, sous le plafond de 300 k€ ; bénéfice restant imposable = 50 k€, sous réserve des autres conditions et retraitements.';

  f.methodNote='Traiter la ZFANG comme une feuille de travail : IDENTIFIER l’exploitation → TESTER taille → QUALIFIER l’activité réellement exercée → ÉCARTER les secteurs exclus → DÉTERMINER 50 % ou 80 % → CALCULER le bénéfice rattachable et le plafond → CONTRÔLER les autres régimes → DOCUMENTer déclaration et pièces.';

  f.quickChecklist=[
    '1. Localiser précisément chaque exploitation : adresse, SIRET, locaux, personnel, matériel, autonomie réelle.',
    '2. Vérifier simultanément effectif < 250 et CA annuel < 50 M€ au niveau de l’entreprise.',
    '3. Décrire l’activité réellement exercée en une phrase opérationnelle ; relever le NAF seulement comme indice.',
    '4. Passer l’activité dans la table « secteurs exclus / exceptions » du 199 undecies B.',
    '5. Si l’activité est éligible, tester si elle entre dans un secteur prioritaire à 80 % ou dans l’une des six communes renforcées.',
    '6. Déterminer le bénéfice fiscal provenant de l’exploitation ; ventiler si plusieurs établissements ou activités.',
    '7. Calculer l’abattement : 50 % plafonné 150 k€ ou 80 % plafonné 300 k€ ; proratiser le plafond si période ≠ 12 mois.',
    '8. Vérifier les règles particulières : perfectionnement actif, intégration fiscale, coexistence avec d’autres régimes zonés.',
    '9. Compléter l’état déclaratif prévu par l’annexe III art. 49 ZB avec CA, effectif, adresse, activité, bénéfice, taux et ventilation.',
    '10. Traiter séparément CFE, CVAE éventuelle et TFPB : taux et formalités ne se déduisent pas automatiquement du calcul IS/IR.'
  ];

  f.comparison=[
    ['Situation 2026 à La Réunion','Abattement bénéfices','Plafond 12 mois','Condition déterminante'],
    ['Activité éligible, hors secteur prioritaire et hors 6 communes','50 %','150 000 €','Éligibilité générale art. 199 undecies B'],
    ['Activité éligible + secteur prioritaire','80 %','300 000 €','Activité principale de l’exploitation dans un secteur III-3'],
    ['Activité éligible + exploitation dans l’une des 6 communes renforcées','80 %','300 000 €','Adresse réelle de l’exploitation + période 2025-2029/IS correspondante'],
    ['Activité exclue au 199 undecies B, même dans une commune renforcée','0 %','0 €','Le zonage n’efface pas l’exclusion sectorielle'],
    ['Perfectionnement actif + ≥ 1/3 du CA de l’exploitation issu des opérations concernées','80 %','300 000 €','Autorisation douanière + seuil de CA'],
    ['Période différente de 12 mois','Taux identique','Plafond proratisé','Durée exacte de la période d’imposition']
  ];

  f.referenceTables=[
    {
      title:'A. Les 6 communes réunionnaises renforcées en 2026',
      intro:'Le décret n° 2026-421 du 29 mai 2026 fixe une liste exhaustive. Le taux majoré ne dispense jamais du contrôle préalable de l’activité éligible.',
      rows:[
        ['Commune','Bénéfices IR/IS','CFE','TFPB','Période renforcée'],
        ['Bras-Panon','80 %','100 %','80 %','IR 2025-2029 ; IS selon clôtures prévues ; CFE/TFPB 2026-2030'],
        ['La Plaine-des-Palmistes','80 %','100 %','80 %','Même période'],
        ['Saint-André','80 %','100 %','80 %','Même période'],
        ['Saint-Benoît','80 %','100 %','80 %','Même période'],
        ['Sainte-Rose','80 %','100 %','80 %','Même période'],
        ['Salazie','80 %','100 %','80 %','Même période']
      ]
    },
    {
      title:'B. Secteurs généralement EXCLUS — test indispensable avant tout taux',
      intro:'Ces exclusions viennent du champ de l’article 199 undecies B auquel renvoie la ZFANG à La Réunion. L’activité réellement exercée prime sur le code APE.',
      rows:[
        ['Secteur / activité','Principe ZFANG','Exceptions ou commentaire'],
        ['Commerce : achat-revente sans transformation, gros, détail, e-commerce, marchés','Exclu','Une activité distincte de transformation/production doit être analysée séparément.'],
        ['Restauration, cafés, tabac, débits de boisson','Exclu en principe','Restaurants éligibles si dirigeant/salarié maître-restaurateur ; anciens restaurants de tourisme classés au 24/07/2009 ; restaurant intégré à un hôtel lui-même classé.'],
        ['Conseil ou expertise, y compris conseil informatique','Exclu','Exclusion quelle que soit la qualification ; distinguer conseil informatique de création/maintenance de logiciels éligible.'],
        ['Éducation / formation / auto-école / enseignement','Exclu','Le sport-loisir peut relever du secteur tourisme uniquement s’il répond aux conditions touristiques spécifiques.'],
        ['Santé humaine, vétérinaire, auxiliaires médicaux, laboratoires','Exclu','L’évacuation sanitaire limitée à la mise à disposition avion + équipage sans prestation médicale peut relever d’un cas éligible.'],
        ['Action sociale : crèches, EHPAD, aide à domicile, structures sociales','Exclu','Analyser la réalité de l’activité si plusieurs branches.'],
        ['Banque, finance, assurance, courtage, change, gestion de portefeuille','Exclu','Pas de majoration géographique possible si l’activité reste exclue.'],
        ['Immobilier : promotion, marchand de biens, agences, gestion, location nue ou meublée','Exclu','Exception étroite pour certains meublés de tourisme classés avec ensemble des prestations para-hôtelières exigées et chambres d’hôtes ; vérifier le texte à la date du dossier.'],
        ['Navigation de croisière','Exclue en principe','Des régimes particuliers existent pour certains navires neufs sous conditions/agrément ; traiter séparément.'],
        ['Location sans opérateur de biens meubles','Exclue en principe','Exceptions : location directe de véhicules de tourisme à personnes physiques ≤ 2 mois ; certains navires de plaisance, sous conditions.'],
        ['Réparation / entretien automobile, dépannage, remorquage, contrôle technique, lavage auto','Exclu','Ne pas confondre avec réparation et maintenance NAVALE, secteur prioritaire.'],
        ['Services principalement fournis aux entreprises : juridique, comptable, gestion, architecture/ingénierie, publicité, intérim, sécurité, photo, secrétariat/traduction, domiciliation…','Exclus','Exceptions : services informatiques définis par le texte, BTP, auxiliaires de transport, maintenance technique, nettoyage, conditionnement à façon, centres d’appels.'],
        ['Loisirs, sport, culture','Exclus en principe','Éligibles si intégrés directement et principalement à une activité hôtelière/touristique et destinés de façon évidente à une clientèle touristique ; audiovisuel/cinéma également éligible.'],
        ['Activités associatives non lucratives','Exclues','Qualifier précisément l’activité et son caractère lucratif si situation hybride.'],
        ['Activités postales relevant du service postal','Exclues','Collecte, tri, transport de lettres/colis entrant dans le secteur postal visé.']
      ]
    },
    {
      title:'C. Services aux entreprises : la frontière qui fait souvent basculer le dossier',
      rows:[
        ['Activité','Éligibilité générale','Point de distinction'],
        ['Cabinet comptable / juridique / conseil de gestion','Non','Service principalement fourni aux entreprises expressément exclu.'],
        ['Conseil informatique / audit SI','Non en principe','Le conseil informatique est expressément visé par l’exclusion du conseil.'],
        ['Création de logiciels / programmation','Oui sous conditions','Service informatique éligible ; peut aussi être secteur TIC prioritaire.'],
        ['Gestion / maintenance informatique de systèmes et applications','Oui sous conditions','Éligible si activité réellement de gestion/maintenance et non conseil.'],
        ['Hébergement de sites / données / services web','Oui sous conditions','Éligible ; peut relever du secteur TIC prioritaire.'],
        ['BTP fourni à des entreprises','Oui sous conditions','Le BTP ne relève pas de l’exclusion des services aux entreprises ; secteur prioritaire possible.'],
        ['Location de matériel de construction AVEC opérateur','Oui sous conditions','Rattachée au BTP.'],
        ['Commissionnaire transport / manutention / entreposage / auxiliaire transport','Oui sous conditions','Exception explicite aux services aux entreprises exclus.'],
        ['Maintenance de matériel technique de production','Oui sous conditions','Doit assurer le fonctionnement d’installations ; le conseil/ingénierie n’est pas assimilé à la maintenance.'],
        ['Nettoyage de locaux / machines / ramonage / désinfection / dératisation','Oui sous conditions','Exception explicite.'],
        ['Conditionnement à façon : embouteillage / emballage pour tiers','Oui sous conditions','Exception explicite.'],
        ['Centre d’appels pour compte de tiers','Oui sous conditions','Service technique intermédiaire de relation client ; l’activité propre de l’entreprise reste à qualifier si centre interne.']
      ]
    },
    {
      title:'D. Secteurs PRIORITAIRES à 80 % — liste légale',
      intro:'Hors six communes renforcées, une exploitation réunionnaise éligible obtient le taux 80 % si son activité principale relève d’un de ces secteurs. Dans les six communes, le taux 80 % s’applique déjà à toute activité éligible.',
      rows:[
        ['Secteur prioritaire','Activités / codes utiles','Attention'],
        ['Recherche & développement','R&D biotechnologie ; autres sciences physiques/naturelles ; sciences humaines/sociales — division NAF 72','Il faut une activité principale de R&D, pas simplement une entreprise qui innove.'],
        ['Technologies de l’information et de la communication','Télécom 61.1/61.2/61.3/61.9 ; programmation 62.01 ; tierce maintenance 62.02B ; gestion installations 62.03 ; autres activités informatiques 62.09 ; données/hébergement 63.11 ; portails 63.12 ; audiovisuel 59.1 ; programmation/diffusion 60 ; productions rédactionnelles/multimédia/numériques locales','Le conseil informatique 62.02A ne doit pas être confondu avec la programmation/maintenance ; l’activité réelle prime.'],
        ['Tourisme, loisirs et nautisme liés','Hôtels 55.1 ; hébergement touristique 55.2 ; camping 55.3 ; parcs 93.21 ; loisirs 93.29 touristiques ; sport 93.1 touristique ; enseignement sport 85.51 touristique ; thermalisme/balnéo/thalasso 96.04 ; taxis 49.32 ; transports touristiques ; agences/voyagistes 79 ; location loisirs 77.21Z ; foires/congrès 82.3Z ; restauration traditionnelle sous conditions','La clientèle touristique et l’intégration à l’activité touristique sont déterminantes pour plusieurs sous-secteurs.'],
        ['Agro-nutrition','Agriculture/élevage 01 ; sylviculture 02 ; pêche/aquaculture 03 ; industries alimentaires 10 ; boissons 11','Activité principale de l’exploitation.'],
        ['Environnement','Eau 36 ; eaux usées 37 ; déchets 38 ; démantèlement/récupération ; dépollution 39 ; travaux d’isolation thermique','Vérifier le libellé NAF en vigueur et l’activité réellement exercée.'],
        ['Énergies renouvelables','Production d’électricité renouvelable ; combustibles gazeux renouvelables ; vapeur/climatisation renouvelable ; production/pose d’équipements réduisant la consommation ou améliorant la performance énergétique sous éco-conditionnalité','Les équipements doivent répondre aux conditions réglementaires lorsqu’elles sont exigées.'],
        ['Bâtiments et travaux publics','41.2 bâtiments ; 42.1 routes/rails ; 42.2 réseaux ; 42.9 génie civil ; 43.1 démolition/préparation ; 43.2 installations ; 43.3 finition ; 43.9 travaux spécialisés','Secteur prioritaire depuis la réforme ZFANG.'],
        ['Transformation de produits pour la construction','Bois 16.1/16.21/16.22/16.23 ; liège 16.29.21/23 ; peintures/vernis/mastics 20.3 ; certains additifs 20.59 ; plastiques construction 22.23 ; verre 23.11/12/14 et certains produits ; réfractaires 23.2 ; terre cuite 23.3 ; céramique isolante 23.43 ; ciment/chaux/plâtre 23.5 ; béton/ciment/plâtre 23.6 ; pierre 23.7 ; éléments métal construction 25.1','Liste technique : rechercher le code exact et le processus de transformation.'],
        ['Production cosmétique & pharmaceutique','Produits pharmaceutiques NAF 21 ; parfums/toilette 20.42 ; huiles essentielles 20.53','Production, pas simple commerce de produits.'],
        ['Industrie','Transformation de matières premières / produits semi-finis en produits fabriqués + rôle prépondérant du matériel/outillage','Deux critères cumulatifs utilisés par le BOFiP.'],
        ['Réparation et maintenance navale','NAF 33.15Z','À distinguer de la réparation automobile, exclue.'],
        ['Édition de jeux électroniques','NAF 58.21Z','Édition de jeux, pas toute activité numérique par assimilation.']
      ]
    },
    {
      title:'E. Tourisme : cas pratiques et pourcentages forfaitaires admis',
      rows:[
        ['Activité touristique','Traitement pratique','Forfait / condition utile'],
        ['Taxi','Part de l’activité touristique potentiellement au taux majoré','La part touristique peut être évaluée à 50 % du bénéfice.'],
        ['Location courte durée de voitures / véhicules légers','Secteur tourisme pour locations < 1 mois si activité éligible','La part touristique peut être évaluée à 75 % du bénéfice des locations < 1 mois ; l’éligibilité générale de location directe à personnes physiques ≤ 2 mois doit d’abord être satisfaite.'],
        ['Restauration traditionnelle','Tourisme seulement si restaurant déjà éligible au champ général','La part touristique peut être évaluée à 50 % du bénéfice ; vérifier maître-restaurateur / ancien classement / hôtel classé.'],
        ['Loisirs / sport / nautisme','80 % seulement si directement et principalement intégrés au tourisme','Clientèle touristique évidente ; base nautique citée comme exemple positif.'],
        ['Agence de voyage / voyagiste','Secteur tourisme prioritaire','Doit être physiquement implanté dans le DOM ; simple domiciliation insuffisante.'],
        ['Transport de passagers','Certaines activités touristiques éligibles','Exclusion des lignes régulières ; vérifier intégration touristique selon le type de transport.']
      ]
    },
    {
      title:'F. Calcul de l’abattement sur les bénéfices',
      rows:[
        ['Exemple','Calcul','Résultat'],
        ['Bénéfice éligible 100 k€, taux 50 %','100 000 × 50 %','Abattement 50 000 € ; bénéfice après abattement 50 000 €'],
        ['Bénéfice éligible 400 k€, taux 50 %','400 000 × 50 % = 200 000, mais plafond 150 000','Abattement 150 000 € ; bénéfice restant 250 000 €'],
        ['Bénéfice éligible 250 k€, taux 80 %','250 000 × 80 %','Abattement 200 000 € ; bénéfice restant 50 000 €'],
        ['Bénéfice éligible 500 k€, taux 80 %','500 000 × 80 % = 400 000, mais plafond 300 000','Abattement 300 000 € ; bénéfice restant 200 000 €'],
        ['Exercice de 6 mois, taux 50 %','Plafond 150 000 × 6/12','Plafond ramené à 75 000 €'],
        ['Exercice de 18 mois','Plafond annuel à proratiser selon les règles applicables aux périodes','Ne jamais laisser automatiquement 150/300 k€ sans traiter la durée.']
      ]
    },
    {
      title:'G. CFE, TFPB et CVAE : ne pas confondre avec l’abattement sur bénéfices',
      rows:[
        ['Impôt local','Droit commun ZFANG','Taux majoré','Particularités'],
        ['CFE','80 % de la base nette','100 %','Plafond de l’abattement : 150 000 € par établissement et année ; vérifier option et délibération contraire de la commune/EPCI. Dans les 6 communes : 100 % pour 2026-2030.'],
        ['TFPB','50 % de la base concernée','80 %','Immeuble rattaché à un établissement éligible ; sauf délibération contraire. Dans les 6 communes : 80 % pour 2026-2030.'],
        ['CVAE','Mécanisme lié à l’abattement CFE pour les établissements concernés','Même taux selon règles applicables','La valeur ajoutée correspondante peut bénéficier d’un abattement, avec plafond propre ; vérifier le millésime CVAE.'],
        ['TFPNB agricole','Régime spécifique DOM','À traiter séparément','Ne pas extrapoler le tableau CFE/TFPB.']
      ]
    },
    {
      title:'H. Obligations déclaratives — ce que le dossier doit contenir',
      rows:[
        ['Élément à documenter','Exigence pratique'],
        ['CA','Chiffre d’affaires de l’exercice ramené à 12 mois si nécessaire ; conserver détail permettant de justifier le seuil < 50 M€.'],
        ['Effectif','Effectif des salariés à la clôture ; conserver état de paie/DSN permettant de justifier < 250.'],
        ['Exploitation','Adresse exacte et activité principale de chaque exploitation bénéficiant du régime.'],
        ['Bénéfice','Montant du bénéfice rattaché à chaque exploitation et clé de ventilation du bénéfice global.'],
        ['Taux','Justification 50 % ou 80 % : commune, secteur prioritaire ou perfectionnement actif.'],
        ['Perfectionnement actif','Référence de l’autorisation douanière + CA issu des opérations mettant en œuvre les marchandises concernées.'],
        ['Micro','Si pas de régime réel, état ZFANG joint à la déclaration d’ensemble des revenus selon art. 49 ZB.'],
        ['Concurrence de régimes','Copie de l’option lorsqu’elle est requise ; chronologie des régimes et date de début d’activité.']
      ]
    }
  ];

  f.courseSections=[
    {
      title:'1. « Exploitation située à La Réunion » : ce n’est pas juste une adresse',
      paragraphs:[
        'La ZFANG s’attache aux bénéfices provenant d’exploitations situées dans le DOM. En pratique, il faut pouvoir identifier un établissement ou une installation présentant une certaine permanence, des moyens humains ou matériels et une activité effectivement exercée localement.',
        'Une société peut avoir son siège à La Réunion sans que tout son bénéfice soit automatiquement éligible. À l’inverse, une entreprise ayant plusieurs établissements doit rattacher le bénéfice à chaque exploitation et documenter sa méthode de ventilation.'
      ],
      bullets:['Conserver bail/titre d’occupation, SIRET, factures d’énergie, inventaire des moyens, salariés rattachés et éléments de comptabilité analytique.','Si plusieurs activités existent dans un même établissement, documenter celle qui est principale et les éventuelles activités exclues.']
    },
    {
      title:'2. Taille de l’entreprise : deux seuils cumulatifs',
      paragraphs:[
        'L’entreprise doit employer moins de 250 salariés ET réaliser un chiffre d’affaires annuel inférieur à 50 M€. Les deux conditions s’apprécient à la clôture de chaque exercice au titre duquel l’abattement est demandé.',
        'Le contrôle ne se limite pas au petit établissement réunionnais : le seuil vise l’entreprise. Pour un exercice d’une durée atypique, le chiffre d’affaires est ramené à douze mois pour les besoins déclaratifs.'
      ],
      bullets:['< 250 salariés : 249 peut remplir le seuil, 250 ne le remplit plus.','CA < 50 M€ : le seuil est strictement inférieur.','Archiver un calcul annuel ; ne pas reconduire l’éligibilité N-1 sans recontrôle.']
    },
    {
      title:'3. Le test d’activité : le cœur du dossier',
      paragraphs:[
        'À La Réunion, l’activité principale de l’exploitation doit relever des secteurs éligibles à l’article 199 undecies B. Cette référence entraîne l’exclusion de secteurs très courants en cabinet : commerce, conseil/expertise, comptabilité, santé, éducation, immobilier, finance, réparation automobile, une grande partie des services B2B, etc.',
        'Le code APE n’est pas décisif. Si le code APE et l’activité réelle divergent, c’est l’activité réellement exercée qui doit guider l’analyse. Il faut donc décrire le modèle économique et les opérations concrètes du client.'
      ],
      bullets:['Écrire dans la feuille de travail : « l’entreprise gagne son CA principalement en faisant… ».','Comparer cette phrase à la doctrine 199 undecies B.','Pour les cas limites, citer le paragraphe BOFiP précis plutôt qu’un simple code NAF.']
    },
    {
      title:'4. Taux 50 % ou 80 % : ordre de raisonnement',
      paragraphs:[
        'Une fois l’activité générale éligible, le taux de droit commun est 50 % avec plafond annuel de 150 k€. On recherche ensuite un motif de majoration : secteur prioritaire, six communes réunionnaises renforcées ou perfectionnement actif sous conditions.',
        'Depuis la loi de finances 2026, toute exploitation autrement éligible située dans l’une des six communes du décret bénéficie temporairement du taux 80 %. Il n’est donc pas nécessaire d’être dans un secteur prioritaire pour obtenir 80 % dans ces communes ; en revanche, il reste nécessaire de ne pas être dans un secteur exclu.'
      ],
      bullets:['Hors 6 communes + secteur non prioritaire mais éligible → 50 %.','Hors 6 communes + secteur prioritaire → 80 %.','Dans 6 communes + activité éligible → 80 %.','Dans 6 communes + activité exclue → 0 %.']
    },
    {
      title:'5. Calcul : partir du bénéfice fiscal de l’exploitation',
      paragraphs:[
        'L’abattement ne s’applique ni au chiffre d’affaires, ni à une économie d’IS directement. Il s’applique au bénéfice entrant dans le champ du régime. Il faut donc d’abord déterminer le résultat fiscal puis la part provenant de l’exploitation éligible.',
        'Les plus-values issues de la réévaluation d’éléments d’actif sont exclues de la base visée par l’article 44 quaterdecies. Pour des activités ou établissements multiples, une méthode de répartition cohérente, stable et justifiable est nécessaire.'
      ],
      bullets:['50 % : plafond 150 k€ pour 12 mois.','80 % : plafond 300 k€ pour 12 mois.','Période ≠ 12 mois : proratiser le plafond.','Groupe fiscal : appliquer les règles spécifiques de l’art. 44 quaterdecies IV bis.']
    },
    {
      title:'6. Groupe fiscal : comprendre le plafond consolidé',
      paragraphs:[
        'Pour une société membre d’un groupe intégré, le bénéfice ouvrant droit à l’abattement est déterminé comme si la société était imposée séparément, dans les limites du texte.',
        'Pour l’ensemble du groupe, le cumul des abattements ne peut notamment pas excéder le résultat d’ensemble et doit respecter une équivalence de plafond : les abattements au taux majoré sont retenus pour la moitié de leur montant dans le test du plafond de 150 k€. Cette mécanique revient à préserver l’équivalent d’un maximum de 300 k€ si tout est au taux majoré, sous réserve des autres limites.'
      ]
    },
    {
      title:'7. Coexistence avec d’autres régimes zonés',
      paragraphs:[
        'L’article 44 quaterdecies VII prévoit une règle d’option lorsque l’entreprise remplit simultanément les conditions de certains régimes expressément visés par le texte. L’option pour la ZFANG doit alors être analysée à la date du début d’activité, avec un délai de six mois dans les cas concernés ; elle est irrévocable et emporte renonciation définitive aux autres régimes visés.',
        'Il faut donc éviter toute formule générale du type « cinq ans dans telle zone puis ZFANG ». Pour un dossier historique, reconstituer le texte applicable à la date de création et l’option réellement exercée.'
      ],
      bullets:['Conserver la lettre d’option et son accusé/réception.','Pour ZRR/FRR historiques à La Réunion, utiliser la fiche dédiée et la version du texte applicable à la date de création.']
    },
    {
      title:'8. CFE / TFPB : avantages distincts et décisions locales',
      paragraphs:[
        'La ZFANG constitue un ensemble d’avantages mais les impôts locaux ont chacun leurs propres textes. En CFE, le taux de droit commun est 80 % de la base nette, porté à 100 % dans les situations majorées, avec un plafond annuel de 150 k€ par établissement. La doctrine rappelle aussi la nécessité de traiter les options et les éventuelles délibérations contraires.',
        'En TFPB, l’abattement est en principe de 50 %, porté à 80 % dans les situations majorées, pour les immeubles rattachés à un établissement satisfaisant aux conditions. Les collectivités/EPCI peuvent avoir pris des délibérations contraires : contrôler le dossier fiscal local, pas seulement la liasse IS.'
      ]
    },
    {
      title:'9. Méthode de documentation cabinet',
      paragraphs:[
        'Une conclusion ZFANG défendable doit permettre à un autre collaborateur de comprendre en quelques minutes pourquoi le client est éligible, pourquoi son taux est 50 ou 80 %, comment le bénéfice a été ventilé et quelles pièces le prouvent.',
        'Le minimum est une feuille de travail annuelle datée, les textes en vigueur, les données de taille, le descriptif d’activité, la localisation, le calcul du bénéfice et les déclarations annexes.'
      ],
      bullets:['Ne jamais écrire seulement « ZFANG OK ».','Citer l’activité réelle + fondement d’éligibilité.','Citer le motif exact du taux 80 %.','Rapprocher l’abattement de la liasse fiscale et du dossier permanent.']
    }
  ];

  f.decisionRules=[
    ['Situation du dossier','Conclusion de travail','Action suivante'],
    ['Cabinet comptable à Saint-Benoît','NON éligible','Activité comptable = service B2B exclu ; la commune renforcée ne change pas le champ.'],
    ['Commerce de détail à Saint-André','NON éligible','Commerce achat-revente exclu ; pas de 80 % malgré l’adresse.'],
    ['Entreprise de plomberie à Saint-Paul','Éligible à tester, probablement taux 80 % secteur BTP','Vérifier activité réelle 43.2, taille et bénéfice localisable.'],
    ['Entreprise de programmation logicielle à Saint-Denis','Éligible à tester, taux 80 % TIC','Distinguer programmation de conseil informatique.'],
    ['Conseil informatique à Saint-Denis','NON en principe','Conseil/expertise expressément exclu ; analyser si une activité de programmation distincte est réellement principale.'],
    ['Entreprise éligible de nettoyage B2B à Saint-Pierre','Éligible à tester, taux 50 % si aucun autre motif de majoration','Le nettoyage fait partie des exceptions aux services B2B exclus.'],
    ['Entreprise éligible de nettoyage B2B à Sainte-Rose','Éligible à tester, taux 80 % géographique','Sainte-Rose est dans les six communes renforcées.'],
    ['Restaurant traditionnel à Saint-Paul sans maître-restaurateur','NON en principe','Restauration exclue sauf exceptions précises.'],
    ['Restaurant avec maître-restaurateur, clientèle touristique importante, hors 6 communes','Éligible ; taux 80 % sur la part touristique à tester','Qualifier l’éligibilité générale puis la part tourisme ; forfait 50 % du bénéfice touristique admis dans la doctrine.'],
    ['Taxi hors 6 communes','Éligible général à analyser + taux majoré sur part touristique','Part touristique pouvant être évaluée à 50 % du bénéfice.'],
    ['Location directe de voitures à personnes physiques ≤2 mois','Éligible sous conditions','Pour locations <1 mois, part tourisme forfaitaire 75 % possible pour la majoration.'],
    ['Réparation automobile','NON','Secteur expressément exclu.'],
    ['Réparation navale 33.15Z','Éligible à tester, 80 %','Secteur prioritaire spécifique.'],
    ['Éditeur de jeux électroniques 58.21Z','Éligible à tester, 80 %','Secteur prioritaire spécifique.']
  ];

  f.scenarios=[
    {
      title:'Cas 1 — Commerce à Saint-Benoît : le faux positif géographique',
      context:'Une SARL de 6 salariés exploite un magasin de chaussures à Saint-Benoît. CA 900 k€, bénéfice fiscal 100 k€. Le client a entendu que Saint-Benoît est désormais à 80 %.',
      reasoning:['Taille : OK.','Adresse : commune renforcée.','Mais activité réelle = achat-revente sans transformation → secteur commerce exclu du 199 undecies B.','Conclusion : pas de ZFANG sur le bénéfice. Le taux géographique de 80 % ne s’applique qu’aux entreprises déjà éligibles.']
    },
    {
      title:'Cas 2 — Plombier à Saint-Pierre',
      context:'Entreprise de plomberie de 14 salariés, CA 1,7 M€, bénéfice fiscal provenant de l’exploitation réunionnaise : 180 k€.',
      reasoning:['Taille : OK.','Activité 43.2 : BTP, éligible et secteur prioritaire.','Saint-Pierre n’est pas dans les six communes renforcées, mais le secteur prioritaire suffit pour le taux 80 %.','Abattement = 180 k€ × 80 % = 144 k€, sous plafond 300 k€.','Bénéfice après abattement : 36 k€, avant autres retraitements éventuels.']
    },
    {
      title:'Cas 3 — Cabinet comptable à Saint-André',
      context:'Cabinet d’expertise comptable exploitant un bureau à Saint-André, 20 salariés, CA 2,5 M€.',
      reasoning:['Taille : OK.','Commune : Saint-André, donc zone renforcée.','Activité réelle : comptabilité / expertise, service fourni principalement aux entreprises expressément exclu.','Conclusion : aucun abattement ZFANG, même à Saint-André.']
    },
    {
      title:'Cas 4 — Société numérique : programmation ou conseil ?',
      context:'Une SAS réunionnaise facture des missions “IT”. 60 % du CA provient du développement de logiciels sur mesure ; 40 % de missions de conseil stratégique SI.',
      reasoning:['Le mot “IT” ne suffit pas : programmer est éligible ; conseiller est exclu.','Identifier l’activité principale de l’exploitation et documenter la réalité opérationnelle.','Si la programmation est réellement principale, l’exploitation peut relever du secteur TIC prioritaire ; il faut néanmoins traiter les activités exclues et la ventilation lorsque cela est nécessaire.','Conserver contrats, feuilles de temps, factures et descriptifs de prestations.']
    },
    {
      title:'Cas 5 — Taux 50 % plafonné',
      context:'Une exploitation éligible non prioritaire hors six communes réalise 400 k€ de bénéfice fiscal éligible sur 12 mois.',
      reasoning:['Taux droit commun : 50 % → calcul brut 200 k€.','Plafond : 150 k€.','Abattement retenu : 150 k€.','Bénéfice restant imposable au titre de cette étape : 250 k€.']
    },
    {
      title:'Cas 6 — Taux 80 % plafonné',
      context:'Une exploitation éligible située à Sainte-Rose réalise 500 k€ de bénéfice éligible sur 12 mois.',
      reasoning:['Sainte-Rose = commune renforcée.','Taux : 80 % → calcul brut 400 k€.','Plafond majoré : 300 k€.','Abattement retenu : 300 k€.','Bénéfice restant : 200 k€.']
    }
  ];

  f.documents=[
    ['Extrait SIRENE / Kbis + SIRET de chaque établissement','Pour identifier juridiquement les exploitations sans confondre avec l’activité réelle.'],
    ['Bail, titre d’occupation ou preuve de locaux','Pour établir la présence physique et l’adresse exacte.'],
    ['Organigramme / effectif / DSN de clôture','Pour justifier le seuil de moins de 250 salariés.'],
    ['Grand livre CA + balance + détail du CA par établissement','Pour seuil < 50 M€ et rattachement du bénéfice.'],
    ['Contrats, factures clients, site commercial, descriptifs de prestations','Pour prouver l’activité réellement exercée.'],
    ['Code APE/NAF et note de qualification','APE = indice ; la note explique pourquoi l’activité réelle entre ou non dans le texte.'],
    ['Comptabilité analytique ou clé de ventilation','Indispensable si plusieurs exploitations/activités.'],
    ['Calcul ZFANG annuel','Bénéfice éligible, taux, plafond, prorata éventuel, montant d’abattement.'],
    ['État déclaratif art. 49 ZB annexe III','CA, effectif, adresses, activités, bénéfices, taux, répartition.'],
    ['Preuve du motif de majoration','Commune renforcée, secteur prioritaire, ou autorisation de perfectionnement actif.'],
    ['Délibérations/avis CFE et TFPB + déclarations locales','Pour ne pas appliquer automatiquement les taux locaux.'],
    ['Option pour régime zoné, le cas échéant','À conserver au dossier permanent car certaines options sont irrévocables.']
  ];

  f.sources=[
    ['Légifrance — CGI art. 44 quaterdecies, version 2026','https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000053543403/2026-06-01'],
    ['BOFiP — ZFANG, version du 08/07/2026','https://bofip.impots.gouv.fr/bofip/11833-PGP.html/identifiant=BOI-BIC-CHAMP-80-10-85-20260708'],
    ['Légifrance — décret n° 2026-421 : six communes renforcées','https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000054153912'],
    ['Légifrance — annexe III art. 49 ZB et 49 ZC : déclaration et secteurs prioritaires','https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006069574/LEGISCTA000021629924/'],
    ['BOFiP — art. 199 undecies B : secteurs d’activité exclus','https://bofip.impots.gouv.fr/bofip/1434-PGP.html/identifiant=BOI-BIC-RICI-20-10-10-40-20240703'],
    ['BOFiP — actualité renforcement temporaire Réunion 2026','https://bofip.impots.gouv.fr/bofip/15064-PGP.html/ACTU-2026-00083'],
    ['BOFiP — CFE ZFANG','https://bofip.impots.gouv.fr/bofip/11854-PGP.html/identifiant=BOI-IF-CFE-10-30-30-70-20260708'],
    ['BOFiP — TFPB ZFANG','https://bofip.impots.gouv.fr/bofip/11858-PGP.html/identifiant=BOI-IF-TFB-20-30-45-20260708']
  ];

  KB.flashcards.push(
    ['ZFANG Réunion 2026 : les 6 communes au taux renforcé ?','Bras-Panon, La Plaine-des-Palmistes, Saint-André, Saint-Benoît, Sainte-Rose et Salazie.'],
    ['Une activité exclue au 199 undecies B devient-elle éligible parce qu’elle est à Saint-Benoît ?','Non. Le renforcement géographique ne supprime pas le test d’activité.'],
    ['ZFANG bénéfices : taux/plafond droit commun ?','50 %, plafond 150 000 € pour 12 mois.'],
    ['ZFANG bénéfices : taux/plafond majoré ?','80 %, plafond 300 000 € pour 12 mois.'],
    ['Cabinet comptable à La Réunion : ZFANG ?','Non en principe : activité comptable/service aux entreprises exclue.'],
    ['Programmation informatique vs conseil informatique en ZFANG ?','Programmation/création logiciel peut être éligible et prioritaire TIC ; conseil informatique est exclu.'],
    ['Réparation automobile vs navale ?','Automobile exclue ; réparation/maintenance navale NAF 33.15Z = secteur prioritaire.'],
    ['CFE ZFANG : taux droit commun / majoré ?','80 % / 100 %, avec règles propres et plafond.'],
    ['TFPB ZFANG : taux droit commun / majoré ?','50 % / 80 %, avec règles propres.']
  );

  KB.qcm.push(
    {q:'Une boutique de prêt-à-porter à Saint-André remplit les seuils de taille. Quel traitement ZFANG ?',a:['80 % car Saint-André','50 % car commerce','Aucun abattement car commerce exclu','100 %'],good:2,why:'Saint-André donne le taux renforcé uniquement à une activité par ailleurs éligible. Le commerce achat-revente est exclu.'},
    {q:'Une entreprise de plomberie à Saint-Pierre remplit les conditions générales. Quel motif peut donner 80 % ?',a:['Saint-Pierre est une commune renforcée','Le BTP est un secteur prioritaire','Toute activité artisanale est à 80 %','Le CA est inférieur à 50 M€'],good:1,why:'Le BTP fait partie des secteurs prioritaires de l’article 44 quaterdecies III-3.'},
    {q:'Le code APE d’un client est compatible ZFANG, mais les contrats montrent qu’il fait en réalité du conseil. Que faut-il retenir ?',a:['Le code APE uniquement','L’activité réellement exercée','Le choix du client','La commune uniquement'],good:1,why:'La doctrine retient l’activité réellement exercée ; le code APE n’est qu’un indice.'},
    {q:'Bénéfice éligible 400 k€, taux droit commun 50 %, période de 12 mois : abattement maximal ?',a:['200 k€','150 k€','300 k€','400 k€'],good:1,why:'50 % de 400 k€ = 200 k€, mais le plafond droit commun est 150 k€.'}
  );
})();
