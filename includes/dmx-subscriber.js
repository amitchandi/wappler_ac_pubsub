// JavaScript Document

dmx.Component('subscriber', {
    initialData: {
        eventname: ''
    },

    attributes: {
        eventname: {
            type: String,
            default: 'event'
        },
    },

    render: false,
    methods: {},

    events: {
        updated: Event,
        eventtriggered: Event,
    },

    init: function () {
        this.set('eventname', this.props.eventname);
        this.handler = () => this._eventtriggered();
        document.addEventListener(this.props.eventname, this.handler);
        this.dispatchEvent("eventtriggered");
    },

    destroy: function () {
        document.removeEventListener(this.get('eventname'), this.handler);
    },

    preformUpdate: function (updatedProps) {
        if (updatedProps.has('eventname')) {
            this.set('eventname', this.props.eventname);

            dmx.nextTick(function () {
                this.dispatchEvent('updated');
            }, this);
        }
    },

    _eventtriggered: function () {
        this.dispatchEvent("eventtriggered");
    },
});
