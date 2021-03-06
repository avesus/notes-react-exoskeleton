/**
 * Note View - Edit
 */
var React = require("react");

module.exports = React.createClass({

  // --------------------------------------------------------------------------
  // State
  // --------------------------------------------------------------------------
  getInitialState: function () {
    return {
      title: this.props.note.get("title"),
      text: this.props.note.get("text")
    };
  },

  // --------------------------------------------------------------------------
  // Events
  // --------------------------------------------------------------------------
  updateTitle: function (ev) {
    this.setState({ title: ev.target.value });
  },
  updateText: function (ev) {
    this.setState({ text: ev.target.value });
  },
  saveNote: function () {
    var note = this.props.note;
    note.set({
      title: this.state.title,
      text: this.state.text
    });

    // Manually determine if should save.
    if (note.changedAttributes()) {
      note.save();
    }
  },

  // --------------------------------------------------------------------------
  // Render
  // --------------------------------------------------------------------------
  render: function () {
    return (
      <div>
        <form role="form">
          <div className="form-group">
            <input className="form-control note-edit-title"
                   data-qa-name="note-edit-title"
                   type="text" placeholder="title"
                   onChange={this.updateTitle}
                   onBlur={this.saveNote}
                   value={this.state.title} />
          </div>
          <div className="form-group">
            <textarea className="form-control note-edit-text"
                      rows="15"
                      onChange={this.updateText}
                      onBlur={this.saveNote}
                      value={this.state.text} />
          </div>
        </form>
      </div>
    );
  }
});
