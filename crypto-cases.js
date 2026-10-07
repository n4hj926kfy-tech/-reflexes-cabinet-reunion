window.CRYPTO_CASES=[{
id:"D01",level:"Intermédiaire",title:"Bourbon Digital SAS — première clôture crypto",period:"Exercice 2027",estimated:"60–90 min",
brief:"Bourbon Digital SAS, société de conseil soumise à l’IS, a commencé à placer une partie de sa trésorerie en crypto-actifs. Le dirigeant affirme que « tout est sur Kraken et Ledger ». Tu prépares la clôture et dois rendre le dossier révisable.",
facts:[
{id:"F01",date:"2027-02-03",source:"Banque",text:"Virement de 30 000 € vers Kraken."},
{id:"F02",date:"2027-02-03",source:"Kraken",text:"Achat de 0,500000 BTC pour 25 000 € ; frais plateforme 125 €."},
{id:"F03",date:"2027-02-03",source:"Kraken",text:"Achat de 2,000000 ETH pour 4 600 € ; frais plateforme 23 €."},
{id:"F04",date:"2027-03-12",source:"Kraken",text:"Retrait de 0,300000 BTC vers l’adresse Ledger bc1q…BD17 ; frais réseau prélevés : 0,000200 BTC."},
{id:"F05",date:"2027-03-12",source:"Ledger",text:"Réception visible : 0,299800 BTC sur bc1q…BD17."},
{id:"F06",date:"2027-05-18",source:"Kraken",text:"Échange de 0,500000 ETH contre 1 100 USDC. Frais : 5 USDC."},
{id:"F07",date:"2027-06-30",source:"Banque",text:"Aucun flux bancaire correspondant au swap ETH/USDC."},
{id:"F08",date:"2027-09-08",source:"Kraken",text:"Vente de 0,100000 BTC pour 6 100 €. Frais de vente : 30,50 €."},
{id:"F09",date:"2027-09-10",source:"Banque",text:"Crédit reçu de Kraken : 6 069,50 €."},
{id:"F10",date:"2027-11-02",source:"Direction",text:"Le dirigeant indique avoir « envoyé un peu d’ETH sur MetaMask pour tester », mais aucune adresse MetaMask n’a été fournie."},
{id:"F11",date:"2027-12-31",source:"Kraken",text:"Solde export : 0,100000 BTC ; 1,400000 ETH ; 1 095 USDC."},
{id:"F12",date:"2027-12-31",source:"Ledger",text:"Solde bc1q…BD17 : 0,299800 BTC."},
{id:"F13",date:"2027-12-31",source:"Valorisation",text:"Cours de travail à contrôler : BTC 58 000 € ; ETH 2 250 € ; USDC 0,91 €."}
],
missing:["Adresse et historique MetaMask","Factures détaillées Kraken relatives aux frais","Preuve formelle que bc1q…BD17 appartient/est contrôlée pour le compte de Bourbon Digital SAS","Méthode et source indépendante des cours au 31/12","Documentation de qualification de l’USDC au regard des droits et du référentiel"],
missions:[
"Établir le périmètre des wallets/exchanges et identifier les pièces manquantes bloquantes.",
"Reconstituer les quantités théoriques BTC, ETH et USDC et expliquer tout écart.",
"Identifier les transferts internes à neutraliser économiquement sans perdre les frais.",
"Qualifier le swap ETH/USDC : expliquer pourquoi l’absence de banque ne suffit pas à conclure à la neutralité.",
"Proposer le schéma d’écritures de l’achat, de la vente et du swap sous hypothèses clairement indiquées.",
"Préparer la valorisation de clôture et lister les contrôles nécessaires avant comptabilisation.",
"Construire le passage comptable → fiscal sans supposer qu’il est automatique.",
"Rédiger une note de revue : anomalies, risques, demandes client et conclusion."
],
review:[
"Le périmètre est incomplet tant que MetaMask n’est pas identifié. La quantité ETH de l’export Kraken (1,400000) ne se réconcilie pas avec les seules opérations connues : 2 ETH achetés – 0,5 ETH échangé = 1,5 ETH. L’écart de 0,1 ETH est cohérent avec l’indication du dirigeant mais doit être prouvé et localisé.",
"BTC : 0,5 acheté – 0,3 retiré – 0,0002 frais réseau – 0,1 vendu = 0,0998 BTC attendu sur Kraken si le retrait de 0,3 inclut bien le montant débité tel que présenté. Or l’export indique 0,1 BTC et Ledger 0,2998 BTC : la convention de l’export/retrait doit être clarifiée. Ne pas forcer le rapprochement.",
"Le transfert Kraken → Ledger est un mouvement interne si la société conserve les mêmes droits ; les frais réseau restent une opération à traiter selon les règles applicables.",
"Le swap ETH/USDC doit être analysé comme échange au regard du référentiel applicable. L’absence de flux euro n’est pas un critère de neutralité.",
"La vente BTC doit relier quantité sortie, coût des unités, prix de cession et frais. Le crédit bancaire de 6 069,50 € rapproche le produit net communiqué mais ne suffit pas à valider le coût de sortie.",
"USDC ne doit pas être classé automatiquement en 513 sous prétexte qu’il est stable : documenter sa qualification juridique et les droits associés.",
"Les cours de clôture fournis sont des données de travail, pas une preuve : documenter source, heure, devise, liquidité et méthode.",
"Le traitement fiscal doit partir des écritures comptables retenues puis identifier les divergences fiscales ; les provisions éventuelles doivent être testées selon leurs conditions propres."
],
rubric:[
["Périmètre & propriété",15],["Rapprochement quantités",20],["Qualification",15],["Écritures",20],["Clôture & valorisation",10],["Fiscalité & déclaratif",10],["Note de revue",10]
]
},{
id:"D02",level:"Avancé",title:"Austral Treasury SAS — staking, prêt et pool",period:"Exercice 2027",estimated:"90–120 min",
brief:"La société gère une trésorerie crypto plus active. Tu dois distinguer les opérations relevant d’un prêt/staking avec restitution de celles modifiant les droits détenus.",
facts:[
{id:"F01",date:"2027-01-10",source:"Wallet",text:"Dépôt de 20 ETH auprès d’un prestataire de staking. Contrat : restitution d’une quantité équivalente d’ETH, rémunération variable."},
{id:"F02",date:"2027-06-30",source:"Prestataire",text:"Récompenses acquises : 0,42 ETH."},
{id:"F03",date:"2027-07-15",source:"DeFi",text:"Apport de 5 ETH + 10 000 USDC dans un pool. Réception d’un jeton de position."},
{id:"F04",date:"2027-12-31",source:"DeFi",text:"La position donne droit, à cet instant, à 4,4 ETH + 11 700 USDC ; récompenses non réclamées : 320 USDC."},
{id:"F05",date:"2027-12-31",source:"Prestataire",text:"Retrait staking suspendu 48 h pour maintenance, aucune annonce de défaut."}
],
missing:["Contrat complet du pool","Méthode de valorisation du jeton de position","Preuve du caractère acquis des récompenses non réclamées","Évaluation du risque de contrepartie du prestataire"],
missions:["Qualifier séparément staking et pool.","Identifier les droits conservés ou reçus.","Proposer les contrôles de clôture.","Distinguer variation économique et écriture comptable.","Analyser les récompenses.","Rédiger les points nécessitant validation spécialisée."],
review:["Le contrat de staking prévoit ici une restitution d’ETH équivalents : rapprocher le cas des règles ANC relatives aux prêts/staking avec obligation de restitution, sous réserve de la qualification juridique complète.","Le pool ne garantit pas la restitution des mêmes quantités ; analyser le traitement d’échange prévu par ANC 2026-01 lorsque les faits correspondent au cas décrit par le règlement.","La variation 5 ETH/10 000 USDC → 4,4 ETH/11 700 USDC ne se résume pas à une « impermanent loss » comptable.","Une suspension technique de 48 h n’établit pas à elle seule une perte ou dépréciation : documenter les droits et le risque réel.","Les récompenses doivent être analysées selon leur caractère acquis, leur nature et les règles applicables."],
rubric:[["Qualification juridique",25],["ANC/écritures",25],["Valorisation",15],["Récompenses",15],["Risques",10],["Documentation",10]]
}];