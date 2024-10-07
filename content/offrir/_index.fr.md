---
isPage: true
title: Offrir un repas
hero:
  surtitle: Brasserie Le Noailles
  title: Offrir un repas
  align: center
  image:
    background_image: true
    darken: true
    src: /images/uploads/IMGP0023.jpg
blocks:
  - type: editorial
    title: Offrez un repas au Noailles
    text: >-
      Un cadeau de fin d'année, un cadeau d'anniversaire, un cadeau pour fêter
      un évènement particulier…



      Vous choisissez selon votre budget parmi l’ensemble des plats que nous proposons à [la carte](/la-carte/).
    cta:
      url: '#form-1'
      text: Nous écrire
    image:
      src: /images/uploads/IMG_7199.jpg
    direction: ltr
  - type: testimonials
    layout: carousel
    carousel:
      params:
        pagination: false
        autoplay: true
        arrows: true
        type: loop
        gap: 1.5rem
        perPage: 3
        perMove: 1
        padding: 4rem
      responsive:
        - breakpoints: 640
          params:
            pagination: false
            perPage: 2
    background: false
    items:
      - author:
          image:
            linear: false
          title: Laure Bordeaux
        quote: >-
          Endroit que je recommande pour son service ( de vrais serveurs en
          habit), sa bonne cuisine.


          Cuisine: 5/5 


          Service: 5/5


          Ambiance: 4/5
      - author:
          image:
            linear: false
          title: Marie-Hélène Giraud
        quote: >-
          L’accueil, le décor, le poids de l’histoire qui se dégage, l’ambiance
          chaleureuse, la simplicité chic et l’excellente cuisine font du
          Noailles une brasserie incontournable de Bordeaux ! Merci à toute
          l’equipe.


          Cuisine: 5/5


          Service: 5/5


          Ambiance: 5/5
      - author:
          title: Jacques GUICHARD
        quote: >-
          L’idée même de la brasserie. Grande salle aux tables rapprochées. Service rapide et professionnel. Plats classiques bien exécutés.


          Cuisine: 5/5


          Service: 5/5


          Ambiance: 4/5
      - author:
          title: G.A
        quote: >-
          J’adore cette brasserie. Très sympa. Service efficace. Cuisine excellente.
      - author:
          title: Viator-helveticus
        quote: >-
          L’idée même de la brasserie. Grande salle aux tables rapprochées. Service rapide et professionnel. Plats classiques bien exécutés.
  - type: form
    background: true
    offset: center
    grid: medium
    name: form-offer
    submit: Envoyer
    heading:
      title: Envoyez-nous un message
    items:
      - label: Nom
        type: text
        required: true
        autocomplete: name
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
