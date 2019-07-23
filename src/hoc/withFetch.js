import Vue from 'vue'

const getAPI = () => ([
  { id: 'one'},
  { id: 'two' },
  { id: 'three' }
])

const withFetch = (component) => {
  return Vue.component('withFetch', {
    render (createElement) {
      return createElement(component, {
        props: {
          items: this.items,
          loading: this.loading
        },
        on: {
          getData: this.getData
        }
      })
    },
    data() {
      return {
        items: getAPI(),
        loading: false
      }
    },
    methods: {
      getData () {
        this.items = getAPI()
      }
    }
  })
}

export default withFetch