// Réductions d'impôt — cours professionnels — vérifié au 04/10/2026
(()=>{
  if(!KB.modules.some(m=>m.id==='reductions')){
    KB.modules.push({id:'reductions',emoji:'📉',name:'Réductions d’impôt',desc:'Mécénat, investissements outre-mer, IR-PME et logique d’imputation.'});
  }

  KB.fiches.push(
    {
      id:'reduction-vs-credit',module:'reductions',title:'Réduction ou crédit d’impôt : ne pas confondre',article:'Mécanique générale IR/IS',priority:3,status:'Fondamental',
      tags:['réduction impôt','crédit impôt','imputation','remboursement','plafonnement'],
      reflex:'Avant de parler d’un avantage fiscal, identifier sa nature : déduction de base, réduction d’impôt ou crédit d’impôt. La trésorerie et le risque de perte d’avantage ne sont pas les mêmes.',
      ask:['L’avantage diminue-t-il la base imposable ou directement l’impôt ?','Est-il remboursable ?','Un report est-il prévu par le texte ?','Relève-t-il du plafonnement global des niches ?','IR ou IS ?'],
      detail:[
        'Une déduction diminue une base imposable ; une réduction d’impôt diminue directement l’impôt calculé ; un crédit d’impôt diminue aussi l’impôt mais peut, selon le dispositif, générer une créance ou un remboursement.',
        'En matière d’IR, une réduction qui excède l’impôt dû ne donne en principe pas lieu à remboursement, sauf mécanisme spécial de report prévu par le texte.',
        'Un crédit d’impôt peut être restituable selon son régime. Pour les entreprises, les modalités d’imputation et de remboursement varient selon le crédit concerné.',
        'Certains avantages sont soumis au plafonnement global des avantages fiscaux, avec des règles particulières pour certains investissements outre-mer.'
      ],
      trap:'Ne jamais présenter une réduction comme “de l’argent remboursé”. Si le contribuable n’a pas assez d’impôt et que le texte ne prévoit pas de report, une partie de l’avantage peut être inutilisable.',
      example:'Un particulier a 4 000 € d’IR et une réduction non reportable de 6 000 € : son impôt tombe à 0 €, mais les 2 000 € excédentaires ne sont pas remboursés. Un crédit restituable de 6 000 € aurait une logique différente.',
      comparison:[['Mécanisme','Effet','Excédent'],['Déduction','Diminue la base imposable','Pas de remboursement direct.'],['Réduction d’impôt','Diminue l’impôt dû','Pas de remboursement en principe ; report seulement si le texte le prévoit.'],['Crédit d’impôt','Diminue l’impôt dû','Peut être restituable ou reportable selon le dispositif.']],
      courseSections:[
        {title:'1. Toujours identifier le niveau auquel agit l’avantage',paragraphs:['Une déduction agit avant le calcul de l’impôt. Une réduction et un crédit agissent après calcul de l’impôt. Cette différence modifie complètement la valeur réelle de l’avantage.','Une dépense de 10 000 € “déductible” n’a pas la même valeur qu’une réduction de 10 000 €. La première économise l’impôt correspondant au taux applicable ; la seconde réduit directement l’impôt de 10 000 € sous réserve des limites.']},
        {title:'2. Réduction : vérifier l’impôt disponible',paragraphs:['Une réduction d’impôt classique ne peut pas créer un remboursement. Le cabinet doit donc vérifier l’impôt théorique du client avant de recommander un investissement dont l’avantage repose sur une réduction.','Certains dispositifs prévoient néanmoins le report d’un excédent ou de versements non utilisés : ce report doit être identifié dispositif par dispositif.']},
        {title:'3. Crédit : vérifier restitution immédiate ou différée',paragraphs:['Le mot “crédit” ne signifie pas toujours remboursement immédiat. Certains crédits sont restituables immédiatement, d’autres après une période de report ou sous conditions.','Pour une société à l’IS, le dossier doit distinguer imputation sur le solde, créance reportable et demande de remboursement éventuelle.']},
        {title:'4. Plafonnement et cumul',paragraphs:['Le plafonnement global des avantages fiscaux concerne certains avantages à l’IR. Les dispositifs outre-mer ont des règles particulières de prise en compte.','Un bon conseil doit donc répondre à trois questions : avantage brut, avantage effectivement imputable, et avantage réellement encaissable ou reportable.']}
      ],
      decisionRules:[['Question','Si oui','Conséquence'],['Le dispositif est une réduction ?','Oui','Contrôler l’impôt disponible et les reports éventuels.'],['Le dispositif est un crédit ?','Oui','Contrôler restitution et délai.'],['Avantage soumis au plafonnement global ?','Oui','Faire une simulation globale des niches fiscales.'],['Investissement outre-mer ?','Oui','Contrôler les règles spécifiques de plafonnement.']],
      scenarios:[{title:'Client faiblement imposé',context:'Un client envisage un investissement donnant 12 k€ de réduction mais son IR est de 3 k€.',reasoning:['La réduction ne doit pas être valorisée comme 12 k€ sans vérifier le report prévu par le texte.','Mesurer le montant effectivement imputable.','Comparer avec un dispositif de crédit d’impôt si une alternative existe.']}],
      sources:[['impots.gouv.fr — différence réduction/crédit','https://www.impots.gouv.fr/particulier/questions/quelle-est-la-difference-entre-une-reduction-et-un-credit-dimpot'],['CGI art. 200-0 A — plafonnement global','https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000053543258/']]
    },
    {
      id:'mecenat-entreprise',module:'reductions',title:'Mécénat d’entreprise – réduction d’impôt',article:'CGI art. 238 bis',priority:3,status:'Cours professionnel — 2026',
      tags:['mécénat','238 bis','don','réduction impôt','60%','40%','20000','5 pour mille'],
      reflex:'Entreprise qui fait un don → déterminer d’abord s’il s’agit d’un mécénat éligible et non d’une dépense de sponsoring ; puis calculer la réduction et réintégrer fiscalement le don.',
      ask:['Organisme bénéficiaire éligible ?','Don sans contrepartie disproportionnée ?','Numéraire, nature ou compétence ?','Montant total des dons de l’exercice ?','CA HT ?','Dons >10 000 € ?'],
      detail:[
        'Les versements éligibles ouvrent en principe droit à une réduction de 60 % pour la fraction de dons allant jusqu’à 2 M€, puis 40 % au-delà, sous réserve des exceptions légales restant à 60 %.',
        'Les versements sont retenus dans la limite de 20 000 € ou de 5 ‰ du chiffre d’affaires lorsque ce second montant est plus élevé.',
        'L’excédent de versement dépassant cette limite peut être reporté sur les cinq exercices suivants selon les règles de l’article 238 bis.',
        'Les dons ouvrant droit à la réduction ne sont pas déductibles du résultat fiscal : la charge comptabilisée doit donc être réintégrée pour la détermination du bénéfice imposable.',
        'En 2026, une obligation déclarative détaillée subsiste lorsque le total des dons dépasse 10 000 € au cours de l’exercice.'
      ],
      trap:'Mécénat ≠ sponsoring. Si l’entreprise reçoit une contrepartie publicitaire directe et proportionnée, la dépense peut relever de la publicité plutôt que du mécénat. Le traitement fiscal est alors différent.',
      example:'Une SAS avec 1 M€ de CA donne 8 000 € à une association éligible. La limite de 20 000 € est supérieure à 5 ‰ du CA (5 000 €), donc les 8 000 € sont dans la limite. Réduction théorique : 4 800 €, sous réserve des autres conditions.',
      comparison:[['Point','Mécénat','Sponsoring / parrainage'],['Finalité','Soutien sans contrepartie équivalente','Dépense engagée pour un retour commercial/publicitaire.'],['Fiscalité','Réduction art. 238 bis + don non déductible','Charge potentiellement déductible si intérêt de l’entreprise.'],['Preuve','Reçu / justificatifs + intérêt général','Contrat, visibilité, prestation publicitaire.']],
      courseSections:[
        {title:'1. Qualifier le bénéficiaire et l’absence de contrepartie',paragraphs:['La réduction vise les versements au profit des organismes entrant dans les catégories prévues par l’article 238 bis. Le simple fait qu’un organisme soit une association ne suffit pas.','Le mécénat suppose une disproportion marquée entre le don et les contreparties reçues. Une prestation publicitaire valorisée à un niveau comparable au versement conduit à raisonner en sponsoring.']},
        {title:'2. Calcul de la réduction',paragraphs:['Le taux est de 60 % sur la fraction de versements inférieure ou égale à 2 M€, puis 40 % au-delà. Certains organismes venant en aide aux personnes en difficulté bénéficient d’un maintien du taux de 60 % selon les conditions légales.','La base annuelle est plafonnée au montant le plus élevé entre 20 000 € et 5 ‰ du chiffre d’affaires.']},
        {title:'3. Excédent et suivi sur cinq exercices',paragraphs:['Lorsque les versements dépassent la limite annuelle, l’excédent peut ouvrir droit à réduction au titre des cinq exercices suivants, après prise en compte des dons effectués au cours de ces exercices.','Le cabinet doit tenir un tableau de suivi des excédents par millésime.']},
        {title:'4. Traitement comptable et fiscal',paragraphs:['Le don peut être comptabilisé en charge, mais l’article 238 bis prévoit qu’il n’est pas déductible du bénéfice imposable lorsqu’il ouvre droit à la réduction. Il faut donc le réintégrer fiscalement.','La réduction est ensuite calculée séparément et imputée sur l’IR ou l’IS selon la situation.']},
        {title:'5. Justificatifs et déclaration',paragraphs:['L’entreprise doit pouvoir présenter les pièces justificatives attestant la réalité du don. Pour les dons en nature, la valorisation doit être documentée.','Lorsque les versements dépassent 10 000 € sur l’exercice, l’obligation déclarative 2026 porte notamment sur montant, date, bénéficiaire et éventuelles contreparties.']}
      ],
      decisionRules:[['Situation','Orientation','Pourquoi'],['Don sans contrepartie à organisme éligible','Mécénat','Réduction art. 238 bis.'],['Logo très visible + prestations contractuelles équivalentes','Sponsoring à étudier','Contrepartie commerciale.'],['Dons > plafond annuel','Suivre excédent','Report sur 5 exercices possible.'],['Dons >10 k€ en 2026','Déclaration détaillée','Obligation déclarative à respecter.']],
      scenarios:[{title:'Association culturelle',context:'Une société verse 15 k€ et reçoit seulement la mention de son nom sur le rapport annuel.',reasoning:['Vérifier l’éligibilité de l’association.','Apprécier le caractère non disproportionné de la contrepartie.','Comparer plafond 20 k€ / 5 ‰ CA.','Réintégrer le don puis calculer la réduction.']},{title:'Événement sportif sponsorisé',context:'Une entreprise verse 20 k€ et bénéficie de panneaux, contenus sponsorisés et prestations marketing estimées à 18 k€.',reasoning:['Le retour commercial est significatif.','Qualifier probablement en sponsoring plutôt qu’en mécénat.','Analyser la déductibilité de la charge selon l’intérêt de l’entreprise.']}],
      sources:[['Légifrance — CGI art. 238 bis','https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000046861121'],['Bercy — mécénat d’entreprise 2026','https://www.economie.gouv.fr/entreprises/gerer-sa-fiscalite-et-ses-impots/limpot-sur-les-benefices-ir-et/mecenat-donnez-des-oeuvres-dinteret-general-et-obtenez-une-reduction']]
    },
    {
      id:'199-undecies-b',module:'reductions',title:'Réduction IR – investissement productif outre-mer',article:'CGI art. 199 undecies B',priority:3,status:'Cours professionnel — 2026',
      tags:['199 undecies B','girardin industriel','réduction IR','outre-mer','Réunion','investissement productif'],
      reflex:'Contribuable à l’IR qui finance un investissement productif outre-mer → comparer 199 undecies B avec le 244 quater W et vérifier le porteur juridique de l’investissement avant toute décision.',
      ask:['Contribuable domicilié fiscalement en France ?','Investissement productif neuf ?','Activité éligible art. 34 ?','CA de l’entreprise exploitante ?','Investissement direct ou schéma locatif ?','Agrément préalable ?','Durée de conservation/exploitation ?'],
      detail:[
        'L’article 199 undecies B ouvre une réduction d’IR à certains contribuables domiciliés en France réalisant ou finançant des investissements productifs neufs outre-mer.',
        'À La Réunion, le taux de base prévu par le texte est de 38,25 % de la base éligible pour les investissements concernés, avec règles spécifiques selon la nature du projet.',
        'La base est le coût éligible hors taxes et hors frais non admis, diminué notamment des aides publiques et, dans certaines situations, de la valeur du bien remplacé.',
        'Dans les schémas locatifs, une fraction de l’avantage doit être rétrocédée à l’entreprise exploitante : le texte prévoit notamment 66 %, ou 56 % pour certains programmes inférieurs à 300 000 € par exploitant.',
        'Le dispositif est applicable aux investissements mis en service à La Réunion jusqu’au 31 décembre 2029 selon le texte en vigueur en 2026.'
      ],
      trap:'“Girardin industriel = réduction immédiate garantie” est un mauvais raisonnement. Une non-conformité du bien, de l’exploitant, du schéma locatif, de l’agrément ou de la durée d’exploitation peut entraîner une reprise de la réduction.',
      example:'Un contribuable finance via un schéma éligible une immobilisation productive louée à une entreprise réunionnaise. Il faut distinguer l’avantage fiscal brut du contribuable, la rétrocession à l’exploitant, le coût du montage et le risque de reprise.',
      comparison:[['Point','199 undecies B','244 quater W'],['Nature','Réduction d’IR du contribuable/investisseur','Crédit d’impôt de l’entreprise éligible.'],['Bénéficiaire fiscal','Personne physique / investisseur selon schéma','Entreprise réalisant l’investissement.'],['Réunion 2026','Taux de base 38,25 % sous conditions','38,25 % IR / 35 % IS pour l’entreprise éligible.'],['Schéma locatif','Rétrocession obligatoire d’une partie de l’avantage','Pas la même logique de rétrocession.'],['Choix','Dépend du portage et du financement','Dépend notamment de la situation de l’exploitant.']],
      courseSections:[
        {title:'1. Identifier qui porte l’investissement et qui reçoit l’avantage',paragraphs:['Le 199 undecies B est une réduction d’impôt sur le revenu. Il peut concerner l’exploitant personne physique ou être utilisé dans un schéma de portage/location où des investisseurs financent le bien et l’avantage est partiellement rétrocédé à l’exploitant.','Cette architecture est très différente du 244 quater W, qui est un crédit d’impôt de l’entreprise réalisant l’investissement.']},
        {title:'2. Conditions de l’investissement productif',paragraphs:['Le bien doit en principe être une immobilisation productive neuve, corporelle et amortissable, affectée à une activité éligible. Les secteurs exclus et les conditions propres à certains investissements doivent être vérifiés avant signature.','Dans un DOM, le texte prévoit aussi une condition de chiffre d’affaires pour l’entreprise exploitante dans les conditions applicables.']},
        {title:'3. Base et taux',paragraphs:['Le taux de base de 38,25 % s’applique à la base fiscale définie par le texte à La Réunion. Le coût retenu n’est pas nécessairement le montant facturé : aides publiques, frais et éventuel remplacement d’un actif doivent être retraités.','Certains investissements disposent de taux ou plafonds spécifiques.']},
        {title:'4. Schémas locatifs et rétrocession',paragraphs:['Lorsque le bien est mis à disposition de l’exploitant par location dans les conditions du texte, une part minimale de la réduction doit être rétrocédée sous forme de diminution du loyer et du prix de cession.','Le taux de rétrocession est notamment de 66 %, ramené à 56 % pour certains programmes de moins de 300 000 € par exploitant.']},
        {title:'5. Reprise et durée de maintien',paragraphs:['La réduction peut être reprise si les conditions cessent d’être respectées pendant la période de maintien prévue. Il faut donc suivre l’affectation du bien, l’activité de l’exploitant et les changements de locataire.','Le dossier doit être traité comme un investissement à risque fiscal et non comme un simple placement financier.']},
        {title:'6. Comparaison avec le crédit 244 W',paragraphs:['Pour un exploitant réunionnais qui achète lui-même son matériel, le premier arbitrage est souvent entre crédit 244 W et solutions de défiscalisation indirecte.','Le choix doit comparer avantage net, trésorerie, coût de montage, contraintes, agrément, financement bancaire et risque de reprise.']}
      ],
      decisionRules:[['Situation','Orientation','Contrôle'],['EI à l’IR investit directement','Comparer 199 B / 244 W','Nature du bien, taux, trésorerie.'],['SAS à l’IS achète directement','244 W souvent à tester','199 B n’est pas une réduction d’IS de la SAS.'],['Montage locatif externe','199 B possible selon schéma','Rétrocession, agrément, durée.'],['Bien d’occasion','Éligibilité problématique','Le dispositif vise le neuf.']],
      scenarios:[{title:'Exploitant achète une machine',context:'Une entreprise réunionnaise envisage 200 k€ de matériel neuf.',reasoning:['Identifier IR ou IS.','Tester l’éligibilité 244 W.','Si montage d’investisseurs envisagé, chiffrer 199 B et rétrocession.','Comparer le coût global et le risque de reprise.']},{title:'Montage locatif',context:'Des investisseurs financent un bien qui sera loué à l’exploitant.',reasoning:['Vérifier les conditions légales du bail.','Calculer la rétrocession obligatoire.','Vérifier agrément et obligations fiscales/sociales.','Suivre le bien pendant la durée requise.']}],
      sources:[['Légifrance — CGI art. 199 undecies B, version 2026','https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000046892900/2026-04-29'],['BOFiP — investissements productifs outre-mer, 19/08/2026','https://bofip.impots.gouv.fr/bofip/1410-PGP.html/identifiant=BOI-BIC-RICI-20-10-10-20-20260819']]
    },
    {
      id:'ir-pme',module:'reductions',title:'IR-PME – souscription au capital',article:'CGI art. 199 terdecies-0 A',priority:2,status:'Cours professionnel — 2026',
      tags:['IR-PME','Madelin','capital PME','18%','JEI','JEIR','JEII','réduction IR'],
      reflex:'Client personne physique qui apporte du numéraire au capital d’une PME → tester IR-PME avant de considérer l’apport comme un simple financement sans avantage fiscal.',
      ask:['Souscripteur personne physique domiciliée en France ?','Apport en numéraire ou compte courant ?','Constitution ou augmentation de capital ?','Société éligible PME ?','Souscripteur déjà associé ?','Titres conservés jusqu’au terme requis ?','JEI/JEIR/JEII ou cas général ?'],
      detail:[
        'Le taux de droit commun est de 18 % des versements éligibles en 2026.',
        'Les versements du cas général sont retenus dans la limite annuelle de 50 000 € pour une personne seule et 100 000 € pour un couple soumis à imposition commune.',
        'La fraction de versements dépassant ces plafonds peut être reportée sur les quatre années suivantes dans le cas général.',
        'Les titres doivent en principe être conservés jusqu’au 31 décembre de la cinquième année suivant la souscription ; un remboursement anticipé des apports peut également entraîner une reprise selon les règles du texte.',
        'Un compte courant d’associé n’est pas une souscription en capital et n’ouvre pas droit à la réduction.',
        'Des taux spécifiques existent pour certaines catégories de jeunes entreprises innovantes ou solidaires ; ils doivent être vérifiés à la date exacte du versement.'
      ],
      trap:'Un fondateur qui verse 50 000 € en compte courant n’a pas fait une souscription en capital. Pour l’IR-PME, la nature juridique du versement est décisive.',
      example:'Une personne seule souscrit 30 000 € au capital d’une PME éligible au taux de 18 %. Réduction théorique : 5 400 €, sous réserve de toutes les conditions et du plafonnement global.',
      comparison:[['Versement','IR-PME ?','Pourquoi'],['Apport en numéraire au capital initial','Oui si société et souscripteur éligibles','Souscription au capital.'],['Augmentation de capital par nouvel associé','Oui si conditions','Cas prévu par le texte.'],['Compte courant d’associé','Non','C’est un prêt, pas du capital.'],['Apport en nature','Non pour la souscription visée','Le dispositif vise le numéraire.']],
      courseSections:[
        {title:'1. Trois niveaux de conditions',paragraphs:['L’analyse doit porter sur le souscripteur, la société et l’opération de souscription. Le respect d’un seul de ces blocs ne suffit pas.','Le bénéficiaire est une personne physique domiciliée fiscalement en France. La souscription doit être en numéraire et la société doit remplir les conditions du dispositif.']},
        {title:'2. Taux et plafonds du cas général',paragraphs:['En 2026, le taux de droit commun est de 18 %. Les versements sont plafonnés à 50 000 € par an pour une personne seule et 100 000 € pour un couple imposé conjointement.','L’excédent de versements peut être reporté sur quatre années selon les règles du texte. Le plafonnement global des avantages fiscaux doit également être contrôlé.']},
        {title:'3. Conservation et reprise',paragraphs:['Le souscripteur doit en principe conserver les titres jusqu’au 31 décembre de la cinquième année suivant la souscription. Un remboursement des apports avant le terme prévu peut également remettre en cause l’avantage.','Il existe des exceptions légales : fusion, liquidation judiciaire, certains événements personnels ou mécanismes de réinvestissement sous conditions.']},
        {title:'4. Fondateur déjà associé : attention aux augmentations de capital',paragraphs:['Le fondateur peut bénéficier du dispositif lors de la création. Pour une augmentation de capital ultérieure alors qu’il est déjà associé, l’éligibilité dépend des conditions de l’investissement de suivi prévues par le texte.','Il ne faut donc pas promettre la réduction à chaque recapitalisation d’une société existante.']},
        {title:'5. Régimes renforcés JEI / JEIR / JEII',paragraphs:['Le droit 2026 comporte des régimes renforcés pour certaines jeunes entreprises innovantes, de rupture ou à impact, avec taux et limites spécifiques.','Ces dispositifs évoluent rapidement et certains taux majorés peuvent dépendre d’une validation européenne ou d’un décret : toujours contrôler la date exacte du versement.']}
      ],
      decisionRules:[['Situation','Réflexe','Motif'],['Créateur apporte du cash au capital','Tester IR-PME','Souscription initiale potentiellement éligible.'],['Apport en compte courant','Pas IR-PME','Ce n’est pas du capital.'],['Souscription à une JEI/JEIR/JEII','Tester régime renforcé','Taux spécifiques possibles.'],['Cession prévue à 2 ans','Vigilance forte','Condition de conservation pouvant entraîner reprise.']],
      scenarios:[{title:'Création de SASU',context:'Une personne seule apporte 40 k€ de capital en numéraire lors de la constitution.',reasoning:['Tester les conditions de la société.','Le versement est sous le plafond de 50 k€.','Au taux général de 18 %, avantage théorique 7 200 €.','Vérifier conservation et plafonnement global.']},{title:'Renforcement de trésorerie',context:'Le dirigeant verse 40 k€ en compte courant à sa société existante.',reasoning:['Ce versement est une créance sur la société.','Il ne constitue pas une souscription au capital.','Pas d’IR-PME sur ce seul versement.']}],
      sources:[['Service-Public Entreprendre — IR-PME, vérifié 23/02/2026','https://entreprendre.service-public.fr/vosdroits/F37091'],['Légifrance — CGI art. 199 terdecies-0 A','https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000053543691/']]
    }
  );

  KB.flashcards.push(
    ['Réduction d’impôt non reportable supérieure à l’impôt dû : remboursement ?','Non : l’impôt tombe à zéro mais l’excédent n’est pas remboursé.'],
    ['Mécénat entreprise : taux jusqu’à 2 M€ de versements ?','60 % en principe.'],
    ['Mécénat entreprise : plafond annuel de base ?','20 000 € ou 5 ‰ du CA si ce montant est plus élevé.'],
    ['Mécénat : le don ouvrant droit à la réduction est-il déductible fiscalement ?','Non : il doit être réintégré au résultat fiscal.'],
    ['199 undecies B à La Réunion : taux de base ?','38,25 % de la base éligible, sous conditions.'],
    ['IR-PME 2026 : taux général ?','18 %.'],
    ['IR-PME : compte courant d’associé éligible ?','Non, ce n’est pas une souscription au capital.'],
    ['IR-PME : plafonds de versements du cas général ?','50 000 € personne seule / 100 000 € couple imposé conjointement.']
  );

  KB.qcm.push(
    {q:'Une entreprise fait un don de 8 000 € éligible au mécénat. Quel traitement du don dans le résultat fiscal ?',a:['Déduction intégrale et réduction','Réintégration du don puis calcul séparé de la réduction','Crédit de TVA','Aucun retraitement'],good:1,why:'Les versements ouvrant droit à la réduction de l’article 238 bis ne sont pas déductibles du bénéfice imposable.'},
    {q:'Quel versement ouvre potentiellement droit à l’IR-PME ?',a:['Compte courant d’associé','Prêt obligataire','Souscription en numéraire au capital','Facture de prestation'],good:2,why:'L’IR-PME vise notamment les souscriptions en numéraire au capital sous conditions.'},
    {q:'Un avantage fiscal qui peut donner lieu à restitution lorsqu’il excède l’impôt est typiquement :',a:['Une charge déductible','Une réduction d’impôt classique','Un crédit d’impôt selon son régime','Un amortissement'],good:2,why:'Le crédit d’impôt peut être restituable, contrairement à une réduction classique qui ne crée pas de remboursement.'},
    {q:'199 undecies B est principalement :',a:['Un crédit d’IS de la SAS exploitante','Une réduction d’IR pour investissement productif outre-mer','Un abattement ZFANG','Une exonération de CFE'],good:1,why:'L’article 199 undecies B institue une réduction d’impôt sur le revenu pour certains investissements productifs outre-mer.'}
  );

  KB.cases.push(
    {title:'Don ou sponsoring ?',text:'Une société verse 12 000 € à un festival et reçoit une forte visibilité commerciale chiffrée à 10 000 €.',points:['Ne pas qualifier automatiquement en mécénat.','Mesurer la contrepartie commerciale.','Si la contrepartie est significative, raisonner en sponsoring/publicité.','Le traitement comptable et fiscal diffère fortement.']},
    {title:'Choisir entre 199 B et 244 W',text:'Une entreprise réunionnaise veut financer une machine productive neuve de 250 000 €.',points:['Identifier qui finance et qui porte juridiquement le bien.','Tester le 244 quater W de l’entreprise.','Si un montage locatif de défiscalisation est envisagé, chiffrer le 199 undecies B et la rétrocession.','Comparer avantage net, financement, contraintes et risque de reprise.']}
  );
})();
