---
isPage: true
title: Les groupes
hero:
  surtitle: Brasserie Le Noailles
  title: Les groupes
  align: center
  image:
    background_image: true
    darken: true
    src: /images/uploads/salle-milieu-vue-bar.jpg
blocks:
  - type: images
    heading:
      surtitle: Capacité
      title: 100 places assises en configuration restaurant
      text: |-
        Deux espaces dédiés dans la salle avec une capacité totale de **72 places assises**.


        La véranda est réservée à la clientèle de passage et pour les réservations sauf privatisation complète de la Brasserie.
    images:
      - src: /images/uploads/salle-milieu-vue-fenetres.jpg
        half: true
        legend: Première salle avec une capacité de 44 places assises
      - src: /images/uploads/salle-du-fond.jpg
        half: true
        legend: Deuxième salle avec une capacité de 28 places assises

  - type: editorial
    direction: rtl
    surtitle: Visite virtuelle
    title: Découvrir notre salle
    image:
      src: /images/uploads/salle-milieu-vue-basse.jpg
    cta:
      blank: true
      text: Visite virtuelle
      url: https://my.matterport.com/show/?m=8ZEgTp2sMqQ

  - type: title
    heading:
      surtitle: Nos menus
      title: Le Noailles vous garantit une carte haute en saveur.
      text: >-
        Dans un décor aux accents art déco et au cadre intemporel, notre chef vous propose les incontournables de la brasserie parisienne mais aussi des plats régionaux tel que le Grenier Médocain, la Cuisse de Canard Confite ou la Belle Entrecôte 300g et sa sauce Bordelaise…


        En fonction de votre budget et de la période, nous vous proposerons le menu le plus adapté à vos envies.
  - type: form
    background: true
    offset: center
    grid: medium
    name: form-group
    submit: Envoyer
    heading:
      surtitle: Contactez-nous
      title: Votre évènement
      text: Pour profiter d’un repas entre collègues ou amis et célébrer toute occasion aussi bien dans un cadre privé que professionnel, chacun de vos événements trouvera au Noailles un cadre à sa mesure.
    items:
      - label: Nom
        name: nom
        type: text
        required: true
        autocomplete: name
      - label: Société
        name: societe
        type: text
        required: false
        autocomplete: organization
      - label: Téléphone
        name: telephone
        type: tel
        required: true
        autocomplete: tel
      - label: Email
        name: email
        type: email
        required: true
        autocomplete: email
      - label: Type d’évènement
        name: type
        type: select
        options:
          - title: Déjeuner
            value: Déjeuner
          - title: Dîner
            value: Dîner
        required: true
        autocomplete: false
      - label: Nombre de convives (15 minimum)
        name: convives
        type: number
        required: true
        autocomplete: false
      - label: Budget par personne
        name: budget
        type: number
        hint: Montant TTC en €
        required: true
        autocomplete: false
      - label: Date souhaitée
        name: date
        type: date
        required: true
        autocomplete: false
      - label: Message
        name: message
        type: textarea
        full: true
        required: true
        autocomplete: false
---
