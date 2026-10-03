window.KB = {
  verifiedAt: '2026-10-03',
  modules: [
    {id:'reunion',emoji:'🌴',name:'Fiscalité Réunion',desc:'ZFANG, LODEOM, TVA DOM, investissements outre-mer.'},
    {id:'structures',emoji:'🏢',name:'Formes juridiques',desc:'SAS, SARL, SASU, EURL, dirigeants et arbitrages.'},
    {id:'fiscal',emoji:'💰',name:'Résultat fiscal',desc:'Réintégrations, déductions, provisions, IS, déficits.'},
    {id:'credits',emoji:'🧪',name:'Crédits d’impôt',desc:'244 quater W, CIR, CII, famille et autres réflexes.'}
  ],
  fiches: [
    {
      id:'zfang',module:'reunion',title:'ZFANG – abattement sur les bénéfices',article:'CGI art. 44 quaterdecies',priority:3,status:'À surveiller annuellement',
      tags:['ZFANG','Réunion','IS','IR','CFE','44 quaterdecies'],
      reflex:'Entreprise exploitée à La Réunion → penser ZFANG, puis vérifier taille, activité, régime fiscal, localisation et taux applicable.',
      ask:['Effectif total de l’entreprise ?','CA annuel HT tous établissements confondus ?','Activité principale exacte ?','Où l’exploitation est-elle située ?','IR ou IS, et quel régime d’imposition ?'],
      detail:[
        'Conditions de taille : moins de 250 salariés et CA annuel inférieur à 50 M€.',
        'Abattement de droit commun : 50 % des bénéfices éligibles, plafonné à 150 000 € pour 12 mois.',
        'Abattement majoré : 80 %, plafonné à 300 000 €, dans les situations prévues par le texte.',
        'En 2026, un renforcement temporaire à 80 % concerne certaines communes de La Réunion pour la période prévue par la loi de finances 2026.',
        'La CFE et la TFPB ont leurs propres mécanismes ZFANG : ne pas conclure à partir du seul traitement du bénéfice.'
      ],
      trap:'Ne jamais résumer “La Réunion = 80 %”. Le taux dépend du cas. Une activité non éligible peut faire tomber le dispositif.',
      example:'Une SAS réunionnaise de 12 salariés réalise 1,8 M€ de CA : la taille n’exclut pas la ZFANG, mais il faut encore vérifier l’activité et le lieu d’exploitation.',
      sources:[
        ['BOFiP ZFANG – version 08/07/2026','https://bofip.impots.gouv.fr/bofip/11833-PGP.html/identifiant=BOI-BIC-CHAMP-80-10-85-20260708'],
        ['Actualité BOFiP – renforcement Réunion 2026','https://bofip.impots.gouv.fr/bofip/15064-PGP.html/ACTU-2026-00083']
      ]
    },
    {
      id:'lodeom',module:'reunion',title:'LODEOM – exonération de cotisations',article:'CSS – dispositif LODEOM',priority:3,status:'Barèmes millésimés',
      tags:['LODEOM','social','salariés','Réunion','Urssaf'],
      reflex:'Employeur à La Réunion → vérifier automatiquement la LODEOM, surtout à l’embauche ou lors d’une hausse de rémunération.',
      ask:['Effectif ?','Secteur d’activité précis ?','CA si le barème l’exige ?','Rémunération annuelle du salarié ?','Contrat et période d’emploi ?'],
      detail:[
        'En 2026, trois barèmes existent : compétitivité (droit commun), compétitivité renforcée, innovation et croissance.',
        'Le montant se calcule chaque année civile, salarié par salarié et contrat par contrat.',
        'Le barème dépend notamment de la taille, du secteur et parfois du chiffre d’affaires.',
        'Les entreprises de moins de 11 salariés peuvent relever du barème de droit commun quelle que soit leur activité, sous réserve des conditions du dispositif.',
        'Les formules et seuils sont annuels : mieux vaut les calculer dans un module 2026 que les mémoriser définitivement.'
      ],
      trap:'Ne pas appliquer un ancien barème trouvé dans un dossier 2024/2025. Vérifier le millésime et la rémunération de référence.',
      example:'Restaurant de 8 salariés : penser immédiatement LODEOM, puis déterminer le barème et calculer l’exonération salarié par salarié.',
      sources:[['Urssaf – Exonération LODEOM 2026','https://www.urssaf.fr/accueil/employeur/beneficier-exonerations/exonerations-zonees/exoneration-lodeom.html']]
    },
    {
      id:'tva-reunion',module:'reunion',title:'TVA à La Réunion',article:'CGI / BOFiP TVA DOM',priority:3,status:'Taux vérifiés 2026',
      tags:['TVA','Réunion','8,5','2,1','importation','territorialité'],
      reflex:'Avant de chercher le taux : bien ou service ? B2B ou B2C ? Où sont fournisseur, client et bien ? Qui est redevable ?',
      ask:['Bien ou prestation ?','Client assujetti ?','Où est établi le client ?','Où est le bien au départ et à l’arrivée ?','Une règle spéciale de territorialité s’applique-t-elle ?'],
      detail:[
        'À La Réunion, le taux normal est 8,5 % et le taux réduit principal est 2,1 %.',
        'Des taux particuliers de 1,75 % et 1,05 % existent pour des opérations spécifiques.',
        'Les flux de biens métropole ↔ DOM nécessitent un raisonnement import/export et ne se traitent pas comme une vente domestique métropolitaine.',
        'Pour les services, commencer par les règles de territorialité B2B/B2C puis rechercher les exceptions.'
      ],
      trap:'Le bon taux ne suffit pas : une facture peut être erronée à cause de la territorialité ou du redevable, même si 8,5 % paraît plausible.',
      example:'Une société métropolitaine facture une prestation à une SAS réunionnaise : déterminer d’abord le lieu d’imposition et le redevable avant de comptabiliser la TVA.',
      sources:[['impots.gouv.fr – taux de TVA dans les DOM','https://www.impots.gouv.fr/professionnel/questions/quels-sont-les-differents-taux-de-tva-applicables-dans-les-dom']]
    },
    {
      id:'244w',module:'credits',title:'Investissement productif outre-mer',article:'CGI art. 244 quater W',priority:3,status:'Vérifié 2026',
      tags:['244 quater W','crédit impôt','investissement','Réunion','DOM'],
      reflex:'Client réunionnais qui prévoit un investissement productif neuf → penser 244 quater W AVANT la décision finale d’investissement.',
      ask:['Entreprise au réel ?','Activité éligible ?','Bien productif et neuf ?','Montant HT et frais amortissables ?','Aides publiques ?','Agrément préalable requis ?'],
      detail:[
        'Le dispositif vise certains investissements productifs neufs réalisés dans un DOM par des entreprises éligibles.',
        'Taux 2026 : 38,25 % pour une entreprise soumise à l’IR ; 35 % pour une entreprise soumise à l’IS.',
        'La base est en principe le coût éligible HT, avec prise en compte de certains frais amortissables, diminué des aides publiques finançant le bien.',
        'Des règles spécifiques existent selon le secteur et la nature de l’investissement.'
      ],
      trap:'Un achat d’immobilisation à La Réunion n’ouvre pas automatiquement droit au crédit. Vérifier activité, exclusions, affectation et éventuel agrément.',
      example:'SAS à l’IS : investissement éligible de 100 000 € après retraitement des aides → crédit théorique de 35 000 €, avant contrôle des autres conditions.',
      sources:[
        ['Légifrance – art. 244 quater W','https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000053544344/2026-06-01'],
        ['BOFiP 244 quater W – détermination 19/08/2026','https://bofip.impots.gouv.fr/bofip/9448-PGP.html/identifiant=BOI-BIC-RICI-10-160-20-20260819']
      ]
    },
    {
      id:'cir',module:'credits',title:'CIR – Crédit d’impôt recherche',article:'CGI art. 244 quater B',priority:3,status:'Vérifié 2026',
      tags:['CIR','R&D','50%','DOM','244 quater B'],
      reflex:'Entreprise confrontée à une vraie incertitude scientifique ou technique → tester l’éligibilité CIR et documenter le projet dès le départ.',
      ask:['Quelle incertitude technique/scientifique ?','État de l’art documenté ?','Personnel affecté ?','Temps tracé ?','Dépenses externalisées ?','Subventions publiques reçues ?'],
      detail:[
        'Le CIR concerne les entreprises éligibles imposées au réel et certaines entreprises exonérées.',
        'Pour les dépenses de recherche exposées dans une exploitation située dans un DOM, le taux est de 50 % jusqu’à 100 M€ de dépenses, puis 5 % au-delà.',
        'La justification technique est aussi importante que le calcul : il faut démontrer la démarche de R&D et conserver les preuves.',
        'Les subventions publiques reçues au titre des opérations de recherche diminuent l’assiette selon les règles applicables.'
      ],
      trap:'“On développe un logiciel” ou “c’est nouveau pour l’entreprise” ne suffit pas à caractériser de la R&D.',
      example:'Un projet logiciel peut être CIR s’il cherche à lever une incertitude technique non résolue par l’état de l’art ; un simple développement fonctionnel ne suffit pas.',
      sources:[['impots.gouv.fr – CIR/CII, mise à jour 11/08/2026','https://www.impots.gouv.fr/professionnel/questions/puis-je-pretendre-au-credit-impot-recherche']]
    },
    {
      id:'cii',module:'credits',title:'CII – Crédit d’impôt innovation',article:'CGI art. 244 quater B, II-k',priority:3,status:'Jusqu’au 31/12/2027',
      tags:['CII','innovation','PME','60%','DOM'],
      reflex:'PME qui conçoit un prototype ou une installation pilote d’un produit réellement nouveau → penser CII.',
      ask:['PME au sens UE ?','Produit nouveau pour le marché ?','Performances supérieures mesurables ?','Prototype/installation pilote ?','Dépenses éligibles tracées ?'],
      detail:[
        'Le CII est réservé aux PME et vise la conception de prototypes ou installations pilotes de nouveaux produits.',
        'Les dépenses éligibles sont plafonnées à 400 000 € par an.',
        'Le taux est de 20 % en droit commun à compter du 16 février 2025 et porté à 60 % pour les dépenses éligibles exposées dans les DOM.',
        'Le dispositif est prévu jusqu’au 31 décembre 2027 selon la réglementation actuellement publiée.'
      ],
      trap:'Innovation commerciale ou simple ajout de fonctionnalités ≠ automatiquement CII. Il faut caractériser un produit nouveau et des performances supérieures.',
      example:'400 000 € de dépenses éligibles dans une exploitation réunionnaise peuvent générer jusqu’à 240 000 € de CII, sous réserve de toutes les conditions.',
      sources:[['impots.gouv.fr – CIR/CII, mise à jour 11/08/2026','https://www.impots.gouv.fr/professionnel/questions/puis-je-pretendre-au-credit-impot-recherche']]
    },
    {
      id:'credit-famille',module:'credits',title:'Crédit d’impôt famille',article:'CGI art. 244 quater F',priority:2,status:'À vérifier avant déclaration',
      tags:['crèche','CESU','salariés','244 quater F'],
      reflex:'Entreprise qui finance crèche ou certaines aides de services à la personne pour ses salariés → vérifier le crédit d’impôt famille.',
      ask:['Entreprise au réel ?','Nature exacte de la dépense ?','Bénéficiaires salariés ?','Dépense de crèche ou aide type CESU ?','Aides/subventions reçues ?'],
      detail:[
        'Le dispositif peut couvrir certaines dépenses de crèche et certaines aides financières aux salariés pour des services à la personne.',
        'Le taux dépend de la catégorie de dépenses ; les dépenses de crèche bénéficient d’un taux supérieur à certaines aides directes.',
        'Un plafond annuel s’applique au crédit d’impôt.'
      ],
      trap:'Toutes les dépenses “bien-être” ou familiales ne sont pas éligibles. Identifier la catégorie légale avant de calculer.',
      example:'Une entreprise participe au financement d’une place en crèche pour ses salariés : le dossier mérite un contrôle 244 quater F.',
      sources:[['impots.gouv.fr – crédit d’impôt famille','https://www.impots.gouv.fr/professionnel/questions/puis-je-pretendre-au-credit-dimpot-famille']]
    },
    {
      id:'sarl-sas',module:'structures',title:'SARL ou SAS : comment raisonner ?',article:'Code de commerce / CSS',priority:3,status:'Réflexe conseil',
      tags:['SARL','SAS','TNS','assimilé salarié','dividendes'],
      reflex:'Ne jamais choisir sur un slogan “moins de charges”. Commencer par rémunération, protection sociale, dividendes, associés, gouvernance et projet de transmission.',
      ask:['Combien d’associés ?','Qui dirigera et avec quel % du capital ?','Rémunération annuelle visée ?','Dividendes envisagés ?','Besoin d’investisseurs ?','Conjoint impliqué ?','Souplesse statutaire nécessaire ?'],
      detail:[
        'Le gérant majoritaire de SARL relève en principe du régime des travailleurs indépendants.',
        'Le président de SAS relève du régime général comme assimilé salarié, sans assurance chômage au titre du mandat social.',
        'La SAS offre une forte souplesse statutaire ; la SARL est davantage encadrée par la loi.',
        'Le traitement social des dividendes diffère selon la structure et la situation du dirigeant : simuler avant de conclure.',
        'Le coût social n’est qu’un critère parmi d’autres : couverture, retraite, gouvernance, cession de titres et fiscalité doivent être intégrés.'
      ],
      trap:'“SAS = meilleure” et “SARL = moins chère” sont de mauvaises conclusions. Le résultat dépend du profil et du niveau de rémunération.',
      example:'Deux associés opérationnels voulant se rémunérer chaque mois n’ont pas les mêmes critères qu’une startup souhaitant accueillir des investisseurs.',
      sources:[['Service-Public – protection sociale du dirigeant 2026','https://entreprendre.service-public.fr/vosdroits/F38152']]
    },
    {
      id:'assiette-tns-2026',module:'structures',title:'Dirigeant TNS : nouvelle assiette sociale 2026',article:'Réforme assiette indépendants',priority:3,status:'Nouveauté 2026',
      tags:['TNS','cotisations','26%','2026','dividendes'],
      reflex:'Pour une simulation TNS en 2026, ne pas réutiliser une ancienne assiette : la réforme est entrée en application.',
      ask:['IR ou IS ?','Rémunération réellement perçue ?','Dividendes ?','Frais professionnels ?','Capital social et comptes courants concernés ?'],
      detail:[
        'À partir d’avril 2026, les cotisations et contributions des indépendants utilisent une nouvelle base de calcul.',
        'Un abattement forfaitaire de 26 % est appliqué par l’Urssaf à la base définie par la réforme.',
        'Pour une société à l’IS, le revenu brut social part notamment de la rémunération et des dividendes entrant dans l’assiette selon les règles applicables, après ajustements.'
      ],
      trap:'Une simulation de coût SARL/EURL basée sur les anciens calculs peut être fausse en 2026.',
      example:'Lors d’un arbitrage SASU/EURL, utiliser un simulateur ou une formule 2026 avant de comparer le net disponible.',
      sources:[['Service-Public – protection sociale du dirigeant','https://entreprendre.service-public.fr/vosdroits/F38152']]
    },
    {
      id:'resultat-fiscal',module:'fiscal',title:'Du résultat comptable au résultat fiscal',article:'Principe BIC/IS',priority:3,status:'Fondamental',
      tags:['résultat fiscal','réintégration','déduction','liasse'],
      reflex:'Résultat fiscal = résultat comptable + réintégrations − déductions. Chaque différence doit avoir une justification fiscale.',
      ask:['Charge comptable déductible fiscalement ?','Produit comptable imposable ?','Limitation/plafond fiscal ?','Décalage temporaire ou différence définitive ?','Régime d’exonération/crédit applicable ?'],
      detail:[
        'Réintégrer une charge comptabilisée mais fiscalement non déductible, ou une fraction non déductible.',
        'Déduire un produit comptabilisé mais fiscalement non imposable, ou appliquer une déduction extra-comptable prévue par la loi.',
        'Les retraitements peuvent être permanents ou temporaires et doivent pouvoir être rapprochés de la liasse fiscale.',
        'Toujours distinguer comptabilisation correcte et déductibilité fiscale : ce sont deux questions différentes.'
      ],
      trap:'Ne jamais “corriger” la comptabilité uniquement parce qu’une charge n’est pas déductible : elle peut être comptablement correcte et fiscalement réintégrée.',
      example:'Amende de 800 € correctement enregistrée en charge : on conserve la charge en comptabilité puis on réintègre 800 € fiscalement.',
      sources:[['Service-Public – BIC régime réel','https://entreprendre.service-public.fr/vosdroits/F32919']]
    },
    {
      id:'provisions',module:'fiscal',title:'Provisions : réflexe de déductibilité fiscale',article:'CGI art. 39, 1-5°',priority:2,status:'Fondamental',
      tags:['provision','déductibilité','clôture','risque'],
      reflex:'Provision comptable ≠ provision fiscalement déductible. Vérifier nature déductible, précision, probabilité et faits existant à la clôture.',
      ask:['Perte/charge déductible par nature ?','Risque nettement précisé ?','Probable et non simplement éventuel ?','Faits générateurs existants à la clôture ?','Montant estimable avec suffisamment de précision ?'],
      detail:[
        'Une provision n’est fiscalement déductible que si elle respecte les conditions légales et doctrinales.',
        'Le risque ou la charge doit être suffisamment individualisé et probable à la clôture.',
        'Si les conditions fiscales ne sont pas réunies, la provision comptabilisée fait l’objet d’une réintégration extra-comptable.'
      ],
      trap:'“Le client pense qu’il aura une dépense l’an prochain” n’est pas suffisant pour déduire fiscalement une provision.',
      example:'Litige connu avant clôture, dossier documenté et estimation fiable : provision potentiellement déductible ; simple inquiétude commerciale : non.',
      sources:[['BOFiP – provisions pour charges','https://bofip.impots.gouv.fr/bofip/8824-PGP.html']]
    },
    {
      id:'cfe-creation',module:'fiscal',title:'CFE et année de création',article:'CFE',priority:2,status:'Vérifié 16/06/2026',
      tags:['CFE','création','établissement','5000'],
      reflex:'Création d’établissement → pas de CFE l’année civile de création ; penser déclaration initiale et imposition à partir de l’année suivante.',
      ask:['Date exacte de création de l’établissement ?','Local ou domicile ?','CA/recettes ?','Exonération sectorielle ou zonée ?','ZFANG applicable ?'],
      detail:[
        'La CFE n’est pas due l’année de création d’un établissement imposable, quelle que soit la date de création.',
        'La CFE est établie pour l’année civile entière : un établissement créé le 31 décembre N peut être imposé dès N+1.',
        'Des exonérations ou abattements spécifiques peuvent s’ajouter, notamment selon l’activité ou la zone.'
      ],
      trap:'Ne pas confondre “premier exercice comptable” et “année civile de création” pour la CFE.',
      example:'Établissement créé le 31/12/2026 : pas de CFE 2026, mais potentiellement CFE 2027.',
      sources:[['impots.gouv.fr – CFE année de création','https://www.impots.gouv.fr/professionnel/questions/devrai-je-acquitter-une-cfe-lannee-de-la-creation-de-mon-entreprise']]
    }
  ],
  flashcards:[
    ['Quel article du CGI pour la ZFANG ?','44 quaterdecies.'],
    ['ZFANG : effectif maximal pour l’éligibilité ?','Moins de 250 salariés.'],
    ['ZFANG : plafond de CA de taille ?','CA annuel inférieur à 50 M€.'],
    ['ZFANG : taux de droit commun ?','50 % des bénéfices éligibles.'],
    ['ZFANG : plafond annuel de droit commun ?','150 000 € pour 12 mois.'],
    ['LODEOM 2026 : combien de barèmes principaux ?','Trois.'],
    ['TVA normale à La Réunion ?','8,5 %.'],
    ['TVA réduite principale à La Réunion ?','2,1 %.'],
    ['Crédit d’impôt investissement DOM ?','CGI art. 244 quater W.'],
    ['244 quater W : taux entreprise à l’IS ?','35 %.'],
    ['244 quater W : taux entreprise à l’IR ?','38,25 %.'],
    ['CIR : taux DOM jusqu’à 100 M€ ?','50 %.'],
    ['CII : plafond annuel de dépenses ?','400 000 €.'],
    ['CII : taux DOM en 2026 ?','60 %.'],
    ['Gérant majoritaire de SARL : régime social ?','Travailleur indépendant (TNS).'],
    ['Président de SAS : régime social ?','Assimilé salarié, sans chômage du mandat.'],
    ['Assiette TNS 2026 : abattement Urssaf ?','26 %.'],
    ['Formule du résultat fiscal ?','Comptable + réintégrations − déductions.'],
    ['Amende comptabilisée : traitement fiscal ?','Réintégration extra-comptable.'],
    ['CFE due l’année de création ?','Non, pour l’année civile de création.']
  ],
  qcm:[
    {q:'Une SAS réunionnaise achète une machine productive neuve. Premier réflexe fiscal ?',a:['CICE','244 quater W','Crédit famille','HVE'],good:1,why:'Le 244 quater W vise certains investissements productifs neufs réalisés dans un DOM.'},
    {q:'Le taux normal de TVA à La Réunion est :',a:['20 %','10 %','8,5 %','5,5 %'],good:2,why:'Le taux normal applicable à La Réunion est 8,5 %.'},
    {q:'Une amende de 1 000 € comptabilisée en charge est en principe :',a:['Déduite fiscalement','Réintégrée fiscalement','Une immobilisation','Un crédit d’impôt'],good:1,why:'La charge peut rester comptabilisée mais fait l’objet d’une réintégration fiscale.'},
    {q:'Le président de SAS est :',a:['TNS','Assimilé salarié','Toujours salarié avec chômage','Micro-social'],good:1,why:'Il relève du régime général comme assimilé salarié, hors assurance chômage du mandat.'},
    {q:'En 2026, le CII en DOM peut atteindre quel taux ?',a:['20 %','30 %','50 %','60 %'],good:3,why:'Le taux majoré DOM du CII est de 60 % pour les dépenses éligibles.'},
    {q:'La ZFANG de droit commun correspond à :',a:['50 % plafonné à 150 k€','80 % sans plafond','35 %','100 %'],good:0,why:'Le droit commun est un abattement de 50 %, plafonné à 150 000 € pour 12 mois.'}
  ],
  cloze:[
    {text:'Résultat fiscal = résultat comptable + ___ − déductions.',answer:'réintégrations'},
    {text:'Le taux normal de TVA à La Réunion est de ___ %.',answer:'8,5'},
    {text:'Le crédit d’impôt pour investissement productif DOM est l’article 244 quater ___.',answer:'W'},
    {text:'Le président de SAS est ___ salarié.',answer:'assimilé'},
    {text:'Le gérant majoritaire de SARL est généralement ___.',answer:'TNS'},
    {text:'Le CII DOM peut atteindre ___ % en 2026.',answer:'60'}
  ],
  cases:[
    {title:'Le restaurant de Saint-Pierre',text:'Une SAS de restauration à Saint-Pierre emploie 8 salariés et prévoit 120 000 € de matériel neuf.',points:['LODEOM : réflexe automatique employeur DOM.','244 quater W : tester l’investissement productif neuf.','ZFANG : vérifier l’activité et les conditions, ne pas présumer du taux majoré.','TVA : sécuriser le taux et la récupération sur les investissements.']},
    {title:'La startup logicielle',text:'Une PME réunionnaise développe un produit logiciel inédit et résout un verrou technique important.',points:['Séparer les travaux R&D (CIR) et innovation produit (CII).','Documenter état de l’art, incertitudes, temps et dépenses.','CIR DOM : taux majoré ; CII DOM : taux majoré, sous conditions.']},
    {title:'Choix de structure',text:'Un créateur sera seul, veut se rémunérer 3 500 € net/mois et hésite entre EURL et SASU.',points:['Comparer TNS vs assimilé salarié avec paramètres 2026.','Intégrer protection sociale et retraite, pas seulement le coût.','Tester dividendes, fiscalité et horizon de cession.','Ne pas utiliser une ancienne assiette TNS pré-réforme.']},
    {title:'Clôture et amende',text:'Une société a comptabilisé 1 500 € d’amendes et une provision de 10 000 € pour un risque peu documenté.',points:['Amendes : réintégration fiscale.','Provision : contrôler les conditions de déductibilité.','Si le risque n’est pas suffisamment probable/précis : réintégration.']}
  ]
};

// Extension V1.1 — règles transversales utiles en cabinet
KB.fiches.push(
  {
    id:'is-taux',module:'fiscal',title:'Impôt sur les sociétés : 25 % / 15 %',article:'CGI art. 219',priority:3,status:'Vérifié 2026',
    tags:['IS','25%','15%','42500','10 millions'],
    reflex:'Société à l’IS → calculer 25 % par défaut, puis tester l’éligibilité au taux PME de 15 % sur la première tranche de bénéfice.',
    ask:['CA HT ≤ 10 M€ ?','Capital entièrement libéré ?','Capital détenu ≥ 75 % par des personnes physiques ou sociétés éligibles ?','Bénéfice fiscal de la période ?'],
    detail:[
      'Le taux normal de l’IS est de 25 %.',
      'Le taux réduit PME est de 15 % sur les premiers 42 500 € de bénéfice imposable par période de douze mois, sous conditions.',
      'Le CA doit notamment ne pas excéder 10 M€, le capital doit être entièrement libéré et détenu à au moins 75 % par des personnes physiques ou sociétés répondant aux conditions.'
    ],
    trap:'Ne pas appliquer automatiquement 15 % aux premiers 42 500 € : contrôler les conditions de CA et de détention/libération du capital.',
    example:'Bénéfice fiscal 80 000 € et conditions PME remplies : 42 500 € à 15 %, solde de 37 500 € à 25 %.',
    sources:[['impots.gouv.fr – imposition des résultats','https://www.impots.gouv.fr/professionnel/imposition-des-resultats']]
  },
  {
    id:'deficits-is',module:'fiscal',title:'Déficits IS : report en avant / arrière',article:'CGI art. 209 et 220 quinquies',priority:2,status:'Vérifié 2026',
    tags:['déficit','carry back','report en avant','IS','1 million','50%'],
    reflex:'Société déficitaire → conserver le stock de déficits, tester l’imputation future et se demander si le carry-back sur N−1 présente un intérêt.',
    ask:['Montant du déficit de N ?','Bénéfice de N−1 ?','Stock de déficits antérieurs ?','Option carry-back déposée dans les délais ?','Opération de cessation/fusion/procédure collective ?'],
    detail:[
      'Le report en avant est possible sans limitation de durée, avec plafonnement annuel d’imputation.',
      'L’imputation annuelle des déficits antérieurs est en principe plafonnée à 1 M€ + 50 % de la fraction du bénéfice excédant 1 M€.',
      'Le report en arrière (carry-back) est optionnel et porte sur le déficit de l’exercice, dans la limite de 1 M€, sur le bénéfice de l’exercice précédent selon les règles applicables.',
      'La fraction non utilisée demeure reportable en avant.'
    ],
    trap:'Ne pas confondre plafond de déficit stocké et plafond d’imputation : le solde non imputé n’est pas perdu en principe.',
    example:'Bénéfice N+1 de 1,5 M€ avec gros stock de déficits : imputation maximale classique = 1 M€ + 50 % × 0,5 M€ = 1,25 M€.',
    sources:[
      ['BOFiP – report en avant des déficits','https://bofip.impots.gouv.fr/bofip/2103-PGP.html/identifiant=BOI-IS-DEF-10-30-20130410'],
      ['BOFiP – carry-back, mise à jour 12/08/2026','https://bofip.impots.gouv.fr/bofip/5645-PGP.html/identifiant=BOI-IS-DEF-20-10-20260812']
    ]
  },
  {
    id:'octroi-mer',module:'reunion',title:'Octroi de mer : premier raisonnement',article:'Loi n° 2004-639 du 2 juillet 2004',priority:3,status:'Vérifié 2026',
    tags:['octroi de mer','OM','OMR','importation','production','550000'],
    reflex:'Bien importé ou produit localement à La Réunion → penser octroi de mer avant de raisonner uniquement TVA.',
    ask:['Importation ou livraison locale ?','Le vendeur a-t-il produit le bien ?','CA de production de l’année précédente ?','Code douanier du produit ?','Taux OM/OMR applicable localement ?','Exonération éventuelle ?'],
    detail:[
      'L’octroi de mer frappe notamment les importations de biens et certaines livraisons à titre onéreux de biens produits localement.',
      'Depuis le 21 février 2026, les producteurs locaux sont assujettis lorsque le CA de leur activité de production de l’année précédente atteint ou dépasse 550 000 €.',
      'Le seuil s’apprécie hors TVA et hors octroi de mer ; il est proratisé dans certaines situations de début d’activité.',
      'Le taux dépend du produit et de la réglementation locale : identifier le classement douanier avant de conclure.'
    ],
    trap:'Ne pas confondre TVA et octroi de mer. Un même flux peut nécessiter d’analyser les deux impositions.',
    example:'Un producteur réunionnais dépassant le seuil de CA de production doit être étudié au regard de l’OM/OMR sur ses livraisons locales.',
    sources:[['Légifrance – loi octroi de mer, champ 2026','https://www.legifrance.gouv.fr/codes/section_lc/JORFTEXT000000253374/LEGISCTA000006122150/?anchor=LEGIARTI000053545622']]
  },
  {
    id:'micro-2026',module:'fiscal',title:'Micro-entreprise : seuils 2026',article:'CGI art. 50-0 / 102 ter',priority:2,status:'Millésime 2026',
    tags:['micro','203100','83600','15000','seuils'],
    reflex:'Avant de conseiller le micro en 2026, identifier précisément la nature de l’activité et contrôler N−1/N−2 : les seuils ont été revalorisés.',
    ask:['Vente/hébergement, service BIC ou BNC ?','CA 2024 et 2025 ?','Activité mixte ?','Meublé de tourisme classé ou non classé ?','TVA : régime distinct à vérifier ?'],
    detail:[
      'Pour les revenus 2026, le seuil micro est de 203 100 € pour les activités commerciales/hébergement hors cas spécifiques.',
      'Le seuil est de 83 600 € pour les prestations de services BIC et les activités libérales BNC.',
      'Le meublé de tourisme non classé conserve un seuil spécifique de 15 000 €.',
      'Le dépassement sur une seule année ne provoque pas nécessairement la sortie : il faut appliquer les règles N−1/N−2.'
    ],
    trap:'Les seuils micro-fiscaux ne sont pas les seuils de franchise en base de TVA. Toujours séparer les deux analyses.',
    example:'Prestataire avec 80 000 € en 2025 : il peut rester sous le seuil micro 2026 de 83 600 €, sous réserve de la règle portant sur les années de référence.',
    sources:[['Service-Public – dépassement des seuils micro 2026','https://entreprendre.service-public.fr/vosdroits/F32353']]
  }
);
KB.flashcards.push(
  ['IS : taux normal en 2026 ?','25 %.'],
  ['IS PME : tranche au taux de 15 % ?','Jusqu’à 42 500 € sous conditions.'],
  ['Déficit IS : plafond classique d’imputation ?','1 M€ + 50 % du bénéfice au-delà de 1 M€.'],
  ['Carry-back IS : plafond de déficit reportable en arrière ?','1 M€ sous conditions.'],
  ['Octroi de mer : seuil producteur local 2026 ?','550 000 € de CA de production.'],
  ['Micro 2026 : seuil prestations de services ?','83 600 €.'],
  ['Micro 2026 : seuil commerce principal ?','203 100 €.']
);
