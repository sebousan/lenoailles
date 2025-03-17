---
isPage: true
title: Groups
url: groups
hero:
  surtitle: Brasserie Le Noailles
  title: Groups
  align: center
  image:
    background_image: true
    darken: true
    src: /images/uploads/salle-milieu-vue-bar.jpg
blocks:
  - type: images
    heading:
      surtitle: Capacité
      title: 100 seats in a full restaurant setup
      text: |-
        **Dedicated spaces** in the dining room with an optimal capacity of **72 seats**


        The veranda is reserved for walk-in customers and standard reservations unless the brasserie is fully privatized.
    images:
      - src: /images/uploads/salle-milieu-vue-fenetres.jpg
        half: true
        legend: 'First room: capacity of 44 seats'
      - src: /images/uploads/salle-du-fond.jpg
        half: true
        legend: 'Second room: capacity of 28 seats'

  - type: editorial
    direction: rtl
    surtitle: Virtual Tour
    title: Discover our dining space
    image:
      src: /images/uploads/salle-milieu-vue-basse.jpg
    cta:
      blank: true
      text: Virtual Tour
      url: https://my.matterport.com/show/?m=8ZEgTp2sMqQ

  - type: title
    heading:
      surtitle: Our Menus
      title: At Noailles, we guarantee a flavorful menu.
      text: >-
        In a timeless art deco-inspired setting, our chef offers the classics of a Parisian brasserie alongside regional specialties such as Grenier Médocain, Duck Confit, or the Beautiful 300g Grilled Entrecôte with Bordelaise Sauce…


        Depending on your budget and the season, we’ll suggest the menu best suited to your desires.
  - type: form
    background: true
    offset: center
    grid: medium
    name: form-group
    submit: Send
    heading:
      surtitle: Contact Us
      title: Your Event
      text: Whether it’s a meal with colleagues or friends, or a celebration in a private or professional setting, le Noailles offers the perfect venue for any occasion.
    items:
      - label: Name
        type: text
        required: true
        autocomplete: name
      - label: Company
        type: text
        required: false
        autocomplete: organization
      - label: Phone
        type: tel
        required: true
        autocomplete: tel
      - label: Email
        type: email
        required: true
        autocomplete: email
      - label: Event Type
        type: select
        options:
          - title: Lunch
            value: Lunch
          - title: Diner
            value: Diner
        required: true
        autocomplete: false
      - label: Number of guests (minimum of 15)
        type: number
        required: true
        autocomplete: false
      - label: Budget per person
        type: number
        # hint: Montant TTC en €
        required: true
        autocomplete: false
      - label: Preferred date
        type: date
        required: true
        autocomplete: false
      - label: Message
        type: textarea
        full: true
        required: true
        autocomplete: false
---
