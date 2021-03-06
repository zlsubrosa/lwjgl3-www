import React from 'react'
import { connect } from 'react-redux'
import { configDownload, configLoad } from '../actions'

import FaFloppy from '../../../../icons/floppy-o'
import FaFolderOpen from '../../../../icons/folder-open-o'

@connect(
  ({breakpoint}) => ({
    breakpoint
  }),
  {
    configDownload,
    configLoad
  }
)
class BuildToolbar extends React.Component {

  state = {
    fileUI: false,
  };

  toggleFileUI = () => {
    this.setState({fileUI: !this.state.fileUI});
  };

  handleFile = (e) => {
    const files = e.target.files;

    if ( files.length !== 1 ) {
      alert('Please select a configuration JSON file.');
      return;
    }

    let reader = new FileReader();
    reader.onload = (event) => {
      try {
        this.props.configLoad(JSON.parse(event.target.result));
        this.setState({fileUI: false});
      } catch(ignore) {
        alert('File does not contain a valid LWJGL configuration.');
      }
    };
    reader.readAsText(files[0]);
  };

  render() {

    if ( this.state.fileUI ) {
      return (
        <div className="download-toolbar file">
          <label className="custom-file">
            <input type="file" className="custom-file-input" accept=".json" onChange={this.handleFile} />
            <span className="custom-file-control" />
          </label>
          <button className="btn btn-primary" onClick={this.toggleFileUI}>
            Cancel
          </button>
        </div>
      );
    }

    const {configDownload} = this.props;
    const {current, sm} = this.props.breakpoint;
    const showLabels = current > sm;

    return (
      <div className="download-toolbar">
        {this.props.children}
        <button className="btn btn-outline-info" title="Load configuration file (JSON)" onClick={this.toggleFileUI}>
          <FaFolderOpen />{showLabels ? ` Load config` : null}
        </button>
        <button className="btn btn-outline-info" title="Save configuration (in JSON)" onClick={configDownload}>
          <FaFloppy />{showLabels ? ` Save config` : null}
        </button>
      </div>
    )
  }

}

export default BuildToolbar
