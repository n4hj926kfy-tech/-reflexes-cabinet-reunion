window.CRYPTO_V3={
competencies:[
{id:"accounting",name:"Comptabilité",modules:["C08","C09","C10","C11","C12","C13","C14","C19","C20","C24","A01"]},
{id:"tax",name:"Fiscalité / IS",modules:["C15","C18","C19","C20","C21","A02","A03"]},
{id:"vat",name:"TVA",modules:["C16","C23","C24"]},
{id:"regulation",name:"MiCA & déclaratif",modules:["C05","C17","C28"]},
{id:"data",name:"Données & audit",modules:["C02","C03","C06","C07","C13","C14","C22"]},
{id:"defi",name:"DeFi & opérations avancées",modules:["C19","C20","C21","C22","C23","C24","A03"]},
{id:"mission",name:"Conduite de mission",modules:["C25","C26","C27","C29","C30"]}
],
quizzes:{
C01:[["Être compétent signifie surtout…",["avoir tout lu","savoir qualifier, appliquer, documenter et reconnaître ses limites","connaître les cours crypto"],1],["Un module lu est-il automatiquement maîtrisé ?",["oui","non"],1]],
C03:[["Un wallet au nom du dirigeant prouve-t-il la propriété de la SAS ?",["oui","non, il faut établir les droits de la société"],1],["La seed phrase doit-elle être copiée dans le dossier permanent ?",["oui","non"],1]],
C04:[["Le nom commercial d'un token suffit-il à son classement ?",["oui","non, les droits priment"],1],["Un stablecoin est-il toujours un EMT ?",["oui","non"],1]],
C08:[["Le classement dépend notamment…",["uniquement du prix","des droits et de l'intention documentée","du logo du token"],1],["Deux entités doivent-elles toujours classer le même token pareil ?",["oui","pas nécessairement"],1]],
C11:[["Une baisse latente sur un actif 522 se limite-t-elle à D4742/C522 ?",["oui","non, le traitement du risque/provisionnement doit aussi être analysé"],1]],
C15:[["Le résultat comptable crypto est-il automatiquement le résultat fiscal ?",["oui","non"],1],["Pourquoi suivre les provisions réintégrées ?",["pour éviter une double imposition lors de la reprise","pour calculer la TVA"],0]],
C16:[["Une prestation payée en BTC perd-elle son régime TVA propre ?",["oui","non"],1],["Paiement crypto et qualification TVA sont-ils le même sujet ?",["oui","non"],1]],
C17:[["DAC8 remplace-t-il les obligations propres du contribuable ?",["oui","non"],1]],
C19:[["Une restitution obligatoire d'actifs équivalents peut-elle influencer l'analyse d'un prêt ?",["oui","non"],0]],
C20:[["Une perte relative dans un pool est-elle automatiquement une perte comptable ?",["oui","non"],1]],
C23:[["Un NFT est-il une immobilisation corporelle par définition ?",["oui","non, il faut qualifier le droit représenté"],1]],
C25:[["Le nombre de transactions suffit-il à fixer un forfait ?",["oui","non"],1]],
C26:[["Un score blockchain nul remplace-t-il les diligences LCB-FT ?",["oui","non"],1]],
C29:[["Le meilleur test de compétence est…",["le nombre de pages lues","un dossier traçable et révisable","le temps passé"],1]]
},
traps:[
["Stablecoin = compte 513","Faux réflexe : qualifier d'abord juridiquement l'actif et les droits."],
["Wallet du dirigeant = actif de la société","Faux : documenter propriété, financement et contrôle."],
["Bridge 1:1 = neutralité garantie","Faux : comparer les droits avant/après et la substance."],
["Airdrop = produit automatiquement imposable à réception","Trop rapide : qualifier le droit et le fait générateur."],
["Pool DeFi = simple dépôt","Pas nécessairement : le jeton de position peut matérialiser d'autres droits."],
["Prix affiché = juste valeur exploitable","Pas toujours : liquidité, source, heure, restrictions et profondeur comptent."],
["DAC8 = déclaration fiscale de la société","Faux : distinguer reporting prestataire et obligations propres du contribuable."],
["NFT = immobilisation corporelle","Faux : analyser le droit économique représenté."],
["Score AML faible = dossier acceptable","Faux : l'outil ne remplace pas les diligences professionnelles."]
],
ledger:[
{q:"La SAS achète 1 BTC pour 50 000 € destiné à être conservé comme placement, hypothèse régime 522. Quelle logique ?",a:"Débiter le compte d'actifs numériques concerné pour le coût d'acquisition et créditer la trésorerie/compte de tiers selon le règlement. Traiter séparément les frais selon le référentiel et les faits."},
{q:"Un client règle une facture de conseil de 2 000 € en crypto. Quel réflexe ?",a:"Comptabiliser d'abord le chiffre d'affaires et la TVA selon la prestation ; comptabiliser distinctement l'entrée de crypto à sa valeur pertinente. Le moyen de paiement ne transforme pas la prestation en opération de change."},
{q:"À la clôture, la valeur d'un actif 522 est inférieure de 3 000 € à sa valeur comptable. Quel réflexe ?",a:"Appliquer le mécanisme de clôture prévu par le référentiel applicable, y compris l'écart d'évaluation et l'analyse/provisionnement du risque ; ne pas enregistrer une seule écriture isolée sans le schéma complet."}
],
realCaseSteps:["Acceptation et indépendance","Cartographie entités / wallets / exchanges","Collecte contrats et exports","Preuve des droits et propriété","Registre exhaustif des transactions","Rapprochement quantités et banque","Qualification des actifs et opérations","Écritures et valorisation de clôture","Passage comptable → fiscal","TVA et obligations déclaratives","LCB-FT / anomalies / pièces manquantes","Revue, annexe et restitution"],
pilotFields:["Contexte du dossier","Problématique professionnelle","Sources de données","Difficultés rencontrées","Contrôles mis en place","Outils / automatisations","Temps passé","Anomalies et résolution","Livrables produits","Enseignements pour le cabinet","Lien potentiel avec le mémoire DEC"]
};