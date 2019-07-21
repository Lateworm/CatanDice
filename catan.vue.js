const app = new Vue({
  el: '#vue',

  data: {
    die: [1, 2, 3, 4, 5, 6],
    deck: [],
    roll: [0, 0],
  },

  methods: {
    buildDeck: function() {
      this.die.forEach(roll1 => {
        this.die.forEach(roll2 => {
          this.deck.push([roll1, roll2])
        })
      })
    },

    draw: function() {
      this.roll = this.deck.splice((Math.floor(Math.random() * this.deck.length)), 1)[0]
      if (this.deck.length === 0) {this.buildDeck()}
    },
  },

  created: function () {
    this.buildDeck();
  }
})
