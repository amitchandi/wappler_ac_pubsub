// JavaScript Document

dmx.Component('publisher', {
  initialData: {},

  attributes: {},

  render: false,

  methods: {
    trigger: function (name) {
      this._trigger(name);
    }
  },

  events: {
    updated: Event,
  },

  init: function () {

  },

  preformUpdate: function (updatedProps) {

  },

  _trigger: function (props) {
    let customEvent = new CustomEvent(props.name);
    document.dispatchEvent(customEvent);
  },
});
