// Module expert — SARL vs SAS — vérifié au 04/10/2026
(()=>{
  const f = KB.fiches.find(x=>x.id==='sarl-sas');
  if(!f) return;

  f.status='Cours professionnel — vérifié 2026';
  f.reflex='Le choix SARL/SAS ne se fait pas sur “moins de charges”. Il faut arbitrer simultanément : statut social du dirigeant, niveau et forme de rémunération, dividendes, gouvernance, arrivée/sortie d’associés, transmission, conjoint, besoin d’investisseurs et fiscalité.';
  f.ask=[
    'Qui détiendra le capital et dans quelles proportions ? Y a-t-il un collège de cogérance ?',
    'Qui dirigera réellement la société ? Le dirigeant sera-t-il majoritaire, égalitaire ou minoritaire ?',
    'Quel revenu net annuel le dirigeant souhaite-t-il réellement percevoir ?',
    'Quelle part du résultat doit rester en société pour financer la croissance ?',
    'Des dividendes sont-ils envisagés de façon régulière ?',
    'Le conjoint travaille-t-il régulièrement dans l’entreprise ? Sous quel statut ?',
    'Prévoit-on l’entrée d’investisseurs, de managers ou de nouveaux associés ?',
    'Souhaite-t-on verrouiller fortement les cessions ou au contraire faciliter les mouvements de titres ?',
    'L’entreprise est-elle familiale et une option IR durable de type SARL de famille est-elle pertinente ?',
    'Quel est l’horizon de détention : exploitation familiale stable, revente, levée de fonds, transmission ?'
  ];
  f.detail=[
    'SARL et SAS sont toutes deux des sociétés à responsabilité limitée aux apports. Elles sont en principe soumises à l’IS. Le choix de forme ne détermine pas à lui seul la TVA, le régime réel d’imposition ni l’éligibilité à la ZFANG.',
    'Le point de bascule social principal est le statut du dirigeant : gérant majoritaire de SARL = travailleur indépendant ; gérant minoritaire ou égalitaire rémunéré = assimilé salarié ; président de SAS rémunéré = assimilé salarié.',
    'En 2026, la comparaison sociale TNS / assimilé salarié doit être faite avec les règles 2026, notamment la nouvelle assiette des indépendants fondée sur un revenu brut social auquel l’Urssaf applique un abattement forfaitaire de 26 %.',
    'Pour un travailleur indépendant d’une société à l’IS, la fraction de dividendes dépassant 10 % du capital social, des primes d’émission et des comptes courants pris en compte entre dans l’assiette sociale selon les règles applicables. Cela change fortement les arbitrages rémunération/dividendes.',
    'La SAS donne beaucoup plus de liberté statutaire ; c’est un avantage lorsque les statuts sont bien conçus, mais un risque si les règles de majorité, de révocation, d’agrément, d’exclusion ou de sortie sont mal rédigées.',
    'La SARL est davantage encadrée par le Code de commerce : cela réduit la liberté de montage mais donne un cadre plus prévisible pour de nombreuses PME familiales.',
    'La cession de parts de SARL à un tiers est soumise à un agrément légal ; en SAS, l’agrément dépend beaucoup plus de ce que prévoient les statuts.',
    'Les droits d’enregistrement sur cession diffèrent : parts sociales de SARL = 3 % après abattement de 23 000 € proratisé ; actions de SAS = 0,1 %, hors sociétés à prépondérance immobilière.',
    'Une SARL ne peut pas avoir plus de 100 associés. La SAS peut être constituée par une ou plusieurs personnes et se prête généralement mieux à l’entrée progressive d’investisseurs.',
    'En numéraire, une SARL exige au moins 1/5 libéré à la constitution ; une SAS au moins la moitié. Le solde peut être libéré dans les cinq ans.',
    'Le choix fiscal IR temporaire prévu à l’article 239 bis AB peut être exercé sous conditions par certaines SARL et SAS pour cinq exercices. En plus, la SARL de famille dispose d’un régime IR spécifique potentiellement durable sous conditions de parenté et d’activité.',
    'Les seuils de nomination obligatoire d’un commissaire aux comptes sont aujourd’hui les mêmes pour SARL et SAS : franchissement de deux des trois seuils 5 M€ de bilan, 10 M€ de CA HT, 50 salariés, sous réserve des règles particulières de groupe.'
  ];
  f.trap='Ne jamais conclure “SARL = économique” ou “SAS = souple”. Le coût réel dépend du niveau de rémunération, des dividendes, de la protection sociale recherchée et du capital. La liberté statutaire de la SAS peut aussi devenir un coût juridique important si les statuts doivent gérer plusieurs investisseurs ou conflits possibles.';
  f.example='Deux associés à 50/50 qui veulent se rémunérer régulièrement, sans investisseur extérieur prévu, n’ont pas le même raisonnement qu’un fondateur qui veut lever des fonds, distribuer peu de rémunération au départ et ouvrir progressivement son capital. La première situation peut rendre la SARL pertinente ; la seconde oriente souvent vers la SAS. Dans les deux cas, il faut simuler le net, les cotisations et les clauses de gouvernance.';

  f.comparison=[
    ['Critère','SARL','SAS','Impact sur le conseil'],
    ['Dirigeant','Un ou plusieurs gérants, personnes physiques','Président obligatoire ; autres organes possibles selon statuts','La SAS facilite une gouvernance sur mesure ; la SARL est plus normée.'],
    ['Statut social principal','Gérant majoritaire : TNS ; gérant minoritaire/égalitaire rémunéré : assimilé salarié','Président rémunéré : assimilé salarié','C’est souvent le premier poste à simuler lorsque le dirigeant se rémunère.'],
    ['Dividendes du dirigeant','Pour le TNS, fraction > seuil de 10 % susceptible d’entrer dans l’assiette sociale','Pas d’assiette TNS liée aux dividendes du président','Le capital, les primes d’émission et le compte courant peuvent influencer l’arbitrage en SARL.'],
    ['Gouvernance','Règles légales de majorité largement imposées','Règles largement fixées par les statuts','La SAS est plus adaptable mais exige des statuts très solides.'],
    ['Cession de titres','Agrément légal pour cession à un tiers','Liberté de principe, clauses d’agrément possibles','SARL adaptée aux structures fermées ; SAS souvent plus fluide pour investisseurs.'],
    ['Droits d’enregistrement','3 % après abattement de 23 000 € proratisé','0,1 % du prix de cession','Écart important en cas de cession significative.'],
    ['Nombre d’associés','1 à 100','1 ou plus','La SAS convient mieux si le capital doit s’ouvrir largement.'],
    ['Libération numéraire à la création','Au moins 20 %','Au moins 50 %','La SARL demande moins de décaissement initial à capital identique.'],
    ['Option IR temporaire','Possible sous conditions, 5 exercices','Possible sous conditions, 5 exercices','Pas un critère différenciant à lui seul.'],
    ['SARL de famille','Oui, sous conditions spécifiques','Non','Avantage potentiellement décisif pour certaines activités familiales.'],
    ['Conjoint collaborateur','Possible lorsque le dirigeant remplit les conditions, notamment gérant majoritaire','Pas sous cette forme pour le président de SAS','Peut faire pencher vers la SARL dans une petite entreprise familiale.'],
    ['CAC — seuils ordinaires','2/3 : 5 M€ bilan, 10 M€ CA, 50 salariés','Même seuils','Peu différenciant hors règles de groupe.']
  ];

  f.courseSections=[
    {
      title:'1. Commencer par identifier la vraie question',
      paragraphs:[
        'SARL ou SAS n’est pas une question purement juridique. C’est un arbitrage entre trois blocs : économie du dirigeant, organisation du pouvoir, et stratégie du capital.',
        'Le bon raisonnement commence donc par le flux de trésorerie que l’on veut produire pour le dirigeant, puis par la façon dont on veut faire évoluer le capital. Une structure choisie uniquement pour réduire les cotisations peut devenir inadaptée dès qu’un investisseur entre ou qu’une cession est envisagée.'
      ],
      bullets:[
        'Bloc 1 — revenu : rémunération, dividendes, protection sociale, retraite, prévoyance.',
        'Bloc 2 — gouvernance : qui décide, à quelle majorité, qui peut révoquer qui, qui peut bloquer une décision.',
        'Bloc 3 — capital : entrée/sortie d’associés, levée de fonds, transmission, coût des cessions.'
      ]
    },
    {
      title:'2. Statut social du dirigeant : le vrai point de bascule',
      paragraphs:[
        'En SARL, la qualification dépend de la détention du capital. Le gérant majoritaire relève du régime des travailleurs indépendants. Le gérant minoritaire ou égalitaire rémunéré relève du régime général comme assimilé salarié. En cas de cogérance, il faut regarder le collège de gérance ; les parts du conjoint et des enfants mineurs non émancipés sont prises en compte dans certaines appréciations.',
        'En SAS, le président rémunéré est assimilé salarié. Dans les deux cas, le mandat social n’ouvre pas automatiquement droit à l’assurance chômage.'
      ],
      bullets:[
        'Ne pas comparer un “taux de charges” isolé : comparer un coût société pour un même net disponible.',
        'Inclure la retraite et la prévoyance dans l’analyse ; la réforme 2026 modifie l’assiette sociale des indépendants.',
        'Pour le TNS en société à l’IS, intégrer l’effet des dividendes au-delà du seuil social.'
      ]
    },
    {
      title:'3. Rémunération et dividendes : raisonner sur le revenu global',
      paragraphs:[
        'La rémunération du dirigeant est déductible du résultat fiscal si elle correspond à un travail effectif et n’est pas excessive. Le coût social dépend ensuite du régime du dirigeant.',
        'En SARL avec gérant majoritaire, la fraction de dividendes dépassant le seuil social est ajoutée à l’assiette des cotisations du travailleur indépendant. En SAS, les dividendes du président ne sont pas une rémunération de mandat ; ils restent toutefois imposés comme revenus distribués et supportent les prélèvements applicables aux revenus du capital.'
      ],
      bullets:[
        'SARL TNS : souvent efficace pour une rémunération régulière, mais attention aux dividendes et au niveau de protection recherché.',
        'SAS : souvent plus lisible lorsque l’on veut séparer strictement salaire de président et dividendes.',
        'Toujours simuler après IS, cotisations, IR/PFU et besoin de trésorerie dans l’entreprise.'
      ]
    },
    {
      title:'4. Gouvernance : cadre légal contre liberté statutaire',
      paragraphs:[
        'En SARL, les décisions ordinaires et extraordinaires suivent des règles légales de majorité. Le gérant est investi de pouvoirs étendus vis-à-vis des tiers, tandis que les associés disposent d’un cadre relativement standardisé.',
        'En SAS, les statuts fixent les conditions de direction et déterminent largement les décisions collectives. Cela permet de créer des droits de veto, des majorités spécifiques, des organes de direction et des mécanismes d’exclusion ou d’agrément, dans le respect des règles impératives.'
      ],
      bullets:[
        'Avantage SAS : personnalisation.',
        'Risque SAS : statuts médiocres = gouvernance médiocre.',
        'Avantage SARL : cadre connu et prévisible pour une petite structure stable.'
      ]
    },
    {
      title:'5. Transmission et mouvements de titres',
      paragraphs:[
        'La SARL est historiquement une société “fermée” : la cession à un tiers est soumise à l’agrément des associés selon l’article L.223-14 du Code de commerce.',
        'Dans une SAS non cotée, une clause d’agrément peut être prévue par les statuts. La cession d’actions est par ailleurs fiscalement moins coûteuse en droits d’enregistrement que la cession de parts de SARL.'
      ],
      bullets:[
        'SARL : droit d’enregistrement de 3 % après abattement de 23 000 € proratisé.',
        'SAS : droit de 0,1 % sur la cession d’actions.',
        'Sociétés à prépondérance immobilière : régime spécifique à contrôler.'
      ]
    },
    {
      title:'6. Fiscalité du résultat : beaucoup moins différenciante qu’on ne le croit',
      paragraphs:[
        'SARL et SAS sont en principe à l’IS. Le taux d’IS, la détermination du résultat fiscal, la TVA ou la ZFANG ne sont pas, en principe, déterminés par le simple choix SARL/SAS.',
        'Sous conditions, une SARL comme une SAS peut opter temporairement pour le régime des sociétés de personnes pendant cinq exercices via l’article 239 bis AB. La SARL de famille constitue cependant une différence forte : sous conditions de parenté et d’activité, elle peut relever durablement de l’IR.'
      ],
      bullets:[
        'Ne pas vendre la SAS ou la SARL comme un “régime fiscal” : ce sont d’abord des formes juridiques.',
        'La SARL de famille est une vraie exception stratégique.',
        'Un changement ultérieur de régime fiscal peut entraîner des conséquences fiscales à anticiper.'
      ]
    },
    {
      title:'7. Capital, investisseurs et croissance',
      paragraphs:[
        'La SARL est plafonnée à 100 associés. La SAS peut être constituée par une ou plusieurs personnes et se prête mieux à une cap table évolutive.',
        'La SAS permet en pratique de structurer plus facilement des catégories d’actions, des droits politiques et financiers différenciés et une gouvernance adaptée à des investisseurs. Pour une PME familiale sans ouverture de capital, cette sophistication peut être inutile.'
      ],
      bullets:[
        'Projet familial stable : la SARL est souvent naturelle.',
        'Levée de fonds, managers au capital, investisseurs successifs : la SAS est souvent plus pratique.',
        'Ne pas sur-complexifier une petite société sans besoin réel.'
      ]
    },
    {
      title:'8. Conjoint : variable souvent oubliée',
      paragraphs:[
        'Le statut de conjoint collaborateur peut être pertinent dans une entreprise exploitée par un gérant majoritaire de SARL lorsque les conditions sont réunies. Il n’existe pas de façon équivalente pour un président de SAS.',
        'Si le conjoint travaille régulièrement, son statut doit être formalisé : salarié, associé ou collaborateur lorsque ce dernier statut est disponible.'
      ],
      bullets:[
        'Toujours demander si le conjoint participe réellement à l’activité.',
        'Le statut du conjoint peut modifier le choix de forme juridique.',
        'Le coût social ne doit pas être le seul critère : droits propres et protection doivent être pris en compte.'
      ]
    }
  ];

  f.decisionRules=[
    ['Situation observée','Orientation à tester en priorité','Pourquoi'],
    ['Dirigeant majoritaire, rémunération régulière importante, capital fermé','SARL','Le statut TNS peut être économiquement intéressant à simuler ; gouvernance simple.'],
    ['Projet familial, conjoint impliqué, pas d’investisseur prévu','SARL','Cadre légal structuré + éventuel statut conjoint collaborateur + SARL de famille à examiner.'],
    ['Levée de fonds ou arrivée future d’investisseurs','SAS','Souplesse statutaire, actions et gouvernance plus adaptées aux mouvements de capital.'],
    ['Plusieurs associés avec droits de vote asymétriques ou veto souhaités','SAS','Les statuts permettent une organisation beaucoup plus fine.'],
    ['Volonté de distribuer fortement des dividendes au dirigeant','SAS à simuler','Pas d’assiette TNS liée aux dividendes du président ; comparer avec coût de rémunération et fiscalité personnelle.'],
    ['Petite société de deux ou trois associés, fonctionnement classique et stable','SARL à simuler','Le cadre légal réduit le besoin de statuts complexes.'],
    ['Revente de titres envisagée à moyen terme','SAS à examiner','Droits d’enregistrement sur actions nettement plus faibles.'],
    ['Besoin de protection sociale proche du salariat pour le dirigeant rémunéré','SAS ou gérance minoritaire/égalitaire de SARL','Assimilé salarié ; comparer coût et couverture.']
  ];

  f.scenarios=[
    {
      title:'Cas A — commerce familial rentable',
      context:'Deux époux exploitent un commerce. L’un détient 70 %, dirige l’entreprise et souhaite environ 45 000 € de revenu annuel. Pas d’investisseur prévu.',
      reasoning:[
        'Le dirigeant serait gérant majoritaire en SARL → régime TNS.',
        'Le coût du revenu doit être simulé avec l’assiette 2026 et comparé à une présidence de SAS.',
        'Le conjoint travaillant dans l’entreprise impose de réfléchir à son statut.',
        'L’absence d’investisseur réduit l’intérêt de la grande souplesse statutaire de la SAS.',
        'Conclusion de travail : SARL à simuler en priorité, sans exclure SAS avant comparaison chiffrée.'
      ]
    },
    {
      title:'Cas B — société de services avec investisseurs futurs',
      context:'Trois fondateurs, répartition 50/30/20. L’associé à 50 % dirige. Ils veulent faire entrer un investisseur dans deux ans et prévoir un droit de veto sur certaines décisions.',
      reasoning:[
        'La future ouverture du capital et les droits de veto orientent fortement vers la SAS.',
        'Il faut rédiger précisément les règles de majorité, agrément, exclusion, préemption et gouvernance.',
        'Le président sera assimilé salarié s’il est rémunéré.',
        'Conclusion de travail : SAS généralement plus adaptée malgré un coût social potentiellement supérieur sur la rémunération.'
      ]
    },
    {
      title:'Cas C — bénéfice élevé, faible besoin de salaire',
      context:'Le dirigeant a déjà d’autres revenus et ne souhaite qu’une faible rémunération. Il envisage de distribuer une partie importante du résultat chaque année.',
      reasoning:[
        'En SARL TNS, le traitement social des dividendes au-delà du seuil doit être intégré.',
        'En SAS, les dividendes sont séparés de la rémunération du mandat sur le plan des cotisations sociales du régime général.',
        'Il faut comparer IS + PFU/barème + protection sociale réellement acquise.',
        'Conclusion de travail : SAS souvent à tester en priorité, mais seulement après simulation globale.'
      ]
    }
  ];

  f.sources=[
    ['Urssaf — protection sociale et statut du dirigeant','https://www.urssaf.fr/accueil/choisir-forme-juridique/creer-societe.html'],
    ['Urssaf — réforme de l’assiette sociale des indépendants 2026','https://www.urssaf.fr/accueil/independant/comprendre-payer-cotisations/reforme-cotisations-independants.html'],
    ['Service-Public — protection sociale du dirigeant, vérifié 25/06/2026','https://entreprendre.service-public.fr/vosdroits/F38152'],
    ['Service-Public — comparatif EURL / SASU, vérifié 21/02/2026','https://entreprendre.service-public.fr/vosdroits/F37777'],
    ['Légifrance — SARL : art. L223-1 à L223-43','https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000005634379/LEGISCTA000006146044/'],
    ['Légifrance — SAS : art. L227-1 à L227-20-1','https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000005634379/LEGISCTA000006146048/'],
    ['BOFiP — option IR temporaire art. 239 bis AB','https://bofip.impots.gouv.fr/bofip/4434-PGP.html/identifiant=BOI-IS-CHAMP-20-20-20-20160601'],
    ['BOFiP — SARL de famille','https://bofip.impots.gouv.fr/bofip/4222-PGP.html/identifiant=BOI-IS-CHAMP-20-20-10-20180704'],
    ['Service-Public — droits d’enregistrement sur cession de titres','https://entreprendre.service-public.fr/vosdroits/F36101'],
    ['Service-Public — commissaire aux comptes','https://entreprendre.service-public.fr/vosdroits/F31440']
  ];

  KB.flashcards.push(
    ['SARL : nombre maximal d’associés ?','100.'],
    ['SARL : libération minimale des apports en numéraire à la constitution ?','20 % (1/5).'],
    ['SAS : libération minimale des apports en numéraire à la constitution ?','50 % (la moitié).'],
    ['Cession de parts de SARL à un tiers : principe ?','Agrément des associés selon les règles légales.'],
    ['Droits d’enregistrement : parts de SARL ?','3 % après abattement de 23 000 € proratisé, hors cas particuliers.'],
    ['Droits d’enregistrement : actions de SAS ?','0,1 % du prix de cession, hors cas particuliers.'],
    ['SARL de famille : intérêt fiscal majeur ?','Possibilité d’un régime IR spécifique et durable sous conditions.'],
    ['Dirigeant majoritaire de SARL : statut social ?','Travailleur indépendant (TNS).']
  );

  KB.qcm.push(
    {q:'Un client veut accueillir plusieurs investisseurs avec droits de veto et règles de sortie sur mesure. Quelle forme mérite d’être étudiée en priorité ?',a:['SARL','SAS','SCI','SNC'],good:1,why:'La SAS permet une organisation statutaire beaucoup plus fine de la gouvernance et des mouvements de titres.'},
    {q:'Un gérant majoritaire de SARL à l’IS reçoit des dividendes importants. Quel contrôle est indispensable ?',a:['Aucun, les dividendes sont toujours hors cotisations','Le seuil social de 10 % et l’assiette TNS','La TVA sur dividendes','La LODEOM'],good:1,why:'La fraction dépassant le seuil social peut entrer dans l’assiette des cotisations du travailleur indépendant.'},
    {q:'Quel élément différencie fortement SARL et SAS lors d’une cession de titres ?',a:['Le taux normal d’IS','Les droits d’enregistrement','La TVA normale','Le taux de CFE'],good:1,why:'Les parts sociales de SARL sont en principe à 3 % après abattement ; les actions de SAS à 0,1 %, hors cas particuliers.'}
  );
})();
