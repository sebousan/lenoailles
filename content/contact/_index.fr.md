---
isPage: true
title: Contact
hero:
  surtitle: Brasserie Le Noailles
  title: Contact
  align: center
  image:
    background_image: true
    darken: true
    src: /images/uploads/IMG_7865.jpg
blocks:
  - type: editorial
    surtitle: Horaires d'ouverture
    title: Ouvert tous les jours
    image:
      src: /images/uploads/IMGP9371.jpg
    text: |-
      Du lundi au dimanche de 12h00 à 15h00 et de 19h00 à 23h00.


      Téléphone : +33 (0) 5 56 81 94 45
    ctas:
      - blank: true
        text: Réservation en ligne
        url: https://bookings.zenchef.com/results?rid=376082&pid=1001
    direction: ltr
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
  - type: map
    background: false
    location: '{"type":"Point","coordinates":[-0.575624,44.8432406]}'
    zoom: 17
    heading:
      surtitle: Au cœur du triangle d’or
      title: 12 Allée de Tourny, 33000 Bordeaux
    grid: full
  - type: informations
    items:
      - title: Parking à proximité
        text: Urbis Park Tourny, allée de Tourny
        icon: car-front
      - title: Tramway
        text: B, C et D, arrêt Quinconces
        icon: train-lightrail-front
    column: 2
  - type: editorial
    direction: ltr
    surtitle: 100 places assises
    title: Réservation pour les groupes
    image:
      src: /images/uploads/salle-milieu-vue-bar.jpg
    cta:
      text: En savoir plus
      url: /les-groupes/
  - type: form
    background: true
    offset: center
    grid: medium
    name: form-offer
    submit: Envoyer
    heading:
      surtitle: Contactez-nous
      title: Envoyez-nous un message
    items:
      - label: Nom
        type: text
        required: true
        autocomplete: name
        full: true
      - label: Téléphone
        type: tel
        required: true
        autocomplete: tel
      - label: Email
        type: email
        required: true
        autocomplete: email
      - label: Message
        type: textarea
        full: true
        required: true
        autocomplete: false
---
