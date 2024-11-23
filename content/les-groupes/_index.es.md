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
    src: /images/uploads/salle-du-fond.jpg
blocks:
  - type: images
    heading:
      surtitle: Capacité
      title: 100 places assises en configuration restaurant
      text: |-
        Espaces dédiés dans la salle avec une capacité optimale de **28 places** et de **44 places assises**


        La véranda est réservée à la clientèle de passage et pour les réservations sauf privatisation complète de la Brasserie.
    images:
      - src: /images/uploads/salle-milieu-vue-bar.jpg
        half: true
      - src: /images/uploads/salle-milieu-vue-fenetres.jpg
        half: true

  - type: editorial
    direction: rtl
    surtitle: Visite virtuelle
    title: Découvrir notre salle
    image:
      src: /images/uploads/salle-milieu-vue-basse.jpg
    cta:
      blank: true
      text: Visite virtuelle
      url: https://www.google.com/maps/@44.8432593,-0.5756103,3a,75y,225h,90t/data=!3m8!1e1!3m6!1shbfmQZsDJ8wAAAQvOsqxqw!2e0!3e2!6s%2F%2Fgeo0.ggpht.com%2Fcbk%3Fpanoid%3DhbfmQZsDJ8wAAAQvOsqxqw%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D225.31219%26pitch%3D0!7i13312!8i6656

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
        type: text
        required: true
        autocomplete: name
      - label: Société
        type: text
        required: false
        autocomplete: organization
      - label: Téléphone
        type: tel
        required: true
        autocomplete: tel
      - label: Email
        type: email
        required: true
        autocomplete: email
      - label: Type d’évènement
        type: select
        options:
          - title: Déjeuner
            value: Déjeuner
          - title: Dîner
            value: Dîner
        required: true
        autocomplete: false
      - label: Nombre de convives
        type: number
        required: true
        autocomplete: false
      - label: Budget par personne
        type: number
        hint: Montant TTC en €
        required: true
        autocomplete: false
      - label: Date souhaitée
        type: date
        required: true
        autocomplete: false
      - label: Message
        type: textarea
        full: true
        required: true
        autocomplete: false
---
