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
    this.set('customevents', this.props.customevents);
  },

  preformUpdate: function (updatedProps) {
    if (updatedProps.has('customevents')) {
      this.set('customevents', this.props.customevents);
      dmx.nextTick(function () {
        this.dispatchEvent('updated');
      }, this);
    }
  },

  _trigger: function (props) {
    let customEvent = new CustomEvent(props.name);
    document.dispatchEvent(customEvent);
  },
});
